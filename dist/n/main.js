(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TXODDS\gitee\yubi-angular-admin\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FjO5":
/*!********************************!*\
  !*** ./src/app/_store/base.ts ***!
  \********************************/
/*! exports provided: Module, useUserService, useRouter, use */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserService", function() { return useUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
// imports
const imports = {};
class Module {
    constructor(state, action) {
        this.state = state;
        this.actionFunc = action;
    }
    get action() {
        return this.actionFunc;
    }
}
const useUserService = (service) => {
    imports.userService = service;
};
const useRouter = (r) => {
    imports.router = r;
};
const use = () => {
    return imports;
};


/***/ }),

/***/ "P22x":
/*!*************************************************!*\
  !*** ./src/app/_api/http-interceptors/index.ts ***!
  \*************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop-interceptor */ "WA65");


/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__["NoopInterceptor"], multi: true },
];


/***/ }),

/***/ "SD4S":
/*!***************************************!*\
  !*** ./src/app/_guard/Permissions.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/user */ "ki88");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




// 一定要加这个
class LoginGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(router, state) {
        console.log(router);
        console.log(state);
        if (_store_user__WEBPACK_IMPORTED_MODULE_1__["userModule"].userID && _store_user__WEBPACK_IMPORTED_MODULE_1__["userModule"].tokenID) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
        // return loggedIn;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/user */ "ki88");
/* harmony import */ var _store_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/base */ "FjO5");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/user */ "zRU0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(userService, router) {
        // This is necessary for use store
        Object(_store_base__WEBPACK_IMPORTED_MODULE_2__["useUserService"])(userService);
        Object(_store_base__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(router);
    }
    ngOnInit() {
        _store_user__WEBPACK_IMPORTED_MODULE_1__["userModule"].action.init();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_user__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _api_user__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "WA65":
/*!************************************************************!*\
  !*** ./src/app/_api/http-interceptors/noop-interceptor.ts ***!
  \************************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class NoopInterceptor {
    intercept(req, next) {
        // 通过拦截器拦截 api/login 请求
        if (req.url === 'api/login') {
            console.log('this is login');
            // 自己提供数据
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                status: 200,
                url: req.url,
                body: {
                    msg: 'Hello',
                    success: true,
                    token: 'admin-token',
                    tokenID: 1
                }
            }));
        }
        else {
            return next.handle(req);
        }
    }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoopInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_http_interceptors_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @api/http-interceptors/index */ "P22x");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // 拦截器
        _api_http_interceptors_index__WEBPACK_IMPORTED_MODULE_8__["httpInterceptorProviders"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ],
                providers: [
                    // 拦截器
                    _api_http_interceptors_index__WEBPACK_IMPORTED_MODULE_8__["httpInterceptorProviders"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kVn5":
/*!*******************************!*\
  !*** ./src/_utils/storage.ts ***!
  \*******************************/
/*! exports provided: getUserID, setUserID, removeUserID, getUserTokenID, setUserTokenID, removeUserTokenID, getLocalLang, setLocalLang, removeLocalLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserID", function() { return getUserID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserID", function() { return setUserID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserID", function() { return removeUserID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserTokenID", function() { return getUserTokenID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserTokenID", function() { return setUserTokenID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserTokenID", function() { return removeUserTokenID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalLang", function() { return getLocalLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalLang", function() { return setLocalLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalLang", function() { return removeLocalLang; });
const BASE = 'ng-yubi-template';
const USERID_KEY = 'userid';
const USERTOKENID_KEY = 'user-tokenid';
const LOCAL_LANG_KEY = 'local-lang';
const getUserID = () => localStorage.getItem(BASE + '-' + USERID_KEY);
const setUserID = (userID) => localStorage.setItem(BASE + '-' + USERID_KEY, userID);
const removeUserID = () => localStorage.removeItem(BASE + '-' + USERID_KEY);
// tslint:disable-next-line: radix
const getUserTokenID = () => parseInt(localStorage.getItem(BASE + '-' + USERTOKENID_KEY) || '0');
const setUserTokenID = (tokenID) => localStorage.setItem(BASE + '-' + USERTOKENID_KEY, tokenID);
const removeUserTokenID = () => localStorage.removeItem(BASE + '-' + USERTOKENID_KEY);
const getLocalLang = () => localStorage.getItem(BASE + '-' + LOCAL_LANG_KEY);
const setLocalLang = (lang) => localStorage.setItem(BASE + '-' + LOCAL_LANG_KEY, lang);
const removeLocalLang = () => localStorage.removeItem(BASE + '-' + LOCAL_LANG_KEY);


/***/ }),

/***/ "ki88":
/*!********************************!*\
  !*** ./src/app/_store/user.ts ***!
  \********************************/
/*! exports provided: userModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userModule", function() { return userModule; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "FjO5");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/storage */ "kVn5");


const tool = Object(_base__WEBPACK_IMPORTED_MODULE_0__["use"])();
const userState = {
    userID: 'test',
    userPwd: '',
    token: 'g',
    tokenID: 0
};
const userAction = {
    setUserID: (userID) => {
        userState.userID = userID;
    },
    login: (userID, passID, remember = false) => {
        var _a;
        let success = false;
        (_a = tool.userService) === null || _a === void 0 ? void 0 : _a.login(userID, passID).subscribe((res) => {
            var _a;
            // tslint:disable-next-line: no-conditional-assignment
            if (success = res.success) {
                userAction.setUserID(userID);
                userState.token = res.token;
                userState.tokenID = res.tokenID;
                if (remember) {
                    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["setUserID"])(userID);
                    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["setUserTokenID"])(res.tokenID);
                }
                (_a = tool.router) === null || _a === void 0 ? void 0 : _a.navigateByUrl('/');
            }
        });
        return success;
    },
    logout: () => {
        var _a;
        Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["removeUserID"])();
        Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["removeUserTokenID"])();
        userState.userID = '';
        userState.tokenID = 0;
        (_a = tool.router) === null || _a === void 0 ? void 0 : _a.navigateByUrl('/login');
    },
    init: () => {
        userState.userID = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["getUserID"])() || '';
        userState.tokenID = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["getUserTokenID"])() || 0;
    }
};
class UserModule extends _base__WEBPACK_IMPORTED_MODULE_0__["Module"] {
    constructor() {
        super(userState, userAction);
    }
    get userID() {
        return this.state.userID;
    }
    get userPwd() {
        return this.state.userPwd;
    }
    get tokenID() {
        return this.state.tokenID;
    }
    get token() {
        return this.state.token;
    }
}
const userModule = new UserModule();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guard_Permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_guard/Permissions */ "SD4S");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'pages' },
    { path: 'pages', loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~others-login-login-module~others-not-found-not-found-module~pages-pages-module"), __webpack_require__.e("default~others-login-login-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule), canActivate: [_guard_Permissions__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'login', loadChildren: () => Promise.all(/*! import() | others-login-login-module */[__webpack_require__.e("default~others-login-login-module~others-not-found-not-found-module~pages-pages-module"), __webpack_require__.e("default~others-login-login-module~pages-pages-module"), __webpack_require__.e("others-login-login-module")]).then(__webpack_require__.bind(null, /*! ./others/login/login.module */ "IkKh")).then(m => m.LoginModule) },
    { path: '**', loadChildren: () => Promise.all(/*! import() | others-not-found-not-found-module */[__webpack_require__.e("default~others-login-login-module~others-not-found-not-found-module~pages-pages-module"), __webpack_require__.e("default~others-not-found-not-found-module~table-table-module"), __webpack_require__.e("others-not-found-not-found-module")]).then(__webpack_require__.bind(null, /*! ./others/not-found/not-found.module */ "O5Zn")).then(m => m.NotFoundModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_guard_Permissions__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_guard_Permissions__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zRU0":
/*!******************************!*\
  !*** ./src/app/_api/user.ts ***!
  \******************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class UserService {
    constructor(http) {
        this.http = http;
        this.URL_LOGIN = 'api/login';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    login(userID, passID) {
        console.log('service');
        return this.http.post(this.URL_LOGIN, { userID, passID }, this.httpOptions).pipe(
        // RxJS 的 tap() 操作符来实现，该操作符会查看 Observable 中的值，使用那些值做一些事情，并且把它们传出来。 这种 tap() 回调不会改变这些值本身。
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((next) => {
            console.log('next');
            console.log(next);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('loginError', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            console.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map