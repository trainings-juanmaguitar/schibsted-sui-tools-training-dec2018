'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _domain = require('@s-ui/domain');

var _factory = require('../Entities/factory');

var _factory2 = _interopRequireDefault(_factory);

var _HTTPMoviesRepository = require('./HTTPMoviesRepository');

var _HTTPMoviesRepository2 = _interopRequireDefault(_HTTPMoviesRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesRepositoriesFactory = (_temp = _class = function MoviesRepositoriesFactory() {
  (0, _classCallCheck3.default)(this, MoviesRepositoriesFactory);
}, _class.httpMoviesRepository = function (_ref) {
  var config = _ref.config;
  return new _HTTPMoviesRepository2.default({
    config: config,
    moviesEntityFactory: _factory2.default.moviesEntity,
    fetcher: _domain.FetcherFactory.httpFetcher({ config: config })
  });
}, _temp);
exports.default = MoviesRepositoriesFactory;
module.exports = exports.default;