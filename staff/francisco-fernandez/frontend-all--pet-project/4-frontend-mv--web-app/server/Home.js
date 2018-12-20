exports.ids = ["Home"];
exports.modules = {

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(_, _ref) {\n  var i18n = _ref.i18n;\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      i18n.t('HOME_TITLE')\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Search for the popular movies now. Or write a title and search a list o films with that name.'\n    )\n  );\n};\n\nHome.contextTypes = { i18n: _propTypes2.default.object };\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./pages/Home/index.js?");

/***/ })

};;