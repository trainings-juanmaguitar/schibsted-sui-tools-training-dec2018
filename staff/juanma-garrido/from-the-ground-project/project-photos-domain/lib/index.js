'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domain = require('@s-ui/domain');

var _factory = require('./photo/UseCases/factory');

var _factory2 = _interopRequireDefault(_factory);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _config2.default();
var useCases = {
  get_all_photos_use_case: _factory2.default.getAllPhotosUseCase({ config: config })
};

var EntryPoint = (0, _domain.EntryPointFactory)({ config: config, useCases: useCases });

exports.default = EntryPoint;