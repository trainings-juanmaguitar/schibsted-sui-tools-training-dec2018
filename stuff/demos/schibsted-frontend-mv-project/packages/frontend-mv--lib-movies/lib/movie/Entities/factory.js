'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _MovieEntity = require('./MovieEntity');

var _MovieEntity2 = _interopRequireDefault(_MovieEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieEntitiesFactory = (_temp = _class = function MovieEntitiesFactory() {
  (0, _classCallCheck3.default)(this, MovieEntitiesFactory);
}, _class.movieEntity = function (properties) {
  return new _MovieEntity2.default(properties);
}, _temp);
exports.default = MovieEntitiesFactory;
module.exports = exports.default;