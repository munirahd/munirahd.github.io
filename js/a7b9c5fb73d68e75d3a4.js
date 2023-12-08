"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Contacts_js"],{

/***/ "./src/assets/styles/pages/about.sass":
/*!********************************************!*\
  !*** ./src/assets/styles/pages/about.sass ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/about.sass?");

/***/ }),

/***/ "./src/app/blocks/about/About.js":
/*!***************************************!*\
  !*** ./src/app/blocks/about/About.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n        <section class=\"about\">\n        <!--\n            <div class=\"about__illustrations\">\n                <img src=\"/images/about-me.png\" alt=\"\" class=\"about__image\">\n            </div>\n            -->\n           \n            <div class=\"about__text\">\n             <div class=\"path\">\n            <h1 class=\"h1 path__name\">About Me</h1>\n            <p class=\"path__description\"></p>\n          </div>\n                ${t.description\n                  .map(\n                    (text) => /*html*/ `\n                    <p class=\"about__description\">${text}</p>\n                `\n                  )\n                  .join(\"\")}\n                <ol>\n                ${t.why\n                  .map(\n                    (text) => /*html*/ `\n                    <li >${text}</li>\n        \n                    `\n                  )\n                  .join(\"\")}\n                    </ol>\n            </div>\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/About.js?");

/***/ }),

/***/ "./src/app/blocks/about/Facts.js":
/*!***************************************!*\
  !*** ./src/app/blocks/about/Facts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/`\n        <section class=\"facts\">\n            <h2 class=\"h2\">${t.title}</h2>\n            <div class=\"facts__content\">\n                <ul class=\"facts__list\">\n                    ${t.list.map(fact => /*html*/`\n                        <li class=\"fact\">${fact}</li>\n                    `).join(\"\")}\n                </ul>\n                <div class=\"facts__illustrations\">\n                    \n                </div>\n            </div>\n\n        </section>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/Facts.js?");

/***/ }),

/***/ "./src/app/blocks/about/Skills.js":
/*!****************************************!*\
  !*** ./src/app/blocks/about/Skills.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n    return /*html*/ `\n        <section class=\"skills\">\n        <div class=\"skills__header\">\n          <h2 class=\"h2\"><span>${t.title}</span></h2>\n          </div>\n          <div class=\"skills__content\">\n            <div class=\"skills__category\">\n              <h3>${t.language}</h3>\n              <ul>\n                ${Object.entries(t.languageList)\n                  .map(\n                    ([language, imageUrl]) => /*html*/ `\n                    <li>\n                      <img src=\"${imageUrl}\" alt=\"The logo icon for ${language}\" title=\"${language}\"> \n                      <p>${language}</p>\n                    </li>`\n                  )\n                  .join(\"\")}\n              </ul>\n            </div>\n  \n            <!-- Repeat for other categories like databases, tools, etc. -->\n            \n            <div class=\"skills__category\">\n            <h3>${t.webTechnologiesAndFrameworks}</h3>\n            <ul>\n              ${Object.entries(t.webTechnologiesAndFrameworksList)\n                .map(\n                  ([webTechnologiesAndFrameworks, imageUrl]) => /*html*/ `\n                  <li>\n                    <img src=\"${imageUrl}\" alt=\"The logo icon for ${webTechnologiesAndFrameworks}\" title=\"${webTechnologiesAndFrameworks}\"> \n                    <p>${webTechnologiesAndFrameworks}</p>\n                  </li> `\n                )\n                .join(\"\")}\n            </ul>\n          </div>\n  \n            <div class=\"skills__category\">\n            <h3>${t.databaseCloud}</h3>\n            <ul>\n              ${Object.entries(t.databaseCloudList)\n                .map(\n                  ([databaseCloud, imageUrl]) => /*html*/ `\n                  <li>\n                    <img src=\"${imageUrl}\" alt=\"The logo icon for ${databaseCloud}\" title=\"${databaseCloud}\">\n                    <p>${databaseCloud}</p>\n                  </li>`\n                )\n                .join(\"\")}\n            </ul>\n          </div>\n  \n          <div class=\"skills__category\">\n          <h3>${t.DevOpsAndTools}</h3>\n          <ul>\n            ${Object.entries(t.DevOpsAndToolsList)\n              .map(\n                ([DevOpsAndTools, imageUrl]) => /*html*/ `\n                <li>\n                  <img src=\"${imageUrl}\" alt=\"The logo icon for ${DevOpsAndTools}\" title=\"${DevOpsAndTools}\">\n                  <p>${DevOpsAndTools}</p> \n                </li>`\n              )\n              .join(\"\")}\n          </ul>\n        </div>\n          \n          </div>\n        </section>\n      `;\n  });\n  \n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/Skills.js?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/views/Contacts.js":
/*!***********************************!*\
  !*** ./src/app/views/Contacts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _blocks_about_About_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/about/About.js */ \"./src/app/blocks/about/About.js\");\n/* harmony import */ var _blocks_about_Skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/about/Skills.js */ \"./src/app/blocks/about/Skills.js\");\n/* harmony import */ var _blocks_about_Facts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blocks/about/Facts.js */ \"./src/app/blocks/about/Facts.js\");\n/* harmony import */ var styles_pages_about_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/pages/about.sass */ \"./src/assets/styles/pages/about.sass\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\n    return /*html*/ `\n        <h1> </h1> \n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Contacts.js?");

/***/ })

}]);