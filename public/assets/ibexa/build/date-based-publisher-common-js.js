(self["webpackChunk"] = self["webpackChunk"] || []).push([["date-based-publisher-common-js"],{

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/base.schedule.btn.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/base.schedule.btn.js ***!
  \************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (global, doc, ibexa) {
  var LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY = 'ibexa-dateBasedPublisher-scheduling-post-refresh-notification';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var BaseScheduleBtn = /*#__PURE__*/function () {
    "use strict";

    function BaseScheduleBtn(btn, schedulingModal) {
      _classCallCheck(this, BaseScheduleBtn);
      this.btn = btn;
      this.schedulingModal = schedulingModal;
      this.updateActionBtnDisabledState = this.updateActionBtnDisabledState.bind(this);
      this.makeBulkRequest = this.makeBulkRequest.bind(this);
      this.processBulkResponse = this.processBulkResponse.bind(this);
    }
    _createClass(BaseScheduleBtn, [{
      key: "init",
      value: function init() {
        var _this = this;
        this.btn.addEventListener('click', function () {
          _this.prepareModal();
        });
        var checkboxSelector = this.btn.dataset.checkboxSelector;
        doc.querySelectorAll(checkboxSelector).forEach(function (checkbox) {
          checkbox.addEventListener('change', _this.updateActionBtnDisabledState);
        });
        this.updateActionBtnDisabledState();
        this.showPostRefreshNotification();
      }
    }, {
      key: "getSelectedItems",
      value: function getSelectedItems() {
        var checkboxSelector = this.btn.dataset.checkboxSelector;
        var selectedCheckboxes = _toConsumableArray(doc.querySelectorAll("".concat(checkboxSelector, ":checked")));
        var selectedItemsData = selectedCheckboxes.map(function (checkbox) {
          return JSON.parse(checkbox.closest('.ibexa-table__row').dataset.itemData);
        });
        return selectedItemsData;
      }
    }, {
      key: "prepareModal",
      value: function prepareModal() {
        var _this$btn$dataset = this.btn.dataset,
          modalTitle = _this$btn$dataset.modalTitle,
          modalTableTitle = _this$btn$dataset.modalTableTitle;
        var selectedItems = this.getSelectedItems();
        this.schedulingModal.setModalTitle(modalTitle);
        this.schedulingModal.setModalTableTitle(modalTableTitle);
        this.schedulingModal.setModalTableBody(selectedItems);
        this.schedulingModal.setConfirmBtnClickHandler(this.makeBulkRequest);
        this.schedulingModal.setDiscardBtnClickHandler(this.makeBulkRequest);
      }
    }, {
      key: "updateActionBtnDisabledState",
      value: function updateActionBtnDisabledState() {
        var checkboxSelector = this.btn.dataset.checkboxSelector;
        this.btn.disabled = !doc.querySelectorAll("".concat(checkboxSelector, ":checked")).length;
      }
    }, {
      key: "showPostRefreshNotification",
      value: function showPostRefreshNotification() {
        var notificationData = localStorage.getItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY);
        if (notificationData) {
          var _JSON$parse = JSON.parse(notificationData),
            isError = _JSON$parse.isError,
            message = _JSON$parse.message;
          if (isError) {
            ibexa.helpers.notification.showErrorNotification(message);
          } else {
            ibexa.helpers.notification.showSuccessNotification(message);
          }
          localStorage.removeItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY);
        }
      }
    }, {
      key: "setPostRefreshNotification",
      value: function setPostRefreshNotification(notificationData) {
        localStorage.setItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY, JSON.stringify(notificationData));
      }

      // eslint-disable-next-line no-unused-vars
    }, {
      key: "getBulkRequestOperation",
      value: function getBulkRequestOperation(contentId, version, selectedDate) {
        throw new Error('getBulkRequestOperation should be defined in a subclass');
      }
    }, {
      key: "getFailNotificationMessage",
      value: function getFailNotificationMessage() {
        throw new Error('getFailNotificationMessage should be defined in a subclass');
      }
    }, {
      key: "getSuccessNotificationMessage",
      value: function getSuccessNotificationMessage() {
        throw new Error('getSuccessNotificationMessage should be defined in a subclass');
      }
    }, {
      key: "getErrorNotificationMessage",
      value: function getErrorNotificationMessage() {
        throw new Error('getErrorNotificationMessage should be defined in a subclass');
      }
    }, {
      key: "processBulkResponse",
      value: function processBulkResponse(response) {
        var operations = response.BulkOperationResponse.operations;
        var failedCount = Object.values(operations).filter(function (_ref) {
          var statusCode = _ref.statusCode;
          return statusCode < 200 && statusCode > 299;
        }).length;
        var successCount = operations.length - failedCount;
        var isError = !!failedCount;
        var notificationData = {
          isError: isError,
          message: isError ? this.getFailNotificationMessage(failedCount, successCount) : this.getSuccessNotificationMessage()
        };
        this.setPostRefreshNotification(notificationData);
        global.location.reload(true);
      }
    }, {
      key: "makeBulkRequest",
      value: function makeBulkRequest() {
        var _this2 = this;
        this.schedulingModal.setLoadingState();
        var selectedItems = this.getSelectedItems();
        var selectedDate = this.schedulingModal.getSelectedDate();
        var selectedTimestamp = selectedDate ? Math.floor(selectedDate.valueOf() / 1000) : null;
        var requestBodyOperations = selectedItems.map(function (_ref2) {
          var contentId = _ref2.contentId,
            version = _ref2.version;
          return _this2.getBulkRequestOperation(contentId, version, selectedTimestamp);
        });
        var request = new Request('/api/ibexa/v2/bulk', {
          method: 'POST',
          headers: {
            Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
            'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json',
            'X-Siteaccess': siteaccess,
            'X-CSRF-Token': token
          },
          body: JSON.stringify({
            bulkOperations: {
              operations: requestBodyOperations
            }
          }),
          mode: 'same-origin',
          credentials: 'same-origin'
        });
        fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(this.processBulkResponse)["catch"](function () {
          _this2.setPostRefreshNotification({
            isError: true,
            message: _this2.getErrorNotificationMessage()
          });
          global.location.reload(true);
        });
      }
    }]);
    return BaseScheduleBtn;
  }();
  ibexa.addConfig('dateBasedPublisher.scheduling.BaseScheduleBtn', BaseScheduleBtn);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/dashboard.js":
/*!****************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/dashboard.js ***!
  \****************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var allScheduledModalNode = doc.querySelector('#dbp-all-scheduled-scheduling-modal');
  var myScheduledModalNode = doc.querySelector('#dbp-my-scheduled-scheduling-modal');
  if (!allScheduledModalNode || !myScheduledModalNode) {
    return;
  }
  var _ibexa$dateBasedPubli = ibexa.dateBasedPublisher.scheduling,
    SchedulingModal = _ibexa$dateBasedPubli.SchedulingModal,
    RescheduleBtn = _ibexa$dateBasedPubli.RescheduleBtn,
    UnscheduleBtn = _ibexa$dateBasedPubli.UnscheduleBtn;
  var allScheduledModal = new SchedulingModal(allScheduledModalNode);
  var myScheduledModal = new SchedulingModal(myScheduledModalNode);
  var allScheduledRescheduleBtn = new RescheduleBtn(doc.querySelector('#dbp-all-scheduled-reschedule'), allScheduledModal);
  var allScheduledUnscheduleBtn = new UnscheduleBtn(doc.querySelector('#dbp-all-scheduled-unschedule'), allScheduledModal);
  var myScheduledRescheduleBtn = new RescheduleBtn(doc.querySelector('#dbp-my-scheduled-reschedule'), myScheduledModal);
  var myScheduledUnscheduleBtn = new UnscheduleBtn(doc.querySelector('#dbp-my-scheduled-unschedule'), myScheduledModal);
  allScheduledModal.init();
  myScheduledModal.init();
  allScheduledRescheduleBtn.init();
  allScheduledUnscheduleBtn.init();
  myScheduledRescheduleBtn.init();
  myScheduledUnscheduleBtn.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/future.scheduling.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/future.scheduling.js ***!
  \************************************************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (global, doc, ibexa) {
  var confirmBtn = doc.querySelector('.ibexa-btn--confirm-schedule');
  var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
  var updateValue = function updateValue(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      timestamp = _ref2[0];
    confirmBtn.disabled = !timestamp;
  };
  var submitForm = function submitForm() {
    var timestamp = dateTimePickerWidget.inputField.dataset.timestamp;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[date_based_publisher][timestamp]"]').value = timestamp;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[schedule_publish]"]').click();
  };
  if (!confirmBtn) {
    return;
  }
  var userTimezoneCurrentTime = convertDateToTimezone(new Date());
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var minDate = new Date(convertDateToTimezone(userTimezoneCurrentTime, browserTimezone, true));
  var dateTimePickerWidget = new ibexa.core.DateTimePicker({
    container: doc.querySelector('.ibexa-scheduler-publish-later'),
    onChange: updateValue,
    flatpickrConfig: {
      minDate: minDate,
      defaultDate: minDate,
      defaultHour: minDate.getHours(),
      defaultMinute: minDate.getMinutes()
    }
  });
  dateTimePickerWidget.init();
  confirmBtn.addEventListener('click', submitForm, false);
})(window, document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/reschedule.btn.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/reschedule.btn.js ***!
  \*********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
(function (global, doc, ibexa, Translator) {
  var RescheduleBtn = /*#__PURE__*/function (_ibexa$dateBasedPubli) {
    "use strict";

    _inherits(RescheduleBtn, _ibexa$dateBasedPubli);
    var _super = _createSuper(RescheduleBtn);
    function RescheduleBtn() {
      _classCallCheck(this, RescheduleBtn);
      return _super.apply(this, arguments);
    }
    _createClass(RescheduleBtn, [{
      key: "getBulkRequestOperation",
      value: function getBulkRequestOperation(contentId, version, publicationTimestamp) {
        return {
          uri: "api/datebasedpublisher/v1/content/objects/".concat(contentId, "/versions/").concat(version, "/schedule/").concat(publicationTimestamp),
          method: 'PATCH'
        };
      }
    }, {
      key: "getFailNotificationMessage",
      value: function getFailNotificationMessage(failedCount, successCount) {
        return Translator.trans( /*@Desc("%failedCount% out of %totalCount% selected drafts could not be rescheduled. Please try again.")*/'reschedule.fail.message', {
          failedCount: failedCount,
          totalCount: failedCount + successCount
        }, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getSuccessNotificationMessage",
      value: function getSuccessNotificationMessage() {
        return Translator.trans( /*@Desc("Rescheduled all drafts.")*/'reschedule.success.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getErrorNotificationMessage",
      value: function getErrorNotificationMessage() {
        return Translator.trans( /*@Desc("An unexpected error occurred while rescheduling the selected draft(s). Please try again.")*/'reschedule.error.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "prepareModal",
      value: function prepareModal() {
        _get(_getPrototypeOf(RescheduleBtn.prototype), "prepareModal", this).call(this);
        this.schedulingModal.toggleConfirmBtn(true);
        this.schedulingModal.togglePublicationDateInput(true);
        this.schedulingModal.toggleDiscardBtn(false);
      }
    }]);
    return RescheduleBtn;
  }(ibexa.dateBasedPublisher.scheduling.BaseScheduleBtn);
  ibexa.addConfig('dateBasedPublisher.scheduling.RescheduleBtn', RescheduleBtn);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/scheduling.modal.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/scheduling.modal.js ***!
  \***********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (global, doc, ibexa) {
  var SchedulingModal = /*#__PURE__*/function () {
    "use strict";

    function SchedulingModal(modal) {
      _classCallCheck(this, SchedulingModal);
      this.modal = modal;
      this.confirmBtn = this.modal.querySelector('.ibexa-btn--confirm');
      this.discardBtn = this.modal.querySelector('.ibexa-btn--discard');
      this.selectedDate = null;
      this.confirmBtnClickHandler = null;
      this.discardBtnClickHandler = null;
      this.handleConfirmBtnClick = this.handleConfirmBtnClick.bind(this);
      this.handleDiscardBtnClick = this.handleDiscardBtnClick.bind(this);
      this.updatePublicationDateValue = this.updatePublicationDateValue.bind(this);
    }
    _createClass(SchedulingModal, [{
      key: "init",
      value: function init() {
        var _this = this;
        this.flatpickrInstance = new ibexa.core.DateTimePicker({
          container: this.modal.querySelector('.ibexa-scheduling-modal__publication-date'),
          onChange: this.updatePublicationDateValue,
          flatpickrConfig: {
            formatDate: function formatDate(date) {
              return ibexa.helpers.timezone.formatFullDateTime(date, null);
            },
            minDate: Date.now(),
            "static": true
          }
        });
        this.flatpickrInstance.init();
        this.modal.addEventListener('hidden.bs.modal', function () {
          _this.flatpickrInstance.clear();
        });
        this.confirmBtn.addEventListener('click', this.handleConfirmBtnClick);
        this.discardBtn.addEventListener('click', this.handleDiscardBtnClick);
      }
    }, {
      key: "handleConfirmBtnClick",
      value: function handleConfirmBtnClick() {
        if (typeof this.confirmBtnClickHandler === 'function') {
          this.confirmBtnClickHandler();
        }
      }
    }, {
      key: "handleDiscardBtnClick",
      value: function handleDiscardBtnClick() {
        if (typeof this.discardBtnClickHandler === 'function') {
          this.discardBtnClickHandler();
        }
      }
    }, {
      key: "getSelectedDate",
      value: function getSelectedDate() {
        return this.selectedDate;
      }
    }, {
      key: "setConfirmBtnClickHandler",
      value: function setConfirmBtnClickHandler(handlerFn) {
        this.confirmBtnClickHandler = handlerFn;
      }
    }, {
      key: "setDiscardBtnClickHandler",
      value: function setDiscardBtnClickHandler(handlerFn) {
        this.discardBtnClickHandler = handlerFn;
      }
    }, {
      key: "setModalTitle",
      value: function setModalTitle(title) {
        var modalTitleNode = this.modal.querySelector(".modal-title");
        modalTitleNode.innerHTML = title;
      }
    }, {
      key: "setModalTableTitle",
      value: function setModalTableTitle(title) {
        var modalTableTitleNode = this.modal.querySelector(".ibexa-table-header__headline");
        modalTableTitleNode.innerHTML = title;
      }
    }, {
      key: "togglePublicationDateInput",
      value: function togglePublicationDateInput(show) {
        var publicationDateNode = this.modal.querySelector(".ibexa-scheduling-modal__publication-date");
        publicationDateNode.hidden = !show;
      }
    }, {
      key: "toggleConfirmBtn",
      value: function toggleConfirmBtn(show) {
        var btn = this.modal.querySelector(".ibexa-btn--confirm");
        btn.hidden = !show;
      }
    }, {
      key: "toggleDiscardBtn",
      value: function toggleDiscardBtn(show) {
        var btn = this.modal.querySelector(".ibexa-btn--discard");
        btn.hidden = !show;
      }
    }, {
      key: "setModalTableBody",
      value: function setModalTableBody(selectedItemsData) {
        var table = this.modal.querySelector('.ibexa-scheduling-modal__table');
        var tableBody = table.querySelector('.ibexa-scheduling-modal__table-body');
        var tableRowTemplate = table.dataset.tableRowTemplate;
        var fragment = doc.createDocumentFragment();
        selectedItemsData.forEach(function (_ref) {
          var publicationDate = _ref.publicationDate,
            name = _ref.name,
            version = _ref.version,
            language = _ref.language,
            contentTypeName = _ref.contentTypeName,
            creationDate = _ref.creationDate,
            creator = _ref.creator;
          var container = doc.createElement('tbody');
          var emDash = "\u2014";
          var renderedItem = tableRowTemplate.replace('{{ date_and_time }}', publicationDate ? publicationDate : "".concat(emDash).concat(emDash)).replace('{{ name }}', ibexa.helpers.text.escapeHTML(name)).replace('{{ version }}', version).replace('{{ translations }}', language).replace('{{ content_type }}', contentTypeName).replace('{{ creation_date }}', creationDate).replace('{{ creator }}', creator);
          container.insertAdjacentHTML('beforeend', renderedItem);
          var tableRowNode = container.querySelector('tr');
          fragment.append(tableRowNode);
        });
        this.removeNodeChildren(tableBody);
        tableBody.append(fragment);
      }
    }, {
      key: "removeNodeChildren",
      value: function removeNodeChildren(node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }, {
      key: "updatePublicationDateValue",
      value: function updatePublicationDateValue(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          timestamp = _ref3[0];
        this.confirmBtn.disabled = !timestamp;
        this.selectedDate = timestamp ? timestamp * 1000 : null;
      }
    }, {
      key: "setLoadingState",
      value: function setLoadingState() {
        var btns = this.modal.querySelectorAll('.ibexa-scheduling-modal__btn');
        var btnsSpinners = this.modal.querySelectorAll('.ibexa-scheduling-modal__btn-spinner');
        var modalCloseBtn = this.modal.querySelector('.close');
        btns.forEach(function (btn) {
          btn.disabled = true;
        });
        btnsSpinners.forEach(function (btnSpinner) {
          btnSpinner.classList.add('ibexa-scheduling-modal__btn-spinner--visible');
        });
        modalCloseBtn.disabled = true;
        this.flatpickrInstance.inputField.disabled = true;
      }
    }]);
    return SchedulingModal;
  }();
  ibexa.addConfig('dateBasedPublisher.scheduling.SchedulingModal', SchedulingModal);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/timeline.event.listener.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/timeline.event.listener.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var refreshPreview = function refreshPreview(refreshEvent) {
    var latestPublishLaterEventInRange;
    var latestPublishLaterEventBeforeRange;
    var _refreshEvent$detail = refreshEvent.detail,
      newTimestamp = _refreshEvent$detail.newTimestamp,
      oldTimestamp = _refreshEvent$detail.oldTimestamp,
      events = _refreshEvent$detail.events;
    var isSetToFuture = newTimestamp > oldTimestamp;
    var now = new Date().getTime();
    var publishLaterEventsInRange = [];
    var publishLaterEventsBeforeRange = [];
    var findLatestEvent = function findLatestEvent(latestEvent, event) {
      return latestEvent.date < event.date ? event : latestEvent;
    };
    events.forEach(function (event) {
      var isPublishLaterEvent = event.type === 'future_publication';
      if (!isPublishLaterEvent) {
        return;
      }
      var timestamp = event.date * 1000;
      var isBeforeTimeRange = isSetToFuture ? timestamp >= now && timestamp <= oldTimestamp : timestamp >= now && timestamp <= newTimestamp;
      var isInTimeRange = isSetToFuture ? timestamp > oldTimestamp && timestamp <= newTimestamp : timestamp <= oldTimestamp && timestamp > newTimestamp;
      if (isInTimeRange) {
        publishLaterEventsInRange.push(event);
      } else if (isBeforeTimeRange) {
        publishLaterEventsBeforeRange.push(event);
      }
    });
    if (!publishLaterEventsInRange.length) {
      return;
    }
    if (publishLaterEventsInRange.length) {
      latestPublishLaterEventInRange = publishLaterEventsInRange.reduce(findLatestEvent);
    }
    if (publishLaterEventsBeforeRange.length) {
      latestPublishLaterEventBeforeRange = publishLaterEventsBeforeRange.reduce(findLatestEvent);
    }
    var latestPublishLaterEvent = isSetToFuture ? latestPublishLaterEventInRange : latestPublishLaterEventBeforeRange;
    global.location = global.Routing.generate('ezplatform.page_builder.location_preview', {
      locationId: ibexa.pageBuilder.data.locationId,
      languageCode: ibexa.pageBuilder.data.languageCode,
      versionNo: latestPublishLaterEvent ? latestPublishLaterEvent.futureVersionNo : ibexa.pageBuilder.data.publishedVersionNo,
      siteaccessName: ibexa.pageBuilder.data.siteaccess,
      reference_timestamp: Math.floor(newTimestamp / 1000)
    }, true);
  };
  doc.body.addEventListener('ibexa-timestamp-changed', refreshPreview, false);
})(window, document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/scheduler/src/bundle/Resources/public/js/unschedule.btn.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/scheduler/src/bundle/Resources/public/js/unschedule.btn.js ***!
  \*********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
(function (global, doc, ibexa, Translator) {
  var UnscheduleBtn = /*#__PURE__*/function (_ibexa$dateBasedPubli) {
    "use strict";

    _inherits(UnscheduleBtn, _ibexa$dateBasedPubli);
    var _super = _createSuper(UnscheduleBtn);
    function UnscheduleBtn() {
      _classCallCheck(this, UnscheduleBtn);
      return _super.apply(this, arguments);
    }
    _createClass(UnscheduleBtn, [{
      key: "getBulkRequestOperation",
      value: function getBulkRequestOperation(contentId, version) {
        return {
          uri: "api/datebasedpublisher/v1/content/objects/".concat(contentId, "/versions/").concat(version),
          method: 'DELETE'
        };
      }
    }, {
      key: "getFailNotificationMessage",
      value: function getFailNotificationMessage(failedCount, successCount) {
        return Translator.trans( /*@Desc("%failedCount% out of %totalCount% selected publication dates could not be removed. Please try again.")*/'unschedule.fail.message', {
          failedCount: failedCount,
          totalCount: failedCount + successCount
        }, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getSuccessNotificationMessage",
      value: function getSuccessNotificationMessage() {
        return Translator.trans( /*@Desc("Removed all selected publication dates.")*/'unschedule.success.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getErrorNotificationMessage",
      value: function getErrorNotificationMessage() {
        return Translator.trans( /*@Desc("An error occurred while removing the selected publication dates. Please try again.")*/'unschedule.error.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "prepareModal",
      value: function prepareModal() {
        _get(_getPrototypeOf(UnscheduleBtn.prototype), "prepareModal", this).call(this);
        this.schedulingModal.toggleConfirmBtn(false);
        this.schedulingModal.togglePublicationDateInput(false);
        this.schedulingModal.toggleDiscardBtn(true);
      }
    }]);
    return UnscheduleBtn;
  }(ibexa.dateBasedPublisher.scheduling.BaseScheduleBtn);
  ibexa.addConfig('dateBasedPublisher.scheduling.UnscheduleBtn', UnscheduleBtn);
})(window, window.document, window.ibexa, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/future.scheduling.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/timeline.event.listener.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/scheduling.modal.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/base.schedule.btn.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/reschedule.btn.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/unschedule.btn.js"), __webpack_exec__("./vendor/ibexa/scheduler/src/bundle/Resources/public/js/dashboard.js"));
/******/ }
]);