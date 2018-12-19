'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _domain = require('@s-ui/domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesMapper = function (_Mapper) {
  (0, _inherits3.default)(MoviesMapper, _Mapper);

  function MoviesMapper(_ref) {
    var config = _ref.config,
        movieEntity = _ref.movieEntity;
    (0, _classCallCheck3.default)(this, MoviesMapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MoviesMapper.__proto__ || (0, _getPrototypeOf2.default)(MoviesMapper)).call(this));

    _this.map = function (movie) {
      var id = movie.id,
          title = movie.original_title,
          overview = movie.overview,
          language = movie.original_language,
          release = movie.release_date,
          relativePosterPath = movie.posterPath;


      var imageBaseUrl = _this._config.get('IMAGE_BASE_URL');

      return _this._movieEntity({
        id: id,
        title: title,
        overview: overview,
        language: language,
        release: release,
        posterPath: '' + imageBaseUrl + relativePosterPath
      });
    };

    _this._config = config;
    _this._movieEntity = movieEntity;
    return _this;
  }

  return MoviesMapper;
}(_domain.Mapper);

exports.default = MoviesMapper;
module.exports = exports.default;