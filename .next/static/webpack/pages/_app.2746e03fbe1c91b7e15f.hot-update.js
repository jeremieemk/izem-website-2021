webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/components/Nav.js":
/*!*********************************!*\
  !*** ./pages/components/Nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SubscribeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscribeForm */ \"./pages/components/SubscribeForm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var linkClasses = \"mr-7 text-black menu-item-name\";\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      modalIsOpen = _useState[0],\n      setModalIsOpen = _useState[1];\n\n  function openModal() {\n    setModalIsOpen(true);\n  }\n\n  function closeModal() {\n    setModalIsOpen(false);\n  }\n\n  var items = [{\n    name: \"Work\",\n    link: \"/work\"\n  }, {\n    name: \"Bio\",\n    link: \"/about\"\n  }, {\n    name: \"Contact\",\n    link: \"/contact\"\n  }, {\n    name: \"Elis Records\",\n    link: \"http://www.elis-records.com/\"\n  }, {\n    name: \"Instagram\",\n    link: \"https://www.instagram.com/izem__music/\"\n  }, {\n    name: \"Spotify\",\n    link: \"https://open.spotify.com/artist/2dJpwMtmOBr9ad4D7vRf2r\"\n  }, {\n    name: \"Deezer\",\n    link: \"https://www.deezer.com/en/artist/6272676\"\n  }, {\n    name: \"Bandcamp\",\n    link: \"https://izemsounds.bandcamp.com/\"\n  }, {\n    name: \"Twitter\",\n    link: \"https://twitter.com/izem\"\n  }];\n\n  function renderNavItems() {\n    items.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        shallow: true,\n        passHref: true,\n        href: item.link,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"relative\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: linkClasses,\n            children: [\" \", item.name, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bottom-line\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-blackw-full mt-8 my-3 grid grid-cols-2 md:flex md:justify-center md:items-center \",\n      children: [items.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          shallow: true,\n          passHref: true,\n          href: item.link,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: linkClasses,\n              children: [\" \", item.name, \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"bottom-line\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, this)\n        }, item.name, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        onClick: openModal,\n        className: \"transform duration-200 hover:scale-105 cursor-pointer highlight--secondary text-xl\",\n        children: \"Subscribe\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        isOpen: modalIsOpen,\n        style: ModalCustomStyles,\n        onRequestClose: closeModal,\n        contentLabel: \"Example Modal\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubscribeForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Nav, \"d4gKB9FOjUoqrytIak5jiPIqzB0=\");\n\n_c = Nav;\nvar ModalCustomStyles = {\n  content: {\n    top: \"50%\",\n    left: \"50%\",\n    right: \"auto\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    transform: \"translate(-50%, -50%)\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OYXYuanM/M2VkNCJdLCJuYW1lcyI6WyJOYXYiLCJsaW5rQ2xhc3NlcyIsInVzZVN0YXRlIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJpdGVtcyIsIm5hbWUiLCJsaW5rIiwicmVuZGVyTmF2SXRlbXMiLCJtYXAiLCJpdGVtIiwiTW9kYWxDdXN0b21TdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUM1QixNQUFNQyxXQUFXLEdBQUcsZ0NBQXBCOztBQUQ0QixrQkFHVUMsc0RBQVEsQ0FBQyxLQUFELENBSGxCO0FBQUEsTUFHckJDLFdBSHFCO0FBQUEsTUFHUkMsY0FIUTs7QUFLNUIsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQkQsa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRDs7QUFFRCxXQUFTRSxVQUFULEdBQXNCO0FBQ3BCRixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNEOztBQUVELE1BQU1HLEtBQUssR0FBRyxDQUNaO0FBQ0VDLFFBQUksRUFBRSxNQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRFksRUFLWjtBQUNFRCxRQUFJLEVBQUUsS0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxZLEVBU1o7QUFDRUQsUUFBSSxFQUFFLFNBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUWSxFQWFaO0FBQ0VELFFBQUksRUFBRSxjQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBYlksRUFpQlo7QUFDRUQsUUFBSSxFQUFFLFdBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQlksRUFxQlo7QUFDRUQsUUFBSSxFQUFFLFNBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FyQlksRUF5Qlo7QUFDRUQsUUFBSSxFQUFFLFFBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0F6QlksRUE2Qlo7QUFDRUQsUUFBSSxFQUFFLFVBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0E3QlksRUFpQ1o7QUFDRUQsUUFBSSxFQUFFLFNBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQ1ksQ0FBZDs7QUF1Q0EsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QkgsU0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBVUMsSUFBVixFQUFnQjtBQUN4QiwwQkFDRSxxRUFBQyxnREFBRDtBQUFNLGVBQU8sTUFBYjtBQUFjLGdCQUFRLE1BQXRCO0FBQXVCLFlBQUksRUFBRUEsSUFBSSxDQUFDSCxJQUFsQztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFFUixXQUFkO0FBQUEsNEJBQTZCVyxJQUFJLENBQUNKLElBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBUUQsS0FURDtBQVVEOztBQUVELHNCQUNFO0FBQUEsMkJBQ0U7QUFDRSxlQUFTLEVBQUMsd0ZBRFo7QUFBQSxpQkFJR0QsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBVUMsSUFBVixFQUFnQjtBQUN6Qiw0QkFDRSxxRUFBQyxnREFBRDtBQUFzQixpQkFBTyxNQUE3QjtBQUE4QixrQkFBUSxNQUF0QztBQUF1QyxjQUFJLEVBQUVBLElBQUksQ0FBQ0gsSUFBbEQ7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRVIsV0FBZDtBQUFBLDhCQUE2QlcsSUFBSSxDQUFDSixJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVdJLElBQUksQ0FBQ0osSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQVFELE9BVEEsQ0FKSCxlQWNFO0FBQ0UsZUFBTyxFQUFFSCxTQURYO0FBRUUsaUJBQVMsRUFBQyxvRkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBb0JFLHFFQUFDLGtEQUFEO0FBQ0UsY0FBTSxFQUFFRixXQURWO0FBRUUsYUFBSyxFQUFFVSxpQkFGVDtBQUdFLHNCQUFjLEVBQUVQLFVBSGxCO0FBSUUsb0JBQVksRUFBQyxlQUpmO0FBQUEsK0JBTUUscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQWxHdUJOLEc7O0tBQUFBLEc7QUFvR3hCLElBQU1hLGlCQUFpQixHQUFHO0FBQ3hCQyxTQUFPLEVBQUU7QUFDUEMsT0FBRyxFQUFFLEtBREU7QUFFUEMsUUFBSSxFQUFFLEtBRkM7QUFHUEMsU0FBSyxFQUFFLE1BSEE7QUFJUEMsVUFBTSxFQUFFLE1BSkQ7QUFLUEMsZUFBVyxFQUFFLE1BTE47QUFNUEMsYUFBUyxFQUFFO0FBTko7QUFEZSxDQUExQiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFN1YnNjcmliZUZvcm0gZnJvbSBcIi4vU3Vic2NyaWJlRm9ybVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCBsaW5rQ2xhc3NlcyA9IFwibXItNyB0ZXh0LWJsYWNrIG1lbnUtaXRlbS1uYW1lXCI7XG5cbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzZXRNb2RhbElzT3BlbihmYWxzZSk7XG4gIH1cblxuICBjb25zdCBpdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIldvcmtcIixcbiAgICAgIGxpbms6IFwiL3dvcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQmlvXCIsXG4gICAgICBsaW5rOiBcIi9hYm91dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgICBsaW5rOiBcIi9jb250YWN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkVsaXMgUmVjb3Jkc1wiLFxuICAgICAgbGluazogXCJodHRwOi8vd3d3LmVsaXMtcmVjb3Jkcy5jb20vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkluc3RhZ3JhbVwiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2l6ZW1fX211c2ljL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTcG90aWZ5XCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMmRKcHdNdG1PQnI5YWQ0RDd2UmYyclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJEZWV6ZXJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZGVlemVyLmNvbS9lbi9hcnRpc3QvNjI3MjY3NlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJCYW5kY2FtcFwiLFxuICAgICAgbGluazogXCJodHRwczovL2l6ZW1zb3VuZHMuYmFuZGNhbXAuY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUd2l0dGVyXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vdHdpdHRlci5jb20vaXplbVwiLFxuICAgIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gcmVuZGVyTmF2SXRlbXMoKSB7XG4gICAgaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBzaGFsbG93IHBhc3NIcmVmIGhyZWY9e2l0ZW0ubGlua30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3Nlc30+IHtpdGVtLm5hbWV9IDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFja3ctZnVsbCBtdC04IG15LTMgZ3JpZCBncmlkLWNvbHMtMiBtZDpmbGV4IG1kOmp1c3RpZnktY2VudGVyIG1kOml0ZW1zLWNlbnRlclxuICAgIFwiXG4gICAgICA+XG4gICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLm5hbWV9IHNoYWxsb3cgcGFzc0hyZWYgaHJlZj17aXRlbS5saW5rfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzZXN9PiB7aXRlbS5uYW1lfSA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNmb3JtIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXIgaGlnaGxpZ2h0LS1zZWNvbmRhcnkgdGV4dC14bFwiXG4gICAgICAgID5cbiAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICAgIHN0eWxlPXtNb2RhbEN1c3RvbVN0eWxlc31cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdWJzY3JpYmVGb3JtIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTW9kYWxDdXN0b21TdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB0b3A6IFwiNTAlXCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICByaWdodDogXCJhdXRvXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Nav.js\n");

/***/ })

})