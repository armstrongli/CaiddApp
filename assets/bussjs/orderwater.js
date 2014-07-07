var OrderWaterItems = {};
OrderWaterItems.Item = ""
		+ "<div name=node class=\"panel panel-default noborder\">" //
		+ "    <div class=\"panel-body\">" //
		+ "    <div class=\"popover right\">" //
		+ "        <div class=\"arrow\"><div class=\"order_stop_cursor\"></div></div>" //
		+ "        <h3 class=\"popover-title\"><title>Popover right</title></h3>" //
		+ "        <div class=\"popover-content row\">" //
		+ "            <content>" //
		+ "            <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>" //
		+ "            </content>" //
		+ "        </div>" //
		+ "    </div>" //
		+ "    </div>" //
		+ "</div>"; //
OrderWaterItems.generateItem = function(date, msg) {
	var $item = $(OrderWaterItems.Item);
	$item.find("title").replaceWith(date);
	$item.find("content").replaceWith(msg);
	return $item;
	
};

/** 预约展示 */
OrderWaterItems.Appoint = ""
		+ "	<div class=\"col-xs-12 col-sm-12 col-md-12\">	" //
		+ "	    <div class=\"col-xs-4 col-sm-4 col-md-4\">预约人&nbsp;&nbsp;&nbsp;：<span class=\"product_ele\"><order_name /></span></div>	" //
		+ "	    <div class=\"col-xs-4 col-sm-4 col-md-4\">预约金额：<span class=\"product_ele\">￥<order_money /></span></div>	" //
		+ "	    <div class=\"col-xs-4 col-sm-4 col-md-4\">预约电话：<span class=\"product_ele\"><phonenum /></span></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12\"><div style='float:left;line-height:21px;'>合同地址：</div><div class=\"product_ele\"><compact_address /></div></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12\">预约留言：<span class=\"product_ele\"><order_msg /></span></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"><br/></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12\">户名：<span class=\"product_ele\"><bank_account_name /></span></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12\">募集银行：<span class=\"product_ele\"><collect_bank /></span></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>	" //
		+ "	    <div class=\"col-xs-12 col-sm-12 col-md-12\">募集账号：<span class=\"product_ele\"><collect_bank_account /></span></div>	" //
		+ "	</div>	"; //
/** 预约接受 */
OrderWaterItems.AppointAcceptDo = ""//
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <button class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">受理预约</button>" //
		+ "</div>";
/** 预约接受展示 */
OrderWaterItems.AppointAccept = "<div class=\"col-xs-12 col-sm-12 col-md-12\"><span class=\"product_ele\"><establishPerson /></span>受理<span class=\"product_ele\"><re_product_name /></span>预约</div>";
/** 预约接受 */
OrderWaterItems.postBlankContractDo = ""//
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"col-xs-4 col-sm-4 col-md-2\">邮寄单号：</div>" //
		+ "    <div class=\"col-xs-8 col-sm-8 col-md-4\">" //
		+ "        <input id=\"post_compact_number\" type=\"text\" class=\"form-control\" placeholder=\"请输入邮寄单号\" />" //
		+ "    </div>" //
		+ "    <div class=\"col-xs-4 col-sm-4 col-md-2\">" //
		+ "        <button class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">邮寄空白合同</button>" //
		+ "    </div>" //
		+ "</div>";
/** 预约接受展示 */
OrderWaterItems.postBlankContract = "" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <span class=\"product_ele\"><establishPerson /></span>已将空白合同件邮出，邮寄单号：<span class=\"product_ele\"><post_compact_number /></span>" //
		+ "</div>";
/** 打款操作 */
OrderWaterItems.RealPayDo = ""//
		+ "<div class=\"col-xs-6 col-sm-6 col-md-6\">预约金额：<span class=\"product_ele\">￥<order_money /></span></div>" //
		+ "<div class=\"col-xs-6 col-sm-6 col-md-6\">预约人：<span class=\"product_ele\"><order_name /></span></div>" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>" //
		+ "<div class=\"col-xs-4 col-sm-4 col-md-2\">打款金额：</div>" //
		+ "<div class=\"col-xs-8 col-sm-8 col-md-4\">" //
		+ "    <input type=\"hidden\" id=\"order_money\" value=\"\" />" //
		+ "    <input id=\"real_money\" notnull number type=\"text\" class=\"form-control\" placeholder=\"请输入打款金额\" />" //
		+ "</div>" //
		+ "<div class=\"col-xs-4 col-sm-4 col-md-2\">打款人：</div>" //
		+ "<div class=\"col-xs-8 col-sm-8 col-md-4\">" //
		+ "    <input id=\"real_name\" notnull type=\"text\" class=\"form-control\" placeholder=\"请输入打款人真实姓名\" />" //
		+ "</div>" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"row\">" //
		+ "        <ul class=\"list-group\" id=\"productfiles\" fileindex=\"0\">" //
		+ "            <li class=\"list-group-item\" style=\"vertical-align: middle;\">" //
		+ "                <b>打款凭证（打款凭证、打款合同件等）</b>" //
		+ "            </li>" //
		+ "        </ul>" //
		+ "        <button addfile type=\"button\" class=\"btn-sm btn-default\" style=\"float: right;margin-right: 15px;\" onclick=\"javascript:add_product_file();resetOrderWaterHeight();\">添加</button>" //
		+ "    </div>" //
		+ "</div>" //
		+ "<div buttons class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"row\" align=\"center\">" //
		+ "        <input type=\"hidden\" id=\"orderid\" value=\"\" />" //
		+ "        <button type=\"button\" pos class=\"btn btn-primary\" onclick=\"javascript:commitOrder2Real();\">确认打款</button>" //
		+ "        <label>&nbsp;&nbsp;</label>" //
		+ "        <button type=\"button\" neg class=\"btn btn-danger\" onclick=\"javascript:cancelOrder();\">取消订单</button>" //
		+ "    </div>" //
		+ "</div>" //
;
/** 打款展示 */
OrderWaterItems.RealPay = "" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">"// 
		+ "<span class=\"product_ele\"><real_name /></span>已经完成打款，打款金额：<span class=\"product_ele\"><real_money /></span>" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"row\">" //
		+ "        <ul class=\"list-group\" productfiles01 fileindex=\"0\">" //
		+ "            <li class=\"list-group-item\" style=\"vertical-align: middle;\">" //
		+ "                <b>打款凭证（打款凭证、打款合同件等）</b>" //
		+ "            </li>" //
		+ "        </ul>" //
		+ "    </div>" //
		+ "</div>" //
		+ "</div>";
/** 打款确认 */
OrderWaterItems.RealPayAcceptDo = ""//
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "<button accept class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">打款确认</button>" //
		+ "<button refuse class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">打款拒绝</button>" //
		+ "</div>";
/** 打款确认展示 */
OrderWaterItems.RealPayAccept = "<div class=\"col-xs-12 col-sm-12 col-md-12\"><span class=\"product_ele\"><real_name /></span>打款，打款金额：<span class=\"product_ele\"><real_money /></span>已经到帐</div>";
/** 上传资料 */
OrderWaterItems.RealUploadDo = ""//
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"row\">" //
		+ "        <ul class=\"list-group\" id=\"productfiles\" fileindex=\"0\">" //
		+ "            <li class=\"list-group-item\" style=\"vertical-align: middle;\">" //
		+ "                <b>上传资料（打款凭证、打款合同件等）</b>" //
		+ "            </li>" //
		+ "        </ul>" //
		+ "        <button addfile type=\"button\" class=\"btn-sm btn-default\" style=\"float: right;margin-right: 15px;\" onclick=\"javascript:add_product_file();resetOrderWaterHeight();\">添加</button>" //
		+ "    </div>" //
		+ "</div>" //
		+ "<div buttons class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"row\" align=\"center\">" //
		+ "        <button uploadfiles type=\"button\" pos class=\"btn btn-default actionBtns\" style=\"float:none;\">上传资料</button>" //
		+ "    </div>" //
		+ "</div>" //
;
/** 上传资料展示 */
OrderWaterItems.RealUpload = "" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">上传资料："
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"row\">" //
		+ "        <ul class=\"list-group\" productfiles02 fileindex=\"0\">" //
		+ "            <li class=\"list-group-item\" style=\"vertical-align: middle;\">" //
		+ "                <b>上传资料（打款凭证、打款合同件等）</b>" //
		+ "            </li>" //
		+ "        </ul>" //
		+ "    </div>" //
		+ "</div>" //
		+ "</div>";
/** 上传资料确认 */
OrderWaterItems.RealUploadAcceptDo = ""//
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "<button accept class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">资料确认</button>" //
		+ "<button refuse class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">资料拒绝</button>" //
		+ "</div>";
/** 上传资料确认展示 */
OrderWaterItems.RealUploadAccept = "<div class=\"col-xs-12 col-sm-12 col-md-12\"><span class=\"product_ele\"><establishPerson /></span>打款资料确认，确认金额：<span class=\"product_ele\"><real_money /></span>，计算所得佣金：<span class=\"product_ele\"><serviceAmount /></span></div>";

/** 回寄合同操作 */
OrderWaterItems.postBackContractDo = ""//
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <div class=\"col-xs-4 col-sm-4 col-md-2\">邮寄单号：</div>" //
		+ "    <div class=\"col-xs-8 col-sm-8 col-md-4\">" //
		+ "        <input id=\"postback_compact_number\" type=\"text\" class=\"form-control\" placeholder=\"请输入邮寄单号\" />" //
		+ "    </div>" //
		+ "    <div class=\"col-xs-4 col-sm-4 col-md-2\">" //
		+ "        <button class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">邮寄合同</button>" //
		+ "    </div>" //
		+ "</div>";
/** 回寄合同展示 */
OrderWaterItems.postBackContract = "" //
		+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "    <span class=\"product_ele\"><real_name /></span>已将完整合同件邮出，邮寄单号：<span class=\"product_ele\"><postback_compact_number /></span>" //
		+ "</div>";

/** 合同确认 */
OrderWaterItems.postContractConfirmDo =  ""//
	+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
	+ "    <button class=\"btn btn-lg btn-default actionBtns\" style=\"float:left;\">合同收到确认</button>" //
	+ "</div>";
/** 合同确认展示 */
OrderWaterItems.postContractConfirm = "" //
	+ "<div class=\"col-xs-12 col-sm-12 col-md-12\">" //
	+ "    <span class=\"product_ele\"><establishPerson/></span>已确认<span class=\"product_ele\"><real_name /></span>邮寄的完整合同件</span>" //
	+ "</div>";

/** 项目成立展示（项目成立在产品浏览界面操作） */
OrderWaterItems.ProjectEstablish = "<div class=\"col-xs-12 col-sm-12 col-md-12\"><span class=\"product_ele\"><re_product_name /></span>项目成立</div>";
/** 等待项目成立 */
OrderWaterItems.ProjectEstablishWait = "<div class=\"col-xs-12 col-sm-12 col-md-12\"><b>等待</b><span class=\"product_ele\"><re_product_name /></span>项目成立</div>";
/** 财务操作结佣 */
OrderWaterItems.FinanceWorkDo = "<div class=\"col-xs-12 col-sm-12 col-md-12\">等待财务结佣，预计佣金金额：<span class=\"product_ele\"><serviceAmount /></span></div>";
/** 财务操作结佣展示 */
OrderWaterItems.FinanceWork = "<div class=\"col-xs-12 col-sm-12 col-md-12\">财务已结佣，佣金金额：<span class=\"product_ele\"><serviceAmount /></span></div>";
/** 取消/拒绝订单 */
OrderWaterItems.CancelOrder = "<div class=\"col-xs-12 col-sm-12 col-md-12\" style=\"color:#ff0000;\">撤销订单</div>";

/*-----------------------------------------------------------*/
/** 已预约 */
OrderWaterItems.ORDER_STATUS_1 = "01";
/** 受理预约 */
OrderWaterItems.ORDER_STATUS_APPOINTACCEPT = "08";
/** 邮寄空合同 */
OrderWaterItems.ORDER_STATUS_POSTBLANKCONTRACT = "12";
/** 打款 */
OrderWaterItems.ORDER_STATUS_2 = "02";
/** 确认打款 */
OrderWaterItems.ORDER_STATUS_REALPAYACCEPT = "09";
/** 上传资料 */
OrderWaterItems.ORDER_STATUS_REALUPLOAD = "10";
/** 上传资料并结佣——已确认打款待结佣（第二次审核） */
OrderWaterItems.ORDER_STATUS_7 = "07";
/** 回寄合同件 */
OrderWaterItems.ORDER_STATUS_POSTFULLCONTRACT = "13";
/** 回寄合同确认 */
OrderWaterItems.ORDER_STATUS_POSTCONTRACTCONFIRM = "14";
/** 项目成立 */
OrderWaterItems.ORDER_STATUS_PROJECTESTABLISH = "11";
/** 已经作废的常量——已确认打款待结佣（第一次审核） */
OrderWaterItems.ORDER_STATUS_6 = "06";
/** 已结佣 */
OrderWaterItems.ORDER_STATUS_3 = "03";
/** 完成 */
OrderWaterItems.ORDER_STATUS_4 = "04";
/** 失效 */
OrderWaterItems.ORDER_STATUS_5 = "05";

OrderWaterItems.getOrderStatusTime = function(status, orderStatusTime) {
	var result = null;
	$(orderStatusTime).each(function(i, o) {
		if (o.order_status == status) {
			result = o.update_time;
			return false;
		}
	});
	return result;
};

OrderWaterItems.checkStatusEnd = function(statusPoint, orderStatusTime) {
	var result = false;
	if (OrderWaterItems.ORDER_STATUS_5 == statusPoint) {
		return true;
	}
	var tmpTime = OrderWaterItems.getOrderStatusTime(statusPoint, orderStatusTime);
	if (tmpTime == null || tmpTime == "") {
		result = true;
	}
	return result;
};

OrderWaterItems.generateOrderMsg = function(orderData) {
	var orderStatusTime = orderData.orderstatustime;
	var order = orderData.order, viewflag = orderData.viewflag;
	var readonly = (viewflag == "1");
	var $container = $("#order_title_info");
	var current_status = order.current_status;
	var order_id = order.order_id;

	var CancelOrderTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_5, orderStatusTime));
	var appointTime = commonFunction.formatDateTime14_18(order.create_date + "" + order.create_time);

	/** 查看预约 */
	$container.after(OrderWaterItems.generateItem(appointTime, OrderWaterItems.Appoint));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_1, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------
	 */
	var AppointAcceptTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_APPOINTACCEPT, orderStatusTime));
	if (OrderWaterItems.ORDER_STATUS_1 == current_status) {
		return $container;
	}
	/**
	 * 判断是否可以操作受理预约
	 */
	if (OrderWaterItems.ORDER_STATUS_APPOINTACCEPT == current_status && !readonly) {
		var $acceptAppoint = $(OrderWaterItems.AppointAcceptDo);
		$acceptAppoint.find("button").click(function() {
			orderoprs.acceptAppoint(order_id);
		});
		$container.after(OrderWaterItems.generateItem('', $acceptAppoint));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_APPOINTACCEPT == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_APPOINTACCEPT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(AppointAcceptTime, OrderWaterItems.AppointAccept));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_APPOINTACCEPT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------<br>
	 * 设置空白合同邮寄
	 */
	var postBlankContractTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_POSTBLANKCONTRACT, orderStatusTime));
	/**
	 * 判断是否可以操作邮寄空白合同
	 */
	if (OrderWaterItems.ORDER_STATUS_POSTBLANKCONTRACT == current_status && !readonly) {
		var $post_compact = $(OrderWaterItems.postBlankContractDo);
		$post_compact.find("button").click(function() {
			var post_compact_number = $("#post_compact_number").val();
			orderoprs.postBlankContractFunc(order_id, post_compact_number);
		});
		$container.after(OrderWaterItems.generateItem('', $post_compact));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_POSTBLANKCONTRACT == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_POSTBLANKCONTRACT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(postBlankContractTime, OrderWaterItems.postBlankContract));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_POSTBLANKCONTRACT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------
	 */
	var RealPayTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_2, orderStatusTime));
	/**
	 * 判断是否可以操作打款
	 */
	if (OrderWaterItems.ORDER_STATUS_2 == current_status && !readonly) {
		$container.after(OrderWaterItems.generateItem('', OrderWaterItems.RealPayDo));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_2 == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_2, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(RealPayTime, OrderWaterItems.RealPay));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_2, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------
	 */
	var RealPayAcceptTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_REALPAYACCEPT, orderStatusTime));
	/**
	 * 判断是否可以操作确认打款
	 */
	if (OrderWaterItems.ORDER_STATUS_REALPAYACCEPT == current_status && !readonly) {
		var $RealPayAcceptDo = $(OrderWaterItems.RealPayAcceptDo);
		$RealPayAcceptDo.find("button[accept]").click(function() {
			orderoprs.acceptRealpay(order_id);
		});
		$RealPayAcceptDo.find("button[refuse]").click(function() {
			orderoprs.refuseRealpay(order_id);
		});
		$container.after(OrderWaterItems.generateItem('', $RealPayAcceptDo));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_REALPAYACCEPT == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_REALPAYACCEPT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(RealPayAcceptTime, OrderWaterItems.RealPayAccept));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_REALPAYACCEPT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------
	 */
	var RealUploadTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_REALUPLOAD, orderStatusTime));
	var $RealUploadDo = $(OrderWaterItems.RealUploadDo);
	$RealUploadDo.find("button[uploadfiles]").click(function() {
		orderoprs.uploadOrderFiles(order_id);
	});
	/**
	 * 判断是否可以操作上传资料
	 */
	if (OrderWaterItems.ORDER_STATUS_REALUPLOAD == current_status && !readonly) {
		$container.after(OrderWaterItems.generateItem('', $RealUploadDo));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_REALUPLOAD == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_REALUPLOAD, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(RealUploadTime, OrderWaterItems.RealUpload));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_REALUPLOAD, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------
	 */
	var RealUploadAcceptTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_7, orderStatusTime));
	var $RealUploadAcceptDo = $(OrderWaterItems.RealUploadAcceptDo);
	$RealUploadAcceptDo.find("button[accept]").click(function() {
		orderoprs.commitOrderAccess(order_id);
	});
	$RealUploadAcceptDo.find("button[refuse]").click(function() {
		orderoprs.commitOrderRefuse(order_id);
	});
	/**
	 * 判断是否可以操作上传资料确认并计算佣金
	 */
	if (OrderWaterItems.ORDER_STATUS_7 == current_status && !readonly) {
		$container.after(OrderWaterItems.generateItem('', $RealUploadAcceptDo));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_7 == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_7, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(RealUploadAcceptTime, OrderWaterItems.RealUploadAccept));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_7, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------<br>
	 * 设置完整合同邮寄
	 */
	var postBackContractTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_POSTFULLCONTRACT, orderStatusTime));
	/**
	 * 判断是否可以操作邮寄空白合同
	 */
	if (OrderWaterItems.ORDER_STATUS_POSTFULLCONTRACT == current_status && !readonly) {
		var $post_compact = $(OrderWaterItems.postBackContractDo);
		$post_compact.find("button").click(function() {
			var post_compact_number = $("#postback_compact_number").val();
			orderoprs.postBackContractFunc(order_id, post_compact_number);
		});
		$container.after(OrderWaterItems.generateItem('', $post_compact));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_POSTFULLCONTRACT == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_POSTFULLCONTRACT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(postBackContractTime, OrderWaterItems.postBackContract));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_POSTFULLCONTRACT, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------<br>
	 * 设置确认完整合同
	 */
	var postContractConfirmTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_POSTCONTRACTCONFIRM, orderStatusTime));
	/**
	 * 判断是否可以操作确认合同件
	 */
	if (OrderWaterItems.ORDER_STATUS_POSTCONTRACTCONFIRM == current_status && !readonly) {
		var $post_compact = $(OrderWaterItems.postContractConfirmDo);
		$post_compact.find("button").click(function() {
			orderoprs.postContractConfirmFunc(order_id);
		});
		$container.after(OrderWaterItems.generateItem('', $post_compact));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_POSTCONTRACTCONFIRM == current_status) {
		return $container;
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_POSTCONTRACTCONFIRM, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}
	$container.after(OrderWaterItems.generateItem(postContractConfirmTime, OrderWaterItems.postContractConfirm));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_POSTCONTRACTCONFIRM, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------
	 */
	var ProjectEstablishTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_PROJECTESTABLISH, orderStatusTime));
	/**
	 * 判断是否可以操作项目成立
	 */
	if (OrderWaterItems.ORDER_STATUS_PROJECTESTABLISH == current_status) {
		$container.after(OrderWaterItems.generateItem(ProjectEstablishTime, OrderWaterItems.ProjectEstablishWait));
		return $container;
	} else {
		$container.after(OrderWaterItems.generateItem(ProjectEstablishTime, OrderWaterItems.ProjectEstablish));
	}
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_PROJECTESTABLISH, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	/**
	 * ---------------------------------------------------------
	 */
	var FinanceWorkTime = commonFunction.formatDateTime14_18(OrderWaterItems.getOrderStatusTime(
			OrderWaterItems.ORDER_STATUS_3, orderStatusTime));
	/**
	 * 判断是否可以操作结佣
	 */
	if (OrderWaterItems.ORDER_STATUS_3 == current_status && !readonly) {
		$container.after(OrderWaterItems.generateItem('', OrderWaterItems.FinanceWorkDo));
		return $container;
	}
	if (OrderWaterItems.ORDER_STATUS_3 == current_status) {
		return $container;
	}
	$container.after(OrderWaterItems.generateItem(FinanceWorkTime, OrderWaterItems.FinanceWork));
	/** 针对取消定单增加验证 */
	if (OrderWaterItems.checkStatusEnd(OrderWaterItems.ORDER_STATUS_3, orderStatusTime)) {
		$container.after(OrderWaterItems.generateItem(CancelOrderTime, OrderWaterItems.CancelOrder));
		return;
	}

	return $container;
};
