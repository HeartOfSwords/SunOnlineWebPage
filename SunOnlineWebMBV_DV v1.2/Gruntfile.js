//包装函数
module.exports = function(grunt){
	//任务配置，所有插件的配置信息
	grunt.initConfig({
		
		//获取package.json信息
		pkg: grunt.file.readJSON('package.json'),
		
		//uglify插件的配置信息
		uglify: {
			options: {
				stripBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%> */\n'
			},
			dist: {
				files: {
					//对bootStrap.min.js进行压缩
					'min/jsmin/bootstrap.min.js':'js/bootstrap.min.js',
					//对jquery-1.12.3.min.js进行压缩
					'min/jsmin/jquery-1.12.3.min.js':'js/jquery-1.12.3.min.js',
					//对verify_mobile.js进行压缩
					'min/jsmin/verify_mobile.min.js':'js/verify_mobile.js'
				}
			}
		},
		
		//cssmin插件的配置信息
		cssmin: {  
			options: {
				stripBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd")%> */\n'
			},  
			compress: {  
				files: {
					//关于我们页面的css进行合并压缩
					'min/cssmin/aboutUs.min.css': [  
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/aboutUs.css",
						"css/breadcrumb.css"
					],
					//对bootStrap.css进行合并压缩
					'min/cssmin/bootstrap.min.css':[
						"css/bootstrap.min.css"
					],
					//对HOC-second.css进行合并压缩
					'min/cssmin/HOC-second.min.css':[
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/HOC-second.css",
						"css/breadcrumb.css"
					],
					//对HOC-third.css进行合并压缩
					'min/cssmin/HOC-third.min.css':[
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/breadcrumb.css",
						"css/navTabs.css",
						"css/publicClass.css"
					],
					//对index.css进行合并压缩
					'min/cssmin/index.min.css':[
						"css/mobile.css",
						"css/index.css",
						"css/footer.css",
						"css/header.css",
						"css/breadcrumb.css"
					],
					//对login.css进行合并压缩
					'min/cssmin/login.min.css':[
						"css/mobile.css",
						"css/login.css",
						"css/footer.css",
						"css/header.css",
						"css/breadcrumb.css"
					],
					//对publicClass.css进行合并压缩
					'min/cssmin/publicClass.min.css':[
						"css/mobile.css",
						"css/footer.css",
						"css/header.css",
						"css/collapse.css",
						"css/publicClass.css",
						"css/breadcrumb.css",
						"css/navTabs.css"
					],
					//对studentGuide.css进行合并压缩
					'min/cssmin/studentGuide.min.css':[
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/breadcrumb.css"
					],
					//对newsList.css进行合并压缩
					'min/cssmin/news.min.css':[
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/breadcrumb.css",
						"css/news.css"
					]
				}  
			}  
		},

		jshint: {
			//循环或条件语句必须使用花括号包围
			"curly": true,
			//代码缩进
			"indent": true,
			//控制“缺少分号”的警告
			"asi": true,
			"boss": true,
			foo: {
				src: ['Gruntfile.js','js/verify_mobile.js']
			},
		},
			
		htmlmin: {
			dist: {                                      
				options: {                                 
					removeComments: true,
					collapseWhitespace: true
				},
				files: {                                   
					'min/htmlmin/aboutUs.html': 'aboutUs.html',
					'min/htmlmin/HOCSecond.html': 'HOCSecond.html',
					'min/htmlmin/HOCThird.html': 'HOCThird.html',
					'min/htmlmin/index.html': 'index.html',
					'min/htmlmin/login.html': 'login.html',
					'min/htmlmin/publicClass_index.html': 'publicClass_index.html',
					'min/htmlmin/publicClass_second.html': 'publicClass_second.html',
					'min/htmlmin/publicClass_third.html': 'publicClass_third.html',
					'min/htmlmin/studentGuide.html': 'studentGuide.html'
				}
			},
		},
		
		clean: {
			build: {
				src: ["min/cssmin/*","min/jsmin/*","min/htmlmin/*"]
			}
		}
	});
	
	//告诉grunt我们将使用uglify插件,cssmin插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	//告诉grunt当我们在终端输入grunt时需要做些什么(注意先后顺序)
	grunt.registerTask('default',[]);
	
};