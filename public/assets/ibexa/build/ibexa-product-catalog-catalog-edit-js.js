"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-catalog-edit-js"],{

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

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.edit.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.edit.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterConfig_default_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterConfig/default.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/default.filter.config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

var DOTS = '...';
var KEY_ENTER = 13;
(function (global, doc, ibexa, Translator, Routing, _ibexa$productCatalog, _ibexa$productCatalog2) {
  var configuredFiltersNode = doc.querySelector('.ibexa-pc-edit-catalog-filters__configured');
  var configuredFiltersListTogglerBtns = doc.querySelectorAll('.ibexa-pc-edit-catalog-filters__configured-header-toggler');
  var dropdownInstance = ibexa.helpers.objectInstances.getInstance(doc.querySelector('.ibexa-pc-edit-catalog-filters__configured-header-actions .ibexa-dropdown'));
  var sortedDefaultFiltersOptions = _toConsumableArray(dropdownInstance.sourceInput.querySelectorAll('option[default]')).sort(function (optionA, optionB) {
    return optionA.dataset.priority - optionB.dataset.priority;
  });
  var defaultFilters = sortedDefaultFiltersOptions.map(function (option) {
    return option.value;
  });
  var standardFilters = _toConsumableArray(dropdownInstance.sourceInput.querySelectorAll('option:not([default])')).map(function (option) {
    return option.value;
  });
  var filterNames = [].concat(_toConsumableArray(defaultFilters), _toConsumableArray(standardFilters));
  var configuredFiltersListNode = doc.querySelector('.ibexa-pc-edit-catalog-filters__configured-list');
  var previewProductsWrapper = doc.querySelector('.ibexa-pc-edit-catalog-products__preview-wrapper');
  var previewProductsList = previewProductsWrapper.querySelector('.ibexa-pc-edit-catalog-products__list');
  var previewPagination = previewProductsWrapper.querySelector('.ibexa-pc-edit-catalog-products__pagination');
  var searchWidget = doc.querySelector('.ibexa-pc-edit-catalog-products__search');
  var searchInput = searchWidget.querySelector('.ibexa-input--text');
  var searchClearBtn = searchWidget.querySelector('.ibexa-input-text-wrapper__action-btn--clear');
  var searchBtn = searchWidget.querySelector('.ibexa-input-text-wrapper__action-btn--search');
  var filtersConfig = [];
  var filtersConfigClassMap = (_ibexa$productCatalog = ibexa === null || ibexa === void 0 || (_ibexa$productCatalog2 = ibexa.productCatalog) === null || _ibexa$productCatalog2 === void 0 || (_ibexa$productCatalog2 = _ibexa$productCatalog2.catalogs) === null || _ibexa$productCatalog2 === void 0 ? void 0 : _ibexa$productCatalog2.filters) !== null && _ibexa$productCatalog !== void 0 ? _ibexa$productCatalog : {};
  var currentPage = 1;
  var savedSearchValue = '';
  var triggerSearch = function triggerSearch() {
    savedSearchValue = searchInput.value;
    currentPage = 1;
    refreshProductsList();
  };
  var goToPage = function goToPage(pageNumber) {
    currentPage = pageNumber;
    refreshProductsList();
  };
  var triggerFilterChange = function triggerFilterChange() {
    currentPage = 1;
    refreshProductsList();
  };
  var createPaginationWidget = function createPaginationWidget(currentCount) {
    var pagesCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parseInt(previewPagination.dataset.pagesCount, 10);
    var totalCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : previewPagination.dataset.totalCount;
    var navigation = previewPagination.querySelector('.ibexa-pagination__navigation');
    var additionalInfo = previewPagination.querySelector('.ibexa-pagination__info');
    navigation.innerHTML = '';
    additionalInfo.innerHTML = '';
    if (pagesCount === 1) {
      return;
    }
    var additionalInfoTemplate = additionalInfo.dataset.template.replace('{{ viewing }}', currentCount).replace('{{ total }}', totalCount);
    var listElementNavigationTemplate = navigation.dataset.template;
    var pages = ibexa.helpers.pagination.computePages({
      activePageIndex: currentPage,
      pagesCount: pagesCount,
      separator: DOTS
    });
    var fragment = doc.createDocumentFragment();

    // add prev and next buttons
    pages.unshift('');
    pages.push('');
    pages.forEach(function (page, key) {
      var container = doc.createElement('ul');
      container.insertAdjacentHTML('beforeend', listElementNavigationTemplate);
      var filledListElement = container.innerHTML.replaceAll('{{ page }}', page);
      container.innerHTML = '';
      container.insertAdjacentHTML('beforeend', filledListElement);
      var listItemNode = container.querySelector('li');
      if (page === DOTS) {
        listItemNode.classList.add('disabled');
      } else {
        var nextPage = page;
        if (key === 0) {
          nextPage = currentPage - 1;
        } else if (key === pages.length - 1) {
          nextPage = currentPage + 1;
        }
        listItemNode.addEventListener('click', function () {
          return goToPage(nextPage);
        });
      }
      if (page === currentPage) {
        listItemNode.classList.add('active');
      }
      fragment.append(listItemNode);
    });
    var pageItems = fragment.querySelectorAll('.page-item');
    var prevButtonClassList = pageItems.item(0).classList;
    var nextButtonClassList = pageItems.item(pageItems.length - 1).classList;
    prevButtonClassList.add('prev');
    prevButtonClassList.toggle('disabled', currentPage === 1);
    nextButtonClassList.add('next');
    nextButtonClassList.toggle('disabled', currentPage === pagesCount);
    additionalInfo.innerHTML = additionalInfoTemplate;
    navigation.append(fragment);
  };
  var toggleFilterList = function toggleFilterList(_ref) {
    var currentTarget = _ref.currentTarget;
    var showLabel = Translator.trans( /*@Desc("Show")*/'catalog.edit.filters.toggler.show', {}, 'product_catalog');
    var hideLabel = Translator.trans( /*@Desc("Hide")*/'catalog.edit.filters.toggler.hide', {}, 'product_catalog');
    currentTarget.classList.toggle('ibexa-pc-edit-catalog-filters__configured-header-toggler--list-rolled-up');
    configuredFiltersNode.classList.toggle('ibexa-pc-edit-catalog-filters__configured--list-rolled-up');
    var isListRolledUp = configuredFiltersNode.classList.contains('ibexa-pc-edit-catalog-filters__configured--list-rolled-up');
    currentTarget.innerHTML = isListRolledUp ? showLabel : hideLabel;
  };
  var changeFieldNameToRequestName = function changeFieldNameToRequestName(fieldName) {
    return fieldName.replace('catalog_create_criteria_', '').replace('catalog_update_criteria_', '');
  };
  var refreshProductsList = function refreshProductsList() {
    var requestBody = new FormData();
    requestBody.append('page', currentPage);
    searchInput.value = savedSearchValue;
    if (searchInput.value != '') {
      requestBody.append('products_preview[search][query]', searchInput.value);
    }
    Object.entries(filtersConfig).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        filterConfigKey = _ref3[0],
        filterConfig = _ref3[1];
      var requestFilterName = changeFieldNameToRequestName(filterConfigKey);
      var requestFilterValue = filterConfig.getRequestValue();
      if (Array.isArray(requestFilterValue)) {
        requestFilterValue.forEach(function (value) {
          requestBody.append("products_preview[filters][".concat(requestFilterName, "][]"), value);
        });
        return;
      }
      if (_typeof(requestFilterValue) === 'object') {
        Object.entries(requestFilterValue).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];
          requestBody.append("products_preview[filters][".concat(requestFilterName, "][").concat(key, "]"), value);
        });
        return;
      }
      if (requestFilterValue !== undefined) {
        requestBody.append("products_preview[filters][".concat(requestFilterName, "]"), requestFilterValue);
      }
    });
    var paginationContainer = doc.querySelector('.ibexa-pc-edit-catalog-products__pagination');
    var catalogPreviewUrl = Routing.generate('ibexa.product_catalog.catalog.products.preview.list');
    var tableBody = previewProductsList.querySelector('.ibexa-table__body');
    var tableHeadRow = previewProductsList.querySelector('.ibexa-table__head-row');
    var _previewProductsList$ = previewProductsList.dataset,
      rowTemplate = _previewProductsList$.rowTemplate,
      tableSpinnerRowTemplate = _previewProductsList$.tableSpinnerRowTemplate,
      emptyTableBodyRowTemplate = _previewProductsList$.emptyTableBodyRowTemplate;
    var catalogPreviewRequest = new Request(catalogPreviewUrl, {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      body: requestBody
    });
    tableBody.innerHTML = tableSpinnerRowTemplate;
    tableHeadRow.classList.add('ibexa-table__head-row--hidden');
    paginationContainer.classList.add('ibexa-pc-edit-catalog-products__pagination--hidden');
    fetch(catalogPreviewRequest).then(ibexa.helpers.request.getJsonFromResponse).then(function (response) {
      var fragment = doc.createDocumentFragment();
      response.products.forEach(function (product) {
        var container = doc.createElement('tbody');
        container.insertAdjacentHTML('beforeend', rowTemplate);
        var filledRow = container.innerHTML.replaceAll('{{ PRODUCT_NAME }}', product.name).replace('{{ PRODUCT_URL }}', product.view_url).replace('{{ PRODUCT_IMG }}', product.thumbnail).replace('{{ PRODUCT_CODE }}', product.code).replace('{{ PRODUCT_TYPE }}', product.type).replace('{{ PRODUCT_CREATED_DATE }}', product.created_at).replace('{{ PRODUCT_STATUS }}', !product.is_available ? 'ibexa-pc-availability-dot--not-available' : '');
        container.innerHTML = '';
        container.insertAdjacentHTML('beforeend', filledRow);
        var tableItemNode = container.querySelector('tr');
        fragment.append(tableItemNode);
      });
      tableBody.innerHTML = '';
      tableBody.append(fragment);
      paginationContainer.classList.remove('ibexa-pc-edit-catalog-products__pagination--hidden');
      createPaginationWidget(response.products.length, response.pages_count, response.count);
      if (response.products.length) {
        tableHeadRow.classList.remove('ibexa-table__head-row--hidden');
      } else {
        tableBody.insertAdjacentHTML('beforeend', emptyTableBodyRowTemplate);
      }
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var createFilterInstance = function createFilterInstance(configPanelNode) {
    var _filtersConfigClassMa;
    var _configPanelNode$data = configPanelNode.dataset,
      filterName = _configPanelNode$data.filterName,
      filterType = _configPanelNode$data.filterType;
    var isDefault = defaultFilters.includes(filterName);
    var productsListFilterNode = doc.querySelector(".ibexa-pc-edit-catalog-list-filter[data-filter-name=\"".concat(filterName, "\"]"));
    var relatedAvailablePopupItem = doc.querySelector(".ibexa-pc-edit-catalog-filters__configured-header .ibexa-dropdown__item[data-value=\"".concat(filterName, "\"]"));
    var FiltersTypeClass = (_filtersConfigClassMa = filtersConfigClassMap[filterType]) !== null && _filtersConfigClassMa !== void 0 ? _filtersConfigClassMa : _filterConfig_default_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"];
    filtersConfig[filterName] = new FiltersTypeClass({
      configPanelNode: configPanelNode,
      productsListFilterNode: productsListFilterNode,
      relatedAvailablePopupItem: relatedAvailablePopupItem,
      configuredFiltersListNode: configuredFiltersListNode,
      isDefault: isDefault
    });
    filtersConfig[filterName].init();
  };
  filterNames.forEach(function (filterName) {
    var configPanelNode = doc.querySelector("[data-filter-name=\"".concat(filterName, "\"]"));
    createFilterInstance(configPanelNode);
  });
  configuredFiltersListTogglerBtns.forEach(function (configuredFiltersListTogglerBtn) {
    configuredFiltersListTogglerBtn.addEventListener('click', toggleFilterList, false);
  });
  searchBtn.addEventListener('click', triggerSearch, false);
  searchClearBtn.addEventListener('click', triggerSearch, false);
  searchInput.addEventListener('keypress', function (event) {
    if (event.keyCode == KEY_ENTER) {
      event.preventDefault();
      triggerSearch();
      return false;
    }
  }, false);
  dropdownInstance.itemsListContainer.querySelectorAll('.ibexa-dropdown__item:not([disabled])').forEach(function (option) {
    return option.addEventListener('click', function () {
      var filterName = option.dataset.value;
      filtersConfig[filterName].addPreview(true);
    }, false);
  });
  createPaginationWidget(previewPagination.dataset.currentCount, parseInt(previewPagination.dataset.pagesCount, 10), previewPagination.dataset.totalCount);
  refreshProductsList();
  doc.body.addEventListener('ibexa-pc-filters:change', triggerFilterChange, false);
})(window, window.document, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/config.panel.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/config.panel.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _window = window,
  doc = _window.document,
  ibexa = _window.ibexa;
var ConfigPanel = /*#__PURE__*/function () {
  function ConfigPanel(config) {
    _classCallCheck(this, ConfigPanel);
    this.wrapper = config.wrapper;
    this.trigger = config.trigger;
    this.closeBtns = this.wrapper.querySelectorAll('.ibexa-btn--close-config-panel');
    this.closePanel = this.closePanel.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.backdrop = new ibexa.core.Backdrop();
  }
  _createClass(ConfigPanel, [{
    key: "openPanel",
    value: function openPanel() {
      this.wrapper.classList.remove('ibexa-pc-config-panel--hidden');
      this.backdrop.show();
      doc.body.classList.add('ibexa-scroll-disabled');
    }
  }, {
    key: "closePanel",
    value: function closePanel() {
      this.wrapper.classList.add('ibexa-pc-config-panel--hidden');
      this.backdrop.hide();
      doc.body.classList.remove('ibexa-scroll-disabled');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.closeBtns.forEach(function (closeBtn) {
        closeBtn.addEventListener('click', _this.closePanel, false);
      });
      this.trigger.addEventListener('click', this.openPanel, false);
    }
  }]);
  return ConfigPanel;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tags_popup_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.popup.menu */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/tags.popup.menu.js");
/* harmony import */ var _config_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.panel */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/config.panel.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var MAX_NUMBER_PRODUCTS_LIST_FILTER_TAGS = 5;
var doc = window.document;
var BaseFilterConfig = /*#__PURE__*/function () {
  function BaseFilterConfig(config) {
    var _config$isDefault, _this$productsListFil, _this$productsListFil2, _this$productsListFil3, _this$productsListFil4, _this$productsListFil5, _this$productsListFil6;
    _classCallCheck(this, BaseFilterConfig);
    this.storedItems = [];
    this.previewNode = null;
    this.configPanel = null;
    this.isDefault = (_config$isDefault = config.isDefault) !== null && _config$isDefault !== void 0 ? _config$isDefault : false;
    this.configPanelNode = config.configPanelNode;
    this.productsListFilterNode = config.productsListFilterNode;
    this.relatedAvailablePopupItem = config.relatedAvailablePopupItem;
    this.configuredFiltersListNode = config.configuredFiltersListNode;
    this.filterPreviewTemplate = this.configuredFiltersListNode.dataset.filterPreviewTemplate;
    this.tagTemplate = (_this$productsListFil = this.productsListFilterNode) === null || _this$productsListFil === void 0 ? void 0 : _this$productsListFil.dataset.tagTemplate;
    this.filterName = this.configPanelNode.dataset.filterName;
    this.filterType = this.configPanelNode.dataset.filterType;
    this.filterLabel = this.configPanelNode.dataset.filterLabel;
    this.filterTagsTogglerBtn = (_this$productsListFil2 = this.productsListFilterNode) === null || _this$productsListFil2 === void 0 ? void 0 : _this$productsListFil2.querySelector('.ibexa-pc-edit-catalog-list-filter__tags-toggler-btn');
    this.filterTagsPopupNode = (_this$productsListFil3 = this.productsListFilterNode) === null || _this$productsListFil3 === void 0 ? void 0 : _this$productsListFil3.querySelector('.ibexa-pc-edit-catalog-tags-popup-menu');
    this.productListFilterTagsContainer = (_this$productsListFil4 = this.productsListFilterNode) === null || _this$productsListFil4 === void 0 ? void 0 : _this$productsListFil4.querySelector('.ibexa-pc-edit-catalog-list-filter__tags');
    this.addedFilterTags = (_this$productsListFil5 = this.productsListFilterNode) === null || _this$productsListFil5 === void 0 ? void 0 : _this$productsListFil5.querySelectorAll('.ibexa-pc-edit-catalog-list-filter-tag');
    this.tagsPopupMenuItems = (_this$productsListFil6 = this.productsListFilterNode) === null || _this$productsListFil6 === void 0 ? void 0 : _this$productsListFil6.querySelectorAll('.ibexa-pc-edit-catalog-tags-popup-menu .ibexa-pc-edit-catalog-tags-popup-menu__item');
    this.removePopupTag = this.removePopupTag.bind(this);
    this.configPanelSaveBtns = this.configPanelNode.querySelectorAll('.ibexa-pc-config-panel__save-btn');
    this.configPanelCloseBtns = this.configPanelNode.querySelectorAll('.ibexa-btn--close-config-panel');
    this.removePreview = this.removePreview.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
    this.discardFilter = this.discardFilter.bind(this);
    this.storeItems = this.storeItems.bind(this);
    this.updateProductsListTags = this.updateProductsListTags.bind(this);
    this.updatePreviewValue = this.updatePreviewValue.bind(this);
    this.attachRemoveFilterTagEvents = this.attachRemoveFilterTagEvents.bind(this);
    this.removeFilterTag = this.removeFilterTag.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getRequestValue = this.getRequestValue.bind(this);
    this.fitTagsPopupItems = this.fitTagsPopupItems.bind(this);
    if (!this.productsListFilterNode) {
      console.warn("You have to provide block .ibexa-pc-edit-catalog-list-filter for ".concat(this.filterName, "."));
    }
    if (this.filterTagsPopupNode) {
      this.tagsPopup = new _tags_popup_menu__WEBPACK_IMPORTED_MODULE_0__["default"]({
        triggerElement: this.filterTagsTogglerBtn,
        popupMenuElement: this.filterTagsPopupNode
      });
    }
  }
  _createClass(BaseFilterConfig, [{
    key: "getItems",
    value: function getItems() {
      return [];
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      return this.getItems();
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      return "(".concat(this.getItems().length, ")");
    }
  }, {
    key: "storeItems",
    value: function storeItems() {
      this.storedItems = this.getItems();
    }
  }, {
    key: "fitProductsListFilter",
    value: function fitProductsListFilter() {
      if (!this.productsListFilterNode) {
        return;
      }
      if (!this.addedFilterTags.length) {
        this.productsListFilterNode.classList.add('ibexa-pc-edit-catalog-list-filter--hidden');
        return;
      }
      var filterTagsOverContainerCount = 0;
      this.addedFilterTags.forEach(function (filterTagNode, tagIndex) {
        var isFilterTagOverContainer = tagIndex >= MAX_NUMBER_PRODUCTS_LIST_FILTER_TAGS;
        filterTagNode.classList.toggle('ibexa-pc-edit-catalog-list-filter-tag--hidden', isFilterTagOverContainer);
        if (isFilterTagOverContainer) {
          filterTagsOverContainerCount++;
        }
      });
      if (filterTagsOverContainerCount) {
        this.filterTagsTogglerBtn.innerHTML = "+".concat(filterTagsOverContainerCount);
      }
      this.filterTagsTogglerBtn.classList.toggle('ibexa-pc-edit-catalog-list-filter__tags-toggler-btn--hidden', !filterTagsOverContainerCount);
      this.productsListFilterNode.classList.remove('ibexa-pc-edit-catalog-list-filter--hidden');
    }
  }, {
    key: "setParametersForAvailableFiltersTriggerBtn",
    value: function setParametersForAvailableFiltersTriggerBtn() {
      var availabelFilters = this.relatedAvailablePopupItem.closest('.ibexa-dropdown__items-list').querySelectorAll('.ibexa-dropdown__item:not(.ibexa-pc-edit-catalog-filters__dropdown-filter-item--hidden)');
      var availableFiltersTriggerBtn = doc.querySelector('.ibexa-pc-edit-catalog-filters__available-popup-trigger');
      availableFiltersTriggerBtn.disabled = !availabelFilters.length;
      doc.querySelector('.ibexa-pc-edit-catalog-filters__configured-header-actions .ibexa-dropdown').classList.toggle('ibexa-dropdown--disabled', !availabelFilters.length);
    }
  }, {
    key: "addPreview",
    value: function addPreview(isTriggeredByUser) {
      var renderedFilterPreview = this.filterPreviewTemplate.replaceAll('{{ name }}', this.filterName).replace('{{ type }}', this.filterType).replace('{{ label }}', this.filterLabel);
      this.relatedAvailablePopupItem.classList.add('ibexa-pc-edit-catalog-filters__dropdown-filter-item--hidden');
      this.configuredFiltersListNode.insertAdjacentHTML('beforeend', renderedFilterPreview);
      this.previewNode = doc.querySelector('.ibexa-pc-edit-catalog-filter-preview:last-of-type');
      this.filterPreviewNoValue = this.previewNode.querySelector('.ibexa-pc-edit-catalog-filter-preview__value-content--no-value');
      this.filterPreviewHasValue = this.previewNode.querySelector('.ibexa-pc-edit-catalog-filter-preview__value-content--has-value');
      if (this.isDefault) {
        this.previewNode.classList.add('ibexa-pc-edit-catalog-filter-preview--default-filter');
      }
      this.setParametersForAvailableFiltersTriggerBtn();
      var removePreviewBtn = this.previewNode.querySelector('.ibexa-pc-edit-catalog-filter-preview__remove-filter-preview');
      var openConfigPanelBtn = this.previewNode.querySelector('.ibexa-pc-edit-catalog-filter-preview__open-config-panel');
      this.configPanel = new _config_panel__WEBPACK_IMPORTED_MODULE_1__["default"]({
        wrapper: this.configPanelNode,
        trigger: openConfigPanelBtn
      });
      this.configPanel.init();
      this.updatePreviewValue();
      this.fitTagsPopupItems();
      openConfigPanelBtn.addEventListener('click', this.storeItems, false);
      if (!this.isDefault) {
        removePreviewBtn.addEventListener('click', this.removePreview, false);
        removePreviewBtn.classList.remove('ibexa-pc-edit-catalog-filter-preview__remove-filter-preview--hidden');
      }
      if (isTriggeredByUser) {
        this.configPanel.openPanel();
      }
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      this.updateProductsListTags();
      this.fitProductsListFilter();
      this.fitTagsPopupItems();
      this.relatedAvailablePopupItem.classList.remove('ibexa-pc-edit-catalog-filters__dropdown-filter-item--hidden');
      this.previewNode.remove();
      this.previewNode = null;
      this.toggleNoFiltersClass();
      this.setParametersForAvailableFiltersTriggerBtn();
      this.storedItems = [];
      doc.body.dispatchEvent(new CustomEvent('ibexa-pc-filters:change'));
    }
  }, {
    key: "toggleNoFiltersClass",
    value: function toggleNoFiltersClass() {
      var addedPreviews = this.configuredFiltersListNode.querySelectorAll('.ibexa-pc-edit-catalog-filter-preview');
      var catalogFiltersNode = this.configuredFiltersListNode.closest('.ibexa-pc-edit-catalog-filters');
      catalogFiltersNode.classList.toggle('ibexa-pc-edit-catalog-filters--no-filters-preview', !addedPreviews.length);
    }
  }, {
    key: "updateProductsListTags",
    value: function updateProductsListTags() {
      var _this = this;
      var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!this.productsListFilterNode) {
        return;
      }
      this.addedFilterTags.forEach(function (filterTag) {
        return filterTag.remove();
      });
      tags.forEach(function (_ref) {
        var label = _ref.label,
          value = _ref.value;
        var renderedFilterTag = _this.tagTemplate.replaceAll('{{ content }}', label);
        _this.productListFilterTagsContainer.insertAdjacentHTML('beforeend', renderedFilterTag);
        var lastFilterTag = _this.productListFilterTagsContainer.querySelector('.ibexa-pc-edit-catalog-list-filter-tag:last-of-type');
        lastFilterTag.dataset.value = value;
      });
      this.addedFilterTags = this.productsListFilterNode.querySelectorAll('.ibexa-pc-edit-catalog-list-filter-tag');
      this.attachRemoveFilterTagEvents();
      this.fitProductsListFilter();
      this.fitTagsPopupItems();
    }
  }, {
    key: "fitTagsPopupItems",
    value: function fitTagsPopupItems() {
      var _this2 = this;
      if (!this.tagsPopupMenuItems || !this.tagsPopup) {
        return;
      }
      var shouldCloseItemsPopup = true;
      this.tagsPopupMenuItems.forEach(function (popupMenuItem) {
        var value = popupMenuItem.dataset.value;
        var filterTag = _this2.productsListFilterNode.querySelector(".ibexa-pc-edit-catalog-list-filter-tag[data-value=\"".concat(value, "\"]"));
        var shouldShowTagInPopupMenu = filterTag && filterTag.classList.contains('ibexa-pc-edit-catalog-list-filter-tag--hidden');
        popupMenuItem.classList.toggle('ibexa-pc-edit-catalog-tags-popup-menu__item--hidden', !shouldShowTagInPopupMenu);
        if (shouldShowTagInPopupMenu) {
          shouldCloseItemsPopup = false;
        }
      });
      if (shouldCloseItemsPopup) {
        this.tagsPopup.closePopup();
      }
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(filterTagNode) {
      if (!this.productsListFilterNode) {
        return;
      }
      filterTagNode.remove();
      this.addedFilterTags = this.productsListFilterNode.querySelectorAll('.ibexa-pc-edit-catalog-list-filter-tag');
      this.updatePreviewValue();
      this.fitProductsListFilter();
      this.fitTagsPopupItems();
      document.body.dispatchEvent(new CustomEvent('ibexa-pc-filters:change'));
    }
  }, {
    key: "attachRemoveFilterTagEvents",
    value: function attachRemoveFilterTagEvents() {
      var _this3 = this;
      if (!this.productsListFilterNode) {
        return;
      }
      this.addedFilterTags.forEach(function (filterTagNode) {
        var removeFilterTagBtn = filterTagNode.querySelector('.ibexa-tag__remove-btn');
        removeFilterTagBtn.addEventListener('click', function () {
          return _this3.removeFilterTag(filterTagNode);
        }, false);
      });
    }
  }, {
    key: "removePopupTag",
    value: function removePopupTag(_ref2) {
      var currentTarget = _ref2.currentTarget;
      var removeBtnWrapper = currentTarget.closest('.ibexa-pc-edit-catalog-tags-popup-menu__item');
      var value = removeBtnWrapper.dataset.value;
      var filterTagNode = this.productsListFilterNode.querySelector(".ibexa-pc-edit-catalog-list-filter-tag[data-value=\"".concat(value, "\"]"));
      this.removeFilterTag(filterTagNode);
    }
  }, {
    key: "discardFilter",
    value: function discardFilter() {
      this.discardChanges();
      var items = this.getItems();
      if (!items.length && !this.isDefault) {
        this.removePreview();
      }
    }
  }, {
    key: "saveFilter",
    value: function saveFilter() {
      var items = this.getItems();
      this.updateProductsListTags(items);
      this.updatePreviewValue();
      this.fitTagsPopupItems();
      this.configPanel.closePanel();
      doc.body.dispatchEvent(new CustomEvent('ibexa-pc-filters:change'));
      this.storedItems = items;
      if (!items.length && !this.isDefault) {
        this.removePreview();
      }
    }
  }, {
    key: "updatePreviewValue",
    value: function updatePreviewValue() {
      var items = this.getItems();
      if (!items.length) {
        this.filterPreviewNoValue.classList.remove('ibexa-pc-edit-catalog-filter-preview__value-content--hidden');
        this.filterPreviewHasValue.classList.add('ibexa-pc-edit-catalog-filter-preview__value-content--hidden');
        return;
      }
      var valuePreviewLabel = this.getValuePreviewLabel();
      var valuePreviewTargetNode = this.filterPreviewHasValue.querySelector('.ibexa-middle-ellipsis__name-ellipsized');
      valuePreviewTargetNode.innerHTML = valuePreviewLabel;
      this.filterPreviewNoValue.classList.add('ibexa-pc-edit-catalog-filter-preview__value-content--hidden');
      this.filterPreviewHasValue.classList.remove('ibexa-pc-edit-catalog-filter-preview__value-content--hidden');
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this,
        _this$tagsPopupMenuIt;
      this.toggleNoFiltersClass();
      this.fitProductsListFilter();
      this.fitTagsPopupItems();
      this.setParametersForAvailableFiltersTriggerBtn();
      this.configPanelSaveBtns.forEach(function (configPanelSaveBtn) {
        configPanelSaveBtn.addEventListener('click', _this4.saveFilter, false);
      });
      this.configPanelCloseBtns.forEach(function (closeBtn) {
        closeBtn.addEventListener('click', _this4.discardFilter, false);
      });
      (_this$tagsPopupMenuIt = this.tagsPopupMenuItems) === null || _this$tagsPopupMenuIt === void 0 || _this$tagsPopupMenuIt.forEach(function (popupMenuItem) {
        var removeBtn = popupMenuItem.querySelector('.ibexa-pc-edit-catalog-tags-popup-menu__item-remove-btn');
        removeBtn.addEventListener('click', _this4.removePopupTag, false);
      });
      if (this.getItems().length !== 0 || this.isDefault) {
        this.attachRemoveFilterTagEvents();
        this.addPreview();
      }
    }
  }]);
  return BaseFilterConfig;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/choice.filter.config.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/choice.filter.config.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var ChoiceFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(ChoiceFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(ChoiceFilterConfig);
  function ChoiceFilterConfig(config) {
    var _this;
    _classCallCheck(this, ChoiceFilterConfig);
    _this = _super.call(this, config);
    _this.checkboxItems = _this.configPanelNode.querySelectorAll('.ibexa-pc-edit-config-choice-filter__source-input .ibexa-input--checkbox');
    _this.searchInput = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-choice-filter__search-input');
    _this.toggleSelectionBtn = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-choice-filter__action-toggle-selection');
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    _this.removeFilterTag = _this.removeFilterTag.bind(_assertThisInitialized(_this));
    _this.removePreview = _this.removePreview.bind(_assertThisInitialized(_this));
    _this.toggleSelection = _this.toggleSelection.bind(_assertThisInitialized(_this));
    _this.searchItems = _this.searchItems.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ChoiceFilterConfig, [{
    key: "getItems",
    value: function getItems() {
      var _this2 = this;
      return _toConsumableArray(this.checkboxItems).filter(function (item) {
        return item.checked;
      }).map(function (item) {
        return {
          label: _this2.configPanelNode.querySelector("[for=\"".concat(item.id, "\"]")).innerHTML,
          value: item.value
        };
      });
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      return this.getItems().map(function (_ref) {
        var value = _ref.value;
        return value;
      });
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      var _items$0$label, _items$;
      var items = this.getItems();
      var valuePreviewLabel = (_items$0$label = (_items$ = items[0]) === null || _items$ === void 0 ? void 0 : _items$.label) !== null && _items$0$label !== void 0 ? _items$0$label : '';
      if (items.length > 1) {
        valuePreviewLabel += " (+".concat(items.length - 1, ")");
      }
      return valuePreviewLabel;
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(tag) {
      var checkboxItem = this.configPanelNode.querySelector(".ibexa-pc-edit-config-choice-filter__source-input .ibexa-input--checkbox[value=\"".concat(tag.dataset.value, "\"]"));
      checkboxItem.checked = false;
      checkboxItem.dispatchEvent(new Event('change'));
      _get(_getPrototypeOf(ChoiceFilterConfig.prototype), "removeFilterTag", this).call(this, tag);
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      var _this3 = this;
      this.checkboxItems.forEach(function (checkboxItem) {
        var isValueInStoredItems = _this3.storedItems.some(function (storedItem) {
          return storedItem.value === checkboxItem.value;
        });
        var shouldDispatchChangeEvent = checkboxItem.checked != isValueInStoredItems;
        checkboxItem.checked = isValueInStoredItems;
        if (shouldDispatchChangeEvent) {
          checkboxItem.dispatchEvent(new Event('change'));
        }
      });
      this.storedItems = [];
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      var checkboxSelectedItem = this.configPanelNode.querySelectorAll(".ibexa-pc-edit-config-choice-filter__source-input .ibexa-input--checkbox:checked");
      checkboxSelectedItem.forEach(function (checkboxItem) {
        checkboxItem.checked = false;
        checkboxItem.dispatchEvent(new Event('change'));
      });
      _get(_getPrototypeOf(ChoiceFilterConfig.prototype), "removePreview", this).call(this);
    }
  }, {
    key: "checkboxToggled",
    value: function checkboxToggled() {
      var checkboxSelectedItem = this.configPanelNode.querySelectorAll(".ibexa-pc-edit-config-choice-filter__source-input .ibexa-input--checkbox:checked");
      this.toggleSelectionBtn.innerHTML = checkboxSelectedItem.length ? Translator.trans( /*@Desc("Clear all (%count%)")*/'catalog.edit.config_filter.clear_all_count', {
        count: checkboxSelectedItem.length
      }, 'product_catalog') : Translator.trans( /*@Desc("Select All")*/'catalog.edit.config_filter.select_all', {}, 'product_catalog');
    }
  }, {
    key: "toggleSelection",
    value: function toggleSelection() {
      var checkboxSelectedItems = this.configPanelNode.querySelectorAll(".ibexa-pc-edit-config-choice-filter__source-input .ibexa-input--checkbox:checked");
      if (checkboxSelectedItems.length) {
        checkboxSelectedItems.forEach(function (checkboxItem) {
          checkboxItem.checked = false;
          checkboxItem.dispatchEvent(new Event('change'));
        });
      } else {
        var checkboxItems = this.configPanelNode.querySelectorAll(".ibexa-pc-edit-config-choice-filter__source-input .ibexa-input--checkbox");
        checkboxItems.forEach(function (checkboxItem) {
          checkboxItem.checked = true;
          checkboxItem.dispatchEvent(new Event('change'));
        });
      }
    }
  }, {
    key: "searchItems",
    value: function searchItems(_ref2) {
      var currentTarget = _ref2.currentTarget;
      var itemFilterQueryLowerCase = currentTarget.value.toLowerCase();
      this.checkboxItems.forEach(function (checkboxItem) {
        var checkboxItemWrapper = checkboxItem.closest('.ibexa-pc-edit-config-choice-filter__list-item');
        var checkboxItemNameNode = checkboxItemWrapper.querySelector('.ibexa-label');
        var checkboxItemNameLowerCase = checkboxItemNameNode.innerText.toLowerCase();
        var shouldHideCheckboxItem = !checkboxItemNameLowerCase.includes(itemFilterQueryLowerCase);
        checkboxItemWrapper.classList.toggle('ibexa-pc-edit-config-choice-filter__list-item--hidden', shouldHideCheckboxItem);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      _get(_getPrototypeOf(ChoiceFilterConfig.prototype), "init", this).call(this);
      this.toggleSelectionBtn.addEventListener('click', function () {
        return _this4.toggleSelection();
      }, false);
      this.checkboxItems.forEach(function (checkboxItem) {
        return checkboxItem.addEventListener('change', function () {
          return _this4.checkboxToggled();
        }, false);
      });
      this.searchInput.addEventListener('input', this.searchItems, false);
    }
  }]);
  return ChoiceFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
ibexa.addConfig('productCatalog.catalogs.filters.choice', ChoiceFilterConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoiceFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/daterange.filter.config.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/daterange.filter.config.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
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
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _window = window,
  ibexa = _window.ibexa;
var DateRangeFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(DateRangeFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(DateRangeFilterConfig);
  function DateRangeFilterConfig(config) {
    var _this;
    _classCallCheck(this, DateRangeFilterConfig);
    _this = _super.call(this, config);
    _this.sourceMinInput = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-daterange-filter__field--min .ibexa-picker__form-input');
    _this.sourceMaxInput = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-daterange-filter__field--max .ibexa-picker__form-input');
    _this.initDatePicker = _this.initDatePicker.bind(_assertThisInitialized(_this));
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DateRangeFilterConfig, [{
    key: "getItems",
    value: function getItems() {
      var minDate = this.sourceMinInput.value;
      var maxDate = this.sourceMaxInput.value;
      if (!minDate && !maxDate) {
        return [];
      }
      var minDateFormatted = ibexa.helpers.timezone.formatShortDateTime(new Date(minDate), null, ibexa.adminUiConfig.dateFormat.shortDate);
      var maxDateFormatted = ibexa.helpers.timezone.formatShortDateTime(new Date(maxDate), null, ibexa.adminUiConfig.dateFormat.shortDate);
      var label = "".concat(minDate ? minDateFormatted : '...', " - ").concat(maxDate ? maxDateFormatted : '...');
      return [{
        minDate: minDate,
        maxDate: maxDate,
        label: label,
        value: 'created'
      }];
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      var _this$getItems = this.getItems(),
        _this$getItems2 = _slicedToArray(_this$getItems, 1),
        dateValue = _this$getItems2[0];
      if (!dateValue) {
        return;
      }
      return {
        min: dateValue.minDate,
        max: dateValue.maxDate
      };
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      var items = this.getItems();
      var valuePreviewLabel = items.length ? "(".concat(items[0].label, ")") : '';
      return valuePreviewLabel;
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(tag) {
      this.clearField(this.sourceMinInput, this.minDatePickerInstance);
      this.clearField(this.sourceMaxInput, this.maxDatePickerInstance);
      _get(_getPrototypeOf(DateRangeFilterConfig.prototype), "removeFilterTag", this).call(this, tag);
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      var _this$storedItems$;
      var _ref = (_this$storedItems$ = this.storedItems[0]) !== null && _this$storedItems$ !== void 0 ? _this$storedItems$ : {},
        minDate = _ref.minDate,
        maxDate = _ref.maxDate;
      if (minDate && this.sourceMinInput.value !== minDate) {
        this.minDatePickerInstance.flatpickrInstance.setDate(new Date(minDate), true);
      } else if (!minDate) {
        this.minDatePickerInstance.clear();
      }
      if (maxDate && this.sourceMaxInput.value !== maxDate) {
        this.maxDatePickerInstance.flatpickrInstance.setDate(new Date(maxDate), true);
      } else if (!maxDate) {
        this.maxDatePickerInstance.clear();
      }
      this.storedItems = [];
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      this.clearField(this.sourceMinInput, this.minDatePickerInstance);
      this.clearField(this.sourceMaxInput, this.maxDatePickerInstance);
      _get(_getPrototypeOf(DateRangeFilterConfig.prototype), "removePreview", this).call(this);
    }
  }, {
    key: "clearField",
    value: function clearField(input, pickerInstance) {
      if (input.value === '') {
        return;
      }
      pickerInstance.clear();
    }
  }, {
    key: "initDatePickers",
    value: function initDatePickers() {
      this.minDatePickerInstance = this.initDatePicker(this.sourceMinInput);
      this.maxDatePickerInstance = this.initDatePicker(this.sourceMaxInput);
    }
  }, {
    key: "initDatePicker",
    value: function initDatePicker(input) {
      var container = input.closest('.ibexa-pc-edit-config-daterange-filter__field');
      var defaultDate;
      if (input.value) {
        defaultDate = new Date(input.value);
      }
      var dateTimePickerWidget = new ibexa.core.DateTimePicker({
        container: container,
        onChange: function onChange(timestamps, _ref2) {
          var dates = _ref2.dates;
          var date = ibexa.helpers.timezone.formatShortDateTime(dates[0], null, 'yyyy-MM-dd');
          input.value = date;
        },
        flatpickrConfig: {
          enableTime: false,
          formatDate: function formatDate(date) {
            return ibexa.helpers.timezone.formatShortDateTime(date, null, ibexa.adminUiConfig.dateFormat.shortDate);
          },
          defaultDate: defaultDate
        }
      });
      dateTimePickerWidget.clear = function () {
        dateTimePickerWidget.flatpickrInstance.clear();
        input.value = '';
        input.dispatchEvent(new Event('change'));
      };
      dateTimePickerWidget.init();
      return dateTimePickerWidget;
    }
  }, {
    key: "init",
    value: function init() {
      this.initDatePickers();
      _get(_getPrototypeOf(DateRangeFilterConfig.prototype), "init", this).call(this);
    }
  }]);
  return DateRangeFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
ibexa.addConfig('productCatalog.catalogs.filters.dateRange', DateRangeFilterConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateRangeFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/default.filter.config.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/default.filter.config.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

var DefaultFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(DefaultFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(DefaultFilterConfig);
  function DefaultFilterConfig(config) {
    var _this;
    _classCallCheck(this, DefaultFilterConfig);
    _this = _super.call(this, config);
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DefaultFilterConfig, [{
    key: "getItems",
    value: function getItems() {
      return [];
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      this.storedItems = [];
    }
  }]);
  return DefaultFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/number.range.filter.config.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/number.range.filter.config.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
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
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _window = window,
  ibexa = _window.ibexa;
var NumberRangeFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(NumberRangeFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(NumberRangeFilterConfig);
  function NumberRangeFilterConfig(config) {
    var _this;
    _classCallCheck(this, NumberRangeFilterConfig);
    _this = _super.call(this, config);
    _this.sourceMinInput = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-number-range-filter__field--min .ibexa-input');
    _this.sourceMaxInput = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-number-range-filter__field--max .ibexa-input');
    _this.clearValues = _this.clearValues.bind(_assertThisInitialized(_this));
    _this.handleSourceValueBlur = _this.handleSourceValueBlur.bind(_assertThisInitialized(_this));
    _this.attachHandleBlurInputsEvents = _this.attachHandleBlurInputsEvents.bind(_assertThisInitialized(_this));
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(NumberRangeFilterConfig, [{
    key: "getItems",
    value: function getItems() {
      var min = this.sourceMinInput.value;
      var max = this.sourceMaxInput.value;
      if (!min || !max) {
        return [];
      }
      var label = "".concat(min, " - ").concat(max);
      return [{
        min: min,
        max: max,
        label: label,
        value: 'number'
      }];
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      var _this$getItems = this.getItems(),
        _this$getItems2 = _slicedToArray(_this$getItems, 1),
        rangeItem = _this$getItems2[0];
      if (!rangeItem) {
        return;
      }
      return {
        min: rangeItem.min,
        max: rangeItem.max
      };
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      var items = this.getItems();
      var valuePreviewLabel = items.length ? "(".concat(items[0].label, ")") : '';
      return valuePreviewLabel;
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(tag) {
      this.clearValues();
      _get(_getPrototypeOf(NumberRangeFilterConfig.prototype), "removeFilterTag", this).call(this, tag);
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      var _this$storedItems$;
      var _ref = (_this$storedItems$ = this.storedItems[0]) !== null && _this$storedItems$ !== void 0 ? _this$storedItems$ : {},
        min = _ref.min,
        max = _ref.max;
      if (this.sourceMinInput.value !== min) {
        this.sourceMinInput.value = min !== null && min !== void 0 ? min : '';
        this.sourceMinInput.dispatchEvent(new Event('change'));
      }
      if (this.sourceMaxInput.value !== max) {
        this.sourceMaxInput.value = max !== null && max !== void 0 ? max : '';
        this.sourceMaxInput.dispatchEvent(new Event('change'));
      }
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      this.clearValues();
      _get(_getPrototypeOf(NumberRangeFilterConfig.prototype), "removePreview", this).call(this);
    }
  }, {
    key: "saveFilter",
    value: function saveFilter() {
      var isError = false;
      var numberType = this.configPanelNode.dataset.numberType;
      var isTypeInt = numberType === 'integer';
      if (this.sourceMinInput.value === '') {
        isError = true;
        this.setErrorField(this.sourceMinInput);
        this.toggleInputError(this.sourceMinInput);
      }
      if (isTypeInt && !Number.isInteger(Number(this.sourceMinInput.value))) {
        isError = true;
        this.setNotIntErrorField(this.sourceMinInput);
        this.toggleInputError(this.sourceMinInput);
      }
      if (this.sourceMaxInput.value === '') {
        isError = true;
        this.setErrorField(this.sourceMaxInput);
        this.toggleInputError(this.sourceMaxInput);
      }
      if (isTypeInt && !Number.isInteger(Number(this.sourceMaxInput.value))) {
        isError = true;
        this.setNotIntErrorField(this.sourceMaxInput);
        this.toggleInputError(this.sourceMaxInput);
      }
      if (!isError) {
        _get(_getPrototypeOf(NumberRangeFilterConfig.prototype), "saveFilter", this).call(this);
      }
    }
  }, {
    key: "clearValues",
    value: function clearValues() {
      this.sourceMinInput.value = '';
      this.sourceMinInput.dispatchEvent(new Event('change'));
      this.sourceMaxInput.value = '';
      this.sourceMaxInput.dispatchEvent(new Event('change'));
    }
  }, {
    key: "toggleInputError",
    value: function toggleInputError(field) {
      var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      field.classList.toggle('is-invalid', isError);
    }
  }, {
    key: "setErrorField",
    value: function setErrorField(field) {
      var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      field.closest('.ibexa-pc-edit-config-number-range-filter__field').querySelector('.ibexa-pc-edit-config-number-range-filter__empty-error').toggleAttribute('hidden', !isError);
    }
  }, {
    key: "setNotIntErrorField",
    value: function setNotIntErrorField(field) {
      var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      field.closest('.ibexa-pc-edit-config-number-range-filter__field').querySelector('.ibexa-pc-edit-config-number-range-filter__not-integer-error').toggleAttribute('hidden', !isError);
    }
  }, {
    key: "handleSourceValueBlur",
    value: function handleSourceValueBlur(_ref2) {
      var target = _ref2.target;
      var numberType = this.configPanelNode.dataset.numberType;
      var isTypeInt = numberType === 'integer';
      var isPriceValueEmpty = target.value === '';
      var isValueNotInteger = !Number.isInteger(Number(target.value)) && isTypeInt;
      this.setErrorField(target, isPriceValueEmpty);
      this.setNotIntErrorField(target, isValueNotInteger);
      this.toggleInputError(target, isPriceValueEmpty || isValueNotInteger);
    }
  }, {
    key: "attachHandleBlurInputsEvents",
    value: function attachHandleBlurInputsEvents() {
      this.sourceMinInput.addEventListener('blur', this.handleSourceValueBlur, false);
      this.sourceMaxInput.addEventListener('blur', this.handleSourceValueBlur, false);
    }
  }, {
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(NumberRangeFilterConfig.prototype), "init", this).call(this);
      this.attachHandleBlurInputsEvents();
    }
  }]);
  return NumberRangeFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
ibexa.addConfig('productCatalog.catalogs.filters.numberRange', NumberRangeFilterConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberRangeFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/price.filter.config.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/price.filter.config.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
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
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ALL_FIELDS_COUNT = 3;
var _window = window,
  ibexa = _window.ibexa;
var PriceFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(PriceFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(PriceFilterConfig);
  function PriceFilterConfig(config) {
    var _this;
    _classCallCheck(this, PriceFilterConfig);
    _this = _super.call(this, config);
    _this.sourceMinInput = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-price-filter__field--min .ibexa-input');
    _this.sourceMaxInput = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-price-filter__field--max .ibexa-input');
    _this.clearFilterBtn = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-price-filter__action-clear-price');
    _this.clearValues = _this.clearValues.bind(_assertThisInitialized(_this));
    _this.handleSourceDropdownValueChange = _this.handleSourceDropdownValueChange.bind(_assertThisInitialized(_this));
    _this.handleSourceValueBlur = _this.handleSourceValueBlur.bind(_assertThisInitialized(_this));
    _this.attachHandleChangeInputsEvents = _this.attachHandleChangeInputsEvents.bind(_assertThisInitialized(_this));
    _this.attachHandleBlurInputsEvents = _this.attachHandleBlurInputsEvents.bind(_assertThisInitialized(_this));
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(PriceFilterConfig, [{
    key: "getItems",
    value: function getItems() {
      var currency = this.dropdownInstance.sourceInput.value;
      var minPrice = this.sourceMinInput.value;
      var maxPrice = this.sourceMaxInput.value;
      if (!currency || !minPrice || !maxPrice) {
        return [];
      }
      var label = "".concat(minPrice, " - ").concat(maxPrice).concat(currency);
      return [{
        currency: currency,
        minPrice: minPrice,
        maxPrice: maxPrice,
        label: label,
        value: 'price'
      }];
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      var _this$getItems = this.getItems(),
        _this$getItems2 = _slicedToArray(_this$getItems, 1),
        priceItem = _this$getItems2[0];
      if (!priceItem) {
        return;
      }
      return {
        currency: priceItem.currency,
        min_price: priceItem.minPrice,
        max_price: priceItem.maxPrice
      };
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      var items = this.getItems();
      var valuePreviewLabel = items.length ? "(".concat(items[0].label, ")") : '';
      return valuePreviewLabel;
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(tag) {
      this.clearValues();
      _get(_getPrototypeOf(PriceFilterConfig.prototype), "removeFilterTag", this).call(this, tag);
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      var _this$storedItems$;
      var _ref = (_this$storedItems$ = this.storedItems[0]) !== null && _this$storedItems$ !== void 0 ? _this$storedItems$ : {},
        currency = _ref.currency,
        minPrice = _ref.minPrice,
        maxPrice = _ref.maxPrice;
      if (this.sourceMinInput.value !== minPrice) {
        this.sourceMinInput.value = minPrice !== null && minPrice !== void 0 ? minPrice : '';
        this.sourceMinInput.dispatchEvent(new Event('change'));
      }
      if (this.sourceMaxInput.value !== maxPrice) {
        this.sourceMaxInput.value = maxPrice !== null && maxPrice !== void 0 ? maxPrice : '';
        this.sourceMaxInput.dispatchEvent(new Event('change'));
      }
      if (currency) {
        this.dropdownInstance.selectOption(currency);
      } else {
        this.dropdownInstance.clearCurrentSelection();
      }
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      this.clearValues();
      _get(_getPrototypeOf(PriceFilterConfig.prototype), "removePreview", this).call(this);
    }
  }, {
    key: "saveFilter",
    value: function saveFilter() {
      var _this2 = this;
      var errorFields = [];
      if (this.dropdownInstance.sourceInput.value === '') {
        errorFields.push(this.dropdownInstance.container);
      }
      if (this.sourceMinInput.value === '') {
        errorFields.push(this.sourceMinInput);
      }
      if (this.sourceMaxInput.value === '') {
        errorFields.push(this.sourceMaxInput);
      }
      var areAllFieldsEmpty = errorFields.length === ALL_FIELDS_COUNT;
      var isAnyFieldsEmpty = !!errorFields.length;
      if (!isAnyFieldsEmpty || areAllFieldsEmpty) {
        _get(_getPrototypeOf(PriceFilterConfig.prototype), "saveFilter", this).call(this);
      } else {
        errorFields.forEach(function (errorField) {
          _this2.setErrorField(errorField);
        });
      }
    }
  }, {
    key: "clearValues",
    value: function clearValues() {
      this.sourceMinInput.value = '';
      this.sourceMinInput.dispatchEvent(new Event('change'));
      this.sourceMaxInput.value = '';
      this.sourceMaxInput.dispatchEvent(new Event('change'));
      this.dropdownInstance.clearCurrentSelection();
    }
  }, {
    key: "setErrorField",
    value: function setErrorField(field) {
      var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      field.classList.toggle('is-invalid', isError);
      field.closest('.ibexa-pc-edit-config-price-filter__field').querySelector('.ibexa-pc-edit-config-price-filter__empty-error').toggleAttribute('hidden', !isError);
    }
  }, {
    key: "initializeDropdown",
    value: function initializeDropdown() {
      var dropdownNode = this.configPanelNode.querySelector('.ibexa-dropdown');
      this.dropdownInstance = ibexa.helpers.objectInstances.getInstance(dropdownNode);
    }
  }, {
    key: "handleSourceDropdownValueChange",
    value: function handleSourceDropdownValueChange() {
      if (!this.sourceMinInput.value && !this.sourceMaxInput.value) {
        return;
      }
      var isDropdownValueEmpty = this.dropdownInstance.sourceInput.value === '';
      this.setErrorField(this.dropdownInstance.container, isDropdownValueEmpty);
    }
  }, {
    key: "handleSourceValueBlur",
    value: function handleSourceValueBlur(_ref2) {
      var target = _ref2.target;
      var isPriceValueEmpty = target.value === '';
      this.setErrorField(target, isPriceValueEmpty);
    }
  }, {
    key: "attachHandleChangeInputsEvents",
    value: function attachHandleChangeInputsEvents() {
      this.dropdownInstance.sourceInput.addEventListener('change', this.handleSourceDropdownValueChange, false);
    }
  }, {
    key: "attachHandleBlurInputsEvents",
    value: function attachHandleBlurInputsEvents() {
      this.sourceMinInput.addEventListener('blur', this.handleSourceValueBlur, false);
      this.sourceMaxInput.addEventListener('blur', this.handleSourceValueBlur, false);
    }
  }, {
    key: "init",
    value: function init() {
      this.initializeDropdown();
      this.attachHandleChangeInputsEvents();
      this.attachHandleBlurInputsEvents();
      _get(_getPrototypeOf(PriceFilterConfig.prototype), "init", this).call(this);
      this.clearFilterBtn.addEventListener('click', this.clearValues, false);
    }
  }]);
  return PriceFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
ibexa.addConfig('productCatalog.catalogs.filters.price', PriceFilterConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/radio.filter.config.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/radio.filter.config.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _window = window,
  ibexa = _window.ibexa;
var RadioFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(RadioFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(RadioFilterConfig);
  function RadioFilterConfig(config) {
    var _this;
    _classCallCheck(this, RadioFilterConfig);
    _this = _super.call(this, config);
    _this.clearFilterBtn = _this.configPanelNode.querySelector('.ibexa-pc-edit-config-radio-filter__action-clear-checked');
    _this.radioItems = _this.configPanelNode.querySelectorAll('.ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio');
    _this.clearFilter = _this.clearFilter.bind(_assertThisInitialized(_this));
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    _this.removeFilterTag = _this.removeFilterTag.bind(_assertThisInitialized(_this));
    _this.getLabel = _this.getLabel.bind(_assertThisInitialized(_this));
    _this.updateProductsListTags = _this.updateProductsListTags.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(RadioFilterConfig, [{
    key: "getLabel",
    value: function getLabel() {
      var checkedRadio = this.configPanelNode.querySelector('.ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio:checked:not([value=""])');
      if (!checkedRadio) {
        return '';
      }
      var labelNode = this.configPanelNode.querySelector(".ibexa-pc-edit-config-radio-filter__source-input .ibexa-label--checkbox-radio[for=\"".concat(checkedRadio.id, "\"]"));
      return labelNode.innerHTML;
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var checkedRadio = this.configPanelNode.querySelector('.ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio:checked:not([value=""])');
      return checkedRadio ? [{
        label: this.getLabel(),
        value: checkedRadio.value
      }] : [];
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      var _this$getItems$;
      var filterValue = (_this$getItems$ = this.getItems()[0]) === null || _this$getItems$ === void 0 ? void 0 : _this$getItems$.value;
      return filterValue === '' ? undefined : filterValue;
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      var valuePreviewLabel = '';
      var checkedRadio = this.configPanelNode.querySelector('.ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio:checked:not([value=""])');
      if (checkedRadio) {
        var labelNode = this.configPanelNode.querySelector(".ibexa-pc-edit-config-radio-filter__source-input .ibexa-label--checkbox-radio[for=\"".concat(checkedRadio.id, "\"]"));
        valuePreviewLabel = labelNode.innerHTML;
      }
      return valuePreviewLabel;
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(tag) {
      this.clearFilter();
      _get(_getPrototypeOf(RadioFilterConfig.prototype), "removeFilterTag", this).call(this, tag);
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      var _this$storedItems$;
      var radioItem = this.configPanelNode.querySelector(".ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio[value=\"".concat((_this$storedItems$ = this.storedItems[0]) === null || _this$storedItems$ === void 0 ? void 0 : _this$storedItems$.value, "\"]"));
      var currentlyCheckedItem = this.configPanelNode.querySelector(".ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio:checked");
      if (!radioItem) {
        radioItem = this.configPanelNode.querySelector('.ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio[value=""]');
      }
      if (!radioItem.isSameNode(currentlyCheckedItem)) {
        radioItem.checked = true;
        radioItem.dispatchEvent(new Event('change'));
      }
      this.storedItems = [];
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      this.clearFilter();
      _get(_getPrototypeOf(RadioFilterConfig.prototype), "removePreview", this).call(this);
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      var emptyOption = this.configPanelNode.querySelector('.ibexa-pc-edit-config-radio-filter__source-input .ibexa-input--radio[value=""]');
      emptyOption.checked = true;
      emptyOption.dispatchEvent(new Event('change'));
    }
  }, {
    key: "updateProductsListTags",
    value: function updateProductsListTags() {
      var _tags$;
      var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (((_tags$ = tags[0]) === null || _tags$ === void 0 ? void 0 : _tags$.value) === '') {
        _get(_getPrototypeOf(RadioFilterConfig.prototype), "updateProductsListTags", this).call(this);
      } else {
        _get(_getPrototypeOf(RadioFilterConfig.prototype), "updateProductsListTags", this).call(this, tags);
      }
    }
  }, {
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(RadioFilterConfig.prototype), "init", this).call(this);
      this.clearFilterBtn.addEventListener('click', this.clearFilter, false);
    }
  }]);
  return RadioFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
ibexa.addConfig('productCatalog.catalogs.filters.radio', RadioFilterConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/taggify.filter.config.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/taggify.filter.config.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _window = window,
  ibexa = _window.ibexa;
var TaggifyFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(TaggifyFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(TaggifyFilterConfig);
  function TaggifyFilterConfig(config) {
    var _this;
    _classCallCheck(this, TaggifyFilterConfig);
    _this = _super.call(this, config);
    _this.taggifyTags = [];
    _this.taggifyWrapper = _this.configPanelNode.querySelector('.ibexa-pc-taggify__widget');
    _this.sourceInput = _this.configPanelNode.querySelector('.ibexa-pc-taggify__source-input');
    _this.initTaggify = _this.initTaggify.bind(_assertThisInitialized(_this));
    _this.updateTaggifyTagsFromInput = _this.updateTaggifyTagsFromInput.bind(_assertThisInitialized(_this));
    _this.getTags = _this.getTags.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.updateSourceValue = _this.updateSourceValue.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(TaggifyFilterConfig, [{
    key: "getTags",
    value: function getTags() {
      return this.sourceInput.value.split(',').filter(function (tag) {
        return tag !== '';
      });
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return this.getTags().map(function (tag) {
        return {
          label: tag,
          value: tag
        };
      });
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      return this.sourceInput.value === '' ? undefined : this.sourceInput.value;
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      var _items$0$label, _items$;
      var items = this.getItems();
      var valuePreviewLabel = (_items$0$label = (_items$ = items[0]) === null || _items$ === void 0 ? void 0 : _items$.label) !== null && _items$0$label !== void 0 ? _items$0$label : '';
      if (items.length > 1) {
        valuePreviewLabel += " (+".concat(items.length - 1, ")");
      }
      return valuePreviewLabel;
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(tag) {
      var tags = this.sourceInput.value.split(',');
      var filteredTags = tags.filter(function (tagItem) {
        return tagItem !== tag.dataset.value;
      });
      this.sourceInput.value = filteredTags.join(',');
      this.sourceInput.dispatchEvent(new Event('change'));
      this.initTaggify();
      _get(_getPrototypeOf(TaggifyFilterConfig.prototype), "removeFilterTag", this).call(this, tag);
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      var tags = this.storedItems.map(function (_ref) {
        var value = _ref.value;
        return value;
      }).join(',');
      var haveTagsChanged = tags !== this.sourceInput.value;
      this.sourceInput.value = tags;
      this.initTaggify();
      if (haveTagsChanged) {
        this.sourceInput.dispatchEvent(new Event('change'));
      }
      this.storedItems = [];
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      this.sourceInput.value = '';
      this.initTaggify();
      this.sourceInput.dispatchEvent(new Event('change'));
      _get(_getPrototypeOf(TaggifyFilterConfig.prototype), "removePreview", this).call(this);
    }
  }, {
    key: "updateSourceValue",
    value: function updateSourceValue(event) {
      this.sourceInput.value = event.detail.tags.map(function (tag) {
        return tag.label;
      }).join();
      this.sourceInput.dispatchEvent(new Event('change'));
    }
  }, {
    key: "updateTaggifyTagsFromInput",
    value: function updateTaggifyTagsFromInput() {
      if (this.sourceInput.value) {
        this.taggify.updateTags(this.sourceInput.value.split(',').map(function (item) {
          return {
            id: item.replace(/[^a-zA-Z0-9]/g, '_'),
            label: item
          };
        }));
      }
    }
  }, {
    key: "initTaggify",
    value: function initTaggify() {
      this.taggify = new window.Taggify({
        containerNode: this.taggifyWrapper,
        displayLabel: false,
        displayInputValues: false
      });
      var taggifyInput = this.taggifyWrapper.querySelector('.taggify__input');
      this.updateTaggifyTagsFromInput();
      taggifyInput.addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
      }, false);
      this.taggifyWrapper.addEventListener('tagsCreated', this.updateSourceValue, false);
      this.taggifyWrapper.addEventListener('tagRemoved', this.updateSourceValue, false);
    }
  }, {
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(TaggifyFilterConfig.prototype), "init", this).call(this);
      this.initTaggify();
    }
  }]);
  return TaggifyFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
ibexa.addConfig('productCatalog.catalogs.filters.taggify', TaggifyFilterConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaggifyFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/tags.popup.menu.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/tags.popup.menu.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  ibexa = _window.ibexa;
var CLASS_POPUP_MENU_HIDDEN = 'ibexa-popup-menu--hidden';
var TagsPopupMenu = /*#__PURE__*/function (_ibexa$core$PopupMenu) {
  _inherits(TagsPopupMenu, _ibexa$core$PopupMenu);
  var _super = _createSuper(TagsPopupMenu);
  function TagsPopupMenu() {
    _classCallCheck(this, TagsPopupMenu);
    return _super.apply(this, arguments);
  }
  _createClass(TagsPopupMenu, [{
    key: "handleClickOutsidePopupMenu",
    value: function handleClickOutsidePopupMenu(event) {
      var isTriggerElement = event.target.classList.contains('ibexa-pc-edit-catalog-list-filter__tags-toggler-btn');
      var isPopupMenuExpanded = !this.popupMenuElement.classList.contains(CLASS_POPUP_MENU_HIDDEN);
      var isClickInsidePopup = this.popupMenuElement.contains(event.target);
      if (!isPopupMenuExpanded || isTriggerElement) {
        return;
      }
      this.popupMenuElement.classList.toggle(CLASS_POPUP_MENU_HIDDEN, !isClickInsidePopup);
    }
  }, {
    key: "attachOnClickToItem",
    value: function attachOnClickToItem() {
      return;
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.popupMenuElement.classList.add(CLASS_POPUP_MENU_HIDDEN);
    }
  }]);
  return TagsPopupMenu;
}(ibexa.core.PopupMenu);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsPopupMenu);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/taxonomy.filter.config.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/taxonomy.filter.config.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ibexa_taxonomy_src_bundle_ui_dev_src_modules_select_ibexa_tag_select_ibexa_tag_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-taxonomy/src/bundle/ui-dev/src/modules/select-ibexa-tag/select.ibexa.tag.module */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/select-ibexa-tag/select.ibexa.tag.module.js");
/* harmony import */ var _base_filter_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.filter.config */ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/base.filter.config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _window = window,
  ReactDOM = _window.ReactDOM,
  React = _window.React,
  document = _window.document,
  ibexa = _window.ibexa;
var MODULE_ID = 'ibexa-pc-catalog-select-category';
var TaxonomyFilterConfig = /*#__PURE__*/function (_BaseFilterConfig) {
  _inherits(TaxonomyFilterConfig, _BaseFilterConfig);
  var _super = _createSuper(TaxonomyFilterConfig);
  function TaxonomyFilterConfig(config) {
    var _this;
    _classCallCheck(this, TaxonomyFilterConfig);
    _this = _super.call(this, config);
    _this.selectedItems = [];
    _this.sourceInput = _this.configPanelNode.querySelector('.ibexa-pc-taxonomy__source-input');
    _this.taxonomyRoot = _this.configPanelNode.querySelector('#ibexa-pc-edit-config-taxonomy-root');
    _this.token = document.querySelector('meta[name="CSRF-Token"]').content;
    _this.siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    _this.userId = ibexa.helpers.user.getId();
    _this.initTree = _this.initTree.bind(_assertThisInitialized(_this));
    _this.updateSelectedTaxonomyEntries = _this.updateSelectedTaxonomyEntries.bind(_assertThisInitialized(_this));
    _this.discardChanges = _this.discardChanges.bind(_assertThisInitialized(_this));
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    _this.removeFilterTag = _this.removeFilterTag.bind(_assertThisInitialized(_this));
    _this.removePreview = _this.removePreview.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(TaxonomyFilterConfig, [{
    key: "getItems",
    value: function getItems() {
      var _this2 = this;
      return this.sourceInput.value.split(',').filter(function (id) {
        return id;
      }).map(function (id) {
        var _taxonomyEntry$intern, _taxonomyEntry$intern2;
        var taxonomyEntry = _this2.selectedItems.find(function (selectedItem) {
          return selectedItem.id === parseInt(id, 10);
        });
        return {
          label: (_taxonomyEntry$intern = taxonomyEntry === null || taxonomyEntry === void 0 || (_taxonomyEntry$intern2 = taxonomyEntry.internalItem) === null || _taxonomyEntry$intern2 === void 0 ? void 0 : _taxonomyEntry$intern2.name) !== null && _taxonomyEntry$intern !== void 0 ? _taxonomyEntry$intern : _this2.getCategoryLabel(id),
          value: id
        };
      });
    }
  }, {
    key: "getCategoryLabel",
    value: function getCategoryLabel(id) {
      var categoryName = document.querySelector(".ibexa-pc-edit-catalog-list-filter-tag[data-value=\"".concat(id, "\"]")).dataset.categoryName;
      return categoryName !== null && categoryName !== void 0 ? categoryName : id;
    }
  }, {
    key: "getRequestValue",
    value: function getRequestValue() {
      return this.sourceInput.value === '' ? undefined : this.sourceInput.value;
    }
  }, {
    key: "getValuePreviewLabel",
    value: function getValuePreviewLabel() {
      var _items$0$label, _items$;
      var items = this.getItems();
      var valuePreviewLabel = (_items$0$label = (_items$ = items[0]) === null || _items$ === void 0 ? void 0 : _items$.label) !== null && _items$0$label !== void 0 ? _items$0$label : '';
      if (items.length > 1) {
        valuePreviewLabel += " (+".concat(items.length - 1, ")");
      }
      return valuePreviewLabel;
    }
  }, {
    key: "removeFilterTag",
    value: function removeFilterTag(tag) {
      var tags = this.sourceInput.value.split(',');
      var filteredTags = tags.filter(function (tagItem) {
        return tagItem !== tag.dataset.value;
      });
      this.sourceInput.value = filteredTags.join(',');
      this.sourceInput.dispatchEvent(new Event('change'));
      this.reinitTree();
      _get(_getPrototypeOf(TaxonomyFilterConfig.prototype), "removeFilterTag", this).call(this, tag);
    }
  }, {
    key: "discardChanges",
    value: function discardChanges() {
      var tags = this.storedItems.map(function (_ref) {
        var value = _ref.value;
        return value;
      }).join(',');
      var areTagsChanged = tags !== this.sourceInput.value;
      if (areTagsChanged) {
        this.sourceInput.value = tags;
        this.sourceInput.dispatchEvent(new Event('change'));
      }
      this.reinitTree();
      this.storedItems = [];
    }
  }, {
    key: "removePreview",
    value: function removePreview() {
      this.sourceInput.value = '';
      this.sourceInput.dispatchEvent(new Event('change'));
      this.reinitTree();
      _get(_getPrototypeOf(TaxonomyFilterConfig.prototype), "removePreview", this).call(this);
    }
  }, {
    key: "updateSelectedTaxonomyEntries",
    value: function updateSelectedTaxonomyEntries(event) {
      var items = event.detail.items;
      var tags = items.map(function (_ref2) {
        var id = _ref2.id;
        return id;
      });
      this.selectedItems = items;
      this.sourceInput.value = tags.join(',');
      this.sourceInput.dispatchEvent(new Event('change'));
    }
  }, {
    key: "reinitTree",
    value: function reinitTree() {
      this.treeRoot.unmount();
      this.initTree();
    }
  }, {
    key: "initTree",
    value: function initTree() {
      var selectedItems = this.getItems().map(function (_ref3) {
        var value = _ref3.value;
        return {
          id: parseInt(value, 10)
        };
      });
      this.treeRoot = ReactDOM.createRoot(this.taxonomyRoot);
      this.treeRoot.render(React.createElement(_ibexa_taxonomy_src_bundle_ui_dev_src_modules_select_ibexa_tag_select_ibexa_tag_module__WEBPACK_IMPORTED_MODULE_0__["default"], {
        userId: this.userId,
        moduleId: MODULE_ID,
        restInfo: {
          token: this.token,
          siteaccess: this.siteaccess
        },
        taxonomyName: this.sourceInput.dataset.productTaxonomyName,
        isMultiChoice: true,
        isSearchVisible: false,
        selectedItems: selectedItems,
        rootSelectionDisabled: true
      }));
      document.body.addEventListener('ibexa-tb-update-selected', this.updateSelectedTaxonomyEntries, false);
    }
  }, {
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(TaxonomyFilterConfig.prototype), "init", this).call(this);
      this.initTree();
    }
  }]);
  return TaxonomyFilterConfig;
}(_base_filter_config__WEBPACK_IMPORTED_MODULE_1__["default"]);
ibexa.addConfig('productCatalog.catalogs.filters.taxonomy', TaxonomyFilterConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyFilterConfig);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var _window = window,
  Translator = _window.Translator;
var EmptyTree = function EmptyTree() {
  var emptyBadge = Translator.trans( /*@Desc("1")*/'taxonomy.1', {}, 'taxonomy_ui');
  var emptyContent = Translator.trans( /*@Desc("Your tree is empty. Start creating your structure")*/'taxonomy.empty', {}, 'taxonomy_ui');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-empty__badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-badge__content"
  }, emptyBadge))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-empty__content"
  }, emptyContent));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyTree);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NameContent = function NameContent(_ref) {
  var _name$match;
  var searchActive = _ref.searchActive,
    searchValue = _ref.searchValue,
    name = _ref.name;
  if (!searchActive) {
    return name;
  }
  var searchNameRegexp = new RegExp("(.*)(".concat(searchValue, ")(.*)"), 'i');
  var _ref2 = (_name$match = name.match(searchNameRegexp)) !== null && _name$match !== void 0 ? _name$match : [],
    _ref3 = _slicedToArray(_ref2, 4),
    searchPrefix = _ref3[1],
    searchName = _ref3[2],
    searchSuffix = _ref3[3];
  if (!searchName) {
    return name;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tt-list-item__search-fragment"
  }, searchPrefix), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tt-list-item__search-fragment--matched"
  }, searchName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tt-list-item__search-fragment"
  }, searchSuffix));
};
NameContent.propTypes = {
  searchActive: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameContent);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/not-translated-info/not.translated.info.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/not-translated-info/not.translated.info.js ***!
  \**************************************************************************************************************************/
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
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var NotTranslatedInfo = function NotTranslatedInfo(_ref) {
  var languageCode = _ref.languageCode;
  var language = ibexa.adminUiConfig.languages.mappings[languageCode];
  var languageName = language.name;
  var warningMessage = Translator.trans( /*@Desc("Not translated in %languageName% language")*/'taxonomy.not_translated_info', {
    languageName: languageName
  }, 'taxonomy_ui');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-not-translated-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "warning-triangle",
    extraClasses: "ibexa-icon--small c-tt-not-translated-info__icon-warning"
  }), warningMessage);
};
NotTranslatedInfo.propTypes = {
  languageCode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotTranslatedInfo);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLastElement: () => (/* binding */ getLastElement)
/* harmony export */ });
var getLastElement = function getLastElement(arr) {
  var arrLength = arr.length;
  return arr[arrLength - 1];
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/getters.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/getters.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContentLink: () => (/* binding */ getContentLink),
/* harmony export */   getPath: () => (/* binding */ getPath),
/* harmony export */   getTotal: () => (/* binding */ getTotal)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js");


/* we don't have totalSubitems because of performance, we use nested set tree properties */
var hasSubitems = function hasSubitems(item) {
  return item.right - item.left > 1;
};
var getContentLink = function getContentLink(item) {
  var locationHref = window.Routing.generate('ibexa.content.view', {
    contentId: item.contentId
  });
  return locationHref;
};
var getTotal = function getTotal(item) {
  var totalChildrenCount = 0;
  if (hasSubitems(item)) {
    if (item.__children.length) {
      totalChildrenCount = item.__children.length;
    } else {
      totalChildrenCount = 1;
    }
  }
  return totalChildrenCount;
};
var getParentPath = function getParentPath(parents) {
  if (!parents || parents.length === 0) {
    return '';
  }
  var parent = (0,_array__WEBPACK_IMPORTED_MODULE_0__.getLastElement)(parents);
  return "".concat(parent.path, "/");
};
var getPath = function getPath(item) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    parents = _ref.parents;
  var parentPath = getParentPath(parents);
  return "".concat(parentPath).concat(item.id);
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTranslatedName: () => (/* binding */ getTranslatedName),
/* harmony export */   hasTranslation: () => (/* binding */ hasTranslation)
/* harmony export */ });
var hasTranslation = function hasTranslation(entry, languageCode) {
  var _entry$names;
  return !!((_entry$names = entry.names) !== null && _entry$names !== void 0 && _entry$names[languageCode]);
};
var getTranslatedName = function getTranslatedName(entry, languageCode) {
  if (hasTranslation(entry, languageCode)) {
    var _entry$names2;
    return (_entry$names2 = entry.names) === null || _entry$names2 === void 0 ? void 0 : _entry$names2[languageCode];
  }
  return entry.name;
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/search.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/search.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSearchTreeProps: () => (/* binding */ getSearchTreeProps)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var blockActions = function blockActions(actions) {
  var activeActionsIds = ['add', 'delete', 'assignContent'];
  return actions.map(function (action) {
    var nextAction = _objectSpread({}, action);
    if (nextAction.component && !activeActionsIds.includes(nextAction.id)) {
      nextAction.forcedProps = {
        isDisabled: true
      };
    }
    if (nextAction.subitems) {
      nextAction.subitems = blockActions(nextAction.subitems);
    }
    return nextAction;
  });
};
var getMenuActions = function getMenuActions(actions) {
  var nextActions = blockActions(actions);
  return nextActions;
};
var getSearchTreeProps = function getSearchTreeProps(_ref) {
  var searchTree = _ref.searchTree,
    searchActive = _ref.searchActive;
  if (!searchActive) {
    return {};
  }
  return {
    tree: searchTree,
    isLocalStorageActive: false,
    getMenuActions: getMenuActions,
    extraClasses: 'c-tb-tree--non-expandable'
  };
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/tree.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/tree.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findItem: () => (/* binding */ findItem),
/* harmony export */   getExpandedItems: () => (/* binding */ getExpandedItems),
/* harmony export */   isRoot: () => (/* binding */ isRoot)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var findItem = function findItem(items, originalPath) {
  var path = _toConsumableArray(originalPath);
  var isLast = path.length === 1;
  var item = items.find(function (element) {
    return element.id === parseInt(path[0], 10);
  });
  if (!item) {
    return null;
  }
  if (isLast) {
    return item;
  }
  if (!Array.isArray(item.__children)) {
    return null;
  }
  path.shift();
  return findItem(item.__children, path);
};
var isRoot = function isRoot(item) {
  return item.root === item.id;
};
var getExpandedItems = function getExpandedItems(treeNode) {
  if (!treeNode.__children.length) {
    return [];
  }
  return treeNode.__children.filter(function (_ref) {
    var __children = _ref.__children;
    return __children.length;
  }).reduce(function (expandedItems, child) {
    return [].concat(_toConsumableArray(expandedItems), _toConsumableArray(getExpandedItems(child)));
  }, [treeNode]);
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignContent: () => (/* binding */ assignContent),
/* harmony export */   deleteElements: () => (/* binding */ deleteElements),
/* harmony export */   loadNode: () => (/* binding */ loadNode),
/* harmony export */   loadSearchResults: () => (/* binding */ loadSearchResults),
/* harmony export */   loadTree: () => (/* binding */ loadTree),
/* harmony export */   loadTreeRoot: () => (/* binding */ loadTreeRoot),
/* harmony export */   moveElements: () => (/* binding */ moveElements)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var NO_CONTENT_STATUS_CODE = 204;
var ENDPOINT_BULK = '/api/ibexa/v2/bulk';
var HEADERS_BULK = {
  Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
  'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json'
};
var cleanEntryIds = function cleanEntryIds(entryIds) {
  return entryIds.filter(function (el) {
    return !!el;
  });
};

// TODO: should be moved to admin-ui helpers
var handleRequestResponseWrapper = function handleRequestResponseWrapper(response) {
  var statusCode = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponseStatus)(response);
  if (statusCode === NO_CONTENT_STATUS_CODE) {
    return null;
  }
  return (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse)(response);
};
var handleAbortException = function handleAbortException(error) {
  if ((error === null || error === void 0 ? void 0 : error.name) === 'AbortError') {
    return;
  }
  throw error;
};
var loadTreeRoot = function loadTreeRoot(_ref) {
  var taxonomyName = _ref.taxonomyName;
  var loadTreeRootUrl = window.Routing.generate('ibexa.taxonomy.tree.root', {
    taxonomyName: taxonomyName
  }, true);
  var request = new Request(loadTreeRootUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var loadTree = function loadTree(_ref2) {
  var taxonomyName = _ref2.taxonomyName,
    entryIds = _ref2.entryIds;
  var loadTreeUrl = window.Routing.generate('ibexa.taxonomy.tree.subtree', {
    taxonomyName: taxonomyName,
    entryIds: cleanEntryIds(entryIds)
  }, true);
  var request = new Request(loadTreeUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var loadNode = function loadNode(_ref3) {
  var taxonomyName = _ref3.taxonomyName,
    entryId = _ref3.entryId;
  var loadNodeUrl = window.Routing.generate('ibexa.taxonomy.tree.node', {
    taxonomyName: taxonomyName,
    entryId: entryId
  }, true);
  var request = new Request(loadNodeUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var moveElements = function moveElements(entries, _ref4) {
  var restInfo = _ref4.restInfo,
    taxonomyName = _ref4.taxonomyName;
  var route = "/api/ibexa/v2/taxonomy/".concat(taxonomyName, "/entries/move");
  var request = new Request(route, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/vnd.ibexa.api.TaxonomyEntryBulkMove+json',
      'X-CSRF-Token': restInfo.token,
      'X-Siteaccess': restInfo.siteaccess
    },
    body: JSON.stringify({
      TaxonomyEntryBulkMove: {
        entries: entries
      }
    }),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var deleteElements = function deleteElements(entries, _ref5) {
  var restInfo = _ref5.restInfo,
    taxonomyName = _ref5.taxonomyName;
  var route = "/api/ibexa/v2/taxonomy/".concat(taxonomyName, "/entries");
  var request = new Request(route, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/vnd.ibexa.api.TaxonomyEntryBulkRemove+json',
      'X-CSRF-Token': restInfo.token,
      'X-Siteaccess': restInfo.siteaccess
    },
    body: JSON.stringify({
      TaxonomyEntryBulkRemove: {
        entries: entries
      }
    }),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var getBulkAssignContent = function getBulkAssignContent(taxonomyName, contentId, entriesIds) {
  return {
    uri: "/api/ibexa/v2/taxonomy/".concat(taxonomyName, "/entry-assignments/assign-to-content"),
    content: JSON.stringify({
      TaxonomyEntryAssignToContent: {
        content: contentId,
        entries: entriesIds
      }
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/vnd.ibexa.api.TaxonomyEntryAssignToContent+json'
    },
    method: 'POST'
  };
};
var assignContent = function assignContent(contentIds, entriesIds, _ref6) {
  var restInfo = _ref6.restInfo,
    taxonomyName = _ref6.taxonomyName;
  var requestBodyOperations = contentIds.map(function (contentId) {
    return getBulkAssignContent(taxonomyName, contentId, entriesIds);
  });
  var request = new Request(ENDPOINT_BULK, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_BULK), {}, {
      'X-CSRF-Token': restInfo.token,
      'X-Siteaccess': restInfo.siteaccess
    }),
    body: JSON.stringify({
      bulkOperations: {
        operations: requestBodyOperations
      }
    }),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var loadSearchResults = function loadSearchResults(_ref7) {
  var taxonomyName = _ref7.taxonomyName,
    searchValue = _ref7.searchValue,
    languageCode = _ref7.languageCode,
    signal = _ref7.signal;
  var loadTreeUrl = window.Routing.generate('ibexa.taxonomy.tree.search', {
    taxonomyName: taxonomyName,
    query: searchValue,
    languageCode: languageCode
  }, true);
  var request = new Request(loadTreeUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request, {
    signal: signal
  }).then(handleRequestResponseWrapper)["catch"](handleAbortException);
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/select-ibexa-tag/select.ibexa.tag.module.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/select-ibexa-tag/select.ibexa.tag.module.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/taxonomy.tree.service */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/helpers/getters */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _common_helpers_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/helpers/tree */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/tree.js");
/* harmony import */ var _common_helpers_languages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/helpers/languages */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages.js");
/* harmony import */ var _common_helpers_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helpers/search */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/search.js");
/* harmony import */ var _common_components_empty_tree_empty_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/components/empty-tree/empty.tree */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js");
/* harmony import */ var _common_components_not_translated_info_not_translated_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/components/not-translated-info/not.translated.info */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/not-translated-info/not.translated.info.js");
/* harmony import */ var _common_components_name_content_name_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/components/name-content/name-content */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var MIN_SEARCH_LENGTH = 1;
var SelectIbexaTag = function SelectIbexaTag(props) {
  var moduleId = props.moduleId,
    userId = props.userId,
    selectedItems = props.selectedItems,
    taxonomyName = props.taxonomyName,
    taxonomyEntryId = props.taxonomyEntryId,
    isMultiChoice = props.isMultiChoice,
    languageCode = props.languageCode,
    isSearchVisible = props.isSearchVisible,
    rootSelectionDisabled = props.rootSelectionDisabled;
  var treeBuilderModuleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    tree = _useState2[0],
    setTree = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTree = _useState4[0],
    setSearchTree = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    searchActive = _useState6[0],
    setSearchActive = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoaded = _useState10[0],
    setIsLoaded = _useState10[1];
  var searchRequestTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var abortControllerSearchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var setInitialItemsState = function setInitialItemsState(location) {
    setIsLoaded(true);
    setTree(location);
  };
  var loadTreeToState = function loadTreeToState() {
    if (selectedItems.length) {
      return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadTree)({
        taxonomyName: taxonomyName,
        entryIds: getSelectedItemsIds()
      }).then(function (rootResponse) {
        var _treeBuilderModuleRef;
        var _rootResponse = _slicedToArray(rootResponse, 1),
          rootItem = _rootResponse[0];
        var expandedItems = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_6__.getExpandedItems)(rootItem);
        (_treeBuilderModuleRef = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef === void 0 || _treeBuilderModuleRef.expandItems(expandedItems);
        setInitialItemsState(rootItem);
        return rootItem;
      })["catch"](ibexa.helpers.notification.showErrorNotification);
    }
    return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadTreeRoot)({
      taxonomyName: taxonomyName
    }).then(function (rootResponse) {
      var _rootResponse2 = _slicedToArray(rootResponse, 1),
        rootItem = _rootResponse2[0];
      return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadNode)({
        taxonomyName: taxonomyName,
        entryId: rootItem.id
      }).then(function (nodeResponse) {
        var _treeBuilderModuleRef2;
        rootItem.__children = nodeResponse.__children;
        setInitialItemsState(rootItem);
        (_treeBuilderModuleRef2 = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef2 === void 0 || _treeBuilderModuleRef2.expandItems([buildItem(rootItem)]);
        return rootItem;
      });
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var renderLabel = function renderLabel(item) {
    var internalItem = item.internalItem;
    var id = internalItem.id;
    var name = (0,_common_helpers_languages__WEBPACK_IMPORTED_MODULE_7__.getTranslatedName)(item.internalItem, languageCode);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: "ibexa-tb-row-selected-".concat(moduleId, "-").concat(id),
      className: "c-tt-list-item__link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_name_content_name_content__WEBPACK_IMPORTED_MODULE_11__["default"], {
      searchActive: searchActive,
      searchValue: searchValue,
      name: name
    }), !(0,_common_helpers_languages__WEBPACK_IMPORTED_MODULE_7__.hasTranslation)(internalItem, languageCode) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "warning-triangle",
      extraClasses: "ibexa-icon--small c-tt-list-item__icon-warning"
    }));
  };
  var loadMoreSubitems = function loadMoreSubitems(item) {
    return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadNode)({
      taxonomyName: taxonomyName,
      entryId: item.id
    }).then(function (nodeResponse) {
      var children = nodeResponse.__children;
      var treeItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_6__.findItem)([tree], item.path.split('/'));
      if (treeItem) {
        var nextTree = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tree);
        var nextTreeItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_6__.findItem)([nextTree], item.path.split('/'));
        nextTreeItem.__children = children;
        setTree(nextTree);
      }
      return children;
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var renderEmpty = function renderEmpty() {
    if (!isLoaded || (tree === null || tree === void 0 ? void 0 : tree.id) !== undefined) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_empty_tree_empty_tree__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  };
  var buildItem = function buildItem(item) {
    var restProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return item.internalItem ? item : {
      internalItem: item,
      id: item.id,
      path: (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_5__.getPath)(item, restProps),
      subitems: item.__children,
      total: (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_5__.getTotal)(item),
      renderLabel: renderLabel,
      customItemClass: 'c-tt-list-item'
    };
  };
  var checkIsInputDisabled = function checkIsInputDisabled(item) {
    var unavailableEntriesIds = item.path.split('/').map(function (id) {
      return parseInt(id, 10);
    });
    return unavailableEntriesIds.includes(taxonomyEntryId);
  };
  var getSelectedItemsIds = function getSelectedItemsIds() {
    return selectedItems.map(function (item) {
      return item.id;
    });
  };
  var moduleName = Translator.trans( /*@Desc("Taxonomy tree")*/'taxonomy.tree_name', {}, 'taxonomy_ui');
  var onSearchInputChange = function onSearchInputChange(inputValue) {
    setSearchValue(inputValue.trim());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadTreeToState();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _abortControllerSearc;
    (_abortControllerSearc = abortControllerSearchRef.current) === null || _abortControllerSearc === void 0 || _abortControllerSearc.abort();
    clearTimeout(searchRequestTimeoutRef.current);
    searchRequestTimeoutRef.current = setTimeout(function () {
      if (searchValue.length >= MIN_SEARCH_LENGTH) {
        abortControllerSearchRef.current = new AbortController();
        (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadSearchResults)({
          taxonomyName: taxonomyName,
          searchValue: searchValue,
          languageCode: languageCode,
          signal: abortControllerSearchRef.current.signal
        }).then(function (rootResponse) {
          if (!(rootResponse !== null && rootResponse !== void 0 && rootResponse.length)) {
            setSearchTree(null);
          } else {
            var _treeBuilderModuleRef3;
            var _rootResponse3 = _slicedToArray(rootResponse, 1),
              rootItem = _rootResponse3[0];
            setSearchTree(rootItem);
            var hasSubitems = function hasSubitems(_ref) {
              var subitems = _ref.subitems;
              return !!subitems && subitems.length;
            };
            var allChildren = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_tree__WEBPACK_IMPORTED_MODULE_3__.getAllChildren)({
              data: rootItem,
              buildItem: buildItem,
              condition: hasSubitems
            });
            (_treeBuilderModuleRef3 = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef3 === void 0 || _treeBuilderModuleRef3.expandItems(allChildren);
          }
          setSearchActive(true);
        });
      } else {
        setSearchTree(null);
        setSearchActive(false);
      }
    }, 100);
    return function () {
      clearTimeout(searchRequestTimeoutRef.current);
    };
  }, [searchValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ibexa.modules.TreeBuilder, _extends({
    ref: treeBuilderModuleRef,
    moduleId: moduleId,
    moduleName: moduleName,
    userId: userId,
    subId: taxonomyName,
    tree: tree,
    buildItem: buildItem,
    checkIsInputDisabled: checkIsInputDisabled,
    isActive: function isActive() {
      return false;
    },
    loadMoreSubitems: loadMoreSubitems,
    selectedLimit: isMultiChoice ? undefined : 1,
    dragDisabled: true,
    isResizable: false,
    headerVisible: false,
    actionsVisible: false,
    initiallySelectedItemsIds: selectedItems ? getSelectedItemsIds() : [],
    onSearchInputChange: onSearchInputChange,
    initialSearchValue: searchValue,
    searchVisible: isSearchVisible,
    isLoading: !isLoaded,
    rootSelectionDisabled: rootSelectionDisabled
  }, (0,_common_helpers_search__WEBPACK_IMPORTED_MODULE_8__.getSearchTreeProps)({
    searchTree: searchTree,
    searchActive: searchActive
  })), renderEmpty(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_not_translated_info_not_translated_info__WEBPACK_IMPORTED_MODULE_10__["default"], {
    languageCode: languageCode
  }));
};
SelectIbexaTag.propTypes = {
  moduleId: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  restInfo: PropTypes.shape({
    token: PropTypes.string.isRequired,
    siteaccess: PropTypes.string.isRequired
  }).isRequired,
  taxonomyName: PropTypes.string.isRequired,
  selectedItems: PropTypes.array,
  isMultiChoice: PropTypes.bool,
  languageCode: PropTypes.string,
  taxonomyEntryId: PropTypes.string,
  isSearchVisible: PropTypes.bool,
  rootSelectionDisabled: PropTypes.bool
};
SelectIbexaTag.defaultProps = {
  selectedItems: null,
  isMultiChoice: false,
  languageCode: window.ibexa.adminUiConfig.languages.priority[0],
  taxonomyEntryId: null,
  isSearchVisible: true,
  rootSelectionDisabled: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectIbexaTag);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllChildren: () => (/* binding */ getAllChildren)
/* harmony export */ });
var getAllChildren = function getAllChildren(_ref) {
  var data = _ref.data,
    buildItem = _ref.buildItem,
    condition = _ref.condition;
  var output = [];
  var getAllChildrenHelper = function getAllChildrenHelper() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    items.forEach(function (originalItem) {
      var item = buildItem ? buildItem(originalItem) : originalItem;
      if (condition === undefined || condition(item)) {
        output.push(item);
      }
      getAllChildrenHelper(item.subitems);
    });
  };
  getAllChildrenHelper([data]);
  return output;
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/choice.filter.config.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/taggify.filter.config.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/radio.filter.config.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/price.filter.config.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/daterange.filter.config.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/number.range.filter.config.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/filterConfig/taxonomy.filter.config.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.edit.js"));
/******/ }
]);