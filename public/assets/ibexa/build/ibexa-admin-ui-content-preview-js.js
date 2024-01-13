(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-content-preview-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js ***!
  \***************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var CLASS_BTN_SELECTED = 'ibexa-btn--selected';
  var SELECTOR_BTN_ACTION = '.ibexa-preview-header__action';
  var SELECTOR_PREVIEW_SITEACCESS_SELECT = '.ibexa-preview-header__item--siteaccess select';
  var removeSelectedState = function removeSelectedState() {
    return doc.querySelectorAll(SELECTOR_BTN_ACTION).forEach(function (btn) {
      return btn.classList.remove(CLASS_BTN_SELECTED);
    });
  };
  var changePreviewMode = function changePreviewMode(event) {
    var btn = event.target.closest(SELECTOR_BTN_ACTION);
    var iframeWrapper = doc.querySelector('.ibexa-preview__iframe');
    removeSelectedState();
    btn.classList.add(CLASS_BTN_SELECTED);
    iframeWrapper.classList.remove('ibexa-preview__iframe--desktop', 'ibexa-preview__iframe--tablet', 'ibexa-preview__iframe--mobile');
    iframeWrapper.classList.add("ibexa-preview__iframe--".concat(btn.dataset.previewMode));
  };
  var changePreviewSiteaccess = function changePreviewSiteaccess(event) {
    var iframeWrapper = doc.querySelector('.ibexa-preview__iframe iframe');
    var siteaccessPreviewUrl = event.target.value;
    iframeWrapper.setAttribute('src', siteaccessPreviewUrl);
  };
  doc.querySelectorAll(SELECTOR_BTN_ACTION).forEach(function (btn) {
    return btn.addEventListener('click', changePreviewMode, false);
  });
  doc.querySelectorAll(SELECTOR_PREVIEW_SITEACCESS_SELECT).forEach(function (select) {
    return select.addEventListener('change', changePreviewSiteaccess, false);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js"));
/******/ }
]);