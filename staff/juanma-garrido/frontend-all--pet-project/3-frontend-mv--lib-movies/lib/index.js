'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domain = require('@s-ui/domain');

var _factory = require('./movie/UseCases/factory');

var _factory2 = _interopRequireDefault(_factory);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _config2.default();

var useCases = {
  search_movies_use_case: _factory2.default.searchMoviesUseCase({ config: config }),
  get_movie_details_by_id_use_case: _factory2.default.getMovieDetailsByIdUseCase({ config: config }),
  get_popular_movies_use_case: _factory2.default.getPopularMoviesUseCase({ config: config })
};

var EntryPoint = (0, _domain.EntryPointFactory)({ config: config, useCases: useCases });

exports.default = EntryPoint;
module.exports = exports.default;