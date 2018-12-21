'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _PhotoEntity = require('./PhotoEntity');

var _PhotoEntity2 = _interopRequireDefault(_PhotoEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoEntitiesFactory = (_temp = _class = function PhotoEntitiesFactory() {
  (0, _classCallCheck3.default)(this, PhotoEntitiesFactory);
}, _class.photoEntity = function (properties) {
  return new _PhotoEntity2.default(properties);
}, _temp);
exports.default = PhotoEntitiesFactory;