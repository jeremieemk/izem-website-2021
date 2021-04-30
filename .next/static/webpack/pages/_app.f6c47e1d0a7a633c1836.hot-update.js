webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/components/BurgerNav.js":
/*!***************************************!*\
  !*** ./pages/components/BurgerNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BurgerNav; });\n/* harmony import */ var _Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utilities_navItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/navItems */ \"./pages/utilities/navItems.js\");\n/* harmony import */ var _SubscribeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubscribeModal */ \"./pages/components/SubscribeModal.js\");\n\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/BurgerNav.js\";\n\n\n\n\nfunction BurgerNav() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"md:hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__[\"slide\"], {\n      styles: styles,\n      right: true,\n      disableAutoFocus: true,\n      children: [_utilities_navItems__WEBPACK_IMPORTED_MODULE_4__[\"navItems\"].map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          shallow: true,\n          passHref: true,\n          href: item.link,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            className: \"text-black mb-2\",\n            id: item.name,\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 15\n          }, this)\n        }, item.name, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SubscribeModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n_c = BurgerNav;\nvar styles = {\n  bmBurgerButton: {\n    position: \"fixed\",\n    width: \"36px\",\n    height: \"30px\",\n    right: \"1rem\",\n    top: \"1rem\"\n  },\n  bmBurgerBars: Object(_Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    background: \"#373a47\",\n    height: \"4px\"\n  }, \"background\", \"grey\"),\n  bmBurgerBarsHover: {\n    background: \"#a90000\"\n  },\n  bmCrossButton: {\n    height: \"24px\",\n    width: \"24px\"\n  },\n  bmCross: {\n    background: \"#bdc3c7\"\n  },\n  bmMenuWrap: {\n    width: \"100vw\",\n    height: \"100vh\",\n    right: \"0px\",\n    top: \"0px\"\n  },\n  bmMenu: {\n    background: \"white\",\n    fontSize: \"1.15em\"\n  },\n  bmMorphShape: {\n    fill: \"#373a47\"\n  },\n  bmItemList: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    width: \"100vw\",\n    height: \"100vh\"\n  },\n  bmItem: {\n    color: \"black\",\n    marginBottom: \"1rem\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"BurgerNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CdXJnZXJOYXYuanM/N2IzYyJdLCJuYW1lcyI6WyJCdXJnZXJOYXYiLCJzdHlsZXMiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJsaW5rIiwibmFtZSIsImJtQnVyZ2VyQnV0dG9uIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwidG9wIiwiYm1CdXJnZXJCYXJzIiwiYmFja2dyb3VuZCIsImJtQnVyZ2VyQmFyc0hvdmVyIiwiYm1Dcm9zc0J1dHRvbiIsImJtQ3Jvc3MiLCJibU1lbnVXcmFwIiwiYm1NZW51IiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm1JdGVtIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUFNLFlBQU0sRUFBRUMsTUFBZDtBQUFzQixXQUFLLE1BQTNCO0FBQTRCLHNCQUFnQixNQUE1QztBQUFBLGlCQUNHQyw0REFBUSxDQUFDQyxHQUFULENBQWEsVUFBVUMsSUFBVixFQUFnQjtBQUM1Qiw0QkFDRSxxRUFBQyxnREFBRDtBQUFzQixpQkFBTyxNQUE3QjtBQUE4QixrQkFBUSxNQUF0QztBQUF1QyxjQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFBbEQ7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsaUJBQWI7QUFBK0IsY0FBRSxFQUFFRCxJQUFJLENBQUNFLElBQXhDO0FBQUEsc0JBQ0dGLElBQUksQ0FBQ0U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBV0YsSUFBSSxDQUFDRSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBT0QsT0FSQSxDQURILGVBVUUscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDtLQWpCdUJOLFM7QUFtQnhCLElBQU1DLE1BQU0sR0FBRztBQUNiTSxnQkFBYyxFQUFFO0FBQ2RDLFlBQVEsRUFBRSxPQURJO0FBRWRDLFNBQUssRUFBRSxNQUZPO0FBR2RDLFVBQU0sRUFBRSxNQUhNO0FBSWRDLFNBQUssRUFBRSxNQUpPO0FBS2RDLE9BQUcsRUFBRTtBQUxTLEdBREg7QUFRYkMsY0FBWSxFQUFFO0FBQ1pDLGNBQVUsRUFBRSxTQURGO0FBRVZKLFVBQU0sRUFBRTtBQUZFLG1CQUdFLE1BSEYsQ0FSQztBQWFiSyxtQkFBaUIsRUFBRTtBQUNqQkQsY0FBVSxFQUFFO0FBREssR0FiTjtBQWdCYkUsZUFBYSxFQUFFO0FBQ2JOLFVBQU0sRUFBRSxNQURLO0FBRWJELFNBQUssRUFBRTtBQUZNLEdBaEJGO0FBb0JiUSxTQUFPLEVBQUU7QUFDUEgsY0FBVSxFQUFFO0FBREwsR0FwQkk7QUF1QmJJLFlBQVUsRUFBRTtBQUNWVCxTQUFLLEVBQUUsT0FERztBQUVWQyxVQUFNLEVBQUUsT0FGRTtBQUdWQyxTQUFLLEVBQUUsS0FIRztBQUlWQyxPQUFHLEVBQUU7QUFKSyxHQXZCQztBQTZCYk8sUUFBTSxFQUFFO0FBQ05MLGNBQVUsRUFBRSxPQUROO0FBRU5NLFlBQVEsRUFBRTtBQUZKLEdBN0JLO0FBaUNiQyxjQUFZLEVBQUU7QUFDWkMsUUFBSSxFQUFFO0FBRE0sR0FqQ0Q7QUFvQ2JDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsTUFEQztBQUVWQyxpQkFBYSxFQUFFLFFBRkw7QUFHVkMsa0JBQWMsRUFBRSxRQUhOO0FBSVZDLGNBQVUsRUFBRSxRQUpGO0FBS1ZsQixTQUFLLEVBQUUsT0FMRztBQU1WQyxVQUFNLEVBQUU7QUFORSxHQXBDQztBQTRDYmtCLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUUsT0FERDtBQUVOQyxnQkFBWSxFQUFFO0FBRlI7QUE1Q0ssQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvQnVyZ2VyTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiO1xuaW1wb3J0IHsgbmF2SXRlbXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hdkl0ZW1zXCI7XG5pbXBvcnQgU3Vic2NyaWJlTW9kYWwgZnJvbSBcIi4vU3Vic2NyaWJlTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVyZ2VyTmF2KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICA8TWVudSBzdHlsZXM9e3N0eWxlc30gcmlnaHQgZGlzYWJsZUF1dG9Gb2N1cz5cbiAgICAgICAge25hdkl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubmFtZX0gc2hhbGxvdyBwYXNzSHJlZiBocmVmPXtpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1iLTJcIiBpZD17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxTdWJzY3JpYmVNb2RhbCAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJtQnVyZ2VyQnV0dG9uOiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB3aWR0aDogXCIzNnB4XCIsXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICByaWdodDogXCIxcmVtXCIsXG4gICAgdG9wOiBcIjFyZW1cIixcbiAgfSxcbiAgYm1CdXJnZXJCYXJzOiB7XG4gICAgYmFja2dyb3VuZDogXCIjMzczYTQ3XCIsXG4gICAgaGVpZ2h0OiBcIjRweFwiLFxuICAgIGJhY2tncm91bmQ6IFwiZ3JleVwiLFxuICB9LFxuICBibUJ1cmdlckJhcnNIb3Zlcjoge1xuICAgIGJhY2tncm91bmQ6IFwiI2E5MDAwMFwiLFxuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgICB3aWR0aDogXCIyNHB4XCIsXG4gIH0sXG4gIGJtQ3Jvc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNiZGMzYzdcIixcbiAgfSxcbiAgYm1NZW51V3JhcDoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgcmlnaHQ6IFwiMHB4XCIsXG4gICAgdG9wOiBcIjBweFwiLFxuICB9LFxuICBibU1lbnU6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgZm9udFNpemU6IFwiMS4xNWVtXCIsXG4gIH0sXG4gIGJtTW9ycGhTaGFwZToge1xuICAgIGZpbGw6IFwiIzM3M2E0N1wiLFxuICB9LFxuICBibUl0ZW1MaXN0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIH0sXG4gIGJtSXRlbToge1xuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/BurgerNav.js\n");

/***/ })

})