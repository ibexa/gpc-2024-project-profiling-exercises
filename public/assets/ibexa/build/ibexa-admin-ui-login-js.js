(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-login-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var togglePasswordVisibility = function togglePasswordVisibility(event) {
    var passwordTogglerBtn = event.currentTarget;
    var passwordShowIcon = passwordTogglerBtn.querySelector('.ibexa-input-text-wrapper__password-show');
    var passwordHideIcon = passwordTogglerBtn.querySelector('.ibexa-input-text-wrapper__password-hide');
    var inputTextWrapper = passwordTogglerBtn.closest('.ibexa-input-text-wrapper');
    var input = inputTextWrapper.querySelector('.ibexa-input--text');
    if (input) {
      var inputTypeToSet = input.type === 'password' ? 'text' : 'password';
      input.type = inputTypeToSet;
      passwordShowIcon.classList.toggle('d-none');
      passwordHideIcon.classList.toggle('d-none');
    }
  };
  var clearText = function clearText(_ref) {
    var currentTarget = _ref.currentTarget;
    var inputWrapper = currentTarget.closest('.ibexa-input-text-wrapper');
    var input = inputWrapper.querySelector('.ibexa-input--text, .ibexa-input--date');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    if (!input.readOnly) {
      input.select();
    }
    if (currentTarget.hasAttribute('data-send-form-after-clearing')) {
      currentTarget.closest('form').submit();
    }
  };
  var attachListenersToAllInputs = function attachListenersToAllInputs() {
    var inputClearBtns = doc.querySelectorAll("\n                .ibexa-input--text + .ibexa-input-text-wrapper__actions .ibexa-input-text-wrapper__action-btn--clear,\n                .ibexa-input--date + .ibexa-input-text-wrapper__actions .ibexa-input-text-wrapper__action-btn--clear\n        ");
    var passwordTogglerBtns = doc.querySelectorAll('.ibexa-input-text-wrapper__action-btn--password-toggler');
    inputClearBtns.forEach(function (clearBtn) {
      return clearBtn.addEventListener('click', clearText, false);
    });
    passwordTogglerBtns.forEach(function (passwordTogglerBtn) {
      return passwordTogglerBtn.addEventListener('click', togglePasswordVisibility, false);
    });
    recalculateStyling();
  };
  var handleInputChange = function handleInputChange(_ref2, btn) {
    var value = _ref2.target.value;
    btn.disabled = value.trim() === '';
  };
  var recalculateStyling = function recalculateStyling() {
    var extraBtns = doc.querySelectorAll('.ibexa-input-text-wrapper__action-btn--extra-btn');
    extraBtns.forEach(function (btn) {
      var _btn$previousElementS;
      var input = btn.closest('.ibexa-input-text-wrapper').querySelector('input');
      var clearButton = (_btn$previousElementS = btn.previousElementSibling) !== null && _btn$previousElementS !== void 0 && _btn$previousElementS.classList.contains('ibexa-input-text-wrapper__action-btn--clear') ? btn.previousElementSibling : null;
      if (!input) {
        return;
      }
      btn.disabled = !input.value;
      input.addEventListener('input', function (inputEvent) {
        return handleInputChange(inputEvent, btn);
      }, false);
      if (!clearButton) {
        return;
      }
      var clearButtonStyles = global.getComputedStyle(clearButton);
      var clearButtonMarginRight = parseInt(clearButtonStyles.getPropertyValue('margin-right'), 10);
      var clearButtonWidth = parseInt(clearButtonStyles.getPropertyValue('width'), 10);
      var paddingRight = "".concat(btn.offsetWidth + clearButtonMarginRight + clearButtonWidth, "px");
      input.style.paddingRight = paddingRight;
    });
  };
  doc.body.addEventListener('ibexa-inputs:added', attachListenersToAllInputs, false);
  doc.body.addEventListener('ibexa-inputs:recalculate-styling', recalculateStyling, false);
  attachListenersToAllInputs();
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js ***!
  \*******************************************************************************/
/***/ (() => {

(function (global, doc) {
  var AUTOFILL_TIMEOUT = 500;
  var loginBtn = doc.querySelector('.ibexa-login__btn--sign-in');
  var nameInput = doc.querySelector('.ibexa-login__input--name');
  var passwordInput = doc.querySelector('.ibexa-login__input--password');
  var toggleLoginBtnState = function toggleLoginBtnState() {
    var shouldBeDisabled = !nameInput.value || !passwordInput.value;
    loginBtn.toggleAttribute('disabled', shouldBeDisabled);
  };
  var handleAutofill = function handleAutofill() {
    var isNameInputAutofilled = nameInput.matches(':-webkit-autofill');
    var isPasswordInputAutofilled = nameInput.matches(':-webkit-autofill');
    var isAutofilled = isNameInputAutofilled && isPasswordInputAutofilled;
    if (isAutofilled) {
      loginBtn.removeAttribute('disabled');
    }
  };
  if (loginBtn) {
    nameInput.addEventListener('keyup', toggleLoginBtnState, false);
    nameInput.addEventListener('change', toggleLoginBtnState, false);
    passwordInput.addEventListener('keyup', toggleLoginBtnState, false);
    passwordInput.addEventListener('change', toggleLoginBtnState, false);
    toggleLoginBtnState();
    global.setTimeout(handleAutofill, AUTOFILL_TIMEOUT);
  }
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js"));
/******/ }
]);