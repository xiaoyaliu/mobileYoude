/**
 * Created with Cocos2d-x3.0 jsb.
 * company: 郑州优德
 * author:caokui
 * date: 15-11-23 下午6:00
 * description 登录
 */
var express = require('express');
var httpRequest = require('../serverUtil/su-request');
var sfFile = require('../serverUtil/su-file');
var router = express.Router();
var Promise = require('promise');
var cheerio = require('cheerio');
var renderUtil = require('../serverUtil/su-util');
var log4j = require('../serverUtil/su-log');


router.get('/password', function (req, res) {

    Promise.all([sfFile.read('html/findPassword.html', 'utf8')]).then(onFulfilled, onRejected);
    function onFulfilled(files) {
        try {
            var html = files[0];//主页面
            $ = cheerio.load(html, {decodeEntities: false});//dom结构
            //*********处理js挂马***************
            renderUtil.removeBadScript();

            res.set('Content-Type', 'text/html');
            res.send(new Buffer($.html()));
        } catch (err) {
            renderUtil.logger(err);
        }
        ;
    };
    function onRejected(err) {
        renderUtil.logger(err);
    };


});

module.exports = router;
