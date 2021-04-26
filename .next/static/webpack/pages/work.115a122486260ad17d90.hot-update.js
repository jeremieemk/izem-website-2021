webpackHotUpdate_N_E("pages/work",{

/***/ "./pages/components/PostPreviewList.js":
/*!*********************************************!*\
  !*** ./pages/components/PostPreviewList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostPreviewList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StreamingLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StreamingLinks */ \"./pages/components/StreamingLinks.js\");\n\n\nvar _jsxFileName = \"/Users/jeremie/web/50-izem-site-2021/pages/components/PostPreviewList.js\";\n\n\n\n\nfunction PostPreviewList(props) {\n  var _this = this;\n\n  var posts = props.posts;\n  console.log(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: posts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-8 max-w-2xl grid grid-cols-2 \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"mr-6\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-2xl mb-4\",\n            children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.title)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StreamingLinks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            post: post\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-8 mb-2 text-sm\",\n            children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.preview)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            shallow: true,\n            passHref: true,\n            href: \"/work/\".concat(post.uid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: \" -> Read More \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-60 h-60 \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative w-full h-full \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              src: post.data.image.url,\n              alt: \"post-image\",\n              layout: \"fill\",\n              objectFit: \"cover\",\n              objectPosition: \"center center\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this)]\n      }, post.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false);\n}\n_c = PostPreviewList;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPreviewList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Qb3N0UHJldmlld0xpc3QuanM/NzEzOSJdLCJuYW1lcyI6WyJQb3N0UHJldmlld0xpc3QiLCJwcm9wcyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJSaWNoVGV4dCIsInJlbmRlciIsImRhdGEiLCJ0aXRsZSIsInByZXZpZXciLCJ1aWQiLCJpbWFnZSIsInVybCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFDN0MsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQXBCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0Esc0JBQ0U7QUFBQSxjQUNHQyxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsMEJBQ0U7QUFBbUIsaUJBQVMsRUFBQyxrQ0FBN0I7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsc0JBQ0dDLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxLQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQyx1REFBRDtBQUFnQixnQkFBSSxFQUFFSjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsc0JBQ0dDLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JGLElBQUksQ0FBQ0csSUFBTCxDQUFVRSxPQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFRRSxxRUFBQyxnREFBRDtBQUFNLG1CQUFPLE1BQWI7QUFBYyxvQkFBUSxNQUF0QjtBQUF1QixnQkFBSSxrQkFBV0wsSUFBSSxDQUFDTSxHQUFoQixDQUEzQjtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFhRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG1DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsaUJBQUcsRUFBRU4sSUFBSSxDQUFDRyxJQUFMLENBQVVJLEtBQVYsQ0FBZ0JDLEdBRHZCO0FBRUUsaUJBQUcsRUFBQyxZQUZOO0FBR0Usb0JBQU0sRUFBQyxNQUhUO0FBSUUsdUJBQVMsRUFBQyxPQUpaO0FBS0UsNEJBQWMsRUFBQztBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQSxTQUFVUixJQUFJLENBQUNTLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkJELEtBNUJBO0FBREgsbUJBREY7QUFpQ0Q7S0FwQ3VCZixlIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9Qb3N0UHJldmlld0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFN0cmVhbWluZ0xpbmtzIGZyb20gXCIuL1N0cmVhbWluZ0xpbmtzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQcmV2aWV3TGlzdChwcm9wcykge1xuICBjb25zdCBwb3N0cyA9IHByb3BzLnBvc3RzO1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwibXQtOCBtYXgtdy0yeGwgZ3JpZCBncmlkLWNvbHMtMiBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTRcIj5cbiAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHBvc3QuZGF0YS50aXRsZSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8U3RyZWFtaW5nTGlua3MgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1iLTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocG9zdC5kYXRhLnByZXZpZXcpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgc2hhbGxvdyBwYXNzSHJlZiBocmVmPXtgL3dvcmsvJHtwb3N0LnVpZH1gfT5cbiAgICAgICAgICAgICAgICA8YT4gLT4gUmVhZCBNb3JlIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjAgaC02MCBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmRhdGEuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PVwicG9zdC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/PostPreviewList.js\n");

/***/ })

})