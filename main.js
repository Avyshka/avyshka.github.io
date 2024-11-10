/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/styles/styles.css":
/*!********************************!*\
  !*** ./data/styles/styles.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./data/styles/styles.css?");

/***/ }),

/***/ "./src/data/ProjectsConstant.js":
/*!**************************************!*\
  !*** ./src/data/ProjectsConstant.js ***!
  \**************************************/
/*! exports provided: ProjectsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsConstants\", function() { return ProjectsConstants; });\nconst ProjectsConstants = {\r\n    projects: [\r\n        {\r\n            id: \"Corsairs\",\r\n            href: \"./projects/corsairs/\"\r\n        },\r\n        {\r\n            id: \"English Irregular Verbs\",\r\n            href: \"./projects/englishVerbs/\"\r\n        },\r\n        {\r\n            id: \"Poker quiz\",\r\n            href: \"./projects/pokerQuiz/\"\r\n        },\r\n        {\r\n            id: \"Spotify\",\r\n            href: \"./projects/spotify/\"\r\n        }\r\n    ]\r\n}\n\n//# sourceURL=webpack:///./src/data/ProjectsConstant.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/styles/styles.css */ \"./data/styles/styles.css\");\n/* harmony import */ var _data_styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_ProjectsConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/ProjectsConstant */ \"./src/data/ProjectsConstant.js\");\n\r\n\r\n\r\nconst projectsContainer = document.getElementById(\"projectsContainer\");\r\nconst popup = document.getElementById(\"popup\");\r\nconst gameScreen = document.getElementById(\"game-screen\");\r\n\r\nconsole.log(document.URL);\r\nlet links = \"\";\r\n_data_ProjectsConstant__WEBPACK_IMPORTED_MODULE_1__[\"ProjectsConstants\"].projects.forEach((project) => {\r\n    links += `<a href=\"${project.href}\" target=\"game-screen\">${project.id}</a>`;\r\n});\r\nprojectsContainer.innerHTML = links;\r\n\r\nlet href;\r\n\r\nconst a = document.querySelectorAll(\"a\");\r\na.forEach((a) => {\r\n    a.onclick = () => {\r\n        href = a.href;\r\n        showPopup();\r\n    }\r\n});\r\n\r\nconst closeBtn = document.getElementById(\"iframe-close\");\r\ncloseBtn.onclick = () => hidePopup();\r\n\r\nconst inTabBtn = document.getElementById(\"iframe-in-tab\");\r\ninTabBtn.onclick = () => {\r\n    hidePopup().then(() => window.open(href, \"_blank\"));\r\n}\r\nfunction showPopup(href) {\r\n    popup.style.position = \"fixed\";\r\n    popup.style.display = \"flex\";\r\n    gameScreen.style.display = \"block\";\r\n}\r\n\r\nfunction hidePopup() {\r\n    return new Promise(resolve => {\r\n        gameScreen.contentDocument.body.remove();\r\n        popup.style.position = \"relative\";\r\n        popup.style.display = \"none\";\r\n        gameScreen.style.display = \"none\";\r\n        setTimeout(() => resolve(), 100);\r\n    });\r\n}\r\n\r\nhidePopup();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });