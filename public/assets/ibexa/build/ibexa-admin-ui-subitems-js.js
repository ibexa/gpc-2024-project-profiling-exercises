"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-subitems-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCssClassNames: () => (/* binding */ createCssClassNames)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }
  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      condition = _ref2[1];
    if (condition) {
      return "".concat(total, " ").concat(name);
    }
    return total;
  }, '').trim();
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var deepClone = function deepClone(data) {
  var clonedData;
  if (_typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return data;
  }
  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];
    for (var i = 0; i < data.length; i++) {
      clonedData[i] = deepClone(data[i]);
    }
    return clonedData;
  }
  clonedData = {};
  for (var _i in data) {
    if (Object.prototype.hasOwnProperty.call(data, _i)) {
      clonedData[_i] = deepClone(data[_i]);
    }
  }
  return clonedData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepClone);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBasicRequestInit: () => (/* binding */ getBasicRequestInit),
/* harmony export */   handleRequestError: () => (/* binding */ handleRequestError),
/* harmony export */   handleRequestResponse: () => (/* binding */ handleRequestResponse),
/* harmony export */   handleRequestResponseStatus: () => (/* binding */ handleRequestResponseStatus)
/* harmony export */ });
/**
 * Returns basic RequestInit object for Request
 *
 * @function getBasicRequestInit
 * @param {Object} restInfo REST config hash containing: token and siteaccess properties
 * @returns {RequestInit}
 */
var getBasicRequestInit = function getBasicRequestInit(_ref) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess;
  return {
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  };
};

/**
 * Handles request error
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Response}
 */
var handleRequestError = function handleRequestError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Error|Promise}
 */
var handleRequestResponse = function handleRequestResponse(response) {
  return handleRequestError(response).json();
};

/**
 * Handles request response; returns status if response is OK
 *
 * @function handleRequestResponseStatus
 * @param {Response} response
 * @returns {number}
 */
var handleRequestResponseStatus = function handleRequestResponseStatus(response) {
  return handleRequestError(response).status;
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var Icon = function Icon(props) {
  var linkHref = props.customPath ? props.customPath : window.ibexa.helpers.icon.getIconPath(props.name);
  var className = 'ibexa-icon';
  if (props.extraClasses) {
    className = "".concat(className, " ").concat(props.extraClasses);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: linkHref
  }));
};
Icon.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var PaginationButton = function PaginationButton(_ref) {
  var label = _ref.label,
    disabled = _ref.disabled,
    additionalClasses = _ref.additionalClasses,
    buttonAdditionalClasses = _ref.buttonAdditionalClasses,
    onPageChange = _ref.onPageChange,
    pageIndex = _ref.pageIndex;
  var handleClick = function handleClick() {
    if (!disabled && Number.isInteger(pageIndex)) {
      onPageChange(pageIndex);
    }
  };
  var className = "c-pagination-button page-item ".concat(additionalClasses);
  className = disabled ? "".concat(className, " disabled") : className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "page-link ".concat(buttonAdditionalClasses),
    onClick: handleClick,
    type: "button"
  }, label));
};
PaginationButton.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  pageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  additionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  buttonAdditionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
PaginationButton.defaultProps = {
  disabled: false,
  additionalClasses: '',
  buttonAdditionalClasses: '',
  onPageChange: function onPageChange() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagination_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.button */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js");



var DOTS = '...';
var _window = window,
  ibexa = _window.ibexa;
var Pagination = function Pagination(_ref) {
  var totalCount = _ref.totalCount,
    itemsPerPage = _ref.itemsPerPage,
    proximity = _ref.proximity,
    activePageIndex = _ref.activePageIndex,
    onPageChange = _ref.onPageChange,
    paginationDisabled = _ref.disabled;
  var pagesCount = Math.ceil(totalCount / itemsPerPage);
  if (pagesCount <= 1) {
    return null;
  }
  var previousPage = activePageIndex - 1;
  var nextPage = activePageIndex + 1;
  var isFirstPage = activePageIndex === 0;
  var isLastPage = activePageIndex + 1 === pagesCount;
  var pages = ibexa.helpers.pagination.computePages({
    proximity: proximity,
    activePageIndex: activePageIndex,
    pagesCount: pagesCount,
    separator: DOTS
  });
  var paginationButtons = pages.map(function (page, index) {
    if (page === DOTS) {
      var key = "dots-".concat(index);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key,
        label: DOTS,
        disabled: true
      });
    }
    var isCurrentPage = page === activePageIndex + 1;
    var additionalClasses = isCurrentPage ? 'active' : '';
    var label = "".concat(page);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: page,
      pageIndex: page - 1,
      label: label,
      additionalClasses: additionalClasses,
      onPageChange: onPageChange,
      disabled: paginationDisabled
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-pagination pagination ibexa-pagination__navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageIndex: previousPage,
    additionalClasses: "prev",
    disabled: isFirstPage || paginationDisabled,
    onPageChange: onPageChange
  }), paginationButtons, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageIndex: nextPage,
    additionalClasses: "next",
    disabled: isLastPage || paginationDisabled,
    onPageChange: onPageChange
  }));
};
Pagination.propTypes = {
  proximity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  activePageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  totalCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _window = window,
  Translator = _window.Translator;
var CLASS_NON_SCROLLABLE = 'ibexa-non-scrollable';
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};
var MODAL_SIZE_CLASS = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg'
};
var Popup = /*#__PURE__*/function (_Component) {
  _inherits(Popup, _Component);
  var _super = _createSuper(Popup);
  function Popup(props) {
    var _this;
    _classCallCheck(this, Popup);
    _this = _super.call(this, props);
    _this._refModal = null;
    _this.setModalRef = _this.setModalRef.bind(_assertThisInitialized(_this));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_this));
    _this.state = {
      currentProps: {
        isVisible: props.isVisible,
        isLoading: props.isLoading
      },
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    return _this;
  }
  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        noKeyboard = _this$props.noKeyboard,
        hasFocus = _this$props.hasFocus;
      var show = this.state.isVisible;
      if (show) {
        var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
          keyboard: !noKeyboard,
          focus: hasFocus
        }));
        bootstrapModal.show();
        this.attachModalEventHandlers();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var show = this.state.isVisible;
      var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
        focus: this.props.hasFocus
      }));
      if (show) {
        bootstrapModal.show();
        this.attachModalEventHandlers();
      } else {
        bootstrapModal.hide();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.bootstrap.Modal.getOrCreateInstance(this._refModal).hide();
      document.body.classList.remove(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
    }
  }, {
    key: "attachModalEventHandlers",
    value: function attachModalEventHandlers() {
      this._refModal.addEventListener('keyup', this.onKeyUp);
      this._refModal.addEventListener('hidden.bs.modal', this.props.onClose);
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var originalEvent = event.originalEvent;
      var escKeyCode = 27;
      var escKeyPressed = originalEvent && (originalEvent.which === escKeyCode || originalEvent.keyCode === escKeyCode);
      if (escKeyPressed) {
        this.props.onClose();
      }
    }
  }, {
    key: "setModalRef",
    value: function setModalRef(component) {
      this._refModal = component;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'modal-header c-popup__header'
      }, this.renderHeadline(), this.renderCloseButton());
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      if (this.props.noCloseBtn) {
        return;
      }
      var closeBtnLabel = Translator.trans( /*@Desc("Close")*/'popup.close.label', {}, 'universal_discovery_widget');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "close c-popup__btn--close",
        "data-bs-dismiss": "modal",
        "aria-label": closeBtnLabel,
        onClick: this.props.onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "discard",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "renderHeadline",
    value: function renderHeadline() {
      var title = this.props.title;
      if (!title) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "modal-title c-popup__headline",
        title: this.props.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-popup__title"
      }, this.props.title), this.renderSubtitle());
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var subtitle = this.props.subtitle;
      if (!subtitle) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-popup__subtitle"
      }, subtitle);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var footerChildren = this.props.footerChildren;
      if (!footerChildren) {
        return;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'modal-footer c-popup__footer'
      }, footerChildren);
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      var _this$props2 = this.props,
        additionalClasses = _this$props2.additionalClasses,
        size = _this$props2.size,
        noHeader = _this$props2.noHeader,
        extraClasses = _this$props2.extraClasses;
      var modalAttrs = {
        className: "c-popup modal fade ".concat(extraClasses),
        ref: this.setModalRef,
        tabIndex: this.props.hasFocus ? -1 : undefined
      };
      document.body.classList.toggle(CLASS_MODAL_OPEN, isVisible);
      document.body.classList.toggle(CLASS_NON_SCROLLABLE, isVisible);
      if (additionalClasses) {
        modalAttrs.className = "".concat(modalAttrs.className, " ").concat(additionalClasses);
      }
      if (noHeader) {
        modalAttrs.className = "".concat(modalAttrs.className, " c-popup--no-header");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", modalAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-dialog c-popup__dialog ".concat(MODAL_SIZE_CLASS[size]),
        role: "dialog"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-content c-popup__content"
      }, noHeader ? this.renderCloseButton() : this.renderHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-body c-popup__body"
      }, this.props.children), this.renderFooter())));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isVisible !== prevState.currentProps.isVisible || nextProps.isLoading !== prevState.currentProps.isLoading) {
        return {
          currentProps: {
            isVisible: nextProps.isVisible,
            isLoading: nextProps.isLoading
          },
          isVisible: nextProps.isVisible,
          isLoading: nextProps.isLoading
        };
      }
      return null;
    }
  }]);
  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Popup.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  additionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  footerChildren: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  noHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noKeyboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Popup.defaultProps = {
  isVisible: false,
  isLoading: true,
  hasFocus: true,
  size: 'large',
  noHeader: false,
  noCloseBtn: false,
  noKeyboard: false,
  extraClasses: '',
  title: null,
  subtitle: null,
  additionalClasses: null,
  footerChildren: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SimpleDropdown = function SimpleDropdown(_ref) {
  var options = _ref.options,
    selectedOption = _ref.selectedOption,
    extraClasses = _ref.extraClasses,
    onOptionClick = _ref.onOptionClick,
    isDisabled = _ref.isDisabled,
    selectedItemLabel = _ref.selectedItemLabel,
    isSwitcher = _ref.isSwitcher;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var dropdownClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-simple-dropdown': true,
    'c-simple-dropdown--expanded': isExpanded,
    'c-simple-dropdown--disabled': isDisabled,
    'c-simple-dropdown--switcher': isSwitcher
  }, extraClasses, true));
  var toggleExpanded = function toggleExpanded() {
    if (isDisabled) {
      return;
    }
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  };
  var onOptionClickWrapper = function onOptionClickWrapper(option) {
    onOptionClick(option);
    setIsExpanded(false);
  };
  var renderItem = function renderItem(item) {
    var isItemSelected = item.value === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
    var itemClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-simple-dropdown__list-item': true,
      'c-simple-dropdown__list-item--selected': isItemSelected
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.value,
      className: itemClass,
      onClick: function onClick() {
        return onOptionClickWrapper(item);
      }
    }, item.iconName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: item.iconName,
      extraClasses: "c-simple-dropdown__list-item-type-icon ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.label), isItemSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__list-item-checkmark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "checkmark",
      extraClasses: "c-simple-dropdown__list-item-checkmark-icon ibexa-icon--tiny-small"
    })));
  };
  var renderCaretIcon = function renderCaretIcon() {
    var iconName = isExpanded ? 'caret-up' : 'caret-down';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: "ibexa-icon--tiny-small c-simple-dropdown__expand-icon"
    });
  };
  var renderSelectedLabel = function renderSelectedLabel() {
    if (!selectedOption && !!selectedItemLabel) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-simple-dropdown__selected-item-label"
    }, selectedItemLabel.length ? selectedItemLabel : selectedOption.label);
  };
  var renderSelectedIcon = function renderSelectedIcon() {
    if (!selectedOption || !selectedOption.iconName) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: selectedOption.iconName,
      extraClasses: "ibexa-icon--small c-simple-dropdown__selected-item-type-icon"
    });
  };
  var renderSelectedItem = function renderSelectedItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__selected",
      onClick: toggleExpanded
    }, renderSelectedIcon(), renderSelectedLabel(), renderCaretIcon());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpanded) {
      return;
    }
    var onInteractionOutside = function onInteractionOutside(event) {
      if (containerRef.current.contains(event.target)) {
        return;
      }
      setIsExpanded(false);
    };
    document.body.addEventListener('click', onInteractionOutside, false);
    return function () {
      document.body.removeEventListener('click', onInteractionOutside, false);
    };
  }, [isExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: dropdownClass,
    ref: containerRef
  }, renderSelectedItem(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-simple-dropdown__items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-simple-dropdown__list-items"
  }, options.map(renderItem))));
};
SimpleDropdown.propTypes = {
  options: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  selectedOption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onOptionClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectedItemLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isSwitcher: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
SimpleDropdown.defaultProps = {
  isDisabled: false,
  extraClasses: '',
  selectedItemLabel: '',
  isSwitcher: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDropdown);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/action-btn/action.btn.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/action-btn/action.btn.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var ActionButton = function ActionButton(props) {
  var disabled = props.disabled,
    onClick = props.onClick,
    label = props.label,
    title = props.title,
    type = props.type;
  var handleClick = function handleClick() {
    if (!disabled) {
      onClick();
    }
  };
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-action-btn': true,
    'btn ibexa-btn': true,
    'ibexa-btn--ghost': true,
    'ibexa-btn--no-text': !label
  }, "c-action-btn--".concat(type), !!type));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: className,
    title: title,
    onClick: handleClick,
    disabled: disabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: type,
    extraClasses: "ibexa-icon--small"
  }), " ", label);
};
ActionButton.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
ActionButton.defaultProps = {
  label: null,
  title: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/grid-view/grid.view.component.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/grid-view/grid.view.component.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid_view_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.view.item.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/grid-view/grid.view.item.component.js");



var GridViewComponent = function GridViewComponent(_ref) {
  var items = _ref.items,
    generateLink = _ref.generateLink;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view"
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_view_item_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      generateLink: generateLink
    });
  }));
};
GridViewComponent.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  generateLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
GridViewComponent.defaultProps = {
  items: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridViewComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/grid-view/grid.view.item.component.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/grid-view/grid.view.item.component.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var _window = window,
  ibexa = _window.ibexa;
var GridViewItemComponent = function GridViewItemComponent(_ref) {
  var item = _ref.item,
    generateLink = _ref.generateLink;
  var locationId = item.id,
    content = item.content;
  var imageClassName = 'ibexa-grid-view-item__image';
  var contentTypeIdentifier = content._info.contentType.identifier;
  var contentTypeIconUrl = ibexa.helpers.contentType.getContentTypeIconUrl(contentTypeIdentifier);
  var image = null;
  var contentTypeIcon = null;
  if (content._thumbnail === null || content._thumbnail.mimeType === 'image/svg+xml') {
    image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(imageClassName, " ").concat(imageClassName, "--none")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      customPath: contentTypeIconUrl,
      extraClasses: "ibexa-icon--extra-large"
    }));
  } else {
    var _content$_thumbnail = content._thumbnail,
      uri = _content$_thumbnail.uri,
      alternativeText = _content$_thumbnail.alternativeText;
    image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: imageClassName,
      src: uri,
      alt: alternativeText
    });
    contentTypeIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-grid-view-item__content-type"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      customPath: contentTypeIconUrl,
      extraClasses: "ibexa-icon--small"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "ibexa-grid-view-item",
    href: generateLink(locationId, content._info.id)
  }, contentTypeIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view-item__image-wrapper"
  }, image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view-item__title-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view-item__title",
    title: content._name
  }, content._name)));
};
GridViewItemComponent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  generateLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridViewItemComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/no-items/no.items.component.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/no-items/no.items.component.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NoItemsComponent = function NoItemsComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "ibexa-table table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: "ibexa-table__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "ibexa-table__empty-table-cell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "ibexa-table__empty-table-image",
    src: "/bundles/ibexaadminui/img/ibexa-empty-table.svg"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoItemsComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/instant.filter.component.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/instant.filter.component.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _window = window,
  Translator = _window.Translator;
var FILTER_TIMEOUT = 200;
var InstantFilter = function InstantFilter(props) {
  var _refInstantFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    filterQuery = _useState2[0],
    setFilterQuery = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    itemsMap = _useState4[0],
    setItemsMap = _useState4[1];
  var filterTimeout = null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var items = _toConsumableArray(_refInstantFilter.current.querySelectorAll('.ibexa-instant-filter__item'));
    var itemsMapNext = items.map(function (item) {
      return {
        label: item.textContent.toLowerCase(),
        element: item
      };
    });
    setItemsMap(itemsMapNext);
  }, [props.items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var filterQueryLowerCase = filterQuery.toLowerCase();
    filterTimeout = window.setTimeout(function () {
      itemsMap.forEach(function (item) {
        var methodName = item.label.includes(filterQueryLowerCase) ? 'removeAttribute' : 'setAttribute';
        item.element[methodName]('hidden', true);
      });
    }, FILTER_TIMEOUT);
    return function () {
      window.clearTimeout(filterTimeout);
    };
  }, [filterQuery]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-instant-filter",
    ref: _refInstantFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-instant-filter__input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "ibexa-instant-filter__input form-control",
    placeholder: Translator.trans( /*@Desc("Type to refine")*/'instant.filter.placeholder', {}, 'sub_items'),
    value: filterQuery,
    onChange: function onChange(event) {
      return setFilterQuery(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-instant-filter__items"
  }, props.items.map(function (item) {
    var radioId = "item_".concat(item.value);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: radioId,
      className: "ibexa-instant-filter__item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-check"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "radio",
      id: radioId,
      name: "items",
      className: "form-check-input",
      value: item.value,
      onChange: function onChange() {
        return props.handleItemChange(item.value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "form-check-label",
      htmlFor: radioId
    }, item.label)));
  })));
};
InstantFilter.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  handleItemChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
InstantFilter.defaultProps = {
  items: [],
  handleItemChange: function handleItemChange() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstantFilter);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/language.selector.compoment.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/language.selector.compoment.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _sub_items_list_instant_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-items-list/instant.filter.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/instant.filter.component.js");




var LanguageSelector = function LanguageSelector(props) {
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'ibexa-extra-actions': true,
    'c-language-selector': true,
    'ibexa-extra-actions--edit': true,
    'ibexa-extra-actions--hidden': !props.isOpen
  });
  var closeLanguageSelector = function closeLanguageSelector(event) {
    if (!event.target.closest('.c-table-view-item__btn') && !event.target.classList.contains('ibexa-instant-filter__input')) {
      props.close();
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.document.addEventListener('click', closeLanguageSelector, false);
    return function () {
      window.document.removeEventListener('click', closeLanguageSelector);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions__header"
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sub_items_list_instant_filter_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: props.languageItems,
    handleItemChange: props.handleItemChange
  })));
};
LanguageSelector.propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  languageItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  handleItemChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  closeLanguageSelector: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
LanguageSelector.defaultProps = {
  isOpen: false,
  label: '',
  languageItems: [],
  handleItemChange: function handleItemChange() {},
  closeLanguageSelector: function closeLanguageSelector() {},
  close: function close() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSelector);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/sub.items.list.component.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/sub.items.list.component.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_view_table_view_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table-view/table.view.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.component.js");
/* harmony import */ var _grid_view_grid_view_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid-view/grid.view.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/grid-view/grid.view.component.js");
/* harmony import */ var _sub_items_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sub.items.module.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/sub.items.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var SubItemsListComponent = function SubItemsListComponent(props) {
  var _views;
  var views = (_views = {}, _defineProperty(_views, _sub_items_module_js__WEBPACK_IMPORTED_MODULE_4__.VIEW_MODE_TABLE, _table_view_table_view_component_js__WEBPACK_IMPORTED_MODULE_2__["default"]), _defineProperty(_views, _sub_items_module_js__WEBPACK_IMPORTED_MODULE_4__.VIEW_MODE_GRID, _grid_view_grid_view_component_js__WEBPACK_IMPORTED_MODULE_3__["default"]), _views);
  var Component = views[props.activeView];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props);
};
SubItemsListComponent.propTypes = {
  activeView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  handleItemPriorityUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  handleEditItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  generateLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  languages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  onItemSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  toggleAllItemsSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  selectedLocationsIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Set).isRequired,
  onSortChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  sortClause: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  sortOrder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  languageContainerSelector: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
SubItemsListComponent.defaultProps = {
  items: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubItemsListComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.columns.toggler.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.columns.toggler.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableViewColumnsTogglerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _table_view_columns_toggler_list_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.view.columns.toggler.list.element */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.columns.toggler.list.element.js");
/* harmony import */ var _table_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.view.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.component.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var _window = window,
  Translator = _window.Translator;
var DEFAULT_PANEL_HEIGHT = 450;
var TableViewColumnsTogglerComponent = /*#__PURE__*/function (_Component) {
  _inherits(TableViewColumnsTogglerComponent, _Component);
  var _super = _createSuper(TableViewColumnsTogglerComponent);
  function TableViewColumnsTogglerComponent(props) {
    var _this;
    _classCallCheck(this, TableViewColumnsTogglerComponent);
    _this = _super.call(this, props);
    _this.togglePanel = _this.togglePanel.bind(_assertThisInitialized(_this));
    _this.hidePanel = _this.hidePanel.bind(_assertThisInitialized(_this));
    _this._refTogglerButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refPanel = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.state = {
      isOpen: false,
      buttonBottomDocumentOffset: null,
      panelHeight: null
    };
    return _this;
  }
  _createClass(TableViewColumnsTogglerComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      document.addEventListener('click', this.hidePanel, false);
      this.setState(function () {
        return {
          buttonBottomDocumentOffset: _this2.getBtnBottomDocumentOffset()
        };
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state = this.state,
        isOpen = _this$state.isOpen,
        panelHeight = _this$state.panelHeight;
      if (isOpen && panelHeight === null) {
        this.setState({
          panelHeight: this._refPanel.current.offsetHeight
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.hidePanel);
    }
  }, {
    key: "getBtnBottomDocumentOffset",
    value: function getBtnBottomDocumentOffset() {
      var buttonTopOffset = this._refTogglerButton.current.getBoundingClientRect().top + window.scrollY;
      return document.documentElement.scrollHeight - buttonTopOffset;
    }
  }, {
    key: "hidePanel",
    value: function hidePanel(_ref) {
      var target = _ref.target;
      if (!this.state.isOpen) {
        return;
      }
      var isClickInsideToggler = target.closest('.c-table-view-columns-toggler');
      if (!isClickInsideToggler) {
        this.setState(function () {
          return {
            isOpen: false
          };
        });
      }
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    }
  }, {
    key: "renderPanel",
    value: function renderPanel() {
      if (!this.state.isOpen) {
        return null;
      }
      var _this$props = this.props,
        columnsVisibility = _this$props.columnsVisibility,
        toggleColumnVisibility = _this$props.toggleColumnVisibility;
      var _this$state2 = this.state,
        buttonBottomDocumentOffset = _this$state2.buttonBottomDocumentOffset,
        measuredPanelHeight = _this$state2.panelHeight;
      var panelHeight = measuredPanelHeight ? measuredPanelHeight : DEFAULT_PANEL_HEIGHT;
      var showAboveBtn = buttonBottomDocumentOffset < panelHeight;
      var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
        'ibexa-popup-menu': true,
        'c-table-view-columns-toggler__panel': true,
        'c-table-view-columns-toggler__panel--above-btn': showAboveBtn
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: className,
        ref: this._refPanel
      }, Object.entries(columnsVisibility).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          columnKey = _ref3[0],
          isColumnVisible = _ref3[1];
        var label = _table_view_component__WEBPACK_IMPORTED_MODULE_4__.headerLabels[columnKey];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_table_view_columns_toggler_list_element__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: columnKey,
          label: label,
          columnKey: columnKey,
          isColumnVisible: isColumnVisible,
          toggleColumnVisibility: toggleColumnVisibility
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var filterLabel = Translator.trans( /*@Desc("Filters")*/'items_table.header.filters', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-columns-toggler"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        ref: this._refTogglerButton,
        type: "button",
        title: filterLabel,
        className: "btn ibexa-btn ibexa-btn--small ibexa-btn--ghost ibexa-btn--no-text",
        onClick: this.togglePanel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "filters",
        extraClasses: "ibexa-icon--small"
      })), this.renderPanel());
    }
  }]);
  return TableViewColumnsTogglerComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

TableViewColumnsTogglerComponent.propTypes = {
  columnsVisibility: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  toggleColumnVisibility: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.columns.toggler.list.element.js":
/*!****************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.columns.toggler.list.element.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var TableViewColumnsTogglerListElement = function TableViewColumnsTogglerListElement(_ref) {
  var label = _ref.label,
    isColumnVisible = _ref.isColumnVisible,
    toggleColumnVisibility = _ref.toggleColumnVisibility,
    columnKey = _ref.columnKey;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ibexa-popup-menu__item c-table-view-columns-toggler-list-element",
    onClick: function onClick() {
      return toggleColumnVisibility(columnKey);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-popup-menu__item-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-check-input ibexa-input ibexa-input--checkbox",
    type: "checkbox",
    checked: isColumnVisible,
    readOnly: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-check-label c-table-view-columns-toggler-list-element__label"
  }, label)));
};
TableViewColumnsTogglerListElement.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  columnKey: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isColumnVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  toggleColumnVisibility: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableViewColumnsTogglerListElement);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.component.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.component.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableViewComponent),
/* harmony export */   headerLabels: () => (/* binding */ headerLabels)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _table_view_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.view.item.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.item.component.js");
/* harmony import */ var _table_view_columns_toggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.view.columns.toggler */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.columns.toggler.js");
/* harmony import */ var _three_state_checkbox_three_state_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../three-state-checkbox/three.state.checkbox.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/three-state-checkbox/three.state.checkbox.component.js");
/* harmony import */ var _sub_items_list_language_selector_compoment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sub-items-list/language.selector.compoment */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/language.selector.compoment.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var _window = window,
  Translator = _window.Translator;
var COLUMNS_VISIBILITY_LOCAL_STORAGE_DATA_KEY = 'sub-items_columns-visibility';
var DEFAULT_COLUMNS_VISIBILITY = {
  modified: true,
  'content-type': true,
  priority: true,
  translations: true,
  visibility: true,
  creator: true,
  contributor: true,
  published: true,
  section: true,
  'location-id': true,
  'location-remote-id': true,
  'object-id': true,
  'object-remote-id': true
};
var SORTKEY_MAP = {
  name: 'ContentName',
  modified: 'DateModified',
  priority: 'LocationPriority'
};
var TABLE_HEAD_CLASS = 'ibexa-table__header-cell c-table-view__cell c-table-view__cell--head';
var headerLabels = {
  name: Translator.trans( /*@Desc("Name")*/'items_table.header.name', {}, 'sub_items'),
  modified: Translator.trans( /*@Desc("Modified")*/'items_table.header.modified', {}, 'sub_items'),
  'content-type': Translator.trans( /*@Desc("Content type")*/'items_table.header.content_type', {}, 'sub_items'),
  priority: Translator.trans( /*@Desc("Priority")*/'items_table.header.priority', {}, 'sub_items'),
  translations: Translator.trans( /*@Desc("Translations")*/'items_table.header.translations', {}, 'sub_items'),
  visibility: Translator.trans( /*@Desc("Visibility")*/'items_table.header.visibility', {}, 'sub_items'),
  creator: Translator.trans( /*@Desc("Creator")*/'items_table.header.creator', {}, 'sub_items'),
  contributor: Translator.trans( /*@Desc("Contributor")*/'items_table.header.contributor', {}, 'sub_items'),
  published: Translator.trans( /*@Desc("Published")*/'items_table.header.pubished', {}, 'sub_items'),
  section: Translator.trans( /*@Desc("Section")*/'items_table.header.section', {}, 'sub_items'),
  'location-id': Translator.trans( /*@Desc("Location ID")*/'items_table.header.location_id', {}, 'sub_items'),
  'location-remote-id': Translator.trans( /*@Desc("Location remote ID")*/'items_table.header.location_remote_id', {}, 'sub_items'),
  'object-id': Translator.trans( /*@Desc("Object ID")*/'items_table.header.object_id', {}, 'sub_items'),
  'object-remote-id': Translator.trans( /*@Desc("Object remote ID")*/'items_table.header.object_remote_id', {}, 'sub_items')
};
var TableViewComponent = /*#__PURE__*/function (_Component) {
  _inherits(TableViewComponent, _Component);
  var _super = _createSuper(TableViewComponent);
  function TableViewComponent(props) {
    var _this;
    _classCallCheck(this, TableViewComponent);
    _this = _super.call(this, props);
    _this.renderItem = _this.renderItem.bind(_assertThisInitialized(_this));
    _this.selectAll = _this.selectAll.bind(_assertThisInitialized(_this));
    _this.setColumnsVisibilityInLocalStorage = _this.setColumnsVisibilityInLocalStorage.bind(_assertThisInitialized(_this));
    _this.toggleColumnVisibility = _this.toggleColumnVisibility.bind(_assertThisInitialized(_this));
    _this.setLanguageSelectorData = _this.setLanguageSelectorData.bind(_assertThisInitialized(_this));
    _this.openLanguageSelector = _this.openLanguageSelector.bind(_assertThisInitialized(_this));
    _this.closeLanguageSelector = _this.closeLanguageSelector.bind(_assertThisInitialized(_this));
    _this.handleScrollerScroll = _this.handleScrollerScroll.bind(_assertThisInitialized(_this));
    _this._refColumnsTogglerButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refScroller = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.state = {
      columnsVisibility: _this.getColumnsVisibilityFromLocalStorage(),
      languageSelectorData: {},
      languageSelectorOpen: false,
      scrollShadowLeft: false,
      scrollShadowRight: false
    };
    return _this;
  }
  _createClass(TableViewComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._refScroller.current.addEventListener('scroll', this.handleScrollerScroll, false);
      window.addEventListener('resize', this.handleScrollerScroll, false);
      this.handleScrollerScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.columnsVisibility !== prevState.columnsVisibility) {
        this.handleScrollerScroll();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._refScroller.current.removeEventListener('scroll', this.handleScrollerScroll, false);
      window.removeEventListener('resize', this.handleScrollerScroll, false);
    }
  }, {
    key: "handleScrollerScroll",
    value: function handleScrollerScroll() {
      var _this2 = this;
      this.setState(function () {
        if (!_this2._refScroller.current) {
          return {};
        }
        var scroller = _this2._refScroller.current;
        var offsetRoudingCompensator = 0.5;
        return {
          scrollShadowLeft: scroller.scrollLeft > 0,
          scrollShadowRight: scroller.scrollLeft < scroller.scrollWidth - scroller.offsetWidth - 2 * offsetRoudingCompensator
        };
      });
    }
  }, {
    key: "getColumnsVisibilityFromLocalStorage",
    value: function getColumnsVisibilityFromLocalStorage() {
      var columnsVisibilityData = localStorage.getItem(COLUMNS_VISIBILITY_LOCAL_STORAGE_DATA_KEY);
      var columnsVisibility = _objectSpread({}, DEFAULT_COLUMNS_VISIBILITY);
      if (columnsVisibilityData) {
        Object.entries(JSON.parse(columnsVisibilityData)).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            isVisible = _ref2[1];
          if (id in columnsVisibility) {
            columnsVisibility[id] = isVisible;
          }
        });
      }
      return columnsVisibility;
    }
  }, {
    key: "setColumnsVisibilityInLocalStorage",
    value: function setColumnsVisibilityInLocalStorage() {
      var columnsVisibilityData = JSON.stringify(this.state.columnsVisibility);
      localStorage.setItem(COLUMNS_VISIBILITY_LOCAL_STORAGE_DATA_KEY, columnsVisibilityData);
    }

    /**
     * Selects all visible items
     */
  }, {
    key: "selectAll",
    value: function selectAll() {
      var _this$props = this.props,
        toggleAllItemsSelect = _this$props.toggleAllItemsSelect,
        selectedLocationsIds = _this$props.selectedLocationsIds;
      var anyLocationSelected = !!selectedLocationsIds.size;
      var isSelectAction = !anyLocationSelected;
      toggleAllItemsSelect(isSelectAction);
    }
  }, {
    key: "toggleColumnVisibility",
    value: function toggleColumnVisibility(column) {
      this.setState(function (state) {
        return {
          columnsVisibility: _objectSpread(_objectSpread({}, state.columnsVisibility), {}, _defineProperty({}, column, !state.columnsVisibility[column]))
        };
      }, this.setColumnsVisibilityInLocalStorage);
    }

    /**
     * Sets language selector data
     *
     * @param {Object} data
     */
  }, {
    key: "setLanguageSelectorData",
    value: function setLanguageSelectorData(data) {
      this.setState({
        languageSelectorData: data
      });
    }

    /**
     * @method openLanguageSelector
     * @memberof TableViewComponent
     */
  }, {
    key: "openLanguageSelector",
    value: function openLanguageSelector() {
      this.setState({
        languageSelectorOpen: true
      });
    }

    /**
     * @method closeLanguageSelector
     * @memberof TableViewComponent
     */
  }, {
    key: "closeLanguageSelector",
    value: function closeLanguageSelector() {
      this.setState({
        languageSelectorOpen: false
      });
    }

    /**
     * Renders single list item
     *
     * @method renderItem
     * @param {Object} item
     * @returns {JSX.Element}
     * @memberof TableViewComponent
     */
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var _this$state = this.state,
        columnsVisibility = _this$state.columnsVisibility,
        scrollShadowLeft = _this$state.scrollShadowLeft,
        scrollShadowRight = _this$state.scrollShadowRight;
      var _this$props2 = this.props,
        handleItemPriorityUpdate = _this$props2.handleItemPriorityUpdate,
        handleEditItem = _this$props2.handleEditItem,
        generateLink = _this$props2.generateLink,
        languages = _this$props2.languages,
        onItemSelect = _this$props2.onItemSelect,
        selectedLocationsIds = _this$props2.selectedLocationsIds;
      var isSelected = selectedLocationsIds.has(item.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_table_view_item_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: item.id,
        item: item,
        onItemPriorityUpdate: handleItemPriorityUpdate,
        languages: languages,
        handleEditItem: handleEditItem,
        generateLink: generateLink,
        onItemSelect: onItemSelect,
        isSelected: isSelected,
        columnsVisibility: columnsVisibility,
        setLanguageSelectorData: this.setLanguageSelectorData,
        openLanguageSelector: this.openLanguageSelector,
        showScrollShadowLeft: scrollShadowLeft,
        showScrollShadowRight: scrollShadowRight
      });
    }
  }, {
    key: "renderBasicColumnsHeader",
    value: function renderBasicColumnsHeader() {
      var _this$props3 = this.props,
        sortClause = _this$props3.sortClause,
        sortOrder = _this$props3.sortOrder,
        onSortChange = _this$props3.onSortChange;
      var _this$state2 = this.state,
        columnsVisibility = _this$state2.columnsVisibility,
        scrollShadowLeft = _this$state2.scrollShadowLeft;
      var columnsToRender = _objectSpread({
        name: true
      }, columnsVisibility);
      return Object.entries(columnsToRender).map(function (_ref3) {
        var _createCssClassNames;
        var _ref4 = _slicedToArray(_ref3, 2),
          columnKey = _ref4[0],
          isVisible = _ref4[1];
        if (!isVisible) {
          return null;
        }
        var onClick = null;
        var isNameColumn = columnKey === 'name';
        var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__.createCssClassNames)((_createCssClassNames = {}, _defineProperty(_createCssClassNames, TABLE_HEAD_CLASS, true), _defineProperty(_createCssClassNames, 'c-table-view__cell--name', isNameColumn), _defineProperty(_createCssClassNames, 'ibexa-table__header-cell--close-left', isNameColumn), _defineProperty(_createCssClassNames, 'c-table-view__cell--shadow-right', scrollShadowLeft && isNameColumn), _createCssClassNames));
        var wrapperClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__.createCssClassNames)({
          'c-table-view__label': true,
          'ibexa-table__sort-column': columnKey in SORTKEY_MAP,
          'ibexa-table__header-cell-text-wrapper': true,
          'ibexa-table__sort-column--asc': SORTKEY_MAP[columnKey] === sortClause && sortOrder === 'ascending',
          'ibexa-table__sort-column--desc': SORTKEY_MAP[columnKey] === sortClause && sortOrder === 'descending'
        });
        if (columnKey in SORTKEY_MAP) {
          onClick = function onClick() {
            onSortChange(SORTKEY_MAP[columnKey]);
          };
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
          key: columnKey,
          className: className,
          onClick: onClick,
          tabIndex: -1
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: wrapperClassName
        }, headerLabels[columnKey]));
      });
    }

    /**
     * Renders table's head
     *
     * @method renderHead
     * @returns {JSX.Element|null}
     * @memberof GridViewComponent
     */
  }, {
    key: "renderHead",
    value: function renderHead() {
      if (!this.props.items.length) {
        return null;
      }
      var _this$state3 = this.state,
        columnsVisibility = _this$state3.columnsVisibility,
        scrollShadowRight = _this$state3.scrollShadowRight;
      var _this$props4 = this.props,
        selectedLocationsIds = _this$props4.selectedLocationsIds,
        items = _this$props4.items;
      var anyLocationSelected = !!selectedLocationsIds.size;
      var allLocationsSelected = selectedLocationsIds.size === items.length;
      var isCheckboxIndeterminate = anyLocationSelected && !allLocationsSelected;
      var togglerClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__.createCssClassNames)({
        'c-table-view__cell': true,
        'c-table-view__cell--toggler': true,
        'c-table-view__cell--shadow-left': scrollShadowRight
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
        className: "c-table-view__head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: "ibexa-table__head-row c-table-view__row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        className: "".concat(TABLE_HEAD_CLASS, " c-table-view__cell--checkbox")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_three_state_checkbox_three_state_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
        indeterminate: isCheckboxIndeterminate,
        checked: anyLocationSelected,
        onClick: this.selectAll // We need onClick, because MS Edge does not trigger onChange when checkbox has indeterminate state. (ref: https://stackoverflow.com/a/33529024/5766602)
        ,
        onChange: function onChange() {} // Dummy callback to not trigger React warning as we cannot use onChange on MS Edge
        ,
        className: "ibexa-input ibexa-input--checkbox ibexa-table__header-cell-checkbox ibexa-table__header-cell-checkbox--custom-init"
      })), this.renderBasicColumnsHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        className: togglerClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_table_view_columns_toggler__WEBPACK_IMPORTED_MODULE_4__["default"], {
        columnsVisibility: columnsVisibility,
        toggleColumnVisibility: this.toggleColumnVisibility
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.items;
      var renderedItems = items.map(this.renderItem);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view__scroller",
        ref: this._refScroller
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
        className: "table ibexa-table c-table-view"
      }, this.renderHead(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
        className: "ibexa-table__body c-table-view__body"
      }, renderedItems))), /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sub_items_list_language_selector_compoment__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        isOpen: this.state.languageSelectorOpen,
        close: this.closeLanguageSelector
      }, this.state.languageSelectorData)), window.document.querySelector(this.props.languageContainerSelector)));
    }
  }]);
  return TableViewComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

TableViewComponent.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired,
  handleItemPriorityUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  generateLink: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  handleEditItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  languages: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  onItemSelect: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  toggleAllItemsSelect: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  selectedLocationsIds: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Set),
  onSortChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  sortClause: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  sortOrder: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  languageContainerSelector: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
};
TableViewComponent.defaultProps = {
  selectedLocationsIds: new Set()
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.item.component.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/table-view/table.view.item.component.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableViewItemComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var formatShortDateTime = ibexa.helpers.timezone.formatShortDateTime;
var TableViewItemComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableViewItemComponent, _PureComponent);
  var _super = _createSuper(TableViewItemComponent);
  function TableViewItemComponent(props) {
    var _this;
    _classCallCheck(this, TableViewItemComponent);
    _this = _super.call(this, props);
    _this.storePriorityValue = _this.storePriorityValue.bind(_assertThisInitialized(_this));
    _this.enablePriorityInput = _this.enablePriorityInput.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_this));
    _this.onSelectCheckboxChange = _this.onSelectCheckboxChange.bind(_assertThisInitialized(_this));
    _this.setPriorityInputRef = _this.setPriorityInputRef.bind(_assertThisInitialized(_this));
    _this.getLanguageSelectorData = _this.getLanguageSelectorData.bind(_assertThisInitialized(_this));
    _this.editItem = _this.editItem.bind(_assertThisInitialized(_this));
    _this._refPriorityInput = null;
    _this.state = {
      priorityValue: props.item.priority,
      priorityInputEnabled: false,
      startingPriorityValue: props.item.priority
    };
    _this.columnsRenderers = {
      name: _this.renderNameCell.bind(_assertThisInitialized(_this)),
      modified: _this.renderModifiedCell.bind(_assertThisInitialized(_this)),
      'content-type': _this.renderContentTypeCell.bind(_assertThisInitialized(_this)),
      priority: _this.renderPriorityCell.bind(_assertThisInitialized(_this)),
      translations: _this.renderTranslationsCell.bind(_assertThisInitialized(_this)),
      visibility: _this.renderVisibilityCell.bind(_assertThisInitialized(_this)),
      creator: _this.renderCreatorCell.bind(_assertThisInitialized(_this)),
      contributor: _this.renderContributorCell.bind(_assertThisInitialized(_this)),
      published: _this.renderPublishedCell.bind(_assertThisInitialized(_this)),
      section: _this.renderSectionCell.bind(_assertThisInitialized(_this)),
      'location-id': _this.renderLocationIdCell.bind(_assertThisInitialized(_this)),
      'location-remote-id': _this.renderLocationRemoteIdCell.bind(_assertThisInitialized(_this)),
      'object-id': _this.renderObjectIdCell.bind(_assertThisInitialized(_this)),
      'object-remote-id': _this.renderObjectRemoteIdCell.bind(_assertThisInitialized(_this))
    };
    return _this;
  }

  /**
   * Enables priority input field
   *
   * @method enablePriorityInput
   * @memberof TableViewItemComponent
   */
  _createClass(TableViewItemComponent, [{
    key: "enablePriorityInput",
    value: function enablePriorityInput() {
      this.setState(function () {
        return {
          priorityInputEnabled: true
        };
      });
    }

    /**
     * Handles priority update cancel action.
     * Restores previous value and blocks the priority input.
     *
     * @method handleCancel
     * @param {Event} event
     * @memberof TableViewItemComponent
     */
  }, {
    key: "handleCancel",
    value: function handleCancel(event) {
      event.preventDefault();
      this.setState(function (state) {
        return {
          priorityInputEnabled: false,
          priorityValue: state.startingPriorityValue
        };
      });
    }

    /**
     * Handles submit action.
     * Updates priority value.
     *
     * @method handleSubmit
     * @param {Event} event
     * @memberof TableViewItemComponent
     */
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;
      event.preventDefault();
      this.props.onItemPriorityUpdate({
        pathString: this.props.item.pathString,
        priority: this._refPriorityInput.value
      });
      this.setState(function () {
        return {
          priorityValue: _this2._refPriorityInput.value,
          priorityInputEnabled: false,
          startingPriorityValue: _this2._refPriorityInput.value
        };
      });
    }

    /**
     * Stores priority value
     *
     * @method storePriorityValue
     * @param {Event} event
     * @memberof TableViewItemComponent
     */
  }, {
    key: "storePriorityValue",
    value: function storePriorityValue(event) {
      var _this3 = this;
      event.preventDefault();
      this.setState(function () {
        return {
          priorityValue: _this3._refPriorityInput.value
        };
      });
    }

    /**
     * Edit sub item
     *
     * @method editItem
     * @memberof TableViewItemComponent
     */
  }, {
    key: "editItem",
    value: function editItem(languageCode) {
      var _this$props$item$cont = this.props.item.content._info,
        id = _this$props$item$cont.id,
        currentVersion = _this$props$item$cont.currentVersion;
      this.props.handleEditItem({
        _id: id,
        mainLanguageCode: languageCode,
        CurrentVersion: {
          Version: {
            VersionInfo: {
              versionNo: currentVersion.versionNumber
            }
          }
        }
      }, this.props.item.id);
    }

    /**
     * Handles edit action.
     *
     * @method handleEdit
     * @memberof TableViewItemComponent
     */
  }, {
    key: "handleEdit",
    value: function handleEdit() {
      var _this$props$item$cont2 = this.props.item.content._info,
        mainLanguageCode = _this$props$item$cont2.mainLanguageCode,
        currentVersion = _this$props$item$cont2.currentVersion;
      var languageCodes = currentVersion.languageCodes;
      if (languageCodes.length > 1) {
        this.props.setLanguageSelectorData(this.getLanguageSelectorData());
        this.props.openLanguageSelector();
      } else {
        this.editItem(mainLanguageCode);
      }
    }
  }, {
    key: "setPriorityInputRef",
    value: function setPriorityInputRef(ref) {
      this._refPriorityInput = ref;
    }
  }, {
    key: "renderNameCell",
    value: function renderNameCell() {
      var _this$props = this.props,
        item = _this$props.item,
        generateLink = _this$props.generateLink;
      var contentName = item.content._name;
      var contentTypeIdentifier = item.content._info.contentType.identifier;
      var contentTypeIconUrl = ibexa.helpers.contentType.getContentTypeIconUrl(contentTypeIdentifier);
      var linkAttrs = {
        className: 'c-table-view-item__link c-table-view-item__text-wrapper',
        href: generateLink(item.id, item.content._info.id)
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-table-view-item__icon-with-name-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        customPath: contentTypeIconUrl,
        extraClasses: "ibexa-icon--small"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", linkAttrs, contentName));
    }

    /**
     * Renders a priority cell with input field
     *
     * @method renderPriorityCell
     * @returns {JSX.Element}
     * @memberof TableViewItemComponent
     */
  }, {
    key: "renderPriorityCell",
    value: function renderPriorityCell() {
      var inputAttrs = {
        type: 'number',
        defaultValue: this.state.priorityValue,
        onChange: this.storePriorityValue
      };
      var priorityWrapperAttrs = {};
      var innerWrapperAttrs = {};
      if (!this.state.priorityInputEnabled) {
        delete inputAttrs.defaultValue;
        inputAttrs.value = this.state.priorityValue;
        priorityWrapperAttrs.onClick = this.enablePriorityInput;
        innerWrapperAttrs.hidden = true;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
        className: "c-table-view-item__priority-wrapper"
      }, priorityWrapperAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__inner-wrapper c-table-view-item__inner-wrapper--input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
        className: "ibexa-input ibexa-input--text ibexa-input--small c-table-view-item__priority-value ibexa-input",
        ref: this.setPriorityInputRef
      }, inputAttrs))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
        className: "c-table-view-item__priority-actions"
      }, innerWrapperAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--primary ibexa-btn--no-text ibexa-btn--small c-table-view-item__btn c-table-view-item__btn--submit",
        onClick: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "checkmark",
        extraClasses: "ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--secondary ibexa-btn--no-text ibexa-btn--small",
        onClick: this.handleCancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "discard",
        extraClasses: "ibexa-icon--small"
      }))));
    }
  }, {
    key: "renderModifiedCell",
    value: function renderModifiedCell() {
      var modificationDate = this.props.item.content._info.modificationDate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, formatShortDateTime(new Date(modificationDate.timestamp * 1000)));
    }
  }, {
    key: "renderPublishedCell",
    value: function renderPublishedCell() {
      var publishedDate = this.props.item.content._info.publishedDate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, formatShortDateTime(new Date(publishedDate.timestamp * 1000)));
    }
  }, {
    key: "renderContentTypeCell",
    value: function renderContentTypeCell() {
      var contentTypeName = this.props.item.content._info.contentType.name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, contentTypeName);
    }
  }, {
    key: "renderTranslationsCell",
    value: function renderTranslationsCell() {
      var _this$props2 = this.props,
        item = _this$props2.item,
        languages = _this$props2.languages;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item.content._info.currentVersion.languageCodes.map(function (languageCode) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          key: languageCode,
          className: "c-table-view-item__translation"
        }, languages.mappings[languageCode].name);
      }));
    }
  }, {
    key: "renderVisibilityCell",
    value: function renderVisibilityCell() {
      var _this$props$item = this.props.item,
        invisible = _this$props$item.invisible,
        hidden = _this$props$item.hidden;
      var visibleLabel = Translator.trans( /*@Desc("Visible")*/'items_table.row.visible.label', {}, 'sub_items');
      var notVisibleLabel = Translator.trans( /*@Desc("Not Visible")*/'items_table.row.not_visible.label', {}, 'sub_items');
      var label = !invisible && !hidden ? visibleLabel : notVisibleLabel;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, label);
    }
  }, {
    key: "renderCreatorCell",
    value: function renderCreatorCell() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, this.getName(this.props.item.content._info.owner));
    }
  }, {
    key: "renderContributorCell",
    value: function renderContributorCell() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, this.getName(this.props.item.content._info.currentVersion.creator));
    }
  }, {
    key: "renderSectionCell",
    value: function renderSectionCell() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, this.getName(this.props.item.content._info.section));
    }
  }, {
    key: "renderLocationIdCell",
    value: function renderLocationIdCell() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, this.props.item.id);
    }
  }, {
    key: "renderLocationRemoteIdCell",
    value: function renderLocationRemoteIdCell() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, this.props.item.remoteId);
    }
  }, {
    key: "renderObjectIdCell",
    value: function renderObjectIdCell() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, this.props.item.content._info.id);
    }
  }, {
    key: "renderObjectRemoteIdCell",
    value: function renderObjectRemoteIdCell() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__text-wrapper"
      }, this.props.item.content._info.remoteId);
    }
  }, {
    key: "renderBasicColumns",
    value: function renderBasicColumns() {
      var _this4 = this;
      var _this$props3 = this.props,
        columnsVisibility = _this$props3.columnsVisibility,
        showScrollShadowLeft = _this$props3.showScrollShadowLeft;
      var columnsToRender = _objectSpread({
        name: true
      }, columnsVisibility);
      return Object.entries(columnsToRender).map(function (_ref) {
        var _createCssClassNames;
        var _ref2 = _slicedToArray(_ref, 2),
          columnKey = _ref2[0],
          isVisible = _ref2[1];
        if (!isVisible) {
          return null;
        }
        var isNameColumn = columnKey === 'name';
        var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)((_createCssClassNames = {
          'ibexa-table__cell': true,
          'c-table-view-item__cell': true
        }, _defineProperty(_createCssClassNames, "c-table-view-item__cell--".concat(columnKey), true), _defineProperty(_createCssClassNames, 'c-table-view__cell--shadow-right', isNameColumn & showScrollShadowLeft), _defineProperty(_createCssClassNames, 'ibexa-table__cell--close-left', isNameColumn), _createCssClassNames));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          key: columnKey,
          className: className
        }, _this4.columnsRenderers[columnKey]());
      });
    }
  }, {
    key: "getName",
    value: function getName(item) {
      return item ? item.name : '';
    }

    /**
     * Calls onItemSelect callback for given item
     *
     * @param {Event} event
     */
  }, {
    key: "onSelectCheckboxChange",
    value: function onSelectCheckboxChange(event) {
      var _this$props4 = this.props,
        item = _this$props4.item,
        onItemSelect = _this$props4.onItemSelect;
      var isSelected = event.target.checked;
      onItemSelect(item, isSelected);
    }

    /**
     * Get data for language selector
     *
     * @method getLanguageSelectorData
     * @returns {Object}
     * @memberof TableViewItemComponent
     */
  }, {
    key: "getLanguageSelectorData",
    value: function getLanguageSelectorData() {
      var languages = this.props.languages.mappings;
      var languageCodes = this.props.item.content._info.currentVersion.languageCodes;
      var label = Translator.trans( /*@Desc("Select language")*/'languages.modal.label', {}, 'sub_items');
      var languageItems = languageCodes.map(function (item) {
        return {
          label: languages[item].name,
          value: item
        };
      });
      return {
        languageItems: languageItems,
        label: "".concat(label, " (").concat(languageItems.length, ")"),
        handleItemChange: this.editItem
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      ibexa.helpers.table.parseCheckbox('.c-table-view-item__cell .ibexa-input--checkbox', 'c-table-view-item--active');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        isSelected = _this$props5.isSelected,
        showScrollShadowRight = _this$props5.showScrollShadowRight;
      var editLabel = Translator.trans( /*@Desc("Edit")*/'edit_item_btn.label', {}, 'sub_items');
      var actionCellClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
        'ibexa-table__cell': true,
        'c-table-view-item__cell': true,
        'c-table-view-item__cell--actions': true,
        'c-table-view-item__cell--shadow-left': showScrollShadowRight
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: "ibexa-table__row c-table-view-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "ibexa-table__cell c-table-view-item__cell c-table-view-item__cell--checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        className: "ibexa-input ibexa-input--checkbox",
        checked: isSelected,
        onChange: this.onSelectCheckboxChange
      })), this.renderBasicColumns(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: actionCellClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        title: editLabel,
        "data-extra-classes": "c-table-view-item__tooltip",
        onClick: this.handleEdit,
        className: "c-table-view-item__btn c-table-view-item__btn--edit",
        tabIndex: -1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-table-view-item__btn-inner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "edit",
        extraClasses: "ibexa-icon--small-medium"
      })))));
    }
  }]);
  return TableViewItemComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

TableViewItemComponent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onItemPriorityUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  handleEditItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  generateLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  languages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  onItemSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  columnsVisibility: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  showScrollShadowLeft: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  showScrollShadowRight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  setLanguageSelectorData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  openLanguageSelector: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/three-state-checkbox/three.state.checkbox.component.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/three-state-checkbox/three.state.checkbox.component.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["indeterminate"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var ThreeStateCheckboxComponent = function ThreeStateCheckboxComponent(_ref) {
  var indeterminate = _ref.indeterminate,
    restOfProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({}, restOfProps, {
    type: "checkbox",
    ref: function ref(input) {
      if (input) {
        input.indeterminate = indeterminate;
      }
    }
  }));
};
ThreeStateCheckboxComponent.propTypes = {
  indeterminate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ThreeStateCheckboxComponent.defaultProps = {
  indeterminate: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeStateCheckboxComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/view-switcher/view.switcher.component.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/view-switcher/view.switcher.component.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/simple-dropdown/simple.dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js");
/* harmony import */ var _sub_items_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sub.items.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/sub.items.module.js");




var _window = window,
  Translator = _window.Translator;
var ViewSwitcherComponent = function ViewSwitcherComponent(_ref) {
  var onViewChange = _ref.onViewChange,
    activeView = _ref.activeView,
    isDisabled = _ref.isDisabled;
  var componentClassName = 'c-view-switcher';
  if (isDisabled) {
    componentClassName = "".concat(componentClassName, " ").concat(componentClassName, "--disabled");
  }
  var viewLabel = Translator.trans( /*@Desc("View")*/'view_switcher.view', {}, 'sub_items');
  var switchView = function switchView(_ref2) {
    var value = _ref2.value;
    onViewChange(value);
  };
  var viewOptions = [{
    iconName: 'view-list',
    label: Translator.trans( /*@Desc("List view")*/'view_switcher.list_view', {}, 'sub_items'),
    value: _sub_items_module__WEBPACK_IMPORTED_MODULE_3__.VIEW_MODE_TABLE
  }, {
    iconName: 'view-grid',
    label: Translator.trans( /*@Desc("Grid view")*/'view_switcher.grid_view', {}, 'sub_items'),
    value: _sub_items_module__WEBPACK_IMPORTED_MODULE_3__.VIEW_MODE_GRID
  }];
  var selectedOption = viewOptions.find(function (option) {
    return option.value === activeView;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: componentClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: viewOptions,
    selectedOption: selectedOption,
    onOptionClick: switchView,
    selectedItemLabel: viewLabel,
    isSwitcher: true
  }));
};
ViewSwitcherComponent.propTypes = {
  onViewChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  activeView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewSwitcherComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/bulk.service.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/bulk.service.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bulkAddLocations: () => (/* binding */ bulkAddLocations),
/* harmony export */   bulkDeleteItems: () => (/* binding */ bulkDeleteItems),
/* harmony export */   bulkHideLocations: () => (/* binding */ bulkHideLocations),
/* harmony export */   bulkMoveLocations: () => (/* binding */ bulkMoveLocations),
/* harmony export */   bulkUnhideLocations: () => (/* binding */ bulkUnhideLocations)
/* harmony export */ });
/* harmony import */ var _common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _endpoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/endpoints.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _window = window,
  Translator = _window.Translator;
var bulkMoveLocations = function bulkMoveLocations(restInfo, items, newLocationHref, callback) {
  var requestBodyOperations = {};
  items.forEach(function (_ref) {
    var id = _ref.id,
      pathString = _ref.pathString;
    requestBodyOperations[id] = getBulkMoveRequestOperation(pathString, newLocationHref);
  });
  makeBulkRequest(restInfo, requestBodyOperations, processBulkResponse.bind(null, items, callback));
};
var bulkAddLocations = function bulkAddLocations(restInfo, items, newLocationHref, callback) {
  var requestBodyOperations = {};
  items.forEach(function (_ref2) {
    var id = _ref2.id,
      content = _ref2.content;
    requestBodyOperations[id] = getBulkAddLocationRequestOperation(content._info.id, newLocationHref);
  });
  makeBulkRequest(restInfo, requestBodyOperations, processBulkResponse.bind(null, items, callback));
};
var bulkHideLocations = function bulkHideLocations(restInfo, items, callback) {
  var requestBodyOperations = {};
  items.forEach(function (_ref3) {
    var id = _ref3.id,
      pathString = _ref3.pathString;
    requestBodyOperations[id] = getBulkVisibilityRequestOperation(pathString, true);
  });
  makeBulkRequest(restInfo, requestBodyOperations, processBulkResponse.bind(null, items, callback));
};
var bulkUnhideLocations = function bulkUnhideLocations(restInfo, items, callback) {
  var requestBodyOperations = {};
  items.forEach(function (_ref4) {
    var id = _ref4.id,
      pathString = _ref4.pathString;
    requestBodyOperations[id] = getBulkVisibilityRequestOperation(pathString, false);
  });
  makeBulkRequest(restInfo, requestBodyOperations, processBulkResponse.bind(null, items, callback));
};
var bulkDeleteItems = function bulkDeleteItems(restInfo, items, callback) {
  var requestBodyOperations = {};
  items.forEach(function (item) {
    var locationId = item.id,
      pathString = item.pathString,
      content = item.content;
    var contentTypeIdentifier = content._info.contentType.identifier;
    var isUserContentItem = window.ibexa.adminUiConfig.userContentTypes.includes(contentTypeIdentifier);
    var contentId = content._info.id;
    if (isUserContentItem) {
      requestBodyOperations[locationId] = getBulkDeleteUserRequestOperation(contentId);
    } else {
      requestBodyOperations[locationId] = getBulkMoveRequestOperation(pathString, _endpoints_js__WEBPACK_IMPORTED_MODULE_1__.TRASH_FAKE_LOCATION);
    }
  });
  makeBulkRequest(restInfo, requestBodyOperations, processBulkResponse.bind(null, items, callback));
};
var getBulkDeleteUserRequestOperation = function getBulkDeleteUserRequestOperation(contentId) {
  return {
    uri: "".concat(_endpoints_js__WEBPACK_IMPORTED_MODULE_1__.USER_ENDPOINT, "/").concat(contentId),
    method: 'DELETE'
  };
};
var getBulkMoveRequestOperation = function getBulkMoveRequestOperation(pathString, destination) {
  return {
    uri: "".concat(_endpoints_js__WEBPACK_IMPORTED_MODULE_1__.LOCATION_ENDPOINT).concat(pathString.slice(0, -1)),
    method: 'MOVE',
    headers: {
      Destination: destination
    }
  };
};
var getBulkAddLocationRequestOperation = function getBulkAddLocationRequestOperation(contentId, destination) {
  return {
    uri: "".concat(_endpoints_js__WEBPACK_IMPORTED_MODULE_1__.CONTENT_OBJECTS_ENDPOINT, "/").concat(contentId, "/locations"),
    content: JSON.stringify({
      LocationCreate: {
        ParentLocation: {
          _href: destination
        },
        sortField: 'PATH',
        sortOrder: 'ASC'
      }
    }),
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.LocationCreate+json'
    },
    method: 'POST'
  };
};
var getBulkVisibilityRequestOperation = function getBulkVisibilityRequestOperation(pathString, isHidden) {
  return {
    uri: "".concat(_endpoints_js__WEBPACK_IMPORTED_MODULE_1__.LOCATION_ENDPOINT).concat(pathString.slice(0, -1)),
    content: JSON.stringify({
      LocationUpdate: {
        hidden: isHidden,
        sortField: 'PATH',
        sortOrder: 'ASC'
      }
    }),
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.LocationUpdate+json'
    },
    method: 'PATCH'
  };
};
var processBulkResponse = function processBulkResponse(items, callback, response) {
  var operations = response.BulkOperationResponse.operations;
  var itemsMatches = Object.entries(operations).reduce(function (output, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      locationId = _ref6[0],
      statusCode = _ref6[1].statusCode;
    var respectiveItem = items.find(function (item) {
      return item.id === parseInt(locationId, 10);
    });
    var isSuccess = 200 <= statusCode && statusCode <= 299;
    if (isSuccess) {
      output.success.push(respectiveItem);
    } else {
      output.fail.push(respectiveItem);
    }
    return output;
  }, {
    success: [],
    fail: []
  });
  callback(itemsMatches.success, itemsMatches.fail);
};
var makeBulkRequest = function makeBulkRequest(_ref7, requestBodyOperations, callback) {
  var token = _ref7.token,
    siteaccess = _ref7.siteaccess;
  var request = new Request(_endpoints_js__WEBPACK_IMPORTED_MODULE_1__.ENDPOINT_BULK, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, _endpoints_js__WEBPACK_IMPORTED_MODULE_1__.HEADERS_BULK), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: JSON.stringify({
      bulkOperations: {
        operations: requestBodyOperations
      }
    }),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(callback)["catch"](function () {
    var message = Translator.trans( /*@Desc("An unexpected error occurred while processing the Content item(s). Please try again later.")*/
    'bulk_request.error.message', {}, 'sub_items');
    window.ibexa.helpers.notification.showErrorNotification(message);
  });
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/endpoints.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/endpoints.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONTENT_OBJECTS_ENDPOINT: () => (/* binding */ CONTENT_OBJECTS_ENDPOINT),
/* harmony export */   ENDPOINT_BULK: () => (/* binding */ ENDPOINT_BULK),
/* harmony export */   ENDPOINT_GRAPHQL: () => (/* binding */ ENDPOINT_GRAPHQL),
/* harmony export */   HEADERS_BULK: () => (/* binding */ HEADERS_BULK),
/* harmony export */   LOCATION_ENDPOINT: () => (/* binding */ LOCATION_ENDPOINT),
/* harmony export */   TRASH_FAKE_LOCATION: () => (/* binding */ TRASH_FAKE_LOCATION),
/* harmony export */   USER_ENDPOINT: () => (/* binding */ USER_ENDPOINT)
/* harmony export */ });
var HEADERS_BULK = {
  Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
  'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json'
};
var TRASH_FAKE_LOCATION = '/api/ibexa/v2/content/trash';
var USER_ENDPOINT = '/api/ibexa/v2/user/users';
var LOCATION_ENDPOINT = '/api/ibexa/v2/content/locations';
var CONTENT_OBJECTS_ENDPOINT = '/api/ibexa/v2/content/objects';
var ENDPOINT_BULK = '/api/ibexa/v2/bulk';
var ENDPOINT_GRAPHQL = '/graphql';

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/sub.items.service.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/sub.items.service.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadLocation: () => (/* binding */ loadLocation),
/* harmony export */   updateLocationPriority: () => (/* binding */ updateLocationPriority)
/* harmony export */ });
/* harmony import */ var _common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _sub_items_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.items.module.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/sub.items.module.js");
/* harmony import */ var _endpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/endpoints.js");



var sortClauseGraphQLMap = {
  ContentId: '_contentId',
  ContentName: '_name',
  DateModified: '_dateModified',
  DatePublished: '_datePublished',
  LocationDepth: '_depth',
  LocationPath: '_path',
  LocationPriority: '_priority',
  SectionIdentifier: '_sectionIdentifier',
  SectionName: '_sectionName'
};

/**
 * Loads location's children
 *
 * @function loadLocation
 * @param {Object} restInfo - contains:
 * @param {String} restInfo.token
 * @param {String} restInfo.siteaccess
 * @param {Object} queryConfig - contains:
 * @param {Number} queryConfig.locationId
 * @param {Number} queryConfig.limit
 * @param {Number} queryConfig.cursor
 * @param {Object} queryConfig.sortClause
 * @param {Object} queryConfig.sortOrder
 * @param {Function} callback
 */
var loadLocation = function loadLocation(_ref, _ref2, callback) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess;
  var _ref2$locationId = _ref2.locationId,
    locationId = _ref2$locationId === void 0 ? 2 : _ref2$locationId,
    _ref2$limit = _ref2.limit,
    limit = _ref2$limit === void 0 ? 10 : _ref2$limit,
    cursor = _ref2.cursor,
    sortClause = _ref2.sortClause,
    sortOrder = _ref2.sortOrder;
  var queryAfter = cursor ? ", after: \"".concat(cursor, "\"") : '';
  var querySortClause = sortClauseGraphQLMap[sortClause];
  var querySortOrder = sortOrder === _sub_items_module_js__WEBPACK_IMPORTED_MODULE_1__.ASCENDING_SORT_ORDER ? '' : '_desc';
  var querySortBy = querySortClause ? "sortBy: [".concat(querySortClause, ", ").concat(querySortOrder, "], ") : '';
  var query = "\n    {\n        _repository {\n            location(locationId: ".concat(locationId, ") {\n                pathString\n                children(").concat(querySortBy, " first:").concat(limit, " ").concat(queryAfter, ") {\n                    totalCount\n                    pages {\n                        number\n                        cursor\n                    }\n                    edges {\n                        node {\n                            id\n                            remoteId\n                            invisible\n                            hidden\n                            priority\n                            pathString\n    \n                            content {\n                                _thumbnail {\n                                    uri\n                                    alternativeText\n                                    mimeType\n                                }\n                                _name\n                                _info {\n                                    id\n                                    name\n                                    remoteId\n                                    mainLanguageCode\n                                    owner {\n                                        name\n                                    }\n                                    currentVersion {\n                                        versionNumber\n                                        creator {\n                                            name\n                                        }\n                                        languageCodes\n                                    }\n                                    contentType {\n                                        name\n                                        identifier\n                                    }\n                                    section {\n                                        name\n                                    }\n                                    publishedDate {\n                                        timestamp\n                                    }\n                                    modificationDate {\n                                        timestamp\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }");
  var request = new Request(_endpoints_js__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_GRAPHQL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    body: JSON.stringify({
      query: query
    }),
    mode: 'cors',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(callback)["catch"](function () {
    return window.ibexa.helpers.notification.showErrorNotification('Cannot load location');
  });
};

/**
 * Updates location priority
 *
 * @function updateLocationPriority
 * @param {Object} params params hash containing: priority, location, token, siteaccess properties
 * @param {Function} callback
 */
var updateLocationPriority = function updateLocationPriority(_ref3, callback) {
  var priority = _ref3.priority,
    pathString = _ref3.pathString,
    token = _ref3.token,
    siteaccess = _ref3.siteaccess;
  var locationHref = "".concat(_endpoints_js__WEBPACK_IMPORTED_MODULE_2__.LOCATION_ENDPOINT).concat(pathString.slice(0, -1));
  var request = new Request(locationHref, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.ibexa.api.Location+json',
      'Content-Type': 'application/vnd.ibexa.api.LocationUpdate+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token,
      'X-HTTP-Method-Override': 'PATCH'
    },
    credentials: 'same-origin',
    mode: 'cors',
    body: JSON.stringify({
      LocationUpdate: {
        priority: priority
      }
    })
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(callback)["catch"](function () {
    return window.ibexa.helpers.notification.showErrorNotification('An error occurred while updating location priority');
  });
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/sub.items.module.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/sub.items.module.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASCENDING_SORT_ORDER: () => (/* binding */ ASCENDING_SORT_ORDER),
/* harmony export */   VIEW_MODE_GRID: () => (/* binding */ VIEW_MODE_GRID),
/* harmony export */   VIEW_MODE_TABLE: () => (/* binding */ VIEW_MODE_TABLE),
/* harmony export */   "default": () => (/* binding */ SubItemsModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_view_switcher_view_switcher_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/view-switcher/view.switcher.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/view-switcher/view.switcher.component.js");
/* harmony import */ var _components_sub_items_list_sub_items_list_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sub-items-list/sub.items.list.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/sub-items-list/sub.items.list.component.js");
/* harmony import */ var _common_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/popup/popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");
/* harmony import */ var _components_action_btn_action_btn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/action-btn/action.btn.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/action-btn/action.btn.js");
/* harmony import */ var _common_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/pagination/pagination.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js");
/* harmony import */ var _components_no_items_no_items_component_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/no-items/no.items.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/components/no-items/no.items.component.js");
/* harmony import */ var _common_icon_icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/icon/icon.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _services_sub_items_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/sub.items.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/sub.items.service.js");
/* harmony import */ var _services_bulk_service_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/bulk.service.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/services/bulk.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var ASCENDING_SORT_ORDER = 'ascending';
var DESCENDING_SORT_ORDER = 'descending';
var DEFAULT_SORT_ORDER = ASCENDING_SORT_ORDER;
var ACTION_FLOW_ADD_LOCATIONS = 'add';
var ACTION_FLOW_MOVE = 'move';
var SUBITEMS_PADDING = 15;
var VIEW_MODE_TABLE = 'table';
var VIEW_MODE_GRID = 'grid';
var SubItemsModule = /*#__PURE__*/function (_Component) {
  _inherits(SubItemsModule, _Component);
  var _super = _createSuper(SubItemsModule);
  function SubItemsModule(props) {
    var _this;
    _classCallCheck(this, SubItemsModule);
    _this = _super.call(this, props);
    _this.afterPriorityUpdated = _this.afterPriorityUpdated.bind(_assertThisInitialized(_this));
    _this.switchView = _this.switchView.bind(_assertThisInitialized(_this));
    _this.handleItemPriorityUpdate = _this.handleItemPriorityUpdate.bind(_assertThisInitialized(_this));
    _this.toggleItemSelection = _this.toggleItemSelection.bind(_assertThisInitialized(_this));
    _this.toggleAllPageItemsSelection = _this.toggleAllPageItemsSelection.bind(_assertThisInitialized(_this));
    _this.onMoveBtnClick = _this.onMoveBtnClick.bind(_assertThisInitialized(_this));
    _this.closeUdw = _this.closeUdw.bind(_assertThisInitialized(_this));
    _this.onUdwConfirm = _this.onUdwConfirm.bind(_assertThisInitialized(_this));
    _this.onDeleteBtnClick = _this.onDeleteBtnClick.bind(_assertThisInitialized(_this));
    _this.onAddLocationsBtnClick = _this.onAddLocationsBtnClick.bind(_assertThisInitialized(_this));
    _this.onHideBtnClick = _this.onHideBtnClick.bind(_assertThisInitialized(_this));
    _this.onUnhideBtnClick = _this.onUnhideBtnClick.bind(_assertThisInitialized(_this));
    _this.closeBulkDeletePopup = _this.closeBulkDeletePopup.bind(_assertThisInitialized(_this));
    _this.closeBulkHidePopup = _this.closeBulkHidePopup.bind(_assertThisInitialized(_this));
    _this.closeBulkUnhidePopup = _this.closeBulkUnhidePopup.bind(_assertThisInitialized(_this));
    _this.onBulkDeletePopupConfirm = _this.onBulkDeletePopupConfirm.bind(_assertThisInitialized(_this));
    _this.onBulkHidePopupConfirm = _this.onBulkHidePopupConfirm.bind(_assertThisInitialized(_this));
    _this.onBulkUnhidePopupConfirm = _this.onBulkUnhidePopupConfirm.bind(_assertThisInitialized(_this));
    _this.afterBulkDelete = _this.afterBulkDelete.bind(_assertThisInitialized(_this));
    _this.afterBulkHide = _this.afterBulkHide.bind(_assertThisInitialized(_this));
    _this.afterBulkUnhide = _this.afterBulkUnhide.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.changeSorting = _this.changeSorting.bind(_assertThisInitialized(_this));
    _this.calculateSubItemsWidth = _this.calculateSubItemsWidth.bind(_assertThisInitialized(_this));
    _this.resizeSubItems = _this.resizeSubItems.bind(_assertThisInitialized(_this));
    _this._refListViewWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refMainContainerWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.bulkActionModalContainer = null;
    _this.udwContainer = null;
    var sortClauseData = _this.getDefaultSortClause(props.sortClauses);
    _this.state = {
      activeView: props.activeView,
      activePageItems: null,
      pages: [],
      selectedItems: new Map(),
      totalCount: props.totalCount,
      offset: props.offset,
      isDuringBulkOperation: false,
      isUdwOpened: false,
      isBulkDeletePopupVisible: false,
      isBulkHidePopupVisible: false,
      isBulkUnhidePopupVisible: false,
      activePageIndex: 0,
      listViewHeight: null,
      actionFlow: null,
      sortClause: sortClauseData.name,
      sortOrder: sortClauseData.order,
      subItemsWidth: _this.calculateSubItemsWidth()
    };
    return _this;
  }
  _createClass(SubItemsModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.udwContainer = document.getElementById('react-udw');
      this.bulkActionModalContainer = document.createElement('div');
      this.bulkActionModalContainer.classList.add('m-sub-items__bulk-action-modal-container');
      document.body.appendChild(this.bulkActionModalContainer);
      var animationFrame = null;
      var containerResizeObserver = new ResizeObserver(function () {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
        }
        animationFrame = window.requestAnimationFrame(function () {
          _this2.resizeSubItems();
        });
      });
      containerResizeObserver.observe(this._refMainContainerWrapper.current);
      if (!this.state.activePageItems) {
        this.loadPage(0);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state = this.state,
        activePageIndex = _this$state.activePageIndex,
        activePageItems = _this$state.activePageItems,
        totalCount = _this$state.totalCount;
      var itemsPerPage = this.props.limit;
      var pagesCount = Math.ceil(totalCount / itemsPerPage);
      var pageDoesNotExist = activePageIndex > pagesCount - 1 && activePageIndex !== 0;
      if (pageDoesNotExist) {
        this.setState({
          activePageIndex: pagesCount - 1
        });
        return;
      }
      var shouldLoadPage = !activePageItems;
      if (shouldLoadPage) {
        this.loadPage(activePageIndex);
      }
      ibexa.helpers.tooltips.parse();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.bulkActionModalContainer);
    }
  }, {
    key: "resizeSubItems",
    value: function resizeSubItems() {
      var calculatedWidth = this.calculateSubItemsWidth();
      var subItemsWidth = this.state.subItemsWidth;
      if (calculatedWidth !== subItemsWidth) {
        this.setState({
          subItemsWidth: calculatedWidth
        });
      }
    }
  }, {
    key: "calculateSubItemsWidth",
    value: function calculateSubItemsWidth() {
      var mainRow = document.querySelector('.ibexa-main-row');
      var mainRowRect = mainRow.getBoundingClientRect();
      return mainRowRect.width - SUBITEMS_PADDING;
    }
  }, {
    key: "getDefaultSortClause",
    value: function getDefaultSortClause(sortClauses) {
      var objKeys = Object.keys(sortClauses);
      if (!objKeys.length) {
        return {
          name: null,
          order: null
        };
      }
      var name = objKeys[0];
      var order = sortClauses[name];
      return {
        name: name,
        order: order
      };
    }
  }, {
    key: "updateListViewHeight",
    value: function updateListViewHeight() {
      var _this3 = this;
      this.setState(function () {
        return {
          listViewHeight: _this3._refListViewWrapper.current.offsetHeight
        };
      });
    }

    /**
     * Loads items into the list
     *
     * @method loadPage
     * @memberof SubItemsModule
     */
  }, {
    key: "loadPage",
    value: function loadPage(pageIndex) {
      var _this4 = this;
      var _this$props = this.props,
        itemsPerPage = _this$props.limit,
        locationId = _this$props.parentLocationId,
        loadLocation = _this$props.loadLocation,
        restInfo = _this$props.restInfo;
      var _this$state2 = this.state,
        sortClause = _this$state2.sortClause,
        sortOrder = _this$state2.sortOrder;
      var page = this.state.pages.find(function (_ref) {
        var number = _ref.number;
        return number === pageIndex + 1;
      });
      var cursor = page ? page.cursor : null;
      var queryConfig = {
        locationId: locationId,
        limit: itemsPerPage,
        sortClause: sortClause,
        sortOrder: sortOrder,
        cursor: cursor
      };
      loadLocation(restInfo, queryConfig, function (response) {
        var _response$data$_repos = response.data._repository.location.children,
          totalCount = _response$data$_repos.totalCount,
          pages = _response$data$_repos.pages,
          edges = _response$data$_repos.edges;
        var activePageItems = edges.map(function (edge) {
          return edge.node;
        });
        _this4.setState(function () {
          return {
            activePageItems: activePageItems,
            totalCount: totalCount,
            pages: pages
          };
        });
      });
    }
  }, {
    key: "updateTotalCountState",
    value: function updateTotalCountState(totalCount) {
      this.setState(function () {
        return {
          totalCount: totalCount
        };
      });
    }
  }, {
    key: "discardActivePageItems",
    value: function discardActivePageItems() {
      this.updateListViewHeight();
      this.setState(function () {
        return {
          activePageItems: null
        };
      });
    }
  }, {
    key: "changeSorting",
    value: function changeSorting(sortClause) {
      var _this5 = this;
      this.updateListViewHeight();
      this.setState(function (state) {
        return {
          sortClause: sortClause,
          sortOrder: _this5.getSortOrder(state.sortClause, sortClause, state.sortOrder),
          activePageItems: null
        };
      });
    }
  }, {
    key: "getSortOrder",
    value: function getSortOrder(sortClause, newSortClause, currentSortOrder) {
      return newSortClause === sortClause ? this.getOppositeSortOrder(currentSortOrder) : DEFAULT_SORT_ORDER;
    }
  }, {
    key: "getOppositeSortOrder",
    value: function getOppositeSortOrder(sortOrder) {
      return sortOrder === ASCENDING_SORT_ORDER ? DESCENDING_SORT_ORDER : ASCENDING_SORT_ORDER;
    }

    /**
     * Updates item priority
     *
     * @method handleItemPriorityUpdate
     * @param {Object} data data hash containing: priority, location, token, siteaccess
     * @memberof SubItemsModule
     */
  }, {
    key: "handleItemPriorityUpdate",
    value: function handleItemPriorityUpdate(data) {
      this.props.updateLocationPriority(_objectSpread(_objectSpread({}, data), this.props.restInfo), this.afterPriorityUpdated);
    }

    /**
     * Updates module state after item's priority has been updated
     *
     * @method afterPriorityUpdated
     * @param {Object} response
     * @memberof SubItemsModule
     */
  }, {
    key: "afterPriorityUpdated",
    value: function afterPriorityUpdated(response) {
      if (this.state.sortClause === 'LocationPriority') {
        this.discardActivePageItems();
        this.refreshContentTree();
        return;
      }
      this.updateItemLocation(response.Location);
    }
  }, {
    key: "updateItemLocation",
    value: function updateItemLocation(location) {
      this.setState(function (_ref2) {
        var activePageItems = _ref2.activePageItems;
        var itemIndex = activePageItems.findIndex(function (item) {
          return item.id === location.id;
        });
        if (itemIndex === -1) {
          return null;
        }
        var item = activePageItems[itemIndex];
        var updatedItem = (0,_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(item);
        var updatedPageItems = _toConsumableArray(activePageItems);
        updatedItem.priority = location.priority;
        updatedPageItems[itemIndex] = updatedItem;
        return {
          activePageItems: updatedPageItems
        };
      });
    }

    /**
     * Switches active view
     *
     * @method switchView
     * @param {String} activeView
     * @memberof SubItemsModule
     */
  }, {
    key: "switchView",
    value: function switchView(activeView) {
      var _this6 = this;
      this.setState(function () {
        return {
          activeView: activeView
        };
      }, function () {
        ibexa.helpers.tooltips.hideAll();
        window.localStorage.setItem("ibexa-subitems-active-view-location-".concat(_this6.props.parentLocationId), activeView);
      });
    }
  }, {
    key: "toggleItemSelection",
    value: function toggleItemSelection(item, isSelected) {
      var selectedItems = this.state.selectedItems;
      var updatedSelectedItems = new Map(selectedItems);
      var locationId = item.id;
      if (isSelected) {
        updatedSelectedItems.set(locationId, item);
      } else {
        updatedSelectedItems["delete"](locationId);
      }
      this.setState(function () {
        return {
          selectedItems: updatedSelectedItems
        };
      });
    }
  }, {
    key: "toggleAllPageItemsSelection",
    value: function toggleAllPageItemsSelection(select) {
      var activePageItems = this.state.activePageItems;
      if (select) {
        this.selectItems(activePageItems);
      } else {
        var locationsIds = activePageItems.map(function (item) {
          return item.id;
        });
        var locationsIdsSet = new Set(locationsIds);
        this.deselectItems(locationsIdsSet);
      }
    }

    /**
     *
     * @param {Array} itemsToSelect
     */
  }, {
    key: "selectItems",
    value: function selectItems(itemsToSelect) {
      var selectedItems = this.state.selectedItems;
      var newSelectedItems = itemsToSelect.map(function (item) {
        return [item.id, item];
      });
      var newSelection = new Map([].concat(_toConsumableArray(selectedItems), _toConsumableArray(newSelectedItems)));
      this.setState(function () {
        return {
          selectedItems: newSelection
        };
      });
    }

    /**
     * Deselects items with locations with provided IDs.
     *
     * @param {Set} locationsIds
     */
  }, {
    key: "deselectItems",
    value: function deselectItems(locationsIds) {
      var selectedItems = this.state.selectedItems;
      var newSelection = new Map(_toConsumableArray(selectedItems).filter(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          locationId = _ref4[0];
        return !locationsIds.has(locationId);
      }));
      this.setState(function () {
        return {
          selectedItems: newSelection
        };
      });
    }
  }, {
    key: "deselectAllItems",
    value: function deselectAllItems() {
      this.setState(function () {
        return {
          selectedItems: new Map()
        };
      });
    }
  }, {
    key: "toggleBulkOperationStatusState",
    value: function toggleBulkOperationStatusState(isDuringBulkOperation) {
      this.setState(function () {
        return {
          isDuringBulkOperation: isDuringBulkOperation
        };
      });
    }
  }, {
    key: "onMoveBtnClick",
    value: function onMoveBtnClick() {
      this.setState(function () {
        return {
          actionFlow: ACTION_FLOW_MOVE
        };
      });
      this.toggleUdw(true);
    }
  }, {
    key: "onAddLocationsBtnClick",
    value: function onAddLocationsBtnClick() {
      this.setState(function () {
        return {
          actionFlow: ACTION_FLOW_ADD_LOCATIONS
        };
      });
      this.toggleUdw(true);
    }
  }, {
    key: "bulkMove",
    value: function bulkMove(location) {
      this.toggleBulkOperationStatusState(true);
      var restInfo = this.props.restInfo;
      var selectedItems = this.state.selectedItems;
      var itemsToMove = _toConsumableArray(selectedItems.values());
      (0,_services_bulk_service_js__WEBPACK_IMPORTED_MODULE_12__.bulkMoveLocations)(restInfo, itemsToMove, location._href, this.afterBulkMove.bind(this, location));
    }
  }, {
    key: "bulkAdd",
    value: function bulkAdd(location) {
      this.toggleBulkOperationStatusState(true);
      var restInfo = this.props.restInfo;
      var selectedItems = this.state.selectedItems;
      var itemsToAddLocationFor = _toConsumableArray(selectedItems.values());
      (0,_services_bulk_service_js__WEBPACK_IMPORTED_MODULE_12__.bulkAddLocations)(restInfo, itemsToAddLocationFor, location._href, this.afterBulkAddLocation.bind(this, location));
    }
  }, {
    key: "afterBulkMove",
    value: function afterBulkMove(location, movedItems, notMovedItems) {
      var totalCount = this.state.totalCount;
      this.refreshContentTree();
      this.updateTotalCountState(totalCount - movedItems.length);
      this.deselectAllItems();
      this.discardActivePageItems();
      this.updateTrashModal();
      this.toggleBulkOperationStatusState(false);
      if (notMovedItems.length) {
        var modalTableTitle = Translator.trans( /*@Desc("%itemsCount% Content items cannot be moved")*/
        'bulk_move.error.modal.table_title', {
          itemsCount: notMovedItems.length
        }, 'sub_items');
        var notificationMessage = Translator.trans( /*@Desc("%notMovedCount% of the %totalCount% selected item(s) could not be moved because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.")*/'bulk_move.error.message', {
          notMovedCount: notMovedItems.length,
          totalCount: movedItems.length + notMovedItems.length
        }, 'sub_items');
        var rawPlaceholdersMap = {
          moreInformationLink: Translator.trans( /*@Desc("<u><a class='ibexa-notification-btn ibexa-notification-btn--show-modal'>Click here for more information.</a></u><br>")*/
          'bulk_action.error.more_info', {}, 'sub_items')
        };
        this.handleBulkOperationFailedNotification(notMovedItems, modalTableTitle, notificationMessage, rawPlaceholdersMap);
      }
      if (movedItems.length) {
        var message = Translator.trans( /*@Desc("Content item(s) sent to {{ locationLink }}")*/
        'bulk_move.success.message', {}, 'sub_items');
        var _rawPlaceholdersMap = {
          locationLink: Translator.trans( /*@Desc("<u><a href='%locationHref%'>%locationName%</a></u>")*/
          'bulk_action.success.link_to_location', {
            locationName: ibexa.helpers.text.escapeHTML(location.ContentInfo.Content.Name),
            locationHref: this.props.generateLink(location.id, location.ContentInfo.Content._id)
          }, 'sub_items')
        };
        window.ibexa.helpers.notification.showSuccessNotification(message, function () {}, _rawPlaceholdersMap);
      }
    }
  }, {
    key: "afterBulkHide",
    value: function afterBulkHide(successItems, failedItems) {
      this.deselectAllItems();
      this.discardActivePageItems();
      this.toggleBulkOperationStatusState(false);
      if (failedItems.length) {
        var modalTableTitle = Translator.trans( /*@Desc("%itemsCount% Content item(s) cannot be hidden")*/
        'bulk_hide.error.modal.table_title', {
          itemsCount: failedItems.length
        }, 'sub_items');
        var notificationMessage = Translator.trans( /*@Desc("%failedCount% of the %totalCount% selected item(s) could not be hidden because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator to obtain permissions.")*/
        'bulk_hide.error.message', {
          failedCount: failedItems.length,
          totalCount: successItems.length + failedItems.length
        }, 'sub_items');
        var rawPlaceholdersMap = {
          moreInformationLink: Translator.trans( /*@Desc("<u><a class='ibexa-notification-btn ibexa-notification-btn--show-modal'>Click here for more information.</a></u><br>")*/
          'bulk_action.error.more_info', {}, 'sub_items')
        };
        this.handleBulkOperationFailedNotification(failedItems, modalTableTitle, notificationMessage, rawPlaceholdersMap);
      }
      if (successItems.length) {
        var message = Translator.trans( /*@Desc("Location(s) hidden.")*/
        'bulk_hide.success.message', {}, 'sub_items');
        window.ibexa.helpers.notification.showSuccessNotification(message);
      }
    }
  }, {
    key: "afterBulkUnhide",
    value: function afterBulkUnhide(successItems, failedItems) {
      this.deselectAllItems();
      this.discardActivePageItems();
      this.toggleBulkOperationStatusState(false);
      if (failedItems.length) {
        var modalTableTitle = Translator.trans( /*@Desc("%itemsCount% Location(s) cannot be revealed")*/
        'bulk_unhide.error.modal.table_title', {
          itemsCount: failedItems.length
        }, 'sub_items');
        var notificationMessage = Translator.trans( /*@Desc("%failedCount% of the %totalCount% selected Location(s) could not be revealed because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator to obtain permissions.")*/
        'bulk_unhide.error.message', {
          failedCount: failedItems.length,
          totalCount: successItems.length + failedItems.length
        }, 'sub_items');
        var rawPlaceholdersMap = {
          moreInformationLink: Translator.trans( /*@Desc("<u><a class='ibexa-notification-btn ibexa-notification-btn--show-modal'>Click here for more information.</a></u><br>")*/
          'bulk_action.error.more_info', {}, 'sub_items')
        };
        this.handleBulkOperationFailedNotification(failedItems, modalTableTitle, notificationMessage, rawPlaceholdersMap);
      }
      if (successItems.length) {
        var message = Translator.trans( /*@Desc("The selected location(s) have been revealed.")*/
        'bulk_unhide.success.message', {}, 'sub_items');
        window.ibexa.helpers.notification.showSuccessNotification(message);
      }
    }
  }, {
    key: "afterBulkAddLocation",
    value: function afterBulkAddLocation(location, successItems, failedItems) {
      this.deselectAllItems();
      this.discardActivePageItems();
      this.toggleBulkOperationStatusState(false);
      if (failedItems.length) {
        var modalTableTitle = Translator.trans( /*@Desc("%itemsCount% Location(s) cannot be added")*/
        'bulk_add_location.error.modal.table_title', {
          itemsCount: failedItems.length
        }, 'sub_items');
        var notificationMessage = Translator.trans( /*@Desc("%failedCount% of the %totalCount% selected Locations(s) could not be added because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator to obtain permissions.")*/
        'bulk_add_location.error.message', {
          failedCount: failedItems.length,
          totalCount: successItems.length + failedItems.length
        }, 'sub_items');
        var rawPlaceholdersMap = {
          moreInformationLink: Translator.trans( /*@Desc("<u><a class='ibexa-notification-btn ibexa-notification-btn--show-modal'>Click here for more information.</a></u><br>")*/
          'bulk_action.error.more_info', {}, 'sub_items')
        };
        this.handleBulkOperationFailedNotification(failedItems, modalTableTitle, notificationMessage, rawPlaceholdersMap);
      }
      if (successItems.length) {
        var message = Translator.trans( /*@Desc("Location(s) added to {{ locationLink }}.")*/
        'bulk_add_location.success.message', {}, 'sub_items');
        var _rawPlaceholdersMap2 = {
          locationLink: Translator.trans( /*@Desc("<u><a href='%locationHref%'>%locationName%</a></u>")*/
          'bulk_action.success.link_to_location', {
            locationName: ibexa.helpers.text.escapeHTML(location.ContentInfo.Content.TranslatedName),
            locationHref: this.props.generateLink(location.id, location.ContentInfo.id)
          }, 'sub_items')
        };
        window.ibexa.helpers.notification.showSuccessNotification(message, function () {}, _rawPlaceholdersMap2);
      }
    }
  }, {
    key: "toggleUdw",
    value: function toggleUdw(show) {
      this.setState(function () {
        return {
          isUdwOpened: show
        };
      });
    }
  }, {
    key: "closeUdw",
    value: function closeUdw() {
      this.toggleUdw(false);
    }
  }, {
    key: "onUdwConfirm",
    value: function onUdwConfirm(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
        selectedLocation = _ref6[0];
      this.closeUdw();
      var actionFlow = this.state.actionFlow;
      if (actionFlow === ACTION_FLOW_MOVE) {
        this.bulkMove(selectedLocation);
      } else {
        this.bulkAdd(selectedLocation);
      }
    }
  }, {
    key: "renderUdw",
    value: function renderUdw() {
      var _this$state3 = this.state,
        isUdwOpened = _this$state3.isUdwOpened,
        actionFlow = _this$state3.actionFlow;
      if (!isUdwOpened) {
        return null;
      }
      var UniversalDiscovery = window.ibexa.modules.UniversalDiscovery;
      var _this$props2 = this.props,
        restInfo = _this$props2.restInfo,
        parentLocationId = _this$props2.parentLocationId,
        udwConfigBulkMoveItems = _this$props2.udwConfigBulkMoveItems,
        udwConfigBulkAddLocation = _this$props2.udwConfigBulkAddLocation;
      var selectedItems = this.state.selectedItems;
      var selectedItemsLocationsIds = _toConsumableArray(selectedItems.values()).map(function (_ref7) {
        var id = _ref7.id;
        return id;
      });
      var excludedLocations = [parentLocationId].concat(_toConsumableArray(selectedItemsLocationsIds));
      var title = Translator.trans( /*@Desc("Choose Location")*/'udw.choose_location.title', {}, 'sub_items');
      var udwConfig = actionFlow === ACTION_FLOW_MOVE ? udwConfigBulkMoveItems : udwConfigBulkAddLocation;
      var udwProps = _objectSpread({
        title: title,
        restInfo: restInfo,
        onCancel: this.closeUdw,
        onConfirm: this.onUdwConfirm,
        canSelectContent: function canSelectContent(_ref8, callback) {
          var item = _ref8.item;
          callback(!excludedLocations.includes(item.id));
        }
      }, udwConfig);
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UniversalDiscovery, udwProps), this.udwContainer);
    }
  }, {
    key: "onDeleteBtnClick",
    value: function onDeleteBtnClick() {
      this.toggleBulkDeletePopup(true);
    }
  }, {
    key: "onHideBtnClick",
    value: function onHideBtnClick() {
      this.toggleBulkHidePopup(true);
    }
  }, {
    key: "onUnhideBtnClick",
    value: function onUnhideBtnClick() {
      this.toggleBulkUnhidePopup(true);
    }
  }, {
    key: "bulkDelete",
    value: function bulkDelete() {
      this.toggleBulkOperationStatusState(true);
      var restInfo = this.props.restInfo;
      var selectedItems = this.state.selectedItems;
      var itemsToDelete = _toConsumableArray(selectedItems.values());
      (0,_services_bulk_service_js__WEBPACK_IMPORTED_MODULE_12__.bulkDeleteItems)(restInfo, itemsToDelete, this.afterBulkDelete);
    }
  }, {
    key: "bulkHide",
    value: function bulkHide() {
      this.toggleBulkOperationStatusState(true);
      var restInfo = this.props.restInfo;
      var selectedItems = this.state.selectedItems;
      var items = _toConsumableArray(selectedItems.values());
      (0,_services_bulk_service_js__WEBPACK_IMPORTED_MODULE_12__.bulkHideLocations)(restInfo, items, this.afterBulkHide);
    }
  }, {
    key: "bulkUnhide",
    value: function bulkUnhide() {
      this.toggleBulkOperationStatusState(true);
      var restInfo = this.props.restInfo;
      var selectedItems = this.state.selectedItems;
      var items = _toConsumableArray(selectedItems.values());
      (0,_services_bulk_service_js__WEBPACK_IMPORTED_MODULE_12__.bulkUnhideLocations)(restInfo, items, this.afterBulkUnhide);
    }
  }, {
    key: "afterBulkDelete",
    value: function afterBulkDelete(deletedItems, notDeletedItems) {
      var totalCount = this.state.totalCount;
      var isUser = function isUser(_ref9) {
        var content = _ref9.content;
        return window.ibexa.adminUiConfig.userContentTypes.includes(content._info.contentType.identifier);
      };
      this.refreshContentTree();
      this.updateTotalCountState(totalCount - deletedItems.length);
      this.deselectAllItems();
      this.discardActivePageItems();
      this.updateTrashModal();
      this.toggleBulkOperationStatusState(false);
      if (notDeletedItems.length) {
        var hadUserContentItemFailed = notDeletedItems.some(isUser);
        var hadNonUserContentItemFailed = notDeletedItems.some(function (item) {
          return !isUser(item);
        });
        var modalTableTitle = null;
        var message = null;
        var rawPlaceholdersMap = {
          moreInformationLink: Translator.trans( /*@Desc("<u><a class='ibexa-notification-btn ibexa-notification-btn--show-modal'>Click here for more information.</a></u><br>")*/
          'bulk_action.error.more_info', {}, 'sub_items')
        };
        if (hadUserContentItemFailed && hadNonUserContentItemFailed) {
          modalTableTitle = Translator.trans( /*@Desc("%itemsCount% Content item(s) cannot be deleted or sent to Trash")*/'bulk_delete.error.modal.table_title.users_with_nonusers', {
            itemsCount: notDeletedItems.length
          }, 'sub_items');
          message = Translator.trans( /*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be deleted or sent to Trash because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.")*/'bulk_delete.error.message.users_with_nonusers', {
            notDeletedCount: notDeletedItems.length,
            totalCount: deletedItems.length + notDeletedItems.length
          }, 'sub_items');
        } else if (hadUserContentItemFailed) {
          modalTableTitle = Translator.trans( /*@Desc("%itemsCount% User(s) cannot be deleted")*/'bulk_delete.error.modal.table_title.users', {
            itemsCount: notDeletedItems.length
          }, 'sub_items');
          message = Translator.trans( /*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be deleted because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.")*/'bulk_delete.error.message.users', {
            notDeletedCount: notDeletedItems.length,
            totalCount: deletedItems.length + notDeletedItems.length
          }, 'sub_items');
        } else {
          modalTableTitle = Translator.trans( /*@Desc("%itemsCount% Content item(s) cannot be sent to Trash")*/'bulk_delete.error.modal.table_title.nonusers', {
            itemsCount: notDeletedItems.length
          }, 'sub_items');
          message = Translator.trans( /*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be sent to Trash because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.")*/'bulk_delete.error.message.nonusers', {
            notDeletedCount: notDeletedItems.length,
            totalCount: deletedItems.length + notDeletedItems.length
          }, 'sub_items');
        }
        this.handleBulkOperationFailedNotification(notDeletedItems, modalTableTitle, message, rawPlaceholdersMap);
      } else {
        var anyUserContentItemDeleted = deletedItems.some(isUser);
        var anyNonUserContentItemDeleted = deletedItems.some(function (location) {
          return !isUser(location);
        });
        var _message = null;
        if (anyUserContentItemDeleted && anyNonUserContentItemDeleted) {
          _message = Translator.trans( /*@Desc("Content item(s) sent to Trash. User(s) deleted.")*/'bulk_delete.success.message.users_with_nonusers', {}, 'sub_items');
        } else if (anyUserContentItemDeleted) {
          _message = Translator.trans( /*@Desc("User(s) deleted.")*/'bulk_delete.success.message.users', {}, 'sub_items');
        } else {
          _message = Translator.trans( /*@Desc("Content item(s) sent to Trash.")*/'bulk_delete.success.message.nonusers', {}, 'sub_items');
        }
        window.ibexa.helpers.notification.showSuccessNotification(_message);
      }
    }
  }, {
    key: "toggleBulkDeletePopup",
    value: function toggleBulkDeletePopup(show) {
      this.setState(function () {
        return {
          isBulkDeletePopupVisible: show
        };
      });
    }
  }, {
    key: "toggleBulkHidePopup",
    value: function toggleBulkHidePopup(show) {
      this.setState(function () {
        return {
          isBulkHidePopupVisible: show
        };
      });
    }
  }, {
    key: "toggleBulkUnhidePopup",
    value: function toggleBulkUnhidePopup(show) {
      this.setState(function () {
        return {
          isBulkUnhidePopupVisible: show
        };
      });
    }
  }, {
    key: "closeBulkDeletePopup",
    value: function closeBulkDeletePopup() {
      this.toggleBulkDeletePopup(false);
    }
  }, {
    key: "closeBulkHidePopup",
    value: function closeBulkHidePopup() {
      this.toggleBulkHidePopup(false);
    }
  }, {
    key: "closeBulkUnhidePopup",
    value: function closeBulkUnhidePopup() {
      this.toggleBulkUnhidePopup(false);
    }
  }, {
    key: "onBulkDeletePopupConfirm",
    value: function onBulkDeletePopupConfirm() {
      this.closeBulkDeletePopup();
      this.bulkDelete();
    }
  }, {
    key: "onBulkHidePopupConfirm",
    value: function onBulkHidePopupConfirm() {
      this.closeBulkHidePopup();
      this.bulkHide();
    }
  }, {
    key: "onBulkUnhidePopupConfirm",
    value: function onBulkUnhidePopupConfirm() {
      this.closeBulkUnhidePopup();
      this.bulkUnhide();
    }

    /**
     * Shows warning notification which has a button.
     * Clicking the button should cause appearance of the modal
     * with list of items, which failed to be deleted/moved.
     *
     * @param {Array} failedItems
     * @param {String} modalTableTitle
     * @param {String} notificationMessage
     * @param {Object} rawPlaceholdersMap
     */
  }, {
    key: "handleBulkOperationFailedNotification",
    value: function handleBulkOperationFailedNotification(failedItems, modalTableTitle, notificationMessage, rawPlaceholdersMap) {
      var _this7 = this;
      var failedItemsData = failedItems.map(function (_ref10) {
        var content = _ref10.content;
        return {
          contentTypeName: content._info.contentType.name,
          contentName: content._name
        };
      });
      window.ibexa.helpers.notification.showWarningNotification(notificationMessage, function (notificationNode) {
        var showModalBtn = notificationNode.querySelector('.ibexa-notification-btn--show-modal');
        if (!showModalBtn) {
          return;
        }
        showModalBtn.addEventListener('click', _this7.props.showBulkActionFailedModal.bind(null, modalTableTitle, failedItemsData));
      }, rawPlaceholdersMap);
    }
  }, {
    key: "refreshContentTree",
    value: function refreshContentTree() {
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
    }
  }, {
    key: "renderDeleteConfirmationPopupFooter",
    value: function renderDeleteConfirmationPopupFooter(selectionInfo) {
      var cancelLabel = Translator.trans( /*@Desc("Cancel")*/'bulk_action.popup.cancel', {}, 'sub_items');
      var isUserContentItemSelected = selectionInfo.isUserContentItemSelected,
        isNonUserContentItemSelected = selectionInfo.isNonUserContentItemSelected;
      var confirmLabel = '';
      if (!isUserContentItemSelected && isNonUserContentItemSelected) {
        confirmLabel = Translator.trans( /*@Desc("Send to Trash")*/'bulk_delete.popup.confirm.nonusers', {}, 'sub_items');
      } else {
        confirmLabel = Translator.trans( /*@Desc("Delete")*/'bulk_delete.popup.confirm.users_and_users_with_nonusers', {}, 'sub_items');
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.onBulkDeletePopupConfirm,
        type: "button",
        className: "btn ibexa-btn ibexa-btn--primary ibexa-btn--trigger"
      }, confirmLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.closeBulkDeletePopup,
        type: "button",
        className: "btn ibexa-btn ibexa-btn--secondary",
        "data-bs-dismiss": "modal"
      }, cancelLabel));
    }
  }, {
    key: "renderHideConfirmationPopupFooter",
    value: function renderHideConfirmationPopupFooter() {
      var cancelLabel = Translator.trans( /*@Desc("Cancel")*/'bulk_action.popup.cancel', {}, 'sub_items');
      var confirmLabel = Translator.trans( /*@Desc("Hide")*/'bulk_hide.popup.confirm', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.onBulkHidePopupConfirm,
        type: "button",
        className: "btn ibexa-btn ibexa-btn--primary ibexa-btn--trigger"
      }, confirmLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.closeBulkHidePopup,
        type: "button",
        className: "btn ibexa-btn ibexa-btn--secondary",
        "data-bs-dismiss": "modal"
      }, cancelLabel));
    }
  }, {
    key: "renderUnhideConfirmationPopupFooter",
    value: function renderUnhideConfirmationPopupFooter() {
      var cancelLabel = Translator.trans( /*@Desc("Cancel")*/'bulk_action.popup.cancel', {}, 'sub_items');
      var confirmLabel = Translator.trans( /*@Desc("Reveal")*/'bulk_unhide.popup.confirm', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.onBulkUnhidePopupConfirm,
        type: "button",
        className: "btn ibexa-btn ibexa-btn--primary ibexa-btn--trigger"
      }, confirmLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.closeBulkUnhidePopup,
        type: "button",
        className: "btn ibexa-btn ibexa-btn--secondary",
        "data-bs-dismiss": "modal"
      }, cancelLabel));
    }
  }, {
    key: "getSelectionInfo",
    value: function getSelectionInfo() {
      var selectedItems = this.state.selectedItems;
      var isUserContentItemSelected = false;
      var isNonUserContentItemSelected = false;
      var _iterator = _createForOfIteratorHelper(selectedItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            content = _step$value[1].content;
          if (isUserContentItemSelected && isNonUserContentItemSelected) {
            break;
          }
          var isUserContentItem = window.ibexa.adminUiConfig.userContentTypes.includes(content._info.contentType.identifier);
          if (isUserContentItem) {
            isUserContentItemSelected = true;
          } else {
            isNonUserContentItemSelected = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return {
        isUserContentItemSelected: isUserContentItemSelected,
        isNonUserContentItemSelected: isNonUserContentItemSelected
      };
    }
  }, {
    key: "renderDeleteConfirmationPopup",
    value: function renderDeleteConfirmationPopup() {
      var isBulkDeletePopupVisible = this.state.isBulkDeletePopupVisible;
      if (!isBulkDeletePopupVisible) {
        return null;
      }
      var confirmationMessageUsers = Translator.trans( /*@Desc("Are you sure you want to delete the selected user(s)?")*/'bulk_delete.popup.message.users', {}, 'sub_items');
      var confirmationMessageNonUsers = Translator.trans( /*@Desc("Are you sure you want to send the selected Content item(s) to Trash?")*/'bulk_delete.popup.message.nonusers', {}, 'sub_items');
      var confirmationMessageUsersAndNonUsers = Translator.trans( /*@Desc("Are you sure you want to delete the selected user(s) and send the other selected Content item(s) to Trash?")*/'bulk_delete.popup.message.users_with_nonusers', {}, 'sub_items');
      var selectionInfo = this.getSelectionInfo();
      var isUserContentItemSelected = selectionInfo.isUserContentItemSelected,
        isNonUserContentItemSelected = selectionInfo.isNonUserContentItemSelected;
      var confirmationMessage = '';
      if (isUserContentItemSelected && isNonUserContentItemSelected) {
        confirmationMessage = confirmationMessageUsersAndNonUsers;
      } else if (isUserContentItemSelected) {
        confirmationMessage = confirmationMessageUsers;
      } else {
        confirmationMessage = confirmationMessageNonUsers;
      }
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClose: this.closeBulkDeletePopup,
        isVisible: isBulkDeletePopupVisible,
        isLoading: false,
        size: "medium",
        footerChildren: this.renderDeleteConfirmationPopupFooter(selectionInfo),
        noHeader: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-sub-items__confirmation-modal-body"
      }, confirmationMessage)), this.bulkActionModalContainer);
    }
  }, {
    key: "renderHideConfirmationPopup",
    value: function renderHideConfirmationPopup() {
      var isBulkHidePopupVisible = this.state.isBulkHidePopupVisible;
      if (!isBulkHidePopupVisible) {
        return null;
      }
      var confirmationMessage = Translator.trans( /*@Desc("Are you sure you want to hide the selected Location(s)?")*/
      'bulk_hide.popup.message', {}, 'sub_items');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClose: this.closeBulkHidePopup,
        isVisible: isBulkHidePopupVisible,
        isLoading: false,
        size: "medium",
        footerChildren: this.renderHideConfirmationPopupFooter(),
        noHeader: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-sub-items__confirmation-modal-body"
      }, confirmationMessage)), this.bulkActionModalContainer);
    }
  }, {
    key: "renderUnhideConfirmationPopup",
    value: function renderUnhideConfirmationPopup() {
      var isBulkUnhidePopupVisible = this.state.isBulkUnhidePopupVisible;
      if (!isBulkUnhidePopupVisible) {
        return null;
      }
      var confirmationMessage = Translator.trans( /*@Desc("Are you sure you want to reveal the selected Location(s)?")*/
      'bulk_unhide.popup.message', {}, 'sub_items');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClose: this.closeBulkUnhidePopup,
        isVisible: isBulkUnhidePopupVisible,
        isLoading: false,
        size: "medium",
        footerChildren: this.renderUnhideConfirmationPopupFooter(),
        noHeader: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-sub-items__confirmation-modal-body"
      }, confirmationMessage)), this.bulkActionModalContainer);
    }
  }, {
    key: "changePage",
    value: function changePage(pageIndex) {
      this.updateListViewHeight();
      this.setState(function () {
        return {
          activePageIndex: pageIndex,
          activePageItems: null
        };
      });
    }
  }, {
    key: "getPageSelectedLocationsIds",
    value: function getPageSelectedLocationsIds() {
      var _this$state4 = this.state,
        selectedItems = _this$state4.selectedItems,
        activePageItems = _this$state4.activePageItems;
      var selectedLocationsIds = _toConsumableArray(selectedItems.keys());
      var pageLocationsIds = _toConsumableArray(activePageItems.map(function (_ref11) {
        var id = _ref11.id;
        return id;
      }));
      var selectedPageLocationsIds = new Set(pageLocationsIds.filter(function (locationId) {
        return selectedLocationsIds.includes(locationId);
      }));
      return selectedPageLocationsIds;
    }

    /**
     * Renders extra actions
     *
     * @method renderExtraActions
     * @param {Object} action
     * @returns {JSX.Element}
     * @memberof SubItemsModule
     */
  }, {
    key: "renderExtraActions",
    value: function renderExtraActions(action, index) {
      var Action = action.component;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Action, _extends({
        key: index,
        className: "m-sub-items__action"
      }, action.attrs));
    }

    /**
     * Renders pagination info,
     * which is information about how many items of all user is
     * viewing at the moment
     *
     * @method renderPaginationInfo
     * @returns {JSX.Element}
     */
  }, {
    key: "renderPaginationInfo",
    value: function renderPaginationInfo() {
      var _this$state5 = this.state,
        totalCount = _this$state5.totalCount,
        activePageItems = _this$state5.activePageItems;
      if (totalCount === 0) {
        return null;
      }
      var viewingCount = activePageItems ? activePageItems.length : 0;
      var message = Translator.trans( /*@Desc("Viewing %viewingCount% out of %totalCount% sub-items")*/'viewing_message', {
        viewingCount: viewingCount,
        totalCount: totalCount
      }, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-sub-items__pagination-info ibexa-pagination__info",
        dangerouslySetInnerHTML: {
          __html: message
        }
      });
    }

    /**
     * Renders pagination
     *
     * @method renderPagination
     * @returns {JSX.Element|null}
     * @memberof SubItemsModule
     */
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      var itemsPerPage = this.props.limit;
      var totalCount = this.state.totalCount;
      if (totalCount === 0) {
        return null;
      }
      var _this$state6 = this.state,
        activePageIndex = _this$state6.activePageIndex,
        activePageItems = _this$state6.activePageItems,
        isDuringBulkOperation = _this$state6.isDuringBulkOperation;
      var isActivePageLoaded = !!activePageItems;
      var isPaginationDisabled = !isActivePageLoaded || isDuringBulkOperation;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        proximity: 1,
        itemsPerPage: itemsPerPage,
        activePageIndex: activePageIndex,
        totalCount: totalCount,
        onPageChange: this.changePage,
        disabled: isPaginationDisabled
      });
    }
  }, {
    key: "renderBulkMoveBtn",
    value: function renderBulkMoveBtn(disabled) {
      var label = Translator.trans( /*@Desc("Move")*/'move_btn.label', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_btn_action_btn_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: disabled,
        onClick: this.onMoveBtnClick,
        label: label,
        type: "move"
      });
    }
  }, {
    key: "renderBulkAddLocationBtn",
    value: function renderBulkAddLocationBtn(disabled) {
      var label = Translator.trans( /*@Desc("Add Locations")*/'add_locations_btn.label', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_btn_action_btn_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: disabled,
        onClick: this.onAddLocationsBtnClick,
        label: label,
        type: "create-location"
      });
    }
  }, {
    key: "renderBulkHideBtn",
    value: function renderBulkHideBtn(disabled) {
      var label = Translator.trans( /*@Desc("Hide")*/'hide_locations_btn.label', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_btn_action_btn_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: disabled,
        onClick: this.onHideBtnClick,
        label: label,
        type: "hide"
      });
    }
  }, {
    key: "renderBulkUnhideBtn",
    value: function renderBulkUnhideBtn(disabled) {
      var label = Translator.trans( /*@Desc("Reveal")*/'unhide_locations_btn.label', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_btn_action_btn_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: disabled,
        onClick: this.onUnhideBtnClick,
        label: label,
        type: "reveal"
      });
    }
  }, {
    key: "renderBulkDeleteBtn",
    value: function renderBulkDeleteBtn(disabled) {
      var label = Translator.trans( /*@Desc("Delete")*/'trash_btn.label', {}, 'sub_items');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_btn_action_btn_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: disabled,
        onClick: this.onDeleteBtnClick,
        label: label,
        type: "trash"
      });
    }
  }, {
    key: "renderSpinner",
    value: function renderSpinner() {
      var activePageItems = this.state.activePageItems;
      var isActivePageLoaded = !!activePageItems;
      if (isActivePageLoaded) {
        return null;
      }
      var listViewHeight = this.state.listViewHeight;
      var spinnerMinHeight = 90;
      var style = {
        height: listViewHeight && listViewHeight > spinnerMinHeight ? listViewHeight : spinnerMinHeight
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-sub-items__spinner-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "spinner",
        extraClasses: "m-sub-items__spinner ibexa-icon--medium ibexa-spin"
      })));
    }
  }, {
    key: "renderNoItems",
    value: function renderNoItems() {
      var _this$state7 = this.state,
        activePageItems = _this$state7.activePageItems,
        totalCount = _this$state7.totalCount;
      var isActivePageLoaded = !!activePageItems;
      if (totalCount || !isActivePageLoaded) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_no_items_no_items_component_js__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    }
  }, {
    key: "renderListView",
    value: function renderListView() {
      var _this$state8 = this.state,
        activePageItems = _this$state8.activePageItems,
        sortClause = _this$state8.sortClause,
        sortOrder = _this$state8.sortOrder;
      var pageLoaded = !!activePageItems;
      if (!pageLoaded) {
        return null;
      }
      var selectedPageLocationsIds = this.getPageSelectedLocationsIds();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sub_items_list_sub_items_list_component_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        activeView: this.state.activeView,
        handleItemPriorityUpdate: this.handleItemPriorityUpdate,
        items: activePageItems,
        languages: this.props.languages,
        handleEditItem: this.props.handleEditItem,
        generateLink: this.props.generateLink,
        onItemSelect: this.toggleItemSelection,
        toggleAllItemsSelect: this.toggleAllPageItemsSelection,
        selectedLocationsIds: selectedPageLocationsIds,
        onSortChange: this.changeSorting,
        sortClause: sortClause,
        sortOrder: sortOrder,
        languageContainerSelector: this.props.languageContainerSelector
      });
    }
  }, {
    key: "updateTrashModal",
    value: function updateTrashModal() {
      document.body.dispatchEvent(new CustomEvent('ibexa-trash-modal-refresh', {
        detail: {
          numberOfSubitems: this.state.totalCount
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var listTitle = Translator.trans( /*@Desc("Sub-items")*/'items_list.title', {}, 'sub_items');
      var _this$state9 = this.state,
        selectedItems = _this$state9.selectedItems,
        activeView = _this$state9.activeView,
        totalCount = _this$state9.totalCount,
        isDuringBulkOperation = _this$state9.isDuringBulkOperation,
        activePageItems = _this$state9.activePageItems,
        subItemsWidth = _this$state9.subItemsWidth;
      var nothingSelected = !selectedItems.size;
      var isTableViewActive = activeView === VIEW_MODE_TABLE;
      var pageLoaded = !!activePageItems;
      var bulkBtnDisabled = nothingSelected || !isTableViewActive || !pageLoaded;
      var bulkHideBtnDisabled = true;
      var bulkUnhideBtnDisabled = true;
      var listClassName = 'm-sub-items__list';
      if (isDuringBulkOperation) {
        listClassName = "".concat(listClassName, " ").concat(listClassName, "--processing");
      }
      if (!bulkBtnDisabled) {
        var selectedItemsValues = _toConsumableArray(selectedItems.values());
        bulkHideBtnDisabled = !selectedItemsValues.some(function (item) {
          return !item.hidden;
        });
        bulkUnhideBtnDisabled = !selectedItemsValues.some(function (item) {
          return !!item.hidden;
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this._refMainContainerWrapper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-sub-items",
        style: {
          width: "".concat(subItemsWidth, "px")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-table-header "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-table-header__headline"
      }, listTitle, " (", this.state.totalCount, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-table-header__actions"
      }, this.props.extraActions.map(this.renderExtraActions), this.renderBulkMoveBtn(bulkBtnDisabled), this.renderBulkAddLocationBtn(bulkBtnDisabled), this.renderBulkHideBtn(bulkHideBtnDisabled), this.renderBulkUnhideBtn(bulkUnhideBtnDisabled), this.renderBulkDeleteBtn(bulkBtnDisabled), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_view_switcher_view_switcher_component_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onViewChange: this.switchView,
        activeView: activeView,
        isDisabled: !totalCount
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this._refListViewWrapper,
        className: listClassName
      }, this.renderSpinner(), this.renderListView(), this.renderNoItems()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-sub-items__pagination-container ibexa-pagination"
      }, this.renderPaginationInfo(), this.renderPagination()), this.renderUdw(), this.renderDeleteConfirmationPopup(), this.renderHideConfirmationPopup(), this.renderUnhideConfirmationPopup()));
    }
  }]);
  return SubItemsModule;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ibexa.addConfig('modules.SubItems', SubItemsModule);
SubItemsModule.propTypes = {
  parentLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    token: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    siteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
  }).isRequired,
  loadLocation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  sortClauses: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  updateLocationPriority: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  activeView: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  extraActions: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    attrs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  })),
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),
  limit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  handleEditItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  generateLink: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  totalCount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  languages: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  udwConfigBulkMoveItems: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  udwConfigBulkAddLocation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  showBulkActionFailedModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  languageContainerSelector: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
SubItemsModule.defaultProps = {
  loadLocation: _services_sub_items_service__WEBPACK_IMPORTED_MODULE_11__.loadLocation,
  sortClauses: {},
  updateLocationPriority: _services_sub_items_service__WEBPACK_IMPORTED_MODULE_11__.updateLocationPriority,
  activeView: VIEW_MODE_TABLE,
  extraActions: [],
  languages: window.ibexa.adminUiConfig.languages,
  items: [],
  limit: parseInt(window.ibexa.adminUiConfig.subItems.limit, 10),
  offset: 0,
  totalCount: 0,
  languageContainerSelector: '.ibexa-extra-actions-container'
};

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ ((module) => {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/sub-items/sub.items.module.js"));
/******/ }
]);