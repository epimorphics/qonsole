module.exports = function(grunt) {
  path = require('path');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {}
    },
    clean: {
      lib: ["lib"]
    },
    copy: {
      dependencies: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['bower_components/respond/dest/respond.min.js',
                  'bower_components/CodeMirror/mode/@(javascript|sparql|xml)/*.js',
                  'bower_components/CodeMirror/addon/fold/*.js',
                  "bower_components/bootstrap/dist/js/bootstrap.js",
                  "bower_components/jquery/jquery.js",
                  "bower_components/datatables/media/js/jquery.dataTables.js",
                  "bower_components/html5shiv/dist/html5shiv.js",
                  "bower_components/jquery.xdomainrequest/jQuery.XDomainRequest.js",
                  "bower_components/lodash-compat/lodash.js",
                  "bower_components/spin/javascripts/jquery.spin.js",
                  "bower_components/sprintf/dist/sprintf.min.js"
                 ],
            dest: 'lib/js'
          },
          {
            expand: true,
            flatten: true,
            src: ["bower_components/CodeMirror/addon/fold/*.css",
                  "bower_components/bootstrap/dist/css/bootstrap.css",
                  "bower_components/datatables/media/css/jquery.dataTables.css",
                  "bower_components/fontawesome/css/font-awesome.css",
                  "bower_components/spin/stylesheets/jquery.spin.css"
                 ],
            dest: 'lib/css'
          },
          {
            expand: true,
            flatten: true,
            src: ["bower_components/fontawesome/fonts/*"
            ],
            dest: 'lib/fonts'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/datatables/media/images/*.png'],
            dest: 'lib/images'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('install-dependencies', ['bower:install', "clean:lib", 'copy:dependencies'] );

};
