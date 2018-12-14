'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../Repositories/factory');

var _factory2 = _interopRequireDefault(_factory);

var _ListStudentsUseCase = require('./ListStudentsUseCase');

var _ListStudentsUseCase2 = _interopRequireDefault(_ListStudentsUseCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentsUseCasesFactory = (_temp = _class = function StudentsUseCasesFactory() {
  (0, _classCallCheck3.default)(this, StudentsUseCasesFactory);
}, _class.listStudentsUseCase = function (_ref) {
  var config = _ref.config;
  return new _ListStudentsUseCase2.default({
    config: config,
    repository: _factory2.default.httpStudentsRepository({ config: config })
  });
}, _temp);
exports.default = StudentsUseCasesFactory;