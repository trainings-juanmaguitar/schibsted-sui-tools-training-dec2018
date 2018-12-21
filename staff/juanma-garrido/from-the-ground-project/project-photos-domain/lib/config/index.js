'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function () {
  function Config() {
    (0, _classCallCheck3.default)(this, Config);

    this.API_BASE_URL = 'https://jsonplaceholder.typicode.com';
  }

  (0, _createClass3.default)(Config, [{
    key: 'get',
    value: function get(key) {
      return this[key];
    }
  }]);
  return Config;
}();

exports.default = Config;