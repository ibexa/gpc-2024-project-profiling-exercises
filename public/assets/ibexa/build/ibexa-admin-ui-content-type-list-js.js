(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-content-type-list-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.copy.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.copy.js ***!
  \************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, Routing) {
  var copyButtons = doc.querySelectorAll('.ibexa-btn--copy-content-type');
  var copyContentType = function copyContentType(_ref) {
    var currentTarget = _ref.currentTarget;
    var contentTypeCopyForm = doc.querySelector('form[name="content_type_copy"]');
    var contentTypeIdentifierInput = contentTypeCopyForm.querySelector('#content_type_copy_content_type');
    var _currentTarget$datase = currentTarget.dataset,
      contentTypeId = _currentTarget$datase.contentTypeId,
      contentTypeIdentifier = _currentTarget$datase.contentTypeIdentifier,
      contentTypeGroupId = _currentTarget$datase.contentTypeGroupId;
    var formAction = Routing.generate('ibexa.content_type.copy', {
      contentTypeId: contentTypeId,
      contentTypeGroupId: contentTypeGroupId
    });
    contentTypeIdentifierInput.value = contentTypeIdentifier;
    contentTypeCopyForm.action = formAction;
    contentTypeCopyForm.submit();
  };
  copyButtons.forEach(function (copyButton) {
    return copyButton.addEventListener('click', copyContentType, false);
  });
})(window, window.document, window.ibexa, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ibexa-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ibexa-table__cell--has-checkbox .ibexa-input--checkbox'));
    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);
    if (!buttonRemove) {
      return;
    }
    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };
    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.copy.js"));
/******/ }
]);