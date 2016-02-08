/**
 * This module checks if HTML is ok.
 * grunt htmlhint
 */
(function (controller) {

  controller.loadTask = function (grunt) {
  	grunt.loadNpmTasks("grunt-htmlhint");
  };

  controller.loadConfig = function(config){
  	var helperConfig = require("./helper.config");

  	return helperConfig.merge(config, 'htmlhint',{
      templates : {
        options: {
            'attr-lower-case' : true, 
            'attr-value-not-empty' : true,
            'tag-pair': true,
            'tag-self-close': true,
            'tagname-lowercase' : true,
            'id-class-value' : true,
            'id-class-unique' : true,
            'src-not-empty' : true,
            'img-alt-required' : true

        },
        src: ['./tasks/htmlhint/**/*.html']
      }		    
    });
  };


})(module.exports);