package cn.caidd.constele;

import java.util.HashMap;
import java.util.Map;

import cn.caidd.core.ApplyData;

public class TxnCodeConst {
	public static Map<String, String> URL_MAPS = new HashMap<String, String>();
	public static Map<String, String> PAGE_URL_MAPS = new HashMap<String, String>();
	public static final String BASE_HREF_URL = "http://192.168.13.80:8081";
	public static final String BASE_PAGE_URL = "file:///android_asset";

	/** 基本URL */
	public static final String BASE_URL = "BASE_URL";
	/** 主页URL，显示产品清单 */
	public static final String PORTAL_URL = "PORTAL_URL";
	/** 登录 */
	public static final String LOGIN_URL = "LOGIN_URL";
	/** 产品明细 */
	public static final String DETAIL_URL = "DETAIL_URL";
	/** 预约订单 */
	public static final String ORDER_URL = "ORDER_URL";
	/** 订单明细 */
	public static final String ORDER_DETAIL_URL = "ORDER_DETAIL_URL";
	/** 收藏 */
	public static final String COLLECT_URL = "COLLECT_URL";
	/** 我的收藏 */
	public static final String COLLECT_SHOW_URL = "COLLECT_SHOW_URL";
	/** check whether is ORG */
	public static final String CHK_IS_ORG = "CHK_IS_ORG";

	public static final String V_CODE_URL = "V_CODE_URL";

	public static void initMaps() {
		if (URL_MAPS == null || URL_MAPS.isEmpty()) {
			URL_MAPS.put(BASE_URL, BASE_HREF_URL + "/index/dispatch.action");
			URL_MAPS.put(V_CODE_URL, BASE_HREF_URL + "/user/chkcodeAction.action");
			URL_MAPS.put(PORTAL_URL, "?serviceId=0007&from=android");
			URL_MAPS.put(LOGIN_URL, "?serviceId=0002&from=android");
			URL_MAPS.put(DETAIL_URL, "?serviceId=0010&from=android");
			URL_MAPS.put(ORDER_URL, "?serviceId=0009&from=android");
			URL_MAPS.put(ORDER_DETAIL_URL, "?serviceId=0020&from=android");
			URL_MAPS.put(COLLECT_URL, "?serviceId=0017&from=android");
			URL_MAPS.put(COLLECT_SHOW_URL, "?serviceId=0018&from=android");
			URL_MAPS.put(CHK_IS_ORG, "?serviceId=0087&from=android");
		}
		if (PAGE_URL_MAPS == null || PAGE_URL_MAPS.isEmpty()) {
			PAGE_URL_MAPS.put(PORTAL_URL, "/productquery.html");
			PAGE_URL_MAPS.put(LOGIN_URL, "/login.html");
			PAGE_URL_MAPS.put(DETAIL_URL, "/productdetail.html");
			PAGE_URL_MAPS.put(ORDER_URL, "/order.html");
			PAGE_URL_MAPS.put(ORDER_DETAIL_URL, "/orderdetail.html");
			PAGE_URL_MAPS.put(COLLECT_URL, "/collect.html");
			PAGE_URL_MAPS.put(COLLECT_SHOW_URL, "/collectdetail.html");
		}
	}

	private static String coUrlOfUserId() {
		return "&userid=" + ApplyData.userid;
	}

	public static String getVCodeUrl() {
		initMaps();
		return URL_MAPS.get(V_CODE_URL);
	}

	public static String getURL(String key) {
		initMaps();
		return URL_MAPS.get(BASE_URL) + URL_MAPS.get(key) + coUrlOfUserId();
	}

	public static String getPageUrl(String urlName) {
		initMaps();
		return BASE_PAGE_URL + PAGE_URL_MAPS.get(urlName);
	}
}
