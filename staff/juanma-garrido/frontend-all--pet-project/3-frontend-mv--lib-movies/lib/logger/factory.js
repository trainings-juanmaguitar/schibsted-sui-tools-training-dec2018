'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function
 * @param {Object} deps
 * @param {String} deps.prefix
 * */

var isClient = typeof window !== 'undefined';
var isNotTest = process && process.env && process.env.NODE_ENV && process.env.NODE_ENV !== 'test';

var factoryLogger = function factoryLogger() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      prefix = _ref.prefix;

  return function (message) {
    /* eslint-disable */
    isClient && isNotTest && console.log('%c' + +new Date() + ' %cmv:' + prefix + ' \u2192 %c' + message, 'color:green', 'color:blue', 'font-weight: bold');
  };
};

exports.default = factoryLogger;
module.exports = exports.default;