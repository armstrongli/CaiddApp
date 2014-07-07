package cn.caidd.portal;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;

import cn.caidd.core.ApplyData;
import cn.caidd.log.Log;

public class ApplyReqResp {

	public String applyProductsList(String reqJson) {
		String respJson = "";
		try {
			Log.log("Begin applying applyProductsList, request json string is: " + reqJson);
			respJson = ApplyData.applyProductsList(reqJson);
			Log.log("End applying applyProductsList, response json string is: " + respJson);
		} catch (ClientProtocolException e) {
			Log.log(e);
		} catch (IOException e) {
			Log.log(e);
		}
		return respJson;
	}

	public String applyLogin(String reqJson) throws IOException {
		String respJson = "";
		Log.log("Begin applying applyLogin, request json string is: " + reqJson);
		respJson = ApplyData.applyLogin((reqJson));
		Log.log("End applying applyLogin, response json string is: " + respJson);
		return respJson;
	}

	public String applyOrder(String reqJson) throws ClientProtocolException {
		String respJson = "";
		Log.log("Begin applying applyOrder, request json string is: " + reqJson);
		respJson = ApplyData.applyOrder(reqJson);
		Log.log("End applying applyOrder, response json string is: " + respJson);
		return respJson;
	}

	public String applyOrderDetail(String reqJson) {
		String respJson = "";
		Log.log("Begin applying applyOrderDetail, request json string is: " + reqJson);
		respJson = ApplyData.applyOrderDetail(reqJson);
		Log.log("End applying applyOrderDetail, response json string is: " + respJson);
		return respJson;
	}

	public String applychkIsOrg(String reqJson) {
		String respJson = "";
		Log.log("Begin applying applychkIsOrg, request json string is: " + reqJson);
		respJson = ApplyData.applychkIsOrg(reqJson);
		Log.log("End applying applychkIsOrg, response json string is: " + respJson);
		return respJson;
	}

	public String applyVCodeUrl() {
		String vcodeurl = "";
		Log.log("Begin applying applyVCodeUrl, request json string is: ");
		vcodeurl = ApplyData.applyVCodeUrl();
		Log.log("End applying applyVCodeUrl, response json string is: " + vcodeurl);
		return vcodeurl;
	}

	/**
	 * log from front end. with javascript
	 * 
	 * @param msg
	 */
	public void log(String msg) {
		Log.log("Log in javascript:\n" + msg);
	}
}
