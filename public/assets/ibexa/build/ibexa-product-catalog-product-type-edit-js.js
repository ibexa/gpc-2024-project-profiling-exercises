(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-type-edit-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.type.edit.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.type.edit.js ***!
  \******************************************************************************************/
/***/ (() => {

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, ibexa, bootstrap) {
  var currentlyDraggedItem = null;
  var REMOVE_ATTRIBUTE_DELAY_TIME = 400;
  var HIGHLIGHT_GROUP_TIME = 3000;
  var ATTRIBUTE_DRAG_TYPE = 'item';
  var GROUP_DRAG_TYPE = 'group';
  var dropZoneContainer = doc.querySelector('.ibexa-pc-attributes-drop-zone');
  var emptyDropZoneMessageNode = doc.querySelector('.ibexa-pc-attributes-empty-drop-zone');
  var availableAttributesGroups = doc.querySelectorAll('.ibexa-available-attribute-item-group');
  var availableAttributesForDrag = doc.querySelectorAll('.ibexa-available-attribute-item-group, ibexa-available-attribute-item');
  var attributesGroups = doc.querySelectorAll('.ibexa-pc-added-attributes-group');
  var assignedAttributes = doc.querySelectorAll('.ibexa-pc-assigned-attribute');
  var filterAttributesInput = doc.querySelector('.ibexa-pc-attributes-sidebar__filter');
  var availableAttributesGroupTogglers = doc.querySelectorAll('.ibexa-available-attribute-item-group__header-toggler');
  var searchAttribute = function searchAttribute(event) {
    var filterInput = event.currentTarget;
    var attributeFilterQueryLowerCase = filterInput.value.toLowerCase();
    availableAttributesGroups.forEach(function (availableAttributesGroup) {
      var attributesWrappers = availableAttributesGroup.querySelectorAll('.ibexa-available-attribute-item-group__attribute-wrapper');
      var attributeGroupNameLowerCase = availableAttributesGroup.querySelector('.ibexa-available-attribute-item-group__header-label').innerText.toLowerCase();
      var matchGroupName = attributeGroupNameLowerCase.includes(attributeFilterQueryLowerCase);
      attributesWrappers.forEach(function (attributeWrapper) {
        var attributeNameLowerCase = attributeWrapper.querySelector('.ibexa-available-attribute-item__label').innerText.toLowerCase();
        var isMatchingSearchAttributeName = attributeNameLowerCase.includes(attributeFilterQueryLowerCase);
        attributeWrapper.classList.toggle('ibexa-available-attribute-item-group__attribute-wrapper--hidden', !isMatchingSearchAttributeName);
      });
      var allAttributesWrappersNotVisible = _toConsumableArray(attributesWrappers).every(function (item) {
        var containsHiddenClass = item.classList.contains('ibexa-available-attribute-item-group__attribute-wrapper--hidden');
        var containsAssignedClass = item.classList.contains('ibexa-available-attribute-item-group__attribute-wrapper--assigned');
        return containsHiddenClass || containsAssignedClass;
      });
      var hideGroup = !matchGroupName && allAttributesWrappersNotVisible;
      availableAttributesGroup.classList.toggle('ibexa-available-attribute-item-group--hidden', hideGroup);
    });
  };
  var shouldHideAvailableGroup = function shouldHideAvailableGroup(attributesGroupNode) {
    var availableAttributes = attributesGroupNode.querySelectorAll('.ibexa-available-attribute-item-group__attribute-wrapper');
    return _toConsumableArray(availableAttributes).every(function (availableItem) {
      return availableItem.classList.contains('ibexa-available-attribute-item-group__attribute-wrapper--assigned');
    });
  };
  var shouldHideAddedGroup = function shouldHideAddedGroup(attributesGroupNode) {
    var addedAttributes = attributesGroupNode.querySelectorAll('.ibexa-pc-assigned-attribute:not(.ibexa-pc-assigned-attribute--in-removing)');
    return !addedAttributes.length;
  };
  var shouldHideEmptyDropZoneMessage = function shouldHideEmptyDropZoneMessage() {
    var addedAttributes = doc.querySelectorAll('.ibexa-pc-attributes-drop-zone .ibexa-pc-assigned-attribute:not(.ibexa-pc-assigned-attribute--in-removing)');
    return !!addedAttributes.length;
  };
  var removeAttributesGroup = function removeAttributesGroup(event) {
    var attributesInGroup = event.currentTarget.closest('.ibexa-pc-added-attributes-group').querySelectorAll('.ibexa-pc-assigned-attribute');
    attributesInGroup.forEach(function (attribute) {
      var removeAttributeBtn = attribute.querySelector('.ibexa-pc-assigned-attribute--remove-btn');
      removeAttributeBtn.click();
    });
  };
  var attachEventsToAttribute = function attachEventsToAttribute(attributeNode) {
    var removeAttributeBtn = attributeNode.querySelector('.ibexa-pc-assigned-attribute--remove-btn');
    removeAttributeBtn.addEventListener('click', removeAttribute, false);
  };
  var removeAttribute = function removeAttribute(event) {
    var attributeNodeToRemove = event.currentTarget.closest('.ibexa-pc-assigned-attribute');
    var addedAttributesGroupNode = attributeNodeToRemove.closest('.ibexa-pc-added-attributes-group');
    var attributeId = attributeNodeToRemove.dataset.attributeId;
    var availableAttribute = doc.querySelector(".ibexa-available-attribute-item__content[data-attribute-id=\"".concat(attributeId, "\"]"));
    var availableAttributesGroup = availableAttribute.closest('.ibexa-available-attribute-item-group');
    var collapseGroupInstance = bootstrap.Collapse.getOrCreateInstance(addedAttributesGroupNode.querySelector('.ibexa-collapse__body'), {
      toggle: false
    });
    var toggleItemAfterRemove = function toggleItemAfterRemove() {
      addedAttributesGroupNode.classList.remove('ibexa-pc-added-attributes-group--remove-animation');
      addedAttributesGroupNode.classList.add('ibexa-collapse--hidden');
      emptyDropZoneMessageNode.classList.toggle('ibexa-pc-attributes-empty-drop-zone--hidden', shouldHideEmptyDropZoneMessage());
      addedAttributesGroupNode.removeEventListener('animationend', toggleItemAfterRemove, false);
      collapseGroupInstance.show();
    };
    attributeNodeToRemove.classList.add('ibexa-pc-assigned-attribute--in-removing');
    setTimeout(function () {
      attributeNodeToRemove.remove();
    }, REMOVE_ATTRIBUTE_DELAY_TIME);
    if (shouldHideAddedGroup(addedAttributesGroupNode)) {
      addedAttributesGroupNode.classList.add('ibexa-pc-added-attributes-group--remove-animation');
      collapseGroupInstance.hide();
      addedAttributesGroupNode.addEventListener('animationend', toggleItemAfterRemove, false);
    }
    toggleAvailableAttributeStatus(availableAttribute.closest('.ibexa-available-attribute-item__content'));
    availableAttributesGroup.classList.remove('ibexa-available-attribute-item-group--hidden');
  };
  var replacePrototypePlaceholder = function replacePrototypePlaceholder(inputNode, attributeGroupId, attributeIndex) {
    inputNode.id = inputNode.id.replace('__name__', attributeGroupId).replace('__name__', attributeIndex);
    inputNode.name = inputNode.name.replace('__name__', attributeGroupId).replace('__name__', attributeIndex);
  };
  var prepareAttribute = function prepareAttribute(_ref, targetGroup) {
    var attributeId = _ref.attributeId,
      attributeName = _ref.attributeName,
      attributeType = _ref.attributeType,
      attributeGroupId = _ref.attributeGroupId,
      attributePosition = _ref.attributePosition;
    var nextAttributeIndex = targetGroup.dataset.nextAttributeIndex;
    var attributeTemplate = dropZoneContainer.dataset.attributeTemplate;
    var container = document.createElement('table');
    container.insertAdjacentHTML('beforeend', attributeTemplate);
    var attributeDefinitionWrapper = container.querySelector('.ibexa-pc-assigned-attribute');
    var nameLabelNode = attributeDefinitionWrapper.querySelector('.ibexa-pc-assigned-attribute__item--name .ibexa-pc-assigned-attribute__item-label');
    var nameInputNode = attributeDefinitionWrapper.querySelector('.ibexa-pc-assigned-attribute__item--name .ibexa-pc-assigned-attribute__item-input');
    var typeNode = attributeDefinitionWrapper.querySelector('.ibexa-pc-assigned-attribute__item--type');
    var requiredInputNode = attributeDefinitionWrapper.querySelector('.ibexa-pc-assigned-attribute__item--required-bool .ibexa-pc-assigned-attribute__item-input');
    var discriminatorInputNode = attributeDefinitionWrapper.querySelector('.ibexa-pc-assigned-attribute__item--discriminator .ibexa-pc-assigned-attribute__item-input');
    attributeDefinitionWrapper.dataset.attributeId = attributeId;
    attributeDefinitionWrapper.dataset.attributePosition = attributePosition;
    nameLabelNode.innerHTML = attributeName;
    nameInputNode.value = attributeId;
    typeNode.innerHTML = attributeType;
    replacePrototypePlaceholder(nameInputNode, attributeGroupId, nextAttributeIndex);
    replacePrototypePlaceholder(requiredInputNode, attributeGroupId, nextAttributeIndex);
    replacePrototypePlaceholder(discriminatorInputNode, attributeGroupId, nextAttributeIndex);
    targetGroup.dataset.nextAttributeIndex = parseInt(nextAttributeIndex, 10) + 1;
    var filledAttributesDefinitions = container.querySelector('.ibexa-pc-assigned-attribute');
    var toggleNodes = filledAttributesDefinitions.querySelectorAll('.ibexa-toggle');
    toggleNodes.forEach(function (toggleNode) {
      var toggleButton = new ibexa.core.ToggleButton({
        toggleNode: toggleNode
      });
      toggleButton.init();
    });
    attachEventsToAttribute(filledAttributesDefinitions);
    return filledAttributesDefinitions;
  };
  var findAttributeAfterPosition = function findAttributeAfterPosition(attributesGroupNode, targetAttributePosition) {
    var addedAttributes = attributesGroupNode.querySelectorAll('.ibexa-pc-assigned-attribute');
    return _toConsumableArray(addedAttributes).find(function (attributeNode) {
      var attributePosition = attributeNode.dataset.attributePosition;
      return parseInt(targetAttributePosition, 10) < parseInt(attributePosition, 10);
    });
  };
  var toggleAvailableAttributeStatus = function toggleAvailableAttributeStatus(availableAttribute) {
    availableAttribute.closest('.ibexa-available-attribute-item-group__attribute-wrapper').classList.toggle('ibexa-available-attribute-item-group__attribute-wrapper--assigned');
  };
  var highlightAttributesGroup = function highlightAttributesGroup(attributesGroupNode) {
    attributesGroupNode.classList.add('ibexa-pc-added-attributes-group--highlight-drop');
    setTimeout(function () {
      attributesGroupNode.classList.remove('ibexa-pc-added-attributes-group--highlight-drop');
    }, HIGHLIGHT_GROUP_TIME);
  };
  var isAttributeAssigned = function isAttributeAssigned(attributeId) {
    return !!dropZoneContainer.querySelector("[data-attribute-id=\"".concat(attributeId, "\"]"));
  };
  var addAttribute = function addAttribute() {
    var _currentlyDraggedItem = currentlyDraggedItem.dataset,
      attributeId = _currentlyDraggedItem.attributeId,
      attributeGroupId = _currentlyDraggedItem.attributeGroupId,
      attributePosition = _currentlyDraggedItem.attributePosition;
    var targetAttributesGroup = dropZoneContainer.querySelector("[data-group-id=\"".concat(attributeGroupId, "\"]"));
    var sourceAttributeGroup = doc.querySelector(".ibexa-available-attribute-item-group[data-group-id=\"".concat(attributeGroupId, "\"]"));
    if (isAttributeAssigned(attributeId)) {
      return;
    }
    targetAttributesGroup.classList.remove('ibexa-collapse--hidden');
    highlightAttributesGroup(targetAttributesGroup);
    var attributeToAssign = prepareAttribute(currentlyDraggedItem.dataset, targetAttributesGroup);
    var targetInsertContainer = targetAttributesGroup.querySelector('.ibexa-pc-added-attributes-group__list .ibexa-table__body');
    targetInsertContainer.insertBefore(attributeToAssign, findAttributeAfterPosition(targetAttributesGroup, attributePosition));
    toggleAvailableAttributeStatus(currentlyDraggedItem);
    sourceAttributeGroup.classList.toggle('ibexa-available-attribute-item-group--hidden', shouldHideAvailableGroup(sourceAttributeGroup));
    emptyDropZoneMessageNode.classList.toggle('ibexa-pc-attributes-empty-drop-zone--hidden', shouldHideEmptyDropZoneMessage());
  };
  var addGroup = function addGroup() {
    var groupId = currentlyDraggedItem.dataset.groupId;
    var targetAttributesGroup = dropZoneContainer.querySelector("[data-group-id=\"".concat(groupId, "\"]"));
    var sourceAttributeGroup = doc.querySelector(".ibexa-available-attribute-item-group[data-group-id=\"".concat(groupId, "\"]"));
    var availableAttributes = doc.querySelectorAll(".ibexa-available-attribute-item__content[data-attribute-group-id=\"".concat(groupId, "\"]"));
    targetAttributesGroup.classList.remove('ibexa-collapse--hidden');
    highlightAttributesGroup(targetAttributesGroup);
    availableAttributes.forEach(function (availableAttribute) {
      var _availableAttribute$d = availableAttribute.dataset,
        availableAttributeId = _availableAttribute$d.attributeId,
        availableAttributePosition = _availableAttribute$d.attributePosition;
      if (isAttributeAssigned(availableAttributeId)) {
        return;
      }
      var attributeToAssign = prepareAttribute(availableAttribute.dataset, targetAttributesGroup);
      var targetInsertContainer = targetAttributesGroup.querySelector('.ibexa-pc-added-attributes-group__list .ibexa-table__body');
      targetInsertContainer.insertBefore(attributeToAssign, findAttributeAfterPosition(targetAttributesGroup, availableAttributePosition));
      toggleAvailableAttributeStatus(availableAttribute);
    });
    sourceAttributeGroup.classList.toggle('ibexa-available-attribute-item-group--hidden', true);
    emptyDropZoneMessageNode.classList.toggle('ibexa-pc-attributes-empty-drop-zone--hidden', shouldHideEmptyDropZoneMessage());
  };
  var AttributesDraggable = /*#__PURE__*/function (_ibexa$core$Draggable) {
    "use strict";

    _inherits(AttributesDraggable, _ibexa$core$Draggable);
    var _super = _createSuper(AttributesDraggable);
    function AttributesDraggable(config) {
      var _this;
      _classCallCheck(this, AttributesDraggable);
      _this = _super.call(this, config);
      _this.emptyContainer = _this.itemsContainer.querySelector('.ibexa-pc-attributes-empty-drop-zone');
      _this.getPlaceholderNode = _this.getPlaceholderNode.bind(_assertThisInitialized(_this));
      return _this;
    }
    _createClass(AttributesDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        var type = currentlyDraggedItem.dataset.type;
        if (type === ATTRIBUTE_DRAG_TYPE) {
          addAttribute();
        } else if (type === GROUP_DRAG_TYPE) {
          addGroup();
        }
        this.removeHighlight();
        dropZoneContainer.classList.add('ibexa-pc-attributes-drop-zone--active');
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        currentlyDraggedItem.style.removeProperty('display');
      }
    }, {
      key: "getPlaceholderNode",
      value: function getPlaceholderNode(event) {
        var target = event.target;
        if (target.closest(this.selectorPlaceholder)) {
          return null;
        }
        var draggableItem = _get(_getPrototypeOf(AttributesDraggable.prototype), "getPlaceholderNode", this).call(this, event);
        if (draggableItem) {
          return draggableItem;
        }
        if (this.emptyContainer.contains(target)) {
          return this.emptyContainer;
        }
        return this.itemsContainer.querySelector('.ibexa-pc-assigned-attribute:not(.ibexa-pc-assigned-attribute--in-removing):last-child');
      }
    }, {
      key: "onDragOver",
      value: function onDragOver(event) {
        var item = this.getPlaceholderNode(event);
        if (!item) {
          return false;
        }
        this.removeHighlight();
        this.addHighlight();
      }
    }, {
      key: "addPlaceholder",
      value: function addPlaceholder() {}
    }, {
      key: "removePlaceholder",
      value: function removePlaceholder() {}
    }, {
      key: "addHighlight",
      value: function addHighlight() {
        var _currentlyDraggedItem2 = currentlyDraggedItem.dataset,
          attributeGroupId = _currentlyDraggedItem2.attributeGroupId,
          type = _currentlyDraggedItem2.type;
        this.itemsContainer.classList.add('ibexa-pc-attributes-drop-zone--highlighted');
        if (type !== 'item') {
          return;
        }
        var addedAttributesGroups = _toConsumableArray(this.itemsContainer.querySelectorAll('.ibexa-pc-added-attributes-group'));
        addedAttributesGroups.forEach(function (attributesGroup) {
          var isActiveGroup = attributesGroup.dataset.groupId === attributeGroupId;
          attributesGroup.classList.toggle('ibexa-pc-added-attributes-group--disabled', !isActiveGroup);
        });
      }
    }, {
      key: "removeHighlight",
      value: function removeHighlight() {
        var highlightedDropzone = doc.querySelector('.ibexa-pc-attributes-drop-zone--highlighted');
        if (highlightedDropzone) {
          var disabledGroups = _toConsumableArray(highlightedDropzone.querySelectorAll('.ibexa-pc-added-attributes-group--disabled'));
          disabledGroups.forEach(function (attributesGroup) {
            attributesGroup.classList.remove('ibexa-pc-added-attributes-group--disabled');
          });
          highlightedDropzone.classList.remove('ibexa-pc-attributes-drop-zone--highlighted');
        }
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;
        _get(_getPrototypeOf(AttributesDraggable.prototype), "init", this).call(this);
        doc.body.addEventListener('dragover', function (event) {
          if (!_this2.itemsContainer.contains(event.target)) {
            _this2.removeHighlight();
          } else {
            event.preventDefault();
          }
        });
      }
    }]);
    return AttributesDraggable;
  }(ibexa.core.Draggable);
  var dropAttributesWidget = new AttributesDraggable({
    itemsContainer: dropZoneContainer,
    selectorItem: '.ibexa-pc-assigned-attribute',
    selectorPlaceholder: '.ibexa-pc-attributes-drop-zone-item-placeholder'
  });
  dropAttributesWidget.init();
  availableAttributesForDrag.forEach(function (availableAttribute) {
    availableAttribute.addEventListener('dragstart', function (event) {
      currentlyDraggedItem = event.target;
      currentlyDraggedItem.classList.add('ibexa-available-field-type--is-dragging-out');
    }, false);
    availableAttribute.addEventListener('dragend', function () {
      emptyDropZoneMessageNode.classList.toggle('ibexa-pc-attributes-empty-drop-zone--hidden', shouldHideEmptyDropZoneMessage());
      currentlyDraggedItem.classList.remove('ibexa-available-field-type--is-dragging-out');
    }, false);
    availableAttribute.addEventListener('click', function (_ref2) {
      var target = _ref2.target;
      var isTargetGroupTogglerBtn = target.classList.contains('ibexa-available-attribute-item-group__header-toggler') || target.classList.contains('ibexa-available-attribute-item-group__header-toggler-icon');
      if (!dropZoneContainer.classList.contains('ibexa-pc-attributes-drop-zone--active') || isTargetGroupTogglerBtn) {
        return;
      }
      currentlyDraggedItem = target.closest('[draggable="true"]');
      var type = currentlyDraggedItem.dataset.type;
      if (type === ATTRIBUTE_DRAG_TYPE) {
        addAttribute();
      } else if (type === GROUP_DRAG_TYPE) {
        addGroup();
      }
    }, false);
  });
  filterAttributesInput.addEventListener('keyup', searchAttribute, false);
  assignedAttributes.forEach(attachEventsToAttribute);
  availableAttributesGroupTogglers.forEach(function (toggler) {
    var availableAttributesGroup = toggler.closest('.ibexa-available-attribute-item-group');
    toggler.addEventListener('click', function () {
      availableAttributesGroup.classList.toggle('ibexa-available-attribute-item-group--collapsed');
    }, false);
  });
  attributesGroups.forEach(function (attributesGroupNode) {
    var removeAttributesGroupBtn = attributesGroupNode.querySelector('.ibexa-collapse__extra-action-button--remove-attributes-group');
    removeAttributesGroupBtn.addEventListener('click', removeAttributesGroup, false);
  });
})(window, window.document, window.ibexa, window.bootstrap);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.type.edit.js"));
/******/ }
]);