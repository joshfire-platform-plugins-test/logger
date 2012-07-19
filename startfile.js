/**
 * @fileoverview Startfile hook handler for the logger add-on.
 */
define([], function () {
  return function (runtime, params, callback) {
    console.log('addon', 'logger', 'startfile', 'config', params.config);
    return callback(null, params.content);
  };
});