'use strict';


var taskClean = require("./Gruntfile/task.clean");



module.exports = function (grunt) {
	

	var config = {
		pkg : grunt.file.readJSON('package.json'),
		
	};

	//IMPORT ALL CONFIGS 
	taskClean.loadConfig(config);

	//INIT CONFIG
	grunt.initConfig(config);
	

	//LOAD CLEAN TASK
	taskClean.loadTask(grunt);

};