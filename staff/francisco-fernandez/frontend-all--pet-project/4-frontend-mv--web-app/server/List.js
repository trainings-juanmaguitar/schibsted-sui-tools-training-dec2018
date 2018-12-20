exports.ids = ["List"];
exports.modules = {

/***/ "./components/ListMovies/index.js":
/*!****************************************!*\
  !*** ./components/ListMovies/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Link = __webpack_require__(/*! react-router/lib/Link */ \"../node_modules/react-router/lib/Link.js\");\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ListMovies = function ListMovies(_ref) {\n  var movies = _ref.movies;\n  return _react2.default.createElement(\n    'ul',\n    { className: 'ListMovies' },\n    movies.map(function (movie) {\n      return _react2.default.createElement(\n        'li',\n        { key: movie.id },\n        _react2.default.createElement(\n          _Link2.default,\n          { to: '/detail/' + movie.id },\n          movie.title\n        )\n      );\n    })\n  );\n};\nListMovies.propTypes = process.env.NODE_ENV !== \"production\" ? { movies: _propTypes2.default.array } : {};\n\nexports.default = ListMovies;\n\n//# sourceURL=webpack:///./components/ListMovies/index.js?");

/***/ }),

/***/ "./components/SearchMovies/index.js":
/*!******************************************!*\
  !*** ./components/SearchMovies/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Link = __webpack_require__(/*! react-router/lib/Link */ \"../node_modules/react-router/lib/Link.js\");\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SearchMovies = function SearchMovies(_ref) {\n  var movies = _ref.movies;\n  return _react2.default.createElement(\n    'ul',\n    { className: 'SearchMovies' },\n    movies.map(function (movie) {\n      return _react2.default.createElement(\n        'li',\n        { key: movie.id },\n        _react2.default.createElement(\n          _Link2.default,\n          { to: '/detail/' + movie.id },\n          movie.title\n        )\n      );\n    })\n  );\n};\nSearchMovies.propTypes = process.env.NODE_ENV !== \"production\" ? { movies: _propTypes2.default.array } : {};\n\nexports.default = SearchMovies;\n\n//# sourceURL=webpack:///./components/SearchMovies/index.js?");

/***/ }),

/***/ "./pages/List/index.js":
/*!*****************************!*\
  !*** ./pages/List/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"../node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"../node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _ListMovies = __webpack_require__(/*! ../../components/ListMovies */ \"./components/ListMovies/index.js\");\n\nvar _ListMovies2 = _interopRequireDefault(_ListMovies);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Helmet from 'react-helmet'\nvar List = function List(_ref) {\n  var movies = _ref.movies;\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Popular movies'\n    ),\n    _react2.default.createElement(_ListMovies2.default, { movies: movies })\n  );\n};\n\nList.propTypes = process.env.NODE_ENV !== \"production\" ? { movies: _propTypes2.default.array } : {};\nList.contextTypes = { i18n: _propTypes2.default.object };\nList.renderLoading = function () {\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'Loading...'\n  );\n};\nList.getInitialProps = function () {\n  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {\n    var context = _ref2.context;\n    var domain, movies;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            domain = context.domain;\n            _context.next = 3;\n            return domain.get('list_movies_use_case').execute();\n\n          case 3:\n            movies = _context.sent;\n            return _context.abrupt('return', {\n              movies: movies || [],\n              canonical: 'http:/spa.mock/list'\n            });\n\n          case 5:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nexports.default = List;\n\n//# sourceURL=webpack:///./pages/List/index.js?");

/***/ }),

/***/ "./pages/Search/index.js":
/*!*******************************!*\
  !*** ./pages/Search/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"../node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"../node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _SearchMovies = __webpack_require__(/*! ../../components/SearchMovies */ \"./components/SearchMovies/index.js\");\n\nvar _SearchMovies2 = _interopRequireDefault(_SearchMovies);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Helmet from 'react-helmet'\nvar Search = function Search(_ref) {\n  var movies = _ref.movies;\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Searched by Name'\n    ),\n    _react2.default.createElement(_SearchMovies2.default, { movies: movies })\n  );\n};\n\nSearch.propTypes = process.env.NODE_ENV !== \"production\" ? { movies: _propTypes2.default.array } : {};\nSearch.contextTypes = { i18n: _propTypes2.default.object };\nSearch.renderLoading = function () {\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'Loading...'\n  );\n};\nSearch.getInitialProps = function () {\n  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {\n    var context = _ref2.context;\n    var domain, movies;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            domain = context.domain;\n            _context.next = 3;\n            return domain.get('list_movies_use_case').execute();\n\n          case 3:\n            movies = _context.sent;\n            return _context.abrupt('return', {\n              movies: movies || [],\n              canonical: 'http:/spa.mock/list'\n            });\n\n          case 5:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./pages/Search/index.js?");

/***/ })

};;