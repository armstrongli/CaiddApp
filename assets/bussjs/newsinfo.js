function showNewsInfoList(pagenum){//显示新闻公告信息列表
	$.post("dispatch.action", {
		serviceId : "0112",
		reqStr : "{pagenum:'" + pagenum + "'}"
	}, function(data) {
		hideProcess();
		if(typeof data === "undefined" || data.resp === null ||data.resp.status=="9999"){
			//top.location.href = "/user/login.html";
			//return;
		}
		var productdata="<div class=\"col-xs-12 col-sm-12 col-md-12\">"
				+"<table class=\"table table-bordered table-striped\">"
					   +"<thead><tr>"
						   +"<th  class=\"col-xs-6 col-sm-6 col-md-6\" style=\"text-align:center\">新闻标题</th>"
						   +"<th  class=\"col-xs-3 col-sm-3 col-md-3\" style=\"text-align:center\">创建时间</th>"
						   +"<th  class=\"col-xs-3 col-sm-3 col-md-3\" style=\"text-align:center\">操作 </th>"
					   +"</tr></thead>"
					   +"<tbody>"
					   ;
			if(data!=null && data!=''){
				$.each(data.resp.newsNotices, function(i, newsInfoBean) {
					//alert(i+"-"+adviorinfo);
					var id = newsInfoBean.id;
					var title = newsInfoBean.title;
					var content = newsInfoBean.content;
					var type = newsInfoBean.type;
					var createtime = newsInfoBean.createtime==null?"":newsInfoBean.createtime;
					if(createtime!=''){
						//createdate=createdate.substring(0, 4)+"-"+createdate.substring(4, 6)+"-"+createdate.substring(6, 8)
					}
					//alert(productName);
					//$products.append(generateResultItem(adviorinfo));
					productdata+="<tr><td><a  style=\"text-decoration: none;color:#376DB8\" href=\"#\" onclick=\"goNewsDetail("+id+")\">"+title+"</a></td>"
						+"<td class=\"col-xs-4 col-sm-4 col-md-2 product_ele\" align=\"center\">"+createtime+"</td>"
						+"<td class=\"col-xs-12 col-sm-12 col-md-12 rowsep\" align=\"center\">"
						+   "<a class=\"btn-small btn-success\" href=\"#\" onclick=\"goNewsDetail("+id+")\">查看</a>"
						+	"&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"btn-small btn-success\" href=\"#\" onclick=\"goNewsUpdate("+id+")\">修改</a>"
						+"</td>"
						+"</tr>";
				});
			}	
				
			productdata+="</tbody></table>";
			//已发产品信息
			$("#newlistid").html(productdata);
			newspagecount.generateNavigator(data.resp.page);
	});
	
}

var newspagecount = {
	generateNavigatorFunc : function(pageobj, con_id) {
		var totalamount = pageobj.totalamount;
		var previouspage = pageobj.previouspage;
		var currentpage = pageobj.currentpage;
		var nextpage = pageobj.nextpage;
		var totalpage = pageobj.totalpage;

		var containerId = "pagenavigator";
		if (con_id != null && con_id != "") {
			containerId = con_id;
		}

		if (totalamount == 0) {
			$("#" + containerId).html("");
			return;
		}

		var indexStart = parseInt(currentpage / 10) + 1;
		var indexStop = indexStart + (totalpage >= 10 ? 9 : totalpage - 1);
		var naviHtml = "<ul class=\"pagination\" style=\"cursor: pointer;\">";
		naviHtml += "<li class=\"\"><a nav=\"" + previouspage + "\">&lt;&lt;</a></li>";
		while (indexStart <= indexStop) {
			if (indexStart == currentpage) {
				naviHtml += "<li class=\"active\"><a nav=\"" + indexStart + "\" onclick=\"queryNews("+indexStart+") \">" + indexStart + "</a></li>";
			} else {
				naviHtml += "<li class=\"\"><a nav=\"" + indexStart + "\" onclick=\"queryNews("+indexStart+") \">" + indexStart + "</a></li>";
			}
			indexStart++;
		}
		naviHtml += "<li class=\"\"><a nav=\"" + nextpage + "\" onclick=\"queryNews("+indexStart+") \">&gt;&gt;</a></li>";
		naviHtml += "<li class=\"disabled\"><a>共" + totalamount + "条结果</a></li>";
		naviHtml += "</ul>";
		$("#" + containerId).html(naviHtml).find("a[nav]").each(function(i, o) {
			$(this).click(function() {
				navClickNex(this);
			});
		});

	},
	generateNavigator : function(pageobj) {
		newspagecount.generateNavigatorFunc(pageobj);
	}
};
function navClickNex(o) {
	var pagenum = parseInt($(o).attr("nav"));
	queryNews(pagenum);
}
function queryNews(pagenum) {
	showNewsInfoList(pagenum);
}
//查看详细
function goNewsDetail(id){
	window.open("/news/noticedetail.html?newsInfoBean.id="+id);
}
//进入修改页面
function goNewsUpdate(id){
	location.href=("/news/noticeupd.html?newsInfoBean.id="+id);
}
$(document).ready(function(){
	showNewsInfoList(1);
	});