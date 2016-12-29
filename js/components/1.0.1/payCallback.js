/**
 * Created by liuxiaoya；
 *date 2016/9/23 0023.
 *description支付回调
 */
define([
	  'jquery',
	  'infoChannel',
	  'cookie',
	  'doT',
	  'utilTool',
	  'text!tpl/payCallback.tpl'
], function (jquery, InfoChannel,cookie, doT, utilTool,payCallback) {
	  var uid = $.cookie("uid");
	  var listTpl = doT.template(payCallback);//doT编译模版
	  var url = configData.dataHost + '/my.php';//设置url
	  var oid = utilTool.GetUrlPara();//获取oid
	  var param = {//进度数据
			uid: uid,
			action: "orderPaySt",
			oid:oid
	  };
	  //渲染数据
	  InfoChannel.getDataByAjax(url,param,function(data) {

			if (data.flag) {
				  $("[data-attach-point=data]").html(listTpl(data.orderInfo));
			}else{
				  window.location.href="/404"
			}
	  });

	  //显示更多
	  $("#go-quick-click").click(function(event){
			$("#quick-go-div").slideToggle();
			event.stopPropagation();
	  });
	  $("body").click(function(){
			if($("#quick-go-div").css("display")=="block"){
				  $("#quick-go-div").slideUp();
			}
	  });
});
