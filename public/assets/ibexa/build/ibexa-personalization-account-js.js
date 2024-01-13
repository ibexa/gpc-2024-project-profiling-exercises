(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-account-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/account.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/account.js ***!
  \********************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc) {
  var copyButtons = _toConsumableArray(doc.querySelectorAll('.ibexa-perso-details__copy-button'));
  var coppiedClass = 'ibexa-perso-details__text--copied';
  var copyInformationTime = 5000;
  var handleCopy = function handleCopy(copyButton) {
    var copiedText = copyButton.previousElementSibling.textContent;
    var container = copyButton.closest('.ibexa-perso-details__text');
    container.classList.add(coppiedClass);
    global.navigator.clipboard.writeText(copiedText);
    setTimeout(function () {
      container.classList.remove(coppiedClass);
    }, copyInformationTime);
  };
  var handleCopyOnKeyDown = function handleCopyOnKeyDown(event) {
    if (event.key !== 'Enter' || event.key !== ' ') {
      return;
    }
    handleCopy(event.currentTarget);
  };
  var handleCopyOnClick = function handleCopyOnClick(_ref) {
    var currentTarget = _ref.currentTarget;
    handleCopy(currentTarget);
  };
  copyButtons.forEach(function (copyButton) {
    copyButton.addEventListener('click', handleCopyOnClick, false);
    copyButton.addEventListener('keydown', handleCopyOnKeyDown, false);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/account.js"));
/******/ }
]);