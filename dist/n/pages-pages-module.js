(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/user */ "ki88");
/* harmony import */ var _store_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/layout */ "ZZ52");




class WelcomeComponent {
    constructor() {
        this.num = 1;
    }
    ngOnInit() {
        // this.userModule = getUserModule();
        this.userModule = _store_user__WEBPACK_IMPORTED_MODULE_1__["userModule"];
    }
    updateUserID() {
        this.userModule.action.setUserID('newId' + this.num++);
    }
    updateLang() {
        _store_layout__WEBPACK_IMPORTED_MODULE_2__["layoutModule"].lang === 'en-uk' ? _store_layout__WEBPACK_IMPORTED_MODULE_2__["layoutModule"].lang = 'zh-cn' : _store_layout__WEBPACK_IMPORTED_MODULE_2__["layoutModule"].lang = 'en-uk';
        console.log(_store_layout__WEBPACK_IMPORTED_MODULE_2__["layoutModule"].lang);
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 8, vars: 1, consts: [[3, "click"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "weicome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_4_listener() { return ctx.userModule.action.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_6_listener() { return ctx.updateLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "lang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("userId: ", ctx.userModule.userID, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1W6z":
/*!***************************************************************!*\
  !*** ./src/app/pages/_component/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages.menu */ "8DUW");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");








function SidebarComponent_ng_container_5_li_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r6.name);
} }
function SidebarComponent_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_5_li_1_li_2_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r1.title)("nzIcon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.childs);
} }
const _c0 = function () { return {}; };
const _c1 = function (a0) { return { display: a0 }; };
function SidebarComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
function SidebarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_container_5_li_1_Template, 3, 3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_container_5_ng_template_2_Template, 5, 8, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type == "submenu")("ngIfElse", _r3);
} }
class SidebarComponent {
    constructor() {
        this.items = [];
        this.theme = 'dark';
        this.mode = 'inline';
    }
    ngOnInit() {
        this.theme = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["menu"].theme;
        this.mode = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["menu"].mode;
        this.items = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["menu"].items;
        console.log(this.items);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { isCollapsed: "isCollapsed" }, decls: 6, vars: 4, consts: [[1, "sidebar-logo"], ["href", "https://gitee.com/Yubi233/yubi-angular-template", "target", "_blank"], ["nz-menu", "", 3, "nzTheme", "nzMode", "nzInlineCollapsed"], [4, "ngFor", "ngForOf"], ["nz-submenu", "", "nzOpen", "", 3, "nzTitle", "nzIcon", 4, "ngIf", "ngIfElse"], ["menuItem", ""], ["nz-submenu", "", "nzOpen", "", 3, "nzTitle", "nzIcon"], ["nz-menu-item", "", "nzMatchRouter", "", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", "nzMatchRouter", ""], [3, "routerLink"], ["nz-icon", "", 3, "nzType"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yubi admin template of NG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_ng_container_5_Template, 4, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTheme", "dark")("nzMode", "inline")("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzSubMenuComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], styles: [".sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 10px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpRUFBQTtFQUNBLHNCQUFBO0FBREYiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2lkZWJhci1sb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDE1Mjk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuXHJcbi5zaWRlYmFyLWxvZ28gaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ28gaDEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IEF2ZW5pcixIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, { isCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5vDB":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js ***!
  \***********************************************************************************/
/*! exports provided: NzDividerComponent, NzDividerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerComponent", function() { return NzDividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerModule", function() { return NzDividerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");






/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */




function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzText);
} }
function NzDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
} }
class NzDividerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
        this.nzPlain = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-divider');
    }
}
NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDividerComponent, selectors: [["nz-divider"]], hostVars: 16, hostBindings: function NzDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    } }, inputs: { nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed", nzPlain: "nzPlain", nzText: "nzText" }, exportAs: ["nzDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzDividerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzDividerComponent.propDecorators = {
    nzText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDashed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPlain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzPlain", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-divider',
                exportAs: 'nzDivider',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <span *ngIf="nzText" class="ant-divider-inner-text">
      <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
    </span>
  `,
                host: {
                    '[class.ant-divider-horizontal]': `nzType === 'horizontal'`,
                    '[class.ant-divider-vertical]': `nzType === 'vertical'`,
                    '[class.ant-divider-with-text]': `nzText`,
                    '[class.ant-divider-plain]': `nzPlain`,
                    '[class.ant-divider-with-text-left]': `nzText && nzOrientation === 'left'`,
                    '[class.ant-divider-with-text-right]': `nzText && nzOrientation === 'right'`,
                    '[class.ant-divider-with-text-center]': `nzText && nzOrientation === 'center'`,
                    '[class.ant-divider-dashed]': `nzDashed`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDashed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPlain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDividerModule {
}
NzDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzDividerModule });
NzDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzDividerModule_Factory(t) { return new (t || NzDividerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzDividerModule, { declarations: function () { return [NzDividerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]; }, exports: function () { return [NzDividerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]],
                declarations: [NzDividerComponent],
                exports: [NzDividerComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-divider.js.map

/***/ }),

/***/ "7Qoz":
/*!**********************************!*\
  !*** ./src/_utils/lang/index.ts ***!
  \**********************************/
/*! exports provided: LOCAL_LANG, text, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_LANG", function() { return LOCAL_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/storage */ "kVn5");
// import { layoutModule } from '@store/layout';

let LOCAL_LANG = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_0__["getLocalLang"])() || 'en-uk';
const DEFAULT_LANG = 'zh-cn';
const data = {
    'zh-cn': {
        user: { name: '马' },
        form: {
            year: '年',
            day: '天',
        },
        menu: {
            dashboard: '控制页',
            welcome: '欢迎页',
            monitor: '监控台',
            component: '组件页',
            users: '用户页',
            table: '表格',
            form: '表单',
            setting: '设置'
        }
    },
    'zh-hk': {},
    'en-uk': {
        user: { name: 'Horse' },
        form: {
            year: 'year',
            day: 'day',
        },
        menu: {
            dashboard: 'Dashboard',
            welcome: 'Welcome',
            monitor: 'Monitor',
            users: 'users',
            component: 'Component',
            table: 'Table',
            form: 'Form',
            setting: 'Setting',
        },
    },
};
const proxyData = data;
let text = new Proxy(proxyData, {
    get(target, propKey) {
        if (propKey in target[LOCAL_LANG]) {
            return target[LOCAL_LANG][propKey];
        }
        else {
            // LOCAL_LANG 不存在，使用默认语言
            return target[DEFAULT_LANG][propKey];
        }
    }
});
const update = () => {
    console.log('更新text');
};


/***/ }),

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/user */ "ki88");
/* harmony import */ var _store_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/layout */ "ZZ52");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/user */ "zRU0");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_component/sidebar/sidebar.component */ "1W6z");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");














class PagesComponent {
    constructor(userService) {
        this.isCollapsed = false;
        this.userModule = _store_user__WEBPACK_IMPORTED_MODULE_1__["userModule"];
        this.layoutModule = _store_layout__WEBPACK_IMPORTED_MODULE_2__["layoutModule"];
    }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_user__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 36, vars: 6, consts: [[1, "app-layout"], ["nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 1, "menu-sidebar", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [3, "isCollapsed"], [1, "app-header"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], [1, "app-header-user"], [2, "font-size", "16px", "margin-right", "10px"], ["nz-button", "", "nz-dropdown", "", "nzShape", "circle", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "user", 2, "font-size", "20px"], ["menu2", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-menu-group", "", "nzTitle", "about", 2, "margin", "6px 5px 0 5px", "border-top", "0.5px solid rgb(212, 212, 212)"], ["nz-menu-item", ""], ["href", "https://gitee.com/Yubi233/yubi-angular-template", "target", "_blank"], ["src", "https://gitee.com/static/images/logo-en.svg", "srcset", "", 2, "width", "14px", "margin-right", "6px"], ["nz-icon", "", "nzType", "github", "nzTheme", "outline"], ["nz-icon", "", "nzType", "book", "nzTheme", "outline"], [1, "inner-content"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-sider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCollapsedChange", function PagesComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) { return ctx.layoutModule.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_span_click_6_listener() { return ctx.layoutModule.isCollapsed = !ctx.layoutModule.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-dropdown-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_li_click_16_listener() { return ctx.userModule.action.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " gitee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " doc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCollapsed", ctx.layoutModule.isCollapsed)("nzTrigger", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isCollapsed", ctx.layoutModule.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.layoutModule.isCollapsed ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userModule.userID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzSiderComponent"], _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzHeaderComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuItemDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuGroupComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\n.app-header-user[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 30px;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.inner-content[_ngcontent-%COMP%] {\n  padding: 18px;\n  background: #fff;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUZGOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBT0E7RUFDRSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUpGIiwiZmlsZSI6InBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4uYXBwLWxheW91dCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1lbnUtc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsMjEsNDEsLjM1KTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItdHJpZ2dlciB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MscGFkZGluZyAwcztcclxufVxyXG5cclxuLnRyaWdnZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTg5MGZmO1xyXG59XHJcblxyXG5cclxuXHJcbm56LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwyMSw0MSwuMDgpO1xyXG5cclxuICAmLXVzZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbm56LWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uaW5uZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styleUrls: ['./pages.component.scss']
            }]
    }], function () { return [{ type: _api_user__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "8DUW":
/*!*************************************!*\
  !*** ./src/app/pages/pages.menu.ts ***!
  \*************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/lang */ "7Qoz");
var _a, _b, _c, _d, _e, _f, _g, _h;

const menu = {
    theme: 'dark',
    mode: 'inline',
    items: [
        {
            type: 'submenu',
            title: (_a = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _a === void 0 ? void 0 : _a.dashboard,
            icon: 'dashboard',
            childs: [
                {
                    path: './welcome',
                    name: (_b = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _b === void 0 ? void 0 : _b.welcome
                },
                {
                    path: './monitor',
                    name: (_c = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _c === void 0 ? void 0 : _c.monitor
                },
                {
                    path: './users',
                    name: (_d = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _d === void 0 ? void 0 : _d.users
                }
            ]
        },
        {
            type: 'submenu',
            title: (_e = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _e === void 0 ? void 0 : _e.component,
            icon: 'appstore',
            childs: [
                {
                    path: './table',
                    name: (_f = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _f === void 0 ? void 0 : _f.table,
                },
                {
                    path: './form',
                    name: (_g = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _g === void 0 ? void 0 : _g.form
                }
            ]
        },
        {
            type: 'item',
            name: (_h = _utils_lang__WEBPACK_IMPORTED_MODULE_0__["text"].menu) === null || _h === void 0 ? void 0 : _h.setting,
            icon: 'setting',
            path: './setting'
        }
    ]
};


/***/ }),

/***/ "Hhmg":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Nqz0":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-dropdown.js ***!
  \************************************************************************************/
/*! exports provided: NzContextMenuService, NzContextMenuServiceModule, NzDropDownADirective, NzDropDownDirective, NzDropDownModule, NzDropdownButtonDirective, NzDropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzContextMenuService", function() { return NzContextMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzContextMenuServiceModule", function() { return NzContextMenuServiceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropDownADirective", function() { return NzDropDownADirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropDownDirective", function() { return NzDropDownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropDownModule", function() { return NzDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropdownButtonDirective", function() { return NzDropdownButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDropdownMenuComponent", function() { return NzDropdownMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "79xS");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "JgHy");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");




















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */








function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r1.setMouseState(true); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.setMouseState(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("@slideMotion", "enter")("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
const _c0 = ["*"];
const listOfPositions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].bottomLeft, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].bottomRight, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].topRight, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"].topLeft];
class NzDropDownDirective {
    constructor(elementRef, overlay, renderer, viewContainerRef, platform) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this.overlayRef = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withLockedPosition()
            .withTransformOriginOn('.ant-dropdown');
        this.inputVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        this.nzTrigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]('hover');
        this.overlayClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.nzDropdownMenu = null;
        this.nzTrigger = 'hover';
        this.nzMatchWidthElement = null;
        /**
         * @deprecated Not supported.
         * @breaking-change 11.0.0
         */
        this.nzBackdrop = true;
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-dropdown-trigger');
    }
    setDropdownMenuValue(key, value) {
        if (this.nzDropdownMenu) {
            this.nzDropdownMenu.setValue(key, value);
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.nzDropdownMenu) {
            const nativeElement = this.elementRef.nativeElement;
            /** host mouse state **/
            const hostMouseState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(nativeElement, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(false)));
            /** menu mouse state **/
            const menuMouseState$ = this.nzDropdownMenu.mouseState$;
            /** merged mouse state **/
            const mergedMouseState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(menuMouseState$, hostMouseState$);
            /** host click state **/
            const hostClickState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(true));
            /** visible state switch by nzTrigger **/
            const visibleStateByTrigger$ = this.nzTrigger$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(trigger => {
                if (trigger === 'hover') {
                    return mergedMouseState$;
                }
                else if (trigger === 'click') {
                    return hostClickState$;
                }
                else {
                    return rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"];
                }
            }));
            const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => this.nzClickHide), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(false));
            const domTriggerVisible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => !this.nzDisabled));
            const visible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.inputVisible$, domTriggerVisible$);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])([visible$, this.nzDropdownMenu.isChildSubMenuOpen$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(([visible, sub]) => visible || sub), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["auditTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(() => this.platform.isBrowser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
                .subscribe((visible) => {
                const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
                const triggerWidth = element.getBoundingClientRect().width;
                if (this.nzVisible !== visible) {
                    this.nzVisibleChange.emit(visible);
                }
                this.nzVisible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!this.overlayRef) {
                        /** new overlay **/
                        this.overlayRef = this.overlay.create({
                            positionStrategy: this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: this.nzTrigger === 'click',
                            backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
                            scrollStrategy: this.overlay.scrollStrategies.reposition()
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(e => e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["hasModifierKey"])(e))))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
                            .subscribe(this.overlayClose$);
                    }
                    else {
                        /** update overlay config **/
                        const overlayConfig = this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                    }
                    /** open dropdown with animation **/
                    this.positionStrategy.withPositions([ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["POSITION_MAP"][this.nzPlacement], ...listOfPositions]);
                    /** reset portal if needed **/
                    if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
                        this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](this.nzDropdownMenu.templateRef, this.viewContainerRef);
                    }
                    this.overlayRef.attach(this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (this.overlayRef) {
                        this.overlayRef.detach();
                    }
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    ngOnChanges(changes) {
        const { nzVisible, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTrigger, nzBackdrop } = changes;
        if (nzTrigger) {
            this.nzTrigger$.next(this.nzTrigger);
        }
        if (nzVisible) {
            this.inputVisible$.next(this.nzVisible);
        }
        if (nzDisabled) {
            const nativeElement = this.elementRef.nativeElement;
            if (this.nzDisabled) {
                this.renderer.setAttribute(nativeElement, 'disabled', '');
                this.inputVisible$.next(false);
            }
            else {
                this.renderer.removeAttribute(nativeElement, 'disabled');
            }
        }
        if (nzOverlayClassName) {
            this.setDropdownMenuValue('nzOverlayClassName', this.nzOverlayClassName);
        }
        if (nzOverlayStyle) {
            this.setDropdownMenuValue('nzOverlayStyle', this.nzOverlayStyle);
        }
        if (nzBackdrop) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__["warnDeprecation"])('`nzBackdrop` in dropdown component will be removed in 11.0.0.');
        }
    }
}
NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) { return new (t || NzDropDownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"])); };
NzDropDownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: NzDropDownDirective, selectors: [["", "nz-dropdown", ""]], inputs: { nzDropdownMenu: "nzDropdownMenu", nzTrigger: "nzTrigger", nzMatchWidthElement: "nzMatchWidthElement", nzBackdrop: "nzBackdrop", nzClickHide: "nzClickHide", nzDisabled: "nzDisabled", nzVisible: "nzVisible", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzPlacement: "nzPlacement" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDropdown"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]] });
NzDropDownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
NzDropDownDirective.propDecorators = {
    nzDropdownMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzMatchWidthElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzClickHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzOverlayClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzOverlayStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDropDownDirective.prototype, "nzBackdrop", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDropDownDirective.prototype, "nzClickHide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDropDownDirective.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDropDownDirective.prototype, "nzVisible", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzDropDownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[nz-dropdown]',
                exportAs: 'nzDropdown'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }]; }, { nzDropdownMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzMatchWidthElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzClickHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzOverlayClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzOverlayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzContextMenuServiceModule {
}
NzContextMenuServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NzContextMenuServiceModule });
NzContextMenuServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function NzContextMenuServiceModule_Factory(t) { return new (t || NzContextMenuServiceModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzContextMenuServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDropDownADirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-dropdown-link');
    }
}
NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) { return new (t || NzDropDownADirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
NzDropDownADirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: NzDropDownADirective, selectors: [["a", "nz-dropdown", ""]] });
NzDropDownADirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzDropDownADirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: 'a[nz-dropdown]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDropdownButtonDirective {
    constructor(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    }
}
NzDropdownButtonDirective.ɵfac = function NzDropdownButtonDirective_Factory(t) { return new (t || NzDropdownButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonGroupComponent"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
NzDropdownButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: NzDropdownButtonDirective, selectors: [["", "nz-button", "", "nz-dropdown", ""]] });
NzDropdownButtonDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
    { type: ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonGroupComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzDropdownButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[nz-button][nz-dropdown]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonGroupComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDropdownMenuComponent {
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.noAnimation = noAnimation;
        this.mouseState$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
    }
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
}
NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) { return new (t || NzDropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], 9)); };
NzDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NzDropdownMenuComponent, selectors: [["nz-dropdown-menu"]], viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, exportAs: ["nzDropdownMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["MenuService"],
            /** menu is inside dropdown-menu component **/
            {
                provide: ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzIsMenuInsideDropDownToken"],
                useValue: true
            }
        ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "ant-dropdown", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzDropdownMenuComponent_ng_template_0_Template, 2, 5, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_18__["slideMotion"]] }, changeDetection: 0 });
NzDropdownMenuComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },
    { type: ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["MenuService"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] }
];
NzDropdownMenuComponent.propDecorators = {
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzDropdownMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: `nz-dropdown-menu`,
                exportAs: `nzDropdownMenu`,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_18__["slideMotion"]],
                providers: [
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["MenuService"],
                    /** menu is inside dropdown-menu component **/
                    {
                        provide: ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzIsMenuInsideDropDownToken"],
                        useValue: true
                    }
                ],
                template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] }, { type: ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["MenuService"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }] }]; }, { templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDropDownModule {
}
NzDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NzDropDownModule });
NzDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function NzDropDownModule_Factory(t) { return new (t || NzDropDownModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzMenuModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"],
            NzContextMenuServiceModule,
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"]
        ], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzMenuModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NzDropDownModule, { declarations: function () { return [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzMenuModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"], NzContextMenuServiceModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"]]; }, exports: function () { return [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzMenuModule"], NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzDropDownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzMenuModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"],
                    NzContextMenuServiceModule,
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"]
                ],
                entryComponents: [NzDropdownMenuComponent],
                declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective],
                exports: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__["NzMenuModule"], NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const listOfPositions$1 = [
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
];
class NzContextMenuService {
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayRef = null;
        this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    }
    create($event, nzDropdownMenuComponent) {
        this.close(true);
        const { x, y } = $event;
        if ($event instanceof MouseEvent) {
            $event.preventDefault();
        }
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo({ x, y })
            .withPositions(listOfPositions$1)
            .withTransformOriginOn('.ant-dropdown');
        this.overlayRef = this.overlay.create({
            positionStrategy,
            disposeOnNavigation: true,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.closeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(nzDropdownMenuComponent.descendantMenuItemClick$, Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(event => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)), 
        /** handle firefox contextmenu event **/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(event => event.button !== 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))).subscribe(() => {
            this.close();
        });
        this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
    }
    close(clear = false) {
        if (this.overlayRef) {
            this.overlayRef.detach();
            if (clear) {
                this.overlayRef.dispose();
            }
            this.overlayRef = null;
            this.closeSubscription.unsubscribe();
        }
    }
}
NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"])); };
NzContextMenuService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"])({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"])); }, token: NzContextMenuService, providedIn: NzContextMenuServiceModule });
NzContextMenuService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzContextMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
        args: [{
                providedIn: NzContextMenuServiceModule
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-dropdown.js.map

/***/ }),

/***/ "Q8cG":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js ***!
  \********************************************************************************/
/*! exports provided: MenuDropDownTokenFactory, MenuGroupFactory, MenuService, MenuServiceFactory, NzIsMenuInsideDropDownToken, NzMenuDirective, NzMenuDividerDirective, NzMenuGroupComponent, NzMenuItemDirective, NzMenuModule, NzMenuServiceLocalToken, NzSubMenuComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent, NzSubmenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDropDownTokenFactory", function() { return MenuDropDownTokenFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupFactory", function() { return MenuGroupFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceFactory", function() { return MenuServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzIsMenuInsideDropDownToken", function() { return NzIsMenuInsideDropDownToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuDirective", function() { return NzMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuDividerDirective", function() { return NzMenuDividerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuGroupComponent", function() { return NzMenuGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuItemDirective", function() { return NzMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuModule", function() { return NzMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMenuServiceLocalToken", function() { return NzMenuServiceLocalToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubMenuComponent", function() { return NzSubMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubMenuTitleComponent", function() { return NzSubMenuTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubmenuInlineChildComponent", function() { return NzSubmenuInlineChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubmenuNoneInlineChildComponent", function() { return NzSubmenuNoneInlineChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSubmenuService", function() { return NzSubmenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "JgHy");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */









const _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "!nzTitle"]);
} }
function NzSubMenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx_r2.mode)("nzOpen", ctx_r2.nzOpen)("@.disabled", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("menuClass", ctx_r2.nzMenuClassName)("templateOutlet", _r5);
} }
function NzSubMenuComponent_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("subMenuMouseState", function NzSubMenuComponent_ng_template_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.setMouseEnterState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx_r7.theme)("mode", ctx_r7.mode)("nzOpen", ctx_r7.nzOpen)("position", ctx_r7.position)("nzDisabled", ctx_r7.nzDisabled)("isMenuInsideDropDown", ctx_r7.isMenuInsideDropDown)("templateOutlet", _r5)("menuClass", ctx_r7.nzMenuClassName)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation);
} }
function NzSubMenuComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzSubMenuComponent_ng_template_4_ng_template_0_Template, 1, 10, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("positionChange", function NzSubMenuComponent_ng_template_4_Template_ng_template_positionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onPositionChange($event); });
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkConnectedOverlayPositions", ctx_r4.overlayPositions)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayWidth", ctx_r4.triggerWidth)("cdkConnectedOverlayOpen", ctx_r4.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
} }
function NzSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1);
} }
const _c1 = [[["", "title", ""]], "*"];
const _c2 = ["[title]", "*"];
const _c3 = ["titleElement"];
const _c4 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzTitle);
} }
function NzMenuGroupComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1, ["*ngIf", "!nzTitle"]);
} }
const _c5 = ["*", [["", "title", ""]]];
const _c6 = ["*", "[title]"];
const _c7 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r0.nzIcon);
} }
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzTitle);
} }
function NzSubMenuTitleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NzSubMenuTitleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 7);
} }
const _c8 = ["*"];
const _c9 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) { }
const _c10 = ["nz-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) { }
class MenuService {
    constructor() {
        /** all descendant menu click **/
        this.descendantMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** child menu item click **/
        this.childMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('light');
        this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('vertical');
        this.inlineIndent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](24);
        this.isChildSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    onDescendantMenuItemClick(menu) {
        this.descendantMenuItemClick$.next(menu);
    }
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setMode(mode) {
        this.mode$.next(mode);
    }
    setTheme(theme) {
        this.theme$.next(theme);
    }
    setInlineIndent(indent) {
        this.inlineIndent$.next(indent);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NzIsMenuInsideDropDownToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NzIsInDropDownMenuToken');
const NzMenuServiceLocalToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NzMenuServiceLocalToken');

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubmenuService {
    constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.mode$ = this.nzMenuService.mode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(mode => {
            if (mode === 'inline') {
                return 'inline';
                /** if inside another submenu, set the mode to vertical **/
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        }));
        this.level = 1;
        this.isCurrentSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.isChildSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        /** submenu title & overlay mouse enter status **/
        this.isMouseEnterTitleOrOverlay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.childMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        if (this.nzHostSubmenuService) {
            this.level = this.nzHostSubmenuService.level + 1;
        }
        /** close if menu item clicked **/
        const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.mode$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(mode => mode !== 'inline' || this.isMenuInsideDropDown), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(false));
        const isCurrentSubmenuOpen$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
        /** combine the child submenu status with current submenu status to calculate host submenu open **/
        const isSubMenuOpenWithDebounce$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
        isSubMenuOpenWithDebounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(data => {
            this.setOpenStateWithoutDebounce(data);
            if (this.nzHostSubmenuService) {
                /** set parent submenu's child submenu open status **/
                this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
            }
            else {
                this.nzMenuService.isChildSubMenuOpen$.next(data);
            }
        });
    }
    /**
     * menu item inside submenu clicked
     * @param menu
     */
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setOpenStateWithoutDebounce(value) {
        this.isCurrentSubMenuOpen$.next(value);
    }
    setMouseEnterTitleOrOverlayState(value) {
        this.isMouseEnterTitleOrOverlay$.next(value);
    }
}
NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NzSubmenuService, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NzIsMenuInsideDropDownToken)); };
NzSubmenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
NzSubmenuService.ctorParameters = () => [
    { type: NzSubmenuService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: MenuService },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NzIsMenuInsideDropDownToken,] }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuItemDirective {
    constructor(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, routerLink, routerLinkWithHref, router) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
        this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.inlinePaddingLeft = null;
        this.nzDisabled = false;
        this.nzSelected = false;
        this.nzDanger = false;
        this.nzMatchRouterExact = false;
        this.nzMatchRouter = false;
        if (router) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])).subscribe(() => {
                this.updateRouterActive();
            });
        }
    }
    /** clear all item selected status except this */
    clickMenuItem(e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            this.nzMenuService.onDescendantMenuItemClick(this);
            if (this.nzSubmenuService) {
                /** menu item inside the submenu **/
                this.nzSubmenuService.onChildMenuItemClick(this);
            }
            else {
                /** menu item inside the root menu **/
                this.nzMenuService.onChildMenuItemClick(this);
            }
        }
    }
    setSelectedState(value) {
        this.nzSelected = value;
        this.selected$.next(value);
    }
    updateRouterActive() {
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then(() => {
            const hasActiveLinks = this.hasActiveLinks();
            if (this.nzSelected !== hasActiveLinks) {
                this.nzSelected = hasActiveLinks;
                this.setSelectedState(this.nzSelected);
                this.cdr.markForCheck();
            }
        });
    }
    hasActiveLinks() {
        const isActiveCheckFn = this.isLinkActive(this.router);
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    isLinkActive(router) {
        return (link) => router.isActive(link.urlTree, this.nzMatchRouterExact);
    }
    ngOnInit() {
        /** store origin padding in padding */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
        });
    }
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.listOfRouterLinkWithHref.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.updateRouterActive();
    }
    ngOnChanges(changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuItemDirective.ɵfac = function NzMenuItemDirective_Factory(t) { return new (t || NzMenuItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzSubmenuService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], 8)); };
NzMenuItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzMenuItemDirective, selectors: [["", "nz-menu-item", ""]], contentQueries: function NzMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfRouterLink = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfRouterLinkWithHref = _t);
    } }, hostVars: 18, hostBindings: function NzMenuItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("padding-left", ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzSelected: "nzSelected", nzDanger: "nzDanger", nzMatchRouterExact: "nzMatchRouterExact", nzMatchRouter: "nzMatchRouter", nzPaddingLeft: "nzPaddingLeft" }, exportAs: ["nzMenuItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
NzMenuItemDirective.ctorParameters = () => [
    { type: MenuService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: NzSubmenuService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NzIsMenuInsideDropDownToken,] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
NzMenuItemDirective.propDecorators = {
    nzPaddingLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzMatchRouterExact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzMatchRouter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    listOfRouterLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], { descendants: true },] }],
    listOfRouterLinkWithHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], { descendants: true },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzMenuItemDirective.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzMenuItemDirective.prototype, "nzSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzMenuItemDirective.prototype, "nzDanger", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const listOfVerticalPositions = [
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["POSITION_MAP"].rightTop,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["POSITION_MAP"].right,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["POSITION_MAP"].rightBottom,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["POSITION_MAP"].leftTop,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["POSITION_MAP"].left,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["POSITION_MAP"].leftBottom
];
const listOfHorizontalPositions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["POSITION_MAP"].bottomLeft];
class NzSubMenuComponent {
    constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, noAnimation) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.platform = platform;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.noAnimation = noAnimation;
        this.nzMenuClassName = '';
        this.nzPaddingLeft = null;
        this.nzTitle = null;
        this.nzIcon = null;
        this.nzOpen = false;
        this.nzDisabled = false;
        this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cdkOverlayOrigin = null;
        this.listOfNzSubMenuComponent = null;
        this.listOfNzMenuItemDirective = null;
        this.level = this.nzSubmenuService.level;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.position = 'right';
        this.triggerWidth = null;
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlinePaddingLeft = null;
        this.overlayPositions = listOfVerticalPositions;
        this.isSelected = false;
        this.isActive = false;
    }
    /** set the submenu host open status directly **/
    setOpenStateWithoutDebounce(open) {
        this.nzSubmenuService.setOpenStateWithoutDebounce(open);
    }
    toggleSubMenu() {
        this.setOpenStateWithoutDebounce(!this.nzOpen);
    }
    setMouseEnterState(value) {
        this.isActive = value;
        if (this.mode !== 'inline') {
            this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
        }
    }
    setTriggerWidth() {
        if (this.mode === 'horizontal' && this.platform.isBrowser && this.cdkOverlayOrigin) {
            /** TODO: fast dom **/
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    }
    onPositionChange(position) {
        const placement = Object(ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["getPlacementName"])(position);
        if (placement === 'rightTop' || placement === 'rightBottom' || placement === 'right') {
            this.position = 'right';
        }
        else if (placement === 'leftTop' || placement === 'leftBottom' || placement === 'left') {
            this.position = 'left';
        }
        this.cdr.markForCheck();
    }
    ngOnInit() {
        /** submenu theme update **/
        this.nzMenuService.theme$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(theme => {
            this.theme = theme;
            this.cdr.markForCheck();
        });
        /** submenu mode update **/
        this.nzSubmenuService.mode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(mode => {
            this.mode = mode;
            if (mode === 'horizontal') {
                this.overlayPositions = listOfHorizontalPositions;
            }
            else if (mode === 'vertical') {
                this.overlayPositions = listOfVerticalPositions;
            }
            this.cdr.markForCheck();
        });
        /** inlineIndent update **/
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
            this.cdr.markForCheck();
        });
        /** current submenu open status **/
        this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(open => {
            this.isActive = open;
            if (open !== this.nzOpen) {
                this.setTriggerWidth();
                this.nzOpen = open;
                this.nzOpenChange.emit(this.nzOpen);
                this.cdr.markForCheck();
            }
        });
    }
    ngAfterContentInit() {
        this.setTriggerWidth();
        const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
        const changes = listOfNzMenuItemDirective.changes;
        const mergedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...[changes, ...listOfNzMenuItemDirective.map(menu => menu.selected$)]);
        changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(listOfNzMenuItemDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => mergedObservable), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => listOfNzMenuItemDirective.some(e => e.nzSelected)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(selected => {
            this.isSelected = selected;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzOpen } = changes;
        if (nzOpen) {
            this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
            this.setTriggerWidth();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzSubmenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__["NzNoAnimationDirective"], 9)); };
NzSubMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzSubMenuComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzMenuItemDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzSubMenuComponent = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzMenuItemDirective = _t);
    } }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkOverlayOrigin"], true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cdkOverlayOrigin = _t.first);
    } }, hostVars: 32, hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive);
    } }, inputs: { nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NzSubmenuService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c2, decls: 8, vars: 9, consts: [["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft", "subMenuMouseState", "toggleSubMenu"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet", 4, "ngIf", "ngIfElse"], ["nonInlineTemplate", ""], ["subMenuTemplate", ""], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "positionChange"], ["nz-submenu-none-inline-child", "", 3, "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation", "subMenuMouseState"]], template: function NzSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) { return ctx.setMouseEnterState($event); })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() { return ctx.toggleSubMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzSubMenuComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzSubMenuComponent_div_3_Template, 1, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzSubMenuComponent_ng_template_4_Template, 1, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode === "inline")("ngIfElse", _r3);
    } }, directives: function () { return [NzSubMenuTitleComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], NzSubmenuInlineChildComponent, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__["NzNoAnimationDirective"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], NzSubmenuNoneInlineChildComponent]; }, encapsulation: 2, changeDetection: 0 });
NzSubMenuComponent.ctorParameters = () => [
    { type: MenuService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: NzSubmenuService },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NzIsMenuInsideDropDownToken,] }] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
NzSubMenuComponent.propDecorators = {
    nzMenuClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPaddingLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    cdkOverlayOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkOverlayOrigin"], { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    listOfNzSubMenuComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NzSubMenuComponent, { descendants: true },] }],
    listOfNzMenuItemDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NzMenuItemDirective, { descendants: true },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSubMenuComponent.prototype, "nzOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSubMenuComponent.prototype, "nzDisabled", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
    return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}
function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
class NzMenuDirective {
    constructor(nzMenuService, isMenuInsideDropDown, cdr) {
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.cdr = cdr;
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.isMenuInsideDropDown;
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actualMode = 'vertical';
        this.inlineCollapsed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.nzInlineCollapsed);
        this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.nzMode);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.listOfOpenedNzSubMenuComponent = [];
    }
    setInlineCollapsed(inlineCollapsed) {
        this.nzInlineCollapsed = inlineCollapsed;
        this.inlineCollapsed$.next(inlineCollapsed);
    }
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(submenu => submenu.nzOpen);
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(true));
                this.listOfOpenedNzSubMenuComponent = [];
            }
        }
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.inlineCollapsed$, this.mode$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(([inlineCollapsed, mode]) => {
            this.actualMode = inlineCollapsed ? 'vertical' : mode;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        });
        this.nzMenuService.descendantMenuItemClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable && !menu.nzMatchRouter) {
                this.listOfNzMenuItemDirective.forEach(item => item.setSelectedState(item === menu));
            }
        });
    }
    ngAfterContentInit() {
        this.inlineCollapsed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.updateInlineCollapse();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzInlineCollapsed, nzInlineIndent, nzTheme, nzMode } = changes;
        if (nzInlineCollapsed) {
            this.inlineCollapsed$.next(this.nzInlineCollapsed);
        }
        if (nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (nzMode) {
            this.mode$.next(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NzMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzMenuItemDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzSubMenuComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzMenuItemDirective = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzSubMenuComponent = _t);
    } }, hostVars: 32, hostBindings: function NzMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed);
    } }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: NzMenuServiceLocalToken,
                useClass: MenuService
            },
            /** use the top level service **/
            {
                provide: MenuService,
                useFactory: MenuServiceFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), MenuService], NzMenuServiceLocalToken]
            },
            /** check if menu inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useFactory: MenuDropDownTokenFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), NzIsMenuInsideDropDownToken]]
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
NzMenuDirective.ctorParameters = () => [
    { type: MenuService },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NzIsMenuInsideDropDownToken,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NzMenuDirective.propDecorators = {
    listOfNzMenuItemDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NzMenuItemDirective, { descendants: true },] }],
    listOfNzSubMenuComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NzSubMenuComponent, { descendants: true },] }],
    nzInlineIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTheme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzInlineCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzMenuDirective.prototype, "nzSelectable", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzSubmenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: MenuService }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NzIsMenuInsideDropDownToken]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMenuItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nz-menu-item]',
                exportAs: 'nzMenuItem',
                host: {
                    '[class.ant-dropdown-menu-item]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-item-selected]': `isMenuInsideDropDown && nzSelected`,
                    '[class.ant-dropdown-menu-item-danger]': `isMenuInsideDropDown && nzDanger`,
                    '[class.ant-dropdown-menu-item-disabled]': `isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-menu-item]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-item-selected]': `!isMenuInsideDropDown && nzSelected`,
                    '[class.ant-menu-item-danger]': `!isMenuInsideDropDown && nzDanger`,
                    '[class.ant-menu-item-disabled]': `!isMenuInsideDropDown && nzDisabled`,
                    '[style.paddingLeft.px]': 'nzPaddingLeft || inlinePaddingLeft',
                    '(click)': 'clickMenuItem($event)'
                }
            }]
    }], function () { return [{ type: MenuService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: NzSubmenuService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzMatchRouterExact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzMatchRouter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPaddingLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], listOfRouterLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], { descendants: true }]
        }], listOfRouterLinkWithHref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], { descendants: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzSubMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[nz-submenu]',
                exportAs: 'nzSubmenu',
                providers: [NzSubmenuService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <div
      *ngIf="mode === 'inline'; else nonInlineTemplate"
      nz-submenu-inline-child
      [mode]="mode"
      [nzOpen]="nzOpen"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [menuClass]="nzMenuClassName"
      [templateOutlet]="subMenuTemplate"
    ></div>
    <ng-template #nonInlineTemplate>
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    </ng-template>

    <ng-template #subMenuTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-submenu-disabled]': `isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-dropdown-menu-submenu-open]': `isMenuInsideDropDown && nzOpen`,
                    '[class.ant-dropdown-menu-submenu-selected]': `isMenuInsideDropDown && isSelected`,
                    '[class.ant-dropdown-menu-submenu-vertical]': `isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-dropdown-menu-submenu-horizontal]': `isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-dropdown-menu-submenu-inline]': `isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-dropdown-menu-submenu-active]': `isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-submenu-disabled]': `!isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-menu-submenu-open]': `!isMenuInsideDropDown && nzOpen`,
                    '[class.ant-menu-submenu-selected]': `!isMenuInsideDropDown && isSelected`,
                    '[class.ant-menu-submenu-vertical]': `!isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-menu-submenu-horizontal]': `!isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-menu-submenu-inline]': `!isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-menu-submenu-active]': `!isMenuInsideDropDown && isActive`
                }
            }]
    }], function () { return [{ type: MenuService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: NzSubmenuService }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { nzMenuClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPaddingLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], cdkOverlayOrigin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkOverlayOrigin"], { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], listOfNzSubMenuComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NzSubMenuComponent, { descendants: true }]
        }], listOfNzMenuItemDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NzMenuItemDirective, { descendants: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    {
                        provide: NzMenuServiceLocalToken,
                        useClass: MenuService
                    },
                    /** use the top level service **/
                    {
                        provide: MenuService,
                        useFactory: MenuServiceFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), MenuService], NzMenuServiceLocalToken]
                    },
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuDropDownTokenFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), NzIsMenuInsideDropDownToken]]
                    }
                ],
                host: {
                    '[class.ant-dropdown-menu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-root]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-light]': `isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-dropdown-menu-dark]': `isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-dropdown-menu-vertical]': `isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-dropdown-menu-horizontal]': `isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-dropdown-menu-inline]': `isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-dropdown-menu-inline-collapsed]': `isMenuInsideDropDown && nzInlineCollapsed`,
                    '[class.ant-menu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-root]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-light]': `!isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-menu-dark]': `!isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-menu-vertical]': `!isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-menu-horizontal]': `!isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-menu-inline]': `!isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-menu-inline-collapsed]': `!isMenuInsideDropDown && nzInlineCollapsed`
                }
            }]
    }], function () { return [{ type: MenuService }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { nzInlineIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzInlineCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], listOfNzMenuItemDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NzMenuItemDirective, { descendants: true }]
        }], listOfNzSubMenuComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NzSubMenuComponent, { descendants: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function MenuGroupFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
class NzMenuGroupComponent {
    constructor(elementRef, renderer, isMenuInsideDropDown) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
        this.renderer.addClass(elementRef.nativeElement, className);
    }
    ngAfterViewInit() {
        const ulElement = this.titleElement.nativeElement.nextElementSibling;
        if (ulElement) {
            /** add classname to ul **/
            const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
            this.renderer.addClass(ulElement, className);
        }
    }
}
NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken)); };
NzMenuGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], viewQuery: function NzMenuGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
    } }, inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            /** check if menu inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useFactory: MenuGroupFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), NzIsMenuInsideDropDownToken]]
            }
        ])], attrs: _c4, ngContentSelectors: _c6, decls: 5, vars: 6, consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"], [4, "ngIf"]], template: function NzMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzMenuGroupComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], encapsulation: 2, changeDetection: 0 });
NzMenuGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NzIsMenuInsideDropDownToken,] }] }
];
NzMenuGroupComponent.propDecorators = {
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    titleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['titleElement',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMenuGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[nz-menu-group]',
                exportAs: 'nzMenuGroup',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuGroupFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), NzIsMenuInsideDropDownToken]]
                    }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NzIsMenuInsideDropDownToken]
            }] }]; }, { nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], titleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['titleElement']
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuDividerDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
}
NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
NzMenuDividerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
NzMenuDividerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMenuDividerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nz-menu-divider]',
                exportAs: 'nzMenuDivider'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubMenuTitleComponent {
    constructor() {
        this.nzIcon = null;
        this.nzTitle = null;
        this.isMenuInsideDropDown = false;
        this.nzDisabled = false;
        this.paddingLeft = null;
        this.mode = 'vertical';
        this.toggleSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subMenuMouseState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    clickTitle() {
        if (this.mode === 'inline' && !this.nzDisabled) {
            this.toggleSubMenu.emit();
        }
    }
}
NzSubMenuTitleComponent.ɵfac = function NzSubMenuTitleComponent_Factory(t) { return new (t || NzSubMenuTitleComponent)(); };
NzSubMenuTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzSubMenuTitleComponent, selectors: [["", "nz-submenu-title", ""]], hostVars: 6, hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzSubMenuTitleComponent_click_HostBindingHandler() { return ctx.clickTitle(); })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("padding-left", ctx.paddingLeft, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
    } }, inputs: { nzIcon: "nzIcon", nzTitle: "nzTitle", isMenuInsideDropDown: "isMenuInsideDropDown", nzDisabled: "nzDisabled", paddingLeft: "paddingLeft", mode: "mode" }, outputs: { toggleSubMenu: "toggleSubMenu", subMenuMouseState: "subMenuMouseState" }, exportAs: ["nzSubmenuTitle"], attrs: _c7, ngContentSelectors: _c8, decls: 6, vars: 4, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-dropdown-menu-submenu-arrow", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-arrow"], ["nz-icon", "", "nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"]], template: function NzSubMenuTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzSubMenuTitleComponent_i_0_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzSubMenuTitleComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzSubMenuTitleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMenuInsideDropDown)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzSubMenuTitleComponent.propDecorators = {
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isMenuInsideDropDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paddingLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    toggleSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    subMenuMouseState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzSubMenuTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[nz-submenu-title]',
                exportAs: 'nzSubmenuTitle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <i nz-icon [nzType]="nzIcon" *ngIf="nzIcon"></i>
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span>{{ nzTitle }}</span>
    </ng-container>
    <ng-content></ng-content>
    <span *ngIf="isMenuInsideDropDown; else notDropdownTpl" class="ant-dropdown-menu-submenu-arrow">
      <i nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon"></i>
    </span>
    <ng-template #notDropdownTpl>
      <i class="ant-menu-submenu-arrow"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                    '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                    '[style.paddingLeft.px]': 'paddingLeft',
                    '(click)': 'clickTitle()',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return []; }, { nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isMenuInsideDropDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paddingLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], toggleSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], subMenuMouseState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubmenuInlineChildComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.templateOutlet = null;
        this.menuClass = '';
        this.mode = 'vertical';
        this.nzOpen = false;
        this.listOfCacheClassName = [];
        this.expandState = 'collapsed';
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-menu', 'ant-menu-inline', 'ant-menu-sub');
    }
    calcMotionState() {
        if (this.nzOpen) {
            this.expandState = 'expanded';
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    ngOnInit() {
        this.calcMotionState();
    }
    ngOnChanges(changes) {
        const { mode, nzOpen, menuClass } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
        if (menuClass) {
            if (this.listOfCacheClassName.length) {
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.removeClass(this.elementRef.nativeElement, className);
                });
            }
            if (this.menuClass) {
                this.listOfCacheClassName = this.menuClass.split(' ');
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.addClass(this.elementRef.nativeElement, className);
                });
            }
        }
    }
}
NzSubmenuInlineChildComponent.ɵfac = function NzSubmenuInlineChildComponent_Factory(t) { return new (t || NzSubmenuInlineChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
NzSubmenuInlineChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzSubmenuInlineChildComponent, selectors: [["", "nz-submenu-inline-child", ""]], hostVars: 1, hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@collapseMotion", ctx.expandState);
    } }, inputs: { templateOutlet: "templateOutlet", menuClass: "menuClass", mode: "mode", nzOpen: "nzOpen" }, exportAs: ["nzSubmenuInlineChild"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c9, decls: 1, vars: 1, consts: [[3, "ngTemplateOutlet"]], template: function NzSubmenuInlineChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateOutlet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["collapseMotion"]] }, changeDetection: 0 });
NzSubmenuInlineChildComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
NzSubmenuInlineChildComponent.propDecorators = {
    templateOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzSubmenuInlineChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[nz-submenu-inline-child]',
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["collapseMotion"]],
                exportAs: 'nzSubmenuInlineChild',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
  `,
                host: {
                    '[@collapseMotion]': 'expandState'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { templateOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubmenuNoneInlineChildComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.menuClass = '';
        this.theme = 'light';
        this.templateOutlet = null;
        this.isMenuInsideDropDown = false;
        this.mode = 'vertical';
        this.position = 'right';
        this.nzDisabled = false;
        this.nzOpen = false;
        this.subMenuMouseState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.expandState = 'collapsed';
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-menu-submenu', 'ant-menu-submenu-popup');
    }
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    calcMotionState() {
        if (this.nzOpen) {
            if (this.mode === 'horizontal') {
                this.expandState = 'bottom';
            }
            else if (this.mode === 'vertical') {
                this.expandState = 'active';
            }
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    ngOnInit() {
        this.calcMotionState();
    }
    ngOnChanges(changes) {
        const { mode, nzOpen } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
    }
}
NzSubmenuNoneInlineChildComponent.ɵfac = function NzSubmenuNoneInlineChildComponent_Factory(t) { return new (t || NzSubmenuNoneInlineChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzSubmenuNoneInlineChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzSubmenuNoneInlineChildComponent, selectors: [["", "nz-submenu-none-inline-child", ""]], hostVars: 12, hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left");
    } }, inputs: { menuClass: "menuClass", theme: "theme", templateOutlet: "templateOutlet", isMenuInsideDropDown: "isMenuInsideDropDown", mode: "mode", position: "position", nzDisabled: "nzDisabled", nzOpen: "nzOpen" }, outputs: { subMenuMouseState: "subMenuMouseState" }, exportAs: ["nzSubmenuNoneInlineChild"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c10, decls: 2, vars: 14, consts: [[3, "ngClass"], [3, "ngTemplateOutlet"]], template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.menuClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateOutlet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["zoomBigMotion"], ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["slideMotion"]] }, changeDetection: 0 });
NzSubmenuNoneInlineChildComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzSubmenuNoneInlineChildComponent.propDecorators = {
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    templateOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isMenuInsideDropDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subMenuMouseState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzSubmenuNoneInlineChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[nz-submenu-none-inline-child]',
                exportAs: 'nzSubmenuNoneInlineChild',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["zoomBigMotion"], ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["slideMotion"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [ngClass]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
                host: {
                    '[class.ant-menu-light]': "theme === 'light'",
                    '[class.ant-menu-dark]': "theme === 'dark'",
                    '[class.ant-menu-submenu-placement-bottom]': "mode === 'horizontal'",
                    '[class.ant-menu-submenu-placement-right]': "mode === 'vertical' && position === 'right'",
                    '[class.ant-menu-submenu-placement-left]': "mode === 'vertical' && position === 'left'",
                    '[@slideMotion]': 'expandState',
                    '[@zoomBigMotion]': 'expandState',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], templateOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isMenuInsideDropDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subMenuMouseState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuModule {
}
NzMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzMenuModule });
NzMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzMenuModule, { declarations: function () { return [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzOutletModule"]]; }, exports: function () { return [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_8__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzOutletModule"]],
                declarations: [
                    NzMenuDirective,
                    NzMenuItemDirective,
                    NzSubMenuComponent,
                    NzMenuDividerDirective,
                    NzMenuGroupComponent,
                    NzSubMenuTitleComponent,
                    NzSubmenuInlineChildComponent,
                    NzSubmenuNoneInlineChildComponent
                ],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-menu.js.map

/***/ }),

/***/ "ZZ52":
/*!**********************************!*\
  !*** ./src/app/_store/layout.ts ***!
  \**********************************/
/*! exports provided: layoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutModule", function() { return layoutModule; });
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/storage */ "kVn5");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "FjO5");



const tool = Object(_base__WEBPACK_IMPORTED_MODULE_1__["use"])();
const layoutState = {
    isCollapsed: false,
    lang: Object(_utils_storage__WEBPACK_IMPORTED_MODULE_0__["getLocalLang"])() || 'en-uk',
    keyDown: {}
};
const layoutAction = {};
class LayoutModule extends _base__WEBPACK_IMPORTED_MODULE_1__["Module"] {
    constructor() {
        super(layoutState, layoutAction);
        this.init();
    }
    init() {
        document.onkeydown = (e) => {
            var _a, _b, _c, _d, _e, _f;
            // tslint:disable: no-unused-expression
            const keyDown = this.state.keyDown;
            if (!keyDown[e.key]) {
                keyDown[e.key] = true;
                console.log(this.state.keyDown);
                // ctrl+
                if (keyDown.Control) {
                    // 绑定快捷键
                    keyDown.q && (this.isCollapsed = !this.isCollapsed);
                    keyDown[1] && ((_a = tool.router) === null || _a === void 0 ? void 0 : _a.navigateByUrl('/pages'));
                    keyDown[2] && ((_b = tool.router) === null || _b === void 0 ? void 0 : _b.navigateByUrl('/pages/monitor'));
                    keyDown[3] && ((_c = tool.router) === null || _c === void 0 ? void 0 : _c.navigateByUrl('/pages/users'));
                    keyDown[4] && ((_d = tool.router) === null || _d === void 0 ? void 0 : _d.navigateByUrl('/pages/table'));
                    keyDown[5] && ((_e = tool.router) === null || _e === void 0 ? void 0 : _e.navigateByUrl('/pages/form'));
                    keyDown[6] && ((_f = tool.router) === null || _f === void 0 ? void 0 : _f.navigateByUrl('/pages/setting'));
                    // 保留原生快捷键
                    !(keyDown.z || keyDown.x || keyDown.c || keyDown.v) && e.preventDefault();
                }
            }
            else {
                // 重复触发阻止
                e.preventDefault();
            }
        };
        document.onkeyup = (e) => {
            this.state.keyDown[e.key] = false;
            e.preventDefault();
        };
    }
    get isCollapsed() {
        return this.state.isCollapsed;
    }
    set isCollapsed(v) {
        this.state.isCollapsed = v;
    }
    get lang() {
        return this.state.lang;
    }
    set lang(v) {
        this.state.lang = v;
        Object(_utils_storage__WEBPACK_IMPORTED_MODULE_0__["setLocalLang"])(v);
        window.location.reload();
    }
}
const layoutModule = new LayoutModule();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_component/sidebar/sidebar.component */ "1W6z");
/* harmony import */ var _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_module/yubi-form/yubi-form.module */ "nBK/");



















Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["en_US"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_15__["YubiFormModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__["NzDividerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_15__["YubiFormModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__["NzDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _module_yubi_form_yubi_form_module__WEBPACK_IMPORTED_MODULE_15__["YubiFormModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__["NzDividerModule"],
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["en_US"] }],
            }]
    }], null, null); })();


/***/ }),

/***/ "tAZD":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/en.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'en',
        [['a', 'p'], ['AM', 'PM'], u],
        [['AM', 'PM'], u, u],
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        u,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ]
        ],
        u,
        [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', u, '{1} \'at\' {0}', u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9lbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEI7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQzlFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3BGO2dCQUNFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVztnQkFDckYsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO2FBQ2xDO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztRQUN0RCxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDO1FBQ3hELENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztRQUMzQyxLQUFLO1FBQ0wsR0FBRztRQUNILFdBQVc7UUFDWCxFQUFFO1FBQ0YsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdlbicsXG4gIFtbJ2EnLCAncCddLCBbJ0FNJywgJ1BNJ10sIHVdLFxuICBbWydBTScsICdQTSddLCB1LCB1XSxcbiAgW1xuICAgIFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLCBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgIFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gICAgW1xuICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJyxcbiAgICAgICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snQicsICdBJ10sIFsnQkMnLCAnQUQnXSwgWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11dLFxuICAwLFxuICBbNiwgMF0sXG4gIFsnTS9kL3l5JywgJ01NTSBkLCB5JywgJ01NTU0gZCwgeScsICdFRUVFLCBNTU1NIGQsIHknXSxcbiAgWydoOm1tIGEnLCAnaDptbTpzcyBhJywgJ2g6bW06c3MgYSB6JywgJ2g6bW06c3MgYSB6enp6J10sXG4gIFsnezF9LCB7MH0nLCB1LCAnezF9IFxcJ2F0XFwnIHswfScsIHVdLFxuICBbJy4nLCAnLCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqQjLCMjMC4wMCcsICcjRTAnXSxcbiAgJ1VTRCcsXG4gICckJyxcbiAgJ1VTIERvbGxhcicsXG4gIHt9LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19

/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "+j1i");






const routes = [
    { path: '', component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'welcome' },
            { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
            { path: 'monitor', loadChildren: () => __webpack_require__.e(/*! import() | monitor-monitor-module */ "monitor-monitor-module").then(__webpack_require__.bind(null, /*! ./monitor/monitor.module */ "pqN0")).then(m => m.MonitorModule) },
            { path: 'table', loadChildren: () => Promise.all(/*! import() | table-table-module */[__webpack_require__.e("default~others-not-found-not-found-module~table-table-module"), __webpack_require__.e("table-table-module")]).then(__webpack_require__.bind(null, /*! ./table/table.module */ "QV0w")).then(m => m.TableModule) },
            { path: 'form', loadChildren: () => __webpack_require__.e(/*! import() | form-form-module */ "form-form-module").then(__webpack_require__.bind(null, /*! ./form/form.module */ "Oo3C")).then(m => m.FormModule) },
            { path: 'setting', loadChildren: () => __webpack_require__.e(/*! import() | setting-setting-module */ "setting-setting-module").then(__webpack_require__.bind(null, /*! ./setting/setting.module */ "hBK9")).then(m => m.SettingModule) },
            { path: 'users', loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "+P1L")).then(m => m.UsersModule) },
        ]
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yW9e":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js ***!
  \**********************************************************************************/
/*! exports provided: NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzLayoutModule, NzSiderComponent, ɵNzSiderTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzContentComponent", function() { return NzContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFooterComponent", function() { return NzFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHeaderComponent", function() { return NzHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzLayoutComponent", function() { return NzLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzLayoutModule", function() { return NzLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSiderComponent", function() { return NzSiderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSiderTriggerComponent", function() { return NzSiderTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "JwMs");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["*"];
function NzSiderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSiderComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.setCollapsed(!ctx_r1.nzCollapsed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matchBreakPoint", ctx_r0.matchBreakPoint)("nzCollapsedWidth", ctx_r0.nzCollapsedWidth)("nzCollapsed", ctx_r0.nzCollapsed)("nzBreakpoint", ctx_r0.nzBreakpoint)("nzReverseArrow", ctx_r0.nzReverseArrow)("nzTrigger", ctx_r0.nzTrigger)("nzZeroTrigger", ctx_r0.nzZeroTrigger)("siderWidth", ctx_r0.widthSetting);
} }
const _c1 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzZeroTrigger || _r4);
} }
function NzSiderTriggerComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nzTrigger || _r2);
} }
function NzSiderTriggerComponent_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r8.nzCollapsed ? "right" : "left");
} }
function NzSiderTriggerComponent_ng_template_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r9.nzCollapsed ? "left" : "right");
} }
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSiderTriggerComponent_ng_template_2_i_0_Template, 1, 1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_template_2_i_1_Template, 1, 1, "i", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.nzReverseArrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nzReverseArrow);
} }
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
class NzContentComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
    }
}
NzContentComponent.ɵfac = function NzContentComponent_Factory(t) { return new (t || NzContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NzContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzContentComponent, selectors: [["nz-content"]], exportAs: ["nzContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFooterComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-footer');
    }
}
NzFooterComponent.ɵfac = function NzFooterComponent_Factory(t) { return new (t || NzFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NzFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzFooterComponent, selectors: [["nz-footer"]], exportAs: ["nzFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzFooterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzHeaderComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-header');
    }
}
NzHeaderComponent.ɵfac = function NzHeaderComponent_Factory(t) { return new (t || NzHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NzHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzHeaderComponent, selectors: [["nz-header"]], exportAs: ["nzHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderComponent {
    constructor(platform, cdr, breakpointService, elementRef) {
        this.platform = platform;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.elementRef = elementRef;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.nzMenuDirective = null;
        this.nzCollapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzBreakpoint = null;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        this.matchBreakPoint = false;
        this.flexSetting = null;
        this.widthSetting = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-layout-sider');
    }
    updateStyleMap() {
        this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["toCssPixel"])(this.nzWidth);
        this.flexSetting = `0 0 ${this.widthSetting}`;
        this.cdr.markForCheck();
    }
    updateMenuInlineCollapsed() {
        if (this.nzMenuDirective && this.nzMenuDirective.nzMode === 'inline' && this.nzCollapsedWidth !== 0) {
            this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
        }
    }
    setCollapsed(collapsed) {
        if (collapsed !== this.nzCollapsed) {
            this.nzCollapsed = collapsed;
            this.nzCollapsedChange.emit(collapsed);
            this.updateMenuInlineCollapsed();
            this.updateStyleMap();
            this.cdr.markForCheck();
        }
    }
    ngOnInit() {
        this.updateStyleMap();
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["siderResponsiveMap"], true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
                .subscribe(map => {
                const breakpoint = this.nzBreakpoint;
                if (breakpoint) {
                    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["inNextTick"])().subscribe(() => {
                        this.matchBreakPoint = !map[breakpoint];
                        this.setCollapsed(this.matchBreakPoint);
                        this.cdr.markForCheck();
                    });
                }
            });
        }
    }
    ngOnChanges(changes) {
        const { nzCollapsed, nzCollapsedWidth, nzWidth } = changes;
        if (nzCollapsed || nzCollapsedWidth || nzWidth) {
            this.updateStyleMap();
        }
        if (nzCollapsed) {
            this.updateMenuInlineCollapsed();
        }
    }
    ngAfterContentInit() {
        this.updateMenuInlineCollapsed();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSiderComponent.ɵfac = function NzSiderComponent_Factory(t) { return new (t || NzSiderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["NzBreakpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NzSiderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSiderComponent, selectors: [["nz-sider"]], contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzMenuDirective = _t.first);
    } }, hostVars: 16, hostBindings: function NzSiderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed);
    } }, inputs: { nzWidth: "nzWidth", nzTheme: "nzTheme", nzCollapsedWidth: "nzCollapsedWidth", nzBreakpoint: "nzBreakpoint", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", nzReverseArrow: "nzReverseArrow", nzCollapsible: "nzCollapsible", nzCollapsed: "nzCollapsed" }, outputs: { nzCollapsedChange: "nzCollapsedChange" }, exportAs: ["nzSider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click", 4, "ngIf"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click"]], template: function NzSiderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSiderComponent_div_2_Template, 1, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzCollapsible && ctx.nzTrigger !== null);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], NzSiderTriggerComponent]; }, encapsulation: 2, changeDetection: 0 });
NzSiderComponent.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["NzBreakpointService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NzSiderComponent.propDecorators = {
    nzMenuDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuDirective"],] }],
    nzCollapsedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTheme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCollapsedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzBreakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzZeroTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzReverseArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCollapsible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsed", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-content',
                exportAs: 'nzContent',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-footer',
                exportAs: 'nzFooter',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-header',
                exportAs: 'nzHeader',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSiderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="ant-layout-sider-children">
      <ng-content></ng-content>
    </div>
    <div
      *ngIf="nzCollapsible && nzTrigger !== null"
      nz-sider-trigger
      [matchBreakPoint]="matchBreakPoint"
      [nzCollapsedWidth]="nzCollapsedWidth"
      [nzCollapsed]="nzCollapsed"
      [nzBreakpoint]="nzBreakpoint"
      [nzReverseArrow]="nzReverseArrow"
      [nzTrigger]="nzTrigger"
      [nzZeroTrigger]="nzZeroTrigger"
      [siderWidth]="widthSetting"
      (click)="setCollapsed(!nzCollapsed)"
    ></div>
  `,
                host: {
                    '[class.ant-layout-sider-zero-width]': `nzCollapsed && nzCollapsedWidth === 0`,
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-dark]': `nzTheme === 'dark'`,
                    '[class.ant-layout-sider-collapsed]': `nzCollapsed`,
                    '[style.flex]': 'flexSetting',
                    '[style.maxWidth]': 'widthSetting',
                    '[style.minWidth]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["NzBreakpointService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { nzMenuDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuDirective"]]
        }], nzCollapsedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCollapsedWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzZeroTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzReverseArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCollapsible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-layout');
    }
}
NzLayoutComponent.ɵfac = function NzLayoutComponent_Factory(t) { return new (t || NzLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NzLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzLayoutComponent, selectors: [["nz-layout"]], contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzSiderComponent, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzSiderComponent = _t);
    } }, hostVars: 2, hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
    } }, exportAs: ["nzLayout"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzLayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NzLayoutComponent.propDecorators = {
    listOfNzSiderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzSiderComponent,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-layout',
                exportAs: 'nzLayout',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-layout-has-sider]': 'listOfNzSiderComponent.length > 0'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { listOfNzSiderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzSiderComponent]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderTriggerComponent {
    constructor() {
        this.nzCollapsed = false;
        this.nzReverseArrow = false;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.matchBreakPoint = false;
        this.nzCollapsedWidth = null;
        this.siderWidth = null;
        this.nzBreakpoint = null;
        this.isZeroTrigger = false;
        this.isNormalTrigger = false;
    }
    updateTriggerType() {
        this.isZeroTrigger = this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.matchBreakPoint) || !this.nzBreakpoint);
        this.isNormalTrigger = this.nzCollapsedWidth !== 0;
    }
    ngOnInit() {
        this.updateTriggerType();
    }
    ngOnChanges() {
        this.updateTriggerType();
    }
}
NzSiderTriggerComponent.ɵfac = function NzSiderTriggerComponent_Factory(t) { return new (t || NzSiderTriggerComponent)(); };
NzSiderTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSiderTriggerComponent, selectors: [["", "nz-sider-trigger", ""]], hostVars: 10, hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
    } }, inputs: { nzCollapsed: "nzCollapsed", nzReverseArrow: "nzReverseArrow", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", matchBreakPoint: "matchBreakPoint", nzCollapsedWidth: "nzCollapsedWidth", siderWidth: "siderWidth", nzBreakpoint: "nzBreakpoint" }, exportAs: ["nzSiderTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c1, decls: 6, vars: 2, consts: [[4, "ngIf"], ["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]], template: function NzSiderTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSiderTriggerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSiderTriggerComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZeroTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNormalTrigger);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzSiderTriggerComponent.propDecorators = {
    nzCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzReverseArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzZeroTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    matchBreakPoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCollapsedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    siderWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzBreakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSiderTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[nz-sider-trigger]',
                exportAs: 'nzSiderTrigger',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *ngIf="isZeroTrigger">
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger"></ng-template>
    </ng-container>
    <ng-container *ngIf="isNormalTrigger">
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger"></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" *ngIf="!nzReverseArrow"></i>
      <i nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" *ngIf="nzReverseArrow"></i>
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <i nz-icon nzType="bars"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-layout-sider-trigger]': 'isNormalTrigger',
                    '[style.width]': 'isNormalTrigger ? siderWidth : null',
                    '[class.ant-layout-sider-zero-width-trigger]': 'isZeroTrigger',
                    '[class.ant-layout-sider-zero-width-trigger-right]': 'isZeroTrigger && nzReverseArrow',
                    '[class.ant-layout-sider-zero-width-trigger-left]': 'isZeroTrigger && !nzReverseArrow'
                }
            }]
    }], function () { return []; }, { nzCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzReverseArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzZeroTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matchBreakPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCollapsedWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], siderWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutModule {
}
NzLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzLayoutModule });
NzLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzLayoutModule_Factory(t) { return new (t || NzLayoutModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzLayoutModule, { declarations: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]]; }, exports: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
                exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-layout.js.map

/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map