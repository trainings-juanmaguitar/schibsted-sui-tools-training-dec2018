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
        mapper = _ref.mapper,
        log = _ref.log,
        fetcher = _ref.fetcher;

    (0, _classCallCheck3.default)(this, HTTPMoviesRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPMoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPMoviesRepository)).call(this));

    _this._config = config;
    _this._log = log;
    _this._fetcher = fetcher;
    _this._mapper = mapper;
    return _this;
  }

  (0, _createClass3.default)(HTTPMoviesRepository, [{
    key: 'popular',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var host, apiKey, url, _ref3, results;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._log('Getting POPULAR movies');

                host = this._config.get('API_BASE_URL');
                apiKey = this._config.get('API_KEY');
                url = host + '/movie/popular?api_key=' + apiKey;
                _context.next = 6;
                return this._fetcher.get(url);

              case 6:
                _ref3 = _context.sent;
                results = _ref3.data.results;
                return _context.abrupt('return', results.map(this._mapper.map));

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function popular() {
        return _ref2.apply(this, arguments);
      }

      return popular;
    }()

    // all methods of the domain are named → receives an object w/ properties

  }, {
    key: 'search',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            query = _ref5.query;

        var host, apiKey, url, _ref6, results;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._log('Getting movies by query \u2192 ' + query);

                host = this._config.get('API_BASE_URL');
                apiKey = this._config.get('API_KEY');
                url = host + '/search/movie?api_key=' + apiKey + '&query=' + query;
                _context2.next = 6;
                return this._fetcher.get(url);

              case 6:
                _ref6 = _context2.sent;
                results = _ref6.data.results;
                return _context2.abrupt('return', results.map(this._mapper.map));

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function search() {
        return _ref4.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: 'getMovieById',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref7) {
        var idMovie = _ref7.id;

        var host, apiKey, url, _ref9, result;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._log('Getting movie by query \u2192 ' + idMovie);

                host = this._config.get('API_BASE_URL');
                apiKey = this._config.get('API_KEY');
                url = host + '/movie/' + idMovie + '?api_key=' + apiKey;


                console.log(url);
                _context3.next = 7;
                return this._fetcher.get(url);

              case 7:
                _ref9 = _context3.sent;
                result = _ref9.data;
                return _context3.abrupt('return', this._mapper.map(result));

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getMovieById(_x3) {
        return _ref8.apply(this, arguments);
      }

      return getMovieById;
    }()
  }]);
  return HTTPMoviesRepository;
}(_MoviesRepository3.default);

exports.default = HTTPMoviesRepository;
module.exports = exports.default;