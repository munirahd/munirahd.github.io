"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/assets/styles/pages/projects.sass":
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/projects.sass?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n    function map(link) {\n        let href =\n        \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link]) + links[link];\n\n        if (link === \"github\" && links[link].startsWith(\"/\")) href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link]\n\n\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\n        const name = `${link[0].toUpperCase()}${link.slice(1)}`;\n\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\">${name} →</a>`;\n    }\n\n    return Object.keys(links).map(map).join(\"\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(\n        (project) => project.id === id\n    );\n\n    return /*html*/ `\n        <div class=\"project\">\n            ${\n                hasImage\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\n                    : \"\"\n            }\n            \n            <ul class=\"project__techs\">\n                ${projectTech\n                    .map(\n                        (tech) =>\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\n                    )\n                    .join(\"\")}\n            </ul> \n\n            <div class=\"project__content\">\n                <div class=\"project__name\">${t[id].name}</div>\n                <div class=\"project__duration\">${t[id].duration}</div>\n                <div class=\"project__description\">${t[id].description}</div>\n                <div class=\"project__links\">${mapLinks(links)}</div>\n            </div>\n        </div> \n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\n    return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\n            <div class=\"project-list\">\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                    .filter(filter)\n                    .slice(0, limit)\n                    .sort((a, b) => a.hasImage - b.hasImage)\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                    .join(\"\")}\n            </div>\n        ${title ? \"</div>\" : \"\"}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n  {\n    id: \"muhtm\",\n    links: {\n      demo: \"//drive.google.com/file/d/1khTnF-KrUbufQLmddxHBo-fuH1LD5-hC/view?usp=sharing\",\n      figma: \"//www.figma.com/file/yzmSNWt119Psnfm144O1R5/Muhtm?type=design&node-id=0%3A1&mode=design&t=S64qnTMcXjXsobxH-1\",\n    },\n    techs: [\"react\", \"figma\", \"python\", \"django\", \"ml\", \"postgreSql\"],\n    hasImage: true,\n  },\n  {\n    id: \"BabyPanda\",\n    links: {\n      github: \"/BabyPanda\",\n      demo: \"//drive.google.com/file/d/1wCVxoCIBMHFi08XTZ6GWeJWtAB9QCfxl/view?usp=sharing\",\n    },\n    techs: [\"java\", \"javafx\", \"hibernate\", \"mysql\"],\n    hasImage: true,\n  },\n  {\n    id: \"DevBuddy\",\n    links: {\n      github: \"/DevBuddy\",\n      demo: \"//drive.google.com/file/d/1NxauMRM1PINQeWwsZ73CmezD4O1Dfstw/view?usp=sharing.com\",\n    },\n    techs: [\"js\",\"html\", \"css\"],\n    hasImage: true,\n  },\n  {\n    id: \"WebProjects\",\n    techs: [\"html\", \"css\"],\n    links: {\n      github: \"/WebProjects\",\n    },\n    hasImage: true,\n  },\n  {\n    id: \"portfolio\",\n    techs: [\"js\", \"sass\", \"webpack\"],\n    links: {\n      github: \"/portfolio\",\n    },\n    hasImage: true,\n  },\n  {\n    id: \"oldPortfolio\",\n    techs: [\"html\", \"css\"],\n    links: {\n      github: \"/oldPortfolio\",\n      demo: \"//drive.google.com/file/d/1-m30EUPwUg_rys1t5FaOMYdf78a7xN7z/view?usp=sharing\",\n    },\n    hasImage: true,\n  },\n  {\n    id: \"AREEQ\",\n    techs: [\"figma\"],\n    links: {\n      figma:\n        \"//www.figma.com/file/tReSwaRIz56MmFY1Y0ZoGo/UI-project-Areeq?type=design&node-id=0%3A1&mode=design&t=r1nsWIjwkTJieFq2-1\",\n      report:\n        \"//drive.google.com/file/d/1M38yCw9ICBa61YSxA6zrwfdKByFmfXqV/view?usp=sharing\",\n    },\n    hasImage: true,\n  },\n  {\n    id: \"Hate-Speech-Detector\",\n    techs: [\"python\",\"ml\"],\n    links: {\n      github: \"/Hate-Speech-Detector\",\n    },\n    isSmall: true,\n  },\n  {\n    id: \"Hospital-Administration\",\n    techs: [\"java\"],\n    links: {\n      github: \"/Hospital-Administration\",\n    },\n    isSmall: true,\n  },\n  {\n    id: \"Useful-Bash-Scripts\",\n    techs: [\"shell\"],\n    links: {\n      github: \"/Useful-Bash-Scripts\",\n    },\n    isSmall: true,\n  },\n  {\n    id: \"SP500-Equal-Shares\",\n    techs: [\"python\", \"pandas\", \"numpy\", \"xlsxwriter\"],\n    links: {\n      github: \"/SP500-Equal-Shares\",\n    },\n    isSmall: true,\n  },\n  {\n    id: \"The-Data-Sorter\",\n    techs: [\"python\"],\n    links: {\n      github: \"/The-Data-Sorter\",\n    },\n    isSmall: true,\n  },\n  {\n    id: \"Data-Structure-Project\",\n    techs: [\"java\"],\n    links: {\n      github: \"/Data-Structure-Project\",\n    },\n    isSmall: true,\n  },\n  {\n    id: \"DB-Coffee-Store\",\n    techs: [\"sql\", \"mysql\"],\n    links: {\n      github: \"/DB-Coffee-Store\",\n    },\n    isSmall: true,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  ts: \"TypeScript\",\n  js: \"JavaScript\",\n  python: \"Python\",\n  sqlite: \"SQLite\",\n  mongo: \"MongoDB\",\n  postgreSql: \"PostgreSQL\",\n  html: \"HTML\",\n  css: \"CSS\",\n  sass: \"SASS\",\n  scss: \"SCSS\",\n  less: \"Less\",\n  stylus: \"Stylus\",\n  ejs: \"EJS\",\n  jinja: \"Jinja2\",\n  node: \"Node.js\",\n  vscode: \"VSCode\",\n  nvim: \"NeoVim\",\n  figma: \"Figma\",\n  git: \"Git & GitHub\",\n  xfce: \"XFCE\",\n  react: \"React\",\n  discordJs: \"Discord.js\",\n  flask: \"Flask\",\n  quart: \"Quart\",\n  express: \"Express\",\n  rtk: \"RTK\",\n  zod: \"Zod\",\n  webpack: \"WebPack\",\n  pug: \"Pug\",\n  gulp: \"Gulp\",\n  next: \"Next\",\n  deno: \"Deno\",\n  java: \"Java\",\n  sql: \"SQL\",\n  mysql: \"MySQL\",\n  javafx: \"JavaFX\",\n  hibernate: \"Hibernate ORM\",\n  numpy: \"NumPy\",\n  pandas: \"Pandas\",\n  xlsxwriter: \"XlsxWriter\",\n  nltk: \"NLTK\",\n  shell: \"Shell\",\n  django: \"Django\",\n  ml:\"ML-Libraries\"\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Projects.js":
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n  return /*html*/ `\n\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n          { title: t.decent, filter: (p) => !p.isSmall },\n          t2.projects\n        )}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n          { title: t.small, filter: (p) => p.isSmall && !p.isInProgress },\n          t2.projects\n        )}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Projects.js?");

/***/ })

}]);