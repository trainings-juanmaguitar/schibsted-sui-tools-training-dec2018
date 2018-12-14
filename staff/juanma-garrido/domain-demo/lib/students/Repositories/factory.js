'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _domain = require('@s-ui/domain');

var _factory = require('../Entities/factory');

var _factory2 = _interopRequireDefault(_factory);

var _RAWStudentsRepository = require('./RAWStudentsRepository');

var _RAWStudentsRepository2 = _interopRequireDefault(_RAWStudentsRepository);

var _HTTPStudentsRepository = require('./HTTPStudentsRepository');

var _HTTPStudentsRepository2 = _interopRequireDefault(_HTTPStudentsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentsRepositoriesFactory = (_temp = _class = function StudentsRepositoriesFactory() {
  (0, _classCallCheck3.default)(this, StudentsRepositoriesFactory);
}, _class.rawStudentsRepository = function (_ref) {
  var config = _ref.config;
  return new _RAWStudentsRepository2.default({
    config: config,
    studentsEntityFactory: _factory2.default.studentEntity
  });
}, _class.httpStudentsRepository = function (_ref2) {
  var config = _ref2.config;
  return new _HTTPStudentsRepository2.default({
    config: config,
    studentsEntityFactory: _factory2.default.studentEntity,
    fetcher: _domain.FetcherFactory.httpFetcher({ config: config })
  });
}, _temp);
exports.default = StudentsRepositoriesFactory;
module.exports = exports.default;