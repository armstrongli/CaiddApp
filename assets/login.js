//点击图片更换验证码
$(function () {  
    $("#Verify").click(function(){
        $(this).attr("src","chkcodeAction.action");
    });
    var cs = document.cookie;
    cs = cs.split(";")[0];
    if(cs.split("=").length == 2 && cs.split("=")[0] == "userid"){
    	$("#userid").val(cs.split("=")[1]);
    	$("#rememberid").attr("checked","checked");
    }
});
$(document).keydown(function(e){
	if (e.which == 13) {
		$("#submitbtn").click();
	}
});
var useridflag = false;
var chkcodeflag = false;
//验证用户id
function valiUserid(){
	if($("#userid").val() === ""){
		$("#userid_label").attr("class","label");
		$("#userid_label").html("");
		useridflag = false;
		return;
	}
	if(!commonFunction.chkUserid($("#userid").val())){
		$("#userid_label").attr("class","label label-danger");
		$("#userid_label").html("格式不符");
		useridflag = false;
	}else{
		$("#userid_label").attr("class","label");
		$("#userid_label").html("");
		useridflag = true;
		var req = new Object();
		req.userid = $("#userid").val();
		$.post(
			"dispatch.action",
			{serviceId:"0049",reqStr:$.toJSON(req)},
			function(data){
				if(data.resp.status === "0000"){
					alertMsg("您的初始密码已发送至您的预约手机，请注意查收");
				}
			}
		);
	}
}
//校验验证码
function valiChkcode(){
	if($("#chkcode").val() === ""){
		$("#chkcode_label").attr("class","label label-danger");
		$("#chkcode_label").html("请输入");
		chkcodeflag = false;
	}else{
		if(!commonFunction.chkCode($("#chkcode").val())){
			$("#chkcode_label").attr("class","label label-danger");
			$("#chkcode_label").html("不正确");
			chkcodeflag = false;
		}else{
			$("#chkcode_label").attr("class","label");
			$("#chkcode_label").html("");
			chkcodeflag = true;
		}
	}
}
//提交表单
function doSubmit(){
	valiUserid();
	valiChkcode();
	if(!useridflag || !chkcodeflag){
		return;
	}
	var req = new Object();
	req.loginid = $("#userid").val();
	req.passwd = $.md5($("#pwd").val());
	req.chkcode = $("#chkcode").val();
	showProcess();
	$.post(
		"dispatch.action",
		{serviceId:"0002",reqStr:$.toJSON(req)},
		callback
	);
}
//处理结果
function callback(data){
	if(data.resp.status === "0000"){
		if($("#rememberid").attr("checked") === "checked"){
			//获取当前时间 
			var date=new Date(); 
			//将date设置为14天以后的时间 
			var expiresDays=14; 
			date.setTime(date.getTime()+expiresDays*24*3600*1000); 
			document.cookie = "userid="+$("#userid").val()+";expires="+date.toGMTString();
		}else{
			document.cookie = "";
		}
		if(data.resp.role === "R002"){
			top.location.href = "/workplace/msg/custquestion.html";
		}else if(data.resp.role === "R003"){
			top.location.href = "/workplace/paidorder.html";
		}else{
			top.location.href = "/workplace/personcenter.html";
		}
	}else{
		hideProcess();
		if(data.resp.err !== "" && data.resp.err != null){
			alertMsg(data.resp.err);
			return;
		}
		$("#pwd").val("");
		$("#chkcode").val("");
		$("#Verify").click();
		$("#chkcode_label").attr("class","label");
		$("#chkcode_label").html("");
		$("#userid_label").attr("class","label");
		$("#userid_label").html("");
		alertMsg(rescodeMap[data.resp.status]);
	}
}
/**忘记用户名*/
function getUserId(){
	top.location.href = "/user/getuserid.html";
}
/**忘记密码*/
function resetPwd(){
	top.location.href = "/user/getpwd.html";
}
