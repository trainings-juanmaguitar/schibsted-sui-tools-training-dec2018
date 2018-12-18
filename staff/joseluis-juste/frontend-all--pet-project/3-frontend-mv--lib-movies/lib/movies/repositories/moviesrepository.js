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

var MoviesRepository = function (_Repository) {
  (0, _inherits3.default)(MoviesRepository, _Repository);

  function MoviesRepository() {
    (0, _classCallCheck3.default)(this, MoviesRepository);
    return (0, _possibleConstructorReturn3.default)(this, (MoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(MoviesRepository)).apply(this, arguments));
  }

  (0, _createClass3.default)(MoviesRepository, [{
    key: "getPopulars",
    value: function getPopulars() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      throw new Error("[StudentsRepository#all] mandatory");
    }
  }, {
    key: "getMovieDetail",
    value: function getMovieDetail(id) {
      throw new Error("[StudentsRepository#all] mandatory");
    }
  }, {
    key: "getLatestMovie",
    value: function getLatestMovie() {
      throw new Error("[StudentsRepository#all] mandatory");
    }
  }, {
    key: "searchMovies",
    value: function searchMovies(query) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      throw new Error("[StudentsRepository#all] mandatory");
    }
  }]);
  return MoviesRepository;
}(_domain.Repository);

exports.default = MoviesRepository;
module.exports = exports.default;