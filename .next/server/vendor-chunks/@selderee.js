"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@selderee";
exports.ids = ["vendor-chunks/@selderee"];
exports.modules = {

/***/ "(rsc)/./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hp2Builder: () => (/* binding */ hp2Builder)\n/* harmony export */ });\n/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ \"(rsc)/./node_modules/domhandler/lib/esm/index.js\");\n/* harmony import */ var selderee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! selderee */ \"(rsc)/./node_modules/selderee/lib/selderee.mjs\");\n\n\n\nfunction hp2Builder(nodes) {\n    return new selderee__WEBPACK_IMPORTED_MODULE_1__.Picker(handleArray(nodes));\n}\nfunction handleArray(nodes) {\n    const matchers = nodes.map(handleNode);\n    return (el, ...tail) => matchers.flatMap(m => m(el, ...tail));\n}\nfunction handleNode(node) {\n    switch (node.type) {\n        case 'terminal': {\n            const result = [node.valueContainer];\n            return (el, ...tail) => result;\n        }\n        case 'tagName':\n            return handleTagName(node);\n        case 'attrValue':\n            return handleAttrValueName(node);\n        case 'attrPresence':\n            return handleAttrPresenceName(node);\n        case 'pushElement':\n            return handlePushElementNode(node);\n        case 'popElement':\n            return handlePopElementNode(node);\n    }\n}\nfunction handleTagName(node) {\n    const variants = {};\n    for (const variant of node.variants) {\n        variants[variant.value] = handleArray(variant.cont);\n    }\n    return (el, ...tail) => {\n        const continuation = variants[el.name];\n        return (continuation) ? continuation(el, ...tail) : [];\n    };\n}\nfunction handleAttrPresenceName(node) {\n    const attrName = node.name;\n    const continuation = handleArray(node.cont);\n    return (el, ...tail) => (Object.prototype.hasOwnProperty.call(el.attribs, attrName))\n        ? continuation(el, ...tail)\n        : [];\n}\nfunction handleAttrValueName(node) {\n    const callbacks = [];\n    for (const matcher of node.matchers) {\n        const predicate = matcher.predicate;\n        const continuation = handleArray(matcher.cont);\n        callbacks.push((attr, el, ...tail) => (predicate(attr) ? continuation(el, ...tail) : []));\n    }\n    const attrName = node.name;\n    return (el, ...tail) => {\n        const attr = el.attribs[attrName];\n        return (attr || attr === '')\n            ? callbacks.flatMap(cb => cb(attr, el, ...tail))\n            : [];\n    };\n}\nfunction handlePushElementNode(node) {\n    const continuation = handleArray(node.cont);\n    const leftElementGetter = (node.combinator === '+')\n        ? getPrecedingElement\n        : getParentElement;\n    return (el, ...tail) => {\n        const next = leftElementGetter(el);\n        if (next === null) {\n            return [];\n        }\n        return continuation(next, el, ...tail);\n    };\n}\nconst getPrecedingElement = (el) => {\n    const prev = el.prev;\n    if (prev === null) {\n        return null;\n    }\n    return ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(prev)) ? prev : getPrecedingElement(prev);\n};\nconst getParentElement = (el) => {\n    const parent = el.parent;\n    return (parent && (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(parent)) ? parent : null;\n};\nfunction handlePopElementNode(node) {\n    const continuation = handleArray(node.cont);\n    return (el, next, ...tail) => continuation(next, ...tail);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHNlbGRlcmVlL3BsdWdpbi1odG1scGFyc2VyMi9saWIvaHAyLWJ1aWxkZXIubWpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUNEOztBQUVsQztBQUNBLGVBQWUsNENBQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLYXZlZSBHYW1hZ2VcXG15LXBvcnRmb2xpb1xcbm9kZV9tb2R1bGVzXFxAc2VsZGVyZWVcXHBsdWdpbi1odG1scGFyc2VyMlxcbGliXFxocDItYnVpbGRlci5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNUYWcgfSBmcm9tICdkb21oYW5kbGVyJztcbmltcG9ydCB7IFBpY2tlciB9IGZyb20gJ3NlbGRlcmVlJztcblxuZnVuY3Rpb24gaHAyQnVpbGRlcihub2Rlcykge1xuICAgIHJldHVybiBuZXcgUGlja2VyKGhhbmRsZUFycmF5KG5vZGVzKSk7XG59XG5mdW5jdGlvbiBoYW5kbGVBcnJheShub2Rlcykge1xuICAgIGNvbnN0IG1hdGNoZXJzID0gbm9kZXMubWFwKGhhbmRsZU5vZGUpO1xuICAgIHJldHVybiAoZWwsIC4uLnRhaWwpID0+IG1hdGNoZXJzLmZsYXRNYXAobSA9PiBtKGVsLCAuLi50YWlsKSk7XG59XG5mdW5jdGlvbiBoYW5kbGVOb2RlKG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXJtaW5hbCc6IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtub2RlLnZhbHVlQ29udGFpbmVyXTtcbiAgICAgICAgICAgIHJldHVybiAoZWwsIC4uLnRhaWwpID0+IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICd0YWdOYW1lJzpcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVUYWdOYW1lKG5vZGUpO1xuICAgICAgICBjYXNlICdhdHRyVmFsdWUnOlxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUF0dHJWYWx1ZU5hbWUobm9kZSk7XG4gICAgICAgIGNhc2UgJ2F0dHJQcmVzZW5jZSc6XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXR0clByZXNlbmNlTmFtZShub2RlKTtcbiAgICAgICAgY2FzZSAncHVzaEVsZW1lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVB1c2hFbGVtZW50Tm9kZShub2RlKTtcbiAgICAgICAgY2FzZSAncG9wRWxlbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUG9wRWxlbWVudE5vZGUobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlVGFnTmFtZShub2RlKSB7XG4gICAgY29uc3QgdmFyaWFudHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2Ygbm9kZS52YXJpYW50cykge1xuICAgICAgICB2YXJpYW50c1t2YXJpYW50LnZhbHVlXSA9IGhhbmRsZUFycmF5KHZhcmlhbnQuY29udCk7XG4gICAgfVxuICAgIHJldHVybiAoZWwsIC4uLnRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY29udGludWF0aW9uID0gdmFyaWFudHNbZWwubmFtZV07XG4gICAgICAgIHJldHVybiAoY29udGludWF0aW9uKSA/IGNvbnRpbnVhdGlvbihlbCwgLi4udGFpbCkgOiBbXTtcbiAgICB9O1xufVxuZnVuY3Rpb24gaGFuZGxlQXR0clByZXNlbmNlTmFtZShub2RlKSB7XG4gICAgY29uc3QgYXR0ck5hbWUgPSBub2RlLm5hbWU7XG4gICAgY29uc3QgY29udGludWF0aW9uID0gaGFuZGxlQXJyYXkobm9kZS5jb250KTtcbiAgICByZXR1cm4gKGVsLCAuLi50YWlsKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVsLmF0dHJpYnMsIGF0dHJOYW1lKSlcbiAgICAgICAgPyBjb250aW51YXRpb24oZWwsIC4uLnRhaWwpXG4gICAgICAgIDogW107XG59XG5mdW5jdGlvbiBoYW5kbGVBdHRyVmFsdWVOYW1lKG5vZGUpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1hdGNoZXIgb2Ygbm9kZS5tYXRjaGVycykge1xuICAgICAgICBjb25zdCBwcmVkaWNhdGUgPSBtYXRjaGVyLnByZWRpY2F0ZTtcbiAgICAgICAgY29uc3QgY29udGludWF0aW9uID0gaGFuZGxlQXJyYXkobWF0Y2hlci5jb250KTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goKGF0dHIsIGVsLCAuLi50YWlsKSA9PiAocHJlZGljYXRlKGF0dHIpID8gY29udGludWF0aW9uKGVsLCAuLi50YWlsKSA6IFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJOYW1lID0gbm9kZS5uYW1lO1xuICAgIHJldHVybiAoZWwsIC4uLnRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGVsLmF0dHJpYnNbYXR0ck5hbWVdO1xuICAgICAgICByZXR1cm4gKGF0dHIgfHwgYXR0ciA9PT0gJycpXG4gICAgICAgICAgICA/IGNhbGxiYWNrcy5mbGF0TWFwKGNiID0+IGNiKGF0dHIsIGVsLCAuLi50YWlsKSlcbiAgICAgICAgICAgIDogW107XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVB1c2hFbGVtZW50Tm9kZShub2RlKSB7XG4gICAgY29uc3QgY29udGludWF0aW9uID0gaGFuZGxlQXJyYXkobm9kZS5jb250KTtcbiAgICBjb25zdCBsZWZ0RWxlbWVudEdldHRlciA9IChub2RlLmNvbWJpbmF0b3IgPT09ICcrJylcbiAgICAgICAgPyBnZXRQcmVjZWRpbmdFbGVtZW50XG4gICAgICAgIDogZ2V0UGFyZW50RWxlbWVudDtcbiAgICByZXR1cm4gKGVsLCAuLi50YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBsZWZ0RWxlbWVudEdldHRlcihlbCk7XG4gICAgICAgIGlmIChuZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbihuZXh0LCBlbCwgLi4udGFpbCk7XG4gICAgfTtcbn1cbmNvbnN0IGdldFByZWNlZGluZ0VsZW1lbnQgPSAoZWwpID0+IHtcbiAgICBjb25zdCBwcmV2ID0gZWwucHJldjtcbiAgICBpZiAocHJldiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChpc1RhZyhwcmV2KSkgPyBwcmV2IDogZ2V0UHJlY2VkaW5nRWxlbWVudChwcmV2KTtcbn07XG5jb25zdCBnZXRQYXJlbnRFbGVtZW50ID0gKGVsKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZWwucGFyZW50O1xuICAgIHJldHVybiAocGFyZW50ICYmIGlzVGFnKHBhcmVudCkpID8gcGFyZW50IDogbnVsbDtcbn07XG5mdW5jdGlvbiBoYW5kbGVQb3BFbGVtZW50Tm9kZShub2RlKSB7XG4gICAgY29uc3QgY29udGludWF0aW9uID0gaGFuZGxlQXJyYXkobm9kZS5jb250KTtcbiAgICByZXR1cm4gKGVsLCBuZXh0LCAuLi50YWlsKSA9PiBjb250aW51YXRpb24obmV4dCwgLi4udGFpbCk7XG59XG5cbmV4cG9ydCB7IGhwMkJ1aWxkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs\n");

/***/ })

};
;