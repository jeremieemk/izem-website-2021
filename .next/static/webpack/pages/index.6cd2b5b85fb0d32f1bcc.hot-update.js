webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/Post.js":
/*!**********************************!*\
  !*** ./pages/components/Post.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/50-izem-site-2021/pages/components/Post.js\";\n\n\n\nfunction Post(props) {\n  var _this = this;\n\n  console.log(props);\n  var posts = props.posts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: posts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-8 max-w-2xl grid grid-cols-2\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-2xl\",\n            children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.title)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: post.data.spotify.url,\n              target: \"_blank\",\n              className: \"highlight--secondary\",\n              children: \"spotify\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: post.data.bandcamp.url,\n              target: \"_blank\",\n              className: \"highlight--secondary\",\n              children: \"bandcamp\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: post.data.youtube.url,\n              target: \"_blank\",\n              className: \"highlight--secondary\",\n              children: \"youtube\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-8\",\n            children: [\" \", prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.preview), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-60 h-60 \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative w-full h-full \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              src: post.data.image.url,\n              alt: \"post-image\",\n              layout: \"fill\",\n              objectFit: \"cover\",\n              objectPosition: \"center center\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this)]\n      }, post.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Qb3N0LmpzP2UxYzUiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwibWFwIiwicG9zdCIsIlJpY2hUZXh0IiwicmVuZGVyIiwiZGF0YSIsInRpdGxlIiwic3BvdGlmeSIsInVybCIsImJhbmRjYW1wIiwieW91dHViZSIsInByZXZpZXciLCJpbWFnZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE1BQU1HLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFwQjtBQUNBLHNCQUNFO0FBQUEsY0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLDBCQUNFO0FBQW1CLGlCQUFTLEVBQUMsaUNBQTdCO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLHNCQUEyQkMsd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQkYsSUFBSSxDQUFDRyxJQUFMLENBQVVDLEtBQTFCO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLG9DQUNFO0FBQ0Usa0JBQUksRUFBRUosSUFBSSxDQUFDRyxJQUFMLENBQVVFLE9BQVYsQ0FBa0JDLEdBRDFCO0FBRUUsb0JBQU0sRUFBQyxRQUZUO0FBR0UsdUJBQVMsRUFBQyxzQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFO0FBQ0Usa0JBQUksRUFBRU4sSUFBSSxDQUFDRyxJQUFMLENBQVVJLFFBQVYsQ0FBbUJELEdBRDNCO0FBRUUsb0JBQU0sRUFBQyxRQUZUO0FBR0UsdUJBQVMsRUFBQyxzQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQWVFO0FBQ0Usa0JBQUksRUFBRU4sSUFBSSxDQUFDRyxJQUFMLENBQVVLLE9BQVYsQ0FBa0JGLEdBRDFCO0FBRUUsb0JBQU0sRUFBQyxRQUZUO0FBR0UsdUJBQVMsRUFBQyxzQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUF5QkU7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSw0QkFBd0JMLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JGLElBQUksQ0FBQ0csSUFBTCxDQUFVTSxPQUExQixDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQTRCRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG1DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsaUJBQUcsRUFBRVQsSUFBSSxDQUFDRyxJQUFMLENBQVVPLEtBQVYsQ0FBZ0JKLEdBRHZCO0FBRUUsaUJBQUcsRUFBQyxZQUZOO0FBR0Usb0JBQU0sRUFBQyxNQUhUO0FBSUUsdUJBQVMsRUFBQyxPQUpaO0FBS0UsNEJBQWMsRUFBQztBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJGO0FBQUEsU0FBVU4sSUFBSSxDQUFDVyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZDRCxLQTlDQTtBQURILG1CQURGO0FBbUREO0tBdER1QmpCLEkiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgcG9zdHMgPSBwcm9wcy5wb3N0cztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9XCJtdC04IG1heC13LTJ4bCBncmlkIGdyaWQtY29scy0yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e1JpY2hUZXh0LnJlbmRlcihwb3N0LmRhdGEudGl0bGUpfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtwb3N0LmRhdGEuc3BvdGlmeS51cmx9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHNwb3RpZnlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3Bvc3QuZGF0YS5iYW5kY2FtcC51cmx9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGJhbmRjYW1wXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtwb3N0LmRhdGEueW91dHViZS51cmx9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0LS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHlvdXR1YmVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj4ge1JpY2hUZXh0LnJlbmRlcihwb3N0LmRhdGEucHJldmlldyl9IDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjAgaC02MCBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmRhdGEuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PVwicG9zdC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8TGluayBzaGFsbG93IHBhc3NIcmVmIGhyZWY9e2Avd29yay8ke3Bvc3QuZGF0YS5zbHVnWzBdfWB9PlxuICAgICAgICAgICAgICA8YT4gUmVhZCBNb3JlIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Post.js\n");

/***/ })

})