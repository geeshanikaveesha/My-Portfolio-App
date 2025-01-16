/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send/route";
exports.ids = ["app/api/send/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Kavee_Gamage_my_portfolio_src_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/send/route.js */ \"(rsc)/./src/app/api/send/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send/route\",\n        pathname: \"/api/send\",\n        filename: \"route\",\n        bundlePath: \"app/api/send/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\api\\\\send\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Kavee_Gamage_my_portfolio_src_app_api_send_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNLYXZlZSUyMEdhbWFnZSU1Q215LXBvcnRmb2xpbyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDS2F2ZWUlMjBHYW1hZ2UlNUNteS1wb3J0Zm9saW8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ29CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxLYXZlZSBHYW1hZ2VcXFxcbXktcG9ydGZvbGlvXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNlbmRcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZW5kXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZW5kL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcS2F2ZWUgR2FtYWdlXFxcXG15LXBvcnRmb2xpb1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzZW5kXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/send/route.js":
/*!***********************************!*\
  !*** ./src/app/api/send/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n// import { EmailTemplate } from '../../../components/EmailTemplate';\n\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_2__.Resend(process.env.RESEND_API_KEY);\nconst fromEmail = process.env.FROM_EMAIL;\nasync function POST(req, res) {\n    const { body } = await req.json();\n    const { email, subject, message } = body;\n    console.log(body);\n    try {\n        const { data, error } = await resend.emails.send({\n            from: fromEmail,\n            to: [\n                \"geeshanikaveesha@gmail.com\",\n                email\n            ],\n            subject: 'Hello world',\n            react: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: subject\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Thank you for contacting us!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"New message submited\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\api\\\\send\\\\route.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        });\n        if (error) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(data);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEscUVBQXFFOztBQUMxQjtBQUNYO0FBR2hDLE1BQU1FLFNBQVMsSUFBSUQsMENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwRCxNQUFNQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7QUFFakMsZUFBZUMsS0FBS0MsR0FBRyxFQUFFQyxHQUFHO0lBQ2pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR0o7SUFDcENLLFFBQVFDLEdBQUcsQ0FBQ047SUFDWixJQUFJO1FBQ0YsTUFBTSxFQUFFTyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1qQixPQUFPa0IsTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDL0NDLE1BQU1oQjtZQUNOaUIsSUFBSTtnQkFBQztnQkFBNkJWO2FBQU07WUFDeENDLFNBQVM7WUFDVFUscUJBQ0U7O2tDQUNFLDhEQUFDQztrQ0FBSVg7Ozs7OztrQ0FDTCw4REFBQ1k7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUdYOzs7Ozs7OztRQUdWO1FBRUEsSUFBSUksT0FBTztZQUNULE9BQU9uQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFTztZQUFNLEdBQUc7Z0JBQUVRLFFBQVE7WUFBSTtRQUNwRDtRQUVBLE9BQU8zQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDTTtJQUMzQixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPbkIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTztRQUFNLEdBQUc7WUFBRVEsUUFBUTtRQUFJO0lBQ3BEO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2F2ZWUgR2FtYWdlXFxteS1wb3J0Zm9saW9cXHNyY1xcYXBwXFxhcGlcXHNlbmRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEVtYWlsVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0VtYWlsVGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XHJcblxyXG5cclxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSk7XHJcbmNvbnN0IGZyb21FbWFpbCA9IHByb2Nlc3MuZW52LkZST01fRU1BSUw7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgYm9keSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBjb25zdCB7IGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSBib2R5O1xyXG4gIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBmcm9tRW1haWwsXHJcbiAgICAgIHRvOiBbXCJnZWVzaGFuaWthdmVlc2hhQGdtYWlsLmNvbVwiLGVtYWlsXSxcclxuICAgICAgc3ViamVjdDogJ0hlbGxvIHdvcmxkJyxcclxuICAgICAgcmVhY3Q6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgxPntzdWJqZWN0fTwvaDE+XHJcbiAgICAgICAgICA8cD5UaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgdXMhPC9wPlxyXG4gICAgICAgICAgPHA+TmV3IG1lc3NhZ2Ugc3VibWl0ZWQ8L3A+XHJcbiAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvciB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3IgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlJlc2VuZCIsInJlc2VuZCIsInByb2Nlc3MiLCJlbnYiLCJSRVNFTkRfQVBJX0tFWSIsImZyb21FbWFpbCIsIkZST01fRU1BSUwiLCJQT1NUIiwicmVxIiwicmVzIiwiYm9keSIsImpzb24iLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImVtYWlscyIsInNlbmQiLCJmcm9tIiwidG8iLCJyZWFjdCIsImgxIiwicCIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/send/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/resend"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKavee%20Gamage%5Cmy-portfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();