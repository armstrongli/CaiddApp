var commonFunction = {
	chkUserid : function(userid){
		var flag = false;
		if(/^[a-zA-Z0-9]*/.test(userid)){
			flag = true;
		}
		return flag;
	},
	chkPwd : function(pwd){
		var pwdlvl = "";
		if(pwd.length < 6 || pwd.length > 15){
			pwdlvl = "密码长度不符合要求!";
			return pwdlvl;
		}
		if(/[a-zA-Z]+/.test(pwd) && /[0-9]+/.test(pwd) && /\W+\D+/.test(pwd)) {
			pwdlvl = "强";
        }else if(/[a-zA-Z]+/.test(pwd) || /[0-9]+/.test(pwd) || /\W+\D+/.test(pwd)) {
            if(/[a-zA-Z]+/.test(pwd) && /[0-9]+/.test(pwd)) {
            	pwdlvl = "中";
            }else if(/\[a-zA-Z]+/.test(pwd) && /\W+\D+/.test(pwd)) {
            	pwdlvl = "中";
            }else if(/[0-9]+/.test(pwd) && /\W+\D+/.test(pwd)) {
            	pwdlvl = "中";
            }else{
            	pwdlvl = "弱";
            }
        }
		return pwdlvl;

	},
	chkCode : function(chkcode){
		var obj = new Object();
		obj.chkcode = chkcode;
		var flag = false;
		 $.ajax({
	            type:"POST",
	            url:"dispatch.action",
	            data:{serviceId:"0037",reqStr:$.toJSON(obj)},
	            async:false,
	            success:function(data){
	            	if(data.resp.status === "0000"){
						flag = true;
					}
	            }
	    });
		return flag;
	},
	chkLogin : function() {
		// 检查是否已经登录。如果登录，返回true；如果没有登录，返回false
		var obj = new Object();
		var flag = false;
		$.ajax({
			type : "POST",
			url : "dispatch.action",
			data : {
				serviceId : "0042",
				reqStr : $.toJSON(obj)
			},
			async : false,
			success : function(data) {
				if (data.resp.status === "0000") {
					flag = true;
				}
			}
		});
		return flag;
	},
	/**
	 * 检测是否已经实名认证。分为：收集未认证；姓名未认证；都没有认证。
	 */
	chkTrueValid : function() {
		var obj = new Object();
		var flag = false;
		$.ajax({
			type : "POST",
			url : "dispatch.action",
			data : {
				serviceId : "0083",
				reqStr : $.toJSON(obj)
			},
			async : false,
			success : function(data) {
				if (data.resp.status === "0000") {
					flag = true;
				} else if ("e101" == data.resp.status) {
					alertMsg("请先认证姓名！");
				} else if ("e103" == data.resp.status) {
					alertMsg("请先认证手机！");
				} else if ("e104" == data.resp.status) {
					alertMsg("请进行认证：手机、姓名！");
				}
			}
		});
		return flag;
	},
	validPhoneCode : function(phonecode, phonenum) {
		// 检查是否已经登录。如果登录，返回true；如果没有登录，返回false
		var obj = new Object();
		obj.phonenum = phonenum;
		obj.phonecode = phonecode;

		var flag = false;
		$.ajax({
			type : "POST",
			url : "dispatch.action",
			data : {
				serviceId : "0082",
				reqStr : $.toJSON(obj)
			},
			async : false,
			success : function(data) {
				if (data.resp.status === "0000") {
					flag = true;
				}
			}
		});
		return flag;
	},
	chkCellphone : function(cellphone){
		var flag = true;
		if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(cellphone))) {
			flag = false;
		}
		return flag;
	},
	chkEmail : function(email){
		var flag = true;
		if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email))) {
			flag = false;
		}
		return flag;
	},
	chkIdcard : function(idcard){
		var flag = true;
		if(!(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X)$/.test(idcard)) && !(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(idcard))) {
			flag = false;
		}
		return flag;
	},
	/**
	 * 从页面的url中获取到对应的参数列表，存为一个map。<br>
	 * 获取参数的方式：<br>
	 * 比如：<br>
	 * url:./test.html?name=tom&pwd=tiger<br>
	 * var results=commonFunction.urlparam();<br>
	 * 调用之后结果为一个map，可以直接使用：<br>
	 * results[name]、name[pwd]即可直接获取到tom、tiger。
	 */
	urlparam : function() {
		var strHref = window.document.location.href;
		var intPos = strHref.indexOf("?");
		var strRight = strHref.substr(intPos + 1);
		var arrTmp = strRight.split("&");
		var parameters = new Array();
		$.each(arrTmp, function(i, o) {
			var arrTemp = o.split("=");
			parameters[arrTemp[0]] = arrTemp[1];
		});
		return parameters;
	},
	/**
	 * 检查是否从Org登陆
	 */
	chkIsOrg : function() {
		var obj = new Object();
		var flag = false;
		var respStr = $.applychkIsOrg($.toJSON(obj));
		var data = $.parseJSON(respStr);
		if (data.resp.status == "0000") {
			flag = ("1" == data.resp.is_org);
		}
		return flag;
	},
	/**
	 * 从页面的url中获取到对应的参数值
	 */
	getParam : function(arg) {
		var strHref = window.document.location.href;
		var intPos = strHref.indexOf("?");
		var strRight = strHref.substr(intPos + 1);
		var arrTmp = strRight.split("&");
		var parameters = new Array();
		$.each(arrTmp, function(i, o) {
			var arrTemp = o.split("=");
			parameters[arrTemp[0]] = arrTemp[1];
		});
		return parameters[arg];
	},
	/**
	 * 判断不为空
	 */
	isNotNull : function(data){
		var flag = false;
		if(data !== "" && data !== "null" && data !== "undefined" && data != null){
			flag = true;
		}
		return flag;
	},
	/**
	 * 检查唯一性
	 */
	isSingle : function(type,content){
		var obj = new Object();
		obj.content = content;
		obj.type = type;
		var flag = false;
		 $.ajax({
	            type:"POST",
	            url:"dispatch.action",
	            data:{serviceId:"0006",reqStr:$.toJSON(obj)},
	            async:false,
	            success:function(data){
	            	if(data.resp.status === "0000"){
						flag = true;
					}
	            }
	    });
		return flag;
	},
	isChiness : function(word){
		if(word.search(/^[\u4e00-\u9fa5\w]{2,5}$/) != -1 && word.search(/[\d]+/) == -1){
			return true;
		}else{
			return false;
		}
	},
	isNumber : function(numornot) {
		return numornot.search(/^[\d]+[.]{0,1}[\d]{0,}$/) != -1;
	},
	/**
	 * 检查是否包含逗号
	 */
	isFormatedNumber : function(num) {
		return num.toString().search(/[,]{1}/) != -1;
	},
	formatNumber : function(number) {
		if (number == null || number.length == 0) {
			return number;
		}
		number = number.toString();
		var arrStr = number.split('.'), floatPart = arrStr[1], step = 3, len = 0;
		number = arrStr[0];
		len = number.length;
		if (len > step) {
			var c1 = len % step, c2 = parseInt(len / step), arr = [], first = number
					.substr(0, c1);
			if (first != '') {
				arr.push(first);
			}
			for (var i = 0; i < c2; i++) {
				arr.push(number.substr(c1 + i * step, step));
			}
			number = arr.join(',');
		}
		return number + (floatPart == null || floatPart.length == 0 ? "" : "." + floatPart);
	},
	formatFloat2Percent : function(floatnum) {
		if (floatnum == null || floatnum == "") {
			return "0%";
		}
		if (floatnum.search(/%/) == -1) {
			floatnum = (parseFloat(floatnum) * 100).toFixed(2) + "%";
		}
		return floatnum;
	},
	formatBackNumber : function(num) {
		return string.replace(/,/g, '');
	},
	formatNumberWithCheck : function(num) {
		if (commonFunction.isFormatedNumber(num)) {
			return num;
		}
		return commonFunction.formatNumber(num);
	},
	replaceLine : function(str){
		if(str == null){
			return "";
		}
		return str.replace(/\n/g,"<br/>");
	},
	replaceLineBack : function(str){
		if(str == null){
			return "";
		}
		return str.replace(/<br\/>/g,"\n");
	},
	replaceBlank : function(str){
		if(str == null){
			return "";
		}
		return str.replace(/\s/g,"&nbsp;");
	},
	formatDate8_10 : function(date8) {
		if (date8 != null && date8.length == 8) {
			return date8.substring(0, 4) + "-" + date8.substring(4, 6) + "-" + date8.substring(6, 8);
		} else {
			return date8;
		}
	},
	formatTime6_8 : function(time6) {
		if (time6 != null && time6.length == 6) {
			return time6.substring(0, 2) + ":" + time6.substring(2, 4) + ":" + time6.substring(4, 6);
		} else {
			return time6;
		}
	},
	formatDateTime14_18 : function(datetime14) {
		if (datetime14 == null || datetime14.length == 0) {
			return "";
		}
		return commonFunction.formatDate8_10(datetime14.substring(0, 8)) + " "
				+ commonFunction.formatTime6_8(datetime14.substring(8, 14));
	}
};
var mockidx = 0;
var alertItem = "<div>"//
		+ "<div mockback mockidx style=\"position:fixed; background:#000000;top:0px;left:0px;right:0px;bottom:0px;opacity: 0.7;z-index:1051;\"></div>" //
		+ "  <div mockmsg mockidx class=\"mockmsg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"z-index:1052;\">" //
		+ "    <div class=\"modal-header\" style='padding-top: 8px;padding-bottom: 8px;'>" //
		+ "        <button mockidx removemock type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" onclick=\"javascript:mockfunctions.removemocks(this);\">×</button>" //
		+ "        <h3 id=\"myModalLabel\" style='margin: 0px;'>提示</h3>" //
		+ "    </div>" //
		+ "    <div class=\"modal-body\">" //
		+ "      <div class=\"control-group\">" //
		+ "        <div style=\"padding-left: 30px; padding-right: 30px; font-size: 17px;\">" //
		+ "          <p><message/></p>" //
		+ "        </div>" //
		+ "      </div>" //
		+ "    </div>" //
		+ "    <div class=\"modal-footer\" style='margin: 0px;padding-top: 8px;padding-bottom: 8px;'>";
var alertItemFoot = "    </div>" //
		+ "</div>"//
		+ "</div>";
var mockfunctions = {
	removemocks : function(obj, callback) {
		var mockIndex = $(obj).attr("mockidx");
		$('[mockidx=' + mockIndex + ']').fadeOut('fast', function() {
			$('[mockidx=' + mockIndex + ']').remove();
		});
		if (jQuery.type(callback) === "function") {
			callback();
		}
	},
	hidemocks : function(obj) {
		var mockIndex = $(obj).attr("mockidx");
		$('[mockidx=' + mockIndex + ']').fadeOut('fast', function() {
		});
	},
	generatemocks : function(callback) {
		var item = alertItem;
		if(callback != null && callback != ''){
			item += "<button mockidx removemock class=\"btn btn-primary\" data-dismiss=\"modal\" onclick=\"javascript:mockfunctions.removemocks(this,"+callback+");\">确认</button>";
			item += alertItemFoot;
		}else{
			item += "<button mockidx removemock class=\"btn btn-primary\" data-dismiss=\"modal\" onclick=\"javascript:mockfunctions.removemocks(this);\">确认</button>";
			item += alertItemFoot;
		}
		var $item = $(item);
		$item.find("[mockidx]").each(function(i, o) {
			$(this).attr("mockidx", mockidx);
		});
		mockidx++;
		return $item;
	}
};

/**
 * 弹出友情提示窗口的提示信息
 *
 * @param msg
 */
function alertMsg(msg,callback) {
	var $item = mockfunctions.generatemocks(callback);
	$item.find("message").replaceWith(msg);
	$("body").append($item);
}
/**
 * 创建弹出层
 * @param modalid 弹出层Id
 * @param title 弹出层title
 * @param confirm 确定function
 * @param deny 取消function
 */
function createModal(modalid,title,confirm,deny){
	if(!($("#"+modalid+"md").length > 0)){
		var modalStr = "<div class='modal fade' id='" + modalid + "md' tabindex='-1' role='dialog' aria-labelledby='"+modalid+"ml' aria-hidden='true'>";
		modalStr += "<div class='modal-dialog'>";
		modalStr += "<div class='modal-content'>";
		modalStr += "<div class='modal-header'>";
		modalStr += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
		modalStr += "<h4 class='modal-title' id='"+modalid+"ml'>"+title+"</h4>";
		modalStr += "</div>";
		modalStr += "<div class='modal-body' id='"+modalid+"body'>";
		modalStr += "</div>";
		modalStr += "<div class='modal-footer'>";
		if(deny != null && deny !== ""){
			modalStr += "<button type='button' class='btn btn-default' data-dismiss='modal' onclick='"+deny+"()'>取消</button>";
		}else{
			modalStr += "<button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>";
		}
		if(confirm != null && confirm !== ""){
			modalStr += "<button type='button' class='btn btn-primary' data-dismiss='modal' onclick='"+confirm+"();'>确定</button>";
		}else{
			modalStr += "<button type='button' class='btn btn-primary' data-dismiss='modal'>确定</button>";
		}
		modalStr += "</div>";
		modalStr += "</div>";
		modalStr += "</div>";
		modalStr += "</div>";
		$("body").append(modalStr);
		$("#"+modalid+"body").empty();
	}
	return modalid+"md";
}
/**
 * 创建弹出层
 * @param modalid 弹出层Id
 * @param title 弹出层title
 * @param confirm 确定function
 * @param deny 取消function
 * @param innerStr 内部结构
 */
function createModal(modalid,title,confirm,deny,innerStr){
	if(!($("#"+modalid+"md").length > 0)){
		var modalStr = "<div class='modal fade' id='" + modalid + "md' tabindex='-1' role='dialog' aria-labelledby='"+modalid+"ml' aria-hidden='true'>";
		modalStr += "<div class='modal-dialog'>";
		modalStr += "<div class='modal-content'>";
		modalStr += "<div class='modal-header'>";
		modalStr += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
		modalStr += "<h4 class='modal-title' id='"+modalid+"ml'>"+title+"</h4>";
		modalStr += "</div>";
		modalStr += "<div class='modal-body' id='"+modalid+"body'>";
		modalStr += innerStr;
		modalStr += "</div>";
		modalStr += "<div class='modal-footer'>";
		if(deny != null && deny !== ""){
			modalStr += "<button type='button' class='btn btn-default' data-dismiss='modal' onclick='"+deny+"()'>取消</button>";
		}else{
			modalStr += "<button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>";
		}
		if(confirm != null && confirm !== ""){
			if(confirm.indexOf("(") > -1){
				modalStr += "<button type='button' class='btn btn-primary' data-dismiss='modal' onclick=\""+confirm+"\">确定</button>";
			}else{
				modalStr += "<button type='button' class='btn btn-primary' data-dismiss='modal' onclick='"+confirm+"();'>确定</button>";
			}
		}else{
			modalStr += "<button type='button' class='btn btn-primary' data-dismiss='modal'>确定</button>";
		}
		modalStr += "</div>";
		modalStr += "</div>";
		modalStr += "</div>";
		modalStr += "</div>";
		$("body").append(modalStr);
	}
	return modalid+"md";
}
/**
 * 获取手机动态验证码
 */
function loadPhoneChkcode(id) {
	var $btnGenPhoneCode = $("#"+id);
	$btnGenPhoneCode.attr("disabled", true);

	var docount = function(i) {
		if (i == 0) {
			$btnGenPhoneCode.html("发送验证码");
			$btnGenPhoneCode.click(function() {
				loadPhoneChkcode(id);
			});
			return;
		}
		$btnGenPhoneCode.html(i + "秒后可重新发送");
		i--;
		setTimeout(function() {
			docount(i);
		}, 1000);
	};
	var obj = new Object();
	$.post("dispatch.action", {
		serviceId : "0054",
		reqStr : $.toJSON(obj)
	}, function(data) {
		if (typeof (data) === "string") {
			alertMsg(data);
			return;
		}

		/**
		 * 生成手机验证码。如果生成正确的验证码，就禁止按钮。
		 */
		var status = data.resp.status;
		if ("0000" === status) {
			docount(60);
		}
	});
}
var resultitemfuncs = {
		addShadow : function(o) {
			$(o).addClass("product_item_shadow");
		},
		removeShadow : function(o) {
			$(o).removeClass("product_item_shadow");
		}
	};
