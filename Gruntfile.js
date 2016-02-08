'use strict';


module.exports = function (grunt) {
	

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : {
			output: ['toBeCleaned/*']
		}
	});



	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.registerTask("default", ['clean']);

};