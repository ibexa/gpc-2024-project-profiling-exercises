(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-import-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/page.title.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/page.title.js ***!
  \***********************************************************************************/
/***/ (() => {

(function (doc, Routing) {
  var customerIdSelector = doc.querySelector('.ibexa-perso-mandator-selector__select');
  if (!customerIdSelector) {
    return;
  }
  customerIdSelector.addEventListener('change', function (event) {
    var url = Routing.generate('ibexa.personalization.dashboard', {
      customerId: event.target.value
    });
    window.location.href = url;
  }, false);
})(window.document, window.Routing);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/page.title.js"));
/******/ }
]);