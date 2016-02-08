/**
 * Helper for dealing with config conflicts.
 * If grunt has an attribute already loaded, it warns you in the console.
 */
(function (controller) {

  controller.merge = function (globalConfig, nodeName, nodeConfig) {
      if(typeof globalConfig[nodeName] != 'undefined'){
        

        console.warn('\n------------------- RESOURCE OVERRING ---------------------------\n');
        console.warn('\tThe grunt.config.'+ nodeName +  ' is already loaded. Overiding...');
        console.warn('\t%O Old: ' , globalConfig[nodeName]);
        console.warn('\t%O New: ', nodeConfig);
        console.warn('\n------------------- RESOURCE OVERRING ---------------------------\n');
      }

      globalConfig[nodeName] = nodeConfig;
      return globalConfig;
  };

})(module.exports);