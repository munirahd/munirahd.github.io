"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Home_js"],{

/***/ "./src/assets/styles/pages/home.sass":
/*!*******************************************!*\
  !*** ./src/assets/styles/pages/home.sass ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/home.sass?");

/***/ }),

/***/ "./src/app/blocks/home/About.js":
/*!**************************************!*\
  !*** ./src/app/blocks/home/About.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n        <section class=\"about\">\n            <div class=\"about__content\">\n                <h2 class=\"h2\">${t.title}</h2>\n                <div class=\"about__text\">\n                    ${t.description\n                      .map(\n                        (text) =>\n                          /*html*/ `<p class=\"about__description\">${text}</p>`\n                      )\n                      .join(\"\")}\n                </div>\n\n                <a href=\"/about-me\" class=\"button\">${t.button} →</a> \n            </div>\n            <div class= \"about__right\"\">\n          <img src=\"/images/about-me.png\" alt=\"\" class=\"about__image\">\n          <div class=\"about__des\">\n          Grace Hopper who invented the first compiler.\n          </div>\n          </div> \n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/About.js?");

/***/ }),

/***/ "./src/app/blocks/home/Contacts.js":
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Contacts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n/* harmony import */ var _components_MediaIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MediaIcon */ \"./src/app/components/MediaIcon.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    const mediaTexts = {\n        email: \"MunirahDu@gmail.com\",\n        phone: \"+966 54 5023 287\",\n    };\n    return /*html*/ `\n    <sections class=\"contacts\" id=\"contacts\">\n    <h2 class=\"h2\">${t.title}</h2>\n    <div class=\"contacts__content\">\n        <p class=\"contacts__description\">${t.text}</p>\n        <div class=\"contacts__media\">\n            <h3 class=\"contacts__title\">${t.media}</h3>\n            <div class=\"contacts__list\">\n                ${[\"email\", \"phone\"].map((name) => `\n                    <div class=\"contact-item\">\n                        ${(0,_components_MediaIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ name })} \n                        <span class=\"contact-text\">${mediaTexts[name]}</span>\n                    </div>\n                `).join(\"\")}\n            </div>\n        </div>\n    </div>\n</sections>\n\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Contacts.js?");

/***/ }),

/***/ "./src/app/blocks/home/Hero.js":
/*!*************************************!*\
  !*** ./src/app/blocks/home/Hero.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dots */ \"./src/app/components/Dots.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `\n        <section class=\"hero\">\n            <div class=\"hero__content\">\n                <h1 class=\"hero__title\">${t.title}</h1>\n                <div class=\"hero__description\">                    \n                ${t.description.map(\n                    (text) =>\n                        /*html*/ `<p class=\"hero__description\">${text}</p>`\n                ).join(\"\")}\n                </div>\n               <a class=\"button button__primary\" href=\"#contacts\">${t.button}</a> \n            </div>\n            <div class=\"hero__illustrations\">\n            <div class=\"hero__right\">\n               <!-- <img src=\"/images/logo-outline.svg\" alt=\"\" class=\"hero__logo\">-->\n              \n                <img src=\"/images/hero.png\" alt=\"Elias\" class=\"hero__image\">\n                <div class=\"hero__des\">\n                Ada Lovelace the world's first computer programmer\n                </div>\n                </div>\n                <div class=\"hero__status\">${t.status} <a href=\"\">Portfolio</a></div>\n               <!-- ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({})} -->\n            </div>\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Hero.js?");

/***/ }),

/***/ "./src/app/blocks/home/Projects.js":
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ProjectList */ \"./src/app/components/ProjectList.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n    return /*html*/ `\n        <section class=\"projects\">\n            <div class=\"projects__header\">\n                <h2 class=\"h2\">${t.title}</h2>\n                <a class=\"projects__link\" href=\"/projects\">${t.button} → </a>\n            </div>\n            ${(0,_components_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ limit: 3 }, t2)}\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Projects.js?");

/***/ }),

/***/ "./src/app/blocks/home/Quote.js":
/*!**************************************!*\
  !*** ./src/app/blocks/home/Quote.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/`\n        <figure class=\"quote\">\n            <blockquote class=\"quote__text\">${t.text}</blockquote>\n            <figcaption class=\"quote__author\">${t.author}</figcaption>\n        </figure>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Quote.js?");

/***/ }),

/***/ "./src/app/blocks/home/Skills.js":
/*!***************************************!*\
  !*** ./src/app/blocks/home/Skills.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n  return /*html*/ `\n      <section class=\"skills\">\n      <div class=\"skills__header\">\n        <h2 class=\"h2\"><span>${t.title}</span></h2>\n        </div>\n        <div class=\"skills__content\">\n          <div class=\"skills__category\">\n            <h3>${t.language}</h3>\n            <ul>\n              ${Object.entries(t.languageList)\n                .map(\n                  ([language, imageUrl]) => /*html*/ `\n                  <li>\n                    <img src=\"${imageUrl}\" alt=\"The logo icon for ${language}\" title=\"${language}\"> \n                    <p>${language}</p>\n                  </li>`\n                )\n                .join(\"\")}\n            </ul>\n          </div>\n\n          <!-- Repeat for other categories like databases, tools, etc. -->\n          \n          <div class=\"skills__category\">\n          <h3>${t.webTechnologiesAndFrameworks}</h3>\n          <ul>\n            ${Object.entries(t.webTechnologiesAndFrameworksList)\n              .map(\n                ([webTechnologiesAndFrameworks, imageUrl]) => /*html*/ `\n                <li>\n                  <img src=\"${imageUrl}\" alt=\"The logo icon for ${webTechnologiesAndFrameworks}\" title=\"${webTechnologiesAndFrameworks}\"> \n                  <p>${webTechnologiesAndFrameworks}</p>\n                </li> `\n              )\n              .join(\"\")}\n          </ul>\n        </div>\n\n          <div class=\"skills__category\">\n          <h3>${t.databaseCloud}</h3>\n          <ul>\n            ${Object.entries(t.databaseCloudList)\n              .map(\n                ([databaseCloud, imageUrl]) => /*html*/ `\n                <li>\n                  <img src=\"${imageUrl}\" alt=\"The logo icon for ${databaseCloud}\" title=\"${databaseCloud}\">\n                  <p>${databaseCloud}</p>\n                </li>`\n              )\n              .join(\"\")}\n          </ul>\n        </div>\n\n        <div class=\"skills__category\">\n        <h3>${t.DevOpsAndTools}</h3>\n        <ul>\n          ${Object.entries(t.DevOpsAndToolsList)\n            .map(\n              ([DevOpsAndTools, imageUrl]) => /*html*/ `\n              <li>\n                <img src=\"${imageUrl}\" alt=\"The logo icon for ${DevOpsAndTools}\" title=\"${DevOpsAndTools}\">\n                <p>${DevOpsAndTools}</p> \n              </li>`\n            )\n            .join(\"\")}\n        </ul>\n      </div>\n        \n        </div>\n      </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Skills.js?");

/***/ }),

/***/ "./src/app/blocks/home/experience.js":
/*!*******************************************!*\
  !*** ./src/app/blocks/home/experience.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n  return /*html*/ `\n        <section class=\"experience\">\n            <div class=\"experience__header\">\n                <h2 class=\"h2\">${t.title}</h2>\n            </div>\n            <div class=\"timeline\">\n                <div class=\"timeline__item\">\n                    <div class=\"timeline__content\">\n                        <h3>${t.experience_title}</h3>\n                        <span class=\"timeline__date\">${t.experience_date}</span>\n                        <ul>\n                        ${t.description\n                          .map(\n                            (text) =>\n                              /*html*/ `<li class=\"experience__description\">${text}</li>`\n                          )\n                          .join(\"\")}\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/experience.js?");

/***/ }),

/***/ "./src/app/components/Dots.js":
/*!************************************!*\
  !*** ./src/app/components/Dots.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst radius = 4;\nconst gap = 16;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ width = 5, height = 5 } = {}) => {\n    const svgWidth = (radius * 2 + gap) * width - gap\n    const svgHeight = (radius * 2 + gap) * height - gap\n\n    return /*html*/ `\n        <svg width=\"100%\" class=\"dots\" viewBox=\"0 0 ${svgWidth} ${svgHeight}\">\n            ${new Array(width)\n                .fill(new Array(height).fill(\"\"))\n                .map((arr, i) =>\n                    arr.map((_, j) => {\n                        const x = radius + i * (radius * 2 + gap);\n                        const y = radius + j * (radius * 2 + gap);\n\n                        return /*html*/ `<circle cx=\"${x}\" cy=\"${y}\" r=\"${radius}\" />`;\n                    }).join(\"\")\n                )\n                .join(\"\")}\n        </svg>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Dots.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n    function map(link) {\n        let href =\n        \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link]) + links[link];\n\n        if (link === \"figma\") href = `https://figma.com/community/file/${links[link]}`\n        if (link === \"github\" && links[link].startsWith(\"/\")) href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link]\n\n\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\n        const name = `${link[0].toUpperCase()}${link.slice(1)}`;\n\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\">${name} =></a>`;\n    }\n\n    return Object.keys(links).map(map).join(\"\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(\n        (project) => project.id === id\n    );\n\n    return /*html*/ `\n        <div class=\"project\">\n            ${\n                hasImage\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\n                    : \"\"\n            }\n            \n            <ul class=\"project__techs\">\n                ${projectTech\n                    .map(\n                        (tech) =>\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\n                    )\n                    .join(\"\")}\n            </ul> \n\n            <div class=\"project__content\">\n                <div class=\"project__name\">${t[id].name}</div>\n                <div class=\"project__description\">${t[id].description}</div>\n                <div class=\"project__links\">${mapLinks(links)}</div>\n            </div>\n        </div> \n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n    {\n        id: \"deplos\",\n        links: {\n            figma: \"1198393124994627983\",\n            live: \"deplos.com\"\n        },\n        techs: [\"pug\", \"stylus\", \"node\"],\n        hasImage: true,\n    },\n    {\n        id: \"feedrum\",\n        links: {\n            github: \"Feedrum-Project/feedrum-next\",\n            live: \"feedrum.com\"\n        },\n        techs: [\"node\", \"next\", \"react\", \"zod\"],\n        hasImage: true,\n    },\n    {\n        id: \"chertnodes\",\n        links: {\n            figma: \"1149829028455305659\",\n        },\n        techs: [\"python\", \"flask\", \"scss\"],\n        hasImage: true,\n    },\n    {\n        id: \"protectx\",\n        techs: [\"react\", \"node\", \"discordJs\"],\n        links: {\n            figma: \"1168662007492356291\",\n        },\n        hasImage: true,\n    },\n    {\n        id: \"khanswers\",\n        techs: [\"express\", \"node\", \"ejs\"],\n        links: {\n            live: \"khanswers.vercel.app\",\n            github: \"/kahoot-answers\",\n        },\n        hasImage: true,\n    },\n    {\n        id: \"kotikbot\",\n        techs: [\"html\", \"css\", \"js\"],\n        links: {\n            live: \"kotikbot.github.io\",\n            github: \"kotikbot/kotikbot.github.io\",\n        },\n        hasImage: true,\n    },\n    {\n        id: \"portfolio\",\n        techs: [\"js\", \"sass\", \"webpack\"],\n        links: {\n            figma: \"1164933568884615740\",\n            github: \"/portfolio\",\n        },\n        hasImage: true,\n    },\n\n    {\n        id: \"discordbot\",\n        techs: [\"ts\", \"discordJs\", \"node\"],\n        links: {\n            github: \"/bot-template\",\n        },\n        isSmall: true,\n    },\n    {\n        id: \"chesspro\",\n        techs: [\"figma\"],\n        links: {\n            figma: \"1148344443083977909\",\n        },\n        isSmall: true,\n    },\n    {\n      \n    },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    ts: \"TypeScript\",\n    js: \"JavaScript\",\n    python: \"Python\",\n    sqlite: \"SQLite\",\n    mongo: \"MongoDB\",\n    postgreSql: \"PostgreSQL\",\n    html: \"HTML\",\n    css: \"CSS\",\n    sass: \"SASS\",\n    scss: \"SCSS\",\n    less: \"Less\",\n    stylus: \"Stylus\",\n    ejs: \"EJS\",\n    jinja: \"Jinja2\",\n    node: \"Node.js\",\n    vscode: \"VSCode\",\n    nvim: \"NeoVim\",\n    figma: \"Figma\",\n    git: \"Git & GitHub\",\n    xfce: \"XFCE\",\n    react: \"React\",\n    discordJs: \"Discord.js\",\n    flask: \"Flask\",\n    quart: \"Quart\",\n    express: \"Express\",\n    rtk: \"RTK\",\n    zod: \"Zod\",\n    webpack: \"WebPack\",\n    pug: \"Pug\",\n    gulp: \"Gulp\",\n    next: \"Next\",\n    deno: \"Deno\",\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Home.js":
/*!*******************************!*\
  !*** ./src/app/views/Home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/home/Hero.js */ \"./src/app/blocks/home/Hero.js\");\n/* harmony import */ var _blocks_home_Quote_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/home/Quote.js */ \"./src/app/blocks/home/Quote.js\");\n/* harmony import */ var _blocks_home_Projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/home/Projects.js */ \"./src/app/blocks/home/Projects.js\");\n/* harmony import */ var _blocks_home_Skills_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blocks/home/Skills.js */ \"./src/app/blocks/home/Skills.js\");\n/* harmony import */ var _blocks_home_About_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/blocks/home/About.js */ \"./src/app/blocks/home/About.js\");\n/* harmony import */ var _blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/blocks/home/Contacts.js */ \"./src/app/blocks/home/Contacts.js\");\n/* harmony import */ var _blocks_home_experience_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/blocks/home/experience.js */ \"./src/app/blocks/home/experience.js\");\n/* harmony import */ var styles_pages_home_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/pages/home.sass */ \"./src/assets/styles/pages/home.sass\");\n\n\n\n\n\n\n\n\n    //${Projects(t.projects, locale.projects)}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\n    return /*html*/`\n        ${(0,_blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t.hero)}\n        ${(0,_blocks_home_Quote_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t.quote)}\n        ${(0,_blocks_home_experience_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(t.experience)}\n    \n        ${(0,_blocks_home_Skills_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t.skills, locale.skills)}\n        ${(0,_blocks_home_About_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(t.about)}\n        ${(0,_blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(t.contacts)}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Home.js?");

/***/ })

}]);