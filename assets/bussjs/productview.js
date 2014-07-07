var productid = "";
$(document).ready(function() {
	var params = commonFunction.urlparam();
	productid = params["product_id"];
	productid = productid.substring(0, 15);

	$("#product_id").val(productid);

	initProduct2view(productid);

	/* 加载验证码 */
	$("#orderverfify").click(function() {
		$(this).attr("src", "chkcodeAction.action");
	});

	/* 加载问问看 */
	$("#question_product_id").val(productid);
	$("#questioncodeverify").click(function() {
		$(this).attr("src", "chkcodeAction.action");
	});
});

function collectnew() {
	docollect(productid);
}

function favorThis() {
	favorProduct(productid);
}

function doAppoint(id, pid) {
	var isLogin = commonFunction.chkLogin();
	loginfree = true;
	if (!isLogin && !loginfree) {
		userlogin4order();
		return;
	} else {
		$('#' + id).modal({
			backdrop : false
		});
	}
}

function doappointinview() {
	/*
	 * if (!commonFunction.chkCode($("#chkordercode").val())) {
	 * alertMsg("输入的验证码不正确!"); $("#orderverfify").click(); return; }
	 */
	if (!commonFunction.validPhoneCode($("#phone_code").val(), $("#phone_num").val())) {
		alertMsg("输入的手机动态码不正确!");
		return;
	}
	var isLogin = commonFunction.chkLogin();
	loginfree = true;
	if (isLogin || loginfree) {
		commitOrder();
	} else {
		userlogin4order();
	}
}