"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require("../Entities/factory");

var _factory2 = _interopRequireDefault(_factory);

var _RAWStudentsRepository = require("./RAWStudentsRepository");

var _RAWStudentsRepository2 = _interopRequireDefault(_RAWStudentsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentsRepositoriesFactory = (_temp = _class = function StudentsRepositoriesFactory() {
  (0, _classCallCheck3.default)(this, StudentsRepositoriesFactory);
}, _class.rawStudentsRepository = function (_ref) {
  var config = _ref.config;
  return new _RAWStudentsRepository2.default({
    config: config,
    studentsEntityFactory: _factory2.default.studentEntity });
}, _temp);