'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _StudentEntity = require('./StudentEntity');

var _StudentEntity2 = _interopRequireDefault(_StudentEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentsEntitiesFactory = (_temp = _class = function StudentsEntitiesFactory() {
  (0, _classCallCheck3.default)(this, StudentsEntitiesFactory);
}, _class.studentEntity = function (student) {
  return new _StudentEntity2.default(student);
}, _temp);
exports.default = StudentsEntitiesFactory;