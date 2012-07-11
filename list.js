/**
 * @fileoverview List hook handler for the logger add-on.
 */
define([], function () {
  /**
   * The module returns a factory that creates the handler
   * with the configuration options given as parameter
   */
  return function (config) {
    console.log('addon', 'logger', 'list', 'initialize', config);

    return {
      generate: function (options, callback) {
        console.log('addon', 'logger', 'list', 'generate', options);
        return callback(null, '');
      },

      enhance: function (el, options) {
        console.log('addon', 'logger', 'list', 'enhance', el, options);
      },

      actionCallback: function(options, callback) {
        console.log('addon', 'logger', 'list', 'actionCallback', options);
        return callback();
      }
    };
  };
});