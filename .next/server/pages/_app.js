(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 933:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'","fontStyle":"normal"},
	"className": "__className_0ec1f4"
};


/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"layouts\\AppLayout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(933);
var target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
;// CONCATENATED MODULE: ./layouts/AppLayout.tsx


function AppLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
        children: children
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppLayout, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "Loofytech"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(112)));
module.exports = __webpack_exports__;

})();