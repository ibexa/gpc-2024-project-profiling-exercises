(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-price-edit-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.edit.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.edit.js ***!
  \*******************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc) {
  var productPriceForm = doc.querySelector('.ibexa-pc-product-price-edit-form');
  var currencySubunits = productPriceForm.dataset.currencySubunits;
  var basePriceInput = doc.querySelector('.ibexa-pc-product-price-edit-form__base-price-input');
  var customerBasePriceInputs = doc.querySelectorAll('.ibexa-pc-product-custom-price__customer-base-price-input');
  var customPriceRuleInputs = doc.querySelectorAll('.ibexa-pc-product-custom-price__custom-price-rule-input');
  var customPriceInputs = doc.querySelectorAll('.ibexa-pc-product-custom-price__custom-price-input');
  var updateBasePricesButton = doc.querySelector('.ibexa-pc-product-price-edit-form__update-base-prices-button');
  var markRowCheckboxes = doc.querySelectorAll('.ibexa-pc-product-custom-price__mark-row-checkbox');
  var parseNumberValue = function parseNumberValue(value) {
    var parsedFloatValue = parseFloat(value);
    var fixedFloatValue = parsedFloatValue.toFixed(currencySubunits);
    return Number(fixedFloatValue);
  };
  var isNumberValueValid = function isNumberValueValid(value) {
    return !isNaN(value);
  };
  var setUpdateBasePricesButtonState = function setUpdateBasePricesButtonState() {
    var isAnyCheckboxSelected = _toConsumableArray(markRowCheckboxes).some(function (checkbox) {
      return checkbox.checked;
    });
    updateBasePricesButton.disabled = !isAnyCheckboxSelected;
  };
  var updateBasePrices = function updateBasePrices() {
    var basePriceValue = parseNumberValue(basePriceInput.value);
    if (!isNumberValueValid(basePriceValue)) {
      basePriceInput.classList.add('is-invalid');
      return;
    }
    basePriceInput.classList.remove('is-invalid');
    markRowCheckboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        return;
      }
      var customerBasePriceInput = checkbox.closest('.ibexa-table__row').querySelector('.ibexa-pc-product-custom-price__customer-base-price-input');
      customerBasePriceInput.value = basePriceValue;
      customerBasePriceInput.dispatchEvent(new Event('change'));
    });
  };
  var calculateCustomPrice = function calculateCustomPrice(_ref) {
    var currentTarget = _ref.currentTarget;
    var customerGroupPriceRow = currentTarget.closest('.ibexa-table__row');
    var customerBasePriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__customer-base-price-input');
    var globalPriceRuleInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__global-price-rule-input');
    var customPriceRuleInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-rule-input');
    var customPriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-input');
    var customerBasePriceValue = parseNumberValue(customerBasePriceInput.value);
    var globalPriceRuleValue = parseNumberValue(globalPriceRuleInput.value);
    var customPriceRuleValue = parseNumberValue(customPriceRuleInput.value);
    var isCustomPriceRuleOutOfRange = customPriceRuleValue < -100;
    if (customerBasePriceInput.value === '') {
      customPriceInput.value = '';
      return;
    }
    customerBasePriceInput.classList.toggle('is-invalid', !isNumberValueValid(customerBasePriceValue));
    customPriceRuleInput.classList.toggle('is-invalid', isCustomPriceRuleOutOfRange);
    if (!isNumberValueValid(customerBasePriceValue) || isCustomPriceRuleOutOfRange) {
      return;
    }
    var priceRuleValue = isNumberValueValid(customPriceRuleValue) ? customPriceRuleValue : globalPriceRuleValue;
    var discount = customerBasePriceValue * priceRuleValue / 100;
    var calculatedPrice = parseNumberValue(customerBasePriceValue + discount);
    customPriceInput.value = calculatedPrice;
    customPriceInput.classList.remove('is-invalid');
  };
  var calculateCustomPriceRule = function calculateCustomPriceRule(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var customerGroupPriceRow = currentTarget.closest('.ibexa-table__row');
    var customerBasePriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__customer-base-price-input');
    var customPriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-input');
    var customPriceRuleInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-rule-input');
    var globalPriceRuleCell = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__global-price-rule-cell');
    var customerBasePriceValue = parseNumberValue(customerBasePriceInput.value);
    var customPriceValue = parseNumberValue(customPriceInput.value);
    if (customPriceInput.value === '') {
      customPriceRuleInput.value = '';
      globalPriceRuleCell.classList.remove('ibexa-pc-product-custom-price__global-price-rule-cell--unused');
      return;
    }
    customerBasePriceInput.classList.toggle('is-invalid', !isNumberValueValid(customerBasePriceValue));
    customPriceInput.classList.toggle('is-invalid', !isNumberValueValid(customPriceValue));
    if (!isNumberValueValid(customerBasePriceValue) || !isNumberValueValid(customPriceValue)) {
      return;
    }
    var percentageCustomPriceOfBasePrice = parseNumberValue(customPriceValue / customerBasePriceValue * 100);
    var customPriceRule = parseNumberValue(percentageCustomPriceOfBasePrice - 100);
    customPriceRuleInput.value = customPriceRule;
    customPriceRuleInput.dispatchEvent(new Event('change'));
  };
  var toggleGlobalPriceState = function toggleGlobalPriceState(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var customPriceRuleInput = currentTarget;
    var customPriceRuleValue = parseNumberValue(customPriceRuleInput.value);
    var customerGroupPriceRow = customPriceRuleInput.closest('.ibexa-table__row');
    var globalPriceRuleCell = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__global-price-rule-cell');
    globalPriceRuleCell.classList.toggle('ibexa-pc-product-custom-price__global-price-rule-cell--unused', isNumberValueValid(customPriceRuleValue));
  };
  customerBasePriceInputs.forEach(function (customerBasePriceInput) {
    customerBasePriceInput.addEventListener('change', calculateCustomPrice, false);
    customerBasePriceInput.addEventListener('input', calculateCustomPrice, false);
  });
  customPriceInputs.forEach(function (customPriceInput) {
    customPriceInput.addEventListener('change', calculateCustomPriceRule, false);
    customPriceInput.addEventListener('input', calculateCustomPriceRule, false);
  });
  customPriceRuleInputs.forEach(function (customPriceRuleInput) {
    customPriceRuleInput.addEventListener('change', function (event) {
      calculateCustomPrice(event);
      toggleGlobalPriceState(event);
    }, false);
    customPriceRuleInput.addEventListener('input', function (event) {
      calculateCustomPrice(event);
      toggleGlobalPriceState(event);
    }, false);
  });
  markRowCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', setUpdateBasePricesButtonState, false);
  });
  updateBasePricesButton.addEventListener('click', updateBasePrices, false);
  setUpdateBasePricesButtonState();
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.edit.js"));
/******/ }
]);