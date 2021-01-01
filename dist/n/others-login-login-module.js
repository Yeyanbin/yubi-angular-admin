(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["others-login-login-module"],{

/***/ "IkKh":
/*!**********************************************!*\
  !*** ./src/app/others/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "RIt+");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "weO1");
/* harmony import */ var _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @module/yubi-form/yubi-form.module */ "nBK/");






class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
            _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__["YubiFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
        _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__["YubiFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                    _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__["YubiFormModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RIt+":
/*!******************************************************!*\
  !*** ./src/app/others/login/login-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "weO1");





const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dPtE":
/*!**********************************************!*\
  !*** ./src/app/others/login/login.config.ts ***!
  \**********************************************/
/*! exports provided: loginFormConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFormConfig", function() { return loginFormConfig; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/user */ "ki88");


// const userModule = getUserModule();
const loginFormConfig = {
    class: ['login-form'],
    showFormData: true,
    width: 300,
    formName: 'Login',
    formControlItems: [
        {
            formControlType: 'input',
            formControlName: 'userName',
            // labelSpan: 0,
            // controlSpan: 24,
            span: 24,
            default: null,
            preContent: '',
            nzTip: {
                error: 'Please input your username!',
            },
            inputType: 'text',
            inputIcon: 'user',
            placeholder: 'Username',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]
        },
        {
            formControlType: 'input',
            formControlName: 'password',
            span: 24,
            default: null,
            preContent: '',
            nzTip: {
                error: 'Please input your Password!',
            },
            inputType: 'password',
            inputIcon: 'lock',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]
        },
        {
            formControlType: 'checkbox',
            formControlName: 'remember',
            span: 12,
            default: true,
            preContent: '',
            nzTip: {},
            content: 'Remember me',
            validators: []
        }
    ],
    otherItems: [
        {
            extendType: 'a',
            span: 12,
            class: [
                'login-form-forgot'
            ],
            content: 'Forgot password'
        },
        {
            extendType: 'button',
            span: 24,
            buttonType: 'primary',
            content: 'Log in',
            class: [
                'login-form-button',
                'login-form-margin'
            ],
            clickFunc: (validateForm) => {
                // login function
                const params = validateForm.value;
                const success = _store_user__WEBPACK_IMPORTED_MODULE_1__["userModule"].action.login(params.userName, params.password, params.remember);
                if (success) {
                    // true
                }
                else {
                    // false
                }
            },
        },
        {
            extendType: 'a',
            span: 12,
            class: [],
            content: 'register now!'
        }
    ]
};


/***/ }),

/***/ "weO1":
/*!*************************************************!*\
  !*** ./src/app/others/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.config */ "dPtE");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/user */ "zRU0");
/* harmony import */ var _module_yubi_form_yubi_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_module/yubi-form/yubi-form.component */ "G4ah");





class LoginComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.loginFormConfig = _login_config__WEBPACK_IMPORTED_MODULE_1__["loginFormConfig"];
    }
    login() {
        console.log('click');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_user__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 1, consts: [[1, "login-container"], [3, "FormConfig"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-yubi-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("FormConfig", ctx.loginFormConfig);
    } }, directives: [_module_yubi_form_yubi_form_component__WEBPACK_IMPORTED_MODULE_3__["YubiFormComponent"]], styles: [".login-container[_ngcontent-%COMP%] {\n  top: 50%;\n  position: absolute;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: -250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yNTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _api_user__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=others-login-login-module.js.map