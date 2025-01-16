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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"MERN Stack Vehicle Service Centre Website\",\n        description: \" robust user authentication, password encryption, and comprehensive validation\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"MERN Stack Online Food Delivery Website\",\n        description: \"Integrated Stripe as a payment gateway, ensuring secure transactions for users during the checkout process\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \" Online Property Management System\",\n        description: \"Utilized MySQL for efficient data management, ensuring reliable storage and retrieval of property related information\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 4,\n        title: \"  ToDo Task Mobile App\",\n        description: \"Developed a mobile application in Kotlin to manage day-to-day tasks, providing full CRUD operations.\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 5,\n        title: \" Unity Motors UI/UX Design\",\n        description: \" High Fidelity Prototyping\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animal: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return(// <div className=\"py-12 px-6\">\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mb-8\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8\",\n                children: filteredProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : initial,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kavee Gamage\\\\my-portfolio\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n        lineNumber: 87,\n        columnNumber: 13\n    }, undefined));\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDUDtBQUNEO0FBQ1c7QUFHakQsTUFBTU8sZUFBZTtJQUNqQjtRQUNJQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNoQjtJQUNBO1FBQ0lOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDaEI7SUFDQTtRQUNJTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQVM7UUFDdEJDLFFBQVE7UUFDUkMsWUFBWTtJQUNoQjtJQUNBO1FBQ0lOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2hCO0NBV0g7QUFHRCxNQUFNQyxrQkFBa0I7O0lBQ3BCLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNZ0IsTUFBTWYsNkNBQU1BLENBQUM7SUFDbkIsTUFBTWdCLFdBQVdaLHdEQUFTQSxDQUFDVyxLQUFLO1FBQUNFLE1BQU07SUFBSTtJQUUzQyxNQUFNQyxrQkFBbUIsQ0FBQ0M7UUFDMUJMLE9BQU9LO0lBQ1A7SUFFQSxNQUFNQyxtQkFBbUJmLGFBQWFnQixNQUFNLENBQUMsQ0FBQ0MsVUFDMUNBLFFBQVFaLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDYjtJQUd6QixNQUFNYyxlQUFlO1FBQ2pCQyxTQUFTO1lBQUVDLEdBQUc7WUFBSUMsU0FBUztRQUFFO1FBQzdCQyxRQUFRO1lBQUVGLEdBQUc7WUFBR0MsU0FBUztRQUFFO0lBQy9CO0lBRUEsT0FDSSwrQkFBK0I7a0JBQzNCLDhEQUFDRTtRQUFRZCxLQUFLQTs7MEJBRWQsOERBQUNlO2dCQUFHQyxXQUFVOzBCQUFpRDs7Ozs7OzBCQUcvRCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDN0IsbURBQVVBO3dCQUFDK0IsU0FBU2Y7d0JBQ2pCZ0IsTUFBSzt3QkFDTEMsWUFBWXpCLFFBQVE7Ozs7OztrQ0FFeEIsOERBQUNSLG1EQUFVQTt3QkFBQytCLFNBQVNmO3dCQUNqQmdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXhCLDhEQUFDUixtREFBVUE7d0JBQUMrQixTQUFTZjt3QkFDakJnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUs1Qiw4REFBQzBCO2dCQUFHTCxXQUFVOzBCQUNMWCxpQkFBaUJpQixHQUFHLENBQUMsQ0FBQ2Ysd0JBQ25CLDhEQUFDbkIsaURBQU1BLENBQUNtQyxFQUFFO3dCQUNOQyxVQUFVZjt3QkFDVkMsU0FBUTt3QkFDUmUsU0FBU3hCLFdBQVcsWUFBWVM7a0NBQ3hDLDRFQUFDeEIsb0RBQVdBOzRCQUVSTSxPQUFPZSxRQUFRZixLQUFLOzRCQUNwQkMsYUFBYWMsUUFBUWQsV0FBVzs0QkFDaENpQyxRQUFRbkIsUUFBUWIsS0FBSzs0QkFDckJFLFFBQVFXLFFBQVFYLE1BQU07NEJBQ3RCQyxZQUFZVSxRQUFRVixVQUFVOzJCQUx6QlUsUUFBUWhCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF2QztHQTdETU87O1FBR2VULG9EQUFTQTs7O0tBSHhCUztBQStETixpRUFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLYXZlZSBHYW1hZ2VcXG15LXBvcnRmb2xpb1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXFByb2plY3RzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4vUHJvamVjdENhcmQnXHJcbmltcG9ydCBQcm9qZWN0VGFnIGZyb20gJy4vUHJvamVjdFRhZyc7XHJcbmltcG9ydCB7IG1vdGlvbix1c2VJblZpZXcgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0c0RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiTUVSTiBTdGFjayBWZWhpY2xlIFNlcnZpY2UgQ2VudHJlIFdlYnNpdGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCIgcm9idXN0IHVzZXIgYXV0aGVudGljYXRpb24sIHBhc3N3b3JkIGVuY3J5cHRpb24sIGFuZCBjb21wcmVoZW5zaXZlIHZhbGlkYXRpb25cIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzEucG5nXCIsXHJcbiAgICAgICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXHJcbiAgICAgICAgZ2l0VXJsOiBcIi9cIixcclxuICAgICAgICBwcmV2aWV3VXJsOiBcIi9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZTogXCJNRVJOIFN0YWNrIE9ubGluZSBGb29kIERlbGl2ZXJ5IFdlYnNpdGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJJbnRlZ3JhdGVkIFN0cmlwZSBhcyBhIHBheW1lbnQgZ2F0ZXdheSwgZW5zdXJpbmcgc2VjdXJlIHRyYW5zYWN0aW9ucyBmb3IgdXNlcnMgZHVyaW5nIHRoZSBjaGVja291dCBwcm9jZXNzXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8xLnBuZ1wiLFxyXG4gICAgICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxyXG4gICAgICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICAgICAgcHJldmlld1VybDogXCIvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6IFwiIE9ubGluZSBQcm9wZXJ0eSBNYW5hZ2VtZW50IFN5c3RlbVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlV0aWxpemVkIE15U1FMIGZvciBlZmZpY2llbnQgZGF0YSBtYW5hZ2VtZW50LCBlbnN1cmluZyByZWxpYWJsZSBzdG9yYWdlIGFuZCByZXRyaWV2YWwgb2YgcHJvcGVydHkgcmVsYXRlZCBpbmZvcm1hdGlvblwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMS5wbmdcIixcclxuICAgICAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgICAgICBnaXRVcmw6IFwiL1wiLFxyXG4gICAgICAgIHByZXZpZXdVcmw6IFwiL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIHRpdGxlOiBcIiAgVG9EbyBUYXNrIE1vYmlsZSBBcHBcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYSBtb2JpbGUgYXBwbGljYXRpb24gaW4gS290bGluIHRvIG1hbmFnZSBkYXktdG8tZGF5IHRhc2tzLCBwcm92aWRpbmcgZnVsbCBDUlVEIG9wZXJhdGlvbnMuXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy80LnBuZ1wiLFxyXG4gICAgICAgIHRhZzogW1wiQWxsXCIsIFwiTW9iaWxlXCJdLFxyXG4gICAgICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICAgICAgcHJldmlld1VybDogXCIvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgdGl0bGU6IFwiIFVuaXR5IE1vdG9ycyBVSS9VWCBEZXNpZ25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCIgSGlnaCBGaWRlbGl0eSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNS5wbmdcIixcclxuICAgICAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgICAgICBnaXRVcmw6IFwiL1wiLFxyXG4gICAgICAgIHByZXZpZXdVcmw6IFwiL1wiXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGlkOiA2LFxyXG4gICAgLy8gICAgIHRpdGxlOiBcIiBVbml0eSBNb3RvcnMgVUkvVVggRGVzaWduXCIsXHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IFwiIEhpZ2ggRmlkZWxpdHkgUHJvdG90eXBpbmdcIixcclxuICAgIC8vICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzUucG5nXCIsXHJcbiAgICAvLyAgICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXHJcbiAgICAvLyAgICAgZ2l0VXJsOiBcIi9cIixcclxuICAgIC8vICAgICBwcmV2aWV3VXJsOiBcIi9cIlxyXG4gICAgLy8gfSxcclxuICAgIFxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IFByb2plY3RzU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwge29uY2U6IHRydWV9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAgKG5ld1RhZykgID0+IHtcclxuICAgIHNldFRhZyhuZXdUYWcpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+IFxyXG4gICAgICAgIHByb2plY3QudGFnLmluY2x1ZGVzKHRhZylcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2FyZFZhcmlhbnRzID0ge1xyXG4gICAgICAgIGluaXRpYWw6IHsgeTogNTAsIG9wYWNpdHk6IDAgfSxcclxuICAgICAgICBhbmltYWw6IHsgeTogMCwgb3BhY2l0eTogMSB9LFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyIHB4LTZcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICB7LyogU2VjdGlvbiBUaXRsZSAqL31cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLThcIj5cclxuICAgICAgICAgICAgICAgIE15IFByb2plY3RzXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB5LTYnPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RUYWcgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJBbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJBbGxcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdFRhZyBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIldlYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIldlYlwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGFnIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiTW9iaWxlXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQcm9qZWN0cyBHcmlkICovfVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBsZzpnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aXNJblZpZXcgPyBcImFuaW1hdGVcIiA6IGluaXRpYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsPXtwcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VXJsPXtwcm9qZWN0LnByZXZpZXdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNTZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0VGFnIiwibW90aW9uIiwidXNlSW5WaWV3IiwicHJvamVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWciLCJnaXRVcmwiLCJwcmV2aWV3VXJsIiwiUHJvamVjdHNTZWN0aW9uIiwic2V0VGFnIiwicmVmIiwiaXNJblZpZXciLCJvbmNlIiwiaGFuZGxlVGFnQ2hhbmdlIiwibmV3VGFnIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlciIsInByb2plY3QiLCJpbmNsdWRlcyIsImNhcmRWYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hbCIsInNlY3Rpb24iLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJuYW1lIiwiaXNTZWxlY3RlZCIsInVsIiwibWFwIiwibGkiLCJ2YXJpYW50cyIsImFuaW1hdGUiLCJpbWdVcmwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});