/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/parts/aside__burger.js":
/*!***********************************!*\
  !*** ./js/parts/aside__burger.js ***!
  \***********************************/
/***/ (() => {

var asideBurger = document.querySelector(".burger");
var burgerButton = document.querySelector(".header__burger");
var closeButton = asideBurger.querySelector(".burger__x");
var resolution = window.matchMedia("(min-width: 1365px)");
var main = document.querySelector(".main");
var overlay = document.querySelector(".overlay");

function smallResolution() {
  asideBurger.classList.add("burger--hidden");
  main.classList.remove("main--positioned");
  burgerButton.addEventListener("click", function () {
    overlay.classList.remove("overlay--hidden");
    asideBurger.classList.remove("burger--hidden");
  });
  closeButton.addEventListener("click", function () {
    overlay.classList.add("overlay--hidden");
    asideBurger.classList.add("burger--hidden");
  });
  overlay.addEventListener("click", function () {
    overlay.classList.add("overlay--hidden");
    asideBurger.classList.add("burger--hidden");
  });
}

if (!resolution.matches) {
  smallResolution();
} else {
  asideBurger.classList.remove("burger--hidden");
  main.classList.add("main--positioned");
}

resolution.addEventListener("change", function (evt) {
  if (!evt.matches) {
    smallResolution();
  } else {
    asideBurger.classList.remove("burger--hidden");
    main.classList.add("main--positioned");
  }
});

/***/ }),

/***/ "./js/parts/aside__call.js":
/*!*********************************!*\
  !*** ./js/parts/aside__call.js ***!
  \*********************************/
/***/ (() => {

var call = document.querySelector('.call');
var callClose = call.querySelector('.call__close');
var burger = document.querySelector('.burger');
var burgerOpenButton = burger.querySelector('.actions__modalCall');
var overlay = document.querySelector('.overlay');
var tabElem = call.querySelector('.form__field');
var resolution = window.matchMedia("(max-width: 1365px)");
tabElem.tabIndex = 0;

function modalShow() {
  call.classList.remove('call--hidden');
  overlay.classList.remove('overlay--hidden');
  tabElem.focus();
}

function modalClose() {
  call.classList.add('call--hidden');
  overlay.classList.add('overlay--hidden');
}

callClose.addEventListener('click', modalClose);
burgerOpenButton.addEventListener('click', modalShow);
overlay.addEventListener('click', modalClose);

if (resolution.matches) {
  var headerOpenButton = document.querySelector('.action__modalCall');
  headerOpenButton.addEventListener('click', modalShow);
}

/***/ }),

/***/ "./js/parts/aside__feedback.js":
/*!*************************************!*\
  !*** ./js/parts/aside__feedback.js ***!
  \*************************************/
/***/ (() => {

var feedBack = document.querySelector('.feedback');
var feedBackClose = feedBack.querySelector('.feedback__close');
var burger = document.querySelector('.burger');
var burgerOpenButton = burger.querySelector('.actions__modalFeedback');
var overlay = document.querySelector('.overlay');
var tabElem = feedBack.querySelector('.form__field');
var resolution = window.matchMedia("(max-width: 1365px)");
tabElem.tabIndex = 0;

function modalShow() {
  feedBack.classList.remove('feedback--hidden');
  overlay.classList.remove('overlay--hidden');
  tabElem.focus();
}

function modalClose() {
  feedBack.classList.add('feedback--hidden');
  overlay.classList.add('overlay--hidden');
}

feedBackClose.addEventListener('click', modalClose);
burgerOpenButton.addEventListener('click', modalShow);
overlay.addEventListener('click', modalClose);

if (resolution.matches) {
  var headerOpenButton = document.querySelector('.action__modalFeedback');
  headerOpenButton.addEventListener('click', modalShow);
}

/***/ }),

/***/ "./js/parts/main__about.js":
/*!*********************************!*\
  !*** ./js/parts/main__about.js ***!
  \*********************************/
/***/ (() => {

var infoText = document.querySelector(".info__text");
var infoButton = document.querySelector(".info__readMore");
var infoButtonText = infoButton.querySelector(".readMore__text");
var infoButtonIcon = infoButton.querySelector(".readMore__icon");
infoButton.addEventListener("click", function () {
  infoText.classList.toggle("info__text--short");
  infoButtonIcon.classList.toggle("readMore__icon--rotate");

  if (infoButtonText.textContent == "Читать далее") {
    infoButtonText.textContent = "Скрыть";
  } else {
    infoButtonText.textContent = "Читать далее";
  }
});

/***/ }),

/***/ "./js/parts/main__brands.js":
/*!**********************************!*\
  !*** ./js/parts/main__brands.js ***!
  \**********************************/
/***/ (() => {

var brands = document.querySelector(".brands");
var brandsList = brands.querySelector(".brands__list");
var readMore = brands.querySelector(".list__read-more");
var readMoreText = readMore.querySelector(".read-more__text");
var readMoreIcon = readMore.querySelector(".read-more__icon");
var brandsMain = document.querySelector(".brands__main");
var slider = brandsMain.querySelector(".swiper");
readMore.addEventListener("click", function () {
  brandsList.classList.toggle("brands__list--short");
  readMoreIcon.classList.toggle("read-more__icon--rotate");

  if (readMoreText.textContent == "Показать все") {
    readMoreText.textContent = "Скрыть";
  } else {
    readMoreText.textContent = "Показать все";
  }
});

function smallResolution() {
  brandsMain.appendChild(slider);
  brandsList.remove();
  readMore.remove();
}

function bigResolution() {
  slider.remove();
  brandsMain.appendChild(brandsList);
  brandsMain.appendChild(readMore);
}

var resolution = window.matchMedia("(max-width: 768px)");

if (resolution.matches) {
  smallResolution();
} else {
  bigResolution();
}

resolution.addEventListener("change", function (evt) {
  if (evt.matches) {
    smallResolution();
  } else {
    bigResolution();
  }
});

/***/ }),

/***/ "./js/parts/main__prices.js":
/*!**********************************!*\
  !*** ./js/parts/main__prices.js ***!
  \**********************************/
/***/ (() => {

var prices = document.querySelector(".prices");
var pricesList = prices.querySelector(".prices__list");
var pricesInfo = prices.querySelector(".prices__info");
var slider = prices.querySelector(".swiper");
var resolution = window.matchMedia("(max-width: 768px)");

function smallResolution() {
  prices.insertBefore(slider, pricesInfo);
  pricesList.remove();
}

function bigResolution() {
  slider.remove();
  prices.insertBefore(pricesList, pricesInfo);
}

if (resolution.matches) {
  smallResolution();
} else {
  bigResolution();
}

resolution.addEventListener("change", function (evt) {
  if (evt.matches) {
    smallResolution();
  } else {
    bigResolution();
  }
});

/***/ }),

/***/ "./js/parts/main__title&nav.js":
/*!*************************************!*\
  !*** ./js/parts/main__title&nav.js ***!
  \*************************************/
/***/ (() => {

var listElem = document.querySelectorAll(".list__elem");

function listener(clickedElem) {
  listElem.forEach(function (elem) {
    if (elem !== clickedElem) {
      elem.classList.remove("list__elem--chosen");
    }
  });
  clickedElem.classList.toggle("list__elem--chosen");
}

listElem.forEach(function (elem) {
  elem.addEventListener("click", function () {
    listener(elem);
  });
});

/***/ }),

/***/ "./js/parts/main_technique.js":
/*!************************************!*\
  !*** ./js/parts/main_technique.js ***!
  \************************************/
/***/ (() => {

var technique = document.querySelector(".technique");
var techniqueList = technique.querySelector(".technique__list");
var readMore = technique.querySelector(".list__read-more");
var readMoreText = readMore.querySelector(".read-more__text");
var readMoreIcon = readMore.querySelector(".read-more__icon");
var techniqueMain = document.querySelector(".technique__main");
var slider = techniqueMain.querySelector(".swiper");
var resolution = window.matchMedia("(max-width: 768px)");
readMore.addEventListener("click", function () {
  techniqueList.classList.toggle("technique__list--short");
  readMoreIcon.classList.toggle("read-more__icon--rotate");

  if (readMoreText.textContent == "Показать все") {
    readMoreText.textContent = "Скрыть";
  } else {
    readMoreText.textContent = "Показать все";
  }
});

function smallResolution() {
  techniqueMain.appendChild(slider);
  techniqueList.remove();
  readMore.remove();
}

function bigResolution() {
  slider.remove();
  techniqueMain.appendChild(techniqueList);
  techniqueMain.appendChild(readMore);
}

if (resolution.matches) {
  smallResolution();
} else {
  bigResolution();
}

resolution.addEventListener("change", function (evt) {
  if (evt.matches) {
    smallResolution();
  } else {
    bigResolution();
  }
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgerX.svg */ "./img/burgerX.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Group.svg */ "./img/Group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/search.svg */ "./img/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Phone.svg */ "./img/Phone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat.svg */ "./img/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Contacts.svg */ "./img/Contacts.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.svg */ "./img/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.svg */ "./img/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.svg */ "./img/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/readMoreButton_icon.svg */ "./img/readMoreButton_icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo_large.png */ "./img/logo_large.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo_middle.png */ "./img/logo_middle.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo_small.png */ "./img/logo_small.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosh.svg */ "./img/bosh.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/go__button.svg */ "./img/go__button.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/HP.svg */ "./img/HP.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Acer.svg */ "./img/Acer.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Apple.svg */ "./img/Apple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Lenovo.svg */ "./img/Lenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Samsung.svg */ "./img/Samsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ViewSonic.svg */ "./img/ViewSonic.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Sony.svg */ "./img/Sony.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Order.svg */ "./img/Order.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Line.svg */ "./img/Line.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/submit.svg */ "./img/submit.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var code = "<!DOCTYPE html>\r\n  <html lang=\"ru\">\r\n    <head>\r\n      <meta charset=\"UTF-8\">\r\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n      <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n      <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css\">\r\n      <title>1.6</title>\r\n    </head>\r\n    <body>\r\n        <div class=\"overlay overlay--hidden\"></div>\r\n        <aside class=\"burger burger--hidden\">\r\n            <div class=\"burger__header\">\r\n                <button class=\"burger__button burger__x\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Burger\">\r\n                </button>\r\n                <a class=\"burger__logo\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></a>\r\n                <button class=\"burger__button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Search\">\r\n                </button>\r\n            </div>\r\n            <div class=\"burger__main\">\r\n                <nav class=\"burger__nav\">\r\n                    <ul class=\"nav__list\">\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Ремонт техники</a></li>\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Услуги и сервисы</a></li>\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Корпоративным клиентам</a></li>\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Продавцам техники</a></li>\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Партнерам</a></li>\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Производителям</a></li>\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Наши сервисные центры</a></li>\r\n                        <li class=\"nav__elem\"><a class=\"nav__link\" href=\"#\">Контакты</a></li>\r\n                    </ul>\r\n                </nav> \r\n            </div>\r\n            <div class=\"burger__footer\">\r\n                <ul class=\"burger__actions\">\r\n                    <li class=\"actions__elem actions__modalCall\">\r\n                        <button class=\"actions__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Phone\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"actions__elem actions__modalFeedback\">\r\n                        <button class=\"actions__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Chat\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"actions__elem\">\r\n                        <button class=\"actions__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Contacts\">\r\n                        </button>\r\n                    </li>\r\n                </ul>\r\n                <a class=\"email\" href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n                <a class=\"number\" href=\"tel:+78008908900\">8 800 890 8900</a>\r\n                <ul class=\"burger__lang\">\r\n                    <li>\r\n                        <label class=\"lang__name\"><input class=\"lang__radio\" type=\"radio\" name=\"lang\"><span class=\"lang__text\">RU</span></label>\r\n                    </li>\r\n                    <li>\r\n                        <label class=\"lang__name\"><input class=\"lang__radio\" type=\"radio\" name=\"lang\"><span class=\"lang__text\">EN</span></label>\r\n                    </li>\r\n                    <li>\r\n                        <label class=\"lang__name\"><input class=\"lang__radio\" type=\"radio\" name=\"lang\"><span class=\"lang__text\">CH</span></label>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </aside>\r\n        <main class=\"main\">\r\n            <header class=\"main__header\">\r\n                <button class=\"header__button header__burger\">\r\n                    <img class=\"button__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Burger\">\r\n                </button>\r\n                <a class=\"header__logo\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\"></a>\r\n                <ul class=\"header__actions\">\r\n                    <li class=\"action\">\r\n                        <button class=\"action__button action__modalCall\">\r\n                            <img class=\"button__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Phone\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"action\">\r\n                        <button class=\"action__button action__modalFeedback\">\r\n                            <img class=\"button__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Message\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"action\">\r\n                        <button class=\"action__button\">\r\n                            <img class=\"button__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Contacts\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"action\">\r\n                        <button class=\"action__button\">\r\n                            <img class=\"button__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Tools\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"action\">\r\n                        <button class=\"action__button\">\r\n                            <img class=\"button__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Status\">\r\n                        </button>\r\n                    </li>\r\n                </ul>\r\n            </header>\r\n            <div class=\"divider\"></div>\r\n        <div class=\"main__title\">\r\n            <h1 class=\"title__header\">Услуги и сервисы</h1>\r\n            <ul class=\"main__operations\">\r\n                <li class=\"operation\">\r\n                    <button class=\"operation__button\">\r\n                        Оставить заявку\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Tools\">\r\n                    </button>\r\n                </li>\r\n                <li class=\"operation\">\r\n                    <button class=\"operation__button\">\r\n                        Статус ремонта\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Status\">\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <nav class=\"main__navigation\">\r\n            <ul class=\"navigation__list\">\r\n                <li class=\"list__elem\">\r\n                    <a class=\"elem__link \" href=\"#\"> Ремонтируемые бренды</a>\r\n                </li>\r\n                <li class=\"list__elem\">\r\n                    <a class=\"elem__link\" href=\"#\"> Ремонтируемые устройства</a>\r\n                </li>\r\n                <li class=\"list__elem\">\r\n                    <a class=\"elem__link\" href=\"#\"> Цены на услуги</a>\r\n                </li>\r\n                <li class=\"list__elem\">\r\n                    <a class=\"elem__link\" href=\"#\"> Адреса сервисных центров</a>\r\n                </li>\r\n                <li class=\"list__elem\">\r\n                    <a class=\"elem__link\" href=\"#\"> Специальные цены</a>\r\n                </li>\r\n                <li class=\"list__elem\">\r\n                    <a class=\"elem__link\" href=\"#\"> Отзывы</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <section class=\"main__about\">\r\n            <div class=\"about__info \">\r\n                    <div class=\"info__text info__text--short\">\r\n                    Мы являемся авторизованным сервисным центром по ремонту техники Dell.\r\n                    Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n                    <br>\r\n                    Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера,\r\n                    что подтверждает большое количество постоянных клиентов.\r\n                    Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и\r\n                    близким.\r\n                    </div>\r\n                <button class=\"info__readMore\">\r\n                    <img class=\"readMore__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\r\n                    <span class=\"readMore__text\">Читать далее</span>\r\n                </button>\r\n            </div>\r\n            <picture class=\"about__picture\">\r\n                <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" type=\"image/png\" media=\"(min-width:1120px)\">\r\n                <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" type=\"image/png\" media=\"(min-width:768px)\">\r\n                <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" type=\"image/png\" media=\"(max-width:767px)\">\r\n                <img class=\"picture\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Лого компании\">\r\n            </picture>\r\n        </section>\r\n        <section class=\"brands\">\r\n            <h1 class=\"brands__title\">\r\n                <span class=\"title__text\">РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</span>\r\n            </h1>\r\n            <div class=\"brands__main\">\r\n                <div class=\"swiper\">\r\n                    <div class=\"swiper-wrapper\">\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Bosh\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button></div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"HP\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button></div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Acer\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Apple\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Lenovo\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"Samsung\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"Bosh\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button></div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"HP\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button></div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Acer\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Apple\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"swiper-slide\">\r\n                            <button class=\"block__button\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Lenovo\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                <div class=\"swiper-pagination\"></div>\r\n                </div>\r\n                <ul class=\"brands__list brands__list--short\">\r\n                    <li class=\"brands__block\">  \r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Bosh\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li> \r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"HP\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Acer\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Apple\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Lenovo\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li  class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"Samsung\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"brands__block\">  \r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"Bosh\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li> \r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"HP\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Acer\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Apple\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"brands__block\">\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Lenovo\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </li>\r\n                </ul>\r\n                <button class=\"list__read-more\">\r\n                    <img class=\"read-more__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\r\n                    <span class=\"read-more__text\">Показать все</span>\r\n                </button>\r\n              </div>\r\n        </section>\r\n        <section class=\"technique\">\r\n          <h1 class=\"technique__title\">\r\n              <span class=\"title__text\">РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</span>\r\n          </h1>\r\n          <div class=\"technique__main\">\r\n              <div class=\"swiper\">\r\n                  <div class=\"swiper-wrapper\">\r\n                      <div class=\"swiper-slide\">\r\n                          <button class=\"block__button\">\r\n                              <h3 class=\"button__text\">Ремонт ноутбуков</h3>\r\n                              <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                          </button></div>\r\n                        <div class=\"swiper-slide\">\r\n                          <button class=\"block__button\">\r\n                            <h3 class=\"button__text\">Ремонт планшетов</h3>\r\n                            <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                          </button>\r\n                        </div>\r\n                      <div class=\"swiper-slide\">\r\n                          <button class=\"block__button\">\r\n                            <h3 class=\"button__text\">Ремонт ПК</h3>\r\n                              <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                          </button>\r\n                      </div>\r\n                      <div class=\"swiper-slide\">\r\n                          <button class=\"block__button\">\r\n                            <h3 class=\"button__text\">Ремонт мониторов</h3>\r\n                              <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                          </button>\r\n                      </div> \r\n                      <div class=\"swiper-slide\">\r\n                        <button class=\"block__button\">\r\n                          <h3 class=\"button__text\">Ремонт принтеров</h3>\r\n                            <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </div> \r\n                    <div class=\"swiper-slide\">\r\n                        <button class=\"block__button\">\r\n                          <h3 class=\"button__text\">Ремонт смартфонов</h3>\r\n                            <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"swiper-slide\">\r\n                        <button class=\"block__button\">\r\n                          <h3 class=\"button__text\">Ремонт колонок</h3>\r\n                            <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </div> \r\n                    <div class=\"swiper-slide\">\r\n                        <button class=\"block__button\">\r\n                          <h3 class=\"button__text\">Ремонт мышек</h3>\r\n                            <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"swiper-slide\">\r\n                        <button class=\"block__button\">\r\n                          <h3 class=\"button__text\">Ремонт холодильников</h3>\r\n                            <img class=\"button__go\"  src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                        </button>\r\n                    </div>        \r\n                    </div>\r\n                    <div class=\"swiper-pagination\"></div>\r\n              </div>\r\n              <ul class=\"technique__list technique__list--short\">\r\n                  <li class=\"technique__block\">  \r\n                      <button class=\"block__button\">\r\n                        <h3 class=\"button__text\">Ремонт ноутбуков</h3>\r\n                          <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                      </button>\r\n                  </li> \r\n                  <li class=\"technique__block\">\r\n                      <button class=\"block__button\">\r\n                        <h3 class=\"button__text\">Ремонт планшетов</h3>\r\n                          <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                      </button>\r\n                  </li>\r\n                  <li class=\"technique__block\">\r\n                      <button class=\"block__button\">\r\n                        <h3 class=\"button__text\">Ремонт ПК</h3>\r\n                        <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                      </button>\r\n                  </li>\r\n                  <li class=\"technique__block\">\r\n                      <button class=\"block__button\">\r\n                        <h3 class=\"button__text\">Ремонт колонок</h3>\r\n                        <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                      </button>\r\n                  </li>\r\n                  <li class=\"technique__block\">\r\n                    <button class=\"block__button\">\r\n                      <h3 class=\"button__text\">Ремонт принтеров</h3>\r\n                      <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                    </button>\r\n                </li>\r\n                <li class=\"technique__block\">\r\n                    <button class=\"block__button\">\r\n                      <h3 class=\"button__text\">Ремонт смартфонов</h3>\r\n                      <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                    </button>\r\n                </li>\r\n                <li class=\"technique__block\">\r\n                    <button class=\"block__button\">\r\n                      <h3 class=\"button__text\">Ремонт мышек</h3>\r\n                      <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                    </button>\r\n                </li>\r\n                <li class=\"technique__block\">\r\n                    <button class=\"block__button\">\r\n                      <h3 class=\"button__text\">Ремонт холодильников</h3>\r\n                      <img class=\"button__go\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Go\">\r\n                    </button>\r\n                </li>\r\n              </ul>\r\n              <button class=\"list__read-more\">\r\n                  <img class=\"read-more__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\r\n                  <span class=\"read-more__text\">Показать все</span>\r\n              </button>\r\n            </div>\r\n      </section>\r\n      <section class=\"prices\">\r\n        <h1 class=\"prices__title\"><span class=\"title__text\">ЦЕНЫ НА УСЛУГИ</span></h1>\r\n        <div class=\"swiper\">\r\n            <div class=\"swiper-wrapper\">\r\n                <div class=\"swiper-slide\">\r\n                    <div class=\"prices__block\">\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Ремонтные услуги</span>\r\n                            <span class=\"servise__text\">Диагностика</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Цена</span>\r\n                            <span class=\"servise__text\">Бесплатно</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Срок</span>\r\n                            <span class=\"servise__text\">30 мин</span> \r\n                        </div>\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                  <div class=\"swiper-slide\">\r\n                    <div class=\"prices__block\">\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Ремонтные услуги</span>\r\n                            <span class=\"servise__text\">Замена дисплея</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Цена</span>\r\n                            <span class=\"servise__text\">1000 &#8381;</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Срок</span>\r\n                            <span class=\"servise__text\">30 - 120 мин</span> \r\n                        </div>\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                        </button>\r\n                    </div>\r\n                    </div>\r\n                <div class=\"swiper-slide\">\r\n                    <div class=\"prices__block\">\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Ремонтные услуги</span>\r\n                            <span class=\"servise__text\">Замена полифонического динамика</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Цена</span>\r\n                            <span class=\"servise__text\">1000 &#8381;</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Срок</span>\r\n                            <span class=\"servise__text\">30 - 120 мин</span> \r\n                        </div>\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                    <div class=\"prices__block\">\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Ремонтные услуги</span>\r\n                            <span class=\"servise__text\">Тестирование с выдачей технического заключения</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Цена</span>\r\n                            <span class=\"servise__text\">1000 &#8381;</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Срок</span>\r\n                            <span class=\"servise__text\">30 - 120 мин</span> \r\n                        </div>\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                        </button>\r\n                    </div>\r\n                </div> \r\n                <div class=\"swiper-slide\">\r\n                    <div class=\"prices__block\">\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Ремонтные услуги</span>\r\n                            <span class=\"servise__text\">Замена программного обеспечения</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Цена</span>\r\n                            <span class=\"servise__text\">10000 &#8381;</span> \r\n                        </div>\r\n                        <div class=\"block__servise\">\r\n                            <span class=\"servise__desc\">Срок</span>\r\n                            <span class=\"servise__text\">30 - 120 мин</span> \r\n                        </div>\r\n                        <button class=\"block__button\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                        </button>\r\n                    </div>\r\n              </div> \r\n              </div>\r\n              <div class=\"swiper-pagination\"></div>\r\n        </div>\r\n        <ul class=\"prices__list\">\r\n            <li class=\"list__elem\">\r\n                <span class=\"elem__cell\">Ремонтные услуги</span>\r\n                <span class=\"elem__cell\">Цена</span>\r\n                <span class=\"elem__cell\">Срок</span>\r\n            </li>\r\n            <li class=\"list__elem\">\r\n                <span class=\"elem__cell\">Диагностика</span>\r\n                <span class=\"elem__cell\">Бесплатно</span>\r\n                <span class=\"elem__cell\">30 мин</span>\r\n                <button class=\"elem__button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                </button>\r\n            </li>\r\n            <li class=\"list__elem\">\r\n                <span class=\"elem__cell\">Замена дисплея</span>\r\n                <span class=\"elem__cell\">1000</span>\r\n                <span class=\"elem__cell\">30 - 120 мин</span>\r\n                <button class=\"elem__button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                </button>\r\n            </li>\r\n            <li class=\"list__elem\">\r\n                <span class=\"elem__cell\">Замена полифонического динамика</span>\r\n                <span class=\"elem__cell\">1000</span>\r\n                <span class=\"elem__cell\">30 - 120 мин</span>\r\n                <button class=\"elem__button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                </button>\r\n            </li>\r\n            <li class=\"list__elem\">\r\n                <span class=\"elem__cell\">Тестирование с выдачей технического заключения</span>\r\n                <span class=\"elem__cell\">1000</span>\r\n                <span class=\"elem__cell\">30 - 120 мин</span>\r\n                <button class=\"elem__button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                </button>\r\n            </li>\r\n            <li class=\"list__elem\">\r\n                <span class=\"elem__cell\">Замена программного обеспечения</span>\r\n                <span class=\"elem__cell\">1000</span>\r\n                <span class=\"elem__cell\">30 - 120 мин</span>\r\n                <button class=\"elem__button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Заказать\">\r\n                </button>\r\n            </li>\r\n            \r\n        </ul>\r\n        <p class=\"prices__info\">Все цены указаны с учетом НДС.\r\n            Стоимость ремонта указана на единичную услугу.\r\n            Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\r\n        </p>\r\n        <a class=\"prices__offer\"><span class=\"offer__text\">Получить коммерческое предложение <img class=\"offer__line\" src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\"></span></a>\r\n      </section>\r\n      <footer class=\"main__footer\">\r\n        <div class=\"footer__info\">\r\n            © 2019 CPS\r\n            <br>\r\n            Разработано командой Apesong \r\n        </div>\r\n        <div class=\"footer__info\">\r\n            Политика конфиденциальности\r\n        </div>\r\n        <div class=\"footer__info\">\r\n            Информация, размещенная на данной странице, не является публичной офертой\r\n        </div>\r\n      </footer>\r\n    </main>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js\"></script>\r\n    <aside class=\"feedback feedback--hidden\">\r\n        <button class=\"feedback__close\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Close\">\r\n        </button>\r\n        <h1 class=\"feedback__title\">Обратная связь</h1>\r\n        <form class=\"feedback__form\" action=\"\" method=\"post\" >\r\n        <input class=\"form__field\" type=\"text\" name=\"name\" placeholder=\"Имя\">\r\n        <input class=\"form__field\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\">\r\n        <input class=\"form__field\" type=\"email\" placeholder=\"Email\">\r\n        <textarea class=\"form__field form__message\" rows = '50' name=\"message\" placeholder=\"Сообщение\"></textarea>\r\n        <p class=\"feedback__info\">\r\n            Нажимая “отправить”, вы даете согласие на\r\n            <a href=\"\" class='info__link'>обработку персональных данных</a>\r\n            и соглашаетесь с нашей\r\n            <a href=\"\" class=\"info__link\">политикой конфиденциальности</a>\r\n        </p>\r\n        <button class='form__submit' type=\"submit\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"\">\r\n        </button>\r\n    </form>\r\n    </aside>\r\n    <aside class=\"call call--hidden\">\r\n        <button class=\"call__close\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Close\">\r\n        </button>\r\n        <h1 class=\"call__title\">Заказать звонок</h1>\r\n        <form class=\"call__form\" action=\"\" method=\"post\" >\r\n        <input class=\"form__field\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\">\r\n        <p class=\"call__info\">\r\n            Нажимая “отправить”, вы даете согласие на\r\n            <a href=\"\" class='info__link'>обработку персональных данных</a>\r\n            и соглашаетесь с нашей\r\n            <a href=\"\" class=\"info__link\">политикой конфиденциальности</a>\r\n        </p>\r\n        <button class='form__submit' type=\"submit\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"\">\r\n        </button>\r\n    </form>\r\n    </aside>\r\n    </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/Acer.svg":
/*!**********************!*\
  !*** ./img/Acer.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Acer.svg";

/***/ }),

/***/ "./img/Apple.svg":
/*!***********************!*\
  !*** ./img/Apple.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Apple.svg";

/***/ }),

/***/ "./img/Contacts.svg":
/*!**************************!*\
  !*** ./img/Contacts.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Contacts.svg";

/***/ }),

/***/ "./img/Group.svg":
/*!***********************!*\
  !*** ./img/Group.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group.svg";

/***/ }),

/***/ "./img/HP.svg":
/*!********************!*\
  !*** ./img/HP.svg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/HP.svg";

/***/ }),

/***/ "./img/Lenovo.svg":
/*!************************!*\
  !*** ./img/Lenovo.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Lenovo.svg";

/***/ }),

/***/ "./img/Line.svg":
/*!**********************!*\
  !*** ./img/Line.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Line.svg";

/***/ }),

/***/ "./img/Order.svg":
/*!***********************!*\
  !*** ./img/Order.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Order.svg";

/***/ }),

/***/ "./img/Phone.svg":
/*!***********************!*\
  !*** ./img/Phone.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Phone.svg";

/***/ }),

/***/ "./img/Samsung.svg":
/*!*************************!*\
  !*** ./img/Samsung.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Samsung.svg";

/***/ }),

/***/ "./img/Sony.svg":
/*!**********************!*\
  !*** ./img/Sony.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Sony.svg";

/***/ }),

/***/ "./img/ViewSonic.svg":
/*!***************************!*\
  !*** ./img/ViewSonic.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ViewSonic.svg";

/***/ }),

/***/ "./img/bosh.svg":
/*!**********************!*\
  !*** ./img/bosh.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosh.svg";

/***/ }),

/***/ "./img/burger.svg":
/*!************************!*\
  !*** ./img/burger.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/burgerX.svg":
/*!*************************!*\
  !*** ./img/burgerX.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burgerX.svg";

/***/ }),

/***/ "./img/chat.svg":
/*!**********************!*\
  !*** ./img/chat.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/checkstatus.svg":
/*!*****************************!*\
  !*** ./img/checkstatus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/go__button.svg":
/*!****************************!*\
  !*** ./img/go__button.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/go__button.svg";

/***/ }),

/***/ "./img/logo_large.png":
/*!****************************!*\
  !*** ./img/logo_large.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo_large.png";

/***/ }),

/***/ "./img/logo_middle.png":
/*!*****************************!*\
  !*** ./img/logo_middle.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo_middle.png";

/***/ }),

/***/ "./img/logo_small.png":
/*!****************************!*\
  !*** ./img/logo_small.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo_small.png";

/***/ }),

/***/ "./img/readMoreButton_icon.svg":
/*!*************************************!*\
  !*** ./img/readMoreButton_icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/readMoreButton_icon.svg";

/***/ }),

/***/ "./img/repair.svg":
/*!************************!*\
  !*** ./img/repair.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/search.svg":
/*!************************!*\
  !*** ./img/search.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/submit.svg":
/*!************************!*\
  !*** ./img/submit.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/submit.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _parts_main_title_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/main__title&nav.js */ "./js/parts/main__title&nav.js");
/* harmony import */ var _parts_main_title_nav_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_main_title_nav_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_main_brands_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/main__brands.js */ "./js/parts/main__brands.js");
/* harmony import */ var _parts_main_brands_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_main_brands_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_aside_burger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/aside__burger.js */ "./js/parts/aside__burger.js");
/* harmony import */ var _parts_aside_burger_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_parts_aside_burger_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _parts_main_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/main__about.js */ "./js/parts/main__about.js");
/* harmony import */ var _parts_main_about_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_parts_main_about_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_main_technique_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/main_technique.js */ "./js/parts/main_technique.js");
/* harmony import */ var _parts_main_technique_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_parts_main_technique_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_main_prices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/main__prices.js */ "./js/parts/main__prices.js");
/* harmony import */ var _parts_main_prices_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_parts_main_prices_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_aside_feedback_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/aside__feedback.js */ "./js/parts/aside__feedback.js");
/* harmony import */ var _parts_aside_feedback_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_parts_aside_feedback_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_aside_call_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/aside__call.js */ "./js/parts/aside__call.js");
/* harmony import */ var _parts_aside_call_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_parts_aside_call_js__WEBPACK_IMPORTED_MODULE_9__);










var resolution = window.matchMedia("(max-width: 768px)");

if (resolution.matches) {
  var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: "auto",
    spaceBetween: 16
  });
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map