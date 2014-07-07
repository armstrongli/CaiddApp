var resultitem = "" //
		+ "    <div class=\"panel panel-default\" onmouseover=\"javascript:resultitemfuncs.addShadow(this);\" onmouseout=\"javascript:resultitemfuncs.removeShadow(this);\">" //
	    + "       <div class=\"onsale\" saleflag><on_sales/></div>" //
		+ "        <div class=\"panel-body\">" //
		+ "            <div class=\"row\">" //
		+ "                <div class=\"col-sm-12\" style=\"padding-left: 35px;\">" //
		+ "                    <div class=\"row\">" //
		+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "                        <h3 class=\"product_name\" style=\"margin-top: 5px;\">" //
		+ "                            <a class=\"product_name\" productid href=\"/index/productview.html?product_id=\" style=\"text-decoration: none;\"><p1 /></a>" //
		+ "                        </h3>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12\">" //
		+ "                            <div class=\"onsale\" style=\"float:left;\"><sales_msg/></div>" //
		+ "                            <div class=\"onsale\" chkorgflag style=\"display:none;float:right;width:90px;height:79px;position:absolute;right:30px;top:-48px;font-size:36px;color:blue;\" rate_back><div style=\"width:60px;text-align:right;line-height:53px;float:left;\"><rate_back/></div></div>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\" style=\"height:0px;\"></div>" //
		+ "                    </div>" //
		+ "                    <div class=\"row\">" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-3\">" //
		+ "                                <span>产品类型</span>" //
		+ "                                <span class=\"product_ele\"><p2 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-5\">" //
		+ "                                <span>发行机构</span>" //
		+ "                                <span class=\"product_ele\"><p10/></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-4\">" //
		+ "                                <span>认购起点</span>" //
		+ "                                <span class=\"product_ele\">￥<p3 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-3\">" //
		+ "                                <span>产品规模</span>" //
		+ "                                <span class=\"product_ele\">￥<p4 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-5\">" //
		+ "                                <span>预期收益率</span>" //
		+ "                                <span class=\"product_ele\"><p5 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-4\">" //
		+ "                                <span>产品周期</span>" //
		+ "                                <span class=\"product_ele\"><p6 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-3\">" //
		+ "                                <span>项目类型</span>" //
		+ "                                <span class=\"product_ele\"><p7 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-5\">" //
		+ "                                <span>分配方式</span>" //
		+ "                                <span class=\"product_ele\"><p9 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-4 col-sm-4 col-md-4\">" //
		+ "                                <span>额度配比</span>" //
		+ "                                <span class=\"product_ele\"><p8 /></span>" //
		+ "                        </div>" //
		+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12 rowsep\"></div>" //
		+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12\" style=\"margin-top: 5px;\">" //
		+ "                            <div operations class=\"col-xs-12 col-sm-12 col-md-12\" align=\"right\">" //
		+ "                                    <a productview productid href=\"/index/productview.html?product_id=\" class=\"btn btn-lg btn-default_pzl actionBtns_pzl\"  href=\"\" target=\"_blank\">详情</a>" //
		+ "                                    <button question class=\"btn btn-lg btn-default_pzl actionBtns_pzl\" onclick=\"questionobj.showQuestionDialog();\">问问看</button>" //
		+ "                                    <button order class=\"btn btn-lg btn-default_pzl actionBtns_pzl\" onclick=\"doAppoint('id_appoint');\">预约</button>" //
		+ "								       <button toptime style=\"display:none;\" class=\"btn btn-lg btn-default_pzl actionBtns_pzl\">置顶</button>" //
		+ "                            </div>" //
		+ "                        </div>" //
		+ "                    </div>" //
		+ "                </div>" //
		+ "                <div class=\"col-sm-3\" style='display: none;'>" //
		+ "                    <div class=\"row\">" //
		+ "                        <div class=\"lastdays_bg\" align=\"center\" days=\"43\">" //
		+ "                            <div class=\"lastdays_days\" day1 style=\"margin: 10px 0px 0px 7px; background-position-y: 11%;\"></div>" //
		+ "                            <div class=\"lastdays_days\" day2 style=\"margin: 10px 0px 0px 7px; background-position-y: 0%;\"></div>" //
		+ "                            <div class=\"lastdays_days\" day3 style=\"margin: 10px 0px 0px 6px; background-position-y: 0%;\"></div>" //
		+ "                        </div>" //
		+ "                    </div>" //
		+ "                    <div class=\"row\" style=\"display:none;\">" //
		+ "                        <div class=\"process_ps\" percent=\"100\">" //
		+ "                            <div class=\"process_bg\">" //
		+ "                                <div class=\"perc\" num_hur style=\"background-position-y: 11%; display: none;\"></div>" //
		+ "                                <div class=\"perc\" num_ten style=\"background-position-y: 0%;\"></div>" //
		+ "                                <div class=\"perc\" num_one style=\"background-position-y: 0%;\"></div>" //
		+ "                            </div>" //
		+ "                            <div class=\"process_xian\"></div>" //
		+ "                            <div class=\"process_red_left\"></div>" //
		+ "                            <div class=\"process_red_right\"></div>" //
		+ "                            <div class=\"process_gray_left\"></div>" //
		+ "                            <div class=\"process_gray_right\"></div>" //
		+ "                        </div>" //
		+ "                        <div id=\"cricle\" class=\"\" style=\"display: none;\">" //
		+ "                            <div class=\"mask\"></div>" //
		+ "                            <div class=\"left\">" //
		+ "                                <div class=\"bg\"></div>" //
		+ "                            </div>" //
		+ "                            <div class=\"right\">" //
		+ "                                <div class=\"bg\"></div>" //
		+ "                            </div>" //
		+ "                            <div class=\"text\"></div>" //
		+ "                        </div>" //
		+ "                    </div>" //
		+ "                </div>" //
		+ "            </div>" //
		+ "        </div>" //
		+ "    </div>";

var resultitemSimple = "" //
	+ "            <div class=\"row\">" //
	+ "                <div class=\"onsale\"><on_sales/></div>" //
	+ "                <div class=\"col-sm-12\" style=\"padding-left: 35px;\">" //
	+ "                    <div class=\"row\">" //
	+ "                        <div class=\"col-xs-11 col-sm-11 col-md-11\">" //
	+ "                            <a class=\"product_name\" productid href=\"/index/productview.html?product_id=\"><p1 /></a>" //
	+ "                        </div>" //
	+ "                        <div class=\"col-xs-1 col-sm-1 col-md-1\">" //
	+ "                            <button toptime style=\"display:none;\" class=\"btn btn-lg btn-default_pzl actionBtns_pzl\">置顶</button>" //
	+ "                        </div>" //
	+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12\">" //
	+ "                            <div class=\"onsale\"><sales_msg/></div>" //
	+ "                            <div class=\"onsale\" style=\"display:none;float:right;width:90px;height:79px;position:absolute;right:30px;top:-48px;font-size:36px;color:blue;\" rate_back><div style=\"width:60px;text-align:right;line-height:53px;float:left;\"><rate_back/></div></div>" //
	+ "                        </div>" //
	+ "                    </div>" //
	+ "                    <div class=\"row\" style=\"font-size:12px;\">" //
	+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12\">" //
	+ "                                <span>产品类型</span>" //
	+ "                                <span class=\"product_ele\"><p2 /></span>" //
	+ "                                <span>发行机构</span>" //
	+ "                                <span class=\"product_ele\"><p10/></span>" //
	+ "                                <span>认购起点</span>" //
	+ "                                <span class=\"product_ele\">￥<p3 /></span>" //
	+ "                        </div>" //
	+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12\">" //
	+ "                                <span>产品规模</span>" //
	+ "                                <span class=\"product_ele\">￥<p4 /></span>" //
	+ "                                <span>预期收益率</span>" //
	+ "                                <span class=\"product_ele\"><p5 /></span>" //
	+ "                                <span>产品周期</span>" //
	+ "                                <span class=\"product_ele\"><p6 /></span>" //
	+ "                        </div>" //
	+ "                        <div class=\"col-xs-12 col-sm-12 col-md-12\">" //
	+ "                                <span>项目类型</span>" //
	+ "                                <span class=\"product_ele\"><p7 /></span>" //
	+ "                                <span>分配方式</span>" //
	+ "                                <span class=\"product_ele\"><p9 /></span>" //
	+ "                                <span>额度配比</span>" //
	+ "                                <span class=\"product_ele\"><p8 /></span>" //
	+ "                        </div>" //
	+ "                    </div>" //
	+ "                </div>" //
	+ "            </div>";

var resultitemfuncs = {
	addShadow : function(o) {
		$(o).addClass("product_item_shadow");
	},
	removeShadow : function(o) {
		$(o).removeClass("product_item_shadow");
	}
};

/**
 * 生成一条显示产品记录
 *
 * @param productName
 *            产品名称
 * @param productType
 *            产品类型
 * @param minBuy
 *            最低认购
 * @param totalMoney
 *            销售金额
 * @param rates
 *            收益率
 * @param sellDays
 *            产品周期
 * @param sellMny
 *            销售金额
 * @param lastMny
 *            剩余金额
 * @param lastdays
 *            剩余日期
 * @param percent
 *            进度百分比
 * @param orderMoney
 *            预约金额
 * @returns
 */
function generateResultItem(totalproductview) {
	var product_id = totalproductview.product_id;
	var product_name = totalproductview.product_name;
	// var product_type = totalproductview.product_type;
	var product_type_name = totalproductview.product_type_name;
	var issue_company = totalproductview.issue_company;
	var min_buy = totalproductview.min_buy;
	var total_for_sell = totalproductview.total_for_sell;
	var expect_rate = totalproductview.expect_rate;
	var pro_life = totalproductview.pro_life;
	// var project_type = totalproductview.project_type;
	var project_type_name = totalproductview.project_type_name;
	// var bonus_times = totalproductview.bonus_times;
	var bonus_times_name = totalproductview.bonus_times_name;
	var pro_ratio = totalproductview.pro_ratio;
	var pro_status = totalproductview.pro_status;
	var lastdays = totalproductview.lastdays;
	var sales_msg = totalproductview.sales_msg;
	var rate_back = totalproductview.rate_back;

	var sellDateFlag=totalproductview.sellDateFlag;

	var $item = $(resultitem);
	var $productid = $item.find("a[productid]");
	$productid.attr("href", $productid.attr("href") + product_id);

	var $orderhref = $item.find("a[orderhref]");
	$orderhref.attr("href", $orderhref.attr("href") + product_id);

	$item.find("p1").replaceWith(product_name);
	$item.find("p2").replaceWith(product_type_name);
	$item.find("p3").replaceWith(commonFunction.formatNumberWithCheck(min_buy / 10000) + "万元");
	$item.find("p4").replaceWith(commonFunction.formatNumberWithCheck(total_for_sell / 10000) + "万元");
	$item.find("p5").replaceWith(
			commonFunction.formatFloat2Percent(totalproductview.min_rate) + "~"
					+ commonFunction.formatFloat2Percent(totalproductview.max_rate));
	$item.find("p6").replaceWith(pro_life);
	$item.find("p7").replaceWith(project_type_name);
	$item.find("p8").replaceWith(pro_ratio);
	$item.find("p9").replaceWith(bonus_times_name);
	/** 设置发行机构 */
	$item.find("p10").replaceWith(issue_company);
	$item.find("div[days]").attr({
		days : lastdays
	});
//	$item.find("div[percent]").attr({
//		percent : percent
//	});

	$item.find("button[order]").attr("click", '');
	$item.find("button[order]").click(function() {
		doAppoint('id_appoint', product_id);
	});

	/* 如果是“预售”状态的产品，则删除预约按钮。 */
	if ('2' == pro_status || '1'== pro_status) {
		$item.find("button[order]").remove();
		if('1'== pro_status){
			$item.find("button[question]").remove();
		}
	}
	/** 设置问问题 */
	$item.find("button[question]").attr("click", '');
	$item.find("button[question]").click(function() {
		questionobj.showQuestionDialog(product_id);
	});

	/** 设置产品在售图标、成立图标 */
	if (pro_status == '0') {
		$item.find("on_sales").replaceWith("<img src=\"/resources/images/onsale.png\" style=\"float:left;\"/>");
		$("#on_sales").show();
	} else if (pro_status == '4') {
		$item.find("on_sales").replaceWith("<img src=\"/resources/images/establish.png\" style=\"float:left;\"/>");
		$("#on_sales").show();
	} else if (pro_status == '1') {
		$item.find("on_sales").replaceWith("<img src=\"/resources/images/offsale.png\" style=\"float:left;\"/>");
		$("#on_sales").show();
	} else {
		$("#on_sales").hide();
	}

	/** sales_msg */
	$item.find("sales_msg").replaceWith(sales_msg);
	if (rate_back != null && rate_back != '') {
		$item.find("div[rate_back]").css("display","block");
		$item.find("div[rate_back]").css("background-image","url(/resources/images/ret_org.png)");
    /*
		if(commonFunction.chkIsOrg()){
			$item.find("div[rate_back]").css("background-image","url(/resources/images/ret_org.png)");
		}else{
			$item.find("div[rate_back]").css("background-image","url(/resources/images/ret_cn.png)");
		}
		*/
		rate_back = parseFloat(rate_back) * 100 + "";
		var rates_arr = rate_back.split(".");
		var rate_tens = rates_arr[0];
		var rate_ones = "";
		if (rates_arr.length > 1) {
			rate_ones = rates_arr[1].substr(0, 2);
		}
		if(rate_ones!=null&&rate_ones.length>0){
			$item.find("rate_back").replaceWith(rate_tens + "." + rate_ones);
		}else{
			$item.find("rate_back").replaceWith(rate_tens);
		}
		// $item.find("rate_back").replaceWith(rate_back+"");
	}

	/** 2014.04.13-产品状态控制 */
	if ("3" == pro_status || "5" == pro_status) {
		$item.find("button[order]").remove();
	}

	return $item;
}

function initData2Readonly(jsonProductInfo) {
	$("#product_id").html(jsonProductInfo.product_id);
	$("#product_name").html(jsonProductInfo.product_name);
	$("#product_code").html(jsonProductInfo.product_code);
	$("#issue_company").html(jsonProductInfo.issue_company);
	$("#issue_date").html(jsonProductInfo.issue_date);
	// $("#pro_status").html(jsonProductInfo.pro_status);
	$("#pro_status").html(jsonProductInfo.pro_status_name);
	$("#pro_ratio").html(jsonProductInfo.pro_ratio);
	$("#pro_life").html(jsonProductInfo.pro_life);
	/**
	 * 设置最低认购、总销售额 为 以万元为单位
	 *
	 * @author xxboy
	 */
	$("#min_buy").html(commonFunction.formatNumberWithCheck(jsonProductInfo.min_buy / 10000) + "万元");
	$("#total_for_sell").html(commonFunction.formatNumberWithCheck(jsonProductInfo.total_for_sell / 10000) + "万元");
	$("#pro_sell_start").html(jsonProductInfo.pro_sell_start);
	$("#pro_sell_end").html(jsonProductInfo.pro_sell_end);
	// $("#bonus_times").html(jsonProductInfo.bonus_times);
	$("#money_used_for").html(jsonProductInfo.money_used_for);
	$("#collect_company").html(jsonProductInfo.collect_company);
	$("#collect_bank").html(jsonProductInfo.collect_bank);
	/** 2014.03.18-添加户名 */
	$("#bank_account_name").html(jsonProductInfo.bank_account_name);
	$("#collect_bank_account").html(jsonProductInfo.collect_bank_account);
	$("#pro_review").html(commonFunction.replaceBlank(jsonProductInfo.pro_review));
	$("#project_intruation").html(commonFunction.replaceBlank(jsonProductInfo.project_intruation));
	$("#pro_risk_desc").html(commonFunction.replaceBlank(jsonProductInfo.pro_risk_desc));
	$("#issue_company_desc").html(commonFunction.replaceBlank(jsonProductInfo.issue_company_desc));
	$("#create_date").html(jsonProductInfo.create_date);
	$("#create_time").html(jsonProductInfo.create_time);
	$("#update_time").html(jsonProductInfo.update_time);
	$("#create_user_id").html(jsonProductInfo.create_user_id);
	$("#update_user_id").html(jsonProductInfo.update_user_id);
	// $("#product_type").html(jsonProductInfo.product_type);
	$("#product_type").html(jsonProductInfo.product_type_name);
	$("#finance_industry").html(jsonProductInfo.finance_industry);
	$("#finance_company").html(jsonProductInfo.finance_company);
	$("#finance_project").html(jsonProductInfo.finance_project);
	$("#project_address").html(jsonProductInfo.project_address);

	/** 设置赞数量 */
	$("#favour_count").html(jsonProductInfo.favour_count);

	/** 2014.03.30-设置项目类型 */
	$("#project_type").html(jsonProductInfo.project_type_name);

	/**
	 * 2014.03.05-添加促销信息的展示、收益类型
	 *
	 * @author Xxboy
	 */
	var sales_msg = commonFunction.replaceBlank(jsonProductInfo.sales_msg);
	if (sales_msg != null && sales_msg != '') {
//		$("#sales_msg").html(sales_msg).show();
	}
	$("#earn_type").html(jsonProductInfo.earn_type_name);
	/**
	 * 2014.03.07-添加付息方式的显示
	 */
	$("#bonus_times").html(jsonProductInfo.bonus_times_name);

	/**
	 * 设置最低收益、最高收益
	 *
	 * @author Xxboy
	 */
	$("#min_rate").html(commonFunction.formatFloat2Percent(jsonProductInfo.min_rate));
	$("#max_rate").html(commonFunction.formatFloat2Percent(jsonProductInfo.max_rate));
	if ("0" == jsonProductInfo.ratemoneybackflag) {
		$("#rate_back").html(commonFunction.formatFloat2Percent(jsonProductInfo.rate_back));
		$("#money_back_name").remove();
		$("#money_back").remove();
	} else if ("1" == jsonProductInfo.ratemoneybackflag) {
		$("#money_back").html(commonFunction.formatFloat2Percent(jsonProductInfo.money_back));
		$("#rate_back_name").remove();
		$("#rate_back").remove();
	} else {
		$("#money_back_name").remove();
		$("#money_back").remove();
		$("#rate_back_name").remove();
		$("#rate_back").remove();
	}
	$("[ratemoney]").show();
}

function setProductUrl(product_ready_id){
	if($("#producturl").val() === ""){
		alertMsg("请录入项目成立公告链接！");
		return;
	}
	var obj = new Object();
	obj.product_ready_id = product_ready_id;
	obj.url = $("#producturl").val();
	$.post("dispatch.action", {
		serviceId : "0073",
		reqStr : $.toJSON(obj)
	}, function(data) {
		if (typeof (data) == "string") {
			alertMsg(data);
			return;
		}
		if ("0000" == data.resp.status) {
			alertMsg("产品立项完成，已经审核通过的打款将结算佣金，尚未审核的在审核通过后将自动结算佣金。",//
			"loadVeryUrlNoWait('./productview.html?product_id=" + product_ready_id + "')");
		}
	});
}

function queryProducts(product_name, pro_life_code, pro_status, min_buy,
		bouns_rate, issue_date_start, issue_date_end, product_type, pagenum,
		earn_type, bonus_times, issue_company, project_type) {
	var req = new Object();
	req.product_name = product_name;
	req.pro_life_code = pro_life_code;
	req.pro_status = pro_status;
	req.min_buy = min_buy;
	req.bouns_rate = bouns_rate;
	req.issue_date_start = issue_date_start;
	req.issue_date_end = issue_date_end;
	req.product_type = product_type;
	req.pagenum = pagenum;
	req.earn_type = earn_type;
	req.bonus_times = bonus_times;
	req.issue_company = issue_company;
	req.project_type = project_type;
	var resp = $.applyProductsList($.toJSON(req));

	var $products = $("#products");
	$products.html("");

  var data = $.parseJSON(resp);
	$.each(data.resp.elements, function(i, productEle) {
		var totalproductview = productEle;
		var is_login = data.resp.is_login;
		$products.append(generateResultItem(totalproductview));
	});

}

/**
 * 提交预约信息到后台，如果提交成功，则返回成功信息
 *
 * @param product_id
 *            产品信息
 * @param order_money
 *            预约金额
 * @param chkcode
 *            验证码
 * @param order_msg
 *            预约留言
 * @param order_name
 *            预约人姓名
 */
function commitOrderWithParams(product_id, order_money, chkcode, order_msg, order_name, phonenum, phonecode,
		compact_address) {
	showProcess();
	$.post("dispatch.action", {
		serviceId : "0009",
		reqStr : "{" //
				+ "product_id:'" + product_id + "'," //
				+ "order_money:'" + order_money + "'," //
				+ "chkcode:'" + chkcode + "'," //
				+ "order_msg:'" + order_msg + "'," //
				+ "phonenum:'" + phonenum + "'," //
				+ "phonecode:'" + phonecode + "'," //
				+ "compact_address:'" + compact_address + "'," //
				+ "order_name:'" + order_name + "'" //
				+ "}"
	}, function(data) {
		hideProcess();
		if (typeof (data) == "string") {
			alertMsg(data);
			return;
		}
		var order_status = data.resp.order_status;
		if (order_status == "e008") {
			// 没有登录
			userlogin4order();
			return;
		}

		if (data.resp.status == "e011") {
			// 手机验证码输入错误
			alertMsg("手机验证码输入错误", '');
			return;
		}

		if (order_status == '0000') {
			var message = "您的预约已提交！<br>订单号："+data.resp.orderId+"<br>产品名称："+data.resp.re_product_name+"<br>工作人员会火速与您联系！";
			if (Rescode.USER_NO_CREATE == data.resp.fresh_user) {
				message += "下次可直接通过手机号登录。";
			}
			alertMsg(message, "loadVeryUrlNoWait('./productview.html?product_id=" + product_id + "')");
		} else {
			alertMsg("预约失败");
		}
	});
}
