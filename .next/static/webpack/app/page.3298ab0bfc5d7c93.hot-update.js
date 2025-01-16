"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/EmailSection.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/EmailSection.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/github-icon.svg */ \"(app-pages-browser)/./public/github-icon.svg\");\n/* harmony import */ var _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/linkedin-icon.svg */ \"(app-pages-browser)/./public/linkedin-icon.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EmailSection = ()=>{\n    _s();\n    const [emailSubmitted, setEmailSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = {\n            email: e.target.email.value,\n            subject: e.target.subject.value,\n            message: e.target.message.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const endpoint = \"/api/send\";\n        const options = {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSONdata\n        };\n        const response = await fetch(endpoint, options);\n        const resData = await response.json();\n        if (response.status === 200) {\n            console.log('Message send.');\n            setEmailSubmitted(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]  from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translte-y-1/2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-bold text-white my-2\",\n                        children: \"Let's Connect\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-4 max-w-md\",\n                        children: [\n                            \" \",\n                            \"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get\\xa0back\\xa0to\\xa0you!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://github.com/geeshanikaveesha\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    src: _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"Github Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://www.linkedin.com/in/kaveesha-gamage/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    src: _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"Linkedin Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 43,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"email\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"jacob@google.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"subject\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"message\",\n                                    type: \"text\",\n                                    id: \"subject\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"just say hi....\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    id: \"message\",\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Let's talk about...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full\",\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 19\n                        }, undefined),\n                        emailSubmitted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-green-500 text-sm mt-2\",\n                            children: \"Email sent successfully\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 121,\n                            columnNumber: 27\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 68,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, undefined);\n};\n_s(EmailSection, \"IL/1oxkK5/Jlk2NonsoBRMUDKwE=\");\n_c = EmailSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSection);\nvar _c;\n$RefreshReg$(_c, \"EmailSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FbWFpbFNlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDcUM7QUFDb0I7QUFDSTtBQUNoQztBQUNFO0FBSy9CLE1BQU1NLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTVEsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxPQUFPO1lBQ1RDLE9BQU9ILEVBQUVJLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxLQUFLO1lBQzNCQyxTQUFTTixFQUFFSSxNQUFNLENBQUNFLE9BQU8sQ0FBQ0QsS0FBSztZQUMvQkUsU0FBU1AsRUFBRUksTUFBTSxDQUFDRyxPQUFPLENBQUNGLEtBQUs7UUFDbkM7UUFDQSxNQUFNRyxXQUFXQyxLQUFLQyxTQUFTLENBQUNSO1FBQ2hDLE1BQU1TLFdBQVc7UUFFakIsTUFBTUMsVUFBVTtZQUNaQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1QO1FBQ1Y7UUFFQSxNQUFNUSxXQUFXLE1BQU1DLE1BQU1OLFVBQVVDO1FBQ3ZDLE1BQU1NLFVBQVUsTUFBTUYsU0FBU0csSUFBSTtRQUVuQyxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztZQUN6QkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1p4QixrQkFBa0I7UUFDdEI7SUFDSjtJQUNGLHFCQUNJLDhEQUFDeUI7UUFBUUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFVOzs7Ozs7MEJBRWYsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQW9DOzs7Ozs7a0NBQ2xELDhEQUFDRzt3QkFBRUgsV0FBVTs7NEJBQ1I7NEJBQUk7Ozs7Ozs7a0NBS2YsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQzlCLGlEQUFJQTtnQ0FDSGtDLE1BQUs7Z0NBQ0x4QixRQUFPO2dDQUNQeUIsS0FBSTswQ0FFSiw0RUFBQ2xDLGtEQUFLQTtvQ0FBQ21DLEtBQUt0QywrREFBVUE7b0NBQUV1QyxLQUFJOzs7Ozs7Ozs7OzswQ0FFOUIsOERBQUNyQyxpREFBSUE7Z0NBQ0hrQyxNQUFLO2dDQUNMeEIsUUFBTztnQ0FDUHlCLEtBQUk7MENBRUosNEVBQUNsQyxrREFBS0E7b0NBQUNtQyxLQUFLckMsaUVBQVlBO29DQUFFc0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWhDLDhEQUFDTjswQkFDRyw0RUFBQ087b0JBQUtSLFdBQVU7b0JBQWdCUyxVQUFVbEM7O3NDQUN0Qyw4REFBQzBCOzRCQUFJRCxXQUFVOzs4Q0FDZiw4REFBQ1U7b0NBQ0dDLFNBQVE7b0NBQ1JYLFdBQVU7OENBQTRDOzs7Ozs7OENBR3RELDhEQUFDWTtvQ0FDREMsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsUUFBUTtvQ0FDUmhCLFdBQVU7b0NBQ1ZpQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDaEI7NEJBQUlELFdBQVU7OzhDQUNmLDhEQUFDVTtvQ0FDR0MsU0FBUTtvQ0FDUlgsV0FBVTs4Q0FBNEM7Ozs7Ozs4Q0FHdEQsOERBQUNZO29DQUNHQyxNQUFLO29DQUNUQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxRQUFRO29DQUNSaEIsV0FBVTtvQ0FDTmlCLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FJcEIsOERBQUNoQjs0QkFBSUQsV0FBVTs7OENBQ2YsOERBQUNVO29DQUNHQyxTQUFRO29DQUNSWCxXQUFVOzhDQUE0Qzs7Ozs7OzhDQUcxRCw4REFBQ2tCO29DQUNHTCxNQUFLO29DQUNMRSxJQUFHO29DQUNIZixXQUFVO29DQUNWaUIsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0U7NEJBQ0dMLE1BQUs7NEJBQ0xkLFdBQVU7c0NBQTJGOzs7Ozs7d0JBSXJHM0IsZ0NBQ0ksOERBQUM4Qjs0QkFBRUgsV0FBVTtzQ0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXJFO0dBeEhNNUI7S0FBQUE7QUEwSE4saUVBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2F2ZWUgR2FtYWdlXFxteS1wb3J0Zm9saW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxFbWFpbFNlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvZ2l0aHViLWljb24uc3ZnXCI7XHJcbmltcG9ydCBMaW5rZWRpbkljb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9saW5rZWRpbi1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBFbWFpbFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWxTdWJtaXR0ZWQsIHNldEVtYWlsU3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlLnRhcmdldC5lbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgc3ViamVjdDogZS50YXJnZXQuc3ViamVjdC52YWx1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogZS50YXJnZXQubWVzc2FnZS52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgSlNPTmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiL2FwaS9zZW5kXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OZGF0YSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIHNlbmQuJyk7XHJcbiAgICAgICAgICAgIHNldEVtYWlsU3VibWl0dGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdncmlkIG1kOmdyaWQtY29scy0yIG15LTEyIG1kOm15LTEyIHB5LTI0IGdhcC00IHJlbGF0aXZlJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1bcmFkaWFsLWdyYWRpZW50KGVsbGlwc2VfYXRfY2VudGVyLHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSldICBmcm9tLXByaW1hcnktOTAwIHRvLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBoLTgwIHctODAgei0wIGJsdXItbGcgYWJzb2x1dGUgdG9wLTMvNCAtbGVmdC00IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2x0ZS15LTEvMicgPjwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nei0xMCc+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBteS0yJz5MZXQncyBDb25uZWN0PC9oNT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtWyNBREI3QkVdIG1iLTQgbWF4LXctbWQnPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIEknbSBjdXJyZW50bHkgbG9va2luZyBmb3IgbmV3IG9wcG9ydHVuaXRpZXMsIG15IGluYm94IGlzIGFsd2F5cyBvcGVuLlxyXG4gICAgICAgICAgICAgICAgICBXaGV0aGVyIHlvdSBoYXZlIGEgcXVlc3Rpb24gb3IganVzdCB3YW50IHRvIHNheSBoaSwgSSdsbCB0cnkgbXkgYmVzdCB0byBnZXTCoGJhY2vCoHRvwqB5b3UhXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICB7LyogVXBkYXRlZCBzb2NpYWwgaWNvbnMgc2VjdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBmbGV4IGZsZXgtcm93IGdhcC0yXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dlZXNoYW5pa2F2ZWVzaGFcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17R2l0aHViSWNvbn0gYWx0PVwiR2l0aHViIEljb25cIiAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9rYXZlZXNoYS1nYW1hZ2UvXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xpbmtlZGluSWNvbn0gYWx0PVwiTGlua2VkaW4gSWNvblwiIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBZb3VyIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctWyMxODE5MUVdIGJvcmRlciBib3JkZXItWyMzMzM1M0ZdIHBsYWNlaG9sZGVyLVsjOUNBMkE5XSB0ZXh0LWdyYXktMTAwIHRleHQtc20gcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImphY29iQGdvb2dsZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdzdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3ViamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctWyMxODE5MUVdIGJvcmRlciBib3JkZXItWyMzMzM1M0ZdIHBsYWNlaG9sZGVyLVsjOUNBMkE5XSB0ZXh0LWdyYXktMTAwIHRleHQtc20gcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqdXN0IHNheSBoaS4uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdtZXNzYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J21lc3NhZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41J1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZXQncyB0YWxrIGFib3V0Li4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXByaW1hcnktNTAwIGhvdmVyOmJnLXByaW1hcnktNjAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcHktMi41IHB4LTUgcm91bmRlZC1sZyB3LWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VuZCBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbFN1Ym1pdHRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTUwMCB0ZXh0LXNtIG10LTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2VjdGlvbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR2l0aHViSWNvbiIsIkxpbmtlZGluSWNvbiIsIkxpbmsiLCJJbWFnZSIsIkVtYWlsU2VjdGlvbiIsImVtYWlsU3VibWl0dGVkIiwic2V0RW1haWxTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1YmplY3QiLCJtZXNzYWdlIiwiSlNPTmRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kcG9pbnQiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXNwb25zZSIsImZldGNoIiwicmVzRGF0YSIsImpzb24iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImg1IiwicCIsImhyZWYiLCJyZWwiLCJzcmMiLCJhbHQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/EmailSection.jsx\n"));

/***/ })

});