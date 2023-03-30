module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contracts lazy recursive ^\\.\\/.*\\.json$":
/*!********************************************************!*\
  !*** ./contracts lazy ^\.\/.*\.json$ namespace object ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./contracts lazy recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Home */ "./src/Home.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_src_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./parse-email/browser.js":
/*!********************************!*\
  !*** ./parse-email/browser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$defineProperties = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$getOwnPropertyDescriptors = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _JSON$stringify = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
  parse and return email data
  (browser)
*/
const Hashes = __webpack_require__(/*! jshashes */ "jshashes");

const parse = __webpack_require__(/*! ./parse */ "./parse-email/parse.js");

const toSolidity = __webpack_require__(/*! ./utils/toSolidity */ "./parse-email/utils/toSolidity.js");

const publicKeyToComponents = __webpack_require__(/*! ./utils/publicKeyToComponents */ "./parse-email/utils/publicKeyToComponents.js");

const main = email => {
  return new _Promise(async (resolve, reject) => {
    // get dkims
    const dkims = parse(email).dkims.map(dkim => {
      const algorithm = dkim.algorithm.split("-").pop().toUpperCase();
      const bodyHashMatched = new Hashes[algorithm]().hex(dkim.processedBody) === dkim.signature.hash.toString("hex");

      if (!bodyHashMatched) {
        return reject("body hash did not verify");
      }

      const hash = new Hashes[algorithm]().hex(dkim.processedHeader);
      return _objectSpread({}, dkim, {
        hash
      });
    }); // get dns records

    const publicKeys = await fetch("/api/getPublicKeys", {
      method: "POST",
      mode: "same-origin",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      referrer: "no-referrer",
      body: _JSON$stringify(dkims.map(dkim => ({
        domain: dkim.signature.domain,
        selector: dkim.signature.selector
      })))
    }).then(res => res.json()).then(entries => {
      return entries.map(entry => {
        const {
          publicKey
        } = entry;
        const {
          exponent,
          modulus
        } = publicKeyToComponents(publicKey);
        return _objectSpread({}, entry, {
          exponent,
          modulus
        });
      });
    }).catch(reject);
    return resolve(dkims.map((dkim, i) => {
      const solidity = toSolidity({
        algorithm: dkim.algorithm,
        hash: dkim.hash,
        signature: dkim.signature.signature,
        exponent: publicKeys[i].exponent,
        modulus: publicKeys[i].modulus
      });
      return _objectSpread({}, dkim, {}, publicKeys[i], {
        solidity
      });
    }));
  });
};

module.exports = main;

/***/ }),

/***/ "./parse-email/parse.js":
/*!******************************!*\
  !*** ./parse-email/parse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$defineProperties = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$getOwnPropertyDescriptors = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
  parse email
  (cross-platform)
*/
const Signature = __webpack_require__(/*! dkim-signature */ "dkim-signature");

const processHeader = __webpack_require__(/*! dkim/lib/process-header */ "dkim/lib/process-header");

const processBody = __webpack_require__(/*! dkim/lib/process-body */ "dkim/lib/process-body");

const isDKIM = __webpack_require__(/*! ./utils/isDKIM */ "./parse-email/utils/isDKIM.js");

const emailToHeaderAndBody = email => {
  const boundary = email.indexOf("\r\n\r\n");

  if (boundary === -1) {
    throw Error("no header boundary found");
  }

  const header = email.slice(0, boundary);
  const body = email.slice(boundary + 4);
  return {
    boundary,
    header,
    body
  };
};

const getDkimEntry = dkim => {
  const [name, ...rest] = dkim.split(":");
  return {
    name,
    value: rest.join(":").slice(1)
  };
};

const getDkims = header => {
  return header.split(/\r\n(?=[^\x20\x09]|$)/g).map((h, i, allHeaders) => {
    if (isDKIM(h)) {
      // remove DKIM headers
      const headers = allHeaders.filter(v => !isDKIM(v)); // add one DKIM header

      headers.unshift(h);
      return {
        entry: getDkimEntry(h),
        headers
      };
    }

    return undefined;
  }).filter(v => !!v);
};

const parse = email => {
  const {
    header,
    body
  } = emailToHeaderAndBody(email);
  const dkims = getDkims(header).map(dkim => {
    const signature = Signature.parse(dkim.entry.value);
    const sigBody = signature.length != null ? body.slice(0, signature.length) : body;
    const processedBody = processBody(sigBody, signature.canonical.split("/").pop());
    const processedHeader = processHeader(dkim.headers, signature.headers, signature.canonical.split("/").shift());
    const algorithm = signature.algorithm.toUpperCase();
    return _objectSpread({}, dkim, {
      signature,
      processedBody,
      processedHeader,
      algorithm
    });
  });
  return {
    header,
    body,
    dkims
  };
};

module.exports = parse;

/***/ }),

/***/ "./parse-email/utils/isDKIM.js":
/*!*************************************!*\
  !*** ./parse-email/utils/isDKIM.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const isDKIM = key => /^(DKIM-Signature|X-Google-DKIM-Signature)/.test(key);

module.exports = isDKIM;

/***/ }),

/***/ "./parse-email/utils/publicKeyToComponents.js":
/*!****************************************************!*\
  !*** ./parse-email/utils/publicKeyToComponents.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NodeRSA = __webpack_require__(/*! node-rsa */ "node-rsa");

const publicKeyToComponents = publicKey => {
  const parsed = new NodeRSA(publicKey);
  const {
    e: exponent,
    n: modulus
  } = parsed.exportKey("components-public");
  return {
    exponent,
    modulus
  };
};

module.exports = publicKeyToComponents;

/***/ }),

/***/ "./parse-email/utils/toSolidity.js":
/*!*****************************************!*\
  !*** ./parse-email/utils/toSolidity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const algorithms = {
  RSASHA1: 0,
  RSASHA256: 1
};

const toSolidity = rawData => ({
  algorithm: algorithms[rawData.algorithm.replace("-", "")],
  hash: "0x" + rawData.hash.toString("hex"),
  signature: "0x" + rawData.signature.toString("hex"),
  exponent: "0x" + rawData.exponent.toString(16),
  modulus: "0x" + rawData.modulus.toString("hex").slice(2)
});

module.exports = toSolidity;

/***/ }),

/***/ "./src/Home.tsx":
/*!**********************!*\
  !*** ./src/Home.tsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MetaMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MetaMask */ "./src/components/MetaMask.tsx");
/* harmony import */ var _stores_eth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stores/eth */ "./src/stores/eth.ts");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parse_email_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parse-email/browser */ "./parse-email/browser.js");
/* harmony import */ var _parse_email_browser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_parse_email_browser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _parse_email_utils_toSolidity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parse-email/utils/toSolidity */ "./parse-email/utils/toSolidity.js");
/* harmony import */ var _parse_email_utils_toSolidity__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_parse_email_utils_toSolidity__WEBPACK_IMPORTED_MODULE_10__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









const verify = email => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(async (resolve, reject) => {
    const DKIM = await _stores_eth__WEBPACK_IMPORTED_MODULE_7__["default"].getContract("DKIM").catch(reject);
    const dkims = await _parse_email_browser__WEBPACK_IMPORTED_MODULE_9___default()(email);
    const dkimsInBytes = dkims.map(dkim => {
      return _parse_email_utils_toSolidity__WEBPACK_IMPORTED_MODULE_10___default()({
        algorithm: dkim.algorithm,
        hash: dkim.hash,
        signature: dkim.signature.signature,
        exponent: dkim.exponent,
        modulus: dkim.modulus
      });
    });

    const result = _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(dkimsInBytes.map((dkim, i) => {
      return DKIM.verify(dkim.algorithm, dkim.hash, dkim.signature, dkim.exponent, dkim.modulus).then(res => ({
        name: dkims[i].entry.name,
        verified: res["0"]
      }));
    })).catch(reject);

    return resolve(result);
  });
};

const Home = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(() => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: verified,
    1: setVerified
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const {
    0: dragging,
    1: setDrag
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const disabled = !_stores_eth__WEBPACK_IMPORTED_MODULE_7__["default"].isInstalled || !(_stores_eth__WEBPACK_IMPORTED_MODULE_7__["default"].network === "sepolia" || _stores_eth__WEBPACK_IMPORTED_MODULE_7__["default"].network === "unknown network");
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(files => {
    setEmail(null);
    setError(null);
    setVerified([]);

    if (files.length < 1) {
      return setError("no file included");
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onabort = () => setError("file reading was aborted");

    reader.onerror = () => setError("file reading has failed");

    reader.onload = () => setEmail(reader.result);

    reader.readAsText(file);
  }, []);
  return __jsx("div", {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]]) + " " + "container"
  }, __jsx("h2", {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]])
  }, "solidity-dkim demo"), __jsx(_components_MetaMask__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(react_dropzone__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onDrop: onDrop,
    multiple: false,
    onDragEnter: () => setDrag(true),
    onDragLeave: () => setDrag(false)
  }, ({
    getRootProps,
    getInputProps
  }) => __jsx("section", {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]])
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
    style: {
      width: "50vw",
      height: "30vh",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      border: dragging || email ? "3px solid #387fc7" : "3px dashed #387fc7",
      backgroundColor: "white",
      margin: "50px",
      borderRadius: "3px",
      cursor: "pointer"
    }
  }), {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]])
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]])
  })), email ? __jsx("div", {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]]) + " " + "fileUploaded"
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["InsertDriveFileOutlined"], {
    style: {
      height: "8vh",
      width: "auto",
      color: "#397ec7"
    }
  }), " ", "FILE LOADED") : __jsx("div", {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]]) + " " + "fileUploaded"
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AttachFile"], {
    style: {
      height: "8vh",
      width: "auto",
      color: "#397ec7"
    }
  }), __jsx("p", {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]])
  }, "Drag 'n' drop some files here, or click to select files"))))), __jsx("button", {
    onClick: () => verify(email).then(setVerified).catch(setError),
    disabled: disabled,
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]])
  }, "Verify"), error ? __jsx("p", {
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]]) + " " + "error"
  }, "error: ", error) : verified.length > 0 ? verified.map(result => result.verified ? __jsx("h1", {
    key: result.name,
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]]) + " " + "verified"
  }, result.name, ": verified! \uD83C\uDF89") : __jsx("h1", {
    key: result.name,
    className: "jsx-2659604651 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["4003161", [disabled ? "0.5" : "1"]]]) + " " + "not-verified"
  }, result.name, ": not verified \uD83D\uDE14")) : "", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2659604651"
  }, "body{margin:0;padding:0;font-family:sans-serif;color:#003c7d;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmxhYnMtcGhwL0Rlc2t0b3AvcHJvamVjdHMvYW1iaXJlL2JzL3NvbGlkaXR5LWRraW0vc3JjL0hvbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKeUIsQUFHb0IsU0FDQyxVQUNhLHVCQUNULGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2RldmxhYnMtcGhwL0Rlc2t0b3AvcHJvamVjdHMvYW1iaXJlL2JzL3NvbGlkaXR5LWRraW0vc3JjL0hvbWUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgTWV0YW1hc2sgZnJvbSBcIi4vY29tcG9uZW50cy9NZXRhTWFza1wiO1xuaW1wb3J0IGV0aCBmcm9tIFwiLi9zdG9yZXMvZXRoXCI7XG5pbXBvcnQgeyBJbnNlcnREcml2ZUZpbGVPdXRsaW5lZCwgQXR0YWNoRmlsZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcbmltcG9ydCBwYXJzZUVtYWlsIGZyb20gXCIuLi9wYXJzZS1lbWFpbC9icm93c2VyXCI7XG5pbXBvcnQgdG9Tb2xpZGl0eSBmcm9tIFwiLi4vcGFyc2UtZW1haWwvdXRpbHMvdG9Tb2xpZGl0eVwiO1xuXG5jb25zdCB2ZXJpZnkgPSAoZW1haWw6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgREtJTSA9IGF3YWl0IGV0aC5nZXRDb250cmFjdChcIkRLSU1cIikuY2F0Y2gocmVqZWN0KTtcblxuICAgIGNvbnN0IGRraW1zID0gYXdhaXQgcGFyc2VFbWFpbChlbWFpbCk7XG5cbiAgICBjb25zdCBka2ltc0luQnl0ZXMgPSBka2ltcy5tYXAoZGtpbSA9PiB7XG4gICAgICByZXR1cm4gdG9Tb2xpZGl0eSh7XG4gICAgICAgIGFsZ29yaXRobTogZGtpbS5hbGdvcml0aG0sXG4gICAgICAgIGhhc2g6IGRraW0uaGFzaCxcbiAgICAgICAgc2lnbmF0dXJlOiBka2ltLnNpZ25hdHVyZS5zaWduYXR1cmUsXG4gICAgICAgIGV4cG9uZW50OiBka2ltLmV4cG9uZW50LFxuICAgICAgICBtb2R1bHVzOiBka2ltLm1vZHVsdXNcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gUHJvbWlzZS5hbGwoXG4gICAgICBka2ltc0luQnl0ZXMubWFwKChka2ltLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiBES0lNLnZlcmlmeShcbiAgICAgICAgICBka2ltLmFsZ29yaXRobSxcbiAgICAgICAgICBka2ltLmhhc2gsXG4gICAgICAgICAgZGtpbS5zaWduYXR1cmUsXG4gICAgICAgICAgZGtpbS5leHBvbmVudCxcbiAgICAgICAgICBka2ltLm1vZHVsdXNcbiAgICAgICAgKS50aGVuKHJlcyA9PiAoe1xuICAgICAgICAgIG5hbWU6IGRraW1zW2ldLmVudHJ5Lm5hbWUsXG4gICAgICAgICAgdmVyaWZpZWQ6IHJlc1tcIjBcIl1cbiAgICAgICAgfSkpO1xuICAgICAgfSlcbiAgICApLmNhdGNoKHJlamVjdCk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICB9KTtcbn07XG5cbmNvbnN0IEhvbWUgPSBvYnNlcnZlcigoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt2ZXJpZmllZCwgc2V0VmVyaWZpZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkaXNhYmxlZCA9XG4gICAgIWV0aC5pc0luc3RhbGxlZCB8fFxuICAgICEoZXRoLm5ldHdvcmsgPT09IFwic2Vwb2xpYVwiIHx8IGV0aC5uZXR3b3JrID09PSBcInVua25vd24gbmV0d29ya1wiKTtcblxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhmaWxlcyA9PiB7XG4gICAgc2V0RW1haWwobnVsbCk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgc2V0VmVyaWZpZWQoW10pO1xuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiBzZXRFcnJvcihcIm5vIGZpbGUgaW5jbHVkZWRcIik7XG4gICAgfVxuICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcblxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZWFkZXIub25hYm9ydCA9ICgpID0+IHNldEVycm9yKFwiZmlsZSByZWFkaW5nIHdhcyBhYm9ydGVkXCIpO1xuICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gc2V0RXJyb3IoXCJmaWxlIHJlYWRpbmcgaGFzIGZhaWxlZFwiKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gc2V0RW1haWwocmVhZGVyLnJlc3VsdCk7XG5cbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMj5zb2xpZGl0eS1ka2ltIGRlbW88L2gyPlxuXG4gICAgICA8TWV0YW1hc2sgLz5cbiAgICAgIDxEcm9wem9uZVxuICAgICAgICBvbkRyb3A9e29uRHJvcH1cbiAgICAgICAgbXVsdGlwbGU9e2ZhbHNlfVxuICAgICAgICBvbkRyYWdFbnRlcj17KCkgPT4gc2V0RHJhZyh0cnVlKX1cbiAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHNldERyYWcoZmFsc2UpfVxuICAgICAgPlxuICAgICAgICB7KHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0pID0+IChcbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwdndcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHZoXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjpcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmcgfHwgZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiM3B4IHNvbGlkICMzODdmYzdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCIzcHggZGFzaGVkICMzODdmYzdcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgICAge2VtYWlsID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZVVwbG9hZGVkXCI+XG4gICAgICAgICAgICAgICAgICA8SW5zZXJ0RHJpdmVGaWxlT3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjh2aFwiLCB3aWR0aDogXCJhdXRvXCIsIGNvbG9yOiBcIiMzOTdlYzdcIiB9fVxuICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICBGSUxFIExPQURFRFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZVVwbG9hZGVkXCI+XG4gICAgICAgICAgICAgICAgICA8QXR0YWNoRmlsZVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiOHZoXCIsIHdpZHRoOiBcImF1dG9cIiwgY29sb3I6IFwiIzM5N2VjN1wiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHA+RHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcHpvbmU+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICB2ZXJpZnkoZW1haWwpXG4gICAgICAgICAgICAudGhlbihzZXRWZXJpZmllZClcbiAgICAgICAgICAgIC5jYXRjaChzZXRFcnJvcilcbiAgICAgICAgfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIFZlcmlmeVxuICAgICAgPC9idXR0b24+XG4gICAgICB7ZXJyb3IgPyAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+ZXJyb3I6IHtlcnJvcn08L3A+XG4gICAgICApIDogdmVyaWZpZWQubGVuZ3RoID4gMCA/IChcbiAgICAgICAgdmVyaWZpZWQubWFwKHJlc3VsdCA9PlxuICAgICAgICAgIHJlc3VsdC52ZXJpZmllZCA/IChcbiAgICAgICAgICAgIDxoMSBrZXk9e3Jlc3VsdC5uYW1lfSBjbGFzc05hbWU9XCJ2ZXJpZmllZFwiPlxuICAgICAgICAgICAgICB7cmVzdWx0Lm5hbWV9OiB2ZXJpZmllZCEg8J+OiVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGgxIGtleT17cmVzdWx0Lm5hbWV9IGNsYXNzTmFtZT1cIm5vdC12ZXJpZmllZFwiPlxuICAgICAgICAgICAgICB7cmVzdWx0Lm5hbWV9OiBub3QgdmVyaWZpZWQg8J+YlFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjMDAzYzdkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzk3ZWM3O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAke2Rpc2FibGVkID8gXCIwLjVcIiA6IFwiMVwifTtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiAjZDYwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC52ZXJpZmllZCB7XG4gICAgICAgICAgY29sb3I6ICMwMGJiMzk7XG4gICAgICAgIH1cbiAgICAgICAgLm5vdC12ZXJpZmllZCB7XG4gICAgICAgICAgY29sb3I6ICNkNjAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbGVVcGxvYWRlZCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnZoO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/devlabs-php/Desktop/projects/ambire/bs/solidity-dkim/src/Home.tsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4003161",
    dynamic: [disabled ? "0.5" : "1"]
  }, `.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:100vw;height:100vh;background:aliceblue;}h2.__jsx-style-dynamic-selector{margin-top:100px;margin-bottom:30px;}button.__jsx-style-dynamic-selector{height:30px;width:120px;border-radius:3px;background:#397ec7;color:white;border:none;font-family:sans-serif;font-size:16px;cursor:pointer;opacity:${disabled ? "0.5" : "1"};}.error.__jsx-style-dynamic-selector{color:#d60000;}.verified.__jsx-style-dynamic-selector{color:#00bb39;}.not-verified.__jsx-style-dynamic-selector{color:#d60000;}.fileUploaded.__jsx-style-dynamic-selector{height:12vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmxhYnMtcGhwL0Rlc2t0b3AvcHJvamVjdHMvYW1iaXJlL2JzL3NvbGlkaXR5LWRraW0vc3JjL0hvbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtLa0IsQUFHd0IsQUFTSSxBQU1MLEFBWUUsQUFHQSxBQUdBLEFBR0YsWUFwQkEsQUFxQlcsRUFUekIsQUFHQSxBQUdBLEdBeEJxQixPQU9ELFlBTnBCLE1BT3FCLG1CQUNQLFlBQ0EsQ0FuQlUsV0FvQkMsdUJBQ1IsR0FnQkksWUFmSixlQUNzQixjQXRCbEIsdUJBdUJyQiw2QkFjZSx5Q0FwQ2MsaUNBcUNMLHdFQXBDVixNQXFDZCxNQXBDZSxhQUNRLHFCQUN2QiIsImZpbGUiOiIvaG9tZS9kZXZsYWJzLXBocC9EZXNrdG9wL3Byb2plY3RzL2FtYmlyZS9icy9zb2xpZGl0eS1ka2ltL3NyYy9Ib21lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xuaW1wb3J0IE1ldGFtYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTWV0YU1hc2tcIjtcbmltcG9ydCBldGggZnJvbSBcIi4vc3RvcmVzL2V0aFwiO1xuaW1wb3J0IHsgSW5zZXJ0RHJpdmVGaWxlT3V0bGluZWQsIEF0dGFjaEZpbGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5pbXBvcnQgcGFyc2VFbWFpbCBmcm9tIFwiLi4vcGFyc2UtZW1haWwvYnJvd3NlclwiO1xuaW1wb3J0IHRvU29saWRpdHkgZnJvbSBcIi4uL3BhcnNlLWVtYWlsL3V0aWxzL3RvU29saWRpdHlcIjtcblxuY29uc3QgdmVyaWZ5ID0gKGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IERLSU0gPSBhd2FpdCBldGguZ2V0Q29udHJhY3QoXCJES0lNXCIpLmNhdGNoKHJlamVjdCk7XG5cbiAgICBjb25zdCBka2ltcyA9IGF3YWl0IHBhcnNlRW1haWwoZW1haWwpO1xuXG4gICAgY29uc3QgZGtpbXNJbkJ5dGVzID0gZGtpbXMubWFwKGRraW0gPT4ge1xuICAgICAgcmV0dXJuIHRvU29saWRpdHkoe1xuICAgICAgICBhbGdvcml0aG06IGRraW0uYWxnb3JpdGhtLFxuICAgICAgICBoYXNoOiBka2ltLmhhc2gsXG4gICAgICAgIHNpZ25hdHVyZTogZGtpbS5zaWduYXR1cmUuc2lnbmF0dXJlLFxuICAgICAgICBleHBvbmVudDogZGtpbS5leHBvbmVudCxcbiAgICAgICAgbW9kdWx1czogZGtpbS5tb2R1bHVzXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IFByb21pc2UuYWxsKFxuICAgICAgZGtpbXNJbkJ5dGVzLm1hcCgoZGtpbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gREtJTS52ZXJpZnkoXG4gICAgICAgICAgZGtpbS5hbGdvcml0aG0sXG4gICAgICAgICAgZGtpbS5oYXNoLFxuICAgICAgICAgIGRraW0uc2lnbmF0dXJlLFxuICAgICAgICAgIGRraW0uZXhwb25lbnQsXG4gICAgICAgICAgZGtpbS5tb2R1bHVzXG4gICAgICAgICkudGhlbihyZXMgPT4gKHtcbiAgICAgICAgICBuYW1lOiBka2ltc1tpXS5lbnRyeS5uYW1lLFxuICAgICAgICAgIHZlcmlmaWVkOiByZXNbXCIwXCJdXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgKS5jYXRjaChyZWplY3QpO1xuXG4gICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBIb21lID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdmVyaWZpZWQsIHNldFZlcmlmaWVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzYWJsZWQgPVxuICAgICFldGguaXNJbnN0YWxsZWQgfHxcbiAgICAhKGV0aC5uZXR3b3JrID09PSBcInNlcG9saWFcIiB8fCBldGgubmV0d29yayA9PT0gXCJ1bmtub3duIG5ldHdvcmtcIik7XG5cbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soZmlsZXMgPT4ge1xuICAgIHNldEVtYWlsKG51bGwpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIHNldFZlcmlmaWVkKFtdKTtcblxuICAgIGlmIChmaWxlcy5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IoXCJubyBmaWxlIGluY2x1ZGVkXCIpO1xuICAgIH1cbiAgICBjb25zdCBmaWxlID0gZmlsZXNbMF07XG5cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9uYWJvcnQgPSAoKSA9PiBzZXRFcnJvcihcImZpbGUgcmVhZGluZyB3YXMgYWJvcnRlZFwiKTtcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHNldEVycm9yKFwiZmlsZSByZWFkaW5nIGhhcyBmYWlsZWRcIik7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHNldEVtYWlsKHJlYWRlci5yZXN1bHQpO1xuXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDI+c29saWRpdHktZGtpbSBkZW1vPC9oMj5cblxuICAgICAgPE1ldGFtYXNrIC8+XG4gICAgICA8RHJvcHpvbmVcbiAgICAgICAgb25Ecm9wPXtvbkRyb3B9XG4gICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgb25EcmFnRW50ZXI9eygpID0+IHNldERyYWcodHJ1ZSl9XG4gICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiBzZXREcmFnKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgeyh7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9KSA9PiAoXG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoe1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MHZ3XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzB2aFwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nIHx8IGVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIjNweCBzb2xpZCAjMzg3ZmM3XCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiM3B4IGRhc2hlZCAjMzg3ZmM3XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICAgIHtlbWFpbCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVVcGxvYWRlZFwiPlxuICAgICAgICAgICAgICAgICAgPEluc2VydERyaXZlRmlsZU91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI4dmhcIiwgd2lkdGg6IFwiYXV0b1wiLCBjb2xvcjogXCIjMzk3ZWM3XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgRklMRSBMT0FERURcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVVcGxvYWRlZFwiPlxuICAgICAgICAgICAgICAgICAgPEF0dGFjaEZpbGVcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjh2aFwiLCB3aWR0aDogXCJhdXRvXCIsIGNvbG9yOiBcIiMzOTdlYzdcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICA8L0Ryb3B6b25lPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgdmVyaWZ5KGVtYWlsKVxuICAgICAgICAgICAgLnRoZW4oc2V0VmVyaWZpZWQpXG4gICAgICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgICAgIH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICBWZXJpZnlcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2Vycm9yID8gKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvclwiPmVycm9yOiB7ZXJyb3J9PC9wPlxuICAgICAgKSA6IHZlcmlmaWVkLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIHZlcmlmaWVkLm1hcChyZXN1bHQgPT5cbiAgICAgICAgICByZXN1bHQudmVyaWZpZWQgPyAoXG4gICAgICAgICAgICA8aDEga2V5PXtyZXN1bHQubmFtZX0gY2xhc3NOYW1lPVwidmVyaWZpZWRcIj5cbiAgICAgICAgICAgICAge3Jlc3VsdC5uYW1lfTogdmVyaWZpZWQhIPCfjolcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoMSBrZXk9e3Jlc3VsdC5uYW1lfSBjbGFzc05hbWU9XCJub3QtdmVyaWZpZWRcIj5cbiAgICAgICAgICAgICAge3Jlc3VsdC5uYW1lfTogbm90IHZlcmlmaWVkIPCfmJRcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogIzAwM2M3ZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM5N2VjNztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogJHtkaXNhYmxlZCA/IFwiMC41XCIgOiBcIjFcIn07XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogI2Q2MDAwMDtcbiAgICAgICAgfVxuICAgICAgICAudmVyaWZpZWQge1xuICAgICAgICAgIGNvbG9yOiAjMDBiYjM5O1xuICAgICAgICB9XG4gICAgICAgIC5ub3QtdmVyaWZpZWQge1xuICAgICAgICAgIGNvbG9yOiAjZDYwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5maWxlVXBsb2FkZWQge1xuICAgICAgICAgIGhlaWdodDogMTJ2aDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */
/*@ sourceURL=/home/devlabs-php/Desktop/projects/ambire/bs/solidity-dkim/src/Home.tsx */`));
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/MetaMask.tsx":
/*!*************************************!*\
  !*** ./src/components/MetaMask.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_eth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/eth */ "./src/stores/eth.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const GetText = ({
  isInstalled,
  isLoggedIn,
  account,
  network
}) => {
  if (!isInstalled) {
    return __jsx("a", {
      href: "https://metamask.io/",
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        color: "#387fc7",
        textDecoration: "none"
      }
    }, "INSTALL METAMASK");
  }

  return __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, account ? __jsx("div", {
    style: {
      paddingRight: "1vh"
    }
  }, `[${account}]`) : null, __jsx("div", null, network));
};

const Metamask = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(() => {
  const {
    isLoggedIn
  } = _stores_eth__WEBPACK_IMPORTED_MODULE_3__["default"];
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["792589829", [isLoggedIn ? "#56A2BA" : "#387fc7", isLoggedIn ? "#56A2BA" : "#387fc7"]]]) + " " + "metamaskStatus"
  }, __jsx("img", {
    src: "/static/images/metamask.png",
    alt: "Metamask Logo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["792589829", [isLoggedIn ? "#56A2BA" : "#387fc7", isLoggedIn ? "#56A2BA" : "#387fc7"]]]) + " " + "img"
  }), GetText(_stores_eth__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "792589829",
    dynamic: [isLoggedIn ? "#56A2BA" : "#387fc7", isLoggedIn ? "#56A2BA" : "#387fc7"]
  }, `.img.__jsx-style-dynamic-selector{width:4vh;height:4vh;padding-right:1vh;}.metamaskStatus.__jsx-style-dynamic-selector{background-color:#fafafa;border:1px solid ${isLoggedIn ? "#56A2BA" : "#387fc7"};color:${isLoggedIn ? "#56A2BA" : "#387fc7"};border-radius:3px;padding-left:2vh;padding-right:2vh;font-size:calc(12px + 0.4vw);height:4.5vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmxhYnMtcGhwL0Rlc2t0b3AvcHJvamVjdHMvYW1iaXJlL2JzL3NvbGlkaXR5LWRraW0vc3JjL2NvbXBvbmVudHMvTWV0YU1hc2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFHcUIsQUFLZSxVQUpkLFdBQ08sSUFJNEIsY0FIaEQsZ0NBSXFDLG1DQUNqQixrQkFDRCxpQkFDQyxrQkFDVyw2QkFDaEIsYUFDQSwwRUFDTSxxRUFDVSwySEFDViw2RkFDckIiLCJmaWxlIjoiL2hvbWUvZGV2bGFicy1waHAvRGVza3RvcC9wcm9qZWN0cy9hbWJpcmUvYnMvc29saWRpdHktZGtpbS9zcmMvY29tcG9uZW50cy9NZXRhTWFzay50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5pbXBvcnQgZXRoU3RvcmUgZnJvbSBcIi4uL3N0b3Jlcy9ldGhcIjtcblxuY29uc3QgR2V0VGV4dCA9ICh7XG4gIGlzSW5zdGFsbGVkLFxuICBpc0xvZ2dlZEluLFxuICBhY2NvdW50LFxuICBuZXR3b3JrXG59OiB0eXBlb2YgZXRoU3RvcmUpID0+IHtcbiAgaWYgKCFpc0luc3RhbGxlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9tZXRhbWFzay5pby9cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzM4N2ZjN1wiLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgID5cbiAgICAgICAgSU5TVEFMTCBNRVRBTUFTS1xuICAgICAgPC9hPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIgfX0+XG4gICAgICB7YWNjb3VudCA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiMXZoXCIgfX0+e2BbJHthY2NvdW50fV1gfTwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxkaXY+e25ldHdvcmt9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBNZXRhbWFzayA9IG9ic2VydmVyKCgpID0+IHtcbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSBldGhTdG9yZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YW1hc2tTdGF0dXNcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbWV0YW1hc2sucG5nXCJcbiAgICAgICAgYWx0PVwiTWV0YW1hc2sgTG9nb1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAvPlxuICAgICAge0dldFRleHQoZXRoU3RvcmUpfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIHdpZHRoOiA0dmg7XG4gICAgICAgICAgaGVpZ2h0OiA0dmg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMXZoO1xuICAgICAgICB9XG4gICAgICAgIC5tZXRhbWFza1N0YXR1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2lzTG9nZ2VkSW4gPyBcIiM1NkEyQkFcIiA6IFwiIzM4N2ZjN1wifTtcbiAgICAgICAgICBjb2xvcjogJHtpc0xvZ2dlZEluID8gXCIjNTZBMkJBXCIgOiBcIiMzODdmYzdcIn07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnZoO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJ2aDtcbiAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNHZ3KTtcbiAgICAgICAgICBoZWlnaHQ6IDQuNXZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YW1hc2s7XG4iXX0= */
/*@ sourceURL=/home/devlabs-php/Desktop/projects/ambire/bs/solidity-dkim/src/components/MetaMask.tsx */`));
});
/* harmony default export */ __webpack_exports__["default"] = (Metamask);

/***/ }),

/***/ "./src/models/Eth/getContract.ts":
/*!***************************************!*\
  !*** ./src/models/Eth/getContract.ts ***!
  \***************************************/
/*! exports provided: getContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContract", function() { return getContract; });
const definitions = {
  DKIM: null
};

const getContract = async (eth, name) => {
  if (!definitions[name]) {
    const data = await __webpack_require__("./contracts lazy recursive ^\\.\\/.*\\.json$")(`./${name}.json`);
    definitions[name] = data;
  }

  const networkId = Number(eth.currentProvider.networkVersion);
  const networkData = definitions[name].networks[networkId];

  if (!networkData) {
    throw Error("contract address not found");
  }

  const contract = new eth.contract(definitions[name].abi);
  return contract.at(networkData.address);
};



/***/ }),

/***/ "./src/models/Eth/getEth.ts":
/*!**********************************!*\
  !*** ./src/models/Eth/getEth.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethjs */ "ethjs");
/* harmony import */ var ethjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethjs__WEBPACK_IMPORTED_MODULE_1__);



const check = () => {
  const {
    web3
  } = window;
  const foundInWindow = typeof web3 !== "undefined";

  if (!foundInWindow) {
    console.log(`No web3 instance injected.`);
    return undefined;
  }

  console.log(`Injected web3 detected.`);
  return new ethjs__WEBPACK_IMPORTED_MODULE_1___default.a(web3.currentProvider);
};

const getEth = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(resolve => {
    // If document has loaded already, try to get Web3 immediately.
    if (document.readyState === "complete") {
      return resolve(check());
    } // Wait for loading completion to avoid race conditions with web3 injection timing.


    window.addEventListener(`load`, () => {
      resolve(check());
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getEth);

/***/ }),

/***/ "./src/models/Eth/index.ts":
/*!*********************************!*\
  !*** ./src/models/Eth/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getEth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getEth */ "./src/models/Eth/getEth.ts");
/* harmony import */ var _getContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getContract */ "./src/models/Eth/getContract.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");




const Model = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("Eth", {
  isInstalled: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean),
  account: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  networkId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number)
}).views(self => ({
  get isLoggedIn() {
    return self.account !== null;
  },

  get network() {
    if (self.networkId === 1) {
      return "mainnet";
    } else if (self.networkId === 2) {
      return "morden";
    } else if (self.networkId === 11155111) {
      return "sepolia";
    }

    return "unknown network";
  }

})).actions(self => {
  let eth;
  return {
    _getEth() {
      return eth;
    },

    getEth() {
      if (!eth) {
        throw Error("eth not initialized");
      }

      return eth;
    },

    setEth(_eth) {
      eth = _eth;
    }

  };
}).actions(self => ({
  sync: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["flow"])(function* () {
    if (_utils__WEBPACK_IMPORTED_MODULE_3__["isSSR"]) {
      return;
    } // not found, check window


    if (!self._getEth()) {
      self.setEth((yield Object(_getEth__WEBPACK_IMPORTED_MODULE_1__["default"])()));
    }

    const eth = self._getEth(); // not found


    if (typeof eth === "undefined") {
      self.isInstalled = false;
      return;
    }

    self.isInstalled = true;
    self.setEth(eth);
    const accounts = (yield eth.accounts()) || [];
    self.account = accounts[0] || null;
    const networkId = Number(eth.currentProvider.networkVersion);
    self.networkId = networkId;
  }),

  getContract(name) {
    const eth = self.getEth();
    return Object(_getContract__WEBPACK_IMPORTED_MODULE_2__["getContract"])(eth, name);
  }

}));
/* harmony default export */ __webpack_exports__["default"] = (Model);

/***/ }),

/***/ "./src/stores/eth.ts":
/*!***************************!*\
  !*** ./src/stores/eth.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Eth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Eth */ "./src/models/Eth/index.ts");

const eth = _models_Eth__WEBPACK_IMPORTED_MODULE_0__["default"].create();
eth.sync();
setInterval(() => eth.sync(), 1e3);
/* harmony default export */ __webpack_exports__["default"] = (eth);

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: isSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSSR", function() { return isSSR; });
const isSSR = true;

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/devlabs-php/Desktop/projects/ambire/bs/solidity-dkim/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "dkim-signature":
/*!*********************************!*\
  !*** external "dkim-signature" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dkim-signature");

/***/ }),

/***/ "dkim/lib/process-body":
/*!****************************************!*\
  !*** external "dkim/lib/process-body" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dkim/lib/process-body");

/***/ }),

/***/ "dkim/lib/process-header":
/*!******************************************!*\
  !*** external "dkim/lib/process-header" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dkim/lib/process-header");

/***/ }),

/***/ "ethjs":
/*!************************!*\
  !*** external "ethjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethjs");

/***/ }),

/***/ "jshashes":
/*!***************************!*\
  !*** external "jshashes" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jshashes");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-state-tree":
/*!**********************************!*\
  !*** external "mobx-state-tree" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "node-rsa":
/*!***************************!*\
  !*** external "node-rsa" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-rsa");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map