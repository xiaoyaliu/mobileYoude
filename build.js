({
	  appDir: './',   //项目根目录
	  dir: './nodeMobileShop',  //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

	  baseUrl: 'js',   //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的

	  modules: [

			{name: 'components/1.0.1/orderDetails'}
	  ],

	  fileExclusionRegExp:/^(r|build)\.js$/,	//过滤，匹配到的文件将不会被输出到输出目录去

	  optimizeCss: 'standard',

	  removeCombined: true,   //如果为true，将从输出目录中删除已合并的文件


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
			searchTool:'components/1.0.0/searchTool'
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
	  }
})