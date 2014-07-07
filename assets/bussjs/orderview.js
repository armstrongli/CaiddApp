var orderid = "";
$(document).ready(function() {
	var params = commonFunction.urlparam();
	orderid = params["orderId"];

	$("#orderid").val(orderid);
	initOrderView(orderid);
	// $('body').scrollspy({ target: '.navbar-example' })
});
$(window).scroll(function() {
	return;
	var topPos = document.getElementById('order_title_info').getBoundingClientRect().top;
	var conT = document.getElementById('cont').getBoundingClientRect().top;
	if (topPos <= 0) {
		$("#order_title_info").addClass('order_title_info');
	}
	if (conT > 0) {
		$("#order_title_info").removeClass('order_title_info');
	}
});

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
	/** 上传打款凭证、合同文件 */
	showProcess();
	$("#" + formid).ajaxSubmit({
		url : "uploadFile.action",
		type : "post",
		datatype:"text",
		success : function(data) {
			if ($.evalJSON(data).fileId !== "") {
				hideProcess();
				$("#" + fileid).attr("fileid",$.evalJSON(data).fileId);
			}
		}
	});
}

function commitOrder2Real(isChecked) {
	var ordermoney = $("#order_money").val();
	var realname = $("#real_name").val();
	var realmoney = $("#real_money").val();
	var fileids = new Array();
	$("[fileid]").each(function(i, o) {
		fileids.push($(this).attr("fileid"));
	});

	if (isChecked && isChecked == "1") {
		order2real(orderid, realname, realmoney, fileids);
	}

	var isOK = true;
	// 验证必录项，确保录入的内容的完整性
	$("[notnull]").each(function(i, o) {
		var $obj = $(this);
		var $objval = $obj.val();
		if ($objval == null || $objval.length == 0) {
			alert($obj.attr("placeholder"));
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
			alert("请录入数字");
			$obj.focus();
			isOK = false;
			return isOK;
		}
	});
	if (!isOK) {
		return;
	}

	if (fileids.length == 0) {
		isOK = false;
		alertMsg("请至少上传一张打款凭证文件");
	}

	if (!isOK) {
		return;
	}

	if (parseInt(ordermoney) != parseInt(realmoney)) {
		alertMsg("请注意，预约金额与打款金额不同！", "commitOrder2Real('1')");
	} else {
		order2real(orderid, realname, realmoney, fileids);
	}
}

function cancelOrder() {
	cancel1Order(orderid);
}

function chgCompactAddr(){
	$("#compactAddr").attr("readonly",false);
	$("#chgCompactAddrBtn").html("确定");
	$("#chgCompactAddrBtn").attr("onclick","updCompactAddr()");
}
function updCompactAddr(){
	showProcess();
	$("#chgCompactAddrBtn").html("修改");
	$("#chgCompactAddrBtn").attr("onclick","chgCompactAddr()");
	$("#compactAddr").attr("readonly",true);
	var obj = new Object();
	obj.orderid = orderid;
	obj.compactaddr = $("#compactAddr").val();
	$.post(
		"dispatch.action",
		{serviceId:"0068",reqStr:$.toJSON(obj)},
		function(data){
			if(data.resp.status != "0000"){
				alertMsg("合同地址修改失败！");
			}
			hideProcess();
		}
	);
}