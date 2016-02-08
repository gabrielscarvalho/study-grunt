/**
 * This module imports the jshint
 * Método: grunt uglify;
 *
 */
(function (controller) {

  controller.loadTask = function (grunt) {
	   grunt.loadNpmTasks("grunt-contrib-uglify");
  };

  controller.loadConfig = function(config){
  	var helperConfig = require("./helper.config");

  	return helperConfig.merge(config, 'uglify', {
        development : {
            files: [{
              expand: true,
              cwd: './tasks/uglify/normal/', //current working directory
              src : '*.js', //the pattern to match the files.
              dest: './tasks/uglify/uglified/'
            }]
        },
        options: {

        }

    });
  };


})(module.exports);