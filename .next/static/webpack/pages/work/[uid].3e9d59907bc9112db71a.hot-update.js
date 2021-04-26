webpackHotUpdate_N_E("pages/work/[uid]",{

/***/ "./pages/components/SinglePost.js":
/*!****************************************!*\
  !*** ./pages/components/SinglePost.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SinglePost; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jeremie/web/50-izem-site-2021/pages/components/SinglePost.js\";\n\n\nfunction SinglePost(props) {\n  var post = props.post[0];\n  console.log(\"single post\", props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-8 max-w-2xl grid grid-cols-2\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-2xl\",\n        children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: post.data.spotify.url,\n          target: \"_blank\",\n          className: \"highlight--secondary\",\n          children: \"spotify\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: post.data.bandcamp.url,\n          target: \"_blank\",\n          className: \"highlight--secondary\",\n          children: \"bandcamp\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: post.data.youtube.url,\n          target: \"_blank\",\n          className: \"highlight--secondary\",\n          children: \"youtube\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-8\",\n        children: [\" \", prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.preview), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-60 h-60 \",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"relative w-full h-full \",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          src: post.data.image.url,\n          alt: \"post-image\",\n          layout: \"fill\",\n          objectFit: \"cover\",\n          objectPosition: \"center center\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, post.id, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = SinglePost;\n\nvar _c;\n\n$RefreshReg$(_c, \"SinglePost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TaW5nbGVQb3N0LmpzPzkyNTIiXSwibmFtZXMiOlsiU2luZ2xlUG9zdCIsInByb3BzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJSaWNoVGV4dCIsInJlbmRlciIsImRhdGEiLCJ0aXRsZSIsInNwb3RpZnkiLCJ1cmwiLCJiYW5kY2FtcCIsInlvdXR1YmUiLCJwcmV2aWV3IiwiaW1hZ2UiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN4QyxNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBTixDQUFXLENBQVgsQ0FBYjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSCxLQUEzQjtBQUVBLHNCQUNFO0FBQW1CLGFBQVMsRUFBQyxpQ0FBN0I7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsa0JBQTJCSSx3REFBUSxDQUFDQyxNQUFULENBQWdCSixJQUFJLENBQUNLLElBQUwsQ0FBVUMsS0FBMUI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBRU4sSUFBSSxDQUFDSyxJQUFMLENBQVVFLE9BQVYsQ0FBa0JDLEdBRDFCO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsbUJBQVMsRUFBQyxzQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQ0UsY0FBSSxFQUFFUixJQUFJLENBQUNLLElBQUwsQ0FBVUksUUFBVixDQUFtQkQsR0FEM0I7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxtQkFBUyxFQUFDLHNCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBZUU7QUFDRSxjQUFJLEVBQUVSLElBQUksQ0FBQ0ssSUFBTCxDQUFVSyxPQUFWLENBQWtCRixHQUQxQjtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLG1CQUFTLEVBQUMsc0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUF5QkU7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSx3QkFBd0JMLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLElBQUksQ0FBQ0ssSUFBTCxDQUFVTSxPQUExQixDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE0QkU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFFWCxJQUFJLENBQUNLLElBQUwsQ0FBVU8sS0FBVixDQUFnQkosR0FEdkI7QUFFRSxhQUFHLEVBQUMsWUFGTjtBQUdFLGdCQUFNLEVBQUMsTUFIVDtBQUlFLG1CQUFTLEVBQUMsT0FKWjtBQUtFLHdCQUFjLEVBQUM7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGO0FBQUEsS0FBVVIsSUFBSSxDQUFDYSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDtLQTlDdUJmLFUiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NpbmdsZVBvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVQb3N0KHByb3BzKSB7XG4gIGNvbnN0IHBvc3QgPSBwcm9wcy5wb3N0WzBdO1xuICBjb25zb2xlLmxvZyhcInNpbmdsZSBwb3N0XCIsIHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9XCJtdC04IG1heC13LTJ4bCBncmlkIGdyaWQtY29scy0yXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e1JpY2hUZXh0LnJlbmRlcihwb3N0LmRhdGEudGl0bGUpfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtwb3N0LmRhdGEuc3BvdGlmeS51cmx9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LS1zZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHNwb3RpZnlcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e3Bvc3QuZGF0YS5iYW5kY2FtcC51cmx9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LS1zZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIGJhbmRjYW1wXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtwb3N0LmRhdGEueW91dHViZS51cmx9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LS1zZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHlvdXR1YmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj4ge1JpY2hUZXh0LnJlbmRlcihwb3N0LmRhdGEucHJldmlldyl9IDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjAgaC02MCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtwb3N0LmRhdGEuaW1hZ2UudXJsfVxuICAgICAgICAgICAgYWx0PVwicG9zdC1pbWFnZVwiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SinglePost.js\n");

/***/ })

})