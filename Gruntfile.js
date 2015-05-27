module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {}
    },
    copy: {
      dependencies: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['lib/@(bootstrap|CodeMirror|datatables|jquery|jquery.xdomainrequest|sprintf|underscore)/*.js',
                  'lib/html5shiv/dist/html5shiv.js',
                  'lib/qonsole/*.js',
                  'lib/qonsole/js/app/*.js',
                  'bower_components/respond/dest/respond.min.js',
                  'bower_components/CodeMirror/mode/@(javascript|sparql|xml)/*.js',
                  'bower_components/CodeMirror/addon/fold/*.js'
                 ], 
            dest: 'js/lib/'
          },
          {
            expand: true,
            flatten: true,
            src: ['lib/@(bootstrap|CodeMirror|datatables|components-font-awesome)/*.css',
                  'lib/qonsole/css/*.css'
                 ], 
            dest: 'css'
          },
          {
            expand: true,
            flatten: true,
            src: ['lib/bootstrap/*.@(eot|svg|ttf|woff)'], 
            dest: 'font/'
          }
        ]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');  
  
  grunt.registerTask('install-dependencies', ['bower:install', 'copy:dependencies'] );

};