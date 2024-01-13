(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-welcome-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/welcome.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/welcome.js ***!
  \********************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, bootstrap) {
  var termsContentContainer = doc.querySelector('.ibexa-modal__content-terms');
  var termsListContainer = doc.querySelector('.ibexa-modal__table-of-contents-list');
  var openModalBtn = doc.querySelector('.ibexa-perso-welcome__show-modal-button');
  var acceptTermsBtn = doc.querySelector('.ibexa-modal__accept-terms-and-conditions-button');
  var tableOfContentsItems = _toConsumableArray(doc.querySelectorAll('.ibexa-modal__table-of-contents-list-link'));
  var carouselBtns = _toConsumableArray(doc.querySelectorAll('[data-carousel-btn]'));
  var carouselItems = _toConsumableArray(doc.querySelectorAll('[data-carousel-item]'));
  var paragraphsIds = tableOfContentsItems.map(function (item) {
    return item.dataset.scrollTo;
  });
  var WELCOME_ANIMATION_TIME_RESET = 1000;
  var WELCOME_ANIMATION_TIME_CHANGE = 10000;
  var carouselInterval;
  var isCarouselBtnLocked = false;
  var handleContentScroll = function handleContentScroll() {
    var parentRect = termsContentContainer.getBoundingClientRect();
    var parentHeight = termsContentContainer.offsetHeight;
    var paragraphs = paragraphsIds.map(function (paragraphId) {
      return termsContentContainer.querySelector("#".concat(paragraphId));
    });
    var currentParagraph = paragraphs.reverse().find(function (paragraph) {
      var paragraphRect = paragraph.getBoundingClientRect();
      var relativeTop = paragraphRect.top - parentRect.top;
      var isAboveThreshold = relativeTop < parentHeight / 2;
      return isAboveThreshold;
    });
    var activeParagraph = currentParagraph !== null && currentParagraph !== void 0 ? currentParagraph : paragraphs[paragraphs.length - 1];
    var respectiveTableOfContentsLink = termsListContainer.querySelector("[data-scroll-to=\"".concat(activeParagraph.id, "\"]"));
    var respectiveTableOfContentsListItem = respectiveTableOfContentsLink.closest('.ibexa-modal__table-of-contents-list-item');
    var lastActiveTableOfContentsListItem = termsListContainer.querySelector('.ibexa-modal__table-of-contents-list-item--active');
    if (respectiveTableOfContentsListItem !== lastActiveTableOfContentsListItem) {
      lastActiveTableOfContentsListItem === null || lastActiveTableOfContentsListItem === void 0 || lastActiveTableOfContentsListItem.classList.remove('ibexa-modal__table-of-contents-list-item--active');
      respectiveTableOfContentsListItem.classList.add('ibexa-modal__table-of-contents-list-item--active');
    }
  };
  var startCarouselAnimation = function startCarouselAnimation() {
    carouselInterval = setInterval(function () {
      var _carouselBtns;
      var activeBtnIndex = carouselBtns.findIndex(function (btn) {
        return btn.classList.contains('ibexa-perso-carousel__btn--active');
      });
      var nextBtn = (_carouselBtns = carouselBtns[activeBtnIndex + 1]) !== null && _carouselBtns !== void 0 ? _carouselBtns : carouselBtns[0];
      changeCarouselItem(nextBtn);
    }, WELCOME_ANIMATION_TIME_CHANGE);
  };
  var stopCarouselAnimation = function stopCarouselAnimation() {
    clearInterval(carouselInterval);
  };
  var restartCarouselAnimation = function restartCarouselAnimation() {
    stopCarouselAnimation();
    startCarouselAnimation();
  };
  var changeCarouselItem = function changeCarouselItem(carouselBtn) {
    if (carouselBtn.classList.contains('ibexa-perso-carousel__btn--active') || isCarouselBtnLocked) {
      return;
    }
    var activeBtn = doc.querySelector('.ibexa-perso-carousel__btn--active');
    var activeCarouselItem = carouselItems.find(function (item) {
      return item.dataset.carouselItem === activeBtn.dataset.carouselBtn;
    });
    var toBeActiveCarouselItem = carouselItems.find(function (item) {
      return item.dataset.carouselItem === carouselBtn.dataset.carouselBtn;
    });
    activeBtn.classList.remove('ibexa-perso-carousel__btn--active');
    carouselBtn.classList.add('ibexa-perso-carousel__btn--active');
    activeCarouselItem.classList.remove('ibexa-perso-carousel__item--active');
    activeCarouselItem.classList.add('ibexa-perso-carousel__item--hiding');
    toBeActiveCarouselItem.classList.add('ibexa-perso-carousel__item--active');
    toBeActiveCarouselItem.addEventListener('mouseenter', stopCarouselAnimation, false);
    toBeActiveCarouselItem.addEventListener('mouseleave', restartCarouselAnimation, false);
    activeCarouselItem.removeEventListener('mouseenter', stopCarouselAnimation, false);
    activeCarouselItem.removeEventListener('mouseleave', restartCarouselAnimation, false);
    isCarouselBtnLocked = true;
  };
  var handleCarouselChangeOnClick = function handleCarouselChangeOnClick(_ref) {
    var target = _ref.target;
    restartCarouselAnimation();
    changeCarouselItem(target);
  };
  var handleCarouselChangeOnKeyDown = function handleCarouselChangeOnKeyDown(event) {
    if (event.key !== 'Enter' || event.key !== ' ') {
      return;
    }
    restartCarouselAnimation();
    changeCarouselItem(event.target);
  };
  var scrollTerms = function scrollTerms(event) {
    event.preventDefault();
    var listLink = event.currentTarget;
    var scrollTo = listLink.dataset.scrollTo;
    if (scrollTo) {
      termsContentContainer.querySelector("#".concat(scrollTo)).scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  if (openModalBtn) {
    openModalBtn.addEventListener('click', function (event) {
      event.preventDefault();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#terms-and-conditions-modal')).show();
    }, false);
  }
  if (acceptTermsBtn) {
    acceptTermsBtn.addEventListener('click', function () {
      doc.querySelector('.ibexa-perso-welcome__accept-terms-checkbox').checked = true;
    }, false);
  }
  tableOfContentsItems.forEach(function (listLink) {
    listLink.addEventListener('click', scrollTerms, false);
  });
  termsContentContainer.addEventListener('scroll', handleContentScroll, false);
  carouselItems.forEach(function (item) {
    item.addEventListener('transitionend', function (_ref2) {
      var propertyName = _ref2.propertyName,
        target = _ref2.target;
      if (propertyName !== 'left' || !target.classList.contains('ibexa-perso-carousel__item--hiding')) {
        return;
      }
      target.classList.remove('ibexa-perso-carousel__item--hiding');
      setTimeout(function () {
        isCarouselBtnLocked = false;
      }, WELCOME_ANIMATION_TIME_RESET);
    });
  });
  carouselItems[0].addEventListener('mouseenter', stopCarouselAnimation, false);
  carouselItems[0].addEventListener('mouseleave', restartCarouselAnimation, false);
  carouselBtns.forEach(function (btn) {
    btn.addEventListener('click', handleCarouselChangeOnClick, false);
    btn.addEventListener('keydown', handleCarouselChangeOnKeyDown, false);
  });
  startCarouselAnimation();
})(window, window.document, window.bootstrap);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/welcome.js"));
/******/ }
]);