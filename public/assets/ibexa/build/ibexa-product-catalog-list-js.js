(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-list-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/sidebar/extra.actions.js":
/*!*************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/sidebar/extra.actions.js ***!
  \*************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, ibexa) {
  var CLASS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_EXPANDED = 'ibexa-context-menu--expanded';
  var CLASS_PREVENT_SHOW = 'ibexa-extra-actions--prevent-show';
  var btns = _toConsumableArray(doc.querySelectorAll('.ibexa-btn--extra-actions'));
  var menu = doc.querySelector('.ibexa-context-menu');
  var backdrop = new ibexa.core.Backdrop();
  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };
  var removeBackdrop = function removeBackdrop() {
    backdrop.hide();
    doc.body.classList.remove('ibexa-scroll-disabled');
  };
  var closeExtraActions = function closeExtraActions(actions) {
    actions.classList.add(CLASS_HIDDEN);
    if (menu) {
      menu.classList.remove(CLASS_EXPANDED);
    }
    doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:after-close'));
    removeBackdrop();
  };
  var toggleExtraActionsWidget = function toggleExtraActionsWidget(widgetData) {
    var actions = doc.querySelector(".ibexa-extra-actions[data-actions=\"".concat(widgetData.actions, "\"]"));
    if (widgetData.validate && !parseInt(widgetData.isFormValid, 10)) {
      return;
    }
    var isHidden = haveHiddenPart(actions);
    var focusElement = actions.querySelector(widgetData.focusElement);
    var detectClickOutside = function detectClickOutside(event) {
      if (event.target.classList.contains('ibexa-backdrop')) {
        closeExtraActions(actions);
        doc.body.removeEventListener('click', detectClickOutside, false);
      }
    };
    actions.classList.toggle(CLASS_HIDDEN, !isHidden);
    if (menu) {
      menu.classList.toggle(CLASS_EXPANDED, isHidden);
    }
    if (!actions.classList.contains(CLASS_HIDDEN)) {
      backdrop.show();
      doc.body.addEventListener('click', detectClickOutside, false);
      doc.body.classList.add('ibexa-scroll-disabled');
    } else {
      doc.body.removeEventListener('click', detectClickOutside);
      removeBackdrop();
    }
    if (focusElement) {
      focusElement.focus();
    }
  };
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleExtraActionsWidget(btn.dataset);
    }, false);
  });
  doc.body.addEventListener('ibexa-extra-actions:toggle-widget', function (event) {
    return toggleExtraActionsWidget(event.detail);
  }, false);
  doc.querySelectorAll('.ibexa-extra-actions .ibexa-btn--close').forEach(function (closeBtn) {
    return closeBtn.addEventListener('click', function (event) {
      closeExtraActions(event.currentTarget.closest('.ibexa-extra-actions'));
    }, false);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/base.list.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/base.list.js ***!
  \**********************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc) {
  var inputsTriggeringSubmitOnChange = doc.querySelectorAll('.ibexa-pc-search__input--trigger-submit-after-change');
  var removeBtn = doc.querySelector('.ibexa-pc-data-grid__delete-btn');
  var copyBtns = doc.querySelectorAll('.ibexa-pc-data-grid__copy-btn');
  var markRowCheckboxes = doc.querySelectorAll('.ibexa-pc-data-grid__mark-row-checkbox');
  var searchForm = doc.querySelector('.ibexa-pc-search__form');
  var searchSortOrderSelect = doc.querySelector('.ibexa-pc-search__sort-order-select');
  var dataGridSortOrderSelect = doc.querySelector('.ibexa-pc-data-grid__sort-order-select');
  var setRemoveBtnState = function setRemoveBtnState() {
    var isAnyCheckboxSelected = _toConsumableArray(markRowCheckboxes).some(function (checkbox) {
      return checkbox.checked;
    });
    removeBtn.toggleAttribute('disabled', !isAnyCheckboxSelected);
  };
  var sortResults = function sortResults(_ref) {
    var currentTarget = _ref.currentTarget;
    var sortOrderValue = currentTarget.value;
    searchSortOrderSelect.value = sortOrderValue;
    searchForm.submit();
  };
  var setSourceIdValue = function setSourceIdValue(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var _currentTarget$datase = currentTarget.dataset,
      copySourceId = _currentTarget$datase.copySourceId,
      targetInputSelector = _currentTarget$datase.targetInputSelector;
    var targetInput = doc.querySelector(targetInputSelector);
    targetInput.value = copySourceId;
  };
  markRowCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', setRemoveBtnState, false);
  });
  inputsTriggeringSubmitOnChange.forEach(function (input) {
    input.addEventListener('change', function () {
      searchForm.submit();
    }, false);
  });
  copyBtns.forEach(function (copyBtn) {
    copyBtn.addEventListener('click', setSourceIdValue, false);
  });
  if (searchSortOrderSelect && dataGridSortOrderSelect) {
    dataGridSortOrderSelect.addEventListener('change', sortResults, false);
  }
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/base.list.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/sidebar/extra.actions.js"));
/******/ }
]);