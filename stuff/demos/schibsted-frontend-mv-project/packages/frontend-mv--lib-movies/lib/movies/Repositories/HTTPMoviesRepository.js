'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _MoviesRepository2 = require('./MoviesRepository');

var _MoviesRepository3 = _interopRequireDefault(_MoviesRepository2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTPMoviesRepository = function (_MoviesRepository) {
  (0, _inherits3.default)(HTTPMoviesRepository, _MoviesRepository);

  function HTTPMoviesRepository() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        config = _ref.config,
        fetcher = _ref.fetcher,
        movieEntityFactory = _ref.movieEntityFactory;

    (0, _classCallCheck3.default)(this, HTTPMoviesRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPMoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPMoviesRepository)).call(this));

    _this._config = config;
    _this._fetcher = fetcher;
    _this._movieEntityFactory = movieEntityFactory;
    return _this;
  }

  // all methods of the domain are named → receives an object w/ properties


  (0, _createClass3.default)(HTTPMoviesRepository, [{
    key: 'search',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            query = _ref3.query;

        var host, apiKey, url, _ref4, jsonMovies;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                host = this._config.get('API_BASE_URL');
                apiKey = this._config.get('API_KEY');
                url = host + '/search/movie?api_key=' + apiKey + '&query=' + query;
                _context.next = 5;
                return this._fetcher.get(url);

              case 5:
                _ref4 = _context.sent;
                jsonMovies = _ref4.data;
                return _context.abrupt('return', jsonMovies.results.map(function (_ref5) {
                  var id = _ref5.id,
                      title = _ref5.title;
                  return { id: id, title: title };
                }).map(function (movie) {
                  return _this2._movieEntityFactory(movie);
                }));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function search() {
        return _ref2.apply(this, arguments);
      }

      return search;
    }()
  }]);
  return HTTPMoviesRepository;
}(_MoviesRepository3.default);

exports.default = HTTPMoviesRepository;