(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitor-monitor-module"],{

/***/ "Aubn":
/*!****************************************************!*\
  !*** ./src/app/pages/monitor/monitor.component.ts ***!
  \****************************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/user */ "ki88");



class MonitorComponent {
    constructor() { }
    ngOnInit() {
        this.userModule = _store_user__WEBPACK_IMPORTED_MODULE_1__["userModule"];
    }
}
MonitorComponent.ɵfac = function MonitorComponent_Factory(t) { return new (t || MonitorComponent)(); };
MonitorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonitorComponent, selectors: [["app-monitor"]], decls: 4, vars: 1, template: function MonitorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "monitor works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("userId: ", ctx.userModule.userID, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonitorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-monitor',
                templateUrl: './monitor.component.html',
                styleUrls: ['./monitor.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eVmM":
/*!*********************************************************!*\
  !*** ./src/app/pages/monitor/monitor-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MonitorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorRoutingModule", function() { return MonitorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor.component */ "Aubn");





const routes = [{ path: '', component: _monitor_component__WEBPACK_IMPORTED_MODULE_2__["MonitorComponent"] }];
class MonitorRoutingModule {
}
MonitorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MonitorRoutingModule });
MonitorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MonitorRoutingModule_Factory(t) { return new (t || MonitorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MonitorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonitorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pqN0":
/*!*************************************************!*\
  !*** ./src/app/pages/monitor/monitor.module.ts ***!
  \*************************************************/
/*! exports provided: MonitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorModule", function() { return MonitorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _monitor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor-routing.module */ "eVmM");
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor.component */ "Aubn");





class MonitorModule {
}
MonitorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MonitorModule });
MonitorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MonitorModule_Factory(t) { return new (t || MonitorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _monitor_routing_module__WEBPACK_IMPORTED_MODULE_2__["MonitorRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MonitorModule, { declarations: [_monitor_component__WEBPACK_IMPORTED_MODULE_3__["MonitorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _monitor_routing_module__WEBPACK_IMPORTED_MODULE_2__["MonitorRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonitorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_monitor_component__WEBPACK_IMPORTED_MODULE_3__["MonitorComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _monitor_routing_module__WEBPACK_IMPORTED_MODULE_2__["MonitorRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=monitor-monitor-module.js.map