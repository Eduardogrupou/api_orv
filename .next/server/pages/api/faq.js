"use strict";
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
exports.id = "pages/api/faq";
exports.ids = ["pages/api/faq"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ excuteQuery)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: \"38.242.132.95\",\n        port: 3306,\n        database: \"orvalh39_perfume.sql\",\n        user: \"orvalh39_perfume.sql\",\n        password: \"root\"\n    }\n});\nasync function excuteQuery({ query , values  }) {\n    try {\n        const results = await db.query(query, values);\n        await db.end();\n        return results;\n    } catch (error) {\n        return {\n            error\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBQ3JDLE1BQU1DLEtBQUtELHVEQUFLQSxDQUFDO0lBQ2ZFLFFBQVE7UUFDTkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxVQUFVO0lBQ1o7QUFDRjtBQUNlLGVBQWVDLFlBQVksRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUMzRCxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNVixHQUFHUSxLQUFLLENBQUNBLE9BQU9DO1FBQ3RDLE1BQU1ULEdBQUdXLEdBQUc7UUFDWixPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU87WUFBRUE7UUFBTTtJQUNqQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmV0ZW1lYXBpMi8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tIFwic2VydmVybGVzcy1teXNxbFwiO1xuY29uc3QgZGIgPSBteXNxbCh7XG4gIGNvbmZpZzoge1xuICAgIGhvc3Q6IFwiMzguMjQyLjEzMi45NVwiLFxuICAgIHBvcnQ6IDMzMDYsXG4gICAgZGF0YWJhc2U6IFwib3J2YWxoMzlfcGVyZnVtZS5zcWxcIixcbiAgICB1c2VyOiBcIm9ydmFsaDM5X3BlcmZ1bWUuc3FsXCIsXG4gICAgcGFzc3dvcmQ6IFwicm9vdFwiLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBleGN1dGVRdWVyeSh7IHF1ZXJ5LCB2YWx1ZXMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeShxdWVyeSwgdmFsdWVzKTtcbiAgICBhd2FpdCBkYi5lbmQoKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNvbmZpZyIsImhvc3QiLCJwb3J0IiwiZGF0YWJhc2UiLCJ1c2VyIiwicGFzc3dvcmQiLCJleGN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwicmVzdWx0cyIsImVuZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/faq.js":
/*!**************************!*\
  !*** ./pages/api/faq.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    await runMiddleware(req, res, cors);\n    // Consulta para selecionar todos os produtos da tabela \"perfumes\"\n    const query = \"SELECT id, question, answer FROM faq\";\n    const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        query\n    });\n    if (results.error) {\n        res.status(500).json({\n            error: \"Error executing the query\"\n        });\n        return;\n    }\n    // Mapeia os resultados da consulta para um objeto com os atributos desejados\n    const products = results.map((row)=>({\n            id: row.id,\n            question: row.question,\n            answer: row.answer\n        }));\n    res.status(200).json({\n        data: products\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmFxLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFDZ0I7QUFFeEMsTUFBTUUsT0FBT0YsMkNBQUlBLENBQUM7SUFDaEJHLFNBQVM7UUFBQztRQUFRO1FBQU87S0FBTztBQUNsQztBQUVBLFNBQVNDLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFLEVBQUU7SUFDbkMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7UUFDdENILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0ssU0FBVztZQUN2QixJQUFJQSxrQkFBa0JDLE9BQU87Z0JBQzNCLE9BQU9GLE9BQU9DO1lBQ2hCLENBQUM7WUFFRCxPQUFPRixRQUFRRTtRQUNqQjtJQUNGO0FBQ0Y7QUFFZSxlQUFlRSxRQUFRUixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNRixjQUFjQyxLQUFLQyxLQUFLSjtJQUU5QixrRUFBa0U7SUFDbEUsTUFBTVksUUFBUTtJQUNkLE1BQU1DLFVBQVUsTUFBTWQsbURBQVlBLENBQUM7UUFBRWE7SUFBTTtJQUUzQyxJQUFJQyxRQUFRQyxLQUFLLEVBQUU7UUFDakJWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUYsT0FBTztRQUE0QjtRQUMxRDtJQUNGLENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsTUFBTUcsV0FBV0osUUFBUUssR0FBRyxDQUFDLENBQUNDLE1BQVM7WUFDckNDLElBQUlELElBQUlDLEVBQUU7WUFDVkMsVUFBVUYsSUFBSUUsUUFBUTtZQUN0QkMsUUFBUUgsSUFBSUcsTUFBTTtRQUtwQjtJQUVBbEIsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFTyxNQUFNTjtJQUFTO0FBQ3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmV0ZW1lYXBpMi8uL3BhZ2VzL2FwaS9mYXEuanM/MTBjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGV4ZWN1dGVRdWVyeSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XG5cbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgbWV0aG9kczogW1wiUE9TVFwiLCBcIkdFVFwiLCBcIkhFQURcIl0sXG59KTtcblxuZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29ycyk7XG5cbiAgLy8gQ29uc3VsdGEgcGFyYSBzZWxlY2lvbmFyIHRvZG9zIG9zIHByb2R1dG9zIGRhIHRhYmVsYSBcInBlcmZ1bWVzXCJcbiAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCBpZCwgcXVlc3Rpb24sIGFuc3dlciBGUk9NIGZhcVwiO1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHsgcXVlcnkgfSk7XG5cbiAgaWYgKHJlc3VsdHMuZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIGV4ZWN1dGluZyB0aGUgcXVlcnlcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBNYXBlaWEgb3MgcmVzdWx0YWRvcyBkYSBjb25zdWx0YSBwYXJhIHVtIG9iamV0byBjb20gb3MgYXRyaWJ1dG9zIGRlc2VqYWRvc1xuICBjb25zdCBwcm9kdWN0cyA9IHJlc3VsdHMubWFwKChyb3cpID0+ICh7XG4gICAgaWQ6IHJvdy5pZCxcbiAgICBxdWVzdGlvbjogcm93LnF1ZXN0aW9uLFxuICAgIGFuc3dlcjogcm93LmFuc3dlcixcblxuXG5cblxuICB9KSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBwcm9kdWN0cyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJDb3JzIiwiZXhlY3V0ZVF1ZXJ5IiwiY29ycyIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiaGFuZGxlciIsInF1ZXJ5IiwicmVzdWx0cyIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInByb2R1Y3RzIiwibWFwIiwicm93IiwiaWQiLCJxdWVzdGlvbiIsImFuc3dlciIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/faq.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/faq.js"));
module.exports = __webpack_exports__;

})();