/**
 * Created with youde
 * company:郑州优德
 * author:caokui
 * date:16-3-2 下午6:13
 * description:路由控制器
 */
var express = require('express');
var router = express.Router();
var index = require('./sr-index');
var search = require('./sr-search');
var category = require('./sr-category');
var categoryList = require('./sr-categoryList');
var classifyFl=require('./sr-categoryflList');
var goodsDetail = require('./sr-goodsDetail');
var cart = require('./sr-cart');
var login = require('./sr-login');
var register = require('./sr-register');
var password = require('./sr-password');
var retrieve = require('./sr-retrieve');
var user = require('./sr-user');
var order = require('./sr-order');
var logistics = require('./sr-logistics');
var logisticsAll = require('./sr-logisticsAll');
var browser = require('./sr-browser');
var concern = require('./sr-concern');
var oDetail = require('./sr-oDetail');
var evaluate = require('./sr-evaluate');
var coupon = require('./sr-coupon');
var account = require('./sr-account');
var mobileBind = require('./sr-mobileBind');
var changePwd = require('./sr-changePwd');
var addressList = require('./sr-addressList');
var addrInsert = require('./sr-addrInsert');
var addrEdit = require('./sr-addrEdit');
var addressoList = require('./sr-addressoList');
var addroInsert = require('./sr-addroInsert');
var addroEdit = require('./sr-addroEdit');
var feedback= require('./sr-feedback');
var points= require('./sr-points');
var pointsRule= require('./sr-pointsRule');
var mess= require('./sr-mess');
var returnChoose= require('./sr-returnChoose');
var exchange= require('./sr-exchange');
var refund= require('./sr-refund');
var exProcess= require('./sr-exProcess');
var reProcess= require('./sr-reProcess');
var returnRecord= require('./sr-returnRecord');
var returnRule= require('./sr-returnRule');
var service= require('./sr-service');
var orderSure= require('./sr-orderSure');
var orderFail= require('./sr-orderFail');
var payChoice= require('./sr-payChoice');
var payDown= require('./sr-payDown');
var needReg= require('./sr-needReg');
var youdeService= require('./sr-youdeService');
var payCallback= require('./sr-payCallback');
var zhuanti= require('./sr-zhuanti');
var appHtml = require('./app');
var error = require('./error');





router.get('/',index);//首页
router.get('/search/:key',search);//搜索
router.get('/category',category);//分类
router.get('/classify/:id',categoryList);//分类下商品列表
router.get('/classifyFl/:id',classifyFl);//一级分类下商品列表
router.get('/goods/:id',goodsDetail);//商品详情
router.get('/cart',cart);//购物车
router.get('/login',login);//登录
router.get('/register',register);//注册
router.get('/password',password);//找回密码
router.get('/retrieve/:key',retrieve);//找回密码-邮箱
router.get('/user',user);//用户中心
router.get('/order/:name',order);//订单中心
router.get('/logistics/:id',logistics);//物流
router.get('/logisticsAll',logisticsAll);//所以物流
router.get('/browser',browser);//浏览记录
router.get('/concern',concern);//我的关注
router.get('/oDetail/:id',oDetail);//订单详情
router.get('/evaluate/:id',evaluate);//订单详情
router.get('/coupon',coupon);//优惠券
router.get('/account',account);//账户管理
router.get('/mobileBind',mobileBind);//账户管理
router.get('/changePwd',changePwd);//修改密码
router.get('/addressList',addressList);//收货地址列表
router.get('/addrInsert',addrInsert);//新建收货地址
router.get('/addrEdit/:id',addrEdit);//编辑收货地址
router.get('/addressoList',addressoList);//收货地址列表
router.get('/addroInsert',addroInsert);//新建收货地址
router.get('/addroEdit/:id',addroEdit);//编辑收货地址
router.get('/feedback',feedback);//问题反馈
router.get('/points',points);//积分
router.get('/pointsRule',pointsRule);//积分规则
router.get('/mess',mess);//个人信息
router.get('/returnChoose/:id',returnChoose);//选择退货或换货
router.get('/exchange/:id',exchange);//换货
router.get('/refund/:id',refund);//退货
router.get('/exProcess/:id',exProcess);//换货进度
router.get('/reProcess/:id',reProcess);//退货进度
router.get('/returnRecord',returnRecord);//退换货记录
router.get('/returnRule',returnRule);//退换货规则
router.get('/orderSure',orderSure);//确认订单
router.get('/orderFail',orderFail);//提交订单失败
router.get('/payChoice/:name',payChoice);//在线支付选择支付方式
router.get('/payDown/:id',payDown);//货到付款
router.get('/service',service);//客服中心
router.get('/needReg/:id',needReg);//需求登记
router.get('/youdeService',youdeService);//资质证书
router.get('/payCallback/:id',payCallback);//支付回调
router.get('/zhuanti',zhuanti);//专题
router.get('/app.html',appHtml);//跳转到app下载页面
router.get('*',error);//处理404错误



module.exports = router;