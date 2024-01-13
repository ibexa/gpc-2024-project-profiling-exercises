"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-scenarios-edit-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/category.path.select.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/category.path.select.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryPathSelect: () => (/* binding */ CategoryPathSelect)
/* harmony export */ });
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CategoryPathSelect = /*#__PURE__*/function () {
  function CategoryPathSelect() {
    var _options$onAdd, _options$onRemove;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, CategoryPathSelect);
    if (!options.container) {
      console.error('Missing some CategoryPathSelect options.');
      return;
    }
    this.onAdd = (_options$onAdd = options.onAdd) !== null && _options$onAdd !== void 0 ? _options$onAdd : function () {};
    this.onRemove = (_options$onRemove = options.onRemove) !== null && _options$onRemove !== void 0 ? _options$onRemove : function () {};
    this.container = options.container;
    this.isSingleSelect = this.container.classList.contains('ibexa-perso-category-path-select--single-select');
    this.udwBtn = this.container.querySelector('.ibexa-perso-category-path-select__add-path-udw-btn');
    this.customPathInput = this.container.querySelector('.ibexa-perso-category-path-select__custom-path-input');
    this.customPathAddBtn = this.container.querySelector('.ibexa-perso-category-path-select__add-custom-path-btn');
    this.tagsContainer = this.container.querySelector('.ibexa-perso-scenario-preview__tags');
    this.udwRoot = null;
    this.udwConfig = JSON.parse(this.udwBtn.dataset.udwConfig);
    this.udwTitle = this.udwBtn.dataset.udwTitle;
    this.tagTemplate = this.container.dataset.tagTemplate;
    this.handleUdwConfirm = this.handleUdwConfirm.bind(this);
    this.handleUdwCancel = this.handleUdwCancel.bind(this);
  }
  _createClass(CategoryPathSelect, [{
    key: "init",
    value: function init() {
      var _this = this;
      var tags = this.tagsContainer.querySelectorAll('.ibexa-tag');
      tags.forEach(function (tag) {
        return _this.attachTagEvents(tag);
      });
      this.udwBtn.addEventListener('click', function () {
        return _this.openUDW();
      }, false);
      this.customPathAddBtn.addEventListener('click', function () {
        return _this.handleCustomPathAdd();
      }, false);
      this.customPathInput.addEventListener('input', function () {
        _this.customPathAddBtn.disabled = _this.customPathInput.value === '';
      }, false);
    }
  }, {
    key: "openUDW",
    value: function openUDW() {
      var udwContainer = document.getElementById('react-udw');
      this.udwRoot = window.ReactDOM.createRoot(udwContainer);
      this.udwRoot.render(window.React.createElement(window.ibexa.modules.UniversalDiscovery, _objectSpread({
        title: this.udwTitle,
        onConfirm: this.handleUdwConfirm,
        onCancel: this.handleUdwCancel
      }, this.udwConfig)));
    }
  }, {
    key: "closeUDW",
    value: function closeUDW() {
      this.udwRoot.unmount();
    }
  }, {
    key: "handleUdwCancel",
    value: function handleUdwCancel() {
      this.closeUDW();
    }
  }, {
    key: "handleUdwConfirm",
    value: function handleUdwConfirm(selectedLocation) {
      var _this2 = this;
      var _window$ibexa$helpers = window.ibexa.helpers.location,
        removeRootFromPathString = _window$ibexa$helpers.removeRootFromPathString,
        findLocationsByIds = _window$ibexa$helpers.findLocationsByIds,
        buildLocationsBreadcrumbs = _window$ibexa$helpers.buildLocationsBreadcrumbs;
      var _selectedLocation = _slicedToArray(selectedLocation, 1),
        pathString = _selectedLocation[0].pathString;
      this.closeUDW();
      findLocationsByIds(removeRootFromPathString(pathString), function (locations) {
        return _this2.addTag(buildLocationsBreadcrumbs(locations), pathString);
      });
    }
  }, {
    key: "handleCustomPathAdd",
    value: function handleCustomPathAdd() {
      var value = this.customPathInput.value;
      this.addTag(value, value);
      this.customPathInput.value = '';
      this.customPathAddBtn.disabled = true;
    }
  }, {
    key: "addTag",
    value: function addTag(label, value) {
      if (this.isSingleSelect) {
        var existingTag = this.tagsContainer.querySelector('.ibexa-tag');
        if (existingTag) {
          this.removeTag(existingTag);
        }
      }
      var renderedTemplate = this.tagTemplate.replaceAll('{{ label }}', label);
      this.tagsContainer.insertAdjacentHTML('beforeend', renderedTemplate);
      var insertedTag = this.tagsContainer.querySelector('.ibexa-tag:last-of-type');
      insertedTag.dataset.value = value;
      this.attachTagEvents(insertedTag);
      this.onAdd(value);
      window.ibexa.helpers.ellipsis.middle.parseAll();
    }
  }, {
    key: "attachTagEvents",
    value: function attachTagEvents(tag) {
      var _this3 = this;
      var tagRemoveBtn = tag.querySelector('.ibexa-tag__remove-btn');
      tagRemoveBtn.addEventListener('click', function () {
        return _this3.removeTag(tag);
      }, false);
    }
  }, {
    key: "removeTag",
    value: function removeTag(tag) {
      var tagValue = tag.dataset.value;
      tag.remove();
      this.onRemove(tagValue);
    }
  }, {
    key: "toggleDisabled",
    value: function toggleDisabled(isDisabled) {
      this.container.classList.toggle('ibexa-perso-category-path-select--disabled', isDisabled);
      this.udwBtn.disabled = isDisabled;
      this.customPathInput.disabled = isDisabled;
      this.customPathAddBtn.disabled = isDisabled || this.customPathInput.value === '';
      var tag = this.tagsContainer.querySelector('.ibexa-tag');
      if (tag) {
        var tagRemoveBtn = tag.querySelector('.ibexa-tag__remove-btn');
        tagRemoveBtn.disabled = isDisabled;
      }
    }
  }]);
  return CategoryPathSelect;
}();

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.edit.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.edit.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_category_path_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/category.path.select */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/category.path.select.js");

(function (doc, ibexa, bootstrap) {
  var activeSettingsState = {
    selectedRadioName: null,
    includeParentChecked: false,
    levelsValue: null,
    categoryLevelsValue: null
  };
  var activeModal = null;
  var sourceDraggedModel = '';
  var TIMEOUT_REMOVE_HIGHLIGHT = 3000;
  var SELECTOR_SETTINGS_RADIO = '.ibexa-input--radio';
  var SELECTOR_SETTINGS_INCLUDE_PARENT = '.ibexa-modal__input--include-parent';
  var SELECTOR_SETTINGS_LEVELS = '.ibexa-modal__input--levels';
  var SELECTOR_SETTINGS_CATEGORY_LEVELS = '.ibexa-modal__input--category-levels';
  var modalRadioInputs = doc.querySelectorAll('.ibexa-modal .ibexa-input--radio');
  var dropPlaceholders = doc.querySelectorAll('.ibexa-perso-scenario-strategy-placeholder');
  var draggedModels = doc.querySelectorAll('.ibexa-perso-strategy-sidebar-item, .ibexa-perso-strategy-model');
  var actionCheckboxes = doc.querySelectorAll('.ibexa-perso-scenario-edit__checkbox--with-subfields .ibexa-input--checkbox');
  var categoryPathCheckbox = doc.querySelector('.ibexa-perso-scenario-edit__checkbox--with-category-path .ibexa-input--checkbox');
  var openModalBtns = doc.querySelectorAll('.ibexa-perso-strategy-models__open-modal-button');
  var discardSettingsBtns = doc.querySelectorAll('.ibexa-modal__discard-settings-button');
  var removeStrategyModelBtns = doc.querySelectorAll('.ibexa-perso-scenario-strategy-edit__remove-model-button');
  var filterFieldInput = doc.querySelector('.ibexa-perso-strategy-sidebar__search-bar .ibexa-input');
  var categoryPathSelectContainer = doc.querySelector('.ibexa-perso-category-path-select');
  var form = doc.querySelector('.ibexa-scenario-edit-form');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
  var categoryPathSelect = null;
  var dataTypeDropdownsMap = new Map();
  var contextDropdownsMap = new Map();
  var dataTypeDropdownsContainers = doc.querySelectorAll('.ibexa-perso-strategy-model__select-submodels-container .ibexa-dropdown--custom-init');
  var contextDropdownsContainers = doc.querySelectorAll('.ibexa-perso-strategy-model__select-context-container .ibexa-dropdown--custom-init');
  var prerenderedStrategyModels = doc.querySelectorAll('.ibexa-perso-strategy-model:not(.ibexa-perso-strategy-model--hidden)');
  var initializeDropdown = function initializeDropdown(dropdownContainer, dropdownsMap) {
    var dropdown = new ibexa.core.Dropdown({
      container: dropdownContainer
    });
    dropdown.init();
    dropdownsMap.set(dropdownContainer, dropdown);
  };
  var initializeDataTypeDropdown = function initializeDataTypeDropdown(dropdownContainer) {
    initializeDropdown(dropdownContainer, dataTypeDropdownsMap);
  };
  var initializeContextDropdown = function initializeContextDropdown(dropdownContainer) {
    initializeDropdown(dropdownContainer, contextDropdownsMap);
  };
  var adjustDataTypeDropdownSelection = function adjustDataTypeDropdownSelection(dropdownContainer, allowedValues) {
    var optionToSelect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var forceNoSelect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var dropdown = dataTypeDropdownsMap.get(dropdownContainer);
    var allItems = dropdown.itemsListContainer.querySelectorAll('[data-value]');
    if (!forceNoSelect) {
      if (optionToSelect) {
        dropdown.selectOption(optionToSelect);
      } else {
        dropdown.selectFirstOption();
      }
    }
    allItems.forEach(function (item) {
      var shouldBeVisible = !allowedValues || allowedValues.includes(item.dataset.value);
      item.classList.toggle('ibexa-dropdown__item--hidden', !shouldBeVisible);
    });
  };
  var adjustDataTypeDropdownVisibility = function adjustDataTypeDropdownVisibility(dropdownContainer, allowedValues) {
    var submodelsContainer = dropdownContainer.closest('.ibexa-perso-strategy-model__select-submodels-container');
    var hasOnlyOneOption = (allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.length) === 1;
    submodelsContainer.classList.toggle('d-none', hasOnlyOneOption);
  };
  var adjustContextDropdownSelection = function adjustContextDropdownSelection(dropdownContainer, optionToSelect) {
    var dropdown = contextDropdownsMap.get(dropdownContainer);
    if (optionToSelect) {
      dropdown.selectOption(optionToSelect);
    } else {
      dropdown.selectFirstOption();
    }
  };
  var removeErrorMessages = function removeErrorMessages(strategyContainer) {
    var errorMessages = strategyContainer.querySelectorAll('.ibexa-form-error');
    errorMessages.forEach(function (errorMessage) {
      return errorMessage.remove();
    });
  };
  var getStrategyAllowedValues = function getStrategyAllowedValues(strategyElement) {
    return JSON.parse(strategyElement.dataset.dataTypeSupportedValues);
  };
  var onCheckboxChangeValue = function onCheckboxChangeValue(event) {
    var _event$currentTarget = event.currentTarget,
      checked = _event$currentTarget.checked,
      dataset = _event$currentTarget.dataset;
    var container = event.currentTarget.closest('.ibexa-perso-scenario-edit__checkbox--with-subfields');
    var inputs = container.querySelectorAll('.ibexa-perso-scenario-edit__checkbox-input');
    if (dataset.relatedId) {
      doc.querySelectorAll("[data-related=\"".concat(dataset.relatedId, "\"]")).forEach(function (relatedCheckbox) {
        relatedCheckbox.disabled = !checked;
        if (!checked) {
          relatedCheckbox.checked = false;
        }
      });
    }
    inputs.forEach(function (input) {
      input.disabled = !checked;
    });
  };
  var discardSettings = function discardSettings() {
    var radioNode = activeModal.querySelector("[name=\"".concat(activeSettingsState.selectedRadioName, "\"]"));
    var includeParentCheckbox = activeModal.querySelector(SELECTOR_SETTINGS_INCLUDE_PARENT);
    var levelsInput = activeModal.querySelector(SELECTOR_SETTINGS_LEVELS);
    var categoryLevelsInput = activeModal.querySelector(SELECTOR_SETTINGS_CATEGORY_LEVELS);
    radioNode.click();
    if (includeParentCheckbox.checked !== activeSettingsState.includeParentChecked) {
      includeParentCheckbox.click();
    }
    levelsInput.value = activeSettingsState.levelsValue;
    categoryLevelsInput.value = activeSettingsState.categoryLevelsValue;
  };
  var saveSettingsState = function saveSettingsState() {
    if (activeModal) {
      var radioNode = activeModal.querySelector("".concat(SELECTOR_SETTINGS_RADIO, ":checked"));
      var includeParentCheckbox = activeModal.querySelector(SELECTOR_SETTINGS_INCLUDE_PARENT);
      var levelsInput = activeModal.querySelector(SELECTOR_SETTINGS_LEVELS);
      var categoryLevelsInput = activeModal.querySelector(SELECTOR_SETTINGS_CATEGORY_LEVELS);
      activeSettingsState = {
        selectedRadioName: radioNode ? radioNode.name : null,
        includeParentChecked: includeParentCheckbox.checked,
        levelsValue: levelsInput.value,
        categoryLevelsValue: categoryLevelsInput.value
      };
    }
  };
  var openModal = function openModal(event) {
    var strategyModalSelector = event.currentTarget.dataset.strategyModalSelector;
    activeModal = doc.querySelector(strategyModalSelector);
    saveSettingsState();
    bootstrap.Modal.getOrCreateInstance(strategyModalSelector).show();
  };
  var toggleStrategyPlaceholder = function toggleStrategyPlaceholder(strategyModel, isModelPresent) {
    var placeholder = strategyModel.nextElementSibling;
    strategyModel.classList.toggle('ibexa-perso-strategy-model--hidden', !isModelPresent);
    placeholder.classList.toggle('ibexa-perso-scenario-strategy-placeholder--hidden', isModelPresent);
    placeholder.classList.toggle('ibexa-perso-scenario-strategy-placeholder--anchored', !isModelPresent);
  };
  var removeStrategyModel = function removeStrategyModel(event) {
    var container = event.currentTarget.closest('.ibexa-perso-strategy-model');
    var iconContainer = container.querySelector('.ibexa-perso-strategy-model__icon');
    var toggleStrategyPlaceholderAfterRemove = function toggleStrategyPlaceholderAfterRemove() {
      container.classList.remove('ibexa-perso-strategy-model--removed');
      container.removeEventListener('animationend', toggleStrategyPlaceholderAfterRemove, false);
      toggleStrategyPlaceholder(container, false);
    };
    iconContainer.classList.add('d-none');
    setContainerData({
      container: container,
      showSettings: false
    });
    removeErrorMessages(container);
    container.classList.add('ibexa-perso-strategy-model--removed');
    container.addEventListener('animationend', toggleStrategyPlaceholderAfterRemove, false);
  };
  var setContainerData = function setContainerData(_ref) {
    var container = _ref.container,
      _ref$dataset = _ref.dataset,
      dataset = _ref$dataset === void 0 ? {} : _ref$dataset,
      showSettings = _ref.showSettings,
      _ref$dataTypeOptionTo = _ref.dataTypeOptionToSelect,
      dataTypeOptionToSelect = _ref$dataTypeOptionTo === void 0 ? null : _ref$dataTypeOptionTo,
      _ref$contextOptionToS = _ref.contextOptionToSelect,
      contextOptionToSelect = _ref$contextOptionToS === void 0 ? null : _ref$contextOptionToS,
      _ref$dataTypeAllowedV = _ref.dataTypeAllowedValues,
      dataTypeAllowedValues = _ref$dataTypeAllowedV === void 0 ? null : _ref$dataTypeAllowedV;
    var contextSelectContainer = container.querySelector('.ibexa-perso-strategy-model__select-context-container');
    var settingsMethod = showSettings ? 'remove' : 'add';
    var dataTypeDropdownContainer = container.querySelector('.ibexa-perso-strategy-model__select-submodels-container .ibexa-dropdown');
    var contextDropdownContainer = container.querySelector('.ibexa-perso-strategy-model__select-context-container .ibexa-dropdown');
    container.dataset.modelName = dataset.modelName || '';
    container.dataset.referenceCode = dataset.referenceCode || '';
    container.dataset.dataTypeSupportedValues = dataset.dataTypeSupportedValues || '';
    container.dataset.websiteContextSupported = dataset.websiteContextSupported || '';
    container.querySelector('.ibexa-perso-strategy-model__name').innerHTML = dataset.modelName || '';
    container.querySelector('.ibexa-perso-strategy-model__reference-code-input').setAttribute('value', dataset.referenceCode || '');
    container.querySelector('.ibexa-perso-strategy-model__settings').classList[settingsMethod]('d-none');
    contextSelectContainer.classList.toggle('d-none', dataset.websiteContextSupported !== '1');
    adjustDataTypeDropdownSelection(dataTypeDropdownContainer, dataTypeAllowedValues, dataTypeOptionToSelect);
    adjustDataTypeDropdownVisibility(dataTypeDropdownContainer, dataTypeAllowedValues);
    adjustContextDropdownSelection(contextDropdownContainer, contextOptionToSelect);
  };
  var onDragOver = function onDragOver(event) {
    var placeholder = event.currentTarget;
    placeholder.classList.remove('ibexa-perso-scenario-strategy-placeholder--anchored');
    event.preventDefault();
  };
  var onDropModel = function onDropModel(event) {
    var placeholder = event.currentTarget;
    var container = placeholder.previousElementSibling;
    var _sourceDraggedModel$d = sourceDraggedModel.dataset,
      type = _sourceDraggedModel$d.type,
      modelName = _sourceDraggedModel$d.modelName;
    var referenceCodeInput = container.querySelector('.ibexa-perso-strategy-model__reference-code-input');
    if (modelName) {
      if (!referenceCodeInput.value) {
        var _dataTypeSelect$optio, _contextSelect$option;
        var sourceDragIconContainer = sourceDraggedModel.querySelector('.ibexa-perso-strategy-model__icon');
        var targetDragIconContainer = container.querySelector('.ibexa-perso-strategy-model__icon');
        if (sourceDragIconContainer) {
          sourceDragIconContainer.classList.add('d-none');
        }
        container.classList.add('ibexa-perso-strategy-model--highlighted');
        targetDragIconContainer.classList.remove('d-none');
        var dataTypeSelect = sourceDraggedModel.querySelector('.ibexa-perso-strategy-model__select-submodels-container .ibexa-input--select');
        var contextSelect = sourceDraggedModel.querySelector('.ibexa-perso-strategy-model__select-context-container .ibexa-input--select');
        var dataTypeSelectedOption = (_dataTypeSelect$optio = dataTypeSelect === null || dataTypeSelect === void 0 ? void 0 : dataTypeSelect.options[dataTypeSelect.selectedIndex].value) !== null && _dataTypeSelect$optio !== void 0 ? _dataTypeSelect$optio : null;
        var contextSelectedOption = (_contextSelect$option = contextSelect === null || contextSelect === void 0 ? void 0 : contextSelect.options[contextSelect.selectedIndex].value) !== null && _contextSelect$option !== void 0 ? _contextSelect$option : null;
        setContainerData({
          container: container,
          dataset: sourceDraggedModel.dataset,
          showSettings: true,
          dataTypeOptionToSelect: dataTypeSelectedOption,
          contextOptionToSelect: contextSelectedOption,
          dataTypeAllowedValues: getStrategyAllowedValues(sourceDraggedModel)
        });
        toggleStrategyPlaceholder(container, true);
        if (type === 'existing') {
          setContainerData({
            container: sourceDraggedModel,
            showSettings: false
          });
          toggleStrategyPlaceholder(sourceDraggedModel, false);
          removeErrorMessages(sourceDraggedModel);
        }
        setTimeout(function () {
          container.classList.remove('ibexa-perso-strategy-model--highlighted');
        }, TIMEOUT_REMOVE_HIGHLIGHT);
      } else {
        container.classList.add('ibexa-perso-strategy-model--is-error');
        setTimeout(function () {
          container.classList.remove('ibexa-perso-strategy-model--is-error');
        }, TIMEOUT_REMOVE_HIGHLIGHT);
      }
    }
  };
  var onDragStart = function onDragStart(event) {
    sourceDraggedModel = event.currentTarget;
  };
  var onRadioClick = function onRadioClick(event) {
    var radiosContainer = event.currentTarget.closest('.ibexa-modal__inputs');
    radiosContainer.querySelectorAll('.ibexa-input--radio').forEach(function (radio) {
      var radioRow = radio.closest('.ibexa-modal__row-input');
      var radioSubRows = radioRow.querySelectorAll('.ibexa-modal__sub-row-input');
      if (!radio.isEqualNode(event.currentTarget)) {
        radio.checked = false;
        radioSubRows.forEach(function (row) {
          row.classList.add('ibexa-modal__sub-row-input--inactive');
        });
      } else {
        radioSubRows.forEach(function (row) {
          row.classList.remove('ibexa-modal__sub-row-input--inactive');
        });
      }
    });
  };
  var onSubmitClick = function onSubmitClick(event) {
    var isFormValid = form.reportValidity();
    if (!isFormValid) {
      event.preventDefault();
    }
  };
  var searchField = function searchField(event) {
    var fieldFilterQueryLowerCase = event.currentTarget.value.toLowerCase();
    var sidebarFields = doc.querySelectorAll('.ibexa-perso-strategy-sidebar__list .ibexa-perso-strategy-sidebar-item');
    sidebarFields.forEach(function (field) {
      var fieldNameNode = field.querySelector('.ibexa-perso-strategy-sidebar-item__label');
      var fieldNameLowerCase = fieldNameNode.innerText.toLowerCase();
      var isFieldHidden = !fieldNameLowerCase.includes(fieldFilterQueryLowerCase);
      field.classList.toggle('ibexa-perso-strategy-sidebar-item--hidden', isFieldHidden);
    });
  };
  if (categoryPathSelectContainer) {
    var hiddenInputsContainer = doc.querySelector('.ibexa-perso-scenario-edit__category-path-inputs');
    var hiddenInputTemplate = hiddenInputsContainer.dataset.inputTemplate;
    var hiddenInputs = hiddenInputsContainer.querySelectorAll('.ibexa-input-text-wrapper');
    var newInputIndex = hiddenInputs.length;
    categoryPathSelect = new _core_category_path_select__WEBPACK_IMPORTED_MODULE_0__.CategoryPathSelect({
      container: categoryPathSelectContainer,
      onAdd: function onAdd(value) {
        var renderedTemplate = hiddenInputTemplate.replaceAll('__name__', newInputIndex);
        hiddenInputsContainer.insertAdjacentHTML('beforeend', renderedTemplate);
        newInputIndex += 1;
        var newHiddenInput = hiddenInputsContainer.querySelector('.ibexa-input-text-wrapper:last-of-type .ibexa-input');
        newHiddenInput.value = value;
        newHiddenInput.dataset.value = value;
      },
      onRemove: function onRemove(value) {
        var hiddenInput = hiddenInputsContainer.querySelector(".ibexa-input[data-value=\"".concat(value, "\"]"));
        var hiddenInputWrapper = hiddenInput.closest('.ibexa-input-text-wrapper');
        hiddenInputWrapper.remove();
      }
    });
    categoryPathSelect.init();
  }
  openModalBtns.forEach(function (button) {
    button.addEventListener('click', openModal, false);
  });
  discardSettingsBtns.forEach(function (button) {
    button.addEventListener('click', discardSettings, false);
  }, false);
  modalRadioInputs.forEach(function (radio) {
    radio.addEventListener('click', onRadioClick, false);
  });
  draggedModels.forEach(function (model) {
    model.addEventListener('dragstart', onDragStart, false);
  });
  removeStrategyModelBtns.forEach(function (button) {
    button.addEventListener('click', removeStrategyModel, false);
  });
  actionCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', onCheckboxChangeValue, false);
  });
  if (categoryPathCheckbox) {
    var updateSelectState = function updateSelectState() {
      categoryPathSelect.toggleDisabled(!categoryPathCheckbox.checked);
    };
    updateSelectState();
    categoryPathCheckbox.addEventListener('change', updateSelectState, false);
  }
  dropPlaceholders.forEach(function (container) {
    container.addEventListener('drop', onDropModel, false);
    container.addEventListener('dragover', onDragOver, false);
  });
  doc.body.addEventListener('dragover', function (event) {
    var isTargetPlaceholder = !!event.target.closest('.ibexa-perso-scenario-strategy-placeholder');
    if (!isTargetPlaceholder) {
      var activePlaceholder = doc.querySelector('.ibexa-perso-scenario-strategy-placeholder:not(.ibexa-perso-scenario-strategy-placeholder--anchored');
      if (activePlaceholder) {
        activePlaceholder.classList.add('ibexa-perso-scenario-strategy-placeholder--anchored');
      }
    }
  });
  submitBtns.forEach(function (btn) {
    btn.dataset.isFormValid = 0;
    btn.addEventListener('click', onSubmitClick, false);
  });
  dataTypeDropdownsContainers.forEach(initializeDataTypeDropdown);
  contextDropdownsContainers.forEach(initializeContextDropdown);
  prerenderedStrategyModels.forEach(function (strategyContainer) {
    var dataTypeDropdownContainer = strategyContainer.querySelector('.ibexa-perso-strategy-model__select-submodels-container .ibexa-dropdown');
    var dataTypeAllowedValues = getStrategyAllowedValues(strategyContainer);
    adjustDataTypeDropdownSelection(dataTypeDropdownContainer, dataTypeAllowedValues, null, true);
    adjustDataTypeDropdownVisibility(dataTypeDropdownContainer, dataTypeAllowedValues);
  });
  filterFieldInput.addEventListener('keyup', searchField, false);
})(window.document, window.ibexa, window.bootstrap);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.edit.js"));
/******/ }
]);