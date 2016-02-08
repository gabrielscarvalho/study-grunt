/**
 * This module compile the raw typescript.
 */
(function (controller) {

  controller.loadTask = function (grunt) {
	grunt.loadNpmTasks("grunt-typescript");
	grunt.registerTask("typescript", ['typescript']);

  };

  controller.loadConfig = function(config){
  	
  	config.typescript = {
		options: {
			module : 'commonjs'
		},
		all: {
			src: ['./tasks/typescript/raw_typescript/*.ts'],
			dest: './tasks/typescript/compiled_javascript'
		}
	};
	return config;
  };


})(module.exports);