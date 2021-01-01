(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "DtxW":
/*!***************************************************!*\
  !*** ./src/app/pages/form/form-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function() { return FormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ "UcOo");





const routes = [{ path: '', component: _form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] }];
class FormRoutingModule {
}
FormRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormRoutingModule });
FormRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormRoutingModule_Factory(t) { return new (t || FormRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Oo3C":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-routing.module */ "DtxW");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "UcOo");
/* harmony import */ var _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @module/yubi-form/yubi-form.module */ "nBK/");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");








class FormModule {
}
FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _form_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormRoutingModule"],
            _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__["YubiFormModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _form_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormRoutingModule"],
        _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__["YubiFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _form_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormRoutingModule"],
                    _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_4__["YubiFormModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "TVQl":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.config.ts ***!
  \*******************************************/
/*! exports provided: loginFormConfig, searchFormConfig, PersonFormConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFormConfig", function() { return loginFormConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFormConfig", function() { return searchFormConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonFormConfig", function() { return PersonFormConfig; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/endOfMonth */ "jKzE");


// 验证器
const NumberValidator = (control) => {
    // const forbidden = nameRe.test(control.value);
    // return forbidden ? {forbiddenName: {value: control.value}} : null;
    return !Number(control.value) ? { forbiddenName: { value: control.value } } : null;
};
const loginFormConfig = {
    class: ['login-form'],
    showFormData: true,
    width: 300,
    formName: 'Login',
    formControlItems: [
        {
            formControlType: 'input',
            formControlName: 'userName',
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
                console.log(validateForm.value);
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
const searchFormConfig = {
    class: [],
    showFormData: true,
    width: 500,
    formName: 'Search',
    formControlItems: [
        {
            formControlType: 'input',
            formControlName: 'bookID',
            span: 12,
            default: null,
            label: 'Book ID',
            nzTip: {
                error: 'Please input bookID!',
            },
            inputType: 'text',
            inputIcon: '',
            placeholder: '',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]
        },
        {
            formControlType: 'input',
            formControlName: 'sportID',
            span: 12,
            default: null,
            label: ' Sport',
            nzTip: {
                error: 'Please input sportID!',
            },
            inputType: 'text',
            inputIcon: '',
            placeholder: '',
            validators: [
            // Validators.required
            ]
        },
        {
            formControlType: 'input',
            formControlName: 'author',
            span: 12,
            default: null,
            label: ' Author',
            nzTip: {
                error: 'Please input author!',
            },
            inputType: 'text',
            inputIcon: '',
            placeholder: '',
            validators: [
            // Validators.required
            ]
        },
        {
            formControlType: 'input',
            formControlName: 'PassID',
            span: 12,
            default: null,
            label: ' Password',
            nzTip: {
                error: 'Please input PassID!',
            },
            inputType: 'password',
            inputIcon: '',
            placeholder: '',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]
        },
        {
            formControlType: 'checkbox',
            formControlName: 'inLive',
            span: 24,
            default: false,
            preContent: '',
            nzTip: {},
            content: 'in live',
            validators: []
        }
    ],
    otherItems: [
        {
            extendType: 'button',
            span: 12,
            buttonType: 'primary',
            content: 'search',
            class: [],
            clickFunc: (validateForm) => {
                console.log(validateForm.value);
            },
        },
        {
            extendType: 'button',
            span: 12,
            buttonType: 'primary',
            content: 'reset',
            class: [],
            clickFunc: (validateForm) => {
                validateForm.reset();
            },
        },
    ]
};
const PersonFormConfig = {
    class: [],
    showFormData: true,
    width: 600,
    formName: 'Person Form',
    formControlItems: [
        {
            formControlType: 'input',
            formControlName: 'firstName',
            span: 12,
            default: null,
            label: 'First Name',
            nzTip: {
                error: 'Please input your first name!',
            },
            inputType: 'text',
            inputIcon: '',
            placeholder: '',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]
        },
        {
            formControlType: 'input',
            formControlName: 'lastName',
            span: 12,
            default: null,
            label: 'Last Name',
            nzTip: {
                error: 'Please input your last name!',
            },
            inputType: 'text',
            inputIcon: '',
            placeholder: '',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]
        },
        {
            formControlType: 'select',
            formControlName: 'lastName',
            span: 12,
            default: null,
            label: 'gender',
            nzTip: {
            // error: 'Please input your last name!',
            },
            selectOptions: [
                { value: 'male', label: 'male' },
                { value: 'female', label: 'female' },
            ],
            // placeholder: '',
            validators: [],
            selectFunc: (validateForm, $event) => {
            }
        },
        {
            formControlType: 'input',
            formControlName: 'age',
            span: 12,
            default: null,
            label: 'age',
            nzTip: {
                error: 'Please input your age!',
            },
            inputType: 'text',
            inputIcon: '',
            placeholder: '',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                NumberValidator,
            ]
        },
        {
            formControlType: 'select',
            formControlName: 'hobby',
            span: 24,
            labelSpan: 4,
            controlSpan: 20,
            default: [],
            label: 'hobby',
            nzTip: {
            // error: 'Please input your last name!',
            },
            mode: 'multiple',
            multipleList: [],
            selectOptions: [
                { value: '足球', label: '足球' },
                { value: '摄影', label: '摄影' },
                { value: '下棋', label: '下棋' },
                { value: '篮球', label: '篮球' },
                { value: '羽毛球', label: '羽毛球' },
                { value: '英雄联盟', label: '英雄联盟' },
                { value: '王者荣耀', label: '王者荣耀' },
                { value: '看小说', label: '看小说' },
                { value: '钓鱼', label: '钓鱼' },
                { value: '唱歌', label: '唱歌' },
            ],
            validators: [],
            selectFunc: (validateForm, $event) => {
                // console.log(validateForm);
                // console.log($event);
            },
            isNotSelected: (multipleList, value) => {
                // console.log(listOfSelectedValue.indexOf(value) === -1);
                return multipleList.indexOf(value) === -1;
            }
        },
        {
            formControlType: 'date-range',
            formControlName: 'date',
            span: 24,
            labelSpan: 4,
            controlSpan: 20,
            class: [],
            style: {
                width: '100%'
            },
            default: [new Date(), new Date()],
            label: 'Date Range',
            nzTip: {
            // error: 'Please input your age!',
            },
            ranges: { Today: [new Date(), new Date()], 'This Month': [new Date(), Object(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date())] },
            format: 'yyyy/MM/dd HH:mm:ss',
            onChange: (validateForm, $event) => {
                console.log($event);
            },
            validators: []
        },
    ],
    otherItems: [
        {
            extendType: 'button-group',
            span: 16,
            class: [],
            style: {
                width: '100%'
            },
            childs: [
                {
                    extendType: 'button',
                    buttonType: 'primary',
                    content: 'search',
                    leftButtonIcon: 'to-top',
                    class: [],
                    clickFunc: (validateForm) => {
                        console.log(validateForm.value);
                    },
                },
                {
                    extendType: 'button',
                    buttonType: 'dashed',
                    content: 'reset',
                    leftButtonIcon: 'retweet',
                    class: [],
                    clickFunc: (validateForm) => {
                        validateForm.reset({
                            hobby: [],
                            date: []
                        });
                    },
                },
            ]
        },
    ]
};


/***/ }),

/***/ "UcOo":
/*!**********************************************!*\
  !*** ./src/app/pages/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _form_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.config */ "TVQl");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _module_yubi_form_yubi_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_module/yubi-form/yubi-form.component */ "G4ah");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");






class FormComponent {
    constructor() {
        this.loginFormConfig = {};
        this.searchFormConfig = {};
        this.PersonFormConfig = {};
    }
    ngOnInit() {
        this.loginFormConfig = _form_config__WEBPACK_IMPORTED_MODULE_1__["loginFormConfig"];
        this.searchFormConfig = _form_config__WEBPACK_IMPORTED_MODULE_1__["searchFormConfig"];
        this.PersonFormConfig = _form_config__WEBPACK_IMPORTED_MODULE_1__["PersonFormConfig"];
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 8, vars: 6, consts: [["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [3, "FormConfig"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-yubi-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-yubi-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-yubi-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("FormConfig", ctx.loginFormConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("FormConfig", ctx.searchFormConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("FormConfig", ctx.PersonFormConfig);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], _module_yubi_form_yubi_form_component__WEBPACK_IMPORTED_MODULE_3__["YubiFormComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__["NzDividerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=form-form-module.js.map