'use strict';


var taskClean = require("./Gruntfile/task.clean");
var taskTypescript = require("./Gruntfile/task.typescript");
var taskJshint = require("./Gruntfile/task.jshint");
var taskUglify = require("./Gruntfile/task.uglify");

var htmlHint = require("./Gruntfile/task.html.hint");
var htmlMin = require("./Gruntfile/task.html.min");


var taskGit = require("./Gruntfile/task.git");



module.exports = function (grunt) {


	var config = {
		pkg : grunt.file.readJSON('package.json'),
		clean: 'a config example that will be overided by task.clean.js'
	};

	//IMPORT ALL CONFIGS 
	taskClean.loadConfig(config);
	taskTypescript.loadConfig(config);
	taskJshint.loadConfig(config);
	taskUglify.loadConfig(config);
	htmlHint.loadConfig(config);
	htmlMin.loadConfig(config);
	taskGit.loadConfig(config);


	//INIT CONFIG
	grunt.initConfig(config);
	

	//LOAD TASKS
	taskClean.loadTask(grunt);
	taskTypescript.loadTask(grunt);
	taskJshint.loadTask(grunt);
	taskUglify.loadTask(grunt);
	htmlHint.loadTask(grunt);
	htmlMin.loadTask(grunt);
	taskGit.loadTask(grunt);

};