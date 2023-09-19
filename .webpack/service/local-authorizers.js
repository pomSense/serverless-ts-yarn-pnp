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

/***/ "./local-authorizers.js":
/*!******************************!*\
  !*** ./local-authorizers.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\n/**\n * This method is used only in sls offline to call the remote lambda authorizer\n * {@link https://www.serverless.com/plugins/serverless-offline-local-authorizers-plugin}\n * @param {*} event {@link APIGatewayRequestAuthorizerEvent}\n * @param {*} context {@link Context}\n * @returns\n */\nconst localAuthProxyFn = async event => {\n  // Use this until your function is deployed. Once it is, set to false\n  process.env.IS_TEST = true;\n  if (process.env.IS_TEST) {\n    console.log('🔒 TEST Authorizer enabled 🔒');\n    return {\n      principalId: 'user|a1b2c3d4',\n      policyDocument: {\n        Version: '2012-10-17',\n        Statement: [{\n          Action: 'execute-api:Invoke',\n          Effect: 'Allow',\n          Resource: event.methodArn\n        }]\n      },\n      context: {\n        scope: 'user',\n        userId: 'a1b2c3d4'\n      }\n    };\n  }\n  const lambda = new AWS.Lambda();\n  const result = await lambda.invoke({\n    FunctionName: process.env.AUTHORIZER_NAME,\n    InvocationType: 'RequestResponse',\n    Payload: JSON.stringify(event)\n  }).promise();\n  if (result.StatusCode === 200) {\n    return JSON.parse(result.Payload);\n  }\n  throw Error('Authorizer error');\n};\nmodule.exports = {\n  localAuthProxyFn\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sb2NhbC1hdXRob3JpemVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtdHMteWFybi1wbnAvLi9sb2NhbC1hdXRob3JpemVycy5qcz82ZGIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFXUyA9IHJlcXVpcmUoJ2F3cy1zZGsnKVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgb25seSBpbiBzbHMgb2ZmbGluZSB0byBjYWxsIHRoZSByZW1vdGUgbGFtYmRhIGF1dGhvcml6ZXJcbiAqIHtAbGluayBodHRwczovL3d3dy5zZXJ2ZXJsZXNzLmNvbS9wbHVnaW5zL3NlcnZlcmxlc3Mtb2ZmbGluZS1sb2NhbC1hdXRob3JpemVycy1wbHVnaW59XG4gKiBAcGFyYW0geyp9IGV2ZW50IHtAbGluayBBUElHYXRld2F5UmVxdWVzdEF1dGhvcml6ZXJFdmVudH1cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCB7QGxpbmsgQ29udGV4dH1cbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGxvY2FsQXV0aFByb3h5Rm4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgLy8gVXNlIHRoaXMgdW50aWwgeW91ciBmdW5jdGlvbiBpcyBkZXBsb3llZC4gT25jZSBpdCBpcywgc2V0IHRvIGZhbHNlXG4gIHByb2Nlc3MuZW52LklTX1RFU1QgPSB0cnVlXG4gIGlmIChwcm9jZXNzLmVudi5JU19URVNUKSB7XG4gICAgY29uc29sZS5sb2coJ/CflJIgVEVTVCBBdXRob3JpemVyIGVuYWJsZWQg8J+UkicpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByaW5jaXBhbElkOiAndXNlcnxhMWIyYzNkNCcsXG4gICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICBWZXJzaW9uOiAnMjAxMi0xMC0xNycsXG4gICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEFjdGlvbjogJ2V4ZWN1dGUtYXBpOkludm9rZScsXG4gICAgICAgICAgICBFZmZlY3Q6ICdBbGxvdycsXG4gICAgICAgICAgICBSZXNvdXJjZTogZXZlbnQubWV0aG9kQXJuXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY29udGV4dDoge1xuICAgICAgICBzY29wZTogJ3VzZXInLFxuICAgICAgICB1c2VySWQ6ICdhMWIyYzNkNCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgbGFtYmRhID0gbmV3IEFXUy5MYW1iZGEoKVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYW1iZGFcbiAgICAuaW52b2tlKHtcbiAgICAgIEZ1bmN0aW9uTmFtZTogcHJvY2Vzcy5lbnYuQVVUSE9SSVpFUl9OQU1FLFxuICAgICAgSW52b2NhdGlvblR5cGU6ICdSZXF1ZXN0UmVzcG9uc2UnLFxuICAgICAgUGF5bG9hZDogSlNPTi5zdHJpbmdpZnkoZXZlbnQpXG4gICAgfSlcbiAgICAucHJvbWlzZSgpXG5cbiAgaWYgKHJlc3VsdC5TdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXN1bHQuUGF5bG9hZClcbiAgfVxuXG4gIHRocm93IEVycm9yKCdBdXRob3JpemVyIGVycm9yJylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGxvY2FsQXV0aFByb3h5Rm4gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./local-authorizers.js\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./local-authorizers.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;