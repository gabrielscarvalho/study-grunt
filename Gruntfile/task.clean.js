/**
 * This file imports the task clean, that handles cleaning folders.
 */
(function (controller) {

  controller.loadTask = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.registerTask("default", ['clean']);

  };

  controller.loadConfig = function(config){
  	var helperConfig = require("./helper.config");

  	return helperConfig.merge(config, 'clean',{
		output: ['tasks/toBeCleaned/*']
	});

  };


})(module.exports);