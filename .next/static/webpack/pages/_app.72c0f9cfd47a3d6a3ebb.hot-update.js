webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/components/BurgerNav.js":
/*!***************************************!*\
  !*** ./pages/components/BurgerNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BurgerNav; });\n/* harmony import */ var _Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utilities_navItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/navItems */ \"./pages/utilities/navItems.js\");\n/* harmony import */ var _SubscribeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubscribeModal */ \"./pages/components/SubscribeModal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/BurgerNav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BurgerNav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      menuOpenState = _useState[0],\n      setMenuOpenState = _useState[1];\n\n  function toggleMenuState() {\n    setMenuOpenState(!menuOpenState);\n  }\n\n  function closeModal() {\n    console.log(\"function\");\n    menuOpenState && setMenuOpenState(false);\n  }\n\n  console.log(\"menu state\", menuOpenState);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"md:hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__[\"slide\"], {\n      styles: styles,\n      onStateChange: toggleMenuState,\n      right: true,\n      disableAutoFocus: true,\n      children: [_utilities_navItems__WEBPACK_IMPORTED_MODULE_4__[\"navItems\"].map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          shallow: true,\n          passHref: true,\n          href: item.link,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            className: \"text-black mb-2\",\n            id: item.name,\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, this)\n        }, item.name, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SubscribeModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: closeModal,\n        children: \"test\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_s(BurgerNav, \"XElJTIsjca/S1FDQDIj8/TYpyGs=\");\n\n_c = BurgerNav;\nvar styles = {\n  bmBurgerButton: {\n    position: \"fixed\",\n    width: \"36px\",\n    height: \"30px\",\n    right: \"1rem\",\n    top: \"1rem\"\n  },\n  bmBurgerBars: Object(_Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    background: \"#373a47\",\n    height: \"4px\"\n  }, \"background\", \"grey\"),\n  bmBurgerBarsHover: {\n    background: \"#a90000\"\n  },\n  bmCrossButton: {\n    height: \"24px\",\n    width: \"24px\"\n  },\n  bmCross: {\n    background: \"#bdc3c7\"\n  },\n  bmMenuWrap: {\n    width: \"100vw\",\n    height: \"100vh\",\n    right: \"0px\",\n    top: \"0px\"\n  },\n  bmMenu: {\n    background: \"white\",\n    fontSize: \"1.15em\"\n  },\n  bmMorphShape: {\n    fill: \"#373a47\"\n  },\n  bmItemList: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    width: \"100vw\",\n    height: \"100vh\"\n  },\n  bmItem: {\n    color: \"black\",\n    marginBottom: \"1rem\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"BurgerNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CdXJnZXJOYXYuanM/N2IzYyJdLCJuYW1lcyI6WyJCdXJnZXJOYXYiLCJ1c2VTdGF0ZSIsIm1lbnVPcGVuU3RhdGUiLCJzZXRNZW51T3BlblN0YXRlIiwidG9nZ2xlTWVudVN0YXRlIiwiY2xvc2VNb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJsaW5rIiwibmFtZSIsImJtQnVyZ2VyQnV0dG9uIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwidG9wIiwiYm1CdXJnZXJCYXJzIiwiYmFja2dyb3VuZCIsImJtQnVyZ2VyQmFyc0hvdmVyIiwiYm1Dcm9zc0J1dHRvbiIsImJtQ3Jvc3MiLCJibU1lbnVXcmFwIiwiYm1NZW51IiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm1JdGVtIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUMzQkMsYUFEMkI7QUFBQSxNQUNaQyxnQkFEWTs7QUFFbEMsV0FBU0MsZUFBVCxHQUEyQjtBQUN6QkQsb0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUFoQjtBQUNEOztBQUNELFdBQVNHLFVBQVQsR0FBc0I7QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQUwsaUJBQWEsSUFBSUMsZ0JBQWdCLENBQUMsS0FBRCxDQUFqQztBQUNEOztBQUNERyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCTCxhQUExQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUNFLFlBQU0sRUFBRU0sTUFEVjtBQUVFLG1CQUFhLEVBQUVKLGVBRmpCO0FBR0UsV0FBSyxNQUhQO0FBSUUsc0JBQWdCLE1BSmxCO0FBQUEsaUJBTUdLLDREQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFVQyxJQUFWLEVBQWdCO0FBQzVCLDRCQUNFLHFFQUFDLGdEQUFEO0FBQXNCLGlCQUFPLE1BQTdCO0FBQThCLGtCQUFRLE1BQXRDO0FBQXVDLGNBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUFsRDtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyxpQkFBYjtBQUErQixjQUFFLEVBQUVELElBQUksQ0FBQ0UsSUFBeEM7QUFBQSxzQkFDR0YsSUFBSSxDQUFDRTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFXRixJQUFJLENBQUNFLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFPRCxPQVJBLENBTkgsZUFlRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsZUFnQkU7QUFBUSxlQUFPLEVBQUVSLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7R0FoQ3VCTCxTOztLQUFBQSxTO0FBa0N4QixJQUFNUSxNQUFNLEdBQUc7QUFDYk0sZ0JBQWMsRUFBRTtBQUNkQyxZQUFRLEVBQUUsT0FESTtBQUVkQyxTQUFLLEVBQUUsTUFGTztBQUdkQyxVQUFNLEVBQUUsTUFITTtBQUlkQyxTQUFLLEVBQUUsTUFKTztBQUtkQyxPQUFHLEVBQUU7QUFMUyxHQURIO0FBUWJDLGNBQVksRUFBRTtBQUNaQyxjQUFVLEVBQUUsU0FERjtBQUVWSixVQUFNLEVBQUU7QUFGRSxtQkFHRSxNQUhGLENBUkM7QUFhYkssbUJBQWlCLEVBQUU7QUFDakJELGNBQVUsRUFBRTtBQURLLEdBYk47QUFnQmJFLGVBQWEsRUFBRTtBQUNiTixVQUFNLEVBQUUsTUFESztBQUViRCxTQUFLLEVBQUU7QUFGTSxHQWhCRjtBQW9CYlEsU0FBTyxFQUFFO0FBQ1BILGNBQVUsRUFBRTtBQURMLEdBcEJJO0FBdUJiSSxZQUFVLEVBQUU7QUFDVlQsU0FBSyxFQUFFLE9BREc7QUFFVkMsVUFBTSxFQUFFLE9BRkU7QUFHVkMsU0FBSyxFQUFFLEtBSEc7QUFJVkMsT0FBRyxFQUFFO0FBSkssR0F2QkM7QUE2QmJPLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUUsT0FETjtBQUVOTSxZQUFRLEVBQUU7QUFGSixHQTdCSztBQWlDYkMsY0FBWSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBakNEO0FBb0NiQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLE1BREM7QUFFVkMsaUJBQWEsRUFBRSxRQUZMO0FBR1ZDLGtCQUFjLEVBQUUsUUFITjtBQUlWQyxjQUFVLEVBQUUsUUFKRjtBQUtWbEIsU0FBSyxFQUFFLE9BTEc7QUFNVkMsVUFBTSxFQUFFO0FBTkUsR0FwQ0M7QUE0Q2JrQixRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLE9BREQ7QUFFTkMsZ0JBQVksRUFBRTtBQUZSO0FBNUNLLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0J1cmdlck5hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHNsaWRlIGFzIE1lbnUgfSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIjtcbmltcG9ydCB7IG5hdkl0ZW1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYXZJdGVtc1wiO1xuaW1wb3J0IFN1YnNjcmliZU1vZGFsIGZyb20gXCIuL1N1YnNjcmliZU1vZGFsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVyZ2VyTmF2KCkge1xuICBjb25zdCBbbWVudU9wZW5TdGF0ZSwgc2V0TWVudU9wZW5TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGZ1bmN0aW9uIHRvZ2dsZU1lbnVTdGF0ZSgpIHtcbiAgICBzZXRNZW51T3BlblN0YXRlKCFtZW51T3BlblN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZnVuY3Rpb25cIik7XG4gICAgbWVudU9wZW5TdGF0ZSAmJiBzZXRNZW51T3BlblN0YXRlKGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhcIm1lbnUgc3RhdGVcIiwgbWVudU9wZW5TdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgIDxNZW51XG4gICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICBvblN0YXRlQ2hhbmdlPXt0b2dnbGVNZW51U3RhdGV9XG4gICAgICAgIHJpZ2h0XG4gICAgICAgIGRpc2FibGVBdXRvRm9jdXNcbiAgICAgID5cbiAgICAgICAge25hdkl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubmFtZX0gc2hhbGxvdyBwYXNzSHJlZiBocmVmPXtpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1iLTJcIiBpZD17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxTdWJzY3JpYmVNb2RhbCAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PnRlc3Q8L2J1dHRvbj5cbiAgICAgIDwvTWVudT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBibUJ1cmdlckJ1dHRvbjoge1xuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgd2lkdGg6IFwiMzZweFwiLFxuICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgcmlnaHQ6IFwiMXJlbVwiLFxuICAgIHRvcDogXCIxcmVtXCIsXG4gIH0sXG4gIGJtQnVyZ2VyQmFyczoge1xuICAgIGJhY2tncm91bmQ6IFwiIzM3M2E0N1wiLFxuICAgIGhlaWdodDogXCI0cHhcIixcbiAgICBiYWNrZ3JvdW5kOiBcImdyZXlcIixcbiAgfSxcbiAgYm1CdXJnZXJCYXJzSG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNhOTAwMDBcIixcbiAgfSxcbiAgYm1Dcm9zc0J1dHRvbjoge1xuICAgIGhlaWdodDogXCIyNHB4XCIsXG4gICAgd2lkdGg6IFwiMjRweFwiLFxuICB9LFxuICBibUNyb3NzOiB7XG4gICAgYmFja2dyb3VuZDogXCIjYmRjM2M3XCIsXG4gIH0sXG4gIGJtTWVudVdyYXA6IHtcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHJpZ2h0OiBcIjBweFwiLFxuICAgIHRvcDogXCIwcHhcIixcbiAgfSxcbiAgYm1NZW51OiB7XG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgIGZvbnRTaXplOiBcIjEuMTVlbVwiLFxuICB9LFxuICBibU1vcnBoU2hhcGU6IHtcbiAgICBmaWxsOiBcIiMzNzNhNDdcIixcbiAgfSxcbiAgYm1JdGVtTGlzdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICBibUl0ZW06IHtcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/BurgerNav.js\n");

/***/ })

})