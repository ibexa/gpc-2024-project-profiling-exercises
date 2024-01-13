(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-attribute-definition-edit-js"],{

/***/ "./vendor/ibexa/measurement/src/bundle/Resources/public/js/admin.settings.measurement.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/measurement/src/bundle/Resources/public/js/admin.settings.measurement.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc) {
  var getContainer = function getContainer(node) {
    return node.closest('.ibexa-collapse--field-definition') || node.closest('.ibexa-pc-edit__form');
  };
  var updateBaseUnit = function updateBaseUnit(_ref) {
    var currentTarget = _ref.currentTarget;
    var container = getContainer(currentTarget);
    var unitList = container.querySelector(".ibexa-measurement-unit__original-dropdown .ibexa-input--select [label=\"".concat(currentTarget.value, "\"]"));
    var sourceDropdownSelect = container.querySelector('.ibexa-measurement-unit__dropdown-wrapper .ibexa-input--select');
    sourceDropdownSelect.innerHTML = '';
    unitList.querySelectorAll('option').forEach(function (option) {
      var renderedOption = "<option value=\"".concat(option.value, "\">").concat(option.innerHTML, "</option>");
      sourceDropdownSelect.insertAdjacentHTML('beforeend', renderedOption);
    });
  };
  var showInputType = function showInputType(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var container = getContainer(currentTarget);
    var simpleInputSelected = currentTarget.value === '0';
    container.querySelector('.ibexa-measurement-sign').classList.toggle('ibexa-measurement-sign--hidden', !simpleInputSelected);
    container.querySelector('.ibexa-measurement-default-value--simple').classList.toggle('ibexa-measurement-default-value--hidden', !simpleInputSelected);
    container.querySelector('.ibexa-measurement-default-value--range').classList.toggle('ibexa-measurement-default-value--hidden', simpleInputSelected);
  };
  var updateUnitLabels = function updateUnitLabels(unitSelect) {
    var container = getContainer(unitSelect);
    var unit = unitSelect.querySelector("[value=\"".concat(unitSelect.value, "\"]")).innerHTML;
    [container.querySelector('.ibexa-measurement-form-number--minimum'), container.querySelector('.ibexa-measurement-form-number--maximum')].concat(_toConsumableArray(container.querySelectorAll('.ibexa-measurement-form-number--default-value'))).forEach(function (numberWrapper) {
      if (!numberWrapper) {
        return;
      }
      numberWrapper.querySelector('.ibexa-measurement-form-number__unit-wrapper').innerHTML = unit;
    });
  };
  var setUnit = function setUnit(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var container = getContainer(currentTarget);
    var unitList = container.querySelector('.ibexa-measurement-unit__original-dropdown .ibexa-input--select');
    var unit = currentTarget.value;
    unitList.value = unit;
  };
  var addEventsListeners = function addEventsListeners(container) {
    var typeSelect = container.querySelector('.ibexa-measurement-type .ibexa-input--select');
    var inputTypeSelect = container.querySelector('.ibexa-measurement-input-type .ibexa-input--select');
    var unitSelect = container.querySelector('.ibexa-measurement-unit__dropdown-wrapper .ibexa-input--select');
    var minValueInput = container.querySelector('.ibexa-measurement-form-number--minimum .ibexa-input');
    var maxValueInput = container.querySelector('.ibexa-measurement-form-number--maximum .ibexa-input');
    var defaultRangeMinValueInput = container.querySelector('.ibexa-measurement-default-value--range .ibexa-measurement-form-number__input-wrapper--min .ibexa-input');
    var defaultRangeMaxValueInput = container.querySelector('.ibexa-measurement-default-value--range .ibexa-measurement-form-number__input-wrapper--max .ibexa-input');
    typeSelect.addEventListener('change', updateBaseUnit, false);
    inputTypeSelect === null || inputTypeSelect === void 0 || inputTypeSelect.addEventListener('change', showInputType, false);
    unitSelect.addEventListener('change', function (_ref4) {
      var currentTarget = _ref4.currentTarget;
      return updateUnitLabels(currentTarget);
    }, false);
    unitSelect.addEventListener('change', setUnit, false);
    minValueInput === null || minValueInput === void 0 || minValueInput.addEventListener('change', function () {
      defaultRangeMinValueInput.min = minValueInput.value;
      defaultRangeMaxValueInput.min = minValueInput.value;
    }, false);
    maxValueInput === null || maxValueInput === void 0 || maxValueInput.addEventListener('change', function () {
      defaultRangeMinValueInput.max = maxValueInput.value;
      defaultRangeMaxValueInput.max = maxValueInput.value;
    }, false);
    updateUnitLabels(unitSelect);
  };
  doc.querySelectorAll('.ibexa-measurement-type').forEach(function (typeNode) {
    addEventsListeners(getContainer(typeNode));
  });
  doc.body.addEventListener('ibexa-drop-field-definition', function (event) {
    var nodes = event.detail.nodes;
    nodes.forEach(function (container) {
      if (!container.querySelector('.ibexa-measurement-type')) {
        return;
      }
      addEventsListeners(container);
    });
  }, false);
})(window, document);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attribute.selection.edit.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attribute.selection.edit.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var ADDED_OPTION_TIMEOUT = 200;
  var SCROLL_OPTION_OFFSET = 100;
  var SELECTOR_OPTIONS_CONTAINER = '.ibexa-pc-attribute-selection-options';
  var scrolledContentNode = doc.querySelector('.ibexa-edit-content');
  var addOptionBtn = doc.querySelector('.ibexa-pc-attribute-selection-options__add-option-btn');
  var removeOptionsBtn = doc.querySelector('.ibexa-pc-attribute-selection-options__remove-options-btn');
  var optionsNodes = doc.querySelectorAll('.ibexa-pc-attribute-selection-options__option');
  var removeOptionNode = function removeOptionNode(referenceNode) {
    var optionRow = referenceNode.closest('.ibexa-pc-attribute-selection-options__option');
    optionRow.remove();
  };
  var toggleRemoveOptionsBtn = function toggleRemoveOptionsBtn(_ref) {
    var currentTarget = _ref.currentTarget;
    var container = currentTarget.closest(SELECTOR_OPTIONS_CONTAINER);
    var removeOptionCheckedCheckboxes = container.querySelectorAll('.ibexa-pc-attribute-selection-options__remove-option-checkbox:checked');
    removeOptionsBtn.disabled = !removeOptionCheckedCheckboxes.length;
  };
  var addOption = function addOption(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var lastOption = doc.querySelector('.ibexa-pc-attribute-selection-options__option:last-of-type');
    var lastOptionRect = lastOption === null || lastOption === void 0 ? void 0 : lastOption.getBoundingClientRect();
    var currentScrollPosition = scrolledContentNode.scrollTop;
    var updatedScrollPosition = lastOptionRect ? lastOptionRect.y + SCROLL_OPTION_OFFSET : currentScrollPosition + SCROLL_OPTION_OFFSET;
    var container = currentTarget.closest(SELECTOR_OPTIONS_CONTAINER);
    var optionsList = container.querySelector('.ibexa-pc-attribute-selection-options__list');
    var nextId = parseInt(optionsList.dataset.nextOptionId, 10) || 0;
    var optionTemplate = optionsList.dataset.optionTemplate;
    var filledOptionTemplate = optionTemplate.replaceAll('__name__', nextId);
    optionsList.dataset.nextOptionId = nextId + 1;
    optionsList.insertAdjacentHTML('beforeend', filledOptionTemplate);
    var addedOptionNode = optionsList.querySelector('.ibexa-pc-attribute-selection-options__option:last-of-type');
    attachListenersToOption(addedOptionNode);
    addedOptionNode.classList.add('ibexa-pc-attribute-selection-options__option--added');
    scrolledContentNode.scrollTop = updatedScrollPosition;
    setTimeout(function () {
      addedOptionNode.classList.remove('ibexa-pc-attribute-selection-options__option--added');
    }, ADDED_OPTION_TIMEOUT);
    doc.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
    doc.body.dispatchEvent(new CustomEvent('ibexa-pc-edit-form-added-field', {
      detail: {
        inputsContainer: addedOptionNode
      }
    }));
  };
  var removeOptions = function removeOptions(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var container = currentTarget.closest(SELECTOR_OPTIONS_CONTAINER);
    var removeOptionCheckedCheckboxes = container.querySelectorAll('.ibexa-pc-attribute-selection-options__remove-option-checkbox:checked');
    removeOptionCheckedCheckboxes.forEach(removeOptionNode);
    removeOptionsBtn.disabled = true;
  };
  var removeSingleOption = function removeSingleOption(_ref4) {
    var currentTarget = _ref4.currentTarget;
    return removeOptionNode(currentTarget);
  };
  var attachListenersToOption = function attachListenersToOption(optionNode) {
    var removeOptionCheckbox = optionNode.querySelector('.ibexa-pc-attribute-selection-options__remove-option-checkbox');
    var removeOptionBtn = optionNode.querySelector('.ibexa-pc-attribute-selection-options__remove-option-btn');
    var sourceInput = optionNode.querySelector('.ibexa-pc-attribute-selection-options__option-label-input');
    var targetInput = optionNode.querySelector('.ibexa-pc-attribute-selection-options__option-value-input');
    var optionValueAutogenerator = new ibexa.core.SlugValueInputAutogenerator({
      sourceInput: sourceInput,
      targetInput: targetInput
    });
    optionValueAutogenerator.init();
    removeOptionCheckbox.addEventListener('change', toggleRemoveOptionsBtn, false);
    removeOptionBtn.addEventListener('click', removeSingleOption, false);
  };
  addOptionBtn === null || addOptionBtn === void 0 || addOptionBtn.addEventListener('click', addOption, false);
  removeOptionsBtn === null || removeOptionsBtn === void 0 || removeOptionsBtn.addEventListener('click', removeOptions, false);
  optionsNodes.forEach(attachListenersToOption);
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attribute.selection.edit.js"), __webpack_exec__("./vendor/ibexa/measurement/src/bundle/Resources/public/js/admin.settings.measurement.js"));
/******/ }
]);