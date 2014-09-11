module.exports = function(grunt) { 
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'srLazyLoad.min.js': ['srLazyLoad.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask("default", ["uglify"]);
};