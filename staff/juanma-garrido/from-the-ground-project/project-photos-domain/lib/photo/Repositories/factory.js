'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _domain = require('@s-ui/domain');

var _HTTPPhotoRepository = require('./HTTPPhotoRepository');

var _HTTPPhotoRepository2 = _interopRequireDefault(_HTTPPhotoRepository);

var _factory = require('../Entities/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoRepositoryFactory = (_temp = _class = function PhotoRepositoryFactory() {
  (0, _classCallCheck3.default)(this, PhotoRepositoryFactory);
}, _class.httpPhotoRepository = function (_ref) {
  var config = _ref.config;
  return new _HTTPPhotoRepository2.default({
    config: config,
    fetcher: _domain.FetcherFactory.httpFetcher({ config: config }),
    photoEntityFactory: _factory2.default.photoEntity
  });
}, _temp);
exports.default = PhotoRepositoryFactory;