//http://ryanchristiani.com/getting-started-with-grunt-and-sass/
module.exports = function(grunt) {
  
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"), 

    compass: {
      dist: {
        options: {
          sassDir: "scss", 
          cssDir: "css", 
          outputStyle: "compressed"
        }, 
      }
    }, 

    uglify: {
      my_target: {
        files: {
          "js/application.min.js": ["js/application.js"]
        }
      }
    }, 

    watch: {
      css: {
        files: "**/*.scss", 
        tasks: ["compass"]
      }, 
      js: {
        files: "js/application.js", 
        tasks: ["uglify"]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("default", ["watch", "uglify"]);

}