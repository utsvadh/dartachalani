(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-chalani/add-chalani.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-chalani/add-chalani.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder{\r\n    color: blue;\r\n}"

/***/ }),

/***/ "./src/app/add-chalani/add-chalani.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-chalani/add-chalani.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <form>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\">\n        <label>चलानी नं.</label>\n        <input type=\"number\" class=\"form-control\" id=\"chalaniNo\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>चलानी मिति</label>\n        <input type=\"date\" class=\"form-control\" id=\"chalaniDate\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>चलानी पत्र संख्या</label>\n        <input type=\"number\" class=\"form-control\" id=\"chalaniPages\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>चलानी पत्र मिति</label>\n        <input type=\"date\" class=\"form-control\" id=\"chalaniPagesDate\" placeholder=\"\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-3\">\n        <label>पाउनेको नाम</label>\n        <input type=\"text\" class=\"form-control\" id=\"chalaniAddress\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-3\"></div>\n      <div class=\"form-group col-3\">\n        <label>पाउनेको ठेगाना</label>\n        <input type=\"text\" class=\"form-control\" id=\"chalaniAddress\" placeholder=\"\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n          <label>हुलाक/र.नं.</label>\n          <input type=\"number\" class=\"form-control\" id=\"chalaniHulakNo\" placeholder=\"\">\n        </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-6\">\n        <label>विषय</label>\n        <textarea type=\"text\" class=\"form-control\" rows=\"3\" id=\"chalaniSubject\" placeholder=\"\"></textarea>\n      </div>\n   </div>\n   <div class=\"form-row\">\n    <div class=\"form-group col-4\">\n      <label>कैफियत</label>\n      <textarea type=\"text\" class=\"form-control\" rows=\"3\" id=\"chalaniRemarks\" placeholder=\"\"></textarea>\n    </div>\n   </div>\n   <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div> -->\n\n<form [formGroup]=\"chalaniForm\" (ngSubmit)=\"addChalani(chalaniForm.value)\">\n  <div class=\"form-row\">\n    <!-- <div class=\"form-group col-md-3\">\n        <label>दर्ता नं.</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"dartaNo\" placeholder=\"\">\n      </div> -->\n    <div class=\"form-group col-md-3\">\n      <label>चलानी मिति</label>\n      <input type=\"text\" id=\"chalaniDate\" class=\"form-control\" formControlName=\"chalaniDate\" placeholder=\"\" required>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label>चलानी पत्र संख्या</label>\n      <span *ngIf=\"chalaniForm.controls.chalaniPages.invalid && chalaniForm.controls.chalaniPages.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n      <input type=\"number\" class=\"form-control\" formControlName=\"chalaniPages\" placeholder=\"\" required>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label>चलानी पत्र मिति</label>\n      <input type=\"text\" id=\"chalaniPagesDate\" class=\"form-control\" formControlName=\"chalaniPagesDate\" placeholder=\"\" required>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-4\">\n      <label>पाउनेको नाम</label>\n      <span *ngIf=\"chalaniForm.controls.chalaniDestName.invalid && chalaniForm.controls.chalaniDestName.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n      <input type=\"text\" class=\"form-control\" formControlName=\"chalaniDestName\" placeholder=\"\" required>\n    </div>\n    <div class=\"form-group col-3\">\n      <label>पाउनेको ठेगाना</label>\n      <span *ngIf=\"chalaniForm.controls.chalaniDestAddress.invalid && chalaniForm.controls.chalaniDestAddress.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n      <input type=\"text\" class=\"form-control\"  formControlName=\"chalaniDestAddress\" id=\"chalaniDestAddress\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <label>हुलाक/र.नं.</label>\n      <span *ngIf=\"chalaniForm.controls.chalaniHulakNo.invalid && chalaniForm.controls.chalaniHulakNo.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n      <input type=\"text\" class=\"form-control\" formControlName=\"chalaniHulakNo\" id=\"chalaniHulakNo\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-6\">\n      <label>विषय</label>\n      <span *ngIf=\"chalaniForm.controls.chalaniSubject.invalid && chalaniForm.controls.chalaniSubject.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n      <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"chalaniSubject\" placeholder=\"\" required></textarea>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-4\">\n      <label>कैफियत</label>\n      <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"chalaniRemarks\" placeholder=\"\"></textarea>\n    </div>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"chalaniForm.controls.chalaniDestAddress.invalid == true || chalaniForm.controls.chalaniDestName.invalid == true || chalaniForm.controls.chalaniHulakNo.invalid == true || chalaniForm.controls.chalaniSubject.invalid == true || chalaniForm.controls.chalaniPages.invalid == true\">\n  <div id=\"errAlert\" style=\"color: red\" *ngIf=\"chalaniForm.invalid\n            && chalaniForm.controls.chalaniPages.touched \n            && chalaniForm.controls.chalaniDestName.touched\n            && chalaniForm.controls.chalaniDestAddress.touched\n            && chalaniForm.controls.chalaniHulakNo.touched\n            && chalaniForm.controls.chalaniSubject.touched\">\n    {{errAlert}}\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/add-chalani/add-chalani.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-chalani/add-chalani.component.ts ***!
  \******************************************************/
/*! exports provided: AddChalaniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChalaniComponent", function() { return AddChalaniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var adbs = __webpack_require__(/*! ad-bs-converter */ "./node_modules/ad-bs-converter/src/converter.js");
;
var AddChalaniComponent = /** @class */ (function () {
    function AddChalaniComponent(fb, _electron, router) {
        this.fb = fb;
        this._electron = _electron;
        this.router = router;
        this.errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
        this.star = "*";
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var YY = d.getFullYear();
        var MM = (month < 10 ? '0' : '') + month;
        var DD = (day < 10 ? '0' : '') + day;
        var date = adbs.ad2bs(YY + "/" + MM + "/" + DD);
        var convertedDate = date.en.year + "-" + date.en.month + "-" + date.en.day;
        this.chalaniForm = this.fb.group({
            chalaniNo: 0,
            chalaniDate: convertedDate,
            chalaniPages: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(999)])],
            chalaniPagesDate: convertedDate,
            chalaniDestName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniDestAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniHulakNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniRemarks: ''
        });
        console.log(this.chalaniForm.controls);
        this.chalaniForm.valueChanges.subscribe(console.log);
    }
    AddChalaniComponent.prototype.addChalani = function (val) {
        var _dd, _ddd, _dpd;
        _dd = jQuery("#chalaniDate").val();
        _ddd = jQuery("#chalaniDeptDate").val();
        _dpd = jQuery("#chalaniPagesDate").val();
        var _val = {
            chalaniListSchema: {
                chalaniNo: val.chalaniNo,
                chalaniDate: val.chalaniDate,
                chalaniPages: val.chalaniPages,
                chalaniPagesDate: val.chalaniPagesDate,
                chalaniDestName: val.chalaniDestName,
                chalaniDestAddress: val.chalaniDestAddress,
                chalaniSubject: val.chalaniSubject,
                chalaniHulakNo: val.chalaniHulakNo,
                chalaniRemarks: val.chalaniRemarks
            },
            chalaniDate: _dd,
            chalaniPagesDate: _dpd,
        };
        console.log("Hello from addchalani");
        console.log(_val);
        this._electron.ipcRenderer.send('newChalani', _val);
        this._electron.ipcRenderer.on('success', function (event, arg) {
            console.log(arg);
        });
        this.chalaniForm.reset();
        this.router.navigate(['chalani']);
    };
    AddChalaniComponent.prototype.ngOnInit = function () {
        jQuery('#chalaniDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#chalaniPagesDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
    };
    AddChalaniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-chalani',
            template: __webpack_require__(/*! ./add-chalani.component.html */ "./src/app/add-chalani/add-chalani.component.html"),
            styles: [__webpack_require__(/*! ./add-chalani.component.css */ "./src/app/add-chalani/add-chalani.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddChalaniComponent);
    return AddChalaniComponent;
}());



/***/ }),

/***/ "./src/app/add-darta/add-darta.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-darta/add-darta.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-darta/add-darta.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-darta/add-darta.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"dartaForm\" (ngSubmit)=\"addDarta(dartaForm.value)\">\n  <div class=\"form-row\">\n      <!-- <div class=\"form-group col-md-3\">\n        <label>दर्ता नं.</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"dartaNo\" placeholder=\"\">\n      </div> -->\n      <div class=\"form-group col-md-3\">\n        <label>दर्ता मिति</label>\n        <input type=\"text\" id=\"dartaDate\" class=\"form-control nepaliDate\" formControlName=\"dartaDate\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>प्राप्त भएको पत्र संख्या</label>\n        <span *ngIf=\"dartaForm.controls.dartaPages.invalid && dartaForm.controls.dartaPages.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <input type=\"number\" class=\"form-control\" formControlName=\"dartaPages\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>प्राप्त भएको पत्रको मिति</label>\n        <input type=\"text\" id=\"dartaPagesDate\" class=\"form-control\" formControlName=\"dartaPagesDate\" placeholder=\"\" required>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label>पठाउने अफिसको नाम</label>\n        <span *ngIf=\"dartaForm.controls.dartaAddress.invalid && dartaForm.controls.dartaAddress.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"dartaAddress\" placeholder=\"\" required>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-6\">\n        <label>विषय</label>\n        <span *ngIf=\"dartaForm.controls.dartaSubject.invalid && dartaForm.controls.dartaSubject.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaSubject\" placeholder=\"\" required></textarea>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-3\"> \n        <label>बुझिलिने फाटवालाको नाम</label>\n        <span *ngIf=\"dartaForm.controls.dartaDeptName.invalid && dartaForm.controls.dartaDeptName.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"dartaDeptName\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group col-3\">\n        <label>मिति</label>\n        <input type=\"text\" id=\"dartaDeptDate\" class=\"form-control\" formControlName=\"dartaDeptDate\" placeholder=\"\" required>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-4\">\n        <label>कैफियत</label>\n        <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaRemarks\" placeholder=\"\"></textarea>\n      </div>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"dartaForm.controls.dartaAddress.invalid == true || dartaForm.controls.dartaDeptName.invalid == true || dartaForm.controls.dartaSubject.invalid == true || dartaForm.controls.dartaPages.invalid == true\">\n    <div id=\"errAlert\" style=\"color: red\"\n      *ngIf=\"dartaForm.invalid\n            && dartaForm.controls.dartaPages.touched \n            &&  dartaForm.controls.dartaAddress.touched \n            && dartaForm.controls.dartaDeptName.touched\n            && dartaForm.controls.dartaSubject.touched \n            && dartaForm.controls.dartaRemarks.touched\">\n      {{errAlert}}\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/add-darta/add-darta.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-darta/add-darta.component.ts ***!
  \**************************************************/
/*! exports provided: AddDartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDartaComponent", function() { return AddDartaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var adbs = __webpack_require__(/*! ad-bs-converter */ "./node_modules/ad-bs-converter/src/converter.js");
;
var AddDartaComponent = /** @class */ (function () {
    function AddDartaComponent(fb, _electron, router) {
        this.fb = fb;
        this._electron = _electron;
        this.router = router;
        this.errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
        this.star = "*";
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var YY = d.getFullYear();
        var MM = (month < 10 ? '0' : '') + month;
        var DD = (day < 10 ? '0' : '') + day;
        var date = adbs.ad2bs(YY + "/" + MM + "/" + DD);
        var convertedDate = date.en.year + "-" + date.en.month + "-" + date.en.day;
        this.dartaForm = this.fb.group({
            dartaNo: 0,
            dartaDate: convertedDate,
            dartaPages: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(999)])],
            dartaPagesDate: convertedDate,
            dartaAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptDate: convertedDate,
            dartaRemarks: '',
        });
        console.log(this.dartaForm.controls);
        this.dartaForm.valueChanges.subscribe(console.log);
    }
    AddDartaComponent.prototype.addDarta = function (val) {
        var _dd, _ddd, _dpd;
        _dd = jQuery("#dartaDate").val();
        _ddd = jQuery("#dartaDeptDate").val();
        _dpd = jQuery("#dartaPagesDate").val();
        var _val = {
            dartaListSchema: {
                dartaNo: val.dartaNo,
                dartaDate: val.dartaDate,
                dartaPages: val.dartaPages,
                dartaPagesDate: val.dartaPagesDate,
                dartaAddress: val.dartaAddress,
                dartaSubject: val.dartaSubject,
                dartaDeptName: val.dartaDeptName,
                dartaDeptDate: val.dartaDeptDate,
                dartaRemarks: val.dartaRemarks
            },
            dartaDate: _dd,
            dartaPagesDate: _dpd,
            dartaDeptDate: _ddd,
        };
        console.log("Hello from addDarta");
        console.log(_val);
        this._electron.ipcRenderer.send('newDarta', _val);
        this._electron.ipcRenderer.on('success', function (event, arg) {
            console.log(arg);
        });
        this.dartaForm.reset();
        this.router.navigate(['darta']);
    };
    AddDartaComponent.prototype.ngOnInit = function () {
        jQuery('#dartaDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaPagesDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaDeptDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
    };
    AddDartaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-darta',
            template: __webpack_require__(/*! ./add-darta.component.html */ "./src/app/add-darta/add-darta.component.html"),
            styles: [__webpack_require__(/*! ./add-darta.component.css */ "./src/app/add-darta/add-darta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddDartaComponent);
    return AddDartaComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#big-wrapper{\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n}\r\n#pre-login.hide{\r\n    display: none\r\n}\r\n#post-login.hide{\r\n    display: none;\r\n}\r\n#changePassword.hide{\r\n    display: none;\r\n}\r\n#login-wrapper{\r\n    background: #fff;\r\n    font-size: 16px;\r\n    margin: 0 auto;\r\n    max-width: 300px;\r\n    margin-top: 100px;\r\n    padding: 20px;\r\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);   \r\n}\r\n#login-wrapper.inputs{\r\n    display: block;\r\n    margin: auto;\r\n    max-width: 200px;\r\n}\r\n#login-wrapper img{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n#login-wrapper input{\r\n    margin: 5px 0;\r\n}\r\n/* ------------------------------------------------------------------ */\r\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    background: rgb(25, 25, 29);\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n    height: 40px;\r\n    color: #fff;\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\ni, span {\r\n    display: inline-block;\r\n}\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n    background: rgb(240, 233, 233);\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background: #003893;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n#sidebar.active {\r\n    min-width: 100px;\r\n    max-width: 100px;\r\n    text-align: left;\r\n}\r\n#sidebar.active .sidebar-header h3, #sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n#sidebar.active ul li a {\r\n    /* padding: 20px 10px; */\r\n    text-align: left;\r\n}\r\n#sidebar.active ul li a i {\r\n    margin-right:  0;\r\n    display: block;\r\n}\r\n#sidebar.active ul ul a {\r\n    padding: 5px !important;\r\n    padding-right: 10px;\r\n}\r\n#sidebar.active a[aria-expanded=\"false\"]::before, #sidebar.active a[aria-expanded=\"true\"]::before {\r\n    top: auto;\r\n    bottom: 5px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n#sidebar .sidebar-header {\r\n    background: #003893;\r\n    padding: 10px;\r\n    padding-bottom: 8px;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: #003893;\r\n    background: #fff;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #003893;\r\n}\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n    display: block;\r\n    position: absolute;\r\n    right: 20px;\r\n}\r\na[aria-expanded=\"true\"]::before {\r\n\r\n}\r\nul ul a {\r\n    font-size:14px !important;\r\n    padding-left: 30px !important;\r\n    background: #003893;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 14px !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\na.download {\r\n    background: #fff;\r\n    color: #003893;\r\n}\r\na.article, a.article:hover {\r\n    background: #003893 !important;\r\n    color: #fff !important;\r\n}\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n#content {\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n    width: 100%;\r\n}\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important ;\r\n    }\r\n    a[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n        top: auto;\r\n        bottom: 5px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    #sidebar .sidebar-header h3, #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n\r\n    #sidebar ul li a i {\r\n        margin-right:  0;\r\n        display: block;\r\n    }\r\n\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n#routerContent{\r\n    padding: 20px;\r\n}\r\nfooter{\r\n    background: #dc143c;\r\n    padding: 3px 15px;\r\n    color: #fff;\r\n    text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"big-wrapper\">\n  <div id=\"pre-login\">\n    <div id=\"login-wrapper\">\n      <img src=\"assets/logo.png\" height=\"60px\" width=\"60px\">\n      <br>\n      <div id=\"errAlert\" *ngIf=\"this.loginFlag\" class=\"text-danger\" style=\"font-size: 9px\">{{errAlert}}</div>\n      <form id=\"loginForm\" #loginForm=\"ngForm\">\n        <div class=\"form-group text-center\">\n          <div class=\"inputs\">\n            <input type=\"text\" placeholder=\"Username\" class=\"form-control\" [(ngModel)]=\"_username\" name=\"_username\">\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [(ngModel)]=\"_password\" name=\"_password\">\n          </div>\n          <br>\n          <input type=\"button\" class=\"btn btn-primary\" id=\"signInButton\" value=\"Log In\" (click)=\"onSignIn();loginForm.reset();\">\n        </div>\n      </form>\n    </div>\n  </div>\n  \n  <div id=\"post-login\" class=\"hide\">\n    <div class=\"wrapper\">\n      <!-- Sidebar Holder -->\n      <nav id=\"sidebar\">\n        <div class=\"sidebar-header\">\n          <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-link\">\n            <i class=\"fas fa-bars fa-lg\"></i>\n          </button>\n        </div>\n        <div class=\"menuItems\">\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#dartaSubmenu\" data-toggle=\"collapse\">\n                <i class=\"fas fa-sign-in-alt\"></i>\n                दर्ता\n              </a>\n              <ul class=\"collapse list-unstyled text-left\" id=\"dartaSubmenu\">\n                <li>\n                  <a routerLink=\"/add-darta\" routerLinkActive=\"active\">नयाँ</a>\n                </li>\n                <li>\n                  <a routerLink=\"/darta\" routerLinkActive=\"active\">दर्ताको सूची</a>\n                </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"#chalaniSubmenu\" data-toggle=\"collapse\">\n                <i class=\"fas fa-sign-out-alt\"></i>\n                चलानी\n              </a>\n              <ul class=\"collapse list-unstyled\" id=\"chalaniSubmenu\">\n                <li>\n                  <a routerLink=\"/add-chalani\" routerLinkActive=\"active\">नयाँ</a>\n                </li>\n                <li>\n                  <a routerLink=\"/chalani\" routerLinkActive=\"active\">चलानिको सूची</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n  \n  \n      </nav>\n  \n      <!-- Page Content Holder -->\n      <div id=\"content\">\n        <nav class=\"navbar justify-content-end navbar-dark bg-dark\">\n          <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-link\">ड्यासबोर्ड</a>\n          <input type=\"button\" class=\"btn btn-success btn-sm nav-link\" value=\"पासवोर्ड परिवर्तन\" (click)=\"togglePasswordChange()\">\n          <p>&nbsp;&nbsp;</p>\n          <input type=\"button\" class=\"btn btn-danger btn-sm nav-link\" value=\"Log Out\" (click)=\"logOut()\">\n        </nav>\n        <div id=\"routerContent\">\n          <router-outlet></router-outlet>\n        </div>\n        <!-- <div style=\"position: inline-block\">\n          <img src=\"assets/Emblem_of_Nepal.svg\" style=\"position: absolute;bottom: 40px;right: 30px; height: 60px;width:63px;\">\n        </div> -->\n      </div>\n    </div>\n    <footer class=\"fixed-bottom\">\n      (c) सर्वाधिकार सुरक्षित, तित्रा इनोभेसन सेन्टर, बि.सं २०७५ | तकिनिकी सहायता सम्पर्क : ०९१-५२२७५७\n    </footer>\n  </div>\n\n  <div id=\"changePassword\" class=\"hide\">\n    <div id=\"login-wrapper\">\n      <img src=\"assets/logo.png\" height=\"60px\" width=\"60px\">\n      <br>\n      <div id=\"errAlert\" *ngIf=\"this.changePasswordFlag\" class=\"text-danger\" style=\"font-size: 9px\">{{errAlertPass}}</div>\n      <form id=\"changePasswordForm\" #changePasswordForm=\"ngForm\">\n        <div class=\"form-group text-center\">\n          <div class=\"inputs\">\n            <input type=\"text\" placeholder=\"Username\" class=\"form-control\" [(ngModel)]=\"_oldusername\" name=\"_oldusername\">\n            <input type=\"password\" placeholder=\"पुरानो पासवोर्ड\" class=\"form-control\" [(ngModel)]=\"_oldpassword\" name=\"_oldpassword\">\n            <input type=\"password\" placeholder=\"नयाँ पासवोर्ड\" class=\"form-control\" [(ngModel)]=\"_newpassword1\" name=\"_newpassword1\">\n            <input type=\"password\" placeholder=\"पुनः नयाँ पासवोर्ड\" class=\"form-control\" [(ngModel)]=\"_newpassword2\" name=\"_newpassword2\">\n          </div>\n          <br>\n          <input type=\"button\" class=\"form-control btn btn-primary\" id=\"changePasswordButton\" value=\"Update Password\" (click)=\"changePassword();changePasswordForm.reset()\">\n          <input type=\"button\" class=\"form-control btn btn-danger\" id=\"closeChangePasswordButton\" value=\"Back\" (click)=\"toggleClassLogIn()\">\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_electron) {
        this._electron = _electron;
        this.errAlert = "Username or Password Invalid. Please try again!";
        this.errAlertPass = "Incorrect old password and/or new passwords did not match.";
        this.title = 'app';
        this.flag = false;
        this.loginFlag = false;
        this.changePasswordFlag = false;
    }
    AppComponent.prototype.toggleClassLogIn = function () {
        $('#pre-login').addClass('hide');
        $('#post-login').removeClass('hide');
        $('#changePassword').addClass('hide');
        console.log("Login valid");
        this.loginFlag = false;
        this.changePasswordFlag = false;
    };
    AppComponent.prototype.toggleClassLogOut = function () {
        $('#pre-login').removeClass('hide');
        $('#post-login').addClass('hide');
        $('#changePassword').addClass('hide');
        console.log("Logged Out");
        this.loginFlag = false;
    };
    AppComponent.prototype.togglePasswordChange = function () {
        $('#pre-login').addClass('hide');
        $('#post-login').addClass('hide');
        $('#changePassword').removeClass('hide');
    };
    AppComponent.prototype.onSignIn = function () {
        var i;
        // $('#pre-login').toggleClass('hide');
        // $('#post-login').toggleClass('hide');
        for (i in this.userList) {
            if (this._username === this.userList[i].username && this._password === this.userList[i].password) {
                this.toggleClassLogIn();
                $("loginForm").trigger("reset");
                return false;
            }
            else
                console.log("Login invalid");
            this.loginFlag = true;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getUsers();
        setTimeout(function () {
            console.log("abcd" + this.flag);
        }, 400);
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this._electron.ipcRenderer.send('listUsers', 'listUsers');
        this._electron.ipcRenderer.on('usersListReceived', function (event, arg) {
            _this.userList = arg;
            console.log(_this.userList);
            _this.flag = true;
        });
    };
    AppComponent.prototype.logOut = function () {
        this.getUsers();
        setTimeout(function () {
            console.log("abcd" + this.flag);
        }, 400);
        this.toggleClassLogOut();
        this.loginFlag = false;
        this.changePasswordFlag = false;
    };
    AppComponent.prototype.changePassword = function () {
        for (var i in this.userList) {
            if (this._oldusername === this.userList[i].username && this._oldpassword === this.userList[i].password && this._newpassword1 === this._newpassword2) {
                this._electron.ipcRenderer.send('updatePassword', this._newpassword1);
                this.logOut();
            }
            else {
                console.log("Incorrect old password and/or new passwords did not match.");
                this.changePasswordFlag = true;
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _darta_darta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./darta/darta.component */ "./src/app/darta/darta.component.ts");
/* harmony import */ var _chalani_chalani_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chalani/chalani.component */ "./src/app/chalani/chalani.component.ts");
/* harmony import */ var _add_darta_add_darta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-darta/add-darta.component */ "./src/app/add-darta/add-darta.component.ts");
/* harmony import */ var _add_chalani_add_chalani_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-chalani/add-chalani.component */ "./src/app/add-chalani/add-chalani.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _fetch_darta_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fetch-darta.service */ "./src/app/fetch-darta.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Importing Reactive Forms Module


//Importing Electron Files



var appRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    { path: 'darta', component: _darta_darta_component__WEBPACK_IMPORTED_MODULE_4__["DartaComponent"], runGuardsAndResolvers: 'always' },
    { path: 'chalani', component: _chalani_chalani_component__WEBPACK_IMPORTED_MODULE_5__["ChalaniComponent"], runGuardsAndResolvers: 'always' },
    { path: 'add-darta', component: _add_darta_add_darta_component__WEBPACK_IMPORTED_MODULE_6__["AddDartaComponent"] },
    { path: 'add-chalani', component: _add_chalani_add_chalani_component__WEBPACK_IMPORTED_MODULE_7__["AddChalaniComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _darta_darta_component__WEBPACK_IMPORTED_MODULE_4__["DartaComponent"],
                _chalani_chalani_component__WEBPACK_IMPORTED_MODULE_5__["ChalaniComponent"],
                _add_darta_add_darta_component__WEBPACK_IMPORTED_MODULE_6__["AddDartaComponent"],
                _add_chalani_add_chalani_component__WEBPACK_IMPORTED_MODULE_7__["AddChalaniComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true, onSameUrlNavigation: 'reload' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_11__["NgxElectronModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]
            ],
            providers: [_fetch_darta_service__WEBPACK_IMPORTED_MODULE_12__["FetchDartaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chalani/chalani.component.css":
/*!***********************************************!*\
  !*** ./src/app/chalani/chalani.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chalani/chalani.component.html":
/*!************************************************!*\
  !*** ./src/app/chalani/chalani.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flag\">\n  <div class=\"table-responsive-sm\">\n    <table datatable [dtOptions]=\"dtOptions\" dtInstance=\"dtInstance\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"table table-sm\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th width=\"5%\">चलानी नं</th>\n          <th width=\"8%\">चलानी मिति</th>\n          <th width=\"7%\">पत्र संख्या</th>\n          <th width=\"9%\">चलानी पत्र मिति</th>\n          <th width=\"13%\">पाउने अफिसको नाम</th>\n          <th width=\"14%\">ठेगाना</th>\n          <th width=\"13%\">विषय</th>\n          <th width=\"5%\">हुलाक/र.नं.</th>\n          <th width=\"10%\">कैफियत</th>\n          <th width=\"3%\" class=\"no-arrow\"></th>\n          <th width=\"3%\" class=\"no-arrow\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let items of chalaniList \" class=\"table-light\">\n          <td width=\"5%\" class=\"table-light \">{{items.chalaniNo}}</td>\n          <td width=\"8%\" class=\"table-light \">{{items.chalaniDate}}</td>\n          <td width=\"7%\" class=\"table-light \">{{items.chalaniPages}}</td>\n          <td width=\"9%\" class=\"table-light \">{{items.chalaniPagesDate}}</td>\n          <td width=\"13%\" class=\"table-light \">{{items.chalaniDestName}}</td>\n          <td width=\"13%\" class=\"table-light \">{{items.chalaniDestAddress}}</td>\n          <td width=\"14%\" class=\"table-light \">{{items.chalaniSubject}}</td>\n          <td width=\"5%\" class=\"table-light \">{{items.chalaniHulakNo}}</td>\n          <td width=\"10%\" class=\"table-light \">{{items.chalaniRemarks}}</td>\n          <th width=\"3%\">\n            <button (click)=\"dataParse(items)\" data-toggle=\"modal\" data-target=\"#editChalani\" class=\"btn btn-success btn-sm\">\n              <i class=\"fas fa-edit\"></i>\n            </button>\n          </th>\n          <th width=\"3%\">\n            <button (click)=\"dataParse(items)\" data-toggle=\"modal\" data-target=\"#confirmDeleteChalani\" class=\"btn btn-danger btn-sm\">\n              <i class=\"fas fa-trash-alt\"></i>\n            </button>\n          </th>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"confirmDeleteChalani\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalTitle\">चलानी खारेज</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"modal\">\n        <h5 class=\"text-danger\">एकचोटी हटाईएको इन्ट्री पुनः प्राप्त हुदैन!</h5>\n      </div>\n      <div class=\"modal-footer\">\n        <input type=\"button\" class=\"btn btn-danger\" value=\"Confirm Delete\" (click)=\"deleteChalani()\" data-dismiss=\"modal\">\n        <input type=\"button\" class=\"btn btn-primary\" value=\"Close\" data-dismiss=\"modal\">\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"editChalani\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalTitle\">दर्ता सम्पादन</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"modal\">\n        <form [formGroup]=\"chalaniForm\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-3\">\n                <label>चलानी नं.</label>\n                <input type=\"number\" class=\"form-control\" formControlName=\"chalaniNo\" disabled placeholder=\"\">\n              </div>\n            <div class=\"form-group col-md-3\">\n              <label>चलानी मिति</label>\n              <input type=\"text\" id=\"chalaniDate\" class=\"form-control\" formControlName=\"chalaniDate\" placeholder=\"\" required>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label>चलानी पत्र संख्या</label>\n              <span *ngIf=\"chalaniForm.controls.chalaniPages.invalid && chalaniForm.controls.chalaniPages.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n              <input type=\"number\" class=\"form-control\" formControlName=\"chalaniPages\" placeholder=\"\" required>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label>चलानी पत्र मिति</label>\n              <input type=\"text\" id=\"chalaniPagesDate\" class=\"form-control\" formControlName=\"chalaniPagesDate\" placeholder=\"\" required>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n              <label>पाउनेको नाम</label>\n              <span *ngIf=\"chalaniForm.controls.chalaniDestName.invalid && chalaniForm.controls.chalaniDestName.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n              <input type=\"text\" class=\"form-control\" formControlName=\"chalaniDestName\" placeholder=\"\" required>\n            </div>\n            <div class=\"form-group col-3\">\n              <label>पाउनेको ठेगाना</label>\n              <span *ngIf=\"chalaniForm.controls.chalaniDestAddress.invalid && chalaniForm.controls.chalaniDestAddress.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n              <input type=\"text\" class=\"form-control\" formControlName=\"chalaniDestAddress\" id=\"chalaniDestAddress\" placeholder=\"\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-3\">\n              <label>हुलाक/र.नं.</label>\n              <span *ngIf=\"chalaniForm.controls.chalaniHulakNo.invalid && chalaniForm.controls.chalaniHulakNo.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n              <input type=\"text\" class=\"form-control\" formControlName=\"chalaniHulakNo\" id=\"chalaniHulakNo\" placeholder=\"\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-6\">\n              <label>विषय</label>\n              <span *ngIf=\"chalaniForm.controls.chalaniSubject.invalid && chalaniForm.controls.chalaniSubject.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n              <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"chalaniSubject\" placeholder=\"\" required></textarea>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-4\">\n              <label>कैफियत</label>\n              <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"chalaniRemarks\" placeholder=\"\"></textarea>\n            </div>\n          </div>\n          <div id=\"errAlert\" style=\"color: red\" *ngIf=\"chalaniForm.invalid\n                                && chalaniForm.controls.chalaniPages.touched \n                                && chalaniForm.controls.chalaniDestName.touched\n                                && chalaniForm.controls.chalaniDestAddress.touched\n                                && chalaniForm.controls.chalaniHulakNo.touched\n                                && chalaniForm.controls.chalaniSubject.touched\">\n            {{errAlert}}\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"chalaniForm.controls.chalaniDestAddress.invalid == true || chalaniForm.controls.chalaniDestName.invalid == true || chalaniForm.controls.chalaniHulakNo.invalid == true || chalaniForm.controls.chalaniSubject.invalid == true || chalaniForm.controls.chalaniPages.invalid == true\"  (click)=\"editChalani(chalaniForm.value)\" data-dismiss=\"modal\">\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/chalani/chalani.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chalani/chalani.component.ts ***!
  \**********************************************/
/*! exports provided: ChalaniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChalaniComponent", function() { return ChalaniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var adbs = __webpack_require__(/*! ad-bs-converter */ "./node_modules/ad-bs-converter/src/converter.js");
;
;
var ChalaniComponent = /** @class */ (function () {
    function ChalaniComponent(fb, _electron, router) {
        var _this = this;
        this.fb = fb;
        this._electron = _electron;
        this.router = router;
        this.errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
        this.star = "*";
        // Initialize ParsedData
        this.utsav = "Prabesh Chutiya";
        this.dtOptions = {
            dom: "<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            select: true,
            buttons: [
                'excel',
                'copy',
            ],
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
        };
        this.flag = false;
        this.chalaniList = null;
        this.parsedData = {
            chalaniNo: 1,
            chalaniDate: "a",
            chalaniPages: 1,
            chalaniPagesDate: "a",
            chalaniDestName: "a",
            chalaniDestAddress: "a",
            chalaniSubject: "a",
            chalaniHulakNo: "a",
            chalaniRemarks: "a"
        };
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    ChalaniComponent.prototype.initialiseInvites = function () {
        // Set default values and re-fetch any data you need.
        this.getChalani();
        setTimeout(function () {
        }, 400);
    };
    ChalaniComponent.prototype.ngOnDestroy = function () {
        // avoid memory leaks here by cleaning up after ourselves. If we  
        // don't then we will continue to run our initialiseInvites()   
        // method on every navigationEnd event.
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    ChalaniComponent.prototype.ngOnInit = function () {
        this.getChalani();
        setTimeout(function () {
        }, 400);
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var YY = d.getFullYear();
        var MM = (month < 10 ? '0' : '') + month;
        var DD = (day < 10 ? '0' : '') + day;
        var date = adbs.ad2bs(YY + "/" + MM + "/" + DD);
        var convertedDate = date.en.year + "-" + date.en.month + "-" + date.en.day;
        this.chalaniForm = this.fb.group({
            chalaniNo: 0,
            chalaniDate: convertedDate,
            chalaniPages: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(999)])],
            chalaniPagesDate: convertedDate,
            chalaniDestName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniDestAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniHulakNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chalaniRemarks: ''
        });
        console.log(this.chalaniForm.controls);
        this.chalaniForm.valueChanges.subscribe(console.log);
    };
    ChalaniComponent.prototype.getChalani = function () {
        var _this = this;
        this._electron.ipcRenderer.send('listChalani', 'listchalani');
        this._electron.ipcRenderer.on('chalaniListReceived', function (event, arg) {
            _this.chalaniList = arg;
            _this.parsedData = arg;
            _this.flag = true;
        });
    };
    ChalaniComponent.prototype.deleteChalani = function () {
        this._electron.ipcRenderer.send('deleteChalani', this.parsedData);
        this._electron.ipcRenderer.on('chalaniDeleted', function (event, arg) {
            console.log("deleted chalani");
            // console.log(arg);
        });
        this.router.navigate(['chalani']);
    };
    ChalaniComponent.prototype.editChalani = function (val) {
        var _dd, _dpd;
        _dd = jQuery("#chalaniDate").val();
        _dpd = jQuery("#chalaniPagesDate").val();
        var _val = {
            chalaniListSchema: {
                chalaniNo: val.chalaniNo,
                chalaniDate: val.chalaniDate,
                chalaniPages: val.chalaniPages,
                chalaniPagesDate: val.chalaniPagesDate,
                chalaniDestName: val.chalaniDestName,
                chalaniDestAddress: val.chalaniDestAddress,
                chalaniSubject: val.chalaniSubject,
                chalaniHulakNo: val.chalaniHulakNo,
                chalaniRemarks: val.chalaniRemarks
            },
            chalaniDate: _dd,
            chalaniPagesDate: _dpd,
        };
        console.log("Hello from addchalani");
        console.log(_val);
        console.log("edit");
        console.log(val);
        this._electron.ipcRenderer.send('editChalani', _val);
        this._electron.ipcRenderer.on('chalaniEdited', function (event, arg) {
            console.log("edited chalani");
            // console.log(arg);
        });
        this.router.navigate(['chalani']);
    };
    ChalaniComponent.prototype.dataParse = function (data) {
        jQuery('#chalaniDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#chalaniPagesDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        this.parsedData = data;
        // console.log(this.parsedData);
        this.chalaniForm.get('chalaniNo').setValue(this.parsedData.chalaniNo);
        this.chalaniForm.get('chalaniDate').setValue(this.parsedData.chalaniDate);
        this.chalaniForm.get('chalaniPages').setValue(this.parsedData.chalaniPages);
        this.chalaniForm.get('chalaniPagesDate').setValue(this.parsedData.chalaniPagesDate);
        this.chalaniForm.get('chalaniDestName').setValue(this.parsedData.chalaniDestName);
        this.chalaniForm.get('chalaniDestAddress').setValue(this.parsedData.chalaniDestAddress);
        this.chalaniForm.get('chalaniSubject').setValue(this.parsedData.chalaniSubject);
        this.chalaniForm.get('chalaniHulakNo').setValue(this.parsedData.chalaniHulakNo);
        this.chalaniForm.get('chalaniRemarks').setValue(this.parsedData.chalaniRemarks);
    };
    ChalaniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chalani',
            template: __webpack_require__(/*! ./chalani.component.html */ "./src/app/chalani/chalani.component.html"),
            styles: [__webpack_require__(/*! ./chalani.component.css */ "./src/app/chalani/chalani.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChalaniComponent);
    return ChalaniComponent;
}());



/***/ }),

/***/ "./src/app/darta/darta.component.css":
/*!*******************************************!*\
  !*** ./src/app/darta/darta.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\ntable{\r\n    border-collapse:collapse; \r\n    table-layout:fixed; \r\n    width: 100%;\r\n}\r\n\r\ntable td {\r\n    border:solid 1px #fab;  \r\n    word-wrap:break-word;\r\n} */"

/***/ }),

/***/ "./src/app/darta/darta.component.html":
/*!********************************************!*\
  !*** ./src/app/darta/darta.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flag\">\n    <div class=\"table-responsive-sm\">\n        <table datatable [dtOptions]=\"dtOptions\" dtInstance=\"dtInstance\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"table table-sm\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th width=\"5%\">दर्ता नं</th>\n                    <th width=\"8%\">दर्ता मिति</th>\n                    <th width=\"7%\">पत्र संख्या</th>\n                    <th width=\"9%\">प्राप्त मिति</th>\n                    <th width=\"13%\">पठाउने अफिसको नाम</th>\n                    <th width=\"15%\">विषय</th>\n                    <th width=\"15%\">फाटंको नाम</th>\n                    <th width=\"9%\">फाटंमा गएको मिति</th>\n                    <th width=\"13%\">कैफियत</th>\n                    <th width=\"3%\" class=\"no-arrow\"></th>\n                    <th width=\"3%\" class=\"no-arrow\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let items of dartaList \" class=\"table-light\">\n                    <td width=\"5%\" class=\"table-light \">{{items.dartaNo}}</td>\n                    <td width=\"8%\" class=\"table-light \">{{items.dartaDate}}</td>\n                    <td width=\"7%\" class=\"table-light \">{{items.dartaPages}}</td>\n                    <td width=\"9%\" class=\"table-light \">{{items.dartaPagesDate}}</td>\n                    <td width=\"13%\" class=\"table-light \">{{items.dartaAddress}}</td>\n                    <td width=\"15%\" class=\"table-light \">{{items.dartaSubject}}</td>\n                    <td width=\"15%\" class=\"table-light \">{{items.dartaDeptName}}</td>\n                    <td width=\"9%\" class=\"table-light \">{{items.dartaDeptDate}}</td>\n                    <td width=\"13%\" class=\"table-light \">{{items.dartaRemarks}}</td>\n                    <th width=\"3%\">\n                        <button (click)=\"dataParse(items)\" data-toggle=\"modal\" data-target=\"#editDarta\" class=\"btn btn-success btn-sm\">\n                            <i class=\"fas fa-edit\"></i>\n                        </button>\n                    </th>\n                    <th width=\"3%\">\n                        <button (click)=\"dataParse(items)\" data-toggle=\"modal\" data-target=\"#confirmDeleteDarta\" class=\"btn btn-danger btn-sm\">\n                            <i class=\"fas fa-trash-alt\"></i>\n                        </button>\n                    </th>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"confirmDeleteDarta\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"modalTitle\">दर्ता खारेज</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" id=\"modal\">\n                <h5 class=\"text-danger\">एकचोटी हटाईएको इन्ट्री पुनः प्राप्त हुदैन!</h5>\n            </div>\n            <div class=\"modal-footer\">\n                <input type=\"button\" class=\"btn btn-danger\" value=\"Confirm Delete\" (click)=\"deleteDarta()\" data-dismiss=\"modal\">\n                <input type=\"button\" class=\"btn btn-primary\" value=\"Close\" data-dismiss=\"modal\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"editDarta\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"modalTitle\">दर्ता सम्पादन</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" id=\"modal\">\n                <form [formGroup]=\"dartaForm\" id=\"editForm\">\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-3\">\n                            <label>दर्ता नं.</label>\n                            <input type=\"number\" class=\"form-control\" formControlName=\"dartaNo\" disabled placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label>दर्ता मिति</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dartaDateEdit\" formControlName=\"dartaDate\" placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label>पत्र संख्या</label>\n                            <span *ngIf=\"dartaForm.controls.dartaPages.invalid && dartaForm.controls.dartaPages.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <input type=\"number\" class=\"form-control\" formControlName=\"dartaPages\" placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label>पत्रको मिति</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dartaPagesDateEdit\" formControlName=\"dartaPagesDate\" placeholder=\"\">\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-4\">\n                            <label>पठाउने अफिसको नाम</label>\n                            <span *ngIf=\"dartaForm.controls.dartaAddress.invalid && dartaForm.controls.dartaAddress.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dartaAddress\" placeholder=\"\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-6\">\n                            <label>विषय</label>\n                            <span *ngIf=\"dartaForm.controls.dartaSubject.invalid && dartaForm.controls.dartaSubject.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaSubject\" placeholder=\"\" required></textarea>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-3\">\n                            <label>बुझिलिने फाटवालाको नाम</label>\n                            <span *ngIf=\"dartaForm.controls.dartaDeptName.invalid && dartaForm.controls.dartaDeptName.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dartaDeptName\" placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-3\">\n                            <label>मिति</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dartaDeptDateEdit\" formControlName=\"dartaDeptDate\" placeholder=\"\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-4\">\n                            <label>कैफियत</label>\n                            <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaRemarks\" placeholder=\"\"></textarea>\n                        </div>\n                    </div>\n                    <div id=\"errAlert\" style=\"color: red\" \n                        *ngIf=\"dartaForm.invalid\n                                && dartaForm.controls.dartaPages.touched \n                                &&  dartaForm.controls.dartaAddress.touched \n                                && chalaniForm.controls.dartaDeptName.touched\n                                && dartaForm.controls.dartaSubject.touched \n                                && dartaForm.controls.dartaRemarks.touched\">\n                        {{errAlert}}\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"dartaForm.controls.dartaAddress.invalid == true || dartaForm.controls.dartaDeptName.invalid == true || dartaForm.controls.dartaSubject.invalid == true || dartaForm.controls.dartaPages.invalid == true\" (click)=\"editDarta(dartaForm.value)\" data-dismiss=\"modal\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n   "

/***/ }),

/***/ "./src/app/darta/darta.component.ts":
/*!******************************************!*\
  !*** ./src/app/darta/darta.component.ts ***!
  \******************************************/
/*! exports provided: DartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DartaComponent", function() { return DartaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _fetch_darta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch-darta.service */ "./src/app/fetch-darta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var adbs = __webpack_require__(/*! ad-bs-converter */ "./node_modules/ad-bs-converter/src/converter.js");
;
;
// let abc = {
//   dartaNo: 1, dartaDate: "a", dartaPages: 1, dartaPagesDate:"a", dartaAddress:"a", dartaSubject:"a", dartaDeptName:"a", dartaDeptDate:"a",dartaRemarks: "a"
// }
var DartaComponent = /** @class */ (function () {
    function DartaComponent(fb, _electron, fetchDarta, router) {
        var _this = this;
        this.fb = fb;
        this._electron = _electron;
        this.fetchDarta = fetchDarta;
        this.router = router;
        this.errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
        this.star = "*";
        // Initialize ParsedData
        this.utsav = "Prabesh Chutiya";
        this.dtOptions = {
            dom: "<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            select: true,
            buttons: [
                'excel',
                'copy',
            ],
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
        };
        this.flag = false;
        this.dartaList = null;
        this.parsedData = {
            dartaNo: 1, dartaDate: "a",
            dartaPages: 1, dartaPagesDate: "a",
            dartaAddress: "a", dartaSubject: "a",
            dartaDeptName: "a", dartaDeptDate: "a",
            dartaRemarks: "a"
        };
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    DartaComponent.prototype.initialiseInvites = function () {
        // Set default values and re-fetch any data you need.
        this.getDarta();
        setTimeout(function () {
        }, 400);
    };
    DartaComponent.prototype.ngOnDestroy = function () {
        // avoid memory leaks here by cleaning up after ourselves. If we  
        // don't then we will continue to run our initialiseInvites()   
        // method on every navigationEnd event.
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    DartaComponent.prototype.ngOnInit = function () {
        this.getDarta();
        setTimeout(function () {
        }, 400);
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var YY = d.getFullYear();
        var MM = (month < 10 ? '0' : '') + month;
        var DD = (day < 10 ? '0' : '') + day;
        var date = adbs.ad2bs(YY + "/" + MM + "/" + DD);
        var convertedDate = date.en.year + "-" + date.en.month + "-" + date.en.day;
        this.dartaForm = this.fb.group({
            dartaNo: 0,
            dartaDate: convertedDate,
            dartaPages: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(999)])],
            dartaPagesDate: convertedDate,
            dartaAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptDate: convertedDate,
            dartaRemarks: '',
        });
        console.log(this.dartaForm.controls);
        this.dartaForm.valueChanges.subscribe(console.log);
    };
    DartaComponent.prototype.getDarta = function () {
        var _this = this;
        this._electron.ipcRenderer.send('listDarta', 'listDarta');
        this._electron.ipcRenderer.on('dartaListReceived', function (event, arg) {
            _this.dartaList = arg;
            _this.parsedData = arg;
            _this.flag = true;
        });
    };
    DartaComponent.prototype.deleteDarta = function () {
        this._electron.ipcRenderer.send('deleteDarta', this.parsedData);
        this._electron.ipcRenderer.on('dartaDeleted', function (event, arg) {
            console.log("deleted Darta");
            // console.log(arg);
        });
        this.router.navigate(['darta']);
    };
    DartaComponent.prototype.editDarta = function (val) {
        var _dd1, _ddd1, _dpd1;
        _dd1 = jQuery("#dartaDateEdit").val();
        _ddd1 = jQuery("#dartaDeptDateEdit").val();
        _dpd1 = jQuery("#dartaPagesDateEdit").val();
        console.log("Values from jquery");
        console.log(_dd1);
        console.log(_ddd1);
        console.log(_dpd1);
        var _val = {
            dartaListSchema: {
                dartaNo: val.dartaNo,
                dartaDate: val.dartaDate,
                dartaPages: val.dartaPages,
                dartaPagesDate: val.dartaPagesDate,
                dartaAddress: val.dartaAddress,
                dartaSubject: val.dartaSubject,
                dartaDeptName: val.dartaDeptName,
                dartaDeptDate: val.dartaDeptDate,
                dartaRemarks: val.dartaRemarks
            },
            dartaDate: _dd1,
            dartaPagesDate: _dpd1,
            dartaDeptDate: _ddd1,
        };
        console.log("Hello from addDarta");
        console.log(_val);
        console.log("edit");
        console.log(val);
        this._electron.ipcRenderer.send('editDarta', _val);
        this._electron.ipcRenderer.on('dartaEdited', function (event, arg) {
            console.log("edited Darta");
            // console.log(arg);
        });
        this.router.navigate(['darta']);
    };
    DartaComponent.prototype.dataParse = function (data) {
        jQuery('#dartaDateEdit').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaPagesDateEdit').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaDeptDateEdit').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        this.parsedData = data;
        // console.log(this.parsedData);
        this.dartaForm.get('dartaNo').setValue(this.parsedData.dartaNo);
        this.dartaForm.get('dartaDate').setValue(this.parsedData.dartaDate);
        this.dartaForm.get('dartaPages').setValue(this.parsedData.dartaPages);
        this.dartaForm.get('dartaPagesDate').setValue(this.parsedData.dartaPagesDate);
        this.dartaForm.get('dartaAddress').setValue(this.parsedData.dartaAddress);
        this.dartaForm.get('dartaSubject').setValue(this.parsedData.dartaSubject);
        this.dartaForm.get('dartaDeptName').setValue(this.parsedData.dartaDeptName);
        this.dartaForm.get('dartaDeptDate').setValue(this.parsedData.dartaDeptDate);
        this.dartaForm.get('dartaRemarks').setValue(this.parsedData.dartaRemarks);
    };
    DartaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-darta',
            template: __webpack_require__(/*! ./darta.component.html */ "./src/app/darta/darta.component.html"),
            styles: [__webpack_require__(/*! ./darta.component.css */ "./src/app/darta/darta.component.css")],
            providers: [_fetch_darta_service__WEBPACK_IMPORTED_MODULE_3__["FetchDartaService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _fetch_darta_service__WEBPACK_IMPORTED_MODULE_3__["FetchDartaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DartaComponent);
    return DartaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 90px;\r\n    width: 107px;\r\n    position: relative;\r\n}\r\n.dataTables_wrapper .myfilter .dataTables_filter {\r\n    float:left\r\n}\r\n.dataTables_wrapper .mylength .dataTables_length {\r\n    float:right\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"jumbotron row\">\n    <div class=\"col-10\"> \n      <h2 class=\"align-middle\">तित्रा इनोभेसन सेन्टर</h2>\n      <h3 class=\"align-middle\">धनगढी -४, कैलाली</h3>\n    </div>\n    <div class=\"col\">\n      <img src=\"assets/logo.png\" class=\"align-middle\">\n    </div>\n    \n  </div>\n\n  <div class=\"row\">\n    \n    <div class=\"col\" id=\"darta-container\">\n      <div *ngIf=\"flag\">\n        <div class=\"table-responsive-sm\">\n          <table datatable [dtOptions]=\"dtOptions\" dtInstance=\"dtInstance\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"table table-sm\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th width=\"15%\">दर्ता नं</th>\n                <th width=\"20%\">दर्ता मिति</th>\n                <th width=\"30%\">पठाउने अफिसको नाम</th>\n                <th width=\"35%\">विषय</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let items of dartaList \" class=\"table-light\">\n                <td width=\"15%\" class=\"table-light \">{{items.dartaNo}}</td>\n                <td width=\"20%\" class=\"table-light \">{{items.dartaDate}}</td>\n                <td width=\"30%\" class=\"table-light \">{{items.dartaAddress}}</td>\n                <td width=\"35%\" class=\"table-light \">{{items.dartaSubject}}</td>                \n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col\" id=\"chalani-container\">\n      <div *ngIf=\"flag\">\n        <div class=\"table-responsive-sm\">\n          <table datatable [dtOptions]=\"dtOptions\" dtInstance=\"dtInstance\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"table table-sm\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th width=\"15%\">चलानी नं</th>\n                <th width=\"20%\">चलानी मिति</th>\n                <th width=\"30%\">पाउने अफिसको नाम</th>\n                <th width=\"35%\">विषय</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let items of chalaniList \" class=\"table-light\">\n                <td width=\"15%\" class=\"table-light \">{{items.chalaniNo}}</td>\n                <td width=\"20%\" class=\"table-light \">{{items.chalaniDate}}</td>\n                <td width=\"30%\" class=\"table-light \">{{items.chalaniDestName}}</td>\n                <td width=\"35%\" class=\"table-light \">{{items.chalaniSubject}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var adbs = __webpack_require__(/*! ad-bs-converter */ "./node_modules/ad-bs-converter/src/converter.js");
;
;
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, _electron, router) {
        this.fb = fb;
        this._electron = _electron;
        this.router = router;
        this.dtOptions = {
            "dom": "<'myfilter'f><'mylength'l>t",
            "select": false,
            "pageLength": 5,
            "lengthMenu": [5],
            "ordering": false,
            "buttons": []
        };
        this.flag = false;
        this.dartaList = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getDarta();
        this.getChalani();
        setTimeout(function () {
        }, 400);
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var YY = d.getFullYear();
        var MM = (month < 10 ? '0' : '') + month;
        var DD = (day < 10 ? '0' : '') + day;
        var date = adbs.ad2bs(YY + "/" + MM + "/" + DD);
        var convertedDate = date.en.year + "-" + date.en.month + "-" + date.en.day;
    };
    DashboardComponent.prototype.getDarta = function () {
        var _this = this;
        this._electron.ipcRenderer.send('listDarta', 'listDarta');
        this._electron.ipcRenderer.on('dartaListReceived', function (event, arg) {
            _this.dartaList = arg;
            _this.flag = true;
        });
    };
    DashboardComponent.prototype.getChalani = function () {
        var _this = this;
        this._electron.ipcRenderer.send('listChalani', 'listchalani');
        this._electron.ipcRenderer.on('chalaniListReceived', function (event, arg) {
            _this.chalaniList = arg;
            _this.flag = true;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/fetch-darta.service.ts":
/*!****************************************!*\
  !*** ./src/app/fetch-darta.service.ts ***!
  \****************************************/
/*! exports provided: FetchDartaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDartaService", function() { return FetchDartaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FetchDartaService = /** @class */ (function () {
    function FetchDartaService(_electron) {
        this._electron = _electron;
        this._electron.ipcRenderer.send('listDarta', 'listDarta');
    }
    FetchDartaService.prototype.fetchdata = function () {
        return new Promise(function (resolve, reject) {
            this._electron.ipcRenderer.on('dartaListReceived', function (event, arg) {
                resolve(arg);
            });
        });
    };
    FetchDartaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], FetchDartaService);
    return FetchDartaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\utsva\OneDrive\Documents\Work_Dev\DartaChalani\ang-electron\dartachalani\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map