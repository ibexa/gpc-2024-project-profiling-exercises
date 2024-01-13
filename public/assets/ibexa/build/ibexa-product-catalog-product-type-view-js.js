(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-type-view-js"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/details.language.switcher.js"));
/******/ }
]);