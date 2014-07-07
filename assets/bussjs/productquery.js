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

	query(1);
});

function navClickPre(o) {
	var pagenum = parseInt($(o).attr("nav"));
	query(pagenum);
}

function navClickNex(o) {
	var pagenum = parseInt($(o).attr("nav"));
	query(pagenum);
}

function btnclick(o) {
	var val = $(o).attr("value");
	var name = $(o).attr("name");
	if(val === "" && name === "date15"){
		return;
	}
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
	query(1);
}

function query(pagenum) {
	var pro_life_code = $('#pro_life_code').val();
	var pro_status = $('#pro_status').val();
	var min_buy_code = $('#min_buy_code').val();
	var bouns_rate = $('#bouns_rate').val();
	var product_name = $("#product_name").val();
	var issue_date_start = $("#issue_date_start").val();
	var issue_date_end = $("#issue_date_end").val();
	var product_type = $("#product_type").val();
	var earn_type = $("#earn_type").val();
	var bonus_times = $("#bonus_times").val();
	var issue_company = $("#issue_company").val();
	var project_type = $("#project_type").val();
	if(issue_date_end != "" && issue_date_start != "" && (issue_date_end.replace(/\-/g,"") < issue_date_start.replace(/\-/g,""))){
		 $("#issue_date_end").val("");
		alertMsg("结束时间不可大于开始时间");
		return;
	}
	queryProducts(product_name, pro_life_code, pro_status, min_buy_code, bouns_rate, issue_date_start, issue_date_end,
			product_type, pagenum, earn_type, bonus_times, issue_company, project_type);

}

function doAppoint(id, pid) {
	if (pid == null || pid.length == 0) {
		// 增加校验规则，如果是原来的onclick方法，则返回。如果是专门定制的针对产品查询页面直接预约的，才会进入后边的处理。
		return;
	}
	var isLogin = commonFunction.chkLogin();
	loginfree=true;
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
