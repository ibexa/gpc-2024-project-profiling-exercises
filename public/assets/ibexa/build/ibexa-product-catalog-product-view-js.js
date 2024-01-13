(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-view-js"],{

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

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/details.language.switcher.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/details.language.switcher.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var languageSwitcherForm = doc.querySelector('.ibexa-raw-content-title__language-form');
  if (!languageSwitcherForm) {
    return;
  }
  var languageSwitcherDropdownSourceInput = languageSwitcherForm.querySelector('.ibexa-dropdown__source select');
  languageSwitcherDropdownSourceInput.addEventListener('change', function () {
    return languageSwitcherForm.submit();
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/generate.variants.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/generate.variants.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc, Taggify) {
  var taggifyWidgets = doc.querySelectorAll('.ibexa-pc-taggify .ibexa-pc-taggify__widget');
  var updateValue = function updateValue(event) {
    var sourceInput = event.currentTarget.closest('.ibexa-pc-taggify').querySelector('.ibexa-pc-taggify__source-input');
    sourceInput.value = event.detail.tags.map(function (tag) {
      return tag.label;
    }).join();
    sourceInput.dispatchEvent(new Event('change'));
  };
  var initTaggify = function initTaggify(field) {
    new Taggify({
      containerNode: field,
      displayLabel: false,
      displayInputValues: false,
      hotKeys: [32, 188]
    });
    field.addEventListener('tagsCreated', updateValue, false);
    field.addEventListener('tagRemoved', updateValue, false);
  };
  taggifyWidgets.forEach(initTaggify);
})(window, window.document, window.Taggify);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.assets.tab.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.assets.tab.js ***!
  \*******************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
(function (global, doc, ibexa, bootstrap, React, ReactDOM, Translator, Routing) {
  var movingAssetsIdentifiers = [];
  var movingAssetsNodes = [];
  var sourceCollectionNode = null;
  var CLASS_POPUP_MENU_HIDDEN = 'ibexa-popup-menu--hidden';
  var DRAGING_PLACEHOLDER_OFFSET = 10;
  var LOWER_DRAG_GHOST_PLACEHOLDER_OPACITY = '0.8';
  var dragGhostPlaceholderNode = doc.querySelector('.ibexa-pc-product-assets__drag-ghost-placeholder-container');
  var createAssetForm = doc.querySelector('form[name=asset_create]');
  var deleteAssetsForm = doc.querySelector('form[name=asset_bulk_delete]');
  var tagAssetsForm = doc.querySelector('form[name=asset_tag]');
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var assetCreateUri = Routing.generate('ibexa.asset.upload_image');
  var assetToolbarActionBtns = doc.querySelectorAll('.ibexa-pc-product-asset__toolbar-actions-btn');
  var showMoreTagsBtn = doc.querySelectorAll('.ibexa-pc-product-assets-collection__hidden-tags-more-btn');
  var allAssetCheckedTogglerCheckbox = doc.querySelectorAll('.ibexa-pc-product-assets-collection__selection-toggler-checkbox');
  var assetsDropZones = doc.querySelectorAll('.ibexa-pc-product-assets-collection');
  var assetsFileInputs = doc.querySelectorAll('.ibexa-pc-product-assets-collection__file-input');
  var assetsAddBtns = doc.querySelectorAll('.ibexa-pc-product-assets-source__btn-add');
  var assetsImgs = doc.querySelectorAll('.ibexa-pc-product-asset img');
  var selectFromLibraryBtns = doc.querySelectorAll('.ibexa-pc-product-assets-source__select-from-library');
  var markAssetCheckboxes = doc.querySelectorAll('.ibexa-pc-product-asset__mark-checkbox');
  var deleteSelectdAssetsBtns = doc.querySelectorAll('.ibexa-pc-product-assets-collection__delete-selected-assets');
  var deleteCollectionBtns = doc.querySelectorAll('.ibexa-pc-product-assets-collection__remove-btn');
  var deleteSingleAssetBtns = doc.querySelectorAll('.ibexa-pc-product-asset__actions-popup-btn--delete');
  var createCollectionModalBtn = doc.querySelector('.ibexa-pc-product-assets__create-collection-modal-btn');
  var assetsValidationStatusModalNode = doc.querySelector('#ibexa-pc-product-assets-validation-status-modal');
  var assetsValidationStatusModalInstance = bootstrap.Modal.getOrCreateInstance(assetsValidationStatusModalNode);
  var assetsValidationStatusListNode = assetsValidationStatusModalNode.querySelector('.ibexa-pc-product-assets__validation-status-list');
  var validationStatusListItemTemplate = assetsValidationStatusListNode.dataset.validationStatusListItemTemplate;
  var assetsValidationStatusModalConfirmBtn = assetsValidationStatusModalNode.querySelector('.ibexa-pc-product-assets__validation-status-confirm-btn');
  var createCollectionModalSubtitleNode;
  var initCollectionModal = function initCollectionModal() {
    var createCollectionModalNode = doc.querySelector('.ibexa-pc-product-assets__create-collection-modal');
    if (!createCollectionModalNode) {
      return;
    }
    var createCollectionModalInstance = bootstrap.Modal.getOrCreateInstance(createCollectionModalNode);
    var createCollectionBtn = createCollectionModalNode.querySelector('.ibexa-pc-product-assets__create-collection-btn');
    var createCollection = function createCollection() {
      var availableAssetSelected = doc.querySelectorAll('.ibexa-pc-product-assets-collection .ibexa-pc-product-asset__mark-checkbox:checked');
      var assetsToAssign = _toConsumableArray(availableAssetSelected).map(function (asset) {
        return asset.value;
      });
      availableAssetSelected.forEach(function (asset) {
        var collectionNode = asset.closest('.ibexa-pc-product-assets-collection');
        toggleLoaderVisibility(collectionNode);
      });
      createCollectionModalInstance.hide();
      assignAssetsToCollection(assetsToAssign);
    };
    createCollectionModalSubtitleNode = createCollectionModalNode.querySelector('.ibexa-pc-product-assets__create-collection-modal .ibexa-modal__subheader');
    createCollectionBtn.addEventListener('click', createCollection, false);
  };
  var uploadAsset = function uploadAsset(file) {
    var form = new FormData();
    var options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'X-CSRF-Token': token
      },
      body: form,
      mode: 'same-origin',
      credentials: 'same-origin'
    };
    form.append('languageCode', ibexa.adminUiConfig.languages.priority[0]);
    form.append('file', file);
    return fetch(assetCreateUri, options).then(ibexa.helpers.request.getJsonFromResponse).then(function (response) {
      return _objectSpread(_objectSpread({}, response), {}, {
        fileName: file.name
      });
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var insertValidationStatusListItem = function insertValidationStatusListItem(asset) {
    var _asset$error;
    var extraClassess = asset.error ? 'ibexa-pc-product-assets__validation-status-list-item--invalid' : '';
    var iconName = asset.error ? 'warning-triangle' : 'checkmark';
    var msg = (_asset$error = asset.error) !== null && _asset$error !== void 0 ? _asset$error : Translator.trans( /*@Desc("100% Uploaded")*/'product.view.assets.validation_status_modal.success', {}, 'product_catalog');
    var renderedValidationStatusListItem = validationStatusListItemTemplate.replace('{{ extra_classess }}', extraClassess).replace('{{ file_name }}', asset.fileName).replace('{{ icon_name }}', iconName).replace('{{ msg }}', msg);
    assetsValidationStatusListNode.insertAdjacentHTML('beforeend', renderedValidationStatusListItem);
  };
  var saveNewAssets = function saveNewAssets(assets) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var urisInput = createAssetForm.querySelector('#asset_create_uris');
    var tagsInput = createAssetForm.querySelector('#asset_create_tags');
    var invalidAssets = assets.filter(function (asset) {
      return !asset.destinationContent;
    });
    var validAssets = assets.filter(function (asset) {
      return asset.destinationContent;
    });
    var uriInputValue = validAssets.map(function (asset) {
      return asset.destinationContent && "ezcontent://".concat(asset.destinationContent.id);
    }).join(',');
    var tagsInputValue = tags.map(function (tag) {
      return "".concat(tag.attributeName, ":").concat(tag.attributeValue);
    }).join(',');
    urisInput.value = uriInputValue;
    tagsInput.value = tagsInputValue !== null && tagsInputValue !== void 0 ? tagsInputValue : '';
    assetsValidationStatusListNode.innerHTML = '';
    invalidAssets.forEach(insertValidationStatusListItem);
    validAssets.forEach(insertValidationStatusListItem);
    if (invalidAssets.length) {
      var modalSubheaderNode = assetsValidationStatusModalNode.querySelector('.ibexa-modal__subheader');
      var uploadedFilesCountMsg = Translator.trans( /*@Desc("Files not uploaded (%invalid_count%) Files successfuly uploaded (%valid_count%)")*/'product.view.assets.validation_status_modal.not_uploaded_count_msg', {
        invalid_count: invalidAssets.length,
        valid_count: validAssets.length
      }, 'product_catalog');
      modalSubheaderNode.innerHTML = uploadedFilesCountMsg;
      assetsValidationStatusModalInstance.show();
      return;
    }
    createAssetForm.submit();
  };
  var shoudlCancelCollectionAction = function shoudlCancelCollectionAction(targetCollectionNode) {
    var isMovingAction = !!movingAssetsIdentifiers.length;
    var isTargetCollectionSourceCollection = targetCollectionNode.isEqualNode(sourceCollectionNode);
    return isMovingAction && isTargetCollectionSourceCollection;
  };
  var handleDropAsset = function handleDropAsset(event) {
    var targetCollectionNode = event.currentTarget;
    if (shoudlCancelCollectionAction(targetCollectionNode)) {
      return;
    }
    targetCollectionNode.classList.remove('ibexa-pc-product-assets-collection--active');
    if (movingAssetsIdentifiers.length) {
      var tagsToAssign = getAssetsToAssign(targetCollectionNode);
      movingAssetsNodes.forEach(function (movingAssetNode) {
        return movingAssetNode.remove();
      });
      toggleLoaderVisibility(targetCollectionNode);
      assignAssetsToCollection(movingAssetsIdentifiers, tagsToAssign);
      hideDragGhostPlaceholder();
    } else {
      var files = event.dataTransfer.files;
      addAssets(event.currentTarget, files);
    }
    sourceCollectionNode = null;
  };
  var addAssets = function addAssets(currentTarget, files) {
    var collectionNode = currentTarget.closest('.ibexa-pc-product-assets-collection');
    var tagsToAssign = getAssetsToAssign(collectionNode);
    var filteredFiles = _toConsumableArray(files).filter(function (file) {
      return file.type.includes('image');
    });
    var uploadedAssets = filteredFiles.map(uploadAsset);
    toggleLoaderVisibility(collectionNode);
    Promise.all(uploadedAssets).then(function (assets) {
      return saveNewAssets(assets, tagsToAssign);
    })["catch"](function (error) {
      toggleLoaderVisibility(collectionNode);
      ibexa.helpers.notification.showErrorNotification(error);
    });
  };
  var addAssetsByInput = function addAssetsByInput(_ref) {
    var currentTarget = _ref.currentTarget;
    return addAssets(currentTarget, currentTarget.files);
  };
  var addAssetsByUDW = function addAssetsByUDW(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var collectionNode = currentTarget.closest('.ibexa-pc-product-assets-collection');
    var udwContainer = doc.getElementById('react-udw');
    var udwRoot = ReactDOM.createRoot(udwContainer);
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var title = Translator.trans( /*@Desc("Select Image Asset")*/'ezimageasset.title', {}, 'product_catalog');
    var closeUDW = function closeUDW() {
      return udwRoot.unmount();
    };
    var onConfirm = function onConfirm(assets) {
      var urisInput = createAssetForm.querySelector('#asset_create_uris');
      var tagsInput = createAssetForm.querySelector('#asset_create_tags');
      var tagsToAssign = getAssetsToAssign(collectionNode);
      var uriInputValue = assets.map(function (asset) {
        return "ezcontent://".concat(asset.ContentInfo.Content._id);
      }).join(',');
      var tagsInputValue = tagsToAssign.map(function (tag) {
        return "".concat(tag.attributeName, ":").concat(tag.attributeValue);
      }).join(',');
      urisInput.value = uriInputValue;
      tagsInput.value = tagsInputValue !== null && tagsInputValue !== void 0 ? tagsInputValue : '';
      createAssetForm.submit();
      toggleLoaderVisibility(collectionNode);
      closeUDW();
    };
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread(_objectSpread({
      onConfirm: onConfirm,
      onCancel: closeUDW,
      title: title
    }, config), {}, {
      multiple: true
    })));
  };
  var getAssetsToAssign = function getAssetsToAssign(collectionNode) {
    var tagNodes = collectionNode.querySelectorAll('.ibexa-pc-product-assets-collection__header .ibexa-pc-product-assets-collection__header-tag-content');
    var tagsToAssign = _toConsumableArray(tagNodes).map(function (tagNode) {
      var _tagNode$dataset = tagNode.dataset,
        tagAttributeName = _tagNode$dataset.tagAttributeName,
        tagAttributeValue = _tagNode$dataset.tagAttributeValue;
      return {
        attributeName: tagAttributeName,
        attributeValue: tagAttributeValue
      };
    });
    return tagsToAssign;
  };
  var createDeleteAssetsInput = function createDeleteAssetsInput(assetValuesToDelete) {
    var deleteAssetsContainer = doc.querySelector('.ibexa-pc-product-assets-delete__items');
    var hiddenInputTemplate = deleteAssetsContainer.dataset.hiddenInputTemplate;
    deleteAssetsContainer.innerHTML = '';
    assetValuesToDelete.forEach(function (assetValue) {
      var renderedHiddenInput = hiddenInputTemplate.replaceAll('__name__', assetValue);
      deleteAssetsContainer.insertAdjacentHTML('beforeend', renderedHiddenInput);
      var insertedInput = deleteAssetsContainer.querySelector('.ibexa-pc-product-assets-delete__item:last-child');
      insertedInput.value = assetValue;
    });
  };
  var deleteSelectedAssets = function deleteSelectedAssets(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var assetsCollection = currentTarget.closest('.ibexa-pc-product-assets-collection');
    var collectionSelectedAssets = assetsCollection.querySelectorAll('.ibexa-pc-product-asset__mark-checkbox:checked');
    var collectionSelectedAssetValues = _toConsumableArray(collectionSelectedAssets).map(function (selectedAsset) {
      return selectedAsset.value;
    });
    if (!collectionSelectedAssetValues.length) {
      return;
    }
    createDeleteAssetsInput(collectionSelectedAssetValues);
    deleteAssetsForm.submit();
  };
  var deleteAsset = function deleteAsset(_ref4) {
    var currentTarget = _ref4.currentTarget;
    var asset = currentTarget.closest('.ibexa-pc-product-asset');
    var assetCheckboxValue = asset.querySelector('.ibexa-pc-product-asset__mark-checkbox').value;
    createDeleteAssetsInput([assetCheckboxValue]);
    deleteAssetsForm.submit();
  };
  var deleteCollection = function deleteCollection(_ref5) {
    var currentTarget = _ref5.currentTarget;
    var assetsCollection = currentTarget.closest('.ibexa-pc-product-assets-collection');
    var assetsCollectionCheckboxes = assetsCollection.querySelectorAll('.ibexa-pc-product-asset__mark-checkbox');
    var assetsCollectionValues = _toConsumableArray(assetsCollectionCheckboxes).map(function (assetCheckbox) {
      return assetCheckbox.value;
    });
    if (!assetsCollectionValues.length) {
      return;
    }
    createDeleteAssetsInput(assetsCollectionValues);
    deleteAssetsForm.submit();
  };
  var toggleAssetChecked = function toggleAssetChecked(_ref6) {
    var currentTarget = _ref6.currentTarget;
    var currentAssetNode = currentTarget.closest('.ibexa-pc-product-asset');
    var assetsCollection = currentTarget.closest('.ibexa-pc-product-assets-collection');
    var assetsInCollection = assetsCollection.querySelectorAll('.ibexa-pc-product-asset');
    var deleteSelectedAssetsBtn = assetsCollection.querySelector('.ibexa-pc-product-assets-collection__delete-selected-assets');
    var toggleAllSelectionLabelNode = assetsCollection.querySelector('.ibexa-pc-product-assets-collection__selection-toggler-label');
    var toggleAllSelectionCheckbox = assetsCollection.querySelector('.ibexa-pc-product-assets-collection__selection-toggler-checkbox');
    var hasSomeAssetSelected = _toConsumableArray(assetsInCollection).some(function (asset) {
      var selectionCheckbox = asset.querySelector('.ibexa-pc-product-asset__mark-checkbox');
      return selectionCheckbox.checked;
    });
    var hasAllAssetsSelected = _toConsumableArray(assetsInCollection).every(function (asset) {
      var selectionCheckbox = asset.querySelector('.ibexa-pc-product-asset__mark-checkbox');
      return selectionCheckbox.checked;
    });
    var toggleAllSelectionDeselectAllLabel = Translator.trans( /*@Desc("Deselect All")*/'product.view.assets.create_collection.deselect_all', {}, 'product_catalog');
    var toggleAllSelectionSelectAllLabel = Translator.trans( /*@Desc("Select All")*/'product.view.assets.create_collection.select_all', {}, 'product_catalog');
    var toggleAllSelectionLabel = hasSomeAssetSelected ? toggleAllSelectionDeselectAllLabel : toggleAllSelectionSelectAllLabel;
    var selectedAssets = doc.querySelectorAll('.ibexa-pc-product-assets-collection .ibexa-pc-product-asset__mark-checkbox:checked');
    currentAssetNode.classList.toggle('ibexa-pc-product-asset--selected', currentTarget.checked);
    toggleAllSelectionLabelNode.innerHTML = toggleAllSelectionLabel;
    toggleAllSelectionCheckbox.checked = hasAllAssetsSelected;
    toggleAllSelectionCheckbox.classList.toggle('ibexa-pc-product-assets-collection__selection-toggler-checkbox--some-selected', hasSomeAssetSelected && !hasAllAssetsSelected);
    deleteSelectedAssetsBtn.toggleAttribute('disabled', !hasSomeAssetSelected);
    createCollectionModalBtn === null || createCollectionModalBtn === void 0 || createCollectionModalBtn.toggleAttribute('disabled', !selectedAssets.length);
    createCollectionModalSubtitleNode.innerHTML = Translator.trans( /*@Desc("%count% image(s) selected")*/'product.view.assets.create_collection.sub_title', {
      count: selectedAssets.length
    }, 'product_catalog');
  };
  var toggleAllAssestsChecked = function toggleAllAssestsChecked(_ref7) {
    var currentTarget = _ref7.currentTarget;
    var assetsCollection = currentTarget.closest('.ibexa-pc-product-assets-collection');
    var assetsInCollection = assetsCollection.querySelectorAll('.ibexa-pc-product-asset');
    var hasSomeAssetSelected = _toConsumableArray(assetsInCollection).some(function (asset) {
      var selectionCheckbox = asset.querySelector('.ibexa-pc-product-asset__mark-checkbox');
      return selectionCheckbox.checked;
    });
    assetsInCollection.forEach(function (asset) {
      var selectionCheckbox = asset.querySelector('.ibexa-pc-product-asset__mark-checkbox');
      selectionCheckbox.checked = !hasSomeAssetSelected;
      selectionCheckbox.dispatchEvent(new Event('change'));
    });
  };
  var assignAssetsToCollection = function assignAssetsToCollection(assets) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var tagAssetsInput = tagAssetsForm.querySelector('input[name="asset_tag[assets]"]');
    var tagAssetsInputValue = assets.join(',');
    tags.forEach(function (_ref8) {
      var attributeName = _ref8.attributeName,
        attributeValue = _ref8.attributeValue;
      var attributeInput = tagAssetsForm.querySelector("[name=\"asset_tag[attributes][".concat(attributeName, "][value]\"]"));
      var type = attributeInput.type;
      if (type === 'checkbox') {
        attributeInput.checked = attributeValue;
      } else {
        attributeInput.value = attributeValue;
      }
    });
    tagAssetsInput.value = tagAssetsInputValue;
    tagAssetsForm.submit();
  };
  var triggerFilesBrowser = function triggerFilesBrowser(_ref9) {
    var currentTarget = _ref9.currentTarget;
    var targetCollectionNode = currentTarget.closest('.ibexa-pc-product-assets-collection');
    var fileInput = targetCollectionNode.querySelector('.ibexa-pc-product-assets-collection__file-input');
    fileInput.click();
  };
  var toggleLoaderVisibility = function toggleLoaderVisibility(collectionNode) {
    var collectionBodyNode = collectionNode.querySelector('.ibexa-pc-product-assets-collection__body');
    var collectionSpinnerNode = collectionNode.querySelector('.ibexa-pc-product-assets-collection__spinner');
    collectionBodyNode.classList.toggle('ibexa-pc-product-assets-collection__body--hidden');
    collectionSpinnerNode.classList.toggle('ibexa-pc-product-assets-collection__spinner--hidden');
  };
  var resetDefaultGhostImage = function resetDefaultGhostImage(_ref10) {
    var dataTransfer = _ref10.dataTransfer;
    var image = document.createElement('img');
    dataTransfer.setDragImage(image, 0, 0);
  };
  var fillDragGhostPlaceholder = function fillDragGhostPlaceholder() {
    var top = 0;
    var right = 0;
    var zIndex = 5;
    movingAssetsNodes.forEach(function (movingNode) {
      if (zIndex < 0) {
        return;
      }
      var copyNode = movingNode.cloneNode(true);
      copyNode.style.position = 'absolute';
      copyNode.style.top = "".concat(top, "px");
      copyNode.style.right = "".concat(right, "px");
      copyNode.style.zIndex = zIndex;
      copyNode.classList.add('ibexa-pc-product-asset--moving-placeholder');
      if (top !== 0) {
        copyNode.style.opacity = LOWER_DRAG_GHOST_PLACEHOLDER_OPACITY;
      }
      dragGhostPlaceholderNode.insertBefore(copyNode, dragGhostPlaceholderNode.firstChild);
      movingNode.classList.add('ibexa-pc-product-asset--moving');
      top = top + DRAGING_PLACEHOLDER_OFFSET;
      right = right + DRAGING_PLACEHOLDER_OFFSET;
      zIndex--;
    });
  };
  var showDragGhostPlaceholder = function showDragGhostPlaceholder(_ref11) {
    var clientX = _ref11.clientX,
      clientY = _ref11.clientY;
    dragGhostPlaceholderNode.style.display = 'block';
    dragGhostPlaceholderNode.style.top = "".concat(clientY + DRAGING_PLACEHOLDER_OFFSET, "px");
    dragGhostPlaceholderNode.style.left = "".concat(clientX + DRAGING_PLACEHOLDER_OFFSET, "px");
  };
  var hideDragGhostPlaceholder = function hideDragGhostPlaceholder() {
    dragGhostPlaceholderNode.style.display = 'none';
    dragGhostPlaceholderNode.style.left = '0px';
    dragGhostPlaceholderNode.style.top = '0px';
  };
  var handleDragEnd = function handleDragEnd() {
    hideDragGhostPlaceholder();
    dragGhostPlaceholderNode.innerHTML = '';
    movingAssetsNodes.forEach(function (movingNode) {
      movingNode.classList.remove('ibexa-pc-product-asset--moving');
    });
    movingAssetsNodes = [];
    movingAssetsIdentifiers = [];
  };
  var setMovingData = function setMovingData(_ref12) {
    var target = _ref12.target;
    var draggingAsset = target.classList.contains('ibexa-pc-product-asset') ? target : target.closest('.ibexa-pc-product-asset');
    var selectedAssets = _toConsumableArray(doc.querySelectorAll('.ibexa-pc-product-asset--selected'));
    sourceCollectionNode = draggingAsset.closest('.ibexa-pc-product-assets-collection');
    movingAssetsNodes = selectedAssets.length ? selectedAssets : [draggingAsset];
    movingAssetsIdentifiers = movingAssetsNodes.map(function (movingAsset) {
      return movingAsset.querySelector('.ibexa-pc-product-asset__mark-checkbox').value;
    });
  };
  var confirmInvalidAssetsMsg = function confirmInvalidAssetsMsg() {
    assetsValidationStatusModalInstance.hide();
    createAssetForm.submit();
  };
  var HiddenTagsPopupMenu = /*#__PURE__*/function (_ibexa$core$PopupMenu) {
    "use strict";

    _inherits(HiddenTagsPopupMenu, _ibexa$core$PopupMenu);
    var _super = _createSuper(HiddenTagsPopupMenu);
    function HiddenTagsPopupMenu(config) {
      var _this;
      _classCallCheck(this, HiddenTagsPopupMenu);
      _this = _super.call(this, config);
      _this.attachSearchChange();
      _this.filterItems = _this.filterItems.bind(_assertThisInitialized(_this));
      return _this;
    }
    _createClass(HiddenTagsPopupMenu, [{
      key: "attachOnClickToItem",
      value: function attachOnClickToItem() {}
    }, {
      key: "handleClickOutsidePopupMenu",
      value: function handleClickOutsidePopupMenu(event) {
        var isSearchClick = !!event.target.closest('.ibexa-input-text-wrapper--search');
        var isPopupMenuExpanded = !this.popupMenuElement.classList.contains(CLASS_POPUP_MENU_HIDDEN);
        var isClickInsideParentElement = this.triggerElement.contains(event.target);
        if (!isPopupMenuExpanded || isClickInsideParentElement || isSearchClick) {
          return;
        }
        this.popupMenuElement.classList.add(CLASS_POPUP_MENU_HIDDEN);
      }
    }, {
      key: "attachSearchChange",
      value: function attachSearchChange() {
        var _this2 = this;
        var searchInput = this.popupMenuElement.querySelector('.ibexa-input--text');
        searchInput.addEventListener('change', function (event) {
          return _this2.filterItems(event);
        }, false);
        searchInput.addEventListener('keyup', function (event) {
          return _this2.filterItems(event);
        }, false);
      }
    }, {
      key: "filterItems",
      value: function filterItems(_ref13) {
        var currentTarget = _ref13.currentTarget;
        var items = this.getItems();
        var searchFilterValueLowerCase = currentTarget.value.toLowerCase();
        items.forEach(function (item) {
          var filterValue = item.dataset.filterValue;
          var filterValueLowerCase = filterValue.toLowerCase();
          item.classList.toggle('ibexa-pc-product-assets-collection__hidden-tag--hidden', !filterValueLowerCase.includes(searchFilterValueLowerCase));
        });
      }
    }]);
    return HiddenTagsPopupMenu;
  }(ibexa.core.PopupMenu);
  assetsDropZones.forEach(function (dropZone) {
    dropZone.addEventListener('dragstart', function (event) {
      event.dataTransfer.effectAllowed = 'move';
      setMovingData(event);
      if (!event.toElement) {
        return;
      }
      resetDefaultGhostImage(event);
      fillDragGhostPlaceholder();
    }, false);
    dropZone.addEventListener('drag', showDragGhostPlaceholder, false);
    dropZone.addEventListener('dragend', handleDragEnd, false);
    dropZone.addEventListener('drop', handleDropAsset, false);
    dropZone.addEventListener('dragover', function (event) {
      var targetCollectionNode = event.currentTarget;
      if (shoudlCancelCollectionAction(targetCollectionNode)) {
        return;
      }
      targetCollectionNode.classList.add('ibexa-pc-product-assets-collection--active');
    });
    dropZone.addEventListener('dragleave', function (_ref14) {
      var currentTarget = _ref14.currentTarget;
      currentTarget.classList.remove('ibexa-pc-product-assets-collection--active');
    });
  });
  selectFromLibraryBtns.forEach(function (selectFromLibraryBtn) {
    return selectFromLibraryBtn.addEventListener('click', addAssetsByUDW, false);
  });
  assetsFileInputs.forEach(function (fileInput) {
    fileInput.addEventListener('change', addAssetsByInput, false);
  });
  markAssetCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', toggleAssetChecked, false);
  });
  assetsAddBtns.forEach(function (assetAddBtn) {
    assetAddBtn.addEventListener('click', triggerFilesBrowser, false);
  });
  assetToolbarActionBtns.forEach(function (assetToolbarActionBtn) {
    var assetToolbarActions = assetToolbarActionBtn.closest('.ibexa-pc-product-asset').querySelector('.ibexa-pc-product-asset__actions-popup');
    new ibexa.core.PopupMenu({
      popupMenuElement: assetToolbarActions,
      triggerElement: assetToolbarActionBtn,
      onItemClick: function onItemClick() {}
    });
  });
  showMoreTagsBtn.forEach(function (hiddenTagsShowBtn) {
    var hiddenTagsPopup = hiddenTagsShowBtn.nextElementSibling;
    new HiddenTagsPopupMenu({
      popupMenuElement: hiddenTagsPopup,
      triggerElement: hiddenTagsShowBtn
    });
  });
  allAssetCheckedTogglerCheckbox.forEach(function (assetCheckedTogglerCheckbox) {
    assetCheckedTogglerCheckbox.addEventListener('click', toggleAllAssestsChecked, false);
  });
  deleteSelectdAssetsBtns.forEach(function (deleteSelectdAssetsBtn) {
    deleteSelectdAssetsBtn.addEventListener('click', deleteSelectedAssets, false);
  });
  deleteCollectionBtns.forEach(function (deleteCollectionBtn) {
    deleteCollectionBtn.addEventListener('click', deleteCollection, false);
  });
  deleteSingleAssetBtns.forEach(function (deleteSingleAssetBtn) {
    deleteSingleAssetBtn.addEventListener('click', deleteAsset, false);
  });
  assetsValidationStatusModalConfirmBtn.addEventListener('click', confirmInvalidAssetsMsg, false);
  global.addEventListener('dragover', function (event) {
    return event.preventDefault();
  }, false);
  global.addEventListener('drop', function (event) {
    return event.preventDefault();
  }, false);
  assetsImgs.forEach(function (assetImg) {
    return assetImg.setAttribute('draggable', false);
  });
  initCollectionModal();
})(window, window.document, window.ibexa, window.bootstrap, window.React, window.ReactDOM, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.completeness.tab.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.completeness.tab.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var triggerTabsOpenBtns = doc.querySelectorAll('.ibexa-pc-completeness-task .ibexa-btn--trigger-tab-open');
  var openTab = function openTab(_ref) {
    var currentTarget = _ref.currentTarget;
    var tabId = currentTarget.dataset.tabId;
    var tabLink = doc.getElementById(tabId);
    var tabInstance = bootstrap.Tab.getOrCreateInstance(tabLink);
    tabInstance.show();
  };
  triggerTabsOpenBtns.forEach(function (openTabBtn) {
    openTabBtn.addEventListener('click', openTab, false);
  });
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.tab.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.tab.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var currencyDropdown = doc.querySelector('.ibexa-pc-product-prices__actions-currency-dropdown');
  if (currencyDropdown) {
    var currencyDropdownSourceInput = currencyDropdown.querySelector('.ibexa-dropdown__source select');
    var currencySelectForm = doc.querySelector('.ibexa-pc-product-prices__actions-currency-form');
    currencyDropdownSourceInput.addEventListener('change', function () {
      return currencySelectForm.submit();
    }, false);
  }
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.variants.tab.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.variants.tab.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var ENTER_KEY_CODE = 13;
  var generateVariantsForm = doc.querySelector('.ibexa-generate-variants__form');
  var generateVariantsModalNode = doc.querySelector('#generate-variants-modal');
  if (!generateVariantsForm) {
    return;
  }
  var inputsToValidate = generateVariantsForm.querySelectorAll('.ibexa-input[required]');
  var toggleFormSpinner = function toggleFormSpinner() {
    generateVariantsForm.classList.toggle('ibexa-generate-variants__form--sent');
  };
  var validateForm = function validateForm(event) {
    inputsToValidate.forEach(validateField);
    var invalidInputs = generateVariantsForm.querySelectorAll('.is-invalid');
    if (invalidInputs.length) {
      event.preventDefault();
      return;
    }
    toggleFormSpinner();
  };
  var validateField = function validateField(input) {
    var invalidClassTargetNode = input.closest('.ibexa-generate-variants__form-field').querySelector('.ibexa-pc-invalid-class-target');
    invalidClassTargetNode === null || invalidClassTargetNode === void 0 || invalidClassTargetNode.classList.toggle('is-invalid', !input.value);
  };
  var resetInvalidNodesState = function resetInvalidNodesState() {
    var invalidNodes = generateVariantsForm.querySelectorAll('.is-invalid');
    invalidNodes.forEach(function (invalidNode) {
      return invalidNode.classList.remove('is-invalid');
    });
  };
  generateVariantsModalNode.addEventListener('hidden.bs.modal', resetInvalidNodesState, false);
  inputsToValidate.forEach(function (input) {
    return input.addEventListener('change', function (event) {
      return validateField(event.currentTarget);
    }, false);
  });
  generateVariantsForm.addEventListener('submit', validateForm, false);
  generateVariantsForm.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
    }
  }, false);
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.tab.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/details.language.switcher.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/generate.variants.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.completeness.tab.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.assets.tab.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.variants.tab.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/sidebar/extra.actions.js"));
/******/ }
]);