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

var MoviesEntitiesFactory = (_temp = _class = function MoviesEntitiesFactory() {
  (0, _classCallCheck3.default)(this, MoviesEntitiesFactory);
}, _class.movieEntity = function (movie) {
  return new _MovieEntity2.default(movie);
}, _temp);
exports.default = MoviesEntitiesFactory;
module.exports = exports.default;