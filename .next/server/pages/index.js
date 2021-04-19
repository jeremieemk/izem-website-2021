module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Post.js":
/*!**********************************!*\
  !*** ./pages/components/Post.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/50-izem-site-2021/pages/components/Post.js\";\n\nfunction Post(props) {\n  console.log(props);\n  const posts = props.posts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-8\",\n    children: posts.map(post => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: [\" \", prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.title), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\" \", prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.text), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1Bvc3QuanM/ZTFjNSJdLCJuYW1lcyI6WyJQb3N0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiUmljaFRleHQiLCJyZW5kZXIiLCJkYXRhIiwidGl0bGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxRQUFNRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBcEI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsY0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVdDLElBQUQsSUFBVTtBQUNuQiwwQkFDRTtBQUFBLGdDQUNFO0FBQUEsMEJBQU1DLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxLQUExQixDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsMEJBQUtILHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JGLElBQUksQ0FBQ0csSUFBTCxDQUFVRSxJQUExQixDQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBLHNCQURGO0FBTUQsS0FQQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9Qb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBwb3N0cyA9IHByb3BzLnBvc3RzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDM+IHtSaWNoVGV4dC5yZW5kZXIocG9zdC5kYXRhLnRpdGxlKX0gPC9oMz5cbiAgICAgICAgICAgIDxwPiB7UmljaFRleHQucmVuZGVyKHBvc3QuZGF0YS50ZXh0KX0gPC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Post.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Post */ \"./pages/components/Post.js\");\n\n\nvar _jsxFileName = \"/Users/jeremie/web/50-izem-site-2021/pages/index.js\";\n\n\n\n\nfunction Home(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preload\",\n        as: \"font\",\n        href: \"/fonts/bentonsansregular.otf\",\n        type: \"font/otf\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"My new site\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      animate: {\n        opacity: 1\n      },\n      transition: {\n        duration: 0.5\n      },\n      initial: {\n        opacity: 0\n      },\n      className: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-screen p-10 flex flex-col justify-center items-center text-center\",\n        children: [\"Hey, I'm J\\xE9r\\xE9mie Moussa\\xEFd Kerouanton aka\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"highlight text-2xl m-3\",\n          children: \"iZem\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"I produce \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"highlight--secondary\",\n            children: \"music\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 23\n          }, this), \" and I write \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"highlight--secondary\",\n            children: \"code\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), props.blogPosts && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        posts: props.blogPosts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 29\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nasync function getStaticProps() {\n  // add your Prismic project\n  const apiEndpoint = \"https://izem-site-2021.cdn.prismic.io/api/v2\";\n  const Client = prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.client(apiEndpoint);\n  const data = await Client.query( // specify the data you're querying\n  prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at(\"document.type\", \"blog-post\"));\n  const blogPosts = data.results;\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      blogPosts\n    } // will be passed to the page component as props\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImJsb2dQb3N0cyIsImdldFN0YXRpY1Byb3BzIiwiYXBpRW5kcG9pbnQiLCJDbGllbnQiLCJQcmlzbWljIiwiY2xpZW50IiwiZGF0YSIsInF1ZXJ5IiwiUHJlZGljYXRlcyIsImF0IiwicmVzdWx0cyIsIm5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsU0FETjtBQUVFLFVBQUUsRUFBQyxNQUZMO0FBR0UsWUFBSSxFQUFDLDhCQUhQO0FBSUUsWUFBSSxFQUFDLFVBSlA7QUFLRSxtQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGFBQU8sRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURYO0FBRUUsZ0JBQVUsRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FGZDtBQUdFLGFBQU8sRUFBRTtBQUFFRCxlQUFPLEVBQUU7QUFBWCxPQUhYO0FBSUUsZUFBUyxFQUFDLEVBSlo7QUFBQSw4QkFNRTtBQUFLLGlCQUFTLEVBQUMscUVBQWY7QUFBQSx3RUFDMkMsR0FEM0MsZUFFRTtBQUFNLG1CQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxnREFDWTtBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURaLGdDQUVRO0FBQU0scUJBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLEVBY0dELEtBQUssQ0FBQ0csU0FBTixpQkFBbUIscUVBQUMsd0RBQUQ7QUFBTSxhQUFLLEVBQUVILEtBQUssQ0FBQ0c7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBLGtCQURGO0FBOEJEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQztBQUNBLFFBQU1DLFdBQVcsR0FBRyw4Q0FBcEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHlEQUFPLENBQUNDLE1BQVIsQ0FBZUgsV0FBZixDQUFmO0FBQ0EsUUFBTUksSUFBSSxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksS0FBUCxFQUNqQjtBQUNBSCwyREFBTyxDQUFDSSxVQUFSLENBQW1CQyxFQUFuQixDQUFzQixlQUF0QixFQUF1QyxXQUF2QyxDQUZpQixDQUFuQjtBQUlBLFFBQU1ULFNBQVMsR0FBR00sSUFBSSxDQUFDSSxPQUF2Qjs7QUFDQSxNQUFJLENBQUNKLElBQUwsRUFBVztBQUNULFdBQU87QUFDTEssY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUNELFNBQU87QUFDTGQsU0FBSyxFQUFFO0FBQUVHO0FBQUYsS0FERixDQUNpQjs7QUFEakIsR0FBUDtBQUdEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpc21pYyBmcm9tIFwicHJpc21pYy1qYXZhc2NyaXB0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Qb3N0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgICBocmVmPVwiL2ZvbnRzL2JlbnRvbnNhbnNyZWd1bGFyLm90ZlwiXG4gICAgICAgICAgdHlwZT1cImZvbnQvb3RmXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgID48L2xpbms+XG4gICAgICAgIDx0aXRsZT5NeSBuZXcgc2l0ZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHAtMTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBIZXksIEknbSBKw6lyw6ltaWUgTW91c3Nhw69kIEtlcm91YW50b24gYWthe1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodCB0ZXh0LTJ4bCBtLTNcIj5pWmVtPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgSSBwcm9kdWNlIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodC0tc2Vjb25kYXJ5XCI+bXVzaWM8L3NwYW4+IGFuZCBJXG4gICAgICAgICAgICB3cml0ZSA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHQtLXNlY29uZGFyeVwiPmNvZGU8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Byb3BzLmJsb2dQb3N0cyAmJiA8UG9zdCBwb3N0cz17cHJvcHMuYmxvZ1Bvc3RzfSAvPn1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBhZGQgeW91ciBQcmlzbWljIHByb2plY3RcbiAgY29uc3QgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vaXplbS1zaXRlLTIwMjEuY2RuLnByaXNtaWMuaW8vYXBpL3YyXCI7XG4gIGNvbnN0IENsaWVudCA9IFByaXNtaWMuY2xpZW50KGFwaUVuZHBvaW50KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IENsaWVudC5xdWVyeShcbiAgICAvLyBzcGVjaWZ5IHRoZSBkYXRhIHlvdSdyZSBxdWVyeWluZ1xuICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdChcImRvY3VtZW50LnR5cGVcIiwgXCJibG9nLXBvc3RcIilcbiAgKTtcbiAgY29uc3QgYmxvZ1Bvc3RzID0gZGF0YS5yZXN1bHRzO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGJsb2dQb3N0cyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWphdmFzY3JpcHRcIj83OGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtamF2YXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-javascript\n");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-reactjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLXJlYWN0anNcIj9iZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtcmVhY3Rqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtcmVhY3Rqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-reactjs\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });