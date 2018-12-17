'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _test = require('./environments/test');

var _test2 = _interopRequireDefault(_test);

var _development = require('./environments/development');

var _development2 = _interopRequireDefault(_development);

var _production = require('./environments/production');

var _production2 = _interopRequireDefault(_production);

var _preproduction = require('./environments/preproduction');

var _preproduction2 = _interopRequireDefault(_preproduction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var envConfig = {
  development: _development2.default,
  preproduction: _preproduction2.default,
  production: _production2.default,
  test: _test2.default
};

var environment = process.env.NODE_ENV;

var Config = function () {
  function Config() {
    (0, _classCallCheck3.default)(this, Config);

    this._config = (0, _extends3.default)({}, _base2.default, envConfig[environment]);
  }

  /**
   * @method
   * @param {String} key
   * @return {*}
   */


  (0, _createClass3.default)(Config, [{
    key: 'get',
    value: function get(key) {
      return this._config[key];
    }

    /**
     * @method
     * @param {String} key
     * @param {*} value
     * @return {*}
     */

  }, {
    key: 'set',
    value: function set(key, value) {
      this._config[key] = value;
      return this;
    }
  }]);
  return Config;
}();

exports.default = Config;
module.exports = exports.default;