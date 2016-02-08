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
          mangle: false, //deve mudar o tamanho do nome das variáveis?
          compress: {
            drop_console: true // remove todos os console.log
          },
          beautify: true, //faz a compressão 'bonita', deixando o arquivo legível.
        } 

    });
  };


})(module.exports);