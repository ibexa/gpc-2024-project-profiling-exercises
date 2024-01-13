(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-collection-block-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js ***!
  \*************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (global, doc, ibexa, Translator) {
  var collection = doc.querySelector('.ibexa-pb-product-collection');
  var collectionListHeader = collection.querySelector('.ibexa-pb-product-collection__list-header');
  var selectProductBtn = collection.querySelector('.ibexa-pb-product-collection__select-product-btn');
  var addProductBtn = collection.querySelector('.ibexa-pb-product-collection__add-product-btn');
  var collectionListWrapper = collection.querySelector('.ibexa-pb-product-collection__list-wrapper');
  var collectionList = collection.querySelector('.ibexa-pb-product-collection__list');
  var collectionListItems = collectionList.querySelectorAll('.ibexa-pb-product-collection-item');
  var hiddenInputsList = collection.querySelector('.ibexa-pb-product-collection__hidden-inputs-list');
  var productCodeInput = collection.querySelector('.ibexa-pb-product-collection__product-code-input');
  var FIRST_PRODUCT_ID = 0;
  var INIT_PRODUCTS_LIST_LENGTH = 0;
  var PRODUCTS_LIST_NO_ITEMS_CLASS = 'ibexa-pb-product-collection__list-wrapper--no-items';
  var ERROR_HIDDEN_CLASS = 'ibexa-pb-product-collection__error--hidden';
  var prepareRequest = function prepareRequest(url, requestOptions) {
    var token = document.querySelector('meta[name="CSRF-Token"]').content;
    var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    return new Request(url, _objectSpread(_objectSpread({
      mode: 'same-origin',
      credentials: 'same-origin'
    }, requestOptions), {}, {
      headers: _objectSpread({
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      }, requestOptions.headers)
    }));
  };
  var fetchRequest = function fetchRequest(request) {
    return fetch(request).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    });
  };
  var loadProduct = function loadProduct(productCode) {
    var request = prepareRequest("/api/ibexa/v2/product/catalog/products/".concat(productCode), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.ProductGet+json',
        Accept: 'application/json'
      }
    });
    return fetchRequest(request);
  };
  var loadProductView = function loadProductView(productList) {
    var request = prepareRequest("/api/ibexa/v2/product/catalog/products/view", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.ProductViewInput+json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ViewInput: {
          identifier: 'Default',
          ProductQuery: {
            limit: productList.length,
            offset: 0,
            Filter: {
              ProductCodeCriterion: productList
            },
            SortClauses: {
              ProductName: 'descending'
            }
          }
        }
      })
    });
    return fetchRequest(request);
  };
  var loadLocationsList = function loadLocationsList(contentId) {
    var request = prepareRequest("/api/ibexa/v2/content/objects/".concat(contentId, "/locations"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.LocationList+json',
        Accept: 'application/json'
      }
    });
    return fetchRequest(request);
  };
  var loadLocation = function loadLocation(url) {
    var request = prepareRequest(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.Location+json',
        Accept: 'application/json'
      }
    });
    return fetchRequest(request);
  };
  var updateListCounter = function updateListCounter() {
    var collectionLength = collectionList.children.length;
    var listTitle = Translator.trans( /*@Desc("Product list (%count%)")*/'product.collection.product_list', {
      count: collectionLength
    }, 'page_builder_block');
    collectionListHeader.innerHTML = listTitle;
  };
  var toggleError = function toggleError(errorType) {
    var errors = doc.querySelectorAll('.ibexa-pb-product-collection__error');
    errors.forEach(function (error) {
      return error.classList.add(ERROR_HIDDEN_CLASS);
    });
    if (errorType) {
      var errorContainer = collection.querySelector(".ibexa-pb-product-collection__error--".concat(errorType));
      errorContainer.classList.remove(ERROR_HIDDEN_CLASS);
    }
  };
  var checkIfProductExist = function checkIfProductExist(productCode) {
    var productInputs = _toConsumableArray(hiddenInputsList.querySelectorAll('input.ibexa-pb-product-collection-item__input'));
    var isProductAdded = productInputs.some(function (input) {
      return input.value === productCode;
    });
    return isProductAdded;
  };
  var attachListenersToProduct = function attachListenersToProduct(item, hiddenItem) {
    item.querySelector('.ibexa-btn--trash').addEventListener('click', function (event) {
      return removeProduct(event, item, hiddenItem);
    }, false);
  };
  var onUDWConfirm = function onUDWConfirm(products, draggable) {
    var productsObj = products.map(function (product) {
      var productSpecification = product.ContentInfo.Content.CurrentVersion.Version.Fields.field.find(function (field) {
        return field.fieldTypeIdentifier === 'ibexa_product_specification';
      });
      return {
        locationId: product.id,
        code: productSpecification.fieldValue.code
      };
    });
    var productsCodes = productsObj.map(function (product) {
      return product.code;
    });
    loadProductView(productsCodes).then(function (result) {
      var productList = result.ProductView.Result.ProductList.Product;
      productList.forEach(function (product) {
        var code = product.code,
          name = product.name,
          identifier = product.ProductType.identifier;
        var location = productsObj.find(function (productObj) {
          return productObj.code === code;
        });
        if (checkIfProductExist(code)) {
          return;
        }
        addProduct(code, name, identifier, location.locationId, draggable);
      });
    });
  };
  var openUdw = function openUdw(_ref, draggable) {
    var currentTarget = _ref.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var title = Translator.trans( /*@Desc("Select products")*/'product.collection.select_products', {}, 'page_builder_block');
    var selectedLocations = _toConsumableArray(collectionList.querySelectorAll('.ibexa-pb-product-collection-item')).map(function (item) {
      return parseInt(item.dataset.locationId, 10);
    });
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        title: title,
        multiple: true,
        selectedLocations: selectedLocations,
        onConfirm: function onConfirm(products) {
          return onUDWConfirm(products, draggable);
        }
      }, config)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  var removeProduct = function removeProduct(event, product, hiddenItem) {
    event.preventDefault();
    product.remove();
    hiddenItem.remove();
    updateListCounter();
    if (hiddenInputsList.children.length <= INIT_PRODUCTS_LIST_LENGTH) {
      collectionListWrapper.classList.add(PRODUCTS_LIST_NO_ITEMS_CLASS);
    }
  };
  var checkProduct = function checkProduct(productCode, draggable) {
    loadProduct(productCode).then(function (result) {
      if (!result) {
        return;
      }
      if (result.Product.isVariant) {
        toggleError('cannot-add-variant');
        return;
      }
      if (checkIfProductExist(productCode)) {
        toggleError('already-added');
        return;
      }
      var _result$Product = result.Product,
        name = _result$Product.name,
        identifier = _result$Product.ProductType.identifier,
        contentId = _result$Product.Content._id;
      loadLocationsList(contentId).then(function (locationList) {
        var _locationList$Locatio = _slicedToArray(locationList.LocationList.Location, 1),
          locationOptions = _locationList$Locatio[0];
        loadLocation(locationOptions._href).then(function (location) {
          var id = location.Location.id;
          addProduct(productCode, name, identifier, id, draggable);
        });
      });
    })["catch"](function (response) {
      if (response.status === 404) {
        toggleError('not-found');
      } else {
        var error = new Error(response.statusText);
        ibexa.helpers.notification.showErrorNotification(error);
      }
    });
  };
  var addProduct = function addProduct(productCode, name, productType, locationId, draggable) {
    toggleError();
    var _collectionListWrappe = collectionListWrapper.dataset,
      productTemplate = _collectionListWrappe.productTemplate,
      nextIndexId = _collectionListWrappe.nextIndexId;
    var index = parseInt(nextIndexId, 10) || FIRST_PRODUCT_ID;
    var filledProductTemplate = productTemplate.replaceAll('__name__', index);
    hiddenInputsList.insertAdjacentHTML('beforeend', filledProductTemplate);
    var hiddenProductItem = hiddenInputsList.lastElementChild;
    var hiddenProductInput = hiddenProductItem.querySelector('input');
    hiddenProductItem.dataset.id = index;
    hiddenProductInput.value = productCode;
    productCodeInput.value = '';
    addProductBtn.disabled = true;
    collectionListWrapper.dataset.nextIndexId = index + 1;
    var itemTemplate = collectionList.dataset.itemTemplate;
    var renderedItem = itemTemplate.replaceAll('__product_name__', name).replaceAll('__product_code__', productCode).replaceAll('__product_type__', productType).replaceAll('__location_id__', locationId).replaceAll('__id__', index);
    collectionList.insertAdjacentHTML('beforeend', renderedItem);
    collectionListWrapper.classList.remove(PRODUCTS_LIST_NO_ITEMS_CLASS);
    attachListenersToProduct(collectionList.lastElementChild, hiddenProductItem);
    draggable.reinit(collectionList.lastElementChild);
    ibexa.helpers.ellipsis.middle.parse(collectionList);
    updateListCounter();
  };
  var sortInputs = function sortInputs() {
    var listItems = _toConsumableArray(collectionList.querySelectorAll('.ibexa-pb-product-collection-item'));
    var hiddenListItems = _toConsumableArray(hiddenInputsList.querySelectorAll('.ibexa-pb-product-collection__item'));
    if (listItems.length === hiddenListItems.length) {
      var idOrder = listItems.map(function (item) {
        return item.dataset.id;
      });
      idOrder.forEach(function (id, index) {
        var hiddenInputsListItem = hiddenListItems.find(function (item) {
          return item.dataset.id === id;
        });
        hiddenInputsList.insertBefore(hiddenInputsListItem, hiddenInputsList.childNodes[index]);
      });
    }
  };
  var initProductCollection = function initProductCollection() {
    var draggable = new CollectionDraggable({
      itemsContainer: collectionList,
      openUdwBtn: selectProductBtn,
      selectorItem: '.ibexa-pb-product-collection-item',
      selectorPlaceholder: '.ibexa-pb-product-collection-placeholder'
    });
    collectionListItems.forEach(function (listItem) {
      var productCode = listItem.dataset.id;
      var hiddenItem = _toConsumableArray(hiddenInputsList.children).find(function (item) {
        return item.dataset.id === productCode;
      });
      attachListenersToProduct(listItem, hiddenItem);
    });
    draggable.init();
    selectProductBtn.addEventListener('click', function (event) {
      return openUdw(event, draggable);
    }, false);
    addProductBtn.addEventListener('click', function () {
      return checkProduct(productCodeInput.value.trim(), draggable);
    }, false);
    if (hiddenInputsList.children.length <= INIT_PRODUCTS_LIST_LENGTH) {
      collectionListWrapper.classList.add(PRODUCTS_LIST_NO_ITEMS_CLASS);
    }
  };
  var CollectionDraggable = /*#__PURE__*/function (_ibexa$core$Draggable) {
    "use strict";

    _inherits(CollectionDraggable, _ibexa$core$Draggable);
    var _super = _createSuper(CollectionDraggable);
    function CollectionDraggable() {
      _classCallCheck(this, CollectionDraggable);
      return _super.apply(this, arguments);
    }
    _createClass(CollectionDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "onDrop", this).call(this);
        sortInputs();
      }
    }, {
      key: "reinit",
      value: function reinit(renderedItem) {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "reinit", this).call(this);
        this.triggerHighlight(renderedItem);
      }
    }]);
    return CollectionDraggable;
  }(ibexa.core.Draggable);
  initProductCollection();
})(window, window.document, window.ibexa, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js"));
/******/ }
]);