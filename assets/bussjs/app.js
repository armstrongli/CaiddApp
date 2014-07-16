jQuery.extend({
	applyProductsList : function(reqJson) {
		return ApplyReqResp.applyProductsList(JSON.stringify(reqJson));
	},
	applyLogin : function(reqJson) {
		return ApplyReqResp.applyLogin(JSON.stringify(reqJson));
	},
	applyOrder : function(reqJson) {
		return ApplyReqResp.applyOrder(JSON.stringify(reqJson));
	},
	applyOrderDetail : function(reqJson) {
		return ApplyReqResp.applyOrderDetail(JSON.stringify(reqJson));
	},
	applychkIsOrg : function(reqJson) {
		return ApplyReqResp.applychkIsOrg(JSON.stringify(reqJson));
	},
	applyVCodeUrl : function() {
		return ApplyReqResp.applyVCodeUrl();
	},
	gotoPortal : function(){
		window.GoTo.loadPortal();
	},
	gotoLogin : function(){
		window.GoTo.loadLogin();
	},
	gotoProductDetail : function(){
		window.GoTo.loadProductDetail();
	},
	gotoOrder : function(){
		window.GoTo.loadOrder();
	},
	gotoOrderDetail : function(){
		window.GoTo.loadOrderDetail();
	},
	gotoCollect : function(){
		window.GoTo.loadCollect();
	},
	gotoCollectDetail : function(){
		window.GoTo.loadCollectDetail();
	},
	log : function(msg) {
		ApplyReqResp.log(msg);
	}
});
