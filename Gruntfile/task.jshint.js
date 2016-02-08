/**
 * This module imports the jshint
 * Método: grunt jshint;
 *
 */
(function (controller) {

  controller.loadTask = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-jshint");
  };

  controller.loadConfig = function(config){
  	var helperConfig = require("./helper.config");

  	return helperConfig.merge(config, 'jshint', {
  		options: {
  			//force: true // -- obriga o jshint a continuar, mesmo capturando erros.
  			//'-W033' : false // - esse comando ignora os ";" faltando. Comente essa linha e rode o grunt jshint para ver o erro voltar.
  			//ignores : [file ]
  			//reporterOutput : './jshint.txt' // Coloca o resultado em um arquivo.
  		},
  		files: ['./tasks/jshint/teste-erro.js']
  	});
  };


})(module.exports);