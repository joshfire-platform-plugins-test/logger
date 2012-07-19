/**
 * @fileoverview Item hook handler for the logger add-on.
 */
define([], function () {
  /**
   * The module returns a factory that creates the handler
   * with the configuration options given as parameter
   */
  return function (config) {
    console.log('addon', 'logger', 'item', 'initialize', config);

    return {
      generate: function (options, callback) {
        console.log('addon', 'logger', 'item', 'generate', options);
        return callback(null, '');
      },

      enhance: function (el, options) {
        console.log('addon', 'logger', 'item', 'enhance', el, options);
      }
    };
  };
});