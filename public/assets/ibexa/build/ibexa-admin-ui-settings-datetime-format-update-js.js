(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-settings-datetime-format-update-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.settings.datetimeformat.update.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.settings.datetimeformat.update.js ***!
  \**************************************************************************************************************/
/***/ (() => {

(function (global, doc, moment) {
  var SELECTOR_SHORT_DATE_FORMAT = '#user_setting_update_short_datetime_format_value_date_format';
  var SELECTOR_SHORT_TIME_FORMAT = '#user_setting_update_short_datetime_format_value_time_format';
  var SELECTOR_FULL_DATE_FORMAT = '#user_setting_update_full_datetime_format_value_date_format';
  var SELECTOR_FULL_TIME_FORMAT = '#user_setting_update_full_datetime_format_value_time_format';
  var SELECTOR_VALUE_PREVIEW = '.ibexa-datetime-format-preview-value';
  var dateFormatSelect = doc.querySelector(SELECTOR_SHORT_DATE_FORMAT);
  var timeFormatSelect = doc.querySelector(SELECTOR_SHORT_TIME_FORMAT);
  var fullDateFormatSelect = doc.querySelector(SELECTOR_FULL_DATE_FORMAT);
  var fullTimeFormatSelect = doc.querySelector(SELECTOR_FULL_TIME_FORMAT);
  var updateDateTimeFormatPreview = function updateDateTimeFormatPreview(valuePreview, dateFormat, timeFormat) {
    valuePreview.innerHTML = moment().formatICU("".concat(dateFormat, " ").concat(timeFormat));
  };
  if (dateFormatSelect) {
    var valuePreview = dateFormatSelect.closest('#user_setting_update_short_datetime_format').querySelector(SELECTOR_VALUE_PREVIEW);
    dateFormatSelect.addEventListener('change', function () {
      updateDateTimeFormatPreview(valuePreview, dateFormatSelect.value, timeFormatSelect.value);
    });
    timeFormatSelect.addEventListener('change', function () {
      updateDateTimeFormatPreview(valuePreview, dateFormatSelect.value, timeFormatSelect.value);
    });
    updateDateTimeFormatPreview(valuePreview, dateFormatSelect.value, timeFormatSelect.value);
  }
  if (fullDateFormatSelect) {
    var _valuePreview = fullDateFormatSelect.closest('#user_setting_update_full_datetime_format').querySelector(SELECTOR_VALUE_PREVIEW);
    fullDateFormatSelect.addEventListener('change', function () {
      updateDateTimeFormatPreview(_valuePreview, fullDateFormatSelect.value, fullTimeFormatSelect.value);
    });
    fullTimeFormatSelect.addEventListener('change', function () {
      updateDateTimeFormatPreview(_valuePreview, fullDateFormatSelect.value, fullTimeFormatSelect.value);
    });
    updateDateTimeFormatPreview(_valuePreview, fullDateFormatSelect.value, fullTimeFormatSelect.value);
  }
})(window, window.document, window.moment);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.settings.datetimeformat.update.js"));
/******/ }
]);