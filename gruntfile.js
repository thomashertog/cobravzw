module.exports = function(grunt){
	// 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
			dist: {
				src: ['js/libs/*.js',
					'js/global.js'
					],
				dest: 'js/build/production.js'
			}
        },
		uglify: { 
			build: {
					src: 'js/build/production.js',
					dest: 'js/build/production.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		watch: {
			scripts: {
				files: ['/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				}
			}
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat'); //concatenating all JS-files into one
	grunt.loadNpmTasks('grunt-contrib-uglify'); //minify the JS
	grunt.loadNpmTasks('grunt-contrib-imagemin'); //optimize images
	grung.loadNpmTasks('grunt-contrib-watch'); //automatically run grunt when needed

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};