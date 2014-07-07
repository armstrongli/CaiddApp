$(document).ready(function() {
	$('input[calendar]').datepicker({
		format : "yyyy-mm-dd",
		weekStart : 7,
		todayBtn : true,
		language : "zh-CN",
		todayHighlight : true
	});
	/* 加载验证码 */
	$("#chkordercodeverify").click(function() {
		$(this).attr("src", "chkcodeAction.action");
	});

	queryCollectProduct(1);
});

function navClickPre(o) {
	var pagenum = parseInt($(o).attr("nav"));
	queryCollectProduct(pagenum);
}

function navClickNex(o) {
	var pagenum = parseInt($(o).attr("nav"));
	queryCollectProduct(pagenum);
}

function btnclick(o) {
	var val = $(o).attr("value");
	var name = $(o).attr("name");
	$("#" + name).val(val);
	$("[name='" + name + "']").each(function(idx, idxo) {
		if ($(idxo).attr("value") == $(o).attr("value")) {
			$(idxo).removeClass("btn-default");
			$(idxo).addClass("btn-warning");
		} else {
			$(idxo).removeClass("btn-warning");
			$(idxo).addClass("btn-default");
		}
	});
}

function queryCollectProduct(pagenum) {
	var product_name = $("#product_name").val();
	var pro_sell = $("#pro_sell").val();
	var pro_status = $("#pro_status").val();
	var min_buy_code = $("#min_buy_code").val();
	var bouns_rate = $("#bouns_rate").val();
	var issue_date_start = $("#issue_date_start").val();
	var issue_date_end = $("#issue_date_end").val();

	queryCollectProducts(product_name, pro_sell, pro_status, min_buy_code,
			bouns_rate, issue_date_start, issue_date_end, pagenum);
}

function doAppoint(id, pid) {
	if (pid == null || pid.length == 0) {
		// 增加校验规则，如果是原来的onclick方法，则返回。如果是专门定制的针对产品查询页面直接预约的，才会进入后边的处理。
		return;
	}
	var isLogin = commonFunction.chkLogin();
	if (!isLogin && !loginfree) {
		userlogin4order();
		return;
	} else {
		var productid = pid;
		$("#d_product_id").val(productid);
		$('#' + id).modal({
			backdrop : false
		});
	}

}