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
			dest: './tasks/typescript/compiled_javascript' // para compilar em um arquivo, informe aqui o js.
		}
		/*
		Remember to remove the 'all' node for testing this.
		@note: just copied, wasnt checked.
		specific_folder : {
			src: ['./tasks/typescript/raw_typescript/specific_folder/*.ts'],
			dest: './tasks/typescript/compiled_javascript/specifc_folder/onefile.js'
		}


		*/
	});
  };


})(module.exports);