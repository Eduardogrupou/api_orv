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
exports.id = "pages/api/product";
exports.ids = ["pages/api/product"];
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

/***/ "(api)/./pages/api/product.js":
/*!******************************!*\
  !*** ./pages/api/product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    await runMiddleware(req, res, cors);\n    // Consulta para selecionar todos os produtos da tabela \"perfumes\"\n    const query = \"SELECT id, name, image, dcp, gender, brand_id, destaque FROM product\";\n    const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        query\n    });\n    if (results.error) {\n        res.status(500).json({\n            error: \"Error executing the query\"\n        });\n        return;\n    }\n    // Mapeia os resultados da consulta para um objeto com os atributos desejados\n    const products = results.map((row)=>({\n            id: row.id,\n            name: row.name,\n            image: row.image,\n            dcp: row.dcp\n        }));\n    res.status(200).json({\n        data: products\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdCO0FBQ2dCO0FBRXhDLE1BQU1FLE9BQU9GLDJDQUFJQSxDQUFDO0lBQ2hCRyxTQUFTO1FBQUM7UUFBUTtRQUFPO0tBQU87QUFDbEM7QUFFQSxTQUFTQyxjQUFjQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRSxFQUFFO0lBQ25DLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ3RDSCxHQUFHRixLQUFLQyxLQUFLLENBQUNLLFNBQVc7WUFDdkIsSUFBSUEsa0JBQWtCQyxPQUFPO2dCQUMzQixPQUFPRixPQUFPQztZQUNoQixDQUFDO1lBRUQsT0FBT0YsUUFBUUU7UUFDakI7SUFDRjtBQUNGO0FBRWUsZUFBZUUsUUFBUVIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUYsY0FBY0MsS0FBS0MsS0FBS0o7SUFFOUIsa0VBQWtFO0lBQ2xFLE1BQU1ZLFFBQVE7SUFDZCxNQUFNQyxVQUFVLE1BQU1kLG1EQUFZQSxDQUFDO1FBQUVhO0lBQU07SUFFM0MsSUFBSUMsUUFBUUMsS0FBSyxFQUFFO1FBQ2pCVixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVGLE9BQU87UUFBNEI7UUFDMUQ7SUFDRixDQUFDO0lBRUQsNkVBQTZFO0lBQzdFLE1BQU1HLFdBQVdKLFFBQVFLLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO1lBQ3JDQyxJQUFJRCxJQUFJQyxFQUFFO1lBQ1ZDLE1BQU1GLElBQUlFLElBQUk7WUFDZEMsT0FBT0gsSUFBSUcsS0FBSztZQUNoQkMsS0FBS0osSUFBSUksR0FBRztRQU1kO0lBRUFuQixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVRLE1BQU1QO0lBQVM7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZXRlbWVhcGkyLy4vcGFnZXMvYXBpL3Byb2R1Y3QuanM/YmRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGV4ZWN1dGVRdWVyeSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XG5cbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgbWV0aG9kczogW1wiUE9TVFwiLCBcIkdFVFwiLCBcIkhFQURcIl0sXG59KTtcblxuZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29ycyk7XG5cbiAgLy8gQ29uc3VsdGEgcGFyYSBzZWxlY2lvbmFyIHRvZG9zIG9zIHByb2R1dG9zIGRhIHRhYmVsYSBcInBlcmZ1bWVzXCJcbiAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCBpZCwgbmFtZSwgaW1hZ2UsIGRjcCwgZ2VuZGVyLCBicmFuZF9pZCwgZGVzdGFxdWUgRlJPTSBwcm9kdWN0XCI7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBleGVjdXRlUXVlcnkoeyBxdWVyeSB9KTtcblxuICBpZiAocmVzdWx0cy5lcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgZXhlY3V0aW5nIHRoZSBxdWVyeVwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE1hcGVpYSBvcyByZXN1bHRhZG9zIGRhIGNvbnN1bHRhIHBhcmEgdW0gb2JqZXRvIGNvbSBvcyBhdHJpYnV0b3MgZGVzZWphZG9zXG4gIGNvbnN0IHByb2R1Y3RzID0gcmVzdWx0cy5tYXAoKHJvdykgPT4gKHtcbiAgICBpZDogcm93LmlkLFxuICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgIGltYWdlOiByb3cuaW1hZ2UsXG4gICAgZGNwOiByb3cuZGNwLFxuXG5cblxuXG5cbiAgfSkpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcHJvZHVjdHMgfSk7XG59XG4iXSwibmFtZXMiOlsiQ29ycyIsImV4ZWN1dGVRdWVyeSIsImNvcnMiLCJtZXRob2RzIiwicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImhhbmRsZXIiLCJxdWVyeSIsInJlc3VsdHMiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJwcm9kdWN0cyIsIm1hcCIsInJvdyIsImlkIiwibmFtZSIsImltYWdlIiwiZGNwIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/product.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product.js"));
module.exports = __webpack_exports__;

})();