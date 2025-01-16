"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/resend";
exports.ids = ["vendor-chunks/resend"];
exports.modules = {

/***/ "(rsc)/./node_modules/resend/dist/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/resend/dist/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Resend: () => (/* binding */ Resend)\n/* harmony export */ });\nvar __defProp = Object.defineProperty;\nvar __defProps = Object.defineProperties;\nvar __getOwnPropDescs = Object.getOwnPropertyDescriptors;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n// package.json\nvar version = \"4.0.1\";\n\n// src/api-keys/api-keys.ts\nvar ApiKeys = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        \"/api-keys\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n  list() {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\"/api-keys\");\n      return data;\n    });\n  }\n  remove(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/api-keys/${id}`\n      );\n      return data;\n    });\n  }\n};\n\n// src/audiences/audiences.ts\nvar Audiences = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        \"/audiences\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n  list() {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\"/audiences\");\n      return data;\n    });\n  }\n  get(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/audiences/${id}`\n      );\n      return data;\n    });\n  }\n  remove(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/audiences/${id}`\n      );\n      return data;\n    });\n  }\n};\n\n// src/batch/batch.ts\nvar Batch = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  send(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      return this.create(payload, options);\n    });\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      for (const email of payload) {\n        if (email.react) {\n          if (!this.renderAsync) {\n            try {\n              const { renderAsync } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/js-beautify\"), __webpack_require__.e(\"vendor-chunks/entities\"), __webpack_require__.e(\"vendor-chunks/html-to-text\"), __webpack_require__.e(\"vendor-chunks/htmlparser2\"), __webpack_require__.e(\"vendor-chunks/domutils\"), __webpack_require__.e(\"vendor-chunks/domhandler\"), __webpack_require__.e(\"vendor-chunks/selderee\"), __webpack_require__.e(\"vendor-chunks/parseley\"), __webpack_require__.e(\"vendor-chunks/peberminta\"), __webpack_require__.e(\"vendor-chunks/dom-serializer\"), __webpack_require__.e(\"vendor-chunks/@react-email\"), __webpack_require__.e(\"vendor-chunks/deepmerge\"), __webpack_require__.e(\"vendor-chunks/@selderee\"), __webpack_require__.e(\"vendor-chunks/leac\"), __webpack_require__.e(\"vendor-chunks/domelementtype\")]).then(__webpack_require__.bind(__webpack_require__, /*! @react-email/render */ \"(rsc)/./node_modules/@react-email/render/dist/node/index.mjs\"));\n              this.renderAsync = renderAsync;\n            } catch (error) {\n              throw new Error(\n                \"Failed to render React component. Make sure to install `@react-email/render`\"\n              );\n            }\n          }\n          email.html = yield this.renderAsync(email.react);\n          email.react = void 0;\n        }\n      }\n      const data = yield this.resend.post(\n        \"/emails/batch\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n};\n\n// src/contacts/contacts.ts\nvar Contacts = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        `/audiences/${payload.audienceId}/contacts`,\n        {\n          unsubscribed: payload.unsubscribed,\n          email: payload.email,\n          first_name: payload.firstName,\n          last_name: payload.lastName\n        },\n        options\n      );\n      return data;\n    });\n  }\n  list(options) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/audiences/${options.audienceId}/contacts`\n      );\n      return data;\n    });\n  }\n  get(options) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/audiences/${options.audienceId}/contacts/${options.id}`\n      );\n      return data;\n    });\n  }\n  update(payload) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.patch(\n        `/audiences/${payload.audienceId}/contacts/${payload.id}`,\n        {\n          unsubscribed: payload.unsubscribed,\n          first_name: payload.firstName,\n          last_name: payload.lastName\n        }\n      );\n      return data;\n    });\n  }\n  remove(payload) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/audiences/${payload.audienceId}/contacts/${(payload == null ? void 0 : payload.email) ? payload == null ? void 0 : payload.email : payload == null ? void 0 : payload.id}`\n      );\n      return data;\n    });\n  }\n};\n\n// src/domains/domains.ts\nvar Domains = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        \"/domains\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n  list() {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\"/domains\");\n      return data;\n    });\n  }\n  get(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/domains/${id}`\n      );\n      return data;\n    });\n  }\n  update(payload) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.patch(\n        `/domains/${payload.id}`,\n        {\n          click_tracking: payload.clickTracking,\n          open_tracking: payload.openTracking,\n          tls: payload.tls\n        }\n      );\n      return data;\n    });\n  }\n  remove(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/domains/${id}`\n      );\n      return data;\n    });\n  }\n  verify(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.post(\n        `/domains/${id}/verify`\n      );\n      return data;\n    });\n  }\n};\n\n// src/emails/emails.ts\nvar Emails = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  send(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      return this.create(payload, options);\n    });\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      if (payload.react) {\n        if (!this.renderAsync) {\n          try {\n            const { renderAsync } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/js-beautify\"), __webpack_require__.e(\"vendor-chunks/entities\"), __webpack_require__.e(\"vendor-chunks/html-to-text\"), __webpack_require__.e(\"vendor-chunks/htmlparser2\"), __webpack_require__.e(\"vendor-chunks/domutils\"), __webpack_require__.e(\"vendor-chunks/domhandler\"), __webpack_require__.e(\"vendor-chunks/selderee\"), __webpack_require__.e(\"vendor-chunks/parseley\"), __webpack_require__.e(\"vendor-chunks/peberminta\"), __webpack_require__.e(\"vendor-chunks/dom-serializer\"), __webpack_require__.e(\"vendor-chunks/@react-email\"), __webpack_require__.e(\"vendor-chunks/deepmerge\"), __webpack_require__.e(\"vendor-chunks/@selderee\"), __webpack_require__.e(\"vendor-chunks/leac\"), __webpack_require__.e(\"vendor-chunks/domelementtype\")]).then(__webpack_require__.bind(__webpack_require__, /*! @react-email/render */ \"(rsc)/./node_modules/@react-email/render/dist/node/index.mjs\"));\n            this.renderAsync = renderAsync;\n          } catch (error) {\n            throw new Error(\n              \"Failed to render React component. Make sure to install `@react-email/render`\"\n            );\n          }\n        }\n        payload.html = yield this.renderAsync(\n          payload.react\n        );\n      }\n      const data = yield this.resend.post(\n        \"/emails\",\n        {\n          attachments: payload.attachments,\n          bcc: payload.bcc,\n          cc: payload.cc,\n          from: payload.from,\n          headers: payload.headers,\n          html: payload.html,\n          reply_to: payload.replyTo,\n          scheduled_at: payload.scheduledAt,\n          subject: payload.subject,\n          tags: payload.tags,\n          text: payload.text,\n          to: payload.to\n        },\n        options\n      );\n      return data;\n    });\n  }\n  get(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/emails/${id}`\n      );\n      return data;\n    });\n  }\n  update(payload) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.patch(\n        `/emails/${payload.id}`,\n        {\n          scheduled_at: payload.scheduledAt\n        }\n      );\n      return data;\n    });\n  }\n  cancel(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.post(\n        `/emails/${id}/cancel`\n      );\n      return data;\n    });\n  }\n};\n\n// src/resend.ts\nvar defaultBaseUrl = \"https://api.resend.com\";\nvar defaultUserAgent = `resend-node:${version}`;\nvar baseUrl = typeof process !== \"undefined\" && process.env ? process.env.RESEND_BASE_URL || defaultBaseUrl : defaultBaseUrl;\nvar userAgent = typeof process !== \"undefined\" && process.env ? process.env.RESEND_USER_AGENT || defaultUserAgent : defaultUserAgent;\nvar Resend = class {\n  constructor(key) {\n    this.key = key;\n    this.apiKeys = new ApiKeys(this);\n    this.audiences = new Audiences(this);\n    this.batch = new Batch(this);\n    this.contacts = new Contacts(this);\n    this.domains = new Domains(this);\n    this.emails = new Emails(this);\n    if (!key) {\n      if (typeof process !== \"undefined\" && process.env) {\n        this.key = process.env.RESEND_API_KEY;\n      }\n      if (!this.key) {\n        throw new Error(\n          'Missing API key. Pass it to the constructor `new Resend(\"re_123\")`'\n        );\n      }\n    }\n    this.headers = new Headers({\n      Authorization: `Bearer ${this.key}`,\n      \"User-Agent\": userAgent,\n      \"Content-Type\": \"application/json\"\n    });\n  }\n  fetchRequest(_0) {\n    return __async(this, arguments, function* (path, options = {}) {\n      try {\n        const response = yield fetch(`${baseUrl}${path}`, options);\n        if (!response.ok) {\n          try {\n            const rawError = yield response.text();\n            return { data: null, error: JSON.parse(rawError) };\n          } catch (err) {\n            if (err instanceof SyntaxError) {\n              return {\n                data: null,\n                error: {\n                  name: \"application_error\",\n                  message: \"Internal server error. We are unable to process your request right now, please try again later.\"\n                }\n              };\n            }\n            const error = {\n              message: response.statusText,\n              name: \"application_error\"\n            };\n            if (err instanceof Error) {\n              return { data: null, error: __spreadProps(__spreadValues({}, error), { message: err.message }) };\n            }\n            return { data: null, error };\n          }\n        }\n        const data = yield response.json();\n        return { data, error: null };\n      } catch (error) {\n        return {\n          data: null,\n          error: {\n            name: \"application_error\",\n            message: \"Unable to fetch data. The request could not be resolved.\"\n          }\n        };\n      }\n    });\n  }\n  post(_0, _1) {\n    return __async(this, arguments, function* (path, entity, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"POST\",\n        headers: this.headers,\n        body: JSON.stringify(entity)\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  get(_0) {\n    return __async(this, arguments, function* (path, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"GET\",\n        headers: this.headers\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  put(_0, _1) {\n    return __async(this, arguments, function* (path, entity, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"PUT\",\n        headers: this.headers,\n        body: JSON.stringify(entity)\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  patch(_0, _1) {\n    return __async(this, arguments, function* (path, entity, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"PATCH\",\n        headers: this.headers,\n        body: JSON.stringify(entity)\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  delete(path, query) {\n    return __async(this, null, function* () {\n      const requestOptions = {\n        method: \"DELETE\",\n        headers: this.headers,\n        body: JSON.stringify(query)\n      };\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVzZW5kL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixHQUFHO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsR0FBRztBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEdBQUc7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWMsUUFBUSxtOUJBQTZCO0FBQ3pFO0FBQ0Es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QSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBR0UiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2F2ZWUgR2FtYWdlXFxteS1wb3J0Zm9saW9cXG5vZGVfbW9kdWxlc1xccmVzZW5kXFxkaXN0XFxpbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xudmFyIF9fc3ByZWFkUHJvcHMgPSAoYSwgYikgPT4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7XG52YXIgX19hc3luYyA9IChfX3RoaXMsIF9fYXJndW1lbnRzLCBnZW5lcmF0b3IpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB2YXIgZnVsZmlsbGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZWplY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHN0ZXAgPSAoeCkgPT4geC5kb25lID8gcmVzb2x2ZSh4LnZhbHVlKSA6IFByb21pc2UucmVzb2x2ZSh4LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xuICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseShfX3RoaXMsIF9fYXJndW1lbnRzKSkubmV4dCgpKTtcbiAgfSk7XG59O1xuXG4vLyBwYWNrYWdlLmpzb25cbnZhciB2ZXJzaW9uID0gXCI0LjAuMVwiO1xuXG4vLyBzcmMvYXBpLWtleXMvYXBpLWtleXMudHNcbnZhciBBcGlLZXlzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZXNlbmQpIHtcbiAgICB0aGlzLnJlc2VuZCA9IHJlc2VuZDtcbiAgfVxuICBjcmVhdGUoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF5bG9hZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQucG9zdChcbiAgICAgICAgXCIvYXBpLWtleXNcIixcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXCIvYXBpLWtleXNcIik7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICByZW1vdmUoaWQpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmRlbGV0ZShcbiAgICAgICAgYC9hcGkta2V5cy8ke2lkfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gc3JjL2F1ZGllbmNlcy9hdWRpZW5jZXMudHNcbnZhciBBdWRpZW5jZXMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlc2VuZCkge1xuICAgIHRoaXMucmVzZW5kID0gcmVzZW5kO1xuICB9XG4gIGNyZWF0ZShfMCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24qIChwYXlsb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5wb3N0KFxuICAgICAgICBcIi9hdWRpZW5jZXNcIixcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXCIvYXVkaWVuY2VzXCIpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgZ2V0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXG4gICAgICAgIGAvYXVkaWVuY2VzLyR7aWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHJlbW92ZShpZCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQuZGVsZXRlKFxuICAgICAgICBgL2F1ZGllbmNlcy8ke2lkfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gc3JjL2JhdGNoL2JhdGNoLnRzXG52YXIgQmF0Y2ggPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlc2VuZCkge1xuICAgIHRoaXMucmVzZW5kID0gcmVzZW5kO1xuICB9XG4gIHNlbmQoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF5bG9hZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGUocGF5bG9hZCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKF8wKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBheWxvYWQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgZm9yIChjb25zdCBlbWFpbCBvZiBwYXlsb2FkKSB7XG4gICAgICAgIGlmIChlbWFpbC5yZWFjdCkge1xuICAgICAgICAgIGlmICghdGhpcy5yZW5kZXJBc3luYykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgeyByZW5kZXJBc3luYyB9ID0geWllbGQgaW1wb3J0KFwiQHJlYWN0LWVtYWlsL3JlbmRlclwiKTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBc3luYyA9IHJlbmRlckFzeW5jO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiRmFpbGVkIHRvIHJlbmRlciBSZWFjdCBjb21wb25lbnQuIE1ha2Ugc3VyZSB0byBpbnN0YWxsIGBAcmVhY3QtZW1haWwvcmVuZGVyYFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVtYWlsLmh0bWwgPSB5aWVsZCB0aGlzLnJlbmRlckFzeW5jKGVtYWlsLnJlYWN0KTtcbiAgICAgICAgICBlbWFpbC5yZWFjdCA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLnBvc3QoXG4gICAgICAgIFwiL2VtYWlscy9iYXRjaFwiLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIHNyYy9jb250YWN0cy9jb250YWN0cy50c1xudmFyIENvbnRhY3RzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZXNlbmQpIHtcbiAgICB0aGlzLnJlc2VuZCA9IHJlc2VuZDtcbiAgfVxuICBjcmVhdGUoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF5bG9hZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQucG9zdChcbiAgICAgICAgYC9hdWRpZW5jZXMvJHtwYXlsb2FkLmF1ZGllbmNlSWR9L2NvbnRhY3RzYCxcbiAgICAgICAge1xuICAgICAgICAgIHVuc3Vic2NyaWJlZDogcGF5bG9hZC51bnN1YnNjcmliZWQsXG4gICAgICAgICAgZW1haWw6IHBheWxvYWQuZW1haWwsXG4gICAgICAgICAgZmlyc3RfbmFtZTogcGF5bG9hZC5maXJzdE5hbWUsXG4gICAgICAgICAgbGFzdF9uYW1lOiBwYXlsb2FkLmxhc3ROYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICBsaXN0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmdldChcbiAgICAgICAgYC9hdWRpZW5jZXMvJHtvcHRpb25zLmF1ZGllbmNlSWR9L2NvbnRhY3RzYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIGdldChvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXG4gICAgICAgIGAvYXVkaWVuY2VzLyR7b3B0aW9ucy5hdWRpZW5jZUlkfS9jb250YWN0cy8ke29wdGlvbnMuaWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5wYXRjaChcbiAgICAgICAgYC9hdWRpZW5jZXMvJHtwYXlsb2FkLmF1ZGllbmNlSWR9L2NvbnRhY3RzLyR7cGF5bG9hZC5pZH1gLFxuICAgICAgICB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVkOiBwYXlsb2FkLnVuc3Vic2NyaWJlZCxcbiAgICAgICAgICBmaXJzdF9uYW1lOiBwYXlsb2FkLmZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0X25hbWU6IHBheWxvYWQubGFzdE5hbWVcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHJlbW92ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5kZWxldGUoXG4gICAgICAgIGAvYXVkaWVuY2VzLyR7cGF5bG9hZC5hdWRpZW5jZUlkfS9jb250YWN0cy8keyhwYXlsb2FkID09IG51bGwgPyB2b2lkIDAgOiBwYXlsb2FkLmVtYWlsKSA/IHBheWxvYWQgPT0gbnVsbCA/IHZvaWQgMCA6IHBheWxvYWQuZW1haWwgOiBwYXlsb2FkID09IG51bGwgPyB2b2lkIDAgOiBwYXlsb2FkLmlkfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gc3JjL2RvbWFpbnMvZG9tYWlucy50c1xudmFyIERvbWFpbnMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlc2VuZCkge1xuICAgIHRoaXMucmVzZW5kID0gcmVzZW5kO1xuICB9XG4gIGNyZWF0ZShfMCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24qIChwYXlsb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5wb3N0KFxuICAgICAgICBcIi9kb21haW5zXCIsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICBsaXN0KCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQuZ2V0KFwiL2RvbWFpbnNcIik7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICBnZXQoaWQpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmdldChcbiAgICAgICAgYC9kb21haW5zLyR7aWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5wYXRjaChcbiAgICAgICAgYC9kb21haW5zLyR7cGF5bG9hZC5pZH1gLFxuICAgICAgICB7XG4gICAgICAgICAgY2xpY2tfdHJhY2tpbmc6IHBheWxvYWQuY2xpY2tUcmFja2luZyxcbiAgICAgICAgICBvcGVuX3RyYWNraW5nOiBwYXlsb2FkLm9wZW5UcmFja2luZyxcbiAgICAgICAgICB0bHM6IHBheWxvYWQudGxzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICByZW1vdmUoaWQpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmRlbGV0ZShcbiAgICAgICAgYC9kb21haW5zLyR7aWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHZlcmlmeShpZCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQucG9zdChcbiAgICAgICAgYC9kb21haW5zLyR7aWR9L3ZlcmlmeWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gc3JjL2VtYWlscy9lbWFpbHMudHNcbnZhciBFbWFpbHMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlc2VuZCkge1xuICAgIHRoaXMucmVzZW5kID0gcmVzZW5kO1xuICB9XG4gIHNlbmQoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF5bG9hZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGUocGF5bG9hZCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKF8wKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBheWxvYWQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgaWYgKHBheWxvYWQucmVhY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbmRlckFzeW5jKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVuZGVyQXN5bmMgfSA9IHlpZWxkIGltcG9ydChcIkByZWFjdC1lbWFpbC9yZW5kZXJcIik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckFzeW5jID0gcmVuZGVyQXN5bmM7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgXCJGYWlsZWQgdG8gcmVuZGVyIFJlYWN0IGNvbXBvbmVudC4gTWFrZSBzdXJlIHRvIGluc3RhbGwgYEByZWFjdC1lbWFpbC9yZW5kZXJgXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBheWxvYWQuaHRtbCA9IHlpZWxkIHRoaXMucmVuZGVyQXN5bmMoXG4gICAgICAgICAgcGF5bG9hZC5yZWFjdFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLnBvc3QoXG4gICAgICAgIFwiL2VtYWlsc1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0YWNobWVudHM6IHBheWxvYWQuYXR0YWNobWVudHMsXG4gICAgICAgICAgYmNjOiBwYXlsb2FkLmJjYyxcbiAgICAgICAgICBjYzogcGF5bG9hZC5jYyxcbiAgICAgICAgICBmcm9tOiBwYXlsb2FkLmZyb20sXG4gICAgICAgICAgaGVhZGVyczogcGF5bG9hZC5oZWFkZXJzLFxuICAgICAgICAgIGh0bWw6IHBheWxvYWQuaHRtbCxcbiAgICAgICAgICByZXBseV90bzogcGF5bG9hZC5yZXBseVRvLFxuICAgICAgICAgIHNjaGVkdWxlZF9hdDogcGF5bG9hZC5zY2hlZHVsZWRBdCxcbiAgICAgICAgICBzdWJqZWN0OiBwYXlsb2FkLnN1YmplY3QsXG4gICAgICAgICAgdGFnczogcGF5bG9hZC50YWdzLFxuICAgICAgICAgIHRleHQ6IHBheWxvYWQudGV4dCxcbiAgICAgICAgICB0bzogcGF5bG9hZC50b1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgZ2V0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXG4gICAgICAgIGAvZW1haWxzLyR7aWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5wYXRjaChcbiAgICAgICAgYC9lbWFpbHMvJHtwYXlsb2FkLmlkfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBzY2hlZHVsZWRfYXQ6IHBheWxvYWQuc2NoZWR1bGVkQXRcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIGNhbmNlbChpZCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQucG9zdChcbiAgICAgICAgYC9lbWFpbHMvJHtpZH0vY2FuY2VsYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBzcmMvcmVzZW5kLnRzXG52YXIgZGVmYXVsdEJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLnJlc2VuZC5jb21cIjtcbnZhciBkZWZhdWx0VXNlckFnZW50ID0gYHJlc2VuZC1ub2RlOiR7dmVyc2lvbn1gO1xudmFyIGJhc2VVcmwgPSB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiA/IHByb2Nlc3MuZW52LlJFU0VORF9CQVNFX1VSTCB8fCBkZWZhdWx0QmFzZVVybCA6IGRlZmF1bHRCYXNlVXJsO1xudmFyIHVzZXJBZ2VudCA9IHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52ID8gcHJvY2Vzcy5lbnYuUkVTRU5EX1VTRVJfQUdFTlQgfHwgZGVmYXVsdFVzZXJBZ2VudCA6IGRlZmF1bHRVc2VyQWdlbnQ7XG52YXIgUmVzZW5kID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLmFwaUtleXMgPSBuZXcgQXBpS2V5cyh0aGlzKTtcbiAgICB0aGlzLmF1ZGllbmNlcyA9IG5ldyBBdWRpZW5jZXModGhpcyk7XG4gICAgdGhpcy5iYXRjaCA9IG5ldyBCYXRjaCh0aGlzKTtcbiAgICB0aGlzLmNvbnRhY3RzID0gbmV3IENvbnRhY3RzKHRoaXMpO1xuICAgIHRoaXMuZG9tYWlucyA9IG5ldyBEb21haW5zKHRoaXMpO1xuICAgIHRoaXMuZW1haWxzID0gbmV3IEVtYWlscyh0aGlzKTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52KSB7XG4gICAgICAgIHRoaXMua2V5ID0gcHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnTWlzc2luZyBBUEkga2V5LiBQYXNzIGl0IHRvIHRoZSBjb25zdHJ1Y3RvciBgbmV3IFJlc2VuZChcInJlXzEyM1wiKWAnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmtleX1gLFxuICAgICAgXCJVc2VyLUFnZW50XCI6IHVzZXJBZ2VudCxcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSk7XG4gIH1cbiAgZmV0Y2hSZXF1ZXN0KF8wKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtiYXNlVXJsfSR7cGF0aH1gLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByYXdFcnJvciA9IHlpZWxkIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IG51bGwsIGVycm9yOiBKU09OLnBhcnNlKHJhd0Vycm9yKSB9O1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcHBsaWNhdGlvbl9lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuIFdlIGFyZSB1bmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QgcmlnaHQgbm93LCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgIG5hbWU6IFwiYXBwbGljYXRpb25fZXJyb3JcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiBudWxsLCBlcnJvcjogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgZXJyb3IpLCB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBudWxsLCBlcnJvciB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4geyBkYXRhLCBlcnJvcjogbnVsbCB9O1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBuYW1lOiBcImFwcGxpY2F0aW9uX2Vycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVuYWJsZSB0byBmZXRjaCBkYXRhLiBUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgcmVzb2x2ZWQuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcG9zdChfMCwgXzEpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF0aCwgZW50aXR5LCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gX19zcHJlYWRWYWx1ZXMoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGl0eSlcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBnZXQoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IF9fc3ByZWFkVmFsdWVzKHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBwdXQoXzAsIF8xKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBhdGgsIGVudGl0eSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IF9fc3ByZWFkVmFsdWVzKHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGl0eSlcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBwYXRjaChfMCwgXzEpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF0aCwgZW50aXR5LCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gX19zcHJlYWRWYWx1ZXMoe1xuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRpdHkpXG4gICAgICB9LCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLmZldGNoUmVxdWVzdChwYXRoLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlKHBhdGgsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXVlcnkpXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIFJlc2VuZFxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/resend/dist/index.mjs\n");

/***/ })

};
;