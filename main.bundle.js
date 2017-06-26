webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__technology_technology_component__ = __webpack_require__("../../../../../src/app/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tech_history_tech_history_component__ = __webpack_require__("../../../../../src/app/tech-history/tech-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__our_products_our_products_component__ = __webpack_require__("../../../../../src/app/our-products/our-products.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'technology',
        component: __WEBPACK_IMPORTED_MODULE_2__technology_technology_component__["a" /* TechnologyComponent */]
    }, {
        path: 'tech-history',
        component: __WEBPACK_IMPORTED_MODULE_3__tech_history_tech_history_component__["a" /* TechHistoryComponent */]
    }, {
        path: 'contact-us',
        component: __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__["a" /* ContactUsComponent */]
    }, {
        path: 'our-products',
        component: __WEBPACK_IMPORTED_MODULE_5__our_products_our_products_component__["a" /* OurProductsComponent */]
    }, {
        path: '',
        redirectTo: '/technology',
        pathMatch: 'full'
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__technology_technology_component__["a" /* TechnologyComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <app-header></app-header>\n    </div>\n    <div>\n        \n        <!--<app-technology></app-technology>-->\n    </div>\n</div>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__technology_technology_component__ = __webpack_require__("../../../../../src/app/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tech_history_tech_history_component__ = __webpack_require__("../../../../../src/app/tech-history/tech-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__our_products_our_products_component__ = __webpack_require__("../../../../../src/app/our-products/our-products.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_7__technology_technology_component__["a" /* TechnologyComponent */], __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_9__tech_history_tech_history_component__["a" /* TechHistoryComponent */], __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__["a" /* ContactUsComponent */], __WEBPACK_IMPORTED_MODULE_11__our_products_our_products_component__["a" /* OurProductsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    return Contact;
}());

//# sourceMappingURL=contact-class.js.map

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-danger\r\n{\r\n    background-color: rgb(0, 41, 102);\r\n    color:yellowgreen;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n  <section id=\"contact\" class=\"content-section text-center\">\n    <div class=\"contact-section\">\n      <div class=\"container\">\n        <h2>Contact Us</h2>\n        <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n              <div class=\"form-group\">\n                <label for=\"txtName\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"txtName\" placeholder=\"Jane Doe\" formControlName=\"name\" required>\n                <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">\n                  {{ formErrors.name }}\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"jane.doe@example.com\" formControlName=\"email\" required>\n                <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n                  {{ formErrors.email }}\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"txtSubject\">Subject</label>\n                <input type=\"text\" class=\"form-control\" id=\"txtSubject\" placeholder=\"Subject\" formControlName=\"subject\" required>\n                <div *ngIf=\"formErrors.subject\" class=\"alert alert-danger\">\n                  {{ formErrors.subject }}\n                </div>\n              </div>\n              <div class=\"form-group \">\n                <label for=\"Description\">Your Message</label>\n                <textarea class=\"form-control\" placeholder=\"Description\" name=\"Description\"></textarea>\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!contactForm.valid\">Send Message</button>\n\n            <hr>\n            <h3>Our Social Sites</h3>\n            <ul class=\"list-inline banner-social-buttons\">\n              <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-twitter\"> <span class=\"network-name\">Twitter</span></i></a></li>\n              <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-facebook\"> <span class=\"network-name\">Facebook</span></i></a></li>\n              <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-youtube-play\"> <span class=\"network-name\">Youtube</span></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</form>"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_class__ = __webpack_require__("../../../../../src/app/contact-us/contact-class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsComponent = (function () {
    function ContactUsComponent(fb) {
        this.fb = fb;
        this.emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.formErrors = {
            'name': '',
            'email': '',
            'subject': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email is not Correct'
            },
            'subject': {
                'required': 'Subject is required.'
            }
        };
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        debugger;
        this.contact = new __WEBPACK_IMPORTED_MODULE_1__contact_class__["a" /* Contact */]("Rajeev", "rajeev.inform@gmail.com", "Hey, I have a suggestion", " ");
        this.buildForm();
    };
    ContactUsComponent.prototype.buildForm = function () {
        var _this = this;
        this.contactForm = this
            .fb
            .group({
            'name': [
                this.contact.name,
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(24),
                ]
            ],
            'email': [
                this.contact.email,
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].email]
            ],
            'subject': [
                this.contact.subject,
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
            ]
        });
        this
            .contactForm
            .valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContactUsComponent.prototype.onValueChanged = function (data) {
        if (!this.contactForm) {
            return;
        }
        var form = this.contactForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({ selector: 'app-contact-us', template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"), styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.css")] }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], ContactUsComponent);

var _a;
//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,300);", ""]);

// module
exports.push([module.i, "footer { background-color:#0c1a1e; min-height:350px; font-family: 'Open Sans', sans-serif; }\r\n.footerleft { margin-top:50px; padding:0 36px; }\r\n.logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}\r\n\r\n.footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}\r\n.footerleft p i { width:20px; color:#999;}\r\n\r\n\r\n.paddingtop-bottom {  margin-top:50px;}\r\n.footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px;}\r\n.footer-ul li { line-height:29px; font-size:12px;}\r\n.footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }\r\n.footer-ul i { margin-right:10px;}\r\n.footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#ff670f; }\r\n\r\n.social:hover {\r\n     -webkit-transform: scale(1.1);\r\n     -moz-transform: scale(1.1);\r\n     -o-transform: scale(1.1);\r\n }\r\n \r\n \r\n\r\n \r\n .icon-ul { list-style-type:none !important; margin:0px; padding:0px;}\r\n .icon-ul li { line-height:75px; width:100%; float:left;}\r\n .icon { float:left; margin-right:5px;}\r\n \r\n \r\n .copyright { min-height:40px; background-color:#000000;}\r\n .copyright p { text-align:left; color:#FFF; padding:10px 0; margin-bottom:0px;}\r\n .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}\r\n .post p { font-size:12px; color:#FFF; line-height:20px;}\r\n .post p span { display:block; color:#8f8f8f;}\r\n .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}\r\n .bottom_ul li { float:left; line-height:40px;}\r\n .bottom_ul li:after { content:\"/\"; color:#FFF; margin-right:8px; margin-left:8px;}\r\n .bottom_ul li a { color:#FFF;  font-size:12px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css\" rel=\"stylesheet\">\n<!--footer start from here-->\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 footerleft \">\n        <div class=\"logofooter\"> ng-app</div>\n        <p>Latest Technology | Trending Technologies | Technical Expression | Technical History.</p>\n        <p><i class=\"fa fa-map-pin\"></i> AB Block, Amrapali Village , Inidrapuram, Ghaziabad -        201014, INDIA</p>\n        <p><i class=\"fa fa-phone\"></i> Phone (India) : +91 9884 847 ***</p>\n        <p><i class=\"fa fa-envelope\"></i> E-mail : info@ng-app.in</p>\n\n      </div>\n      <div class=\"col-md-2 col-sm-6 paddingtop-bottom\">\n        <h6 class=\"heading7\">GENERAL LINKS</h6>\n        <ul class=\"footer-ul\">\n          <li><a href=\"#\"> Career</a></li>\n          <li><a href=\"#\"> Privacy Policy</a></li>\n          <li><a href=\"#\"> Terms & Conditions</a></li>\n          <li><a href=\"#\"> Frequently Ask Questions</a></li>\n          <li><a href=\"#\"> Contact Us</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-6 col-sm-6 paddingtop-bottom\">\n        <div class=\"fb-page\" data-href=\"https://www.facebook.com/pg/Ng-app-453682534989382/posts/?ref=page_internal\" data-tabs=\"timeline\" data-height=\"300\" data-small-header=\"false\"\n          style=\"margin-bottom:15px;\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\">\n          <div class=\"fb-xfbml-parse-ignore\">\n            <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"https://www.facebook.com/facebook\">Facebook</a></blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer start from here-->\n\n<div class=\"copyright\">\n  <div class=\"container\">\n    <div class=\"col-md-6\">\n      <p>© 2016 - All Rights with ng-app.in</p>\n    </div>\n    <div class=\"col-md-6\">\n      <ul class=\"bottom_ul\">\n        <li><a href=\"#\">ng-app.in</a></li>\n        <li><a href=\"#\">About us</a></li>\n        <li><a href=\"#\">Blog</a></li>\n        <li><a href=\"#\">Faq's</a></li>\n        <li><a href=\"#\">Contact us</a></li>\n        <li><a href=\"#\">Site Map</a></li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar\r\n{\r\n    background-color:#002966;\r\n    margin-bottom: 0px;\r\n}\r\n.navbar-brand\r\n{\r\n    color:white;\r\n    font-family: monospace;\r\n\r\n}\r\n\r\nli > a\r\n{\r\n    color: white\r\n\r\n}\r\n\r\nli > a:hover  {\r\n       color: orange\r\n       ;\r\n }\r\n\r\n.dropdown-menu>li>a\r\n {\r\n      color: black\r\n }\r\n.active\r\n{\r\n    color:yellowgreen !important;\r\n    font-family: monospace;\r\n    /*background-color:#0c1a1e;*/\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Ng-app</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/technology\" routerLinkActive=\"active\">Technology </a></li>\n\n        <!--<li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Trending <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Javascript Frameworks</a></li>\n            <li><a href=\"#\">Mobile Technology</a></li>\n            <li><a href=\"#\">Artificial Intelligence</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Big Data</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">More...</a></li>\n          </ul>\n        </li>-->\n        <li><a a routerLink=\"/tech-history\" routerLinkActive=\"active\">Tips & Tricks</a></li>\n        <li><a a routerLink=\"/tech-history\" routerLinkActive=\"active\">App Reviews</a></li>\n                <li><a routerLink=\"/our-products\" routerLinkActive=\"active\">Our Products</a></li>\n        <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact Us</a></li>\n      </ul>\n      <form class=\"navbar-form navbar-right\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" disabled>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\" disabled>Search</button>\n      </form>\n\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/our-products/our-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/our-products/our-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  our-products works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/our-products/our-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurProductsComponent = (function () {
    function OurProductsComponent() {
    }
    OurProductsComponent.prototype.ngOnInit = function () {
    };
    return OurProductsComponent;
}());
OurProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-our-products',
        template: __webpack_require__("../../../../../src/app/our-products/our-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/our-products/our-products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OurProductsComponent);

//# sourceMappingURL=our-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/tech-history/tech-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tech-history/tech-history.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/images/coming.jpg\" alt=\"\" class=\"comingSoon img-responsive\">\n"

/***/ }),

/***/ "../../../../../src/app/tech-history/tech-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechHistoryComponent = (function () {
    function TechHistoryComponent() {
    }
    TechHistoryComponent.prototype.ngOnInit = function () {
    };
    return TechHistoryComponent;
}());
TechHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-tech-history',
        template: __webpack_require__("../../../../../src/app/tech-history/tech-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tech-history/tech-history.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TechHistoryComponent);

//# sourceMappingURL=tech-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/technology/technology.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blogShort{ border-bottom:1px solid #ddd;}\r\n.add{background: #333; padding: 10%; height: 300px;}\r\n\r\n\r\n/*\r\nFade content bs-carousel with hero headers\r\nCode snippet by maridlcrmn (Follow me on Twitter @maridlcrmn) for Bootsnipp.com\r\nImage credits: unsplash.com\r\n*/\r\n\r\n/********************************/\r\n/*       Fade Bs-carousel       */\r\n/********************************/\r\n.fade-carousel {\r\n    position: relative;\r\n    height: 50vh;\r\n}\r\n.fade-carousel .carousel-inner .item {\r\n    height: 50vh;\r\n}\r\n.fade-carousel .carousel-indicators > li {\r\n    margin: 0 2px;\r\n    background-color: #f39c12;\r\n    border-color: #f39c12;\r\n    opacity: .7;\r\n}\r\n.fade-carousel .carousel-indicators > li.active {\r\n  width: 10px;\r\n  height: 10px;\r\n  opacity: 1;\r\n}\r\n\r\n/********************************/\r\n/*          Hero Headers        */\r\n/********************************/\r\n.hero {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 3;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    text-shadow: 1px 1px 0 rgba(0,0,0,.75);\r\n      -webkit-transform: translate3d(-50%,-50%,0);\r\n              transform: translate3d(-50%,-50%,0);\r\n}\r\n.hero h1 {\r\n    font-size: 6em;    \r\n    font-weight: bold;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.fade-carousel .carousel-inner .item .hero {\r\n    opacity: 0; \r\n    transition: 2s all ease-in-out .1s; \r\n}\r\n.fade-carousel .carousel-inner .item.active .hero {\r\n    opacity: 1; \r\n    transition: 2s all ease-in-out .1s;    \r\n}\r\n\r\n/********************************/\r\n/*            Overlay           */\r\n/********************************/\r\n.overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background-color: #080d15;\r\n    opacity: 0.2;\r\n}\r\n\r\n/********************************/\r\n/*          Custom Buttons      */\r\n/********************************/\r\n.btn.btn-lg {padding: 10px 40px;}\r\n.btn.btn-hero,\r\n.btn.btn-hero:hover,\r\n.btn.btn-hero:focus {\r\n    color: #f5f5f5;\r\n    background-color: #1abc9c;\r\n    border-color: #1abc9c;\r\n    outline: none;\r\n    margin: 20px auto;\r\n}\r\n\r\n/********************************/\r\n/*       Slides backgrounds     */\r\n/********************************/\r\n.fade-carousel .slides .slide-1, \r\n.fade-carousel .slides .slide-2,\r\n.fade-carousel .slides .slide-3,\r\n.fade-carousel .slides .slide-4 {\r\n  height: 50vh;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n}\r\n.fade-carousel .slides .slide-1 {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/slide1.jpg") + "); \r\n  height: relative;\r\n}\r\n.fade-carousel .slides .slide-2 {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/slide2.jpg") + ");\r\n  height: relative;\r\n}\r\n.fade-carousel .slides .slide-3 {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/slide3.jpg") + ");\r\n  height: relative;\r\n}\r\n.fade-carousel .slides .slide-4 {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/slide4.jpg") + ");\r\n  height: relative;\r\n}\r\n\r\n/********************************/\r\n/*          Media Queries       */\r\n/********************************/\r\n@media screen and (min-width: 980px){\r\n    .hero { width: 980px; }    \r\n}\r\n@media screen and (max-width: 640px){\r\n    .hero h1 { font-size: 4em; }    \r\n}\r\n.customHeight\r\n{\r\n    height:100px;\r\n}\r\n.btn-blog {\r\n    color: #ffffff;\r\n    background-color: #37d980;\r\n    border-color: #37d980;\r\n    border-radius:0;\r\n    margin-bottom:10px\r\n}\r\n.btn-blog:hover,\r\n.btn-blog:focus,\r\n.btn-blog:active,\r\n.btn-blog.active,\r\n.open .dropdown-toggle.btn-blog {\r\n    color: white;\r\n    background-color:#34ca78;\r\n    border-color: #34ca78;\r\n}\r\n h2{color:#34ca78;}\r\n .margin10{margin-bottom:10px; margin-right:10px;}\r\n\r\n .container\r\n {\r\n         margin-top: 280px !important;\r\n }\r\n img\r\n {\r\n     height:100px;\r\n     width:100px;\r\n }\r\n\r\n /*.fb-post\r\n {\r\n   position:absolute;\r\n     width:100px;\r\n     height:100px;\r\n     top:450px;\r\n     left:75%;\r\n }*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/technology/technology.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customHeight\">\n  <div class=\"carousel fade-carousel slide\" data-ride=\"carousel\" data-interval=\"4000\" id=\"bs-carousel\">\n    <!-- Overlay -->\n    <div class=\"overlay\"></div>\n\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#bs-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#bs-carousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#bs-carousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#bs-carousel\" data-slide-to=\"3\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item slides active\">\n        <div class=\"slide-1\"></div>\n        <div class=\"hero\">\n          <article>\n            <h1>Latest Technology</h1>\n            <h3>Get start your next awesome project</h3>\n          </article>\n          <button class=\"btn btn-hero btn-lg\" role=\"button\">See all features</button>\n        </div>\n      </div>\n      <div class=\"item slides\">\n        <div class=\"slide-2\"></div>\n        <div class=\"hero\">\n          <article>\n            <h1>Our Products</h1>\n            <h3>Get start with our next awesome project</h3>\n          </article>\n          <button class=\"btn btn-hero btn-lg\" role=\"button\">See all features</button>\n        </div>\n      </div>\n      <div class=\"item slides\">\n        <div class=\"slide-3\"></div>\n        <div class=\"hero\">\n          <article>\n            <h1>Latest Updates</h1>\n            <h3>Get amazing historical facts related to Technical World</h3>\n          </article>\n          <button class=\"btn btn-hero btn-lg\" role=\"button\">See all features</button>\n        </div>\n      </div>\n      <div class=\"item slides\">\n        <div class=\"slide-4\"></div>\n        <div class=\"hero\">\n          <article>\n            <h1>Contact Us</h1>\n            <h3>Give your Feedback</h3>\n          </article>\n          <button class=\"btn btn-hero btn-lg\" role=\"button\">Contact</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div id=\"blog\" class=\"row\">\n    <div class=\"row\">\n      <div class=\"col-md-6 blogShort\">\n        <h1>Women safety apps</h1>\n        <img src=\"../../assets/images/angular2_logo.png\" alt=\"post img\" class=\"pull-left img-responsive thumb margin10 img-thumbnail\">\n\n        <em>By <a href=\"http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation\" target=\"_blank\">Administrator</a></em>\n        <article>\n          <p>\n            <b>J</b>avaScript popularity continues its rising. In 2016 we’ve witnessed such great changes, as AngularJS entire\n            upgrade and introduction of Angular 2, ultimate dominating of jQuery that is applied on 96.5% of all JS sites,\n            evolution of ECMAScript, two updates of Node.js in April and October accordingly, React finest hours, and even\n            more. What to expect from 2017? — Here’s what we know so far: Angular 4 is expected in March 2017, ES2017 edition\n            is planned for mid-2017, Bootstrap v4 release should be anticipated this year as well....\n          </p>\n        </article>\n        <a class=\"btn btn-blog pull-right marginBottom10\" href=\"http://bootsnipp.com/user/snippets/2RoQ\">READ MORE</a>\n      </div>\n      <div class=\"col-md-6 blogShort\">\n        <h1>Google will no longer read your email to serve you ads</h1>\n        <img src=\"../../assets/images/google.jpg\" alt=\"post img\" class=\"pull-left img-responsive thumb margin10 img-thumbnail\">\n        <article>\n          <p>\n            Privacy advocates have long criticized Google's practice of using email data to tailor advertising, but now the company is\n            putting an end to the method. Google (GOOG) announced the change in a blog post on Friday. It will go into effect\n            later this year The move is in line with Google's existing G Suite Gmail service for businesses, which doesn't\n            scan email data for personalized ads. Now its free Gmail service will have the same rules.....\n          </p>\n        </article>\n        <a class=\"btn btn-blog pull-right marginBottom10\" href=\"http://bootsnipp.com/user/snippets/2RoQ\">READ MORE</a>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 blogShort\">\n        <h1>Amazing Javascript Frameworks</h1>\n        <img src=\"../../assets/images/angular2_logo.png\" alt=\"post img\" class=\"pull-left img-responsive thumb margin10 img-thumbnail\">\n\n        <em>By <a href=\"http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation\" target=\"_blank\">Administrator</a></em>\n        <article>\n          <p>\n            <b>J</b>avaScript popularity continues its rising. In 2016 we’ve witnessed such great changes, as AngularJS entire\n            upgrade and introduction of Angular 2, ultimate dominating of jQuery that is applied on 96.5% of all JS sites,\n            evolution of ECMAScript, two updates of Node.js in April and October accordingly, React finest hours, and even\n            more. What to expect from 2017? — Here’s what we know so far: Angular 4 is expected in March 2017, ES2017 edition\n            is planned for mid-2017, Bootstrap v4 release should be anticipated this year as well....\n          </p>\n        </article>\n        <a class=\"btn btn-blog pull-right marginBottom10\" href=\"http://bootsnipp.com/user/snippets/2RoQ\">READ MORE</a>\n      </div>\n\n      <div class=\"col-md-6 blogShort\">\n        <h1>Amazing Javascript Frameworks</h1>\n        <img src=\"../../assets/images/angular2_logo.png\" alt=\"post img\" class=\"pull-left img-responsive thumb margin10 img-thumbnail\">\n\n        <em>By <a href=\"http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation\" target=\"_blank\">Administrator</a></em>\n        <article>\n          <p>\n            <b>J</b>avaScript popularity continues its rising. In 2016 we’ve witnessed such great changes, as AngularJS entire\n            upgrade and introduction of Angular 2, ultimate dominating of jQuery that is applied on 96.5% of all JS sites,\n            evolution of ECMAScript, two updates of Node.js in April and October accordingly, React finest hours, and even\n            more. What to expect from 2017? — Here’s what we know so far: Angular 4 is expected in March 2017, ES2017 edition\n            is planned for mid-2017, Bootstrap v4 release should be anticipated this year as well....\n          </p>\n        </article>\n        <a class=\"btn btn-blog pull-right marginBottom10\" href=\"http://bootsnipp.com/user/snippets/2RoQ\">READ MORE</a>\n      </div>\n    </div>\n\n    <div class=\"col-md-10 blogShort\">\n      <article>\n      </article>\n    </div>\n\n\n\n    <div class=\"col-md-12 gap10\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/technology/technology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnologyComponent = (function () {
    function TechnologyComponent() {
        this.testImage = "../../images/angular2_logo.png";
    }
    TechnologyComponent.prototype.ngOnInit = function () { };
    return TechnologyComponent;
}());
TechnologyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({ selector: 'app-technology', template: __webpack_require__("../../../../../src/app/technology/technology.component.html"), styles: [__webpack_require__("../../../../../src/app/technology/technology.component.css")] }),
    __metadata("design:paramtypes", [])
], TechnologyComponent);

//# sourceMappingURL=technology.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/slide1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide1.857f2784d70acb467152.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/slide2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide2.6ed33b1178d5c2d3a523.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/slide3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide3.08c474412481318ed530.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/slide4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide4.453a67d126074160e8df.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map