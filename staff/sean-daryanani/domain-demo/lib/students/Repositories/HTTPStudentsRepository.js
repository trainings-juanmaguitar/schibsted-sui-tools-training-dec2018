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

var _StudentsRepository2 = require('./StudentsRepository');

var _StudentsRepository3 = _interopRequireDefault(_StudentsRepository2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTPStudentsRepository = function (_StudentsRepository) {
  (0, _inherits3.default)(HTTPStudentsRepository, _StudentsRepository);

  function HTTPStudentsRepository(_ref) {
    var config = _ref.config,
        studentsEntityFactory = _ref.studentsEntityFactory,
        fetcher = _ref.fetcher;
    (0, _classCallCheck3.default)(this, HTTPStudentsRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPStudentsRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPStudentsRepository)).call(this));

    _this._fetcher = fetcher;
    _this._config = config;
    _this._studentsEntityFactory = studentsEntityFactory;
    return _this;
  }

  (0, _createClass3.default)(HTTPStudentsRepository, [{
    key: 'all',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var url, _ref3, results;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this._config.get('URL_JSON_STUDENTS');
                _context.next = 3;
                return this._fetcher.get(url);

              case 3:
                _ref3 = _context.sent;
                results = _ref3.data;
                return _context.abrupt('return', results.map(this._studentsEntityFactory));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function all() {
        return _ref2.apply(this, arguments);
      }

      return all;
    }()
  }]);
  return HTTPStudentsRepository;
}(_StudentsRepository3.default);

exports.default = HTTPStudentsRepository;