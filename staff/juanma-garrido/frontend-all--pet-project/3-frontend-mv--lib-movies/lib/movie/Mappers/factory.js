'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _MoviesMapper = require('./MoviesMapper');

var _MoviesMapper2 = _interopRequireDefault(_MoviesMapper);

var _factory = require('../Entities/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesMapperFactory = (_temp = _class = function MoviesMapperFactory() {
  (0, _classCallCheck3.default)(this, MoviesMapperFactory);
}, _class.moviesMapper = function (_ref) {
  var config = _ref.config;
  return new _MoviesMapper2.default({
    config: config,
    movieEntity: _factory2.default.movieEntity
  });
}, _temp);
exports.default = MoviesMapperFactory;
module.exports = exports.default;