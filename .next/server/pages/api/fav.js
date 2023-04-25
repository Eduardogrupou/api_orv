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
exports.id = "pages/api/fav";
exports.ids = ["pages/api/fav"];
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

/***/ "(api)/./pages/api/fav.js":
/*!**************************!*\
  !*** ./pages/api/fav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    await runMiddleware(req, res, cors);\n    // Consulta para selecionar todos os produtos da tabela \"perfumes\"\n    const query = \"SELECT id, p_id, u_id FROM fav\";\n    const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        query\n    });\n    if (results.error) {\n        res.status(500).json({\n            error: \"Error executing the query\"\n        });\n        return;\n    }\n    // Mapeia os resultados da consulta para um objeto com os atributos desejados\n    const products = results.map((row)=>({\n            id: row.id,\n            p_id: row.p_id,\n            u_id: row.u_id\n        }));\n    res.status(200).json({\n        data: products\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFDZ0I7QUFFeEMsTUFBTUUsT0FBT0YsMkNBQUlBLENBQUM7SUFDaEJHLFNBQVM7UUFBQztRQUFRO1FBQU87S0FBTztBQUNsQztBQUVBLFNBQVNDLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFLEVBQUU7SUFDbkMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7UUFDdENILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0ssU0FBVztZQUN2QixJQUFJQSxrQkFBa0JDLE9BQU87Z0JBQzNCLE9BQU9GLE9BQU9DO1lBQ2hCLENBQUM7WUFFRCxPQUFPRixRQUFRRTtRQUNqQjtJQUNGO0FBQ0Y7QUFFZSxlQUFlRSxRQUFRUixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNRixjQUFjQyxLQUFLQyxLQUFLSjtJQUU5QixrRUFBa0U7SUFDbEUsTUFBTVksUUFBUTtJQUNkLE1BQU1DLFVBQVUsTUFBTWQsbURBQVlBLENBQUM7UUFBRWE7SUFBTTtJQUUzQyxJQUFJQyxRQUFRQyxLQUFLLEVBQUU7UUFDakJWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUYsT0FBTztRQUE0QjtRQUMxRDtJQUNGLENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsTUFBTUcsV0FBV0osUUFBUUssR0FBRyxDQUFDLENBQUNDLE1BQVM7WUFDckNDLElBQUlELElBQUlDLEVBQUU7WUFDVkMsTUFBTUYsSUFBSUUsSUFBSTtZQUNkQyxNQUFNSCxJQUFJRyxJQUFJO1FBS2hCO0lBRUFsQixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVPLE1BQU1OO0lBQVM7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZXRlbWVhcGkyLy4vcGFnZXMvYXBpL2Zhdi5qcz9lNGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhlY3V0ZVF1ZXJ5IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcblxuY29uc3QgY29ycyA9IENvcnMoe1xuICBtZXRob2RzOiBbXCJQT1NUXCIsIFwiR0VUXCIsIFwiSEVBRFwiXSxcbn0pO1xuXG5mdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKTtcblxuICAvLyBDb25zdWx0YSBwYXJhIHNlbGVjaW9uYXIgdG9kb3Mgb3MgcHJvZHV0b3MgZGEgdGFiZWxhIFwicGVyZnVtZXNcIlxuICBjb25zdCBxdWVyeSA9IFwiU0VMRUNUIGlkLCBwX2lkLCB1X2lkIEZST00gZmF2XCI7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBleGVjdXRlUXVlcnkoeyBxdWVyeSB9KTtcblxuICBpZiAocmVzdWx0cy5lcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgZXhlY3V0aW5nIHRoZSBxdWVyeVwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE1hcGVpYSBvcyByZXN1bHRhZG9zIGRhIGNvbnN1bHRhIHBhcmEgdW0gb2JqZXRvIGNvbSBvcyBhdHJpYnV0b3MgZGVzZWphZG9zXG4gIGNvbnN0IHByb2R1Y3RzID0gcmVzdWx0cy5tYXAoKHJvdykgPT4gKHtcbiAgICBpZDogcm93LmlkLFxuICAgIHBfaWQ6IHJvdy5wX2lkLFxuICAgIHVfaWQ6IHJvdy51X2lkLFxuXG5cblxuXG4gIH0pKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHByb2R1Y3RzIH0pO1xufVxuIl0sIm5hbWVzIjpbIkNvcnMiLCJleGVjdXRlUXVlcnkiLCJjb3JzIiwibWV0aG9kcyIsInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJoYW5kbGVyIiwicXVlcnkiLCJyZXN1bHRzIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwicHJvZHVjdHMiLCJtYXAiLCJyb3ciLCJpZCIsInBfaWQiLCJ1X2lkIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/fav.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fav.js"));
module.exports = __webpack_exports__;

})();