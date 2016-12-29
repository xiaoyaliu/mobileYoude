/*global module*/
module.exports = function(grunt) {
    grunt.initConfig({
        jshint:{/*js语法检则插件*/
            options:{
                jshintrc:'.jshintrc'/*定义检查规则*/
            },
            build:['Gruntfile.js','js/*.js']/*定义源*/
        },
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            build: {
                options: {
                    appDir: './',
                    baseUrl: 'js',
                    dir: 'nodeMobileShop',
                    paths: {
                        //扩展类
                        ready:"ext/domReady",
                        jquery:'ext/jquery-3.0.0',
                        jqueryJSON:'ext/jquery-json-2.4',
                        infoChannel:'ext/infoChannel',
                        utilTool: 'ext/utils',
                        text: 'ext/text',
                        doT:'ext/doT',
                        eventListen:'ext/on',
                        cookie:"ext/jquery.cookie",
                        base64:"ext/jquery.base64",
                        swiper:"ext/swiper",
                        libConfig:'ext/libConfig',
                        dropload:'ext/dropload',
                        jqueryForm:'ext/jquery.form',
                        mobiscroll01:'ext/mobiscroll-1',
                        mobiscroll02:'ext/mobiscroll-2',
                        mobiscroll03:'ext/mobiscroll-3',
                        searchTool:'components/1.0.1/searchTool'
                    },
                    shim: {
                        "jquery":{
                            exports: "jquery"
                        },
                        "jqueryJSON":{
                            deps: ['jquery'],
                            exports: "jqueryJSON"
                        },
                        "doT":{
                            exports: "doT"
                        },
                        "focusSlider":{
                            deps: ['jquery'],
                            exports: "focusSlider"
                        },
                        "cookie":{
                            deps: ['jquery'],
                            exports: "cookie"
                        },
                        "base64":{
                            deps: ['jquery'],
                            exports: "base64"
                        },
                        "swiper":{
                            deps: ['jquery'],
                            exports: "swiper"
                        },
                        'dropload':{
                            deps:['jquery'],
                            exports:"dropload"
                        },
                        'jqueryForm':{
                            deps:['jquery'],
                            exports:"jqueryForm"
                        },
                        'mobiscroll01':{
                            deps:['jquery'],
                            exports:"mobiscroll01"
                        },
                        'mobiscroll02':{
                            deps:['jquery','mobiscroll01'],
                            exports:"mobiscroll02"
                        },
                        'mobiscroll03':{
                            deps:['jquery','mobiscroll02'],
                            exports:"mobiscroll03"
                        }
                    },
                    modules: [
                        {name: 'components/1.0.1/account'},
                        {name: 'components/1.0.1/addressEdit'},
                        {name: 'components/1.0.1/addressInfo'},
                        {name: 'components/1.0.1/addressList'},
                        {name: 'components/1.0.1/addressoEdit'},
                        {name: 'components/1.0.1/addressoInfo'},
                        {name: 'components/1.0.1/addressoList'},
                        {name: 'components/1.0.1/browser'},
                        {name: 'components/1.0.1/cart'},
                        {name: 'components/1.0.1/category'},
                        {name: 'components/1.0.1/categoryflList'},
                        {name: 'components/1.0.1/categoryList'},
                        {name: 'components/1.0.1/changePwd'},
                        {name: 'components/1.0.1/concern'},
                        {name: 'components/1.0.1/coupon'},
                        {name: 'components/1.0.1/email'},
                        {name: 'components/1.0.1/evaluate'},
                        {name: 'components/1.0.1/exchange'},
                        {name: 'components/1.0.1/exProcess'},
                        {name: 'components/1.0.1/feedback'},
                        {name: 'components/1.0.1/goLogistics'},
                        {name: 'components/1.0.1/goodsDetail'},
                        {name: 'components/1.0.1/index'},
                        {name: 'components/1.0.1/login'},
                        {name: 'components/1.0.1/logistics'},
                        {name: 'components/1.0.1/mobileBind'},
                        {name: 'components/1.0.1/needReg'},
                        {name: 'components/1.0.1/order'},
                        {name: 'components/1.0.1/orderDetails'},
                        {name: 'components/1.0.1/orderSure'},
                        {name: 'components/1.0.1/orderFail'},
                        {name: 'components/1.0.1/password'},
                        {name: 'components/1.0.1/payCallback'},
                        {name: 'components/1.0.1/payChoice'},
                        {name: 'components/1.0.1/payDown'},
                        {name: 'components/1.0.1/personInfo'},
                        {name: 'components/1.0.1/points'},
                        {name: 'components/1.0.1/register'},
                        {name: 'components/1.0.1/reProcess'},
                        {name: 'components/1.0.1/returnChoose'},
                        {name: 'components/1.0.1/returnRecord'},
                        {name: 'components/1.0.1/search'},
                        {name: 'components/1.0.1/searchTool'},
                        {name: 'components/1.0.1/user'},
                        {name: 'components/1.0.1/youdeService'}
                    ]
                }
            }

        },
        cssmin: {
           //文件头部输出信息
          options:{
                         banner: '/!*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *!/\n',
                        //美化代码
                         beautify: {
                                       //中文ascii化，非常有用！防止中文乱码的神配置
                                        ascii_only: true
                                    }
                     },
                my_target:{
                         files: [
                                  {
                                         expand: true,
                                          //相对路径
                                         cwd: 'css/src',
                                         src: '*.css',
                                         dest: 'dest/css',
                                          ext:'.min.css'
                                   }
                          ]
            }
        }

    });
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-requirejs'); //加载模块
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 注册任务
    //grunt.registerTask('default', ['jshint','requirejs']);
    grunt.registerTask('default', ['cssmin']);
};