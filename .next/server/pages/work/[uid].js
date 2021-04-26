module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/work/[uid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/work/[uid].js":
/*!*****************************!*\
  !*** ./pages/work/[uid].js ***!
  \*****************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SinglePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jeremie/web/50-izem-site-2021/pages/work/[uid].js\";\n\n\nfunction SinglePost(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const uid = router.query.uid;\n  console.log(\"yes\", props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-8 w-full\",\n    children: uid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [\"Post: \", uid]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 47\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, this);\n}\nasync function getStaticProps(context) {\n  // add your Prismic project\n  const apiEndpoint = \"https://izem-site-2021.cdn.prismic.io/api/v2\";\n  const Client = prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.client(apiEndpoint);\n  const uid = context.params.uid;\n  console.log(uid);\n  const data = await Client.query( // specify the data you're querying\n  prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.Predicates.at(\"my.blog-post.uid\", uid));\n  const post = data.results;\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      post\n    } // will be passed to the page component as props\n\n  };\n}\nasync function getStaticPaths() {\n  const apiEndpoint = \"https://izem-site-2021.cdn.prismic.io/api/v2\";\n  const Client = prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.client(apiEndpoint);\n  const data = await Client.query( // specify the data you're querying\n  prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.Predicates.at(\"document.type\", \"blog-post\"));\n  const posts = data.results; // generate the paths\n\n  const paths = posts.map(post => {\n    return {\n      params: {\n        uid: post.uid\n      }\n    };\n  });\n  console.log(\"paths\", paths);\n  return {\n    paths,\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93b3JrL1t1aWRdLmpzPzhiNjEiXSwibmFtZXMiOlsiU2luZ2xlUG9zdCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidWlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiYXBpRW5kcG9pbnQiLCJDbGllbnQiLCJQcmlzbWljIiwiY2xpZW50IiwicGFyYW1zIiwiZGF0YSIsIlByZWRpY2F0ZXMiLCJhdCIsInBvc3QiLCJyZXN1bHRzIiwibm90Rm91bmQiLCJnZXRTdGF0aWNQYXRocyIsInBvc3RzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3hDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxHQUF6QjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CTixLQUFuQjtBQUNBLHNCQUFPO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSxjQUE4QkcsR0FBRyxpQkFBSTtBQUFBLDJCQUFhQSxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtBQUVNLGVBQWVJLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLDhDQUFwQjtBQUNBLFFBQU1DLE1BQU0sR0FBR0MseURBQU8sQ0FBQ0MsTUFBUixDQUFlSCxXQUFmLENBQWY7QUFDQSxRQUFNTixHQUFHLEdBQUdLLE9BQU8sQ0FBQ0ssTUFBUixDQUFlVixHQUEzQjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLFFBQU1XLElBQUksR0FBRyxNQUFNSixNQUFNLENBQUNOLEtBQVAsRUFDakI7QUFDQU8sMkRBQU8sQ0FBQ0ksVUFBUixDQUFtQkMsRUFBbkIsQ0FBc0Isa0JBQXRCLEVBQTBDYixHQUExQyxDQUZpQixDQUFuQjtBQUlBLFFBQU1jLElBQUksR0FBR0gsSUFBSSxDQUFDSSxPQUFsQjs7QUFDQSxNQUFJLENBQUNKLElBQUwsRUFBVztBQUNULFdBQU87QUFDTEssY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUNELFNBQU87QUFDTG5CLFNBQUssRUFBRTtBQUFFaUI7QUFBRixLQURGLENBQ1k7O0FBRFosR0FBUDtBQUdEO0FBRU0sZUFBZUcsY0FBZixHQUFnQztBQUNyQyxRQUFNWCxXQUFXLEdBQUcsOENBQXBCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyx5REFBTyxDQUFDQyxNQUFSLENBQWVILFdBQWYsQ0FBZjtBQUNBLFFBQU1LLElBQUksR0FBRyxNQUFNSixNQUFNLENBQUNOLEtBQVAsRUFDakI7QUFDQU8sMkRBQU8sQ0FBQ0ksVUFBUixDQUFtQkMsRUFBbkIsQ0FBc0IsZUFBdEIsRUFBdUMsV0FBdkMsQ0FGaUIsQ0FBbkI7QUFJQSxRQUFNSyxLQUFLLEdBQUdQLElBQUksQ0FBQ0ksT0FBbkIsQ0FQcUMsQ0FRckM7O0FBQ0EsUUFBTUksS0FBSyxHQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FBV04sSUFBRCxJQUFVO0FBQ2hDLFdBQU87QUFDTEosWUFBTSxFQUFFO0FBQ05WLFdBQUcsRUFBRWMsSUFBSSxDQUFDZDtBQURKO0FBREgsS0FBUDtBQUtELEdBTmEsQ0FBZDtBQU9BRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCZ0IsS0FBckI7QUFDQSxTQUFPO0FBQ0xBLFNBREs7QUFFTEUsWUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlEIiwiZmlsZSI6Ii4vcGFnZXMvd29yay9bdWlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFByaXNtaWMgZnJvbSBcInByaXNtaWMtamF2YXNjcmlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVQb3N0KHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1aWQgPSByb3V0ZXIucXVlcnkudWlkO1xuICBjb25zb2xlLmxvZyhcInllc1wiLCBwcm9wcyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdy1mdWxsXCI+e3VpZCAmJiA8c3Bhbj5Qb3N0OiB7dWlkfTwvc3Bhbj59PC9kaXY+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBhZGQgeW91ciBQcmlzbWljIHByb2plY3RcbiAgY29uc3QgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vaXplbS1zaXRlLTIwMjEuY2RuLnByaXNtaWMuaW8vYXBpL3YyXCI7XG4gIGNvbnN0IENsaWVudCA9IFByaXNtaWMuY2xpZW50KGFwaUVuZHBvaW50KTtcbiAgY29uc3QgdWlkID0gY29udGV4dC5wYXJhbXMudWlkO1xuICBjb25zb2xlLmxvZyh1aWQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgQ2xpZW50LnF1ZXJ5KFxuICAgIC8vIHNwZWNpZnkgdGhlIGRhdGEgeW91J3JlIHF1ZXJ5aW5nXG4gICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KFwibXkuYmxvZy1wb3N0LnVpZFwiLCB1aWQpXG4gICk7XG4gIGNvbnN0IHBvc3QgPSBkYXRhLnJlc3VsdHM7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdCB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9pemVtLXNpdGUtMjAyMS5jZG4ucHJpc21pYy5pby9hcGkvdjJcIjtcbiAgY29uc3QgQ2xpZW50ID0gUHJpc21pYy5jbGllbnQoYXBpRW5kcG9pbnQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgQ2xpZW50LnF1ZXJ5KFxuICAgIC8vIHNwZWNpZnkgdGhlIGRhdGEgeW91J3JlIHF1ZXJ5aW5nXG4gICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KFwiZG9jdW1lbnQudHlwZVwiLCBcImJsb2ctcG9zdFwiKVxuICApO1xuICBjb25zdCBwb3N0cyA9IGRhdGEucmVzdWx0cztcbiAgLy8gZ2VuZXJhdGUgdGhlIHBhdGhzXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB1aWQ6IHBvc3QudWlkLFxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgY29uc29sZS5sb2coXCJwYXRoc1wiLCBwYXRocyk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/work/[uid].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWphdmFzY3JpcHRcIj83OGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtamF2YXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-javascript\n");

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