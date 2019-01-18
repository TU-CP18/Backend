webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/map-view/index.js":
/*!**************************************!*\
  !*** ./components/map-view/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pigeon_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pigeon-maps */ "./node_modules/pigeon-maps/lib/react/index.js");
/* harmony import */ var pigeon_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pigeon_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pigeon_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pigeon-overlay */ "./node_modules/pigeon-overlay/lib/react/index.js");
/* harmony import */ var pigeon_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pigeon_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_view_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-view.module.scss */ "./components/map-view/map-view.module.scss");
/* harmony import */ var _map_view_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_map_view_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/santhos/Desktop/cp/cp18-backend/dashboard/components/map-view/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MapView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MapView, _React$Component);

  function MapView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MapView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MapView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderOverlays = function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, _this.props.cars.map(function (c) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          width: 50,
          height: 50,
          key: c.license,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
          x: 0,
          y: 0,
          width: 50,
          height: 50,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }));
      }));
    };

    return _this;
  }

  _createClass(MapView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _map_view_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mapView,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pigeon_maps__WEBPACK_IMPORTED_MODULE_1___default.a, {
        center: [52.5126276, 13.3218814],
        zoom: 15,
        width: 1000,
        height: 800,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.renderOverlays()));
    }
  }]);

  return MapView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MapView.defaultProps = {
  cars: []
};


/***/ })

})
//# sourceMappingURL=index.js.b039f21fb1119ba7a125.hot-update.js.map