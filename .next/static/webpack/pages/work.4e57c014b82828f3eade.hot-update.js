webpackHotUpdate_N_E("pages/work",{

/***/ "./pages/components/StreamingLinks.js":
/*!********************************************!*\
  !*** ./pages/components/StreamingLinks.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StreamingLinks; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/StreamingLinks.js\";\nfunction StreamingLinks(props) {\n  var _this = this;\n\n  var post = props.post;\n  var platforms = [\"spotify\", \"bandcamp\", \"youtube\", \"soundcloud\"];\n  var showIcon = post.data.bandcamp.url || post.data.spotify.url || post.data.youtube.url || post.data.soundcloud.url;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex items-center\",\n    children: [showIcon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: \"h-4 mr-2\",\n      src: \"/img/listen.png\",\n      alt: \"listen-icon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, this), platforms.map(function (platform) {\n      return post.data[platform].url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        href: post.data[platform].url,\n        target: \"_blank\",\n        className: \"transform duration-100 hover:scale-105 highlight--secondary mr-2 text-sm h-6\",\n        children: platform\n      }, platform, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = StreamingLinks;\n\nvar _c;\n\n$RefreshReg$(_c, \"StreamingLinks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TdHJlYW1pbmdMaW5rcy5qcz9mNGE1Il0sIm5hbWVzIjpbIlN0cmVhbWluZ0xpbmtzIiwicHJvcHMiLCJwb3N0IiwicGxhdGZvcm1zIiwic2hvd0ljb24iLCJkYXRhIiwiYmFuZGNhbXAiLCJ1cmwiLCJzcG90aWZ5IiwieW91dHViZSIsInNvdW5kY2xvdWQiLCJtYXAiLCJwbGF0Zm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDNUMsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsU0FBeEIsRUFBbUMsWUFBbkMsQ0FBbEI7QUFDQSxNQUFNQyxRQUFRLEdBQ1pGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxHQUFuQixJQUNBTCxJQUFJLENBQUNHLElBQUwsQ0FBVUcsT0FBVixDQUFrQkQsR0FEbEIsSUFFQUwsSUFBSSxDQUFDRyxJQUFMLENBQVVJLE9BQVYsQ0FBa0JGLEdBRmxCLElBR0FMLElBQUksQ0FBQ0csSUFBTCxDQUFVSyxVQUFWLENBQXFCSCxHQUp2QjtBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsZUFDR0gsUUFBUSxpQkFDUDtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUcsRUFBQyxpQkFBOUI7QUFBZ0QsU0FBRyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUlHRCxTQUFTLENBQUNRLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQWM7QUFDM0IsYUFDRVYsSUFBSSxDQUFDRyxJQUFMLENBQVVPLFFBQVYsRUFBb0JMLEdBQXBCLGlCQUNFO0FBQ0UsWUFBSSxFQUFFTCxJQUFJLENBQUNHLElBQUwsQ0FBVU8sUUFBVixFQUFvQkwsR0FENUI7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUdFLGlCQUFTLEVBQUMsOEVBSFo7QUFBQSxrQkFNR0s7QUFOSCxTQUlPQSxRQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQVlELEtBYkEsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDtLQTdCdUJaLGMiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1N0cmVhbWluZ0xpbmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RyZWFtaW5nTGlua3MocHJvcHMpIHtcbiAgY29uc3QgcG9zdCA9IHByb3BzLnBvc3Q7XG4gIGNvbnN0IHBsYXRmb3JtcyA9IFtcInNwb3RpZnlcIiwgXCJiYW5kY2FtcFwiLCBcInlvdXR1YmVcIiwgXCJzb3VuZGNsb3VkXCJdO1xuICBjb25zdCBzaG93SWNvbiA9XG4gICAgcG9zdC5kYXRhLmJhbmRjYW1wLnVybCB8fFxuICAgIHBvc3QuZGF0YS5zcG90aWZ5LnVybCB8fFxuICAgIHBvc3QuZGF0YS55b3V0dWJlLnVybCB8fFxuICAgIHBvc3QuZGF0YS5zb3VuZGNsb3VkLnVybDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICB7c2hvd0ljb24gJiYgKFxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtNCBtci0yXCIgc3JjPVwiL2ltZy9saXN0ZW4ucG5nXCIgYWx0PVwibGlzdGVuLWljb25cIiAvPlxuICAgICAgKX1cbiAgICAgIHtwbGF0Zm9ybXMubWFwKChwbGF0Zm9ybSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHBvc3QuZGF0YVtwbGF0Zm9ybV0udXJsICYmIChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGhyZWY9e3Bvc3QuZGF0YVtwbGF0Zm9ybV0udXJsfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gZHVyYXRpb24tMTAwIGhvdmVyOnNjYWxlLTEwNSBoaWdobGlnaHQtLXNlY29uZGFyeSBtci0yIHRleHQtc20gaC02XCJcbiAgICAgICAgICAgICAga2V5PXtwbGF0Zm9ybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BsYXRmb3JtfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/StreamingLinks.js\n");

/***/ })

})