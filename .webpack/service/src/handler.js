/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.lambda = undefined;\nvar _ = __webpack_require__(/*! . */ \"./src/index.ts\");\n/**\n * My lambda function that logs the event and packageA\n * @returns void\n */\nconst lambda = exports.lambda = async (event, context) => {\n  console.log(':star:event:star:', event);\n  console.log(':star:packageA:star:', _.packageA);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXRzLXlhcm4tcG5wLy4vc3JjL2hhbmRsZXIudHM/YzQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWNrYWdlQSB9IGZyb20gJy4nXG5cbmltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUV2ZW50VjJXaXRoTGFtYmRhQXV0aG9yaXplciwgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnXG5cbi8qKlxuICogTXkgbGFtYmRhIGZ1bmN0aW9uIHRoYXQgbG9ncyB0aGUgZXZlbnQgYW5kIHBhY2thZ2VBXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBsYW1iZGEgPSBhc3luYyA8VD4oZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50VjJXaXRoTGFtYmRhQXV0aG9yaXplcjxUPiwgY29udGV4dD86IENvbnRleHQpID0+IHtcbiAgY29uc29sZS5sb2coJzpzdGFyOmV2ZW50OnN0YXI6JywgZXZlbnQpXG4gIGNvbnNvbGUubG9nKCc6c3RhcjpwYWNrYWdlQTpzdGFyOicsIHBhY2thZ2VBKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handler.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nconst packageA = exports.packageA = 'package-a';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtdHMteWFybi1wbnAvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGFja2FnZUEgPSAncGFja2FnZS1hJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handler.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;