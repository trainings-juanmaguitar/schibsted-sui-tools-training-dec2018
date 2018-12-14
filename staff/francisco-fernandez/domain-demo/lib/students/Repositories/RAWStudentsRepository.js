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

var RAWStudentsRepository = function (_StudentsRepository) {
  (0, _inherits3.default)(RAWStudentsRepository, _StudentsRepository);

  function RAWStudentsRepository(_ref) {
    var config = _ref.config,
        studentsEntityFactory = _ref.studentsEntityFactory;
    (0, _classCallCheck3.default)(this, RAWStudentsRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RAWStudentsRepository.__proto__ || (0, _getPrototypeOf2.default)(RAWStudentsRepository)).call(this));

    _this._config = config;
    _this._studentsEntityFactory = studentsEntityFactory;
    return _this;
  }

  (0, _createClass3.default)(RAWStudentsRepository, [{
    key: 'all',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var students;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                students = [{
                  id: 1,
                  github: '@anasanjuan',
                  name: 'anasanjuan',
                  alias: ''
                }, {
                  id: 2,
                  github: '@b-rage',
                  name: 'Gianluca',
                  alias: 'b-rage'
                }];
                return _context.abrupt('return', students.map(this._studentsEntityFactory));

              case 2:
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
  return RAWStudentsRepository;
}(_StudentsRepository3.default);

exports.default = RAWStudentsRepository;