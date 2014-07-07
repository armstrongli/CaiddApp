package cn.caidd.portal;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import cn.caidd.caiddapp.R;
import cn.caidd.constele.TxnCodeConst;

public class Portal extends Activity {
	WebView portalWebView;

	@SuppressLint("SetJavaScriptEnabled")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.mainview);

		portalWebView = (WebView) findViewById(R.id.mainweb);
		WebSettings webSettings = portalWebView.getSettings();
		webSettings.setJavaScriptEnabled(true);
		webSettings.setBlockNetworkImage(false);

		portalWebView.setWebViewClient(new WebViewClient() {
			@Override
			public boolean shouldOverrideUrlLoading(WebView view, String url) {
				view.loadUrl(url); // 在当前的webview中跳转到新的url
				return true;
			}
		});
		// register javascript interface for calling in web page.
		portalWebView.addJavascriptInterface(new ApplyReqResp(), "ApplyReqResp");
		portalWebView.addJavascriptInterface(new Object() {
			@SuppressWarnings("unused")
			public void loadPortal() {
				loadUrl(TxnCodeConst.getPageUrl(TxnCodeConst.PORTAL_URL));
			}

			@SuppressWarnings("unused")
			public void loadLogin() {
				loadUrl(TxnCodeConst.getPageUrl(TxnCodeConst.LOGIN_URL));
			}

			@SuppressWarnings("unused")
			public void loadProductDetail() {
				loadUrl(TxnCodeConst.getPageUrl(TxnCodeConst.DETAIL_URL));
			}

			@SuppressWarnings("unused")
			public void loadOrder() {
				loadUrl(TxnCodeConst.getPageUrl(TxnCodeConst.ORDER_URL));
			}

			@SuppressWarnings("unused")
			public void loadOrderDetail() {
				loadUrl(TxnCodeConst.getPageUrl(TxnCodeConst.ORDER_DETAIL_URL));
			}

			@SuppressWarnings("unused")
			public void loadCollect() {
				loadUrl(TxnCodeConst.getPageUrl(TxnCodeConst.COLLECT_URL));
			}

			@SuppressWarnings("unused")
			public void loadCollectDetail() {
				loadUrl(TxnCodeConst.getPageUrl(TxnCodeConst.COLLECT_SHOW_URL));
			}
		}, "GoTo");

		portalWebView.loadUrl("file:///android_asset/test.html");

	}

	private void loadUrl(final String localfileurl) {
		portalWebView.post(new Runnable() {
			@Override
			public void run() {
				portalWebView.loadUrl(localfileurl);
			}
		});
	}
}
