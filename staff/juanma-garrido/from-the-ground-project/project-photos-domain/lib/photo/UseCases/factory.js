'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _GetAllPhotosUseCase = require('./GetAllPhotosUseCase');

var _GetAllPhotosUseCase2 = _interopRequireDefault(_GetAllPhotosUseCase);

var _factory = require('../Repositories/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoUseCasesFactory = (_temp = _class = function PhotoUseCasesFactory() {
  (0, _classCallCheck3.default)(this, PhotoUseCasesFactory);
}, _class.getAllPhotosUseCase = function (_ref) {
  var config = _ref.config;
  return new _GetAllPhotosUseCase2.default({
    config: config,
    repository: _factory2.default.httpPhotoRepository({ config: config })
  });
}, _temp);
exports.default = PhotoUseCasesFactory;