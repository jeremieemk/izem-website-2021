webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/components/BurgerNav.js":
/*!***************************************!*\
  !*** ./pages/components/BurgerNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BurgerNav; });\n/* harmony import */ var _Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu/lib/menus/slide */ \"./node_modules/react-burger-menu/lib/menus/slide.js\");\n/* harmony import */ var react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utilities_navItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/navItems */ \"./pages/utilities/navItems.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SubscribeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubscribeForm */ \"./pages/components/SubscribeForm.js\");\n\n\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/BurgerNav.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n // create a context control the open state\n\nvar MyContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createContext();\n\nfunction MyProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      menuOpenState = _useState[0],\n      setMenuOpenState = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MyContext.Provider, {\n    value: {\n      isMenuOpen: menuOpenState,\n      toggleMenu: function toggleMenu() {\n        return setMenuOpenState(false);\n      },\n      stateChangeHandler: function stateChangeHandler(newState) {\n        return setMenuOpenState(newState.isOpen);\n      }\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyProvider, \"XElJTIsjca/S1FDQDIj8/TYpyGs=\");\n\n_c = MyProvider;\n\nfunction BurgerMenu() {\n  _s2();\n\n  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useContext\"])(MyContext);\n  console.log(\"context\", ctx);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_burger_menu_lib_menus_slide__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    styles: styles,\n    isOpen: ctx.isMenuOpen,\n    onStateChange: function onStateChange(state) {\n      return ctx.stateChangeHandler(state);\n    },\n    right: true,\n    disableAutoFocus: true,\n    children: [_utilities_navItems__WEBPACK_IMPORTED_MODULE_4__[\"navItems\"].map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        shallow: true,\n        passHref: true,\n        href: item.link,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          className: \"text-black mb-2\",\n          id: item.name,\n          onClick: ctx.toggleMenu,\n          children: item.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this)\n      }, item.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SubscribeModal, {\n      onClick: ctx.toggleMenu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(BurgerMenu, \"/dMy7t63NXD4eYACoT93CePwGrg=\");\n\n_c2 = BurgerMenu;\nfunction BurgerNav() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MyProvider, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"md:hidden\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(BurgerMenu, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n_c3 = BurgerNav;\nvar styles = {\n  bmBurgerButton: {\n    position: \"fixed\",\n    width: \"36px\",\n    height: \"30px\",\n    right: \"1rem\",\n    top: \"1rem\"\n  },\n  bmBurgerBars: Object(_Users_jeremie_web_51_izem_website_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    background: \"#373a47\",\n    height: \"4px\"\n  }, \"background\", \"grey\"),\n  bmBurgerBarsHover: {\n    background: \"#a90000\"\n  },\n  bmCrossButton: {\n    height: \"24px\",\n    width: \"24px\"\n  },\n  bmCross: {\n    background: \"#bdc3c7\"\n  },\n  bmMenuWrap: {\n    width: \"100vw\",\n    height: \"100vh\",\n    right: \"0px\",\n    top: \"0px\"\n  },\n  bmMenu: {\n    background: \"white\",\n    fontSize: \"1.15em\"\n  },\n  bmMorphShape: {\n    fill: \"#373a47\"\n  },\n  bmItemList: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    width: \"100vw\",\n    height: \"100vh\"\n  },\n  bmItem: {\n    color: \"black\",\n    marginBottom: \"1rem\"\n  }\n};\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MyProvider\");\n$RefreshReg$(_c2, \"BurgerMenu\");\n$RefreshReg$(_c3, \"BurgerNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CdXJnZXJOYXYuanM/N2IzYyJdLCJuYW1lcyI6WyJNeUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJNeVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1lbnVPcGVuU3RhdGUiLCJzZXRNZW51T3BlblN0YXRlIiwiaXNNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJzdGF0ZUNoYW5nZUhhbmRsZXIiLCJuZXdTdGF0ZSIsImlzT3BlbiIsImNoaWxkcmVuIiwiQnVyZ2VyTWVudSIsImN0eCIsInVzZUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwic3RhdGUiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJsaW5rIiwibmFtZSIsIkJ1cmdlck5hdiIsImJtQnVyZ2VyQnV0dG9uIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwidG9wIiwiYm1CdXJnZXJCYXJzIiwiYmFja2dyb3VuZCIsImJtQnVyZ2VyQmFyc0hvdmVyIiwiYm1Dcm9zc0J1dHRvbiIsImJtQ3Jvc3MiLCJibU1lbnVXcmFwIiwiYm1NZW51IiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm1JdGVtIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxTQUFTLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQWxCOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEtBQUQsQ0FEekI7QUFBQSxNQUNsQkMsYUFEa0I7QUFBQSxNQUNIQyxnQkFERzs7QUFHekIsc0JB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T0FETjtBQUVOTSxZQUFRLEVBQUU7QUFGSixHQTdCSztBQWlDYkMsY0FBWSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBakNEO0FBb0NiQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLE1BREM7QUFFVkMsaUJBQWEsRUFBRSxRQUZMO0FBR1ZDLGtCQUFjLEVBQUUsUUFITjtBQUlWQyxjQUFVLEVBQUUsUUFKRjtBQUtWbEIsU0FBSyxFQUFFLE9BTEc7QUFNVkMsVUFBTSxFQUFFO0FBTkUsR0FwQ0M7QUE0Q2JrQixRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLE9BREQ7QUFFTkMsZ0JBQVksRUFBRTtBQUZSO0FBNUNLLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0J1cmdlck5hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNZW51IGZyb20gXCJyZWFjdC1idXJnZXItbWVudS9saWIvbWVudXMvc2xpZGVcIjtcbmltcG9ydCB7IG5hdkl0ZW1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYXZJdGVtc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3Vic2NyaWJlRm9ybSBmcm9tIFwiLi9TdWJzY3JpYmVGb3JtXCI7XG5cbi8vIGNyZWF0ZSBhIGNvbnRleHQgY29udHJvbCB0aGUgb3BlbiBzdGF0ZVxuY29uc3QgTXlDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5mdW5jdGlvbiBNeVByb3ZpZGVyKHByb3BzKSB7XG4gIGNvbnN0IFttZW51T3BlblN0YXRlLCBzZXRNZW51T3BlblN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxNeUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzTWVudU9wZW46IG1lbnVPcGVuU3RhdGUsXG4gICAgICAgIHRvZ2dsZU1lbnU6ICgpID0+IHNldE1lbnVPcGVuU3RhdGUoZmFsc2UpLFxuICAgICAgICBzdGF0ZUNoYW5nZUhhbmRsZXI6IChuZXdTdGF0ZSkgPT4gc2V0TWVudU9wZW5TdGF0ZShuZXdTdGF0ZS5pc09wZW4pLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9NeUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEJ1cmdlck1lbnUoKSB7XG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoTXlDb250ZXh0KTtcbiAgY29uc29sZS5sb2coXCJjb250ZXh0XCIsIGN0eCk7XG4gIHJldHVybiAoXG4gICAgPE1lbnVcbiAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgaXNPcGVuPXtjdHguaXNNZW51T3Blbn1cbiAgICAgIG9uU3RhdGVDaGFuZ2U9eyhzdGF0ZSkgPT4gY3R4LnN0YXRlQ2hhbmdlSGFuZGxlcihzdGF0ZSl9XG4gICAgICByaWdodFxuICAgICAgZGlzYWJsZUF1dG9Gb2N1c1xuICAgID5cbiAgICAgIHtuYXZJdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubmFtZX0gc2hhbGxvdyBwYXNzSHJlZiBocmVmPXtpdGVtLmxpbmt9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtYi0yXCJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgb25DbGljaz17Y3R4LnRvZ2dsZU1lbnV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8U3Vic2NyaWJlTW9kYWwgb25DbGljaz17Y3R4LnRvZ2dsZU1lbnV9IC8+XG4gICAgPC9NZW51PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXJnZXJOYXYoKSB7XG4gIHJldHVybiAoXG4gICAgPE15UHJvdmlkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxuICAgICAgICA8QnVyZ2VyTWVudSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9NeVByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJtQnVyZ2VyQnV0dG9uOiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB3aWR0aDogXCIzNnB4XCIsXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICByaWdodDogXCIxcmVtXCIsXG4gICAgdG9wOiBcIjFyZW1cIixcbiAgfSxcbiAgYm1CdXJnZXJCYXJzOiB7XG4gICAgYmFja2dyb3VuZDogXCIjMzczYTQ3XCIsXG4gICAgaGVpZ2h0OiBcIjRweFwiLFxuICAgIGJhY2tncm91bmQ6IFwiZ3JleVwiLFxuICB9LFxuICBibUJ1cmdlckJhcnNIb3Zlcjoge1xuICAgIGJhY2tncm91bmQ6IFwiI2E5MDAwMFwiLFxuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgICB3aWR0aDogXCIyNHB4XCIsXG4gIH0sXG4gIGJtQ3Jvc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNiZGMzYzdcIixcbiAgfSxcbiAgYm1NZW51V3JhcDoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgcmlnaHQ6IFwiMHB4XCIsXG4gICAgdG9wOiBcIjBweFwiLFxuICB9LFxuICBibU1lbnU6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgZm9udFNpemU6IFwiMS4xNWVtXCIsXG4gIH0sXG4gIGJtTW9ycGhTaGFwZToge1xuICAgIGZpbGw6IFwiIzM3M2E0N1wiLFxuICB9LFxuICBibUl0ZW1MaXN0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIH0sXG4gIGJtSXRlbToge1xuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/BurgerNav.js\n");

/***/ })

})