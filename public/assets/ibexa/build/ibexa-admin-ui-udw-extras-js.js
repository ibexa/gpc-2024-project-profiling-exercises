(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-udw-extras-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOTIFICATION_ERROR_LABEL: () => (/* binding */ NOTIFICATION_ERROR_LABEL),
/* harmony export */   NOTIFICATION_INFO_LABEL: () => (/* binding */ NOTIFICATION_INFO_LABEL),
/* harmony export */   NOTIFICATION_SUCCESS_LABEL: () => (/* binding */ NOTIFICATION_SUCCESS_LABEL),
/* harmony export */   NOTIFICATION_WARNING_LABEL: () => (/* binding */ NOTIFICATION_WARNING_LABEL),
/* harmony export */   showErrorNotification: () => (/* binding */ showErrorNotification),
/* harmony export */   showInfoNotification: () => (/* binding */ showInfoNotification),
/* harmony export */   showNotification: () => (/* binding */ showNotification),
/* harmony export */   showSuccessNotification: () => (/* binding */ showSuccessNotification),
/* harmony export */   showWarningNotification: () => (/* binding */ showWarningNotification)
/* harmony export */ });
var NOTIFICATION_INFO_LABEL = 'info';
var NOTIFICATION_SUCCESS_LABEL = 'success';
var NOTIFICATION_WARNING_LABEL = 'warning';
var NOTIFICATION_ERROR_LABEL = 'error';

/**
 * Dispatches notification event
 *
 * @method showNotification
 * @param {{message: string, label: string}} detail
 */
var showNotification = function showNotification(detail) {
  var event = new CustomEvent('ibexa-notify', {
    detail: detail
  });
  document.body.dispatchEvent(event);
};

/**
 * Dispatches info notification event
 *
 * @method showInfoNotification
 * @param {String} message
 */
var showInfoNotification = function showInfoNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_INFO_LABEL
  });
};

/**
 * Dispatches success notification event
 *
 * @method showSuccessNotification
 * @param {String} message
 */
var showSuccessNotification = function showSuccessNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_SUCCESS_LABEL
  });
};

/**
 * Dispatches warning notification event
 *
 * @method showWarningNotification
 * @param {String} message
 */
var showWarningNotification = function showWarningNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_WARNING_LABEL
  });
};

/**
 * Dispatches error notification event
 *
 * @method showErrorNotification
 * @param {(string|Error)} error
 */
var showErrorNotification = function showErrorNotification(error) {
  var isErrorObj = error instanceof Error;
  var message = isErrorObj ? error.message : error;
  showNotification({
    message: message,
    label: NOTIFICATION_ERROR_LABEL
  });
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var Thumbnail = function Thumbnail(_ref) {
  var thumbnailData = _ref.thumbnailData,
    iconExtraClasses = _ref.iconExtraClasses,
    contentTypeIconPath = _ref.contentTypeIconPath;
  var renderContentTypeIcon = function renderContentTypeIcon() {
    if (!contentTypeIconPath) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-thumbnail__icon-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extraClasses: "ibexa-icon--small",
      customPath: contentTypeIconPath
    }));
  };
  if (thumbnailData.mimeType === 'image/svg+xml') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extraClasses: iconExtraClasses,
      customPath: thumbnailData.resource
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-thumbnail"
  }, renderContentTypeIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: thumbnailData.resource
  }));
};
Thumbnail.propTypes = {
  thumbnailData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    mimeType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    resource: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  iconExtraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  contentTypeIconPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Thumbnail.defaultProps = {
  iconExtraClasses: null,
  contentTypeIconPath: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnail);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var ContentCreateButton = function ContentCreateButton(_ref) {
  var _selectedLocation, _contentTypeInfo$isCo;
  var isDisabled = _ref.isDisabled;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    markedLocationId = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 1),
    loadedLocationsMap = _useContext4[0];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.CreateContentWidgetContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    setCreateContentVisible = _useContext6[1];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SelectedLocationsContext),
    _useContext8 = _slicedToArray(_useContext7, 1),
    selectedLocations = _useContext8[0];
  var _useContext9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.MultipleConfigContext),
    _useContext10 = _slicedToArray(_useContext9, 2),
    multiple = _useContext10[0],
    multipleItemsLimit = _useContext10[1];
  var _useContext11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.ContentOnTheFlyConfigContext),
    hidden = _useContext11.hidden,
    allowedLocations = _useContext11.allowedLocations;
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.ContentTypesMapContext);
  var createLabel = Translator.trans( /*@Desc("Create new")*/'create_content.create_new', {}, 'universal_discovery_widget');
  var toggleContentCreateVisibility = function toggleContentCreateVisibility() {
    ibexa.helpers.tooltips.hideAll();
    setCreateContentVisible(function (prevState) {
      return !prevState;
    });
  };
  var selectedLocation = loadedLocationsMap.find(function (loadedLocation) {
    return loadedLocation.parentLocationId === markedLocationId;
  });
  if (!selectedLocation && loadedLocationsMap.length) {
    selectedLocation = loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
      return subitem.location.id === markedLocationId;
    });
  }
  var contentTypeInfo = contentTypesMap[(_selectedLocation = selectedLocation) === null || _selectedLocation === void 0 || (_selectedLocation = _selectedLocation.location) === null || _selectedLocation === void 0 ? void 0 : _selectedLocation.ContentInfo.Content.ContentType._href];
  var isAllowedLocation = selectedLocation && (!allowedLocations || allowedLocations.includes(selectedLocation.parentLocationId));
  var hasAccess = !selectedLocation || !selectedLocation.permissions || selectedLocation.permissions && selectedLocation.permissions.create.hasAccess;
  var isLimitReached = multiple && multipleItemsLimit !== 0 && selectedLocations.length >= multipleItemsLimit;
  var isContainer = (_contentTypeInfo$isCo = contentTypeInfo === null || contentTypeInfo === void 0 ? void 0 : contentTypeInfo.isContainer) !== null && _contentTypeInfo$isCo !== void 0 ? _contentTypeInfo$isCo : true;
  if (hidden) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-create-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "c-content-create-button__btn btn ibexa-btn ibexa-btn--dark",
    disabled: isDisabled || !hasAccess || !isAllowedLocation || isLimitReached || !isContainer,
    onClick: toggleContentCreateVisibility,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "create",
    extraClasses: "ibexa-icon--small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ibexa-btn__label"
  }, createLabel)));
};
ContentCreateButton.propTypes = {
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ContentCreateButton.defaultProps = {
  isDisabled: false
};
ibexa.addConfig('adminUiConfig.universalDiscoveryWidget.topMenuActions', [{
  id: 'content-create-button',
  priority: 30,
  component: ContentCreateButton
}], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentCreateButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _translation_selector_translation_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translation-selector/translation.selector */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../..//services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../..//universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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
  Routing = _window.Routing,
  ibexa = _window.ibexa;
var ContentEditButton = function ContentEditButton(_ref) {
  var version = _ref.version,
    location = _ref.location,
    isDisabled = _ref.isDisabled,
    label = _ref.label;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.RestInfoContext);
  var allowRedirects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.AllowRedirectsContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.EditOnTheFlyDataContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    setEditOnTheFlyData = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.ActiveTabContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    setActiveTab = _useContext4[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.ContentTypesMapContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTranslationSelectorVisible = _useState2[0],
    setIsTranslationSelectorVisible = _useState2[1];
  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var isUserContentType = ibexa.adminUiConfig.userContentTypes.includes(contentTypeInfo.identifier);
  var btnClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-content-edit-button__btn btn ibexa-btn ibexa-btn--ghost': true,
    'ibexa-btn--no-text': label !== null
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsTranslationSelectorVisible(false);
  }, [version]);
  var hideTranslationSelector = function hideTranslationSelector() {
    setIsTranslationSelectorVisible(false);
  };
  var toggleTranslationSelectorVisibility = function toggleTranslationSelectorVisibility() {
    var languageCodes = version.VersionInfo.languageCodes.split(',');
    if (languageCodes.length === 1) {
      editContent(languageCodes[0]);
    } else {
      setIsTranslationSelectorVisible(true);
    }
  };
  var redirectToContentEdit = function redirectToContentEdit(contentId, versionNo, language, locationId) {
    if (allowRedirects) {
      var href = isUserContentType ? Routing.generate('ibexa.user.update', {
        contentId: contentId,
        versionNo: versionNo,
        language: language
      }, true) : Routing.generate('ibexa.content.draft.edit', {
        contentId: contentId,
        versionNo: versionNo,
        language: language,
        locationId: locationId
      }, true);
      window.location.href = href;
      return;
    }
    setEditOnTheFlyData({
      contentId: contentId,
      versionNo: versionNo,
      languageCode: language,
      locationId: locationId
    });
    setActiveTab('content-edit');
  };
  var editContent = function editContent(languageCode) {
    var contentId = location.ContentInfo.Content._id;
    if (isUserContentType) {
      redirectToContentEdit(contentId, version.VersionInfo.versionNo, languageCode, location.id);
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__.createDraft)(_objectSpread(_objectSpread({}, restInfo), {}, {
      contentId: contentId
    }), function (response) {
      return redirectToContentEdit(contentId, response.Version.VersionInfo.versionNo, languageCode, location.id);
    });
  };
  var renderTranslationSelector = function renderTranslationSelector() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_translation_selector_translation_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hideTranslationSelector: hideTranslationSelector,
      selectTranslation: editContent,
      version: version,
      isOpen: isTranslationSelectorVisible && version
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-edit-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: btnClassName,
    disabled: !version || isDisabled,
    onClick: toggleTranslationSelectorVisibility,
    "data-tooltip-container-selector": ".c-udw-tab",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "edit",
    extraClasses: "ibexa-icon--small"
  }), label), renderTranslationSelector());
};
ContentEditButton.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  version: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
ContentEditButton.defaultProps = {
  label: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentEditButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-edit-button/content.edit.button */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js");



var _window = window,
  ibexa = _window.ibexa;
var SelectedItemEditButton = function SelectedItemEditButton(_ref) {
  var location = _ref.location,
    permissions = _ref.permissions;
  var hasAccess = permissions && permissions.edit.hasAccess;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selected-item-edit-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    version: location.ContentInfo.Content.CurrentVersion.Version,
    location: location,
    isDisabled: !hasAccess
  }));
};
ibexa.addConfig('adminUiConfig.universalDiscoveryWidget.selectedItemActions', [{
  id: 'content-edit-button',
  priority: 30,
  component: SelectedItemEditButton
}], true);
SelectedItemEditButton.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  permissions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedItemEditButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/simple-dropdown/simple.dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var _window = window,
  ibexa = _window.ibexa;
var SortSwitcher = function SortSwitcher(_ref) {
  var isDisabled = _ref.isDisabled;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SortingContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    sorting = _useContext2[0],
    setSorting = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SortOrderContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    sortOrder = _useContext4[0],
    setSortOrder = _useContext4[1];
  var selectedOption = _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SORTING_OPTIONS.find(function (option) {
    return option.sortClause === sorting && option.sortOrder === sortOrder;
  });
  var onOptionClick = function onOptionClick(option) {
    setSorting(option.sortClause);
    setSortOrder(option.sortOrder);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-sort-switcher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SORTING_OPTIONS,
    selectedOption: selectedOption,
    onOptionClick: onOptionClick,
    isDisabled: isDisabled,
    isSwitcher: true
  }));
};
SortSwitcher.propTypes = {
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
SortSwitcher.defaultProps = {
  isDisabled: false
};
ibexa.addConfig('adminUiConfig.universalDiscoveryWidget.topMenuActions', [{
  id: 'sort-switcher',
  priority: 20,
  component: SortSwitcher
}], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortSwitcher);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ToggleSelection = function ToggleSelection(_ref) {
  var multiple = _ref.multiple,
    location = _ref.location,
    isHidden = _ref.isHidden;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SelectedLocationsContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedLocations = _useContext2[0],
    dispatchSelectedLocationsAction = _useContext2[1];
  var isSelected = selectedLocations.some(function (selectedItem) {
    return selectedItem.location.id === location.id;
  });
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-udw-toggle-selection ibexa-input': true,
    'ibexa-input--checkbox': multiple,
    'c-udw-toggle-selection--hidden': isHidden
  });
  var toggleSelection = function toggleSelection() {
    var action = isSelected ? {
      type: 'REMOVE_SELECTED_LOCATION',
      id: location.id
    } : {
      type: 'ADD_SELECTED_LOCATION',
      location: location
    };
    dispatchSelectedLocationsAction(action);
  };
  if (!multiple) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    className: className,
    checked: isSelected,
    disabled: isHidden,
    onChange: toggleSelection
  });
};
ToggleSelection.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isHidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ToggleSelection.defaultProps = {
  isHidden: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSelection);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
var _this = undefined;




var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var TranslationSelectorButton = function TranslationSelectorButton(_ref) {
  var hideTranslationSelector = _ref.hideTranslationSelector,
    selectTranslation = _ref.selectTranslation,
    version = _ref.version,
    isOpen = _ref.isOpen;
  var languageCodes = version ? version.VersionInfo.languageCodes.split(',') : [];
  var editTranslationLabel = Translator.trans( /*@Desc("Select translation")*/'meta_preview.edit_translation', {}, 'universal_discovery_widget');
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-translation-selector': true,
    'c-translation-selector--hidden': !isOpen
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-translation-selector__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "c-translation-selector__title"
  }, "".concat(editTranslationLabel, " (").concat(languageCodes.length, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "c-translation-selector__close-button btn",
    type: "button",
    onClick: hideTranslationSelector
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-translation-selector__languages-wrapper"
  }, languageCodes.map(function (languageCode) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: languageCode,
      className: "c-translation-selector__language",
      onClick: selectTranslation.bind(_this, languageCode)
    }, ibexa.adminUiConfig.languages.mappings[languageCode].name);
  })));
};
TranslationSelectorButton.propTypes = {
  hideTranslationSelector: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  selectTranslation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  version: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslationSelectorButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection/tree.item.toggle.selection.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection/tree.item.toggle.selection.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle-selection/toggle.selection */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js");
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
  ibexa = _window.ibexa,
  document = _window.document;
var TreeItemToggleSelection = function TreeItemToggleSelection(_ref) {
  var locationId = _ref.locationId,
    isContainer = _ref.isContainer,
    contentTypeIdentifier = _ref.contentTypeIdentifier;
  var isUDW = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.UDWContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ibexa.helpers.tooltips.parse(document.querySelector('.c-list'));
  }, []);
  if (!isUDW) {
    return null;
  }
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.SelectedLocationsContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedLocations = _useContext2[0],
    dispatchSelectedLocationsAction = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.MultipleConfigContext),
    _useContext4 = _slicedToArray(_useContext3, 1),
    multiple = _useContext4[0];
  var containersOnly = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.ContainersOnlyContext);
  var allowedContentTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.AllowedContentTypesContext);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.RestInfoContext);
  var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeIdentifier);
  var location = {
    id: locationId
  };
  var dispatchSelectedLocationsActionWrapper = function dispatchSelectedLocationsActionWrapper(action) {
    if (action.location !== undefined) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
        id: action.location.id
      }), function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          selectedLocation = _ref3[0];
        dispatchSelectedLocationsAction(_objectSpread(_objectSpread({}, action), {}, {
          location: selectedLocation
        }));
      });
    } else {
      dispatchSelectedLocationsAction(action);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.SelectedLocationsContext.Provider, {
    value: [selectedLocations, dispatchSelectedLocationsActionWrapper]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    location: location,
    multiple: multiple,
    isHidden: isNotSelectable
  }), isNotSelectable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-list-item__prefix-actions-item-empty"
  }));
};
ibexa.addConfig('adminUiConfig.contentTreeWidget.secondaryItemActions', [{
  id: 'toggle-selection-button',
  priority: 30,
  component: TreeItemToggleSelection
}], true);
TreeItemToggleSelection.propTypes = {
  locationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  isContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeItemToggleSelection);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/simple-dropdown/simple.dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var ViewSwitcher = function ViewSwitcher(_ref) {
  var isDisabled = _ref.isDisabled;
  var viewLabel = Translator.trans( /*@Desc("View")*/'view_switcher.view', {}, 'universal_discovery_widget');
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.CurrentViewContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    currentView = _useContext2[0],
    setCurrentView = _useContext2[1];
  var selectedOption = _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.VIEWS.find(function (option) {
    return option.value === currentView;
  });
  var onOptionClick = function onOptionClick(_ref2) {
    var value = _ref2.value;
    setCurrentView(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-view-switcher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.VIEWS,
    selectedOption: selectedOption,
    onOptionClick: onOptionClick,
    isDisabled: isDisabled,
    selectedItemLabel: viewLabel,
    isSwitcher: true
  }));
};
ViewSwitcher.propTypes = {
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ViewSwitcher.defaultProps = {
  isDisabled: false
};
ibexa.addConfig('adminUiConfig.universalDiscoveryWidget.topMenuActions', [{
  id: 'view-switcher',
  priority: 10,
  component: ViewSwitcher
}], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewSwitcher);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getLocationData: () => (/* binding */ getLocationData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/thumbnail/thumbnail */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _components_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content-edit-button/content.edit.button */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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
  Translator = _window.Translator,
  ibexa = _window.ibexa,
  Routing = _window.Routing;
var getLocationData = function getLocationData(loadedLocationsMap, markedLocationId) {
  return loadedLocationsMap.find(function (loadedLocation) {
    return loadedLocation.parentLocationId === markedLocationId;
  }) || loadedLocationsMap.length && loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
    return subitem.location.id === markedLocationId;
  });
};
var ContentMetaPreview = function ContentMetaPreview() {
  var refContentMetaPreview = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    markedLocationId = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    loadedLocationsMap = _useContext4[0],
    dispatchLoadedLocationsAction = _useContext4[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.ContentTypesMapContext);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.RestInfoContext);
  var allowRedirects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.AllowRedirectsContext);
  var formatShortDateTime = ibexa.helpers.timezone.formatShortDateTime;
  var locationData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return getLocationData(loadedLocationsMap, markedLocationId);
  }, [markedLocationId, loadedLocationsMap]);
  var lastModifiedLabel = Translator.trans( /*@Desc("Last modified")*/'meta_preview.last_modified', {}, 'universal_discovery_widget');
  var creationDateLabel = Translator.trans( /*@Desc("Created")*/'meta_preview.creation_date', {}, 'universal_discovery_widget');
  var translationsLabel = Translator.trans( /*@Desc("Translations")*/'meta_preview.translations', {}, 'universal_discovery_widget');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ibexa.helpers.tooltips.parse(refContentMetaPreview.current);
  });
  if (!markedLocationId || markedLocationId === 1 || !locationData) {
    return null;
  }
  var bookmarked = locationData.bookmarked,
    location = locationData.location,
    version = locationData.version,
    permissions = locationData.permissions;
  var bookmarkIconName = bookmarked ? 'bookmark-active' : 'bookmark';
  var isLocationDataLoaded = !!(location && version);
  var toggleBookmarked = function toggleBookmarked() {
    var toggleBookmark = bookmarked ? _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__.removeBookmark : _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__.addBookmark;
    toggleBookmark(_objectSpread(_objectSpread({}, restInfo), {}, {
      locationId: location.id
    }), function () {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: _objectSpread(_objectSpread({}, locationData), {}, {
          bookmarked: !bookmarked
        })
      });
    });
  };
  var previewContent = function previewContent() {
    location.href = Routing.generate('ibexa.content.view', {
      contentId: location.ContentInfo.Content._id,
      locationId: location.id
    }, true);
  };
  var renderActions = function renderActions() {
    var previewLabel = Translator.trans( /*@Desc("Preview")*/'meta_preview.preview', {}, 'universal_discovery_widget');
    var editLabel = Translator.trans( /*@Desc("Edit")*/'meta_preview.edit', {}, 'universal_discovery_widget');
    var bookmarksAddLabel = Translator.trans( /*@Desc("Add to bookmarks")*/'meta_preview.bookmarks_add', {}, 'universal_discovery_widget');
    var bookmarksRemoveLabel = Translator.trans( /*@Desc("Remove from bookmarks")*/'meta_preview.bookrmarks_remove', {}, 'universal_discovery_widget');
    var previewButton = allowRedirects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__action-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-content-meta-preview__preview-button btn ibexa-btn ibexa-btn--ghost",
      type: "button",
      onClick: previewContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "view",
      extraClasses: "ibexa-icon--small"
    }), previewLabel)) : null;
    var hasAccess = permissions && permissions.edit.hasAccess;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__actions"
    }, previewButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__action-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      location: location,
      version: version,
      isDisabled: !hasAccess,
      label: editLabel
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__action-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-content-meta-preview__toggle-bookmark-button btn ibexa-btn ibexa-btn--ghost",
      type: "button",
      onClick: toggleBookmarked
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: bookmarkIconName,
      extraClasses: "ibexa-icon--small"
    }), bookmarked ? bookmarksRemoveLabel : bookmarksAddLabel)));
  };
  var renderMetaPreviewLoadingSpinner = function renderMetaPreviewLoadingSpinner() {
    var spinnerClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'c-content-meta-preview__loading-spinner': true,
      'c-content-meta-preview__loading-spinner--hidden': isLocationDataLoaded
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: spinnerClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "spinner",
      extraClasses: "ibexa-icon--medium ibexa-spin"
    }));
  };
  var renderMetaPreview = function renderMetaPreview() {
    if (!isLocationDataLoaded) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__preview"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      thumbnailData: version.Thumbnail,
      iconExtraClasses: "ibexa-icon--extra-large"
    })), renderActions(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-content-meta-preview__content-name"
    }, location.ContentInfo.Content.TranslatedName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__content-type-name"
    }, contentTypesMap[location.ContentInfo.Content.ContentType._href].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, lastModifiedLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, formatShortDateTime(new Date(location.ContentInfo.Content.lastModificationDate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, creationDateLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, formatShortDateTime(new Date(location.ContentInfo.Content.publishedDate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, translationsLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row c-content-meta-preview__translations-wrapper"
    }, version.VersionInfo.languageCodes.split(',').map(function (languageCode) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: languageCode,
        className: "c-content-meta-preview__translation"
      }, window.ibexa.adminUiConfig.languages.mappings[languageCode].name);
    }))))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-meta-preview",
    ref: refContentMetaPreview
  }, renderMetaPreviewLoadingSpinner(), renderMetaPreview());
};
ibexa.addConfig('adminUiConfig.universalDiscoveryWidget.contentMetaPreview', ContentMetaPreview);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentMetaPreview);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoadedLocationsReducer: () => (/* binding */ useLoadedLocationsReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var initialState = [{
  parentLocationId: 1,
  subitems: []
}];
var cutLocationsAfter = function cutLocationsAfter(state, action) {
  var itemIndex = state.findIndex(function (data) {
    return data.parentLocationId === action.locationId;
  });
  if (itemIndex === -1) {
    return state;
  }
  return state.slice(0, itemIndex + 1);
};
var updateLocationsMap = function updateLocationsMap(state, action) {
  var parentLocationIndex = state.findIndex(function (location) {
    return location.parentLocationId === action.data.parentLocationId;
  });
  var updatedState = _toConsumableArray(state);
  if (parentLocationIndex !== -1) {
    updatedState[parentLocationIndex] = action.data;
    return updatedState;
  }
  var childrenIndex = state.findIndex(function (data) {
    return data.subitems.find(function (item) {
      return item.location.id === action.data.parentLocationId;
    });
  });
  if (childrenIndex !== -1) {
    updatedState = updatedState.slice(0, childrenIndex + 1);
  }
  updatedState.push(action.data);
  return updatedState;
};
var setLocations = function setLocations(state, action) {
  return action.data;
};
var clearLoactions = function clearLoactions() {
  return [];
};
var loadedLocationsReducer = function loadedLocationsReducer(state, action) {
  switch (action.type) {
    case 'CUT_LOCATIONS':
      return cutLocationsAfter(state, action);
    case 'UPDATE_LOCATIONS':
      return updateLocationsMap(state, action);
    case 'SET_LOCATIONS':
      return setLocations(state, action);
    case 'CLEAR_LOCATIONS':
      return clearLoactions();
    default:
      throw new Error();
  }
};
var useLoadedLocationsReducer = function useLoadedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(loadedLocationsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    loadedLocationsMap = _useReducer2[0],
    dispatchLoadedLocationsAction = _useReducer2[1];
  return [loadedLocationsMap, dispatchLoadedLocationsAction];
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelectedLocationsReducer: () => (/* binding */ useSelectedLocationsReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var initialState = [];
var selectedLocationsReducer = function selectedLocationsReducer(state, action) {
  switch (action.type) {
    case 'ADD_SELECTED_LOCATION':
      return [].concat(_toConsumableArray(state), [{
        location: action.location,
        permissions: action.permissions
      }]);
    case 'REMOVE_SELECTED_LOCATION':
      return state.filter(function (selectedItem) {
        return selectedItem.location.id !== action.id;
      });
    case 'CLEAR_SELECTED_LOCATIONS':
      return [];
    case 'REPLACE_SELECTED_LOCATIONS':
      return action.locations;
    default:
      throw new Error();
  }
};
var useSelectedLocationsReducer = function useSelectedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(selectedLocationsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    selectedLocations = _useReducer2[0],
    dispatchSelectedLocationsAction = _useReducer2[1];
  return [selectedLocations, dispatchSelectedLocationsAction];
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUERY_LIMIT: () => (/* binding */ QUERY_LIMIT),
/* harmony export */   addBookmark: () => (/* binding */ addBookmark),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   findContentInfo: () => (/* binding */ findContentInfo),
/* harmony export */   findLocationsById: () => (/* binding */ findLocationsById),
/* harmony export */   findLocationsByParentLocationId: () => (/* binding */ findLocationsByParentLocationId),
/* harmony export */   findLocationsBySearchQuery: () => (/* binding */ findLocationsBySearchQuery),
/* harmony export */   loadAccordionData: () => (/* binding */ loadAccordionData),
/* harmony export */   loadBookmarks: () => (/* binding */ loadBookmarks),
/* harmony export */   loadContentInfo: () => (/* binding */ loadContentInfo),
/* harmony export */   loadContentTypes: () => (/* binding */ loadContentTypes),
/* harmony export */   loadLocationsWithPermissions: () => (/* binding */ loadLocationsWithPermissions),
/* harmony export */   removeBookmark: () => (/* binding */ removeBookmark)
/* harmony export */ });
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/services/notification.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");
/* harmony import */ var _common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var HEADERS_CREATE_VIEW = {
  Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
  'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1'
};
var ENDPOINT_CREATE_VIEW = '/api/ibexa/v2/views';
var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
var QUERY_LIMIT = 50;
var showErrorNotificationAbortWrapper = function showErrorNotificationAbortWrapper(error) {
  if ((error === null || error === void 0 ? void 0 : error.name) === 'AbortError') {
    return;
  }
  return (0,_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.showErrorNotification)(error);
};
var mapSubitems = function mapSubitems(subitems) {
  return subitems.locations.map(function (location) {
    var mappedSubitems = {
      location: location.Location
    };
    if (subitems.versions) {
      var version = subitems.versions.find(function (_ref) {
        var Version = _ref.Version;
        return Version.VersionInfo.Content._href === location.Location.Content._href;
      });
      mappedSubitems.version = version.Version;
    }
    return mappedSubitems;
  });
};
var findLocationsByParentLocationId = function findLocationsByParentLocationId(_ref2, callback) {
  var token = _ref2.token,
    parentLocationId = _ref2.parentLocationId,
    _ref2$limit = _ref2.limit,
    limit = _ref2$limit === void 0 ? QUERY_LIMIT : _ref2$limit,
    _ref2$offset = _ref2.offset,
    offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
    _ref2$sortClause = _ref2.sortClause,
    sortClause = _ref2$sortClause === void 0 ? 'DatePublished' : _ref2$sortClause,
    _ref2$sortOrder = _ref2.sortOrder,
    sortOrder = _ref2$sortOrder === void 0 ? 'ascending' : _ref2$sortOrder,
    _ref2$gridView = _ref2.gridView,
    gridView = _ref2$gridView === void 0 ? false : _ref2$gridView;
  var routeName = gridView ? 'ibexa.udw.location.gridview.data' : 'ibexa.udw.location.data';
  var url = window.Routing.generate(routeName, {
    locationId: parentLocationId
  });
  var request = new Request("".concat(url, "?limit=").concat(limit, "&offset=").concat(offset, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder), {
    method: 'GET',
    headers: {
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var bookmarked = response.bookmarked,
      location = response.location,
      permissions = response.permissions,
      subitems = response.subitems,
      version = response.version;
    var subitemsData = mapSubitems(subitems);
    var locationData = {
      location: location ? location.Location : null,
      version: version ? version.Version : null,
      totalCount: subitems.totalCount,
      subitems: subitemsData,
      bookmarked: bookmarked,
      permissions: permissions,
      parentLocationId: parentLocationId
    };
    callback(locationData);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadAccordionData = function loadAccordionData(_ref3, callback) {
  var token = _ref3.token,
    parentLocationId = _ref3.parentLocationId,
    _ref3$limit = _ref3.limit,
    limit = _ref3$limit === void 0 ? QUERY_LIMIT : _ref3$limit,
    _ref3$sortClause = _ref3.sortClause,
    sortClause = _ref3$sortClause === void 0 ? 'DatePublished' : _ref3$sortClause,
    _ref3$sortOrder = _ref3.sortOrder,
    sortOrder = _ref3$sortOrder === void 0 ? 'ascending' : _ref3$sortOrder,
    _ref3$gridView = _ref3.gridView,
    gridView = _ref3$gridView === void 0 ? false : _ref3$gridView,
    _ref3$rootLocationId = _ref3.rootLocationId,
    rootLocationId = _ref3$rootLocationId === void 0 ? 1 : _ref3$rootLocationId;
  var routeName = gridView ? 'ibexa.udw.accordion.gridview.data' : 'ibexa.udw.accordion.data';
  var url = window.Routing.generate(routeName, {
    locationId: parentLocationId
  });
  var request = new Request("".concat(url, "?limit=").concat(limit, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder, "&rootLocationId=").concat(rootLocationId), {
    method: 'GET',
    headers: {
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var mappedItems = response.breadcrumb.map(function (item) {
      var location = item.Location;
      var itemData = response.columns[location.id];
      var mappedItem = {
        location: location,
        totalCount: itemData ? itemData.subitems.totalCount : undefined,
        subitems: itemData ? mapSubitems(itemData.subitems) : [],
        parentLocationId: location.id,
        collapsed: !response.columns[location.id]
      };
      return mappedItem;
    });
    var rootLocationData = response.columns[1];
    var lastLocationData = response.columns[parentLocationId];
    if (rootLocationData) {
      mappedItems.unshift({
        totalCount: rootLocationData ? rootLocationData.subitems.totalCount : undefined,
        subitems: rootLocationData ? mapSubitems(rootLocationData.subitems) : [],
        parentLocationId: 1,
        collapsed: false
      });
    }
    mappedItems.push({
      location: lastLocationData.location.Location,
      version: lastLocationData.version.Version,
      totalCount: lastLocationData ? lastLocationData.subitems.totalCount : undefined,
      subitems: lastLocationData ? mapSubitems(lastLocationData.subitems) : [],
      bookmarked: lastLocationData.bookmarked,
      permissions: lastLocationData.permissions,
      parentLocationId: parentLocationId
    });
    callback(mappedItems);
  })["catch"](showErrorNotificationAbortWrapper);
};
var findLocationsBySearchQuery = function findLocationsBySearchQuery(_ref4, callback) {
  var token = _ref4.token,
    siteaccess = _ref4.siteaccess,
    query = _ref4.query,
    _ref4$limit = _ref4.limit,
    limit = _ref4$limit === void 0 ? QUERY_LIMIT : _ref4$limit,
    _ref4$offset = _ref4.offset,
    offset = _ref4$offset === void 0 ? 0 : _ref4$offset,
    _ref4$languageCode = _ref4.languageCode,
    languageCode = _ref4$languageCode === void 0 ? null : _ref4$languageCode;
  var useAlwaysAvailable = true;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-locations-by-search-query-".concat(query.FullTextCriterion),
      "public": false,
      languageCode: languageCode,
      useAlwaysAvailable: useAlwaysAvailable,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Query: query,
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_CREATE_VIEW), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var _response$View$Result = response.View.Result,
      count = _response$View$Result.count,
      searchHits = _response$View$Result.searchHits;
    var items = searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback({
      items: items,
      count: count
    });
  })["catch"](showErrorNotificationAbortWrapper);
};
var findLocationsById = function findLocationsById(_ref5, callback) {
  var token = _ref5.token,
    siteaccess = _ref5.siteaccess,
    id = _ref5.id,
    _ref5$limit = _ref5.limit,
    limit = _ref5$limit === void 0 ? QUERY_LIMIT : _ref5$limit,
    _ref5$offset = _ref5.offset,
    offset = _ref5$offset === void 0 ? 0 : _ref5$offset;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-locations-by-id-".concat(id),
      "public": false,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {
          SectionIdentifier: 'ascending'
        },
        Filter: {
          LocationIdCriterion: id
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_CREATE_VIEW), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var findContentInfo = function findContentInfo(_ref6, callback) {
  var token = _ref6.token,
    siteaccess = _ref6.siteaccess,
    contentId = _ref6.contentId,
    _ref6$limit = _ref6.limit,
    limit = _ref6$limit === void 0 ? QUERY_LIMIT : _ref6$limit,
    _ref6$offset = _ref6.offset,
    offset = _ref6$offset === void 0 ? 0 : _ref6$offset;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_CREATE_VIEW), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadBookmarks = function loadBookmarks(_ref7, callback) {
  var token = _ref7.token,
    siteaccess = _ref7.siteaccess,
    limit = _ref7.limit,
    offset = _ref7.offset;
  var request = new Request("".concat(ENDPOINT_BOOKMARK, "?limit=").concat(limit, "&offset=").concat(offset), {
    method: 'GET',
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token,
      Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json'
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var count = response.BookmarkList.count;
    var items = response.BookmarkList.items.map(function (item) {
      return item.Location;
    });
    callback({
      count: count,
      items: items
    });
  })["catch"](showErrorNotificationAbortWrapper);
};
var toggleBookmark = function toggleBookmark(_ref8, callback, method) {
  var siteaccess = _ref8.siteaccess,
    token = _ref8.token,
    locationId = _ref8.locationId;
  var request = new Request("".concat(ENDPOINT_BOOKMARK, "/").concat(locationId), {
    method: method,
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponseStatus).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var addBookmark = function addBookmark(options, callback) {
  toggleBookmark(options, callback, 'POST');
};
var removeBookmark = function removeBookmark(options, callback) {
  toggleBookmark(options, callback, 'DELETE');
};
var loadContentTypes = function loadContentTypes(_ref9, callback) {
  var token = _ref9.token,
    siteaccess = _ref9.siteaccess;
  var request = new Request('/api/ibexa/v2/content/types', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var createDraft = function createDraft(_ref10, callback) {
  var token = _ref10.token,
    siteaccess = _ref10.siteaccess,
    contentId = _ref10.contentId;
  var request = new Request("/api/ibexa/v2/content/objects/".concat(contentId, "/currentversion"), {
    method: 'COPY',
    headers: {
      Accept: 'application/vnd.ibexa.api.VersionUpdate+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var loadContentInfo = function loadContentInfo(_ref11, callback) {
  var token = _ref11.token,
    siteaccess = _ref11.siteaccess,
    contentId = _ref11.contentId,
    _ref11$limit = _ref11.limit,
    limit = _ref11$limit === void 0 ? QUERY_LIMIT : _ref11$limit,
    _ref11$offset = _ref11.offset,
    offset = _ref11$offset === void 0 ? 0 : _ref11$offset,
    signal = _ref11.signal;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_CREATE_VIEW), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request, {
    signal: signal
  }).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadLocationsWithPermissions = function loadLocationsWithPermissions(_ref12, callback) {
  var locationIds = _ref12.locationIds,
    signal = _ref12.signal;
  var url = window.Routing.generate('ibexa.udw.locations.data');
  var request = new Request("".concat(url, "?locationIds=").concat(locationIds), {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request, {
    signal: signal
  }).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveTabContext: () => (/* binding */ ActiveTabContext),
/* harmony export */   AllowConfirmationContext: () => (/* binding */ AllowConfirmationContext),
/* harmony export */   AllowRedirectsContext: () => (/* binding */ AllowRedirectsContext),
/* harmony export */   AllowedContentTypesContext: () => (/* binding */ AllowedContentTypesContext),
/* harmony export */   BlockFetchLocationHookContext: () => (/* binding */ BlockFetchLocationHookContext),
/* harmony export */   CancelContext: () => (/* binding */ CancelContext),
/* harmony export */   ConfirmContext: () => (/* binding */ ConfirmContext),
/* harmony export */   ContainersOnlyContext: () => (/* binding */ ContainersOnlyContext),
/* harmony export */   ContentOnTheFlyConfigContext: () => (/* binding */ ContentOnTheFlyConfigContext),
/* harmony export */   ContentOnTheFlyDataContext: () => (/* binding */ ContentOnTheFlyDataContext),
/* harmony export */   ContentTypesInfoMapContext: () => (/* binding */ ContentTypesInfoMapContext),
/* harmony export */   ContentTypesMapContext: () => (/* binding */ ContentTypesMapContext),
/* harmony export */   CreateContentWidgetContext: () => (/* binding */ CreateContentWidgetContext),
/* harmony export */   CurrentViewContext: () => (/* binding */ CurrentViewContext),
/* harmony export */   DropdownPortalRefContext: () => (/* binding */ DropdownPortalRefContext),
/* harmony export */   EditOnTheFlyDataContext: () => (/* binding */ EditOnTheFlyDataContext),
/* harmony export */   LoadedLocationsMapContext: () => (/* binding */ LoadedLocationsMapContext),
/* harmony export */   MarkedLocationIdContext: () => (/* binding */ MarkedLocationIdContext),
/* harmony export */   MultipleConfigContext: () => (/* binding */ MultipleConfigContext),
/* harmony export */   RestInfoContext: () => (/* binding */ RestInfoContext),
/* harmony export */   RootLocationIdContext: () => (/* binding */ RootLocationIdContext),
/* harmony export */   SORTING_OPTIONS: () => (/* binding */ SORTING_OPTIONS),
/* harmony export */   SearchTextContext: () => (/* binding */ SearchTextContext),
/* harmony export */   SelectedLocationsContext: () => (/* binding */ SelectedLocationsContext),
/* harmony export */   SortOrderContext: () => (/* binding */ SortOrderContext),
/* harmony export */   SortingContext: () => (/* binding */ SortingContext),
/* harmony export */   TabsConfigContext: () => (/* binding */ TabsConfigContext),
/* harmony export */   TabsContext: () => (/* binding */ TabsContext),
/* harmony export */   TitleContext: () => (/* binding */ TitleContext),
/* harmony export */   UDWContext: () => (/* binding */ UDWContext),
/* harmony export */   VIEWS: () => (/* binding */ VIEWS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useLoadedLocationsReducer */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js");
/* harmony import */ var _hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useSelectedLocationsReducer */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
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
  Translator = _window.Translator,
  ibexa = _window.ibexa,
  document = _window.document;
var CLASS_SCROLL_DISABLED = 'ibexa-scroll-disabled';
var SORTING_OPTIONS = [{
  value: 'date:asc',
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-simple-dropdown__option-label"
  }, Translator.trans( /*@Desc("Date")*/'sorting.date.label', {}, 'universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "back",
    extraClasses: "c-simple-dropdown__arrow-down ibexa-icon--tiny-small"
  })),
  selectedLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-simple-dropdown__option-label"
  }, Translator.trans( /*@Desc("Sort by date")*/'sorting.date.selected_label', {}, 'universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "back",
    extraClasses: "c-simple-dropdown__arrow-down ibexa-icon--tiny-small"
  })),
  sortClause: 'DatePublished',
  sortOrder: 'ascending'
}, {
  value: 'date:desc',
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-simple-dropdown__option-label"
  }, Translator.trans( /*@Desc("Date")*/'sorting.date.label', {}, 'universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "back",
    extraClasses: "c-simple-dropdown__arrow-up ibexa-icon--tiny-small"
  })),
  selectedLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-simple-dropdown__option-label"
  }, Translator.trans( /*@Desc("Sort by date")*/'sorting.date.selected_label', {}, 'universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "back",
    extraClasses: "c-simple-dropdown__arrow-up ibexa-icon--tiny-small"
  })),
  sortClause: 'DatePublished',
  sortOrder: 'descending'
}, {
  value: 'name:asc',
  label: Translator.trans( /*@Desc("Name A-Z")*/'sorting.name.asc.label', {}, 'universal_discovery_widget'),
  selectedLabel: Translator.trans( /*@Desc("Sort by name A-Z")*/'sorting.name.asc.selected_label', {}, 'universal_discovery_widget'),
  sortClause: 'ContentName',
  sortOrder: 'ascending'
}, {
  value: 'name:desc',
  label: Translator.trans( /*@Desc("Name Z-A")*/'sorting.name.desc.label', {}, 'universal_discovery_widget'),
  selectedLabel: Translator.trans( /*@Desc("Sort by name Z-A")*/'sorting.name.desc.selected_label', {}, 'universal_discovery_widget'),
  sortClause: 'ContentName',
  sortOrder: 'descending'
}];
var VIEWS = [{
  value: 'finder',
  iconName: 'panels',
  label: Translator.trans( /*@Desc("Panels view")*/'sorting.panels.view', {}, 'universal_discovery_widget')
}, {
  value: 'grid',
  iconName: 'view-grid',
  label: Translator.trans( /*@Desc("Grid view")*/'sorting.grid.view', {}, 'universal_discovery_widget')
}, {
  value: 'tree',
  iconName: 'content-tree',
  label: Translator.trans( /*@Desc("Tree view")*/'sorting.tree.view', {}, 'universal_discovery_widget')
}];
var restInfo = {
  token: document.querySelector('meta[name="CSRF-Token"]').content,
  siteaccess: document.querySelector('meta[name="SiteAccess"]').content
};
var contentTypesMapGlobal = Object.values(ibexa.adminUiConfig.contentTypes).reduce(function (contentTypesMap, contentTypesGroup) {
  contentTypesGroup.forEach(function (contentType) {
    contentTypesMap[contentType.href] = contentType;
  });
  return contentTypesMap;
}, {});
var UDWContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var RestInfoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowRedirectsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowConfirmationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesInfoMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MultipleConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContainersOnlyContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowedContentTypesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ActiveTabContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TabsConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TabsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TitleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CancelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ConfirmContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SortingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SortOrderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CurrentViewContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MarkedLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var LoadedLocationsMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var RootLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedLocationsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CreateContentWidgetContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentOnTheFlyDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentOnTheFlyConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var EditOnTheFlyDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var BlockFetchLocationHookContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SearchTextContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DropdownPortalRefContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var UniversalDiscoveryModule = function UniversalDiscoveryModule(props) {
  var tabs = ibexa.adminUiConfig.universalDiscoveryWidget.tabs;
  var defaultMarkedLocationId = props.startingLocationId || props.rootLocationId;
  var abortControllerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var dropdownPortalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeTab),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeSortClause),
    _useState4 = _slicedToArray(_useState3, 2),
    sorting = _useState4[0],
    setSorting = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeSortOrder),
    _useState6 = _slicedToArray(_useState5, 2),
    sortOrder = _useState6[0],
    setSortOrder = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeView),
    _useState8 = _slicedToArray(_useState7, 2),
    currentView = _useState8[0],
    setCurrentView = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultMarkedLocationId !== 1 ? defaultMarkedLocationId : null),
    _useState10 = _slicedToArray(_useState9, 2),
    markedLocationId = _useState10[0],
    setMarkedLocationId = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    createContentVisible = _useState12[0],
    setCreateContentVisible = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    contentOnTheFlyData = _useState14[0],
    setContentOnTheFlyData = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    editOnTheFlyData = _useState16[0],
    setEditOnTheFlyData = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    contentTypesInfoMap = _useState18[0],
    setContentTypesInfoMap = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.startingLocationId && props.startingLocationId !== 1 && props.startingLocationId !== props.rootLocationId),
    _useState20 = _slicedToArray(_useState19, 2),
    isFetchLocationHookBlocked = _useState20[0],
    setIsFetchLocationHookBlocked = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    searchText = _useState22[0],
    setSearchText = _useState22[1];
  var _useLoadedLocationsRe = (0,_hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__.useLoadedLocationsReducer)([{
      parentLocationId: props.rootLocationId,
      subitems: []
    }]),
    _useLoadedLocationsRe2 = _slicedToArray(_useLoadedLocationsRe, 2),
    loadedLocationsMap = _useLoadedLocationsRe2[0],
    dispatchLoadedLocationsAction = _useLoadedLocationsRe2[1];
  var _useSelectedLocations = (0,_hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_6__.useSelectedLocationsReducer)(),
    _useSelectedLocations2 = _slicedToArray(_useSelectedLocations, 2),
    selectedLocations = _useSelectedLocations2[0],
    dispatchSelectedLocationsAction = _useSelectedLocations2[1];
  var activeTabConfig = tabs.find(function (tab) {
    return tab.id === activeTab;
  });
  var Tab = activeTabConfig.component;
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
    'm-ud': true,
    'm-ud--locations-selected': !!selectedLocations.length && props.allowConfirmation
  });
  var loadPermissions = function loadPermissions() {
    var locationIds = selectedLocations.filter(function (item) {
      return !item.permissions;
    }).map(function (item) {
      return item.location.id;
    }).join(',');
    if (!locationIds) {
      return Promise.resolve([]);
    }
    return new Promise(function (resolve) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadLocationsWithPermissions)({
        locationIds: locationIds,
        signal: abortControllerRef.current.signal
      }, function (response) {
        return resolve(response);
      });
    });
  };
  var loadVersions = function loadVersions() {
    var signal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var locationsWithoutVersion = selectedLocations.filter(function (selectedItem) {
      return !selectedItem.location.ContentInfo.Content.CurrentVersion.Version;
    });
    if (!locationsWithoutVersion.length) {
      return Promise.resolve([]);
    }
    var contentId = locationsWithoutVersion.map(function (item) {
      return item.location.ContentInfo.Content._id;
    }).join(',');
    return new Promise(function (resolve) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadContentInfo)(_objectSpread(_objectSpread({}, restInfo), {}, {
        contentId: contentId,
        signal: signal
      }), function (response) {
        return resolve(response);
      });
    });
  };
  var onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var selectedItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : selectedLocations;
    loadVersions().then(function (locationsWithVersions) {
      var clonedSelectedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedItems);
      if (Array.isArray(locationsWithVersions)) {
        locationsWithVersions.forEach(function (content) {
          var clonedLocation = clonedSelectedLocation.find(function (clonedItem) {
            return clonedItem.location.ContentInfo.Content._id === content._id;
          });
          if (clonedLocation) {
            clonedLocation.location.ContentInfo.Content.CurrentVersion.Version = content.CurrentVersion.Version;
          }
        });
      }
      var updatedLocations = clonedSelectedLocation.map(function (selectedItem) {
        var clonedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedItem.location);
        var contentType = clonedLocation.ContentInfo.Content.ContentType;
        clonedLocation.ContentInfo.Content.ContentTypeInfo = contentTypesInfoMap[contentType._href];
        return clonedLocation;
      });
      props.onConfirm(updatedLocations);
    });
  }, [selectedLocations, contentTypesInfoMap]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _window$ibexa$adminUi;
    var addContentTypesInfo = function addContentTypesInfo(contentTypes) {
      setContentTypesInfoMap(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), contentTypes);
      });
    };
    var handleLoadContentTypes = function handleLoadContentTypes(response) {
      var contentTypesMap = response.ContentTypeInfoList.ContentType.reduce(function (contentTypesList, item) {
        contentTypesList[item._href] = item;
        return contentTypesList;
      }, {});
      addContentTypesInfo(contentTypesMap);
    };
    (_window$ibexa$adminUi = window.ibexa.adminUiConfig.universalDiscoveryWidget.contentTypesLoaders) === null || _window$ibexa$adminUi === void 0 || _window$ibexa$adminUi.forEach(function (contentTypesLoader) {
      return contentTypesLoader(addContentTypesInfo);
    });
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadContentTypes)(restInfo, handleLoadContentTypes);
    document.body.dispatchEvent(new CustomEvent('ibexa-udw-opened'));
    ibexa.helpers.tooltips.parse(document.querySelector('.c-udw-tab'));
    return function () {
      document.body.dispatchEvent(new CustomEvent('ibexa-udw-closed'));
      ibexa.helpers.tooltips.hideAll();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!props.selectedLocations.length) {
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
      id: props.selectedLocations.join(','),
      limit: props.selectedLocations.length
    }), function (locations) {
      var mappedLocation = props.selectedLocations.map(function (locationId) {
        var location = locations.find(function (_ref) {
          var id = _ref.id;
          return id === parseInt(locationId, 10);
        });
        return {
          location: location
        };
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: mappedLocation
      });
    });
  }, [props.selectedLocations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _abortControllerRef$c;
    (_abortControllerRef$c = abortControllerRef.current) === null || _abortControllerRef$c === void 0 || _abortControllerRef$c.abort();
    abortControllerRef.current = new AbortController();
    Promise.all([loadPermissions(), loadVersions(abortControllerRef.current.signal)]).then(function (response) {
      var _response = _slicedToArray(response, 2),
        locationsWithPermissions = _response[0],
        locationsWithVersions = _response[1];
      if (!locationsWithPermissions.length && !locationsWithVersions.length) {
        return;
      }
      var clonedSelectedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedLocations);
      locationsWithPermissions.forEach(function (item) {
        var locationWithoutPermissions = clonedSelectedLocation.find(function (selectedItem) {
          return selectedItem.location.id === item.location.Location.id;
        });
        if (locationWithoutPermissions) {
          locationWithoutPermissions.permissions = item.permissions;
        }
      });
      locationsWithVersions.forEach(function (content) {
        var clonedLocation = clonedSelectedLocation.find(function (clonedItem) {
          return clonedItem.location.ContentInfo.Content._id === content._id;
        });
        if (clonedLocation) {
          clonedLocation.location.ContentInfo.Content.CurrentVersion.Version = content.CurrentVersion.Version;
        }
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: clonedSelectedLocation
      });
    });
    return function () {
      var _abortControllerRef$c2;
      (_abortControllerRef$c2 = abortControllerRef.current) === null || _abortControllerRef$c2 === void 0 || _abortControllerRef$c2.abort();
    };
  }, [selectedLocations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.body.classList.add(CLASS_SCROLL_DISABLED);
    return function () {
      document.body.classList.remove(CLASS_SCROLL_DISABLED);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentView === 'grid') {
      loadedLocationsMap[loadedLocationsMap.length - 1].subitems = [];
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: loadedLocationsMap
      });
    } else if ((currentView === 'finder' || currentView === 'tree') && !!markedLocationId && markedLocationId !== loadedLocationsMap[loadedLocationsMap.length - 1].parentLocationId && loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
      return subitem.location.id === markedLocationId;
    })) {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: {
          parentLocationId: markedLocationId,
          subitems: []
        }
      });
    }
  }, [currentView]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!props.startingLocationId || props.startingLocationId === 1 || props.startingLocationId === props.rootLocationId) {
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadAccordionData)(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: props.startingLocationId,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: props.rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
      setMarkedLocationId(props.startingLocationId);
      setIsFetchLocationHookBlocked(false);
    });
  }, [props.startingLocationId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var locationsMap = loadedLocationsMap.map(function (loadedLocation) {
      loadedLocation.subitems = [];
      return loadedLocation;
    });
    dispatchLoadedLocationsAction({
      type: 'SET_LOCATIONS',
      data: locationsMap
    });
  }, [sorting, sortOrder]);

  /* eslint-disable max-len */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UDWContext.Provider, {
    value: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestInfoContext.Provider, {
    value: restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockFetchLocationHookContext.Provider, {
    value: [isFetchLocationHookBlocked, setIsFetchLocationHookBlocked]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowRedirectsContext.Provider, {
    value: props.allowRedirects
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowConfirmationContext.Provider, {
    value: props.allowConfirmation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesInfoMapContext.Provider, {
    value: contentTypesInfoMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesMapContext.Provider, {
    value: contentTypesMapGlobal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MultipleConfigContext.Provider, {
    value: [props.multiple, props.multipleItemsLimit]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContainersOnlyContext.Provider, {
    value: props.containersOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowedContentTypesContext.Provider, {
    value: props.allowedContentTypes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveTabContext.Provider, {
    value: [activeTab, setActiveTab]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsContext.Provider, {
    value: tabs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsConfigContext.Provider, {
    value: props.tabsConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleContext.Provider, {
    value: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CancelContext.Provider, {
    value: props.onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConfirmContext.Provider, {
    value: onConfirm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortingContext.Provider, {
    value: [sorting, setSorting]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortOrderContext.Provider, {
    value: [sortOrder, setSortOrder]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CurrentViewContext.Provider, {
    value: [currentView, setCurrentView]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MarkedLocationIdContext.Provider, {
    value: [markedLocationId, setMarkedLocationId]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadedLocationsMapContext.Provider, {
    value: [loadedLocationsMap, dispatchLoadedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RootLocationIdContext.Provider, {
    value: props.rootLocationId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedLocationsContext.Provider, {
    value: [selectedLocations, dispatchSelectedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CreateContentWidgetContext.Provider, {
    value: [createContentVisible, setCreateContentVisible]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentOnTheFlyDataContext.Provider, {
    value: [contentOnTheFlyData, setContentOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentOnTheFlyConfigContext.Provider, {
    value: props.contentOnTheFly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditOnTheFlyDataContext.Provider, {
    value: [editOnTheFlyData, setEditOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchTextContext.Provider, {
    value: [searchText, setSearchText]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropdownPortalRefContext.Provider, {
    value: dropdownPortalRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tab, null)))))))))))))))))))))))))))))));
  /* eslint-enable max-len */
};

UniversalDiscoveryModule.propTypes = {
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  rootLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  startingLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multipleItemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  containersOnly: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  allowedContentTypes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  activeSortClause: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  activeSortOrder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  activeView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  contentOnTheFly: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    allowedLanguages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    allowedLocations: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    preselectedLocation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    preselectedContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
    autoConfirmAfterPublish: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
  }).isRequired,
  tabsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    priority: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
  })).isRequired,
  selectedLocations: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  allowRedirects: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  allowConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
UniversalDiscoveryModule.defaultProps = {
  activeTab: 'browse',
  rootLocationId: 1,
  startingLocationId: null,
  multiple: false,
  multipleItemsLimit: 1,
  containersOnly: false,
  activeSortClause: 'date',
  activeSortOrder: 'ascending',
  activeView: 'finder',
  selectedLocations: []
};
ibexa.addConfig('modules.UniversalDiscovery', UniversalDiscoveryModule);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniversalDiscoveryModule);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/udw/udw.load.product.types.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/udw/udw.load.product.types.js ***!
  \***************************************************************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (global, doc, ibexa) {
  var getJsonFromResponse = ibexa.helpers.request.getJsonFromResponse;
  var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
  var loadProductTypes = function loadProductTypes(callback) {
    var productTypes = ibexa.adminUiConfig.contentTypes.product;
    if (!(productTypes !== null && productTypes !== void 0 && productTypes.length)) {
      return;
    }
    var requestBodyOperations = productTypes.reduce(function (total, _ref) {
      var href = _ref.href;
      total[href] = {
        uri: href,
        method: 'GET',
        headers: {
          Accept: 'application/vnd.ibexa.api.ContentType+json'
        },
        mode: 'same-origin',
        credentials: 'same-origin'
      };
      return total;
    }, {});
    var handleProductTypes = function handleProductTypes(response) {
      var productTypesInfoMap = Object.entries(response.BulkOperationResponse.operations).reduce(function (total, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          href = _ref3[0],
          content = _ref3[1].content;
        total[href] = JSON.parse(content);
        return total;
      }, {});
      callback(productTypesInfoMap);
    };
    var request = new Request('/api/ibexa/v2/bulk', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
        'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json',
        'X-Siteaccess': doc.querySelector('meta[name="SiteAccess"]').content,
        'X-CSRF-Token': doc.querySelector('meta[name="CSRF-Token"]').content
      },
      body: JSON.stringify({
        bulkOperations: {
          operations: requestBodyOperations
        }
      }),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(getJsonFromResponse).then(handleProductTypes)["catch"](showErrorNotification);
  };
  ibexa.addConfig('adminUiConfig.universalDiscoveryWidget.contentTypesLoaders', [loadProductTypes], true);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection/tree.item.toggle.selection.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/udw/udw.load.product.types.js"));
/******/ }
]);