webpackHotUpdate_N_E("pages/work/[uid]",{

/***/ "./pages/components/SinglePost.js":
/*!****************************************!*\
  !*** ./pages/components/SinglePost.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SinglePost; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StreamingLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StreamingLinks */ \"./pages/components/StreamingLinks.js\");\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/SinglePost.js\";\n\n\n\nfunction SinglePost(props) {\n  var post = props.post[0];\n  console.log(\"single post\", props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-8\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-3xl h-96 \",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"relative w-full h-full \",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          src: post.data.image.url,\n          alt: \"post-image\",\n          layout: \"fill\",\n          objectFit: \"cover\",\n          objectPosition: \"center center\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-8 mb-4 text-2xl\",\n        children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StreamingLinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        post: post\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-6\",\n        children: [\" \", prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.text), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, post.id, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = SinglePost;\n\nvar _c;\n\n$RefreshReg$(_c, \"SinglePost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TaW5nbGVQb3N0LmpzPzkyNTIiXSwibmFtZXMiOlsiU2luZ2xlUG9zdCIsInByb3BzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaW1hZ2UiLCJ1cmwiLCJSaWNoVGV4dCIsInJlbmRlciIsInRpdGxlIiwidGV4dCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3hDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFOLENBQVcsQ0FBWCxDQUFiO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJILEtBQTNCO0FBRUEsc0JBQ0U7QUFBbUIsYUFBUyxFQUFDLE1BQTdCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFFQyxJQUFJLENBQUNHLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsR0FEdkI7QUFFRSxhQUFHLEVBQUMsWUFGTjtBQUdFLGdCQUFNLEVBQUMsTUFIVDtBQUlFLG1CQUFTLEVBQUMsT0FKWjtBQUtFLHdCQUFjLEVBQUM7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFZRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGtCQUNHQyx3REFBUSxDQUFDQyxNQUFULENBQWdCUCxJQUFJLENBQUNHLElBQUwsQ0FBVUssS0FBMUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyx1REFBRDtBQUFnQixZQUFJLEVBQUVSO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsd0JBQXdCTSx3REFBUSxDQUFDQyxNQUFULENBQWdCUCxJQUFJLENBQUNHLElBQUwsQ0FBVU0sSUFBMUIsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQSxLQUFVVCxJQUFJLENBQUNVLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEO0tBMUJ1QlosVSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvU2luZ2xlUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgU3RyZWFtaW5nTGlua3MgZnJvbSBcIi4vU3RyZWFtaW5nTGlua3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUG9zdChwcm9wcykge1xuICBjb25zdCBwb3N0ID0gcHJvcHMucG9zdFswXTtcbiAgY29uc29sZS5sb2coXCJzaW5nbGUgcG9zdFwiLCBwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTN4bCBoLTk2IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLWZ1bGwgXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3Bvc3QuZGF0YS5pbWFnZS51cmx9XG4gICAgICAgICAgICBhbHQ9XCJwb3N0LWltYWdlXCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249XCJjZW50ZXIgY2VudGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1iLTQgdGV4dC0yeGxcIj5cbiAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHBvc3QuZGF0YS50aXRsZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U3RyZWFtaW5nTGlua3MgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+IHtSaWNoVGV4dC5yZW5kZXIocG9zdC5kYXRhLnRleHQpfSA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/SinglePost.js\n");

/***/ })

})