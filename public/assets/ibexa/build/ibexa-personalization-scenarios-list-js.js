(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-scenarios-list-js"],{

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

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.list.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.list.js ***!
  \***************************************************************************************/
/***/ (() => {

(function (doc) {
  var scenarioForm = doc.querySelector('.ibexa-perso-scenarios-list__period-form');
  var periodSelect = doc.querySelector('.ibexa-perso-scenarios-list__period-form-select');
  if (periodSelect) {
    periodSelect.addEventListener('change', function () {
      var dateIntervalInput = scenarioForm.querySelector('input[name="scenario-form[period][date_interval]"]');
      dateIntervalInput.value = event.currentTarget.value;
      scenarioForm.submit();
    }, false);
  }
})(window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/scenarios.list.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/page.title.js"));
/******/ }
]);