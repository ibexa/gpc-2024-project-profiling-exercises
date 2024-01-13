(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-catalog-view-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.transition.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.transition.js ***!
  \*******************************************************************************************/
/***/ (() => {

(function (global, doc, Translator) {
  var transitionModal = doc.querySelector('.ibexa-modal--transition-confirmation');
  var transitionModalBody = transitionModal.querySelector('.modal-body');
  var confirmBtn = transitionModal.querySelector('.ibexa-btn--confirm');
  var transitionForm = doc.querySelector('.ibexa-pc-transition-form');
  var transitionSelect = transitionForm.querySelector('.ibexa-pc-transition-form__select');
  var selectedTransition;
  confirmBtn.addEventListener('click', function () {
    transitionSelect.value = selectedTransition;
    transitionForm.submit();
  }, false);
  transitionModal.addEventListener('show.bs.modal', function (_ref) {
    var relatedTarget = _ref.relatedTarget;
    var status = relatedTarget.dataset.transitionTarget;
    transitionModalBody.innerHTML = Translator.trans( /*@Desc("Are you sure you want to change the catalog status to %status%?")*/'catalog.view.modal.transition.body', {
      status: status
    }, 'product_catalog');
    selectedTransition = relatedTarget.dataset.transition;
  }, false);
})(window, window.document, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/catalog.transition.js"));
/******/ }
]);