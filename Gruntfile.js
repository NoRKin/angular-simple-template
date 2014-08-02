module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        "sass": 'grunt-sass',
        "watch" : "grunt-contrib-watch"
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'app/css/main.css': 'app/css/sass/main.scss',
                }
            }
        },
        watch: {
            sass_app: {
                files: ['app/css/sass/main.scss'],
                tasks: ['sass:dist']
            },
        }
    });

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['watch']);
};
