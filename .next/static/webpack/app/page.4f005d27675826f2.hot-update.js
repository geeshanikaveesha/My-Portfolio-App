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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/github-icon.svg */ \"(app-pages-browser)/./public/github-icon.svg\");\n/* harmony import */ var _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/linkedin-icon.svg */ \"(app-pages-browser)/./public/linkedin-icon.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EmailSection = ()=>{\n    _s();\n    const [emailSubmitted, setEmailSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = {\n            email: e.target.email.value,\n            subject: e.target.subject.value,\n            message: e.target.message.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const endpoint = \"/api/send\";\n        const options = {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSONdata\n        };\n        const response = await fetch(endpoint, options);\n        const resData = await response.json();\n        console.log(resData);\n        if (response.status === 200) {\n            console.log('Message send.');\n            setEmailSubmitted(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]  from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translte-y-1/2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-bold text-white my-2\",\n                        children: \"Let's Connect\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-4 max-w-md\",\n                        children: [\n                            \" \",\n                            \"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get\\xa0back\\xa0to\\xa0you!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://github.com/geeshanikaveesha\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    src: _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"Github Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://www.linkedin.com/in/kaveesha-gamage/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    src: _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"Linkedin Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"email\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"jacob@google.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"subject\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"message\",\n                                    type: \"text\",\n                                    id: \"subject\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"just say hi....\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    id: \"message\",\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Let's talk about...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full\",\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 19\n                        }, undefined),\n                        emailSubmitted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-green-500 text-sm mt-2\",\n                            children: \"Email sent successfully\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 27\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 69,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, undefined);\n};\n_s(EmailSection, \"IL/1oxkK5/Jlk2NonsoBRMUDKwE=\");\n_c = EmailSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSection);\nvar _c;\n$RefreshReg$(_c, \"EmailSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FbWFpbFNlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDcUM7QUFDb0I7QUFDSTtBQUNoQztBQUNFO0FBSy9CLE1BQU1NLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTVEsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxPQUFPO1lBQ1RDLE9BQU9ILEVBQUVJLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxLQUFLO1lBQzNCQyxTQUFTTixFQUFFSSxNQUFNLENBQUNFLE9BQU8sQ0FBQ0QsS0FBSztZQUMvQkUsU0FBU1AsRUFBRUksTUFBTSxDQUFDRyxPQUFPLENBQUNGLEtBQUs7UUFDbkM7UUFDQSxNQUFNRyxXQUFXQyxLQUFLQyxTQUFTLENBQUNSO1FBQ2hDLE1BQU1TLFdBQVc7UUFFakIsTUFBTUMsVUFBVTtZQUNaQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1QO1FBQ1Y7UUFFQSxNQUFNUSxXQUFXLE1BQU1DLE1BQU1OLFVBQVVDO1FBQ3ZDLE1BQU1NLFVBQVUsTUFBTUYsU0FBU0csSUFBSTtRQUNuQ0MsUUFBUUMsR0FBRyxDQUFDSDtRQUVaLElBQUlGLFNBQVNNLE1BQU0sS0FBSyxLQUFLO1lBQ3pCRixRQUFRQyxHQUFHLENBQUM7WUFDWnZCLGtCQUFrQjtRQUN0QjtJQUNKO0lBQ0YscUJBQ0ksOERBQUN5QjtRQUFRQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7Ozs7OzswQkFFZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBb0M7Ozs7OztrQ0FDbEQsOERBQUNHO3dCQUFFSCxXQUFVOzs0QkFDUjs0QkFBSTs7Ozs7OztrQ0FLZiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDOUIsaURBQUlBO2dDQUNIa0MsTUFBSztnQ0FDTHhCLFFBQU87Z0NBQ1B5QixLQUFJOzBDQUVKLDRFQUFDbEMsa0RBQUtBO29DQUFDbUMsS0FBS3RDLCtEQUFVQTtvQ0FBRXVDLEtBQUk7Ozs7Ozs7Ozs7OzBDQUU5Qiw4REFBQ3JDLGlEQUFJQTtnQ0FDSGtDLE1BQUs7Z0NBQ0x4QixRQUFPO2dDQUNQeUIsS0FBSTswQ0FFSiw0RUFBQ2xDLGtEQUFLQTtvQ0FBQ21DLEtBQUtyQyxpRUFBWUE7b0NBQUVzQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJaEMsOERBQUNOOzBCQUNHLDRFQUFDTztvQkFBS1IsV0FBVTtvQkFBZ0JTLFVBQVVsQzs7c0NBQ3RDLDhEQUFDMEI7NEJBQUlELFdBQVU7OzhDQUNmLDhEQUFDVTtvQ0FDR0MsU0FBUTtvQ0FDUlgsV0FBVTs4Q0FBNEM7Ozs7Ozs4Q0FHdEQsOERBQUNZO29DQUNEQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxRQUFRO29DQUNSaEIsV0FBVTtvQ0FDVmlCLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNoQjs0QkFBSUQsV0FBVTs7OENBQ2YsOERBQUNVO29DQUNHQyxTQUFRO29DQUNSWCxXQUFVOzhDQUE0Qzs7Ozs7OzhDQUd0RCw4REFBQ1k7b0NBQ0RDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLFFBQVE7b0NBQ1JoQixXQUFVO29DQUNOaUIsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUlwQiw4REFBQ2hCOzRCQUFJRCxXQUFVOzs4Q0FDZiw4REFBQ1U7b0NBQ0dDLFNBQVE7b0NBQ1JYLFdBQVU7OENBQTRDOzs7Ozs7OENBRzFELDhEQUFDa0I7b0NBQ0dMLE1BQUs7b0NBQ0xFLElBQUc7b0NBQ0hmLFdBQVU7b0NBQ1ZpQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDRTs0QkFDR0wsTUFBSzs0QkFDTGQsV0FBVTtzQ0FBMkY7Ozs7Ozt3QkFJckczQixnQ0FDSSw4REFBQzhCOzRCQUFFSCxXQUFVO3NDQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVckU7R0F6SE01QjtLQUFBQTtBQTJITixpRUFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLYXZlZSBHYW1hZ2VcXG15LXBvcnRmb2xpb1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXEVtYWlsU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9naXRodWItaWNvbi5zdmdcIjtcclxuaW1wb3J0IExpbmtlZGluSWNvbiBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2xpbmtlZGluLWljb24uc3ZnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEVtYWlsU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbFN1Ym1pdHRlZCwgc2V0RW1haWxTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICBzdWJqZWN0OiBlLnRhcmdldC5zdWJqZWN0LnZhbHVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBlLnRhcmdldC5tZXNzYWdlLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBKU09OZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gXCIvYXBpL3NlbmRcIjtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT05kYXRhLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2Ugc2VuZC4nKTtcclxuICAgICAgICAgICAgc2V0RW1haWxTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2dyaWQgbWQ6Z3JpZC1jb2xzLTIgbXktMTIgbWQ6bXktMTIgcHktMjQgZ2FwLTQgcmVsYXRpdmUnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLVtyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZV9hdF9jZW50ZXIsdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKV0gIGZyb20tcHJpbWFyeS05MDAgdG8tdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGgtODAgdy04MCB6LTAgYmx1ci1sZyBhYnNvbHV0ZSB0b3AtMy80IC1sZWZ0LTQgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbHRlLXktMS8yJyA+PC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd6LTEwJz5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG15LTInPkxldCdzIENvbm5lY3Q8L2g1PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1bI0FEQjdCRV0gbWItNCBtYXgtdy1tZCc+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgSSdtIGN1cnJlbnRseSBsb29raW5nIGZvciBuZXcgb3Bwb3J0dW5pdGllcywgbXkgaW5ib3ggaXMgYWx3YXlzIG9wZW4uXHJcbiAgICAgICAgICAgICAgICAgIFdoZXRoZXIgeW91IGhhdmUgYSBxdWVzdGlvbiBvciBqdXN0IHdhbnQgdG8gc2F5IGhpLCBJJ2xsIHRyeSBteSBiZXN0IHRvIGdldMKgYmFja8KgdG/CoHlvdSFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgIHsvKiBVcGRhdGVkIHNvY2lhbCBpY29ucyBzZWN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGZsZXggZmxleC1yb3cgZ2FwLTJcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2Vlc2hhbmlrYXZlZXNoYVwiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtHaXRodWJJY29ufSBhbHQ9XCJHaXRodWIgSWNvblwiIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2thdmVlc2hhLWdhbWFnZS9cIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17TGlua2VkaW5JY29ufSBhbHQ9XCJMaW5rZWRpbiBJY29uXCIgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtd2hpdGUgYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZW1haWxcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1bIzE4MTkxRV0gYm9yZGVyIGJvcmRlci1bIzMzMzUzRl0gcGxhY2Vob2xkZXItWyM5Q0EyQTldIHRleHQtZ3JheS0xMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNSdcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiamFjb2JAZ29vZ2xlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J3N1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtd2hpdGUgYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nc3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwianVzdCBzYXkgaGkuLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nbWVzc2FnZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdtZXNzYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1bIzE4MTkxRV0gYm9yZGVyIGJvcmRlci1bIzMzMzUzRl0gcGxhY2Vob2xkZXItWyM5Q0EyQTldIHRleHQtZ3JheS0xMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNSdcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGV0J3MgdGFsayBhYm91dC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1wcmltYXJ5LTUwMCBob3ZlcjpiZy1wcmltYXJ5LTYwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHB5LTIuNSBweC01IHJvdW5kZWQtbGcgdy1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlbmQgTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWxTdWJtaXR0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmVlbi01MDAgdGV4dC1zbSBtdC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgc2VudCBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbFNlY3Rpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdpdGh1Ykljb24iLCJMaW5rZWRpbkljb24iLCJMaW5rIiwiSW1hZ2UiLCJFbWFpbFNlY3Rpb24iLCJlbWFpbFN1Ym1pdHRlZCIsInNldEVtYWlsU3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJqZWN0IiwibWVzc2FnZSIsIkpTT05kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc0RhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoNSIsInAiLCJocmVmIiwicmVsIiwic3JjIiwiYWx0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/EmailSection.jsx\n"));

/***/ })

});