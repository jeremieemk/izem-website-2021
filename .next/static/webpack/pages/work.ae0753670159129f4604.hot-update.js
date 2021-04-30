webpackHotUpdate_N_E("pages/work",{

/***/ "./pages/components/PostPreviewList.js":
/*!*********************************************!*\
  !*** ./pages/components/PostPreviewList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostPreviewList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StreamingLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StreamingLinks */ \"./pages/components/StreamingLinks.js\");\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/PostPreviewList.js\";\n\n\n\n\nfunction PostPreviewList(props) {\n  var _this = this;\n\n  var posts = props.posts;\n  console.log(props);\n\n  function imageUrl(post) {\n    return post.data.squareimage.url ? post.data.squareimage.url : post.data.image.url;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" max-w-3xl mt-2  \",\n    children: posts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \" mt-10 mb-2 flex flex-col-reverse md:grid md:grid-cols-2 \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"mr-6 cursor-pointer\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: \"/work/\".concat(post.uid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"text-2xl hover:opacity-80\",\n              children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.title)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StreamingLinks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            post: post\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: \"/work/\".concat(post.uid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"leading-5 mt-8 mb-2 text-sm cursor-pointer hover:opacity-80\",\n                children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].render(post.data.preview)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"cursor-pointer hover:opacity-80\",\n                children: \"Read More\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/work/\".concat(post.uid),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"transform duration-200 hover:scale-105 cursor-pointer flex w-full h-full  justify-center items-center \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"relative w-60 h-60 mb-8 md:mb-0\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                src: imageUrl(post),\n                alt: \"post-image\",\n                layout: \"fill\",\n                objectFit: \"cover\",\n                priority: true,\n                objectPosition: \"center center\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this)]\n      }, post.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n_c = PostPreviewList;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPreviewList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Qb3N0UHJldmlld0xpc3QuanM/NzEzOSJdLCJuYW1lcyI6WyJQb3N0UHJldmlld0xpc3QiLCJwcm9wcyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwicG9zdCIsImRhdGEiLCJzcXVhcmVpbWFnZSIsInVybCIsImltYWdlIiwibWFwIiwidWlkIiwiUmljaFRleHQiLCJyZW5kZXIiLCJ0aXRsZSIsInByZXZpZXciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFDN0MsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQXBCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaOztBQUNBLFdBQVNJLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3RCLFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxXQUFWLENBQXNCQyxHQUF0QixHQUNISCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixDQUFzQkMsR0FEbkIsR0FFSEgsSUFBSSxDQUFDQyxJQUFMLENBQVVHLEtBQVYsQ0FBZ0JELEdBRnBCO0FBR0Q7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSxjQUNHUCxLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFDTCxJQUFELEVBQVU7QUFDbkIsMEJBQ0U7QUFFRSxpQkFBUyxFQUFDLDJEQUZaO0FBQUEsZ0NBSUU7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsa0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxrQkFBV0EsSUFBSSxDQUFDTSxHQUFoQixDQUFWO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsd0JBQ0dDLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JSLElBQUksQ0FBQ0MsSUFBTCxDQUFVUSxLQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUUscUVBQUMsdURBQUQ7QUFBZ0IsZ0JBQUksRUFBRVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksa0JBQVdBLElBQUksQ0FBQ00sR0FBaEIsQ0FBVjtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLDZEQUFmO0FBQUEsMEJBQ0dDLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JSLElBQUksQ0FBQ0MsSUFBTCxDQUFVUyxPQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFNLHlCQUFTLEVBQUMsaUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBc0JFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxrQkFBV1YsSUFBSSxDQUFDTSxHQUFoQixDQUFWO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLHdHQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLGlDQUFmO0FBQUEscUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxtQkFBRyxFQUFFUCxRQUFRLENBQUNDLElBQUQsQ0FEZjtBQUVFLG1CQUFHLEVBQUMsWUFGTjtBQUdFLHNCQUFNLEVBQUMsTUFIVDtBQUlFLHlCQUFTLEVBQUMsT0FKWjtBQUtFLHdCQUFRLE1BTFY7QUFNRSw4QkFBYyxFQUFDO0FBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUEsU0FDT0EsSUFBSSxDQUFDVyxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXVDRCxLQXhDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZDRDtLQXJEdUJqQixlIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9Qb3N0UHJldmlld0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFN0cmVhbWluZ0xpbmtzIGZyb20gXCIuL1N0cmVhbWluZ0xpbmtzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQcmV2aWV3TGlzdChwcm9wcykge1xuICBjb25zdCBwb3N0cyA9IHByb3BzLnBvc3RzO1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIGZ1bmN0aW9uIGltYWdlVXJsKHBvc3QpIHtcbiAgICByZXR1cm4gcG9zdC5kYXRhLnNxdWFyZWltYWdlLnVybFxuICAgICAgPyBwb3N0LmRhdGEuc3F1YXJlaW1hZ2UudXJsXG4gICAgICA6IHBvc3QuZGF0YS5pbWFnZS51cmw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYXgtdy0zeGwgbXQtMiAgXCI+XG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG10LTEwIG1iLTIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIG1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTYgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC93b3JrLyR7cG9zdC51aWR9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBob3ZlcjpvcGFjaXR5LTgwXCI+XG4gICAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHBvc3QuZGF0YS50aXRsZSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPFN0cmVhbWluZ0xpbmtzIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avd29yay8ke3Bvc3QudWlkfWB9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWRpbmctNSBtdC04IG1iLTIgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocG9zdC5kYXRhLnByZXZpZXcpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avd29yay8ke3Bvc3QudWlkfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgaG92ZXI6c2NhbGUtMTA1IGN1cnNvci1wb2ludGVyIGZsZXggdy1mdWxsIGgtZnVsbCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy02MCBoLTYwIG1iLTggbWQ6bWItMFwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmwocG9zdCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInBvc3QtaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlciBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/PostPreviewList.js\n");

/***/ })

})