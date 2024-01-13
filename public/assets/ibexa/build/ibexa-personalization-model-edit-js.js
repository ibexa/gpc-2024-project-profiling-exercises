(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-model-edit-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchInput: () => (/* binding */ SearchInput)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SearchInput = /*#__PURE__*/function () {
  function SearchInput() {
    var _options$onItemAdd, _options$prepareItems;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SearchInput);
    if (!options.customerId || !options.container) {
      console.error('Missing SearchInput options.');
      return;
    }
    this.customerId = options.customerId;
    this.onItemAdd = (_options$onItemAdd = options.onItemAdd) !== null && _options$onItemAdd !== void 0 ? _options$onItemAdd : function () {};
    this.prepareItemsBeforeShow = (_options$prepareItems = options.prepareItemsBeforeShow) !== null && _options$prepareItems !== void 0 ? _options$prepareItems : function (items) {
      return items;
    };
    this.container = options.container;
    this.input = this.container.querySelector('.ibexa-perso-search-input__input');
    this.popup = this.container.querySelector('.ibexa-perso-search-input__popup');
    this.addBtn = this.container.querySelector('.ibexa-btn--add-search-item');
    this.selectedItem = null;
    this.popupItemTemplate = this.container.dataset.popupItemTemplate;
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.updateHints = this.updateHints.bind(this);
    this.handleSelectPopupItem = this.handleSelectPopupItem.bind(this);
  }
  _createClass(SearchInput, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.popperInstance = window.Popper.createPopper(this.input, this.popup, {
        placement: 'bottom',
        container: 'body'
      });
      this.input.addEventListener('focusin', this.showPopup, false);
      this.input.addEventListener('input', function () {
        _this.selectItem(null);
        _this.updateHints();
      }, false);
      this.isMouseInsidePopup = false;
      this.popup.addEventListener('mouseover', function () {
        return _this.isMouseInsidePopup = true;
      }, false);
      this.popup.addEventListener('mouseout', function () {
        return _this.isMouseInsidePopup = false;
      }, false);
      document.addEventListener('click', function (event) {
        var closestSearchPopup = event.target.closest('.ibexa-perso-search-input__popup');
        var isMouseInsidePopup = closestSearchPopup === _this.popup;
        var closestInputWrapper = event.target.closest('.ibexa-input-text-wrapper');
        var searchInputWrapper = _this.input.closest('.ibexa-input-text-wrapper');
        var searchInputHasOrWillHaveFocus = closestInputWrapper === searchInputWrapper && _this.input === document.activeElement;
        if (isMouseInsidePopup || searchInputHasOrWillHaveFocus) {
          return;
        }
        _this.hidePopup();
      }, false);
      this.addBtn.addEventListener('click', function () {
        _this.onItemAdd(_this.selectedItem);
        _this.clearSelection();
      }, false);
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.input.value = '';
      this.selectItem(null);
      this.removeHints();
    }
  }, {
    key: "getHints",
    value: function getHints(inputValue) {
      var searchUrl = window.Routing.generate('ibexa.personalization.search.attributes', {
        customerId: this.customerId,
        phrase: inputValue
      });
      var abortController = new AbortController();
      return {
        abortController: abortController,
        data: fetch(searchUrl, {
          method: 'GET',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json'
          },
          mode: 'same-origin',
          credentials: 'same-origin',
          signal: abortController.signal
        }).then(window.ibexa.helpers.request.getJsonFromResponse).then(function (_ref) {
          var searchHits = _ref.searchHits;
          return searchHits;
        })
      };
    }
  }, {
    key: "removeHints",
    value: function removeHints() {
      this.popup.innerHTML = '';
    }
  }, {
    key: "renderHints",
    value: function renderHints(hints) {
      var _this2 = this;
      var fragment = document.createDocumentFragment();
      hints.forEach(function (_ref2) {
        var id = _ref2.id,
          value = _ref2.value,
          typeId = _ref2.typeId;
        var container = document.createElement('ul');
        var renderedItem = _this2.popupItemTemplate.replace('{{ value }}', value).replace('{{ type_id }}', typeId).replace('{{ id }}', id);
        container.insertAdjacentHTML('beforeend', renderedItem);
        var listItemNode = container.querySelector('.ibexa-perso-search-input__popup-item');
        listItemNode.addEventListener('click', _this2.handleSelectPopupItem, false);
        fragment.append(listItemNode);
      });
      this.popup.append(fragment);
    }
  }, {
    key: "updateHints",
    value: function updateHints() {
      var _this3 = this;
      if (this.cancelLastHintsRequest) {
        this.cancelLastHintsRequest();
        this.cancelLastHintsRequest = null;
      }
      var inputValue = this.input.value;
      var isInputValueSameAsSelectedItem = this.selectedItem && inputValue === this.selectedItem.value;
      if (!inputValue || isInputValueSameAsSelectedItem) {
        return;
      }
      var _this$getHints = this.getHints(inputValue),
        abortController = _this$getHints.abortController,
        data = _this$getHints.data;
      this.cancelLastHintsRequest = function () {
        abortController.abort();
      };
      data.then(function (hints) {
        var preparedHints = _this3.prepareItemsBeforeShow(hints);
        _this3.removeHints();
        _this3.renderHints(preparedHints);
      })["catch"](function (error) {
        var isAbortError = error.name === 'AbortError';
        if (isAbortError) {
          return;
        }
        window.ibexa.helpers.notification.showErrorNotification(error);
      });
    }
  }, {
    key: "updateAddBtn",
    value: function updateAddBtn() {
      var isAnythingSelected = !!this.selectedItem;
      this.addBtn.disabled = !isAnythingSelected;
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      this.popup.setAttribute('data-show', '');
      this.popperInstance.update();
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.popup.removeAttribute('data-show');
      this.popperInstance.update();
    }
  }, {
    key: "handleSelectPopupItem",
    value: function handleSelectPopupItem(event) {
      var popupItem = event.currentTarget;
      var value = popupItem.innerText;
      var _popupItem$dataset = popupItem.dataset,
        id = _popupItem$dataset.itemId,
        typeId = _popupItem$dataset.itemTypeId;
      this.selectItem({
        value: value,
        id: id,
        typeId: typeId
      });
      this.input.value = value;
      this.addBtn.focus();
      this.hidePopup();
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.selectedItem = item;
      this.updateAddBtn();
    }
  }]);
  return SearchInput;
}();

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.editorial.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.editorial.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_search_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/search.input */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/core/search.input.js");

(function (doc, ibexa) {
  var editorialModels = doc.querySelector('.ibexa-perso-editorial-models');
  if (!editorialModels) {
    return;
  }
  var customerId = doc.querySelector('.ibexa-perso-model-edit__form').dataset.customerId;
  var itemsContainer = editorialModels.querySelector('.ibexa-perso-editorial-models__items');
  var updateEditorialNoItemsContainer = function updateEditorialNoItemsContainer() {
    var hasAnyItem = editorialModels.querySelectorAll('.ibexa-perso-editorial-models__item').length > 0;
    var noItemsMessageNode = editorialModels.querySelector('.ibexa-perso-editorial-models__no-items');
    noItemsMessageNode.classList.toggle('d-none', hasAnyItem);
  };
  var removeTag = function removeTag(event) {
    var removeBtn = event.currentTarget;
    var tag = removeBtn.closest('.ibexa-perso-editorial-models__item');
    tag.remove();
    updateEditorialNoItemsContainer();
  };
  var addTag = function addTag(_ref) {
    var label = _ref.label,
      value = _ref.value,
      typeId = _ref.typeId;
    var template = itemsContainer.dataset.template;
    var lastItemNode = itemsContainer.querySelector('.ibexa-perso-editorial-models__item:last-child');
    var lastItemNodeInput = lastItemNode === null || lastItemNode === void 0 ? void 0 : lastItemNode.querySelector('.ibexa-perso-editorial-models__input--id');
    var tagIndex = lastItemNodeInput ? parseInt(lastItemNodeInput.name.replace(/[^0-9]/g, ''), 10) + 1 : 0;
    itemsContainer.insertAdjacentHTML('beforeend', template.replace('{{ label }}', label).replaceAll('__name__', tagIndex));
    var insertedTag = itemsContainer.querySelector(".ibexa-perso-editorial-models__item:last-child");
    insertedTag.querySelector('.ibexa-perso-editorial-models__input--id').value = value;
    insertedTag.querySelector('.ibexa-perso-editorial-models__input--type').value = typeId;
    insertedTag.querySelector('.ibexa-tag__remove-btn').addEventListener('click', removeTag, false);
  };
  var handleAddItem = function handleAddItem(item) {
    var value = item.value,
      id = item.id,
      typeId = item.typeId;
    var valueEscaped = ibexa.helpers.text.escapeHTML(value.replace(/\$/g, '$$$$'));
    var isAlreadySelectedItem = itemsContainer.querySelector(".ibexa-perso-editorial-models__input--id[value=\"".concat(id.replace(/["\\]/g, '\\$&'), "\"]"));
    if (isAlreadySelectedItem) {
      return;
    }
    addTag({
      label: valueEscaped,
      value: id,
      typeId: typeId
    });
    updateEditorialNoItemsContainer();
  };
  var searchInputContainer = doc.querySelector('.ibexa-perso-editorial-models__search-input');
  var searchInput = new _core_search_input__WEBPACK_IMPORTED_MODULE_0__.SearchInput({
    container: searchInputContainer,
    customerId: customerId,
    onItemAdd: handleAddItem
  });
  searchInput.init();
  editorialModels.querySelectorAll('.ibexa-tag__remove-btn').forEach(function (button) {
    button.addEventListener('click', function (event) {
      removeTag(event);
      updateEditorialNoItemsContainer();
    }, false);
  });
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.js ***!
  \***********************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (doc, Routing, ibexa, Translator, _doc$querySelector, _doc$querySelector2) {
  var draggedItem = null;
  var dragItemSourceContainer = null;
  var submodelSelectedKey = '';
  var submodelSelectedType = '';
  var submodelAttributeSource = null;
  var submodelSource = null;
  var submodelSelectedContainer = '';
  var getJsonFromResponse = ibexa.helpers.request.getJsonFromResponse;
  var submodelTypeSelectNode = doc.querySelector('.ibexa-perso-submodel-select');
  var emptyTagTemplateNode = doc.querySelector('.ibexa-perso-submodel-empty-tag-template');
  var submodelsContainer = doc.querySelector('.ibexa-perso-model-edit__submodels');
  var NOMINAL_TYPE = 'NOMINAL';
  var setSubmodelData = function setSubmodelData() {
    var selectedOption = doc.querySelector("option[value=\"".concat(submodelTypeSelectNode.value, "\"]"));
    var _selectedOption$datas = selectedOption.dataset,
      type = _selectedOption$datas.type,
      attributeSource = _selectedOption$datas.attributeSource,
      source = _selectedOption$datas.source;
    submodelSelectedContainer = doc.querySelector(".ibexa-perso-submodel--".concat(selectedOption.value));
    submodelSelectedKey = selectedOption.value;
    submodelSelectedType = type;
    submodelAttributeSource = attributeSource;
    submodelSource = source;
  };
  var submodelTypeChange = function submodelTypeChange() {
    setSubmodelData();
    var selectedSubmodelClass = "ibexa-perso-submodel--".concat(submodelSelectedKey);
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel').forEach(function (submodelNode) {
      var isSelectedSubmodel = submodelNode.classList.contains(selectedSubmodelClass);
      submodelNode.classList.toggle('d-none', !isSelectedSubmodel);
      if (isSelectedSubmodel && submodelSelectedType === NOMINAL_TYPE) {
        fetchSubmodelAvailableItems();
      }
    });
  };
  var toggleEmptyContainer = function toggleEmptyContainer(submodelSidebarItemsContainer) {
    var submodelSidebarItemsEmpty = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list-empty');
    var visibleItems = submodelSidebarItemsContainer.querySelectorAll('.ibexa-perso-submodel-sidebar-item:not(.ibexa-perso-submodel-sidebar-item--hidden)');
    submodelSidebarItemsEmpty.classList.toggle('ibexa-perso-submodel-sidebar__list-empty--visible', !visibleItems.length);
  };
  var fetchSubmodelAvailableItems = function fetchSubmodelAvailableItems() {
    var customerId = doc.querySelector('.ibexa-perso-model-edit__form').dataset.customerId;
    var submodelSidebarItemsContainer = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list');
    var submodelSidebarItemsSpinner = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list-spinner');
    var areItemsAlreadyFetched = submodelSidebarItemsContainer.children.length > 0;
    if (areItemsAlreadyFetched) {
      return;
    }
    var url = Routing.generate('ibexa.personalization.model.attribute', {
      attributeKey: submodelSelectedKey,
      attributeType: submodelSelectedType,
      attributeSource: submodelAttributeSource,
      source: submodelSource,
      customerId: customerId
    });
    var request = new Request(url, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
      }
    });
    fetch(request).then(getJsonFromResponse).then(function (response) {
      var groupsWrapper = submodelSelectedContainer.querySelector('.ibexa-perso-models-drop-groups__groups-wrapper');
      var allGroupsItems = groupsWrapper.querySelectorAll('.ibexa-perso-models-drop-group-item');
      var valuesAlreadyAssignedToGroups = _toConsumableArray(allGroupsItems).map(function (item) {
        return item.querySelector('.ibexa-perso-models-drop-group-item__input');
      }).map(function (input) {
        return input.value;
      });
      var itemTemplate = emptyTagTemplateNode.dataset.template;
      var fragment = doc.createDocumentFragment();
      response.forEach(function (itemValue) {
        var container = doc.createElement('div');
        var templateRendered = itemTemplate.replaceAll('{{ name }}', itemValue);
        container.insertAdjacentHTML('beforeend', templateRendered);
        var newItem = container.querySelector('.ibexa-perso-submodel-sidebar-item');
        var isNewItemAlreadyAssigned = valuesAlreadyAssignedToGroups.includes(itemValue);
        newItem.classList.toggle('ibexa-perso-submodel-sidebar-item--hidden', isNewItemAlreadyAssigned);
        fragment.append(newItem);
      });
      submodelSidebarItemsSpinner.classList.add('ibexa-perso-submodel-sidebar__list-spinner--hidden');
      submodelSidebarItemsContainer.append(fragment);
      attachSidebarItemsEvents(submodelSidebarItemsContainer);
      toggleEmptyContainer(submodelSidebarItemsContainer);
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var attachSidebarItemsEvents = function attachSidebarItemsEvents(sidebar) {
    var sidebarItems = sidebar.querySelectorAll('.ibexa-perso-submodel-sidebar-item');
    sidebarItems.forEach(function (sidebarItem) {
      var contentContainer = sidebarItem.querySelector('.ibexa-perso-submodel-sidebar-item__content');
      contentContainer.addEventListener('dragstart', dragStart.bind(null, '.ibexa-perso-submodel-sidebar-item'), false);
      contentContainer.addEventListener('dragend', dragEnd, false);
      contentContainer.addEventListener('click', addItemByClick, false);
    });
  };
  var addItemByClick = function addItemByClick(event) {
    draggedItem = event.currentTarget.closest('.ibexa-perso-submodel-sidebar-item');
    var activeSubmodelSelectedContainer = draggedItem.closest('.ibexa-perso-submodel').querySelector('.ibexa-perso-models-drop-group.ibexa-perso-models-drop-group--active');
    if (activeSubmodelSelectedContainer) {
      addItem(activeSubmodelSelectedContainer);
      updateGroup(activeSubmodelSelectedContainer);
    }
  };
  var updateGroupContainer = function updateGroupContainer(groupsWrapper) {
    var groupNumber = 1;
    var itemTemplateNode = submodelSelectedContainer.querySelector('.ibexa-perso-submodel__item-template');
    var _itemTemplateNode$dat = itemTemplateNode.dataset,
      inputIdPattern = _itemTemplateNode$dat.inputIdPattern,
      inputNamePattern = _itemTemplateNode$dat.inputNamePattern;
    var groups = groupsWrapper.querySelectorAll('.ibexa-perso-models-drop-group');
    groups.forEach(function (group) {
      var groupItems = group.querySelectorAll('.ibexa-perso-models-drop-group-item');
      groupItems.forEach(function (item, itemIndex) {
        var input = item.querySelector('input');
        input.id = inputIdPattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
        input.name = inputNamePattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
      });
      groupNumber++;
    });
  };
  var dragStart = function dragStart(wrapperClass, event) {
    draggedItem = event.target.closest(wrapperClass);
    dragItemSourceContainer = event.currentTarget;
    var isFromSidebar = draggedItem.classList.contains('ibexa-perso-submodel-sidebar-item');
    if (isFromSidebar) {
      draggedItem.classList.add('ibexa-perso-submodel-sidebar-item--is-dragging-out');
    }
  };
  var dragEnd = function dragEnd() {
    var isFromSidebar = draggedItem.classList.contains('ibexa-perso-submodel-sidebar-item');
    if (isFromSidebar) {
      draggedItem.classList.remove('ibexa-perso-submodel-sidebar-item--is-dragging-out');
    }
  };
  var dropItem = function dropItem(event) {
    event.stopPropagation();
    if (event.currentTarget.isSameNode(dragItemSourceContainer)) {
      return;
    }
    var isFromSidebar = dragItemSourceContainer.closest('.ibexa-perso-submodel-sidebar') !== null;
    var groupItemsContainer = event.currentTarget;
    var groupsWrapper = groupItemsContainer.closest('.ibexa-perso-models-drop-groups__groups-wrapper');
    var activeGroup = groupsWrapper.querySelector('.ibexa-perso-models-drop-group--active');
    if (!isFromSidebar) {
      var previousGroup = draggedItem.closest('.ibexa-perso-models-drop-group');
      draggedItem.parentNode.removeChild(draggedItem);
      updateGroup(previousGroup);
    }
    activeGroup === null || activeGroup === void 0 || activeGroup.classList.remove('ibexa-perso-models-drop-group--active');
    groupItemsContainer.classList.add('ibexa-perso-models-drop-group--active');
    addItem(groupItemsContainer);
    updateGroup(groupItemsContainer);
  };
  var updateGroup = function updateGroup(container) {
    var emptyGroup = container.querySelector('.ibexa-perso-models-drop-empty-group');
    var placeholder = container.querySelector('.ibexa-perso-models-drop-group-item-placeholder');
    var items = container.querySelectorAll('.ibexa-perso-models-drop-group-item');
    var isGroupEmpty = !items.length;
    emptyGroup.classList.toggle('ibexa-perso-models-drop-empty-group--hidden', !isGroupEmpty);
    placeholder.classList.toggle('ibexa-perso-models-drop-group-item-placeholder--hidden', isGroupEmpty);
  };
  var addItem = function addItem(groupItemsContainer) {
    var value = draggedItem.dataset.value;
    var template = submodelSelectedContainer.querySelector('.ibexa-perso-submodel__item-template').dataset.template;
    var itemPlaceholder = groupItemsContainer.querySelector('.ibexa-perso-models-drop-group-item-placeholder');
    itemPlaceholder.insertAdjacentHTML('beforebegin', template.replace('__name__', value).replace('__name__', value));
    var itemsContainer = groupItemsContainer.querySelector('.ibexa-perso-models-drop-group__items');
    var insertedItem = itemsContainer.querySelector('.ibexa-perso-models-drop-group-item:nth-last-child(3)');
    var insertedItemInput = insertedItem.querySelector('.ibexa-perso-models-drop-group-item__input');
    insertedItemInput.setAttribute('value', value);
    attachGroupItemEvents(insertedItem);
    var groupsWrapper = groupItemsContainer.closest('.ibexa-perso-models-drop-groups__groups-wrapper');
    updateGroupContainer(groupsWrapper);
    toggleSidebarItem(value, false);
  };
  var attachGroupEvents = function attachGroupEvents(group) {
    var removeBtn = group.querySelector('.ibexa-perso-models-drop-group__remove-btn');
    removeBtn.addEventListener('click', removeGroup, false);
    group.addEventListener('dragstart', dragStart.bind(null, '.ibexa-perso-models-drop-group-item'), false);
    group.addEventListener('drop', dropItem, false);
    group.addEventListener('dragover', function (event) {
      return event.preventDefault();
    }, false);
  };
  var attachGroupItemEvents = function attachGroupItemEvents(groupItem) {
    var itemRemoveBtn = groupItem.querySelector('.ibexa-perso-models-drop-group-item__remove-btn');
    itemRemoveBtn.addEventListener('click', removeGroupItem, false);
  };
  var addGroup = function addGroup(event) {
    var addGroupBtn = event.currentTarget;
    var groups = addGroupBtn.closest('.ibexa-perso-models-drop-groups');
    var groupTemplate = groups.dataset.groupTemplate;
    var groupsWrapper = groups.querySelector('.ibexa-perso-models-drop-groups__groups-wrapper');
    groupsWrapper.insertAdjacentHTML('beforeend', groupTemplate);
    var allGroups = groupsWrapper.querySelectorAll('.ibexa-perso-models-drop-group');
    var insertedGroup = allGroups[allGroups.length - 1];
    attachGroupEvents(insertedGroup);
    updateGroupContainer(groupsWrapper);
  };
  var removeGroup = function removeGroup(event) {
    var removeBtn = event.currentTarget;
    var group = removeBtn.closest('.ibexa-perso-models-drop-group');
    var groupItems = group.querySelectorAll('.ibexa-perso-models-drop-group-item');
    var groupsWrapper = removeBtn.closest('.ibexa-perso-models-drop-groups__groups-wrapper');
    _toConsumableArray(groupItems).map(function (groupItem) {
      return groupItem.dataset.value;
    }).forEach(function (itemValue) {
      toggleSidebarItem(itemValue, true);
    });
    group.remove();
    updateGroupContainer(groupsWrapper);
  };
  var removeGroupItem = function removeGroupItem(event) {
    var removeBtn = event.currentTarget;
    var groupItem = removeBtn.closest('.ibexa-perso-models-drop-group-item');
    var group = removeBtn.closest('.ibexa-perso-models-drop-group');
    groupItem.remove();
    updateGroup(group);
    toggleSidebarItem(groupItem.dataset.value, true);
  };
  var toggleSidebarItem = function toggleSidebarItem(value, isVisible) {
    var sidebarItemsList = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-sidebar__list');
    var item = sidebarItemsList.querySelector(".ibexa-perso-submodel-sidebar-item[data-value=\"".concat(value, "\""));
    item.classList.toggle('ibexa-perso-submodel-sidebar-item--hidden', !isVisible);
    toggleEmptyContainer(sidebarItemsList);
  };
  var addRange = function addRange() {
    var numberOfItems = submodelSelectedContainer.querySelectorAll('.ibexa-perso-submodel-range').length;
    var template = submodelSelectedContainer.querySelector('.ibexa-perso-submodel__item-template').dataset.template;
    var rangesContainer = submodelSelectedContainer.querySelector('.ibexa-perso-submodel-ranges__items-wrapper');
    rangesContainer.insertAdjacentHTML('beforeend', template.replaceAll('__name__', numberOfItems));
    var allRanges = submodelSelectedContainer.querySelectorAll('.ibexa-perso-submodel-range');
    var insertedRange = allRanges[allRanges.length - 1];
    var insertedRangeRemoveBtn = insertedRange.querySelector('.ibexa-perso-submodel-range__remove-btn');
    insertedRangeRemoveBtn.addEventListener('click', removeRange, false);
  };
  var removeRange = function removeRange(event) {
    var nodeToRemove = event.currentTarget.closest('.ibexa-perso-submodel-range');
    nodeToRemove.remove();
  };
  var setSegmentsSidebarInfoMessage = function setSegmentsSidebarInfoMessage() {
    var sidebarTitleInfo = doc.querySelector('.ibexa-perso-segments-sidebar__title-bar .ibexa-form-help');
    if (!sidebarTitleInfo) {
      return;
    }
    var timePeriod = doc.querySelector('.ibexa-perso-model-time-period');
    var timePeriodText = timePeriod.dataset.timePeriodText;
    var infoMessage = Translator.trans( /*@Desc("Selected timeframe %timeframe%")*/'models.segments.sidebar.time_period_info', {
      timeframe: timePeriodText
    }, 'ibexa_personalization');
    sidebarTitleInfo.insertAdjacentHTML('beforeend', infoMessage);
  };
  setSegmentsSidebarInfoMessage();
  if (submodelTypeSelectNode) {
    setSubmodelData();
    if (submodelSelectedType === NOMINAL_TYPE) {
      fetchSubmodelAvailableItems();
    }
    submodelTypeSelectNode.addEventListener('change', submodelTypeChange, false);
  }
  var searchSubmodels = function searchSubmodels(event) {
    var itemFilterQueryLowerCase = event.currentTarget.value.toLowerCase();
    var sidebarItems = doc.querySelectorAll('.ibexa-perso-submodel-sidebar__list .ibexa-perso-submodel-sidebar-item');
    sidebarItems.forEach(function (item) {
      var itemNameNode = item.querySelector('.ibexa-perso-submodel-sidebar-item__label');
      var itemNameLowerCase = itemNameNode.innerText.toLowerCase();
      var isItemHidden = !itemNameLowerCase.includes(itemFilterQueryLowerCase);
      item.classList.toggle('ibexa-perso-submodel-sidebar-item--filtered', isItemHidden);
    });
  };
  if (submodelsContainer) {
    submodelsContainer.querySelectorAll('.ibexa-perso-models-drop-groups__add-group-btn').forEach(function (button) {
      button.addEventListener('click', addGroup, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel-ranges__add-range-btn').forEach(function (button) {
      button.addEventListener('click', addRange, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel-range__remove-btn').forEach(function (button) {
      button.addEventListener('click', removeRange, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-submodel-sidebar__search-bar .ibexa-input').forEach(function (sidebarSearchInput) {
      sidebarSearchInput.addEventListener('keyup', searchSubmodels, false);
    });
    submodelsContainer.querySelectorAll('.ibexa-perso-models-drop-group').forEach(attachGroupEvents);
    submodelsContainer.querySelectorAll('.ibexa-perso-models-drop-group-item').forEach(attachGroupItemEvents);
  }
  doc.querySelector('.ibexa-btn--save-close').addEventListener('click', function () {
    doc.querySelector('#model_save_and_close').click();
  });
  doc.querySelector('.ibexa-btn--close').addEventListener('click', function () {
    doc.querySelector('.ibexa-anchor-navigation-menu__close').click();
  });
  doc.querySelector('.ibexa-btn--save').addEventListener('click', function () {
    doc.querySelector('#model_save').click();
  });
  (_doc$querySelector = doc.querySelector('.ibexa-btn--apply')) === null || _doc$querySelector === void 0 || _doc$querySelector.addEventListener('click', function () {
    doc.querySelector('#model_apply').click();
  });
  (_doc$querySelector2 = doc.querySelector('.ibexa-btn--trigger-model-build')) === null || _doc$querySelector2 === void 0 || _doc$querySelector2.addEventListener('click', function () {
    doc.querySelector('#model_trigger_model_build').click();
  });
})(window.document, window.Routing, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.segments.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.segments.js ***!
  \********************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (doc, ibexa, Translator) {
  var segmentsContainer = doc.querySelector('.ibexa-perso-segments');
  if (!segmentsContainer) {
    return;
  }
  var draggedItem = null;
  var _idNo = 0;
  var groupsWithIds = [];
  var groupsContainer = segmentsContainer.querySelector('.ibexa-perso-segments__container');
  var jsonContainer = segmentsContainer.querySelector('.ibexa-perso-segments__json-container');
  var groupsWrapper = segmentsContainer.querySelector('.ibexa-perso-segments__groups-wrapper');
  var addGroupBtn = segmentsContainer.querySelector('.ibexa-perso-segments__add-group-btn');
  var filterFieldInput = segmentsContainer.querySelector('.ibexa-perso-segments-sidebar__sidebar-filter');
  var statusLabelActive = Translator.trans( /*@Desc("active")*/'models.segments.segments.status.active', {}, 'ibexa_personalization');
  var statusLabelInActive = Translator.trans( /*@Desc("inactive")*/'models.segments.segments.status.inactive', {}, 'ibexa_personalization');
  var initTooltip = function initTooltip(item) {
    if (item.scrollWidth > 500) {
      ibexa.helpers.tooltips.parse(item);
    }
  };
  var updateSubGroup = function updateSubGroup(subGroup) {
    var subGroupItems = _toConsumableArray(subGroup.querySelectorAll('.ibexa-perso-segments-sub-group__segments > .ibexa-perso-segments-sub-group-item'));
    var relation = subGroup.querySelector('.ibexa-perso-segments-sub-group__relationship');
    var isSubGroupEmpty = !subGroupItems.length;
    relation.classList.toggle('ibexa-perso-segments-sub-group__relationship--hidden', isSubGroupEmpty);
  };
  var updateGroup = function updateGroup(group) {
    var groupItems = _toConsumableArray(group.querySelectorAll('.ibexa-perso-segments-group__segments > .ibexa-perso-segments-group-item'));
    var emptyGroup = group.querySelector('.ibexa-perso-segments-drop-empty-group');
    var placeholder = group.querySelector('.ibexa-perso-segments-group-item-placeholder');
    var relation = group.querySelector('.ibexa-perso-segments-group__relationship');
    var isGroupEmpty = !groupItems.length;
    relation.classList.toggle('ibexa-perso-segments-group__relationship--hidden', isGroupEmpty);
    placeholder.classList.toggle('ibexa-perso-segments-group-item-placeholder--hidden', isGroupEmpty);
    emptyGroup.classList.toggle('ibexa-perso-segments-drop-empty-group--hidden', !isGroupEmpty);
  };
  var createSubItemObjectBasedOnDragged = function createSubItemObjectBasedOnDragged() {
    return {
      _id: _idNo++,
      segment: {
        id: parseInt(draggedItem.dataset.segmentId, 10),
        name: draggedItem.dataset.segmentName,
        group: {
          id: parseInt(draggedItem.dataset.groupId, 10),
          name: draggedItem.dataset.groupName
        }
      },
      isActive: true
    };
  };
  var createItemObjectBasedOnDragged = function createItemObjectBasedOnDragged() {
    return {
      _id: _idNo++,
      childSegments: [],
      mainSegment: {
        segment: {
          id: parseInt(draggedItem.dataset.segmentId, 10),
          name: draggedItem.dataset.segmentName,
          group: {
            id: parseInt(draggedItem.dataset.groupId, 10),
            name: draggedItem.dataset.groupName
          }
        },
        isActive: true
      },
      childGroupingOperation: 'AND'
    };
  };
  var createGroupObject = function createGroupObject() {
    return {
      _id: _idNo++,
      groupingOperation: 'AND',
      groupElements: []
    };
  };
  var saveSubItemSegments = function saveSubItemSegments(subGroupContainer, subItem) {
    var itemElement = subGroupContainer.closest('.ibexa-perso-segments-group-item');
    var groupItemId = itemElement.dataset.groupItemId;
    var _id = subItem._id,
      segment = subItem.segment,
      isActive = subItem.isActive;
    var segmentId = segment.id,
      segmentName = segment.name,
      group = segment.group;
    var groupId = group.id,
      groupName = group.name;
    groupsWithIds.forEach(function (groupsWithId) {
      groupsWithId.groupElements.forEach(function (item) {
        if (item._id === parseInt(groupItemId, 10)) {
          item.childSegments.push({
            _id: _id,
            segment: {
              id: segmentId,
              name: segmentName,
              group: {
                id: groupId,
                name: groupName
              }
            },
            isActive: isActive
          });
        }
      });
    });
    saveSegments();
  };
  var saveItemSegments = function saveItemSegments(groupContainer, item) {
    var groupItemsId = groupContainer.dataset.groupId;
    var _id = item._id,
      childSegments = item.childSegments,
      mainSegment = item.mainSegment,
      childGroupingOperation = item.childGroupingOperation;
    var segment = mainSegment.segment,
      isActive = mainSegment.isActive;
    var segmentId = segment.id,
      segmentName = segment.name,
      group = segment.group;
    var groupId = group.id,
      groupName = group.name;
    groupsWithIds.forEach(function (groupsWithId) {
      if (groupsWithId._id === parseInt(groupItemsId, 10)) {
        groupsWithId.groupElements.push({
          _id: _id,
          mainSegment: {
            segment: {
              id: segmentId,
              name: segmentName,
              group: {
                id: groupId,
                name: groupName
              }
            },
            isActive: isActive
          },
          childSegments: childSegments,
          childGroupingOperation: childGroupingOperation
        });
      }
    });
    saveSegments();
  };
  var dropSubItem = function dropSubItem(event) {
    event.stopPropagation();
    var placeholder = event.currentTarget;
    var subGroupContainer = placeholder.closest('.ibexa-perso-segments-sub-group');
    var subItemObject = createSubItemObjectBasedOnDragged();
    addGroupSubItem(subGroupContainer, subItemObject);
    saveSubItemSegments(subGroupContainer, subItemObject);
    updateSubGroup(subGroupContainer);
    togglePlaceholderHovered(placeholder, false);
  };
  var dropItem = function dropItem(event) {
    event.stopPropagation();
    var placeholder = event.currentTarget;
    var group = placeholder.closest('.ibexa-perso-segments-group');
    var itemObject = createItemObjectBasedOnDragged();
    addGroupItem(group, itemObject);
    saveItemSegments(group, itemObject);
    updateGroup(group);
    togglePlaceholderHovered(placeholder, false);
  };
  var dropItemOnEmptyGroup = function dropItemOnEmptyGroup(event) {
    event.stopPropagation();
    var group = event.currentTarget;
    var itemObject = createItemObjectBasedOnDragged();
    addGroupItem(group, itemObject);
    saveItemSegments(group, itemObject);
    updateGroup(group);
    attachGroupPlaceholderEvents(group);
    group.removeEventListener('drop', dropItemOnEmptyGroup, false);
  };
  var addGroupHandler = function addGroupHandler() {
    var group = createGroupObject();
    var _id = group._id,
      groupingOperation = group.groupingOperation,
      groupElements = group.groupElements;
    groupsWithIds.push({
      _id: _id,
      groupElements: groupElements,
      groupingOperation: groupingOperation
    });
    addGroup(group);
  };
  var togglePlaceholderHovered = function togglePlaceholderHovered(placeholder, hovered) {
    var PLACEHOLDER_ANCHORED_CLASS = placeholder.classList[0];
    if (PLACEHOLDER_ANCHORED_CLASS === 'ibexa-perso-segments-group-item-placeholder' || PLACEHOLDER_ANCHORED_CLASS === 'ibexa-perso-segments-sub-group-item-placeholder') {
      placeholder.classList.toggle("".concat(PLACEHOLDER_ANCHORED_CLASS, "--anchored"), !hovered);
    }
  };
  var dragLeave = function dragLeave(_ref) {
    var currentTarget = _ref.currentTarget;
    return togglePlaceholderHovered(currentTarget, false);
  };
  var dragEnter = function dragEnter(_ref2) {
    var currentTarget = _ref2.currentTarget;
    return togglePlaceholderHovered(currentTarget, true);
  };
  var dragStart = function dragStart(_ref3) {
    var target = _ref3.target;
    return draggedItem = target.closest('.ibexa-perso-segments-sidebar-item');
  };
  var updateGroupingOperation = function updateGroupingOperation(id, value) {
    groupsWithIds.forEach(function (group) {
      if (group._id === id) {
        group.groupingOperation = value;
      }
      group.groupElements.forEach(function (item) {
        if (item._id === id) {
          item.childGroupingOperation = value;
        }
      });
    });
  };
  var attachDropdownEvents = function attachDropdownEvents(dropdown) {
    dropdown.sourceInput.addEventListener('change', function (event) {
      var currentTarget = event.currentTarget;
      var id = currentTarget.dataset.groupId || currentTarget.dataset.groupItemId;
      updateGroupingOperation(parseInt(id, 10), currentTarget.value);
      saveSegments();
    });
  };
  var initDropdown = function initDropdown(relationContainer, groupingOperation) {
    var dropdownContainer = relationContainer.querySelector('.ibexa-dropdown:not(.ibexa-dropdown--custom-init)');
    var dropdown = new ibexa.core.Dropdown({
      container: dropdownContainer
    });
    dropdown.init();
    dropdown.selectOption(groupingOperation);
    attachDropdownEvents(dropdown);
  };
  var getSubItemIndex = function getSubItemIndex(groupIndex, itemIndex, subItemId) {
    return groupsWithIds[groupIndex].groupElements[itemIndex].childSegments.findIndex(function (subItem) {
      return subItem._id === subItemId;
    });
  };
  var getItemIndex = function getItemIndex(groupIndex, itemId) {
    return groupsWithIds[groupIndex].groupElements.findIndex(function (item) {
      return item._id === itemId;
    });
  };
  var getGroupIndex = function getGroupIndex(groupId) {
    return groupsWithIds.findIndex(function (group) {
      return group._id === groupId;
    });
  };
  var removeSubGroupItem = function removeSubGroupItem(_ref4) {
    var currentTarget = _ref4.currentTarget;
    var subGroupItem = currentTarget.closest('.ibexa-perso-segments-sub-group-item');
    var subGroup = currentTarget.closest('.ibexa-perso-segments-sub-group');
    var groupItem = currentTarget.closest('.ibexa-perso-segments-group-item');
    var group = currentTarget.closest('.ibexa-perso-segments-group');
    var groupId = group.dataset.groupId;
    var groupItemId = groupItem.dataset.groupItemId;
    var groupSubItemId = subGroupItem.dataset.groupSubItemId;
    var groupIndex = getGroupIndex(parseInt(groupId, 10));
    var itemIndex = getItemIndex(groupIndex, parseInt(groupItemId, 10));
    var groupSubItemIndexToRemove = getSubItemIndex(groupIndex, itemIndex, parseInt(groupSubItemId, 10));
    groupsWithIds[groupIndex].groupElements[itemIndex].childSegments.splice(groupSubItemIndexToRemove, 1);
    subGroupItem.remove();
    updateSubGroup(subGroup);
    saveSegments();
  };
  var removeGroupItem = function removeGroupItem(_ref5) {
    var currentTarget = _ref5.currentTarget;
    var groupItem = currentTarget.closest('.ibexa-perso-segments-group-item');
    var group = currentTarget.closest('.ibexa-perso-segments-group');
    var groupItemContainer = group.querySelector('.ibexa-perso-segments-group__segments');
    var groupId = group.dataset.groupId;
    var groupItemId = groupItem.dataset.groupItemId;
    var groupIndex = getGroupIndex(parseInt(groupId, 10));
    var groupItemIndexToRemove = getItemIndex(groupIndex, parseInt(groupItemId, 10));
    groupsWithIds[groupIndex].groupElements.splice(groupItemIndexToRemove, 1);
    groupItem.remove();
    updateGroup(group);
    saveSegments();
    if (!groupItemContainer.children.length) {
      updateGroupEvents(group);
    }
  };
  var removeGroup = function removeGroup(_ref6) {
    var currentTarget = _ref6.currentTarget;
    var group = currentTarget.closest('.ibexa-perso-segments-group');
    var groupId = group.dataset.groupId;
    var groupIndexToRemove = getGroupIndex(parseInt(groupId, 10));
    groupsWithIds.splice(groupIndexToRemove, 1);
    group.remove();
    saveSegments();
  };
  var attachSubGroupItemEvents = function attachSubGroupItemEvents(subItem) {
    var subItemRemoveBtn = subItem.querySelector('.ibexa-perso-segments-sub-group-item__remove-btn');
    subItemRemoveBtn.addEventListener('click', removeSubGroupItem, false);
  };
  var attachGroupItemEvents = function attachGroupItemEvents(item) {
    var itemRemoveBtn = item.querySelector('.ibexa-perso-segments-group-item__remove-btn');
    itemRemoveBtn.addEventListener('click', removeGroupItem, false);
  };
  var attachGroupPlaceholderEvents = function attachGroupPlaceholderEvents(group) {
    var placeholder = group.querySelector('.ibexa-perso-segments-group-item-placeholder');
    if (!placeholder.classList.contains('ibexa-perso-segments-group-item-placeholder--events-added')) {
      placeholder.addEventListener('drop', dropItem, false);
      placeholder.addEventListener('dragenter', dragEnter, false);
      placeholder.addEventListener('dragleave', dragLeave, false);
      placeholder.classList.add('ibexa-perso-segments-group-item-placeholder--events-added');
    }
  };
  var attachEmptyGroupEvents = function attachEmptyGroupEvents(group) {
    var removeBtn = group.querySelector('.ibexa-perso-segments-group__remove-btn');
    removeBtn.addEventListener('click', removeGroup, false);
    group.addEventListener('drop', dropItemOnEmptyGroup, false);
    group.addEventListener('dragover', function (event) {
      return event.preventDefault();
    }, false);
  };
  var updateGroupEvents = function updateGroupEvents(group) {
    group.addEventListener('drop', dropItemOnEmptyGroup, false);
  };
  var addStatusLabel = function addStatusLabel(statusContainer, isActive) {
    var statusClass = statusContainer.classList[0];
    var statusLabel = isActive ? statusLabelActive : statusLabelInActive;
    var activeStatusClass = isActive ? "".concat(statusClass, "--active") : "".concat(statusClass, "--inactive");
    statusContainer.innerHTML = statusLabel;
    statusContainer.classList.add(activeStatusClass);
  };
  var addGroupSubItem = function addGroupSubItem(groupSubItemsContainer, subItem) {
    var _id = subItem._id,
      segment = subItem.segment,
      isActive = subItem.isActive;
    var name = segment.name;
    var groupSubItemSegmentsContainer = groupSubItemsContainer.querySelector('.ibexa-perso-segments-sub-group__segments');
    var subItemTemplate = groupSubItemSegmentsContainer.dataset.subItemTemplate;
    var renderedSubItem = subItemTemplate.replaceAll('__group_sub_item_id__', _id).replaceAll('__group_sub_item_name__', name);
    groupSubItemSegmentsContainer.insertAdjacentHTML('beforeend', renderedSubItem);
    var insertedSubItem = groupSubItemSegmentsContainer.lastElementChild;
    var insertedSubItemName = insertedSubItem.querySelector('.ibexa-perso-segments-sub-group-item__name');
    var insertedSubItemStatus = insertedSubItem.querySelector('.ibexa-perso-segments-sub-group-item__status');
    addStatusLabel(insertedSubItemStatus, isActive);
    initTooltip(insertedSubItemName);
    attachSubGroupItemEvents(insertedSubItem);
  };
  var addGroupItem = function addGroupItem(groupItemsContainer, item) {
    var _id = item._id,
      childSegments = item.childSegments,
      mainSegment = item.mainSegment,
      childGroupingOperation = item.childGroupingOperation;
    var segment = mainSegment.segment,
      isActive = mainSegment.isActive;
    var name = segment.name;
    var groupItemSegmentsContainer = groupItemsContainer.querySelector('.ibexa-perso-segments-group__segments');
    var itemTemplate = groupItemSegmentsContainer.dataset.itemTemplate;
    var renderedItem = itemTemplate.replaceAll('__group_item_id__', _id).replaceAll('__group_item_name__', name);
    groupItemSegmentsContainer.insertAdjacentHTML('beforeend', renderedItem);
    var insertedItem = groupItemSegmentsContainer.lastElementChild;
    var insertedItemName = insertedItem.querySelector('.ibexa-perso-segments-group-item__name');
    var insertedItemStatus = insertedItem.querySelector('.ibexa-perso-segments-group-item__status');
    var subItemPlaceholder = insertedItem.querySelector('.ibexa-perso-segments-sub-group-item-placeholder');
    var subGroupRelationContainer = insertedItem.querySelector('.ibexa-perso-segments-sub-group__relationship');
    subItemPlaceholder.addEventListener('drop', dropSubItem, false);
    subItemPlaceholder.addEventListener('dragenter', dragEnter, false);
    subItemPlaceholder.addEventListener('dragleave', dragLeave, false);
    if (childSegments.length) {
      childSegments.forEach(function (subItem) {
        return addGroupSubItem(insertedItem, subItem);
      });
    }
    addStatusLabel(insertedItemStatus, isActive);
    updateSubGroup(insertedItem);
    initDropdown(subGroupRelationContainer, childGroupingOperation);
    initTooltip(insertedItemName);
    attachGroupItemEvents(insertedItem);
  };
  var addGroup = function addGroup(group) {
    var _id = group._id,
      groupingOperation = group.groupingOperation,
      groupElements = group.groupElements;
    var groupTemplate = groupsContainer.dataset.groupTemplate;
    var groupTemplateRendered = groupTemplate.replaceAll('__group_id__', _id);
    groupsWrapper.insertAdjacentHTML('beforeend', groupTemplateRendered);
    var insertedGroup = groupsWrapper.lastElementChild;
    var groupRelationContainer = insertedGroup.querySelector('.ibexa-perso-segments-group__relationship');
    attachEmptyGroupEvents(insertedGroup);
    if (groupElements.length) {
      groupElements.forEach(function (groupElement) {
        return addGroupItem(insertedGroup, groupElement);
      });
      attachGroupPlaceholderEvents(insertedGroup);
      insertedGroup.removeEventListener('drop', dropItemOnEmptyGroup, false);
    }
    initDropdown(groupRelationContainer, groupingOperation);
    updateGroup(insertedGroup);
  };
  var saveSegments = function saveSegments() {
    var getAllEmptyGroupIndex = [];
    var groupsCopy = groupsWithIds.map(function (group) {
      var groupItems = group.groupElements.map(function (item) {
        var groupSubItems = item.childSegments.map(function (subItem) {
          return _objectSpread({}, subItem);
        });
        return _objectSpread(_objectSpread({}, item), {}, {
          childSegments: _toConsumableArray(groupSubItems)
        });
      });
      return _objectSpread(_objectSpread({}, group), {}, {
        groupElements: _toConsumableArray(groupItems)
      });
    });
    groupsCopy.forEach(function (group, index) {
      if (!group.groupElements.length) {
        getAllEmptyGroupIndex.push(index);
      }
    });
    getAllEmptyGroupIndex.forEach(function (index) {
      groupsCopy.splice(index, 1);
    });
    groupsCopy.forEach(function (group) {
      delete group._id;
      group.groupElements.forEach(function (item) {
        delete item._id;
        item.childSegments.forEach(function (subItem) {
          delete subItem._id;
        });
      });
    });
    jsonContainer.setAttribute('value', JSON.stringify(groupsCopy));
  };
  var initGroups = function initGroups() {
    var _jsonContainer$value;
    var json = (_jsonContainer$value = jsonContainer.value) !== null && _jsonContainer$value !== void 0 ? _jsonContainer$value : [];
    var groups = JSON.parse(json).reverse();
    groups.forEach(function (group, groupIndex) {
      groupsWithIds.push(_objectSpread(_objectSpread({}, group), {}, {
        _id: _idNo++
      }));
      var groupItemWithId = group.groupElements.map(function (groupItem) {
        return _objectSpread(_objectSpread({}, groupItem), {}, {
          _id: _idNo++
        });
      });
      groupsWithIds[groupIndex].groupElements = groupItemWithId;
      group.groupElements.forEach(function (groupItem, itemIndex) {
        var groupSubItemWithId = groupItem.childSegments.map(function (groupSubItem) {
          return _objectSpread(_objectSpread({}, groupSubItem), {}, {
            _id: _idNo++
          });
        });
        groupsWithIds[groupIndex].groupElements[itemIndex].childSegments = groupSubItemWithId;
      });
    });
    ibexa.helpers.tooltips.hideAll();
    groupsWithIds.forEach(function (groupWithId) {
      addGroup(groupWithId);
    });
  };
  initGroups();
  addGroupBtn.addEventListener('click', function () {
    return addGroupHandler();
  }, false);
  var sidebarActiveItemsList = segmentsContainer.querySelector('.ibexa-perso-segments-sidebar-group__segments-container--active-segments');
  var sidebarActiveItems = sidebarActiveItemsList.querySelectorAll('.ibexa-perso-segments-sidebar-item');
  var sidebarGroups = _toConsumableArray(segmentsContainer.querySelectorAll('.ibexa-perso-segments-sidebar-group'));
  var sidebarGroupsTitleBars = _toConsumableArray(segmentsContainer.querySelectorAll('.ibexa-perso-segments-sidebar-group__title-bar'));
  var sidebarSegmentsGroups = _toConsumableArray(segmentsContainer.querySelectorAll('.ibexa-perso-segments-sidebar-group__segments-group'));
  var disableEmptyGroups = function disableEmptyGroups(sidebarGroup) {
    var sidebarSegments = sidebarGroup.querySelector('.ibexa-perso-segments-sidebar-group__segments-container');
    if (sidebarSegments.children.length) {
      return;
    }
    sidebarGroup.classList.add('ibexa-perso-segments-sidebar-group--hidden');
  };
  var toggleSidebarGroup = function toggleSidebarGroup(_ref7) {
    var currentTarget = _ref7.currentTarget;
    var sidebarGroup = currentTarget.closest('.ibexa-perso-segments-sidebar-group');
    sidebarGroup.classList.toggle('ibexa-perso-segments-sidebar-group--collapsed');
  };
  var toggleSegmentGroup = function toggleSegmentGroup(_ref8) {
    var currentTarget = _ref8.currentTarget;
    var segmentGroupContainer = currentTarget.closest('.ibexa-perso-segments-sidebar-group__segments');
    segmentGroupContainer.classList.toggle('ibexa-perso-segments-sidebar-group__segments--collapsed');
  };
  var searchField = function searchField(event) {
    var fieldFilterQueryLowerCase = event.currentTarget.value.toLowerCase();
    var sidebarFields = segmentsContainer.querySelectorAll('.ibexa-perso-segments-sidebar-item');
    sidebarFields.forEach(function (field) {
      var fieldNameNode = field.querySelector('.ibexa-perso-segments-sidebar-item__label');
      var fieldNameLowerCase = fieldNameNode.innerText.toLowerCase();
      var isFieldHidden = !fieldNameLowerCase.includes(fieldFilterQueryLowerCase);
      field.classList.toggle('ibexa-perso-segments-sidebar-item--hidden', isFieldHidden);
    });
  };
  var attachSidebarItemEvents = function attachSidebarItemEvents(item) {
    var contentContainer = item.querySelector('.ibexa-perso-segments-sidebar-item__content');
    contentContainer.addEventListener('dragstart', dragStart, false);
  };
  filterFieldInput.addEventListener('keyup', searchField, false);
  sidebarActiveItems.forEach(attachSidebarItemEvents);
  sidebarGroups.forEach(function (sidebarGroup) {
    return disableEmptyGroups(sidebarGroup);
  });
  sidebarGroupsTitleBars.forEach(function (titleBar) {
    return titleBar.addEventListener('click', toggleSidebarGroup, false);
  });
  sidebarSegmentsGroups.forEach(function (segmentGroup) {
    return segmentGroup.addEventListener('click', toggleSegmentGroup, false);
  });
})(window.document, window.ibexa, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.editorial.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.edit.segments.js"));
/******/ }
]);