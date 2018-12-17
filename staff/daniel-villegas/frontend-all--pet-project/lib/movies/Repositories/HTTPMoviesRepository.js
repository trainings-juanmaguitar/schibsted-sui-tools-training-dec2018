'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  function HTTPMoviesRepository(_ref) {
    var config = _ref.config,
        moviesEntityFactory = _ref.moviesEntityFactory,
        fetcher = _ref.fetcher;
    (0, _classCallCheck3.default)(this, HTTPMoviesRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPMoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPMoviesRepository)).call(this));

    _this._fetcher = fetcher;
    _this._config = config;
    _this._moviesEntityFactory = moviesEntityFactory;
    return _this;
  }

  (0, _createClass3.default)(HTTPMoviesRepository, [{
    key: 'popular',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var url, key, _ref3, results;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this._config.get('URL_JSON_MOVIES');
                key = this._config.get('URL_KEY');
                _context.next = 4;
                return this._fetcher.get(url + '/movie/popular?api_key=' + key);

              case 4:
                _ref3 = _context.sent;
                results = _ref3.data.results;

                console.log(results.length);
                console.log(results.map);
                return _context.abrupt('return', results.map(this._moviesEntityFactory));

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
  }, {
    key: 'search',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4) {
        var query = _ref4.query;

        var url, key, _ref6, results;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this._config.get('URL_JSON_MOVIES');
                key = this._config.get('URL_KEY');
                _context2.next = 4;
                return this._fetcher.get(url + '/search/movie?api_key=' + key + '&query=' + query);

              case 4:
                _ref6 = _context2.sent;
                results = _ref6.data.results;
                return _context2.abrupt('return', results.map(this._moviesEntityFactory));

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function search(_x) {
        return _ref5.apply(this, arguments);
      }

      return search;
    }()
  }]);
  return HTTPMoviesRepository;
}(_MoviesRepository3.default);

exports.default = HTTPMoviesRepository;
module.exports = exports.default;