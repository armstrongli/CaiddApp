/**
 * 该js文件为产品使用过程中，用户session失效重新登录的问题。<br>
 * 该文件是建立在jquery、products的js文件之上
 */
/**
 * 
 */
function userlogin() {
	// 需要检测是否已经包含登录的功能，如果已经包含就不用再重新生成登录框。
	// 如果没有登录，则生成登录框
	var $loginbutton = $("[mockback]");
	if ($loginbutton == null || $loginbutton.length == 0) {
		// 没有点击登录过
		var $userlogin = $("[userlogin]");
		var $item = mockfunctions.generatemocks();
		$item.find("message").replaceWith($userlogin);
		// 删除原来的登录的页面的内容
		$("[userlogin]").remove();
		$item.find("[userlogin]").css({
			display : 'block',
			paddingTop : '0px'
		});
		$item.find("div[loginbody]").css({
			paddingLeft : '0px'
		});
		$item.find("#submitbtn").attr("onclick", "");
		$item.find("#submitbtn").click(function() {
			if (!useridflag || !chkcodeflag) {
				return;
			}
			var req = new Object();
			req.loginid = $("#userid").val();
			req.passwd = $.md5($("#pwd").val());
			req.chkcode = $("#chkcode").val();
			$.post("dispatch.action", {
				serviceId : "0002",
				reqStr : $.toJSON(req)
			}, function(data) {
				// 判断是否登录成功
				// 如果登录成功，删除登录内容，回到产品提交界面；
				// 如果登录失败，弹出提示登录失败，重新登录
				if (data.resp.status === "0000") {
					$('[mockback]').fadeOut('fast');
					$('[mockmsg]').fadeOut('fast', function() {
						$('[mockback]').remove();
						$('[mockmsg]').remove();
					});
				} else {
					alertMsg("用户名或密码不正确，请回想一下重新登录");
				}
			});
		});
		$item.find("[removemock]").attr("onclick", "");
		$item.find("[removemock]").click(function() {
			// 重新定义确认按钮和关闭的功能，对于登录窗口而言，所隐藏，而不是删除。
			$('[mockback]').fadeOut('fast');
			$('[mockmsg]').fadeOut('fast');
		});
		$("body").append($item);
		$item.find("[loginbody]").find("#Verify").click();
	} else {
		// 已经点击登录过，但是失败的问题
		$('[mockback]').fadeIn('fast');
		$('[mockmsg]').fadeIn('fast');
	}
}

var loginfree = false;
function orderNoLogin() {
	loginfree = true;
}
function orderWithLogin() {
	loginfree = false;
}

function userlogin4order() {
	$("[loginmainmid]").fadeIn();

	$item = $("[loginbody]");
	$item.find("#submitbtn").attr("onclick", "");
	$item.find("#submitbtn").click(function() {
		if (!useridflag || !chkcodeflag) {
			return;
		}
		var req = new Object();
		req.loginid = $("#userid").val();
		req.passwd = $.md5($("#pwd").val());
		req.chkcode = $("#chkcode").val();
		$.post("dispatch.action", {
			serviceId : "0002",
			reqStr : $.toJSON(req)
		}, function(data) {
			// 判断是否登录成功
			// 如果登录成功，删除登录内容，回到产品提交界面；
			// 如果登录失败，弹出提示登录失败，重新登录
			if (data.resp.status === "0000") {
				$('[loginmainmid]').fadeOut('fast');
				orderWithLogin();
			} else {
				alertMsg("用户名或密码不正确，请回想一下重新登录");
			}
		});
	});
}