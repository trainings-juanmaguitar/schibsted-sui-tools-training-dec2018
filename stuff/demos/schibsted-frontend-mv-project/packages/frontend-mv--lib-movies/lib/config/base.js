'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _credentials = require('./credentials');

var _credentials2 = _interopRequireDefault(_credentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  API_KEY: _credentials2.default.API_KEY,
  API_BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
};