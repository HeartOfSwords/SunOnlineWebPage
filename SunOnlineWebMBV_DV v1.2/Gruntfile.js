//��װ����
module.exports = function(grunt){
	//�������ã����в����������Ϣ
	grunt.initConfig({
		
		//��ȡpackage.json��Ϣ
		pkg: grunt.file.readJSON('package.json'),
		
		//uglify�����������Ϣ
		uglify: {
			options: {
				stripBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%> */\n'
			},
			dist: {
				files: {
					//��bootStrap.min.js����ѹ��
					'min/jsmin/bootstrap.min.js':'js/bootstrap.min.js',
					//��jquery-1.12.3.min.js����ѹ��
					'min/jsmin/jquery-1.12.3.min.js':'js/jquery-1.12.3.min.js',
					//��verify_mobile.js����ѹ��
					'min/jsmin/verify_mobile.min.js':'js/verify_mobile.js'
				}
			}
		},
		
		//cssmin�����������Ϣ
		cssmin: {  
			options: {
				stripBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd")%> */\n'
			},  
			compress: {  
				files: {
					//��������ҳ���css���кϲ�ѹ��
					'min/cssmin/aboutUs.min.css': [  
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/aboutUs.css",
						"css/breadcrumb.css"
					],
					//��bootStrap.css���кϲ�ѹ��
					'min/cssmin/bootstrap.min.css':[
						"css/bootstrap.min.css"
					],
					//��HOC-second.css���кϲ�ѹ��
					'min/cssmin/HOC-second.min.css':[
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/HOC-second.css",
						"css/breadcrumb.css"
					],
					//��HOC-third.css���кϲ�ѹ��
					'min/cssmin/HOC-third.min.css':[
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/breadcrumb.css",
						"css/navTabs.css",
						"css/publicClass.css"
					],
					//��index.css���кϲ�ѹ��
					'min/cssmin/index.min.css':[
						"css/mobile.css",
						"css/index.css",
						"css/footer.css",
						"css/header.css",
						"css/breadcrumb.css"
					],
					//��login.css���кϲ�ѹ��
					'min/cssmin/login.min.css':[
						"css/mobile.css",
						"css/login.css",
						"css/footer.css",
						"css/header.css",
						"css/breadcrumb.css"
					],
					//��publicClass.css���кϲ�ѹ��
					'min/cssmin/publicClass.min.css':[
						"css/mobile.css",
						"css/footer.css",
						"css/header.css",
						"css/collapse.css",
						"css/publicClass.css",
						"css/breadcrumb.css",
						"css/navTabs.css"
					],
					//��studentGuide.css���кϲ�ѹ��
					'min/cssmin/studentGuide.min.css':[
						"css/mobile.css",
						"css/header.css",
						"css/footer.css",
						"css/breadcrumb.css"
					],
					//��newsList.css���кϲ�ѹ��
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
			//ѭ��������������ʹ�û����Ű�Χ
			"curly": true,
			//��������
			"indent": true,
			//���ơ�ȱ�ٷֺš��ľ���
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
	
	//����grunt���ǽ�ʹ��uglify���,cssmin���
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	//����grunt���������ն�����gruntʱ��Ҫ��Щʲô(ע���Ⱥ�˳��)
	grunt.registerTask('default',[]);
	
};