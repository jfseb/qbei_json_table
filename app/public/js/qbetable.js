/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ActionTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ActionTypes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * @providesModule ActionTypes
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SCROLL_TO_Y = exports.SCROLL_TO_X = exports.SCROLL_END = exports.SCROLL_START = exports.PROP_CHANGE = exports.INITIALIZE = exports.COLUMN_RESIZE = exports.COLUMN_REORDER_MOVE = exports.COLUMN_REORDER_END = exports.COLUMN_REORDER_START = void 0;
var COLUMN_REORDER_START = 'COLUMN_REORDER_START';
exports.COLUMN_REORDER_START = COLUMN_REORDER_START;
var COLUMN_REORDER_END = 'COLUMN_REORDER_END';
exports.COLUMN_REORDER_END = COLUMN_REORDER_END;
var COLUMN_REORDER_MOVE = 'COLUMN_REORDER_MOVE';
exports.COLUMN_REORDER_MOVE = COLUMN_REORDER_MOVE;
var COLUMN_RESIZE = 'COLUMN_RESIZE';
exports.COLUMN_RESIZE = COLUMN_RESIZE;
var INITIALIZE = 'INITIALIZE';
exports.INITIALIZE = INITIALIZE;
var PROP_CHANGE = 'PROP_CHANGE';
exports.PROP_CHANGE = PROP_CHANGE;
var SCROLL_START = 'SCROLL_START';
exports.SCROLL_START = SCROLL_START;
var SCROLL_END = 'SCROLL_END';
exports.SCROLL_END = SCROLL_END;
var SCROLL_TO_X = 'SCROLL_TO_X';
exports.SCROLL_TO_X = SCROLL_TO_X;
var SCROLL_TO_Y = 'SCROLL_TO_Y';
exports.SCROLL_TO_Y = SCROLL_TO_Y;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/BrowserSupportCore.js":
/*!************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/BrowserSupportCore.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _getVendorPrefixedName = _interopRequireDefault(__webpack_require__(/*! ./getVendorPrefixedName */ "./node_modules/fixed-data-table-2/internal/getVendorPrefixedName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BrowserSupportCore
 */
var BrowserSupportCore = {
  /**
   * @return {bool} True if browser supports css animations.
   */
  hasCSSAnimations: function hasCSSAnimations() {
    return !!(0, _getVendorPrefixedName["default"])('animationName');
  },

  /**
   * @return {bool} True if browser supports css transforms.
   */
  hasCSSTransforms: function hasCSSTransforms() {
    return !!(0, _getVendorPrefixedName["default"])('transform');
  },

  /**
   * @return {bool} True if browser supports css 3d transforms.
   */
  hasCSS3DTransforms: function hasCSS3DTransforms() {
    return !!(0, _getVendorPrefixedName["default"])('perspective');
  },

  /**
   * @return {bool} True if browser supports css transitions.
   */
  hasCSSTransitions: function hasCSSTransitions() {
    return !!(0, _getVendorPrefixedName["default"])('transition');
  }
};
var _default = BrowserSupportCore;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ColumnResizerLine.js":
/*!***********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ColumnResizerLine.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _DOMMouseMoveTracker = _interopRequireDefault(__webpack_require__(/*! ./DOMMouseMoveTracker */ "./node_modules/fixed-data-table-2/internal/DOMMouseMoveTracker.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _clamp = _interopRequireDefault(__webpack_require__(/*! ./clamp */ "./node_modules/fixed-data-table-2/internal/clamp.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ColumnResizerLine = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ColumnResizerLine, _React$PureComponent);

  var _super = _createSuper(ColumnResizerLine);

  function ColumnResizerLine() {
    var _this;

    _classCallCheck(this, ColumnResizerLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state",
    /*object*/
    {
      width: 0,
      cursorDelta: 0
    });

    _defineProperty(_assertThisInitialized(_this), "_onMove", function (
    /*number*/
    deltaX) {
      if (_this.props.isRTL) {
        deltaX = -deltaX;
      }

      var newWidth = _this.state.cursorDelta + deltaX;
      var newColumnWidth = (0, _clamp["default"])(newWidth, _this.props.minWidth, _this.props.maxWidth); // Please note cursor delta is the different between the currently width
      // and the new width.

      _this.setState({
        width: newColumnWidth,
        cursorDelta: newWidth
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnResizeEnd", function () {
      _this._mouseMoveTracker.releaseMouseMoves();

      _this.props.onColumnResizeEnd(_this.state.width, _this.props.columnKey);
    });

    return _this;
  }

  _createClass(ColumnResizerLine, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.initialEvent && !this._mouseMoveTracker.isDragging()) {
        this._mouseMoveTracker.captureMouseMoves(this.props.initialEvent);

        this.setState({
          width: this.props.initialWidth,
          cursorDelta: this.props.initialWidth
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mouseMoveTracker = new _DOMMouseMoveTracker["default"](this._onMove, this._onColumnResizeEnd, document.body, this.props.touchEnabled);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mouseMoveTracker.releaseMouseMoves();

      this._mouseMoveTracker = null;
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var style = {
        width: this.state.width,
        height: this.props.height
      };

      if (this.props.isRTL) {
        style.right = this.props.leftOffset;
      } else {
        style.left = this.props.leftOffset;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])({
          'fixedDataTableColumnResizerLineLayout/main': true,
          'fixedDataTableColumnResizerLineLayout/hiddenElem': !this.props.visible,
          'public/fixedDataTableColumnResizerLine/main': true
        }),
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])('fixedDataTableColumnResizerLineLayout/mouseArea'),
        style: {
          height: this.props.height
        }
      }));
    }
  }]);

  return ColumnResizerLine;
}(_react["default"].PureComponent);

_defineProperty(ColumnResizerLine, "propTypes", {
  visible: _propTypes["default"].bool.isRequired,

  /**
   * This is the height of the line
   */
  height: _propTypes["default"].number.isRequired,

  /**
   * Offset from left border of the table, please note
   * that the line is a border on diff. So this is really the
   * offset of the column itself.
   */
  leftOffset: _propTypes["default"].number.isRequired,

  /**
   * Height of the clickable region of the line.
   * This is assumed to be at the top of the line.
   */
  knobHeight: _propTypes["default"].number.isRequired,

  /**
   * The line is a border on a diff, so this is essentially
   * the width of column.
   */
  initialWidth: _propTypes["default"].number,

  /**
   * The minimum width this dragger will collapse to
   */
  minWidth: _propTypes["default"].number,

  /**
   * The maximum width this dragger will collapse to
   */
  maxWidth: _propTypes["default"].number,

  /**
   * Initial click event on the header cell.
   */
  initialEvent: _propTypes["default"].object,

  /**
   * When resizing is complete this is called.
   */
  onColumnResizeEnd: _propTypes["default"].func,

  /**
   * Column key for the column being resized.
   */
  columnKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Whether the resize handle should respond to touch events or not.
   */
  touchEnabled: _propTypes["default"].bool,

  /**
   * Whether the line should render in RTL mode
   */
  isRTL: _propTypes["default"].bool
});

var _default = ColumnResizerLine;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/DOMMouseMoveTracker.js":
/*!*************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/DOMMouseMoveTracker.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * This class listens to events on the document and then updates a react
 * component through callbacks.
 * Please note that captureMouseMove must be called in
 * order to initialize listeners on mousemove and mouseup.
 * releaseMouseMove must be called to remove them. It is important to
 * call releaseMouseMoves since mousemove is expensive to listen to.
 *
 * @providesModule DOMMouseMoveTracker
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _EventListener = _interopRequireDefault(__webpack_require__(/*! ./EventListener */ "./node_modules/fixed-data-table-2/internal/EventListener.js"));

var _cancelAnimationFramePolyfill = _interopRequireDefault(__webpack_require__(/*! ./cancelAnimationFramePolyfill */ "./node_modules/fixed-data-table-2/internal/cancelAnimationFramePolyfill.js"));

var _requestAnimationFramePolyfill = _interopRequireDefault(__webpack_require__(/*! ./requestAnimationFramePolyfill */ "./node_modules/fixed-data-table-2/internal/requestAnimationFramePolyfill.js"));

var _FixedDataTableEventHelper = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableEventHelper */ "./node_modules/fixed-data-table-2/internal/FixedDataTableEventHelper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DOMMouseMoveTracker = /*#__PURE__*/function () {
  /**
   * onMove is the callback that will be called on every mouse move.
   * onMoveEnd is called on mouse up when movement has ended.
   */
  function DOMMouseMoveTracker(
  /*function*/
  onMove,
  /*function*/
  onMoveEnd,
  /*DOMElement*/
  domNode,
  /*boolean*/
  touchEnabled) {
    _classCallCheck(this, DOMMouseMoveTracker);

    this._isDragging = false;
    this._isTouchEnabled = touchEnabled;
    this._animationFrameID = null;
    this._domNode = domNode;
    this._onMove = onMove;
    this._onMoveEnd = onMoveEnd;
    this._onMouseEnd = this._onMouseEnd.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._didMouseMove = this._didMouseMove.bind(this);
  }
  /**
   * This is to set up the listeners for listening to mouse move
   * and mouse up signaling the movement has ended. Please note that these
   * listeners are added at the document.body level. It takes in an event
   * in order to grab inital state.
   */


  _createClass(DOMMouseMoveTracker, [{
    key: "captureMouseMoves",
    value: function captureMouseMoves(
    /*object*/
    event) {
      if (!this._eventMoveToken && !this._eventUpToken && !this._eventLeaveToken) {
        this._eventMoveToken = _EventListener["default"].listen(this._domNode, 'mousemove', this._onMouseMove);
        this._eventUpToken = _EventListener["default"].listen(this._domNode, 'mouseup', this._onMouseUp);
        this._eventLeaveToken = _EventListener["default"].listen(this._domNode, 'mouseleave', this._onMouseEnd);
      }

      if (this._isTouchEnabled && !this._eventTouchStartToken && !this._eventTouchMoveToken && !this._eventTouchEndToken) {
        this._eventTouchStartToken = _EventListener["default"].listen(this._domNode, 'touchstart', this._onMouseMove);
        this._eventTouchMoveToken = _EventListener["default"].listen(this._domNode, 'touchmove', this._onMouseMove);
        this._eventTouchEndToken = _EventListener["default"].listen(this._domNode, 'touchend', this._onMouseUp);
      }

      if (!this._isDragging) {
        this._deltaX = 0;
        this._deltaY = 0;
        this._isDragging = true;

        var coordinates = _FixedDataTableEventHelper["default"].getCoordinatesFromEvent(event);

        var x = coordinates.x;
        var y = coordinates.y;
        this._x = x;
        this._y = y;
      }

      event.preventDefault();
    }
    /**
     * This releases all of the listeners on document.body.
     */

  }, {
    key: "releaseMouseMoves",
    value: function releaseMouseMoves() {
      if (this._eventMoveToken && this._eventUpToken && this._eventLeaveToken) {
        this._eventMoveToken.remove();

        this._eventMoveToken = null;

        this._eventUpToken.remove();

        this._eventUpToken = null;

        this._eventLeaveToken.remove();

        this._eventLeaveToken = null;
      }

      if (this._isTouchEnabled && this._eventTouchStartToken && this._eventTouchMoveToken && this._eventTouchEndToken) {
        this._eventTouchStartToken.remove();

        this._eventTouchStartToken = null;

        this._eventTouchMoveToken.remove();

        this._eventTouchMoveToken = null;

        this._eventTouchEndToken.remove();

        this._eventTouchEndToken = null;
      }

      if (this._animationFrameID !== null) {
        (0, _cancelAnimationFramePolyfill["default"])(this._animationFrameID);
        this._animationFrameID = null;
      }

      if (this._isDragging) {
        this._isDragging = false;
        this._x = null;
        this._y = null;
      }
    }
    /**
     * Returns whether or not if the mouse movement is being tracked.
     */

  }, {
    key: "isDragging",
    value: function isDragging()
    /*boolean*/
    {
      return this._isDragging;
    }
    /**
     * Calls onMove passed into constructor and updates internal state.
     */

  }, {
    key: "_onMouseMove",
    value: function _onMouseMove(
    /*object*/
    event) {
      var coordinates = _FixedDataTableEventHelper["default"].getCoordinatesFromEvent(event);

      var x = coordinates.x;
      var y = coordinates.y;
      this._deltaX += x - this._x;
      this._deltaY += y - this._y;

      if (this._animationFrameID === null) {
        // The mouse may move faster then the animation frame does.
        // Use `requestAnimationFramePolyfill` to avoid over-updating.
        this._animationFrameID = (0, _requestAnimationFramePolyfill["default"])(this._didMouseMove);
      }

      this._x = x;
      this._y = y;
      event.preventDefault();
    }
  }, {
    key: "_didMouseMove",
    value: function _didMouseMove() {
      this._animationFrameID = null;

      this._onMove(this._deltaX, this._deltaY);

      this._deltaX = 0;
      this._deltaY = 0;
    }
    /**
     * Calls onMoveEnd passed into constructor and updates internal state.
     */

  }, {
    key: "_onMouseUp",
    value: function _onMouseUp() {
      if (this._animationFrameID) {
        this._didMouseMove();
      }

      this._onMoveEnd(false);
    }
    /**
     * Calls onMoveEnd passed into the constructor, updates internal state, and cancels the move.
     */

  }, {
    key: "_onMouseEnd",
    value: function _onMouseEnd() {
      this._onMoveEnd(true);
    }
  }]);

  return DOMMouseMoveTracker;
}();

var _default = DOMMouseMoveTracker;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/EventListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/EventListener.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _emptyFunction = _interopRequireDefault(__webpack_require__(/*! ./emptyFunction */ "./node_modules/fixed-data-table-2/internal/emptyFunction.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventListener
 * @typechecks
 */

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (true) {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }

      return {
        remove: _emptyFunction["default"]
      };
    }
  },
  registerDefault: function registerDefault() {}
};
var _default = EventListener;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ExecutionEnvironment.js":
/*!**************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ExecutionEnvironment.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
var _default = ExecutionEnvironment;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTable.js":
/*!********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTable.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _FixedDataTableBufferedRows = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableBufferedRows */ "./node_modules/fixed-data-table-2/internal/FixedDataTableBufferedRows.js"));

var _ColumnResizerLine = _interopRequireDefault(__webpack_require__(/*! ./ColumnResizerLine */ "./node_modules/fixed-data-table-2/internal/ColumnResizerLine.js"));

var _FixedDataTableEventHelper = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableEventHelper */ "./node_modules/fixed-data-table-2/internal/FixedDataTableEventHelper.js"));

var _FixedDataTableRow = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableRow */ "./node_modules/fixed-data-table-2/internal/FixedDataTableRow.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ReactTouchHandler = _interopRequireDefault(__webpack_require__(/*! ./ReactTouchHandler */ "./node_modules/fixed-data-table-2/internal/ReactTouchHandler.js"));

var _ReactWheelHandler = _interopRequireDefault(__webpack_require__(/*! ./ReactWheelHandler */ "./node_modules/fixed-data-table-2/internal/ReactWheelHandler.js"));

var _ariaAttributes = _interopRequireDefault(__webpack_require__(/*! ./ariaAttributes */ "./node_modules/fixed-data-table-2/internal/ariaAttributes.js"));

var _columnTemplates = _interopRequireDefault(__webpack_require__(/*! ./columnTemplates */ "./node_modules/fixed-data-table-2/internal/columnTemplates.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _debounceCore = _interopRequireDefault(__webpack_require__(/*! ./debounceCore */ "./node_modules/fixed-data-table-2/internal/debounceCore.js"));

var _isNaN = _interopRequireDefault(__webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js"));

var _joinClasses = _interopRequireDefault(__webpack_require__(/*! ./joinClasses */ "./node_modules/fixed-data-table-2/internal/joinClasses.js"));

var _scrollbarsVisible3 = _interopRequireDefault(__webpack_require__(/*! ./scrollbarsVisible */ "./node_modules/fixed-data-table-2/internal/scrollbarsVisible.js"));

var _tableHeights = _interopRequireDefault(__webpack_require__(/*! ./tableHeights */ "./node_modules/fixed-data-table-2/internal/tableHeights.js"));

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./shallowEqual */ "./node_modules/fixed-data-table-2/internal/shallowEqual.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ARROW_SCROLL_SPEED = 25;
/**
 * Data grid component with fixed or scrollable header and columns.
 *
 * The layout of the data table is as follows:
 *
 * ```
 * +---------------------------------------------------+
 * | Fixed Column Group    | Scrollable Column Group   |
 * | Header                | Header                    |
 * |                       |                           |
 * +---------------------------------------------------+
 * |                       |                           |
 * | Fixed Header Columns  | Scrollable Header Columns |
 * |                       |                           |
 * +-----------------------+---------------------------+
 * |                       |                           |
 * | Fixed Body Columns    | Scrollable Body Columns   |
 * |                       |                           |
 * +-----------------------+---------------------------+
 * |                       |                           |
 * | Fixed Footer Columns  | Scrollable Footer Columns |
 * |                       |                           |
 * +-----------------------+---------------------------+
 * ```
 *
 * - Fixed Column Group Header: These are the headers for a group
 *   of columns if included in the table that do not scroll
 *   vertically or horizontally.
 *
 * - Scrollable Column Group Header: The header for a group of columns
 *   that do not move while scrolling vertically, but move horizontally
 *   with the horizontal scrolling.
 *
 * - Fixed Header Columns: The header columns that do not move while scrolling
 *   vertically or horizontally.
 *
 * - Scrollable Header Columns: The header columns that do not move
 *   while scrolling vertically, but move horizontally with the horizontal
 *   scrolling.
 *
 * - Fixed Body Columns: The body columns that do not move while scrolling
 *   horizontally, but move vertically with the vertical scrolling.
 *
 * - Scrollable Body Columns: The body columns that move while scrolling
 *   vertically or horizontally.
 */

var FixedDataTable = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTable, _React$Component);

  var _super = _createSuper(FixedDataTable);

  function FixedDataTable(_props) {
    var _this;

    _classCallCheck(this, FixedDataTable);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "_shouldHandleTouchX", function (
    /*number*/
    delta) {
      return (
        /*boolean*/
        _this.props.touchScrollEnabled && _this._shouldHandleWheelX(delta)
      );
    });

    _defineProperty(_assertThisInitialized(_this), "_shouldHandleTouchY", function (
    /*number*/
    delta) {
      return (
        /*boolean*/
        _this.props.touchScrollEnabled && _this._shouldHandleWheelY(delta)
      );
    });

    _defineProperty(_assertThisInitialized(_this), "_shouldHandleWheelX", function (
    /*number*/
    delta)
    /*boolean*/
    {
      var _this$props = _this.props,
          maxScrollX = _this$props.maxScrollX,
          scrollFlags = _this$props.scrollFlags,
          scrollX = _this$props.scrollX;
      var overflowX = scrollFlags.overflowX;

      if (overflowX === 'hidden') {
        return false;
      }

      delta = Math.round(delta);

      if (delta === 0) {
        return false;
      }

      return delta < 0 && scrollX > 0 || delta >= 0 && scrollX < maxScrollX;
    });

    _defineProperty(_assertThisInitialized(_this), "_shouldHandleWheelY", function (
    /*number*/
    delta)
    /*boolean*/
    {
      var _this$props2 = _this.props,
          maxScrollY = _this$props2.maxScrollY,
          scrollFlags = _this$props2.scrollFlags,
          scrollY = _this$props2.scrollY;
      var overflowY = scrollFlags.overflowY;

      if (overflowY === 'hidden' || delta === 0) {
        return false;
      }

      delta = Math.round(delta);

      if (delta === 0) {
        return false;
      }

      return delta < 0 && scrollY > 0 || delta >= 0 && scrollY < maxScrollY;
    });

    _defineProperty(_assertThisInitialized(_this), "_reportContentHeight", function () {
      var _tableHeightsSelector = (0, _tableHeights["default"])(_this.props),
          contentHeight = _tableHeightsSelector.contentHeight;

      var onContentHeightChange = _this.props.onContentHeightChange;

      if (contentHeight !== _this._contentHeight && onContentHeightChange) {
        onContentHeightChange(contentHeight);
      }

      _this._contentHeight = contentHeight;
    });

    _defineProperty(_assertThisInitialized(_this), "_renderRows", function (
    /*number*/
    offsetTop, fixedCellTemplates, fixedRightCellTemplates, scrollableCellTemplates, bodyHeight,
    /*number*/
    ariaRowIndexOffset)
    /*object*/
    {
      var _scrollbarsVisible = (0, _scrollbarsVisible3["default"])(_this.props),
          scrollEnabledY = _scrollbarsVisible.scrollEnabledY;

      var props = _this.props;
      return /*#__PURE__*/_react["default"].createElement(_FixedDataTableBufferedRows["default"], {
        ariaRowIndexOffset: ariaRowIndexOffset,
        isScrolling: props.scrolling,
        fixedColumns: fixedCellTemplates,
        fixedRightColumns: fixedRightCellTemplates,
        firstViewportRowIndex: props.firstRowIndex,
        endViewportRowIndex: props.endRowIndex,
        height: bodyHeight,
        offsetTop: offsetTop,
        onRowClick: props.onRowClick,
        onRowContextMenu: props.onRowContextMenu,
        onRowDoubleClick: props.onRowDoubleClick,
        onRowMouseUp: props.onRowMouseUp,
        onRowMouseDown: props.onRowMouseDown,
        onRowMouseEnter: props.onRowMouseEnter,
        onRowMouseLeave: props.onRowMouseLeave,
        onRowTouchStart: props.touchScrollEnabled ? props.onRowTouchStart : null,
        onRowTouchEnd: props.touchScrollEnabled ? props.onRowTouchEnd : null,
        onRowTouchMove: props.touchScrollEnabled ? props.onRowTouchMove : null,
        rowClassNameGetter: props.rowClassNameGetter,
        rowExpanded: props.rowExpanded,
        rowKeyGetter: props.rowKeyGetter,
        rowSettings: props.rowSettings,
        scrollLeft: props.scrollX,
        scrollTop: props.scrollY,
        scrollableColumns: scrollableCellTemplates,
        showLastRowBorder: true,
        width: props.tableSize.width,
        rowsToRender: props.rows,
        rowOffsets: props.rowOffsets,
        showScrollbarY: scrollEnabledY,
        scrollbarYWidth: props.scrollbarYWidth,
        isRTL: props.isRTL
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onRef", function (div) {
      _this._divRef = div;

      if (_this.props.stopReactWheelPropagation) {
        _this._wheelHandler.setRoot(div);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnResize", function (
    /*number*/
    combinedWidth,
    /*number*/
    leftOffset,
    /*number*/
    cellWidth,
    /*?number*/
    cellMinWidth,
    /*?number*/
    cellMaxWidth,
    /*number|string*/
    columnKey,
    /*object*/
    event) {
      var coordinates = _FixedDataTableEventHelper["default"].getCoordinatesFromEvent(event);

      var clientX = coordinates.x;
      var clientY = coordinates.y;

      _this.props.columnActions.resizeColumn({
        cellMinWidth: cellMinWidth,
        cellMaxWidth: cellMaxWidth,
        cellWidth: cellWidth,
        columnKey: columnKey,
        combinedWidth: combinedWidth,
        clientX: clientX,
        clientY: clientY,
        leftOffset: leftOffset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnReorder", function (
    /*string*/
    columnKey,
    /*number*/
    width,
    /*number*/
    left,
    /*object*/
    event) {
      _this.props.columnActions.startColumnReorder({
        scrollStart: _this.props.scrollX,
        columnKey: columnKey,
        width: width,
        left: left
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnReorderMove", function (
    /*number*/
    deltaX) {
      _this.props.columnActions.moveColumnReorder(deltaX);
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnReorderEnd", function (
    /*object*/
    props,
    /*object*/
    event) {
      var _this$props3 = _this.props,
          columnActions = _this$props3.columnActions,
          _this$props3$columnRe = _this$props3.columnReorderingData,
          cancelReorder = _this$props3$columnRe.cancelReorder,
          columnAfter = _this$props3$columnRe.columnAfter,
          columnBefore = _this$props3$columnRe.columnBefore,
          columnKey = _this$props3$columnRe.columnKey,
          scrollStart = _this$props3$columnRe.scrollStart,
          onColumnReorderEndCallback = _this$props3.onColumnReorderEndCallback,
          onHorizontalScroll = _this$props3.onHorizontalScroll,
          scrollX = _this$props3.scrollX;
      columnActions.stopColumnReorder();

      if (cancelReorder) {
        return;
      }

      onColumnReorderEndCallback({
        columnAfter: columnAfter,
        columnBefore: columnBefore,
        reorderColumn: columnKey
      });

      if (scrollStart !== scrollX && onHorizontalScroll) {
        onHorizontalScroll(scrollX);
      }

      ;
    });

    _defineProperty(_assertThisInitialized(_this), "_onScroll", function (
    /*number*/
    deltaX,
    /*number*/
    deltaY) {
      var _this$props4 = _this.props,
          maxScrollX = _this$props4.maxScrollX,
          maxScrollY = _this$props4.maxScrollY,
          onHorizontalScroll = _this$props4.onHorizontalScroll,
          onVerticalScroll = _this$props4.onVerticalScroll,
          scrollActions = _this$props4.scrollActions,
          scrollFlags = _this$props4.scrollFlags,
          scrollX = _this$props4.scrollX,
          scrollY = _this$props4.scrollY,
          scrolling = _this$props4.scrolling;
      var overflowX = scrollFlags.overflowX,
          overflowY = scrollFlags.overflowY;
      var x = scrollX;
      var y = scrollY;

      if (Math.abs(deltaY) > Math.abs(deltaX) && overflowY !== 'hidden') {
        y += deltaY;
        y = y < 0 ? 0 : y;
        y = y > maxScrollY ? maxScrollY : y; //NOTE (jordan) This is a hacky workaround to prevent FDT from setting its internal state

        if (onVerticalScroll ? onVerticalScroll(y) : true) {
          scrollActions.scrollToY(y);
        }
      } else if (deltaX && overflowX !== 'hidden') {
        x += deltaX;
        x = x < 0 ? 0 : x;
        x = x > maxScrollX ? maxScrollX : x; // This is a workaround to prevent content blurring. This happens when translate3d
        // is applied with non-rounded values to elements having text.

        var roundedX = Math.round(x); //NOTE (asif) This is a hacky workaround to prevent FDT from setting its internal state

        if (onHorizontalScroll ? onHorizontalScroll(roundedX) : true) {
          scrollActions.scrollToX(roundedX);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_scrollTo", function (
    /*number*/
    scrollX,
    /*number*/
    scrollY) {
      _this._scrollToX(scrollX);

      _this._scrollToY(scrollY);
    });

    _defineProperty(_assertThisInitialized(_this), "_scrollToX", function (
    /*number*/
    scrollPos) {
      var _this$props5 = _this.props,
          onHorizontalScroll = _this$props5.onHorizontalScroll,
          scrollActions = _this$props5.scrollActions,
          scrollX = _this$props5.scrollX,
          scrolling = _this$props5.scrolling;

      if (scrollPos === scrollX) {
        return;
      } // This is a workaround to prevent content blurring. This happens when translate3d
      // is applied with non-rounded values to elements having text.


      var roundedScrollPos = Math.round(scrollPos);

      if (onHorizontalScroll ? onHorizontalScroll(roundedScrollPos) : true) {
        scrollActions.scrollToX(roundedScrollPos);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_scrollToY", function (
    /*number*/
    scrollPos) {
      var _this$props6 = _this.props,
          onVerticalScroll = _this$props6.onVerticalScroll,
          scrollActions = _this$props6.scrollActions,
          scrollY = _this$props6.scrollY;

      if (scrollPos === scrollY) {
        return;
      }

      if (onVerticalScroll ? onVerticalScroll(scrollPos) : true) {
        scrollActions.scrollToY(scrollPos);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_didScroll", function (
    /* !object */
    prevProps) {
      var _this$props7 = _this.props,
          onScrollStart = _this$props7.onScrollStart,
          scrollX = _this$props7.scrollX,
          scrollY = _this$props7.scrollY,
          onHorizontalScroll = _this$props7.onHorizontalScroll,
          onVerticalScroll = _this$props7.onVerticalScroll,
          ownerHeight = _this$props7.tableSize.ownerHeight,
          scrolling = _this$props7.scrolling;
      var oldEndRowIndex = prevProps.endRowIndex,
          oldFirstRowIndex = prevProps.firstRowIndex,
          oldScrollX = prevProps.scrollX,
          oldScrollY = prevProps.scrollY,
          oldOwnerHeight = prevProps.tableSize.ownerHeight,
          oldScrolling = prevProps.scrolling; // check if scroll values have changed - we have an extra check on NaN because (NaN !== NaN)

      var ownerHeightChanged = ownerHeight !== oldOwnerHeight && !((0, _isNaN["default"])(ownerHeight) && (0, _isNaN["default"])(oldOwnerHeight));
      var scrollXChanged = scrollX !== oldScrollX;
      var scrollYChanged = scrollY !== oldScrollY; // if none of the above changed, then a scroll didn't happen at all

      if (!ownerHeightChanged && !scrollXChanged && !scrollYChanged) {
        return;
      } // only call onScrollStart if scrolling wasn't on previously


      if (!oldScrolling && scrolling && onScrollStart) {
        onScrollStart(oldScrollX, oldScrollY, oldFirstRowIndex, oldEndRowIndex);
      }

      if (scrollXChanged && onHorizontalScroll) {
        onHorizontalScroll(scrollX);
      }

      if (scrollYChanged && onVerticalScroll) {
        onVerticalScroll(scrollY);
      } // debounced version of didScrollStop as we don't immediately stop scrolling


      _this._didScrollStop();
    });

    _defineProperty(_assertThisInitialized(_this), "_didScrollStopSync", function () {
      var _this$props8 = _this.props,
          endRowIndex = _this$props8.endRowIndex,
          firstRowIndex = _this$props8.firstRowIndex,
          onScrollEnd = _this$props8.onScrollEnd,
          scrollActions = _this$props8.scrollActions,
          scrollX = _this$props8.scrollX,
          scrollY = _this$props8.scrollY,
          scrolling = _this$props8.scrolling;

      if (!scrolling) {
        return;
      }

      scrollActions.stopScroll();

      if (onScrollEnd) {
        onScrollEnd(scrollX, scrollY, firstRowIndex, endRowIndex);
      }
    });

    _this._didScrollStop = (0, _debounceCore["default"])(_this._didScrollStopSync, 200, _assertThisInitialized(_this));
    _this._onKeyDown = _this._onKeyDown.bind(_assertThisInitialized(_this));
    _this._wheelHandler = new _ReactWheelHandler["default"](_this._onScroll, _this._shouldHandleWheelX, _this._shouldHandleWheelY, _this.props.isRTL, _this.props.stopScrollDefaultHandling, _this.props.stopScrollPropagation);
    _this._touchHandler = new _ReactTouchHandler["default"](_this._onScroll, _this._shouldHandleTouchX, _this._shouldHandleTouchY, _this.props.stopScrollDefaultHandling, _this.props.stopScrollPropagation);
    return _this;
  }

  _createClass(FixedDataTable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // TODO (pradeep): Remove these and pass to our table component directly after
      // React provides an API where event handlers can be specified to be non-passive (facebook/react#6436)
      this._divRef && this._divRef.removeEventListener('wheel', this._wheelHandler.onWheel, {
        passive: false
      });
      this._divRef && this._divRef.removeEventListener('touchmove', this._touchHandler.onTouchMove, {
        passive: false
      });
      this._wheelHandler = null;
      this._touchHandler = null; // Cancel any pending debounced scroll handling and handle immediately.

      this._didScrollStop.reset();

      this._didScrollStopSync();
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(event) {
      var _tableHeightsSelector2 = (0, _tableHeights["default"])(this.props),
          scrollbarYHeight = _tableHeightsSelector2.scrollbarYHeight;

      if (this.props.keyboardPageEnabled) {
        switch (event.key) {
          case 'PageDown':
            this._onScroll(0, scrollbarYHeight);

            event.preventDefault();
            break;

          case 'PageUp':
            this._onScroll(0, scrollbarYHeight * -1);

            event.preventDefault();
            break;

          default:
            break;
        }
      }

      if (this.props.keyboardScrollEnabled) {
        switch (event.key) {
          case 'ArrowDown':
            this._onScroll(0, ARROW_SCROLL_SPEED);

            event.preventDefault();
            break;

          case 'ArrowUp':
            this._onScroll(0, ARROW_SCROLL_SPEED * -1);

            event.preventDefault();
            break;

          case 'ArrowRight':
            this._onScroll(ARROW_SCROLL_SPEED, 0);

            event.preventDefault();
            break;

          case 'ArrowLeft':
            this._onScroll(ARROW_SCROLL_SPEED * -1, 0);

            event.preventDefault();
            break;

          default:
            break;
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual["default"])(this.props, nextProps);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._divRef && this._divRef.addEventListener('wheel', this._wheelHandler.onWheel, {
        passive: false
      });

      if (this.props.touchScrollEnabled) {
        this._divRef && this._divRef.addEventListener('touchmove', this._touchHandler.onTouchMove, {
          passive: false
        });
      }

      this._reportContentHeight();

      this._reportScrollBarsUpdates();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(
    /*object*/
    prevProps) {
      this._didScroll(prevProps);

      this._reportContentHeight();

      this._reportScrollBarsUpdates();
    }
    /**
     * Method to report scrollbars updates
     * @private
     */

  }, {
    key: "_reportScrollBarsUpdates",
    value: function _reportScrollBarsUpdates() {
      var _tableHeightsSelector3 = (0, _tableHeights["default"])(this.props),
          bodyOffsetTop = _tableHeightsSelector3.bodyOffsetTop,
          scrollbarXOffsetTop = _tableHeightsSelector3.scrollbarXOffsetTop,
          visibleRowsHeight = _tableHeightsSelector3.visibleRowsHeight;

      var _this$props9 = this.props,
          width = _this$props9.tableSize.width,
          scrollContentHeight = _this$props9.scrollContentHeight,
          scrollY = _this$props9.scrollY,
          scrollX = _this$props9.scrollX;
      var newScrollState = {
        viewportHeight: visibleRowsHeight,
        contentHeight: scrollContentHeight,
        scrollbarYOffsetTop: bodyOffsetTop,
        scrollY: scrollY,
        viewportWidth: width,
        contentWidth: width + this.props.maxScrollX,
        scrollbarXOffsetTop: scrollbarXOffsetTop,
        scrollX: scrollX,
        scrollTo: this._scrollTo,
        scrollToX: this._scrollToX,
        scrollToY: this._scrollToY
      };

      if (!(0, _shallowEqual["default"])(this.previousScrollState, newScrollState)) {
        this.props.onScrollBarsUpdate(newScrollState);
        this.previousScrollState = newScrollState;
      }
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var _ariaAttributesSelect = (0, _ariaAttributes["default"])(this.props),
          ariaGroupHeaderIndex = _ariaAttributesSelect.ariaGroupHeaderIndex,
          ariaHeaderIndex = _ariaAttributesSelect.ariaHeaderIndex,
          ariaFooterIndex = _ariaAttributesSelect.ariaFooterIndex,
          ariaRowCount = _ariaAttributesSelect.ariaRowCount,
          ariaRowIndexOffset = _ariaAttributesSelect.ariaRowIndexOffset;

      var _columnTemplatesSelec = (0, _columnTemplates["default"])(this.props),
          fixedColumnGroups = _columnTemplatesSelec.fixedColumnGroups,
          fixedColumns = _columnTemplatesSelec.fixedColumns,
          fixedRightColumnGroups = _columnTemplatesSelec.fixedRightColumnGroups,
          fixedRightColumns = _columnTemplatesSelec.fixedRightColumns,
          scrollableColumnGroups = _columnTemplatesSelec.scrollableColumnGroups,
          scrollableColumns = _columnTemplatesSelec.scrollableColumns;

      var _tableHeightsSelector4 = (0, _tableHeights["default"])(this.props),
          bodyHeight = _tableHeightsSelector4.bodyHeight,
          bodyOffsetTop = _tableHeightsSelector4.bodyOffsetTop,
          componentHeight = _tableHeightsSelector4.componentHeight,
          footOffsetTop = _tableHeightsSelector4.footOffsetTop,
          scrollbarXOffsetTop = _tableHeightsSelector4.scrollbarXOffsetTop,
          visibleRowsHeight = _tableHeightsSelector4.visibleRowsHeight;

      var _this$props10 = this.props,
          className = _this$props10.className,
          columnReorderingData = _this$props10.columnReorderingData,
          columnResizingData = _this$props10.columnResizingData,
          elementHeights = _this$props10.elementHeights,
          isColumnReordering = _this$props10.isColumnReordering,
          isColumnResizing = _this$props10.isColumnResizing,
          gridAttributesGetter = _this$props10.gridAttributesGetter,
          maxScrollX = _this$props10.maxScrollX,
          maxScrollY = _this$props10.maxScrollY,
          onColumnReorderEndCallback = _this$props10.onColumnReorderEndCallback,
          onColumnResizeEndCallback = _this$props10.onColumnResizeEndCallback,
          scrollContentHeight = _this$props10.scrollContentHeight,
          scrollX = _this$props10.scrollX,
          scrollY = _this$props10.scrollY,
          scrolling = _this$props10.scrolling,
          tableSize = _this$props10.tableSize,
          touchScrollEnabled = _this$props10.touchScrollEnabled,
          scrollbarYWidth = _this$props10.scrollbarYWidth;
      var ownerHeight = tableSize.ownerHeight,
          width = tableSize.width;
      var cellGroupWrapperHeight = elementHeights.cellGroupWrapperHeight,
          footerHeight = elementHeights.footerHeight,
          groupHeaderHeight = elementHeights.groupHeaderHeight,
          headerHeight = elementHeights.headerHeight;

      var _scrollbarsVisible2 = (0, _scrollbarsVisible3["default"])(this.props),
          scrollEnabledX = _scrollbarsVisible2.scrollEnabledX,
          scrollEnabledY = _scrollbarsVisible2.scrollEnabledY;

      var onColumnReorder = onColumnReorderEndCallback ? this._onColumnReorder : null;
      var attributes = gridAttributesGetter && gridAttributesGetter();
      var groupHeader;

      if (groupHeaderHeight > 0) {
        groupHeader = /*#__PURE__*/_react["default"].createElement(_FixedDataTableRow["default"], {
          key: "group_header",
          ariaRowIndex: ariaGroupHeaderIndex,
          isHeaderOrFooter: true,
          isScrolling: scrolling,
          className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableLayout/header'), (0, _cx["default"])('public/fixedDataTable/header')),
          width: width,
          height: groupHeaderHeight,
          cellGroupWrapperHeight: cellGroupWrapperHeight,
          index: 0,
          zIndex: 1,
          offsetTop: 0,
          scrollLeft: scrollX,
          fixedColumns: fixedColumnGroups,
          fixedRightColumns: fixedRightColumnGroups,
          scrollableColumns: scrollableColumnGroups,
          visible: true,
          onColumnResize: this._onColumnResize,
          onColumnReorder: onColumnReorder,
          onColumnReorderMove: this._onColumnReorderMove,
          showScrollbarY: scrollEnabledY,
          scrollbarYWidth: scrollbarYWidth,
          isRTL: this.props.isRTL
        });
      }

      var scrollbarY;

      if (scrollEnabledY) {
        scrollbarY = this.props.scrollbarY;
      }

      var scrollbarX;

      if (scrollEnabledX) {
        scrollbarX = this.props.scrollbarX;
      }

      var dragKnob = /*#__PURE__*/_react["default"].createElement(_ColumnResizerLine["default"], {
        height: componentHeight,
        initialWidth: columnResizingData.width || 0,
        minWidth: columnResizingData.minWidth || 0,
        maxWidth: columnResizingData.maxWidth || Number.MAX_VALUE,
        visible: !!isColumnResizing,
        leftOffset: columnResizingData.left || 0,
        knobHeight: headerHeight,
        initialEvent: columnResizingData.initialEvent,
        onColumnResizeEnd: onColumnResizeEndCallback,
        columnKey: columnResizingData.key,
        touchEnabled: touchScrollEnabled,
        isRTL: this.props.isRTL
      });

      var footer = null;

      if (footerHeight) {
        footer = /*#__PURE__*/_react["default"].createElement(_FixedDataTableRow["default"], {
          key: "footer",
          ariaRowIndex: ariaFooterIndex,
          isHeaderOrFooter: true,
          isScrolling: scrolling,
          className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableLayout/footer'), (0, _cx["default"])('public/fixedDataTable/footer')),
          width: width,
          height: footerHeight,
          index: -1,
          zIndex: 1,
          offsetTop: footOffsetTop,
          visible: true,
          fixedColumns: fixedColumns.footer,
          fixedRightColumns: fixedRightColumns.footer,
          scrollableColumns: scrollableColumns.footer,
          scrollLeft: scrollX,
          showScrollbarY: scrollEnabledY,
          scrollbarYWidth: scrollbarYWidth,
          isRTL: this.props.isRTL
        });
      }

      var rows = this._renderRows(bodyOffsetTop, fixedColumns.cell, fixedRightColumns.cell, scrollableColumns.cell, bodyHeight, ariaRowIndexOffset);

      var header = /*#__PURE__*/_react["default"].createElement(_FixedDataTableRow["default"], {
        key: "header",
        ariaRowIndex: ariaHeaderIndex,
        isHeaderOrFooter: true,
        isScrolling: scrolling,
        className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableLayout/header'), (0, _cx["default"])('public/fixedDataTable/header')),
        width: width,
        height: headerHeight,
        cellGroupWrapperHeight: cellGroupWrapperHeight,
        index: -1,
        zIndex: 1,
        offsetTop: groupHeaderHeight,
        scrollLeft: scrollX,
        visible: true,
        fixedColumns: fixedColumns.header,
        fixedRightColumns: fixedRightColumns.header,
        scrollableColumns: scrollableColumns.header,
        touchEnabled: touchScrollEnabled,
        onColumnResize: this._onColumnResize,
        onColumnReorder: onColumnReorder,
        onColumnReorderMove: this._onColumnReorderMove,
        onColumnReorderEnd: this._onColumnReorderEnd,
        isColumnReordering: !!isColumnReordering,
        columnReorderingData: columnReorderingData,
        showScrollbarY: scrollEnabledY,
        scrollbarYWidth: scrollbarYWidth,
        isRTL: this.props.isRTL
      });

      var topShadow;

      if (scrollY) {
        topShadow = /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableLayout/topShadow'), (0, _cx["default"])('public/fixedDataTable/topShadow')),
          style: {
            top: bodyOffsetTop
          }
        });
      } // ownerScrollAvailable is true if the rows rendered will overflow the owner element
      // so we show a shadow in that case even if the FDT component can't scroll anymore


      var ownerScrollAvailable = ownerHeight && ownerHeight < componentHeight && scrollContentHeight > visibleRowsHeight;
      var bottomShadow;

      if (ownerScrollAvailable || scrollY < maxScrollY) {
        bottomShadow = /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableLayout/bottomShadow'), (0, _cx["default"])('public/fixedDataTable/bottomShadow')),
          style: {
            top: footOffsetTop
          }
        });
      }

      var tabIndex = null;

      if (this.props.keyboardPageEnabled || this.props.keyboardScrollEnabled) {
        tabIndex = 0;
      }

      var tableClassName = className;

      if (this.props.isRTL) {
        tableClassName = (0, _joinClasses["default"])(tableClassName, 'fixedDataTable_isRTL');
      }

      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: (0, _joinClasses["default"])(tableClassName, (0, _cx["default"])('fixedDataTableLayout/main'), (0, _cx["default"])('public/fixedDataTable/main')),
        role: "grid",
        "aria-rowcount": ariaRowCount
      }, attributes, {
        tabIndex: tabIndex,
        onKeyDown: this._onKeyDown,
        onTouchStart: touchScrollEnabled ? this._touchHandler.onTouchStart : null,
        onTouchEnd: touchScrollEnabled ? this._touchHandler.onTouchEnd : null,
        onTouchCancel: touchScrollEnabled ? this._touchHandler.onTouchCancel : null,
        ref: this._onRef,
        style: {
          height: componentHeight,
          width: width
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])('fixedDataTableLayout/rowsContainer'),
        style: {
          height: scrollbarXOffsetTop,
          width: width
        }
      }, dragKnob, groupHeader, header, rows, footer, topShadow, bottomShadow), scrollbarY, scrollbarX);
    }
  }]);

  return FixedDataTable;
}(_react["default"].Component);

_defineProperty(FixedDataTable, "propTypes", {
  // TODO (jordan) Remove propType of width without losing documentation (moved to tableSize)

  /**
   * Pixel width of table. If all columns do not fit,
   * a horizontal scrollbar will appear.
   */
  width: _propTypes["default"].number.isRequired,
  // TODO (jordan) Remove propType of height without losing documentation (moved to tableSize)

  /**
   * Pixel height of table. If all rows do not fit,
   * a vertical scrollbar will appear.
   *
   * Either `height` or `maxHeight` must be specified.
   */
  height: _propTypes["default"].number,

  /**
   * Class name to be passed into parent container
   */
  className: _propTypes["default"].string,
  // TODO (jordan) Remove propType of maxHeight without losing documentation (moved to tableSize)

  /**
   * Maximum pixel height of table. If all rows do not fit,
   * a vertical scrollbar will appear.
   *
   * Either `height` or `maxHeight` must be specified.
   */
  maxHeight: _propTypes["default"].number,
  // TODO (jordan) Remove propType of ownerHeight without losing documentation (moved to tableSize)

  /**
   * Pixel height of table's owner, this is used in a managed scrolling
   * situation when you want to slide the table up from below the fold
   * without having to constantly update the height on every scroll tick.
   * Instead, vary this property on scroll. By using `ownerHeight`, we
   * over-render the table while making sure the footer and horizontal
   * scrollbar of the table are visible when the current space for the table
   * in view is smaller than the final, over-flowing height of table. It
   * allows us to avoid resizing and reflowing table when it is moving in the
   * view.
   *
   * This is used if `ownerHeight < height` (or `maxHeight`).
   */
  ownerHeight: _propTypes["default"].number,
  // TODO (jordan) Remove propType of overflowX & overflowY without losing documentation (moved to scrollFlags)
  overflowX: _propTypes["default"].oneOf(['hidden', 'auto']),
  overflowY: _propTypes["default"].oneOf(['hidden', 'auto']),

  /**
   * Boolean flag indicating of touch scrolling should be enabled
   * This feature is current in beta and may have bugs
   */
  touchScrollEnabled: _propTypes["default"].bool,

  /**
   * Boolean flags to control if scrolling with keys is enabled
   */
  keyboardScrollEnabled: _propTypes["default"].bool,
  keyboardPageEnabled: _propTypes["default"].bool,

  /**
   * Scrollbar X to be rendered
   */
  scrollbarX: _propTypes["default"].node,

  /**
   * Height to be reserved for scrollbar X
   */
  scrollbarXHeight: _propTypes["default"].number,

  /**
   * Scrollbar Y to be rendered
   */
  scrollbarY: _propTypes["default"].node,

  /**
   * Width to be reserved for scrollbar Y
   */
  scrollbarYWidth: _propTypes["default"].number,

  /**
   * Function to listen to scroll bars related updates like scroll position, visible rows height, all rows height,....
   */
  onScrollBarsUpdate: _propTypes["default"].func,
  // TODO Remove propType of defaultScrollbars without losing documentation (this is required for FixedDataTableContainer only)

  /**
   * Default scrollbars provided by FDT-2 will be rendered, pass false if you want to render custom scrollbars (by passing scrollbarX and scrollbarY props)
   */
  defaultScrollbars: _propTypes["default"].bool,
  // TODO (jordan) Remove propType of showScrollbarX & showScrollbarY without losing documentation (moved to scrollFlags)

  /**
   * Hide the scrollbar but still enable scroll functionality
   */
  showScrollbarX: _propTypes["default"].bool,
  showScrollbarY: _propTypes["default"].bool,

  /**
   * Callback when horizontally scrolling the grid.
   *
   * Return false to stop propagation.
   */
  onHorizontalScroll: _propTypes["default"].func,

  /**
   * Callback when vertically scrolling the grid.
   *
   * Return false to stop propagation.
   */
  onVerticalScroll: _propTypes["default"].func,
  // TODO (jordan) Remove propType of rowsCount without losing documentation (moved to rowSettings)

  /**
   * Number of rows in the table.
   */
  rowsCount: _propTypes["default"].number.isRequired,
  // TODO (jordan) Remove propType of rowHeight without losing documentation (moved to rowSettings)

  /**
   * Pixel height of rows unless `rowHeightGetter` is specified and returns
   * different value.
   */
  rowHeight: _propTypes["default"].number.isRequired,
  // TODO (jordan) Remove propType of rowHeightGetter without losing documentation (moved to rowSettings)

  /**
   * If specified, `rowHeightGetter(index)` is called for each row and the
   * returned value overrides `rowHeight` for particular row.
   */
  rowHeightGetter: _propTypes["default"].func,
  // TODO (jordan) Remove propType of subRowHeight without losing documentation (moved to rowSettings)

  /**
   * Pixel height of sub-row unless `subRowHeightGetter` is specified and returns
   * different value.  Defaults to 0 and no sub-row being displayed.
   */
  subRowHeight: _propTypes["default"].number,
  // TODO (jordan) Remove propType of subRowHeightGetter without losing documentation (moved to rowSettings)

  /**
   * If specified, `subRowHeightGetter(index)` is called for each row and the
   * returned value overrides `subRowHeight` for particular row.
   */
  subRowHeightGetter: _propTypes["default"].func,

  /**
   * The row expanded for table row.
   * This can either be a React element, or a function that generates
   * a React Element. By default, the React element passed in can expect to
   * receive the following props:
   *
   * ```
   * props: {
   *   rowIndex; number // (the row index)
   *   height: number // (supplied from subRowHeight or subRowHeightGetter)
   *   width: number // (supplied from the Table)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * If you pass in a function, you will receive the same props object as the
   * first argument.
   */
  rowExpanded: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),

  /**
   * To get any additional CSS classes that should be added to a row,
   * `rowClassNameGetter(index)` is called.
   */
  rowClassNameGetter: _propTypes["default"].func,

  /**
   * If specified, `rowKeyGetter(index)` is called for each row and the
   * returned value overrides `key` for the particular row.
   */
  rowKeyGetter: _propTypes["default"].func,
  // TODO (jordan) Remove propType of groupHeaderHeight without losing documentation (moved to elementHeights)

  /**
   * Pixel height of the column group header.
   */
  groupHeaderHeight: _propTypes["default"].number,
  // TODO (jordan) Remove propType of headerHeight without losing documentation (moved to elementHeights)

  /**
   * Pixel height of header.
   */
  headerHeight: _propTypes["default"].number.isRequired,

  /**
   * Pixel height of fixedDataTableCellGroupLayout/cellGroupWrapper.
   * Default is headerHeight and groupHeaderHeight.
   *
   * This can be used with CSS to make a header cell span both the group & normal header row.
   * Setting this to a value larger than height will cause the content to
   * overflow the height. This is useful when adding a 2nd table as the group
   * header and vertically merging the 2 headers when a column is not part
   * of a group. Here are the necessary CSS changes:
   *
   * Both headers:
   *  - cellGroupWrapper needs overflow-x: hidden and pointer-events: none
   *  - cellGroup needs pointer-events: auto to reenable them on child els
   * Group header:
   *  - Layout/main needs overflow: visible and a higher z-index
   *  - CellLayout/main needs overflow-y: visible
   *  - cellGroup needs overflow: visible
   */
  cellGroupWrapperHeight: _propTypes["default"].number,
  // TODO (jordan) Remove propType of footerHeight without losing documentation (moved to elementHeights)

  /**
   * Pixel height of footer.
   */
  footerHeight: _propTypes["default"].number,

  /**
   * Value of horizontal scroll.
   */
  scrollLeft: _propTypes["default"].number,
  // TODO (jordan) Remove propType of scrollToRow & scrollToColumn without losing documentation

  /**
   * Index of column to scroll to.
   */
  scrollToColumn: _propTypes["default"].number,

  /**
   * Value of vertical scroll.
   */
  scrollTop: _propTypes["default"].number,

  /**
   * Index of row to scroll to.
   */
  scrollToRow: _propTypes["default"].number,

  /**
   * Callback that is called when scrolling starts. The current horizontal and vertical scroll values,
   * and the current first and last row indexes will be provided to the callback.
   */
  onScrollStart: _propTypes["default"].func,

  /**
   * Callback that is called when scrolling ends. The new horizontal and vertical scroll values,
   * and the new first and last row indexes will be provided to the callback.
   */
  onScrollEnd: _propTypes["default"].func,

  /**
   * If enabled scroll events will not be propagated outside of the table.
   */
  stopReactWheelPropagation: _propTypes["default"].bool,

  /**
   * If enabled scroll events will never be bubbled to the browser default handler.
   * If disabled (default when unspecified), scroll events will be bubbled up if the scroll
   * doesn't lead to a change in scroll offsets, which is preferable if you like
   * the page/container to scroll up when the table is already scrolled up max.
   */
  stopScrollDefaultHandling: _propTypes["default"].bool,

  /**
   * If enabled scroll events will not be propagated outside of the table.
   */
  stopScrollPropagation: _propTypes["default"].bool,

  /**
   * Callback that is called when `rowHeightGetter` returns a different height
   * for a row than the `rowHeight` prop. This is necessary because initially
   * table estimates heights of some parts of the content.
   */
  onContentHeightChange: _propTypes["default"].func,

  /**
   * Callback that is called when a row is clicked.
   */
  onRowClick: _propTypes["default"].func,

  /**
   * Callback that is called when a contextual-menu event happens on a row.
   */
  onRowContextMenu: _propTypes["default"].func,

  /**
   * Callback that is called when a row is double clicked.
   */
  onRowDoubleClick: _propTypes["default"].func,

  /**
   * Callback that is called when a mouse-down event happens on a row.
   */
  onRowMouseDown: _propTypes["default"].func,

  /**
   * Callback that is called when a mouse-up event happens on a row.
   */
  onRowMouseUp: _propTypes["default"].func,

  /**
   * Callback that is called when a mouse-enter event happens on a row.
   */
  onRowMouseEnter: _propTypes["default"].func,

  /**
   * Callback that is called when a mouse-leave event happens on a row.
   */
  onRowMouseLeave: _propTypes["default"].func,

  /**
   * Callback that is called when a touch-start event happens on a row.
   */
  onRowTouchStart: _propTypes["default"].func,

  /**
   * Callback that is called when a touch-end event happens on a row.
   */
  onRowTouchEnd: _propTypes["default"].func,

  /**
   * Callback that is called when a touch-move event happens on a row.
   */
  onRowTouchMove: _propTypes["default"].func,

  /**
   * Callback that is called when resizer has been released
   * and column needs to be updated.
   *
   * Required if the isResizable property is true on any column.
   *
   * ```
   * function(
   *   newColumnWidth: number,
   *   columnKey: string,
   * )
   * ```
   */
  onColumnResizeEndCallback: _propTypes["default"].func,

  /**
   * Callback that is called when reordering has been completed
   * and columns need to be updated.
   *
   * ```
   * function(
   *   event {
   *     columnBefore: string|undefined, // the column before the new location of this one
   *     columnAfter: string|undefined,  // the column after the new location of this one
   *     reorderColumn: string,          // the column key that was just reordered
   *   }
   * )
   * ```
   */
  onColumnReorderEndCallback: _propTypes["default"].func,

  /**
   * Whether a column is currently being resized.
   */
  isColumnResizing: _propTypes["default"].bool,

  /**
   * Whether columns are currently being reordered.
   */
  isColumnReordering: _propTypes["default"].bool,

  /**
   * Whether the grid should be in RTL mode
   */
  isRTL: _propTypes["default"].bool,
  // TODO (jordan) Remove propType of bufferRowCount without losing documentation

  /**
   * The number of rows outside the viewport to prerender. Defaults to roughly
   * half of the number of visible rows.
   */
  bufferRowCount: _propTypes["default"].number,
  // TODO (pradeep): Move elementHeights to a selector instead of passing it through redux as state variables

  /**
   * Row heights of the header, groupheader, footer, and cell group wrapper
   * grouped into a single object.
   *
   * @ignore
   */
  elementHeights: _propTypes["default"].shape({
    cellGroupWrapperHeight: _propTypes["default"].number,
    footerHeight: _propTypes["default"].number,
    groupHeaderHeight: _propTypes["default"].number,
    headerHeight: _propTypes["default"].number
  }),

  /**
   * Callback that returns an object of html attributes to add to the grid element
   */
  gridAttributesGetter: _propTypes["default"].func
});

_defineProperty(FixedDataTable, "defaultProps",
/*object*/
{
  elementHeights: {
    cellGroupWrapperHeight: undefined,
    footerHeight: 0,
    groupHeaderHeight: 0,
    headerHeight: 0
  },
  keyboardScrollEnabled: false,
  keyboardPageEnabled: false,
  touchScrollEnabled: false,
  stopScrollPropagation: false
});

var _default = FixedDataTable;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableBufferedRows.js":
/*!********************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableBufferedRows.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _FixedDataTableRow = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableRow */ "./node_modules/fixed-data-table-2/internal/FixedDataTableRow.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _emptyFunction = _interopRequireDefault(__webpack_require__(/*! ./emptyFunction */ "./node_modules/fixed-data-table-2/internal/emptyFunction.js"));

var _joinClasses = _interopRequireDefault(__webpack_require__(/*! ./joinClasses */ "./node_modules/fixed-data-table-2/internal/joinClasses.js"));

var _inRange = _interopRequireDefault(__webpack_require__(/*! lodash/inRange */ "./node_modules/lodash/inRange.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FixedDataTableBufferedRows = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableBufferedRows, _React$Component);

  var _super = _createSuper(FixedDataTableBufferedRows);

  function FixedDataTableBufferedRows(props) {
    var _this;

    _classCallCheck(this, FixedDataTableBufferedRows);

    _this = _super.call(this, props);
    _this._staticRowArray = [];
    _this._initialRender = true;
    return _this;
  }

  _createClass(FixedDataTableBufferedRows, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initialRender = false;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate()
    /*boolean*/
    {
      // Don't add PureRenderMixin to this component please.
      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._staticRowArray.length = 0;
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var _this$props = this.props,
          offsetTop = _this$props.offsetTop,
          scrollTop = _this$props.scrollTop,
          isScrolling = _this$props.isScrolling,
          rowsToRender = _this$props.rowsToRender;
      var baseOffsetTop = offsetTop - scrollTop;
      rowsToRender = rowsToRender || [];

      if (isScrolling) {
        // allow static array to grow while scrolling
        this._staticRowArray.length = Math.max(this._staticRowArray.length, rowsToRender.length);
      } else {
        // when scrolling is done, static array can shrink to fit the buffer
        this._staticRowArray.length = rowsToRender.length;
      } // render each row from the buffer into the static row array


      for (var i = 0; i < this._staticRowArray.length; i++) {
        var rowIndex = rowsToRender[i]; // if the row doesn't exist in the buffer set, then take the previous one

        if (rowIndex === undefined) {
          rowIndex = this._staticRowArray[i] && this._staticRowArray[i].props.index;
        }

        this._staticRowArray[i] = this.renderRow({
          rowIndex: rowIndex,
          key: i,
          baseOffsetTop: baseOffsetTop
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, this._staticRowArray);
    }
    /**
     * @param {number} rowIndex
     * @param {number} key
     * @param {number} baseOffsetTop
     * @return {!Object}
     */

  }, {
    key: "renderRow",
    value: function renderRow(_ref)
    /*object*/
    {
      var rowIndex = _ref.rowIndex,
          key = _ref.key,
          baseOffsetTop = _ref.baseOffsetTop;
      var props = this.props;
      var rowClassNameGetter = props.rowClassNameGetter || _emptyFunction["default"];
      var fake = rowIndex === undefined;
      var rowProps = {}; // if row exists, then calculate row specific props

      if (!fake) {
        rowProps.height = this.props.rowSettings.rowHeightGetter(rowIndex);
        rowProps.subRowHeight = this.props.rowSettings.subRowHeightGetter(rowIndex);
        rowProps.offsetTop = Math.round(baseOffsetTop + props.rowOffsets[rowIndex]);
        rowProps.key = props.rowKeyGetter ? props.rowKeyGetter(rowIndex) : key;
        rowProps.attributes = props.rowSettings.rowAttributesGetter && props.rowSettings.rowAttributesGetter(rowIndex);
        var hasBottomBorder = rowIndex === props.rowSettings.rowsCount - 1 && props.showLastRowBorder;
        rowProps.className = (0, _joinClasses["default"])(rowClassNameGetter(rowIndex), (0, _cx["default"])('public/fixedDataTable/bodyRow'), (0, _cx["default"])({
          'fixedDataTableLayout/hasBottomBorder': hasBottomBorder,
          'public/fixedDataTable/hasBottomBorder': hasBottomBorder
        }));
      }

      var visible = (0, _inRange["default"])(rowIndex, this.props.firstViewportRowIndex, this.props.endViewportRowIndex);
      return /*#__PURE__*/_react["default"].createElement(_FixedDataTableRow["default"], _extends({
        key: key,
        index: rowIndex,
        ariaRowIndex: rowIndex + props.ariaRowIndexOffset,
        isScrolling: props.isScrolling,
        width: props.width,
        rowExpanded: props.rowExpanded,
        scrollLeft: Math.round(props.scrollLeft),
        fixedColumns: props.fixedColumns,
        fixedRightColumns: props.fixedRightColumns,
        scrollableColumns: props.scrollableColumns,
        onClick: props.onRowClick,
        onContextMenu: props.onRowContextMenu,
        onDoubleClick: props.onRowDoubleClick,
        onMouseDown: props.onRowMouseDown,
        onMouseUp: props.onRowMouseUp,
        onMouseEnter: props.onRowMouseEnter,
        onMouseLeave: props.onRowMouseLeave,
        onTouchStart: props.onRowTouchStart,
        onTouchEnd: props.onRowTouchEnd,
        onTouchMove: props.onRowTouchMove,
        showScrollbarY: props.showScrollbarY,
        scrollbarYWidth: props.scrollbarYWidth,
        isRTL: props.isRTL,
        visible: visible,
        fake: fake
      }, rowProps));
    }
  }]);

  return FixedDataTableBufferedRows;
}(_react["default"].Component);

_defineProperty(FixedDataTableBufferedRows, "propTypes", {
  ariaRowIndexOffset: _propTypes["default"].number,
  isScrolling: _propTypes["default"].bool,
  firstViewportRowIndex: _propTypes["default"].number.isRequired,
  endViewportRowIndex: _propTypes["default"].number.isRequired,
  fixedColumns: _propTypes["default"].array.isRequired,
  fixedRightColumns: _propTypes["default"].array.isRequired,
  height: _propTypes["default"].number.isRequired,
  offsetTop: _propTypes["default"].number.isRequired,
  onRowClick: _propTypes["default"].func,
  onRowContextMenu: _propTypes["default"].func,
  onRowDoubleClick: _propTypes["default"].func,
  onRowMouseDown: _propTypes["default"].func,
  onRowMouseUp: _propTypes["default"].func,
  onRowMouseEnter: _propTypes["default"].func,
  onRowMouseLeave: _propTypes["default"].func,
  onRowTouchStart: _propTypes["default"].func,
  onRowTouchEnd: _propTypes["default"].func,
  onRowTouchMove: _propTypes["default"].func,
  rowClassNameGetter: _propTypes["default"].func,
  rowExpanded: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  rowOffsets: _propTypes["default"].object.isRequired,
  rowKeyGetter: _propTypes["default"].func,
  rowSettings: _propTypes["default"].shape({
    rowAttributesGetter: _propTypes["default"].func,
    rowHeightGetter: _propTypes["default"].func,
    rowsCount: _propTypes["default"].number.isRequired,
    subRowHeightGetter: _propTypes["default"].func
  }),
  rowsToRender: _propTypes["default"].array.isRequired,
  scrollLeft: _propTypes["default"].number.isRequired,
  scrollTop: _propTypes["default"].number.isRequired,
  scrollableColumns: _propTypes["default"].array.isRequired,
  showLastRowBorder: _propTypes["default"].bool,
  showScrollbarY: _propTypes["default"].bool,
  width: _propTypes["default"].number.isRequired,
  isRTL: _propTypes["default"].bool
});

var _default = FixedDataTableBufferedRows;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableCell.js":
/*!************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableCell.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _FixedDataTableCellDefault = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableCellDefault */ "./node_modules/fixed-data-table-2/internal/FixedDataTableCellDefault.js"));

var _FixedDataTableColumnReorderHandle = _interopRequireDefault(__webpack_require__(/*! ././FixedDataTableColumnReorderHandle */ "./node_modules/fixed-data-table-2/internal/FixedDataTableColumnReorderHandle.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _joinClasses = _interopRequireDefault(__webpack_require__(/*! ./joinClasses */ "./node_modules/fixed-data-table-2/internal/joinClasses.js"));

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./shallowEqual */ "./node_modules/fixed-data-table-2/internal/shallowEqual.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FixedDataTableCell = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableCell, _React$Component);

  var _super = _createSuper(FixedDataTableCell);

  function FixedDataTableCell() {
    var _this;

    _classCallCheck(this, FixedDataTableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isReorderingThisColumn: false,
      displacement: 0,
      reorderingDisplacement: 0
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnResizerMouseDown", function (
    /*object*/
    event) {
      _this.props.onColumnResize(_this.props.left, _this.props.width, _this.props.minWidth, _this.props.maxWidth, _this.props.columnKey, event);
      /**
       * This prevents the rows from moving around when we resize the
       * headers on touch devices.
       */


      if (_this.props.touchEnabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnReorderMouseDown", function (
    /*object*/
    event) {
      _this.props.onColumnReorder(_this.props.columnKey, _this.props.width, _this.props.left, event);
    });

    _defineProperty(_assertThisInitialized(_this), "_suppressEvent", function (
    /*object*/
    event) {
      event.preventDefault();
      event.stopPropagation();
    });

    return _this;
  }

  _createClass(FixedDataTableCell, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.isScrolling && this.props.rowIndex === nextProps.rowIndex) {
        return false;
      } //Performance check not enabled


      if (!nextProps.pureRendering) {
        return true;
      }

      var _this$props = this.props,
          oldCell = _this$props.cell,
          oldProps = _objectWithoutProperties(_this$props, ["cell"]);

      var newCell = nextProps.cell,
          newProps = _objectWithoutProperties(nextProps, ["cell"]);

      if (!(0, _shallowEqual["default"])(oldProps, newProps)) {
        return true;
      }

      if (!oldCell || !newCell || oldCell.type !== newCell.type) {
        return true;
      }

      if (!(0, _shallowEqual["default"])(oldCell.props, newCell.props)) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var _this$props2 = this.props,
          height = _this$props2.height,
          width = _this$props2.width,
          columnKey = _this$props2.columnKey,
          isHeaderOrFooter = _this$props2.isHeaderOrFooter,
          props = _objectWithoutProperties(_this$props2, ["height", "width", "columnKey", "isHeaderOrFooter"]);

      var style = {
        height: height,
        width: width
      };

      if (this.props.isRTL) {
        style.right = props.left;
      } else {
        style.left = props.left;
      }

      if (this.state.isReorderingThisColumn) {
        var DIR_SIGN = this.props.isRTL ? -1 : 1;
        style.transform = "translateX(".concat(this.state.displacement * DIR_SIGN, "px) translateZ(0)");
        style.zIndex = 1;
      }

      var className = (0, _joinClasses["default"])((0, _cx["default"])({
        'fixedDataTableCellLayout/main': true,
        'fixedDataTableCellLayout/lastChild': props.lastChild,
        'fixedDataTableCellLayout/alignRight': props.align === 'right',
        'fixedDataTableCellLayout/alignCenter': props.align === 'center',
        'public/fixedDataTableCell/alignRight': props.align === 'right',
        'public/fixedDataTableCell/highlighted': props.highlighted,
        'public/fixedDataTableCell/main': true,
        'public/fixedDataTableCell/hasReorderHandle': !!props.onColumnReorder,
        'public/fixedDataTableCell/reordering': this.state.isReorderingThisColumn
      }), props.className);
      var columnResizerComponent;

      if (props.onColumnResize) {
        var columnResizerStyle = {
          height: height
        };
        columnResizerComponent = /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _cx["default"])('fixedDataTableCellLayout/columnResizerContainer'),
          style: columnResizerStyle,
          onMouseDown: this._onColumnResizerMouseDown,
          onTouchStart: this.props.touchEnabled ? this._onColumnResizerMouseDown : null,
          onTouchEnd: this.props.touchEnabled ? this._suppressEvent : null,
          onTouchMove: this.props.touchEnabled ? this._suppressEvent : null
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableCellLayout/columnResizerKnob'), (0, _cx["default"])('public/fixedDataTableCell/columnResizerKnob')),
          style: columnResizerStyle
        }));
      }

      var columnReorderComponent;

      if (props.onColumnReorder) {
        //header row
        columnReorderComponent = /*#__PURE__*/_react["default"].createElement(_FixedDataTableColumnReorderHandle["default"], _extends({
          columnKey: this.columnKey,
          touchEnabled: this.props.touchEnabled,
          onMouseDown: this._onColumnReorderMouseDown,
          onTouchStart: this._onColumnReorderMouseDown,
          height: height
        }, this.props));
      }

      var cellProps = {
        columnKey: columnKey,
        height: height,
        width: width
      };

      if (props.rowIndex >= 0) {
        cellProps.rowIndex = props.rowIndex;
      }

      var content;

      if ( /*#__PURE__*/_react["default"].isValidElement(props.cell)) {
        content = /*#__PURE__*/_react["default"].cloneElement(props.cell, cellProps);
      } else if (typeof props.cell === 'function') {
        content = props.cell(cellProps);
      } else {
        content = /*#__PURE__*/_react["default"].createElement(_FixedDataTableCellDefault["default"], cellProps, props.cell);
      }

      var role = isHeaderOrFooter ? 'columnheader' : 'gridcell';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: style,
        role: role
      }, columnResizerComponent, columnReorderComponent, content);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var left = nextProps.left + prevState.displacement;
      var newState = {
        isReorderingThisColumn: false
      };

      if (!nextProps.isColumnReordering) {
        newState.displacement = 0;
        return newState;
      }

      var originalLeft = nextProps.columnReorderingData.originalLeft;
      var reorderCellLeft = originalLeft + nextProps.columnReorderingData.dragDistance;
      var farthestPossiblePoint = nextProps.columnGroupWidth - nextProps.columnReorderingData.columnWidth; // ensure the cell isn't being dragged out of the column group

      reorderCellLeft = Math.max(reorderCellLeft, 0);
      reorderCellLeft = Math.min(reorderCellLeft, farthestPossiblePoint); // check if current cell belongs to the column that's being reordered

      if (nextProps.columnKey === nextProps.columnReorderingData.columnKey) {
        newState.displacement = reorderCellLeft - nextProps.left;
        newState.isReorderingThisColumn = true;
        return newState;
      }

      var reorderCellRight = reorderCellLeft + nextProps.columnReorderingData.columnWidth;
      var reorderCellCenter = reorderCellLeft + nextProps.columnReorderingData.columnWidth / 2;
      var centerOfThisColumn = left + nextProps.width / 2;
      var cellIsBeforeOneBeingDragged = reorderCellCenter > centerOfThisColumn;
      var cellWasOriginallyBeforeOneBeingDragged = originalLeft > nextProps.left;
      var changedPosition = false;

      if (cellIsBeforeOneBeingDragged) {
        if (reorderCellLeft < centerOfThisColumn) {
          changedPosition = true;

          if (cellWasOriginallyBeforeOneBeingDragged) {
            newState.displacement = nextProps.columnReorderingData.columnWidth;
          } else {
            newState.displacement = 0;
          }
        }
      } else {
        if (reorderCellRight > centerOfThisColumn) {
          changedPosition = true;

          if (cellWasOriginallyBeforeOneBeingDragged) {
            newState.displacement = 0;
          } else {
            newState.displacement = nextProps.columnReorderingData.columnWidth * -1;
          }
        }
      }

      if (changedPosition) {
        if (cellIsBeforeOneBeingDragged) {
          if (!nextProps.columnReorderingData.columnAfter) {
            nextProps.columnReorderingData.columnAfter = nextProps.columnKey;
          }
        } else {
          nextProps.columnReorderingData.columnBefore = nextProps.columnKey;
        }
      } else if (cellIsBeforeOneBeingDragged) {
        nextProps.columnReorderingData.columnBefore = nextProps.columnKey;
      } else if (!nextProps.columnReorderingData.columnAfter) {
        nextProps.columnReorderingData.columnAfter = nextProps.columnKey;
      }

      return newState;
    }
  }]);

  return FixedDataTableCell;
}(_react["default"].Component);

_defineProperty(FixedDataTableCell, "propTypes_DISABLED_FOR_PERFORMANCE", {
  isScrolling: _propTypes["default"].bool,
  align: _propTypes["default"].oneOf(['left', 'center', 'right']),
  className: _propTypes["default"].string,
  highlighted: _propTypes["default"].bool,
  width: _propTypes["default"].number.isRequired,
  minWidth: _propTypes["default"].number,
  maxWidth: _propTypes["default"].number,
  height: _propTypes["default"].number.isRequired,
  cell: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].func]),
  columnKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The row index that will be passed to `cellRenderer` to render.
   */
  rowIndex: _propTypes["default"].number.isRequired,

  /**
   * Callback for when resizer knob (in FixedDataTableCell) is clicked
   * to initialize resizing. Please note this is only on the cells
   * in the header.
   * @param number combinedWidth
   * @param number left
   * @param number width
   * @param number minWidth
   * @param number maxWidth
   * @param number|string columnKey
   * @param object event
   */
  onColumnResize: _propTypes["default"].func,
  onColumnReorder: _propTypes["default"].func,

  /**
   * The left offset in pixels of the cell.
   */
  left: _propTypes["default"].number,

  /**
   * Flag for enhanced performance check
   */
  pureRendering: _propTypes["default"].bool,

  /**
   * Whether touch is enabled or not.
   */
  touchEnabled: _propTypes["default"].bool,

  /**
   * Whether the cell group is part of the header or footer
   */
  isHeaderOrFooter: _propTypes["default"].bool,

  /**
   * If the component should render for RTL direction
   */
  isRTL: _propTypes["default"].bool
});

_defineProperty(FixedDataTableCell, "defaultProps",
/*object*/
{
  align: 'left',
  highlighted: false
});

var _default = (0, _reactLifecyclesCompat.polyfill)(FixedDataTableCell);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableCellDefault.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableCellDefault.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _joinClasses = _interopRequireDefault(__webpack_require__(/*! ./joinClasses */ "./node_modules/fixed-data-table-2/internal/joinClasses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component that handles default cell layout and styling.
 *
 * All props unless specified below will be set onto the top level `div`
 * rendered by the cell.
 *
 * Example usage via from a `Column`:
 * ```
 * const MyColumn = (
 *   <Column
 *     cell={({rowIndex, width, height}) => (
 *       <Cell
 *         width={width}
 *         height={height}
 *         className="my-class">
 *         Cell number: <span>{rowIndex}</span>
*        </Cell>
 *     )}
 *     width={100}
 *   />
 * );
 * ```
 */
var FixedDataTableCellDefault = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableCellDefault, _React$Component);

  var _super = _createSuper(FixedDataTableCellDefault);

  function FixedDataTableCellDefault() {
    _classCallCheck(this, FixedDataTableCellDefault);

    return _super.apply(this, arguments);
  }

  _createClass(FixedDataTableCellDefault, [{
    key: "render",
    value: function render() {
      //Remove some props like columnKey and rowIndex so we don't pass it into the div
      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width,
          style = _this$props.style,
          className = _this$props.className,
          children = _this$props.children,
          columnKey = _this$props.columnKey,
          rowIndex = _this$props.rowIndex,
          props = _objectWithoutProperties(_this$props, ["height", "width", "style", "className", "children", "columnKey", "rowIndex"]);

      var innerStyle = _objectSpread({
        height: height,
        width: width
      }, style);

      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
        className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableCellLayout/wrap1'), (0, _cx["default"])('public/fixedDataTableCell/wrap1'), className),
        style: innerStyle
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableCellLayout/wrap2'), (0, _cx["default"])('public/fixedDataTableCell/wrap2'))
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _joinClasses["default"])((0, _cx["default"])('fixedDataTableCellLayout/wrap3'), (0, _cx["default"])('public/fixedDataTableCell/wrap3'))
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])('public/fixedDataTableCell/cellContent')
      }, children))));
    }
  }]);

  return FixedDataTableCellDefault;
}(_react["default"].Component);

_defineProperty(FixedDataTableCellDefault, "propTypes", {
  /**
   * Outer height of the cell.
   */
  height: _propTypes["default"].number,

  /**
   * Outer width of the cell.
   */
  width: _propTypes["default"].number,

  /**
   * Optional prop that if specified on the `Column` will be passed to the
   * cell. It can be used to uniquely identify which column is the cell is in.
   */
  columnKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Optional prop that represents the rows index in the table.
   * For the 'cell' prop of a Column, this parameter will exist for any
   * cell in a row with a positive index.
   *
   * Below that entry point the user is welcome to consume or
   * pass the prop through at their discretion.
   */
  rowIndex: _propTypes["default"].number
});

var _default = FixedDataTableCellDefault;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableCellGroup.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableCellGroup.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableCellGroup
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _FixedDataTableCell = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableCell */ "./node_modules/fixed-data-table-2/internal/FixedDataTableCell.js"));

var _FixedDataTableTranslateDOMPosition = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableTranslateDOMPosition */ "./node_modules/fixed-data-table-2/internal/FixedDataTableTranslateDOMPosition.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _widthHelper = __webpack_require__(/*! ./widthHelper */ "./node_modules/fixed-data-table-2/internal/widthHelper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FixedDataTableCellGroupImpl = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableCellGroupImpl, _React$Component);

  var _super = _createSuper(FixedDataTableCellGroupImpl);

  /**
   * PropTypes are disabled in this component, because having them on slows
   * down the FixedDataTable hugely in DEV mode. You can enable them back for
   * development, but please don't commit this component with enabled propTypes.
   */
  function FixedDataTableCellGroupImpl(props) {
    var _this;

    _classCallCheck(this, FixedDataTableCellGroupImpl);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_renderCell", function (
    /*number*/
    rowIndex,
    /*number*/
    height,
    /*object*/
    columnProps,
    /*object*/
    cellTemplate,
    /*number*/
    left,
    /*string*/
    key,
    /*number*/
    columnGroupWidth,
    /*boolean*/
    isColumnReordering)
    /*object*/
    {
      var cellIsResizable = columnProps.isResizable && _this.props.onColumnResize;
      var onColumnResize = cellIsResizable ? _this.props.onColumnResize : null;
      var cellIsReorderable = columnProps.isReorderable && _this.props.onColumnReorder && rowIndex === -1 && columnGroupWidth !== columnProps.width;
      var onColumnReorder = cellIsReorderable ? _this.props.onColumnReorder : null;
      var className = columnProps.cellClassName;
      var pureRendering = columnProps.pureRendering || false;
      return /*#__PURE__*/_react["default"].createElement(_FixedDataTableCell["default"], {
        isScrolling: _this.props.isScrolling,
        isHeaderOrFooter: _this.props.isHeaderOrFooter,
        align: columnProps.align,
        className: className,
        height: height,
        key: key,
        maxWidth: columnProps.maxWidth,
        minWidth: columnProps.minWidth,
        touchEnabled: _this.props.touchEnabled,
        onColumnResize: onColumnResize,
        onColumnReorder: onColumnReorder,
        onColumnReorderMove: _this.props.onColumnReorderMove,
        onColumnReorderEnd: _this.props.onColumnReorderEnd,
        isColumnReordering: isColumnReordering,
        columnReorderingData: _this.props.columnReorderingData,
        rowIndex: rowIndex,
        columnKey: columnProps.columnKey,
        width: columnProps.width,
        left: left,
        cell: cellTemplate,
        columnGroupWidth: columnGroupWidth,
        pureRendering: pureRendering,
        isRTL: _this.props.isRTL
      });
    });

    _this._initialRender = true;
    return _this;
  }

  _createClass(FixedDataTableCellGroupImpl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initialRender = false;
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var props = this.props;
      var columns = props.columns;
      var cells = new Array(columns.length);
      var contentWidth = (0, _widthHelper.sumPropWidths)(columns);
      var isColumnReordering = props.isColumnReordering && columns.reduce(function (acc, column) {
        return acc || props.columnReorderingData.columnKey === column.props.columnKey;
      }, false);
      var currentPosition = 0;

      for (var i = 0, j = columns.length; i < j; i++) {
        var columnProps = columns[i].props;
        var cellTemplate = columns[i].template;
        var recyclable = columnProps.allowCellsRecycling && !isColumnReordering;

        if (!recyclable || currentPosition - props.left <= props.width && currentPosition - props.left + columnProps.width >= 0) {
          var key = columnProps.columnKey || 'cell_' + i;
          cells[i] = this._renderCell(props.rowIndex, props.rowHeight, columnProps, cellTemplate, currentPosition, key, contentWidth, isColumnReordering);
        }

        currentPosition += columnProps.width;
      }

      var style = {
        height: props.height,
        position: 'absolute',
        width: contentWidth,
        zIndex: props.zIndex
      };
      (0, _FixedDataTableTranslateDOMPosition["default"])(style, -1 * props.left, 0, this._initialRender, this.props.isRTL);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])('fixedDataTableCellGroupLayout/cellGroup'),
        style: style
      }, cells);
    }
  }]);

  return FixedDataTableCellGroupImpl;
}(_react["default"].Component);

_defineProperty(FixedDataTableCellGroupImpl, "propTypes_DISABLED_FOR_PERFORMANCE", {
  /**
   * Array of per column configuration properties.
   */
  columns: _propTypes["default"].array.isRequired,
  isScrolling: _propTypes["default"].bool,
  left: _propTypes["default"].number,
  onColumnResize: _propTypes["default"].func,
  onColumnReorder: _propTypes["default"].func,
  onColumnReorderMove: _propTypes["default"].func,
  onColumnReorderEnd: _propTypes["default"].func,
  height: _propTypes["default"].number.isRequired,

  /**
   * Height of fixedDataTableCellGroupLayout/cellGroupWrapper.
   */
  cellGroupWrapperHeight: _propTypes["default"].number,
  rowHeight: _propTypes["default"].number.isRequired,
  rowIndex: _propTypes["default"].number.isRequired,
  width: _propTypes["default"].number.isRequired,
  zIndex: _propTypes["default"].number.isRequired,
  touchEnabled: _propTypes["default"].bool,
  isHeaderOrFooter: _propTypes["default"].bool,
  isRTL: _propTypes["default"].bool
});

var FixedDataTableCellGroup = /*#__PURE__*/function (_React$Component2) {
  _inherits(FixedDataTableCellGroup, _React$Component2);

  var _super2 = _createSuper(FixedDataTableCellGroup);

  function FixedDataTableCellGroup() {
    var _this2;

    _classCallCheck(this, FixedDataTableCellGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "_onColumnResize", function (
    /*number*/
    left,
    /*number*/
    width,
    /*?number*/
    minWidth,
    /*?number*/
    maxWidth,
    /*string|number*/
    columnKey,
    /*object*/
    event) {
      _this2.props.onColumnResize && _this2.props.onColumnResize(_this2.props.offsetLeft, left - _this2.props.left + width, width, minWidth, maxWidth, columnKey, event);
    });

    return _this2;
  }

  _createClass(FixedDataTableCellGroup, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(
    /*object*/
    nextProps)
    /*boolean*/
    {
      return !nextProps.isScrolling || this.props.rowIndex !== nextProps.rowIndex || this.props.left !== nextProps.left;
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var _this$props = this.props,
          offsetLeft = _this$props.offsetLeft,
          props = _objectWithoutProperties(_this$props, ["offsetLeft"]);

      var style = {
        height: props.cellGroupWrapperHeight || props.height,
        width: props.width
      };

      if (this.props.isRTL) {
        style.right = offsetLeft;
      } else {
        style.left = offsetLeft;
      }

      var onColumnResize = props.onColumnResize ? this._onColumnResize : null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        className: (0, _cx["default"])('fixedDataTableCellGroupLayout/cellGroupWrapper')
      }, /*#__PURE__*/_react["default"].createElement(FixedDataTableCellGroupImpl, _extends({}, props, {
        onColumnResize: onColumnResize
      })));
    }
  }]);

  return FixedDataTableCellGroup;
}(_react["default"].Component);

_defineProperty(FixedDataTableCellGroup, "propTypes_DISABLED_FOR_PERFORMANCE", {
  isScrolling: _propTypes["default"].bool,

  /**
   * Height of the row.
   */
  height: _propTypes["default"].number.isRequired,
  offsetLeft: _propTypes["default"].number,
  left: _propTypes["default"].number,

  /**
   * Z-index on which the row will be displayed. Used e.g. for keeping
   * header and footer in front of other rows.
   */
  zIndex: _propTypes["default"].number.isRequired
});

_defineProperty(FixedDataTableCellGroup, "defaultProps",
/*object*/
{
  left: 0,
  offsetLeft: 0
});

var _default = FixedDataTableCellGroup;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableColumn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableColumn.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component that defines the attributes of table column.
 */
var FixedDataTableColumn = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableColumn, _React$Component);

  var _super = _createSuper(FixedDataTableColumn);

  function FixedDataTableColumn() {
    _classCallCheck(this, FixedDataTableColumn);

    return _super.apply(this, arguments);
  }

  _createClass(FixedDataTableColumn, [{
    key: "render",
    value: function render() {
      if (true) {
        throw new Error('Component <FixedDataTableColumn /> should never render');
      }

      return null;
    }
  }]);

  return FixedDataTableColumn;
}(_react["default"].Component);

_defineProperty(FixedDataTableColumn, "__TableColumn__", true);

_defineProperty(FixedDataTableColumn, "propTypes", {
  /**
   * The horizontal alignment of the table cell content.
   */
  align: _propTypes["default"].oneOf(['left', 'center', 'right']),

  /**
   * Controls if the column is fixed when scrolling in the X axis.
   */
  fixed: _propTypes["default"].bool,

  /**
   * Controls if the column is fixed to the right side of the table when scrolling in the X axis.
   */
  fixedRight: _propTypes["default"].bool,

  /**
   * The header cell for this column.
   * This can either be a string a React element, or a function that generates
   * a React Element. Passing in a string will render a default header cell
   * with that string. By default, the React element passed in can expect to
   * receive the following props:
   *
   * ```
   * props: {
   *   columnKey: string // (of the column, if given)
   *   height: number // (supplied from the Table or rowHeightGetter)
   *   width: number // (supplied from the Column)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * If you pass in a function, you will receive the same props object as the
   * first argument.
   */
  header: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),

  /**
   * This is the body cell that will be cloned for this column.
   * This can either be a string a React element, or a function that generates
   * a React Element. Passing in a string will render a default header cell
   * with that string. By default, the React element passed in can expect to
   * receive the following props:
   *
   * ```
   * props: {
   *   rowIndex; number // (the row index of the cell)
   *   columnKey: string // (of the column, if given)
   *   height: number // (supplied from the Table or rowHeightGetter)
   *   width: number // (supplied from the Column)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * If you pass in a function, you will receive the same props object as the
   * first argument.
   */
  cell: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),

  /**
   * This is the footer cell for this column.
   * This can either be a string a React element, or a function that generates
   * a React Element. Passing in a string will render a default header cell
   * with that string. By default, the React element passed in can expect to
   * receive the following props:
   *
   * ```
   * props: {
   *   columnKey: string // (of the column, if given)
   *   height: number // (supplied from the Table or rowHeightGetter)
   *   width: number // (supplied from the Column)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * If you pass in a function, you will receive the same props object as the
   * first argument.
   */
  footer: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),

  /**
   * This is used to uniquely identify the column, and is not required unless
   * you a resizing columns. This will be the key given in the
   * `onColumnResizeEndCallback` on the Table.
   */
  columnKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The pixel width of the column.
   */
  width: _propTypes["default"].number.isRequired,

  /**
   * If this is a resizable column this is its minimum pixel width.
   */
  minWidth: _propTypes["default"].number,

  /**
   * If this is a resizable column this is its maximum pixel width.
   */
  maxWidth: _propTypes["default"].number,

  /**
   * The grow factor relative to other columns. Same as the flex-grow API
   * from http://www.w3.org/TR/css3-flexbox/. Basically, take any available
   * extra width and distribute it proportionally according to all columns'
   * flexGrow values. Defaults to zero (no-flexing).
   */
  flexGrow: _propTypes["default"].number,

  /**
   * Whether the column can be resized.
   * Please note that if a column has a flex grow, once you resize
   * the column, this will be set to 0.
   *
   * This property only provides the UI for the column resizing. If this
   * is set to true, you will need to set the onColumnResizeEndCallback table
   * property and render your columns appropriately.
   */
  isResizable: _propTypes["default"].bool,

  /**
   * Whether the column can be dragged to reorder.
   */
  isReorderable: _propTypes["default"].bool,

  /**
   * Whether cells in this column can be removed from document when outside
   * of viewport as a result of horizontal scrolling.
   * Setting this property to true allows the table to not render cells in
   * particular column that are outside of viewport for visible rows. This
   * allows to create table with many columns and not have vertical scrolling
   * performance drop.
   * Setting the property to false will keep previous behaviour and keep
   * cell rendered if the row it belongs to is visible.
   */
  allowCellsRecycling: _propTypes["default"].bool,

  /**
   * Flag to enable performance check when rendering. Stops the component from
   * rendering if none of it's passed in props have changed
   */
  pureRendering: _propTypes["default"].bool
});

_defineProperty(FixedDataTableColumn, "defaultProps", {
  allowCellsRecycling: false,
  fixed: false,
  fixedRight: false
});

var _default = FixedDataTableColumn;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableColumnGroup.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableColumnGroup.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component that defines the attributes of a table column group.
 */
var FixedDataTableColumnGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableColumnGroup, _React$Component);

  var _super = _createSuper(FixedDataTableColumnGroup);

  function FixedDataTableColumnGroup() {
    _classCallCheck(this, FixedDataTableColumnGroup);

    return _super.apply(this, arguments);
  }

  _createClass(FixedDataTableColumnGroup, [{
    key: "render",
    value: function render() {
      if (true) {
        throw new Error('Component <FixedDataTableColumnGroup /> should never render');
      }

      return null;
    }
  }]);

  return FixedDataTableColumnGroup;
}(_react["default"].Component);

_defineProperty(FixedDataTableColumnGroup, "__TableColumnGroup__", true);

_defineProperty(FixedDataTableColumnGroup, "propTypes", {
  /**
   * The horizontal alignment of the table cell content.
   */
  align: _propTypes["default"].oneOf(['left', 'center', 'right']),

  /**
   * Controls if the column group is fixed when scrolling in the X axis.
   */
  fixed: _propTypes["default"].bool,

  /**
   * This is the header cell for this column group.
   * This can either be a string or a React element. Passing in a string
   * will render a default footer cell with that string. By default, the React
   * element passed in can expect to receive the following props:
   *
   * ```
   * props: {
   *   height: number // (supplied from the groupHeaderHeight)
   *   width: number // (supplied from the Column)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * You can also pass in a function that returns a react elemnt, with the
   * props object above passed in as the first parameter.
   */
  header: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func])
});

_defineProperty(FixedDataTableColumnGroup, "defaultProps", {
  fixed: false
});

var _default = FixedDataTableColumnGroup;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableColumnReorderHandle.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableColumnReorderHandle.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _DOMMouseMoveTracker = _interopRequireDefault(__webpack_require__(/*! ./DOMMouseMoveTracker */ "./node_modules/fixed-data-table-2/internal/DOMMouseMoveTracker.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _FixedDataTableEventHelper = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableEventHelper */ "./node_modules/fixed-data-table-2/internal/FixedDataTableEventHelper.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FixedDataTableColumnReorderHandle = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(FixedDataTableColumnReorderHandle, _React$PureComponent);

  var _super = _createSuper(FixedDataTableColumnReorderHandle);

  function FixedDataTableColumnReorderHandle() {
    var _this;

    _classCallCheck(this, FixedDataTableColumnReorderHandle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state",
    /*object*/
    {
      dragDistance: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      var targetRect = event.target.getBoundingClientRect();

      var coordinates = _FixedDataTableEventHelper["default"].getCoordinatesFromEvent(event);

      var mouseLocationInElement = coordinates.x - targetRect.left;
      var mouseLocationInRelationToColumnGroup = mouseLocationInElement + event.target.parentElement.offsetLeft;
      _this._mouseMoveTracker = new _DOMMouseMoveTracker["default"](_this._onMove, _this._onColumnReorderEnd, document.body, _this.props.touchEnabled);

      _this._mouseMoveTracker.captureMouseMoves(event);

      _this.setState({
        dragDistance: 0
      });

      _this.props.onMouseDown({
        columnKey: _this.props.columnKey,
        mouseLocation: {
          dragDistance: 0,
          inElement: mouseLocationInElement,
          inColumnGroup: mouseLocationInRelationToColumnGroup
        }
      });

      _this._distance = 0;
      _this._animating = true;
      _this.frameId = requestAnimationFrame(_this._updateState);
      /**
       * This prevents the rows from moving around when we drag the
       * headers on touch devices.
       */

      if (_this.props.touchEnabled) {
        event.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onMove", function (
    /*number*/
    deltaX) {
      _this._distance = _this.state.dragDistance + deltaX * (_this.props.isRTL ? -1 : 1);
    });

    _defineProperty(_assertThisInitialized(_this), "_onColumnReorderEnd", function (
    /*boolean*/
    cancelReorder) {
      _this._animating = false;
      cancelAnimationFrame(_this.frameId);
      _this.frameId = null;

      _this._mouseMoveTracker.releaseMouseMoves();

      _this.props.columnReorderingData.cancelReorder = cancelReorder;

      _this.props.onColumnReorderEnd();
    });

    _defineProperty(_assertThisInitialized(_this), "_updateState", function () {
      if (_this._animating) {
        _this.frameId = requestAnimationFrame(_this._updateState);
      }

      _this.setState({
        dragDistance: _this._distance
      });

      _this.props.onColumnReorderMove(_this._distance);
    });

    return _this;
  }

  _createClass(FixedDataTableColumnReorderHandle, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._mouseMoveTracker) {
        cancelAnimationFrame(this.frameId);
        this.frameId = null;

        this._mouseMoveTracker.releaseMouseMoves();

        this._mouseMoveTracker = null;
      }
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var style = {
        height: this.props.height
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])({
          'fixedDataTableCellLayout/columnReorderContainer': true,
          'fixedDataTableCellLayout/columnReorderContainer/active': false
        }),
        onMouseDown: this.onMouseDown,
        onTouchStart: this.props.touchEnabled ? this.onMouseDown : null,
        onTouchEnd: this.props.touchEnabled ? function (e) {
          return e.stopPropagation();
        } : null,
        onTouchMove: this.props.touchEnabled ? function (e) {
          return e.stopPropagation();
        } : null,
        style: style
      });
    }
  }]);

  return FixedDataTableColumnReorderHandle;
}(_react["default"].PureComponent);

_defineProperty(FixedDataTableColumnReorderHandle, "propTypes", {
  /**
   * When resizing is complete this is called.
   */
  onColumnReorderEnd: _propTypes["default"].func,

  /**
   * Column key for the column being reordered.
   */
  columnKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Whether the reorder handle should respond to touch events or not.
   */
  touchEnabled: _propTypes["default"].bool,

  /**
   * If the component should render for RTL direction
   */
  isRTL: _propTypes["default"].bool
});

var _default = FixedDataTableColumnReorderHandle;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableContainer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! ./ActionTypes */ "./node_modules/fixed-data-table-2/internal/ActionTypes.js"));

var _FixedDataTable = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTable */ "./node_modules/fixed-data-table-2/internal/FixedDataTable.js"));

var _FixedDataTableStore = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableStore */ "./node_modules/fixed-data-table-2/internal/FixedDataTableStore.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var columnActions = _interopRequireWildcard(__webpack_require__(/*! ./columnActions */ "./node_modules/fixed-data-table-2/internal/columnActions.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! ./invariant */ "./node_modules/fixed-data-table-2/internal/invariant.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var scrollActions = _interopRequireWildcard(__webpack_require__(/*! ./scrollActions */ "./node_modules/fixed-data-table-2/internal/scrollActions.js"));

var _ScrollContainer = _interopRequireDefault(__webpack_require__(/*! ./ScrollContainer */ "./node_modules/fixed-data-table-2/internal/ScrollContainer.js"));

var _Scrollbar = _interopRequireDefault(__webpack_require__(/*! ./Scrollbar */ "./node_modules/fixed-data-table-2/internal/Scrollbar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FixedDataTableContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableContainer, _React$Component);

  var _super = _createSuper(FixedDataTableContainer);

  function FixedDataTableContainer(props) {
    var _this;

    _classCallCheck(this, FixedDataTableContainer);

    _this = _super.call(this, props);
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.reduxStore = _FixedDataTableStore["default"].get();
    _this.scrollActions = (0, _redux.bindActionCreators)(scrollActions, _this.reduxStore.dispatch);
    _this.columnActions = (0, _redux.bindActionCreators)(columnActions, _this.reduxStore.dispatch);

    _this.reduxStore.dispatch({
      type: ActionTypes.INITIALIZE,
      props: props
    });

    _this.unsubscribe = _this.reduxStore.subscribe(_this.update);
    _this.state = _this.getBoundState();
    return _this;
  }

  _createClass(FixedDataTableContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      (0, _invariant["default"])(nextProps.height !== undefined || nextProps.maxHeight !== undefined, 'You must set either a height or a maxHeight');
      this.reduxStore.dispatch({
        type: ActionTypes.PROP_CHANGE,
        newProps: nextProps,
        oldProps: this.props
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }

      this.reduxStore = null;
    }
  }, {
    key: "render",
    value: function render() {
      var fdt = /*#__PURE__*/_react["default"].createElement(_FixedDataTable["default"], _extends({}, this.props, this.state, {
        scrollActions: this.scrollActions,
        columnActions: this.columnActions
      })); // For backward compatibility, by default we render FDT-2 scrollbars


      if (this.props.defaultScrollbars) {
        return /*#__PURE__*/_react["default"].createElement(_ScrollContainer["default"], this.props, fdt);
      }

      return fdt;
    }
  }, {
    key: "getBoundState",
    value: function getBoundState() {
      var state = this.reduxStore.getState();
      var boundState = (0, _pick["default"])(state, ['columnGroupProps', 'columnProps', 'columnReorderingData', 'columnResizingData', 'elementHeights', 'elementTemplates', 'firstRowIndex', 'endRowIndex', 'isColumnReordering', 'isColumnResizing', 'maxScrollX', 'maxScrollY', 'rows', 'rowOffsets', 'rowSettings', 'scrollContentHeight', 'scrollFlags', 'scrollX', 'scrollY', 'scrolling', 'scrollJumpedX', 'scrollJumpedY', 'tableSize']);
      return boundState;
    }
  }, {
    key: "update",
    value: function update() {
      this.setState(this.getBoundState());
    }
  }]);

  return FixedDataTableContainer;
}(_react["default"].Component);

_defineProperty(FixedDataTableContainer, "defaultProps", {
  defaultScrollbars: true,
  scrollbarXHeight: _Scrollbar["default"].SIZE,
  scrollbarYWidth: _Scrollbar["default"].SIZE
});

var _default = FixedDataTableContainer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableEventHelper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableEventHelper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableEventHelper
 * @typechecks
 */

/**
 * Gets the horizontal and vertical coordinates from a mouse or touch event.
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function getCoordinatesFromEvent(
/*object*/
event)
/*object*/
{
  var x = 0;
  var y = 0;

  if (!event.clientX || !event.clientY) {
    if (event.touches && event.touches.length > 0) {
      var touch = event.touches[0];
      x = touch.clientX;
      y = touch.clientY;
    }
  } else {
    x = event.clientX;
    y = event.clientY;
  }

  return {
    x: x,
    y: y
  };
}

var FixedDataTableEventHelper = {
  getCoordinatesFromEvent: getCoordinatesFromEvent
};
var _default = FixedDataTableEventHelper;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableRoot.js":
/*!************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableRoot.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableRoot
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Table", ({
  enumerable: true,
  get: function get() {
    return _FixedDataTableContainer["default"];
  }
}));
Object.defineProperty(exports, "Cell", ({
  enumerable: true,
  get: function get() {
    return _FixedDataTableCellDefault["default"];
  }
}));
Object.defineProperty(exports, "Column", ({
  enumerable: true,
  get: function get() {
    return _FixedDataTableColumn["default"];
  }
}));
Object.defineProperty(exports, "ColumnGroup", ({
  enumerable: true,
  get: function get() {
    return _FixedDataTableColumnGroup["default"];
  }
}));
exports.version = void 0;

var _FixedDataTableContainer = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableContainer */ "./node_modules/fixed-data-table-2/internal/FixedDataTableContainer.js"));

var _FixedDataTableCellDefault = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableCellDefault */ "./node_modules/fixed-data-table-2/internal/FixedDataTableCellDefault.js"));

var _FixedDataTableColumn = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableColumn */ "./node_modules/fixed-data-table-2/internal/FixedDataTableColumn.js"));

var _FixedDataTableColumnGroup = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableColumnGroup */ "./node_modules/fixed-data-table-2/internal/FixedDataTableColumnGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var version = '1.1.2';
exports.version = version;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableRow.js":
/*!***********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableRow.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableRow
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _FixedDataTableCellGroup = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableCellGroup */ "./node_modules/fixed-data-table-2/internal/FixedDataTableCellGroup.js"));

var _FixedDataTableTranslateDOMPosition = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableTranslateDOMPosition */ "./node_modules/fixed-data-table-2/internal/FixedDataTableTranslateDOMPosition.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Scrollbar = _interopRequireDefault(__webpack_require__(/*! ./Scrollbar */ "./node_modules/fixed-data-table-2/internal/Scrollbar.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _joinClasses = _interopRequireDefault(__webpack_require__(/*! ./joinClasses */ "./node_modules/fixed-data-table-2/internal/joinClasses.js"));

var _widthHelper = __webpack_require__(/*! ./widthHelper */ "./node_modules/fixed-data-table-2/internal/widthHelper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// .fixedDataTableLayout/header border-bottom-width
var HEADER_BORDER_BOTTOM_WIDTH = 1;
/**
 * Component that renders the row for <FixedDataTable />.
 * This component should not be used directly by developer. Instead,
 * only <FixedDataTable /> should use the component internally.
 */

var FixedDataTableRowImpl = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedDataTableRowImpl, _React$Component);

  var _super = _createSuper(FixedDataTableRowImpl);

  function FixedDataTableRowImpl() {
    var _this;

    _classCallCheck(this, FixedDataTableRowImpl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mouseLeaveIndex", null);

    _defineProperty(_assertThisInitialized(_this), "_getRowExpanded", function (
    /*number*/
    subRowHeight)
    /*?object*/
    {
      if (_this.props.rowExpanded) {
        var rowExpandedProps = {
          rowIndex: _this.props.index,
          height: subRowHeight,
          width: _this.props.width
        };
        var rowExpanded;

        if ( /*#__PURE__*/_react["default"].isValidElement(_this.props.rowExpanded)) {
          rowExpanded = /*#__PURE__*/_react["default"].cloneElement(_this.props.rowExpanded, rowExpandedProps);
        } else if (typeof _this.props.rowExpanded === 'function') {
          rowExpanded = _this.props.rowExpanded(rowExpandedProps);
        }

        return rowExpanded;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_renderColumnsLeftShadow", function (
    /*number*/
    left)
    /*?object*/
    {
      var className = (0, _cx["default"])({
        'fixedDataTableRowLayout/fixedColumnsDivider': left > 0,
        'fixedDataTableRowLayout/columnsShadow': _this.props.scrollLeft > 0,
        'public/fixedDataTableRow/fixedColumnsDivider': left > 0,
        'public/fixedDataTableRow/columnsShadow': _this.props.scrollLeft > 0
      });
      var dividerHeight = _this.props.cellGroupWrapperHeight ? _this.props.cellGroupWrapperHeight - HEADER_BORDER_BOTTOM_WIDTH : _this.props.height;
      var style = {
        left: left,
        height: dividerHeight
      };

      if (_this.props.isRTL) {
        style.right = left;
        style.left = 'auto';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: style
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_renderFixedRightColumnsShadow", function (
    /*number*/
    left)
    /*?object*/
    {
      var className = (0, _cx["default"])('fixedDataTableRowLayout/columnsShadow', 'fixedDataTableRowLayout/columnsRightShadow', 'fixedDataTableRowLayout/fixedColumnsDivider', 'public/fixedDataTableRow/columnsShadow', 'public/fixedDataTableRow/columnsRightShadow', 'public/fixedDataTableRow/fixedColumnsDivider');
      var style = {
        height: _this.props.height,
        left: left
      };

      if (_this.props.isRTL) {
        style.right = left;
        style.left = 'auto';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: style
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_renderColumnsRightShadow", function (
    /*number*/
    totalWidth)
    /*?object*/
    {
      if (Math.ceil(_this.props.scrollLeft + _this.props.width) < Math.floor(totalWidth)) {
        var className = (0, _cx["default"])('fixedDataTableRowLayout/columnsShadow', 'fixedDataTableRowLayout/columnsRightShadow', 'public/fixedDataTableRow/columnsShadow', 'public/fixedDataTableRow/columnsRightShadow');
        var style = {
          height: _this.props.height
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          style: style
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onClick", function (
    /*object*/
    event) {
      _this.props.onClick(event, _this.props.index);
    });

    _defineProperty(_assertThisInitialized(_this), "_onContextMenu", function (
    /*object*/
    event) {
      _this.props.onContextMenu(event, _this.props.index);
    });

    _defineProperty(_assertThisInitialized(_this), "_onDoubleClick", function (
    /*object*/
    event) {
      _this.props.onDoubleClick(event, _this.props.index);
    });

    _defineProperty(_assertThisInitialized(_this), "_onMouseUp", function (
    /*object*/
    event) {
      _this.props.onMouseUp(event, _this.props.index);
    });

    _defineProperty(_assertThisInitialized(_this), "_onMouseDown", function (
    /*object*/
    event) {
      _this.props.onMouseDown(event, _this.props.index);
    });

    _defineProperty(_assertThisInitialized(_this), "_onMouseEnter", function (
    /*object*/
    event) {
      /**
       * This is necessary so that onMouseLeave is fired with the initial
       * row index since this row could be updated with a different index
       * when scrolling.
       */
      _this.mouseLeaveIndex = _this.props.index;

      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event, _this.props.index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onMouseLeave", function (
    /*object*/
    event) {
      if (_this.mouseLeaveIndex === null) {
        _this.mouseLeaveIndex = _this.props.index;
      }

      _this.props.onMouseLeave(event, _this.mouseLeaveIndex);

      _this.mouseLeaveIndex = null;
    });

    _defineProperty(_assertThisInitialized(_this), "_onTouchStart", function (
    /*object*/
    event) {
      _this.props.onTouchStart(event, _this.props.index);
    });

    _defineProperty(_assertThisInitialized(_this), "_onTouchEnd", function (
    /*object*/
    event) {
      _this.props.onTouchEnd(event, _this.props.index);
    });

    _defineProperty(_assertThisInitialized(_this), "_onTouchMove", function (
    /*object*/
    event) {
      _this.props.onTouchMove(event, _this.props.index);
    });

    return _this;
  }

  _createClass(FixedDataTableRowImpl, [{
    key: "render",
    value: function render()
    /*object*/
    {
      if (this.props.fake) {
        return null;
      }

      var subRowHeight = this.props.subRowHeight || 0;
      var style = {
        width: this.props.width,
        height: this.props.height + subRowHeight
      };
      var className = (0, _cx["default"])({
        'fixedDataTableRowLayout/main': true,
        'public/fixedDataTableRow/main': true,
        'public/fixedDataTableRow/highlighted': this.props.index % 2 === 1,
        'public/fixedDataTableRow/odd': this.props.index % 2 === 1,
        'public/fixedDataTableRow/even': this.props.index % 2 === 0
      });
      var fixedColumnsWidth = (0, _widthHelper.sumPropWidths)(this.props.fixedColumns);

      var fixedColumns = /*#__PURE__*/_react["default"].createElement(_FixedDataTableCellGroup["default"], {
        key: "fixed_cells",
        isScrolling: this.props.isScrolling,
        height: this.props.height,
        cellGroupWrapperHeight: this.props.cellGroupWrapperHeight,
        left: 0,
        width: fixedColumnsWidth,
        zIndex: 2,
        columns: this.props.fixedColumns,
        touchEnabled: this.props.touchEnabled,
        onColumnResize: this.props.onColumnResize,
        onColumnReorder: this.props.onColumnReorder,
        onColumnReorderMove: this.props.onColumnReorderMove,
        onColumnReorderEnd: this.props.onColumnReorderEnd,
        isColumnReordering: this.props.isColumnReordering,
        columnReorderingData: this.props.columnReorderingData,
        rowHeight: this.props.height,
        rowIndex: this.props.index,
        isHeaderOrFooter: this.props.isHeaderOrFooter,
        isRTL: this.props.isRTL
      });

      var columnsLeftShadow = this._renderColumnsLeftShadow(fixedColumnsWidth);

      var fixedRightColumnsWidth = (0, _widthHelper.sumPropWidths)(this.props.fixedRightColumns);
      var scrollbarOffset = this.props.showScrollbarY ? this.props.scrollbarYWidth : 0;

      var fixedRightColumns = /*#__PURE__*/_react["default"].createElement(_FixedDataTableCellGroup["default"], {
        key: "fixed_right_cells",
        isScrolling: this.props.isScrolling,
        height: this.props.height,
        cellGroupWrapperHeight: this.props.cellGroupWrapperHeight,
        offsetLeft: this.props.width - fixedRightColumnsWidth - scrollbarOffset,
        width: fixedRightColumnsWidth,
        zIndex: 2,
        columns: this.props.fixedRightColumns,
        touchEnabled: this.props.touchEnabled,
        onColumnResize: this.props.onColumnResize,
        onColumnReorder: this.props.onColumnReorder,
        onColumnReorderMove: this.props.onColumnReorderMove,
        onColumnReorderEnd: this.props.onColumnReorderEnd,
        isColumnReordering: this.props.isColumnReordering,
        columnReorderingData: this.props.columnReorderingData,
        rowHeight: this.props.height,
        rowIndex: this.props.index,
        isHeaderOrFooter: this.props.isHeaderOrFooter,
        isRTL: this.props.isRTL
      });

      var fixedRightColumnsShadow = fixedRightColumnsWidth ? this._renderFixedRightColumnsShadow(this.props.width - fixedRightColumnsWidth - scrollbarOffset - 5) : null;

      var scrollableColumns = /*#__PURE__*/_react["default"].createElement(_FixedDataTableCellGroup["default"], {
        key: "scrollable_cells",
        isScrolling: this.props.isScrolling,
        height: this.props.height,
        cellGroupWrapperHeight: this.props.cellGroupWrapperHeight,
        align: "right",
        left: this.props.scrollLeft,
        offsetLeft: fixedColumnsWidth,
        width: this.props.width - fixedColumnsWidth - fixedRightColumnsWidth - scrollbarOffset,
        zIndex: 0,
        columns: this.props.scrollableColumns,
        touchEnabled: this.props.touchEnabled,
        onColumnResize: this.props.onColumnResize,
        onColumnReorder: this.props.onColumnReorder,
        onColumnReorderMove: this.props.onColumnReorderMove,
        onColumnReorderEnd: this.props.onColumnReorderEnd,
        isColumnReordering: this.props.isColumnReordering,
        columnReorderingData: this.props.columnReorderingData,
        rowHeight: this.props.height,
        rowIndex: this.props.index,
        isHeaderOrFooter: this.props.isHeaderOrFooter,
        isRTL: this.props.isRTL
      });

      var scrollableColumnsWidth = (0, _widthHelper.sumPropWidths)(this.props.scrollableColumns);

      var columnsRightShadow = this._renderColumnsRightShadow(fixedColumnsWidth + scrollableColumnsWidth);

      var rowExpanded = this._getRowExpanded(subRowHeight);

      var rowExpandedStyle = {
        height: subRowHeight,
        top: this.props.height,
        width: this.props.width
      };
      var scrollbarSpacer = null;

      if (this.props.showScrollbarY) {
        var spacerStyles = {
          width: scrollbarOffset,
          height: this.props.height,
          // Since the box-sizing = border-box the border on the table is included in the width
          // so we need to account for the left and right border
          left: this.props.isRTL ? 2 : this.props.width - scrollbarOffset - 2
        };
        scrollbarSpacer = /*#__PURE__*/_react["default"].createElement("div", {
          style: spacerStyles,
          className: (0, _cx["default"])('public/fixedDataTable/scrollbarSpacer')
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: (0, _joinClasses["default"])(className, this.props.className),
        role: 'row',
        "aria-rowindex": this.props.ariaRowIndex
      }, this.props.attributes, {
        onClick: this.props.onClick ? this._onClick : null,
        onContextMenu: this.props.onContextMenu ? this._onContextMenu : null,
        onDoubleClick: this.props.onDoubleClick ? this._onDoubleClick : null,
        onMouseDown: this.props.onMouseDown ? this._onMouseDown : null,
        onMouseUp: this.props.onMouseUp ? this._onMouseUp : null,
        onMouseEnter: this.props.onMouseEnter || this.props.onMouseLeave ? this._onMouseEnter : null,
        onMouseLeave: this.props.onMouseLeave ? this._onMouseLeave : null,
        onTouchStart: this.props.onTouchStart ? this._onTouchStart : null,
        onTouchEnd: this.props.onTouchEnd ? this._onTouchEnd : null,
        onTouchMove: this.props.onTouchMove ? this._onTouchMove : null,
        style: style
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])('fixedDataTableRowLayout/body')
      }, fixedColumns, scrollableColumns, columnsLeftShadow, fixedRightColumns, fixedRightColumnsShadow, scrollbarSpacer), rowExpanded && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _cx["default"])('fixedDataTableRowLayout/rowExpanded'),
        style: rowExpandedStyle
      }, rowExpanded), columnsRightShadow);
    }
  }]);

  return FixedDataTableRowImpl;
}(_react["default"].Component);

_defineProperty(FixedDataTableRowImpl, "propTypes", {
  isScrolling: _propTypes["default"].bool,

  /**
   * Array of data for the fixed columns.
   */
  fixedColumns: _propTypes["default"].array.isRequired,

  /**
   * Array of <FixedDataTableColumn /> for the fixed columns positioned at end of the table.
   */
  fixedRightColumns: _propTypes["default"].array.isRequired,

  /**
   * Height of the row.
   */
  height: _propTypes["default"].number.isRequired,

  /**
   * Height of fixedDataTableCellGroupLayout/cellGroupWrapper.
   */
  cellGroupWrapperHeight: _propTypes["default"].number,

  /**
   * Height of the content to be displayed below the row.
   */
  subRowHeight: _propTypes["default"].number,

  /**
   * the row expanded.
   */
  rowExpanded: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),

  /**
   * The row index.
   */
  index: _propTypes["default"].number.isRequired,

  /**
   * Array of data for the scrollable columns.
   */
  scrollableColumns: _propTypes["default"].array.isRequired,

  /**
   * The distance between the left edge of the table and the leftmost portion
   * of the row currently visible in the table.
   */
  scrollLeft: _propTypes["default"].number.isRequired,

  /**
   * Pass true to not render the row. This is used internally for buffering rows.
   */
  fake: _propTypes["default"].bool,

  /**
   * Width of the row.
   */
  width: _propTypes["default"].number.isRequired,

  /**
   * Fire when a row is clicked.
   */
  onClick: _propTypes["default"].func,

  /**
   * Fire when a contextual-menu is requested above a row.
   */
  onContextMenu: _propTypes["default"].func,

  /**
   * Fire when a row is double clicked.
   */
  onDoubleClick: _propTypes["default"].func,

  /**
   * Callback for when resizer knob (in FixedDataTableCell) is clicked
   * to initialize resizing. Please note this is only on the cells
   * in the header.
   * @param number combinedWidth
   * @param number leftOffset
   * @param number cellWidth
   * @param number|string columnKey
   * @param object event
   */
  onColumnResize: _propTypes["default"].func,
  isColumnReordering: _propTypes["default"].bool,

  /**
   * Callback for when reorder handle (in FixedDataTableCell) is clicked
   * to initialize reordering. Please note this is only on the cells
   * in the header.
   * @param number|string columnKey
   * @param number cellWidth
   * @param number leftOffset
   * @param object event
   */
  onColumnReorder: _propTypes["default"].func,

  /**
   * Callback for when a cell is moved while reordering.
   * @param number distance
   */
  onColumnReorderMove: _propTypes["default"].func,

  /**
   * Callback for when the mouse is released to complete reordering.
   * @param number distance
   */
  onColumnReorderEnd: _propTypes["default"].func,
  touchEnabled: _propTypes["default"].bool,

  /**
   * Whether the row is part of the header or footer.
   */
  isHeaderOrFooter: _propTypes["default"].bool,

  /**
   * The value of the aria-rowindex attribute.
   */
  ariaRowIndex: _propTypes["default"].number,

  /**
   * Whether the grid should be in RTL mode
   */
  isRTL: _propTypes["default"].bool,

  /**
   * DOM attributes to be applied to the row.
   */
  attributes: _propTypes["default"].object
});

var FixedDataTableRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(FixedDataTableRow, _React$Component2);

  var _super2 = _createSuper(FixedDataTableRow);

  function FixedDataTableRow(props) {
    var _this2;

    _classCallCheck(this, FixedDataTableRow);

    _this2 = _super2.call(this, props);
    _this2._initialRender = true;
    return _this2;
  }

  _createClass(FixedDataTableRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initialRender = false;
    }
  }, {
    key: "render",
    value: function render()
    /*object*/
    {
      var style = {
        width: this.props.width,
        height: this.props.height,
        zIndex: this.props.zIndex ? this.props.zIndex : 0,
        display: this.props.visible ? 'block' : 'none'
      };
      (0, _FixedDataTableTranslateDOMPosition["default"])(style, 0, this.props.offsetTop, this._initialRender, this.props.isRTL);

      var _this$props = this.props,
          offsetTop = _this$props.offsetTop,
          zIndex = _this$props.zIndex,
          visible = _this$props.visible,
          rowProps = _objectWithoutProperties(_this$props, ["offsetTop", "zIndex", "visible"]);

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        className: (0, _cx["default"])('fixedDataTableRowLayout/rowWrapper')
      }, /*#__PURE__*/_react["default"].createElement(FixedDataTableRowImpl, rowProps));
    }
  }]);

  return FixedDataTableRow;
}(_react["default"].Component);

_defineProperty(FixedDataTableRow, "propTypes", {
  isScrolling: _propTypes["default"].bool,

  /**
   * Height of the row.
   */
  height: _propTypes["default"].number.isRequired,

  /**
   * Z-index on which the row will be displayed. Used e.g. for keeping
   * header and footer in front of other rows.
   */
  zIndex: _propTypes["default"].number,

  /**
   * The vertical position where the row should render itself
   */
  offsetTop: _propTypes["default"].number.isRequired,

  /**
   * Pass false to hide the row via CSS
   */
  visible: _propTypes["default"].bool.isRequired,

  /**
   * Width of the row.
   */
  width: _propTypes["default"].number.isRequired
});

var _default = FixedDataTableRow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableStore.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableStore
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./node_modules/fixed-data-table-2/internal/reducers.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  get: function get() {
    return (0, _redux.createStore)(_reducers["default"]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/FixedDataTableTranslateDOMPosition.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/FixedDataTableTranslateDOMPosition.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _BrowserSupportCore = _interopRequireDefault(__webpack_require__(/*! ./BrowserSupportCore */ "./node_modules/fixed-data-table-2/internal/BrowserSupportCore.js"));

var _translateDOMPositionXY = _interopRequireDefault(__webpack_require__(/*! ./translateDOMPositionXY */ "./node_modules/fixed-data-table-2/internal/translateDOMPositionXY.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableTranslateDOMPosition
 * @typechecks
 */
function FixedDataTableTranslateDOMPosition(
/*object*/
style,
/*number*/
x,
/*number*/
y) {
  var initialRender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isRTL = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (style.display === 'none') {
    return;
  }

  if (initialRender) {
    style.left = x + 'px';
    style.top = y + 'px';
  } else {
    if (_BrowserSupportCore["default"].hasCSSTransforms()) {
      x *= isRTL ? -1 : 1;
    }

    (0, _translateDOMPositionXY["default"])(style, x, y);
  }

  if (isRTL) {
    style.right = style.left;
    style.left = 'auto';
  }
}

var _default = FixedDataTableTranslateDOMPosition;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/Heap.js":
/*!**********************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/Heap.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Heap
 * @typechecks
 * @preventMunge
 */

/*
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function defaultComparator(a, b) {
  return a < b;
}

var Heap = /*#__PURE__*/function () {
  function Heap(items, comparator) {
    _classCallCheck(this, Heap);

    this._items = items || [];
    this._size = this._items.length;
    this._comparator = comparator || defaultComparator;

    this._heapify();
  }
  /*
   * @return {boolean}
   */


  _createClass(Heap, [{
    key: "empty",
    value: function empty() {
      return this._size === 0;
    }
    /*
     * @return {*}
     */

  }, {
    key: "pop",
    value: function pop() {
      if (this._size === 0) {
        return;
      }

      var elt = this._items[0];

      var lastElt = this._items.pop();

      this._size--;

      if (this._size > 0) {
        this._items[0] = lastElt;

        this._sinkDown(0);
      }

      return elt;
    }
    /*
     * @param {*} item
     */

  }, {
    key: "push",
    value: function push(item) {
      this._items[this._size++] = item;

      this._bubbleUp(this._size - 1);
    }
    /*
     * @return {number}
     */

  }, {
    key: "size",
    value: function size() {
      return this._size;
    }
    /*
     * @return {*}
     */

  }, {
    key: "peek",
    value: function peek() {
      if (this._size === 0) {
        return;
      }

      return this._items[0];
    }
  }, {
    key: "_heapify",
    value: function _heapify() {
      for (var index = Math.floor((this._size + 1) / 2); index >= 0; index--) {
        this._sinkDown(index);
      }
    }
    /*
     * @parent {number} index
     */

  }, {
    key: "_bubbleUp",
    value: function _bubbleUp(index) {
      var elt = this._items[index];

      while (index > 0) {
        var parentIndex = Math.floor((index + 1) / 2) - 1;
        var parentElt = this._items[parentIndex]; // if parentElt < elt, stop

        if (this._comparator(parentElt, elt)) {
          return;
        } // swap


        this._items[parentIndex] = elt;
        this._items[index] = parentElt;
        index = parentIndex;
      }
    }
    /*
     * @parent {number} index
     */

  }, {
    key: "_sinkDown",
    value: function _sinkDown(index) {
      var elt = this._items[index];

      while (true) {
        var leftChildIndex = 2 * (index + 1) - 1;
        var rightChildIndex = 2 * (index + 1);
        var swapIndex = -1;

        if (leftChildIndex < this._size) {
          var leftChild = this._items[leftChildIndex];

          if (this._comparator(leftChild, elt)) {
            swapIndex = leftChildIndex;
          }
        }

        if (rightChildIndex < this._size) {
          var rightChild = this._items[rightChildIndex];

          if (this._comparator(rightChild, elt)) {
            if (swapIndex === -1 || this._comparator(rightChild, this._items[swapIndex])) {
              swapIndex = rightChildIndex;
            }
          }
        } // if we don't have a swap, stop


        if (swapIndex === -1) {
          return;
        }

        this._items[index] = this._items[swapIndex];
        this._items[swapIndex] = elt;
        index = swapIndex;
      }
    }
  }]);

  return Heap;
}();

var _default = Heap;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/IntegerBufferSet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/IntegerBufferSet.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule IntegerBufferSet
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Heap = _interopRequireDefault(__webpack_require__(/*! ./Heap */ "./node_modules/fixed-data-table-2/internal/Heap.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! ./invariant */ "./node_modules/fixed-data-table-2/internal/invariant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Data structure that allows to store values and assign positions to them
// in a way to minimize changing positions of stored values when new ones are
// added or when some values are replaced. Stored elements are alwasy assigned
// a consecutive set of positoins startin from 0 up to count of elements less 1
// Following actions can be executed
// * get position assigned to given value (null if value is not stored)
// * create new entry for new value and get assigned position back
// * replace value that is furthest from specified value range with new value
//   and get it's position back
// All operations take amortized log(n) time where n is number of elements in
// the set.
var IntegerBufferSet = /*#__PURE__*/function () {
  function IntegerBufferSet() {
    _classCallCheck(this, IntegerBufferSet);

    this._valueToPositionMap = {};
    this._size = 0;
    this._smallValues = new _Heap["default"]([], // Initial data in the heap
    this._smallerComparator);
    this._largeValues = new _Heap["default"]([], // Initial data in the heap
    this._greaterComparator);
    this.getNewPositionForValue = this.getNewPositionForValue.bind(this);
    this.getValuePosition = this.getValuePosition.bind(this);
    this.getSize = this.getSize.bind(this);
    this.replaceFurthestValuePosition = this.replaceFurthestValuePosition.bind(this);
  }

  _createClass(IntegerBufferSet, [{
    key: "getSize",
    value: function getSize()
    /*number*/
    {
      return this._size;
    }
  }, {
    key: "getValuePosition",
    value: function getValuePosition(
    /*number*/
    value)
    /*?number*/
    {
      if (this._valueToPositionMap[value] === undefined) {
        return null;
      }

      return this._valueToPositionMap[value];
    }
  }, {
    key: "getNewPositionForValue",
    value: function getNewPositionForValue(
    /*number*/
    value)
    /*number*/
    {
      (0, _invariant["default"])(this._valueToPositionMap[value] === undefined, "Shouldn't try to find new position for value already stored in BufferSet");
      var newPosition = this._size;
      this._size++;

      this._pushToHeaps(newPosition, value);

      this._valueToPositionMap[value] = newPosition;
      return newPosition;
    }
  }, {
    key: "replaceFurthestValuePosition",
    value: function replaceFurthestValuePosition(
    /*number*/
    lowValue,
    /*number*/
    highValue,
    /*number*/
    newValue)
    /*?number*/
    {
      (0, _invariant["default"])(this._valueToPositionMap[newValue] === undefined, "Shouldn't try to replace values with value already stored value in " + "BufferSet");

      this._cleanHeaps();

      if (this._smallValues.empty() || this._largeValues.empty()) {
        // Threre are currently no values stored. We will have to create new
        // position for this value.
        return null;
      }

      var minValue = this._smallValues.peek().value;

      var maxValue = this._largeValues.peek().value;

      if (minValue >= lowValue && maxValue <= highValue) {
        // All values currently stored are necessary, we can't reuse any of them.
        return null;
      }

      var valueToReplace;

      if (lowValue - minValue > maxValue - highValue) {
        // minValue is further from provided range. We will reuse it's position.
        valueToReplace = minValue;

        this._smallValues.pop();
      } else {
        valueToReplace = maxValue;

        this._largeValues.pop();
      }

      var position = this._valueToPositionMap[valueToReplace];
      delete this._valueToPositionMap[valueToReplace];
      this._valueToPositionMap[newValue] = position;

      this._pushToHeaps(position, newValue);

      return position;
    }
  }, {
    key: "_pushToHeaps",
    value: function _pushToHeaps(
    /*number*/
    position,
    /*number*/
    value) {
      var element = {
        position: position,
        value: value
      }; // We can reuse the same object in both heaps, because we don't mutate them

      this._smallValues.push(element);

      this._largeValues.push(element);
    }
  }, {
    key: "_cleanHeaps",
    value: function _cleanHeaps() {
      // We not usually only remove object from one heap while moving value.
      // Here we make sure that there is no stale data on top of heaps.
      this._cleanHeap(this._smallValues);

      this._cleanHeap(this._largeValues);

      var minHeapSize = Math.min(this._smallValues.size(), this._largeValues.size());
      var maxHeapSize = Math.max(this._smallValues.size(), this._largeValues.size());

      if (maxHeapSize > 10 * minHeapSize) {
        // There are many old values in one of heaps. We nned to get rid of them
        // to not use too avoid memory leaks
        this._recreateHeaps();
      }
    }
  }, {
    key: "_recreateHeaps",
    value: function _recreateHeaps() {
      var sourceHeap = this._smallValues.size() < this._largeValues.size() ? this._smallValues : this._largeValues;
      var newSmallValues = new _Heap["default"]([], // Initial data in the heap
      this._smallerComparator);
      var newLargeValues = new _Heap["default"]([], // Initial datat in the heap
      this._greaterComparator);

      while (!sourceHeap.empty()) {
        var element = sourceHeap.pop(); // Push all stil valid elements to new heaps

        if (this._valueToPositionMap[element.value] !== undefined) {
          newSmallValues.push(element);
          newLargeValues.push(element);
        }
      }

      this._smallValues = newSmallValues;
      this._largeValues = newLargeValues;
    }
  }, {
    key: "_cleanHeap",
    value: function _cleanHeap(
    /*object*/
    heap) {
      while (!heap.empty() && this._valueToPositionMap[heap.peek().value] === undefined) {
        heap.pop();
      }
    }
  }, {
    key: "_smallerComparator",
    value: function _smallerComparator(
    /*object*/
    lhs,
    /*object*/
    rhs)
    /*boolean*/
    {
      return lhs.value < rhs.value;
    }
  }, {
    key: "_greaterComparator",
    value: function _greaterComparator(
    /*object*/
    lhs,
    /*object*/
    rhs)
    /*boolean*/
    {
      return lhs.value > rhs.value;
    }
  }]);

  return IntegerBufferSet;
}();

var _default = IntegerBufferSet;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/Keys.js":
/*!**********************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/Keys.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Keys
 */
var _default = {
  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
  COMMA: 188,
  PERIOD: 190,
  A: 65,
  Z: 90,
  ZERO: 48,
  NUMPAD_0: 96,
  NUMPAD_9: 105
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/PrefixIntervalTree.js":
/*!************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/PrefixIntervalTree.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PrefixIntervalTree
 * 
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _invariant = _interopRequireDefault(__webpack_require__(/*! ./invariant */ "./node_modules/fixed-data-table-2/internal/invariant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var parent = function parent(node) {
  return Math.floor(node / 2);
};

var Int32Array = __webpack_require__.g.Int32Array || function (size) {
  var xs = [];

  for (var i = size - 1; i >= 0; --i) {
    xs[i] = 0;
  }

  return xs;
};
/**
 * Computes the next power of 2 after or equal to x.
 */


function ceilLog2(x) {
  var y = 1;

  while (y < x) {
    y *= 2;
  }

  return y;
}
/**
 * A prefix interval tree stores an numeric array and the partial sums of that
 * array. It is optimized for updating the values of the array without
 * recomputing all of the partial sums.
 *
 *   - O(ln n) update
 *   - O(1) lookup
 *   - O(ln n) compute a partial sum
 *   - O(n) space
 *
 * Note that the sequence of partial sums is one longer than the array, so that
 * the first partial sum is always 0, and the last partial sum is the sum of the
 * entire array.
 */


var PrefixIntervalTree = /*#__PURE__*/function () {
  function PrefixIntervalTree(xs) {
    _classCallCheck(this, PrefixIntervalTree);

    /**
     * Number of elements in the array
     *
     * @type {number}
     * @private
     */
    this._size = xs.length;
    /**
     * Half the size of the heap. It is also the number of non-leaf nodes, and the
     * index of the first element in the heap. Always a power of 2.
     *
     * @type {number}
     * @private
     */

    this._half = ceilLog2(this._size);
    /**
     * Binary heap
     *
     * @type {!Array.<number>}
     * @const
     * @private
     */

    this._heap = new Int32Array(2 * this._half);
    var i;

    for (i = 0; i < this._size; ++i) {
      this._heap[this._half + i] = xs[i];
    }

    for (i = this._half - 1; i > 0; --i) {
      this._heap[i] = this._heap[2 * i] + this._heap[2 * i + 1];
    }
  }

  _createClass(PrefixIntervalTree, [{
    key: "set",
    value: function set(index, value) {
      (0, _invariant["default"])(0 <= index && index < this._size, 'Index out of range %s', index);
      var node = this._half + index;
      this._heap[node] = value;
      node = parent(node);

      for (; node !== 0; node = parent(node)) {
        this._heap[node] = this._heap[2 * node] + this._heap[2 * node + 1];
      }
    }
  }, {
    key: "get",
    value: function get(index) {
      (0, _invariant["default"])(0 <= index && index < this._size, 'Index out of range %s', index);
      var node = this._half + index;
      return this._heap[node];
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this._size;
    }
    /**
     * Returns the sum get(0) + get(1) + ... + get(end - 1).
     */

  }, {
    key: "sumUntil",
    value: function sumUntil(end) {
      (0, _invariant["default"])(0 <= end && end < this._size + 1, 'Index out of range %s', end);

      if (end === 0) {
        return 0;
      }

      var node = this._half + end - 1;
      var sum = this._heap[node];

      for (; node !== 1; node = parent(node)) {
        if (node % 2 === 1) {
          sum += this._heap[node - 1];
        }
      }

      return sum;
    }
    /**
     * Returns the sum get(0) + get(1) + ... + get(inclusiveEnd).
     */

  }, {
    key: "sumTo",
    value: function sumTo(inclusiveEnd) {
      (0, _invariant["default"])(0 <= inclusiveEnd && inclusiveEnd < this._size, 'Index out of range %s', inclusiveEnd);
      return this.sumUntil(inclusiveEnd + 1);
    }
    /**
     * Returns the sum get(begin) + get(begin + 1) + ... + get(end - 1).
     */

  }, {
    key: "sum",
    value: function sum(begin, end) {
      (0, _invariant["default"])(begin <= end, 'Begin must precede end');
      return this.sumUntil(end) - this.sumUntil(begin);
    }
    /**
     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) <= t, or
     * -1 if no such i exists.
     */

  }, {
    key: "greatestLowerBound",
    value: function greatestLowerBound(t) {
      if (t < 0) {
        return -1;
      }

      var node = 1;

      if (this._heap[node] <= t) {
        return this._size;
      }

      while (node < this._half) {
        var leftSum = this._heap[2 * node];

        if (t < leftSum) {
          node = 2 * node;
        } else {
          node = 2 * node + 1;
          t -= leftSum;
        }
      }

      return node - this._half;
    }
    /**
     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) < t, or
     * -1 if no such i exists.
     */

  }, {
    key: "greatestStrictLowerBound",
    value: function greatestStrictLowerBound(t) {
      if (t <= 0) {
        return -1;
      }

      var node = 1;

      if (this._heap[node] < t) {
        return this._size;
      }

      while (node < this._half) {
        var leftSum = this._heap[2 * node];

        if (t <= leftSum) {
          node = 2 * node;
        } else {
          node = 2 * node + 1;
          t -= leftSum;
        }
      }

      return node - this._half;
    }
    /**
     * Returns the smallest i such that 0 <= i <= size and t <= sumUntil(i), or
     * size + 1 if no such i exists.
     */

  }, {
    key: "leastUpperBound",
    value: function leastUpperBound(t) {
      return this.greatestStrictLowerBound(t) + 1;
    }
    /**
     * Returns the smallest i such that 0 <= i <= size and t < sumUntil(i), or
     * size + 1 if no such i exists.
     */

  }, {
    key: "leastStrictUpperBound",
    value: function leastStrictUpperBound(t) {
      return this.greatestLowerBound(t) + 1;
    }
  }], [{
    key: "uniform",
    value: function uniform(size, initialValue) {
      var xs = [];

      for (var i = size - 1; i >= 0; --i) {
        xs[i] = initialValue;
      }

      return new PrefixIntervalTree(xs);
    }
  }, {
    key: "empty",
    value: function empty(size) {
      return PrefixIntervalTree.uniform(size, 0);
    }
  }]);

  return PrefixIntervalTree;
}();

var _default = PrefixIntervalTree;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ReactDOM.js":
/*!**************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ReactDOM.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 */
var _default = __webpack_require__(/*! react-dom */ "react-dom");

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ReactTouchHandler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ReactTouchHandler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * This is utility that handles touch events and calls provided touch
 * callback with correct frame rate.
 * Deceleration logic based on http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
 *
 * @providesModule ReactTouchHandler
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _emptyFunction = _interopRequireDefault(__webpack_require__(/*! ./emptyFunction */ "./node_modules/fixed-data-table-2/internal/emptyFunction.js"));

var _requestAnimationFramePolyfill = _interopRequireDefault(__webpack_require__(/*! ./requestAnimationFramePolyfill */ "./node_modules/fixed-data-table-2/internal/requestAnimationFramePolyfill.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MOVE_AMPLITUDE = 1.6;
var DECELERATION_AMPLITUDE = 1.6;
var DECELERATION_FACTOR = 325;
var TRACKER_TIMEOUT = 100;

var ReactTouchHandler = /*#__PURE__*/function () {
  /**
   * onTouchScroll is the callback that will be called with right frame rate if
   * any touch events happened
   * onTouchScroll should is to be called with two arguments: deltaX and deltaY in
   * this order
   */
  function ReactTouchHandler(
  /*function*/
  onTouchScroll,
  /*boolean|function*/
  handleScrollX,
  /*boolean|function*/
  handleScrollY,
  /*?boolean*/
  preventDefault,
  /*?boolean*/
  stopPropagation) {
    _classCallCheck(this, ReactTouchHandler);

    // The animation frame id for the drag scroll
    this._dragAnimationId = null; // The interval id for tracking the drag velocity

    this._trackerId = null; // Used to track the drag scroll delta while waiting for an animation frame

    this._deltaX = 0;
    this._deltaY = 0; // The last touch we processed while dragging.  Used to compute the delta and velocity above

    this._lastTouchX = 0;
    this._lastTouchY = 0; // Used to track a moving average of the scroll velocity while dragging

    this._velocityX = 0;
    this._velocityY = 0; // An accummulated drag scroll delta used to calculate velocity

    this._accumulatedDeltaX = 0;
    this._accumulatedDeltaY = 0; // Timestamp from the last interval frame we used to track velocity

    this._lastFrameTimestamp = Date.now(); // Timestamp from the last animation frame we used to autoscroll after drag stop

    this._autoScrollTimestamp = Date.now();

    if (typeof handleScrollX !== 'function') {
      handleScrollX = handleScrollX ? _emptyFunction["default"].thatReturnsTrue : _emptyFunction["default"].thatReturnsFalse;
    }

    if (typeof handleScrollY !== 'function') {
      handleScrollY = handleScrollY ? _emptyFunction["default"].thatReturnsTrue : _emptyFunction["default"].thatReturnsFalse;
    }

    this._handleScrollX = handleScrollX;
    this._handleScrollY = handleScrollY;
    this._preventDefault = preventDefault;
    this._stopPropagation = stopPropagation;
    this._onTouchScrollCallback = onTouchScroll;
    this._didTouchMove = this._didTouchMove.bind(this);
    this._track = this._track.bind(this);
    this._autoScroll = this._autoScroll.bind(this);
    this._startAutoScroll = this._startAutoScroll.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
  }

  _createClass(ReactTouchHandler, [{
    key: "onTouchStart",
    value: function onTouchStart(
    /*object*/
    event) {
      if (this._preventDefault) {
        event.preventDefault();
      } // Start tracking drag delta for scrolling


      this._lastTouchX = event.touches[0].pageX;
      this._lastTouchY = event.touches[0].pageY; // Reset our velocity and intermediate data used to compute velocity

      this._velocityX = 0;
      this._velocityY = 0;
      this._accumulatedDeltaX = 0;
      this._accumulatedDeltaY = 0;
      this._lastFrameTimestamp = Date.now(); // Setup interval for tracking velocity

      clearInterval(this._trackerId);
      this._trackerId = setInterval(this._track, TRACKER_TIMEOUT);

      if (this._stopPropagation) {
        event.stopPropagation();
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(
    /*object*/
    event) {
      if (this._preventDefault) {
        event.preventDefault();
      } // Stop tracking velocity


      clearInterval(this._trackerId);
      this._trackerId = null; // Initialize decelerating autoscroll on drag stop

      (0, _requestAnimationFramePolyfill["default"])(this._startAutoScroll);

      if (this._stopPropagation) {
        event.stopPropagation();
      }
    }
  }, {
    key: "onTouchCancel",
    value: function onTouchCancel(
    /*object*/
    event) {
      // Stop tracking velocity
      clearInterval(this._trackerId);
      this._trackerId = null;

      if (this._stopPropagation) {
        event.stopPropagation();
      }
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(
    /*object*/
    event) {
      if (this._preventDefault) {
        event.preventDefault();
      }

      var moveX = event.touches[0].pageX;
      var moveY = event.touches[0].pageY; // Compute delta scrolled since last drag
      // Mobile, scrolling is inverted

      this._deltaX = MOVE_AMPLITUDE * (this._lastTouchX - moveX);
      this._deltaY = MOVE_AMPLITUDE * (this._lastTouchY - moveY);

      var handleScrollX = this._handleScrollX(this._deltaX, this._deltaY);

      var handleScrollY = this._handleScrollY(this._deltaY, this._deltaX);

      if (!handleScrollX && !handleScrollY) {
        return;
      } // If we can handle scroll update last touch for computing delta


      if (handleScrollX) {
        this._lastTouchX = moveX;
      } else {
        this._deltaX = 0;
      }

      if (handleScrollY) {
        this._lastTouchY = moveY;
      } else {
        this._deltaY = 0;
      } // The event will result in a scroll to the table, so there's no need to also let the parent containers scroll


      if (!event.defaultPrevented) {
        event.preventDefault();
      } // Ensure minimum delta magnitude is met to avoid jitter


      var changed = false;

      if (Math.abs(this._deltaX) > 2 || Math.abs(this._deltaY) > 2) {
        if (this._stopPropagation) {
          event.stopPropagation();
        }

        changed = true;
      } // Request animation frame to trigger scroll of computed delta


      if (changed === true && this._dragAnimationId === null) {
        this._dragAnimationId = (0, _requestAnimationFramePolyfill["default"])(this._didTouchMove);
      }
    }
    /**
     * Fire scroll callback based on computed drag delta.
     * Also track accummulated delta so we can calculate velocity
     */

  }, {
    key: "_didTouchMove",
    value: function _didTouchMove() {
      this._dragAnimationId = null;

      this._onTouchScrollCallback(this._deltaX, this._deltaY);

      this._accumulatedDeltaX += this._deltaX;
      this._accumulatedDeltaY += this._deltaY;
      this._deltaX = 0;
      this._deltaY = 0;
    }
    /**
     * Compute velocity based on a weighted average of drag over last 100 ms and
     * previous velocity.  Combining into a moving average results in a smoother scroll.
     */

  }, {
    key: "_track",
    value: function _track() {
      var now = Date.now();
      var elapsed = now - this._lastFrameTimestamp;
      var oldVelocityX = this._velocityX;
      var oldVelocityY = this._velocityY; // We compute velocity using a weighted average of the current velocity and the previous velocity
      // If the previous velocity is 0, put the full weight on the last 100 ms

      var weight = 0.8;

      if (elapsed < TRACKER_TIMEOUT) {
        weight *= elapsed / TRACKER_TIMEOUT;
      }

      if (oldVelocityX === 0 && oldVelocityY === 0) {
        weight = 1;
      } // Formula for computing weighted average of velocity


      this._velocityX = weight * (TRACKER_TIMEOUT * this._accumulatedDeltaX / (1 + elapsed));

      if (weight < 1) {
        this._velocityX += (1 - weight) * oldVelocityX;
      }

      this._velocityY = weight * (TRACKER_TIMEOUT * this._accumulatedDeltaY / (1 + elapsed));

      if (weight < 1) {
        this._velocityY += (1 - weight) * oldVelocityY;
      }

      this._accumulatedDeltaX = 0;
      this._accumulatedDeltaY = 0;
      this._lastFrameTimestamp = now;
    }
    /**
     * To kick off deceleration / momentum scrolling,
     * handle any scrolling from a drag which was waiting for an animation frame
     * Then update our velocity
     * Finally start the momentum scrolling handler (autoScroll)
     */

  }, {
    key: "_startAutoScroll",
    value: function _startAutoScroll() {
      this._autoScrollTimestamp = Date.now();

      if (this._deltaX > 0 || this.deltaY > 0) {
        this._didTouchMove();
      }

      this._track();

      this._autoScroll();
    }
    /**
     * Compute a scroll delta with an exponential decay based on time elapsed since drag was released.
     * This is called recursively on animation frames until the delta is below a threshold (5 pixels)
     */

  }, {
    key: "_autoScroll",
    value: function _autoScroll() {
      var elapsed = Date.now() - this._autoScrollTimestamp;

      var factor = DECELERATION_AMPLITUDE * Math.exp(-elapsed / DECELERATION_FACTOR);
      var deltaX = factor * this._velocityX;
      var deltaY = factor * this._velocityY;

      if (Math.abs(deltaX) <= 5 || !this._handleScrollX(deltaX, deltaY)) {
        deltaX = 0;
      }

      if (Math.abs(deltaY) <= 5 || !this._handleScrollY(deltaY, deltaX)) {
        deltaY = 0;
      }

      if (deltaX !== 0 || deltaY !== 0) {
        this._onTouchScrollCallback(deltaX, deltaY);

        (0, _requestAnimationFramePolyfill["default"])(this._autoScroll);
      }
    }
  }]);

  return ReactTouchHandler;
}();

var _default = ReactTouchHandler;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ReactWheelHandler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ReactWheelHandler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * This is utility that handles onWheel events and calls provided wheel
 * callback with correct frame rate.
 *
 * @providesModule ReactWheelHandler
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _emptyFunction = _interopRequireDefault(__webpack_require__(/*! ./emptyFunction */ "./node_modules/fixed-data-table-2/internal/emptyFunction.js"));

var _normalizeWheel = _interopRequireDefault(__webpack_require__(/*! ./normalizeWheel */ "./node_modules/fixed-data-table-2/internal/normalizeWheel.js"));

var _requestAnimationFramePolyfill = _interopRequireDefault(__webpack_require__(/*! ./requestAnimationFramePolyfill */ "./node_modules/fixed-data-table-2/internal/requestAnimationFramePolyfill.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactWheelHandler = /*#__PURE__*/function () {
  /**
   * onWheel is the callback that will be called with right frame rate if
   * any wheel events happened
   * onWheel should is to be called with two arguments: deltaX and deltaY in
   * this order
   */
  function ReactWheelHandler(
  /*function*/
  onWheel,
  /*boolean|function*/
  handleScrollX,
  /*boolean|function*/
  handleScrollY,
  /*?boolean*/
  isRTL,
  /*?boolean*/
  preventDefault,
  /*?boolean*/
  stopPropagation) {
    _classCallCheck(this, ReactWheelHandler);

    this._animationFrameID = null;
    this._deltaX = 0;
    this._deltaY = 0;
    this._didWheel = this._didWheel.bind(this);
    this._rootRef = null;

    if (typeof handleScrollX !== 'function') {
      handleScrollX = handleScrollX ? _emptyFunction["default"].thatReturnsTrue : _emptyFunction["default"].thatReturnsFalse;
    }

    if (typeof handleScrollY !== 'function') {
      handleScrollY = handleScrollY ? _emptyFunction["default"].thatReturnsTrue : _emptyFunction["default"].thatReturnsFalse;
    }

    this._handleScrollX = handleScrollX;
    this._handleScrollY = handleScrollY;
    this._preventDefault = preventDefault;
    this._stopPropagation = stopPropagation;
    this._onWheelCallback = onWheel;
    this.onWheel = this.onWheel.bind(this);
    this._isRTL = isRTL;
  }

  _createClass(ReactWheelHandler, [{
    key: "onWheel",
    value: function onWheel(
    /*object*/
    event) {
      if (this._preventDefault) {
        event.preventDefault();
      }

      var normalizedEvent = (0, _normalizeWheel["default"])(event); // if shift is held, swap the axis of scrolling.

      if (event.shiftKey && ReactWheelHandler._allowInternalAxesSwap()) {
        normalizedEvent = ReactWheelHandler._swapNormalizedWheelAxis(normalizedEvent);
      } else if (!event.shiftKey) {
        normalizedEvent.pixelX *= this._isRTL ? -1 : 1;
      }

      var deltaX = this._deltaX + normalizedEvent.pixelX;
      var deltaY = this._deltaY + normalizedEvent.pixelY;

      var handleScrollX = this._handleScrollX(deltaX, deltaY);

      var handleScrollY = this._handleScrollY(deltaY, deltaX);

      if (!handleScrollX && !handleScrollY) {
        return;
      }

      if (this._rootRef && !this._contains(event.target)) {
        return;
      }

      this._deltaX += handleScrollX ? normalizedEvent.pixelX : 0;
      this._deltaY += handleScrollY ? normalizedEvent.pixelY : 0; // This will result in a scroll to the table, so there's no need to let the parent containers scroll

      if (!event.defaultPrevented) {
        event.preventDefault();
      }

      var changed;

      if (this._deltaX !== 0 || this._deltaY !== 0) {
        if (this._stopPropagation) {
          event.stopPropagation();
        }

        changed = true;
      }

      if (changed === true && this._animationFrameID === null) {
        this._animationFrameID = (0, _requestAnimationFramePolyfill["default"])(this._didWheel);
      }
    }
  }, {
    key: "setRoot",
    value: function setRoot(rootRef) {
      this._rootRef = rootRef;
    }
  }, {
    key: "_didWheel",
    value: function _didWheel() {
      this._animationFrameID = null;

      this._onWheelCallback(this._deltaX, this._deltaY);

      this._deltaX = 0;
      this._deltaY = 0;
    }
  }, {
    key: "_contains",
    value: function _contains(target) {
      var parent = target;

      while (parent != document.body) {
        if (parent === this._rootRef) {
          return true;
        }

        parent = parent.parentNode;
      }

      return false;
    }
  }], [{
    key: "_swapNormalizedWheelAxis",
    value: function _swapNormalizedWheelAxis(
    /*object*/
    normalizedEvent)
    /*object*/
    {
      return {
        spinX: normalizedEvent.spinY,
        spinY: normalizedEvent.spinX,
        pixelX: normalizedEvent.pixelY,
        pixelY: normalizedEvent.pixelX
      };
    }
  }, {
    key: "_allowInternalAxesSwap",
    value: function _allowInternalAxesSwap()
    /*boolean*/
    {
      return navigator.platform !== "MacIntel";
    }
  }]);

  return ReactWheelHandler;
}();

var _default = ReactWheelHandler;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ScrollContainer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ScrollContainer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Scrollbar = _interopRequireDefault(__webpack_require__(/*! ./Scrollbar */ "./node_modules/fixed-data-table-2/internal/Scrollbar.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _joinClasses = _interopRequireDefault(__webpack_require__(/*! ./joinClasses */ "./node_modules/fixed-data-table-2/internal/joinClasses.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScrollContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ScrollContainer, _React$Component);

  var _super = _createSuper(ScrollContainer);

  function ScrollContainer() {
    var _this;

    _classCallCheck(this, ScrollContainer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "_onScrollBarsUpdate", function (args) {
      _this.setState(args);
    });

    _defineProperty(_assertThisInitialized(_this), "_onVerticalScroll", function (
    /*number*/
    scrollPos) {
      if (_this.state.scrollToY !== undefined) {
        _this.state.scrollToY(scrollPos);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onHorizontalScroll", function (
    /*number*/
    scrollPos) {
      if (_this.state.scrollToX !== undefined) {
        _this.state.scrollToX(scrollPos);
      }
    });

    return _this;
  }

  _createClass(ScrollContainer, [{
    key: "render",
    value: function render() {
      var scrollbarY = !(0, _isEmpty["default"])(this.state) && /*#__PURE__*/_react["default"].createElement(_Scrollbar["default"], {
        size: this.state.viewportHeight,
        contentSize: this.state.contentHeight,
        onScroll: this._onVerticalScroll,
        verticalTop: this.state.scrollbarYOffsetTop,
        position: this.state.scrollY,
        touchEnabled: this.props.touchScrollEnabled,
        isRTL: this.props.isRTL
      });

      var scrollbarX = !(0, _isEmpty["default"])(this.state) && /*#__PURE__*/_react["default"].createElement(HorizontalScrollbar, {
        contentSize: this.state.contentWidth,
        offset: this.state.scrollbarXOffsetTop,
        onScroll: this._onHorizontalScroll,
        position: this.state.scrollX,
        size: this.state.viewportWidth,
        touchEnabled: this.props.touchScrollEnabled,
        isRTL: this.props.isRTL
      });

      return /*#__PURE__*/_react["default"].cloneElement(this.props.children, {
        onScrollBarsUpdate: this._onScrollBarsUpdate,
        scrollbarX: scrollbarX,
        scrollbarY: scrollbarY
      });
    }
  }]);

  return ScrollContainer;
}(_react["default"].Component);

var HorizontalScrollbar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HorizontalScrollbar, _React$PureComponent);

  var _super2 = _createSuper(HorizontalScrollbar);

  function HorizontalScrollbar() {
    _classCallCheck(this, HorizontalScrollbar);

    return _super2.apply(this, arguments);
  }

  _createClass(HorizontalScrollbar, [{
    key: "render",
    value: function render()
    /*object*/
    {
      var _this$props = this.props,
          offset = _this$props.offset,
          size = _this$props.size;
      var outerContainerStyle = {
        height: _Scrollbar["default"].SIZE,
        width: size
      };
      var innerContainerStyle = {
        height: _Scrollbar["default"].SIZE,
        overflow: 'hidden',
        width: size,
        top: offset
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _joinClasses["default"])((0, _cx["default"])('public/fixedDataTable/horizontalScrollbar')),
        style: outerContainerStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: innerContainerStyle
      }, /*#__PURE__*/_react["default"].createElement(_Scrollbar["default"], _extends({}, this.props, {
        isOpaque: true,
        orientation: "horizontal",
        offset: undefined
      }))));
    }
  }]);

  return HorizontalScrollbar;
}(_react["default"].PureComponent);

_defineProperty(HorizontalScrollbar, "propTypes", {
  contentSize: _propTypes["default"].number.isRequired,
  offset: _propTypes["default"].number.isRequired,
  onScroll: _propTypes["default"].func.isRequired,
  position: _propTypes["default"].number.isRequired,
  size: _propTypes["default"].number.isRequired,
  isRTL: _propTypes["default"].bool
});

var _default = ScrollContainer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/Scrollbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/Scrollbar.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _DOMMouseMoveTracker = _interopRequireDefault(__webpack_require__(/*! ./DOMMouseMoveTracker */ "./node_modules/fixed-data-table-2/internal/DOMMouseMoveTracker.js"));

var _Keys = _interopRequireDefault(__webpack_require__(/*! ./Keys */ "./node_modules/fixed-data-table-2/internal/Keys.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ReactDOM = _interopRequireDefault(__webpack_require__(/*! ./ReactDOM */ "./node_modules/fixed-data-table-2/internal/ReactDOM.js"));

var _ReactWheelHandler = _interopRequireDefault(__webpack_require__(/*! ./ReactWheelHandler */ "./node_modules/fixed-data-table-2/internal/ReactWheelHandler.js"));

var _cx = _interopRequireDefault(__webpack_require__(/*! ./cx */ "./node_modules/fixed-data-table-2/internal/cx.js"));

var _emptyFunction = _interopRequireDefault(__webpack_require__(/*! ./emptyFunction */ "./node_modules/fixed-data-table-2/internal/emptyFunction.js"));

var _FixedDataTableTranslateDOMPosition = _interopRequireDefault(__webpack_require__(/*! ./FixedDataTableTranslateDOMPosition */ "./node_modules/fixed-data-table-2/internal/FixedDataTableTranslateDOMPosition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cssVar = __webpack_require__(/*! ./cssVar */ "./node_modules/fixed-data-table-2/internal/cssVar.js");

var UNSCROLLABLE_STATE = {
  position: 0,
  scrollable: false
};
var FACE_MARGIN = parseInt(cssVar('scrollbar-face-margin'), 10);
var FACE_MARGIN_2 = FACE_MARGIN * 2;
var FACE_SIZE_MIN = 30;
var KEYBOARD_SCROLL_AMOUNT = 40;
var _lastScrolledScrollbar = null;

var Scrollbar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Scrollbar, _React$PureComponent);

  var _super = _createSuper(Scrollbar);

  function Scrollbar(_props)
  /*object*/
  {
    var _this;

    _classCallCheck(this, Scrollbar);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "_onRefFace", function (ref) {
      return _this._faceRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "_onRefRoot", function (ref) {
      return _this._rootRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "scrollBy", function (
    /*number*/
    delta) {
      _this._onWheel(delta);
    });

    _defineProperty(_assertThisInitialized(_this), "_shouldHandleX", function (
    /*number*/
    delta) {
      return (
        /*boolean*/
        _this.props.orientation === 'horizontal' ? _this._shouldHandleChange(delta) : false
      );
    });

    _defineProperty(_assertThisInitialized(_this), "_shouldHandleY", function (
    /*number*/
    delta) {
      return (
        /*boolean*/
        _this.props.orientation !== 'horizontal' ? _this._shouldHandleChange(delta) : false
      );
    });

    _defineProperty(_assertThisInitialized(_this), "_shouldHandleChange", function (
    /*number*/
    delta)
    /*boolean*/
    {
      var nextState = _this._calculateState(_this.state.position + delta, _this.props.size, _this.props.contentSize, _this.props.orientation);

      return nextState.position !== _this.state.position;
    });

    _defineProperty(_assertThisInitialized(_this), "_calculateState", function (
    /*number*/
    position,
    /*number*/
    size,
    /*number*/
    contentSize,
    /*string*/
    orientation)
    /*object*/
    {
      var clampedSize = Math.max(1, size);

      if (contentSize <= clampedSize) {
        return UNSCROLLABLE_STATE;
      }

      var stateKey = "".concat(position, "_").concat(clampedSize, "_").concat(contentSize, "_").concat(orientation);

      if (_this._stateKey === stateKey) {
        return _this._stateForKey;
      } // There are two types of positions here.
      // 1) Phisical position: changed by mouse / keyboard
      // 2) Logical position: changed by props.
      // The logical position will be kept as as internal state and the `render()`
      // function will translate it into physical position to render.


      var isHorizontal = orientation === 'horizontal';
      var scale = clampedSize / contentSize;
      var faceSize = clampedSize * scale;

      if (faceSize < FACE_SIZE_MIN) {
        scale = (clampedSize - FACE_SIZE_MIN) / (contentSize - clampedSize);
        faceSize = FACE_SIZE_MIN;
      }

      var scrollable = true;
      var maxPosition = contentSize - clampedSize;

      if (position < 0) {
        position = 0;
      } else if (position > maxPosition) {
        position = maxPosition;
      }

      var isDragging = _this._mouseMoveTracker ? _this._mouseMoveTracker.isDragging() : false; // This function should only return flat values that can be compared quiclky
      // by `ReactComponentWithPureRenderMixin`.

      var state = {
        faceSize: faceSize,
        isDragging: isDragging,
        isHorizontal: isHorizontal,
        position: position,
        scale: scale,
        scrollable: scrollable
      }; // cache the state for later use.

      _this._stateKey = stateKey;
      _this._stateForKey = state;
      return state;
    });

    _defineProperty(_assertThisInitialized(_this), "_onWheelY", function (
    /*number*/
    deltaX,
    /*number*/
    deltaY) {
      _this._onWheel(deltaY);
    });

    _defineProperty(_assertThisInitialized(_this), "_onWheelX", function (
    /*number*/
    deltaX,
    /*number*/
    deltaY) {
      _this._onWheel(deltaX);
    });

    _defineProperty(_assertThisInitialized(_this), "_onWheel", function (
    /*number*/
    delta) {
      var props = _this.props; // The mouse may move faster then the animation frame does.
      // Use `requestAnimationFrame` to avoid over-updating.

      _this._setNextState(_this._calculateState(_this.state.position + delta, props.size, props.contentSize, props.orientation));
    });

    _defineProperty(_assertThisInitialized(_this), "_onMouseDown", function (
    /*object*/
    event) {
      var nextState;

      if (event.target !== _this._faceRef) {
        // Both `offsetX` and `layerX` are non-standard DOM property but they are
        // magically available for browsers somehow.
        var nativeEvent = event.nativeEvent;
        var position = _this.state.isHorizontal ? nativeEvent.offsetX || nativeEvent.layerX || _this.getTouchX(nativeEvent) : nativeEvent.offsetY || nativeEvent.layerY || _this.getTouchY(nativeEvent); // MouseDown on the scroll-track directly, move the center of the
        // scroll-face to the mouse position.

        var props = _this.props;
        position /= _this.state.scale;
        nextState = _this._calculateState(position - _this.state.faceSize * 0.5 / _this.state.scale, props.size, props.contentSize, props.orientation);
      } else {
        nextState = {};
      }

      nextState.focused = true;

      _this._setNextState(nextState);

      _this._mouseMoveTracker.captureMouseMoves(event); // Focus the node so it may receive keyboard event.


      _this._rootRef.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "_onTouchCancel", function (
    /*object*/
    event) {
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "_onTouchEnd", function (
    /*object*/
    event) {
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "_onTouchMove", function (
    /*object*/
    event) {
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "_onTouchStart", function (
    /*object*/
    event) {
      event.stopPropagation();

      _this._onMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "_onMouseMove", function (
    /*number*/
    deltaX,
    /*number*/
    deltaY) {
      var props = _this.props;
      var delta = _this.state.isHorizontal ? deltaX * (_this.props.isRTL ? -1 : 1) : deltaY;
      delta /= _this.state.scale;

      _this._setNextState(_this._calculateState(_this.state.position + delta, props.size, props.contentSize, props.orientation));
    });

    _defineProperty(_assertThisInitialized(_this), "_onMouseMoveEnd", function () {
      _this._nextState = null;

      _this._mouseMoveTracker.releaseMouseMoves();

      _this.setState({
        isDragging: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onKeyDown", function (
    /*object*/
    event) {
      var keyCode = event.keyCode;

      if (keyCode === _Keys["default"].TAB) {
        // Let focus move off the scrollbar.
        return;
      }

      var distance = KEYBOARD_SCROLL_AMOUNT;
      var direction = 0;

      if (_this.state.isHorizontal) {
        switch (keyCode) {
          case _Keys["default"].HOME:
            direction = -1;
            distance = _this.props.contentSize;
            break;

          case _Keys["default"].LEFT:
            direction = -1;
            break;

          case _Keys["default"].RIGHT:
            direction = 1;
            break;

          default:
            return;
        }
      }

      if (!_this.state.isHorizontal) {
        switch (keyCode) {
          case _Keys["default"].SPACE:
            if (event.shiftKey) {
              direction = -1;
            } else {
              direction = 1;
            }

            break;

          case _Keys["default"].HOME:
            direction = -1;
            distance = _this.props.contentSize;
            break;

          case _Keys["default"].UP:
            direction = -1;
            break;

          case _Keys["default"].DOWN:
            direction = 1;
            break;

          case _Keys["default"].PAGE_UP:
            direction = -1;
            distance = _this.props.size;
            break;

          case _Keys["default"].PAGE_DOWN:
            direction = 1;
            distance = _this.props.size;
            break;

          default:
            return;
        }
      }

      event.preventDefault();
      var props = _this.props;

      _this._setNextState(_this._calculateState(_this.state.position + distance * direction, props.size, props.contentSize, props.orientation));
    });

    _defineProperty(_assertThisInitialized(_this), "_onFocus", function () {
      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onBlur", function () {
      _this.setState({
        focused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_blur", function () {
      var el = _ReactDOM["default"].findDOMNode(_assertThisInitialized(_this));

      if (!el) {
        return;
      }

      try {
        _this._onBlur();

        el.blur();
      } catch (oops) {// pass
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTouchX", function (
    /*object*/
    e) {
      return Math.round(e.targetTouches[0].clientX - e.target.getBoundingClientRect().x);
    });

    _defineProperty(_assertThisInitialized(_this), "getTouchY", function (
    /*object*/
    e) {
      return Math.round(e.targetTouches[0].clientY - e.target.getBoundingClientRect().y);
    });

    _defineProperty(_assertThisInitialized(_this), "_setNextState", function (
    /*object*/
    nextState,
    /*?object*/
    props) {
      props = props || _this.props;
      var controlledPosition = props.position;
      var willScroll = _this.state.position !== nextState.position;

      if (controlledPosition === undefined) {
        var callback = willScroll ? _this._didScroll : undefined;

        _this.setState(nextState, callback);
      } else if (controlledPosition === nextState.position) {
        _this.setState(nextState);
      } else {
        // Scrolling is controlled. Don't update the state and let the owner
        // to update the scrollbar instead.
        if (nextState.position !== undefined && nextState.position !== _this.state.position) {
          _this.props.onScroll(nextState.position);
        }

        return;
      }

      if (willScroll && _lastScrolledScrollbar !== _assertThisInitialized(_this)) {
        _lastScrolledScrollbar && _lastScrolledScrollbar._blur();
        _lastScrolledScrollbar = _assertThisInitialized(_this);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_didScroll", function () {
      _this.props.onScroll(_this.state.position);
    });

    _this.state = _this._calculateState(_props.position || _props.defaultPosition || 0, _props.size, _props.contentSize, _props.orientation);
    _this._initialRender = true;
    return _this;
  }

  _createClass(Scrollbar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var controlledPosition = this.props.position;

      if (controlledPosition === undefined) {
        this._setNextState(this._calculateState(this.state.position, this.props.size, this.props.contentSize, this.props.orientation));
      } else {
        this._setNextState(this._calculateState(controlledPosition, this.props.size, this.props.contentSize, this.props.orientation), this.props);
      }
    }
  }, {
    key: "render",
    value: function render()
    /*?object*/
    {
      if (!this.state.scrollable) {
        return null;
      }

      var size = this.props.size;
      var mainStyle;
      var faceStyle;
      var isHorizontal = this.state.isHorizontal;
      var isVertical = !isHorizontal;
      var isActive = this.state.focused || this.state.isDragging;
      var faceSize = this.state.faceSize;
      var isOpaque = this.props.isOpaque;
      var verticalTop = this.props.verticalTop || 0;
      var mainClassName = (0, _cx["default"])({
        'ScrollbarLayout/main': true,
        'ScrollbarLayout/mainVertical': isVertical,
        'ScrollbarLayout/mainHorizontal': isHorizontal,
        'public/Scrollbar/main': true,
        'public/Scrollbar/mainOpaque': isOpaque,
        'public/Scrollbar/mainActive': isActive
      });
      var faceClassName = (0, _cx["default"])({
        'ScrollbarLayout/face': true,
        'ScrollbarLayout/faceHorizontal': isHorizontal,
        'ScrollbarLayout/faceVertical': isVertical,
        'public/Scrollbar/faceActive': isActive,
        'public/Scrollbar/face': true
      });
      var position = this.state.position * this.state.scale + FACE_MARGIN;

      if (isHorizontal) {
        mainStyle = {
          width: size
        };
        faceStyle = {
          width: faceSize - FACE_MARGIN_2,
          top: 0,
          bottom: 0
        };
        (0, _FixedDataTableTranslateDOMPosition["default"])(faceStyle, position, 0, this._initialRender, this.props.isRTL);
      } else {
        mainStyle = {
          top: verticalTop,
          height: size
        };

        if (this.props.isRTL) {
          mainStyle.left = mainStyle.right || 0;
          mainStyle.right = 'auto';
        }

        faceStyle = {
          height: faceSize - FACE_MARGIN_2
        };
        (0, _FixedDataTableTranslateDOMPosition["default"])(faceStyle, 0, position, this._initialRender, this.props.isRTL);
        faceStyle.left = 0;
        faceStyle.right = 0;
      }

      mainStyle.touchAction = 'none';
      mainStyle.zIndex = this.props.zIndex;

      if (this.props.trackColor === 'gray') {
        mainStyle.backgroundColor = cssVar('fbui-desktop-background-light');
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        onFocus: this._onFocus,
        onBlur: this._onBlur,
        onKeyDown: this._onKeyDown,
        onMouseDown: this._onMouseDown,
        onTouchCancel: this._onTouchCancel,
        onTouchEnd: this._onTouchEnd,
        onTouchMove: this._onTouchMove,
        onTouchStart: this._onTouchStart,
        className: mainClassName,
        style: mainStyle,
        ref: this._onRefRoot
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this._onRefFace,
        className: faceClassName,
        style: faceStyle
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var isHorizontal = this.props.orientation === 'horizontal';
      var onWheel = isHorizontal ? this._onWheelX : this._onWheelY;
      this._wheelHandler = new _ReactWheelHandler["default"](onWheel, this._shouldHandleX, // Should handle horizontal scroll
      this._shouldHandleY, // Should handle vertical scroll
      this.props.isRTL);
      this._rootRef && this._rootRef.addEventListener('wheel', this._wheelHandler.onWheel, {
        passive: false
      });
      this._mouseMoveTracker = new _DOMMouseMoveTracker["default"](this._onMouseMove, this._onMouseMoveEnd, document.documentElement, this.props.touchEnabled);

      if (this.props.position !== undefined && this.state.position !== this.props.position) {
        this._didScroll();
      }

      this._initialRender = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._rootRef && this._rootRef.removeEventListener('wheel', this._wheelHandler.onWheel, {
        passive: false
      });
      this._nextState = null;

      this._mouseMoveTracker.releaseMouseMoves();

      if (_lastScrolledScrollbar === this) {
        _lastScrolledScrollbar = null;
      }

      delete this._mouseMoveTracker;
    }
  }]);

  return Scrollbar;
}(_react["default"].PureComponent);

_defineProperty(Scrollbar, "propTypes", {
  contentSize: _propTypes["default"].number.isRequired,
  defaultPosition: _propTypes["default"].number,
  isOpaque: _propTypes["default"].bool,
  orientation: _propTypes["default"].oneOf(['vertical', 'horizontal']),
  onScroll: _propTypes["default"].func,
  position: _propTypes["default"].number,
  size: _propTypes["default"].number.isRequired,
  trackColor: _propTypes["default"].oneOf(['gray']),
  touchEnabled: _propTypes["default"].bool,
  zIndex: _propTypes["default"].number,
  verticalTop: _propTypes["default"].number,
  isRTL: _propTypes["default"].bool
});

_defineProperty(Scrollbar, "defaultProps",
/*object*/
{
  defaultPosition: 0,
  isOpaque: false,
  onScroll: _emptyFunction["default"],
  orientation: 'vertical',
  zIndex: 99
});

Scrollbar.KEYBOARD_SCROLL_AMOUNT = KEYBOARD_SCROLL_AMOUNT;
Scrollbar.SIZE = parseInt(cssVar('scrollbar-size'), 10);
Scrollbar.OFFSET = 1;
var _default = Scrollbar;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/UserAgent_DEPRECATED.js":
/*!**************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/UserAgent_DEPRECATED.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */
var _populated = false; // Browsers

var _ie, _firefox, _opera, _webkit, _chrome; // Actual IE browser for compatibility mode


var _ie_real_version; // Platforms


var _osx, _windows, _linux, _android; // Architectures


var _win64; // Devices


var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true; // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10

  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas); // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.

  _win64 = !!/Win64/.exec(uas);

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN; // IE compatibility mode

    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    } // grab the "true" ie version from the trident token if available


    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;

    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }

    _windows = !!os[2];
    _linux = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function ie() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function ieCompatibilityMode() {
    return _populate() || _ie_real_version > _ie;
  },

  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function ie64() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function firefox() {
    return _populate() || _firefox;
  },

  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function opera() {
    return _populate() || _opera;
  },

  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function webkit() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function safari() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function chrome() {
    return _populate() || _chrome;
  },

  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function windows() {
    return _populate() || _windows;
  },

  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function osx() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function linux() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function iphone() {
    return _populate() || _iphone;
  },
  mobile: function mobile() {
    return _populate() || _iphone || _ipad || _android || _mobile;
  },
  nativeApp: function nativeApp() {
    // webviews inside of the native apps
    return _populate() || _native;
  },
  android: function android() {
    return _populate() || _android;
  },
  ipad: function ipad() {
    return _populate() || _ipad;
  }
};
var _default = UserAgent_DEPRECATED;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/ariaAttributes.js":
/*!********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/ariaAttributes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _shallowEqualSelector = _interopRequireDefault(__webpack_require__(/*! ./shallowEqualSelector */ "./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ariaAttributes
 */

/**
 * Calculate the aria attributes for the rows and the grid.
 *
 * @param {number} rowsCount
 * @param {boolean} useGroupHeader
 * @param {boolean} useFooter
 * @return {{
 *   ariaGroupHeaderIndex: number,
 *   ariaHeaderIndex: number,
 *   ariaFooterIndex: number,
 *   ariaRowCount: number,
 *   ariaRowIndexOffset: number
 * }}
 */
function calculateAriaAttributes(rowsCount, useGroupHeader, useFooter) {
  // first we calculate the default attribute values (without assuming group header or footer exists)
  var ariaGroupHeaderIndex = 1;
  var ariaHeaderIndex = 1;
  var ariaFooterIndex = rowsCount + 2;
  var ariaRowCount = rowsCount + 1; // offset to add to aria-rowindex (note that aria-rowindex is 1-indexed based, and since
  // we also need to add 1 for the header, the base offset will be 2)

  var ariaRowIndexOffset = 2; // if group header exists, then increase the indices and offsets by 1

  if (useGroupHeader) {
    ariaHeaderIndex++;
    ariaRowCount++;
    ariaFooterIndex++;
    ariaRowIndexOffset++;
  } // if footer exists, then row count increases by 1


  if (useFooter) {
    ariaRowCount++;
  }

  return {
    ariaGroupHeaderIndex: ariaGroupHeaderIndex,
    ariaHeaderIndex: ariaHeaderIndex,
    ariaFooterIndex: ariaFooterIndex,
    ariaRowCount: ariaRowCount,
    ariaRowIndexOffset: ariaRowIndexOffset
  };
}

var _default = (0, _shallowEqualSelector["default"])([function (state) {
  return state.rowsCount;
}, function (state) {
  return state.groupHeaderHeight > 0;
}, function (state) {
  return state.footerHeight > 0;
}], calculateAriaAttributes);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/camelize.js":
/*!**************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/camelize.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelize
 * @typechecks
 */
var _hyphenPattern = /-(.)/g;
/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */

function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

var _default = camelize;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/cancelAnimationFramePolyfill.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/cancelAnimationFramePolyfill.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cancelAnimationFramePolyfill
 */

/**
 * Here is the native and polyfill version of cancelAnimationFrame.
 * Please don't use it directly and use cancelAnimationFrame module instead.
 */
var cancelAnimationFrame = __webpack_require__.g.cancelAnimationFrame || __webpack_require__.g.webkitCancelAnimationFrame || __webpack_require__.g.mozCancelAnimationFrame || __webpack_require__.g.oCancelAnimationFrame || __webpack_require__.g.msCancelAnimationFrame || __webpack_require__.g.clearTimeout;
var _default = cancelAnimationFrame;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/clamp.js":
/*!***********************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/clamp.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule clamp
 * @typechecks
 */

/**
 * Clamps (or clips or confines) the value to be between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

var _default = clamp;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/columnActions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/columnActions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * @providesModule columnActions
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resizeColumn = exports.moveColumnReorder = exports.stopColumnReorder = exports.startColumnReorder = void 0;

var _ActionTypes = __webpack_require__(/*! ././ActionTypes */ "./node_modules/fixed-data-table-2/internal/ActionTypes.js");

/**
 * Initiates column reordering
 *
 * @param {{scrollStart: number, columnKey: string, with: number, left: number}} reorderData
 */
var startColumnReorder = function startColumnReorder(reorderData) {
  return {
    type: _ActionTypes.COLUMN_REORDER_START,
    reorderData: reorderData
  };
};
/**
 * Stops column reordering
 */


exports.startColumnReorder = startColumnReorder;

var stopColumnReorder = function stopColumnReorder() {
  return {
    type: _ActionTypes.COLUMN_REORDER_END
  };
};
/**
 * Stops column reordering
 *
 * @param {number} deltaX
 */


exports.stopColumnReorder = stopColumnReorder;

var moveColumnReorder = function moveColumnReorder(deltaX) {
  return {
    type: _ActionTypes.COLUMN_REORDER_MOVE,
    deltaX: deltaX
  };
};
/**
 * Fires a resize on column
 *
 * @param {!Object} reorderData
 */


exports.moveColumnReorder = moveColumnReorder;

var resizeColumn = function resizeColumn(resizeData) {
  return {
    type: _ActionTypes.COLUMN_RESIZE,
    resizeData: resizeData
  };
};

exports.resizeColumn = resizeColumn;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/columnStateHelper.js":
/*!***********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/columnStateHelper.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule columnStateHelper
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _emptyFunction = _interopRequireDefault(__webpack_require__(/*! ./emptyFunction */ "./node_modules/fixed-data-table-2/internal/emptyFunction.js"));

var _isNil = _interopRequireDefault(__webpack_require__(/*! lodash/isNil */ "./node_modules/lodash/isNil.js"));

var _columnWidths5 = _interopRequireDefault(__webpack_require__(/*! ./columnWidths */ "./node_modules/fixed-data-table-2/internal/columnWidths.js"));

var _clamp = _interopRequireDefault(__webpack_require__(/*! lodash/clamp */ "./node_modules/lodash/clamp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DRAG_SCROLL_SPEED = 15;
var DRAG_SCROLL_BUFFER = 100;
/**
 * Initialize scrollX state
 * TODO (jordan) Audit this method for cases where deep values are not properly cloned
 *
 * @param {!Object} state
 * @param {!Object} props
 * @param {Object} oldProps
 * @return {!Object}
 */

function initialize(state, props, oldProps) {
  var scrollLeft = props.scrollLeft,
      scrollToColumn = props.scrollToColumn;
  var columnResizingData = state.columnResizingData,
      isColumnResizing = state.isColumnResizing,
      scrollX = state.scrollX;

  if (scrollLeft !== undefined && (!oldProps || scrollLeft !== oldProps.scrollLeft)) {
    scrollX = scrollLeft;
  }

  scrollX = scrollTo(state, props, oldProps.scrollToColumn, scrollX);

  var _columnWidths = (0, _columnWidths5["default"])(state),
      maxScrollX = _columnWidths.maxScrollX;

  scrollX = (0, _clamp["default"])(scrollX, 0, maxScrollX); // isColumnResizing should be overwritten by value from props if available

  isColumnResizing = props.isColumnResizing !== undefined ? props.isColumnResizing : isColumnResizing;
  columnResizingData = isColumnResizing ? columnResizingData : {};
  return _extends({}, state, {
    columnResizingData: columnResizingData,
    isColumnResizing: isColumnResizing,
    maxScrollX: maxScrollX,
    scrollX: scrollX
  });
}
/**
 * @param {!Object} state
 * @param {{
 *   scrollToColumn: number,
 *   width: number,
 * }} props
 * @param {number} oldScrollToColumn
 * @param {number} scrollX
 * @return {number} The new scrollX
 */


function scrollTo(state, props, oldScrollToColumn, scrollX) {
  var scrollToColumn = props.scrollToColumn;

  if ((0, _isNil["default"])(scrollToColumn)) {
    return scrollX;
  }

  var _columnWidths2 = (0, _columnWidths5["default"])(state),
      availableScrollWidth = _columnWidths2.availableScrollWidth,
      fixedColumns = _columnWidths2.fixedColumns,
      scrollableColumns = _columnWidths2.scrollableColumns;

  var fixedColumnsCount = fixedColumns.length;
  var scrollableColumnsCount = scrollableColumns.length;
  var noScrollableColumns = scrollableColumnsCount === 0;
  var scrollToUnchanged = scrollToColumn === oldScrollToColumn;
  var selectedColumnFixed = scrollToColumn < fixedColumnsCount;
  var selectedColumnFixedRight = scrollToColumn >= fixedColumnsCount + scrollableColumnsCount;

  if (scrollToUnchanged || selectedColumnFixed || selectedColumnFixedRight || noScrollableColumns) {
    return scrollX;
  } // Convert column index (0 indexed) to scrollable index (0 indexed)
  // and clamp to max scrollable index


  var clampedColumnIndex = Math.min(scrollToColumn - fixedColumnsCount, scrollableColumns.length - 1); // Compute the width of all columns to the left of the column

  var previousWidth = 0;

  for (var columnIdx = 0; columnIdx < clampedColumnIndex; ++columnIdx) {
    previousWidth += scrollableColumns[columnIdx].width;
  } // Get width of specified column


  var selectedColumnWidth = scrollableColumns[clampedColumnIndex].width; // Compute the scroll position which sets the column on the right of the viewport
  // Must scroll at least far enough for end of column (previousWidth + selectedColumnWidth)
  // to be in viewport.

  var minScrollPosition = previousWidth + selectedColumnWidth - availableScrollWidth; // Handle offscreen to the left
  // If scrolled less than minimum amount, scroll to minimum amount
  // so column on right of viewport

  if (scrollX < minScrollPosition) {
    return minScrollPosition;
  } // Handle offscreen to the right
  // If scrolled more than previous columns, at least part of column will be offscreen to left
  // Scroll so column is flush with left edge of viewport


  if (scrollX > previousWidth) {
    return previousWidth;
  }

  return scrollX;
}
/**
 * This is called when a cell that is in the header of a column has its
 * resizer knob clicked on. It displays the resizer and puts in the correct
 * location on the table.
 */


function resizeColumn(state, resizeData) {
  var cellMinWidth = resizeData.cellMinWidth,
      cellMaxWidth = resizeData.cellMaxWidth,
      cellWidth = resizeData.cellWidth,
      columnKey = resizeData.columnKey,
      combinedWidth = resizeData.combinedWidth,
      clientX = resizeData.clientX,
      clientY = resizeData.clientY,
      leftOffset = resizeData.leftOffset;
  return _extends({}, state, {
    isColumnResizing: true,
    columnResizingData: {
      left: leftOffset + combinedWidth - cellWidth,
      width: cellWidth,
      minWidth: cellMinWidth,
      maxWidth: cellMaxWidth,
      initialEvent: {
        clientX: clientX,
        clientY: clientY,
        preventDefault: _emptyFunction["default"]
      },
      key: columnKey
    }
  });
}

function reorderColumn(state, reorderData) {
  var columnKey = reorderData.columnKey,
      left = reorderData.left,
      scrollStart = reorderData.scrollStart,
      width = reorderData.width;

  var _columnWidths3 = (0, _columnWidths5["default"])(state),
      fixedColumns = _columnWidths3.fixedColumns;

  var isFixed = fixedColumns.some(function (column) {
    return column.columnKey === columnKey;
  });
  return _extends({}, state, {
    isColumnReordering: true,
    columnReorderingData: {
      cancelReorder: false,
      dragDistance: 0,
      isFixed: isFixed,
      scrollStart: scrollStart,
      columnKey: columnKey,
      columnWidth: width,
      originalLeft: left,
      columnBefore: undefined,
      columnAfter: undefined
    }
  });
}

function reorderColumnMove(state, deltaX) {
  var _state$columnReorderi = state.columnReorderingData,
      isFixed = _state$columnReorderi.isFixed,
      originalLeft = _state$columnReorderi.originalLeft,
      scrollStart = _state$columnReorderi.scrollStart;
  var maxScrollX = state.maxScrollX,
      scrollX = state.scrollX;

  if (!isFixed) {
    // Relative dragX position on scroll
    var dragX = originalLeft - scrollStart + deltaX;

    var _columnWidths4 = (0, _columnWidths5["default"])(state),
        availableScrollWidth = _columnWidths4.availableScrollWidth;

    deltaX += scrollX - scrollStart; // Scroll the table left or right if we drag near the edges of the table

    if (dragX > availableScrollWidth - DRAG_SCROLL_BUFFER) {
      scrollX = Math.min(scrollX + DRAG_SCROLL_SPEED, maxScrollX);
    } else if (dragX <= DRAG_SCROLL_BUFFER) {
      scrollX = Math.max(scrollX - DRAG_SCROLL_SPEED, 0);
    }
  } // NOTE (jordan) Need to clone this object when use pureRendering


  var reorderingData = _extends({}, state.columnReorderingData, {
    dragDistance: deltaX,
    columnBefore: undefined,
    columnAfter: undefined
  });

  return _extends({}, state, {
    scrollX: scrollX,
    columnReorderingData: reorderingData
  });
}

var _default = {
  initialize: initialize,
  reorderColumn: reorderColumn,
  reorderColumnMove: reorderColumnMove,
  resizeColumn: resizeColumn
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/columnTemplates.js":
/*!*********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/columnTemplates.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _columnWidths = _interopRequireDefault(__webpack_require__(/*! ./columnWidths */ "./node_modules/fixed-data-table-2/internal/columnWidths.js"));

var _forEach = _interopRequireDefault(__webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"));

var _shallowEqualSelector = _interopRequireDefault(__webpack_require__(/*! ./shallowEqualSelector */ "./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule columnTemplates
 */

/**
 * @typedef {{
 *   props: !Object,
 *   template: ReactElement,
 * }}
 */
var cellDetails;
/**
 * @typedef {{
 *   cell: !Array.<cellDetails>,
 *   footer: !Array.<cellDetails>,
 *   header: !Array.<cellDetails>,
 * }}
 */

var columnDetails;
/**
 * Lists of cell templates & component props for
 * the fixed and scrollable columns and column groups
 *
 * @param {{
 *   columnGroupProps: !Array.<!Object>,
 *   columnProps: !Array.<!Object>,
 * }} columnWidths
 * @param {{
 *   cell: !Array.<ReactElement>,
 *   footer: !Array.<ReactElement>,
 *   groupHeader !Array.<ReactElement>,
 *   header !Array.<ReactElement>,
 * }} elementTemplates
 * @return {{
 *   fixedColumnGroups: !Array.<cellDetails>,
 *   fixedRightColumnGroups: !Array.<cellDetails>,
 *   scrollableColumnGroups: !Array.<cellDetails>,
 *   fixedColumns: !Array.<columnDetails>,
 *   fixedRightColumns: !Array.<columnDetails>,
 *   scrollableColumns: !Array.<columnDetails>,
 * }}
 */

function columnTemplates(columnWidths, elementTemplates) {
  var columnGroupProps = columnWidths.columnGroupProps,
      columnProps = columnWidths.columnProps; // Ugly transforms to extract data into a row consumable format.
  // TODO (jordan) figure out if this can efficiently be merged with
  // the result of convertColumnElementsToData.

  var fixedColumnGroups = [];
  var fixedRightColumnGroups = [];
  var scrollableColumnGroups = [];
  (0, _forEach["default"])(columnGroupProps, function (columnGroup, index) {
    var groupData = {
      props: columnGroup,
      template: elementTemplates.groupHeader[index]
    };

    if (columnGroup.fixed) {
      fixedColumnGroups.push(groupData);
    } else if (columnGroup.fixedRight) {
      fixedRightColumnGroups.push(groupData);
    } else {
      scrollableColumnGroups.push(groupData);
    }
  });
  var fixedColumns = {
    cell: [],
    header: [],
    footer: []
  };
  var fixedRightColumns = {
    cell: [],
    header: [],
    footer: []
  };
  var scrollableColumns = {
    cell: [],
    header: [],
    footer: []
  };
  (0, _forEach["default"])(columnProps, function (column, index) {
    var columnContainer = scrollableColumns;

    if (column.fixed) {
      columnContainer = fixedColumns;
    } else if (column.fixedRight) {
      columnContainer = fixedRightColumns;
    }

    columnContainer.cell.push({
      props: column,
      template: elementTemplates.cell[index]
    });
    columnContainer.header.push({
      props: column,
      template: elementTemplates.header[index]
    });
    columnContainer.footer.push({
      props: column,
      template: elementTemplates.footer[index]
    });
  });
  return {
    fixedColumnGroups: fixedColumnGroups,
    fixedColumns: fixedColumns,
    fixedRightColumnGroups: fixedRightColumnGroups,
    fixedRightColumns: fixedRightColumns,
    scrollableColumnGroups: scrollableColumnGroups,
    scrollableColumns: scrollableColumns
  };
}

var _default = (0, _shallowEqualSelector["default"])([function (state) {
  return (0, _columnWidths["default"])(state);
}, function (state) {
  return state.elementTemplates;
}], columnTemplates);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/columnWidths.js":
/*!******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/columnWidths.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _widthHelper = __webpack_require__(/*! ./widthHelper */ "./node_modules/fixed-data-table-2/internal/widthHelper.js");

var _Scrollbar = _interopRequireDefault(__webpack_require__(/*! ./Scrollbar */ "./node_modules/fixed-data-table-2/internal/Scrollbar.js"));

var _forEach = _interopRequireDefault(__webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));

var _scrollbarsVisible = _interopRequireDefault(__webpack_require__(/*! ./scrollbarsVisible */ "./node_modules/fixed-data-table-2/internal/scrollbarsVisible.js"));

var _shallowEqualSelector = _interopRequireDefault(__webpack_require__(/*! ./shallowEqualSelector */ "./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @typedef {{
 *   fixed: boolean,
 *   fixedRight: boolean,
 *   flexGrow: number,
 *   width: number,
 * }}
 */
var columnDefinition;
/**
 * @param {!Array.<columnDefinition>} columnGroupProps
 * @param {!Array.<columnDefinition>} columnProps
 * @param {boolean} scrollEnabledY
 * @param {number} width
 * @return {{
 *   columnGroupProps: !Array.<columnDefinition>,
 *   columnProps: !Array.<columnDefinition>,
 *   availableScrollWidth: number,
 *   fixedColumns: !Array.<columnDefinition>,
 *   fixedRightColumns: !Array.<columnDefinition>,
 *   scrollableColumns: !Array.<columnDefinition>,
 *   maxScrollX: number,
 * }} The total width of all columns.
 */

function columnWidths(columnGroupProps, columnProps, scrollEnabledY, width, scrollbarYWidth) {
  var scrollbarSpace = scrollEnabledY ? scrollbarYWidth : 0;
  var viewportWidth = width - scrollbarSpace;

  var _flexWidths = flexWidths(columnGroupProps, columnProps, viewportWidth),
      newColumnGroupProps = _flexWidths.newColumnGroupProps,
      newColumnProps = _flexWidths.newColumnProps;

  var _groupColumns = groupColumns(newColumnProps),
      fixedColumns = _groupColumns.fixedColumns,
      fixedRightColumns = _groupColumns.fixedRightColumns,
      scrollableColumns = _groupColumns.scrollableColumns;

  var availableScrollWidth = viewportWidth - (0, _widthHelper.getTotalWidth)(fixedColumns) - (0, _widthHelper.getTotalWidth)(fixedRightColumns);
  var maxScrollX = Math.max(0, (0, _widthHelper.getTotalWidth)(newColumnProps) - viewportWidth);
  return {
    columnGroupProps: newColumnGroupProps,
    columnProps: newColumnProps,
    availableScrollWidth: availableScrollWidth,
    fixedColumns: fixedColumns,
    fixedRightColumns: fixedRightColumns,
    scrollableColumns: scrollableColumns,
    maxScrollX: maxScrollX
  };
}
/**
 * @param {!Array.<columnDefinition>} columnGroupProps
 * @param {!Array.<columnDefinition>} columnProps
 * @param {number} viewportWidth
 * @return {{
 *   newColumnGroupProps: !Array.<columnDefinition>,
 *   newColumnProps: !Array.<columnDefinition>
 * }}
 */


function flexWidths(columnGroupProps, columnProps, viewportWidth) {
  var newColumnProps = columnProps;
  var remainingFlexGrow = (0, _widthHelper.getTotalFlexGrow)(columnProps); // if any column is a flex column, we'll need to calculate the widths for every column

  if (remainingFlexGrow !== 0) {
    var columnsWidth = (0, _widthHelper.getTotalWidth)(columnProps);
    var remainingFlexWidth = Math.max(viewportWidth - columnsWidth, 0); // calculate and set width for each column

    newColumnProps = (0, _map["default"])(columnProps, function (column) {
      var flexGrow = column.flexGrow; // if no flexGrow is specified, column defaults to original width

      if (!flexGrow) {
        return column;
      }

      var flexWidth = Math.floor(flexGrow * remainingFlexWidth / remainingFlexGrow);
      var newWidth = column.width + flexWidth;
      remainingFlexGrow -= flexGrow;
      remainingFlexWidth -= flexWidth;
      return _extends({}, column, {
        width: newWidth
      });
    });
  } // calculate width for each column group


  var columnGroupWidths = (0, _map["default"])(columnGroupProps, function () {
    return 0;
  });
  (0, _forEach["default"])(newColumnProps, function (column) {
    if (column.groupIdx !== undefined) {
      columnGroupWidths[column.groupIdx] += column.width;
    }
  }); // set the width for each column group

  var newColumnGroupProps = (0, _map["default"])(columnGroupProps, function (columnGroup, idx) {
    if (columnGroupWidths[idx] === columnGroup.width) {
      return columnGroup;
    }

    return _extends({}, columnGroup, {
      width: columnGroupWidths[idx]
    });
  });
  return {
    newColumnGroupProps: newColumnGroupProps,
    newColumnProps: newColumnProps
  };
}
/**
 * @param {!Array.<columnDefinition>} columnProps
 * @return {{
 *   fixedColumns: !Array.<columnDefinition>,
 *   fixedRightColumns: !Array.<columnDefinition>,
 *   scrollableColumns: !Array.<columnDefinition>
 * }}
 */


function groupColumns(columnProps) {
  var fixedColumns = [];
  var fixedRightColumns = [];
  var scrollableColumns = [];
  (0, _forEach["default"])(columnProps, function (columnProp) {
    var container = scrollableColumns;

    if (columnProp.fixed) {
      container = fixedColumns;
    } else if (columnProp.fixedRight) {
      container = fixedRightColumns;
    }

    container.push(columnProp);
  });
  return {
    fixedColumns: fixedColumns,
    fixedRightColumns: fixedRightColumns,
    scrollableColumns: scrollableColumns
  };
}

var _default = (0, _shallowEqualSelector["default"])([function (state) {
  return state.columnGroupProps;
}, function (state) {
  return state.columnProps;
}, function (state) {
  return (0, _scrollbarsVisible["default"])(state).scrollEnabledY;
}, function (state) {
  return state.tableSize.width;
}, function (state) {
  return state.scrollbarYWidth;
}], columnWidths);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/computeRenderedRows.js":
/*!*************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/computeRenderedRows.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule computeRenderedRows
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = computeRenderedRows;

var _clamp = _interopRequireDefault(__webpack_require__(/*! lodash/clamp */ "./node_modules/lodash/clamp.js"));

var _updateRowHeight = _interopRequireDefault(__webpack_require__(/*! ./updateRowHeight */ "./node_modules/fixed-data-table-2/internal/updateRowHeight.js"));

var _roughHeights = _interopRequireDefault(__webpack_require__(/*! ./roughHeights */ "./node_modules/fixed-data-table-2/internal/roughHeights.js"));

var _scrollbarsVisible = _interopRequireDefault(__webpack_require__(/*! ./scrollbarsVisible */ "./node_modules/fixed-data-table-2/internal/scrollbarsVisible.js"));

var _tableHeights = _interopRequireDefault(__webpack_require__(/*! ./tableHeights */ "./node_modules/fixed-data-table-2/internal/tableHeights.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Returns data about the rows to render
 * rows is a map of rowIndexes to render to their heights
 * firstRowIndex & firstRowOffset are calculated based on the lastIndex if
 * specified in scrollAnchor.
 * Otherwise, they are unchanged from the firstIndex & firstOffset scrollAnchor values.
 *
 * @param {!Object} state
 * @param {{
 *   firstIndex: number,
 *   firstOffset: number,
 *   lastIndex: number,
 * }} scrollAnchor
 * @return {!Object} The updated state object
 */
function computeRenderedRows(state, scrollAnchor) {
  var newState = _extends({}, state);

  var rowRange = calculateRenderedRowRange(newState, scrollAnchor);
  var rowSettings = newState.rowSettings,
      scrollContentHeight = newState.scrollContentHeight;
  var rowsCount = rowSettings.rowsCount;

  var _tableHeightsSelector = (0, _tableHeights["default"])(newState),
      bodyHeight = _tableHeightsSelector.bodyHeight;

  var maxScrollY = scrollContentHeight - bodyHeight;
  var firstRowOffset; // NOTE (jordan) This handles #115 where resizing the viewport may
  // leave only a subset of rows shown, but no scrollbar to scroll up to the first rows.

  if (maxScrollY === 0) {
    if (rowRange.firstViewportIdx > 0) {
      rowRange = calculateRenderedRowRange(newState, {
        firstOffset: 0,
        lastIndex: rowsCount - 1
      });
    }

    firstRowOffset = 0;
  } else {
    firstRowOffset = rowRange.firstOffset;
  }

  var firstRowIndex = rowRange.firstViewportIdx;
  var endRowIndex = rowRange.endViewportIdx;
  computeRenderedRowOffsets(newState, rowRange, state.scrolling);
  var scrollY = 0;

  if (rowsCount > 0) {
    scrollY = newState.rowOffsets[rowRange.firstViewportIdx] - firstRowOffset;
  }

  scrollY = (0, _clamp["default"])(scrollY, 0, maxScrollY);
  return _extends(newState, {
    firstRowIndex: firstRowIndex,
    firstRowOffset: firstRowOffset,
    endRowIndex: endRowIndex,
    maxScrollY: maxScrollY,
    scrollY: scrollY
  });
}
/**
 * Determine the range of rows to render (buffer and viewport)
 * The leading and trailing buffer is based on a fixed count,
 * while the viewport rows are based on their height and the viewport height
 * We use the scrollAnchor to determine what either the first or last row
 * will be, as well as the offset.
 *
 * NOTE (jordan) This alters state so it shouldn't be called
 * without state having been cloned first.
 *
 * @param {!Object} state
 * @param {{
 *   firstIndex: number,
 *   firstOffset: number,
 *   lastIndex: number,
 * }} scrollAnchor
 * @return {{
 *   endBufferIdx: number,
 *   endViewportIdx: number,
 *   firstBufferIdx: number,
 *   firstOffset: number,
 *   firstViewportIdx: number,
 * }}
 * @private
 */


function calculateRenderedRowRange(state, scrollAnchor) {
  var _roughHeightsSelector = (0, _roughHeights["default"])(state),
      bufferRowCount = _roughHeightsSelector.bufferRowCount,
      maxAvailableHeight = _roughHeightsSelector.maxAvailableHeight;

  var rowsCount = state.rowSettings.rowsCount;

  if (rowsCount === 0) {
    return {
      endBufferIdx: 0,
      endViewportIdx: 0,
      firstBufferIdx: 0,
      firstOffset: 0,
      firstViewportIdx: 0
    };
  } // If our first or last index is greater than our rowsCount,
  // treat it as if the last row is at the bottom of the viewport


  var firstIndex = scrollAnchor.firstIndex,
      firstOffset = scrollAnchor.firstOffset,
      lastIndex = scrollAnchor.lastIndex;

  if (firstIndex >= rowsCount || lastIndex >= rowsCount) {
    lastIndex = rowsCount - 1;
  } // Walk the viewport until filled with rows
  // If lastIndex is set, walk backward so that row is the last in the viewport


  var step = 1;
  var startIdx = firstIndex;
  var totalHeight = firstOffset;

  if (lastIndex !== undefined) {
    step = -1;
    startIdx = lastIndex;
    totalHeight = 0;
  } // Loop to walk the viewport until we've touched enough rows to fill its height


  var rowIdx = startIdx;
  var endIdx = rowIdx;

  while (rowIdx < rowsCount && rowIdx >= 0 && totalHeight < maxAvailableHeight) {
    totalHeight += (0, _updateRowHeight["default"])(state, rowIdx);
    endIdx = rowIdx;
    rowIdx += step;
  }
  /* Handle the case where rows have shrunk and there's not enough content
     between the start scroll anchor and the end of the table to fill the available space.
     In this case process earlier rows as needed and act as if we've scrolled to the last row.
   */


  var forceScrollToLastRow = false;

  if (totalHeight < maxAvailableHeight && rowIdx === rowsCount && lastIndex === undefined) {
    forceScrollToLastRow = true;
    rowIdx = firstIndex - 1;

    while (rowIdx >= 0 && totalHeight < maxAvailableHeight) {
      totalHeight += (0, _updateRowHeight["default"])(state, rowIdx);
      startIdx = rowIdx;
      --rowIdx;
    }
  } // Loop to walk the leading buffer


  var firstViewportIdx = Math.min(startIdx, endIdx);
  var firstBufferIdx = Math.max(firstViewportIdx - bufferRowCount, 0);

  for (rowIdx = firstBufferIdx; rowIdx < firstViewportIdx; rowIdx++) {
    (0, _updateRowHeight["default"])(state, rowIdx);
  } // Loop to walk the trailing buffer


  var endViewportIdx = Math.max(startIdx, endIdx) + 1;
  var endBufferIdx = Math.min(endViewportIdx + bufferRowCount, rowsCount);

  for (rowIdx = endViewportIdx; rowIdx < endBufferIdx; rowIdx++) {
    (0, _updateRowHeight["default"])(state, rowIdx);
  }

  var _scrollbarsVisibleSel = (0, _scrollbarsVisible["default"])(state),
      availableHeight = _scrollbarsVisibleSel.availableHeight;

  if (lastIndex !== undefined || forceScrollToLastRow) {
    // Calculate offset needed to position last row at bottom of viewport
    // This should be negative and represent how far the first row needs to be offscreen
    // NOTE (jordan): The first offset should always be 0 when lastIndex is defined
    // since we don't currently support scrolling the last row into view with an offset.
    firstOffset = firstOffset + Math.min(availableHeight - totalHeight, 0); // Handle a case where the offset puts the first row fully offscreen
    // This can happen if availableHeight & maxAvailableHeight are different

    var storedHeights = state.storedHeights;

    if (-1 * firstOffset >= storedHeights[firstViewportIdx]) {
      firstViewportIdx += 1;
      firstOffset += storedHeights[firstViewportIdx];
    }
  }

  return {
    endBufferIdx: endBufferIdx,
    endViewportIdx: endViewportIdx,
    firstBufferIdx: firstBufferIdx,
    firstOffset: firstOffset,
    firstViewportIdx: firstViewportIdx
  };
}
/**
 * Walk the rows to render and compute the height offsets and
 * positions in the row buffer.
 *
 * NOTE (jordan) This alters state so it shouldn't be called
 * without state having been cloned first.
 *
 * @param {!Object} state
 * @param {{
 *   endBufferIdx: number,
 *   endViewportIdx: number,
 *   firstBufferIdx: number,
 *   firstViewportIdx: number,
 * }} rowRange
 * @param {boolean} viewportOnly
 * @private
 */


function computeRenderedRowOffsets(state, rowRange, viewportOnly) {
  var rowBufferSet = state.rowBufferSet,
      rowOffsetIntervalTree = state.rowOffsetIntervalTree,
      storedHeights = state.storedHeights;
  var endBufferIdx = rowRange.endBufferIdx,
      endViewportIdx = rowRange.endViewportIdx,
      firstBufferIdx = rowRange.firstBufferIdx,
      firstViewportIdx = rowRange.firstViewportIdx;
  var renderedRowsCount = endBufferIdx - firstBufferIdx;

  if (renderedRowsCount === 0) {
    state.rowOffsets = {};
    state.rows = [];
    return;
  }

  var startIdx = viewportOnly ? firstViewportIdx : firstBufferIdx;
  var endIdx = viewportOnly ? endViewportIdx : endBufferIdx; // output for this function

  var rows = []; // state.rows

  var rowOffsets = {}; // state.rowOffsets
  // incremental way for calculating rowOffset

  var runningOffset = rowOffsetIntervalTree.sumUntil(startIdx); // compute row index and offsets for every rows inside the buffer

  for (var rowIdx = startIdx; rowIdx < endIdx; rowIdx++) {
    // Update the offset for rendering the row
    rowOffsets[rowIdx] = runningOffset;
    runningOffset += storedHeights[rowIdx]; // Get position for the viewport row

    var rowPosition = addRowToBuffer(rowIdx, rowBufferSet, startIdx, endIdx, renderedRowsCount);
    rows[rowPosition] = rowIdx;
  } // now we modify the state with the newly calculated rows and offsets


  state.rows = rows;
  state.rowOffsets = rowOffsets;
}
/**
 * Add the row to the buffer set if it doesn't exist.
 * If addition isn't possible due to max buffer size, it'll replace an existing element outside the given range.
 *
 * @param {!number} rowIdx
 * @param {!number} rowBufferSet
 * @param {!number} startRange
 * @param {!number} endRange
 * @param {!number} maxBufferSize
 *
 * @return {?number} the position of the row after being added to the buffer set
 * @private
 */


function addRowToBuffer(rowIdx, rowBufferSet, startRange, endRange, maxBufferSize) {
  // Check if row already has a position in the buffer
  var rowPosition = rowBufferSet.getValuePosition(rowIdx); // Request a position in the buffer through eviction of another row

  if (rowPosition === null && rowBufferSet.getSize() >= maxBufferSize) {
    rowPosition = rowBufferSet.replaceFurthestValuePosition(startRange, endRange - 1, // replaceFurthestValuePosition uses closed interval from startRange to endRange
    rowIdx);
  }

  if (rowPosition === null) {
    rowPosition = rowBufferSet.getNewPositionForValue(rowIdx);
  }

  return rowPosition;
}

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/convertColumnElementsToData.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/convertColumnElementsToData.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule convertColumnElementsToData
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _forEach = _interopRequireDefault(__webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! ./invariant */ "./node_modules/fixed-data-table-2/internal/invariant.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extractProps(column) {
  return (0, _pick["default"])(column.props, ['align', 'allowCellsRecycling', 'cellClassName', 'columnKey', 'flexGrow', 'fixed', 'fixedRight', 'maxWidth', 'minWidth', 'isReorderable', 'isResizable', 'pureRendering', 'width']);
}

;

function _extractTemplates(elementTemplates, columnElement) {
  elementTemplates.cell.push(columnElement.props.cell);
  elementTemplates.footer.push(columnElement.props.footer);
  elementTemplates.header.push(columnElement.props.header);
}

;
/**
 * Converts React column / column group elements into props and cell rendering templates
 */

function convertColumnElementsToData(childComponents) {
  var children = [];

  _react["default"].Children.forEach(childComponents, function (child, index) {
    if (child == null) {
      return;
    }

    (0, _invariant["default"])(child.type.__TableColumnGroup__ || child.type.__TableColumn__, 'child type should be <FixedDataTableColumn /> or <FixedDataTableColumnGroup />');
    children.push(child);
  });

  var elementTemplates = {
    cell: [],
    footer: [],
    groupHeader: [],
    header: []
  };
  var columnProps = [];
  var hasGroupHeader = children.length && children[0].type.__TableColumnGroup__;

  if (hasGroupHeader) {
    var columnGroupProps = (0, _map["default"])(children, _extractProps);
    (0, _forEach["default"])(children, function (columnGroupElement, index) {
      elementTemplates.groupHeader.push(columnGroupElement.props.header);

      _react["default"].Children.forEach(columnGroupElement.props.children, function (child) {
        var column = _extractProps(child);

        column.groupIdx = index;
        columnProps.push(column);

        _extractTemplates(elementTemplates, child);
      });
    });
    return {
      columnGroupProps: columnGroupProps,
      columnProps: columnProps,
      elementTemplates: elementTemplates,
      useGroupHeader: true
    };
  } // Use a default column group


  (0, _forEach["default"])(children, function (child) {
    columnProps.push(_extractProps(child));

    _extractTemplates(elementTemplates, child);
  });
  return {
    columnGroupProps: [],
    columnProps: columnProps,
    elementTemplates: elementTemplates,
    useGroupHeader: false
  };
}

;
var _default = convertColumnElementsToData;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/cssVar.js":
/*!************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/cssVar.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cssVar
 * @typechecks
 */
 // If you change these, you'll need to restart the dev server for it to take effect.

var CSS_VARS = {
  'scrollbar-face-active-color': '#7d7d7d',
  'scrollbar-face-color': '#c2c2c2',
  'scrollbar-face-margin': '4px',
  'scrollbar-face-radius': '6px',
  'scrollbar-size': '15px',
  'scrollbar-size-large': '17px',
  'scrollbar-track-color': '#fff',
  'border-color': '#d3d3d3',
  'fbui-white': '#fff',
  'fbui-desktop-background-light': '#f6f7f8'
};
/**
 * @param {string} name
 */

function cssVar(name) {
  if (CSS_VARS.hasOwnProperty(name)) {
    return CSS_VARS[name];
  }

  throw new Error('cssVar' + '("' + name + '"): Unexpected class transformation.');
}

cssVar.CSS_VARS = CSS_VARS;
module.exports = cssVar;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/cx.js":
/*!********************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/cx.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cx
 */
var slashReplaceRegex = /\//g;
var cache = {};

function getClassName(className) {
  if (cache[className]) {
    return cache[className];
  }

  cache[className] = className.replace(slashReplaceRegex, '_');
  return cache[className];
}
/**
 * This function is used to mark string literals representing CSS class names
 * so that they can be transformed statically. This allows for modularization
 * and minification of CSS class names.
 *
 * In static_upstream, this function is actually implemented, but it should
 * eventually be replaced with something more descriptive, and the transform
 * that is used in the main stack should be ported for use elsewhere.
 *
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param [string ...]  Variable list of classNames in the string case.
 * @return string       Renderable space-separated CSS className.
 */


function cx(classNames) {
  var classNamesArray;

  if (_typeof(classNames) == 'object') {
    classNamesArray = Object.keys(classNames).filter(function (className) {
      return classNames[className];
    });
  } else {
    classNamesArray = Array.prototype.slice.call(arguments);
  }

  return classNamesArray.map(getClassName).join(' ');
}

var _default = cx;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/debounceCore.js":
/*!******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/debounceCore.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule debounceCore
 * @typechecks
 */

/**
 * Invokes the given callback after a specified number of milliseconds have
 * elapsed, ignoring subsequent calls.
 *
 * For example, if you wanted to update a preview after the user stops typing
 * you could do the following:
 *
 *   elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
 *
 * The returned function has a reset method which can be called to cancel a
 * pending invocation.
 *
 *   var debouncedUpdatePreview = debounce(this.updatePreview, 250);
 *   elem.addEventListener('keyup', debouncedUpdatePreview, false);
 *
 *   // later, to cancel pending calls
 *   debouncedUpdatePreview.reset();
 *
 * @param {function} func - the function to debounce
 * @param {number} wait - how long to wait in milliseconds
 * @param {*} context - optional context to invoke the function in
 * @param {?function} setTimeoutFunc - an implementation of setTimeout
 *  if nothing is passed in the default setTimeout function is used
  * @param {?function} clearTimeoutFunc - an implementation of clearTimeout
 *  if nothing is passed in the default clearTimeout function is used
 */
function debounce(func, wait, context, setTimeoutFunc, clearTimeoutFunc) {
  setTimeoutFunc = setTimeoutFunc || setTimeout;
  clearTimeoutFunc = clearTimeoutFunc || clearTimeout;
  var timeout;

  function debouncer() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    debouncer.reset();

    var callback = function callback() {
      func.apply(context, args);
    };

    callback.__SMmeta = func.__SMmeta;
    timeout = setTimeoutFunc(callback, wait);
  }

  debouncer.reset = function () {
    clearTimeoutFunc(timeout);
  };

  return debouncer;
}

var _default = debounce;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/emptyFunction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/emptyFunction.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var _default = emptyFunction;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/getVendorPrefixedName.js":
/*!***************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/getVendorPrefixedName.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _ExecutionEnvironment = _interopRequireDefault(__webpack_require__(/*! ./ExecutionEnvironment */ "./node_modules/fixed-data-table-2/internal/ExecutionEnvironment.js"));

var _camelize = _interopRequireDefault(__webpack_require__(/*! ./camelize */ "./node_modules/fixed-data-table-2/internal/camelize.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! ./invariant */ "./node_modules/fixed-data-table-2/internal/invariant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getVendorPrefixedName
 * @typechecks
 */
var memoized = {};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
var prefixRegex = new RegExp('^(' + prefixes.join('|') + ')');
var testStyle = _ExecutionEnvironment["default"].canUseDOM ? document.createElement('div').style : {};

function getWithPrefix(name) {
  for (var i = 0; i < prefixes.length; i++) {
    var prefixedName = prefixes[i] + name;

    if (prefixedName in testStyle) {
      return prefixedName;
    }
  }

  return null;
}
/**
 * @param {string} property Name of a css property to check for.
 * @return {?string} property name supported in the browser, or null if not
 * supported.
 */


function getVendorPrefixedName(property) {
  var name = (0, _camelize["default"])(property);

  if (memoized[name] === undefined) {
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    if (prefixRegex.test(capitalizedName)) {
      (0, _invariant["default"])(false, 'getVendorPrefixedName must only be called with unprefixed' + 'CSS property names. It was called with %s', property);
    }

    memoized[name] = name in testStyle ? name : getWithPrefix(capitalizedName);
  }

  return memoized[name];
}

var _default = getVendorPrefixedName;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/invariant.js":
/*!***************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/invariant.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

var _default = invariant;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/isEventSupported.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/isEventSupported.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _ExecutionEnvironment = _interopRequireDefault(__webpack_require__(/*! ./ExecutionEnvironment */ "./node_modules/fixed-data-table-2/internal/ExecutionEnvironment.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useHasFeature;

if (_ExecutionEnvironment["default"].canUseDOM) {
  useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;
}
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */


function isEventSupported(eventNameSuffix, capture) {
  if (!_ExecutionEnvironment["default"].canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var _default = isEventSupported;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/joinClasses.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/joinClasses.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule joinClasses
 * @typechecks static-only
 */

/**
 * Combines multiple className strings into one.
 * http://jsperf.com/joinclasses-args-vs-array
 *
 * @param {...?string} className
 * @return {string}
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function joinClasses(className
/*, ... */
) {
  if (!className) {
    className = '';
  }

  var nextClass;
  var argLength = arguments.length;

  if (argLength > 1) {
    for (var ii = 1; ii < argLength; ii++) {
      nextClass = arguments[ii];

      if (nextClass) {
        className = (className ? className + ' ' : '') + nextClass;
      }
    }
  }

  return className;
}

var _default = joinClasses;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/nativeRequestAnimationFrame.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/nativeRequestAnimationFrame.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule nativeRequestAnimationFrame
 */
var nativeRequestAnimationFrame = __webpack_require__.g.requestAnimationFrame || __webpack_require__.g.webkitRequestAnimationFrame || __webpack_require__.g.mozRequestAnimationFrame || __webpack_require__.g.oRequestAnimationFrame || __webpack_require__.g.msRequestAnimationFrame;
var _default = nativeRequestAnimationFrame;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/normalizeWheel.js":
/*!********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/normalizeWheel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _UserAgent_DEPRECATED = _interopRequireDefault(__webpack_require__(/*! ./UserAgent_DEPRECATED */ "./node_modules/fixed-data-table-2/internal/UserAgent_DEPRECATED.js"));

var _isEventSupported = _interopRequireDefault(__webpack_require__(/*! ./isEventSupported */ "./node_modules/fixed-data-table-2/internal/isEventSupported.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Reasonable defaults
var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */

function normalizeWheel(
/*object*/
event)
/*object*/
{
  var sX = 0,
      sY = 0,
      // spinX, spinY
  pX = 0,
      pY = 0; // pixelX, pixelY
  // Legacy

  if ('detail' in event) {
    sY = event.detail;
  }

  if ('wheelDelta' in event) {
    sY = -event.wheelDelta / 120;
  }

  if ('wheelDeltaY' in event) {
    sY = -event.wheelDeltaY / 120;
  }

  if ('wheelDeltaX' in event) {
    sX = -event.wheelDeltaX / 120;
  } // side scrolling on FF with DOMMouseScroll


  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) {
    pY = event.deltaY;
  }

  if ('deltaX' in event) {
    pX = event.deltaX;
  }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {
      // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  } // Fall-back if spin cannot be determined


  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1;
  }

  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1;
  }

  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  };
}
/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */


normalizeWheel.getEventType = function ()
/*string*/
{
  return _UserAgent_DEPRECATED["default"].firefox() ? 'DOMMouseScroll' : (0, _isEventSupported["default"])('wheel') ? 'wheel' : 'mousewheel';
};

var _default = normalizeWheel;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/reducers.js":
/*!**************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/reducers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule reducers
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _scrollAnchor3 = __webpack_require__(/*! ./scrollAnchor */ "./node_modules/fixed-data-table-2/internal/scrollAnchor.js");

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! ./ActionTypes */ "./node_modules/fixed-data-table-2/internal/ActionTypes.js"));

var _IntegerBufferSet = _interopRequireDefault(__webpack_require__(/*! ./IntegerBufferSet */ "./node_modules/fixed-data-table-2/internal/IntegerBufferSet.js"));

var _PrefixIntervalTree = _interopRequireDefault(__webpack_require__(/*! ./PrefixIntervalTree */ "./node_modules/fixed-data-table-2/internal/PrefixIntervalTree.js"));

var _columnStateHelper = _interopRequireDefault(__webpack_require__(/*! ./columnStateHelper */ "./node_modules/fixed-data-table-2/internal/columnStateHelper.js"));

var _computeRenderedRows = _interopRequireDefault(__webpack_require__(/*! ./computeRenderedRows */ "./node_modules/fixed-data-table-2/internal/computeRenderedRows.js"));

var _convertColumnElementsToData = _interopRequireDefault(__webpack_require__(/*! ./convertColumnElementsToData */ "./node_modules/fixed-data-table-2/internal/convertColumnElementsToData.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./shallowEqual */ "./node_modules/fixed-data-table-2/internal/shallowEqual.js"));

var _Scrollbar = _interopRequireDefault(__webpack_require__(/*! ./Scrollbar */ "./node_modules/fixed-data-table-2/internal/Scrollbar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Returns the default initial state for the redux store.
 * This must be a brand new, independent object for each table instance
 * or issues may occur due to multiple tables sharing data.
 *
 * @return {!Object}
 */
function getInitialState() {
  return {
    /*
     * Input state set from props
     */
    columnProps: [],
    columnGroupProps: [],
    elementTemplates: {
      cell: [],
      footer: [],
      groupHeader: [],
      header: []
    },
    elementHeights: {
      footerHeight: 0,
      groupHeaderHeight: 0,
      headerHeight: 0
    },
    rowSettings: {
      bufferRowCount: undefined,
      rowAttributesGetter: undefined,
      rowHeight: 0,
      rowHeightGetter: function rowHeightGetter() {
        return 0;
      },
      rowsCount: 0,
      subRowHeight: 0,
      subRowHeightGetter: function subRowHeightGetter() {
        return 0;
      }
    },
    scrollFlags: {
      overflowX: 'auto',
      overflowY: 'auto',
      showScrollbarX: true,
      showScrollbarY: true
    },
    tableSize: {
      height: undefined,
      maxHeight: 0,
      ownerHeight: undefined,
      useMaxHeight: false,
      width: 0
    },

    /*
     * Output state passed as props to the the rendered FixedDataTable
     * NOTE (jordan) rows may contain undefineds if we don't need all the buffer positions
     */
    columnReorderingData: {},
    columnResizingData: {},
    firstRowIndex: 0,
    firstRowOffset: 0,
    isColumnReordering: false,
    isColumnResizing: false,
    maxScrollX: 0,
    maxScrollY: 0,
    rowOffsets: {},
    rows: [],
    // rowsToRender
    scrollContentHeight: 0,
    scrollX: 0,
    scrollbarXHeight: _Scrollbar["default"].SIZE,
    scrollY: 0,
    scrollbarYWidth: _Scrollbar["default"].SIZE,
    scrolling: false,

    /*
     * Internal state only used by this file
     * NOTE (jordan) internal state is altered in place
     * so don't trust it for redux history or immutability checks
     * TODO (jordan) investigate if we want to move this to local or scoped state
     */
    rowBufferSet: new _IntegerBufferSet["default"](),
    storedHeights: [],
    rowOffsetIntervalTree: null // PrefixIntervalTree

  };
}

function reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getInitialState();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes.INITIALIZE:
      {
        var props = action.props;
        var newState = setStateFromProps(state, props);
        newState = initializeRowHeightsAndOffsets(newState);
        var scrollAnchor = (0, _scrollAnchor3.getScrollAnchor)(newState, props);
        newState = (0, _computeRenderedRows["default"])(newState, scrollAnchor);
        return _columnStateHelper["default"].initialize(newState, props, {});
      }

    case ActionTypes.PROP_CHANGE:
      {
        var newProps = action.newProps,
            oldProps = action.oldProps;

        var _newState = setStateFromProps(state, newProps);

        if (oldProps.rowsCount !== newProps.rowsCount || oldProps.rowHeight !== newProps.rowHeight || oldProps.subRowHeight !== newProps.subRowHeight) {
          _newState = initializeRowHeightsAndOffsets(_newState);
        }

        if (oldProps.rowsCount !== newProps.rowsCount) {
          // NOTE (jordan) bad practice to modify state directly, but okay since
          // we know setStateFromProps clones state internally
          _newState.rowBufferSet = new _IntegerBufferSet["default"]();
        }

        var _scrollAnchor = (0, _scrollAnchor3.getScrollAnchor)(_newState, newProps, oldProps); // If anything has changed in state, update our rendered rows


        if (!(0, _shallowEqual["default"])(state, _newState) || _scrollAnchor.changed) {
          _newState = (0, _computeRenderedRows["default"])(_newState, _scrollAnchor);
        }

        _newState = _columnStateHelper["default"].initialize(_newState, newProps, oldProps); // if scroll values have changed, then we're scrolling!

        if (_newState.scrollX !== state.scrollX || _newState.scrollY !== state.scrollY) {
          _newState.scrolling = _newState.scrolling || true;
        } // TODO REDUX_MIGRATION solve w/ evil-diff
        // TODO (jordan) check if relevant props unchanged and
        // children column widths and flex widths are unchanged
        // alternatively shallow diff and reconcile props


        return _newState;
      }

    case ActionTypes.SCROLL_END:
      {
        var _newState2 = _extends({}, state, {
          scrolling: false
        });

        var previousScrollAnchor = {
          firstIndex: state.firstRowIndex,
          firstOffset: state.firstRowOffset,
          lastIndex: state.lastIndex
        };
        return (0, _computeRenderedRows["default"])(_newState2, previousScrollAnchor);
      }

    case ActionTypes.SCROLL_TO_Y:
      {
        var scrollY = action.scrollY;

        var _newState3 = _extends({}, state, {
          scrolling: true
        });

        var _scrollAnchor2 = (0, _scrollAnchor3.scrollTo)(_newState3, scrollY);

        return (0, _computeRenderedRows["default"])(_newState3, _scrollAnchor2);
      }

    case ActionTypes.COLUMN_RESIZE:
      {
        var resizeData = action.resizeData;
        return _columnStateHelper["default"].resizeColumn(state, resizeData);
      }

    case ActionTypes.COLUMN_REORDER_START:
      {
        var reorderData = action.reorderData;
        return _columnStateHelper["default"].reorderColumn(state, reorderData);
      }

    case ActionTypes.COLUMN_REORDER_END:
      {
        return _extends({}, state, {
          isColumnReordering: false,
          columnReorderingData: {}
        });
      }

    case ActionTypes.COLUMN_REORDER_MOVE:
      {
        var deltaX = action.deltaX;
        return _columnStateHelper["default"].reorderColumnMove(state, deltaX);
      }

    case ActionTypes.SCROLL_TO_X:
      {
        var scrollX = action.scrollX;
        return _extends({}, state, {
          scrolling: true,
          scrollX: scrollX
        });
      }

    default:
      {
        return state;
      }
  }
}
/**
 * Initialize row heights (storedHeights) & offsets based on the default rowHeight
 *
 * @param {!Object} state
 * @private
 */


function initializeRowHeightsAndOffsets(state) {
  var _state$rowSettings = state.rowSettings,
      rowHeight = _state$rowSettings.rowHeight,
      rowsCount = _state$rowSettings.rowsCount,
      subRowHeight = _state$rowSettings.subRowHeight;
  var defaultFullRowHeight = rowHeight + subRowHeight;

  var rowOffsetIntervalTree = _PrefixIntervalTree["default"].uniform(rowsCount, defaultFullRowHeight);

  var scrollContentHeight = rowsCount * defaultFullRowHeight;
  var storedHeights = new Array(rowsCount);

  for (var idx = 0; idx < rowsCount; idx++) {
    storedHeights[idx] = defaultFullRowHeight;
  }

  return _extends({}, state, {
    rowOffsetIntervalTree: rowOffsetIntervalTree,
    scrollContentHeight: scrollContentHeight,
    storedHeights: storedHeights
  });
}
/**
 * @param {!Object} state
 * @param {!Object} props
 * @return {!Object}
 * @private
 */


function setStateFromProps(state, props) {
  var _convertColumnElement = (0, _convertColumnElementsToData["default"])(props.children),
      columnGroupProps = _convertColumnElement.columnGroupProps,
      columnProps = _convertColumnElement.columnProps,
      elementTemplates = _convertColumnElement.elementTemplates,
      useGroupHeader = _convertColumnElement.useGroupHeader;

  var newState = _extends({}, state, {
    columnGroupProps: columnGroupProps,
    columnProps: columnProps,
    elementTemplates: elementTemplates
  });

  newState.elementHeights = _extends({}, newState.elementHeights, (0, _pick["default"])(props, ['cellGroupWrapperHeight', 'footerHeight', 'groupHeaderHeight', 'headerHeight']));

  if (!useGroupHeader) {
    newState.elementHeights.groupHeaderHeight = 0;
  }

  newState.rowSettings = _extends({}, newState.rowSettings, (0, _pick["default"])(props, ['bufferRowCount', 'rowHeight', 'rowsCount', 'subRowHeight']));
  var _newState$rowSettings = newState.rowSettings,
      rowHeight = _newState$rowSettings.rowHeight,
      subRowHeight = _newState$rowSettings.subRowHeight;

  newState.rowSettings.rowHeightGetter = props.rowHeightGetter || function () {
    return rowHeight;
  };

  newState.rowSettings.subRowHeightGetter = props.subRowHeightGetter || function () {
    return subRowHeight || 0;
  };

  newState.rowSettings.rowAttributesGetter = props.rowAttributesGetter;
  newState.scrollFlags = _extends({}, newState.scrollFlags, (0, _pick["default"])(props, ['overflowX', 'overflowY', 'showScrollbarX', 'showScrollbarY']));
  newState.tableSize = _extends({}, newState.tableSize, (0, _pick["default"])(props, ['height', 'maxHeight', 'ownerHeight', 'width']));
  newState.tableSize.useMaxHeight = newState.tableSize.height === undefined;
  newState.scrollbarXHeight = props.scrollbarXHeight;
  newState.scrollbarYWidth = props.scrollbarYWidth;
  return newState;
}

var _default = reducers;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/requestAnimationFramePolyfill.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/requestAnimationFramePolyfill.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _emptyFunction = _interopRequireDefault(__webpack_require__(/*! ./emptyFunction */ "./node_modules/fixed-data-table-2/internal/emptyFunction.js"));

var _nativeRequestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! ./nativeRequestAnimationFrame */ "./node_modules/fixed-data-table-2/internal/nativeRequestAnimationFrame.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule requestAnimationFramePolyfill
 */
var lastTime = 0;
/**
 * Here is the native and polyfill version of requestAnimationFrame.
 * Please don't use it directly and use requestAnimationFrame module instead.
 */

var requestAnimationFrame = _nativeRequestAnimationFrame["default"] || function (callback) {
  var currTime = Date.now();
  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
  lastTime = currTime + timeDelay;
  return __webpack_require__.g.setTimeout(function () {
    callback(Date.now());
  }, timeDelay);
}; // Works around a rare bug in Safari 6 where the first request is never invoked.


requestAnimationFrame(_emptyFunction["default"]);
var _default = requestAnimationFrame;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/roughHeights.js":
/*!******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/roughHeights.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.ScrollbarState = void 0;

var _widthHelper = __webpack_require__(/*! ./widthHelper */ "./node_modules/fixed-data-table-2/internal/widthHelper.js");

var _Scrollbar = _interopRequireDefault(__webpack_require__(/*! ./Scrollbar */ "./node_modules/fixed-data-table-2/internal/Scrollbar.js"));

var _clamp = _interopRequireDefault(__webpack_require__(/*! ./clamp */ "./node_modules/fixed-data-table-2/internal/clamp.js"));

var _shallowEqualSelector = _interopRequireDefault(__webpack_require__(/*! ./shallowEqualSelector */ "./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule roughHeights
 */
var BORDER_HEIGHT = 1;
var MIN_BUFFER_ROWS = 3;
var MAX_BUFFER_ROWS = 6;
var ScrollbarState = {
  HIDDEN: 'hidden',
  JOINT_SCROLLBARS: 'JOINT_SCROLLBARS',
  VISIBLE: 'visible'
};
/**
 * Calculate the available height for the viewport.
 * Since we aren't 100% sure of whether scrollbars are visible
 * at this point, we compute a max & min viewport height.
 *
 * maxAvailableHeight is the largest it could be, while
 * minAvailableHeight is the smallest.
 * We also compute how large it is based on
 * the current scrollContentHeight in scrollbarsVisible.
 *
 * bufferRowCount is the number of rows to buffer both ahead and behind the viewport.
 * In total we will buffer twice this number of rows (half ahead, and half behind).
 *
 * reservedHeight is the height reserved for headers and footers.
 *
 * scrollStateX is the state of the horizontal scrollbar.
 * HIDDEN & VISIBLE are self explanatory, but
 * JOINT_SCROLLBARS mean the horizontal scroll will be shown if and
 * only if the vertical scrollbar is shown.
 *
 * @param {!Array.<{
 *   width: number,
 * }>} columnProps
 * @param {{
 *   cellGroupWrapperHeight: number,
 *   footerHeight: number,
 *   groupHeaderHeight: number,
 *   headerHeight: number,
 * }} elementHeights
 * @param {{
 *   bufferRowCount: ?number,
 *   rowHeight: number,
 *   subRowHeight: number,
 * }} rowSettings
 * @param {{
 *   overflowX: string,
 *   showScrollbarX: boolean,
 * }} scrollFlags
 * @param {{
 *   height: ?number,
 *   maxHeight: ?number,
 *   useMaxHeight: boolean,
 *   width: number,
 * }} tableSize
 * @return {{
 *   bufferRowsCount: number,
 *   minAvailableHeight: number,
 *   maxAvailableHeight: number,
 *   reservedHeight: number,
 *   scrollStateX: ScrollbarState,
 * }}
 */

exports.ScrollbarState = ScrollbarState;

function roughHeights(columnProps, elementHeights, rowSettings, scrollFlags, tableSize, scrollbarXHeight, scrollbarYWidth) {
  var cellGroupWrapperHeight = elementHeights.cellGroupWrapperHeight,
      footerHeight = elementHeights.footerHeight,
      headerHeight = elementHeights.headerHeight,
      groupHeaderHeight = elementHeights.groupHeaderHeight; // we don't need border height to be added to the table if we are using cellGroupWrapperHeight

  var borderHeight = cellGroupWrapperHeight ? 0 : 2 * BORDER_HEIGHT;
  var reservedHeight = footerHeight + headerHeight + groupHeaderHeight + borderHeight;
  var height = tableSize.height,
      maxHeight = tableSize.maxHeight,
      useMaxHeight = tableSize.useMaxHeight,
      width = tableSize.width;
  var maxComponentHeight = Math.round(useMaxHeight ? maxHeight : height);
  var roughAvailableHeight = maxComponentHeight - reservedHeight;
  var scrollStateX = getScrollStateX(columnProps, scrollFlags, width, scrollbarYWidth);
  /*
   * Early estimates of how much height we have to show rows.
   * We won't know which one is real until we know about horizontal scrollbar which
   * requires knowing about vertical scrollbar as well and that
   * requires scrollContentHeight which
   * requires us to have handled scrollTo / scrollToRow...
   */

  var minAvailableHeight = roughAvailableHeight;
  var maxAvailableHeight = roughAvailableHeight;

  switch (scrollStateX) {
    case ScrollbarState.VISIBLE:
      {
        minAvailableHeight -= scrollbarXHeight;
        maxAvailableHeight -= scrollbarXHeight;
        break;
      }

    case ScrollbarState.JOINT_SCROLLBARS:
      {
        minAvailableHeight -= scrollbarXHeight;
        break;
      }
  }

  return {
    bufferRowCount: getBufferRowCount(maxAvailableHeight, rowSettings),
    minAvailableHeight: Math.max(minAvailableHeight, 0),
    maxAvailableHeight: Math.max(maxAvailableHeight, 0),
    reservedHeight: reservedHeight,
    scrollStateX: scrollStateX
  };
}
/**
 * @param {!Array.<{
 *   width: number,
 * }>} columnProps
 * @param {{
 *   overflowX: string,
 *   showScrollbarX: boolean,
 * }} scrollFlags
 * @param {number} width
 * @return {ScrollbarState}
 */


function getScrollStateX(columnProps, scrollFlags, width, scrollbarYWidth) {
  var overflowX = scrollFlags.overflowX,
      showScrollbarX = scrollFlags.showScrollbarX;
  var minColWidth = (0, _widthHelper.getTotalWidth)(columnProps);

  if (overflowX === 'hidden' || showScrollbarX === false) {
    return ScrollbarState.HIDDEN;
  } else if (minColWidth > width) {
    return ScrollbarState.VISIBLE;
  }

  if (minColWidth > width - scrollbarYWidth) {
    return ScrollbarState.JOINT_SCROLLBARS;
  }

  return ScrollbarState.HIDDEN;
}
/**
 * @param {number} maxAvailableHeight
 * @param {{
 *   bufferRowCount: ?number,
 *   rowHeight: number,
 *   subRowHeight: number,
 * }} rowSettings
 * @return {number}
 */


function getBufferRowCount(maxAvailableHeight, rowSettings) {
  var bufferRowCount = rowSettings.bufferRowCount,
      rowHeight = rowSettings.rowHeight,
      subRowHeight = rowSettings.subRowHeight;

  if (bufferRowCount !== undefined) {
    console.log('buffer set: ' + bufferRowCount);
    return bufferRowCount;
  }

  var fullRowHeight = rowHeight + subRowHeight;
  var avgVisibleRowCount = Math.ceil(maxAvailableHeight / fullRowHeight) + 1;
  return (0, _clamp["default"])(Math.floor(avgVisibleRowCount / 2), MIN_BUFFER_ROWS, MAX_BUFFER_ROWS);
}

var _default = (0, _shallowEqualSelector["default"])([function (state) {
  return state.columnProps;
}, function (state) {
  return state.elementHeights;
}, function (state) {
  return state.rowSettings;
}, function (state) {
  return state.scrollFlags;
}, function (state) {
  return state.tableSize;
}, function (state) {
  return state.scrollbarXHeight;
}, function (state) {
  return state.scrollbarYWidth;
}], roughHeights);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/scrollActions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/scrollActions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * @providesModule scrollActions
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.stopScroll = exports.startScroll = exports.scrollToY = exports.scrollToX = void 0;

var _ActionTypes = __webpack_require__(/*! ././ActionTypes */ "./node_modules/fixed-data-table-2/internal/ActionTypes.js");

/**
 * Scrolls the table horizontally to position
 *
 * @param {number} scrollX
 */
var scrollToX = function scrollToX(scrollX) {
  return {
    type: _ActionTypes.SCROLL_TO_X,
    scrollX: scrollX
  };
};
/**
 * Scrolls the table vertically to position
 *
 * @param {number} scrollY
 */


exports.scrollToX = scrollToX;

var scrollToY = function scrollToY(scrollY) {
  return {
    type: _ActionTypes.SCROLL_TO_Y,
    scrollY: scrollY
  };
};
/**
 * Fire when user starts scrolling
 */


exports.scrollToY = scrollToY;

var startScroll = function startScroll() {
  return {
    type: _ActionTypes.SCROLL_START
  };
};
/**
 * Fire when user starts scrolling
 */


exports.startScroll = startScroll;

var stopScroll = function stopScroll() {
  return {
    type: _ActionTypes.SCROLL_END
  };
};

exports.stopScroll = stopScroll;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/scrollAnchor.js":
/*!******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/scrollAnchor.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule scrollAnchor
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getScrollAnchor = getScrollAnchor;
exports.scrollTo = scrollTo;

var _clamp = _interopRequireDefault(__webpack_require__(/*! ./clamp */ "./node_modules/fixed-data-table-2/internal/clamp.js"));

var _updateRowHeight = _interopRequireDefault(__webpack_require__(/*! ./updateRowHeight */ "./node_modules/fixed-data-table-2/internal/updateRowHeight.js"));

var _scrollbarsVisible = _interopRequireDefault(__webpack_require__(/*! ./scrollbarsVisible */ "./node_modules/fixed-data-table-2/internal/scrollbarsVisible.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Get the anchor for scrolling.
 * This will either be the first row's index and an offset, or the last row's index.
 * We also pass a flag indicating if the anchor has changed from the state
 *
 * @param {!Object} state
 * @param {!Object} newProps
 * @param {!Object} oldProps
 * @return {{
 *   firstIndex: number,
 *   firstOffset: number,
 *   lastIndex: number,
 *   changed: boolean,
 * }}
 */
function getScrollAnchor(state, newProps, oldProps) {
  if (newProps.scrollToRow !== undefined && newProps.scrollToRow !== null && (!oldProps || newProps.scrollToRow !== oldProps.scrollToRow)) {
    return scrollToRow(state, newProps.scrollToRow);
  }

  if (newProps.scrollTop !== undefined && newProps.scrollTop !== null && (!oldProps || newProps.scrollTop !== oldProps.scrollTop)) {
    return scrollTo(state, newProps.scrollTop);
  }

  return {
    firstIndex: state.firstRowIndex,
    firstOffset: state.firstRowOffset,
    lastIndex: undefined,
    changed: false
  };
}
/**
 * Scroll to a specific position in the grid
 *
 * @param {!Object} state
 * @param {number} scrollY
 * @return {{
 *   firstIndex: number,
 *   firstOffset: number,
 *   lastIndex: number,
 *   changed: boolean,
 * }}
 */


function scrollTo(state, scrollY) {
  var _scrollbarsVisibleSel = (0, _scrollbarsVisible["default"])(state),
      availableHeight = _scrollbarsVisibleSel.availableHeight;

  var rowOffsetIntervalTree = state.rowOffsetIntervalTree,
      rowSettings = state.rowSettings,
      scrollContentHeight = state.scrollContentHeight;
  var rowsCount = rowSettings.rowsCount;

  if (rowsCount === 0) {
    return {
      firstIndex: 0,
      firstOffset: 0,
      lastIndex: undefined,
      changed: state.firstRowIndex !== 0 || state.firstRowOffset !== 0
    };
  }

  var firstIndex = 0;
  var firstOffset = 0;
  var lastIndex = undefined;

  if (scrollY <= 0) {// Use defaults (from above) to scroll to first row
  } else if (scrollY >= scrollContentHeight - availableHeight) {
    // Scroll to the last row
    firstIndex = undefined;
    lastIndex = rowsCount - 1;
  } else {
    // Mark the row which will appear first in the viewport
    // We use this as our "marker" when scrolling even if updating rowOffsets
    // leads to it not being different from the scrollY specified
    var newRowIdx = rowOffsetIntervalTree.greatestLowerBound(scrollY);
    firstIndex = (0, _clamp["default"])(newRowIdx, 0, Math.max(rowsCount - 1, 0)); // Record how far into the first row we should scroll
    // firstOffset is a negative value representing how much larger scrollY is
    // than the scroll position of the first row in the viewport

    var firstRowPosition = rowOffsetIntervalTree.sumUntil(firstIndex);
    firstOffset = firstRowPosition - scrollY;
  }

  return {
    firstIndex: firstIndex,
    firstOffset: firstOffset,
    lastIndex: lastIndex,
    // NOTE (jordan) This changed heuristic may give false positives,
    // but that's fine since it's used as a filter to computeRenderedRows
    changed: true
  };
}
/**
 * Scroll a specified row into the viewport
 * If the row is before the viewport, it will become the first row in the viewport
 * If the row is after the viewport, it will become the last row in the viewport
 * If the row is in the viewport, do nothing
 *
 * @param {!Object} state
 * @param {number} rowIndex
 * @return {{
 *   firstIndex: number,
 *   firstOffset: number,
 *   lastIndex: number,
 *   changed: boolean,
 * }}
 * @private
 */


function scrollToRow(state, rowIndex) {
  var _scrollbarsVisibleSel2 = (0, _scrollbarsVisible["default"])(state),
      availableHeight = _scrollbarsVisibleSel2.availableHeight;

  var rowOffsetIntervalTree = state.rowOffsetIntervalTree,
      rowSettings = state.rowSettings,
      storedHeights = state.storedHeights,
      scrollY = state.scrollY;
  var rowsCount = rowSettings.rowsCount;

  if (rowsCount === 0) {
    return {
      firstIndex: 0,
      firstOffset: 0,
      lastIndex: undefined,
      changed: state.firstRowIndex !== 0 || state.firstRowOffset !== 0
    };
  }

  rowIndex = (0, _clamp["default"])(rowIndex, 0, Math.max(rowsCount - 1, 0));
  (0, _updateRowHeight["default"])(state, rowIndex);
  var rowBegin = rowOffsetIntervalTree.sumUntil(rowIndex);
  var rowEnd = rowBegin + storedHeights[rowIndex];
  var firstIndex = rowIndex;
  var lastIndex = undefined;

  if (rowBegin < scrollY) {// If before the viewport, set as the first row in the viewport
    // Uses defaults (from above)
  } else if (scrollY + availableHeight < rowEnd) {
    // If after the viewport, set as the last row in the viewport
    firstIndex = undefined;
    lastIndex = rowIndex;
  } else {
    // If already in the viewport, do nothing.
    return {
      firstIndex: state.firstRowIndex,
      firstOffset: state.firstRowOffset,
      lastIndex: undefined,
      changed: false
    };
  }

  return {
    firstIndex: firstIndex,
    firstOffset: 0,
    lastIndex: lastIndex,
    changed: true
  };
}

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/scrollbarsVisible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/scrollbarsVisible.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _roughHeights = _interopRequireWildcard(__webpack_require__(/*! ./roughHeights */ "./node_modules/fixed-data-table-2/internal/roughHeights.js"));

var _shallowEqualSelector = _interopRequireDefault(__webpack_require__(/*! ./shallowEqualSelector */ "./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule scrollbarsVisible
 */

/**
 * State regarding which scrollbars will be shown.
 * Also includes the actual availableHeight which depends on the scrollbars.
 *
 * @param {{
 *   minAvailableHeight: number,
 *   maxAvailableHeight: number,
 *   scrollStateX: ScrollbarState,
 * }} roughHeights
 * @param {number} scrollContentHeight,
 * @param {{
 *   overflowY: string,
 *   showScrollbarY: boolean,
 * }} scrollFlags
 * @return {{
 *   availableHeight: number,
 *   scrollEnabledX: boolean,
 *   scrollEnabledY: boolean,
 * }}
 */
function scrollbarsVisible(roughHeights, scrollContentHeight, scrollFlags) {
  var overflowY = scrollFlags.overflowY,
      showScrollbarY = scrollFlags.showScrollbarY;
  var allowScrollbarY = overflowY !== 'hidden' && showScrollbarY !== false;
  var minAvailableHeight = roughHeights.minAvailableHeight,
      maxAvailableHeight = roughHeights.maxAvailableHeight,
      scrollStateX = roughHeights.scrollStateX;
  var scrollEnabledY = false;
  var scrollEnabledX = false;

  if (scrollStateX === _roughHeights.ScrollbarState.VISIBLE) {
    scrollEnabledX = true;
  }

  if (allowScrollbarY && scrollContentHeight > maxAvailableHeight) {
    scrollEnabledY = true;
  } // Handle case where vertical scrollbar makes horizontal scrollbar necessary


  if (scrollEnabledY && scrollStateX === _roughHeights.ScrollbarState.JOINT_SCROLLBARS) {
    scrollEnabledX = true;
  }

  var availableHeight = maxAvailableHeight;

  if (scrollEnabledX) {
    availableHeight = minAvailableHeight;
  }

  return {
    availableHeight: availableHeight,
    scrollEnabledX: scrollEnabledX,
    scrollEnabledY: scrollEnabledY
  };
}

var _default = (0, _shallowEqualSelector["default"])([_roughHeights["default"], function (state) {
  return state.scrollContentHeight;
}, function (state) {
  return state.scrollFlags;
}], scrollbarsVisible);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/shallowEqual.js":
/*!******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/shallowEqual.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

var _default = shallowEqual;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js":
/*!**************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqualSelector
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _reselect = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./shallowEqual */ "./node_modules/fixed-data-table-2/internal/shallowEqual.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _shallowEqual["default"]);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/tableHeights.js":
/*!******************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/tableHeights.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Scrollbar = _interopRequireDefault(__webpack_require__(/*! ./Scrollbar */ "./node_modules/fixed-data-table-2/internal/Scrollbar.js"));

var _roughHeights = _interopRequireDefault(__webpack_require__(/*! ./roughHeights */ "./node_modules/fixed-data-table-2/internal/roughHeights.js"));

var _scrollbarsVisible = _interopRequireDefault(__webpack_require__(/*! ./scrollbarsVisible */ "./node_modules/fixed-data-table-2/internal/scrollbarsVisible.js"));

var _shallowEqualSelector = _interopRequireDefault(__webpack_require__(/*! ./shallowEqualSelector */ "./node_modules/fixed-data-table-2/internal/shallowEqualSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule tableHeights
 */

/**
 * Compute the necessary heights for rendering parts of the table
 *
 * @param {{
 *   footerHeight: number,
 *   groupHeaderHeight: number,
 *   headerHeight: number,
 * }} elementHeights
 * @param {number|undefined} ownerHeight
 * @param {number} reservedHeight
 * @param {number} scrollContentHeight
 * @param {{
 *   availableHeight: number,
 *   scrollEnabledX: boolean,
 * }} scrollbarsVisible
 * @param {boolean} useMaxHeight
 * @return {{
 *   bodyHeight: number,
 *   bodyOffsetTop: number,
 *   componentHeight: number,
 *   contentHeight: number,
 *   footOffsetTop: number,
 *   scrollbarXOffsetTop: number,
 *   scrollbarYHeight: number,
 *   visibleRowsHeight: number,
 * }}
 */
function tableHeights(elementHeights, ownerHeight, reservedHeight, scrollContentHeight, scrollbarsVisible, useMaxHeight, scrollbarXHeight) {
  var availableHeight = scrollbarsVisible.availableHeight,
      scrollEnabledX = scrollbarsVisible.scrollEnabledX;
  var reservedWithScrollbar = reservedHeight;

  if (scrollEnabledX) {
    reservedWithScrollbar += scrollbarXHeight;
  } // If less content than space for rows (bodyHeight), then
  // we should shrink the space for rows to fit our row content (scrollContentHeight).


  var bodyHeight = Math.min(availableHeight, scrollContentHeight); // If using max height, component should only be sized to content.
  // Otherwise use all available height.

  var rowContainerHeight = useMaxHeight ? bodyHeight : availableHeight;
  var componentHeight = rowContainerHeight + reservedWithScrollbar; // If we have an owner height and it's less than the component height,
  // adjust visible height so we show footer and scrollbar position at the bottom of owner.

  var visibleRowsHeight = rowContainerHeight;

  if (ownerHeight < componentHeight) {
    visibleRowsHeight = ownerHeight - reservedWithScrollbar;
  } // If using max height, virtual row container is scrollContentHeight, otherwise
  // it is the larger of that or the available height.


  var virtualRowContainerHeight = useMaxHeight ? scrollContentHeight : Math.max(scrollContentHeight, availableHeight); // contentHeight is the virtual rows height and reserved height,
  // or ownerHeight if that's larger

  var contentHeight = virtualRowContainerHeight + reservedWithScrollbar;

  if (ownerHeight) {
    contentHeight = Math.max(ownerHeight, contentHeight);
  } // Determine component offsets


  var footerHeight = elementHeights.footerHeight,
      groupHeaderHeight = elementHeights.groupHeaderHeight,
      headerHeight = elementHeights.headerHeight;
  var bodyOffsetTop = groupHeaderHeight + headerHeight;
  var footOffsetTop = bodyOffsetTop + visibleRowsHeight;
  var scrollbarXOffsetTop = footOffsetTop + footerHeight;
  var scrollbarYHeight = Math.max(0, footOffsetTop - bodyOffsetTop);
  return {
    bodyHeight: bodyHeight,
    bodyOffsetTop: bodyOffsetTop,
    componentHeight: componentHeight,
    contentHeight: contentHeight,
    footOffsetTop: footOffsetTop,
    scrollbarXOffsetTop: scrollbarXOffsetTop,
    scrollbarYHeight: scrollbarYHeight,
    visibleRowsHeight: visibleRowsHeight
  };
}

var _default = (0, _shallowEqualSelector["default"])([function (state) {
  return state.elementHeights;
}, function (state) {
  return state.tableSize.ownerHeight;
}, function (state) {
  return (0, _roughHeights["default"])(state).reservedHeight;
}, function (state) {
  return state.scrollContentHeight;
}, _scrollbarsVisible["default"], function (state) {
  return state.tableSize.useMaxHeight;
}, function (state) {
  return state.scrollbarXHeight;
}], tableHeights);

exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/translateDOMPositionXY.js":
/*!****************************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/translateDOMPositionXY.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule translateDOMPositionXY
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _BrowserSupportCore = _interopRequireDefault(__webpack_require__(/*! ./BrowserSupportCore */ "./node_modules/fixed-data-table-2/internal/BrowserSupportCore.js"));

var _getVendorPrefixedName = _interopRequireDefault(__webpack_require__(/*! ./getVendorPrefixedName */ "./node_modules/fixed-data-table-2/internal/getVendorPrefixedName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TRANSFORM = (0, _getVendorPrefixedName["default"])('transform');
var BACKFACE_VISIBILITY = (0, _getVendorPrefixedName["default"])('backfaceVisibility');

var translateDOMPositionXY = function () {
  if (_BrowserSupportCore["default"].hasCSSTransforms()) {
    var ua = __webpack_require__.g.window ? __webpack_require__.g.window.navigator.userAgent : 'UNKNOWN';
    var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua); // It appears that Safari messes up the composition order
    // of GPU-accelerated layers
    // (see bug https://bugs.webkit.org/show_bug.cgi?id=61824).
    // Use 2D translation instead.

    if (!isSafari && _BrowserSupportCore["default"].hasCSS3DTransforms()) {
      return function (
      /*object*/
      style,
      /*number*/
      x,
      /*number*/
      y) {
        style[TRANSFORM] = 'translate3d(' + x + 'px,' + y + 'px,0)';
      };
    } else {
      return function (
      /*object*/
      style,
      /*number*/
      x,
      /*number*/
      y) {
        style[TRANSFORM] = 'translate(' + x + 'px,' + y + 'px)';
      };
    }
  } else {
    return function (
    /*object*/
    style,
    /*number*/
    x,
    /*number*/
    y) {
      style.left = x + 'px';
      style.top = y + 'px';
    };
  }
}();

var _default = translateDOMPositionXY;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/updateRowHeight.js":
/*!*********************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/updateRowHeight.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule updateRowHeight
 */

/**
 * Update our cached row height for a specific index
 * based on the value from rowHeightGetter
 *
 * NOTE (jordan) This alters state so it shouldn't be called
 * without state having been cloned first.
 *
 * @param {!Object} state
 * @param {number} rowIdx
 * @return {number} The new row height
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = updateRowHeight;

function updateRowHeight(state, rowIdx) {
  var storedHeights = state.storedHeights,
      rowOffsetIntervalTree = state.rowOffsetIntervalTree,
      rowSettings = state.rowSettings;
  var rowHeightGetter = rowSettings.rowHeightGetter,
      subRowHeightGetter = rowSettings.subRowHeightGetter;
  var newHeight = rowHeightGetter(rowIdx) + subRowHeightGetter(rowIdx);
  var oldHeight = storedHeights[rowIdx];

  if (newHeight !== oldHeight) {
    rowOffsetIntervalTree.set(rowIdx, newHeight);
    storedHeights[rowIdx] = newHeight;
    state.scrollContentHeight += newHeight - oldHeight;
  }

  return storedHeights[rowIdx];
}

/***/ }),

/***/ "./node_modules/fixed-data-table-2/internal/widthHelper.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fixed-data-table-2/internal/widthHelper.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule widthHelper
 * @typechecks
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sumPropWidths = sumPropWidths;
exports.getTotalWidth = getTotalWidth;
exports.getTotalFlexGrow = getTotalFlexGrow;

var _reduce = _interopRequireDefault(__webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function sumPropWidths(columns) {
  return (0, _reduce["default"])(columns, function (accum, column) {
    return accum + column.props.width;
  }, 0);
}

function getTotalWidth(columns) {
  return (0, _reduce["default"])(columns, function (accum, column) {
    return accum + column.width;
  }, 0);
}

function getTotalFlexGrow(columns) {
  return (0, _reduce["default"])(columns, function (accum, column) {
    return accum + (column.flexGrow || 0);
  }, 0);
}

/***/ }),

/***/ "./node_modules/fixed-data-table-2/main.js":
/*!*************************************************!*\
  !*** ./node_modules/fixed-data-table-2/main.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./internal/FixedDataTableRoot */ "./node_modules/fixed-data-table-2/internal/FixedDataTableRoot.js");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClamp.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClamp.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseInRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseInRange.js ***!
  \*********************************************/
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

module.exports = baseInRange;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseReduce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseReduce.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/clamp.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clamp.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClamp = __webpack_require__(/*! ./_baseClamp */ "./node_modules/lodash/_baseClamp.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/inRange.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/inRange.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseInRange = __webpack_require__(/*! ./_baseInRange */ "./node_modules/lodash/_baseInRange.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  number = toNumber(number);
  return baseInRange(number, start, end);
}

module.exports = inRange;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isNaN.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isNaN.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNumber = __webpack_require__(/*! ./isNumber */ "./node_modules/lodash/isNumber.js");

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;


/***/ }),

/***/ "./node_modules/lodash/isNil.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isNil.js ***!
  \**************************************/
/***/ ((module) => {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(/*! ./_basePick */ "./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseReduce = __webpack_require__(/*! ./_baseReduce */ "./node_modules/lodash/_baseReduce.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactReduxContext": () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__.default(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      subscribe: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
      dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
      getState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
    }),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectAdvanced)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__.ReactReduxContext : _ref2$context,
      connectOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__.default(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default().memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConnect": () => (/* binding */ createConnect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areMergedPropsE,
        extraOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whenMapDispatchToPropsIsFunction": () => (/* binding */ whenMapDispatchToPropsIsFunction),
/* harmony export */   "whenMapDispatchToPropsIsMissing": () => (/* binding */ whenMapDispatchToPropsIsMissing),
/* harmony export */   "whenMapDispatchToPropsIsObject": () => (/* binding */ whenMapDispatchToPropsIsObject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whenMapStateToPropsIsFunction": () => (/* binding */ whenMapStateToPropsIsFunction),
/* harmony export */   "whenMapStateToPropsIsMissing": () => (/* binding */ whenMapStateToPropsIsMissing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMergeProps": () => (/* binding */ defaultMergeProps),
/* harmony export */   "wrapMergePropsFunc": () => (/* binding */ wrapMergePropsFunc),
/* harmony export */   "whenMergePropsIsFunction": () => (/* binding */ whenMergePropsIsFunction),
/* harmony export */   "whenMergePropsIsOmitted": () => (/* binding */ whenMergePropsIsOmitted),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "impureFinalPropsSelectorFactory": () => (/* binding */ impureFinalPropsSelectorFactory),
/* harmony export */   "pureFinalPropsSelectorFactory": () => (/* binding */ pureFinalPropsSelectorFactory),
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapMapToPropsConstant": () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   "getDependsOnOwnProps": () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   "wrapMapToPropsFunc": () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__.default)(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDispatchHook": () => (/* binding */ createDispatchHook),
/* harmony export */   "useDispatch": () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext;
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useReduxContext": () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectorHook": () => (/* binding */ createSelectorHook),
/* harmony export */   "useSelector": () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.default(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestStoreState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelectedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState);
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelector");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStoreHook": () => (/* binding */ createStoreHook),
/* harmony export */   "useStore": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "connectAdvanced": () => (/* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ReactReduxContext": () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   "connect": () => (/* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "batch": () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__.unstable_batchedUpdates),
/* harmony export */   "useDispatch": () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.useDispatch),
/* harmony export */   "createDispatchHook": () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.createDispatchHook),
/* harmony export */   "useSelector": () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector),
/* harmony export */   "createSelectorHook": () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook),
/* harmony export */   "useStore": () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.useStore),
/* harmony export */   "createStoreHook": () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   "shallowEqual": () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__.default)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");










(0,_utils_batch__WEBPACK_IMPORTED_MODULE_7__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__.unstable_batchedUpdates);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBatch": () => (/* binding */ setBatch),
/* harmony export */   "getBatch": () => (/* binding */ getBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__.default)(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* binding */ ActionTypes),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "bindActionCreators": () => (/* binding */ bindActionCreators),
/* harmony export */   "combineReducers": () => (/* binding */ combineReducers),
/* harmony export */   "compose": () => (/* binding */ compose),
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMemoize": () => (/* binding */ defaultMemoize),
/* harmony export */   "createSelectorCreator": () => (/* binding */ createSelectorCreator),
/* harmony export */   "createSelector": () => (/* binding */ createSelector),
/* harmony export */   "createStructuredSelector": () => (/* binding */ createStructuredSelector)
/* harmony export */ });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof __webpack_require__.g !== 'undefined') {
  root = __webpack_require__.g;
} else if (true) {
  root = module;
} else {}

var result = (0,_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__.default)(root);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);


/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ symbolObservablePonyfill)
/* harmony export */ });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./src/web/adaptElastic.ts":
/*!*********************************!*\
  !*** ./src/web/adaptElastic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

//var elasticlunr = (window as any).elasticlunr;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeElasticIndex = exports.makeLunrIndex = void 0;
function makeLunrIndex(elasticlunr, data, lunrcolumns) {
    var elastic = elasticlunr(function () {
        var that = this;
        lunrcolumns.forEach(function (field) {
            that.addField(field);
        });
        this.setRef('id');
        this.saveDocument(false);
    });
    data.forEach(function (record, index) {
        record.id = index;
        elastic.addDoc(record);
    });
    return elastic.toJSON();
}
exports.makeLunrIndex = makeLunrIndex;
function makeElasticIndex(elasticlunr, serIndex) {
    window.elastic = elasticlunr.Index.load(serIndex /*str*/);
}
exports.makeElasticIndex = makeElasticIndex;


/***/ }),

/***/ "./src/web/qbetable.tsx":
/*!******************************!*\
  !*** ./src/web/qbetable.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//import * as Promise from 'es6-shim';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(/*! react */ "react");
var React = __webpack_require__(/*! react */ "react");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var AdaptElastic = __webpack_require__(/*! ./adaptElastic.ts */ "./src/web/adaptElastic.ts");
var MAXWIDTH = 570;
var MINWIDTH = 30;
// fire off XMLHttpRequest early
function reqListener() {
    console.log(this.responseText);
}
function getJSONOrNullPromise(url) {
    return new window.Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function () {
            try {
                var r = JSON.parse(this.responseText);
                console.log(' loaded ' + url + ' ' + this.responseText.length);
                resolve(r);
            }
            catch (e) {
                console.log(' error loading ' + url);
                resolve(null);
            }
        });
        oReq.addEventListener("error", function (err) {
            console.log('error loading ' + url + ' ' + err);
            resolve(null);
        });
        console.log("dataurl" + url);
        oReq.open("GET", url);
        oReq.send();
    });
}
function augmentColumns(data, columns) {
    var seenColumns = { "uri": 1 }; // skip
    if (columns) {
        return columns;
    }
    columns = [];
    data.forEach(function (rec) {
        Object.getOwnPropertyNames(rec).forEach(function (pn) {
            if (!seenColumns[pn]) {
                seenColumns[pn] = 1;
                columns.push(pn);
            }
        });
    });
    return columns;
}
function augmentColumnsIndexed(columns, columnsIndexed) {
    if (columnsIndexed) {
        return columnsIndexed;
    }
    return columns.map(function (cn) { return cn; });
}
function augmentColumnsDescription(columns, columnsDescription) {
    if (columnsDescription) {
        return columnsDescription;
    }
    var result = {};
    columns.forEach(function (cn) { return result[cn] = cn; });
    return result;
}
function augmentColumnsDefaultWidth(columns, columnsDefaultWidth) {
    if (columnsDefaultWidth) {
        return columnsDefaultWidth;
    }
    var result = {};
    columns.forEach(function (cn) { result[cn] = 100; });
    return result;
}
function augmentData(data, columns) {
    var seenColumns = { "uri": 1 };
    columns.forEach(function (cn) { return seenColumns[cn] = 1; });
    data.forEach(function (rec) {
        var presentColumns = {};
        Object.getOwnPropertyNames(rec).forEach(function (pn) {
            presentColumns[pn] = 1;
            // TODO flatten array 
            if (!seenColumns[pn]) {
                delete rec[pn];
            }
        });
        columns.forEach(function (cn) {
            if (!presentColumns[cn]) {
                rec[cn] = "";
            }
        });
    });
}
function augmentSerIndex(result) {
    if (result.serIndex) {
        return;
    }
    var elasticlunr = window.elasticlunr;
    result.serIndex = AdaptElastic.makeLunrIndex(elasticlunr, result.data, result.columnsIndexed);
}
function augmentResult(result, jsonUrl) {
    result.columns = augmentColumns(result.data, result.columns);
    result.columnsIndexed = augmentColumnsIndexed(result.data, result.columns);
    result.columnsDescription = augmentColumnsDescription(result.columns, result.columnsDescription);
    result.columnsDefaultWidth = augmentColumnsDefaultWidth(result.columns, result.columnsDefaultWidth);
    augmentData(result.data, result.columns);
    augmentSerIndex(result);
}
function loadPlainJSONEtc(resolve, reject, jsonUrl) {
    var result = { data: null,
        modelDescription: null,
        columnsDescription: null,
        columns: null,
        columnsDefaultWidth: null,
        serIndex: null,
        columnsIndexed: null
    };
    getJSONOrNullPromise(jsonUrl).then(function (data) {
        result.data = data;
        return getJSONOrNullPromise(jsonUrl + ".serIndex.json");
    }).then(function (serIndex) {
        result.serIndex = serIndex;
        return getJSONOrNullPromise(jsonUrl + ".model.json");
    }).then(function (model) {
        if (model) {
            result.modelDescription = model.modelDescription || jsonUrl;
            result.columnsDescription = model.columnsDescription;
            result.columnsDefaultWidth = model.columnsDefaultWidth;
            result.columns = model.columns;
            result.columnsIndexed = model.columnsIndexed;
            setTitleEtc(jsonUrl, result.modelDescription);
        }
        augmentResult(result, jsonUrl);

        var r = result;
        window.mdldata = r;
        records = r.data;
        console.log("here data #" + r.data.length);
        var elasticlunr = window.elasticlunr;
        AdaptElastic.makeElasticIndex(elasticlunr, r.serIndex);
        console.log("parsed ok!");
        resolve(r);
    });
}
function hideColumnsDialog() {
    var columnsDialog = document.getElementById("columnsDialog");
    var columnsTableBody = document.getElementById("columnsTableBody");
    while (columnsTableBody.firstChild) {
        columnsTableBody.removeChild(columnsTableBody.firstChild);
    }
    columnsDialog.data = undefined;
    columnsDialog.style.zIndex = "0";
    columnsDialog.style.visibility = "hidden";
    columnsDialog.style.contentVisibility = "hidden";
}
function parseSetIndices(s) {
    return s.split(',').map(function (a) { return parseInt(a); });
}
function stringifySetIndices(s) {
    return s.join(",");
}
function setColumnIndices(setIndices) {
    reStart(setIndices);
}
function onColumnsDialogCancel(ev) {
    console.log('onChangeSelect' + ev);
    hideColumnsDialog();
}
document.getElementById('btnColumnsDialogCancel').onclick = onColumnsDialogCancel;
function onColumnsDialogReset(ev) {
    var setIndices = [];
    window.mdldata.columns.forEach(function (c, index) { return setIndices.push(index); });
    setColumnIndices(setIndices);
    hideColumnsDialog();
}
document.getElementById('btnColumnsDialogReset').onclick = onColumnsDialogReset;
function onColumnsDialogUpdate(ev) {
    var columnsDialog = document.getElementById("columnsDialog");
    var newSetIndices = columnsDialog.data;
    if (newSetIndices) {
        hideColumnsDialog();
        setColumnIndices(newSetIndices);
    }
}
document.getElementById('btnColumnsDialogUpdate').onclick = onColumnsDialogUpdate;
function onChangeSelect(ev) {
    console.log('onChangeCol' + ev);
    debugger;
}
function onChangeClick(ev) {
    debugger;
    console.log('onChangeCLick' + ev);
}
function removeIndex(idx) {
    var columnsDialog = document.getElementById("columnsDialog");
    var data = columnsDialog.data;
    if (!data) {
        columnsDialog.data = getSetIndices();
    }
    data = columnsDialog.data;
    columnsDialog.data = data.filter(function (i) { return i != idx; });
    console.log(columnsDialog.data);
}
function addIndex(idx) {
    var columnsDialog = document.getElementById("columnsDialog");
    var data = columnsDialog.data;
    if (!data) {
        columnsDialog.data = getSetIndices();
    }
    data = columnsDialog.data;
    data.push(idx);
    console.log(data);
}
function onChangeColumn(ev) {
    if (ev.target.checked) {
        addIndex(ev.target.data);
    }
    else {
        removeIndex(ev.target.data);
    }
    console.log('onChangeSelect' + ev.data);
}
function addColumnRow(table, col, index, setIndices) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td = document.createElement("td");
    var cb = document.createElement("input");
    td.appendChild(cb);
    cb.type = "checkbox";
    cb.data = index;
    cb.onchange = onChangeColumn;
    cb.onselect = onChangeSelect;
    cb.onclick = onChangeClick;
    if (setIndices.indexOf(index) >= 0) {
        cb.checked = true;
    }
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerText = '' + (index);
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerText = col;
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerText = window.mdldata.columnsDescription[col];
    tr.appendChild(td);
}
function getSetIndices() {
    var columns = window.mdldata.columns;
    var setIndices = [];
    var m = window.location.hash.match(/\/col(\d+(,\d+)*)\//);
    if (m) {
        setIndices = parseSetIndices(m[1]);
    }
    if (setIndices.length == 0) {
        columns.forEach(function (cn, index) { return setIndices.push(index); });
    }
    return setIndices;
}
function showColumns() {
    //alert((window as any).mdldata.columns);
    var columnsDialog = document.getElementById("columnsDialog");
    if (columnsDialog.style.visibility == "") {
        hideColumnsDialog();
        return;
    }
    columnsDialog.style.visibility = "";
    columnsDialog.style.zIndex = "100";
    columnsDialog.style.contentVisibility = "";
    var tableBody = document.getElementById("columnsTableBody");
    var columns = window.mdldata.columns;
    var setIndices = getSetIndices();
    columns.forEach(function (col, index) {
        addColumnRow(tableBody, col, index, setIndices);
    });
}
var btn = document.getElementById("btnColumns");
if (btn) {
    btn.onclick = showColumns;
}
function setTitleEtc(url, description) {
    var title = document.getElementById("Title");
    if (title) {
        description = description || url;
        document.title = description;
        var a = document.createElement("a");
        a.href = url;
        a.innerText = description + "&nbsp;";
        document.getElementById("Title").innerText = url;
        document.getElementById("Title").appendChild(a);
    }
}
try {
    var mdlsrc = "";
    var loadPromise = new window.Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function () {
            var r = JSON.parse(this.responseText);
            window.mdldata = r;
            records = r.data;
            console.log("here data" + r.data.length);
            setTitleEtc(mdlsrc, r.modelDescription);
            window.makeElasticIndex(r.serIndex);
            console.log("parsed ok!");
            resolve(r);
        });
        var us = new URLSearchParams(window.location.search);
        if (us.has("data")) {
            var dataurl = us.get("data");
            loadPlainJSONEtc(resolve, reject, dataurl);
            return;
        }
        // plain json
        var jsonUrl = document.getElementById('container').getAttribute('data');
        // TODO get from search paramter ? 
        if (jsonUrl) {
            loadPlainJSONEtc(resolve, reject, jsonUrl);
            return;
        }
        var mdlsrc = document.getElementById('container').getAttribute('mdlsrc');
        if (mdlsrc) {
            oReq.open("GET", mdlsrc);
            oReq.send();
            return;
        }
        console.log("Unable to obtain model data");
    });
}
catch (e) {
    alert('this page requires a recent version of Microsoft Edge, Chrome, Safari or similar');
}
;
//types u = keyof IRecord;
var u = "appId";
/*
"appId",
            "AppKey",
            "AppName",
                "ApplicationComponent",
                "RoleName",
                "ApplicationType",
                "BSPName",
                "BSPApplicationURL",
                "releaseName",
                "BusinessCatalog",
*/
var XdefaultCols = ([
    'appId',
    "fiori intent",
    'AppName',
    'ApplicationComponent',
    "BSPName",
    "releaseName",
    "BusinessCatalog",
    /*
    "PrimaryODataServiceName",
    "SemanticAction",
    "SemanticObject",
    "ArtifactId",
    "BusinessRoleName",
    "BusinessGroupName",
    "BSPPackage",
    "RoleName", */
]);
var XallColumns = ((window.mdldata && window.mdldata.columns) || XdefaultCols);
function getURLColsFromURL(allColumns) {
    var m = /col(\d+(,\d+)*)/.exec(window.location.hash || "");
    var urlcols = ((m && m[1]) || "").split(",").map(function (s) { try {
        return parseInt(s);
    }
    catch (e) {
        return -1;
    } }).map(function (i) { return allColumns[i]; }).filter(function (c) { return !!c; });
    urlcols = urlcols.slice(0, 15);
    return urlcols;
}
var Xurlcols = getURLColsFromURL(XallColumns);
var Xcolumns = (Xurlcols.length && Xurlcols || XdefaultCols);
var XcolumnsDescription = (window.mdldata && window.mdldata.columnsDescription)
    || { "appId": "The name of the app" };
var XcolumnsDefaultWidth = (window.mdldata && window.mdldata.columnsDefaultWidth)
    || { "fiori intent": 180 };
function mergeDataRespose(state, mdlData) {
    var aState = Object.assign({}, state);
    aState.allColumns = mdlData.columns || XdefaultCols;
    var urlcols = getURLColsFromURL(aState.allColumns);
    aState.columns = (urlcols.length && urlcols || mdlData.defaultCols || mdlData.columns);
    aState.columnsDescription = mdlData.columnsDescription || { "appId": "The name of the app" };
    aState.columnsDefaultWidth = mdlData.columnsDefaultWidth || { "fiori intent": 180 };
    return aState;
}
/*
const columnsWidth = [
  { id : 'appId',
    width : 50} ,
  "fiori intent",
  'AppName',
  'ApplicationComponent',
                "BSPName",
                "releaseName",
                "BusinessCatalog"
] as typeof u[];
*/
/*
var columnLabels = {} as { [key: string]: string };
columns.forEach(function (col : string) {
  columnLabels[col] = col;
});
*/
var records = [{
        "fiori intent": "n/a",
        "appId": "F1766",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dddd66777",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dddd6ddddddddddddddddd6",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dd444444444dd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dddd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17d99966424353999dfasfasfdd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17d12342aaaa14413dddddd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17d999999dddbbbbb66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dd55rwr5555dd6aerwerewr6",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17d999911111222dd222299ddd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dddd3ssss4123424266",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17d999999ddadfffffffffffd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dddd624124126",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17d999999314234312ddd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dddqweqwerqwerqwqwd66",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17drrrrwetwertd777dd66yyy",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    },
    {
        "fiori intent": "n/a",
        "appId": "F17dd888qrwrrwer8d6ewerwer6",
        "AppName": "Special G/L Posting",
        "ApplicationComponent": "FI-FIO-AR",
    }
];
/*
      ts timestamp primary key,
          recordno int not null,
          generations int not null,
          botid varchar(10) not null,
          userid varchar(40) not null,
          message varchar(1024) not null,
          response varchar(1024) not null,
          action varchar(512) not null,
          intent varchar(20) not null,
          conversationid varchar(40) not null,
          delta int not null,
          status varchar(10) not null,
          meta json
*/
//records = (window as any).data || records;
records = [
    {
        "fiori intent": "loading...",
        "appId": "loading...",
    }
];
function produceSearchResult(state) {
    var u = window.elastic;
    if (state) {
        if (u) {
            var r = u.search(state);
            return r.map(function (o) {
                return parseInt(o.ref);
            });
        }
    }
    return records.map(function (r, index) { return index; });
}
/*
select a bunch of requested indices,
*/
function fetch(input) {
    return new window.Promise(function (resolve, reject) {
        setTimeout(function () {
            //console.log("search for: " + input);
            var indices = produceSearchResult(input);
            var recMap = [];
            var result = [];
            indices.forEach(function (i) {
                if (i >= 0) {
                    result.push({ i: i, data: records[i] });
                }
            });
            var res = {
                json: result,
                indexList: indices
            };
            resolve(res);
        }, 300);
    });
}
//================================================
var FakeObjectDataListStore = /** @class */ (function () {
    function FakeObjectDataListStore(/*number*/ size, records) {
        this.size = size || 0;
        this._cache = records || [];
        // this._cache = [];
    }
    FakeObjectDataListStore.prototype.createFakeRowObjectData = function (/*number*/ index) {
        var u = JSON.parse(JSON.stringify(records[index % 2]));
        u.appId = "aaa" + index;
        return u;
    };
    FakeObjectDataListStore.prototype.getObjectAt = function (/*number*/ index) {
        if (index < 0 || index > this.size) {
            return undefined;
        }
        if (this._cache[index] === undefined) {
            this._cache[index] = this.createFakeRowObjectData(index);
        }
        return this._cache[index];
    };
    /**
    * Populates the entire cache with data.
    * Use with Caution! Behaves slowly for large sizes
    * ex. 100,000 rows
    */
    FakeObjectDataListStore.prototype.getAll = function () {
        if (this._cache.length < this.size) {
            for (var i = 0; i < this.size; i++) {
                this.getObjectAt(i);
            }
        }
        return this._cache.slice();
    };
    FakeObjectDataListStore.prototype.getSize = function () {
        return this.size;
    };
    return FakeObjectDataListStore;
}());
var FixedDataTable = __webpack_require__(/*! fixed-data-table-2 */ "./node_modules/fixed-data-table-2/main.js");
var Table = FixedDataTable.Table, Column = FixedDataTable.Column, Cell = FixedDataTable.Cell;
var SortTypes = {
    ASC: 'ASC',
    DESC: 'DESC',
};
function reverseSortDirection(sortDir) {
    if (sortDir === SortTypes.ASC) {
        return SortTypes.DESC;
    }
    if (sortDir === SortTypes.DESC) {
        return "";
    }
    return SortTypes.ASC;
}
var SortHeaderCell = /** @class */ (function (_super) {
    __extends(SortHeaderCell, _super);
    //onSortChange? : any;
    //sortDir : any;
    //columnKey : any;
    function SortHeaderCell(props) {
        var _this = _super.call(this, props) || this;
        _this._onSortChange = _this._onSortChange.bind(_this);
        _this._onQBEChange = _this._onQBEChange.bind(_this);
        return _this;
    }
    SortHeaderCell.prototype.render = function () {
        var _this = this;
        var _a = this.props, sortDir = _a.sortDir, children = _a.children, qbe = _a.qbe, props = __rest(_a, ["sortDir", "children", "qbe"]);
        // {...props}>
        return (React.createElement(Cell, { title: this.props.title },
            React.createElement("a", { title: this.props.title, className: "qbeHeaderLink", onClick: this._onSortChange },
                children,
                " ",
                sortDir ? (sortDir === SortTypes.DESC ? '\u25BC' : '\u25B2') : ''),
            React.createElement("br", null),
            React.createElement("input", { className: "qbeHeaderInput", type: "text", placeholder: "query", style: { width: "100%" }, value: qbe, onChange: function (e) { return _this._onQBEChange(e.target.value); } })));
    };
    SortHeaderCell.prototype._onQBEChange = function (newQBE) {
        if (this.props.onQBEChange) {
            this.props.onQBEChange(this.props.columnKey, newQBE);
        }
    };
    SortHeaderCell.prototype._onSortChange = function (e) {
        e.preventDefault();
        if (this.props.onSortChange) {
            this.props.onSortChange(this.props.columnKey, this.props.sortDir ?
                reverseSortDirection(this.props.sortDir) :
                SortTypes.ASC);
        }
    };
    return SortHeaderCell;
}(React.Component));
var TextCell = function (_a) {
    var rowIndex = _a.rowIndex, data = _a.data, columnKey = _a.columnKey, props = __rest(_a, ["rowIndex", "data", "columnKey"]);
    return (React.createElement(Cell, __assign({ title: data.getObjectAt(rowIndex)[columnKey] }, props),
        React.createElement("div", { className: "qbeCellDiv", title: data.getObjectAt(rowIndex)[columnKey] },
            data.getObjectAt(rowIndex)[columnKey],
            " ")));
};
var DataListWrapper = /** @class */ (function () {
    function DataListWrapper(indexMap, data) {
        this._indexMap = indexMap || [];
        this._data = data;
    }
    DataListWrapper.prototype.getSize = function () {
        return this._indexMap.length;
    };
    DataListWrapper.prototype.getObjectAt = function (index) {
        return this._data.getObjectAt(this._indexMap[index]);
    };
    return DataListWrapper;
}());
var MyLinkCell = /** @class */ (function (_super) {
    __extends(MyLinkCell, _super);
    function MyLinkCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyLinkCell.prototype.render = function () {
        var _a = this.props, rowIndex = _a.rowIndex, field = _a.field, data = _a.data, label = _a.label, props = __rest(_a, ["rowIndex", "field", "data", "label"]);
        var record = data.getObjectAt(rowIndex);
        var cellurl = record[field];
        var celllabel = record[label];
        return (React.createElement(Cell, __assign({}, props),
            React.createElement("a", { className: "qbeLinkLink", href: cellurl, target: "_blank" },
                "\u263C ",
                celllabel)));
    };
    return MyLinkCell;
}(React.Component));
function getClientRect() {
    var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
    return { height: y, width: x };
}
;
var SortExample = /** @class */ (function (_super) {
    __extends(SortExample, _super);
    //  _dataList: any;
    //  state: any;
    function SortExample(props) {
        var _this = _super.call(this, props) || this;
        //console.log(' here props' + JSON.stringify(props.records))
        //  this._dataList = new FakeObjectDataListStore(20, props.records);
        ; //new FakeObjectDataListStore(2000);
        var size = 10; //this._dataList.getSize();
        /*    this.state = {
              sortedDataXList: this._dataList,
              colSortDirs: {}
            };
        */
        _this._onColumnResizeEndCallback = _this._onColumnResizeEndCallback.bind(_this);
        _this._onSortChange = _this._onSortChange.bind(_this);
        _this._onColumnQBEChange = _this._onColumnQBEChange.bind(_this);
        return _this;
    }
    ;
    SortExample.prototype._onColumnResizeEndCallback = function (newColumnWidth, columnKey) {
        this.props.dispatch(fireSetColumnWidth(columnKey, newColumnWidth));
    };
    SortExample.prototype._onColumnQBEChange = function (columnKey, newQBE) {
        this.props.dispatch(fireSetQBE(columnKey, newQBE));
    };
    SortExample.prototype._onClearAllQBEs = function () {
        this.props.dispatch(fireClearAllQBEs());
    };
    SortExample.prototype._onSortChange = function (columnKey, sortDir) {
        this.props.dispatch(fireSetSort(columnKey, sortDir));
    };
    SortExample.prototype.render = function () {
        // var { /*sortedDataList, sortIndexes,  colSortDirs*/} = this.state;
        var _this = this;
        var _dataList = new FakeObjectDataListStore(this.props.records && this.props.records.length, this.props.records);
        var colSortDirs = this.props.colSortDirs;
        var size = _dataList.getSize();
        var sortIndexes = this.props.sortIndexes || [];
        var sortIndexes = sortIndexes.slice(0, 18);
        var columnsDefaultWidth = this.props.columnsDefaultWidth;
        var columnsDescription = this.props.columnsDescription;
        var columns = this.props.columns;
        var columnsWidth = this.props.columnsWidth;
        this._onClearAllQBEs = this._onClearAllQBEs.bind(this);
        var sortedDataList = new DataListWrapper(sortIndexes, _dataList); //this._dataList),
        //console.log(' here props' + JSON.stringify(this.props))
        //console.log("here is the size " + sortedDataList.getSize());
        return (React.createElement(Table, __assign({ className: "qbeTable", rowHeight: 40, rowsCount: sortedDataList.getSize(), headerHeight: 60, onColumnResizeEndCallback: this._onColumnResizeEndCallback, isColumnResizing: false, width: getClientRect().width - 0, height: getClientRect().height - 130 }, this.props),
            React.createElement(Column, { header: React.createElement(Cell, null,
                    "link",
                    React.createElement("br", null),
                    React.createElement("button", { value: "avalue", title: "clear all Query fields ", className: "btnclearall btn btn-default btnclearall", onClick: this._onClearAllQBEs }, " clear all \u25B7"),
                    " "), cell: React.createElement(MyLinkCell, { data: sortedDataList, field: "uri", label: "AppKey" }), width: 120 }),
            columns.map(function (col) {
                return React.createElement(Column, { key: col, columnKey: col, width: columnsWidth[col] || columnsDefaultWidth[col] || 150, isResizable: true, minWidth: MINWIDTH, maxWidth: MAXWIDTH, header: React.createElement(SortHeaderCell, { title: columnsDescription[col] || col, onSortChange: _this._onSortChange, qbe: _this.props.columnsQBEs[col] || "", onQBEChange: _this._onColumnQBEChange, sortDir: colSortDirs[col] }, col), cell: React.createElement(TextCell, { data: sortedDataList }) });
            })));
    };
    return SortExample;
}(React.Component));
function keyToIndex(key, columns) {
    return columns.indexOf(key);
}
function updateHash(a) {
    var hsh = "";
    if (a.columns) {
        hsh += "/col" + a.columns.map(function (key) {
            var i = keyToIndex(key, a.allColumns);
            return "" + i;
        }).join(",");
    }
    hsh += "/w";
    var width = getClientRect().width;
    hsh += Object.keys(a.columnsWidth).map(function (key) {
        var i = keyToIndex(key, a.allColumns);
        return i + "=" + (100 * a.columnsWidth[key] / width).toFixed(1);
    }).join("&");
    hsh += "/q";
    hsh += Object.keys(a.columnsQBE).map(function (key) {
        var i = keyToIndex(key, a.allColumns);
        return i + "=" + encodeURIComponent(a.columnsQBE[key]);
    }).join("&");
    hsh += "/s" + encodeURIComponent(a.searchStr) + "/";
    hsh += "/o";
    hsh += Object.keys(a.colSortDirs).map(function (key) {
        var i = keyToIndex(key, a.allColumns);
        return i + "=" + encodeURIComponent(a.colSortDirs[key]);
    }).join("&");
    window.location.hash = hsh;
    return a;
}
//==============================================
//https://gist.github.com/gaearon/074b0905337a6a835d82
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
;
;
;
;
;
;
function getInitialState() {
    var aState = {
        clientRect: getClientRect(),
        allLoadedRecs: [], indexList: [],
        allColumns: [],
        columnsDefaultWidth: {},
        columnsDescription: {},
        columns: [],
        colSortDirs: {},
        columnsQBE: {},
        sortIndexes: [],
        init: false,
        indexListQBEFiltered: [],
        indexListSearchFiltered: [],
        columnsWidth: {},
        searchStr: ""
    };
    /*
    aState = mergeDataRespose(aState,(window as any).mdldata);
    parseAndApplyHash(aState);*/
    return aState;
}
function parseAndApplyHash(aState) {
    var hash = window.location.hash;
    var args = hash.split('/');
    var newColumnIdxs = [];
    args.forEach(function (o) {
        if (o.startsWith("col")) {
            var cols = o.substring(3).split(',');
            try {
                newColumnIdxs = cols.map(function (k) { return parseInt(k); });
                newColumnIdxs = newColumnIdxs.filter(function (i) { return (i >= 0) && (i < aState.allColumns.length); });
            }
            catch (e) {
                console.log('error parsing col hash, expect col1,3,2,1' + o);
            }
        }
        if (o.charAt(0) === 'w') {
            var cols = o.substring(1).split('&');
            cols.forEach(function (col) {
                var res = col.split("=");
                try {
                    var c = aState.allColumns[parseInt(res[0])];
                    if (c) {
                        var val = Math.min(MAXWIDTH, Math.max(MINWIDTH, Math.round(aState.clientRect.width * parseFloat(res[1]) / 100)));
                        if (typeof val === "number" && val !== NaN) {
                            aState.columnsWidth[c] = val;
                        }
                    }
                }
                catch (e) {
                    console.log(" error parsing /w " + o + " (" + e + ")");
                }
            });
        }
        if (o.charAt(0) === 's') {
            aState.searchStr = decodeURIComponent(o.substring(1));
        }
        if (o.charAt(0) === 'q') {
            var cols = o.substring(1).split('&');
            cols.forEach(function (col) {
                var res = col.split("=");
                try {
                    var column = parseInt(res[0]);
                    if (typeof column === "number" && aState.allColumns[column] && res[1]) {
                        aState.columnsQBE[aState.columns[column]] = decodeURIComponent(res[1]);
                    }
                }
                catch (e) {
                    console.log(" error parsing /q " + o + " (" + e + ")");
                }
            });
        }
        if (o.charAt(0) === 'o') {
            var cols = o.substring(1).split('&');
            cols.forEach(function (col) {
                var res = col.split("=");
                try {
                    var column = parseInt(res[0]);
                    if (typeof column === "number" && aState.allColumns[column] && ((res[1] === "ASC" || res[1] === "DESC"))) {
                        aState.colSortDirs[aState.columns[column]] = decodeURIComponent(res[1]);
                    }
                }
                catch (e) {
                    console.log(" error parsing /o " + o + " (" + e + ")");
                }
            });
        }
    });
    newColumnIdxs = newColumnIdxs.filter(function (i) { return (i >= 0) && (i < aState.allColumns.length); });
    if (newColumnIdxs.length == 0) {
        newColumnIdxs = getSetIndices();
        newColumnIdxs = newColumnIdxs.filter(function (i) { return (i >= 0) && (i < aState.allColumns.length); });
    }
    aState.columns = newColumnIdxs.map(function (i) { return aState.allColumns[i]; });
    return aState;
}
function navigateReloading(url) {
    window.document.location.assign(url);
    window.location.reload(url);
    window.location.href = url;
    setTimeout(function () { window.location.href = url; }, 0);
    setTimeout(function () { window.location.href = url; window.location.reload(); }, 0);
}
// this puts columns exclusivly in the hash, not the search
// as /col1,2,3/
function reStart(newColumns) {
    var s = window.location.toString();
    var indexStr = newColumns.join(',');
    var sprior = s;
    /*
    s = s.replace(/\?c\d+(,\d+)*#/,"?c" + indexStr + "#").replace(/\/s[^\/]+/,"");
    s = s.replace(/\?c\d+(,\d+)*#/,"?c" + indexStr + "#").replace(/\/s[^\/]+/,"");
    */
    s = s.replace(/\/col\d+(,\d+)*\//, "/col" + indexStr + "/");
    if (s == sprior) {
        window.location.hash = window.location.hash + "/col" + indexStr + "/";
        navigateReloading(window.location.toString());
        return;
    }
    window.location.href = s;
    navigateReloading(window.location.toString());
}
/**
 * Function creating a vector of n dimensions and filling it with a single
 * value if required.
 *
 * @param  {number} n    - Dimensions of the vector to create.
 * @param  {mixed}  fill - Value to be used to fill the vector.
 * @return {array}       - The resulting vector.
 */
function vec(n, fill) {
    var vector = new Array(n);
    if (arguments.length > 1) {
        for (var i = 0; i < n; i++)
            vector[i] = fill;
    }
    return vector;
}
/**
 * Function returning the Jaro score between two sequences.
 *
 * @param  {mixed}  a     - The first sequence.
 * @param  {mixed}  b     - The second sequence.
 * @return {number}       - The Jaro score between a & b.
 */
function jaro(a, b) {
    // Fast break
    if (a === b)
        return 1;
    var max, min;
    if (a.length > b.length) {
        max = a;
        min = b;
    }
    else {
        max = b;
        min = a;
    }
    // Finding matches
    var range = Math.max(((max.length / 2) | 0) - 1, 0), indexes = vec(min.length, -1), flags = vec(max.length, false);
    var matches = 0;
    for (var i = 0, l = min.length; i < l; i++) {
        var character = min[i], xi = Math.max(i - range, 0), xn = Math.min(i + range + 1, max.length);
        for (var j = xi, m_1 = xn; j < m_1; j++) {
            if (!flags[j] && character === max[j]) {
                indexes[i] = j;
                flags[j] = true;
                matches++;
                break;
            }
        }
    }
    var ms1 = new Array(matches), ms2 = new Array(matches);
    var si;
    si = 0;
    for (var i = 0, l = min.length; i < l; i++) {
        if (indexes[i] !== -1) {
            ms1[si] = min[i];
            si++;
        }
    }
    si = 0;
    for (var i = 0, l = max.length; i < l; i++) {
        if (flags[i]) {
            ms2[si] = max[i];
            si++;
        }
    }
    var transpositions = 0;
    for (var i = 0, l = ms1.length; i < l; i++) {
        if (ms1[i] !== ms2[i])
            transpositions++;
    }
    // Computing the distance
    if (!matches)
        return 0;
    var t = (transpositions / 2) | 0, m = matches;
    return ((m / a.length) + (m / b.length) + ((m - t) / m)) / 3;
}
function findCol(str, columns) {
    var bestCol = undefined;
    var bestRank = 0.0;
    columns.forEach(function (col) {
        var rank = jaro(str, col.toLowerCase());
        if (rank > 0.88 && rank > bestRank) {
            bestCol = col;
            bestRank = rank;
        }
    });
    return bestCol;
}
function processColumnOp(a, state) {
    a = a.toLowerCase();
    var regex = /^((add)|(delete)|(del)) (column )?(.*)/;
    var m = regex.exec(a);
    if (!m) {
        return false;
    }
    var op = m[1];
    var colstr = m[6];
    console.log("col : " + col);
    var col = findCol(colstr, state.allColumns);
    var newColumns = [];
    if (col) {
        if ((op === "delete" || op === "del") && state.columns.indexOf(col) >= 0) {
            newColumns = state.columns.filter(function (co) { return co !== col; });
        }
        else if (op === "add" && state.columns.indexOf(col) < 0) {
            newColumns = state.columns;
            newColumns.push(col);
        }
        else {
            return false;
        }
        reStart(newColumns.map(function (co) { return state.allColumns.indexOf(co); }));
        return true;
    }
    return false;
}
// ------------
// reducers
// ------------
function state(state, action) {
    if (state === void 0) { state = getInitialState(); }
    switch (action.type) {
        case 'Setstate':
            //state.searchStr = action.searchStr;
            var a = Object.assign({}, state);
            var actionSetstate = action;
            if (processColumnOp(a.searchStr, state)) {
                return a;
            }
            a.searchStr = actionSetstate.searchStr;
            //console.log("Here select sarch state " + JSON.stringify(state));
            updateHash(a);
            return a; // action.searchStr;
        case 'ReceivePosts':
            var a = Object.assign({}, state); // copy of state!
            a.init = true;
            var actionReceivePosts = action;
            a.indexListSearchFiltered = [];
            actionReceivePosts.posts.forEach(function (p) {
                a.allLoadedRecs[p.i] = p.data;
                a.indexListSearchFiltered.push(p.i);
            });
            a.indexListSearchFiltered = actionReceivePosts.indexListSearchFiltered;
            a = applyQBE(a);
            return reSortAgain(a);
        //a[action.searchStr] = action.posts.map(p => p.data);
        // {
        //  ...state,
        //  [action.searchStr]: action.posts
        //}
        //console.log("procudes state on RECEIVE_POSTS " + JSON.stringify(a));
        case 'Resized': {
            var a = Object.assign({}, state);
            a.clientRect = getClientRect();
            return a;
        }
        case 'SetColumnSort': {
            var a = Object.assign({}, state);
            var actionSort = action;
            var a = applySort(a, actionSort.columnKey, actionSort.sortDir);
            updateHash(a);
            return a;
        }
        case 'SetColumnWidth': {
            var a = Object.assign({}, state);
            var actionSetWidth = action;
            a.columnsWidth = Object.assign({}, state.columnsWidth);
            a.columnsWidth[actionSetWidth.columnKey] = actionSetWidth.newColumnWidth;
            updateHash(a);
            return a;
        }
        case 'ClearAllQBEs': {
            var a = Object.assign({}, state);
            a.columnsQBE = {};
            updateHash(a);
            return applyQBE(a);
        }
        case 'GotData': {
            a.init = true;
            var actionGotData = action;
            a = mergeDataRespose(a, actionGotData.mdlData);
            a = parseAndApplyHash(a);
            console.log(' Got Data ' + JSON.stringify(a.columnsQBE) + JSON.stringify(a, undefined, 2));
            setTimeout(function () { fetchPosts(a); }, 0);
            return applyQBE(a);
        }
        case 'SetColumnQBE': {
            var a = Object.assign({}, state);
            var actionSetColumnQBE = action;
            a.columnsQBE = Object.assign({}, state.columnsQBE);
            a.columnsQBE[actionSetColumnQBE.columnKey] = actionSetColumnQBE.newQBE;
            updateHash(a);
            return applyQBE(a);
        }
        default:
            //console.log("return default state " + JSON.stringify(a));
            return state;
    }
}
function applySort(a, columnKey, sortDir) {
    var _a;
    a.colSortDirs = (_a = {}, _a[columnKey] = sortDir, _a);
    reSortAgain(a);
    //console.log("return default state on  " + JSON.stringify(a));
    return a;
}
function reSortAgain(a) {
    var sortIndexes = a.indexListQBEFiltered.slice(); // relevant indexes
    Object.keys(a.colSortDirs).forEach(function (columnKey) {
        var sortDir = a.colSortDirs[columnKey];
        if (sortDir === "") {
            sortIndexes.sort();
        }
        else {
            sortIndexes.sort(function (indexA, indexB) {
                var recA = a.allLoadedRecs[indexA];
                var recB = a.allLoadedRecs[indexA];
                var valueA = a.allLoadedRecs[indexA][columnKey];
                var valueB = a.allLoadedRecs[indexB][columnKey];
                var sortVal = 0;
                if (valueA > valueB) {
                    sortVal = 1;
                }
                if (valueA < valueB) {
                    sortVal = -1;
                }
                if (sortVal !== 0 && sortDir === SortTypes.DESC) {
                    sortVal = sortVal * -1;
                }
                return sortVal;
            });
        }
    });
    a.sortIndexes = sortIndexes;
    return a;
}
function applyQBE(a) {
    a.indexListQBEFiltered = Object.keys(a.columnsQBE).reduce(function (prev, qbecol) {
        var val = a.columnsQBE[qbecol];
        if (!val) {
            return prev;
        }
        val = val.toLowerCase();
        return prev.filter(function (index) {
            return a.allLoadedRecs[index][qbecol] && (a.allLoadedRecs[index][qbecol].toLowerCase().indexOf(val) >= 0);
        });
    }, a.indexListSearchFiltered);
    return reSortAgain(a);
}
// --------------
// action creators
// --------------
function fireSetstate(searchStr) {
    return {
        type: 'Setstate',
        searchStr: searchStr
    };
}
function fireOnResize() {
    return {
        type: 'Resized'
    };
}
function fireSetSort(columnKey, sortDir) {
    return {
        type: 'SetColumnSort',
        columnKey: columnKey,
        sortDir: sortDir
    };
}
function fireSetColumnWidth(columnKey, newColumnWidth) {
    return {
        type: 'SetColumnWidth',
        columnKey: columnKey,
        newColumnWidth: newColumnWidth
    };
}
function fireSetQBE(columnKey, newQBE) {
    return {
        type: 'SetColumnQBE',
        columnKey: columnKey,
        newQBE: newQBE
    };
}
function fireClearAllQBEs() {
    return {
        type: 'ClearAllQBEs'
    };
}
function fireGotData(mdlData) {
    return {
        type: 'GotData',
        mdlData: mdlData
    };
}
function onGotData(dispatch, mdlData) {
    dispatch(fireGotData(mdlData));
}
function fireReceivePosts(searchStr, dataread, indexList) {
    return {
        type: 'ReceivePosts',
        searchStr: searchStr,
        posts: dataread,
        indexListSearchFiltered: indexList
    };
}
function fetchPosts(state) {
    return function (dispatch) {
        var toIndices = fetch("" + state.searchStr)
            .then(function (req) { return { json: req.json, indexList: req.indexList }; })
            .then(function (res) {
            console.log("fetch posts ...");
            return dispatch(fireReceivePosts(state.searchStr, res.json, res.indexList));
        });
        return { thehandle: 1 };
    };
}
function fetchPostsIfNeeded(searchStr, force) {
    return function (dispatch, getState) {
        {
            if (force || !getState().state.init) {
                return dispatch(fetchPosts(searchStr));
            }
        }
    };
}
// ------------
// app
// ------------
function logger(a /*{ getState }*/) {
    // next => action =>
    //
    //
    var getState = a.getState;
    return function (next) {
        return function (action) {
            //console.info('dispatching', action);
            var result = next(action);
            //console.log('state after', getState());
            return result;
        };
    };
}
//const createStoreWithMiddleware = createStore);
var createStoreWithMiddleware = redux_1.applyMiddleware(redux_thunk_1.default, logger)(redux_1.createStore);
var reducer = redux_1.combineReducers({ state: state }); //, postsBysearchStr });
var store = createStoreWithMiddleware(reducer);
//ithMiddleware(reducer);
function fetchDataForMyApp(props, force) {
    var state = props.state;
    return fetchPostsIfNeeded(state, force);
}
function registerCallback(dispatch) {
    loadPromise.then(function (r) {
        dispatch(fireGotData(r));
    });
}
//@provide(store)
//@connect(state => state)
var MyApp = /** @class */ (function (_super) {
    __extends(MyApp, _super);
    function MyApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //  Component<AppProps, undefined> {
    MyApp.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        console.log("componentDisMount");
        registerCallback(dispatch);
        dispatch(fetchDataForMyApp(this.props));
    };
    MyApp.prototype.componentWillReceiveProps = function (nextProps) {
        var dispatch = this.props.dispatch;
        if (nextProps.state.searchStr !== this.props.state.searchStr) {
            dispatch(fetchDataForMyApp(nextProps, true));
        }
    };
    MyApp.prototype.handleChange = function (nextsearchStr) {
        this.props.dispatch(fireSetstate(nextsearchStr));
    };
    MyApp.prototype.render = function () {
        var that = this;
        var _a = this.props, state = _a.state, dispatch = _a.dispatch;
        var posts = state.allLoadedRecs || []; //searchStr[state];
        var sortIndexes = state.sortIndexes || [];
        var colSortDirs = state.colSortDirs || {};
        var searchStr = state.searchStr || "";
        //console.log(" render main component" + JSON.stringify(this.props));
        var fn = function () {
            dispatch(fireOnResize());
        };
        window.onresize = fn;
        return (React.createElement("div", null,
            React.createElement(Picker, { value: searchStr, onChange: this.handleChange.bind(that) }),
            React.createElement(SortExample, { records: posts, columns: this.props.state.columns, columnsDefaultWidth: this.props.state.columnsDefaultWidth, columnsDescription: this.props.state.columnsDescription, columnsQBEs: this.props.state.columnsQBE, columnsWidth: this.props.state.columnsWidth, colSortDirs: colSortDirs, sortIndexes: sortIndexes, dispatch: dispatch })));
    };
    return MyApp;
}(react_1.Component));
var Picker = /** @class */ (function (_super) {
    __extends(Picker, _super);
    function Picker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Picker.prototype.render = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        return (React.createElement("header", { className: "qbeHeaderFuzzy" },
            "search:",
            React.createElement("input", { className: "searchInput", type: "text", placeholder: "search indexed word or \"add/delete column <columnname>\"", style: { width: "80%", textAlign: "left" }, onChange: function (e) { return onChange(e.target.value); }, value: value })));
    };
    return Picker;
}(react_1.Component));
;
function pluck(o, name) {
    return o[name];
}
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        var _this = this;
        return (React.createElement("tr", { key: this.props.record.appId }, this.props.columns.map(function (col) {
            return React.createElement("td", { key: _this.props.record.appId + ' ' + col }, pluck(_this.props.record, col));
        })));
    };
    return Line;
}(react_1.Component));
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Post = react_redux_1.connect(mapState)(MyApp);
var MYApp = react_redux_1.connect(mapState)(MyApp);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(MYApp, null)), document.getElementById('container'));
function mapState(state) {
    return state;
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/web/qbetable.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=qbetable.js.map