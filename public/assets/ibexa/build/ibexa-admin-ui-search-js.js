(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-search-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js ***!
  \**********************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, ibexa, flatpickr, React, ReactDOM) {
  var _this = this;
  var getUsersTimeout;
  var CLASS_DATE_RANGE = 'ibexa-filters__range-wrapper';
  var CLASS_VISIBLE_DATE_RANGE = 'ibexa-filters__range-wrapper--visible';
  var SELECTOR_TAG = '.ibexa-tag';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var filters = doc.querySelector('.ibexa-filters');
  var clearBtn = filters.querySelector('.ibexa-btn--clear');
  var applyBtn = filters.querySelector('.ibexa-btn--apply');
  var dateFields = doc.querySelectorAll('.ibexa-filters__range-wrapper');
  var contentTypeSelect = doc.querySelector('.ibexa-filters__item--content-type .ibexa-filters__select');
  var sectionSelect = doc.querySelector('.ibexa-filters__item--section .ibexa-filters__select');
  var lastModifiedSelect = doc.querySelector('.ibexa-filters__item--modified .ibexa-filters__select');
  var lastModifiedDateRange = doc.querySelector('.ibexa-filters__item--modified .ibexa-filters__range-select');
  var lastCreatedSelect = doc.querySelector('.ibexa-filters__item--created .ibexa-filters__select');
  var lastCreatedDateRange = doc.querySelector('.ibexa-filters__item--created .ibexa-filters__range-select');
  var creatorInput = doc.querySelector('.ibexa-filters__item--creator .ibexa-input');
  var searchCreatorInput = doc.querySelector('#search_creator');
  var usersList = doc.querySelector('.ibexa-filters__item--creator .ibexa-filters__user-list');
  var contentTypeCheckboxes = doc.querySelectorAll('.ibexa-content-type-selector__item [type="checkbox"]');
  var selectSubtreeBtn = doc.querySelector('.ibexa-filters__item--subtree .ibexa-tag-view-select__btn-select-path');
  var subtreeInput = doc.querySelector('#search_subtree');
  var showMoreBtns = doc.querySelectorAll('.ibexa-content-type-selector__show-more');
  var dateConfig = {
    mode: 'range',
    locale: {
      rangeSeparator: ' - '
    },
    formatDate: function formatDate(date) {
      return ibexa.helpers.timezone.formatShortDateTime(date, null, ibexa.adminUiConfig.dateFormat.shortDate);
    }
  };
  var clearFilters = function clearFilters(event) {
    event.preventDefault();
    var option = contentTypeSelect.querySelector('option');
    var defaultText = option.dataset["default"];
    var lastModifiedDataRange = doc.querySelector(lastModifiedSelect.dataset.targetSelector);
    var lastCreatedDataRange = doc.querySelector(lastCreatedSelect.dataset.targetSelector);
    var lastModifiedPeriod = doc.querySelector(lastModifiedDataRange.dataset.periodSelector);
    var lastModifiedEnd = doc.querySelector(lastModifiedDataRange.dataset.endSelector);
    var lastCreatedPeriod = doc.querySelector(lastCreatedDataRange.dataset.periodSelector);
    var lastCreatedEnd = doc.querySelector(lastCreatedDataRange.dataset.endSelector);
    option.innerHTML = defaultText;
    contentTypeCheckboxes.forEach(function (checkbox) {
      checkbox.removeAttribute('checked');
      checkbox.checked = false;
    });
    if (sectionSelect) {
      sectionSelect[0].selected = true;
    }
    lastModifiedSelect[0].selected = true;
    lastCreatedSelect[0].selected = true;
    lastModifiedSelect.querySelector('option').selected = true;
    lastModifiedPeriod.value = '';
    lastModifiedEnd.value = '';
    lastCreatedPeriod.value = '';
    lastCreatedEnd.value = '';
    subtreeInput.value = '';
    handleResetUser();
    event.target.closest('form').submit();
  };
  var toggleDisabledStateOnApplyBtn = function toggleDisabledStateOnApplyBtn() {
    var contentTypeOption = contentTypeSelect.querySelector('option');
    var isContentTypeSelected = contentTypeOption.innerHTML !== contentTypeOption.dataset["default"];
    var isSectionSelected = sectionSelect ? !!sectionSelect.value : false;
    var isCreatorSelected = !!searchCreatorInput.value;
    var isSubtreeSelected = !!subtreeInput.value.trim().length;
    var isModifiedSelected = !!lastModifiedSelect.value;
    var isCreatedSelected = !!lastCreatedSelect.value;
    if (lastModifiedSelect.value === 'custom_range') {
      var lastModifiedWrapper = lastModifiedDateRange.closest(".".concat(CLASS_DATE_RANGE));
      var _lastModifiedWrapper$ = lastModifiedWrapper.dataset,
        periodSelector = _lastModifiedWrapper$.periodSelector,
        endSelector = _lastModifiedWrapper$.endSelector;
      var lastModifiedPeriodValue = doc.querySelector(periodSelector).value;
      var lastModifiedEndDate = doc.querySelector(endSelector).value;
      if (!lastModifiedPeriodValue || !lastModifiedEndDate) {
        isModifiedSelected = false;
      }
    }
    if (lastCreatedSelect.value === 'custom_range') {
      var lastCreatedWrapper = lastCreatedDateRange.closest(".".concat(CLASS_DATE_RANGE));
      var _lastCreatedWrapper$d = lastCreatedWrapper.dataset,
        _periodSelector = _lastCreatedWrapper$d.periodSelector,
        _endSelector = _lastCreatedWrapper$d.endSelector;
      var lastCreatedPeriodValue = doc.querySelector(_periodSelector).value;
      var lastCreatedEndDate = doc.querySelector(_endSelector).value;
      if (!lastCreatedPeriodValue || !lastCreatedEndDate) {
        isCreatedSelected = false;
      }
    }
    var isEnabled = isContentTypeSelected || isSectionSelected || isModifiedSelected || isCreatedSelected || isCreatorSelected || isSubtreeSelected;
    var methodName = isEnabled ? 'removeAttribute' : 'setAttribute';
    applyBtn[methodName]('disabled', !isEnabled);
  };
  var toggleDatesSelectVisibility = function toggleDatesSelectVisibility(event) {
    var datesRangeNode = doc.querySelector(event.target.dataset.targetSelector);
    if (event.target.value !== 'custom_range') {
      doc.querySelector(datesRangeNode.dataset.periodSelector).value = event.target.value;
      doc.querySelector(datesRangeNode.dataset.endSelector).value = '';
      datesRangeNode.classList.remove(CLASS_VISIBLE_DATE_RANGE);
      toggleDisabledStateOnApplyBtn();
      return;
    }
    datesRangeNode.classList.add(CLASS_VISIBLE_DATE_RANGE);
  };
  var filterByContentType = function filterByContentType() {
    var selectedCheckboxes = _toConsumableArray(contentTypeCheckboxes).filter(function (checkbox) {
      return checkbox.checked;
    });
    var contentTypesText = selectedCheckboxes.map(function (checkbox) {
      return checkbox.dataset.name;
    }).join(', ');
    var _contentTypeSelect = _slicedToArray(contentTypeSelect, 1),
      option = _contentTypeSelect[0];
    var defaultText = option.dataset["default"];
    option.innerHTML = contentTypesText || defaultText;
    toggleDisabledStateOnApplyBtn();
  };
  var setSelectedDateRange = function setSelectedDateRange(timestamps, _ref) {
    var dates = _ref.dates,
      inputField = _ref.inputField;
    var dateRange = inputField.closest('.ibexa-filters__range-wrapper');
    if (dates.length === 2) {
      var startDate = getUnixTimestampUTC(dates[0]);
      var endDate = getUnixTimestampUTC(dates[1]);
      var secondsInDay = 86400;
      var days = (endDate - startDate) / secondsInDay;
      doc.querySelector(dateRange.dataset.periodSelector).value = "P0Y0M".concat(days, "D");
      doc.querySelector(dateRange.dataset.endSelector).value = endDate;
    } else if (dates.length === 0) {
      doc.querySelector(dateRange.dataset.periodSelector).value = '';
      doc.querySelector(dateRange.dataset.endSelector).value = '';
    }
    toggleDisabledStateOnApplyBtn();
  };
  var getUnixTimestampUTC = function getUnixTimestampUTC(dateObject) {
    var date = new Date(Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()));
    date = Math.floor(date.getTime() / 1000);
    return date;
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
    fetch(request).then(function (response) {
      return response.json();
    }).then(showUsersList);
  };
  var createUsersListItem = function createUsersListItem(user) {
    return "<li data-id=\"".concat(user._id, "\" data-name=\"").concat(user.TranslatedName, "\" class=\"ibexa-filters__user-item\">").concat(user.TranslatedName, "</li>");
  };
  var showUsersList = function showUsersList(data) {
    var hits = data.View.Result.searchHits.searchHit;
    var users = hits.reduce(function (total, hit) {
      return total + createUsersListItem(hit.value.Content);
    }, '');
    var methodName = users ? 'addEventListener' : 'removeEventListener';
    usersList.innerHTML = users;
    usersList.classList.remove('ibexa-filters__user-list--hidden');
    doc.querySelector('body')[methodName]('click', handleClickOutsideUserList, false);
  };
  var handleTyping = function handleTyping(event) {
    var value = event.target.value.trim();
    window.clearTimeout(getUsersTimeout);
    if (value.length > 2) {
      getUsersTimeout = window.setTimeout(getUsersList.bind(null, value), 200);
    } else {
      usersList.classList.add('ibexa-filters__user-list--hidden');
      doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    }
  };
  var handleSelectUser = function handleSelectUser(event) {
    searchCreatorInput.value = event.target.dataset.id;
    usersList.classList.add('ibexa-filters__user-list--hidden');
    creatorInput.value = event.target.dataset.name;
    creatorInput.setAttribute('disabled', true);
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    toggleDisabledStateOnApplyBtn();
  };
  var handleResetUser = function handleResetUser() {
    searchCreatorInput.value = '';
    creatorInput.value = '';
    creatorInput.removeAttribute('disabled');
    toggleDisabledStateOnApplyBtn();
  };
  var handleClickOutsideUserList = function handleClickOutsideUserList(event) {
    if (event.target.closest('.ibexa-filters__item--creator')) {
      return;
    }
    creatorInput.value = '';
    usersList.classList.add('ibexa-filters__user-list--hidden');
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
  };
  var initFlatPickr = function initFlatPickr(dateRangeField) {
    var _dateRangeField$query = dateRangeField.querySelector('.ibexa-filters__range-select').dataset,
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
  var removeSearchTag = function removeSearchTag(event) {
    var tag = event.currentTarget.closest(SELECTOR_TAG);
    var form = event.currentTarget.closest('form');
    ibexa.helpers.tooltips.hideAll();
    tag.remove();
    form.submit();
  };
  var clearContentType = function clearContentType(event) {
    var checkbox = doc.querySelector(event.currentTarget.dataset.targetSelector);
    checkbox.checked = false;
    removeSearchTag(event);
  };
  var clearSection = function clearSection(event) {
    sectionSelect[0].selected = true;
    removeSearchTag(event);
  };
  var clearSubtree = function clearSubtree(event) {
    subtreeInput.value = '';
    removeSearchTag(event);
  };
  var clearDataRange = function clearDataRange(event, selector) {
    var dataRange = doc.querySelector(selector);
    var rangeSelect = dataRange.parentNode.querySelector('.ibexa-filters__select');
    var periodInput = doc.querySelector(dataRange.dataset.periodSelector);
    var endDateInput = doc.querySelector(dataRange.dataset.endSelector);
    rangeSelect[0].selected = true;
    periodInput.value = '';
    endDateInput.vaue = '';
    dataRange.classList.remove(CLASS_VISIBLE_DATE_RANGE);
    removeSearchTag(event);
  };
  var clearCreator = function clearCreator(event) {
    handleResetUser();
    removeSearchTag(event);
  };
  var clearSearchTagBtnMethods = {
    section: function section(event) {
      return clearSection(event);
    },
    subtree: function subtree(event) {
      return clearSubtree(event);
    },
    creator: function creator(event) {
      return clearCreator(event);
    },
    'content-types': function contentTypes(event) {
      return clearContentType(event);
    },
    'last-modified': function lastModified(event) {
      return clearDataRange(event, lastModifiedSelect.dataset.targetSelector);
    },
    'last-created': function lastCreated(event) {
      return clearDataRange(event, lastCreatedSelect.dataset.targetSelector);
    }
  };
  var showMoreContentTypes = function showMoreContentTypes(event) {
    var btn = event.currentTarget;
    var contentTypesList = btn.closest('.ibexa-content-type-selector__list-wrapper').querySelector('.ibexa-content-type-selector__list[hidden]');
    btn.setAttribute('hidden', true);
    contentTypesList.removeAttribute('hidden');
  };
  var selectSubtreeWidget = new ibexa.core.TagViewSelect({
    fieldContainer: doc.querySelector('.ibexa-filters__item--subtree')
  });
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var confirmSubtreeUDW = function confirmSubtreeUDW(data) {
    ibexa.helpers.tagViewSelect.buildItemsFromUDWResponse(data, function (item) {
      return item.pathString;
    }, function (items) {
      selectSubtreeWidget.addItems(items, true);
      closeUDW();
    });
  };
  var openSubtreeUDW = function openSubtreeUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: confirmSubtreeUDW.bind(_this),
      onCancel: closeUDW,
      multiple: true
    }, config)));
  };
  dateFields.forEach(initFlatPickr);
  filterByContentType();
  clearBtn.addEventListener('click', clearFilters, false);
  if (sectionSelect) {
    sectionSelect.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  }
  var _loop = function _loop(tagType) {
    var tagBtns = doc.querySelectorAll(".ibexa-tag__remove-btn--".concat(tagType));
    tagBtns.forEach(function (btn) {
      return btn.addEventListener('click', clearSearchTagBtnMethods[tagType], false);
    });
  };
  for (var tagType in clearSearchTagBtnMethods) {
    _loop(tagType);
  }
  subtreeInput.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastModifiedSelect.addEventListener('change', toggleDatesSelectVisibility, false);
  lastCreatedSelect.addEventListener('change', toggleDatesSelectVisibility, false);
  creatorInput.addEventListener('keyup', handleTyping, false);
  usersList.addEventListener('click', handleSelectUser, false);
  contentTypeCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', filterByContentType, false);
  });
  showMoreBtns.forEach(function (showMoreBtn) {
    return showMoreBtn.addEventListener('click', showMoreContentTypes, false);
  });
  selectSubtreeBtn.addEventListener('click', openSubtreeUDW, false);
})(window, window.document, window.ibexa, window.flatpickr, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js ***!
  \**************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var headerSearchInput = doc.querySelector('.ibexa-main-header__search');
  var headerSearchSubmitBtn = doc.querySelector('.ibexa-main-header .ibexa-input-text-wrapper__action-btn--search');
  var searchForm = doc.querySelector('.ibexa-search-form');
  var searchInput = doc.querySelector('.ibexa-search-form__search-input');
  var languageSelector = doc.querySelector('.ibexa-filters__item--language-selector .ibexa-filters__select');
  var submitForm = function submitForm() {
    searchInput.value = headerSearchInput.value;
    searchForm.submit();
  };
  var handleHeaderSearchBtnClick = function handleHeaderSearchBtnClick(event) {
    event.preventDefault();
    submitForm();
  };
  headerSearchInput.value = searchInput.value;
  headerSearchSubmitBtn.addEventListener('click', handleHeaderSearchBtnClick, false);
  languageSelector === null || languageSelector === void 0 || languageSelector.addEventListener('change', submitForm, false);
})(window, document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var FORM_EDIT = 'form.ibexa-edit-content-form';
  var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
  var editVersion = function editVersion(event) {
    var versionEditForm = doc.querySelector(FORM_EDIT);
    var versionEditFormName = versionEditForm.name;
    var _event$currentTarget$ = event.currentTarget.dataset,
      contentId = _event$currentTarget$.contentId,
      versionNo = _event$currentTarget$.versionNo,
      languageCode = _event$currentTarget$.languageCode;
    var contentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[content_info]\"]"));
    var versionInfoContentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][content_info]\"]"));
    var versionInfoVersionNoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][version_no]\"]"));
    var languageInput = versionEditForm.querySelector("#".concat(versionEditFormName, "_language_").concat(languageCode));
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode
    });
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans( /*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'content');
    var submitVersionEditForm = function submitVersionEditForm() {
      contentInfoInput.value = contentId;
      versionInfoContentInfoInput.value = contentId;
      versionInfoVersionNoInput.value = versionNo !== undefined ? versionNo : null;
      languageInput.checked = true;
      versionEditForm.submit();
    };
    var addDraft = function addDraft() {
      submitVersionEditForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };
    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }
      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (wrapperBtnEvent) {
          return wrapperBtnEvent.preventDefault();
        }, false);
      });
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).show();
    };
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    var handleDraftConflict = function handleDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 403) {
        response.text().then(showErrorNotification);
      } else if (response.status === 200) {
        submitVersionEditForm();
      }
    };
    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleDraftConflict)["catch"](showErrorNotification);
  };
  doc.querySelectorAll('.ibexa-btn--content-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js ***!
  \*************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (global, doc, ibexa) {
  var EditTranslation = /*#__PURE__*/function () {
    "use strict";

    function EditTranslation(config) {
      _classCallCheck(this, EditTranslation);
      this.container = config.container;
      this.toggler = config.container.querySelector('.ibexa-btn--translations-list-toggler');
      this.translationsList = config.container.querySelector('.ibexa-translation-selector__list-wrapper');
      this.hideTranslationsList = this.hideTranslationsList.bind(this);
      this.showTranslationsList = this.showTranslationsList.bind(this);
      this.setPosition = this.setPosition.bind(this);
    }
    _createClass(EditTranslation, [{
      key: "setPosition",
      value: function setPosition() {
        var topOffset = parseInt(this.translationsList.dataset.topOffset, 10);
        var topPosition = window.scrollY > topOffset ? 0 : topOffset - window.scrollY;
        var height = window.scrollY > topOffset ? window.innerHeight : window.innerHeight + window.scrollY - topOffset;
        this.translationsList.style.top = "".concat(topPosition, "px");
        this.translationsList.style.height = "".concat(height, "px");
      }
    }, {
      key: "hideTranslationsList",
      value: function hideTranslationsList(event) {
        var closestTranslationSelector = event.target.closest('.ibexa-translation-selector');
        var clickedOnTranslationsList = closestTranslationSelector && closestTranslationSelector.isSameNode(this.container);
        var clickedOnDraftConflictModal = event.target.closest('.ibexa-modal--version-draft-conflict');
        if (clickedOnTranslationsList || clickedOnDraftConflictModal) {
          return;
        }
        this.translationsList.classList.add('ibexa-translation-selector__list-wrapper--hidden');
        doc.removeEventListener('click', this.hideTranslationsList, false);
      }
    }, {
      key: "showTranslationsList",
      value: function showTranslationsList() {
        this.translationsList.classList.remove('ibexa-translation-selector__list-wrapper--hidden');
        this.setPosition();
        doc.addEventListener('click', this.hideTranslationsList, false);
        ibexa.helpers.tooltips.hideAll();
      }
    }, {
      key: "init",
      value: function init() {
        this.toggler.addEventListener('click', this.showTranslationsList, false);
      }
    }]);
    return EditTranslation;
  }();
  var translationSelectors = doc.querySelectorAll('.ibexa-translation-selector');
  translationSelectors.forEach(function (translationSelector) {
    var editTranslation = new EditTranslation({
      container: translationSelector
    });
    editTranslation.init();
  });
})(window, document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-select-location');
  var udwContainer = doc.getElementById('react-udw');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var udwRoot = null;
  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "udw-locations-by-path-string-".concat(idList.join('-')),
        "public": false,
        LocationQuery: {
          FacetBuilders: {},
          SortClauses: {
            SectionIdentifier: 'ascending'
          },
          Filter: {
            LocationIdCriterion: idList.join(',')
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
        'X-Requested-With': 'XMLHttpRequest',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans( /*@Desc("Cannot find children Locations with ID %idList%")*/'select_location.error', {
      idList: idList.join(',')
    }, 'universal_discovery_widget');
    fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(callback)["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (val) {
      return val;
    });
    return pathArray.splice(1, pathArray.length - 1);
  };
  var buildBreadcrumbsString = function buildBreadcrumbsString(viewData) {
    var searchHitList = viewData.View.Result.searchHits.searchHit;
    return searchHitList.map(function (searchHit) {
      return searchHit.value.Location.ContentInfo.Content.TranslatedName;
    }).join(' / ');
  };
  var toggleVisibility = function toggleVisibility(btn, isLocationSelected) {
    var contentBreadcrumbsWrapper = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    btn.hidden = isLocationSelected;
    if (contentBreadcrumbsWrapper) {
      contentBreadcrumbsWrapper.hidden = !isLocationSelected;
    }
  };
  var updateBreadcrumbsState = function updateBreadcrumbsState(btn, pathString) {
    var pathStringInput = doc.querySelector(btn.dataset.locationPathInputSelector);
    var contentBreadcrumbsContainer = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    var contentBreadcrumbs = contentBreadcrumbsContainer.querySelector('.ibexa-tag__content');
    var contentBreadcrumbsSpinner = contentBreadcrumbsContainer.querySelector('.ibexa-tag__spinner');
    pathStringInput.value = pathString;
    pathStringInput.dispatchEvent(new Event('change'));
    if (!contentBreadcrumbs || !contentBreadcrumbsSpinner) {
      return;
    }
    if (!pathString) {
      contentBreadcrumbs.innerHTML = '';
      contentBreadcrumbs.hidden = true;
    } else {
      contentBreadcrumbsSpinner.hidden = false;
      findLocationsByIdList(removeRootFromPathString(pathString), function (data) {
        contentBreadcrumbs.innerHTML = buildBreadcrumbsString(data);
        contentBreadcrumbsSpinner.hidden = true;
        contentBreadcrumbs.hidden = false;
      });
    }
  };
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(btn, items) {
    closeUDW();
    var _items = _slicedToArray(items, 1),
      pathString = _items[0].pathString;
    updateBreadcrumbsState(btn, pathString);
    toggleVisibility(btn, !!pathString);
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(null, event.currentTarget),
      onCancel: onCancel,
      title: event.currentTarget.dataset.universalDiscoveryTitle,
      multiple: false
    }, config)));
  };
  var clearSelection = function clearSelection(btn) {
    updateBreadcrumbsState(btn, '');
    toggleVisibility(btn, false);
  };
  btns.forEach(function (btn) {
    btn.addEventListener('click', openUDW, false);
    var tag = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    var clearBtn = tag.querySelector('.ibexa-tag__remove-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', clearSelection.bind(null, btn), false);
    }
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js"));
/******/ }
]);