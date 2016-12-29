/**
 * Created with youde
 * company:郑州优德
 * author:caokui
 * date:16-5-23 下午4:06
 * description:商品详情
 */
define([
	  'jquery',
	  'infoChannel',
	  'swiper',
	  'utilTool',
	  'doT',
	  'text!tpl/commentList.tpl'
], function (jquery, InfoChannel, swiper, UtilTool,  doT, commentListTpl) {
	  var isHoliday=$("#holiday").length>0?1:0;
      var is_otc=$("[name=is_otc]").val();
	  var url = configData.dataHost + '/index.php';//设置url
	  var url2 = configData.dataHost + '/my.php';
	  var cmlTemp = doT.template(commentListTpl);//doT编译模版
	  var uid = $.cookie("uid");
	  var sid = $.cookie("sid");
	  var gid = $("[name=gid]").val();
	  var paramComment = {
			action: "comment_ajax",
			goods_id: gid
	  };
	  var param={
			action: "insert_cart",
			sid: sid,
			goods_id: gid,
			user_id: uid
	  };

//前端分页参数
	  var start = 0;//数据开始位置
	  var size = 7;//步长
	  var end = size;//数据截至位置
	  var dataList = [];

//设置焦点图动效
	  var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-container .swiper-pagination',
			paginationClickable: true,
			autoplay: 3000
	  });

//设置加减框
	  var str = $('[data-attach-point=aj]').attr('num');
	  var stock = parseInt(str) || '';//库存
	  setAddJian(stock);
	  function setAddJian(flag) {
			//加的效果
			$("#add").on('click', function () {
				  var n = parseInt($(this).prev().val());
				  if (flag === '') {//不设置上限
						var num = n + 1;
						$(this).prev().val(num);
				  } else {//设置上限
						if (n < flag) {//小于上限
							  var num = n + 1;
							  $(this).prev().val(num);
						} else {//大于上限
							  $('.diaInfo').text('超过库存');
							  $(".dialog").show().fadeOut(2000);
						}
				  }

			});
			//减的效果
			$("#jian").on('click', function () {
				  var n = $(this).next().val();
				  var num = parseInt(n) - 1;
				  if (num == 0) {
						return
				  }
				  $(this).next().val(num);
			});
	  };

//设置疗程装样式
	  $('[data-attach-point=set]').on('click', function () {
			if ($(this).hasClass('active')) {
				  $(this).removeClass('active');
			} else {
				  $(this).siblings().removeClass('active');
				  $(this).addClass('active');
				  var cn = $(this).find("span").attr('id');//疗程量
				  $('[data-attach-point=aj]').val(cn);
			}
	  });
	  $("[data-attach-point=aj]").on("blur",function(){
			var that=$(this);
			var phoneVal=that.val();
			phoneVal=phoneVal.replace('/[^d]+/g', ''); //替换非数字字符为空格
			phoneVal=parseInt(phoneVal,10);
			if(phoneVal<=0){
				  phoneVal=1;
			}
			if(isNaN(phoneVal)){
				  phoneVal = 1;
			}
			that.val(phoneVal);
	  });
//返回
	  $('[data-attach-point=ms]').on('click', function () {
			window.history.back();
	  });


//当库存小于疗程装数量时隐藏疗程装
	  var arry = $('[data-attach-point=combo]').children();
	  if (arry.length === 0) {
			$('[data-attach-point=comboBox]').hide();
	  }
	  ;
//显示图文详情
	  $('[data-attach-point=twBTN]').on('click', function () {
			$('[data-attach-point=spx]').hide();//商品
			$('[data-attach-point=plb]').hide();//评论
			$('[data-attach-point=fix]').hide();//底部
			$('[data-attach-point=twx]').show();//图文
			if ($("[data-attach-point=img_details]").html() === "") {
				  InfoChannel.getDataByAjax(url, {gid: gid, action: "desc"}, function (data) {
						$("[data-attach-point=img_details]").html(data.data.goods_desc)
				  });
			}
			$('body').animate({scrollTop: 0}, 0);
	  });
//返回到商品详情
	  $('[data-attach-point=twxBK]').on('click', function () {
			$('[data-attach-point=spx]').show();
			$('[data-attach-point=fix]').show();//底部
			$('[data-attach-point=plb]').hide();
			$('[data-attach-point=twx]').hide();
			$('body').animate({scrollTop: 0}, 0);
	  });
//显示评论列表
	  $('[data-attach-point=plBTN]').on('click', function () {
			$('[data-attach-point=spx]').hide();
			$('[data-attach-point=twx]').hide();
			$('[data-attach-point=fix]').hide();//底部
			$('[data-attach-point=plb]').show();
			$('body').animate({scrollTop: 0}, 0);
			//ajax请求数据1076
			InfoChannel.getDataByAjax(url, paramComment, callback);
	  });
	  function callback(data) {
			start = 0;
			end = size
			if (data.comment.length !== 0) {
				  dataList = data.comment;
				  var ds = data.comment.slice(0, 7);
				  $('[data-attach-point=none]').hide();
				  $('[data-attach-point=render]').html(cmlTemp(ds));
				  $(document).bind('scroll', onScroll);
			} else {
				  $('[data-attach-point=null]').show();
			}
	  };
//滚动加载
	  function onScroll(event) {
			//是否到底部（这里是判断离底部还有100px开始载入数据）.
			var closeToBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - 100);
			if (closeToBottom) {
				  if (dataList.length !== end) {
						start = end;
						end = end + size;
						var arr = dataList.slice(start, end);
						if (arr.length !== 0) {
							  $('[data-attach-point=render]').append(cmlTemp(arr));
						}
				  }
			} else {
				  $('[data-attach-point=none]').show();
			}
	  };
//设置回到顶部动效
	  UtilTool.goTop();

//返回到商品详情
	  $('[data-attach-point=plBK]').on('click', function () {
			$('[data-attach-point=spx]').show();
			$('[data-attach-point=fix]').show();//底部
			$('[data-attach-point=plb]').hide();
			$('[data-attach-point=twx]').hide();
			$('body').animate({scrollTop: 0}, 0);
	  });

//加入购物车
	  $('[data-attach-point=addCar]').on('click', function (e) {
			if(isHoliday===1){
				 showHoliday();
			}else{
				  addcar();
			}
			e.stopPropagation();
	  });
    function addcar(){
		  var qh = $("[data-attach-point=qh]").attr("flag");
		  if (qh === "0") {
				$('.diaInfo').text('商品缺货');
				$(".dialog").show().fadeOut(2000);
		  } else {
				var urlCart = configData.dataHost + '/cart.php';//设置url
				var num = $("[data-attach-point=aj]").val();
				param.goods_number=num;
				InfoChannel.getDataByAjax(urlCart, param, function (data) {
					  if(data.flag){
							$("[data-attach-point=snm]").text(data.cartnum);
							$.cookie("cartnum", data.cartnum, {path: '/'});//将购物车数量加入cookie

							$('.diaInfo').text('加入购物车成功');
							$(".dialog").show().fadeOut(2000);
					  }else{
							$("#common-div").text("商品已下架").show().fadeOut(2000);
					  }

				});
		  };
	}
	  //我的关注
	  var concern = $("[data-attach-point=concern]");
	  //如果已登录判断关注状态
	  if (uid){
			InfoChannel.getDataByAjax(url2, {action: "isCollect", gid: gid, uid: uid}, function (data) {
				  if (data.flag) {
						concern.find("a").addClass("concern");
				  }
			})
       }


	  concern.on("click", function () {

			var paramCon = {
				  action: "collectAdd",
				  gid: gid
			};
			if (concern.find("a").hasClass("concern")) {
				  paramCon.action="collectRemove";
			}else {
				  paramCon.action="collectAdd";
			}

			if (uid) {
				  paramCon.uid = uid;
				  InfoChannel.getDataByAjax(url2, paramCon, function (data) {
						if (data.flag&&paramCon.action=="collectAdd") {
							  concern.find("a").addClass("concern");
						}else if(data.flag&&paramCon.action=="collectRemove"){
							  concern.find("a").removeClass("concern");
						}
				  })
			} else {
				  $.cookie("loginFrom", '/goods/' + gid + ".html", {path: '/'});
				  location.href = "/login";
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
	  //点击需求登记
	  $("[data-attach-point=goNeedLogin]").on("click",function(){
			if(isHoliday===1){
				  showHoliday();
			}
	  });
      //隐藏放假
	  $("[data-attach-point=cancelShow]").on("click",function(){
			cancelShow();
	  });
	  $("[data-attach-point=sureCon]").on("click",function(){
			if(is_otc==1){
				 window.location.href="/needReg/"+gid;
			}else{
			     addcar();
			}
			cancelShow();
	  });
	  //隐藏放假消息
     function cancelShow(){
		   $("#below").hide();
		   $("#holiday").hide();
	 }
	  //显示放假消息
	  function showHoliday(){
			$("#below").show();
			$("#holiday").show();
	  }
})