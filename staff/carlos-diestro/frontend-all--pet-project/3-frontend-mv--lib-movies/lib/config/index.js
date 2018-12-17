'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function () {
  function Config(deps) {
    (0, _classCallCheck3.default)(this, Config);

    this._config = (0, _extends3.default)({}, _base2.default);
  }

  (0, _createClass3.default)(Config, [{
    key: 'get',
    value: function get(key) {
      return this._config[key];
    }
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