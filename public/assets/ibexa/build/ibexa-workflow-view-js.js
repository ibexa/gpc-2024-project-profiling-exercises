(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-workflow-view-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/admin.location.tab.js":
/*!**********************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/admin.location.tab.js ***!
  \**********************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var SELECTOR_TABS = '.ibexa-tabs';
  var SELECTOR_TAB = '.ibexa-tabs__tab';
  var SELECTOR_TAB_ACTIVE = '.ibexa-tabs__tab--active';
  var CLASS_TAB_ACTIVE = 'ibexa-tabs__tab--active';
  var switchActiveTabs = function switchActiveTabs(currentTab, previousTab) {
    if (previousTab) {
      previousTab.classList.remove(CLASS_TAB_ACTIVE);
    }
    currentTab.classList.add(CLASS_TAB_ACTIVE);
  };
  var changeHashForPageReload = function changeHashForPageReload(hash) {
    global.location.hash = "".concat(hash, "#tab");
  };
  var handleTabShown = function handleTabShown(event) {
    var target = event.target,
      relatedTarget = event.relatedTarget;
    var currentTab = target.closest(SELECTOR_TAB);
    var previousTab = relatedTarget.closest(SELECTOR_TAB);
    changeHashForPageReload(event.target.hash);
    switchActiveTabs(currentTab, previousTab);
  };
  var setActiveHashTab = function setActiveHashTab() {
    var activeHashTabLink = doc.querySelector(".ibexa-tabs a[href=\"#".concat(global.location.hash.split('#')[1], "\"]"));
    if (!activeHashTabLink) {
      return;
    }
    var activeHashTab = activeHashTabLink.closest(SELECTOR_TAB);
    var parentTabs = activeHashTab.closest(SELECTOR_TABS);
    var currentActiveTab = parentTabs.querySelector(SELECTOR_TAB_ACTIVE);
    bootstrap.Tab.getOrCreateInstance(activeHashTabLink).show();
    switchActiveTabs(activeHashTab, currentActiveTab);
  };
  setActiveHashTab();
  doc.querySelectorAll('.ibexa-tabs a').forEach(function (tab) {
    return tab.addEventListener('shown.bs.tab', handleTabShown);
  });
})(window, window.document, window.bootstrap);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/admin.location.tab.js"));
/******/ }
]);