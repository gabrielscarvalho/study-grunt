'use strict';


var taskClean = require("./Gruntfile/task.clean");
var taskTypescript = require("./Gruntfile/task.typescript");



module.exports = function (grunt) {
	

	var config = {
		pkg : grunt.file.readJSON('package.json'),
		clean: 'a random value'
		
	};

	//IMPORT ALL CONFIGS 
	taskClean.loadConfig(config);
	taskTypescript.loadConfig(config);



	//INIT CONFIG
	grunt.initConfig(config);
	

	//LOAD TASKS
	taskClean.loadTask(grunt);
	taskTypescript.loadTask(grunt);


};