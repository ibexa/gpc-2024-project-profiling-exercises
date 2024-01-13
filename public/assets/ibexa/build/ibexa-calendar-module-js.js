"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-calendar-module-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
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





var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var MIN_SEARCH_ITEMS_DEFAULT = 5;
var MIN_ITEMS_LIST_HEIGHT = 150;
var ITEMS_LIST_WIDGET_MARGIN = 8;
var ITEMS_LIST_SITE_MARGIN = ITEMS_LIST_WIDGET_MARGIN + 4;
var Dropdown = function Dropdown(_ref) {
  var dropdownListRef = _ref.dropdownListRef,
    value = _ref.value,
    options = _ref.options,
    onChange = _ref.onChange,
    small = _ref.small,
    single = _ref.single,
    extraClasses = _ref.extraClasses,
    renderSelectedItem = _ref.renderSelectedItem,
    minSearchItems = _ref.minSearchItems;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var containerItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    filterText = _useState4[0],
    setFilterText = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    itemsListStyles = _useState6[0],
    setItemsListStyles = _useState6[1];
  var selectedItem = options.find(function (option) {
    return option.value === value;
  });
  var dropdownClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'ibexa-dropdown': true,
    'ibexa-dropdown--single': single,
    'ibexa-dropdown--small': small,
    'ibexa-dropdown--expanded': isExpanded
  }, extraClasses, true));
  var toggleExpanded = function toggleExpanded() {
    calculateAndSetItemsListStyles();
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  };
  var updateFilterValue = function updateFilterValue(event) {
    return setFilterText(event.target.value);
  };
  var resetInputValue = function resetInputValue() {
    return setFilterText('');
  };
  var showItem = function showItem(itemValue, searchedTerm) {
    if (searchedTerm.length < 3) {
      return true;
    }
    var itemValueLowerCase = itemValue.toLowerCase();
    var searchedTermLowerCase = searchedTerm.toLowerCase();
    return itemValueLowerCase.indexOf(searchedTermLowerCase) === 0;
  };
  var renderItem = function renderItem(item) {
    var itemClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'ibexa-dropdown__item': true,
      'ibexa-dropdown__item--selected': item.value === value,
      'ibexa-dropdown__item--hidden': !showItem(item.label, filterText)
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: itemClassName,
      key: item.value,
      onClick: function onClick() {
        onChange(item.value);
        toggleExpanded();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ibexa-dropdown__item-label"
    }, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-dropdown__item-check"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "checkmark",
      extraClasses: "ibexa-icon--tiny-small ibexa-dropdown__item-check-icon"
    })));
  };
  var calculateAndSetItemsListStyles = function calculateAndSetItemsListStyles() {
    var itemsStyles = {};
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      width = _containerRef$current.width,
      left = _containerRef$current.left,
      top = _containerRef$current.top,
      height = _containerRef$current.height,
      bottom = _containerRef$current.bottom;
    itemsStyles.width = width;
    itemsStyles.left = left;
    if (window.innerHeight - bottom > MIN_ITEMS_LIST_HEIGHT) {
      itemsStyles.top = top + height + ITEMS_LIST_WIDGET_MARGIN;
      itemsStyles.maxHeight = window.innerHeight - bottom - ITEMS_LIST_SITE_MARGIN;
    } else {
      var headerContainer = document.querySelector('.ibexa-main-header');
      var headerHeight = headerContainer.offsetHeight;
      itemsStyles.top = top - ITEMS_LIST_WIDGET_MARGIN;
      itemsStyles.maxHeight = top - headerHeight - ITEMS_LIST_SITE_MARGIN;
      itemsStyles.transform = 'translateY(-100%)';
    }
    setItemsListStyles(itemsStyles);
  };
  var renderItemsList = function renderItemsList() {
    var placeholder = Translator.trans( /*@Desc("Search...")*/'dropdown.placeholder', {}, 'universal_discovery_widget');
    var itemsContainerClass = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'ibexa-dropdown__items': true,
      'ibexa-dropdown__items--search-hidden': options.length < minSearchItems
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: itemsContainerClass,
      style: itemsListStyles,
      ref: containerItemsRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-input-text-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: placeholder,
      className: "ibexa-dropdown__items-filter ibexa-input ibexa-input--small ibexa-input--text form-control",
      onChange: updateFilterValue,
      value: filterText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-input-text-wrapper__actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--clear",
      tabIndex: "-1",
      onClick: resetInputValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "discard"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--search",
      tabIndex: "-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "search",
      extraClasses: "ibexa-icon--small"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "ibexa-dropdown__items-list"
    }, options.map(renderItem)));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpanded) {
      return;
    }
    var scrollContainer = document.querySelector('.ibexa-main-container__content-column');
    var onInteractionOutside = function onInteractionOutside(event) {
      var _containerItemsRef$cu;
      if (containerRef.current.contains(event.target) || (_containerItemsRef$cu = containerItemsRef.current) !== null && _containerItemsRef$cu !== void 0 && _containerItemsRef$cu.contains(event.target)) {
        return;
      }
      setIsExpanded(false);
    };
    document.body.addEventListener('click', onInteractionOutside, false);
    scrollContainer.addEventListener('scroll', calculateAndSetItemsListStyles, false);
    return function () {
      document.body.removeEventListener('click', onInteractionOutside);
      document.body.removeEventListener('click', calculateAndSetItemsListStyles);
      setItemsListStyles({});
    };
  }, [isExpanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsExpanded(false);
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: dropdownClassName,
    ref: containerRef,
    onClick: toggleExpanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-dropdown__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "ibexa-dropdown__selection-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ibexa-dropdown__selected-item"
  }, renderSelectedItem(selectedItem))))), isExpanded && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(renderItemsList(), dropdownListRef.current));
};
Dropdown.propTypes = {
  dropdownListRef: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  small: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  single: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  renderSelectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  minSearchItems: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};
Dropdown.defaultProps = {
  small: false,
  single: false,
  extraClasses: '',
  renderSelectedItem: function renderSelectedItem(item) {
    return item === null || item === void 0 ? void 0 : item.label;
  },
  minSearchItems: MIN_SEARCH_ITEMS_DEFAULT
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

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

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarFiltersContext: () => (/* binding */ CalendarFiltersContext),
/* harmony export */   EventsConfigContext: () => (/* binding */ EventsConfigContext),
/* harmony export */   EventsSelectionContext: () => (/* binding */ EventsSelectionContext),
/* harmony export */   EventsTooltipRefContext: () => (/* binding */ EventsTooltipRefContext),
/* harmony export */   MODULE_VIEWS: () => (/* binding */ MODULE_VIEWS),
/* harmony export */   RestInfoContext: () => (/* binding */ RestInfoContext),
/* harmony export */   SelectedDateContext: () => (/* binding */ SelectedDateContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calendar_components_calendar_header_calendar_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar/components/calendar-header/calendar.header */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-header/calendar.header.js");
/* harmony import */ var _calendar_components_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/components/calendar-view/calendar.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _calendar_components_list_view_list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/components/list-view/list.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/list-view/list.view.js");
/* harmony import */ var _calendar_components_selection_sidebar_selection_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/components/selection-sidebar/selection.sidebar */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-sidebar/selection.sidebar.js");
/* harmony import */ var _calendar_components_selection_confirmation_popup_selection_confirmation_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/components/selection-confirmation-popup/selection.confirmation.popup */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-confirmation-popup/selection.confirmation.popup.js");
/* harmony import */ var _calendar_hooks_useSelectionReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/hooks/useSelectionReducer */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useSelectionReducer.js");
/* harmony import */ var _calendar_hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar/hooks/useFiltersReducer */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js");
/* harmony import */ var _calendar_components_sidebar_sidebar_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar/components/sidebar/sidebar.filters */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/sidebar/sidebar.filters.js");
/* harmony import */ var _calendar_components_sidebar_sidebar_day_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar/components/sidebar/sidebar.day.picker */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/sidebar/sidebar.day.picker.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var _window = window,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var MODULE_VIEWS = {
  CALENDAR: 'CALENDAR',
  LIST: 'LIST'
};
var SelectedDateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var RestInfoContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var EventsSelectionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var EventsConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var EventsTooltipRefContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var CalendarFiltersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var CalendarModule = function CalendarModule(_ref) {
  var restInfo = _ref.restInfo,
    eventsConfig = _ref.eventsConfig;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(convertDateToTimezone(new Date(), undefined, true)),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(MODULE_VIEWS.CALENDAR),
    _useState4 = _slicedToArray(_useState3, 2),
    currentView = _useState4[0],
    setCurrentView = _useState4[1];
  var _useSelectionReducer = (0,_calendar_hooks_useSelectionReducer__WEBPACK_IMPORTED_MODULE_8__.useSelectionReducer)(),
    _useSelectionReducer2 = _slicedToArray(_useSelectionReducer, 2),
    eventsSelection = _useSelectionReducer2[0],
    dispatchSelectEventAction = _useSelectionReducer2[1];
  var _useFiltersReducer = (0,_calendar_hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_9__.useFiltersReducer)(eventsConfig),
    _useFiltersReducer2 = _slicedToArray(_useFiltersReducer, 2),
    calendarFilters = _useFiltersReducer2[0],
    dispatchCalendarFiltersAction = _useFiltersReducer2[1];
  var eventsTooltipContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var renderView = function renderView() {
    switch (currentView) {
      case MODULE_VIEWS.CALENDAR:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_components_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      case MODULE_VIEWS.LIST:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_components_list_view_list_view__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestInfoContext.Provider, {
    value: restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventsSelectionContext.Provider, {
    value: [eventsSelection, dispatchSelectEventAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CalendarFiltersContext.Provider, {
    value: [calendarFilters, dispatchCalendarFiltersAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventsConfigContext.Provider, {
    value: eventsConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-calendar__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_components_calendar_header_calendar_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentView: currentView,
    setCurrentView: setCurrentView
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedDateContext.Provider, {
    value: [selectedDate, setSelectedDate]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-calendar__sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_components_sidebar_sidebar_day_picker__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_components_sidebar_sidebar_filters__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventsTooltipRefContext.Provider, {
    value: eventsTooltipContainerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-calendar__view"
  }, renderView()))), /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_components_selection_sidebar_selection_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], null), document.querySelector('.ibexa-calendar__sidebar-wrapper')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_components_selection_confirmation_popup_selection_confirmation_popup__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-calendar-tooltips-container",
    ref: eventsTooltipContainerRef
  })))));
};
CalendarModule.propTypes = {
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    token: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    siteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
  }).isRequired,
  eventsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
CalendarModule.defaultProps = {};
ibexa.addConfig('modules.Calendar', CalendarModule);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarModule);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-header/calendar.header.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-header/calendar.header.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view_toggler_view_toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-toggler/view.toggler */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/view-toggler/view.toggler.js");



var _window = window,
  Translator = _window.Translator;
var CalendarHeader = function CalendarHeader(_ref) {
  var currentView = _ref.currentView,
    setCurrentView = _ref.setCurrentView;
  var headline = Translator.trans( /*@Desc("Scheduled content")*/'calendar.headline', {}, 'calendar_widget');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-header__title"
  }, headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-header__btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_toggler_view_toggler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentView: currentView,
    setCurrentView: setCurrentView
  })));
};
CalendarHeader.propTypes = {
  currentView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  setCurrentView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarHeader);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view-switcher/calendar.view.switcher.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view-switcher/calendar.view.switcher.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar-view/calendar.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _window = window,
  Translator = _window.Translator;
var CalendarViewSwitcher = function CalendarViewSwitcher() {
  var viewTypeListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__.CurrentCalendarViewContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    currentCalendarView = _useContext2[0],
    setCurrentCalendarView = _useContext2[1];
  var monthLabel = Translator.trans( /*@Desc("Month")*/'calendar.view_switcher.month', {}, 'calendar_widget');
  var weekLabel = Translator.trans( /*@Desc("Week")*/'calendar.view_switcher.week', {}, 'calendar_widget');
  var dayLabel = Translator.trans( /*@Desc("Day")*/'calendar.view_switcher.day', {}, 'calendar_widget');
  var viewTypeOptions = [{
    label: monthLabel,
    value: _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__.CALENDAR_VIEWS.MONTH
  }, {
    label: weekLabel,
    value: _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__.CALENDAR_VIEWS.WEEK
  }, {
    label: dayLabel,
    value: _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__.CALENDAR_VIEWS.DAY
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.ibexa.helpers.tooltips.hideAll();
  }, [currentCalendarView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-view-switcher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    single: true,
    withoutSearch: true,
    value: currentCalendarView,
    options: viewTypeOptions,
    dropdownListRef: viewTypeListRef,
    onChange: setCurrentCalendarView
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: viewTypeListRef,
    className: "c-calendar-view-switcher__view-type-list"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarViewSwitcher);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CALENDAR_VIEWS: () => (/* binding */ CALENDAR_VIEWS),
/* harmony export */   CurrentCalendarViewContext: () => (/* binding */ CurrentCalendarViewContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-paginator/date.paginator */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js");
/* harmony import */ var _month_view_month_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../month-view/month.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.view.js");
/* harmony import */ var _week_view_week_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../week-view/week.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.view.js");
/* harmony import */ var _day_view_day_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../day-view/day.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.js");
/* harmony import */ var _top_bar_top_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top-bar/top.bar */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var CALENDAR_VIEWS = {
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DAY: 'DAY'
};
var CurrentCalendarViewContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var CalendarView = function CalendarView() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(CALENDAR_VIEWS.MONTH),
    _useState2 = _slicedToArray(_useState, 2),
    currentCalendarView = _useState2[0],
    setCurrentCalendarView = _useState2[1];
  var paginatorType = _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_1__.DATE_PAGINATOR_TYPE[currentCalendarView];
  var calendar = null;
  switch (currentCalendarView) {
    case CALENDAR_VIEWS.MONTH:
      calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_month_view_month_view__WEBPACK_IMPORTED_MODULE_2__["default"], null);
      break;
    case CALENDAR_VIEWS.WEEK:
      calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_week_view_week_view__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      break;
    case CALENDAR_VIEWS.DAY:
      calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CurrentCalendarViewContext.Provider, {
    value: [currentCalendarView, setCurrentCalendarView]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_top_bar_top_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isCalendarViewSwitcherVisible: true,
    paginatorType: paginatorType
  }), calendar));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATE_PAGINATOR_TYPE: () => (/* binding */ DATE_PAGINATOR_TYPE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var DATE_PAGINATOR_TYPE = {
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DAY: 'DAY'
};
var DatePaginator = function DatePaginator(_ref) {
  var type = _ref.type;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_4__.SelectedDateContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedDate = _useContext2[0],
    setSelectedDate = _useContext2[1];
  var today = convertDateToTimezone().startOf('day');
  var isToday = selectedDate.isSame(today, 'day');
  var yearString = selectedDate.format('YYYY');
  var selectPreviousDate = function selectPreviousDate() {
    if (previousDate) {
      setSelectedDate(previousDate);
    }
  };
  var selectNextDate = function selectNextDate() {
    return setSelectedDate(nextDate);
  };
  var todayLabel = Translator.trans( /*@Desc("Today")*/'calendar.date_paginator.today', {}, 'calendar_widget');
  var backwardTooltipLabel = Translator.trans( /*@Desc("Backward")*/'calendar.tooltips.backward', {}, 'calendar_widget');
  var forwardTooltipLabel = Translator.trans( /*@Desc("Forward")*/'calendar.tooltips.forward', {}, 'calendar_widget');
  var monthName = null;
  var daysString = null;
  var previousDate = null;
  var nextDate = null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.ibexa.helpers.tooltips.parse();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.ibexa.helpers.tooltips.hideAll();
  }, [selectedDate]);
  switch (type) {
    case DATE_PAGINATOR_TYPE.DAY:
      {
        previousDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getPreviousDayDate)(selectedDate);
        nextDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getNextDayDate)(selectedDate);
        daysString = '';
        monthName = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__.getMonthName)(selectedDate);
        break;
      }
    case DATE_PAGINATOR_TYPE.WEEK:
      {
        var firstDayOfWeek = selectedDate.clone().startOf('week');
        var lastDayOfWeek = selectedDate.clone().endOf('week');
        var isWeekAcrossTwoMonths = firstDayOfWeek.get('month') !== lastDayOfWeek.get('month');
        previousDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getPreviousWeekDate)(selectedDate);
        nextDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getNextWeekDate)(selectedDate);
        daysString = isWeekAcrossTwoMonths ? '' : "".concat(firstDayOfWeek.format('D'), "-").concat(lastDayOfWeek.format('D'));
        monthName = isWeekAcrossTwoMonths ? "".concat((0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__.getMonthShortName)(firstDayOfWeek), "-").concat((0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__.getMonthShortName)(lastDayOfWeek)) : (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__.getMonthName)(firstDayOfWeek);
        break;
      }
    case DATE_PAGINATOR_TYPE.MONTH:
      {
        previousDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getPreviousMonthDate)(selectedDate);
        nextDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getNextMonthDate)(selectedDate);
        daysString = '';
        monthName = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__.getMonthName)(selectedDate);
        break;
      }
    default:
      throw new Error();
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-date-paginator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--secondary c-date-paginator__btn c-date-paginator__btn--today",
    disabled: isToday,
    onClick: function onClick() {
      return setSelectedDate(convertDateToTimezone());
    }
  }, todayLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    disabled: previousDate === null,
    className: "btn ibexa-btn ibexa-btn--tertiary ibexa-btn--no-text c-date-paginator__btn c-date-paginator__btn--decrease",
    onClick: selectPreviousDate,
    title: backwardTooltipLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "caret-back",
    extraClasses: "ibexa-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--tertiary ibexa-btn--no-text c-date-paginator__btn c-date-paginator__btn--increase",
    onClick: selectNextDate,
    title: forwardTooltipLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "caret-next",
    extraClasses: "ibexa-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-date-paginator__date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-date-paginator__date-main"
  }, "".concat(monthName, " ").concat(daysString, " ")), yearString));
};
DatePaginator.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePaginator);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useEventsLoadMore */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _events_view_events_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events-view/events.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js");
/* harmony import */ var _load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../load-more-bnt/load.more.btn */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js");
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
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var DayView = function DayView() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_2__.SelectedDateContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    selectedDate = _useContext2[0];
  var fromDate = selectedDate.clone().startOf('day');
  var toDate = selectedDate.clone().endOf('day');
  var _useEventsLoadMore = (0,_hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_3__.useEventsLoadMore)(fromDate, toDate, 'hour'),
    _useEventsLoadMore2 = _slicedToArray(_useEventsLoadMore, 4),
    events = _useEventsLoadMore2[0],
    isLoading = _useEventsLoadMore2[1],
    remainingEventsCount = _useEventsLoadMore2[2],
    loadMore = _useEventsLoadMore2[3];
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var selectedDateInBrowserTimezone = new Date(convertDateToTimezone(selectedDate, browserTimezone, true));
  var day = selectedDate.clone().startOf('day');
  var dayHours = [];
  var isInitialLoad = isLoading && events === null;
  var lastHourWithEvent = events === null ? null : Math.max.apply(Math, _toConsumableArray(Object.keys(events).map(function (timestamp) {
    return parseInt(timestamp, 10);
  })));
  var isEverythingLoaded = remainingEventsCount === 0;
  var timePMsymbol = Translator.trans( /*@Desc("PM")*/'calendar.time_pm_symbol', {}, 'calendar_widget');
  for (var i = 0; i < 24; i++) {
    dayHours.push(day.clone().add(i, 'hour'));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-view__header c-day-view__header--day"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-day-view__header-label c-day-view__header-label--date"
  }, selectedDate.format('D')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-day-view__header-label c-day-view__header-label--day"
  }, selectedDateInBrowserTimezone.toLocaleDateString((0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__.getAdminPanelLanguageCode)(), {
    weekday: 'long'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-view__day"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isLoading: isInitialLoad
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-view__agenda"
  }, dayHours.map(function (hour) {
    var hourInBrowserTimezone = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__.forceBrowserTimezone)(hour);
    var hourIn24Format = hourInBrowserTimezone.format('HH');
    var hourLabel = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__.getAmPmTimeLabel)(hourInBrowserTimezone.toDate());
    var hourEventsData = events === null ? [] : events[hour.unix()];
    var hourViewClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-day-view__hour': true,
      'c-day-view__hour--first-pm': hourIn24Format === '12'
    });
    var hourSeparatorClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-day-view__hour-separator': true
    });
    var hourLabelClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-day-view__hour-label': true
    });
    var loadMoreComponent = null;
    if (hour.unix() === lastHourWithEvent && !isEverythingLoaded) {
      loadMoreComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-day-view__load-more-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onLoadMore: loadMore,
        isLoading: isLoading
      }));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: hour.unix()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: hourViewClassName,
      "data-time-pm-symbol": timePMsymbol
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: hourSeparatorClassName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: hourLabelClassName
    }, hourLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_view_events_view__WEBPACK_IMPORTED_MODULE_6__["default"], {
      events: hourEventsData
    }), loadMoreComponent));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var EventBadge = function EventBadge(_ref) {
  var event = _ref.event;
  var renderEventDetailsRow = function renderEventDetailsRow(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      attributeKey = _ref3[0],
      _ref3$ = _ref3[1],
      label = _ref3$.label,
      value = _ref3$.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: attributeKey,
      className: "c-event-badge__property"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "c-event-badge__property-label"
    }, label, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "c-event-badge__property-value"
    }, value));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-event-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-event-badge__title"
  }, event.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-event-badge__subtitle"
  }, event.subname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "c-event-badge__properties"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Object.entries(event.attributes).map(renderEventDetailsRow))));
};
EventBadge.propTypes = {
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
EventBadge.defaultProps = {
  event: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventBadge);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/event-tooltip/event.tooltip.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/event-tooltip/event.tooltip.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _event_badge_event_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-badge/event.badge */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js");




var EventTooltip = function EventTooltip(_ref) {
  var event = _ref.event;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-event-tooltip': true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_badge_event_badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    event: event
  }));
};
EventTooltip.propTypes = {
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  position: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
EventTooltip.defaultProps = {
  event: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTooltip);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.action.btn.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.action.btn.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var EventsActionBtn = function EventsActionBtn(_ref) {
  var iconUrl = _ref.iconUrl,
    actionEvent = _ref.actionEvent,
    label = _ref.label;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_2__.EventsSelectionContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    _useContext2$ = _useContext2[0],
    eventsType = _useContext2$.eventsType,
    selectedEvents = _useContext2$.selectedEvents;
  var handleClick = function handleClick() {
    var event = new CustomEvent("".concat(eventsType, ":").concat(actionEvent), {
      detail: {
        events: selectedEvents
      }
    });
    window.document.body.dispatchEvent(event);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.ibexa.helpers.tooltips.parse();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--small ibexa-btn--ghost c-events-action-btn c-events-action-btn--".concat(actionEvent),
    title: label,
    onClick: handleClick,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    customPath: iconUrl,
    extraClasses: "ibexa-icon--small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ibexa-btn__label"
  }, label));
};
EventsActionBtn.propTypes = {
  iconUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  actionEvent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
EventsActionBtn.defaultProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsActionBtn);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.actions.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.actions.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _events_action_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.action.btn */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.action.btn.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _window = window,
  Translator = _window.Translator;
var EventsActions = function EventsActions() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_1__.EventsSelectionContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    eventsType = _useContext2[0].eventsType,
    dispatchSelectEventAction = _useContext2[1];
  var eventsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_1__.EventsConfigContext);
  var selectedEventsConfig = eventsConfig[eventsType];
  var deselectAllEvents = function deselectAllEvents() {
    dispatchSelectEventAction({
      type: 'DESELECT_ALL_EVENTS'
    });
  };
  if (!selectedEventsConfig) {
    return null;
  }
  var selectedEventsActions = selectedEventsConfig.actions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events-actions"
  }, Object.entries(selectedEventsActions).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      actionEvent = _ref2[0],
      _ref2$ = _ref2[1],
      icon = _ref2$.icon,
      label = _ref2$.label;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_action_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: actionEvent,
      actionEvent: actionEvent,
      iconUrl: icon,
      label: label
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: deselectAllEvents,
    className: "btn ibexa-btn ibexa-btn--small ibexa-btn--secondary c-events-action-btn c-events-action-btn--deselect-all"
  }, Translator.trans( /*@Desc("Deselect all")*/'calendar.deselect_all', {}, 'calendar_widget')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsActions);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.list.tooltip.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.list.tooltip.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var _window = window,
  Popper = _window.Popper;
var EventsListTooltip = function EventsListTooltip(_ref) {
  var title = _ref.title,
    children = _ref.children,
    closeFunc = _ref.closeFunc,
    refEvents = _ref.refEvents,
    innerRef = _ref.innerRef;
  var popperInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var eventsTooltipContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_3__.EventsTooltipRefContext);
  var createPopperInstanceOrUpdate = function createPopperInstanceOrUpdate() {
    var eventsListNode = refEvents.current;
    var tooltipNode = innerRef.current;
    if (!eventsListNode) {
      return;
    }
    if (!popperInstanceRef.current) {
      var newPoperInstance = Popper.createPopper(eventsListNode, tooltipNode, {
        placement: 'left',
        modifiers: [{
          name: 'offset',
          options: {
            offset: function offset(_ref2) {
              var placement = _ref2.placement,
                popper = _ref2.popper;
              if (placement === 'left' || placement === 'right') {
                return [popper.height / 2 - 30, 8];
              }
              return [0, 8];
            }
          }
        }, {
          name: 'flip',
          options: {
            fallbackPlacements: ['right', 'bottom', 'top']
          }
        }]
      });
      popperInstanceRef.current = newPoperInstance;
    } else {
      popperInstanceRef.current.update();
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    createPopperInstanceOrUpdate();
  }, [refEvents.current]);
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events-list-tooltip",
    ref: innerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events-list-tooltip__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events-list-tooltip__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--small ibexa-btn--no-text",
    onClick: closeFunc,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--tiny-small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events-list-tooltip__body"
  }, children)), eventsTooltipContainerRef.current);
};
EventsListTooltip.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
  refEvents: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element)
  }),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element)
  })
};
var EventsListTooltipForwarded = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventsListTooltip, _extends({
    innerRef: ref
  }, props));
});
EventsListTooltipForwarded.displayName = 'EventsListTooltip';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsListTooltipForwarded);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.event.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.event.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-tooltip/event.tooltip */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/event-tooltip/event.tooltip.js");
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





var TRANSPARENT_VALUE = '7f';
var EventsViewEvent = function EventsViewEvent(_ref) {
  var _createCssClassNames;
  var event = _ref.event;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_3__.EventsSelectionContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    eventsSelection = _useContext2[0],
    dispatchSelectEventAction = _useContext2[1];
  var eventsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_3__.EventsConfigContext);
  var eventConfig = eventsConfig[event.type];
  var isSelectable = eventConfig.isSelectable;
  var isSelected = !!eventsSelection.selectedEvents[event.id];
  var labelClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)((_createCssClassNames = {
    'c-events-view-event__label': true
  }, _defineProperty(_createCssClassNames, "c-events-view-event__label--".concat(event.type), true), _defineProperty(_createCssClassNames, 'c-events-view-event__label--selected', isSelected), _defineProperty(_createCssClassNames, 'c-events-view-event__label--not-selectable', !isSelectable), _createCssClassNames));
  var style = {
    background: isSelected ? eventConfig.color : "".concat(eventConfig.color).concat(TRANSPARENT_VALUE)
  };
  var handleClick = function handleClick() {
    if (!isSelectable) {
      return;
    }
    if (isSelected) {
      dispatchSelectEventAction({
        type: 'DESELECT_EVENT',
        eventId: event.id
      });
    } else {
      dispatchSelectEventAction({
        type: 'SELECT_EVENT',
        event: event
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: event.id,
    className: "c-events-view-event"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: labelClassName,
    onClick: handleClick,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events-view-event__name"
  }, event.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    event: event
  }));
};
EventsViewEvent.propTypes = {
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsViewEvent);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
/* harmony import */ var _events_view_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.view.event */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.event.js");
/* harmony import */ var _events_list_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.list.tooltip */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.list.tooltip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var EventsView = function EventsView(_ref) {
  var date = _ref.date,
    events = _ref.events,
    slotsCount = _ref.slotsCount,
    eventsTotalCount = _ref.eventsTotalCount;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTooltipVisible = _useState2[0],
    setIsTooltipVisible = _useState2[1];
  var allEventsFit = slotsCount === null || events.length <= slotsCount;
  var eventsToDisplay = allEventsFit ? events : events.slice(0, slotsCount - 1);
  var eventsToDisplayInTooltip = !allEventsFit ? events.slice(slotsCount - 1, events.length) : [];
  var totalCount = eventsTotalCount ? eventsTotalCount : events.length;
  var refEvents = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(null);
  var refTooltip = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(null);
  var showTooltip = function showTooltip() {
    setIsTooltipVisible(true);
  };
  var hideTooltip = function hideTooltip() {
    setIsTooltipVisible(false);
  };
  var renderTooltip = function renderTooltip() {
    if (!isTooltipVisible || allEventsFit) {
      return null;
    }
    var title = "".concat(date.format('D'), " ").concat((0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_2__.getMonthShortName)(date));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_list_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
      refEvents: refEvents,
      ref: refTooltip,
      closeFunc: hideTooltip,
      title: title
    }, eventsToDisplayInTooltip.map(function (event) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_view_event__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: event.id,
        event: event,
        refEvents: refTooltip
      });
    }));
  };
  var renderExpandButton = function renderExpandButton() {
    if (allEventsFit) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-events__expand btn ibexa-btn ibexa-btn--secondary",
      onClick: showTooltip,
      type: "button"
    }, "+".concat(totalCount - slotsCount + 1));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events",
    ref: refEvents
  }, eventsToDisplay.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_view_event__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: event.id,
      event: event,
      refEvents: refEvents
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-events-expanded"
  }, renderExpandButton(), renderTooltip()));
};
EventsView.propTypes = {
  date: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  slotsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  eventsTotalCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
EventsView.defaultProps = {
  events: [],
  slotsCount: null,
  eventsTotalCount: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/list-view/list.view.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/list-view/list.view.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
/* harmony import */ var _hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useEventsLoadMore */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js");
/* harmony import */ var _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../date-paginator/date.paginator */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _top_bar_top_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../top-bar/top.bar */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js");
/* harmony import */ var _load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../load-more-bnt/load.more.btn */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var types = ibexa.calendar.config.types;
var ListView = function ListView() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_2__.SelectedDateContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    selectedDate = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_2__.EventsSelectionContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    eventsSelection = _useContext4[0],
    dispatchSelectEventAction = _useContext4[1];
  var eventsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_2__.EventsConfigContext);
  var today = convertDateToTimezone().startOf('day');
  var monthStartDate = selectedDate.clone().startOf('month');
  var fromDate = monthStartDate.isBefore(today, 'day') ? today : monthStartDate;
  var toDate = selectedDate.clone().endOf('month');
  var _useEventsLoadMore = (0,_hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_4__.useEventsLoadMore)(fromDate, toDate, 'day'),
    _useEventsLoadMore2 = _slicedToArray(_useEventsLoadMore, 4),
    events = _useEventsLoadMore2[0],
    isLoading = _useEventsLoadMore2[1],
    remainingEventsCount = _useEventsLoadMore2[2],
    loadMore = _useEventsLoadMore2[3];
  var isInitialLoad = isLoading && events === null;
  var listClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
    'c-list-view__list': true,
    'c-list-view__list--loading': isInitialLoad
  });
  var renderEventDetails = function renderEventDetails(event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-unstyled mb-0"
    }, Object.entries(event.attributes).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        attributeKey = _ref2[0],
        _ref2$ = _ref2[1],
        label = _ref2$.label,
        value = _ref2$.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: attributeKey
      }, "".concat(label, ": ").concat(value));
    }));
  };
  var renderEvent = function renderEvent(event) {
    var eventConfig = eventsConfig[event.type];
    var isSelected = !!eventsSelection.selectedEvents[event.id];
    var handleChange = function handleChange() {
      if (isSelected) {
        dispatchSelectEventAction({
          type: 'DESELECT_EVENT',
          eventId: event.id
        });
      } else {
        dispatchSelectEventAction({
          type: 'SELECT_EVENT',
          event: event
        });
      }
    };
    var input = null;
    if (eventConfig.isSelectable) {
      input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        className: "ibexa-input ibexa-input--checkbox",
        checked: isSelected,
        onChange: handleChange
      });
    }
    var eventDate = convertDateToTimezone(parseInt(event.dateTime, 10) * 1000);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__event"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__event-actions-col"
    }, input), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__event-data-col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__event-name"
    }, event.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__event-type"
    }, types[event.type].label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__event-details"
    }, renderEventDetails(event)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__event-date"
    }, (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_3__.getAmPmTimeLabel)((0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_3__.forceBrowserTimezone)(eventDate).toDate()))));
  };
  var renderDaySeparator = function renderDaySeparator(dayTimestamp) {
    var languageCode = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_3__.getAdminPanelLanguageCode)();
    var separatorDate = convertDateToTimezone(parseInt(dayTimestamp, 10) * 1000);
    var separatorDateFormated = separatorDate.toDate().toLocaleDateString(languageCode, {
      day: 'numeric',
      year: 'numeric',
      month: 'long'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__day-separator"
    }, separatorDateFormated);
  };
  var renderNoEventsToShowInfo = function renderNoEventsToShowInfo() {
    if (isLoading || Object.entries(events).length) {
      return null;
    }
    var noEventsMessage = Translator.trans( /*@Desc("No events to show.")*/'calendar.list_view.no_events', {}, 'calendar_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__no-events"
    }, noEventsMessage);
  };
  var renderAllEvents = function renderAllEvents() {
    if (!events) {
      return null;
    }
    return Object.entries(events).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        dayTimestamp = _ref4[0],
        dayEvents = _ref4[1];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: dayTimestamp
      }, renderDaySeparator(dayTimestamp), dayEvents.map(renderEvent));
    });
  };
  var renderLoadMoreButton = function renderLoadMoreButton() {
    var canLoadMore = remainingEventsCount > 0;
    if (!canLoadMore) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list-view__load-more-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onLoadMore: loadMore,
      isLoading: isLoading
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-list-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_top_bar_top_bar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isCalendarViewSwitcherVisible: false,
    paginatorType: _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_5__.DATE_PAGINATOR_TYPE.MONTH
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: listClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLoading: isInitialLoad
  }), renderAllEvents(), renderNoEventsToShowInfo()), renderLoadMoreButton());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var _window = window,
  Translator = _window.Translator;
var LoadMoreBtn = function LoadMoreBtn(_ref) {
  var onLoadMore = _ref.onLoadMore,
    isLoading = _ref.isLoading;
  var loadMoreButtonLabel = Translator.trans( /*@Desc("Load More")*/'calendar.load_more_btn.label', {}, 'calendar_widget');
  var handleLoadMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (isLoading) {
      return;
    }
    onLoadMore();
  }, [onLoadMore, isLoading]);
  var loadingIcon = null;
  if (isLoading) {
    loadingIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "spinner",
      extraClasses: "c-load-more-btn__spinner ibexa-icon--medium ibexa-spin"
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--secondary c-load-more-btn",
    onClick: handleLoadMore,
    disabled: isLoading
  }, loadingIcon, loadMoreButtonLabel);
};
LoadMoreBtn.propTypes = {
  onLoadMore: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadMoreBtn);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.day.view.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.day.view.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-view/calendar.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _events_view_events_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events-view/events.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var _window = window,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var MonthDayView = function MonthDayView(_ref) {
  var date = _ref.date,
    isDisabled = _ref.isDisabled,
    eventsData = _ref.eventsData;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_4__.SelectedDateContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedDate = _useContext2[0],
    setSelectedDate = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__.CurrentCalendarViewContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    setCurrentCalendarView = _useContext4[1];
  var today = convertDateToTimezone().startOf('day');
  var isSelectedDay = date.isSame(selectedDate, 'day');
  var isToday = date.isSame(today, 'day');
  var isPast = date.isBefore(convertDateToTimezone(), 'day');
  var isSelectable = !isPast;
  var events = eventsData ? eventsData.events : [];
  var eventsTotalCount = eventsData ? eventsData.totalCount : null;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-month-day-view': true,
    'c-month-day-view--past': isPast,
    'c-month-day-view--today': isToday,
    'c-month-day-view--selected': isSelectedDay
  });
  var dayClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-month-day-view__day': true,
    'c-month-day-view__day--disabled': isDisabled,
    'c-month-day-view__day--past': isPast,
    'c-month-day-view__day--today': isToday,
    'c-month-day-view__day--selectable': !isPast
  });
  var handleClick = function handleClick() {
    if (isSelectable) {
      setSelectedDate(date);
      setCurrentCalendarView(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__.CALENDAR_VIEWS.DAY);
    }
  };
  var dayOfMonth = date.format('D');
  var label = dayOfMonth === '1' ? date.format('D MMM') : dayOfMonth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: dayClassName,
    onClick: handleClick
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_view_events_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
    date: date,
    events: events,
    slotsCount: 3,
    eventsTotalCount: eventsTotalCount
  }));
};
MonthDayView.propTypes = {
  date: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  eventsData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
MonthDayView.defaultProps = {
  isDisabled: false,
  eventsData: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthDayView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.view.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.view.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _hooks_useEventsGroupedByDayFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useEventsGroupedByDayFetch */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByDayFetch.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _month_day_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./month.day.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.day.view.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MonthView = function MonthView() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_3__.SelectedDateContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    selectedDate = _useContext2[0];
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_1__.getMonthDays)(selectedDate);
    }, [selectedDate]),
    daysBefore = _useMemo.daysBefore,
    days = _useMemo.days,
    daysAfter = _useMemo.daysAfter;
  var _days = _slicedToArray(days, 1),
    fromDate = _days[0];
  var toDate = daysAfter[daysAfter.length - 1].clone().endOf('day');
  var _useEventsGroupedByDa = (0,_hooks_useEventsGroupedByDayFetch__WEBPACK_IMPORTED_MODULE_2__.useEventsGroupedByDayFetch)(fromDate, toDate),
    _useEventsGroupedByDa2 = _slicedToArray(_useEventsGroupedByDa, 2),
    groupedEventsMap = _useEventsGroupedByDa2[0],
    isLoading = _useEventsGroupedByDa2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-month-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-month-view__week-days c-month-view__week-days--month"
  }, (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_6__.getWeekdaysShortNames)().map(function (dayName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: dayName,
      className: "c-month-view__day-name"
    }, dayName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-month-view__days"
  }, daysBefore.map(function (day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_month_day_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: day.unix(),
      date: day,
      isDisabled: true
    });
  }), days.map(function (day) {
    var dayEventsData = isLoading ? {} : groupedEventsMap[day.unix()];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_month_day_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: day.unix(),
      date: day,
      eventsData: dayEventsData
    });
  }), daysAfter.map(function (day) {
    var dayEventsData = isLoading ? {} : groupedEventsMap[day.unix()];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_month_day_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: day.unix(),
      date: day,
      eventsData: dayEventsData,
      isDisabled: true
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-confirmation-popup/selection.confirmation.popup.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-confirmation-popup/selection.confirmation.popup.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _window = window,
  Translator = _window.Translator;
var SelectionConfirmationPopup = function SelectionConfirmationPopup() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_1__.EventsSelectionContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    eventsSelection = _useContext2[0],
    dispatchSelectEventAction = _useContext2[1];
  var isPopupVisible = eventsSelection.selectionToBeConfirmed !== null;
  var handleSelectionConfirm = function handleSelectionConfirm() {
    return dispatchSelectEventAction({
      type: 'CONFIRM_SELECTION'
    });
  };
  var handleSelectionReject = function handleSelectionReject() {
    return dispatchSelectEventAction({
      type: 'REJECT_SELECTION'
    });
  };
  var cancelBtnLabel = Translator.trans( /*@Desc("Cancel")*/'calendar.selection_confirmation_popup.cancel.btn', {}, 'calendar_widget');
  var confirmBtnLabel = Translator.trans( /*@Desc("Refresh list")*/'calendar.selection_confirmation_popup.confirm.btn', {}, 'calendar_widget');
  var popupTitle = Translator.trans( /*@Desc("Conflict when selecting items")*/'calendar.selection_confirmation_popup.no_events', {}, 'calendar_widget');
  var popupMessage = Translator.trans( /*@Desc("This event has different actions from the items currently selected in the list.")*/'calendar.selection_confirmation_popup.message', {}, 'calendar_widget');
  var popupActionMessage = Translator.trans( /*@Desc("To continue, click 'Refresh list'. The selected list will update and the new item will be added to the list")*/'calendar.list_view.action_message', {}, 'calendar_widget');
  if (!isPopupVisible) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClose: handleSelectionReject,
    isVisible: isPopupVisible,
    isLoading: false,
    size: "medium",
    title: popupTitle,
    additionalClasses: "c-selection-confirmation-popup",
    footerChildren: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleSelectionReject,
      type: "button",
      className: "btn ibexa-btn ibexa-btn--secondary ibexa-btn--no",
      "data-dismiss": "modal"
    }, cancelBtnLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleSelectionConfirm,
      type: "button",
      className: "btn ibexa-btn ibexa-btn--primary ibexa-btn--trigger font-weight-bold"
    }, confirmBtnLabel))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selection-confirmation-popup__modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, popupMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, popupActionMessage)));
};
SelectionConfirmationPopup.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionConfirmationPopup);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-sidebar/selection.sidebar.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-sidebar/selection.sidebar.js ***!
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _events_actions_events_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events-actions/events.actions */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.actions.js");
/* harmony import */ var _event_badge_event_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-badge/event.badge */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var TRANSPARENT_VALUE = '7f';
var SelectionSidebar = function SelectionSidebar() {
  var refSidebar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var refExpandButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    shouldShowEmpty = _useState4[0],
    setShouldShowEmpty = _useState4[1];
  var eventsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_3__.EventsConfigContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_3__.EventsSelectionContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    eventsSelection = _useContext2[0],
    dispatchSelectEventAction = _useContext2[1];
  var expandLabel = Translator.trans( /*@Desc("Expand sidebar")*/'calendar.expand.sidebar', {}, 'calendar_widget');
  var collapseLabel = Translator.trans( /*@Desc("Collapse sidebar")*/'calendar.collapse.sidebar', {}, 'calendar_widget');
  var removeLabel = Translator.trans( /*@Desc("Remove")*/'calendar.remove', {}, 'calendar_widget');
  var selectedEvents = eventsSelection.selectedEvents;
  var areEventsSelected = Object.keys(selectedEvents).length > 0;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-selection-sidebar': true,
    'c-selection-sidebar--expanded': isExpanded,
    'c-selection-sidebar--hidden': !areEventsSelected && !shouldShowEmpty
  });
  var selectedEventsLabel = Translator.trans( /*@Desc("selected")*/'calendar.selection_sidebar.selected_info', {}, 'calendar_widget');
  var togglerLabel = isExpanded ? collapseLabel : expandLabel;
  var handleToggleSidebar = function handleToggleSidebar() {
    setIsExpanded(function (isExpandedNext) {
      return !isExpandedNext;
    });
    setShouldShowEmpty(false);
  };
  var handleDeselectEvent = function handleDeselectEvent(eventId) {
    ibexa.helpers.tooltips.hideAll(refSidebar.current);
    setShouldShowEmpty(true);
    dispatchSelectEventAction({
      type: 'DESELECT_EVENT',
      eventId: eventId
    });
  };
  var renderEvents = function renderEvents() {
    if (!isExpanded) {
      return null;
    }
    return Object.values(selectedEvents).map(function (event) {
      var _eventsConfig$event$t = eventsConfig[event.type],
        color = _eventsConfig$event$t.color,
        icon = _eventsConfig$event$t.icon;
      var iconWrapperStyle = {
        background: "".concat(color).concat(TRANSPARENT_VALUE)
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: event.id,
        className: "c-selection-sidebar__event"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-selection-sidebar__event-icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-selection-sidebar__event-icon",
        style: iconWrapperStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: icon !== null && icon !== void 0 ? icon : 'flag',
        extraClasses: "ibexa-icon--small"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-selection-sidebar__event-data-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_badge_event_badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
        event: event
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-selection-sidebar__event-deselect-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text c-selection-sidebar__deselect-event-btn",
        onClick: handleDeselectEvent.bind(null, event.id),
        "data-placement": "left",
        title: removeLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "discard",
        extraClasses: "ibexa-icon--small"
      }))));
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ibexa.helpers.tooltips.parse(refSidebar.current);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ibexa.helpers.tooltips.parse(refSidebar.current);
    if (refExpandButton.current) {
      refExpandButton.current.dataset.originalTitle = togglerLabel;
    }
  }, [isExpanded, selectedEvents]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    ref: refSidebar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selection-sidebar__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selection-sidebar__header-selected-events-count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "c-selection-sidebar__header-selected-events-title"
  }, Object.keys(selectedEvents).length, " ", selectedEventsLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text c-selection-sidebar__expand-btn",
    onClick: handleToggleSidebar,
    title: togglerLabel,
    ref: refExpandButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "caret-expanded",
    extraClasses: "ibexa-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_actions_events_actions__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selection-sidebar__events-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selection-sidebar__events-list"
  }, renderEvents())));
};
SelectionSidebar.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionSidebar);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/sidebar/sidebar.day.picker.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/sidebar/sidebar.day.picker.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
var SidebarDayPicker = function SidebarDayPicker() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_5__.SelectedDateContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedDate = _useContext2[0],
    setSelectedDate = _useContext2[1];
  var _getMonthDays = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getMonthDays)(selectedDate),
    daysBefore = _getMonthDays.daysBefore,
    days = _getMonthDays.days,
    daysAfter = _getMonthDays.daysAfter;
  var renderDayBefore = function renderDayBefore(day) {
    var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-day-picker__day': true,
      'c-day-picker__day--disabled': true,
      'c-day-picker__day--past': day.isBefore(convertDateToTimezone(), 'day')
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className,
      key: day.unix()
    }, day.format('D'));
  };
  var renderMonthDay = function renderMonthDay(day) {
    var isSelectedDay = day.isSame(selectedDate, 'day');
    var isToday = day.isSame(today, 'day');
    var isPast = day.isBefore(convertDateToTimezone(), 'day');
    var isSelectable = !isSelectedDay && !isPast;
    var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-day-picker__day': true,
      'c-day-picker__day--today': isToday,
      'c-day-picker__day--selected': isSelectedDay,
      'c-day-picker__day--past': isPast,
      'c-day-picker__day--selectable': isSelectable
    });
    var handleClick = isSelectable ? function () {
      return setSelectedDate(day);
    } : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className,
      key: day.unix(),
      onClick: handleClick
    }, day.format('D'));
  };
  var renderDayAfter = function renderDayAfter(day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-day-picker__day c-day-picker__day--disabled",
      key: day.unix()
    }, day.format('D'));
  };
  var previousDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getPreviousMonthDate)(selectedDate);
  var nextDate = (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getNextMonthDate)(selectedDate);
  var monthName = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_3__.getMonthName)(selectedDate);
  var yearString = selectedDate.format('YYYY');
  var today = convertDateToTimezone().startOf('day');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-picker__paginator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: previousDate === null,
    onClick: function onClick() {
      return setSelectedDate(previousDate);
    },
    className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-btn--small c-day-picker__paginator-decrease-btn",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "caret-back",
    extraClasses: "ibexa-icon--tiny-small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-picker__paginator-date"
  }, monthName, " ", yearString), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--no-text ibexa-btn--small c-day-picker__paginator-increase-btn",
    onClick: function onClick() {
      return setSelectedDate(nextDate);
    },
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "caret-next",
    extraClasses: "ibexa-icon--tiny-small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-picker__week-days c-day-picker__week-days--month"
  }, (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_3__.getWeekdaysShortNames)().map(function (dayName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: dayName,
      className: "c-day-picker__day-name"
    }, dayName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-day-picker__days"
  }, daysBefore.map(renderDayBefore), days.map(renderMonthDay), daysAfter.map(renderDayAfter)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDayPicker);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/sidebar/sidebar.filters.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/sidebar/sidebar.filters.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFiltersReducer */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var SidebarFilters = function SidebarFilters() {
  var languageListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var eventsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_1__.EventsConfigContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isBodyCollapsed = _useState2[0],
    setIsBodyCollapsed = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_1__.CalendarFiltersContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    calendarFilters = _useContext2[0],
    dispatchCalendarFiltersAction = _useContext2[1];
  var typesLabel = Translator.trans( /*@Desc("Types")*/'calendar.filters.types', {}, 'calendar_widget');
  var modifiedLanguageLabel = Translator.trans( /*@Desc("Modified language")*/'calendar.filters.modified_langauge', {}, 'calendar_widget');
  var filtersLabel = Translator.trans( /*@Desc("Filters")*/'calendar.filters.label', {}, 'calendar_widget');
  var filtersClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
    'c-calendar-filters': true,
    'c-calendar-filters--collapsed': isBodyCollapsed
  });
  var languageChange = function languageChange(langValue) {
    dispatchCalendarFiltersAction({
      type: _hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_2__.SELECT_LANGUAGE,
      language: langValue
    });
  };
  var renderTypesFilters = function renderTypesFilters() {
    return Object.entries(eventsConfig).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        eventType = _ref2[0],
        _ref2$ = _ref2[1],
        label = _ref2$.label,
        color = _ref2$.color;
      var isChecked = calendarFilters.eventTypes[eventType];
      var toggleEventTypeFilter = function toggleEventTypeFilter() {
        dispatchCalendarFiltersAction({
          type: _hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_EVENT_TYPE,
          eventType: eventType
        });
      };
      var checkboxClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
        'ibexa-input': true,
        'ibexa-input--checkbox': true
      });
      var checkboxStyle = {
        borderColor: color,
        backgroundColor: isChecked ? color : '#fff'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: eventType,
        className: "c-calendar-filters__type",
        onClick: toggleEventTypeFilter
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: checkboxClass,
        style: checkboxStyle,
        type: "checkbox",
        checked: isChecked,
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "c-calendar-filters__type-label form-check-label"
      }, label));
    });
  };
  var renderLanguagesFilter = function renderLanguagesFilter() {
    var allLanguagesLabel = Translator.trans( /*@Desc("All languages")*/'calendar.filters.all_langauges', {}, 'calendar_widget');
    var languagesMappings = ibexa.adminUiConfig.languages.mappings;
    var languagesOptions = [{
      value: '',
      label: allLanguagesLabel
    }];
    Object.values(languagesMappings).forEach(function (_ref3) {
      var languageCode = _ref3.languageCode,
        name = _ref3.name;
      languagesOptions.push({
        value: languageCode,
        label: name
      });
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      single: true,
      value: calendarFilters.language,
      options: languagesOptions,
      dropdownListRef: languageListRef,
      onChange: languageChange
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: filtersClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-filters__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-filters__title"
  }, filtersLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--no-text ibexa-btn--small c-calendar-filters__toggler",
    onClick: function onClick() {
      return setIsBodyCollapsed(function (isBodyCollapsedPrev) {
        return !isBodyCollapsedPrev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "caret-down",
    extraClasses: "ibexa-icon--tiny-small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-filters__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-filters__filter c-calendar-filters__filter--languages"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-filters__filter-label ibexa-label"
  }, modifiedLanguageLabel), renderLanguagesFilter(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: languageListRef,
    className: "c-calendar-filters__language-list"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-filters__filter c-calendar-filters__filter--types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-calendar-filters__filter-label ibexa-label"
  }, typesLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-calendar-filters__types-list"
  }, renderTypesFilters()))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarFilters);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js ***!
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var LoadingSpinner = function LoadingSpinner(_ref) {
  var isLoading = _ref.isLoading;
  if (!isLoading) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-loading-spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "spinner",
    extraClasses: "c-loading-spinner__icon ibexa-icon--medium ibexa-spin"
  }));
};
LoadingSpinner.propTypes = {
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js ***!
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
/* harmony import */ var _calendar_view_switcher_calendar_view_switcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-view-switcher/calendar.view.switcher */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view-switcher/calendar.view.switcher.js");
/* harmony import */ var _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date-paginator/date.paginator */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js");




var TopBar = function TopBar(_ref) {
  var paginatorType = _ref.paginatorType,
    isCalendarViewSwitcherVisible = _ref.isCalendarViewSwitcherVisible;
  var calendarViewSwitcher = null;
  if (isCalendarViewSwitcherVisible) {
    calendarViewSwitcher = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_view_switcher_calendar_view_switcher__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-top-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-top-bar__menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-top-bar__date-paginator-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: paginatorType
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-top-bar__view-switcher-wrapper"
  }, calendarViewSwitcher)));
};
TopBar.propTypes = {
  paginatorType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isCalendarViewSwitcherVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/view-toggler/view.toggler.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/view-toggler/view.toggler.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");




var _window = window,
  Translator = _window.Translator;
var ViewToggler = function ViewToggler(_ref) {
  var currentView = _ref.currentView,
    setCurrentView = _ref.setCurrentView;
  var label = Translator.trans( /*@Desc("View")*/'view_toggler.view', {}, 'calendar_widget');
  var viewOptions = [{
    iconName: 'view-list',
    label: Translator.trans( /*@Desc("List view")*/'view_toggler.list_view', {}, 'calendar_widget'),
    value: _calendar_module__WEBPACK_IMPORTED_MODULE_3__.MODULE_VIEWS.LIST
  }, {
    iconName: 'date',
    label: Translator.trans( /*@Desc("Calendar view")*/'view_toggler.calendar_view', {}, 'calendar_widget'),
    value: _calendar_module__WEBPACK_IMPORTED_MODULE_3__.MODULE_VIEWS.CALENDAR
  }];
  var selectedOption = viewOptions.find(function (option) {
    return option.value === currentView;
  });
  var updateViewType = function updateViewType(_ref2) {
    var value = _ref2.value;
    setCurrentView(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-view-toggler"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: viewOptions,
    selectedOption: selectedOption,
    onOptionClick: updateViewType,
    selectedItemLabel: label,
    isSwitcher: true,
    extraClasses: "c-view-toggler__dropdown"
  }));
};
ViewToggler.propTypes = {
  currentView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  setCurrentView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewToggler);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.hour.view.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.hour.view.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _events_view_events_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events-view/events.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");





var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var WeekHourView = function WeekHourView(_ref) {
  var date = _ref.date,
    events = _ref.events,
    selectedDate = _ref.selectedDate;
  var today = convertDateToTimezone().startOf('day');
  var isSelected = date.isSame(selectedDate, 'day');
  var isPast = date.isBefore(convertDateToTimezone(), 'day');
  var isToday = date.isSame(today, 'day');
  var hourIn24Format = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__.forceBrowserTimezone)(date).format('HH');
  var timePMsymbol = Translator.trans( /*@Desc("PM")*/'calendar.time_pm_symbol', {}, 'calendar_widget');
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-week-hour-view': true,
    'c-week-hour-view--past': isPast,
    'c-week-hour-view--today': isToday,
    'c-week-hour-view--selected': isSelected,
    'c-week-hour-view--first-pm': hourIn24Format === '12'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    "data-time-pm-symbol": timePMsymbol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_view_events_view__WEBPACK_IMPORTED_MODULE_3__["default"], {
    events: events
  }));
};
WeekHourView.propTypes = {
  date: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  selectedDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
WeekHourView.defaultProps = {
  events: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeekHourView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.view.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.view.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-view/calendar.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _hooks_useEventsGroupedByFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useEventsGroupedByFetch */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByFetch.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _week_hour_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./week.hour.view */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.hour.view.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
var WeekView = function WeekView() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_4__.SelectedDateContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedDate = _useContext2[0],
    setSelectedDate = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__.CurrentCalendarViewContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    setCurrentCalendarView = _useContext4[1];
  var today = convertDateToTimezone().startOf('day');
  var now = convertDateToTimezone();
  var days = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__.getWeekDays)(selectedDate);
  }, [selectedDate]);
  var _days = _slicedToArray(days, 1),
    fromDate = _days[0];
  var toDate = days[days.length - 1].clone().endOf('day');
  var _useEventsGroupedByFe = (0,_hooks_useEventsGroupedByFetch__WEBPACK_IMPORTED_MODULE_5__.useEventsGroupedByFetch)(fromDate, toDate, 'hour'),
    _useEventsGroupedByFe2 = _slicedToArray(_useEventsGroupedByFe, 2),
    events = _useEventsGroupedByFe2[0].events,
    isLoading = _useEventsGroupedByFe2[1];
  var weekHours = [];
  var languageCode = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__.getAdminPanelLanguageCode)();
  var _loop = function _loop(i) {
    var hours = [];
    days.forEach(function (day) {
      hours.push(day.clone().add(i, 'hour'));
    });
    weekHours.push(hours);
  };
  for (var i = 0; i < 24; i++) {
    _loop(i);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-week-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-week-view__days-names"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-week-view__day-time c-week-view__day-time--no-border"
  }), days.map(function (day) {
    var dayName = day.toDate().toLocaleDateString(languageCode, {
      weekday: 'short'
    });
    var isToday = day.isSame(today, 'day');
    var isSelectedDay = day.isSame(selectedDate, 'day');
    var dayNameClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-week-view__day-name': true,
      'c-week-view__day-name--today': isToday,
      'c-week-view__day-name--selected': isSelectedDay
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: dayName,
      className: dayNameClassName
    }, dayName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-week-view__days-dates"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-week-view__day-time c-week-view__day-time--no-border"
  }), days.map(function (date) {
    var isSelectedDay = date.isSame(selectedDate, 'day');
    var isPast = date.isBefore(now, 'day');
    var isToday = date.isSame(today, 'day');
    var isSelectable = !isSelectedDay && !isPast;
    var wrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-week-view__day-date-wrapper': true,
      'c-week-view__day-date-wrapper--today': isToday,
      'c-week-view__day-date-wrapper--past': isPast,
      'c-week-view__day-date-wrapper--selected': isSelectedDay
    });
    var dayDateClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-week-view__day-date': true,
      'c-week-view__day-date--past': isPast,
      'c-week-view__day-date--today': isToday
    });
    var handleClick = function handleClick() {
      if (isSelectable) {
        setSelectedDate(date);
        setCurrentCalendarView(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__.CALENDAR_VIEWS.DAY);
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: date.unix(),
      className: wrapperClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: dayDateClassName,
      onClick: handleClick
    }, date.format('D')));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-week-view__days"
  }, weekHours.map(function (rowHours) {
    var forceBrowserTimezoneHour = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__.forceBrowserTimezone)(rowHours[0]);
    var hourIn24Format = forceBrowserTimezoneHour.format('HH');
    var dayTimeLabel = (0,_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__.getAmPmTimeLabel)(forceBrowserTimezoneHour.toDate());
    var dayTimeClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
      'c-week-view__day-time': true,
      'c-week-view__day-time--first-pm': hourIn24Format === '12'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: rowHours[0].unix(),
      className: "c-week-view__hour-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: dayTimeClassName
    }, dayTimeLabel), rowHours.map(function (hour) {
      var hourEventsData = isLoading ? [] : events[hour.unix()];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_week_hour_view__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: hour.unix(),
        events: hourEventsData,
        date: hour,
        selectedDate: selectedDate
      });
    }));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeekView);

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forceBrowserTimezone: () => (/* binding */ forceBrowserTimezone),
/* harmony export */   getAdminPanelLanguageCode: () => (/* binding */ getAdminPanelLanguageCode),
/* harmony export */   getAmPmTimeLabel: () => (/* binding */ getAmPmTimeLabel),
/* harmony export */   getMonthName: () => (/* binding */ getMonthName),
/* harmony export */   getMonthShortName: () => (/* binding */ getMonthShortName),
/* harmony export */   getTimeLabel: () => (/* binding */ getTimeLabel),
/* harmony export */   getWeekdaysLongNames: () => (/* binding */ getWeekdaysLongNames),
/* harmony export */   getWeekdaysShortNames: () => (/* binding */ getWeekdaysShortNames)
/* harmony export */ });
/* harmony import */ var _date_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.helper */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");

var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
var forceBrowserTimezone = function forceBrowserTimezone(date) {
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return convertDateToTimezone(date, browserTimezone, true);
};
var getAdminPanelLanguageCode = function getAdminPanelLanguageCode() {
  return document.querySelector('html').getAttribute('lang').replace(new RegExp('_', 'g'), '-');
};
var getMonthName = function getMonthName(dateWithUserTimezone) {
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var dateWithForcedBrowserTimezone = new Date(convertDateToTimezone(dateWithUserTimezone, browserTimezone, true));
  return dateWithForcedBrowserTimezone.toLocaleDateString(getAdminPanelLanguageCode(), {
    month: 'long'
  });
};
var getMonthShortName = function getMonthShortName(dateWithUserTimezone) {
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var dateWithForcedBrowserTimezone = new Date(convertDateToTimezone(dateWithUserTimezone, browserTimezone, true));
  return dateWithForcedBrowserTimezone.toLocaleDateString(getAdminPanelLanguageCode(), {
    month: 'short'
  });
};
var weekdaysShortNames = null;
var getWeekdaysShortNames = function getWeekdaysShortNames() {
  if (!weekdaysShortNames) {
    var weekdays = (0,_date_helper__WEBPACK_IMPORTED_MODULE_0__.getWeekDays)(convertDateToTimezone());
    var languageCode = getAdminPanelLanguageCode();
    weekdaysShortNames = weekdays.map(function (day) {
      return day.toDate().toLocaleDateString(languageCode, {
        weekday: 'short'
      });
    });
  }
  return weekdaysShortNames;
};
var weekdaysLongNames = null;
var getWeekdaysLongNames = function getWeekdaysLongNames() {
  if (!weekdaysLongNames) {
    var weekdays = (0,_date_helper__WEBPACK_IMPORTED_MODULE_0__.getWeekDays)(convertDateToTimezone());
    var languageCode = getAdminPanelLanguageCode();
    weekdaysLongNames = weekdays.map(function (day) {
      return day.toDate().toLocaleDateString(languageCode, {
        weekday: 'long'
      });
    });
  }
  return weekdaysLongNames;
};
var getAmPmTimeLabel = function getAmPmTimeLabel(date) {
  return date.toLocaleTimeString(getAdminPanelLanguageCode(), {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric'
  });
};
var getTimeLabel = function getTimeLabel(date) {
  return date.toLocaleTimeString(getAdminPanelLanguageCode(), {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric'
  });
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMonthDays: () => (/* binding */ getMonthDays),
/* harmony export */   getNextDayDate: () => (/* binding */ getNextDayDate),
/* harmony export */   getNextMonthDate: () => (/* binding */ getNextMonthDate),
/* harmony export */   getNextWeekDate: () => (/* binding */ getNextWeekDate),
/* harmony export */   getPreviousDayDate: () => (/* binding */ getPreviousDayDate),
/* harmony export */   getPreviousMonthDate: () => (/* binding */ getPreviousMonthDate),
/* harmony export */   getPreviousWeekDate: () => (/* binding */ getPreviousWeekDate),
/* harmony export */   getWeekDays: () => (/* binding */ getWeekDays)
/* harmony export */ });
var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
var getNextMonthDate = function getNextMonthDate(currentDate) {
  var nextMonthDate = currentDate.clone().add(1, 'month').startOf('month');
  return nextMonthDate;
};
var getNextWeekDate = function getNextWeekDate(currentDate) {
  var nextWeekDate = currentDate.clone().add(1, 'week').startOf('week');
  return nextWeekDate;
};
var getNextDayDate = function getNextDayDate(currentDate) {
  var nextDayDate = currentDate.clone().add(1, 'day');
  return nextDayDate;
};

/**
 * Returns first date from previous month, which is in present time.
 * If all month's days are in the past null is returned.
 *
 * @param {Object} currentDate
 */
var getPreviousMonthDate = function getPreviousMonthDate(currentDate) {
  var previousMonthDate = currentDate.clone().subtract(1, 'month').startOf('month');
  var today = convertDateToTimezone(new Date()).startOf('day');
  if (previousMonthDate.isBefore(today, 'day')) {
    return today.isSame(previousMonthDate, 'month') ? today : null;
  }
  return previousMonthDate;
};

/**
 * Returns first date from previous week, which is in present time.
 * If all week's days are in the past null is returned.
 *
 * @param {Object} currentDate
 */
var getPreviousWeekDate = function getPreviousWeekDate(currentDate) {
  var previousWeekDate = currentDate.clone().subtract(1, 'week').startOf('week');
  var today = convertDateToTimezone(new Date()).startOf('day');
  if (previousWeekDate.isBefore(today, 'day')) {
    return today.isSame(previousWeekDate, 'week') ? today : null;
  }
  return previousWeekDate;
};
var getPreviousDayDate = function getPreviousDayDate(currentDate) {
  var previousDayDate = currentDate.clone().subtract(1, 'day');
  var today = convertDateToTimezone(new Date()).startOf('day');
  if (previousDayDate.isBefore(today, 'day')) {
    return null;
  }
  return previousDayDate;
};
function getMonthDays(date) {
  var monthFirstDay = date.clone().startOf('month');
  var monthLastDay = date.clone().endOf('month');
  var countOfDaysBefore = monthFirstDay.weekday();
  var daysCount = monthLastDay.daysInMonth();
  var countOfDaysAfter = 7 * 6 - countOfDaysBefore - daysCount;
  var daysBefore = [];
  var days = [];
  var daysAfter = [];
  for (var i = countOfDaysBefore; i > 0; i--) {
    daysBefore.push(monthFirstDay.clone().add(-i, 'day').startOf('day'));
  }
  for (var _i = 0; _i < daysCount; _i++) {
    days.push(monthFirstDay.clone().add(_i, 'day').startOf('day'));
  }
  for (var _i2 = 0; _i2 < countOfDaysAfter; _i2++) {
    daysAfter.push(monthLastDay.clone().add(_i2 + 1, 'day').startOf('day'));
  }
  return {
    daysBefore: daysBefore,
    days: days,
    daysAfter: daysAfter
  };
}
var getWeekDays = function getWeekDays(date) {
  var weekFirstDay = date.clone().startOf('week');
  var weekDays = [];
  for (var i = 0; i < 7; i++) {
    weekDays.push(weekFirstDay.clone().add(i, 'day'));
  }
  return weekDays;
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupEventsBy: () => (/* binding */ groupEventsBy)
/* harmony export */ });
var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
var groupEventsBy = function groupEventsBy(data, groupBy) {
  return data.events.reduce(function (groupedEvents, event) {
    var eventDate = convertDateToTimezone(parseInt(event.dateTime, 10) * 1000);
    var eventTimestamp = eventDate.startOf(groupBy).unix();
    var group = groupedEvents[eventTimestamp] ? groupedEvents[eventTimestamp] : [];
    group.push(event);
    groupedEvents[eventTimestamp] = group;
    return groupedEvents;
  }, {});
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsFetch: () => (/* binding */ useEventsFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFetchReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFetchReducer */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFetchReducer.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
var useEventsFetch = function useEventsFetch(startDate, endDate, loadEvents, processEvents) {
  var page = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var _useFetchReducer = (0,_useFetchReducer__WEBPACK_IMPORTED_MODULE_1__.useFetchReducer)(),
    _useFetchReducer2 = _slicedToArray(_useFetchReducer, 2),
    eventsState = _useFetchReducer2[0],
    dispatch = _useFetchReducer2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    reloadCounter = _useState2[0],
    setReloadCounter = _useState2[1];
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_2__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_2__.CalendarFiltersContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    calendarFilters = _useContext2[0];
  var now = convertDateToTimezone();
  var fromDate = startDate.isBefore(now, 'day') ? now.startOf('day') : startDate;
  var fromTimestamp = fromDate.unix();
  var toTimestamp = endDate.unix();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var forceReload = function forceReload() {
      return setReloadCounter(reloadCounter + 1);
    };
    window.document.body.addEventListener('ibexa-calendar-reload-data', forceReload);
    return function () {
      window.document.body.removeEventListener('ibexa-calendar-reload-data', forceReload);
    };
  }, [setReloadCounter, reloadCounter]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var effectCleaned = false;
    dispatch({
      type: _useFetchReducer__WEBPACK_IMPORTED_MODULE_1__.START_FETCHING
    });
    loadEvents(restInfo, fromTimestamp, toTimestamp, calendarFilters, page, function (response) {
      if (effectCleaned) {
        return;
      }
      var processedEvents = processEvents(response);
      dispatch({
        type: _useFetchReducer__WEBPACK_IMPORTED_MODULE_1__.END_FETCHING,
        data: processedEvents
      });
    });
    return function () {
      effectCleaned = true;
    };
  }, [fromTimestamp, toTimestamp, loadEvents, processEvents, reloadCounter, calendarFilters, page]);
  return [eventsState.data, !eventsState.dataFetched];
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByDayFetch.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByDayFetch.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsGroupedByDayFetch: () => (/* binding */ useEventsGroupedByDayFetch)
/* harmony export */ });
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/calendar.service */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js");
/* harmony import */ var _useEventsFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventsFetch */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js");


var useEventsGroupedByDayFetch = function useEventsGroupedByDayFetch(startDate, endDate) {
  return (0,_useEventsFetch__WEBPACK_IMPORTED_MODULE_1__.useEventsFetch)(startDate, endDate, _services_calendar_service__WEBPACK_IMPORTED_MODULE_0__.loadEventsGroupedByDay, createEventsMap);
};
var createEventsMap = function createEventsMap(_ref) {
  var groups = _ref.groups;
  var groupedEventsMap = {};
  Object.values(groups).forEach(function (dayEventsGroup) {
    groupedEventsMap[dayEventsGroup.DateRange.startDate] = {
      events: dayEventsGroup.events,
      totalCount: dayEventsGroup.totalCount
    };
  });
  return groupedEventsMap;
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByFetch.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByFetch.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsGroupedByFetch: () => (/* binding */ useEventsGroupedByFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/calendar.service */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js");
/* harmony import */ var _useEventsFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventsFetch */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js");
/* harmony import */ var _helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/group.events.by */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js");




var useEventsGroupedByFetch = function useEventsGroupedByFetch(startDate, endDate, groupBy) {
  var nextPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var processEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    var groupedEvents = (0,_helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__.groupEventsBy)(data, groupBy);
    return {
      events: groupedEvents,
      totalCount: data.totalCount,
      nextPage: data._nextPage
    };
  }, [groupBy]);
  return (0,_useEventsFetch__WEBPACK_IMPORTED_MODULE_2__.useEventsFetch)(startDate, endDate, _services_calendar_service__WEBPACK_IMPORTED_MODULE_1__.loadEventsUngrouped, processEvents, nextPage);
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsLoadMore: () => (/* binding */ useEventsLoadMore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calendar.module */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/calendar.service */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js");
/* harmony import */ var _helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/group.events.by */ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
var loadMoreEventsInitialState = {
  isLoading: true,
  data: null,
  nextPage: null,
  remainingEventsCount: null,
  reloadCounter: 0
};
var INITIAL_LOAD_START = 'INITIAL_LOAD_START';
var INITIAL_LOAD_END = 'INITIAL_LOAD_END';
var LOAD_MORE_START = 'LOAD_MORE_START';
var LOAD_MORE_END = 'LOAD_MORE_END';
var RELOAD = 'RELOAD';
var loadMoreEventsReducer = function loadMoreEventsReducer(state, action) {
  switch (action.type) {
    case INITIAL_LOAD_START:
      return startInitialLoad();
    case INITIAL_LOAD_END:
      return endInitialLoad(state, action);
    case LOAD_MORE_START:
      return startLoadMore(state);
    case LOAD_MORE_END:
      return endLoadMore(state, action);
    case RELOAD:
      return reload(state);
    default:
      throw new Error();
  }
};
var startInitialLoad = function startInitialLoad() {
  return loadMoreEventsInitialState;
};
var endInitialLoad = function endInitialLoad(state, action) {
  var _action$data = action.data,
    loadedEvents = _action$data.groupedEvents,
    loadedEventsCount = _action$data.loadedEventsCount,
    nextPage = _action$data.nextPage,
    totalCount = _action$data.totalCount;
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: false,
    data: loadedEvents,
    nextPage: nextPage,
    remainingEventsCount: totalCount - loadedEventsCount
  });
};
var startLoadMore = function startLoadMore(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: true
  });
};
var endLoadMore = function endLoadMore(state, action) {
  var _action$data2 = action.data,
    loadedEvents = _action$data2.groupedEvents,
    loadedEventsCount = _action$data2.loadedEventsCount,
    nextPage = _action$data2.nextPage,
    totalCount = _action$data2.totalCount;
  var events = Object.entries(loadedEvents).reduce(function (allEvents, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      timestamp = _ref2[0],
      eventsData = _ref2[1];
    if (allEvents[timestamp]) {
      allEvents[timestamp] = [].concat(_toConsumableArray(allEvents[timestamp]), _toConsumableArray(eventsData));
    } else {
      allEvents[timestamp] = eventsData;
    }
    return allEvents;
  }, _objectSpread({}, state.data));
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: false,
    data: events,
    nextPage: nextPage,
    remainingEventsCount: totalCount - loadedEventsCount
  });
};
var reload = function reload(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    reloadCounter: state.reloadCounter + 1
  });
};
var useEventsLoadMore = function useEventsLoadMore(startDate, endDate, groupBy) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(loadMoreEventsReducer, loadMoreEventsInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    isLoading = _useReducer2$.isLoading,
    data = _useReducer2$.data,
    nextPage = _useReducer2$.nextPage,
    remainingEventsCount = _useReducer2$.remainingEventsCount,
    reloadCounter = _useReducer2$.reloadCounter,
    dispatch = _useReducer2[1];
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_1__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_calendar_module__WEBPACK_IMPORTED_MODULE_1__.CalendarFiltersContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    calendarFilters = _useContext2[0];
  var now = convertDateToTimezone();
  var fromDate = startDate.isBefore(now, 'day') ? now.startOf('day') : startDate;
  var fromTimestamp = fromDate.unix();
  var toTimestamp = endDate.unix();
  var processEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (eventsData) {
    var groupedEvents = (0,_helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__.groupEventsBy)(eventsData, groupBy);
    return {
      groupedEvents: groupedEvents,
      loadedEventsCount: eventsData.events.length,
      totalCount: eventsData.totalCount,
      nextPage: eventsData._nextPage
    };
  }, [groupBy]);
  var loadMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!isLoading && remainingEventsCount <= 0) {
      return;
    }
    dispatch({
      type: LOAD_MORE_START
    });
    (0,_services_calendar_service__WEBPACK_IMPORTED_MODULE_2__.loadEventsUngrouped)(restInfo, fromTimestamp, toTimestamp, calendarFilters, nextPage, function (response) {
      var processedEvents = processEvents(response);
      dispatch({
        type: LOAD_MORE_END,
        data: processedEvents
      });
    });
  }, [fromTimestamp, toTimestamp, _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__.loadEventsUngrouped, processEvents, calendarFilters, nextPage, isLoading]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var forceReload = function forceReload() {
      return dispatch({
        type: RELOAD
      });
    };
    window.document.body.addEventListener('ibexa-calendar-reload-data', forceReload);
    return function () {
      window.document.body.removeEventListener('ibexa-calendar-reload-data', forceReload);
    };
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var effectCleaned = false;
    dispatch({
      type: INITIAL_LOAD_START
    });
    (0,_services_calendar_service__WEBPACK_IMPORTED_MODULE_2__.loadEventsUngrouped)(restInfo, fromTimestamp, toTimestamp, calendarFilters, null, function (response) {
      if (effectCleaned) {
        return;
      }
      var processedEvents = processEvents(response);
      dispatch({
        type: INITIAL_LOAD_END,
        data: processedEvents
      });
    });
    return function () {
      effectCleaned = true;
    };
  }, [dispatch, restInfo, fromTimestamp, toTimestamp, calendarFilters, _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__.loadEventsUngrouped, processEvents, reloadCounter]);
  return [data, isLoading, remainingEventsCount, loadMore];
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFetchReducer.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFetchReducer.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   END_FETCHING: () => (/* binding */ END_FETCHING),
/* harmony export */   START_FETCHING: () => (/* binding */ START_FETCHING),
/* harmony export */   useFetchReducer: () => (/* binding */ useFetchReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fetchInitialState = {
  dataFetched: false,
  data: {}
};
var START_FETCHING = 'START_FETCHING';
var END_FETCHING = 'END_FETCHING';
var fetchReducer = function fetchReducer(state, action) {
  switch (action.type) {
    case START_FETCHING:
      return fetchInitialState;
    case END_FETCHING:
      return {
        data: action.data,
        dataFetched: true
      };
    default:
      throw new Error();
  }
};
var useFetchReducer = function useFetchReducer() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(fetchReducer, fetchInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    fetchState = _useReducer2[0],
    dispatch = _useReducer2[1];
  return [fetchState, dispatch];
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SELECT_LANGUAGE: () => (/* binding */ SELECT_LANGUAGE),
/* harmony export */   TOGGLE_EVENT_TYPE: () => (/* binding */ TOGGLE_EVENT_TYPE),
/* harmony export */   useFiltersReducer: () => (/* binding */ useFiltersReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var getFiltersInitialState = function getFiltersInitialState(eventsConfig) {
  var eventTypes = Object.keys(eventsConfig).reduce(function (output, eventType) {
    output[eventType] = true;
    return output;
  }, {});
  return {
    eventTypes: eventTypes,
    language: ''
  };
};
var TOGGLE_EVENT_TYPE = 'TOGGLE_EVENT_TYPE';
var SELECT_LANGUAGE = 'SELECT_LANGUAGE';
var filtersReducer = function filtersReducer(state, action) {
  switch (action.type) {
    case TOGGLE_EVENT_TYPE:
      {
        var isEventTypeSelected = !state.eventTypes[action.eventType];
        return _objectSpread(_objectSpread({}, state), {}, {
          eventTypes: _objectSpread(_objectSpread({}, state.eventTypes), {}, _defineProperty({}, action.eventType, isEventTypeSelected))
        });
      }
    case SELECT_LANGUAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        language: action.language
      });
    default:
      throw new Error();
  }
};
var useFiltersReducer = function useFiltersReducer(eventsConfig) {
  var filtersInitialState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return getFiltersInitialState(eventsConfig);
  }, [eventsConfig]);
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(filtersReducer, filtersInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    filters = _useReducer2[0],
    dispatch = _useReducer2[1];
  return [filters, dispatch];
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useSelectionReducer.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useSelectionReducer.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelectionReducer: () => (/* binding */ useSelectionReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var eventsSelectionInitialState = {
  eventsType: null,
  selectedEvents: {},
  selectionToBeConfirmed: null
};
var eventsSelectionReducer = function eventsSelectionReducer(state, action) {
  switch (action.type) {
    case 'SELECT_EVENT':
      return selectEvent(state, action);
    case 'DESELECT_EVENT':
      return deselectEvent(state, action);
    case 'DESELECT_ALL_EVENTS':
      return deselectAllEvents(state, action);
    case 'CONFIRM_SELECTION':
      return confirmSelection(state, action);
    case 'REJECT_SELECTION':
      return rejectSelection(state, action);
    case 'CLEAR_SELECTION':
      return eventsSelectionInitialState;
    default:
      throw new Error();
  }
};
var selectEvent = function selectEvent(state, action) {
  var event = action.event;
  var isDifferentType = state.eventsType !== null && event.type !== state.eventsType;
  if (isDifferentType) {
    return _objectSpread(_objectSpread({}, state), {}, {
      selectionToBeConfirmed: event
    });
  }
  return _objectSpread(_objectSpread({}, state), {}, {
    eventsType: event.type,
    selectedEvents: _objectSpread(_objectSpread({}, state.selectedEvents), {}, _defineProperty({}, event.id, event))
  });
};
var deselectEvent = function deselectEvent(state, action) {
  var newSelectedEvents = _objectSpread({}, state.selectedEvents);
  delete newSelectedEvents[action.eventId];
  return _objectSpread(_objectSpread({}, state), {}, {
    eventsType: Object.keys(newSelectedEvents).length > 0 ? state.eventsType : null,
    selectedEvents: newSelectedEvents
  });
};
var deselectAllEvents = function deselectAllEvents(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    eventsType: null,
    selectedEvents: {}
  });
};
var confirmSelection = function confirmSelection(state) {
  var event = state.selectionToBeConfirmed;
  if (!event) {
    return state;
  }
  return _objectSpread(_objectSpread({}, state), {}, {
    eventsType: event.type,
    selectedEvents: _defineProperty({}, event.id, event),
    selectionToBeConfirmed: null
  });
};
var rejectSelection = function rejectSelection(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    selectionToBeConfirmed: null
  });
};
var useSelectionReducer = function useSelectionReducer() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(eventsSelectionReducer, eventsSelectionInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    eventsSelection = _useReducer2[0],
    dispatchSelectEventAction = _useReducer2[1];
  var clearSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    dispatchSelectEventAction({
      type: 'CLEAR_SELECTION'
    });
  }, [dispatchSelectEventAction]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.document.body.addEventListener('ibexa-calendar-clear-selection', clearSelection);
    return function () {
      window.document.body.removeEventListener('ibexa-calendar-clear-selection', clearSelection);
    };
  }, [clearSelection]);
  return [eventsSelection, dispatchSelectEventAction];
};

/***/ }),

/***/ "./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadEvents: () => (/* binding */ loadEvents),
/* harmony export */   loadEventsGroupedByDay: () => (/* binding */ loadEventsGroupedByDay),
/* harmony export */   loadEventsUngrouped: () => (/* binding */ loadEventsUngrouped)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _window = window,
  Translator = _window.Translator;
var ENDPOINT_EVENTS = '/api/ibexa/v2/calendar/event';
var ENDPOINT_EVENTS_GROUPED_BY_DAY = '/api/ibexa/v2/calendar/event/grouped-by-day';
var getUrlFilters = function getUrlFilters(calendarFilters) {
  var filters = [];
  var selectedEventTypes = Object.entries(calendarFilters.eventTypes).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      isEventTypeSelected = _ref2[1];
    return isEventTypeSelected;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
      eventType = _ref4[0];
    return eventType;
  });
  if (selectedEventTypes.length) {
    filters.push("types=".concat(selectedEventTypes.join(',')));
  }
  if (calendarFilters.language) {
    filters.push("languages=".concat(calendarFilters.language));
  }
  return filters.join('&');
};
var loadEventsUngrouped = function loadEventsUngrouped(restInfo, timestampStart, timestampEnd, calendarFilters, page, callback) {
  var urlFilters = getUrlFilters(calendarFilters);
  var url = page ? page : "".concat(ENDPOINT_EVENTS, "?start=").concat(timestampStart, "&end=").concat(timestampEnd, "&").concat(urlFilters);
  loadEvents(restInfo, url, function (response) {
    callback(response.EventList);
  });
};
var loadEventsGroupedByDay = function loadEventsGroupedByDay(restInfo, timestampStart, timestampEnd, calendarFilters, page, callback) {
  var urlFilters = getUrlFilters(calendarFilters);
  var url = page ? page : "".concat(ENDPOINT_EVENTS_GROUPED_BY_DAY, "?start=").concat(timestampStart, "&end=").concat(timestampEnd, "&").concat(urlFilters);
  loadEvents(restInfo, url, function (response) {
    callback(response.EventGroupList);
  });
};
var loadEvents = function loadEvents(_ref5, url, callback) {
  var siteaccess = _ref5.siteaccess;
  var request = new Request(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-Siteaccess': siteaccess
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  var errorMessage = Translator.trans( /*@Desc("Cannot load calendar data")*/'calendar.load_events.error.message', {}, 'calendar_widget');
  fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(callback)["catch"](function () {
    return window.ibexa.helpers.notification.showErrorNotification(errorMessage);
  });
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
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/calendar/src/bundle/ui-dev/src/modules/calendar.module.js"));
/******/ }
]);