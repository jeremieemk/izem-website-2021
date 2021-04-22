webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/Post.js":
/*!**********************************!*\
  !*** ./pages/components/Post.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/50-izem-site-2021/pages/components/Post.js\";\n\n\nfunction Post(props) {\n  var _this = this;\n\n  console.log(props);\n  var posts = props.posts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: posts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-2xl\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full h-2xl\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative w-full h-full \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              src: post.data.image.url,\n              alt: \"post-image\",\n              layout: \"fill\",\n              objectFit: \"cover\",\n              objectPosition: \"center center\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [\" \", prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.title), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [\" \", prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.text), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, _this)]\n      }, post.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Qb3N0LmpzP2UxYzUiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwibWFwIiwicG9zdCIsImRhdGEiLCJpbWFnZSIsInVybCIsIlJpY2hUZXh0IiwicmVuZGVyIiwidGl0bGUiLCJ0ZXh0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxNQUFNRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBcEI7QUFDQSxzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNuQiwwQkFDRTtBQUFtQixpQkFBUyxFQUFDLFdBQTdCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMseUJBQWY7QUFBQSxtQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGlCQUFHLEVBQUVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUR2QjtBQUVFLGlCQUFHLEVBQUMsWUFGTjtBQUdFLG9CQUFNLEVBQUMsTUFIVDtBQUlFLHVCQUFTLEVBQUMsT0FKWjtBQUtFLDRCQUFjLEVBQUM7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUU7QUFBQSwwQkFBT0Msd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQkwsSUFBSSxDQUFDQyxJQUFMLENBQVVLLEtBQTFCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBYUU7QUFBQSwwQkFBT0Ysd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQkwsSUFBSSxDQUFDQyxJQUFMLENBQVVNLElBQTFCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUEsU0FBVVAsSUFBSSxDQUFDUSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCRCxLQWxCQTtBQURILG1CQURGO0FBdUJEO0tBMUJ1QmQsSSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBwb3N0cyA9IHByb3BzLnBvc3RzO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cIm1heC13LTJ4bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yeGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmRhdGEuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PVwicG9zdC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+IHtSaWNoVGV4dC5yZW5kZXIocG9zdC5kYXRhLnRpdGxlKX0gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PiB7UmljaFRleHQucmVuZGVyKHBvc3QuZGF0YS50ZXh0KX0gPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Post.js\n");

/***/ })

})