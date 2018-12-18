"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trunc = require("babel-runtime/core-js/math/trunc");

var _trunc2 = _interopRequireDefault(_trunc);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _moviesrepository = require("./moviesrepository");

var _moviesrepository2 = _interopRequireDefault(_moviesrepository);

var _utils = require("../../utils");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTPMoviesRepository = function (_MoviesRepository) {
  (0, _inherits3.default)(HTTPMoviesRepository, _MoviesRepository);

  function HTTPMoviesRepository(_ref) {
    var config = _ref.config,
        MoviesEntitiesFactory = _ref.MoviesEntitiesFactory,
        fetcher = _ref.fetcher;
    (0, _classCallCheck3.default)(this, HTTPMoviesRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPMoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPMoviesRepository)).call(this));

    _this._fetcher = fetcher;
    _this._config = config;
    _this._MoviesEntitiesFactory = MoviesEntitiesFactory;
    return _this;
  }

  (0, _createClass3.default)(HTTPMoviesRepository, [{
    key: "getPopulars",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var url, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this._config.get("URL_MOVIES") + "movie/popular?api_key=" + this._config.get("API_KEY") + "&language=en-US&page=" + page;
                _context.next = 3;
                return this._fetcher.get(url);

              case 3:
                data = _context.sent;
                return _context.abrupt("return", this._MoviesEntitiesFactory({
                  pagination: {
                    actual_page: data.data.page,
                    total_rows: data.data.total_results,
                    total_pages: data.data.total_pages
                  },
                  data: data.data.results
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPopulars() {
        return _ref2.apply(this, arguments);
      }

      return getPopulars;
    }()
  }, {
    key: "getMovieDetail",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var url, _ref4, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this._config.get("URL_MOVIES") + "movie/" + id + "?api_key=" + this._config.get("API_KEY");
                _context2.next = 3;
                return this._fetcher.get(url);

              case 3:
                _ref4 = _context2.sent;
                data = _ref4.data;
                return _context2.abrupt("return", this._MoviesEntitiesFactory(data));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMovieDetail(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getMovieDetail;
    }()
  }, {
    key: "getLatestMovie",
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var url, _ref6, data;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this._config.get("URL_MOVIES") + "movie/latest?api_key=" + this._config.get("API_KEY");
                _context3.next = 3;
                return this._fetcher.get(url);

              case 3:
                _ref6 = _context3.sent;
                data = _ref6.data;
                return _context3.abrupt("return", this._MoviesEntitiesFactory(data));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getLatestMovie() {
        return _ref5.apply(this, arguments);
      }

      return getLatestMovie;
    }()
  }, {
    key: "searchMovies",
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(query) {
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        var url, _ref8, data, results;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!query || _utils2.default.isEmpty(query))) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 3;
                return this.getPopulars(1);

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
                url = this._config.get("URL_MOVIES") + "movie/popular?api_key=" + this._config.get("API_KEY") + "&language=en-US&page=" + page;
                _context4.next = 7;
                return this._fetcher.get(url);

              case 7:
                _ref8 = _context4.sent;
                data = _ref8.data;
                results = data.results.map(this._MoviesEntitiesFactory);

                results = results.filter(function (movie) {
                  return movie.filter(query);
                });
                return _context4.abrupt("return", this._MoviesEntitiesFactory({
                  pagination: {
                    actual_page: page,
                    total_rows: results.length,
                    total_pages: results.length % 10 === 0 ? results.length / 10 : (0, _trunc2.default)(results.length / 10 + 1)
                  },
                  data: results
                }));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function searchMovies(_x4) {
        return _ref7.apply(this, arguments);
      }

      return searchMovies;
    }()
  }]);
  return HTTPMoviesRepository;
}(_moviesrepository2.default);

exports.default = HTTPMoviesRepository;
module.exports = exports.default;