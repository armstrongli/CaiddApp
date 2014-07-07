/**
 * 该js文件为产品录入界面的详细控制规则<br>
 * 包含了所有的载入的信息<br>
 * 该JS文件建立在jquery之上，以及products.js文件之上。
 */
$(document).ready(function() {
	$('input[calendar]').datepicker({
		format : "yyyy-mm-dd",
		weekStart : 7,
		todayBtn : true,
		language : "zh-CN",
		todayHighlight : true
	});

	$("input[type='text'],textarea").each(function(i, o) {
		$(this).blur(function() {
			if ($("[mockmsg]").length > 0 || $(".datepicker-days").length > 0) {
				return;
			}
			valid(this);
		});
	});

	// 验证是否实名认证
	var truenameornot = commonFunction.chkTrueValid();
	if (!truenameornot) {
		loadVeryUrl("/workplace/personcenter.html");
		return;
	}

	// 获取产品编号并初始化
	var params = commonFunction.urlparam();
	var t_product_id = params["product_id"];
	if (t_product_id == null || t_product_id.length == 0) {
		return;
	}
	t_product_id = t_product_id.substring(0, 15);
	initProduct2editable(t_product_id);
});

function valid(o) {
	// 验证必录项，确保录入的内容的完整性
	var $o = $(o);
	var $objval = $o.val();
	if ($o.attr("notnull")) {
		if ($objval == null || $objval.length == 0) {
			alertMsg($o.attr("placeholder"));
			return;
		}
	}
	if ($o.attr("number")) {
		if (!commonFunction.isNumber($objval)) {
			alertMsg($o.attr("placeholder") + "（数字）");
			return;
		}
	}

}

function commitNewProduct() {
	var istruename = commonFunction.chkTrueValid();
	if (!istruename) {
		return;
	}
	var isOK = true;
	// 验证必录项，确保录入的内容的完整性
	$("[notnull]").each(function(i, o) {
		var $obj = $(this);
		var $objval = $obj.val();
		if ($objval == null || $objval.length == 0) {
			alertMsg($obj.attr("placeholder"));
			$obj.focus();
			isOK = false;
			return isOK;
		}
	});
	if (!isOK) {
		return;
	}
	// 验证必须录入数字的项，确保都是数字
	$("[number]").each(function(i, o) {
		var $obj = $(this);
		var $objval = $obj.val();
		if (!commonFunction.isNumber($objval)) {
			alertMsg($obj.attr("placeholder") + "（数字）");
			$obj.focus();
			isOK = false;
			return isOK;
		}
	});

	if (!isOK) {
		return;
	}

	isOK = validselldate();
	if (!isOK) {
		alertMsg("请调整产品起售日、产品结售日。");
		return;
	}

	if (isOK) {
		showProcess();
		commitProductEdit();
	}
}

function validselldate() {
	var $pro_sell_start = $("#pro_sell_start").val();
	var $pro_sell_end = $("#pro_sell_end").val();
	return $pro_sell_start <= $pro_sell_end;
}

function change_pro_status(o) {
	var $o = $(o);
	$("#id_btn_pro_status").html($o.html() + "<span class=\"caret\"></span>");
	$("#pro_status").val($o.attr("value"));
}

function change_product_type(o) {
	var $o = $(o);
	$("#id_btn_product_type").html($o.html() + "<span class=\"caret\"></span>");
	$("#product_type").val($o.attr("value"));
}

function change_project_type(o) {
	var $o = $(o);
	$("#id_btn_project_type").html($o.html() + "<span class=\"caret\"></span>");
	$("#project_type").val($o.attr("value"));
}

/**
 * 设置收益类型
 * 
 * @param o
 */
function change_earn_type(o) {
	var $o = $(o);
	$("#id_earn_type").html($o.html() + "<span class=\"caret\"></span>");
	$("#earn_type").val($o.attr("value"));
}

/**
 * 设置付息方式
 * 
 * @param o
 */
function change_bonus_times(o) {
	var $o = $(o);
	$("#id_bonus_times").html($o.html() + "<span class=\"caret\"></span>");
	$("#bonus_times").val($o.attr("value"));
}

/**
 * 添加产品费率
 */
function add_product_rate() {
	var curridx = $("#productrates").attr("idx");
	var nextIdx = parseInt(curridx) + 1;
	var item = "<tr idx='"
			+ nextIdx
			+ "'>" //
			+ "<td>"//
			+ "<input rate_min class=\"form-control\" notnull number type=\"text\" placeholder=\"请输入金额区间（单位：元）\">"
			+ "<input type=\"hidden\" ratecode value=\"\">"
			+ "</td>"//
			+ "<td><input rate_max class=\"form-control\" notnull number type=\"text\" placeholder=\"请输入金额区间（单位：元）\"></td>"
			+ "<td><div class=\"input-group\"><input rate_bonus class=\"form-control\" type=\"text\" notnull number placeholder=\"请输入收益率（以小数为准，例如：0.08表示收益率为8%）\"><span class=\"input-group-addon\" onclick='javascript:remove_product_rate("
			+ nextIdx + ");'><label>-</label></span></div></td></tr>";
	$("#productrates").append(item);
	$("#productrates").attr("idx", nextIdx);
}

function remove_product_rate(idx) {
	$("tr[idx='" + idx + "']").remove();
}

function add_product_file() {
	var curridx = $("#productfiles").attr("fileindex");
	var nextIdx = parseInt(curridx) + 1;
	var fileitem = "<li class=\"list-group-item\" fileindex=\"" + nextIdx + "\">" //
			+ "<form id=\"formid_" + nextIdx + "\" method=\"post\" action=\"uploadFile.action\" formidx=\"" + nextIdx
			+ "\">" //
			+ "<div class=\"input-group\">" //
			+ "<input type=\"hidden\" id='fileid_" + nextIdx + "' name='attachments' fileid value=\"\">" //
			+ "<input type=\"file\" name=\"file\" onchange=\"javascript:commitFile('" + nextIdx
			+ "');\" class=\"form-control\">" //
			+ "<span class=\"input-group-addon\" onclick=\"javascript:remove_product_file(" + nextIdx
			+ ");resetOrderWaterHeight();\">删除</span>" //
			+ "</div>" //
			+ "</form>" //
			+ "</li>"; //
	$("#productfiles").append(fileitem);
	$("#productfiles").attr("fileindex", nextIdx);
}

function remove_product_file(fileindex) {
	$("li[fileindex='" + fileindex + "']").remove();
}

function commitFile(formidx) {
	var formid = "formid_" + formidx;
	var fileid = "fileid_" + formidx;
	showProcess();
	/** 上传产品文件 */
	$("#" + formid).ajaxSubmit({
		url : "uploadFile.action",
		type : "post",
		datatype:"text",
		success : function(data) {
			hideProcess();
			if ($.evalJSON(data).fileId !== "") {
				$("#" + fileid).attr("fileid", $.evalJSON(data).fileId);
			}
		}
	});
}