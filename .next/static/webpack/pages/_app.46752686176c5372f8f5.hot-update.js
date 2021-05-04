webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/components/BurgerNav.js":
/*!***************************************!*\
  !*** ./pages/components/BurgerNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BurgerNav; });\n/* harmony import */ var _Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu/lib/menus/slide */ \"./node_modules/react-burger-menu/lib/menus/slide.js\");\n/* harmony import */ var react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utilities_navItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/navItems */ \"./pages/utilities/navItems.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/BurgerNav.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n // make a new context\n\nvar MyContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createContext();\nconsole.log(\"context 1\", MyContext); // create the provider\n\nvar MyProvider = function MyProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      menuOpenState = _useState[0],\n      setMenuOpenState = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MyContext.Provider, {\n    value: {\n      isMenuOpen: menuOpenState,\n      toggleMenu: function toggleMenu() {\n        return setMenuOpenState(!menuOpenState);\n      },\n      stateChangeHandler: function stateChangeHandler(newState) {\n        return setMenuOpenState(newState.isOpen);\n      }\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyProvider, \"XElJTIsjca/S1FDQDIj8/TYpyGs=\");\n\n_c = MyProvider;\n\nvar Button = function Button() {\n  _s2();\n\n  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useContext\"])(MyContext);\n  console.log(\"context 2\", ctx);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n    onClick: ctx.toggleMenu,\n    children: \"Toggle menu\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Button, \"/dMy7t63NXD4eYACoT93CePwGrg=\");\n\n_c2 = Button;\nfunction BurgerNav() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MyProvider, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"md:hidden\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        styles: styles // isOpen={ctx.isMenuOpen}\n        // onStateChange={(state) => ctx.stateChangeHandler(state)}\n        ,\n        right: true,\n        disableAutoFocus: true,\n        children: [_utilities_navItems__WEBPACK_IMPORTED_MODULE_4__[\"navItems\"].map(function (item) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            shallow: true,\n            passHref: true,\n            href: item.link,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n              className: \"text-black mb-2\",\n              id: item.name,\n              children: item.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 17\n            }, this)\n          }, item.name, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 15\n          }, this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Button, {\n          children: \"Toggle menu\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n_c3 = BurgerNav;\nvar styles = {\n  bmBurgerButton: {\n    position: \"fixed\",\n    width: \"36px\",\n    height: \"30px\",\n    right: \"1rem\",\n    top: \"1rem\"\n  },\n  bmBurgerBars: Object(_Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    background: \"#373a47\",\n    height: \"4px\"\n  }, \"background\", \"grey\"),\n  bmBurgerBarsHover: {\n    background: \"#a90000\"\n  },\n  bmCrossButton: {\n    height: \"24px\",\n    width: \"24px\"\n  },\n  bmCross: {\n    background: \"#bdc3c7\"\n  },\n  bmMenuWrap: {\n    width: \"100vw\",\n    height: \"100vh\",\n    right: \"0px\",\n    top: \"0px\"\n  },\n  bmMenu: {\n    background: \"white\",\n    fontSize: \"1.15em\"\n  },\n  bmMorphShape: {\n    fill: \"#373a47\"\n  },\n  bmItemList: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    width: \"100vw\",\n    height: \"100vh\"\n  },\n  bmItem: {\n    color: \"black\",\n    marginBottom: \"1rem\"\n  }\n};\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MyProvider\");\n$RefreshReg$(_c2, \"Button\");\n$RefreshReg$(_c3, \"BurgerNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CdXJnZXJOYXYuanM/N2IzYyJdLCJuYW1lcyI6WyJNeUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiTXlQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJtZW51T3BlblN0YXRlIiwic2V0TWVudU9wZW5TdGF0ZSIsImlzTWVudU9wZW4iLCJ0b2dnbGVNZW51Iiwic3RhdGVDaGFuZ2VIYW5kbGVyIiwibmV3U3RhdGUiLCJpc09wZW4iLCJjaGlsZHJlbiIsIkJ1dHRvbiIsImN0eCIsInVzZUNvbnRleHQiLCJCdXJnZXJOYXYiLCJzdHlsZXMiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJsaW5rIiwibmFtZSIsImJtQnVyZ2VyQnV0dG9uIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwidG9wIiwiYm1CdXJnZXJCYXJzIiwiYmFja2dyb3VuZCIsImJtQnVyZ2VyQmFyc0hvdmVyIiwiYm1Dcm9zc0J1dHRvbiIsImJtQ3Jvc3MiLCJibU1lbnVXcmFwIiwiYm1NZW51IiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm1JdGVtIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsU0FBUyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFsQjtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSixTQUF6QixFLENBRUE7O0FBQ0EsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsS0FBRCxDQUR0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WSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBakNEO0FBb0NiQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLE1BREM7QUFFVkMsaUJBQWEsRUFBRSxRQUZMO0FBR1ZDLGtCQUFjLEVBQUUsUUFITjtBQUlWQyxjQUFVLEVBQUUsUUFKRjtBQUtWbEIsU0FBSyxFQUFFLE9BTEc7QUFNVkMsVUFBTSxFQUFFO0FBTkUsR0FwQ0M7QUE0Q2JrQixRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLE9BREQ7QUFFTkMsZ0JBQVksRUFBRTtBQUZSO0FBNUNLLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0J1cmdlck5hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNZW51IGZyb20gXCJyZWFjdC1idXJnZXItbWVudS9saWIvbWVudXMvc2xpZGVcIjtcbmltcG9ydCB7IG5hdkl0ZW1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYXZJdGVtc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIG1ha2UgYSBuZXcgY29udGV4dFxuY29uc3QgTXlDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuY29uc29sZS5sb2coXCJjb250ZXh0IDFcIiwgTXlDb250ZXh0KTtcblxuLy8gY3JlYXRlIHRoZSBwcm92aWRlclxuY29uc3QgTXlQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbWVudU9wZW5TdGF0ZSwgc2V0TWVudU9wZW5TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TXlDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc01lbnVPcGVuOiBtZW51T3BlblN0YXRlLFxuICAgICAgICB0b2dnbGVNZW51OiAoKSA9PiBzZXRNZW51T3BlblN0YXRlKCFtZW51T3BlblN0YXRlKSxcbiAgICAgICAgc3RhdGVDaGFuZ2VIYW5kbGVyOiAobmV3U3RhdGUpID0+IHNldE1lbnVPcGVuU3RhdGUobmV3U3RhdGUuaXNPcGVuKSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTXlDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KE15Q29udGV4dCk7XG4gIGNvbnNvbGUubG9nKFwiY29udGV4dCAyXCIsIGN0eCk7XG4gIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2N0eC50b2dnbGVNZW51fT5Ub2dnbGUgbWVudTwvYnV0dG9uPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1cmdlck5hdigpIHtcbiAgcmV0dXJuIChcbiAgICA8TXlQcm92aWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgLy8gaXNPcGVuPXtjdHguaXNNZW51T3Blbn1cbiAgICAgICAgICAvLyBvblN0YXRlQ2hhbmdlPXsoc3RhdGUpID0+IGN0eC5zdGF0ZUNoYW5nZUhhbmRsZXIoc3RhdGUpfVxuICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgZGlzYWJsZUF1dG9Gb2N1c1xuICAgICAgICA+XG4gICAgICAgICAge25hdkl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLm5hbWV9IHNoYWxsb3cgcGFzc0hyZWYgaHJlZj17aXRlbS5saW5rfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1iLTJcIiBpZD17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxCdXR0b24+VG9nZ2xlIG1lbnU8L0J1dHRvbj5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9kaXY+XG4gICAgPC9NeVByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJtQnVyZ2VyQnV0dG9uOiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB3aWR0aDogXCIzNnB4XCIsXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICByaWdodDogXCIxcmVtXCIsXG4gICAgdG9wOiBcIjFyZW1cIixcbiAgfSxcbiAgYm1CdXJnZXJCYXJzOiB7XG4gICAgYmFja2dyb3VuZDogXCIjMzczYTQ3XCIsXG4gICAgaGVpZ2h0OiBcIjRweFwiLFxuICAgIGJhY2tncm91bmQ6IFwiZ3JleVwiLFxuICB9LFxuICBibUJ1cmdlckJhcnNIb3Zlcjoge1xuICAgIGJhY2tncm91bmQ6IFwiI2E5MDAwMFwiLFxuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgICB3aWR0aDogXCIyNHB4XCIsXG4gIH0sXG4gIGJtQ3Jvc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNiZGMzYzdcIixcbiAgfSxcbiAgYm1NZW51V3JhcDoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgcmlnaHQ6IFwiMHB4XCIsXG4gICAgdG9wOiBcIjBweFwiLFxuICB9LFxuICBibU1lbnU6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgZm9udFNpemU6IFwiMS4xNWVtXCIsXG4gIH0sXG4gIGJtTW9ycGhTaGFwZToge1xuICAgIGZpbGw6IFwiIzM3M2E0N1wiLFxuICB9LFxuICBibUl0ZW1MaXN0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIH0sXG4gIGJtSXRlbToge1xuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/BurgerNav.js\n");

/***/ })

})