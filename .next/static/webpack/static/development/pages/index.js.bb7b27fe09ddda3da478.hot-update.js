webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/graph.js":
/*!************************!*\
  !*** ./pages/graph.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/origins/Documents/GitHub/lattice-cdp/pages/graph.js";



function Graph() {
  var data = {
    datasets: [{
      data: [10, 20, 30]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Red', 'Yellow', 'Blue']
  }; // For a pie chart

  var myPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a('ctx', {
    type: 'pie',
    data: data
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    id: "ctx",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ })

})
//# sourceMappingURL=index.js.bb7b27fe09ddda3da478.hot-update.js.map