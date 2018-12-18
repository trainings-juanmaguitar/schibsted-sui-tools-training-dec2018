"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domain = require("@s-ui/domain");

var _factory = require("./movies/usecases/factory");

var _factory2 = _interopRequireDefault(_factory);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _config2.default();
var useCases = {
  get_populars_use_case: _factory2.default.getPopularsUseCase({ config: config }),
  get_movie_detail_use_case: _factory2.default.getMovieDetailUseCase({ config: config }),
  get_latest_movie_use_case: _factory2.default.getLatestMovieUseCase({ config: config }),
  search_movies_use_case: _factory2.default.searchMoviesUseCase({ config: config })
};

var Domain = (0, _domain.EntryPointFactory)({ config: config, useCases: useCases });

exports.default = Domain;
module.exports = exports.default;