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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
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

/***/ "(api)/./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    await runMiddleware(req, res, cors);\n    // Consulta para selecionar todos os produtos da tabela \"perfumes\"\n    const query = \"SELECT id, email, username, password, phone, address, passport, status, perfil, sexo, cep, endereco, numero, complemento, cidade, uf, bairro, nome, rua, plano, column_b, descricao, recuperar_senha, utilizador, confirmacao, cpf, userId, nascimento FROM user\";\n    const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        query\n    });\n    if (results.error) {\n        res.status(500).json({\n            error: \"Error executing the query\"\n        });\n        return;\n    }\n    // Mapeia os resultados da consulta para um objeto com os atributos desejados\n    const products = results.map((row)=>({\n            id: row.id,\n            email: row.email,\n            username: row.username,\n            password: row.password,\n            phone: row.phone,\n            address: row.adress,\n            passport: row.passport,\n            status: row.status,\n            perfil: row.perfil,\n            sexo: row.sexo,\n            cep: row.cep,\n            endereco: row.endereco,\n            numero: row.numero,\n            complemento: row.complemento,\n            cidade: row.cidade,\n            uf: row.uf,\n            bairro: row.bairro,\n            nome: row.nome,\n            rua: row.rua,\n            plano: row.plano,\n            column_b: row.column_b,\n            descricao: row.descricao,\n            recuperar_senha: row.recuperar_senha,\n            utilizador: row.utilizador,\n            confirmacao: row.confirmacao,\n            cpf: row.cpf,\n            userId: row.userId,\n            nascimento: row.nascimento\n        }));\n    res.status(200).json({\n        data: products\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdCO0FBQ2dCO0FBRXhDLE1BQU1FLE9BQU9GLDJDQUFJQSxDQUFDO0lBQ2hCRyxTQUFTO1FBQUM7UUFBUTtRQUFPO0tBQU87QUFDbEM7QUFFQSxTQUFTQyxjQUFjQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRSxFQUFFO0lBQ25DLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ3RDSCxHQUFHRixLQUFLQyxLQUFLLENBQUNLLFNBQVc7WUFDdkIsSUFBSUEsa0JBQWtCQyxPQUFPO2dCQUMzQixPQUFPRixPQUFPQztZQUNoQixDQUFDO1lBRUQsT0FBT0YsUUFBUUU7UUFDakI7SUFDRjtBQUNGO0FBRWUsZUFBZUUsUUFBUVIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUYsY0FBY0MsS0FBS0MsS0FBS0o7SUFFOUIsa0VBQWtFO0lBQ2xFLE1BQU1ZLFFBQVE7SUFDZCxNQUFNQyxVQUFVLE1BQU1kLG1EQUFZQSxDQUFDO1FBQUVhO0lBQU07SUFFM0MsSUFBSUMsUUFBUUMsS0FBSyxFQUFFO1FBQ2pCVixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVGLE9BQU87UUFBNEI7UUFDMUQ7SUFDRixDQUFDO0lBRUQsNkVBQTZFO0lBQzdFLE1BQU1HLFdBQVdKLFFBQVFLLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO1lBQ3JDQyxJQUFJRCxJQUFJQyxFQUFFO1lBQ1ZDLE9BQU9GLElBQUlFLEtBQUs7WUFDaEJDLFVBQVVILElBQUlHLFFBQVE7WUFDdEJDLFVBQVVKLElBQUlJLFFBQVE7WUFDdEJDLE9BQU9MLElBQUlLLEtBQUs7WUFDaEJDLFNBQVNOLElBQUlPLE1BQU07WUFDbkJDLFVBQVVSLElBQUlRLFFBQVE7WUFDdEJaLFFBQVFJLElBQUlKLE1BQU07WUFDbEJhLFFBQVFULElBQUlTLE1BQU07WUFDbEJDLE1BQU1WLElBQUlVLElBQUk7WUFDZEMsS0FBS1gsSUFBSVcsR0FBRztZQUNaQyxVQUFVWixJQUFJWSxRQUFRO1lBQ3RCQyxRQUFRYixJQUFJYSxNQUFNO1lBQ2xCQyxhQUFhZCxJQUFJYyxXQUFXO1lBQzVCQyxRQUFRZixJQUFJZSxNQUFNO1lBQ2xCQyxJQUFJaEIsSUFBSWdCLEVBQUU7WUFDVkMsUUFBUWpCLElBQUlpQixNQUFNO1lBQ2xCQyxNQUFNbEIsSUFBSWtCLElBQUk7WUFDZEMsS0FBS25CLElBQUltQixHQUFHO1lBQ1pDLE9BQU9wQixJQUFJb0IsS0FBSztZQUNoQkMsVUFBVXJCLElBQUlxQixRQUFRO1lBQ3RCQyxXQUFXdEIsSUFBSXNCLFNBQVM7WUFDeEJDLGlCQUFpQnZCLElBQUl1QixlQUFlO1lBQ3BDQyxZQUFZeEIsSUFBSXdCLFVBQVU7WUFDMUJDLGFBQWF6QixJQUFJeUIsV0FBVztZQUM1QkMsS0FBSzFCLElBQUkwQixHQUFHO1lBQ1pDLFFBQVEzQixJQUFJMkIsTUFBTTtZQUNsQkMsWUFBWTVCLElBQUk0QixVQUFVO1FBTTVCO0lBRUEzQyxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVnQyxNQUFNL0I7SUFBUztBQUN4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJldGVtZWFwaTIvLi9wYWdlcy9hcGkvdXNlci5qcz84YTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhlY3V0ZVF1ZXJ5IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcblxuY29uc3QgY29ycyA9IENvcnMoe1xuICBtZXRob2RzOiBbXCJQT1NUXCIsIFwiR0VUXCIsIFwiSEVBRFwiXSxcbn0pO1xuXG5mdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKTtcblxuICAvLyBDb25zdWx0YSBwYXJhIHNlbGVjaW9uYXIgdG9kb3Mgb3MgcHJvZHV0b3MgZGEgdGFiZWxhIFwicGVyZnVtZXNcIlxuICBjb25zdCBxdWVyeSA9IFwiU0VMRUNUIGlkLCBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwaG9uZSwgYWRkcmVzcywgcGFzc3BvcnQsIHN0YXR1cywgcGVyZmlsLCBzZXhvLCBjZXAsIGVuZGVyZWNvLCBudW1lcm8sIGNvbXBsZW1lbnRvLCBjaWRhZGUsIHVmLCBiYWlycm8sIG5vbWUsIHJ1YSwgcGxhbm8sIGNvbHVtbl9iLCBkZXNjcmljYW8sIHJlY3VwZXJhcl9zZW5oYSwgdXRpbGl6YWRvciwgY29uZmlybWFjYW8sIGNwZiwgdXNlcklkLCBuYXNjaW1lbnRvIEZST00gdXNlclwiO1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHsgcXVlcnkgfSk7XG5cbiAgaWYgKHJlc3VsdHMuZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIGV4ZWN1dGluZyB0aGUgcXVlcnlcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBNYXBlaWEgb3MgcmVzdWx0YWRvcyBkYSBjb25zdWx0YSBwYXJhIHVtIG9iamV0byBjb20gb3MgYXRyaWJ1dG9zIGRlc2VqYWRvc1xuICBjb25zdCBwcm9kdWN0cyA9IHJlc3VsdHMubWFwKChyb3cpID0+ICh7XG4gICAgaWQ6IHJvdy5pZCxcbiAgICBlbWFpbDogcm93LmVtYWlsLFxuICAgIHVzZXJuYW1lOiByb3cudXNlcm5hbWUsXG4gICAgcGFzc3dvcmQ6IHJvdy5wYXNzd29yZCxcbiAgICBwaG9uZTogcm93LnBob25lLFxuICAgIGFkZHJlc3M6IHJvdy5hZHJlc3MsXG4gICAgcGFzc3BvcnQ6IHJvdy5wYXNzcG9ydCxcbiAgICBzdGF0dXM6IHJvdy5zdGF0dXMsXG4gICAgcGVyZmlsOiByb3cucGVyZmlsLFxuICAgIHNleG86IHJvdy5zZXhvLFxuICAgIGNlcDogcm93LmNlcCxcbiAgICBlbmRlcmVjbzogcm93LmVuZGVyZWNvLFxuICAgIG51bWVybzogcm93Lm51bWVybyxcbiAgICBjb21wbGVtZW50bzogcm93LmNvbXBsZW1lbnRvLFxuICAgIGNpZGFkZTogcm93LmNpZGFkZSxcbiAgICB1Zjogcm93LnVmLFxuICAgIGJhaXJybzogcm93LmJhaXJybyxcbiAgICBub21lOiByb3cubm9tZSxcbiAgICBydWE6IHJvdy5ydWEsXG4gICAgcGxhbm86IHJvdy5wbGFubyxcbiAgICBjb2x1bW5fYjogcm93LmNvbHVtbl9iLFxuICAgIGRlc2NyaWNhbzogcm93LmRlc2NyaWNhbyxcbiAgICByZWN1cGVyYXJfc2VuaGE6IHJvdy5yZWN1cGVyYXJfc2VuaGEsXG4gICAgdXRpbGl6YWRvcjogcm93LnV0aWxpemFkb3IsXG4gICAgY29uZmlybWFjYW86IHJvdy5jb25maXJtYWNhbyxcbiAgICBjcGY6IHJvdy5jcGYsXG4gICAgdXNlcklkOiByb3cudXNlcklkLFxuICAgIG5hc2NpbWVudG86IHJvdy5uYXNjaW1lbnRvLFxuXG5cblxuXG5cbiAgfSkpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcHJvZHVjdHMgfSk7XG59XG4iXSwibmFtZXMiOlsiQ29ycyIsImV4ZWN1dGVRdWVyeSIsImNvcnMiLCJtZXRob2RzIiwicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImhhbmRsZXIiLCJxdWVyeSIsInJlc3VsdHMiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJwcm9kdWN0cyIsIm1hcCIsInJvdyIsImlkIiwiZW1haWwiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicGhvbmUiLCJhZGRyZXNzIiwiYWRyZXNzIiwicGFzc3BvcnQiLCJwZXJmaWwiLCJzZXhvIiwiY2VwIiwiZW5kZXJlY28iLCJudW1lcm8iLCJjb21wbGVtZW50byIsImNpZGFkZSIsInVmIiwiYmFpcnJvIiwibm9tZSIsInJ1YSIsInBsYW5vIiwiY29sdW1uX2IiLCJkZXNjcmljYW8iLCJyZWN1cGVyYXJfc2VuaGEiLCJ1dGlsaXphZG9yIiwiY29uZmlybWFjYW8iLCJjcGYiLCJ1c2VySWQiLCJuYXNjaW1lbnRvIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.js"));
module.exports = __webpack_exports__;

})();