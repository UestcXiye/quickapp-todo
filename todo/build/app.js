(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.application.demo","name":"quickapp-todo","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1070","icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"service.asr"},{"name":"system.vibrator"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"pages/main","pages":{"pages/main":{"component":"index"},"pages/add":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true}}
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\\Users\\81228\\Desktop\\小米实习\\TODO\\src!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\\Users\\81228\\Desktop\\小米实习\\TODO&cacheDirectory&comments=false&configFile=c:\\Users\\81228\\Desktop\\小米实习\\TODO\\babel.config.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\Users\81228\Desktop\小米实习\TODO\src!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\Users\81228\Desktop\小米实习\TODO&cacheDirectory&comments=false&configFile=c:\Users\81228\Desktop\小米实习\TODO\babel.config.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./global */ "./src/global.js");

var _util = _interopRequireDefault(__webpack_require__(/*! ./util */ "./src/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  showMenu: _util.default.showMenu,
  createShortcut: _util.default.createShortcut,
  makeToast: _util.default.makeToast
};
exports.default = _default;}

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.application.demo","name":"quickapp-todo","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1070","icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"service.asr"},{"name":"system.vibrator"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"pages/main","pages":{"pages/main":{"component":"index"},"pages/add":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true}}');

/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setGlobalData = setGlobalData;
exports.getGlobalData = getGlobalData;

/**
 * @file 全局能力的配置与获取
 */
function getGlobalRef() {
  return Object.getPrototypeOf(__webpack_require__.g) || __webpack_require__.g;
}

const quickappGlobal = getGlobalRef();
/**
 * 设置全局(被APP与Page共享)数据；
 * @param key {string}
 * @param val {*}
 */

function setGlobalData(key, val) {
  quickappGlobal[key] = val;
}
/**
 * 获取全局(被APP与Page共享)数据；
 * @param key {string}
 * @return {*}
 */


function getGlobalData(key) {
  return quickappGlobal[key];
} // 两个方法默认定义在全局


setGlobalData('setGlobalData', setGlobalData);
setGlobalData('getGlobalData', getGlobalData);

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * 显示菜单
 */
function showMenu() {
  const prompt = $app_require$('@app-module/system.prompt');

  prompt.showContextMenu({
    itemList: ['保存桌面', '取消'],
    success: function (ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;

        case 1:
          // 取消
          break;

        default:
          prompt.showToast({
            message: 'error'
          });
      }
    }
  });
}
/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */


function createShortcut() {
  const prompt = $app_require$('@app-module/system.prompt');

  const shortcut = $app_require$('@app-module/system.shortcut');

  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`
            });
          }
        });
      }
    }
  });
} //方便处理toast


function makeToast(msg) {
  const prompt = $app_require$('@app-module/system.prompt');

  prompt.showToast({
    message: msg
  });
}

var _default = {
  showMenu,
  createShortcut,
  makeToast
};
exports.default = _default;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\Users\81228\Desktop\小米实习\TODO\src!../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\Users\81228\Desktop\小米实习\TODO&cacheDirectory&comments=false&configFile=c:\Users\81228\Desktop\小米实习\TODO\babel.config.js!../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\\Users\\81228\\Desktop\\小米实习\\TODO\\src!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\\Users\\81228\\Desktop\\小米实习\\TODO&cacheDirectory&comments=false&configFile=c:\\Users\\81228\\Desktop\\小米实习\\TODO\\babel.config.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "1.9.4" })

})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();