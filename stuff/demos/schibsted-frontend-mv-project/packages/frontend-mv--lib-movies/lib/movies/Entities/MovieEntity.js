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

  function MovieEntity() {
    (0, _classCallCheck3.default)(this, MovieEntity);
    return (0, _possibleConstructorReturn3.default)(this, (MovieEntity.__proto__ || (0, _getPrototypeOf2.default)(MovieEntity)).apply(this, arguments));
  }

  return MovieEntity;
}(_domain.Entity);

exports.default = MovieEntity;