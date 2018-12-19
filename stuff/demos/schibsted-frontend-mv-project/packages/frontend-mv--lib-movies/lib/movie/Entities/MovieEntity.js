'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

/**
 * @export
 * @class MovieEntity
 * @extends {Entity}
 */
var MovieEntity = function (_Entity) {
  (0, _inherits3.default)(MovieEntity, _Entity);

  /**
   * @param {Number} id
   * @param {String} title
   * @param {String} release
   * @param {String} overview
   * @param {String} language
   * @param {String} posterPath
   */
  function MovieEntity(_ref) {
    var id = _ref.id,
        title = _ref.title,
        release = _ref.release,
        overview = _ref.overview,
        language = _ref.language,
        posterPath = _ref.posterPath;
    (0, _classCallCheck3.default)(this, MovieEntity);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovieEntity.__proto__ || (0, _getPrototypeOf2.default)(MovieEntity)).call(this));

    _this.toJSON = function () {
      return {
        id: _this._id,
        title: _this._title,
        overview: _this._overview,
        language: _this._language,
        release: _this._release,
        posterPath: _this._posterPath
      };
    };

    _this._id = id;
    _this._title = title;
    _this._overview = overview;
    _this._language = language;
    _this._release = release;
    _this._posterPath = posterPath;
    return _this;
  }

  return MovieEntity;
}(_domain.Entity);

exports.default = MovieEntity;
module.exports = exports.default;