(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-modal-location-trash-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js ***!
  \*************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, Translator) {
  var form = doc.querySelector('form[name="location_trash"]');
  var submitButton = form.querySelector('button[type="submit"]');
  var allOptions = form.querySelectorAll('.ibexa-modal__trash-option');
  var confirmCheckbox = form.querySelector('input[name="location_trash[confirm][]"]');
  var enableButton = function enableButton(button) {
    button.disabled = false;
    button.classList.remove('disabled');
  };
  var disableButton = function disableButton(button) {
    button.disabled = true;
    button.classList.add('disabled');
  };
  var refreshTrashModal = function refreshTrashModal(event) {
    var numberOfSubitems = event.detail.numberOfSubitems;
    var sendToTrashModal = document.querySelector('.ibexa-modal--trash-location');
    var modalBody = sendToTrashModal.querySelector('.modal-body');
    var modalSendToTrashButton = sendToTrashModal.querySelector('.modal-footer .ibexa-btn--confirm-send-to-trash');
    var contentName = sendToTrashModal.dataset.contentName;
    if (numberOfSubitems) {
      var message = Translator.trans( /*@Desc("Sending '%content_name%' and its %children_count% Content item(s) to Trash will also send the sub-items of this Location to Trash.")*/'trash_container.modal.message_main', {
        content_name: contentName,
        children_count: numberOfSubitems
      }, 'content');
      modalBody.querySelector('.ibexa-modal__option-description').innerHTML = message;
    } else {
      var _message = Translator.trans( /*@Desc("Are you sure you want to send this Content item to Trash?")*/'trash.modal.message', {}, 'content');
      modalBody.innerHTML = _message;
      modalSendToTrashButton.removeAttribute('disabled');
      modalSendToTrashButton.classList.remove('disabled');
    }
  };
  doc.body.addEventListener('ibexa-trash-modal-refresh', refreshTrashModal, false);
  if (!confirmCheckbox) {
    enableButton(submitButton);
    return;
  }
  var toggleSubmitButton = function toggleSubmitButton() {
    var areAllOptionsChecked = _toConsumableArray(allOptions).every(function (option) {
      var inputs = _toConsumableArray(option.querySelectorAll('input'));
      var isInputChecked = function isInputChecked(input) {
        return input.checked;
      };
      return inputs.length === 0 || inputs.some(isInputChecked);
    });
    areAllOptionsChecked && confirmCheckbox.checked ? enableButton(submitButton) : disableButton(submitButton);
  };
  form.addEventListener('change', toggleSubmitButton, false);
})(window, window.document, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js"));
/******/ }
]);