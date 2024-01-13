"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-udw-js"],{

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js"));
/******/ }
]);