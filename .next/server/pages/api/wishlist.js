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
exports.id = "pages/api/wishlist";
exports.ids = ["pages/api/wishlist"];
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

/***/ "(api)/./pages/api/wishlist.js":
/*!*******************************!*\
  !*** ./pages/api/wishlist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    await runMiddleware(req, res, cors);\n    // Consulta para selecionar todos os produtos da tabela \"perfumes\"\n    const query = \"SELECT id, product_id, user_id FROM wishlist\";\n    const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        query\n    });\n    if (results.error) {\n        res.status(500).json({\n            error: \"Error executing the query\"\n        });\n        return;\n    }\n    // Mapeia os resultados da consulta para um objeto com os atributos desejados\n    const products = results.map((row)=>({\n            id: row.id,\n            product_id: row.product_id,\n            user_id: row.user_id\n        }));\n    res.status(200).json({\n        data: products\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd2lzaGxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QjtBQUNnQjtBQUV4QyxNQUFNRSxPQUFPRiwyQ0FBSUEsQ0FBQztJQUNoQkcsU0FBUztRQUFDO1FBQVE7UUFBTztLQUFPO0FBQ2xDO0FBRUEsU0FBU0MsY0FBY0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEVBQUUsRUFBRTtJQUNuQyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUN0Q0gsR0FBR0YsS0FBS0MsS0FBSyxDQUFDSyxTQUFXO1lBQ3ZCLElBQUlBLGtCQUFrQkMsT0FBTztnQkFDM0IsT0FBT0YsT0FBT0M7WUFDaEIsQ0FBQztZQUVELE9BQU9GLFFBQVFFO1FBQ2pCO0lBQ0Y7QUFDRjtBQUVlLGVBQWVFLFFBQVFSLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1GLGNBQWNDLEtBQUtDLEtBQUtKO0lBRTlCLGtFQUFrRTtJQUNsRSxNQUFNWSxRQUFRO0lBQ2QsTUFBTUMsVUFBVSxNQUFNZCxtREFBWUEsQ0FBQztRQUFFYTtJQUFNO0lBRTNDLElBQUlDLFFBQVFDLEtBQUssRUFBRTtRQUNqQlYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRixPQUFPO1FBQTRCO1FBQzFEO0lBQ0YsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxNQUFNRyxXQUFXSixRQUFRSyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztZQUNyQ0MsSUFBSUQsSUFBSUMsRUFBRTtZQUNWQyxZQUFZRixJQUFJRSxVQUFVO1lBQzFCQyxTQUFTSCxJQUFJRyxPQUFPO1FBRXRCO0lBRUFsQixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVPLE1BQU1OO0lBQVM7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZXRlbWVhcGkyLy4vcGFnZXMvYXBpL3dpc2hsaXN0LmpzPzc2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleGVjdXRlUXVlcnkgZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xuXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIG1ldGhvZHM6IFtcIlBPU1RcIiwgXCJHRVRcIiwgXCJIRUFEXCJdLFxufSk7XG5cbmZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xuXG4gIC8vIENvbnN1bHRhIHBhcmEgc2VsZWNpb25hciB0b2RvcyBvcyBwcm9kdXRvcyBkYSB0YWJlbGEgXCJwZXJmdW1lc1wiXG4gIGNvbnN0IHF1ZXJ5ID0gXCJTRUxFQ1QgaWQsIHByb2R1Y3RfaWQsIHVzZXJfaWQgRlJPTSB3aXNobGlzdFwiO1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHsgcXVlcnkgfSk7XG5cbiAgaWYgKHJlc3VsdHMuZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIGV4ZWN1dGluZyB0aGUgcXVlcnlcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBNYXBlaWEgb3MgcmVzdWx0YWRvcyBkYSBjb25zdWx0YSBwYXJhIHVtIG9iamV0byBjb20gb3MgYXRyaWJ1dG9zIGRlc2VqYWRvc1xuICBjb25zdCBwcm9kdWN0cyA9IHJlc3VsdHMubWFwKChyb3cpID0+ICh7XG4gICAgaWQ6IHJvdy5pZCxcbiAgICBwcm9kdWN0X2lkOiByb3cucHJvZHVjdF9pZCxcbiAgICB1c2VyX2lkOiByb3cudXNlcl9pZCxcblxuICB9KSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBwcm9kdWN0cyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJDb3JzIiwiZXhlY3V0ZVF1ZXJ5IiwiY29ycyIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiaGFuZGxlciIsInF1ZXJ5IiwicmVzdWx0cyIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInByb2R1Y3RzIiwibWFwIiwicm93IiwiaWQiLCJwcm9kdWN0X2lkIiwidXNlcl9pZCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/wishlist.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/wishlist.js"));
module.exports = __webpack_exports__;

})();