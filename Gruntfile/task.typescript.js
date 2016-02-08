/**
 * This module compile the raw typescript.
 * Método: grunt typescript;
 *
 */
(function (controller) {

  controller.loadTask = function (grunt) {
	grunt.loadNpmTasks("grunt-typescript");
  };

  controller.loadConfig = function(config){
  	var helperConfig = require("./helper.config");

  	return helperConfig.merge(config, 'typescript', {
		options: {
			module : 'commonjs'
		},
		all: {
			src: ['./tasks/typescript/raw_typescript/*.ts'],
			dest: './tasks/typescript/compiled_javascript'
		}
	});
  };


})(module.exports);