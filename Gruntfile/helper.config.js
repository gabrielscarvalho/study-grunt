/**
 * Helper for dealing with config conflicts.
 * If grunt has an attribute already loaded, it warns you in the console.
 */
(function (controller) {

  controller.merge = function (globalConfig, nodeName, nodeConfig) {
      if(typeof globalConfig[nodeName] != 'undefined'){
        

        console.warn('\n------------------- RESOURCE OVERRING ---------------------------\n');
        console.warn('\tThe grunt.config.'+ nodeName +  ' is already loaded. Overiding...');
        console.warn('\tOld: %O ' , globalConfig[nodeName]);
        console.warn('\tNew: %O', nodeConfig);
        console.warn('\n------------------- RESOURCE OVERRING ---------------------------\n');
      }

      globalConfig[nodeName] = nodeConfig;
      return globalConfig;
  };

})(module.exports);