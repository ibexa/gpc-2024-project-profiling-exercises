(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-availability-edit-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.availability.edit.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.availability.edit.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var productInfiniteCheckbox = doc.querySelector('.ibexa-pc-edit__product-infinite-checkbox');
  var productStockInput = doc.querySelector('.ibexa-pc-edit__product-stock-input');
  productInfiniteCheckbox.addEventListener('change', function () {
    productStockInput.disabled = productInfiniteCheckbox.checked;
  }, false);
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.availability.edit.js"));
/******/ }
]);