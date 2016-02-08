/**
 * This task do the git command.
 */
(function(controller) {

  controller.init = function(grunt) {
    var shell = require('shelljs');
    shell.echo("\n\nInitializing Git Repository!!!");
    
    shell.mkdir("-p", "tasks/git/cms");
    shell.cd("tasks/git/cms");
    shell.exec("git init");
  };

  controller.loadTask = function(grunt) {
    grunt.registerTask("init-git", "Initializes the git repository of cms", controller.init);
  };

  controller.loadConfig = function(config) {
    var helperConfig = require("./helper.config");
  };

})(module.exports);