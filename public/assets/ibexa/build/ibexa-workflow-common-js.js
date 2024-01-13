(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-workflow-common-js"],{

/***/ "./vendor/ibexa/workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, bootstrap) {
  var containers = doc.querySelectorAll('.ibexa-workflow-dashboard-table');
  var showPopup = function showPopup(_ref) {
    var btn = _ref.currentTarget;
    var selector = '[data-workflow-popup="ibexa-workflow-popup"]';
    fetch(btn.dataset.src).then(function (response) {
      return response.text();
    }).then(function (text) {
      var modal = doc.querySelector(selector);
      modal.querySelector('.modal-body').innerHTML = text;
      bootstrap.Modal.getOrCreateInstance(modal).show();
    });
  };
  containers.forEach(function (container) {
    container.querySelectorAll('.ibexa-btn--workflow-chart').forEach(function (btn) {
      btn.addEventListener('click', showPopup, false);
    });
  });
})(window, window.document, window.ibexa, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, Routing, Translator) {
  var _this = this;
  var CLASS_LIST_WRAPPER_HIDDEN = 'ibexa-workflow-apply-transition__user-list-wrapper--hidden';
  var CLASS_LIST_ITEM_DISABLED = 'ibexa-workflow-apply-transition__user-list-item--disabled';
  var SELECTOR_APPLY_TRANSITION = '.ibexa-workflow-apply-transition';
  var SELECTOR_USER_INPUT = '.ibexa-workflow-apply-transition__user-input';
  var SELECTOR_LIST_WRAPPER = '.ibexa-workflow-apply-transition__user-list-wrapper';
  var SELECTOR_MESSAGE_WRAPPER = '.ibexa-workflow-apply-transition__message-wrapper';
  var SELECTOR_USER_NAME = '.ibexa-workflow-apply-transition__user-name';
  var applyTransitionButtons = doc.querySelectorAll('.ibexa-btn--workflow-apply');
  var userInputs = doc.querySelectorAll(SELECTOR_USER_INPUT);
  var usersLists = doc.querySelectorAll(".ibexa-workflow-apply-transition__user-list");
  var removeReviewerButtons = doc.querySelectorAll('.ibexa-tag__remove-btn--remove-reviewer');
  var getReviewersTimeout;
  var handleRequestResponse = function handleRequestResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  };
  var applyTransition = function applyTransition(event) {
    var transitionContainer = event.currentTarget.closest(SELECTOR_APPLY_TRANSITION);
    var message = transitionContainer.querySelector("".concat(SELECTOR_MESSAGE_WRAPPER, " textarea")).value;
    var reviewer = transitionContainer.querySelector(SELECTOR_USER_NAME);
    var reviewerId = reviewer ? reviewer.dataset.id : '';
    var menuWorkflowButton = doc.querySelector("button[data-actions=\"".concat(transitionContainer.dataset.actions, "\"]"));
    if (menuWorkflowButton.dataset.validate && menuWorkflowButton.dataset.isFormValid !== '1') {
      return;
    }
    doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][name]"]').value = transitionContainer.dataset.workflowName;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][transition]"]').value = transitionContainer.dataset.transitionName;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][comment]"]').value = message;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][reviewer]"]').value = reviewerId;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][apply]"]').click();
  };
  var generateReviewersListRoute = function generateReviewersListRoute(transitionNode, query) {
    var _transitionNode$datas = transitionNode.dataset,
      contextAction = _transitionNode$datas.contextAction,
      workflowName = _transitionNode$datas.workflowName,
      transitionName = _transitionNode$datas.transitionName,
      contentTypeIdentifier = _transitionNode$datas.contentTypeIdentifier,
      languageCode = _transitionNode$datas.languageCode,
      parentLocationId = _transitionNode$datas.parentLocationId,
      contentId = _transitionNode$datas.contentId,
      versionNo = _transitionNode$datas.versionNo,
      locationId = _transitionNode$datas.locationId;
    var route;
    if (contextAction === 'create') {
      route = Routing.generate('ibexa.workflow.content_create.reviewer_suggest', {
        workflowName: workflowName,
        transitionName: transitionName,
        contentTypeIdentifier: contentTypeIdentifier,
        languageCode: languageCode,
        locationId: parentLocationId
      });
    } else {
      route = Routing.generate('ibexa.workflow.content_edit.reviewer_suggest', {
        workflowName: workflowName,
        transitionName: transitionName,
        contentId: contentId,
        versionNo: versionNo,
        locationId: locationId
      });
    }
    return "".concat(route, "?query=").concat(query);
  };
  var getReviewerList = function getReviewerList(transitionContainer, route) {
    var request = new Request(route);
    var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
    var errorMessage = Translator.trans( /*@Desc("Can't load reviewer list")*/'load.reviewers.error', {}, 'transition_apply');
    fetch(request).then(handleRequestResponse).then(showReviewersList.bind(_this, transitionContainer))["catch"](function () {
      return showErrorNotification(errorMessage);
    });
  };
  var createReviewersListItem = function createReviewersListItem(reviewer) {
    return "<li data-id=\"".concat(reviewer.id, "\" class=\"ibexa-workflow-apply-transition__user-list-item").concat(!reviewer.canReview ? " ".concat(CLASS_LIST_ITEM_DISABLED) : '', "\">").concat(reviewer.name, "</li>");
  };
  var showReviewersList = function showReviewersList(transitionContainer, reviewersList) {
    var listWrapper = transitionContainer.querySelector(SELECTOR_LIST_WRAPPER);
    var listContainer = transitionContainer.querySelector('.ibexa-workflow-apply-transition__user-list');
    var renderedReviewers = reviewersList.reduce(function (total, reviewer) {
      return total + createReviewersListItem(reviewer);
    }, '');
    var listInfoMethodName = reviewersList.some(function (reviewer) {
      return !reviewer.canReview;
    }) ? 'removeAttribute' : 'setAttribute';
    listContainer.innerHTML = renderedReviewers;
    listWrapper.classList.remove(CLASS_LIST_WRAPPER_HIDDEN);
    transitionContainer.querySelector('.ibexa-workflow-apply-transition__user-list-info')[listInfoMethodName]('hidden', 'hidden');
  };
  var selectReviewer = function selectReviewer(event) {
    var transitionContainer = event.target.closest(SELECTOR_APPLY_TRANSITION);
    var reviewer = transitionContainer.querySelector(SELECTOR_USER_NAME);
    if (event.target.classList.contains(CLASS_LIST_ITEM_DISABLED)) {
      return;
    }
    reviewer.dataset.id = event.target.dataset.id;
    reviewer.innerHTML = event.target.innerHTML;
    transitionContainer.querySelector(SELECTOR_LIST_WRAPPER).classList.add(CLASS_LIST_WRAPPER_HIDDEN);
    changeStep(transitionContainer, false);
  };
  var changeStep = function changeStep(transitionContainer, firstStep) {
    var reviewerRequired = transitionContainer.dataset.reviewerRequired;
    var userMethodName = firstStep ? 'setAttribute' : 'removeAttribute';
    var messageMethodName = firstStep && reviewerRequired ? 'setAttribute' : 'removeAttribute';
    var inputMethodName = firstStep ? 'removeAttribute' : 'setAttribute';
    var input = transitionContainer.querySelector(SELECTOR_USER_INPUT);
    transitionContainer.querySelector('.ibexa-workflow-apply-transition__user')[userMethodName]('hidden', 'hidden');
    transitionContainer.querySelector(SELECTOR_MESSAGE_WRAPPER)[messageMethodName]('hidden', 'hidden');
    transitionContainer.querySelector('.ibexa-workflow-apply-transition__actions')[messageMethodName]('hidden', 'hidden');
    input[inputMethodName]('hidden', 'hidden');
    input.value = '';
  };
  var removeReviewer = function removeReviewer(event) {
    var transitionContainer = event.target.closest(SELECTOR_APPLY_TRANSITION);
    changeStep(transitionContainer, true);
  };
  var handleTyping = function handleTyping(event) {
    var query = event.target.value.trim();
    window.clearTimeout(getReviewersTimeout);
    if (query.length > 2) {
      var transitionContainer = event.target.closest(SELECTOR_APPLY_TRANSITION);
      var reviewersListRoute = generateReviewersListRoute(transitionContainer, query);
      getReviewersTimeout = window.setTimeout(getReviewerList.bind(null, transitionContainer, reviewersListRoute), 200);
    }
  };
  if (!!applyTransitionButtons.length) {
    applyTransitionButtons.forEach(function (btn) {
      return btn.addEventListener('click', applyTransition, false);
    });
  }
  if (!!userInputs.length && !!usersLists.length && !!removeReviewerButtons.length) {
    userInputs.forEach(function (btn) {
      return btn.addEventListener('keyup', handleTyping, false);
    });
    usersLists.forEach(function (usersList) {
      return usersList.addEventListener('click', selectReviewer, false);
    });
    removeReviewerButtons.forEach(function (usersList) {
      return usersList.addEventListener('click', removeReviewer, false);
    });
  }
})(window, document, window.ibexa, window.Routing, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js"), __webpack_exec__("./vendor/ibexa/workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js"));
/******/ }
]);