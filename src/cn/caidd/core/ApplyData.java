package cn.caidd.core;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

import cn.caidd.constele.TxnCodeConst;
import cn.caidd.log.Log;

public class ApplyData {
	/** static userid to make sure each apply contains cuserid as parameter */
	public static String userid = "";
	/**
	 * query products from front end. the request jsonString is the same as web
	 * apply.
	 * 
	 * @param jsonString
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	public static String applyProductsList(String jsonString) throws ClientProtocolException, IOException {
		return applyDataFromServer(TxnCodeConst.getURL(TxnCodeConst.PORTAL_URL), jsonString);
	}

	/**
	 * user login apply
	 * 
	 * @param jsonString
	 * @return
	 */
	public static String applyLogin(String jsonString) {
		String priString = new JsonParser().parse(jsonString).getAsString();
		String userid = new JsonParser().parse(priString).getAsJsonObject().get("loginid").getAsString();
		ApplyData.userid = userid;
		return applyDataFromServer(TxnCodeConst.getURL(TxnCodeConst.LOGIN_URL), jsonString);
	}

	/**
	 * customer apply one order, which includes name, amount, phone number,
	 * address[optional],valid code.
	 * 
	 * @param jsonString
	 * @return
	 */
	public static String applyOrder(String jsonString) {
		return applyDataFromServer(TxnCodeConst.getURL(TxnCodeConst.ORDER_URL), jsonString);
	}

	/**
	 * customer apply one order, which includes name, amount, phone number,
	 * address[optional],valid code.
	 * 
	 * @param jsonString
	 * @return
	 */
	public static String applyOrderDetail(String jsonString) {
		return applyDataFromServer(TxnCodeConst.getURL(TxnCodeConst.ORDER_DETAIL_URL), jsonString);
	}

	/**
	 * customer apply one order, which includes name, amount, phone number,
	 * address[optional],valid code.
	 * 
	 * @param jsonString
	 * @return
	 */
	public static String applychkIsOrg(String jsonString) {
		return applyDataFromServer(TxnCodeConst.getURL(TxnCodeConst.CHK_IS_ORG), jsonString);
	}

	/**
	 * get verify code from server to make sure it's the same source compared
	 * with apply.
	 * 
	 * @return
	 */
	public static String applyVCodeUrl() {
		return TxnCodeConst.getVCodeUrl();
	}

	/**
	 * apply data from server.
	 * 
	 * @param url
	 *            baseurl+serviceid
	 * @param reqJSONString
	 *            apply json String
	 * @return
	 */
	private static String applyDataFromServer(String url, String reqJSONString) {
		JsonElement ele = new JsonParser().parse(reqJSONString);
		String src = ele.getAsString();
		NameValuePair jsonParam = new BasicNameValuePair("reqStr", src);

		List<NameValuePair> pairList = new ArrayList<NameValuePair>();
		pairList.add(jsonParam);

		try {
			HttpEntity requestHttpEntity = new UrlEncodedFormEntity(pairList);
			Log.log(url);
			// URL使用基本URL即可，其中不需要加参数
			HttpPost httpPost = new HttpPost(url);
			// 将请求体内容加入请求中
			httpPost.setEntity(requestHttpEntity);
			// 需要客户端对象来发送请求
			HttpClient httpClient = new DefaultHttpClient();
			// 发送请求
			HttpResponse response = httpClient.execute(httpPost);
			// 显示响应
			return treatResponse(response);
		} catch (Exception e) {
			Log.log(e);
		}

		return "";
	}

	/**
	 * 处理服务器返回的结果
	 * 
	 * @param response
	 */
	private static String treatResponse(HttpResponse response) {
		if (null == response) {
			return "";
		}

		HttpEntity httpEntity = response.getEntity();
		try {
			InputStream inputStream = httpEntity.getContent();
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
			StringBuffer bf = new StringBuffer();
			String line = null;
			while (null != (line = reader.readLine())) {
				bf.append(line);
			}
			Log.log(bf.toString());
			return bf.toString();
		} catch (Exception e) {
			Log.log(e);
		}

		return "";
	}
}
