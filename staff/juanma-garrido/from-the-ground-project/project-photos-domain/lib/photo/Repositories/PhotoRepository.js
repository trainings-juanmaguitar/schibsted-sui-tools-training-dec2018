'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _domain = require('@s-ui/domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoRepository = function (_Repository) {
  (0, _inherits3.default)(PhotoRepository, _Repository);

  function PhotoRepository() {
    (0, _classCallCheck3.default)(this, PhotoRepository);
    return (0, _possibleConstructorReturn3.default)(this, (PhotoRepository.__proto__ || (0, _getPrototypeOf2.default)(PhotoRepository)).apply(this, arguments));
  }

  (0, _createClass3.default)(PhotoRepository, [{
    key: 'all',
    value: function all() {
      throw new Error('[PhotoRepository#all] must be implemented');
    }
  }]);
  return PhotoRepository;
}(_domain.Repository);

exports.default = PhotoRepository;