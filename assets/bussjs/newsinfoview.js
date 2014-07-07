//查看详细
function initNewsDetail(id){
	//var newsdetailid = $("#newsdetailid");
	var bodydata = "";
	$("#newsdetailid").html("");
	$.post("dispatch.action", {
		  serviceId : "0112Detail",
		  reqStr : "{id:'" + id + "'}"
	}, function(data) {
		hideProcess();
	/**	if(typeof data === "undefined" || data.resp === null ||data.resp.status=="9999"){
			top.location.href = "/user/login.html";
			return;
		}else{
		}
	*/	
		var title = data.resp.newsInfoBean.title;
		var content = data.resp.newsInfoBean.content;
		var datetime = data.resp.newsInfoBean.createtime;
		bodydata +="<hr>"+title+"</hr>";
		bodydata +="<br/>";
		bodydata +="<small class=\"muted\">"+datetime+"</small>";
		bodydata +="<hr class=\"dashed\">";
		bodydata +="<section>"+content+"</section>";
		$("#newsdetailid").html(bodydata);
	});
	//window.open("/news/noticedetail.html?newsInfoBean.id="+id);
	
}
$(document).ready(function(){
	var params = commonFunction.urlparam();
	var id = params["newsInfoBean.id"];
	initNewsDetail(id);
	});