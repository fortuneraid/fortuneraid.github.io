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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<ng-container *ngIf=\"!LS.isLogged\">\n  <div id=\"headerwrap\">\n    <header class=\"clearfix\">\n      <h1><span>Login with google!</span> and Go to admin panel</h1>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"span12\">\n            <input type=\"submit\" value=\"Login\" class=\"cform-submit\">\n          </div>\n        </div>\n      </div>\n    </header>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"LS.isLogged\">\n  Welcome to admin dashboard\n</ng-container>"

/***/ }),

/***/ "./src/app/admin/admin.component.sass":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(LS) {
        this.LS = LS;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.sass */ "./src/app/admin/admin.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");





var routes = [
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--******************** NAVBAR ********************-->\n<div class=\"navbar-wrapper\">\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n      <div class=\"container\">\n        <!-- Responsive Navbar Part 1: Button for triggering responsive navbar (not covered in tutorial). Include responsive CSS to utilize. -->\n        <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </a>\n        <h1 class=\"brand\"><a href=\"#top\">Legend!</a></h1>\n        <!-- Responsive Navbar Part 2: Place all navbar contents you want collapsed withing .navbar-collapse.collapse. -->\n        <nav class=\"pull-right nav-collapse collapse\">\n          <ul id=\"menu-main\" class=\"nav\">\n            <li><a title=\"portfolio\" href=\"#portfolio\">Portfolio</a></li>\n            <li><a title=\"services\" href=\"#services\">Services</a></li>\n            <li><a title=\"news\" href=\"#news\">News</a></li>\n            <li><a title=\"team\" href=\"#team\">Team</a></li>\n            <li><a title=\"contact\" href=\"#contact\">Contact</a></li>\n          </ul>\n        </nav>\n      </div>\n      <!-- /.container -->\n    </div>\n    <!-- /.navbar-inner -->\n  </div>\n  <!-- /.navbar -->\n</div>\n<!-- /.navbar-wrapper -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webapp-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/login/login.module */ "./src/login/login.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                src_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ******************** HeaderWrap ********************-->\n<div id=\"headerwrap\">\n  <header class=\"clearfix\">\n    <h1><span>Legend!</span> We make web a beautiful place.</h1>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <h2>Signup for our Newsletter to be updated</h2>\n          <input type=\"text\" name=\"your-email\" placeholder=\"you@yourmail.com\" class=\"cform-text\" size=\"40\" title=\"your email\">\n          <input type=\"submit\" value=\"Notify me\" class=\"cform-submit\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"span12\">\n          <ul class=\"icon\">\n            <li><a href=\"#\" target=\"_blank\"><i class=\"icon-pinterest-circled\"></i></a></li>\n            <li><a href=\"#\" target=\"_blank\"><i class=\"icon-facebook-circled\"></i></a></li>\n            <li><a href=\"#\" target=\"_blank\"><i class=\"icon-twitter-circled\"></i></a></li>\n            <li><a href=\"#\" target=\"_blank\"><i class=\"icon-gplus-circled\"></i></a></li>\n            <li><a href=\"#\" target=\"_blank\"><i class=\"icon-skype-circled\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n</div>\n<!--******************** Feature ********************-->\n<div class=\"scrollblock\">\n  <section id=\"feature\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <article>\n            <p>We work to make web a beautiful place.</p>\n            <p>We craft beautiful designs and convert them into</p>\n            <p>fully functional and user-friendy web app.</p>\n          </article>\n        </div>\n        <!-- ./span12 -->\n      </div>\n      <!-- .row -->\n    </div>\n    <!-- ./container -->\n  </section>\n</div>\n<hr>\n<!--******************** Portfolio Section ********************-->\n<section id=\"portfolio\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-desktop-circled\"></i></div>\n    <h1 id=\"folio-headline\">Portfolio...</h1>\n    <div class=\"row\">\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-01.jpg\" rel=\"prettyPhoto\"><img src=\"assets/img/portfolio-01.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Ethan Marcotte Design</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"#\">view project</a> </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-02.jpg\" rel=\"prettyPhoto\"><img src=\"assets/img/portfolio-02.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>A Book Apart</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"#\">view project</a> </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-03.jpg\" rel=\"prettyPhoto\"><img src=\"assets/img/portfolio-03.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Four Rules for Designers</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"#\">view project</a> </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n    </div>\n    <!-- /.row -->\n    \n    <div class=\"row\">\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-01.jpg\" rel=\"prettyPhoto\"><img src=\"assets/img/portfolio-03.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Ethan Marcotte Design</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"#\">view project</a> </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-02.jpg\" rel=\"prettyPhoto\"><img src=\"assets/img/portfolio-01.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>A Book Apart</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"#\">view project</a> </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-03.jpg\" rel=\"prettyPhoto\"><img src=\"assets/img/portfolio-02.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Four Rules for Designers</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"#\">view project</a> </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** Services Section ********************-->\n<section id=\"services\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-cog-circled\"></i></div>\n    <h1>Services</h1>\n    <!-- Four columns -->\n    <div class=\"row\">\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-desktop sev_icon\"></i> </div>\n        <h2>Web design</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-vector sev_icon\"></i> </div>\n        <h2>Print Design</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-basket sev_icon\"></i> </div>\n        <h2>Ecommerce</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-mobile-1 sev_icon\"></i> </div>\n        <h2>Marketing</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** Testimonials Section ********************-->\n<section id=\"testimonials\" class=\"single-page hidden-phone\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"blockquote-wrapper\">\n        <blockquote class=\"mega\">\n          <div class=\"span4\">\n            <p class=\"cite\">John Doe &amp; Sons:</p>\n          </div>\n          <div class=\"span8\">\n            <p class=\"alignright\">\"We highly appreciate the enthusiasm and creative talent of the people at Legend!\"</p>\n          </div>\n        </blockquote>\n      </div>\n      <!-- /.blockquote-wrapper -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** News Section ********************-->\n<section id=\"news\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-pencil-circled\"></i></div>\n    <h1>Our Blog</h1>\n    <!-- Three columns -->\n    <div class=\"row\">\n      <article class=\"span4 post\"> <img class=\"img-news\" src=\"assets/img/blog_img-01.jpg\" alt=\"\">\n        <div class=\"inside\">\n          <p class=\"post-date\"><i class=\"icon-calendar\"></i> March 17, 2013</p>\n          <h2>A girl running on a road</h2>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. &hellip;</p>\n            <a href=\"#\" class=\"more-link\">read more</a> </div>\n        </div>\n        <!-- /.inside -->\n      </article>\n      <!-- /.span4 -->\n      <article class=\"span4 post\"> <img class=\"img-news\" src=\"assets/img/blog_img-02.jpg\" alt=\"\">\n        <div class=\"inside\">\n          <p class=\"post-date\">February 28, 2013</p>\n          <h2>A bear sleeping on a tree</h2>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. &hellip;</p>\n            <a href=\"#\" class=\"more-link\">read more</a> </div>\n        </div>\n        <!-- /.inside -->\n      </article>\n      <!-- /.span4 -->\n      <article class=\"span4 post\"> <img class=\"img-news\" src=\"assets/img/blog_img-03.jpg\" alt=\"\">\n        <div class=\"inside\">\n          <p class=\"post-date\">February 06, 2013</p>\n          <h2>A Panda playing with his baby</h2>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. &hellip;</p>\n            <a href=\"#\" class=\"more-link\">read more</a> </div>\n        </div>\n        <!-- /.inside -->\n      </article>\n      <!-- /.span4 -->\n    </div>\n    <!-- /.row -->\n    <a href=\"#\" class=\"btn btn-large\">Go to our blog</a> </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** Team Section ********************-->\n<section id=\"team\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-group-circled\"></i></div>\n    <h1>Meet the team</h1>\n    <!-- Five columns -->\n    <div class=\"row\">\n      <div class=\"span2 offset1\">\n        <div class=\"teamalign\"> <img class=\"team-thumb img-circle\" src=\"assets/img/portrait-1.jpg\" alt=\"\"> </div>\n        <h3>Andrew</h3>\n        <div class=\"job-position\">web designer</div>\n      </div>\n      <!-- ./span2 -->\n      <div class=\"span2\">\n        <div class=\"teamalign\"> <img class=\"team-thumb img-circle\" src=\"assets/img/portrait-2.jpg\" alt=\"\"> </div>\n        <h3>Stephen</h3>\n        <div class=\"job-position\">web developer</div>\n      </div>\n      <!-- ./span2 -->\n      <div class=\"span2\">\n        <div class=\"teamalign\"> <img class=\"team-thumb img-circle\" src=\"assets/img/portrait-3.jpg\" alt=\"\"> </div>\n        <h3>Maria</h3>\n        <div class=\"job-position\">graphic designer</div>\n      </div>\n      <!-- ./span2 -->\n      <div class=\"span2\">\n        <div class=\"teamalign\"> <img class=\"team-thumb img-circle\" src=\"assets/img/portrait-4.jpg\" alt=\"\"> </div>\n        <h3>John</h3>\n        <div class=\"job-position\">project manager</div>\n      </div>\n      <!-- ./span2 -->\n      <div class=\"span2\">\n        <div class=\"teamalign\"> <img class=\"team-thumb img-circle\" src=\"assets/img/portrait-2.jpg\" alt=\"\"> </div>\n        <h3>Ashton</h3>\n        <div class=\"job-position\">real owner</div>\n      </div>\n      <!-- ./span2 -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n      <div class=\"span10 offset1\">\n        <hr class=\"featurette-divider\">\n        <div class=\"featurette\">\n          <h2 class=\"featurette-heading\">Want to know more? <span class=\"muted\">| a little about us</span></h2>\n          <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>\n          <p>At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues.</p>\n          <p>A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.</p>\n        </div>\n        <!-- /.featurette -->\n        <hr class=\"featurette-divider\">\n      </div>\n      <!-- .span10 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<!--******************** Contact Section ********************-->\n<section id=\"contact\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-mail-2\"></i></div>\n    <h1>Contact us now!</h1>\n    <div class=\"row\">\n      <div class=\"span12\">\n        <div class=\"cform\" id=\"theme-form\">\n          <form action=\"#\" method=\"post\" class=\"cform-form\">\n            <div class=\"row\">\n              <div class=\"span6\"> <span class=\"your-name\">\n                <input type=\"text\" name=\"your-name\" placeholder=\"Your Name\" class=\"cform-text\" size=\"40\" title=\"your name\">\n                </span> </div>\n              <div class=\"span6\"> <span class=\"your-email\">\n                <input type=\"text\" name=\"your-email\" placeholder=\"Your Email\" class=\"cform-text\" size=\"40\" title=\"your email\">\n                </span> </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"span6\"> <span class=\"company\">\n                <input type=\"text\" name=\"company\" placeholder=\"Your Company\" class=\"cform-text\" size=\"40\" title=\"company\">\n                </span> </div>\n              <div class=\"span6\"> <span class=\"website\">\n                <input type=\"text\" name=\"website\" placeholder=\"Your Website\" class=\"cform-text\" size=\"40\" title=\"website\">\n                </span> </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"span12\"> <span class=\"message\">\n                <textarea name=\"message\" class=\"cform-textarea\" cols=\"40\" rows=\"10\" title=\"drop us a line.\"></textarea>\n                </span> </div>\n            </div>\n            <div>\n              <input type=\"submit\" value=\"Send message\" class=\"cform-submit pull-left\">\n            </div>\n            <div class=\"cform-response-output\"></div>\n          </form>\n        </div>\n      </div>\n      <!-- ./span12 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<div class=\"footer-wrapper\">\n  <div class=\"container\">\n    <footer>\n      <small>&copy; 2013 Inbetwin Network. All rights reserved.</small>\n    </footer>\n  </div>\n  <!-- ./container -->\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//var $:any;
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serverurl = "https://hashblog.herokuapp.com/";
        this.data = {
            user: null,
            token: null
        };
        this.is_staff = false;
        this.islogged = false;
        this.verified = false;
        this.after_verify = [];
        //refresh childs
        this.child_elements = [];
        this.serverurl = "http://localhost:8000/";
        // check if user details present or not
        var token = localStorage.getItem('auth_token');
        //user = localStorage.getItem('auth_user');
        if (token == null) {
            // user is not logged
            this.islogged = false;
            this.verified = true;
        }
        else {
            this.check_user(token);
        }
    }
    LoginService.prototype.check_user = function (token, self) {
        if (self === void 0) { self = this; }
        // check the server for user details
        this.http.get(this.serverurl + 'api/auth/user2/status/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Token ' + token)
        }).subscribe(function (data) {
            try {
                self.is_staff = data['is_staff'];
                console.log("Status found from server: ", data);
                self.data.token = token;
                self.data.user = data['user'];
                self.data.user.info = JSON.parse(data['user'].info);
                self.islogged = true;
                localStorage.setItem('auth_token', token);
                console.log(self.data.user);
                self.refresh();
            }
            catch (e) {
                console.log(e);
            }
        }, function (error) {
            console.log('errors occured', error);
            self.islogged = false;
            // remove un-necessary token
            localStorage.removeItem('auth_token');
            self.verified = true;
        }, function () {
            self.verified = true;
            console.log("User is verified now ");
            for (var _i = 0, _a = self.after_verify; _i < _a.length; _i++) {
                var x = _a[_i];
                x();
            }
            self.after_verify = [];
        });
    };
    LoginService.prototype.google_signup = function (id_token, self) {
        if (self === void 0) { self = this; }
        if (this.islogged) {
            // already logged in
            alert("You must logout before creating any new account");
        }
        else {
            // rest is same as google login
            this.google_login(id_token, self);
        }
    };
    LoginService.prototype.google_login = function (id_token, self) {
        if (self === void 0) { self = this; }
        // login only if verified == true
        console.log('Google Login called', self.verified, self.islogged);
        if (self.verified == false) {
            console.log("User is not verified from server yet, so pushing the login to queue");
            self.after_verify.push(function () { self.google_login(id_token); });
        }
        else {
            // user is verified
            if (self.islogged) {
                console.log("user is already logged in, aborting!!!");
            }
            else {
                // its verified that user is not logged, so googl loging in now...
                //console.log('I was here');
                self.verified = false;
                self.http.post(self.serverurl + 'api/googlelogin/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_token', id_token), {}).subscribe(function (data) {
                    self.check_user(data['token']);
                });
            }
        }
    };
    LoginService.prototype.onLoginSuccess = function (token) {
        this.islogged = true;
    };
    LoginService.prototype.up_login = function (username, password) {
        if (this.islogged) {
            alert("User is already logged!!");
        }
    };
    LoginService.prototype.logout = function (after) {
        var _this = this;
        if (after === void 0) { after = function () { }; }
        this.http.post(this.serverurl + 'api/logout/', {}, { headers: this.getHeaders() }).subscribe(function (data) {
            after();
            console.log("After logout, result fetched from server");
            _this.islogged = false;
            _this.data.user = null;
            _this.refresh();
        });
    };
    LoginService.prototype.getHeaders = function () {
        if (this.islogged)
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", "Token " + this.data.token);
        else
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    };
    LoginService.prototype.login = function () {
    };
    LoginService.prototype.refresh = function () {
        for (var x in this.child_elements) {
            this.child_elements[x].refresh();
        }
    };
    LoginService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/login/account/account.component.html":
/*!**************************************************!*\
  !*** ./src/login/account/account.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"show=='icon'\">\r\n  <div class=\"nav-item dropdown\">\r\n    <a class=\"nav-link dropdown-toggle\" style=\"padding:0;\" href=\"javascript:void(0)\" id=\"navbarDropdown\" role=\"button\"\r\n      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <i *ngIf=\"!LS.isLogged\" class='text-primary fas fa-user'></i>\r\n      <img *ngIf=\"LS.isLogged\" class=\"account-image-small\" src=\"{{LS.data.user.info.picture}}\">\r\n    </a>\r\n    <div class=\"dropdown-menu dropdown-menu-right\">\r\n      <a class=\"dropdown-item fab fa-google text-primary\" href=\"javascript:void(0)\" (click)=\"google_login()\"\r\n        *ngIf=\"!LS.isLogged\">\r\n        <div style=\"margin-left:5px;\">Login </div>\r\n      </a>\r\n      <!--div class=\"dropdown-divider\" *ngIf=\"LS.isLogged\"></div-->\r\n      <a class=\"dropdown-item fas fa-file-invoice text-primary\" routerLink=\"/user\" >\r\n        <div style=\"margin-left:5px;\">Account</div>\r\n      </a>\r\n      <hr *ngIf=\"LS.isLogged\">\r\n      <a class=\"dropdown-item fas fa-sign-out-alt text-danger\" (click)=\"logout()\" *ngIf=\"LS.isLogged\"\r\n        href=\"javascript:void(0)\">\r\n        <div style=\"margin-left:5px;\">Logout</div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show=='dashboard'\">\r\n  <div class=\"nav-link btn\">\r\n    <i class=\"fab fa-google text-primary\" href=\"javascript:void(0)\" (click)=\"google_login()\" *ngIf=\"!LS.isLogged\">\r\n      <div style=\"margin-left:5px;\">Login</div>\r\n    </i>\r\n    <i class=\"fas text-primary\" href=\"javascript:void(0)\" *ngIf=\"LS.isLogged\">\r\n      <div style=\"margin-right:5px;\">{{LS.data.user.info.name}}</div>\r\n    </i>\r\n    <img *ngIf=\"LS.isLogged\" class=\"account-image-small\" (click)=\"logout();\" src=\"{{LS.data.user.info.picture}}\">\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/login/account/account.component.scss":
/*!**************************************************!*\
  !*** ./src/login/account/account.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-image-small {\n  width: 40px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dpbi9hY2NvdW50L0Q6XFxHb3ZpbmQgU2luZ2hcXERvY3VtZW50c1xcV09SSy1JTlRFUk5cXEZvcnR1bmVSYWlkXFx3ZWJhcHAtYW5ndWxhclxcZGlzdFxcd2ViYXBwLWFuZ3VsYXItZGVwbG95Ly4uXFwuLlxcc3JjXFxsb2dpblxcYWNjb3VudFxcYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiIuLi8uLi9zcmMvbG9naW4vYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtaW1hZ2Utc21hbGx7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/login/account/account.component.ts":
/*!************************************************!*\
  !*** ./src/login/account/account.component.ts ***!
  \************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/login/login.service.ts");



// import { AccountService } from '../about/account.service';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(cdr, LS) {
        this.cdr = cdr;
        this.LS = LS;
        LS.addChild(this);
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
    };
    AccountComponent.prototype.google_login = function () {
        var self = this;
        window['auth2'].isSignedIn.listen(function (val) { self.signinChanged(val, self); });
        this.LS.loginRequested = true;
        if (window['auth2'].isSignedIn.get()) {
            this.logout();
        }
        window['auth2'].signIn();
    };
    AccountComponent.prototype.logout = function () {
        // logout from google account
        window['auth2'].signOut(); // delete user datas saved in localStorage
        if (this.LS.isLogged) {
            this.LS.logout();
        }
    };
    AccountComponent.prototype.signinChanged = function (val, self) {
        /**
         * on refresh if
         *  user is logged : it will be called
         *  user is not logged : it wont be called
         * on login change: it will be called
         */
        console.log('I was called', val);
        try {
            if (val) {
                // user is signed in
                self.LS.google_login(window['auth2'].currentUser.get().getAuthResponse().id_token);
            }
            else {
                // user is logged out, first logout from LS
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    AccountComponent.prototype.refresh = function () {
        this.cdr.detectChanges();
        console.log(this.LS.isLogged, '\n CDR was called account component');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountComponent.prototype, "show", void 0);
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/login/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/login/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/login/login.module.ts":
/*!***********************************!*\
  !*** ./src/login/login.module.ts ***!
  \***********************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/login/account/account.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/login/login.service.ts":
/*!************************************!*\
  !*** ./src/login/login.service.ts ***!
  \************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serverUrl = "https://hashbook.herokuapp.com/";
        this.data = {
            user: null,
            token: null
        };
        this.is_staff = false;
        this.isLogged = false;
        this.verified = false;
        this.loginRequested = false;
        this.after_verify = [];
        // refresh childs
        this.child_elements = [];
        this.serverUrl = 'http://localhost:8000/';
        // check if user details present or not
        var token = localStorage.getItem('auth_token');
        // user = localStorage.getItem('auth_user');
        if (token == null) {
            // user is not logged
            this.isLogged = false;
            this.verified = true;
        }
        else {
            this.check_user(token);
        }
    }
    LoginService.prototype.check_user = function (token, self) {
        if (self === void 0) { self = this; }
        // check the server for user details
        this.http.get(this.serverUrl + 'api/auth/user2/status/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Token ' + token)
        }).subscribe(function (data) {
            try {
                self.is_staff = data['is_staff'];
                console.log('Status found from server: ', data);
                self.data.token = token;
                self.data.user = data['user'];
                self.data.user.info = JSON.parse(data['user'].info);
                self.isLogged = true;
                self.loginRequested = false;
                localStorage.setItem('auth_token', token);
                console.log(self.data.user);
                self.refresh();
            }
            catch (e) {
                console.log(e);
            }
        }, function (error) {
            console.log('errors occured', error);
            self.isLogged = false;
            // remove un-necessary token
            self.loginRequested = false;
            localStorage.removeItem('auth_token');
            self.verified = true;
        }, function () {
            self.verified = true;
            console.log('User is verified now ');
            self.loginRequested = false;
            for (var _i = 0, _a = self.after_verify; _i < _a.length; _i++) {
                var x = _a[_i];
                x();
            }
            self.after_verify = [];
        });
    };
    LoginService.prototype.google_signup = function (id_token, self) {
        if (self === void 0) { self = this; }
        if (this.isLogged) {
            // already logged in
            alert('You must logout before creating any new account');
        }
        else {
            // rest is same as google login
            this.google_login(id_token, self);
        }
    };
    LoginService.prototype.google_login = function (id_token, self) {
        if (self === void 0) { self = this; }
        // login only if verified == true
        if (!this.loginRequested) {
            return -1;
        } // only login when clicked on button
        // console.log('Google Login called', self.verified, self.isLogged);
        if (self.verified == false) {
            console.log('User is not verified from server yet, so pushing the login to queue');
            self.after_verify.push(function () { self.google_login(id_token); });
        }
        else {
            // user is verified
            if (self.isLogged) {
                console.log('user is already logged in, aborting!!!');
            }
            else {
                // its verified that user is not logged, so googl loging in now...
                // console.log('I was here');
                self.verified = false;
                self.http.post(self.serverUrl + 'api/googlelogin/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_token', id_token), {}).subscribe(function (data) {
                    self.check_user(data['token']);
                });
            }
        }
    };
    LoginService.prototype.onLoginSuccess = function (token) {
        this.isLogged = true;
    };
    LoginService.prototype.up_login = function (username, password) {
        if (this.isLogged) {
            alert('User is already logged!!');
        }
    };
    LoginService.prototype.logout = function (after) {
        var _this = this;
        if (after === void 0) { after = function () { }; }
        this.http.post(this.serverUrl + 'api/logout/', {}, { headers: this.getHeaders() }).subscribe(function (data) {
            after();
            console.log('After logout, result fetched from server');
            _this.isLogged = false;
            _this.data.user = null;
            _this.refresh();
        });
    };
    LoginService.prototype.getHeaders = function () {
        if (this.isLogged) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", "Token " + this.data.token);
        }
        else {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        }
    };
    LoginService.prototype.login = function () {
    };
    LoginService.prototype.refresh = function () {
        for (var x in this.child_elements) {
            this.child_elements[x].refresh();
        }
    };
    LoginService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Govind Singh\Documents\WORK-INTERN\FortuneRaid\webapp-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map