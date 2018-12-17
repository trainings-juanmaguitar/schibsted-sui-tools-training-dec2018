'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domain = require('@s-ui/domain');

var _factory = require('./movies/UseCases/factory');

var _factory2 = _interopRequireDefault(_factory);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _config2.default();
var useCases = {
  list_popular_movies_use_case: _factory2.default.listPopularMoviesUseCase({ config: config }),
  search_by_name_movies_use_case: _factory2.default.searchByNameMoviesUseCase({ config: config })
};

console.log('IT WORKS!!!!!'); // eslint-disable-line

var Domain = (0, _domain.EntryPointFactory)({ config: config, useCases: useCases });

exports.default = Domain;
module.exports = exports.default;