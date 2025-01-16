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

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"MERN Stack Vehicle Service Centre Website\",\n        description: \" robust user authentication, password encryption, and comprehensive validation\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"MERN Stack Online Food Delivery Website\",\n        description: \"Integrated Stripe as a payment gateway, ensuring secure transactions for users during the checkout process\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \" Online Property Management System\",\n        description: \"Utilized MySQL for efficient data management, ensuring reliable storage and retrieval of property related information\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 4,\n        title: \"  ToDo Task Mobile App\",\n        description: \"Developed a mobile application in Kotlin to manage day-to-day tasks, providing full CRUD operations.\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 5,\n        title: \" Unity Motors UI/UX Design\",\n        description: \" High Fidelity Prototyping\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return(// <div className=\"py-12 px-6\">\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mb-8\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index = 0.\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 21\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n        lineNumber: 87,\n        columnNumber: 13\n    }, undefined));\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDUDtBQUNEO0FBQ1c7QUFHakQsTUFBTU8sZUFBZTtJQUNqQjtRQUNJQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNoQjtJQUNBO1FBQ0lOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDaEI7SUFDQTtRQUNJTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQVM7UUFDdEJDLFFBQVE7UUFDUkMsWUFBWTtJQUNoQjtJQUNBO1FBQ0lOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2hCO0NBV0g7QUFHRCxNQUFNQyxrQkFBa0I7O0lBQ3BCLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNZ0IsTUFBTWYsNkNBQU1BLENBQUM7SUFDbkIsTUFBTWdCLFdBQVdaLHdEQUFTQSxDQUFDVyxLQUFLO1FBQUNFLE1BQU07SUFBSTtJQUUzQyxNQUFNQyxrQkFBbUIsQ0FBQ0M7UUFDMUJMLE9BQU9LO0lBQ1A7SUFFQSxNQUFNQyxtQkFBbUJmLGFBQWFnQixNQUFNLENBQUMsQ0FBQ0MsVUFDMUNBLFFBQVFaLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDYjtJQUd6QixNQUFNYyxlQUFlO1FBQ2pCQyxTQUFTO1lBQUVDLEdBQUc7WUFBSUMsU0FBUztRQUFFO1FBQzdCQyxTQUFTO1lBQUVGLEdBQUc7WUFBR0MsU0FBUztRQUFFO0lBQ2hDO0lBRUEsT0FDSSwrQkFBK0I7a0JBQzNCLDhEQUFDRTs7MEJBRUQsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFpRDs7Ozs7OzBCQUcvRCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDN0IsbURBQVVBO3dCQUNQK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7O2tDQUV4Qiw4REFBQ1IsbURBQVVBO3dCQUNQK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7O2tDQUV4Qiw4REFBQ1IsbURBQVVBO3dCQUNQK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUs1Qiw4REFBQzBCO2dCQUFHckIsS0FBS0E7Z0JBQUtnQixXQUFVOzBCQUNmWCxpQkFBaUJpQixHQUFHLENBQUMsQ0FBQ2YsU0FBUWdCLHNCQUMzQiw4REFBQ25DLGlEQUFNQSxDQUFDb0MsRUFBRTt3QkFFTkMsVUFBVWhCO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTWixXQUFXLFlBQVk7d0JBQ2hDeUIsWUFBWTs0QkFBQ0MsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBRTtrQ0FFckQsNEVBQUNyQyxvREFBV0E7NEJBRVJNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ29DLFFBQVF0QixRQUFRYixLQUFLOzRCQUNyQkUsUUFBUVcsUUFBUVgsTUFBTTs0QkFDdEJDLFlBQVlVLFFBQVFWLFVBQVU7MkJBTHpCVSxRQUFRaEIsRUFBRTs7Ozs7dUJBUE5nQzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CakM7R0FuRU16Qjs7UUFHZVQsb0RBQVNBOzs7S0FIeEJTO0FBcUVOLGlFQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEthdmVlIEdhbWFnZVxcbXktcG9ydGZvbGlvXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcUHJvamVjdHNTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi9Qcm9qZWN0Q2FyZCdcclxuaW1wb3J0IFByb2plY3RUYWcgZnJvbSAnLi9Qcm9qZWN0VGFnJztcclxuaW1wb3J0IHsgbW90aW9uLHVzZUluVmlldyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogXCJNRVJOIFN0YWNrIFZlaGljbGUgU2VydmljZSBDZW50cmUgV2Vic2l0ZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIiByb2J1c3QgdXNlciBhdXRoZW50aWNhdGlvbiwgcGFzc3dvcmQgZW5jcnlwdGlvbiwgYW5kIGNvbXByZWhlbnNpdmUgdmFsaWRhdGlvblwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMS5wbmdcIixcclxuICAgICAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgICAgICBnaXRVcmw6IFwiL1wiLFxyXG4gICAgICAgIHByZXZpZXdVcmw6IFwiL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHRpdGxlOiBcIk1FUk4gU3RhY2sgT25saW5lIEZvb2QgRGVsaXZlcnkgV2Vic2l0ZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkludGVncmF0ZWQgU3RyaXBlIGFzIGEgcGF5bWVudCBnYXRld2F5LCBlbnN1cmluZyBzZWN1cmUgdHJhbnNhY3Rpb25zIGZvciB1c2VycyBkdXJpbmcgdGhlIGNoZWNrb3V0IHByb2Nlc3NcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzEucG5nXCIsXHJcbiAgICAgICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXHJcbiAgICAgICAgZ2l0VXJsOiBcIi9cIixcclxuICAgICAgICBwcmV2aWV3VXJsOiBcIi9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB0aXRsZTogXCIgT25saW5lIFByb3BlcnR5IE1hbmFnZW1lbnQgU3lzdGVtXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXRpbGl6ZWQgTXlTUUwgZm9yIGVmZmljaWVudCBkYXRhIG1hbmFnZW1lbnQsIGVuc3VyaW5nIHJlbGlhYmxlIHN0b3JhZ2UgYW5kIHJldHJpZXZhbCBvZiBwcm9wZXJ0eSByZWxhdGVkIGluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8xLnBuZ1wiLFxyXG4gICAgICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxyXG4gICAgICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICAgICAgcHJldmlld1VybDogXCIvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6IFwiICBUb0RvIFRhc2sgTW9iaWxlIEFwcFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhIG1vYmlsZSBhcHBsaWNhdGlvbiBpbiBLb3RsaW4gdG8gbWFuYWdlIGRheS10by1kYXkgdGFza3MsIHByb3ZpZGluZyBmdWxsIENSVUQgb3BlcmF0aW9ucy5cIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzQucG5nXCIsXHJcbiAgICAgICAgdGFnOiBbXCJBbGxcIiwgXCJNb2JpbGVcIl0sXHJcbiAgICAgICAgZ2l0VXJsOiBcIi9cIixcclxuICAgICAgICBwcmV2aWV3VXJsOiBcIi9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICB0aXRsZTogXCIgVW5pdHkgTW90b3JzIFVJL1VYIERlc2lnblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIiBIaWdoIEZpZGVsaXR5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy81LnBuZ1wiLFxyXG4gICAgICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxyXG4gICAgICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICAgICAgcHJldmlld1VybDogXCIvXCJcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgaWQ6IDYsXHJcbiAgICAvLyAgICAgdGl0bGU6IFwiIFVuaXR5IE1vdG9ycyBVSS9VWCBEZXNpZ25cIixcclxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCIgSGlnaCBGaWRlbGl0eSBQcm90b3R5cGluZ1wiLFxyXG4gICAgLy8gICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNS5wbmdcIixcclxuICAgIC8vICAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgIC8vICAgICBnaXRVcmw6IFwiL1wiLFxyXG4gICAgLy8gICAgIHByZXZpZXdVcmw6IFwiL1wiXHJcbiAgICAvLyB9LFxyXG4gICAgXHJcbl07XHJcblxyXG5cclxuY29uc3QgUHJvamVjdHNTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcocmVmLCB7b25jZTogdHJ1ZX0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRhZ0NoYW5nZSA9ICAobmV3VGFnKSAgPT4ge1xyXG4gICAgc2V0VGFnKG5ld1RhZyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT4gXHJcbiAgICAgICAgcHJvamVjdC50YWcuaW5jbHVkZXModGFnKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjYXJkVmFyaWFudHMgPSB7XHJcbiAgICAgICAgaW5pdGlhbDogeyB5OiA1MCwgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIGFuaW1hdGU6IHsgeTogMCwgb3BhY2l0eTogMSB9LFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyIHB4LTZcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gPlxyXG4gICAgICAgICAgICB7LyogU2VjdGlvbiBUaXRsZSAqL31cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLThcIj5cclxuICAgICAgICAgICAgICAgIE15IFByb2plY3RzXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB5LTYnPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RUYWdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIkFsbFwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJXZWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJXZWJcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiTW9iaWxlXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQcm9qZWN0cyBHcmlkICovfVxyXG4gICAgICAgICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTYgbGc6Z2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtpc0luVmlldyA/IFwiYW5pbWF0ZVwiIDogXCJpbml0aWFsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ID0gMC59fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw9e3Byb2plY3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpdFVybD17cHJvamVjdC5naXRVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdVcmw9e3Byb2plY3QucHJldmlld1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RUYWciLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJwcm9qZWN0c0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZyIsImdpdFVybCIsInByZXZpZXdVcmwiLCJQcm9qZWN0c1NlY3Rpb24iLCJzZXRUYWciLCJyZWYiLCJpc0luVmlldyIsIm9uY2UiLCJoYW5kbGVUYWdDaGFuZ2UiLCJuZXdUYWciLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImluY2x1ZGVzIiwiY2FyZFZhcmlhbnRzIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInNlY3Rpb24iLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJuYW1lIiwiaXNTZWxlY3RlZCIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJpbWdVcmwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});