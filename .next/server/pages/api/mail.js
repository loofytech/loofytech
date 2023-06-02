"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _utils_apiHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2395);
/* harmony import */ var _plugins_nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])(_utils_apiHandler__WEBPACK_IMPORTED_MODULE_1__/* .apiHandler */ .G);
handler.post(async (req, res)=>{
    try {
        const { name , email , phone , message  } = JSON.parse(req.body);
        await (0,_plugins_nodemailer__WEBPACK_IMPORTED_MODULE_2__/* .sendMain */ .e)(name, email, phone, message);
        return res.json({
            message: "Pesanmu telah terkirim",
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            error,
            status: 500
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ sendMain)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./plugins/nodemailer.ts

let transporter = external_nodemailer_default().createTransport({
    host: "mail.loofytech.com",
    port: 465,
    secure: true,
    auth: {
        user: "client@loofytech.com",
        pass: "8-Gq+ri}(1Ks"
    }
});
const sendMain = async (name, email, phone, text)=>{
    let info = await transporter.sendMail({
        from: `"Client ${name} 👻" <client@loofytech.com>`,
        to: "loofytech0@gmail.com, agungd3v@gmail.com",
        subject: "Order Service",
        html: `
      <style>
        table {
          padding: 3px;
        }
        table, tr, td {
          border: 1px solid #000;
          border-collapse: collapse;
        }
      </style>
      <table>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td>Email Address</td>
            <td>:</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>:</td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>:</td>
            <td>${text}</td>
          </tr>
        </tbody>
      </table>
    `
    });
    return info;
};


/***/ }),

/***/ 2395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ apiHandler)
/* harmony export */ });
const apiHandler = {
    onError: (err, req, res)=>{
        res.status(500).end(err.toString());
    },
    onNoMatch: (req, res)=>{
        res.status(405).json({
            status: false,
            message: "Methode not Allowed"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(821));
module.exports = __webpack_exports__;

})();