(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-trash-list-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js ***!
  \******************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var _this = this;
  var getUsersTimeout;
  var CLASS_SORTED_ASC = 'ibexa-table__sort-column--asc';
  var CLASS_SORTED_DESC = 'ibexa-table__sort-column--desc';
  var CLASS_VISIBLE_DATE_RANGE = 'ibexa-trash-search-form__range-wrapper--visible';
  var sortedActiveField = doc.querySelector('#trash_search_sort_field').value;
  var sortedActiveDirection = doc.querySelector('#trash_search_sort_direction').value;
  var dateFields = doc.querySelectorAll('.ibexa-trash-search-form__range-wrapper');
  var trashedTypeInput = doc.querySelector('#trash_search_trashed');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var formSearch = doc.querySelector('form[name="trash_search"]');
  var sortField = doc.querySelector('#trash_search_sort_field');
  var sortDirection = doc.querySelector('#trash_search_sort_direction');
  var creatorInput = doc.querySelector('.ibexa-trash-search-form__item--creator .ibexa-trash-search-form__input');
  var usersList = doc.querySelector('.ibexa-trash-search-form__item--creator .ibexa-trash-search-form__user-list');
  var resetCreatorBtn = doc.querySelector('.ibexa-btn--reset-creator');
  var searchCreatorInput = doc.querySelector('#trash_search_creator');
  var sortableColumns = doc.querySelectorAll('.ibexa-table__sort-column');
  var btns = doc.querySelectorAll('.ibexa-btn--open-udw');
  var udwContainer = doc.getElementById('react-udw');
  var autoSendNodes = doc.querySelectorAll('.ibexa-trash-search-form__item--auto-send');
  var errorMessage = Translator.trans( /*@Desc("Cannot fetch user list")*/'trash.user_list.error', {}, 'trash_ui');
  var dateConfig = {
    mode: 'range',
    locale: {
      rangeSeparator: ' - '
    },
    formatDate: function formatDate(date) {
      return ibexa.helpers.timezone.formatShortDateTime(date, null, ibexa.adminUiConfig.dateFormat.shortDate);
    }
  };
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(form, content) {
    var field = form.querySelector('#trash_item_restore_location_location');
    field.value = content.map(function (item) {
      return item.id;
    }).join();
    closeUDW();
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var form = event.target.closest('form[name="trash_item_restore"]');
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans( /*@Desc("Select a Location to restore the Content item(s)")*/'restore_under_new_location.title', {}, 'universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(_this, form),
      onCancel: onCancel,
      title: title,
      containersOnly: true,
      multiple: false
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
  var trashRestoreCheckboxes = _toConsumableArray(doc.querySelectorAll('form[name="trash_item_restore"] input[type="checkbox"]'));
  var buttonRestore = doc.querySelector('#trash_item_restore_restore');
  var buttonRestoreUnderNewParent = doc.querySelector('#trash_item_restore_location_select_content');
  var buttonDelete = doc.querySelector('#delete-trash-items');
  var enableButtons = function enableButtons() {
    var isEmptySelection = trashRestoreCheckboxes.every(function (el) {
      return !el.checked;
    });
    var isMissingParent = trashRestoreCheckboxes.some(function (el) {
      return el.checked && parseInt(el.dataset.isParentInTrash, 10) === 1;
    });
    if (buttonRestore) {
      buttonRestore.disabled = isEmptySelection || isMissingParent;
    }
    if (buttonDelete) {
      buttonDelete.disabled = isEmptySelection;
    }
    if (buttonRestoreUnderNewParent) {
      buttonRestoreUnderNewParent.disabled = isEmptySelection;
    }
  };
  var updateTrashForm = function updateTrashForm(checkboxes) {
    checkboxes.forEach(function (checkbox) {
      var trashFormCheckbox = doc.querySelector("form[name=\"trash_item_delete\"] input[type=\"checkbox\"][value=\"".concat(checkbox.value, "\"]"));
      if (trashFormCheckbox) {
        trashFormCheckbox.checked = checkbox.checked;
      }
    });
  };
  var handleCheckboxChange = function handleCheckboxChange(event) {
    updateTrashForm([event.target]);
    enableButtons();
  };
  var handleResetUser = function handleResetUser() {
    searchCreatorInput.value = '';
    creatorInput.value = '';
    creatorInput.removeAttribute('disabled');
  };
  var handleClickOutsideUserList = function handleClickOutsideUserList(event) {
    if (event.target.closest('.ibexa-trash-search-form__item--creator')) {
      return;
    }
    creatorInput.value = '';
    usersList.classList.add('ibexa-trash-search-form__item__user-list--hidden');
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
  };
  var getUsersList = function getUsersList(value) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "find-user-by-name-".concat(value),
        "public": false,
        ContentQuery: {
          FacetBuilders: {},
          SortClauses: {},
          Query: {
            FullTextCriterion: "".concat(value, "*"),
            ContentTypeIdentifierCriterion: creatorInput.dataset.contentTypeIdentifiers.split(',')
          },
          limit: 50,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ibexa/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(showUsersList)["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var createUsersListItem = function createUsersListItem(user) {
    return "<li data-id=\"".concat(user._id, "\" data-name=\"").concat(user.TranslatedName, "\" class=\"ibexa-trash-search-form__user-item\">").concat(user.TranslatedName, "</li>");
  };
  var showUsersList = function showUsersList(data) {
    var hits = data.View.Result.searchHits.searchHit;
    var users = hits.reduce(function (total, hit) {
      return total + createUsersListItem(hit.value.Content);
    }, '');
    var methodName = users ? 'addEventListener' : 'removeEventListener';
    usersList.innerHTML = users;
    usersList.classList.remove('ibexa-trash-search-form__user-list--hidden');
    doc.querySelector('body')[methodName]('click', handleClickOutsideUserList, false);
  };
  var handleTyping = function handleTyping(event) {
    var value = event.target.value.trim();
    global.clearTimeout(getUsersTimeout);
    if (value.length > 2) {
      getUsersTimeout = global.setTimeout(getUsersList.bind(null, value), 200);
    } else {
      usersList.classList.add('ibexa-trash-search-form__user-list--hidden');
      doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    }
  };
  var handleSelectUser = function handleSelectUser(event) {
    searchCreatorInput.value = event.target.dataset.id;
    usersList.classList.add('ibexa-trash-search-form__user-list--hidden');
    creatorInput.value = event.target.dataset.name;
    creatorInput.setAttribute('disabled', true);
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    formSearch.submit();
  };
  var sortTrashItems = function sortTrashItems(event) {
    var target = event.target;
    var _target$dataset = target.dataset,
      field = _target$dataset.field,
      direction = _target$dataset.direction;
    sortField.value = field;
    target.dataset.direction = direction === 'ASC' ? 'DESC' : 'ASC';
    sortDirection.setAttribute('value', direction === 'DESC' ? 1 : 0);
    formSearch.submit();
  };
  var toggleDatesSelectVisibility = function toggleDatesSelectVisibility(event) {
    var datesRangeNode = doc.querySelector(event.target.dataset.targetSelector);
    if (event.target.value !== 'custom_range') {
      doc.querySelector(datesRangeNode.dataset.periodSelector).value = event.target.value;
      doc.querySelector(datesRangeNode.dataset.endSelector).value = '';
      datesRangeNode.classList.remove(CLASS_VISIBLE_DATE_RANGE);
      formSearch.submit();
      return;
    }
    datesRangeNode.classList.add(CLASS_VISIBLE_DATE_RANGE);
  };
  var setSelectedDateRange = function setSelectedDateRange(timestamps, _ref) {
    var dates = _ref.dates,
      inputField = _ref.inputField;
    var dateRange = inputField.closest('.ibexa-trash-search-form__range-wrapper');
    if (dates.length === 2) {
      var startDate = getUnixTimestampUTC(dates[0]);
      var endDate = getUnixTimestampUTC(dates[1]);
      var secondsInDay = 86400;
      var days = (endDate - startDate) / secondsInDay;
      doc.querySelector(dateRange.dataset.periodSelector).value = "P0Y0M".concat(days, "D");
      doc.querySelector(dateRange.dataset.endSelector).value = endDate;
      formSearch.submit();
    } else if (dates.length === 0) {
      doc.querySelector(dateRange.dataset.periodSelector).value = '';
      doc.querySelector(dateRange.dataset.endSelector).value = '';
      formSearch.submit();
    }
  };
  var getUnixTimestampUTC = function getUnixTimestampUTC(dateObject) {
    var date = new Date(Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()));
    date = Math.floor(date.getTime() / 1000);
    return date;
  };
  var initFlatPickr = function initFlatPickr(dateRangeField) {
    var _dateRangeField$query = dateRangeField.querySelector('.ibexa-trash-search-form__range-select').dataset,
      start = _dateRangeField$query.start,
      end = _dateRangeField$query.end;
    var defaultDate = start && end ? [start, end] : [];
    var dateTimePickerWidget = new ibexa.core.DateTimePicker({
      container: dateRangeField,
      onChange: setSelectedDateRange,
      flatpickrConfig: _objectSpread(_objectSpread({}, dateConfig), {}, {
        defaultDate: defaultDate
      })
    });
    dateTimePickerWidget.init();
  };
  var handleAutoSubmitNodes = function handleAutoSubmitNodes(event) {
    event.preventDefault();
    if (event.target.value !== 'custom_range') {
      formSearch.submit();
    }
  };
  var setSortedClass = function setSortedClass() {
    doc.querySelectorAll('.ibexa-table__sort-column').forEach(function (node) {
      node.classList.remove(CLASS_SORTED_ASC, CLASS_SORTED_DESC);
    });
    if (sortedActiveField) {
      var sortedFieldNode = doc.querySelector(".ibexa-table__sort-column--".concat(sortedActiveField));
      if (!sortedFieldNode) {
        return;
      }
      if (parseInt(sortedActiveDirection, 10) === 1) {
        sortedFieldNode.classList.add(CLASS_SORTED_ASC);
      } else {
        sortedFieldNode.classList.add(CLASS_SORTED_DESC);
      }
    }
  };
  setSortedClass();
  dateFields.forEach(initFlatPickr);
  autoSendNodes.forEach(function (node) {
    return node.addEventListener('change', handleAutoSubmitNodes, false);
  });
  sortableColumns.forEach(function (column) {
    return column.addEventListener('click', sortTrashItems, false);
  });
  trashedTypeInput.addEventListener('change', toggleDatesSelectVisibility, false);
  creatorInput.addEventListener('keyup', handleTyping, false);
  usersList.addEventListener('click', handleSelectUser, false);
  resetCreatorBtn.addEventListener('click', handleResetUser, false);
  updateTrashForm(trashRestoreCheckboxes);
  enableButtons();
  trashRestoreCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', handleCheckboxChange, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator, window.flatpickr);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js"));
/******/ }
]);