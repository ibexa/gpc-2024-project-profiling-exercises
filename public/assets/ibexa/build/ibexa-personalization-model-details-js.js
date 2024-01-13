(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-model-details-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.details.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.details.js ***!
  \**************************************************************************************/
/***/ (() => {

(function (doc) {
  var submodelSelect = doc.querySelector('.ibexa-perso-model-details__submodel-select');
  var handleSubmodelChange = function handleSubmodelChange() {
    var selectedValue = submodelSelect.value;
    var detailsNode = submodelSelect.closest('.ibexa-details');
    var allSubmodelsDetails = detailsNode.querySelectorAll('.ibexa-perso-submodel-details');
    allSubmodelsDetails.forEach(function (node) {
      var isSelectedSubmodel = node.classList.contains("ibexa-perso-submodel-details--".concat(selectedValue));
      node.classList.toggle('d-none', !isSelectedSubmodel);
    });
  };
  if (submodelSelect) {
    submodelSelect.addEventListener('change', handleSubmodelChange, true);
  }
})(window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/model.details.js"));
/******/ }
]);