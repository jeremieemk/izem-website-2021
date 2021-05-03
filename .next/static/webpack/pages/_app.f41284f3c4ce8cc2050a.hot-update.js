webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/components/SubscribeModal.js":
/*!********************************************!*\
  !*** ./pages/components/SubscribeModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SubscribeModal; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SubscribeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubscribeForm */ \"./pages/components/SubscribeForm.js\");\n\n\n\nvar _jsxFileName = \"/Users/jeremie/web/51-izem-website-2021/pages/components/SubscribeModal.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction SubscribeModal() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      modalIsOpen = _useState[0],\n      setModalIsOpen = _useState[1];\n\n  function openModal() {\n    setModalIsOpen(true);\n  }\n\n  function closeModal() {\n    setModalIsOpen(false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        onClick: openModal,\n        className: \"px-2 py-2 transform duration-200 hover:scale-105 cursor-pointer bg-primary text-xl text-white\",\n        children: \"Subscribe\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        isOpen: modalIsOpen,\n        style: ModalCustomStyles,\n        onRequestClose: closeModal,\n        contentLabel: \"Example Modal\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubscribeForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SubscribeModal, \"d4gKB9FOjUoqrytIak5jiPIqzB0=\");\n\n_c = SubscribeModal;\nvar ModalCustomStyles = {\n  content: {\n    top: \"50%\",\n    left: \"50%\",\n    right: \"auto\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    transform: \"translate(-50%, -50%)\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TdWJzY3JpYmVNb2RhbC5qcz9mNDZkIl0sIm5hbWVzIjpbIlN1YnNjcmliZU1vZGFsIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsIk1vZGFsQ3VzdG9tU3R5bGVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDaENDLFdBRGdDO0FBQUEsTUFDbkJDLGNBRG1COztBQUd2QyxXQUFTQyxTQUFULEdBQXFCO0FBQ25CRCxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNEOztBQUVELFdBQVNFLFVBQVQsR0FBc0I7QUFDcEJGLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQ0UsZUFBTyxFQUFFQyxTQURYO0FBRUUsaUJBQVMsRUFBQywrRkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsa0RBQUQ7QUFDRSxjQUFNLEVBQUVGLFdBRFY7QUFFRSxhQUFLLEVBQUVJLGlCQUZUO0FBR0Usc0JBQWMsRUFBRUQsVUFIbEI7QUFJRSxvQkFBWSxFQUFDLGVBSmY7QUFBQSwrQkFNRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBL0J1QkwsYzs7S0FBQUEsYztBQWlDeEIsSUFBTU0saUJBQWlCLEdBQUc7QUFDeEJDLFNBQU8sRUFBRTtBQUNQQyxPQUFHLEVBQUUsS0FERTtBQUVQQyxRQUFJLEVBQUUsS0FGQztBQUdQQyxTQUFLLEVBQUUsTUFIQTtBQUlQQyxVQUFNLEVBQUUsTUFKRDtBQUtQQyxlQUFXLEVBQUUsTUFMTjtBQU1QQyxhQUFTLEVBQUU7QUFOSjtBQURlLENBQTFCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9TdWJzY3JpYmVNb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3Vic2NyaWJlRm9ybSBmcm9tIFwiLi9TdWJzY3JpYmVGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmliZU1vZGFsKCkge1xuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDw+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMiB0cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlciBiZy1wcmltYXJ5IHRleHQteGwgdGV4dC13aGl0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICAgIHN0eWxlPXtNb2RhbEN1c3RvbVN0eWxlc31cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdWJzY3JpYmVGb3JtIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTW9kYWxDdXN0b21TdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB0b3A6IFwiNTAlXCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICByaWdodDogXCJhdXRvXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SubscribeModal.js\n");

/***/ })

})