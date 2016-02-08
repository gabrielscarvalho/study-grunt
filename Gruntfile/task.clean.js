(function (controller) {

  controller.loadTask = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.registerTask("default", ['clean']);

  };

  controller.loadConfig = function(config){
	config.clean : {
		output: ['toBeCleaned/*']
	}
	return config;
  }


})(module.exports);