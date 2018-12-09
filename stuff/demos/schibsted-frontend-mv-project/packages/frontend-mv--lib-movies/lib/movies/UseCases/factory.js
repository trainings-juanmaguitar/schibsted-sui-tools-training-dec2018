'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../Repositories/factory');

var _factory2 = _interopRequireDefault(_factory);

var _SearchMoviesUseCase = require('./SearchMoviesUseCase');

var _SearchMoviesUseCase2 = _interopRequireDefault(_SearchMoviesUseCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesUseCasesFactory = (_temp = _class = function MoviesUseCasesFactory() {
  (0, _classCallCheck3.default)(this, MoviesUseCasesFactory);
}, _class.searchMoviesUseCase = function (_ref) {
  var config = _ref.config;
  return new _SearchMoviesUseCase2.default({
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _temp);
exports.default = MoviesUseCasesFactory;