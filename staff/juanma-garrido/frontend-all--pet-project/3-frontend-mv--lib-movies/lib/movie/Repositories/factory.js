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

var _factory3 = require('../Mappers/factory');

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require('../../logger/factory');

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesRepositoryFactory = (_temp = _class = function MoviesRepositoryFactory() {
  (0, _classCallCheck3.default)(this, MoviesRepositoryFactory);
}, _class.httpMoviesRepository = function (_ref) {
  var config = _ref.config;
  return new _HTTPMoviesRepository2.default({
    config: config,
    mapper: _factory4.default.moviesMapper({ config: config }),
    log: (0, _factory6.default)({ prefix: 'HTTPMoviesRepository' }),
    fetcher: _domain.FetcherFactory.httpFetcher({ config: config }),
    movieEntityFactory: _factory2.default.movieEntity
  });
}, _temp);
exports.default = MoviesRepositoryFactory;
module.exports = exports.default;