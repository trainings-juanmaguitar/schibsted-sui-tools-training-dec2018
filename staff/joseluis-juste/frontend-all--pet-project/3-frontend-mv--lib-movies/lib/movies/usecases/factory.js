"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require("../repositories/factory");

var _factory2 = _interopRequireDefault(_factory);

var _getpopularssusecase = require("./getpopularssusecase");

var _getpopularssusecase2 = _interopRequireDefault(_getpopularssusecase);

var _getmoviedetailusecase = require("./getmoviedetailusecase");

var _getmoviedetailusecase2 = _interopRequireDefault(_getmoviedetailusecase);

var _getlatestmovieusecase = require("./getlatestmovieusecase");

var _getlatestmovieusecase2 = _interopRequireDefault(_getlatestmovieusecase);

var _searchmoviesusecase = require("./searchmoviesusecase");

var _searchmoviesusecase2 = _interopRequireDefault(_searchmoviesusecase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesUseCasesFactory = (_temp = _class = function MoviesUseCasesFactory() {
  (0, _classCallCheck3.default)(this, MoviesUseCasesFactory);
}, _class.getPopularsUseCase = function (_ref) {
  var config = _ref.config;
  return new _getpopularssusecase2.default({
    config: config,
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _class.getMovieDetailUseCase = function (_ref2) {
  var config = _ref2.config;
  return new _getmoviedetailusecase2.default({
    config: config,
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _class.getLatestMovieUseCase = function (_ref3) {
  var config = _ref3.config;
  return new _getlatestmovieusecase2.default({
    config: config,
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _class.searchMoviesUseCase = function (_ref4) {
  var config = _ref4.config;
  return new _searchmoviesusecase2.default({
    config: config,
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _temp);
exports.default = MoviesUseCasesFactory;
module.exports = exports.default;