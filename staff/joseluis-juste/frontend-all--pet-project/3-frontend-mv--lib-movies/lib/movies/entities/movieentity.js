"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _domain = require("@s-ui/domain");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieEntity = function (_Entity) {
  (0, _inherits3.default)(MovieEntity, _Entity);

  function MovieEntity() {
    (0, _classCallCheck3.default)(this, MovieEntity);
    return (0, _possibleConstructorReturn3.default)(this, (MovieEntity.__proto__ || (0, _getPrototypeOf2.default)(MovieEntity)).apply(this, arguments));
  }

  (0, _createClass3.default)(MovieEntity, [{
    key: "filter",
    value: function filter(query) {
      if (query.adult) if (this._adult !== query.adult) return false;
      if (query.title) if (!this._title.toLowerCase().includes(query.title.toLowerCase())) return false;
      if (query.release) if (new Date(query.release).getTime() !== new Date(this._release_date).getTime()) return false;

      return true;
    }
  }]);
  return MovieEntity;
}(_domain.Entity);

exports.default = MovieEntity;
module.exports = exports.default;