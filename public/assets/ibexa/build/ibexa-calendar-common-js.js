(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-calendar-common-js"],{

/***/ "./vendor/ibexa/calendar/src/bundle/Resources/public/js/calendar.js":
/*!**************************************************************************!*\
  !*** ./vendor/ibexa/calendar/src/bundle/Resources/public/js/calendar.js ***!
  \**************************************************************************/
/***/ (() => {

(function (global, doc, React, ReactDOM, ibexa) {
  var calendarContainer = doc.querySelector('.ibexa-calendar-container');
  var calendarRoot = ReactDOM.createRoot(calendarContainer);
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  calendarRoot.render(React.createElement(ibexa.modules.Calendar, {
    restInfo: {
      token: token,
      siteaccess: siteaccess
    },
    eventsConfig: ibexa.calendar.config.types
  }));
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.discard.hide.later.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.discard.hide.later.js ***!
  \**********************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, bootstrap, Translator) {
  var SELECTOR_MODAL_DISCARD = '#discard-future-hide-modal';
  var modal = doc.querySelector(SELECTOR_MODAL_DISCARD);
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var confirmBtn = modal.querySelector('.ibexa-btn--confirm-discard-scheduling');
  var selectedEvents = null;
  var setModalTableTitle = function setModalTableTitle(title) {
    var modalTableTitleNode = doc.querySelector("".concat(SELECTOR_MODAL_DISCARD, " .ibexa-table-header__headline"));
    modalTableTitleNode.innerHTML = title;
  };
  var setModalTableBody = function setModalTableBody(events) {
    var table = modal.querySelector('.ibexa-discard-future-hide-modal__table');
    var tableBody = table.querySelector('.ibexa-discard-future-hide-modal__table-body');
    var tableRowTemplate = table.dataset.tableRowTemplate;
    var fragment = doc.createDocumentFragment();
    Object.values(events).forEach(function (_ref) {
      var name = _ref.name,
        attributes = _ref.attributes,
        type = _ref.type;
      var contentTypeName = attributes.contentTypeName;
      var escapeHTML = ibexa.helpers.text.escapeHTML;
      var container = doc.createElement('tbody');
      var renderedItem = tableRowTemplate.replace('{{ content_type_identifier }}', contentTypeName.value).replace('{{ content_name }}', escapeHTML(name)).replace('{{ event_name }}', ibexa.calendar.config.types[type].label);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var tableRowNode = container.querySelector('tr');
      fragment.append(tableRowNode);
    });
    removeNodeChildren(tableBody);
    tableBody.append(fragment);
  };
  var removeNodeChildren = function removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };
  var showDiscardPublishLaterModal = function showDiscardPublishLaterModal() {
    var tableTitle = Translator.trans( /*@Desc("Selected content (%eventsCount%)")*/'modal.discard.table.header', {
      eventsCount: Object.keys(selectedEvents).length
    }, 'ezplatform_calendar_events');
    setModalTableBody(selectedEvents);
    setModalTableTitle(tableTitle);
    bootstrap.Modal.getOrCreateInstance(doc.querySelector(SELECTOR_MODAL_DISCARD)).show();
  };
  var handleUnscheduleEvents = function handleUnscheduleEvents(_ref2) {
    var detail = _ref2.detail;
    selectedEvents = detail.events;
    showDiscardPublishLaterModal();
  };
  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans( /*@Desc("Cannot cancel selected hide(s)")*/'unschedule.future_hide.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      UnscheduleAction: {
        events: Object.keys(selectedEvents)
      }
    };
    var request = new Request('/api/ibexa/v2/calendar/event/future_hide', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ibexa.api.calendar.future_hide.UnscheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-clear-selection'));
      }
    })["catch"](function () {
      return window.ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_hide:unschedule', handleUnscheduleEvents, false);
})(window, window.document, window.ibexa, window.bootstrap, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.discard.publish.later.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.discard.publish.later.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, bootstrap, Translator) {
  var SELECTOR_MODAL_DISCARD = '#discard-publish-later-modal';
  var modal = doc.querySelector(SELECTOR_MODAL_DISCARD);
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var confirmBtn = modal.querySelector('.ibexa-btn--confirm-discard-scheduling');
  var selectedEvents = null;
  var setModalTableTitle = function setModalTableTitle(title) {
    var modalTableTitleNode = doc.querySelector("".concat(SELECTOR_MODAL_DISCARD, " .ibexa-table-header__headline"));
    modalTableTitleNode.innerHTML = title;
  };
  var setModalTableBody = function setModalTableBody(events) {
    var table = modal.querySelector('.ibexa-discard-publish-later-modal__table');
    var tableBody = table.querySelector('.ibexa-discard-publish-later-modal__table-body');
    var tableRowTemplate = table.dataset.tableRowTemplate;
    var fragment = doc.createDocumentFragment();
    Object.values(events).forEach(function (_ref) {
      var name = _ref.name,
        attributes = _ref.attributes,
        type = _ref.type;
      var contentTypeName = attributes.contentTypeName,
        modifiedLanguage = attributes.modifiedLanguage;
      var escapeHTML = ibexa.helpers.text.escapeHTML;
      var container = doc.createElement('tbody');
      var renderedItem = tableRowTemplate.replace('{{ content_type_identifier }}', contentTypeName.value).replace('{{ content_name }}', escapeHTML(name)).replace('{{ event_name }}', ibexa.calendar.config.types[type].label).replace('{{ language }}', modifiedLanguage.value);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var tableRowNode = container.querySelector('tr');
      fragment.append(tableRowNode);
    });
    removeNodeChildren(tableBody);
    tableBody.append(fragment);
  };
  var removeNodeChildren = function removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };
  var showDiscardPublishLaterModal = function showDiscardPublishLaterModal() {
    var tableTitle = Translator.trans( /*@Desc("Selected content (%eventsCount%)")*/'modal.discard.table.header', {
      eventsCount: Object.keys(selectedEvents).length
    }, 'ezplatform_calendar_events');
    setModalTableBody(selectedEvents);
    setModalTableTitle(tableTitle);
    bootstrap.Modal.getOrCreateInstance(doc.querySelector(SELECTOR_MODAL_DISCARD)).show();
  };
  var handleUnscheduleEvents = function handleUnscheduleEvents(_ref2) {
    var detail = _ref2.detail;
    selectedEvents = detail.events;
    showDiscardPublishLaterModal();
  };
  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans( /*@Desc("Cannot cancel selected publication(s)")*/'unschedule.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      UnscheduleAction: {
        events: Object.keys(selectedEvents)
      }
    };
    var request = new Request('/api/ibexa/v2/calendar/event/future_publication', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ibexa.api.calendar.future_publication.UnscheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-clear-selection'));
      }
    })["catch"](function () {
      return window.ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_publication:unschedule', handleUnscheduleEvents, false);
})(window, window.document, window.ibexa, window.bootstrap, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.reschedule.hide.later.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.reschedule.hide.later.js ***!
  \*************************************************************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (global, doc, ibexa, bootstrap, flatpickr, Translator) {
  var SELECTOR_MODAL_RESCHEDULE = '#reschedule-future-hide-modal';
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var modal = doc.querySelector(SELECTOR_MODAL_RESCHEDULE);
  var confirmBtn = modal.querySelector('.ibexa-btn--confirm-reschedule');
  var selectedEvents = null;
  var selectedDate = null;
  var updateValue = function updateValue(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      timestamp = _ref2[0];
    confirmBtn.disabled = !timestamp;
    selectedDate = timestamp;
  };
  var showReschedulePublishLaterModal = function showReschedulePublishLaterModal() {
    bootstrap.Modal.getOrCreateInstance(doc.querySelector(SELECTOR_MODAL_RESCHEDULE)).show();
  };
  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans( /*@Desc("Cannot reschedule")*/'reschedule.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      RescheduleAction: {
        events: Object.keys(selectedEvents),
        dateTime: selectedDate
      }
    };
    var request = new Request('/api/ibexa/v2/calendar/event/future_hide', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ibexa.api.calendar.future_hide.RescheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-clear-selection'));
      }
    })["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var handleRescheduleEvents = function handleRescheduleEvents(_ref3) {
    var detail = _ref3.detail;
    selectedEvents = detail.events;
    showReschedulePublishLaterModal();
  };
  if (!confirmBtn) {
    return;
  }
  var dateTimePickerWidget = new ibexa.core.DateTimePicker({
    container: modal.querySelector('.ibexa-reschedule-publish-later-modal__widget'),
    onChange: updateValue,
    flatpickrConfig: {
      minDate: Date.now()
    }
  });
  dateTimePickerWidget.init();
  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_hide:reschedule', handleRescheduleEvents, false);
})(window, window.document, window.ibexa, window.bootstrap, window.flatpickr, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.reschedule.publish.later.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.reschedule.publish.later.js ***!
  \****************************************************************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (global, doc, ibexa, bootstrap, flatpickr, Translator) {
  var SELECTOR_MODAL_RESCHEDULE = '#reschedule-publish-later-modal';
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var modal = doc.querySelector(SELECTOR_MODAL_RESCHEDULE);
  var confirmBtn = modal.querySelector('.ibexa-btn--confirm-reschedule');
  var selectedEvents = null;
  var selectedDate = null;
  var updateValue = function updateValue(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      timestamp = _ref2[0];
    confirmBtn.disabled = !timestamp;
    selectedDate = timestamp;
  };
  var showReschedulePublishLaterModal = function showReschedulePublishLaterModal() {
    bootstrap.Modal.getOrCreateInstance(doc.querySelector(SELECTOR_MODAL_RESCHEDULE)).show();
  };
  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans( /*@Desc("Cannot reschedule")*/'reschedule.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      RescheduleAction: {
        events: Object.keys(selectedEvents),
        dateTime: selectedDate
      }
    };
    var request = new Request('/api/ibexa/v2/calendar/event/future_publication', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ibexa.api.calendar.future_publication.RescheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ibexa-calendar-clear-selection'));
      }
    })["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var handleRescheduleEvents = function handleRescheduleEvents(_ref3) {
    var detail = _ref3.detail;
    selectedEvents = detail.events;
    showReschedulePublishLaterModal();
  };
  if (!confirmBtn) {
    return;
  }
  var dateTimePickerWidget = new ibexa.core.DateTimePicker({
    container: modal.querySelector('.ibexa-reschedule-publish-later-modal__widget'),
    onChange: updateValue,
    flatpickrConfig: {
      minDate: Date.now()
    }
  });
  dateTimePickerWidget.init();
  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_publication:reschedule', handleRescheduleEvents, false);
})(window, window.document, window.ibexa, window.bootstrap, window.flatpickr, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/calendar/src/bundle/Resources/public/js/calendar.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.discard.publish.later.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.discard.hide.later.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.reschedule.publish.later.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/calendar.reschedule.hide.later.js"));
/******/ }
]);