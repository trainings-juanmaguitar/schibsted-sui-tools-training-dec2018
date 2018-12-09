'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _domain = require('@s-ui/domain');

var _HTTPMoviesRepository = require('./HTTPMoviesRepository');

var _HTTPMoviesRepository2 = _interopRequireDefault(_HTTPMoviesRepository);

var _factory = require('../Entities/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesRepositoryFactory = (_temp = _class = function MoviesRepositoryFactory() {
  (0, _classCallCheck3.default)(this, MoviesRepositoryFactory);
}, _class.httpMoviesRepository = function (_ref) {
  var config = _ref.config;
  return new _HTTPMoviesRepository2.default({
    config: config,
    fetcher: _domain.FetcherFactory.httpFetcher({ config: config }),
    movieEntityFactory: _factory2.default.movieEntity
  });
}, _temp);
exports.default = MoviesRepositoryFactory;