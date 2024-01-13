(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-catalog-block-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.block.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.block.js ***!
  \**************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var container = doc.querySelector('.ibexa-catalog-block-options');
  var addOptionBtn = container.querySelector('.ibexa-catalog-block-options__add-btn');
  var removeOptionsBtn = container.querySelector('.ibexa-catalog-block-options__remove-btn');
  var optionsContainer = container.querySelector('.ibexa-catalog-block-options__container');
  var optionsList = optionsContainer.querySelector('.ibexa-catalog-block-options__list');
  var optionsNodes = optionsList.querySelectorAll('.ibexa-catalog-block-options__option');
  var noOptionsContainer = container.querySelector('.ibexa-catalog-block-options__no-options');
  var OPTIONS_LIST_HEADERS_HIDDEN_CLASS = 'ibexa-catalog-block-options__list-labels--hidden';
  var INIT_OPTIONS_LIST_LENGTH = 0;
  var FIRST_OPTION_ID = 0;
  var dropdownsInit = function dropdownsInit(templateId, nextIndex) {
    var option = container.querySelector("#".concat(templateId, "_").concat(nextIndex));
    var dropdowns = option.querySelectorAll('.ibexa-dropdown');
    dropdowns.forEach(function (dropdownContainer) {
      var dropdown = new ibexa.core.Dropdown({
        container: dropdownContainer
      });
      dropdown.init();
    });
  };
  var addOption = function addOption() {
    var _optionsContainer$dat = optionsContainer.dataset,
      optionTemplate = _optionsContainer$dat.optionTemplate,
      templateId = _optionsContainer$dat.templateId,
      nextIndexId = _optionsContainer$dat.nextIndexId;
    var nextIndex = parseInt(nextIndexId, 10) || FIRST_OPTION_ID;
    var filledOptionTemplate = optionTemplate.replaceAll('__name__', nextIndex);
    optionsContainer.dataset.nextIndexId = nextIndex + 1;
    optionsList.insertAdjacentHTML('beforeend', filledOptionTemplate);
    attachListenersToOption(optionsList.lastElementChild);
    dropdownsInit(templateId, nextIndex);
    if (optionsList.children.length > INIT_OPTIONS_LIST_LENGTH) {
      optionsContainer.classList.remove(OPTIONS_LIST_HEADERS_HIDDEN_CLASS);
    }
  };
  var removeOptionNode = function removeOptionNode(referenceNode) {
    var optionRow = referenceNode.closest('.ibexa-catalog-block-options__option');
    optionRow.remove();
    if (optionsList.children.length === INIT_OPTIONS_LIST_LENGTH) {
      optionsContainer.classList.add(OPTIONS_LIST_HEADERS_HIDDEN_CLASS);
    }
  };
  var toggleRemoveOptionsBtn = function toggleRemoveOptionsBtn() {
    var removeOptionCheckedCheckboxes = container.querySelectorAll('.ibexa-catalog-block-options__remove-option-checkbox:checked');
    removeOptionsBtn.disabled = !removeOptionCheckedCheckboxes.length;
  };
  var removeOptions = function removeOptions() {
    var removeOptionCheckedCheckboxes = container.querySelectorAll('.ibexa-catalog-block-options__remove-option-checkbox:checked');
    removeOptionCheckedCheckboxes.forEach(removeOptionNode);
    removeOptionsBtn.disabled = true;
  };
  var removeSingleOption = function removeSingleOption(_ref) {
    var currentTarget = _ref.currentTarget;
    return removeOptionNode(currentTarget);
  };
  var attachListenersToOption = function attachListenersToOption(optionNode) {
    var removeOptionCheckbox = optionNode.querySelector('.ibexa-catalog-block-options__remove-option-checkbox');
    var removeOptionBtn = optionNode.querySelector('.ibexa-catalog-block-options__remove-option-btn');
    removeOptionCheckbox.addEventListener('change', toggleRemoveOptionsBtn, false);
    removeOptionBtn.addEventListener('click', removeSingleOption, false);
  };
  var init = function init() {
    optionsContainer.classList.toggle(OPTIONS_LIST_HEADERS_HIDDEN_CLASS, noOptionsContainer);
    if (optionsList.children.length === INIT_OPTIONS_LIST_LENGTH && !noOptionsContainer) {
      addOption();
    }
    optionsNodes.forEach(attachListenersToOption);
  };
  addOptionBtn === null || addOptionBtn === void 0 || addOptionBtn.addEventListener('click', addOption, false);
  removeOptionsBtn === null || removeOptionsBtn === void 0 || removeOptionsBtn.addEventListener('click', removeOptions, false);
  init();
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.block.js"));
/******/ }
]);