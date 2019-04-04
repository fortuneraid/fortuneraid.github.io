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

module.exports = "<!--******************** NAVBAR ********************-->\r\n<div class=\"navbar-wrapper\">\r\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"navbar-inner\">\r\n      <div class=\"container\">\r\n        <!-- Responsive Navbar Part 1: Button for triggering responsive navbar (not covered in tutorial). Include responsive CSS to utilize. -->\r\n        <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\"> <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </a>\r\n        <h1 class=\"brand\"><a routerLink=\"/\">Website</a></h1>\r\n        <!-- Responsive Navbar Part 2: Place all navbar contents you want collapsed withing .navbar-collapse.collapse. -->\r\n        <nav class=\"pull-right nav-collapse collapse\">\r\n          <ul id=\"menu-main\" class=\"nav\">\r\n            <li *ngFor=\"let nav of nav_list\">\r\n              <a title=\"{{ nav[0] }}\" (click)=\"nav_selected=nav[0]\" href=\"javascript:void(0)\">{{nav[0]}}</a>\r\n            </li>\r\n            <li *ngIf=\"LS.is_staff\">\r\n              <a title=\"Users\" (click)=\"nav_selected='Users'\" href=\"javascript:void(0)\">Users</a>\r\n            </li>\r\n\r\n            <li><a title=\"contact\" href=\"#contact\">\r\n                <app-account></app-account>\r\n              </a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <!-- /.container -->\r\n    </div>\r\n    <!-- /.navbar-inner -->\r\n  </div>\r\n  <!-- /.navbar -->\r\n</div>\r\n<!-- /.navbar-wrapper -->\r\n<div style=\"position:absolute; top:60px; left:0; right:0;bottom:0; overflow-y:scroll;\">\r\n  <section id=\"testimonials\" class=\"single-page hidden-phone\" *ngIf=\"!LS.isLogged\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"blockquote-wrapper\">\r\n          <blockquote class=\"mega\">\r\n            <div class=\"span4\">\r\n              <p class=\"cite\">Dear user</p>\r\n            </div>\r\n            <div class=\"span8\">\r\n              <p class=\"alignright\">\r\n                This site is still under maintenance, so the feature you might be waiting for might be on hold for\r\n                maintenance\r\n              </p>\r\n            </div>\r\n          </blockquote>\r\n        </div>\r\n        <!-- /.blockquote-wrapper -->\r\n      </div>\r\n      <!-- /.row -->\r\n    </div>\r\n    <!-- /.container -->\r\n  </section>\r\n\r\n  <div class=\"container\" *ngIf=\"nav_selected=='Blog List'\">\r\n    <h1>Blogs Created</h1> <br>\r\n    <div class=\"row\">\r\n      <ng-container *ngFor=\"let blog of BS.Blogs\">\r\n        <article class=\"span4 post\" style=\"margin:10px;\">\r\n          <img class=\"img-news\" src=\"{{blog.preview.image}}\" alt=\"\">\r\n          <div class=\"inside\">\r\n            <p class=\"post-date\"><i class=\"icon-calendar\"></i> {{ blog.preview.date }}</p>\r\n            <h2>{{ blog.name }}</h2>\r\n            <div class=\"entry-content\">\r\n              {{blog.preview.disc}} <br>\r\n              <a href=\"javascript:void(0)\" class=\"more-link\">read more</a> </div>\r\n          </div>\r\n          <!-- /.inside -->\r\n        </article>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"nav_selected=='Create Blog'\">\r\n    <h1>Create Blog</h1>\r\n    <div class=\"row\">\r\n      <div class=\"span12\">\r\n        <div class=\"cform\" id=\"theme-form\">\r\n          <div class=\"row\">\r\n            <div class=\"span6\"> <span class=\"your-name\">\r\n                <input type=\"text\" name=\"your-name\" placeholder=\"preview image url...\" class=\"cform-text\" size=\"40\"\r\n                  title=\"preview image url\" #img value=\"/assets/img/blog_img-01.jpg\">\r\n              </span> </div>\r\n            <div class=\"span6\"> <span class=\"your-email\">\r\n                <input type=\"text\" name=\"your-email\" placeholder=\"Date\" class=\"cform-text\" size=\"40\" title=\"Date\" #date>\r\n              </span> </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"span6\"> <span class=\"company\">\r\n                <input type=\"text\" name=\"company\" placeholder=\"Title\" class=\"cform-text\" size=\"40\" title=\"Title\" #title>\r\n              </span> </div>\r\n            <div class=\"span6\"> <span class=\"website\">\r\n                <input type=\"text\" name=\"website\" placeholder=\"Write the description down\" class=\"cform-text\" size=\"40\"\r\n                  title=\"Feature not available\" disabled>\r\n              </span> </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"span12\"> <span class=\"message\">\r\n                <textarea name=\"message\" class=\"cform-textarea\" cols=\"40\" rows=\"10\" title=\"drop us a line.\"\r\n                  #disc></textarea>\r\n              </span> </div>\r\n          </div>\r\n          <div>\r\n            <input type=\"submit\" value=\"Create Blog\" class=\"cform-submit pull-left\" (click)=\"BS.create_blog(\r\n                title.value,  \r\n                {\r\n                  image: img.value,\r\n                  date: date.value,\r\n                  title: title.value,\r\n                  disc : disc.value\r\n                }\r\n              )\">\r\n          </div>\r\n          <div class=\"cform-response-output\"></div>\r\n        </div>\r\n      </div>\r\n      <!-- ./span12 -->\r\n    </div>\r\n  </div>\r\n  <section id=\"team\" class=\"single-page scrollblock\" *ngIf=\"nav_selected=='Users' && LS.is_staff\" style=\"height:100%;\">\r\n    <div class=\"container\">\r\n      <h2>Users having account on our website</h2>\r\n      <div class=\"row\" *ngFor=\"let u of LS.AllUsers\">\r\n        <div class=\"span2 offset1\">\r\n          <div class=\"teamalign\"> <img class=\"team-thumb img-circle\" src=\"{{u.info.picture}}\" alt=\"\"> </div>\r\n          <h3>{{u.name}}</h3>\r\n        </div>\r\n        <div class=\"span2 offset1\" *ngIf=\"u.info.iss!='in_team'\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"addToTeam(u)\">Add to team</button>\r\n        </div>\r\n        <div class=\"span2 offset1\" *ngIf=\"u.info.iss=='in_team'\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"removeFromTeam(u)\">Remove from team</button>\r\n        </div>\r\n          \r\n        \r\n      </div>\r\n\r\n    </div>\r\n    <!-- /.container -->\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(LS, BS, cdr) {
        this.LS = LS;
        this.BS = BS;
        this.cdr = cdr;
        this.nav_list = [
            ['Blog List', 'fas fa-home'],
            ['Create Blog', 'fas fa-home'],
        ];
        LS.addChild(this);
        BS.addChild(this);
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.nav_selected = this.nav_list[0][0];
    };
    AdminComponent.prototype.addToTeam = function (user) {
        var disc = prompt('Enter role to display', 'Web Developer');
        user.info.iss = 'in_team';
        user.info.team_disc = disc;
        this.LS.updateUserInfo(user);
    };
    AdminComponent.prototype.removeFromTeam = function (user) {
        user.info.iss = '';
        delete user.info.team_disc;
        this.LS.updateUserInfo(user);
    };
    AdminComponent.prototype.refresh = function () {
        try {
            this.cdr.detectChanges();
        }
        catch (e) { }
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _blog_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");






var routes = [
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'blog/:id', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.service */ "./src/app/blog/blog.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(LS, BS) {
        this.LS = LS;
        this.BS = BS;
        this.title = 'webapp-angular';
        LS.addChild(this);
        BS.addChild(this);
        BS.getAllBlogs();
        LS.getAllUsers();
    }
    AppComponent.prototype.refresh = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _blog_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\">\r\n        <div class=\"navbar navbar-inverse navbar-fixed-top\">\r\n          <div class=\"navbar-inner\">\r\n            <div class=\"container\">\r\n              <!-- Responsive Navbar Part 1: Button for triggering responsive navbar (not covered in tutorial). Include responsive CSS to utilize. -->\r\n              <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\"> <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </a>\r\n              <h1 class=\"brand\"><a href=\"#top\">Legend!</a></h1>\r\n              <!-- Responsive Navbar Part 2: Place all navbar contents you want collapsed withing .navbar-collapse.collapse. -->\r\n              <nav class=\"pull-right nav-collapse collapse\">\r\n                <ul id=\"menu-main\" class=\"nav\">\r\n                  <li><a title=\"contact\" routerLink=\"/\">Website</a></li>\r\n                  <li *ngIf=\"LS.isLogged\"><a title=\"contact\" href=\"/admin\">Admin</a></li>\r\n                  <li><a title=\"contact\">\r\n                      <app-account></app-account>\r\n                    </a></li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n            <!-- /.container -->\r\n          </div>\r\n          <!-- /.navbar-inner -->\r\n        </div>\r\n        <!-- /.navbar -->\r\n      </div>\r\n\r\n      <div id=\"editor\">\r\n            <p>Hello World!</p>\r\n            <p>Some initial <strong>bold</strong> text</p>\r\n            <p><br></p>\r\n          </div>"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");





var BlogComponent = /** @class */ (function () {
    function BlogComponent(BS, LS, cdr, route) {
        this.BS = BS;
        this.LS = LS;
        this.cdr = cdr;
        this.route = route;
        this.refreshed = false;
        BS.addChild(this);
    }
    BlogComponent.prototype.refresh = function () {
        this.refreshed = true;
        for (var _i = 0, _a = this.BS.Blogs; _i < _a.length; _i++) {
            var x = _a[_i];
            console.log(x.pk, this.id);
            if (x.pk == this.id) {
                this.blog = x;
                console.log('found');
                break;
            }
            if (this.blog != null) {
            }
        }
        this.cdr.detectChanges();
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog/blog.service.ts ***!
  \**************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");




var BlogService = /** @class */ (function () {
    function BlogService(LS) {
        this.LS = LS;
        this.Blogs = [];
        // refresh childs
        this.child_elements = [];
        //this.getAllBlogs();
    }
    BlogService.prototype.getAllBlogs = function () {
        var _this = this;
        // only the previews will be loaded
        this.LS.http.get(this.LS.serverUrl + 'blogs/blog/', {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var x = data_1[_i];
                x.preview = JSON.parse(x.preview);
                _this.Blogs.push(x);
            }
            console.log(_this.Blogs);
        }, function (error) { return console.log(error); }, function () {
            _this.refresh();
        });
    };
    BlogService.prototype.getBlog = function (url) {
        // returns s subscribable that will provide the body as well
        return this.LS.http.get(url);
    };
    BlogService.prototype.create_blog = function (name, preview, category, blog_type) {
        var _this = this;
        if (category === void 0) { category = null; }
        if (blog_type === void 0) { blog_type = '1'; }
        this.LS.http.post(this.LS.serverUrl + 'blogs/blog/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('name', name)
            .set('blog_type', blog_type)
            // .set('category', category)
            .set('preview', JSON.stringify(preview)), {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            _this.Blogs.push(data);
            alert('Blog is created successfully');
            _this.refresh();
        });
    };
    BlogService.prototype.update_blog = function (url, name, preview) {
        var _this = this;
        if (preview === void 0) { preview = null; }
        // making sure to preserve other datas
        if (preview.med_url.indexOf('https://drive.google.com/file/d/') != -1) {
            // drive image
            preview.med_url = 'https://drive.google.com/uc?export=view&id=' + preview.med_url.split('/')[5];
        }
        // console.log(preview);
        for (var x in preview) {
            // body is a {}
            if (preview[x].length == 0) {
                continue;
            }
            this.Blogs[url].preview[x] = preview[x];
        }
        var json_body = JSON.stringify(this.Blogs[url].preview);
        console.log(json_body);
        this.LS.http.patch(url + '?do=preview', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', name).set('preview', json_body), {
            headers: this.LS.getHeaders()
        }).subscribe(function (x) {
            x.preview = JSON.parse(x.preview);
            _this.Blogs[x.url] = x;
            _this.refresh();
        });
    };
    BlogService.prototype.refresh = function () {
        for (var x in this.child_elements) {
            this.child_elements[x].refresh();
        }
    };
    BlogService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ******************** HeaderWrap ********************-->\n<!--******************** NAVBAR ********************-->\n<div class=\"navbar-wrapper\">\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n      <div class=\"container\">\n        <!-- Responsive Navbar Part 1: Button for triggering responsive navbar (not covered in tutorial). Include responsive CSS to utilize. -->\n        <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\"> <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </a>\n        <h1 class=\"brand\"><a href=\"#top\">Legend!</a></h1>\n        <!-- Responsive Navbar Part 2: Place all navbar contents you want collapsed withing .navbar-collapse.collapse. -->\n        <nav class=\"pull-right nav-collapse collapse\">\n          <ul id=\"menu-main\" class=\"nav\">\n            <li><a title=\"portfolio\" (click)=\"scrollTo('portfolio')\">Portfolio</a></li>\n            <li><a title=\"services\" (click)=\"scrollTo('services')\">Services</a></li>\n            <li><a title=\"news\" (click)=\"scrollTo('news')\">News</a></li>\n            <li><a title=\"team\" (click)=\"scrollTo('team')\">Team</a></li>\n            <li><a title=\"contact\" (click)=\"scrollTo('contact')\">Contact</a></li>\n            <li *ngIf=\"LS.isLogged\"><a title=\"contact\" href=\"/admin\">Admin</a></li>\n            <li><a title=\"contact\">\n                <app-account></app-account>\n              </a></li>\n          </ul>\n        </nav>\n      </div>\n      <!-- /.container -->\n    </div>\n    <!-- /.navbar-inner -->\n  </div>\n  <!-- /.navbar -->\n</div>\n<!-- /.navbar-wrapper -->\n\n<div id=\"headerwrap\">\n  <header class=\"clearfix\">\n    <h1><span>Legend!</span> We make web a beautiful place.</h1>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <h2>Signup for our Newsletter to be updated</h2>\n          <input type=\"text\" name=\"your-email\" placeholder=\"you@yourmail.com\" class=\"cform-text\" size=\"40\"\n            title=\"your email\">\n          <input type=\"submit\" value=\"Notify me\" class=\"cform-submit\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"span12\">\n          <ul class=\"icon\">\n            <li><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"icon-pinterest-circled\"></i></a></li>\n            <li><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"icon-facebook-circled\"></i></a></li>\n            <li><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"icon-twitter-circled\"></i></a></li>\n            <li><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"icon-gplus-circled\"></i></a></li>\n            <li><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"icon-skype-circled\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n</div>\n<!--******************** Feature ********************-->\n<div class=\"scrollblock\">\n  <section id=\"feature\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <article>\n            <p>We work to make web a beautiful place.</p>\n            <p>We craft beautiful designs and convert them into</p>\n            <p>fully functional and user-friendy web app.</p>\n          </article>\n        </div>\n        <!-- ./span12 -->\n      </div>\n      <!-- .row -->\n    </div>\n    <!-- ./container -->\n  </section>\n</div>\n<hr>\n<!--******************** Portfolio Section ********************-->\n<section id=\"portfolio\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-desktop-circled\"></i></div>\n    <h1 id=\"folio-headline\">Portfolio...</h1>\n    <div class=\"row\">\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-01.jpg\" rel=\"prettyPhoto\"><img\n              src=\"assets/img/portfolio-01.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Ethan Marcotte Design</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"javascript:void(0)\">view project</a>\n          </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-02.jpg\" rel=\"prettyPhoto\"><img\n              src=\"assets/img/portfolio-02.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>A Book Apart</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"javascript:void(0)\">view project</a>\n          </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-03.jpg\" rel=\"prettyPhoto\"><img\n              src=\"assets/img/portfolio-03.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Four Rules for Designers</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"javascript:void(0)\">view project</a>\n          </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-01.jpg\" rel=\"prettyPhoto\"><img\n              src=\"assets/img/portfolio-03.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Ethan Marcotte Design</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"javascript:void(0)\">view project</a>\n          </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-02.jpg\" rel=\"prettyPhoto\"><img\n              src=\"assets/img/portfolio-01.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>A Book Apart</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"javascript:void(0)\">view project</a>\n          </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n      <div class=\"span4\">\n        <div class=\"mask2\"> <a href=\"assets/img/portfolio-03.jpg\" rel=\"prettyPhoto\"><img\n              src=\"assets/img/portfolio-02.jpg\" alt=\"\"></a> </div>\n        <div class=\"inside\">\n          <div>\n            <h2>Four Rules for Designers</h2>\n          </div>\n          <div class=\"entry-content\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book.</p>\n            <a class=\"more-link\" href=\"javascript:void(0)\">view project</a>\n          </div>\n        </div>\n        <!-- /.inside -->\n      </div>\n      <!-- /.span4 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** Services Section ********************-->\n<section id=\"services\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-cog-circled\"></i></div>\n    <h1>Services</h1>\n    <!-- Four columns -->\n    <div class=\"row\">\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-desktop sev_icon\"></i> </div>\n        <h2>Web design</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-vector sev_icon\"></i> </div>\n        <h2>Print Design</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-basket sev_icon\"></i> </div>\n        <h2>Ecommerce</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n      <div class=\"span3\">\n        <div class=\"align\"> <i class=\"icon-mobile-1 sev_icon\"></i> </div>\n        <h2>Marketing</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s.</p>\n      </div>\n      <!-- /.span3 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** Testimonials Section ********************-->\n<section id=\"testimonials\" class=\"single-page hidden-phone\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"blockquote-wrapper\">\n        <blockquote class=\"mega\">\n          <div class=\"span4\">\n            <p class=\"cite\">John Doe &amp; Sons:</p>\n          </div>\n          <div class=\"span8\">\n            <p class=\"alignright\">\"We highly appreciate the enthusiasm and creative talent of the people at Legend!\"</p>\n          </div>\n        </blockquote>\n      </div>\n      <!-- /.blockquote-wrapper -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** News Section ********************-->\n<section id=\"news\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-pencil-circled\"></i></div>\n    <h1>Our Blog</h1>\n    <!-- Three columns -->\n    <div class=\"row\">\n      <ng-container *ngFor=\"let blog of BS.Blogs\">\n        <article class=\"span4 post\" style=\"margin:10px;\">\n          <img class=\"img-news\" src=\"{{blog.preview.image}}\" alt=\"\">\n          <div class=\"inside\">\n            <p class=\"post-date\"><i class=\"icon-calendar\"></i> {{ blog.preview.date }}</p>\n            <h2>{{ blog.name }}</h2>\n            <div class=\"entry-content\">\n              {{blog.preview.disc}}\n              <a routerLink=\"blog/{{blog.pk}}\" class=\"more-link\">read more</a> </div>\n          </div>\n          <!-- /.inside -->\n        </article>\n      </ng-container>\n    </div>\n    <!-- /.row -->\n    <a href=\"javascript:void(0)\" class=\"btn btn-large\">Go to our blog</a>\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<!--******************** Team Section ********************-->\n<section id=\"team\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-group-circled\"></i></div>\n    <h1>Meet the team</h1>\n    <!-- Five columns -->\n    <div class=\"row\">\n      <div class=\"span2 offset1\" *ngFor=\"let u of LS.AllUsers\">\n        <ng-container *ngIf=\"u.info.iss=='in_team'\">\n            <div class=\"teamalign\"> <img class=\"team-thumb img-circle\" src=\"{{u.info.picture}}\" alt=\"\"> </div>\n            <h3>{{u.name}}</h3>\n            <div class=\"job-position\">{{ u.info.team_disc }}</div>\n        </ng-container>\n      </div>\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n      <div class=\"span10 offset1\">\n        <hr class=\"featurette-divider\">\n        <div class=\"featurette\">\n          <h2 class=\"featurette-heading\">Want to know more? <span class=\"muted\">| a little about us</span></h2>\n          <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica,\n            sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e\n            li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar\n            custosi traductores.</p>\n          <p>At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues\n            coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues.</p>\n          <p>A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.\n          </p>\n        </div>\n        <!-- /.featurette -->\n        <hr class=\"featurette-divider\">\n      </div>\n      <!-- .span10 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<!--******************** Contact Section ********************-->\n<section id=\"contact\" class=\"single-page scrollblock\">\n  <div class=\"container\">\n    <div class=\"align\"><i class=\"icon-mail-2\"></i></div>\n    <h1>Contact us now!</h1>\n    <div class=\"row\">\n      <div class=\"span12\">\n        <div class=\"cform\" id=\"theme-form\">\n          <form action=\"#\" method=\"post\" class=\"cform-form\">\n            <div class=\"row\">\n              <div class=\"span6\"> <span class=\"your-name\">\n                  <input type=\"text\" name=\"your-name\" placeholder=\"Your Name\" class=\"cform-text\" size=\"40\"\n                    title=\"your name\">\n                </span> </div>\n              <div class=\"span6\"> <span class=\"your-email\">\n                  <input type=\"text\" name=\"your-email\" placeholder=\"Your Email\" class=\"cform-text\" size=\"40\"\n                    title=\"your email\">\n                </span> </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"span6\"> <span class=\"company\">\n                  <input type=\"text\" name=\"company\" placeholder=\"Your Company\" class=\"cform-text\" size=\"40\"\n                    title=\"company\">\n                </span> </div>\n              <div class=\"span6\"> <span class=\"website\">\n                  <input type=\"text\" name=\"website\" placeholder=\"Your Website\" class=\"cform-text\" size=\"40\"\n                    title=\"website\">\n                </span> </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"span12\"> <span class=\"message\">\n                  <textarea name=\"message\" class=\"cform-textarea\" cols=\"40\" rows=\"10\"\n                    title=\"drop us a line.\"></textarea>\n                </span> </div>\n            </div>\n            <div>\n              <input type=\"submit\" value=\"Send message\" class=\"cform-submit pull-left\">\n            </div>\n            <div class=\"cform-response-output\"></div>\n          </form>\n        </div>\n      </div>\n      <!-- ./span12 -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<hr>\n<div class=\"footer-wrapper\">\n  <div class=\"container\">\n    <footer>\n      <small>&copy; 2013 Inbetwin Network. All rights reserved.</small>\n    </footer>\n  </div>\n  <!-- ./container -->\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _assets_js_jquery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/jquery.js */ "./src/assets/js/jquery.js");
/* harmony import */ var _assets_js_jquery_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_jquery_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_jquery_scrollTo_1_4_2_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/jquery.scrollTo-1.4.2-min.js */ "./src/assets/js/jquery.scrollTo-1.4.2-min.js");
/* harmony import */ var _assets_js_jquery_scrollTo_1_4_2_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_jquery_scrollTo_1_4_2_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_js_jquery_localscroll_1_2_7_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/js/jquery.localscroll-1.2.7-min.js */ "./src/assets/js/jquery.localscroll-1.2.7-min.js");
/* harmony import */ var _assets_js_jquery_localscroll_1_2_7_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_jquery_localscroll_1_2_7_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(LS, BS, cdr, ngZone, router) {
        this.LS = LS;
        this.BS = BS;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.router = router;
        LS.addChild(this);
        BS.addChild(this);
    }
    HomeComponent.prototype.navigate = function (commands) {
        var _this = this;
        this.ngZone.run(function () { return _this.router.navigate(commands); }).then();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.scrollTo = function (name) {
        console.log('going to :' + name);
        document.getElementById(name).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    HomeComponent.prototype.refresh = function () {
        try {
            this.cdr.detectChanges();
        }
        catch (e) { }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss"), __webpack_require__(/*! ../../assets/css/bootstrap.css */ "./src/assets/css/bootstrap.css"), __webpack_require__(/*! ../../assets/css/style.css */ "./src/assets/css/style.css"), __webpack_require__(/*! ../../assets/css/fontello.css */ "./src/assets/css/fontello.css"), __webpack_require__(/*! ../../assets/css/bootstrap-responsive.scss */ "./src/assets/css/bootstrap-responsive.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _blog_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/account/account.component.html":
/*!******************************************************!*\
  !*** ./src/app/login/account/account.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"show=='icon'\">\r\n  <div class=\"nav-item dropdown\">\r\n    <a class=\"nav-link dropdown-toggle\" style=\"padding:0;\" href=\"javascript:void(0)\" id=\"navbarDropdown\" role=\"button\"\r\n      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <i *ngIf=\"!LS.isLogged\" class='text-primary fas fa-user'></i>\r\n      <img *ngIf=\"LS.isLogged\" class=\"account-image-small\" src=\"{{LS.data.user.info.picture}}\">\r\n    </a>\r\n    <div class=\"dropdown-menu dropdown-menu-right\">\r\n      <a class=\"dropdown-item fab fa-google text-primary\" href=\"javascript:void(0)\" (click)=\"google_login()\"\r\n        *ngIf=\"!LS.isLogged\">\r\n        <div style=\"margin-left:5px;\">Login </div>\r\n      </a>\r\n      <!--div class=\"dropdown-divider\" *ngIf=\"LS.isLogged\"></div-->\r\n      <a class=\"dropdown-item fas fa-file-invoice text-primary\" routerLink=\"/user\" >\r\n        <div style=\"margin-left:5px;\">Account</div>\r\n      </a>\r\n      <hr *ngIf=\"LS.isLogged\">\r\n      <a class=\"dropdown-item fas fa-sign-out-alt text-danger\" (click)=\"logout()\" *ngIf=\"LS.isLogged\"\r\n        href=\"javascript:void(0)\">\r\n        <div style=\"margin-left:5px;\">Logout</div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show=='dashboard'\">\r\n  <div class=\"nav-link btn\">\r\n    <i class=\"fab fa-google text-primary\" href=\"javascript:void(0)\" (click)=\"google_login()\" *ngIf=\"!LS.isLogged\">\r\n      <div style=\"margin-left:5px;\">Login</div>\r\n    </i>\r\n    <i class=\"fas text-primary\" href=\"javascript:void(0)\" *ngIf=\"LS.isLogged\">\r\n      <div style=\"margin-right:5px;\">{{LS.data.user.info.name}}</div>\r\n    </i>\r\n    <img *ngIf=\"LS.isLogged\" class=\"account-image-small\" (click)=\"logout();\" src=\"{{LS.data.user.info.picture}}\">\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show==none\">\r\n    <div *ngIf=\"!LS.isLogged\" (click)=\"google_login()\">\r\n      Sign In\r\n    </div>\r\n    <div *ngIf=\"LS.isLogged\" (click)=\"logout()\">\r\n        Logout\r\n    </div>\r\n      \r\n  </ng-container>\r\n"

/***/ }),

/***/ "./src/app/login/account/account.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login/account/account.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-image-small {\n  width: 40px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYWNjb3VudC9EOlxcR292aW5kIFNpbmdoXFxEb2N1bWVudHNcXFdPUkstSU5URVJOXFxGb3J0dW5lUmFpZFxcd2ViYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXGxvZ2luXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtaW1hZ2Utc21hbGx7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login/login.service.ts");



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
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/login/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/login/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/login/account/account.component.ts");
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



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serverUrl = "https://fortuneraid.herokuapp.com/";
        this.data = {
            user: null,
            token: null
        };
        this.is_staff = false;
        this.isLogged = false;
        this.verified = false;
        this.loginRequested = false;
        this.after_verify = [];
        // tslint:disable-next-line: member-ordering
        this.AllUsers = [];
        // refresh childs
        this.child_elements = [];
        //this.serverUrl = 'http://localhost:8000/';
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
        this.http.get(this.serverUrl + 'users/status/', {
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
                self.http.post(self.serverUrl + 'logingoogle/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_token', id_token), {}).subscribe(function (data) {
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
        this.http.post(this.serverUrl + 'logout/', {}, { headers: this.getHeaders() }).subscribe(function (data) {
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
    LoginService.prototype.getAllUsers = function () {
        var _this = this;
        this.http.get(this.serverUrl + 'users2/', { headers: this.getHeaders() }).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var x = data_1[_i];
                x.info = JSON.parse(x.info);
                _this.AllUsers.push(x);
            }
        });
    };
    LoginService.prototype.updateUserInfo = function (user) {
        user.info = JSON.stringify(user.info);
        this.http.patch(user.url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('info', user.info), { headers: this.getHeaders() }).subscribe(function (data) {
            user.info = JSON.parse(data.info);
        });
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

/***/ "./src/assets/css/bootstrap-responsive.scss":
/*!**************************************************!*\
  !*** ./src/assets/css/bootstrap-responsive.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Bootstrap Responsive v2.3.0\r\n *\r\n * Copyright 2012 Twitter, Inc\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Designed and built with all the love in the world @twitter by @mdo and @fat.\r\n */\n.clearfix {\n  *zoom: 1; }\n.clearfix:before {\n    display: table;\n    line-height: 0;\n    content: \"\"; }\n.clearfix:after {\n    display: table;\n    line-height: 0;\n    content: \"\";\n    clear: both; }\n.hide-text {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n.input-block-level {\n  display: block;\n  width: 100%;\n  min-height: 30px;\n  box-sizing: border-box; }\n@-ms-viewport {\n  width: device-width; }\n.hidden {\n  display: none;\n  visibility: hidden; }\n.visible-phone, .visible-tablet, .hidden-desktop {\n  display: none !important; }\n.visible-desktop {\n  display: inherit !important; }\n@media (min-width: 768px) and (max-width: 979px) {\n  .hidden-desktop {\n    display: inherit !important; }\n  .visible-desktop {\n    display: none !important; }\n  .visible-tablet {\n    display: inherit !important; }\n  .hidden-tablet {\n    display: none !important; } }\n@media (max-width: 767px) {\n  .hidden-desktop {\n    display: inherit !important; }\n  .visible-desktop {\n    display: none !important; }\n  .visible-phone {\n    display: inherit !important; }\n  .hidden-phone {\n    display: none !important; } }\n.visible-print {\n  display: none !important; }\n@media print {\n  .visible-print {\n    display: inherit !important; }\n  .hidden-print {\n    display: none !important; } }\n@media (min-width: 1200px) {\n  .row {\n    margin-left: -30px;\n    *zoom: 1; }\n    .row:before {\n      display: table;\n      line-height: 0;\n      content: \"\"; }\n    .row:after {\n      display: table;\n      line-height: 0;\n      content: \"\";\n      clear: both; }\n  [class*=\"span\"] {\n    float: left;\n    min-height: 1px;\n    margin-left: 30px; }\n  .container, .navbar-static-top .container, .navbar-fixed-top .container, .navbar-fixed-bottom .container, .span12 {\n    width: 1170px; }\n  .span11 {\n    width: 1070px; }\n  .span10 {\n    width: 970px; }\n  .span9 {\n    width: 870px; }\n  .span8 {\n    width: 770px; }\n  .span7 {\n    width: 670px; }\n  .span6 {\n    width: 570px; }\n  .span5 {\n    width: 470px; }\n  .span4 {\n    width: 370px; }\n  .span3 {\n    width: 270px; }\n  .span2 {\n    width: 170px; }\n  .span1 {\n    width: 70px; }\n  .offset12 {\n    margin-left: 1230px; }\n  .offset11 {\n    margin-left: 1130px; }\n  .offset10 {\n    margin-left: 1030px; }\n  .offset9 {\n    margin-left: 930px; }\n  .offset8 {\n    margin-left: 830px; }\n  .offset7 {\n    margin-left: 730px; }\n  .offset6 {\n    margin-left: 630px; }\n  .offset5 {\n    margin-left: 530px; }\n  .offset4 {\n    margin-left: 430px; }\n  .offset3 {\n    margin-left: 330px; }\n  .offset2 {\n    margin-left: 230px; }\n  .offset1 {\n    margin-left: 130px; }\n  .row-fluid {\n    width: 100%;\n    *zoom: 1; }\n    .row-fluid:before {\n      display: table;\n      line-height: 0;\n      content: \"\"; }\n    .row-fluid:after {\n      display: table;\n      line-height: 0;\n      content: \"\";\n      clear: both; }\n    .row-fluid [class*=\"span\"] {\n      display: block;\n      float: left;\n      width: 100%;\n      min-height: 30px;\n      margin-left: 2.564102564102564%;\n      *margin-left: 2.5109110747408616%;\n      box-sizing: border-box; }\n      .row-fluid [class*=\"span\"]:first-child {\n        margin-left: 0; }\n    .row-fluid .controls-row [class*=\"span\"] + [class*=\"span\"] {\n      margin-left: 2.564102564102564%; }\n    .row-fluid .span12 {\n      width: 100%;\n      *width: 99.94680851063829%; }\n    .row-fluid .span11 {\n      width: 91.45299145299145%;\n      *width: 91.39979996362975%; }\n    .row-fluid .span10 {\n      width: 82.90598290598291%;\n      *width: 82.8527914166212%; }\n    .row-fluid .span9 {\n      width: 74.35897435897436%;\n      *width: 74.30578286961266%; }\n    .row-fluid .span8 {\n      width: 65.81196581196582%;\n      *width: 65.75877432260411%; }\n    .row-fluid .span7 {\n      width: 57.26495726495726%;\n      *width: 57.21176577559556%; }\n    .row-fluid .span6 {\n      width: 48.717948717948715%;\n      *width: 48.664757228587014%; }\n    .row-fluid .span5 {\n      width: 40.17094017094017%;\n      *width: 40.11774868157847%; }\n    .row-fluid .span4 {\n      width: 31.623931623931625%;\n      *width: 31.570740134569924%; }\n    .row-fluid .span3 {\n      width: 23.076923076923077%;\n      *width: 23.023731587561375%; }\n    .row-fluid .span2 {\n      width: 14.52991452991453%;\n      *width: 14.476723040552828%; }\n    .row-fluid .span1 {\n      width: 5.982905982905983%;\n      *width: 5.929714493544281%; }\n    .row-fluid .offset12 {\n      margin-left: 105.12820512820512%;\n      *margin-left: 105.02182214948171%; }\n      .row-fluid .offset12:first-child {\n        margin-left: 102.56410256410257%;\n        *margin-left: 102.45771958537915%; }\n    .row-fluid .offset11 {\n      margin-left: 96.58119658119658%;\n      *margin-left: 96.47481360247316%; }\n      .row-fluid .offset11:first-child {\n        margin-left: 94.01709401709402%;\n        *margin-left: 93.91071103837061%; }\n    .row-fluid .offset10 {\n      margin-left: 88.03418803418803%;\n      *margin-left: 87.92780505546462%; }\n      .row-fluid .offset10:first-child {\n        margin-left: 85.47008547008548%;\n        *margin-left: 85.36370249136206%; }\n    .row-fluid .offset9 {\n      margin-left: 79.48717948717949%;\n      *margin-left: 79.38079650845607%; }\n      .row-fluid .offset9:first-child {\n        margin-left: 76.92307692307693%;\n        *margin-left: 76.81669394435352%; }\n    .row-fluid .offset8 {\n      margin-left: 70.94017094017094%;\n      *margin-left: 70.83378796144753%; }\n      .row-fluid .offset8:first-child {\n        margin-left: 68.37606837606839%;\n        *margin-left: 68.26968539734497%; }\n    .row-fluid .offset7 {\n      margin-left: 62.393162393162385%;\n      *margin-left: 62.28677941443899%; }\n      .row-fluid .offset7:first-child {\n        margin-left: 59.82905982905982%;\n        *margin-left: 59.72267685033642%; }\n    .row-fluid .offset6 {\n      margin-left: 53.84615384615384%;\n      *margin-left: 53.739770867430444%; }\n      .row-fluid .offset6:first-child {\n        margin-left: 51.28205128205128%;\n        *margin-left: 51.175668303327875%; }\n    .row-fluid .offset5 {\n      margin-left: 45.299145299145295%;\n      *margin-left: 45.1927623204219%; }\n      .row-fluid .offset5:first-child {\n        margin-left: 42.73504273504273%;\n        *margin-left: 42.62865975631933%; }\n    .row-fluid .offset4 {\n      margin-left: 36.75213675213675%;\n      *margin-left: 36.645753773413354%; }\n      .row-fluid .offset4:first-child {\n        margin-left: 34.18803418803419%;\n        *margin-left: 34.081651209310785%; }\n    .row-fluid .offset3 {\n      margin-left: 28.205128205128204%;\n      *margin-left: 28.0987452264048%; }\n      .row-fluid .offset3:first-child {\n        margin-left: 25.641025641025642%;\n        *margin-left: 25.53464266230224%; }\n    .row-fluid .offset2 {\n      margin-left: 19.65811965811966%;\n      *margin-left: 19.551736679396257%; }\n      .row-fluid .offset2:first-child {\n        margin-left: 17.094017094017094%;\n        *margin-left: 16.98763411529369%; }\n    .row-fluid .offset1 {\n      margin-left: 11.11111111111111%;\n      *margin-left: 11.004728132387708%; }\n      .row-fluid .offset1:first-child {\n        margin-left: 8.547008547008547%;\n        *margin-left: 8.440625568285142%; }\n  input, textarea, .uneditable-input {\n    margin-left: 0; }\n  .controls-row [class*=\"span\"] + [class*=\"span\"] {\n    margin-left: 30px; }\n  input.span12, textarea.span12, .uneditable-input.span12 {\n    width: 1156px; }\n  input.span11, textarea.span11, .uneditable-input.span11 {\n    width: 1056px; }\n  input.span10, textarea.span10, .uneditable-input.span10 {\n    width: 956px; }\n  input.span9, textarea.span9, .uneditable-input.span9 {\n    width: 856px; }\n  input.span8, textarea.span8, .uneditable-input.span8 {\n    width: 756px; }\n  input.span7, textarea.span7, .uneditable-input.span7 {\n    width: 656px; }\n  input.span6, textarea.span6, .uneditable-input.span6 {\n    width: 556px; }\n  input.span5, textarea.span5, .uneditable-input.span5 {\n    width: 456px; }\n  input.span4, textarea.span4, .uneditable-input.span4 {\n    width: 356px; }\n  input.span3, textarea.span3, .uneditable-input.span3 {\n    width: 256px; }\n  input.span2, textarea.span2, .uneditable-input.span2 {\n    width: 156px; }\n  input.span1, textarea.span1, .uneditable-input.span1 {\n    width: 56px; }\n  .thumbnails {\n    margin-left: -30px; }\n    .thumbnails > li {\n      margin-left: 30px; }\n  .row-fluid .thumbnails {\n    margin-left: 0; } }\n@media (min-width: 768px) and (max-width: 979px) {\n  .row {\n    margin-left: -20px;\n    *zoom: 1; }\n    .row:before {\n      display: table;\n      line-height: 0;\n      content: \"\"; }\n    .row:after {\n      display: table;\n      line-height: 0;\n      content: \"\";\n      clear: both; }\n  [class*=\"span\"] {\n    float: left;\n    min-height: 1px;\n    margin-left: 20px; }\n  .container, .navbar-static-top .container, .navbar-fixed-top .container, .navbar-fixed-bottom .container, .span12 {\n    width: 724px; }\n  .span11 {\n    width: 662px; }\n  .span10 {\n    width: 600px; }\n  .span9 {\n    width: 538px; }\n  .span8 {\n    width: 476px; }\n  .span7 {\n    width: 414px; }\n  .span6 {\n    width: 352px; }\n  .span5 {\n    width: 290px; }\n  .span4 {\n    width: 228px; }\n  .span3 {\n    width: 166px; }\n  .span2 {\n    width: 104px; }\n  .span1 {\n    width: 42px; }\n  .offset12 {\n    margin-left: 764px; }\n  .offset11 {\n    margin-left: 702px; }\n  .offset10 {\n    margin-left: 640px; }\n  .offset9 {\n    margin-left: 578px; }\n  .offset8 {\n    margin-left: 516px; }\n  .offset7 {\n    margin-left: 454px; }\n  .offset6 {\n    margin-left: 392px; }\n  .offset5 {\n    margin-left: 330px; }\n  .offset4 {\n    margin-left: 268px; }\n  .offset3 {\n    margin-left: 206px; }\n  .offset2 {\n    margin-left: 144px; }\n  .offset1 {\n    margin-left: 82px; }\n  .row-fluid {\n    width: 100%;\n    *zoom: 1; }\n    .row-fluid:before {\n      display: table;\n      line-height: 0;\n      content: \"\"; }\n    .row-fluid:after {\n      display: table;\n      line-height: 0;\n      content: \"\";\n      clear: both; }\n    .row-fluid [class*=\"span\"] {\n      display: block;\n      float: left;\n      width: 100%;\n      min-height: 30px;\n      margin-left: 2.7624309392265194%;\n      *margin-left: 2.709239449864817%;\n      box-sizing: border-box; }\n      .row-fluid [class*=\"span\"]:first-child {\n        margin-left: 0; }\n    .row-fluid .controls-row [class*=\"span\"] + [class*=\"span\"] {\n      margin-left: 2.7624309392265194%; }\n    .row-fluid .span12 {\n      width: 100%;\n      *width: 99.94680851063829%; }\n    .row-fluid .span11 {\n      width: 91.43646408839778%;\n      *width: 91.38327259903608%; }\n    .row-fluid .span10 {\n      width: 82.87292817679558%;\n      *width: 82.81973668743387%; }\n    .row-fluid .span9 {\n      width: 74.30939226519337%;\n      *width: 74.25620077583166%; }\n    .row-fluid .span8 {\n      width: 65.74585635359117%;\n      *width: 65.69266486422946%; }\n    .row-fluid .span7 {\n      width: 57.18232044198895%;\n      *width: 57.12912895262725%; }\n    .row-fluid .span6 {\n      width: 48.61878453038674%;\n      *width: 48.56559304102504%; }\n    .row-fluid .span5 {\n      width: 40.05524861878453%;\n      *width: 40.00205712942283%; }\n    .row-fluid .span4 {\n      width: 31.491712707182323%;\n      *width: 31.43852121782062%; }\n    .row-fluid .span3 {\n      width: 22.92817679558011%;\n      *width: 22.87498530621841%; }\n    .row-fluid .span2 {\n      width: 14.3646408839779%;\n      *width: 14.311449394616199%; }\n    .row-fluid .span1 {\n      width: 5.801104972375691%;\n      *width: 5.747913483013988%; }\n    .row-fluid .offset12 {\n      margin-left: 105.52486187845304%;\n      *margin-left: 105.41847889972962%; }\n      .row-fluid .offset12:first-child {\n        margin-left: 102.76243093922652%;\n        *margin-left: 102.6560479605031%; }\n    .row-fluid .offset11 {\n      margin-left: 96.96132596685082%;\n      *margin-left: 96.8549429881274%; }\n      .row-fluid .offset11:first-child {\n        margin-left: 94.1988950276243%;\n        *margin-left: 94.09251204890089%; }\n    .row-fluid .offset10 {\n      margin-left: 88.39779005524862%;\n      *margin-left: 88.2914070765252%; }\n      .row-fluid .offset10:first-child {\n        margin-left: 85.6353591160221%;\n        *margin-left: 85.52897613729868%; }\n    .row-fluid .offset9 {\n      margin-left: 79.8342541436464%;\n      *margin-left: 79.72787116492299%; }\n      .row-fluid .offset9:first-child {\n        margin-left: 77.07182320441989%;\n        *margin-left: 76.96544022569647%; }\n    .row-fluid .offset8 {\n      margin-left: 71.2707182320442%;\n      *margin-left: 71.16433525332079%; }\n      .row-fluid .offset8:first-child {\n        margin-left: 68.50828729281768%;\n        *margin-left: 68.40190431409427%; }\n    .row-fluid .offset7 {\n      margin-left: 62.70718232044199%;\n      *margin-left: 62.600799341718584%; }\n      .row-fluid .offset7:first-child {\n        margin-left: 59.94475138121547%;\n        *margin-left: 59.838368402492065%; }\n    .row-fluid .offset6 {\n      margin-left: 54.14364640883978%;\n      *margin-left: 54.037263430116376%; }\n      .row-fluid .offset6:first-child {\n        margin-left: 51.38121546961326%;\n        *margin-left: 51.27483249088986%; }\n    .row-fluid .offset5 {\n      margin-left: 45.58011049723757%;\n      *margin-left: 45.47372751851417%; }\n      .row-fluid .offset5:first-child {\n        margin-left: 42.81767955801105%;\n        *margin-left: 42.71129657928765%; }\n    .row-fluid .offset4 {\n      margin-left: 37.01657458563536%;\n      *margin-left: 36.91019160691196%; }\n      .row-fluid .offset4:first-child {\n        margin-left: 34.25414364640884%;\n        *margin-left: 34.14776066768544%; }\n    .row-fluid .offset3 {\n      margin-left: 28.45303867403315%;\n      *margin-left: 28.346655695309746%; }\n      .row-fluid .offset3:first-child {\n        margin-left: 25.69060773480663%;\n        *margin-left: 25.584224756083227%; }\n    .row-fluid .offset2 {\n      margin-left: 19.88950276243094%;\n      *margin-left: 19.783119783707537%; }\n      .row-fluid .offset2:first-child {\n        margin-left: 17.12707182320442%;\n        *margin-left: 17.02068884448102%; }\n    .row-fluid .offset1 {\n      margin-left: 11.32596685082873%;\n      *margin-left: 11.219583872105325%; }\n      .row-fluid .offset1:first-child {\n        margin-left: 8.56353591160221%;\n        *margin-left: 8.457152932878806%; }\n  input, textarea, .uneditable-input {\n    margin-left: 0; }\n  .controls-row [class*=\"span\"] + [class*=\"span\"] {\n    margin-left: 20px; }\n  input.span12, textarea.span12, .uneditable-input.span12 {\n    width: 710px; }\n  input.span11, textarea.span11, .uneditable-input.span11 {\n    width: 648px; }\n  input.span10, textarea.span10, .uneditable-input.span10 {\n    width: 586px; }\n  input.span9, textarea.span9, .uneditable-input.span9 {\n    width: 524px; }\n  input.span8, textarea.span8, .uneditable-input.span8 {\n    width: 462px; }\n  input.span7, textarea.span7, .uneditable-input.span7 {\n    width: 400px; }\n  input.span6, textarea.span6, .uneditable-input.span6 {\n    width: 338px; }\n  input.span5, textarea.span5, .uneditable-input.span5 {\n    width: 276px; }\n  input.span4, textarea.span4, .uneditable-input.span4 {\n    width: 214px; }\n  input.span3, textarea.span3, .uneditable-input.span3 {\n    width: 152px; }\n  input.span2, textarea.span2, .uneditable-input.span2 {\n    width: 90px; }\n  input.span1, textarea.span1, .uneditable-input.span1 {\n    width: 28px; } }\n@media (max-width: 767px) {\n  body {\n    padding-right: 20px;\n    padding-left: 20px; }\n  .navbar-fixed-top, .navbar-fixed-bottom, .navbar-static-top {\n    margin-right: -20px;\n    margin-left: -20px; }\n  .container-fluid {\n    padding: 0; }\n  .dl-horizontal dt {\n    float: none;\n    width: auto;\n    clear: none;\n    text-align: left; }\n  .dl-horizontal dd {\n    margin-left: 0; }\n  .container {\n    width: auto; }\n  .row-fluid {\n    width: 100%; }\n  .row {\n    margin-left: 0; }\n  .thumbnails {\n    margin-left: 0; }\n    .thumbnails > li {\n      float: none;\n      margin-left: 0; }\n  [class*=\"span\"], .uneditable-input[class*=\"span\"], .row-fluid [class*=\"span\"] {\n    display: block;\n    float: none;\n    width: 100%;\n    margin-left: 0;\n    box-sizing: border-box; }\n  .span12 {\n    width: 100%;\n    box-sizing: border-box; }\n  .row-fluid .span12 {\n    width: 100%;\n    box-sizing: border-box; }\n  .row-fluid [class*=\"offset\"]:first-child {\n    margin-left: 0; }\n  .input-large, .input-xlarge, .input-xxlarge, input[class*=\"span\"], select[class*=\"span\"], textarea[class*=\"span\"], .uneditable-input {\n    display: block;\n    width: 100%;\n    min-height: 30px;\n    box-sizing: border-box; }\n  .input-prepend input, .input-append input, .input-prepend input[class*=\"span\"], .input-append input[class*=\"span\"] {\n    display: inline-block;\n    width: auto; }\n  .controls-row [class*=\"span\"] + [class*=\"span\"] {\n    margin-left: 0; }\n  .modal {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    left: 20px;\n    width: auto;\n    margin: 0; }\n    .modal.fade {\n      top: -100px; }\n      .modal.fade.in {\n        top: 20px; } }\n@media (max-width: 480px) {\n  .nav-collapse {\n    -webkit-transform: translate3d(0, 0, 0); }\n  .page-header h1 small {\n    display: block;\n    line-height: 20px; }\n  input[type=checkbox], input[type=radio] {\n    border: 1px solid #ccc; }\n  .form-horizontal .control-label {\n    float: none;\n    width: auto;\n    padding-top: 0;\n    text-align: left; }\n  .form-horizontal .controls {\n    margin-left: 0; }\n  .form-horizontal .control-list {\n    padding-top: 0; }\n  .form-horizontal .form-actions {\n    padding-right: 10px;\n    padding-left: 10px; }\n  .media .pull-left, .media .pull-right {\n    display: block;\n    float: none;\n    margin-bottom: 10px; }\n  .media-object {\n    margin-right: 0;\n    margin-left: 0; }\n  .modal {\n    top: 10px;\n    right: 10px;\n    left: 10px; }\n  .modal-header .close {\n    padding: 10px;\n    margin: -10px; }\n  .carousel-caption {\n    position: static; } }\n@media (max-width: 979px) {\n  body {\n    padding-top: 0; }\n  .navbar-fixed-top, .navbar-fixed-bottom {\n    position: static; }\n  .navbar-fixed-top {\n    margin-bottom: 0px; }\n  .navbar-fixed-bottom {\n    margin-top: 20px; }\n  .navbar-fixed-top .navbar-inner, .navbar-fixed-bottom .navbar-inner {\n    padding: 25px; }\n  .navbar .container {\n    width: auto;\n    padding: 0; }\n  .navbar .brand {\n    padding-right: 10px;\n    padding-left: 10px;\n    margin: -5px 0; }\n  .nav-collapse {\n    clear: both; }\n    .nav-collapse .nav {\n      float: none;\n      margin: 0 0 10px; }\n      .nav-collapse .nav > li {\n        float: none; }\n        .nav-collapse .nav > li > a {\n          margin-bottom: 2px; }\n      .nav-collapse .nav > .divider-vertical {\n        display: none; }\n      .nav-collapse .nav .nav-header {\n        color: #777777;\n        text-shadow: none; }\n      .nav-collapse .nav > li > a {\n        padding: 9px 15px;\n        font-weight: bold;\n        color: #777777;\n        border-radius: 3px; }\n    .nav-collapse .dropdown-menu a {\n      padding: 9px 15px;\n      font-weight: bold;\n      color: #777777;\n      border-radius: 3px; }\n    .nav-collapse .btn {\n      padding: 4px 10px 4px;\n      font-weight: normal;\n      border-radius: 4px; }\n    .nav-collapse .dropdown-menu li + li a {\n      margin-bottom: 2px; }\n    .nav-collapse .nav > li > a:hover, .nav-collapse .nav > li > a:focus {\n      background-color: #f2f2f2; }\n    .nav-collapse .dropdown-menu a:hover, .nav-collapse .dropdown-menu a:focus {\n      background-color: #f2f2f2; }\n  .navbar-inverse .nav-collapse .nav > li > a, .navbar-inverse .nav-collapse .dropdown-menu a {\n    color: #999999; }\n  .navbar-inverse .nav-collapse .nav > li > a:hover, .navbar-inverse .nav-collapse .nav > li > a:focus {\n    background-color: #111111; }\n  .navbar-inverse .nav-collapse .dropdown-menu a:hover, .navbar-inverse .nav-collapse .dropdown-menu a:focus {\n    background-color: #111111; }\n  .nav-collapse.in .btn-group {\n    padding: 0;\n    margin-top: 5px; }\n  .nav-collapse .dropdown-menu {\n    position: static;\n    top: auto;\n    left: auto;\n    display: none;\n    float: none;\n    max-width: none;\n    padding: 0;\n    margin: 0 15px;\n    background-color: transparent;\n    border: none;\n    border-radius: 0;\n    box-shadow: none; }\n  .nav-collapse .open > .dropdown-menu {\n    display: block; }\n  .nav-collapse .dropdown-menu:before, .nav-collapse .dropdown-menu:after, .nav-collapse .dropdown-menu .divider {\n    display: none; }\n  .nav-collapse .nav > li > .dropdown-menu:before, .nav-collapse .nav > li > .dropdown-menu:after {\n    display: none; }\n  .nav-collapse .navbar-form, .nav-collapse .navbar-search {\n    float: none;\n    padding: 10px 15px;\n    margin: 10px 0;\n    border-top: 1px solid #f2f2f2;\n    border-bottom: 1px solid #f2f2f2;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1); }\n  .navbar-inverse .nav-collapse .navbar-form, .navbar-inverse .nav-collapse .navbar-search {\n    border-top-color: #111111;\n    border-bottom-color: #111111; }\n  .navbar .nav-collapse .nav.pull-right {\n    float: none;\n    margin-left: 0; }\n  .nav-collapse {\n    height: 0;\n    overflow: hidden; }\n    .nav-collapse.collapse {\n      height: 0;\n      overflow: hidden; }\n  .navbar .btn-navbar {\n    display: block; }\n  .navbar-static .navbar-inner {\n    padding-right: 10px;\n    padding-left: 10px; } }\n@media (min-width: 980px) {\n  .nav-collapse.collapse {\n    height: auto !important;\n    overflow: visible !important; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL0Q6XFxHb3ZpbmQgU2luZ2hcXERvY3VtZW50c1xcV09SSy1JTlRFUk5cXEZvcnR1bmVSYWlkXFx3ZWJhcHAtYW5ndWxhci9zcmNcXGFzc2V0c1xcY3NzXFxib290c3RyYXAtcmVzcG9uc2l2ZS5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUNRRTtBREVEO0dBQ0EsT0FBUSxFQUFBO0FBRFI7SUFHRSxjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVcsRUFBQTtBQUxiO0lBUUUsY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVyxFQUFBO0FBSVo7RUFDRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUyxFQUFBO0FBR1I7RUFDRCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUdoQixzQkFBc0IsRUFBQTtBQUdyQjtFQUNELG1CQUFtQixFQUFBO0FBSWxCO0VBQ0QsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBR2pCO0VBQ0Qsd0JBQXdCLEVBQUE7QUFHdkI7RUFDRCwyQkFBMkIsRUFBQTtBQUcxQjtFQUNEO0lBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLDJCQUEyQixFQUFBO0VBRTdCO0lBQ0Usd0JBQXdCLEVBQUEsRUFDekI7QUFHQTtFQUNEO0lBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLDJCQUEyQixFQUFBO0VBRTdCO0lBQ0Usd0JBQXdCLEVBQUEsRUFDekI7QUFHQTtFQUNELHdCQUF3QixFQUFBO0FBR3ZCO0VBQ0Q7SUFDRSwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLHdCQUF3QixFQUFBLEVBQ3pCO0FBR0E7RUFDRDtJQUNFLGtCQUFrQjtLQUNsQixPQUFRLEVBQUE7SUFG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QUNsQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUdoQyxvRkFBb0YsRUFBQTtFQUdyRjtJQUVDLHlCQUF5QjtJQUN6Qiw0QkFBNEIsRUFBQTtFQUc3QjtJQUNFLFdBQVc7SUFDWCxjQUFjLEVBQUE7RUFFaEI7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7SUFGbEI7TUFJQyxTQUFTO01BQ1QsZ0JBQWdCLEVBQUE7RUFHakI7SUFDRSxjQUFjLEVBQUE7RUFFaEI7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUEsRUFDbkI7QUFHQTtFQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLDRCQUE0QixFQUFBLEVBQzdCIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL2Jvb3RzdHJhcC1yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogQm9vdHN0cmFwIFJlc3BvbnNpdmUgdjIuMy4wXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDEyIFR3aXR0ZXIsIEluY1xyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgdjIuMFxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogRGVzaWduZWQgYW5kIGJ1aWx0IHdpdGggYWxsIHRoZSBsb3ZlIGluIHRoZSB3b3JsZCBAdHdpdHRlciBieSBAbWRvIGFuZCBAZmF0LlxyXG4gKi9cclxuXHJcbiAuY2xlYXJmaXgge1xyXG5cdCp6b29tOiAxO1xyXG5cdCY6YmVmb3JlIHtcclxuXHQgIGRpc3BsYXk6IHRhYmxlO1xyXG5cdCAgbGluZS1oZWlnaHQ6IDA7XHJcblx0ICBjb250ZW50OiBcIlwiO1xyXG5cdH1cclxuXHQmOmFmdGVyIHtcclxuXHQgIGRpc3BsYXk6IHRhYmxlO1xyXG5cdCAgbGluZS1oZWlnaHQ6IDA7XHJcblx0ICBjb250ZW50OiBcIlwiO1xyXG5cdCAgY2xlYXI6IGJvdGg7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICAuaGlkZS10ZXh0IHtcclxuXHRmb250OiAwLzAgYTtcclxuXHRjb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0dGV4dC1zaGFkb3c6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtYmxvY2stbGV2ZWwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6IDMwcHg7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBALW1zLXZpZXdwb3J0IHtcclxuXHR3aWR0aDogZGV2aWNlLXdpZHRoO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLnZpc2libGUtcGhvbmUsIC52aXNpYmxlLXRhYmxldCwgLmhpZGRlbi1kZXNrdG9wIHtcclxuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC52aXNpYmxlLWRlc2t0b3Age1xyXG5cdGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcclxuXHQuaGlkZGVuLWRlc2t0b3Age1xyXG5cdCAgZGlzcGxheTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQudmlzaWJsZS1kZXNrdG9wIHtcclxuXHQgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnZpc2libGUtdGFibGV0IHtcclxuXHQgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmhpZGRlbi10YWJsZXQge1xyXG5cdCAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmhpZGRlbi1kZXNrdG9wIHtcclxuXHQgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnZpc2libGUtZGVza3RvcCB7XHJcblx0ICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLXBob25lIHtcclxuXHQgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmhpZGRlbi1waG9uZSB7XHJcblx0ICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICAudmlzaWJsZS1wcmludCB7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgcHJpbnQge1xyXG5cdC52aXNpYmxlLXByaW50IHtcclxuXHQgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmhpZGRlbi1wcmludCB7XHJcblx0ICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblx0LnJvdyB7XHJcblx0ICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcblx0ICAqem9vbTogMTtcclxuXHQgICY6YmVmb3JlIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdCAgfVxyXG5cdCAgJjphZnRlciB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdCAgfVxyXG5cdH1cclxuXHRbY2xhc3MqPVwic3BhblwiXSB7XHJcblx0ICBmbG9hdDogbGVmdDtcclxuXHQgIG1pbi1oZWlnaHQ6IDFweDtcclxuXHQgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cdH1cclxuXHQuY29udGFpbmVyLCAubmF2YmFyLXN0YXRpYy10b3AgLmNvbnRhaW5lciwgLm5hdmJhci1maXhlZC10b3AgLmNvbnRhaW5lciwgLm5hdmJhci1maXhlZC1ib3R0b20gLmNvbnRhaW5lciwgLnNwYW4xMiB7XHJcblx0ICB3aWR0aDogMTE3MHB4O1xyXG5cdH1cclxuXHQuc3BhbjExIHtcclxuXHQgIHdpZHRoOiAxMDcwcHg7XHJcblx0fVxyXG5cdC5zcGFuMTAge1xyXG5cdCAgd2lkdGg6IDk3MHB4O1xyXG5cdH1cclxuXHQuc3Bhbjkge1xyXG5cdCAgd2lkdGg6IDg3MHB4O1xyXG5cdH1cclxuXHQuc3Bhbjgge1xyXG5cdCAgd2lkdGg6IDc3MHB4O1xyXG5cdH1cclxuXHQuc3Bhbjcge1xyXG5cdCAgd2lkdGg6IDY3MHB4O1xyXG5cdH1cclxuXHQuc3BhbjYge1xyXG5cdCAgd2lkdGg6IDU3MHB4O1xyXG5cdH1cclxuXHQuc3BhbjUge1xyXG5cdCAgd2lkdGg6IDQ3MHB4O1xyXG5cdH1cclxuXHQuc3BhbjQge1xyXG5cdCAgd2lkdGg6IDM3MHB4O1xyXG5cdH1cclxuXHQuc3BhbjMge1xyXG5cdCAgd2lkdGg6IDI3MHB4O1xyXG5cdH1cclxuXHQuc3BhbjIge1xyXG5cdCAgd2lkdGg6IDE3MHB4O1xyXG5cdH1cclxuXHQuc3BhbjEge1xyXG5cdCAgd2lkdGg6IDcwcHg7XHJcblx0fVxyXG5cdC5vZmZzZXQxMiB7XHJcblx0ICBtYXJnaW4tbGVmdDogMTIzMHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0MTEge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDExMzBweDtcclxuXHR9XHJcblx0Lm9mZnNldDEwIHtcclxuXHQgIG1hcmdpbi1sZWZ0OiAxMDMwcHg7XHJcblx0fVxyXG5cdC5vZmZzZXQ5IHtcclxuXHQgIG1hcmdpbi1sZWZ0OiA5MzBweDtcclxuXHR9XHJcblx0Lm9mZnNldDgge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDgzMHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0NyB7XHJcblx0ICBtYXJnaW4tbGVmdDogNzMwcHg7XHJcblx0fVxyXG5cdC5vZmZzZXQ2IHtcclxuXHQgIG1hcmdpbi1sZWZ0OiA2MzBweDtcclxuXHR9XHJcblx0Lm9mZnNldDUge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDUzMHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0NCB7XHJcblx0ICBtYXJnaW4tbGVmdDogNDMwcHg7XHJcblx0fVxyXG5cdC5vZmZzZXQzIHtcclxuXHQgIG1hcmdpbi1sZWZ0OiAzMzBweDtcclxuXHR9XHJcblx0Lm9mZnNldDIge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0MSB7XHJcblx0ICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcblx0fVxyXG5cdC5yb3ctZmx1aWQge1xyXG5cdCAgd2lkdGg6IDEwMCU7XHJcblx0ICAqem9vbTogMTtcclxuXHQgICY6YmVmb3JlIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdCAgfVxyXG5cdCAgJjphZnRlciB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdCAgfVxyXG5cdCAgW2NsYXNzKj1cInNwYW5cIl0ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWluLWhlaWdodDogMzBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyLjU2NDEwMjU2NDEwMjU2NCU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDIuNTEwOTExMDc0NzQwODYxNiU7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyLjU2NDEwMjU2NDEwMjU2NCU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjEyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0KndpZHRoOiA5OS45NDY4MDg1MTA2MzgyOSU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjExIHtcclxuXHRcdHdpZHRoOiA5MS40NTI5OTE0NTI5OTE0NSU7XHJcblx0XHQqd2lkdGg6IDkxLjM5OTc5OTk2MzYyOTc1JTtcclxuXHQgIH1cclxuXHQgIC5zcGFuMTAge1xyXG5cdFx0d2lkdGg6IDgyLjkwNTk4MjkwNTk4MjkxJTtcclxuXHRcdCp3aWR0aDogODIuODUyNzkxNDE2NjIxMiU7XHJcblx0ICB9XHJcblx0ICAuc3Bhbjkge1xyXG5cdFx0d2lkdGg6IDc0LjM1ODk3NDM1ODk3NDM2JTtcclxuXHRcdCp3aWR0aDogNzQuMzA1NzgyODY5NjEyNjYlO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW44IHtcclxuXHRcdHdpZHRoOiA2NS44MTE5NjU4MTE5NjU4MiU7XHJcblx0XHQqd2lkdGg6IDY1Ljc1ODc3NDMyMjYwNDExJTtcclxuXHQgIH1cclxuXHQgIC5zcGFuNyB7XHJcblx0XHR3aWR0aDogNTcuMjY0OTU3MjY0OTU3MjYlO1xyXG5cdFx0KndpZHRoOiA1Ny4yMTE3NjU3NzU1OTU1NiU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjYge1xyXG5cdFx0d2lkdGg6IDQ4LjcxNzk0ODcxNzk0ODcxNSU7XHJcblx0XHQqd2lkdGg6IDQ4LjY2NDc1NzIyODU4NzAxNCU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjUge1xyXG5cdFx0d2lkdGg6IDQwLjE3MDk0MDE3MDk0MDE3JTtcclxuXHRcdCp3aWR0aDogNDAuMTE3NzQ4NjgxNTc4NDclO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW40IHtcclxuXHRcdHdpZHRoOiAzMS42MjM5MzE2MjM5MzE2MjUlO1xyXG5cdFx0KndpZHRoOiAzMS41NzA3NDAxMzQ1Njk5MjQlO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW4zIHtcclxuXHRcdHdpZHRoOiAyMy4wNzY5MjMwNzY5MjMwNzclO1xyXG5cdFx0KndpZHRoOiAyMy4wMjM3MzE1ODc1NjEzNzUlO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW4yIHtcclxuXHRcdHdpZHRoOiAxNC41Mjk5MTQ1Mjk5MTQ1MyU7XHJcblx0XHQqd2lkdGg6IDE0LjQ3NjcyMzA0MDU1MjgyOCU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjEge1xyXG5cdFx0d2lkdGg6IDUuOTgyOTA1OTgyOTA1OTgzJTtcclxuXHRcdCp3aWR0aDogNS45Mjk3MTQ0OTM1NDQyODElO1xyXG5cdCAgfVxyXG5cdCAgLm9mZnNldDEyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMDUuMTI4MjA1MTI4MjA1MTIlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiAxMDUuMDIxODIyMTQ5NDgxNzElO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiAxMDIuNTY0MTAyNTY0MTAyNTclO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDEwMi40NTc3MTk1ODUzNzkxNSU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0MTEge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDk2LjU4MTE5NjU4MTE5NjU4JTtcclxuXHRcdCptYXJnaW4tbGVmdDogOTYuNDc0ODEzNjAyNDczMTYlO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiA5NC4wMTcwOTQwMTcwOTQwMiU7XHJcblx0XHQgICptYXJnaW4tbGVmdDogOTMuOTEwNzExMDM4MzcwNjElO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgLm9mZnNldDEwIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4OC4wMzQxODgwMzQxODgwMyU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDg3LjkyNzgwNTA1NTQ2NDYyJTtcclxuXHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0ICBtYXJnaW4tbGVmdDogODUuNDcwMDg1NDcwMDg1NDglO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDg1LjM2MzcwMjQ5MTM2MjA2JTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQ5IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA3OS40ODcxNzk0ODcxNzk0OSU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDc5LjM4MDc5NjUwODQ1NjA3JTtcclxuXHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0ICBtYXJnaW4tbGVmdDogNzYuOTIzMDc2OTIzMDc2OTMlO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDc2LjgxNjY5Mzk0NDM1MzUyJTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQ4IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA3MC45NDAxNzA5NDAxNzA5NCU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDcwLjgzMzc4Nzk2MTQ0NzUzJTtcclxuXHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0ICBtYXJnaW4tbGVmdDogNjguMzc2MDY4Mzc2MDY4MzklO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDY4LjI2OTY4NTM5NzM0NDk3JTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQ3IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA2Mi4zOTMxNjIzOTMxNjIzODUlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiA2Mi4yODY3Nzk0MTQ0Mzg5OSU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDU5LjgyOTA1OTgyOTA1OTgyJTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiA1OS43MjI2NzY4NTAzMzY0MiU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0NiB7XHJcblx0XHRtYXJnaW4tbGVmdDogNTMuODQ2MTUzODQ2MTUzODQlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiA1My43Mzk3NzA4Njc0MzA0NDQlO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiA1MS4yODIwNTEyODIwNTEyOCU7XHJcblx0XHQgICptYXJnaW4tbGVmdDogNTEuMTc1NjY4MzAzMzI3ODc1JTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQ1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0NS4yOTkxNDUyOTkxNDUyOTUlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiA0NS4xOTI3NjIzMjA0MjE5JTtcclxuXHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0ICBtYXJnaW4tbGVmdDogNDIuNzM1MDQyNzM1MDQyNzMlO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDQyLjYyODY1OTc1NjMxOTMzJTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQ0IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzNi43NTIxMzY3NTIxMzY3NSU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDM2LjY0NTc1Mzc3MzQxMzM1NCU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDM0LjE4ODAzNDE4ODAzNDE5JTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiAzNC4wODE2NTEyMDkzMTA3ODUlO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgLm9mZnNldDMge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDI4LjIwNTEyODIwNTEyODIwNCU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDI4LjA5ODc0NTIyNjQwNDglO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiAyNS42NDEwMjU2NDEwMjU2NDIlO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDI1LjUzNDY0MjY2MjMwMjI0JTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxOS42NTgxMTk2NTgxMTk2NiU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDE5LjU1MTczNjY3OTM5NjI1NyU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDE3LjA5NDAxNzA5NDAxNzA5NCU7XHJcblx0XHQgICptYXJnaW4tbGVmdDogMTYuOTg3NjM0MTE1MjkzNjklO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgLm9mZnNldDEge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDExLjExMTExMTExMTExMTExJTtcclxuXHRcdCptYXJnaW4tbGVmdDogMTEuMDA0NzI4MTMyMzg3NzA4JTtcclxuXHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0ICBtYXJnaW4tbGVmdDogOC41NDcwMDg1NDcwMDg1NDclO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDguNDQwNjI1NTY4Mjg1MTQyJTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHR9XHJcblx0aW5wdXQsIHRleHRhcmVhLCAudW5lZGl0YWJsZS1pbnB1dCB7XHJcblx0ICBtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblx0LmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuXHQgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cdH1cclxuXHRpbnB1dC5zcGFuMTIsIHRleHRhcmVhLnNwYW4xMiwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjEyIHtcclxuXHQgIHdpZHRoOiAxMTU2cHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW4xMSwgdGV4dGFyZWEuc3BhbjExLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMTEge1xyXG5cdCAgd2lkdGg6IDEwNTZweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjEwLCB0ZXh0YXJlYS5zcGFuMTAsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4xMCB7XHJcblx0ICB3aWR0aDogOTU2cHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW45LCB0ZXh0YXJlYS5zcGFuOSwgLnVuZWRpdGFibGUtaW5wdXQuc3Bhbjkge1xyXG5cdCAgd2lkdGg6IDg1NnB4O1xyXG5cdH1cclxuXHRpbnB1dC5zcGFuOCwgdGV4dGFyZWEuc3BhbjgsIC51bmVkaXRhYmxlLWlucHV0LnNwYW44IHtcclxuXHQgIHdpZHRoOiA3NTZweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjcsIHRleHRhcmVhLnNwYW43LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuNyB7XHJcblx0ICB3aWR0aDogNjU2cHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW42LCB0ZXh0YXJlYS5zcGFuNiwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjYge1xyXG5cdCAgd2lkdGg6IDU1NnB4O1xyXG5cdH1cclxuXHRpbnB1dC5zcGFuNSwgdGV4dGFyZWEuc3BhbjUsIC51bmVkaXRhYmxlLWlucHV0LnNwYW41IHtcclxuXHQgIHdpZHRoOiA0NTZweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjQsIHRleHRhcmVhLnNwYW40LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuNCB7XHJcblx0ICB3aWR0aDogMzU2cHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW4zLCB0ZXh0YXJlYS5zcGFuMywgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjMge1xyXG5cdCAgd2lkdGg6IDI1NnB4O1xyXG5cdH1cclxuXHRpbnB1dC5zcGFuMiwgdGV4dGFyZWEuc3BhbjIsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4yIHtcclxuXHQgIHdpZHRoOiAxNTZweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjEsIHRleHRhcmVhLnNwYW4xLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMSB7XHJcblx0ICB3aWR0aDogNTZweDtcclxuXHR9XHJcblx0LnRodW1ibmFpbHMge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG5cdCAgPiBsaSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzBweDtcclxuXHQgIH1cclxuXHR9XHJcblx0LnJvdy1mbHVpZCAudGh1bWJuYWlscyB7XHJcblx0ICBtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XHJcblx0LnJvdyB7XHJcblx0ICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblx0ICAqem9vbTogMTtcclxuXHQgICY6YmVmb3JlIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdCAgfVxyXG5cdCAgJjphZnRlciB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdCAgfVxyXG5cdH1cclxuXHRbY2xhc3MqPVwic3BhblwiXSB7XHJcblx0ICBmbG9hdDogbGVmdDtcclxuXHQgIG1pbi1oZWlnaHQ6IDFweDtcclxuXHQgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuXHQuY29udGFpbmVyLCAubmF2YmFyLXN0YXRpYy10b3AgLmNvbnRhaW5lciwgLm5hdmJhci1maXhlZC10b3AgLmNvbnRhaW5lciwgLm5hdmJhci1maXhlZC1ib3R0b20gLmNvbnRhaW5lciwgLnNwYW4xMiB7XHJcblx0ICB3aWR0aDogNzI0cHg7XHJcblx0fVxyXG5cdC5zcGFuMTEge1xyXG5cdCAgd2lkdGg6IDY2MnB4O1xyXG5cdH1cclxuXHQuc3BhbjEwIHtcclxuXHQgIHdpZHRoOiA2MDBweDtcclxuXHR9XHJcblx0LnNwYW45IHtcclxuXHQgIHdpZHRoOiA1MzhweDtcclxuXHR9XHJcblx0LnNwYW44IHtcclxuXHQgIHdpZHRoOiA0NzZweDtcclxuXHR9XHJcblx0LnNwYW43IHtcclxuXHQgIHdpZHRoOiA0MTRweDtcclxuXHR9XHJcblx0LnNwYW42IHtcclxuXHQgIHdpZHRoOiAzNTJweDtcclxuXHR9XHJcblx0LnNwYW41IHtcclxuXHQgIHdpZHRoOiAyOTBweDtcclxuXHR9XHJcblx0LnNwYW40IHtcclxuXHQgIHdpZHRoOiAyMjhweDtcclxuXHR9XHJcblx0LnNwYW4zIHtcclxuXHQgIHdpZHRoOiAxNjZweDtcclxuXHR9XHJcblx0LnNwYW4yIHtcclxuXHQgIHdpZHRoOiAxMDRweDtcclxuXHR9XHJcblx0LnNwYW4xIHtcclxuXHQgIHdpZHRoOiA0MnB4O1xyXG5cdH1cclxuXHQub2Zmc2V0MTIge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDc2NHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0MTEge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDcwMnB4O1xyXG5cdH1cclxuXHQub2Zmc2V0MTAge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDY0MHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0OSB7XHJcblx0ICBtYXJnaW4tbGVmdDogNTc4cHg7XHJcblx0fVxyXG5cdC5vZmZzZXQ4IHtcclxuXHQgIG1hcmdpbi1sZWZ0OiA1MTZweDtcclxuXHR9XHJcblx0Lm9mZnNldDcge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDQ1NHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0NiB7XHJcblx0ICBtYXJnaW4tbGVmdDogMzkycHg7XHJcblx0fVxyXG5cdC5vZmZzZXQ1IHtcclxuXHQgIG1hcmdpbi1sZWZ0OiAzMzBweDtcclxuXHR9XHJcblx0Lm9mZnNldDQge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDI2OHB4O1xyXG5cdH1cclxuXHQub2Zmc2V0MyB7XHJcblx0ICBtYXJnaW4tbGVmdDogMjA2cHg7XHJcblx0fVxyXG5cdC5vZmZzZXQyIHtcclxuXHQgIG1hcmdpbi1sZWZ0OiAxNDRweDtcclxuXHR9XHJcblx0Lm9mZnNldDEge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDgycHg7XHJcblx0fVxyXG5cdC5yb3ctZmx1aWQge1xyXG5cdCAgd2lkdGg6IDEwMCU7XHJcblx0ICAqem9vbTogMTtcclxuXHQgICY6YmVmb3JlIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdCAgfVxyXG5cdCAgJjphZnRlciB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdCAgfVxyXG5cdCAgW2NsYXNzKj1cInNwYW5cIl0ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWluLWhlaWdodDogMzBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyLjc2MjQzMDkzOTIyNjUxOTQlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiAyLjcwOTIzOTQ0OTg2NDgxNyU7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyLjc2MjQzMDkzOTIyNjUxOTQlO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW4xMiB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdCp3aWR0aDogOTkuOTQ2ODA4NTEwNjM4MjklO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW4xMSB7XHJcblx0XHR3aWR0aDogOTEuNDM2NDY0MDg4Mzk3NzglO1xyXG5cdFx0KndpZHRoOiA5MS4zODMyNzI1OTkwMzYwOCU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjEwIHtcclxuXHRcdHdpZHRoOiA4Mi44NzI5MjgxNzY3OTU1OCU7XHJcblx0XHQqd2lkdGg6IDgyLjgxOTczNjY4NzQzMzg3JTtcclxuXHQgIH1cclxuXHQgIC5zcGFuOSB7XHJcblx0XHR3aWR0aDogNzQuMzA5MzkyMjY1MTkzMzclO1xyXG5cdFx0KndpZHRoOiA3NC4yNTYyMDA3NzU4MzE2NiU7XHJcblx0ICB9XHJcblx0ICAuc3Bhbjgge1xyXG5cdFx0d2lkdGg6IDY1Ljc0NTg1NjM1MzU5MTE3JTtcclxuXHRcdCp3aWR0aDogNjUuNjkyNjY0ODY0MjI5NDYlO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW43IHtcclxuXHRcdHdpZHRoOiA1Ny4xODIzMjA0NDE5ODg5NSU7XHJcblx0XHQqd2lkdGg6IDU3LjEyOTEyODk1MjYyNzI1JTtcclxuXHQgIH1cclxuXHQgIC5zcGFuNiB7XHJcblx0XHR3aWR0aDogNDguNjE4Nzg0NTMwMzg2NzQlO1xyXG5cdFx0KndpZHRoOiA0OC41NjU1OTMwNDEwMjUwNCU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjUge1xyXG5cdFx0d2lkdGg6IDQwLjA1NTI0ODYxODc4NDUzJTtcclxuXHRcdCp3aWR0aDogNDAuMDAyMDU3MTI5NDIyODMlO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW40IHtcclxuXHRcdHdpZHRoOiAzMS40OTE3MTI3MDcxODIzMjMlO1xyXG5cdFx0KndpZHRoOiAzMS40Mzg1MjEyMTc4MjA2MiU7XHJcblx0ICB9XHJcblx0ICAuc3BhbjMge1xyXG5cdFx0d2lkdGg6IDIyLjkyODE3Njc5NTU4MDExJTtcclxuXHRcdCp3aWR0aDogMjIuODc0OTg1MzA2MjE4NDElO1xyXG5cdCAgfVxyXG5cdCAgLnNwYW4yIHtcclxuXHRcdHdpZHRoOiAxNC4zNjQ2NDA4ODM5Nzc5JTtcclxuXHRcdCp3aWR0aDogMTQuMzExNDQ5Mzk0NjE2MTk5JTtcclxuXHQgIH1cclxuXHQgIC5zcGFuMSB7XHJcblx0XHR3aWR0aDogNS44MDExMDQ5NzIzNzU2OTElO1xyXG5cdFx0KndpZHRoOiA1Ljc0NzkxMzQ4MzAxMzk4OCU7XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0MTIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwNS41MjQ4NjE4Nzg0NTMwNCU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDEwNS40MTg0Nzg4OTk3Mjk2MiU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDEwMi43NjI0MzA5MzkyMjY1MiU7XHJcblx0XHQgICptYXJnaW4tbGVmdDogMTAyLjY1NjA0Nzk2MDUwMzElO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgLm9mZnNldDExIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA5Ni45NjEzMjU5NjY4NTA4MiU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDk2Ljg1NDk0Mjk4ODEyNzQlO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiA5NC4xOTg4OTUwMjc2MjQzJTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiA5NC4wOTI1MTIwNDg5MDA4OSU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0MTAge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDg4LjM5Nzc5MDA1NTI0ODYyJTtcclxuXHRcdCptYXJnaW4tbGVmdDogODguMjkxNDA3MDc2NTI1MiU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDg1LjYzNTM1OTExNjAyMjElO1xyXG5cdFx0ICAqbWFyZ2luLWxlZnQ6IDg1LjUyODk3NjEzNzI5ODY4JTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQ5IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA3OS44MzQyNTQxNDM2NDY0JTtcclxuXHRcdCptYXJnaW4tbGVmdDogNzkuNzI3ODcxMTY0OTIyOTklO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiA3Ny4wNzE4MjMyMDQ0MTk4OSU7XHJcblx0XHQgICptYXJnaW4tbGVmdDogNzYuOTY1NDQwMjI1Njk2NDclO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgLm9mZnNldDgge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDcxLjI3MDcxODIzMjA0NDIlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiA3MS4xNjQzMzUyNTMzMjA3OSU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDY4LjUwODI4NzI5MjgxNzY4JTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiA2OC40MDE5MDQzMTQwOTQyNyU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0NyB7XHJcblx0XHRtYXJnaW4tbGVmdDogNjIuNzA3MTgyMzIwNDQxOTklO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiA2Mi42MDA3OTkzNDE3MTg1ODQlO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiA1OS45NDQ3NTEzODEyMTU0NyU7XHJcblx0XHQgICptYXJnaW4tbGVmdDogNTkuODM4MzY4NDAyNDkyMDY1JTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQ2IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1NC4xNDM2NDY0MDg4Mzk3OCU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDU0LjAzNzI2MzQzMDExNjM3NiU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDUxLjM4MTIxNTQ2OTYxMzI2JTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiA1MS4yNzQ4MzI0OTA4ODk4NiU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0NSB7XHJcblx0XHRtYXJnaW4tbGVmdDogNDUuNTgwMTEwNDk3MjM3NTclO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiA0NS40NzM3Mjc1MTg1MTQxNyU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDQyLjgxNzY3OTU1ODAxMTA1JTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiA0Mi43MTEyOTY1NzkyODc2NSU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0NCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzcuMDE2NTc0NTg1NjM1MzYlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiAzNi45MTAxOTE2MDY5MTE5NiU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDM0LjI1NDE0MzY0NjQwODg0JTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiAzNC4xNDc3NjA2Njc2ODU0NCU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0MyB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjguNDUzMDM4Njc0MDMzMTUlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiAyOC4zNDY2NTU2OTUzMDk3NDYlO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiAyNS42OTA2MDc3MzQ4MDY2MyU7XHJcblx0XHQgICptYXJnaW4tbGVmdDogMjUuNTg0MjI0NzU2MDgzMjI3JTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5vZmZzZXQyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxOS44ODk1MDI3NjI0MzA5NCU7XHJcblx0XHQqbWFyZ2luLWxlZnQ6IDE5Ljc4MzExOTc4MzcwNzUzNyU7XHJcblx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDE3LjEyNzA3MTgyMzIwNDQyJTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiAxNy4wMjA2ODg4NDQ0ODEwMiU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAub2Zmc2V0MSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTEuMzI1OTY2ODUwODI4NzMlO1xyXG5cdFx0Km1hcmdpbi1sZWZ0OiAxMS4yMTk1ODM4NzIxMDUzMjUlO1xyXG5cdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiA4LjU2MzUzNTkxMTYwMjIxJTtcclxuXHRcdCAgKm1hcmdpbi1sZWZ0OiA4LjQ1NzE1MjkzMjg3ODgwNiU7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0fVxyXG5cdGlucHV0LCB0ZXh0YXJlYSwgLnVuZWRpdGFibGUtaW5wdXQge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cdC5jb250cm9scy1yb3cgW2NsYXNzKj1cInNwYW5cIl0gKyBbY2xhc3MqPVwic3BhblwiXSB7XHJcblx0ICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjEyLCB0ZXh0YXJlYS5zcGFuMTIsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4xMiB7XHJcblx0ICB3aWR0aDogNzEwcHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW4xMSwgdGV4dGFyZWEuc3BhbjExLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMTEge1xyXG5cdCAgd2lkdGg6IDY0OHB4O1xyXG5cdH1cclxuXHRpbnB1dC5zcGFuMTAsIHRleHRhcmVhLnNwYW4xMCwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjEwIHtcclxuXHQgIHdpZHRoOiA1ODZweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjksIHRleHRhcmVhLnNwYW45LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuOSB7XHJcblx0ICB3aWR0aDogNTI0cHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW44LCB0ZXh0YXJlYS5zcGFuOCwgLnVuZWRpdGFibGUtaW5wdXQuc3Bhbjgge1xyXG5cdCAgd2lkdGg6IDQ2MnB4O1xyXG5cdH1cclxuXHRpbnB1dC5zcGFuNywgdGV4dGFyZWEuc3BhbjcsIC51bmVkaXRhYmxlLWlucHV0LnNwYW43IHtcclxuXHQgIHdpZHRoOiA0MDBweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjYsIHRleHRhcmVhLnNwYW42LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuNiB7XHJcblx0ICB3aWR0aDogMzM4cHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW41LCB0ZXh0YXJlYS5zcGFuNSwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjUge1xyXG5cdCAgd2lkdGg6IDI3NnB4O1xyXG5cdH1cclxuXHRpbnB1dC5zcGFuNCwgdGV4dGFyZWEuc3BhbjQsIC51bmVkaXRhYmxlLWlucHV0LnNwYW40IHtcclxuXHQgIHdpZHRoOiAyMTRweDtcclxuXHR9XHJcblx0aW5wdXQuc3BhbjMsIHRleHRhcmVhLnNwYW4zLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMyB7XHJcblx0ICB3aWR0aDogMTUycHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW4yLCB0ZXh0YXJlYS5zcGFuMiwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjIge1xyXG5cdCAgd2lkdGg6IDkwcHg7XHJcblx0fVxyXG5cdGlucHV0LnNwYW4xLCB0ZXh0YXJlYS5zcGFuMSwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjEge1xyXG5cdCAgd2lkdGg6IDI4cHg7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHRib2R5IHtcclxuXHQgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0ICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cdC5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLm5hdmJhci1zdGF0aWMtdG9wIHtcclxuXHQgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcblx0ICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblx0fVxyXG5cdC5jb250YWluZXItZmx1aWQge1xyXG5cdCAgcGFkZGluZzogMDtcclxuXHR9XHJcblx0LmRsLWhvcml6b250YWwge1xyXG5cdCAgZHQge1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHQgIH1cclxuXHQgIGRkIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdCAgfVxyXG5cdH1cclxuXHQuY29udGFpbmVyIHtcclxuXHQgIHdpZHRoOiBhdXRvO1xyXG5cdH1cclxuXHQucm93LWZsdWlkIHtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHQucm93IHtcclxuXHQgIG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHQudGh1bWJuYWlscyB7XHJcblx0ICBtYXJnaW4tbGVmdDogMDtcclxuXHQgID4gbGkge1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHQgIH1cclxuXHR9XHJcblx0W2NsYXNzKj1cInNwYW5cIl0sIC51bmVkaXRhYmxlLWlucHV0W2NsYXNzKj1cInNwYW5cIl0sIC5yb3ctZmx1aWQgW2NsYXNzKj1cInNwYW5cIl0ge1xyXG5cdCAgZGlzcGxheTogYmxvY2s7XHJcblx0ICBmbG9hdDogbm9uZTtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDA7XHJcblx0ICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHQuc3BhbjEyIHtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdCAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblx0LnJvdy1mbHVpZCB7XHJcblx0ICAuc3BhbjEyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgIH1cclxuXHQgIFtjbGFzcyo9XCJvZmZzZXRcIl06Zmlyc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0ICB9XHJcblx0fVxyXG5cdC5pbnB1dC1sYXJnZSwgLmlucHV0LXhsYXJnZSwgLmlucHV0LXh4bGFyZ2UsIGlucHV0W2NsYXNzKj1cInNwYW5cIl0sIHNlbGVjdFtjbGFzcyo9XCJzcGFuXCJdLCB0ZXh0YXJlYVtjbGFzcyo9XCJzcGFuXCJdLCAudW5lZGl0YWJsZS1pbnB1dCB7XHJcblx0ICBkaXNwbGF5OiBibG9jaztcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdCAgbWluLWhlaWdodDogMzBweDtcclxuXHQgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cdC5pbnB1dC1wcmVwZW5kIGlucHV0LCAuaW5wdXQtYXBwZW5kIGlucHV0LCAuaW5wdXQtcHJlcGVuZCBpbnB1dFtjbGFzcyo9XCJzcGFuXCJdLCAuaW5wdXQtYXBwZW5kIGlucHV0W2NsYXNzKj1cInNwYW5cIl0ge1xyXG5cdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCAgd2lkdGg6IGF1dG87XHJcblx0fVxyXG5cdC5jb250cm9scy1yb3cgW2NsYXNzKj1cInNwYW5cIl0gKyBbY2xhc3MqPVwic3BhblwiXSB7XHJcblx0ICBtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblx0Lm1vZGFsIHtcclxuXHQgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHQgIHRvcDogMjBweDtcclxuXHQgIHJpZ2h0OiAyMHB4O1xyXG5cdCAgbGVmdDogMjBweDtcclxuXHQgIHdpZHRoOiBhdXRvO1xyXG5cdCAgbWFyZ2luOiAwO1xyXG5cdCAgJi5mYWRlIHtcclxuXHRcdHRvcDogLTEwMHB4O1xyXG5cdFx0Ji5pbiB7XHJcblx0XHQgIHRvcDogMjBweDtcclxuXHRcdH1cclxuXHQgIH1cclxuXHR9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdC5uYXYtY29sbGFwc2Uge1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdH1cclxuXHQucGFnZS1oZWFkZXIgaDEgc21hbGwge1xyXG5cdCAgZGlzcGxheTogYmxvY2s7XHJcblx0ICBsaW5lLWhlaWdodDogMjBweDtcclxuXHR9XHJcblx0aW5wdXQge1xyXG5cdCAgJlt0eXBlPWNoZWNrYm94XSwgJlt0eXBlPXJhZGlvXSB7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdCAgfVxyXG5cdH1cclxuXHQuZm9ybS1ob3Jpem9udGFsIHtcclxuXHQgIC5jb250cm9sLWxhYmVsIHtcclxuXHRcdGZsb2F0OiBub25lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0ICB9XHJcblx0ICAuY29udHJvbHMge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0ICB9XHJcblx0ICAuY29udHJvbC1saXN0IHtcclxuXHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdCAgfVxyXG5cdCAgLmZvcm0tYWN0aW9ucyB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdCAgfVxyXG5cdH1cclxuXHQubWVkaWEge1xyXG5cdCAgLnB1bGwtbGVmdCwgLnB1bGwtcmlnaHQge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRmbG9hdDogbm9uZTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0ICB9XHJcblx0fVxyXG5cdC5tZWRpYS1vYmplY3Qge1xyXG5cdCAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cdC5tb2RhbCB7XHJcblx0ICB0b3A6IDEwcHg7XHJcblx0ICByaWdodDogMTBweDtcclxuXHQgIGxlZnQ6IDEwcHg7XHJcblx0fVxyXG5cdC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuXHQgIHBhZGRpbmc6IDEwcHg7XHJcblx0ICBtYXJnaW46IC0xMHB4O1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcblx0ICBwb3NpdGlvbjogc3RhdGljO1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk3OXB4KSB7XHJcblx0Ym9keSB7XHJcblx0ICBwYWRkaW5nLXRvcDogMDtcclxuXHR9XHJcblx0Lm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuXHQgIHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0fVxyXG5cdC5uYXZiYXItZml4ZWQtdG9wIHtcclxuXHQgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHR9XHJcblx0Lm5hdmJhci1maXhlZC1ib3R0b20ge1xyXG5cdCAgbWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcblx0Lm5hdmJhci1maXhlZC10b3AgLm5hdmJhci1pbm5lciwgLm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1pbm5lciB7XHJcblx0ICBwYWRkaW5nOiAyNXB4O1xyXG5cdH1cclxuXHQubmF2YmFyIHtcclxuXHQgIC5jb250YWluZXIge1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdCAgfVxyXG5cdCAgLmJyYW5kIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRtYXJnaW46IC01cHggMDtcclxuXHQgIH1cclxuXHR9XHJcblx0Lm5hdi1jb2xsYXBzZSB7XHJcblx0ICBjbGVhcjogYm90aDtcclxuXHQgIC5uYXYge1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHRtYXJnaW46IDAgMCAxMHB4O1xyXG5cdFx0PiB7XHJcblx0XHQgIGxpIHtcclxuXHRcdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHRcdD4gYSB7XHJcblx0XHRcdCAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHRcdCAgLmRpdmlkZXItdmVydGljYWwge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQubmF2LWhlYWRlciB7XHJcblx0XHQgIGNvbG9yOiAjNzc3Nzc3O1xyXG5cdFx0ICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHRcdH1cclxuXHRcdD4gbGkgPiBhIHtcclxuXHRcdCAgcGFkZGluZzogOXB4IDE1cHg7XHJcblx0XHQgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0ICBjb2xvcjogIzc3Nzc3NztcclxuXHRcdCAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHQgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0ICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAuZHJvcGRvd24tbWVudSBhIHtcclxuXHRcdHBhZGRpbmc6IDlweCAxNXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzc3Nzc3NztcclxuXHRcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0ICB9XHJcblx0ICAuYnRuIHtcclxuXHRcdHBhZGRpbmc6IDRweCAxMHB4IDRweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdCAgfVxyXG5cdCAgLmRyb3Bkb3duLW1lbnUgbGkgKyBsaSBhIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDJweDtcclxuXHQgIH1cclxuXHQgIC5uYXYgPiBsaSA+IGEge1xyXG5cdFx0Jjpob3ZlciwgJjpmb2N1cyB7XHJcblx0XHQgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0ICAuZHJvcGRvd24tbWVudSBhIHtcclxuXHRcdCY6aG92ZXIsICY6Zm9jdXMge1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdH1cclxuXHQubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSB7XHJcblx0ICAubmF2ID4gbGkgPiBhLCAuZHJvcGRvd24tbWVudSBhIHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdCAgfVxyXG5cdCAgLm5hdiA+IGxpID4gYSB7XHJcblx0XHQmOmhvdmVyLCAmOmZvY3VzIHtcclxuXHRcdCAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5kcm9wZG93bi1tZW51IGEge1xyXG5cdFx0Jjpob3ZlciwgJjpmb2N1cyB7XHJcblx0XHQgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0fVxyXG5cdC5uYXYtY29sbGFwc2Uge1xyXG5cdCAgJi5pbiAuYnRuLWdyb3VwIHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0ICB9XHJcblx0ICAuZHJvcGRvd24tbWVudSB7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0dG9wOiBhdXRvO1xyXG5cdFx0bGVmdDogYXV0bztcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRmbG9hdDogbm9uZTtcclxuXHRcdG1heC13aWR0aDogbm9uZTtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRtYXJnaW46IDAgMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0ICB9XHJcblx0ICAub3BlbiA+IC5kcm9wZG93bi1tZW51IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdCAgfVxyXG5cdCAgLmRyb3Bkb3duLW1lbnUge1xyXG5cdFx0JjpiZWZvcmUsICY6YWZ0ZXIsIC5kaXZpZGVyIHtcclxuXHRcdCAgZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcclxuXHRcdCY6YmVmb3JlLCAmOmFmdGVyIHtcclxuXHRcdCAgZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHQgIH1cclxuXHQgIC5uYXZiYXItZm9ybSwgLm5hdmJhci1zZWFyY2gge1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0XHRtYXJnaW46IDEwcHggMDtcclxuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XHJcblx0XHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHRcdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cdCAgfVxyXG5cdH1cclxuXHQubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSB7XHJcblx0ICAubmF2YmFyLWZvcm0sIC5uYXZiYXItc2VhcmNoIHtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICMxMTExMTE7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjMTExMTExO1xyXG5cdCAgfVxyXG5cdH1cclxuXHQubmF2YmFyIC5uYXYtY29sbGFwc2UgLm5hdi5wdWxsLXJpZ2h0IHtcclxuXHQgIGZsb2F0OiBub25lO1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cdC5uYXYtY29sbGFwc2Uge1xyXG5cdCAgaGVpZ2h0OiAwO1xyXG5cdCAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQgICYuY29sbGFwc2Uge1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQgIH1cclxuXHR9XHJcblx0Lm5hdmJhciAuYnRuLW5hdmJhciB7XHJcblx0ICBkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblx0Lm5hdmJhci1zdGF0aWMgLm5hdmJhci1pbm5lciB7XHJcblx0ICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdCAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XHJcblx0Lm5hdi1jb2xsYXBzZS5jb2xsYXBzZSB7XHJcblx0ICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHQgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcblx0fVxyXG4gIH0iLCIvKiFcclxuICogQm9vdHN0cmFwIFJlc3BvbnNpdmUgdjIuMy4wXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDEyIFR3aXR0ZXIsIEluY1xyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgdjIuMFxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogRGVzaWduZWQgYW5kIGJ1aWx0IHdpdGggYWxsIHRoZSBsb3ZlIGluIHRoZSB3b3JsZCBAdHdpdHRlciBieSBAbWRvIGFuZCBAZmF0LlxyXG4gKi9cbi5jbGVhcmZpeCB7XG4gICp6b29tOiAxOyB9XG4gIC5jbGVhcmZpeDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7IH1cbiAgLmNsZWFyZml4OmFmdGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoOyB9XG5cbi5oaWRlLXRleHQge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDsgfVxuXG4uaW5wdXQtYmxvY2stbGV2ZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbkAtbXMtdmlld3BvcnQge1xuICB3aWR0aDogZGV2aWNlLXdpZHRoOyB9XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLnZpc2libGUtcGhvbmUsIC52aXNpYmxlLXRhYmxldCwgLmhpZGRlbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi52aXNpYmxlLWRlc2t0b3Age1xuICBkaXNwbGF5OiBpbmhlcml0ICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgLmhpZGRlbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBpbmhlcml0ICFpbXBvcnRhbnQ7IH1cbiAgLnZpc2libGUtZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC52aXNpYmxlLXRhYmxldCB7XG4gICAgZGlzcGxheTogaW5oZXJpdCAhaW1wb3J0YW50OyB9XG4gIC5oaWRkZW4tdGFibGV0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhpZGRlbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBpbmhlcml0ICFpbXBvcnRhbnQ7IH1cbiAgLnZpc2libGUtZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC52aXNpYmxlLXBob25lIHtcbiAgICBkaXNwbGF5OiBpbmhlcml0ICFpbXBvcnRhbnQ7IH1cbiAgLmhpZGRlbi1waG9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cblxuLnZpc2libGUtcHJpbnQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIHByaW50IHtcbiAgLnZpc2libGUtcHJpbnQge1xuICAgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDsgfVxuICAuaGlkZGVuLXByaW50IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICAqem9vbTogMTsgfVxuICAgIC5yb3c6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBjb250ZW50OiBcIlwiOyB9XG4gICAgLnJvdzphZnRlciB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGNsZWFyOiBib3RoOyB9XG4gIFtjbGFzcyo9XCJzcGFuXCJdIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cbiAgLmNvbnRhaW5lciwgLm5hdmJhci1zdGF0aWMtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtYm90dG9tIC5jb250YWluZXIsIC5zcGFuMTIge1xuICAgIHdpZHRoOiAxMTcwcHg7IH1cbiAgLnNwYW4xMSB7XG4gICAgd2lkdGg6IDEwNzBweDsgfVxuICAuc3BhbjEwIHtcbiAgICB3aWR0aDogOTcwcHg7IH1cbiAgLnNwYW45IHtcbiAgICB3aWR0aDogODcwcHg7IH1cbiAgLnNwYW44IHtcbiAgICB3aWR0aDogNzcwcHg7IH1cbiAgLnNwYW43IHtcbiAgICB3aWR0aDogNjcwcHg7IH1cbiAgLnNwYW42IHtcbiAgICB3aWR0aDogNTcwcHg7IH1cbiAgLnNwYW41IHtcbiAgICB3aWR0aDogNDcwcHg7IH1cbiAgLnNwYW40IHtcbiAgICB3aWR0aDogMzcwcHg7IH1cbiAgLnNwYW4zIHtcbiAgICB3aWR0aDogMjcwcHg7IH1cbiAgLnNwYW4yIHtcbiAgICB3aWR0aDogMTcwcHg7IH1cbiAgLnNwYW4xIHtcbiAgICB3aWR0aDogNzBweDsgfVxuICAub2Zmc2V0MTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMjMwcHg7IH1cbiAgLm9mZnNldDExIHtcbiAgICBtYXJnaW4tbGVmdDogMTEzMHB4OyB9XG4gIC5vZmZzZXQxMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMzBweDsgfVxuICAub2Zmc2V0OSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkzMHB4OyB9XG4gIC5vZmZzZXQ4IHtcbiAgICBtYXJnaW4tbGVmdDogODMwcHg7IH1cbiAgLm9mZnNldDcge1xuICAgIG1hcmdpbi1sZWZ0OiA3MzBweDsgfVxuICAub2Zmc2V0NiB7XG4gICAgbWFyZ2luLWxlZnQ6IDYzMHB4OyB9XG4gIC5vZmZzZXQ1IHtcbiAgICBtYXJnaW4tbGVmdDogNTMwcHg7IH1cbiAgLm9mZnNldDQge1xuICAgIG1hcmdpbi1sZWZ0OiA0MzBweDsgfVxuICAub2Zmc2V0MyB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzMHB4OyB9XG4gIC5vZmZzZXQyIHtcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7IH1cbiAgLm9mZnNldDEge1xuICAgIG1hcmdpbi1sZWZ0OiAxMzBweDsgfVxuICAucm93LWZsdWlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAqem9vbTogMTsgfVxuICAgIC5yb3ctZmx1aWQ6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBjb250ZW50OiBcIlwiOyB9XG4gICAgLnJvdy1mbHVpZDphZnRlciB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgLnJvdy1mbHVpZCBbY2xhc3MqPVwic3BhblwiXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIuNTY0MTAyNTY0MTAyNTY0JTtcbiAgICAgICptYXJnaW4tbGVmdDogMi41MTA5MTEwNzQ3NDA4NjE2JTtcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgIC5yb3ctZmx1aWQgW2NsYXNzKj1cInNwYW5cIl06Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAgIC5yb3ctZmx1aWQgLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyLjU2NDEwMjU2NDEwMjU2NCU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuMTIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAqd2lkdGg6IDk5Ljk0NjgwODUxMDYzODI5JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW4xMSB7XG4gICAgICB3aWR0aDogOTEuNDUyOTkxNDUyOTkxNDUlO1xuICAgICAgKndpZHRoOiA5MS4zOTk3OTk5NjM2Mjk3NSU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuMTAge1xuICAgICAgd2lkdGg6IDgyLjkwNTk4MjkwNTk4MjkxJTtcbiAgICAgICp3aWR0aDogODIuODUyNzkxNDE2NjIxMiU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuOSB7XG4gICAgICB3aWR0aDogNzQuMzU4OTc0MzU4OTc0MzYlO1xuICAgICAgKndpZHRoOiA3NC4zMDU3ODI4Njk2MTI2NiU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuOCB7XG4gICAgICB3aWR0aDogNjUuODExOTY1ODExOTY1ODIlO1xuICAgICAgKndpZHRoOiA2NS43NTg3NzQzMjI2MDQxMSU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuNyB7XG4gICAgICB3aWR0aDogNTcuMjY0OTU3MjY0OTU3MjYlO1xuICAgICAgKndpZHRoOiA1Ny4yMTE3NjU3NzU1OTU1NiU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuNiB7XG4gICAgICB3aWR0aDogNDguNzE3OTQ4NzE3OTQ4NzE1JTtcbiAgICAgICp3aWR0aDogNDguNjY0NzU3MjI4NTg3MDE0JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW41IHtcbiAgICAgIHdpZHRoOiA0MC4xNzA5NDAxNzA5NDAxNyU7XG4gICAgICAqd2lkdGg6IDQwLjExNzc0ODY4MTU3ODQ3JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW40IHtcbiAgICAgIHdpZHRoOiAzMS42MjM5MzE2MjM5MzE2MjUlO1xuICAgICAgKndpZHRoOiAzMS41NzA3NDAxMzQ1Njk5MjQlOyB9XG4gICAgLnJvdy1mbHVpZCAuc3BhbjMge1xuICAgICAgd2lkdGg6IDIzLjA3NjkyMzA3NjkyMzA3NyU7XG4gICAgICAqd2lkdGg6IDIzLjAyMzczMTU4NzU2MTM3NSU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuMiB7XG4gICAgICB3aWR0aDogMTQuNTI5OTE0NTI5OTE0NTMlO1xuICAgICAgKndpZHRoOiAxNC40NzY3MjMwNDA1NTI4MjglOyB9XG4gICAgLnJvdy1mbHVpZCAuc3BhbjEge1xuICAgICAgd2lkdGg6IDUuOTgyOTA1OTgyOTA1OTgzJTtcbiAgICAgICp3aWR0aDogNS45Mjk3MTQ0OTM1NDQyODElOyB9XG4gICAgLnJvdy1mbHVpZCAub2Zmc2V0MTIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwNS4xMjgyMDUxMjgyMDUxMiU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDEwNS4wMjE4MjIxNDk0ODE3MSU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDEyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMi41NjQxMDI1NjQxMDI1NyU7XG4gICAgICAgICptYXJnaW4tbGVmdDogMTAyLjQ1NzcxOTU4NTM3OTE1JTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDExIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5Ni41ODExOTY1ODExOTY1OCU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDk2LjQ3NDgxMzYwMjQ3MzE2JTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0MTE6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogOTQuMDE3MDk0MDE3MDk0MDIlO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDkzLjkxMDcxMTAzODM3MDYxJTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDEwIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4OC4wMzQxODgwMzQxODgwMyU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDg3LjkyNzgwNTA1NTQ2NDYyJTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0MTA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogODUuNDcwMDg1NDcwMDg1NDglO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDg1LjM2MzcwMjQ5MTM2MjA2JTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDc5LjQ4NzE3OTQ4NzE3OTQ5JTtcbiAgICAgICptYXJnaW4tbGVmdDogNzkuMzgwNzk2NTA4NDU2MDclOyB9XG4gICAgICAucm93LWZsdWlkIC5vZmZzZXQ5OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDc2LjkyMzA3NjkyMzA3NjkzJTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiA3Ni44MTY2OTM5NDQzNTM1MiU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQ4IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MC45NDAxNzA5NDAxNzA5NCU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDcwLjgzMzc4Nzk2MTQ0NzUzJTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0ODpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2OC4zNzYwNjgzNzYwNjgzOSU7XG4gICAgICAgICptYXJnaW4tbGVmdDogNjguMjY5Njg1Mzk3MzQ0OTclOyB9XG4gICAgLnJvdy1mbHVpZCAub2Zmc2V0NyB7XG4gICAgICBtYXJnaW4tbGVmdDogNjIuMzkzMTYyMzkzMTYyMzg1JTtcbiAgICAgICptYXJnaW4tbGVmdDogNjIuMjg2Nzc5NDE0NDM4OTklOyB9XG4gICAgICAucm93LWZsdWlkIC5vZmZzZXQ3OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU5LjgyOTA1OTgyOTA1OTgyJTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiA1OS43MjI2NzY4NTAzMzY0MiU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQ2IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1My44NDYxNTM4NDYxNTM4NCU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDUzLjczOTc3MDg2NzQzMDQ0NCU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTEuMjgyMDUxMjgyMDUxMjglO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDUxLjE3NTY2ODMwMzMyNzg3NSU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQ1IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0NS4yOTkxNDUyOTkxNDUyOTUlO1xuICAgICAgKm1hcmdpbi1sZWZ0OiA0NS4xOTI3NjIzMjA0MjE5JTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0NTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0Mi43MzUwNDI3MzUwNDI3MyU7XG4gICAgICAgICptYXJnaW4tbGVmdDogNDIuNjI4NjU5NzU2MzE5MzMlOyB9XG4gICAgLnJvdy1mbHVpZCAub2Zmc2V0NCB7XG4gICAgICBtYXJnaW4tbGVmdDogMzYuNzUyMTM2NzUyMTM2NzUlO1xuICAgICAgKm1hcmdpbi1sZWZ0OiAzNi42NDU3NTM3NzM0MTMzNTQlOyB9XG4gICAgICAucm93LWZsdWlkIC5vZmZzZXQ0OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM0LjE4ODAzNDE4ODAzNDE5JTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiAzNC4wODE2NTEyMDkzMTA3ODUlOyB9XG4gICAgLnJvdy1mbHVpZCAub2Zmc2V0MyB7XG4gICAgICBtYXJnaW4tbGVmdDogMjguMjA1MTI4MjA1MTI4MjA0JTtcbiAgICAgICptYXJnaW4tbGVmdDogMjguMDk4NzQ1MjI2NDA0OCU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDM6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUuNjQxMDI1NjQxMDI1NjQyJTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiAyNS41MzQ2NDI2NjIzMDIyNCU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS42NTgxMTk2NTgxMTk2NiU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDE5LjU1MTczNjY3OTM5NjI1NyU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDI6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTcuMDk0MDE3MDk0MDE3MDk0JTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiAxNi45ODc2MzQxMTUyOTM2OSU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQxIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMS4xMTExMTExMTExMTExMSU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDExLjAwNDcyODEzMjM4NzcwOCU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDE6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogOC41NDcwMDg1NDcwMDg1NDclO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDguNDQwNjI1NTY4Mjg1MTQyJTsgfVxuICBpbnB1dCwgdGV4dGFyZWEsIC51bmVkaXRhYmxlLWlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAuY29udHJvbHMtcm93IFtjbGFzcyo9XCJzcGFuXCJdICsgW2NsYXNzKj1cInNwYW5cIl0ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XG4gIGlucHV0LnNwYW4xMiwgdGV4dGFyZWEuc3BhbjEyLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMTIge1xuICAgIHdpZHRoOiAxMTU2cHg7IH1cbiAgaW5wdXQuc3BhbjExLCB0ZXh0YXJlYS5zcGFuMTEsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4xMSB7XG4gICAgd2lkdGg6IDEwNTZweDsgfVxuICBpbnB1dC5zcGFuMTAsIHRleHRhcmVhLnNwYW4xMCwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjEwIHtcbiAgICB3aWR0aDogOTU2cHg7IH1cbiAgaW5wdXQuc3BhbjksIHRleHRhcmVhLnNwYW45LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuOSB7XG4gICAgd2lkdGg6IDg1NnB4OyB9XG4gIGlucHV0LnNwYW44LCB0ZXh0YXJlYS5zcGFuOCwgLnVuZWRpdGFibGUtaW5wdXQuc3Bhbjgge1xuICAgIHdpZHRoOiA3NTZweDsgfVxuICBpbnB1dC5zcGFuNywgdGV4dGFyZWEuc3BhbjcsIC51bmVkaXRhYmxlLWlucHV0LnNwYW43IHtcbiAgICB3aWR0aDogNjU2cHg7IH1cbiAgaW5wdXQuc3BhbjYsIHRleHRhcmVhLnNwYW42LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuNiB7XG4gICAgd2lkdGg6IDU1NnB4OyB9XG4gIGlucHV0LnNwYW41LCB0ZXh0YXJlYS5zcGFuNSwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjUge1xuICAgIHdpZHRoOiA0NTZweDsgfVxuICBpbnB1dC5zcGFuNCwgdGV4dGFyZWEuc3BhbjQsIC51bmVkaXRhYmxlLWlucHV0LnNwYW40IHtcbiAgICB3aWR0aDogMzU2cHg7IH1cbiAgaW5wdXQuc3BhbjMsIHRleHRhcmVhLnNwYW4zLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMyB7XG4gICAgd2lkdGg6IDI1NnB4OyB9XG4gIGlucHV0LnNwYW4yLCB0ZXh0YXJlYS5zcGFuMiwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjIge1xuICAgIHdpZHRoOiAxNTZweDsgfVxuICBpbnB1dC5zcGFuMSwgdGV4dGFyZWEuc3BhbjEsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4xIHtcbiAgICB3aWR0aDogNTZweDsgfVxuICAudGh1bWJuYWlscyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4OyB9XG4gICAgLnRodW1ibmFpbHMgPiBsaSB7XG4gICAgICBtYXJnaW4tbGVmdDogMzBweDsgfVxuICAucm93LWZsdWlkIC50aHVtYm5haWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIC5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAqem9vbTogMTsgfVxuICAgIC5yb3c6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBjb250ZW50OiBcIlwiOyB9XG4gICAgLnJvdzphZnRlciB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGNsZWFyOiBib3RoOyB9XG4gIFtjbGFzcyo9XCJzcGFuXCJdIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbiAgLmNvbnRhaW5lciwgLm5hdmJhci1zdGF0aWMtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtYm90dG9tIC5jb250YWluZXIsIC5zcGFuMTIge1xuICAgIHdpZHRoOiA3MjRweDsgfVxuICAuc3BhbjExIHtcbiAgICB3aWR0aDogNjYycHg7IH1cbiAgLnNwYW4xMCB7XG4gICAgd2lkdGg6IDYwMHB4OyB9XG4gIC5zcGFuOSB7XG4gICAgd2lkdGg6IDUzOHB4OyB9XG4gIC5zcGFuOCB7XG4gICAgd2lkdGg6IDQ3NnB4OyB9XG4gIC5zcGFuNyB7XG4gICAgd2lkdGg6IDQxNHB4OyB9XG4gIC5zcGFuNiB7XG4gICAgd2lkdGg6IDM1MnB4OyB9XG4gIC5zcGFuNSB7XG4gICAgd2lkdGg6IDI5MHB4OyB9XG4gIC5zcGFuNCB7XG4gICAgd2lkdGg6IDIyOHB4OyB9XG4gIC5zcGFuMyB7XG4gICAgd2lkdGg6IDE2NnB4OyB9XG4gIC5zcGFuMiB7XG4gICAgd2lkdGg6IDEwNHB4OyB9XG4gIC5zcGFuMSB7XG4gICAgd2lkdGg6IDQycHg7IH1cbiAgLm9mZnNldDEyIHtcbiAgICBtYXJnaW4tbGVmdDogNzY0cHg7IH1cbiAgLm9mZnNldDExIHtcbiAgICBtYXJnaW4tbGVmdDogNzAycHg7IH1cbiAgLm9mZnNldDEwIHtcbiAgICBtYXJnaW4tbGVmdDogNjQwcHg7IH1cbiAgLm9mZnNldDkge1xuICAgIG1hcmdpbi1sZWZ0OiA1NzhweDsgfVxuICAub2Zmc2V0OCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUxNnB4OyB9XG4gIC5vZmZzZXQ3IHtcbiAgICBtYXJnaW4tbGVmdDogNDU0cHg7IH1cbiAgLm9mZnNldDYge1xuICAgIG1hcmdpbi1sZWZ0OiAzOTJweDsgfVxuICAub2Zmc2V0NSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzMHB4OyB9XG4gIC5vZmZzZXQ0IHtcbiAgICBtYXJnaW4tbGVmdDogMjY4cHg7IH1cbiAgLm9mZnNldDMge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDZweDsgfVxuICAub2Zmc2V0MiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0NHB4OyB9XG4gIC5vZmZzZXQxIHtcbiAgICBtYXJnaW4tbGVmdDogODJweDsgfVxuICAucm93LWZsdWlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAqem9vbTogMTsgfVxuICAgIC5yb3ctZmx1aWQ6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBjb250ZW50OiBcIlwiOyB9XG4gICAgLnJvdy1mbHVpZDphZnRlciB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgLnJvdy1mbHVpZCBbY2xhc3MqPVwic3BhblwiXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIuNzYyNDMwOTM5MjI2NTE5NCU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDIuNzA5MjM5NDQ5ODY0ODE3JTtcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgIC5yb3ctZmx1aWQgW2NsYXNzKj1cInNwYW5cIl06Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAgIC5yb3ctZmx1aWQgLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyLjc2MjQzMDkzOTIyNjUxOTQlOyB9XG4gICAgLnJvdy1mbHVpZCAuc3BhbjEyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgKndpZHRoOiA5OS45NDY4MDg1MTA2MzgyOSU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuMTEge1xuICAgICAgd2lkdGg6IDkxLjQzNjQ2NDA4ODM5Nzc4JTtcbiAgICAgICp3aWR0aDogOTEuMzgzMjcyNTk5MDM2MDglOyB9XG4gICAgLnJvdy1mbHVpZCAuc3BhbjEwIHtcbiAgICAgIHdpZHRoOiA4Mi44NzI5MjgxNzY3OTU1OCU7XG4gICAgICAqd2lkdGg6IDgyLjgxOTczNjY4NzQzMzg3JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW45IHtcbiAgICAgIHdpZHRoOiA3NC4zMDkzOTIyNjUxOTMzNyU7XG4gICAgICAqd2lkdGg6IDc0LjI1NjIwMDc3NTgzMTY2JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW44IHtcbiAgICAgIHdpZHRoOiA2NS43NDU4NTYzNTM1OTExNyU7XG4gICAgICAqd2lkdGg6IDY1LjY5MjY2NDg2NDIyOTQ2JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW43IHtcbiAgICAgIHdpZHRoOiA1Ny4xODIzMjA0NDE5ODg5NSU7XG4gICAgICAqd2lkdGg6IDU3LjEyOTEyODk1MjYyNzI1JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW42IHtcbiAgICAgIHdpZHRoOiA0OC42MTg3ODQ1MzAzODY3NCU7XG4gICAgICAqd2lkdGg6IDQ4LjU2NTU5MzA0MTAyNTA0JTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW41IHtcbiAgICAgIHdpZHRoOiA0MC4wNTUyNDg2MTg3ODQ1MyU7XG4gICAgICAqd2lkdGg6IDQwLjAwMjA1NzEyOTQyMjgzJTsgfVxuICAgIC5yb3ctZmx1aWQgLnNwYW40IHtcbiAgICAgIHdpZHRoOiAzMS40OTE3MTI3MDcxODIzMjMlO1xuICAgICAgKndpZHRoOiAzMS40Mzg1MjEyMTc4MjA2MiU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuMyB7XG4gICAgICB3aWR0aDogMjIuOTI4MTc2Nzk1NTgwMTElO1xuICAgICAgKndpZHRoOiAyMi44NzQ5ODUzMDYyMTg0MSU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuMiB7XG4gICAgICB3aWR0aDogMTQuMzY0NjQwODgzOTc3OSU7XG4gICAgICAqd2lkdGg6IDE0LjMxMTQ0OTM5NDYxNjE5OSU7IH1cbiAgICAucm93LWZsdWlkIC5zcGFuMSB7XG4gICAgICB3aWR0aDogNS44MDExMDQ5NzIzNzU2OTElO1xuICAgICAgKndpZHRoOiA1Ljc0NzkxMzQ4MzAxMzk4OCU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQxMiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTA1LjUyNDg2MTg3ODQ1MzA0JTtcbiAgICAgICptYXJnaW4tbGVmdDogMTA1LjQxODQ3ODg5OTcyOTYyJTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0MTI6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAyLjc2MjQzMDkzOTIyNjUyJTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiAxMDIuNjU2MDQ3OTYwNTAzMSU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQxMSB7XG4gICAgICBtYXJnaW4tbGVmdDogOTYuOTYxMzI1OTY2ODUwODIlO1xuICAgICAgKm1hcmdpbi1sZWZ0OiA5Ni44NTQ5NDI5ODgxMjc0JTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0MTE6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogOTQuMTk4ODk1MDI3NjI0MyU7XG4gICAgICAgICptYXJnaW4tbGVmdDogOTQuMDkyNTEyMDQ4OTAwODklOyB9XG4gICAgLnJvdy1mbHVpZCAub2Zmc2V0MTAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDg4LjM5Nzc5MDA1NTI0ODYyJTtcbiAgICAgICptYXJnaW4tbGVmdDogODguMjkxNDA3MDc2NTI1MiU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDEwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDg1LjYzNTM1OTExNjAyMjElO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDg1LjUyODk3NjEzNzI5ODY4JTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDc5LjgzNDI1NDE0MzY0NjQlO1xuICAgICAgKm1hcmdpbi1sZWZ0OiA3OS43Mjc4NzExNjQ5MjI5OSU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDk6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzcuMDcxODIzMjA0NDE5ODklO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDc2Ljk2NTQ0MDIyNTY5NjQ3JTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDgge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcxLjI3MDcxODIzMjA0NDIlO1xuICAgICAgKm1hcmdpbi1sZWZ0OiA3MS4xNjQzMzUyNTMzMjA3OSU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDg6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjguNTA4Mjg3MjkyODE3NjglO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDY4LjQwMTkwNDMxNDA5NDI3JTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDcge1xuICAgICAgbWFyZ2luLWxlZnQ6IDYyLjcwNzE4MjMyMDQ0MTk5JTtcbiAgICAgICptYXJnaW4tbGVmdDogNjIuNjAwNzk5MzQxNzE4NTg0JTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0NzpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1OS45NDQ3NTEzODEyMTU0NyU7XG4gICAgICAgICptYXJnaW4tbGVmdDogNTkuODM4MzY4NDAyNDkyMDY1JTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDU0LjE0MzY0NjQwODgzOTc4JTtcbiAgICAgICptYXJnaW4tbGVmdDogNTQuMDM3MjYzNDMwMTE2Mzc2JTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0NjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MS4zODEyMTU0Njk2MTMyNiU7XG4gICAgICAgICptYXJnaW4tbGVmdDogNTEuMjc0ODMyNDkwODg5ODYlOyB9XG4gICAgLnJvdy1mbHVpZCAub2Zmc2V0NSB7XG4gICAgICBtYXJnaW4tbGVmdDogNDUuNTgwMTEwNDk3MjM3NTclO1xuICAgICAgKm1hcmdpbi1sZWZ0OiA0NS40NzM3Mjc1MTg1MTQxNyU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDU6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDIuODE3Njc5NTU4MDExMDUlO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDQyLjcxMTI5NjU3OTI4NzY1JTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDM3LjAxNjU3NDU4NTYzNTM2JTtcbiAgICAgICptYXJnaW4tbGVmdDogMzYuOTEwMTkxNjA2OTExOTYlOyB9XG4gICAgICAucm93LWZsdWlkIC5vZmZzZXQ0OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM0LjI1NDE0MzY0NjQwODg0JTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiAzNC4xNDc3NjA2Njc2ODU0NCU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQzIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyOC40NTMwMzg2NzQwMzMxNSU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDI4LjM0NjY1NTY5NTMwOTc0NiU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDM6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUuNjkwNjA3NzM0ODA2NjMlO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDI1LjU4NDIyNDc1NjA4MzIyNyU7IH1cbiAgICAucm93LWZsdWlkIC5vZmZzZXQyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS44ODk1MDI3NjI0MzA5NCU7XG4gICAgICAqbWFyZ2luLWxlZnQ6IDE5Ljc4MzExOTc4MzcwNzUzNyU7IH1cbiAgICAgIC5yb3ctZmx1aWQgLm9mZnNldDI6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTcuMTI3MDcxODIzMjA0NDIlO1xuICAgICAgICAqbWFyZ2luLWxlZnQ6IDE3LjAyMDY4ODg0NDQ4MTAyJTsgfVxuICAgIC5yb3ctZmx1aWQgLm9mZnNldDEge1xuICAgICAgbWFyZ2luLWxlZnQ6IDExLjMyNTk2Njg1MDgyODczJTtcbiAgICAgICptYXJnaW4tbGVmdDogMTEuMjE5NTgzODcyMTA1MzI1JTsgfVxuICAgICAgLnJvdy1mbHVpZCAub2Zmc2V0MTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4LjU2MzUzNTkxMTYwMjIxJTtcbiAgICAgICAgKm1hcmdpbi1sZWZ0OiA4LjQ1NzE1MjkzMjg3ODgwNiU7IH1cbiAgaW5wdXQsIHRleHRhcmVhLCAudW5lZGl0YWJsZS1pbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxuICBpbnB1dC5zcGFuMTIsIHRleHRhcmVhLnNwYW4xMiwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjEyIHtcbiAgICB3aWR0aDogNzEwcHg7IH1cbiAgaW5wdXQuc3BhbjExLCB0ZXh0YXJlYS5zcGFuMTEsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4xMSB7XG4gICAgd2lkdGg6IDY0OHB4OyB9XG4gIGlucHV0LnNwYW4xMCwgdGV4dGFyZWEuc3BhbjEwLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMTAge1xuICAgIHdpZHRoOiA1ODZweDsgfVxuICBpbnB1dC5zcGFuOSwgdGV4dGFyZWEuc3BhbjksIC51bmVkaXRhYmxlLWlucHV0LnNwYW45IHtcbiAgICB3aWR0aDogNTI0cHg7IH1cbiAgaW5wdXQuc3BhbjgsIHRleHRhcmVhLnNwYW44LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuOCB7XG4gICAgd2lkdGg6IDQ2MnB4OyB9XG4gIGlucHV0LnNwYW43LCB0ZXh0YXJlYS5zcGFuNywgLnVuZWRpdGFibGUtaW5wdXQuc3Bhbjcge1xuICAgIHdpZHRoOiA0MDBweDsgfVxuICBpbnB1dC5zcGFuNiwgdGV4dGFyZWEuc3BhbjYsIC51bmVkaXRhYmxlLWlucHV0LnNwYW42IHtcbiAgICB3aWR0aDogMzM4cHg7IH1cbiAgaW5wdXQuc3BhbjUsIHRleHRhcmVhLnNwYW41LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuNSB7XG4gICAgd2lkdGg6IDI3NnB4OyB9XG4gIGlucHV0LnNwYW40LCB0ZXh0YXJlYS5zcGFuNCwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjQge1xuICAgIHdpZHRoOiAyMTRweDsgfVxuICBpbnB1dC5zcGFuMywgdGV4dGFyZWEuc3BhbjMsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4zIHtcbiAgICB3aWR0aDogMTUycHg7IH1cbiAgaW5wdXQuc3BhbjIsIHRleHRhcmVhLnNwYW4yLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMiB7XG4gICAgd2lkdGg6IDkwcHg7IH1cbiAgaW5wdXQuc3BhbjEsIHRleHRhcmVhLnNwYW4xLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMSB7XG4gICAgd2lkdGg6IDI4cHg7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cbiAgLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAubmF2YmFyLXN0YXRpYy10b3Age1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4OyB9XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgLmRsLWhvcml6b250YWwgZHQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGNsZWFyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgLmRsLWhvcml6b250YWwgZGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5yb3ctZmx1aWQge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC50aHVtYm5haWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAgIC50aHVtYm5haWxzID4gbGkge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxuICBbY2xhc3MqPVwic3BhblwiXSwgLnVuZWRpdGFibGUtaW5wdXRbY2xhc3MqPVwic3BhblwiXSwgLnJvdy1mbHVpZCBbY2xhc3MqPVwic3BhblwiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5zcGFuMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAucm93LWZsdWlkIC5zcGFuMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAucm93LWZsdWlkIFtjbGFzcyo9XCJvZmZzZXRcIl06Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5pbnB1dC1sYXJnZSwgLmlucHV0LXhsYXJnZSwgLmlucHV0LXh4bGFyZ2UsIGlucHV0W2NsYXNzKj1cInNwYW5cIl0sIHNlbGVjdFtjbGFzcyo9XCJzcGFuXCJdLCB0ZXh0YXJlYVtjbGFzcyo9XCJzcGFuXCJdLCAudW5lZGl0YWJsZS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLmlucHV0LXByZXBlbmQgaW5wdXQsIC5pbnB1dC1hcHBlbmQgaW5wdXQsIC5pbnB1dC1wcmVwZW5kIGlucHV0W2NsYXNzKj1cInNwYW5cIl0sIC5pbnB1dC1hcHBlbmQgaW5wdXRbY2xhc3MqPVwic3BhblwiXSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250cm9scy1yb3cgW2NsYXNzKj1cInNwYW5cIl0gKyBbY2xhc3MqPVwic3BhblwiXSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLm1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwOyB9XG4gICAgLm1vZGFsLmZhZGUge1xuICAgICAgdG9wOiAtMTAwcHg7IH1cbiAgICAgIC5tb2RhbC5mYWRlLmluIHtcbiAgICAgICAgdG9wOiAyMHB4OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5uYXYtY29sbGFwc2Uge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxuICAucGFnZS1oZWFkZXIgaDEgc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxuICAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxhYmVsIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5mb3JtLWhvcml6b250YWwgLmNvbnRyb2xzIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gIC5mb3JtLWhvcml6b250YWwgLmZvcm0tYWN0aW9ucyB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cbiAgLm1lZGlhIC5wdWxsLWxlZnQsIC5tZWRpYSAucHVsbC1yaWdodCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAubWVkaWEtb2JqZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLm1vZGFsIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbGVmdDogMTBweDsgfVxuICAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IC0xMHB4OyB9XG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljOyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gIC5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IHN0YXRpYzsgfVxuICAubmF2YmFyLWZpeGVkLXRvcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG4gIC5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XG4gIC5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItaW5uZXIsIC5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItaW5uZXIge1xuICAgIHBhZGRpbmc6IDI1cHg7IH1cbiAgLm5hdmJhciAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAwOyB9XG4gIC5uYXZiYXIgLmJyYW5kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW46IC01cHggMDsgfVxuICAubmF2LWNvbGxhcHNlIHtcbiAgICBjbGVhcjogYm90aDsgfVxuICAgIC5uYXYtY29sbGFwc2UgLm5hdiB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIG1hcmdpbjogMCAwIDEwcHg7IH1cbiAgICAgIC5uYXYtY29sbGFwc2UgLm5hdiA+IGxpIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7IH1cbiAgICAgICAgLm5hdi1jb2xsYXBzZSAubmF2ID4gbGkgPiBhIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7IH1cbiAgICAgIC5uYXYtY29sbGFwc2UgLm5hdiA+IC5kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgLm5hdi1jb2xsYXBzZSAubmF2IC5uYXYtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lOyB9XG4gICAgICAubmF2LWNvbGxhcHNlIC5uYXYgPiBsaSA+IGEge1xuICAgICAgICBwYWRkaW5nOiA5cHggMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgIC5uYXYtY29sbGFwc2UgLmRyb3Bkb3duLW1lbnUgYSB7XG4gICAgICBwYWRkaW5nOiA5cHggMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgLm5hdi1jb2xsYXBzZSAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gICAgLm5hdi1jb2xsYXBzZSAuZHJvcGRvd24tbWVudSBsaSArIGxpIGEge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4OyB9XG4gICAgLm5hdi1jb2xsYXBzZSAubmF2ID4gbGkgPiBhOmhvdmVyLCAubmF2LWNvbGxhcHNlIC5uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgfVxuICAgIC5uYXYtY29sbGFwc2UgLmRyb3Bkb3duLW1lbnUgYTpob3ZlciwgLm5hdi1jb2xsYXBzZSAuZHJvcGRvd24tbWVudSBhOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IH1cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UgLm5hdiA+IGxpID4gYSwgLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UgLmRyb3Bkb3duLW1lbnUgYSB7XG4gICAgY29sb3I6ICM5OTk5OTk7IH1cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UgLm5hdiA+IGxpID4gYTpob3ZlciwgLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UgLm5hdiA+IGxpID4gYTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTsgfVxuICAubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSAuZHJvcGRvd24tbWVudSBhOmhvdmVyLCAubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSAuZHJvcGRvd24tbWVudSBhOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExOyB9XG4gIC5uYXYtY29sbGFwc2UuaW4gLmJ0bi1ncm91cCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cbiAgLm5hdi1jb2xsYXBzZSAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB0b3A6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5uYXYtY29sbGFwc2UgLm9wZW4gPiAuZHJvcGRvd24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLm5hdi1jb2xsYXBzZSAuZHJvcGRvd24tbWVudTpiZWZvcmUsIC5uYXYtY29sbGFwc2UgLmRyb3Bkb3duLW1lbnU6YWZ0ZXIsIC5uYXYtY29sbGFwc2UgLmRyb3Bkb3duLW1lbnUgLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLm5hdi1jb2xsYXBzZSAubmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudTpiZWZvcmUsIC5uYXYtY29sbGFwc2UgLm5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLm5hdi1jb2xsYXBzZSAubmF2YmFyLWZvcm0sIC5uYXYtY29sbGFwc2UgLm5hdmJhci1zZWFyY2gge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UgLm5hdmJhci1mb3JtLCAubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSAubmF2YmFyLXNlYXJjaCB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzExMTExMTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTExMTExOyB9XG4gIC5uYXZiYXIgLm5hdi1jb2xsYXBzZSAubmF2LnB1bGwtcmlnaHQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5uYXYtY29sbGFwc2Uge1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5hdi1jb2xsYXBzZS5jb2xsYXBzZSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5uYXZiYXIgLmJ0bi1uYXZiYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5uYXZiYXItc3RhdGljIC5uYXZiYXItaW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XG4gIC5uYXYtY29sbGFwc2UuY29sbGFwc2Uge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/assets/css/bootstrap.css":
/*!**************************************!*\
  !*** ./src/assets/css/bootstrap.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Bootstrap v2.3.0\r\n *\r\n * Copyright 2012 Twitter, Inc\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Designed and built with all the love in the world @twitter by @mdo and @fat.\r\n */\r\n\r\n.clearfix {\r\n *zoom: 1;\r\n}\r\n\r\n.clearfix:before, .clearfix:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.clearfix:after {\r\n\tclear: both;\r\n}\r\n\r\n.hide-text {\r\n\tfont: 0/0 a;\r\n\tcolor: transparent;\r\n\ttext-shadow: none;\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n}\r\n\r\n.input-block-level {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tmin-height: 30px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\naudio, canvas, video {\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n *zoom: 1;\r\n}\r\n\r\naudio:not([controls]) {\r\n display: none;\r\n}\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-ms-text-size-adjust: 100%;\r\n}\r\n\r\na:focus {\r\n\toutline: thin dotted #333;\r\n\toutline: 5px auto -webkit-focus-ring-color;\r\n\toutline-offset: -2px;\r\n}\r\n\r\na:hover, a:active {\r\n\toutline: 0;\r\n}\r\n\r\nsub, sup {\r\n\tposition: relative;\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em;\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em;\r\n}\r\n\r\nimg {\r\n\twidth: auto\\9;\r\n\theight: auto;\r\n\tmax-width: 100%;\r\n\tvertical-align: middle;\r\n\tborder: 0;\r\n\t-ms-interpolation-mode: bicubic;\r\n}\r\n\r\n#map_canvas img, .google-maps img {\r\n\tmax-width: none;\r\n}\r\n\r\nbutton, input, select, textarea {\r\n\tmargin: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: middle;\r\n}\r\n\r\nbutton, input {\r\n *overflow: visible;\r\n\tline-height: normal;\r\n}\r\n\r\nbutton::-moz-focus-inner, input::-moz-focus-inner {\r\n padding: 0;\r\n border: 0;\r\n}\r\n\r\nbutton, html input[type=button], input[type=reset], input[type=submit] {\r\n\tcursor: pointer;\r\n\t-webkit-appearance: button;\r\n}\r\n\r\nlabel, select, button, input[type=button], input[type=reset], input[type=submit], input[type=radio], input[type=checkbox] {\r\n\tcursor: pointer;\r\n}\r\n\r\ninput[type=search] {\r\n\tbox-sizing: content-box;\r\n\t-webkit-appearance: textfield;\r\n}\r\n\r\ninput[type=search]::-webkit-search-decoration, input[type=search]::-webkit-search-cancel-button {\r\n -webkit-appearance: none;\r\n}\r\n\r\ntextarea {\r\n\toverflow: auto;\r\n\tvertical-align: top;\r\n}\r\n\r\n@media print {\r\n* {\r\n\tcolor: #000 !important;\r\n\ttext-shadow: none !important;\r\n\tbackground: transparent !important;\r\n\tbox-shadow: none !important;\r\n}\r\na,  a:visited {\r\n\ttext-decoration: underline;\r\n}\r\na[href]:after {\r\n\tcontent: \" (\" attr(href) \")\";\r\n}\r\nabbr[title]:after {\r\n\tcontent: \" (\" attr(title) \")\";\r\n}\r\n .ir a:after,  a[href^=\"javascript:\"]:after,  a[href^=\"#\"]:after {\r\n content: \"\";\r\n}\r\npre,  blockquote {\r\n\tborder: 1px solid #999;\r\n\tpage-break-inside: avoid;\r\n}\r\nthead {\r\n\tdisplay: table-header-group;\r\n}\r\ntr,  img {\r\n\tpage-break-inside: avoid;\r\n}\r\nimg {\r\n\tmax-width: 100% !important;\r\n}\r\n @page {\r\n margin: 0.5cm;\r\n}\r\np,  h2,  h3 {\r\n\torphans: 3;\r\n\twidows: 3;\r\n}\r\nh2,  h3 {\r\n\tpage-break-after: avoid;\r\n}\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n\tcolor: #333333;\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\na {\r\n\tcolor: #0088cc;\r\n\ttext-decoration: none;\r\n}\r\n\r\na:hover, a:focus {\r\n\tcolor: #005580;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.img-rounded {\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.img-polaroid {\r\n\tpadding: 4px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #ccc;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\r\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.img-circle {\r\n\tborder-radius: 500px;\r\n}\r\n\r\n.row {\r\n\tmargin-left: -20px;\r\n *zoom: 1;\r\n}\r\n\r\n.row:before, .row:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.row:after {\r\n\tclear: both;\r\n}\r\n\r\n[class*=\"span\"] {\r\n float: left;\r\n min-height: 1px;\r\n margin-left: 20px;\r\n}\r\n\r\n.container, .navbar-static-top .container, .navbar-fixed-top .container, .navbar-fixed-bottom .container {\r\n\twidth: 940px;\r\n}\r\n\r\n.span12 {\r\n\twidth: 940px;\r\n}\r\n\r\n.span11 {\r\n\twidth: 860px;\r\n}\r\n\r\n.span10 {\r\n\twidth: 780px;\r\n}\r\n\r\n.span9 {\r\n\twidth: 700px;\r\n}\r\n\r\n.span8 {\r\n\twidth: 620px;\r\n}\r\n\r\n.span7 {\r\n\twidth: 540px;\r\n}\r\n\r\n.span6 {\r\n\twidth: 460px;\r\n}\r\n\r\n.span5 {\r\n\twidth: 380px;\r\n}\r\n\r\n.span4 {\r\n\twidth: 300px;\r\n}\r\n\r\n.span3 {\r\n\twidth: 220px;\r\n}\r\n\r\n.span2 {\r\n\twidth: 140px;\r\n}\r\n\r\n.span1 {\r\n\twidth: 60px;\r\n}\r\n\r\n.offset12 {\r\n\tmargin-left: 980px;\r\n}\r\n\r\n.offset11 {\r\n\tmargin-left: 900px;\r\n}\r\n\r\n.offset10 {\r\n\tmargin-left: 820px;\r\n}\r\n\r\n.offset9 {\r\n\tmargin-left: 740px;\r\n}\r\n\r\n.offset8 {\r\n\tmargin-left: 660px;\r\n}\r\n\r\n.offset7 {\r\n\tmargin-left: 580px;\r\n}\r\n\r\n.offset6 {\r\n\tmargin-left: 500px;\r\n}\r\n\r\n.offset5 {\r\n\tmargin-left: 420px;\r\n}\r\n\r\n.offset4 {\r\n\tmargin-left: 340px;\r\n}\r\n\r\n.offset3 {\r\n\tmargin-left: 260px;\r\n}\r\n\r\n.offset2 {\r\n\tmargin-left: 180px;\r\n}\r\n\r\n.offset1 {\r\n\tmargin-left: 100px;\r\n}\r\n\r\n.row-fluid {\r\n\twidth: 100%;\r\n *zoom: 1;\r\n}\r\n\r\n.row-fluid:before, .row-fluid:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.row-fluid:after {\r\n\tclear: both;\r\n}\r\n\r\n.row-fluid [class*=\"span\"] {\r\n display: block;\r\n float: left;\r\n width: 100%;\r\n min-height: 30px;\r\n margin-left: 2.127659574468085%;\r\n *margin-left: 2.074468085106383%;\r\n box-sizing: border-box;\r\n}\r\n\r\n.row-fluid [class*=\"span\"]:first-child {\r\n margin-left: 0;\r\n}\r\n\r\n.row-fluid .controls-row [class*=\"span\"] + [class*=\"span\"] {\r\n margin-left: 2.127659574468085%;\r\n}\r\n\r\n.row-fluid .span12 {\r\n\twidth: 100%;\r\n *width: 99.94680851063829%;\r\n}\r\n\r\n.row-fluid .span11 {\r\n\twidth: 91.48936170212765%;\r\n *width: 91.43617021276594%;\r\n}\r\n\r\n.row-fluid .span10 {\r\n\twidth: 82.97872340425532%;\r\n *width: 82.92553191489361%;\r\n}\r\n\r\n.row-fluid .span9 {\r\n\twidth: 74.46808510638297%;\r\n *width: 74.41489361702126%;\r\n}\r\n\r\n.row-fluid .span8 {\r\n\twidth: 65.95744680851064%;\r\n *width: 65.90425531914893%;\r\n}\r\n\r\n.row-fluid .span7 {\r\n\twidth: 57.44680851063829%;\r\n *width: 57.39361702127659%;\r\n}\r\n\r\n.row-fluid .span6 {\r\n\twidth: 48.93617021276595%;\r\n *width: 48.88297872340425%;\r\n}\r\n\r\n.row-fluid .span5 {\r\n\twidth: 40.42553191489362%;\r\n *width: 40.37234042553192%;\r\n}\r\n\r\n.row-fluid .span4 {\r\n\twidth: 31.914893617021278%;\r\n *width: 31.861702127659576%;\r\n}\r\n\r\n.row-fluid .span3 {\r\n\twidth: 23.404255319148934%;\r\n *width: 23.351063829787233%;\r\n}\r\n\r\n.row-fluid .span2 {\r\n\twidth: 14.893617021276595%;\r\n *width: 14.840425531914894%;\r\n}\r\n\r\n.row-fluid .span1 {\r\n\twidth: 6.382978723404255%;\r\n *width: 6.329787234042553%;\r\n}\r\n\r\n.row-fluid .offset12 {\r\n\tmargin-left: 104.25531914893617%;\r\n *margin-left: 104.14893617021275%;\r\n}\r\n\r\n.row-fluid .offset12:first-child {\r\n\tmargin-left: 102.12765957446808%;\r\n *margin-left: 102.02127659574467%;\r\n}\r\n\r\n.row-fluid .offset11 {\r\n\tmargin-left: 95.74468085106382%;\r\n *margin-left: 95.6382978723404%;\r\n}\r\n\r\n.row-fluid .offset11:first-child {\r\n\tmargin-left: 93.61702127659574%;\r\n *margin-left: 93.51063829787232%;\r\n}\r\n\r\n.row-fluid .offset10 {\r\n\tmargin-left: 87.23404255319149%;\r\n *margin-left: 87.12765957446807%;\r\n}\r\n\r\n.row-fluid .offset10:first-child {\r\n\tmargin-left: 85.1063829787234%;\r\n *margin-left: 84.99999999999999%;\r\n}\r\n\r\n.row-fluid .offset9 {\r\n\tmargin-left: 78.72340425531914%;\r\n *margin-left: 78.61702127659572%;\r\n}\r\n\r\n.row-fluid .offset9:first-child {\r\n\tmargin-left: 76.59574468085106%;\r\n *margin-left: 76.48936170212764%;\r\n}\r\n\r\n.row-fluid .offset8 {\r\n\tmargin-left: 70.2127659574468%;\r\n *margin-left: 70.10638297872339%;\r\n}\r\n\r\n.row-fluid .offset8:first-child {\r\n\tmargin-left: 68.08510638297872%;\r\n *margin-left: 67.9787234042553%;\r\n}\r\n\r\n.row-fluid .offset7 {\r\n\tmargin-left: 61.70212765957446%;\r\n *margin-left: 61.59574468085106%;\r\n}\r\n\r\n.row-fluid .offset7:first-child {\r\n\tmargin-left: 59.574468085106375%;\r\n *margin-left: 59.46808510638297%;\r\n}\r\n\r\n.row-fluid .offset6 {\r\n\tmargin-left: 53.191489361702125%;\r\n *margin-left: 53.085106382978715%;\r\n}\r\n\r\n.row-fluid .offset6:first-child {\r\n\tmargin-left: 51.063829787234035%;\r\n *margin-left: 50.95744680851063%;\r\n}\r\n\r\n.row-fluid .offset5 {\r\n\tmargin-left: 44.68085106382979%;\r\n *margin-left: 44.57446808510638%;\r\n}\r\n\r\n.row-fluid .offset5:first-child {\r\n\tmargin-left: 42.5531914893617%;\r\n *margin-left: 42.4468085106383%;\r\n}\r\n\r\n.row-fluid .offset4 {\r\n\tmargin-left: 36.170212765957444%;\r\n *margin-left: 36.06382978723405%;\r\n}\r\n\r\n.row-fluid .offset4:first-child {\r\n\tmargin-left: 34.04255319148936%;\r\n *margin-left: 33.93617021276596%;\r\n}\r\n\r\n.row-fluid .offset3 {\r\n\tmargin-left: 27.659574468085104%;\r\n *margin-left: 27.5531914893617%;\r\n}\r\n\r\n.row-fluid .offset3:first-child {\r\n\tmargin-left: 25.53191489361702%;\r\n *margin-left: 25.425531914893618%;\r\n}\r\n\r\n.row-fluid .offset2 {\r\n\tmargin-left: 19.148936170212764%;\r\n *margin-left: 19.04255319148936%;\r\n}\r\n\r\n.row-fluid .offset2:first-child {\r\n\tmargin-left: 17.02127659574468%;\r\n *margin-left: 16.914893617021278%;\r\n}\r\n\r\n.row-fluid .offset1 {\r\n\tmargin-left: 10.638297872340425%;\r\n *margin-left: 10.53191489361702%;\r\n}\r\n\r\n.row-fluid .offset1:first-child {\r\n\tmargin-left: 8.51063829787234%;\r\n *margin-left: 8.404255319148938%;\r\n}\r\n\r\n[class*=\"span\"].hide, .row-fluid [class*=\"span\"].hide {\r\n display: none;\r\n}\r\n\r\n[class*=\"span\"].pull-right, .row-fluid [class*=\"span\"].pull-right {\r\n float: right;\r\n}\r\n\r\n.container {\r\n\tmargin-right: auto;\r\n\tmargin-left: auto;\r\n *zoom: 1;\r\n}\r\n\r\n.container:before, .container:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.container:after {\r\n\tclear: both;\r\n}\r\n\r\n.container-fluid {\r\n\tpadding-right: 20px;\r\n\tpadding-left: 20px;\r\n *zoom: 1;\r\n}\r\n\r\n.container-fluid:before, .container-fluid:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.container-fluid:after {\r\n\tclear: both;\r\n}\r\n\r\np {\r\n\tmargin: 0 0 10px;\r\n}\r\n\r\n.lead {\r\n\tmargin-bottom: 20px;\r\n\tfont-size: 21px;\r\n\tfont-weight: 200;\r\n\tline-height: 30px;\r\n}\r\n\r\nsmall {\r\n\tfont-size: 85%;\r\n}\r\n\r\nstrong {\r\n\tfont-weight: bold;\r\n}\r\n\r\nem {\r\n\tfont-style: italic;\r\n}\r\n\r\ncite {\r\n\tfont-style: normal;\r\n}\r\n\r\n.muted {\r\n\tcolor: #999999;\r\n}\r\n\r\na.muted:hover, a.muted:focus {\r\n\tcolor: #808080;\r\n}\r\n\r\n.text-warning {\r\n\tcolor: #c09853;\r\n}\r\n\r\na.text-warning:hover, a.text-warning:focus {\r\n\tcolor: #a47e3c;\r\n}\r\n\r\n.text-error {\r\n\tcolor: #b94a48;\r\n}\r\n\r\na.text-error:hover, a.text-error:focus {\r\n\tcolor: #953b39;\r\n}\r\n\r\n.text-info {\r\n\tcolor: #3a87ad;\r\n}\r\n\r\na.text-info:hover, a.text-info:focus {\r\n\tcolor: #2d6987;\r\n}\r\n\r\n.text-success {\r\n\tcolor: #468847;\r\n}\r\n\r\na.text-success:hover, a.text-success:focus {\r\n\tcolor: #356635;\r\n}\r\n\r\n.text-left {\r\n\ttext-align: left;\r\n}\r\n\r\n.text-right {\r\n\ttext-align: right;\r\n}\r\n\r\n.text-center {\r\n\ttext-align: center;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n\tmargin: 10px 0;\r\n\tfont-family: inherit;\r\n\tfont-weight: bold;\r\n\tline-height: 20px;\r\n\tcolor: inherit;\r\n\ttext-rendering: optimizelegibility;\r\n}\r\n\r\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small {\r\n\tfont-weight: normal;\r\n\tline-height: 1;\r\n\tcolor: #999999;\r\n}\r\n\r\nh1, h2, h3 {\r\n\tline-height: 40px;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 38.5px;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 31.5px;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 24.5px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: 17.5px;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 14px;\r\n}\r\n\r\nh6 {\r\n\tfont-size: 11.9px;\r\n}\r\n\r\nh1 small {\r\n\tfont-size: 24.5px;\r\n}\r\n\r\nh2 small {\r\n\tfont-size: 17.5px;\r\n}\r\n\r\nh3 small {\r\n\tfont-size: 14px;\r\n}\r\n\r\nh4 small {\r\n\tfont-size: 14px;\r\n}\r\n\r\n.page-header {\r\n\tpadding-bottom: 9px;\r\n\tmargin: 20px 0 30px;\r\n\tborder-bottom: 1px solid #eeeeee;\r\n}\r\n\r\nul, ol {\r\n\tpadding: 0;\r\n\tmargin: 0 0 10px 25px;\r\n}\r\n\r\nul ul, ul ol, ol ol, ol ul {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\nli {\r\n\tline-height: 20px;\r\n}\r\n\r\nul.unstyled, ol.unstyled {\r\n\tmargin-left: 0;\r\n\tlist-style: none;\r\n}\r\n\r\nul.inline, ol.inline {\r\n\tmargin-left: 0;\r\n\tlist-style: none;\r\n}\r\n\r\nul.inline > li, ol.inline > li {\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n\tpadding-right: 5px;\r\n\tpadding-left: 5px;\r\n *zoom: 1;\r\n}\r\n\r\ndl {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\ndt, dd {\r\n\tline-height: 20px;\r\n}\r\n\r\ndt {\r\n\tfont-weight: bold;\r\n}\r\n\r\ndd {\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.dl-horizontal {\r\n *zoom: 1;\r\n}\r\n\r\n.dl-horizontal:before, .dl-horizontal:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.dl-horizontal:after {\r\n\tclear: both;\r\n}\r\n\r\n.dl-horizontal dt {\r\n\tfloat: left;\r\n\twidth: 160px;\r\n\toverflow: hidden;\r\n\tclear: left;\r\n\ttext-align: right;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.dl-horizontal dd {\r\n\tmargin-left: 180px;\r\n}\r\n\r\nhr {\r\n\tmargin: 20px 0;\r\n\tborder: 0;\r\n\tborder-top: 1px solid #eeeeee;\r\n\tborder-bottom: 1px solid #ffffff;\r\n}\r\n\r\nabbr[title], abbr[data-original-title] {\r\n\tcursor: help;\r\n\tborder-bottom: 1px dotted #999999;\r\n}\r\n\r\nabbr.initialism {\r\n\tfont-size: 90%;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\nblockquote {\r\n\tpadding: 0 0 0 15px;\r\n\tmargin: 0 0 20px;\r\n\tborder-left: 5px solid #eeeeee;\r\n}\r\n\r\nblockquote p {\r\n\tmargin-bottom: 0;\r\n\tfont-size: 17.5px;\r\n\tfont-weight: 300;\r\n\tline-height: 1.25;\r\n}\r\n\r\nblockquote small {\r\n\tdisplay: block;\r\n\tline-height: 20px;\r\n\tcolor: #999999;\r\n}\r\n\r\nblockquote small:before {\r\n\tcontent: '\\2014 \\00A0';\r\n}\r\n\r\nblockquote.pull-right {\r\n\tfloat: right;\r\n\tpadding-right: 15px;\r\n\tpadding-left: 0;\r\n\tborder-right: 5px solid #eeeeee;\r\n\tborder-left: 0;\r\n}\r\n\r\nblockquote.pull-right p, blockquote.pull-right small {\r\n\ttext-align: right;\r\n}\r\n\r\nblockquote.pull-right small:before {\r\n\tcontent: '';\r\n}\r\n\r\nblockquote.pull-right small:after {\r\n\tcontent: '\\00A0 \\2014';\r\n}\r\n\r\nq:before, q:after, blockquote:before, blockquote:after {\r\n\tcontent: \"\";\r\n}\r\n\r\naddress {\r\n\tdisplay: block;\r\n\tmargin-bottom: 20px;\r\n\tfont-style: normal;\r\n\tline-height: 20px;\r\n}\r\n\r\ncode, pre {\r\n\tpadding: 0 3px 2px;\r\n\tfont-family: Monaco, Menlo, Consolas, \"Courier New\", monospace;\r\n\tfont-size: 12px;\r\n\tcolor: #333333;\r\n\tborder-radius: 3px;\r\n}\r\n\r\ncode {\r\n\tpadding: 2px 4px;\r\n\tcolor: #d14;\r\n\twhite-space: nowrap;\r\n\tbackground-color: #f7f7f9;\r\n\tborder: 1px solid #e1e1e8;\r\n}\r\n\r\npre {\r\n\tdisplay: block;\r\n\tpadding: 9.5px;\r\n\tmargin: 0 0 10px;\r\n\tfont-size: 13px;\r\n\tline-height: 20px;\r\n\tword-break: break-all;\r\n\tword-wrap: break-word;\r\n\twhite-space: pre;\r\n\twhite-space: pre-wrap;\r\n\tbackground-color: #f5f5f5;\r\n\tborder: 1px solid #ccc;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.15);\r\n\tborder-radius: 4px;\r\n}\r\n\r\npre.prettyprint {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\npre code {\r\n\tpadding: 0;\r\n\tcolor: inherit;\r\n\twhite-space: pre;\r\n\twhite-space: pre-wrap;\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n}\r\n\r\n.pre-scrollable {\r\n\tmax-height: 340px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\nform {\r\n\tmargin: 0 0 20px;\r\n}\r\n\r\nfieldset {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n\r\nlegend {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 0;\r\n\tmargin-bottom: 20px;\r\n\tfont-size: 21px;\r\n\tline-height: 40px;\r\n\tcolor: #333333;\r\n\tborder: 0;\r\n\tborder-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\nlegend small {\r\n\tfont-size: 15px;\r\n\tcolor: #999999;\r\n}\r\n\r\nlabel, input, button, select, textarea {\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tline-height: 20px;\r\n}\r\n\r\ninput, button, select, textarea {\r\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\nlabel {\r\n\tdisplay: block;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\nselect, textarea, input[type=text], input[type=password], input[type=datetime], input[type=datetime-local], input[type=date], input[type=month], input[type=time], input[type=week], input[type=number], input[type=email], input[type=url], input[type=search], input[type=tel], input[type=color], .uneditable-input {\r\n\tdisplay: inline-block;\r\n\theight: 20px;\r\n\tpadding: 4px 6px;\r\n\tmargin-bottom: 10px;\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n\tcolor: #555555;\r\n\tvertical-align: middle;\r\n\tborder-radius: 4px;\r\n}\r\n\r\ninput, textarea, .uneditable-input {\r\n\twidth: 206px;\r\n}\r\n\r\ntextarea {\r\n\theight: auto;\r\n}\r\n\r\ntextarea, input[type=text], input[type=password], input[type=datetime], input[type=datetime-local], input[type=date], input[type=month], input[type=time], input[type=week], input[type=number], input[type=email], input[type=url], input[type=search], input[type=tel], input[type=color], .uneditable-input {\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #cccccc;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n\ttransition: border linear 0.2s, box-shadow linear 0.2s;\r\n}\r\n\r\ntextarea:focus, input[type=text]:focus, input[type=password]:focus, input[type=datetime]:focus, input[type=datetime-local]:focus, input[type=date]:focus, input[type=month]:focus, input[type=time]:focus, input[type=week]:focus, input[type=number]:focus, input[type=email]:focus, input[type=url]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=color]:focus, .uneditable-input:focus {\r\n\tborder-color: rgba(82, 168, 236, 0.8);\r\n\toutline: 0;\r\n\toutline: thin dotted \\9;\r\n\t/* IE6-9 */\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);\r\n}\r\n\r\ninput[type=radio], input[type=checkbox] {\r\n\tmargin: 4px 0 0;\r\n\tmargin-top: 1px \\9;\r\n *margin-top: 0;\r\n\tline-height: normal;\r\n}\r\n\r\ninput[type=file], input[type=image], input[type=submit], input[type=reset], input[type=button], input[type=radio], input[type=checkbox] {\r\n\twidth: auto;\r\n}\r\n\r\nselect, input[type=file] {\r\n\theight: 30px;\r\n  /* In IE7, the height of the select element cannot be changed by height, only font-size */\r\n\r\n  *margin-top: 4px;\r\n\t/* For IE7, add top margin to align select with labels */\r\n\r\n  line-height: 30px;\r\n}\r\n\r\nselect {\r\n\twidth: 220px;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #cccccc;\r\n}\r\n\r\nselect[multiple], select[size] {\r\n\theight: auto;\r\n}\r\n\r\nselect:focus, input[type=file]:focus, input[type=radio]:focus, input[type=checkbox]:focus {\r\n\toutline: thin dotted #333;\r\n\toutline: 5px auto -webkit-focus-ring-color;\r\n\toutline-offset: -2px;\r\n}\r\n\r\n.uneditable-input, .uneditable-textarea {\r\n\tcolor: #999999;\r\n\tcursor: not-allowed;\r\n\tbackground-color: #fcfcfc;\r\n\tborder-color: #cccccc;\r\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.025);\r\n}\r\n\r\n.uneditable-input {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.uneditable-textarea {\r\n\twidth: auto;\r\n\theight: auto;\r\n}\r\n\r\ninput:-moz-placeholder, textarea:-moz-placeholder {\r\n color: #999999;\r\n}\r\n\r\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\r\n color: #999999;\r\n}\r\n\r\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\r\n color: #999999;\r\n}\r\n\r\n.radio, .checkbox {\r\n\tmin-height: 20px;\r\n\tpadding-left: 20px;\r\n}\r\n\r\n.radio input[type=radio], .checkbox input[type=checkbox] {\r\n\tfloat: left;\r\n\tmargin-left: -20px;\r\n}\r\n\r\n.controls > .radio:first-child, .controls > .checkbox:first-child {\r\n\tpadding-top: 5px;\r\n}\r\n\r\n.radio.inline, .checkbox.inline {\r\n\tdisplay: inline-block;\r\n\tpadding-top: 5px;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.radio.inline + .radio.inline, .checkbox.inline + .checkbox.inline {\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.input-mini {\r\n\twidth: 60px;\r\n}\r\n\r\n.input-small {\r\n\twidth: 90px;\r\n}\r\n\r\n.input-medium {\r\n\twidth: 150px;\r\n}\r\n\r\n.input-large {\r\n\twidth: 210px;\r\n}\r\n\r\n.input-xlarge {\r\n\twidth: 270px;\r\n}\r\n\r\n.input-xxlarge {\r\n\twidth: 530px;\r\n}\r\n\r\ninput[class*=\"span\"], select[class*=\"span\"], textarea[class*=\"span\"], .uneditable-input[class*=\"span\"], .row-fluid input[class*=\"span\"], .row-fluid select[class*=\"span\"], .row-fluid textarea[class*=\"span\"], .row-fluid .uneditable-input[class*=\"span\"] {\r\n float: none;\r\n margin-left: 0;\r\n}\r\n\r\n.input-append input[class*=\"span\"], .input-append .uneditable-input[class*=\"span\"], .input-prepend input[class*=\"span\"], .input-prepend .uneditable-input[class*=\"span\"], .row-fluid input[class*=\"span\"], .row-fluid select[class*=\"span\"], .row-fluid textarea[class*=\"span\"], .row-fluid .uneditable-input[class*=\"span\"], .row-fluid .input-prepend [class*=\"span\"], .row-fluid .input-append [class*=\"span\"] {\r\n display: inline-block;\r\n}\r\n\r\ninput, textarea, .uneditable-input {\r\n\tmargin-left: 0;\r\n}\r\n\r\n.controls-row [class*=\"span\"] + [class*=\"span\"] {\r\n margin-left: 20px;\r\n}\r\n\r\ninput.span12, textarea.span12, .uneditable-input.span12 {\r\n\twidth: 926px;\r\n}\r\n\r\ninput.span11, textarea.span11, .uneditable-input.span11 {\r\n\twidth: 846px;\r\n}\r\n\r\ninput.span10, textarea.span10, .uneditable-input.span10 {\r\n\twidth: 766px;\r\n}\r\n\r\ninput.span9, textarea.span9, .uneditable-input.span9 {\r\n\twidth: 686px;\r\n}\r\n\r\ninput.span8, textarea.span8, .uneditable-input.span8 {\r\n\twidth: 606px;\r\n}\r\n\r\ninput.span7, textarea.span7, .uneditable-input.span7 {\r\n\twidth: 526px;\r\n}\r\n\r\ninput.span6, textarea.span6, .uneditable-input.span6 {\r\n\twidth: 446px;\r\n}\r\n\r\ninput.span5, textarea.span5, .uneditable-input.span5 {\r\n\twidth: 366px;\r\n}\r\n\r\ninput.span4, textarea.span4, .uneditable-input.span4 {\r\n\twidth: 286px;\r\n}\r\n\r\ninput.span3, textarea.span3, .uneditable-input.span3 {\r\n\twidth: 206px;\r\n}\r\n\r\ninput.span2, textarea.span2, .uneditable-input.span2 {\r\n\twidth: 126px;\r\n}\r\n\r\ninput.span1, textarea.span1, .uneditable-input.span1 {\r\n\twidth: 46px;\r\n}\r\n\r\n.controls-row {\r\n *zoom: 1;\r\n}\r\n\r\n.controls-row:before, .controls-row:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.controls-row:after {\r\n\tclear: both;\r\n}\r\n\r\n.controls-row [class*=\"span\"], .row-fluid .controls-row [class*=\"span\"] {\r\n float: left;\r\n}\r\n\r\n.controls-row .checkbox[class*=\"span\"], .controls-row .radio[class*=\"span\"] {\r\n padding-top: 5px;\r\n}\r\n\r\ninput[disabled], select[disabled], textarea[disabled], input[readonly], select[readonly], textarea[readonly] {\r\n\tcursor: not-allowed;\r\n\tbackground-color: #eeeeee;\r\n}\r\n\r\ninput[type=radio][disabled], input[type=checkbox][disabled], input[type=radio][readonly], input[type=checkbox][readonly] {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.control-group.warning .control-label, .control-group.warning .help-block, .control-group.warning .help-inline {\r\n\tcolor: #c09853;\r\n}\r\n\r\n.control-group.warning .checkbox, .control-group.warning .radio, .control-group.warning input, .control-group.warning select, .control-group.warning textarea {\r\n\tcolor: #c09853;\r\n}\r\n\r\n.control-group.warning input, .control-group.warning select, .control-group.warning textarea {\r\n\tborder-color: #c09853;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.control-group.warning input:focus, .control-group.warning select:focus, .control-group.warning textarea:focus {\r\n\tborder-color: #a47e3c;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #dbc59e;\r\n}\r\n\r\n.control-group.warning .input-prepend .add-on, .control-group.warning .input-append .add-on {\r\n\tcolor: #c09853;\r\n\tbackground-color: #fcf8e3;\r\n\tborder-color: #c09853;\r\n}\r\n\r\n.control-group.error .control-label, .control-group.error .help-block, .control-group.error .help-inline {\r\n\tcolor: #b94a48;\r\n}\r\n\r\n.control-group.error .checkbox, .control-group.error .radio, .control-group.error input, .control-group.error select, .control-group.error textarea {\r\n\tcolor: #b94a48;\r\n}\r\n\r\n.control-group.error input, .control-group.error select, .control-group.error textarea {\r\n\tborder-color: #b94a48;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.control-group.error input:focus, .control-group.error select:focus, .control-group.error textarea:focus {\r\n\tborder-color: #953b39;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n}\r\n\r\n.control-group.error .input-prepend .add-on, .control-group.error .input-append .add-on {\r\n\tcolor: #b94a48;\r\n\tbackground-color: #f2dede;\r\n\tborder-color: #b94a48;\r\n}\r\n\r\n.control-group.success .control-label, .control-group.success .help-block, .control-group.success .help-inline {\r\n\tcolor: #468847;\r\n}\r\n\r\n.control-group.success .checkbox, .control-group.success .radio, .control-group.success input, .control-group.success select, .control-group.success textarea {\r\n\tcolor: #468847;\r\n}\r\n\r\n.control-group.success input, .control-group.success select, .control-group.success textarea {\r\n\tborder-color: #468847;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.control-group.success input:focus, .control-group.success select:focus, .control-group.success textarea:focus {\r\n\tborder-color: #356635;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #7aba7b;\r\n}\r\n\r\n.control-group.success .input-prepend .add-on, .control-group.success .input-append .add-on {\r\n\tcolor: #468847;\r\n\tbackground-color: #dff0d8;\r\n\tborder-color: #468847;\r\n}\r\n\r\n.control-group.info .control-label, .control-group.info .help-block, .control-group.info .help-inline {\r\n\tcolor: #3a87ad;\r\n}\r\n\r\n.control-group.info .checkbox, .control-group.info .radio, .control-group.info input, .control-group.info select, .control-group.info textarea {\r\n\tcolor: #3a87ad;\r\n}\r\n\r\n.control-group.info input, .control-group.info select, .control-group.info textarea {\r\n\tborder-color: #3a87ad;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.control-group.info input:focus, .control-group.info select:focus, .control-group.info textarea:focus {\r\n\tborder-color: #2d6987;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #7ab5d3;\r\n}\r\n\r\n.control-group.info .input-prepend .add-on, .control-group.info .input-append .add-on {\r\n\tcolor: #3a87ad;\r\n\tbackground-color: #d9edf7;\r\n\tborder-color: #3a87ad;\r\n}\r\n\r\ninput:focus:invalid, textarea:focus:invalid, select:focus:invalid {\r\n color: #b94a48;\r\n border-color: #ee5f5b;\r\n}\r\n\r\ninput:focus:invalid:focus, textarea:focus:invalid:focus, select:focus:invalid:focus {\r\n border-color: #e9322d;\r\n box-shadow: 0 0 6px #f8b9b7;\r\n}\r\n\r\n.form-actions {\r\n\tpadding: 19px 20px 20px;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\tbackground-color: #f5f5f5;\r\n\tborder-top: 1px solid #e5e5e5;\r\n *zoom: 1;\r\n}\r\n\r\n.form-actions:before, .form-actions:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.form-actions:after {\r\n\tclear: both;\r\n}\r\n\r\n.help-block, .help-inline {\r\n\tcolor: #595959;\r\n}\r\n\r\n.help-block {\r\n\tdisplay: block;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.help-inline {\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n\tpadding-left: 5px;\r\n\tvertical-align: middle;\r\n *zoom: 1;\r\n}\r\n\r\n.input-append, .input-prepend {\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 10px;\r\n\tfont-size: 0;\r\n\twhite-space: nowrap;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.input-append input, .input-prepend input, .input-append select, .input-prepend select, .input-append .uneditable-input, .input-prepend .uneditable-input, .input-append .dropdown-menu, .input-prepend .dropdown-menu, .input-append .popover, .input-prepend .popover {\r\n\tfont-size: 14px;\r\n}\r\n\r\n.input-append input, .input-prepend input, .input-append select, .input-prepend select, .input-append .uneditable-input, .input-prepend .uneditable-input {\r\n\tposition: relative;\r\n\tmargin-bottom: 0;\r\n *margin-left: 0;\r\n\tvertical-align: top;\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.input-append input:focus, .input-prepend input:focus, .input-append select:focus, .input-prepend select:focus, .input-append .uneditable-input:focus, .input-prepend .uneditable-input:focus {\r\n\tz-index: 2;\r\n}\r\n\r\n.input-append .add-on, .input-prepend .add-on {\r\n\tdisplay: inline-block;\r\n\twidth: auto;\r\n\theight: 20px;\r\n\tmin-width: 16px;\r\n\tpadding: 4px 5px;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tline-height: 20px;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 1px 0 #ffffff;\r\n\tbackground-color: #eeeeee;\r\n\tborder: 1px solid #ccc;\r\n}\r\n\r\n.input-append .add-on, .input-prepend .add-on, .input-append .btn, .input-prepend .btn, .input-append .btn-group > .dropdown-toggle, .input-prepend .btn-group > .dropdown-toggle {\r\n\tvertical-align: top;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.input-append .active, .input-prepend .active {\r\n\tbackground-color: #a9dba9;\r\n\tborder-color: #46a546;\r\n}\r\n\r\n.input-prepend .add-on, .input-prepend .btn {\r\n\tmargin-right: -1px;\r\n}\r\n\r\n.input-prepend .add-on:first-child, .input-prepend .btn:first-child {\r\n\tborder-radius: 4px 0 0 4px;\r\n}\r\n\r\n.input-append input, .input-append select, .input-append .uneditable-input {\r\n\tborder-radius: 4px 0 0 4px;\r\n}\r\n\r\n.input-append input + .btn-group .btn:last-child, .input-append select + .btn-group .btn:last-child, .input-append .uneditable-input + .btn-group .btn:last-child {\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.input-append .add-on, .input-append .btn, .input-append .btn-group {\r\n\tmargin-left: -1px;\r\n}\r\n\r\n.input-append .add-on:last-child, .input-append .btn:last-child, .input-append .btn-group:last-child > .dropdown-toggle {\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.input-prepend.input-append input, .input-prepend.input-append select, .input-prepend.input-append .uneditable-input {\r\n\tborder-radius: 0;\r\n}\r\n\r\n.input-prepend.input-append input + .btn-group .btn, .input-prepend.input-append select + .btn-group .btn, .input-prepend.input-append .uneditable-input + .btn-group .btn {\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.input-prepend.input-append .add-on:first-child, .input-prepend.input-append .btn:first-child {\r\n\tmargin-right: -1px;\r\n\tborder-radius: 4px 0 0 4px;\r\n}\r\n\r\n.input-prepend.input-append .add-on:last-child, .input-prepend.input-append .btn:last-child {\r\n\tmargin-left: -1px;\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.input-prepend.input-append .btn-group:first-child {\r\n\tmargin-left: 0;\r\n}\r\n\r\ninput.search-query {\r\n\tpadding-right: 14px;\r\n\tpadding-right: 4px \\9;\r\n\tpadding-left: 14px;\r\n\tpadding-left: 4px \\9;\r\n\t/* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n\r\n  margin-bottom: 0;\r\n\tborder-radius: 15px;\r\n}\r\n\r\n/* Allow for input prepend/append in search forms */\r\n\r\n.form-search .input-append .search-query, .form-search .input-prepend .search-query {\r\n\tborder-radius: 0;\r\n}\r\n\r\n.form-search .input-append .search-query {\r\n\tborder-radius: 14px 0 0 14px;\r\n}\r\n\r\n.form-search .input-append .btn {\r\n\tborder-radius: 0 14px 14px 0;\r\n}\r\n\r\n.form-search .input-prepend .search-query {\r\n\tborder-radius: 0 14px 14px 0;\r\n}\r\n\r\n.form-search .input-prepend .btn {\r\n\tborder-radius: 14px 0 0 14px;\r\n}\r\n\r\n.form-search input, .form-inline input, .form-horizontal input, .form-search textarea, .form-inline textarea, .form-horizontal textarea, .form-search select, .form-inline select, .form-horizontal select, .form-search .help-inline, .form-inline .help-inline, .form-horizontal .help-inline, .form-search .uneditable-input, .form-inline .uneditable-input, .form-horizontal .uneditable-input, .form-search .input-prepend, .form-inline .input-prepend, .form-horizontal .input-prepend, .form-search .input-append, .form-inline .input-append, .form-horizontal .input-append {\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n *zoom: 1;\r\n}\r\n\r\n.form-search .hide, .form-inline .hide, .form-horizontal .hide {\r\n\tdisplay: none;\r\n}\r\n\r\n.form-search label, .form-inline label, .form-search .btn-group, .form-inline .btn-group {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.form-search .input-append, .form-inline .input-append, .form-search .input-prepend, .form-inline .input-prepend {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.form-search .radio, .form-search .checkbox, .form-inline .radio, .form-inline .checkbox {\r\n\tpadding-left: 0;\r\n\tmargin-bottom: 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.form-search .radio input[type=radio], .form-search .checkbox input[type=checkbox], .form-inline .radio input[type=radio], .form-inline .checkbox input[type=checkbox] {\r\n\tfloat: left;\r\n\tmargin-right: 3px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.control-group {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\nlegend + .control-group {\r\n\tmargin-top: 20px;\r\n\t-webkit-margin-top-collapse: separate;\r\n}\r\n\r\n.form-horizontal .control-group {\r\n\tmargin-bottom: 20px;\r\n *zoom: 1;\r\n}\r\n\r\n.form-horizontal .control-group:before, .form-horizontal .control-group:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.form-horizontal .control-group:after {\r\n\tclear: both;\r\n}\r\n\r\n.form-horizontal .control-label {\r\n\tfloat: left;\r\n\twidth: 160px;\r\n\tpadding-top: 5px;\r\n\ttext-align: right;\r\n}\r\n\r\n.form-horizontal .controls {\r\n *display: inline-block;\r\n *padding-left: 20px;\r\n\tmargin-left: 180px;\r\n *margin-left: 0;\r\n}\r\n\r\n.form-horizontal .controls:first-child {\r\n *padding-left: 180px;\r\n}\r\n\r\n.form-horizontal .help-block {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.form-horizontal input + .help-block, .form-horizontal select + .help-block, .form-horizontal textarea + .help-block, .form-horizontal .uneditable-input + .help-block, .form-horizontal .input-prepend + .help-block, .form-horizontal .input-append + .help-block {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.form-horizontal .form-actions {\r\n\tpadding-left: 180px;\r\n}\r\n\r\ntable {\r\n\tmax-width: 100%;\r\n\tbackground-color: transparent;\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n.table {\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.table th, .table td {\r\n\tpadding: 8px;\r\n\tline-height: 20px;\r\n\ttext-align: left;\r\n\tvertical-align: top;\r\n\tborder-top: 1px solid #dddddd;\r\n}\r\n\r\n.table th {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.table thead th {\r\n\tvertical-align: bottom;\r\n}\r\n\r\n.table caption + thead tr:first-child th, .table caption + thead tr:first-child td, .table colgroup + thead tr:first-child th, .table colgroup + thead tr:first-child td, .table thead:first-child tr:first-child th, .table thead:first-child tr:first-child td {\r\n\tborder-top: 0;\r\n}\r\n\r\n.table tbody + tbody {\r\n\tborder-top: 2px solid #dddddd;\r\n}\r\n\r\n.table .table {\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\n.table-condensed th, .table-condensed td {\r\n\tpadding: 4px 5px;\r\n}\r\n\r\n.table-bordered {\r\n\tborder: 1px solid #dddddd;\r\n\tborder-collapse: separate;\r\n *border-collapse: collapse;\r\n\tborder-left: 0;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.table-bordered th, .table-bordered td {\r\n\tborder-left: 1px solid #dddddd;\r\n}\r\n\r\n.table-bordered caption + thead tr:first-child th, .table-bordered caption + tbody tr:first-child th, .table-bordered caption + tbody tr:first-child td, .table-bordered colgroup + thead tr:first-child th, .table-bordered colgroup + tbody tr:first-child th, .table-bordered colgroup + tbody tr:first-child td, .table-bordered thead:first-child tr:first-child th, .table-bordered tbody:first-child tr:first-child th, .table-bordered tbody:first-child tr:first-child td {\r\n\tborder-top: 0;\r\n}\r\n\r\n.table-bordered thead:first-child tr:first-child > th:first-child, .table-bordered tbody:first-child tr:first-child > td:first-child, .table-bordered tbody:first-child tr:first-child > th:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\t-moz-border-radius-topleft: 4px;\r\n}\r\n\r\n.table-bordered thead:first-child tr:first-child > th:last-child, .table-bordered tbody:first-child tr:first-child > td:last-child, .table-bordered tbody:first-child tr:first-child > th:last-child {\r\n\tborder-top-right-radius: 4px;\r\n\t-moz-border-radius-topright: 4px;\r\n}\r\n\r\n.table-bordered thead:last-child tr:last-child > th:first-child, .table-bordered tbody:last-child tr:last-child > td:first-child, .table-bordered tbody:last-child tr:last-child > th:first-child, .table-bordered tfoot:last-child tr:last-child > td:first-child, .table-bordered tfoot:last-child tr:last-child > th:first-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\t-moz-border-radius-bottomleft: 4px;\r\n}\r\n\r\n.table-bordered thead:last-child tr:last-child > th:last-child, .table-bordered tbody:last-child tr:last-child > td:last-child, .table-bordered tbody:last-child tr:last-child > th:last-child, .table-bordered tfoot:last-child tr:last-child > td:last-child, .table-bordered tfoot:last-child tr:last-child > th:last-child {\r\n\tborder-bottom-right-radius: 4px;\r\n\t-moz-border-radius-bottomright: 4px;\r\n}\r\n\r\n.table-bordered tfoot + tbody:last-child tr:last-child td:first-child {\r\n\tborder-bottom-left-radius: 0;\r\n\t-moz-border-radius-bottomleft: 0;\r\n}\r\n\r\n.table-bordered tfoot + tbody:last-child tr:last-child td:last-child {\r\n\tborder-bottom-right-radius: 0;\r\n\t-moz-border-radius-bottomright: 0;\r\n}\r\n\r\n.table-bordered caption + thead tr:first-child th:first-child, .table-bordered caption + tbody tr:first-child td:first-child, .table-bordered colgroup + thead tr:first-child th:first-child, .table-bordered colgroup + tbody tr:first-child td:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\t-moz-border-radius-topleft: 4px;\r\n}\r\n\r\n.table-bordered caption + thead tr:first-child th:last-child, .table-bordered caption + tbody tr:first-child td:last-child, .table-bordered colgroup + thead tr:first-child th:last-child, .table-bordered colgroup + tbody tr:first-child td:last-child {\r\n\tborder-top-right-radius: 4px;\r\n\t-moz-border-radius-topright: 4px;\r\n}\r\n\r\n.table-striped tbody > tr:nth-child(odd) > td, .table-striped tbody > tr:nth-child(odd) > th {\r\n background-color: #f9f9f9;\r\n}\r\n\r\n.table-hover tbody tr:hover > td, .table-hover tbody tr:hover > th {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\ntable td[class*=\"span\"], table th[class*=\"span\"], .row-fluid table td[class*=\"span\"], .row-fluid table th[class*=\"span\"] {\r\n display: table-cell;\r\n float: none;\r\n margin-left: 0;\r\n}\r\n\r\n.table td.span1, .table th.span1 {\r\n\tfloat: none;\r\n\twidth: 44px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span2, .table th.span2 {\r\n\tfloat: none;\r\n\twidth: 124px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span3, .table th.span3 {\r\n\tfloat: none;\r\n\twidth: 204px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span4, .table th.span4 {\r\n\tfloat: none;\r\n\twidth: 284px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span5, .table th.span5 {\r\n\tfloat: none;\r\n\twidth: 364px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span6, .table th.span6 {\r\n\tfloat: none;\r\n\twidth: 444px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span7, .table th.span7 {\r\n\tfloat: none;\r\n\twidth: 524px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span8, .table th.span8 {\r\n\tfloat: none;\r\n\twidth: 604px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span9, .table th.span9 {\r\n\tfloat: none;\r\n\twidth: 684px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span10, .table th.span10 {\r\n\tfloat: none;\r\n\twidth: 764px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span11, .table th.span11 {\r\n\tfloat: none;\r\n\twidth: 844px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table td.span12, .table th.span12 {\r\n\tfloat: none;\r\n\twidth: 924px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.table tbody tr.success > td {\r\n\tbackground-color: #dff0d8;\r\n}\r\n\r\n.table tbody tr.error > td {\r\n\tbackground-color: #f2dede;\r\n}\r\n\r\n.table tbody tr.warning > td {\r\n\tbackground-color: #fcf8e3;\r\n}\r\n\r\n.table tbody tr.info > td {\r\n\tbackground-color: #d9edf7;\r\n}\r\n\r\n.table-hover tbody tr.success:hover > td {\r\n\tbackground-color: #d0e9c6;\r\n}\r\n\r\n.table-hover tbody tr.error:hover > td {\r\n\tbackground-color: #ebcccc;\r\n}\r\n\r\n.table-hover tbody tr.warning:hover > td {\r\n\tbackground-color: #faf2cc;\r\n}\r\n\r\n.table-hover tbody tr.info:hover > td {\r\n\tbackground-color: #c4e3f3;\r\n}\r\n\r\n/*[class^=\"icon-\"],\r\n[class*=\" icon-\"] {\r\n  display: inline-block;\r\n  width: 14px;\r\n  height: 14px;\r\n  margin-top: 1px;\r\n  *margin-right: .3em;\r\n  line-height: 14px;\r\n  vertical-align: text-top;\r\n  background-image: url(\"../img/glyphicons-halflings.png\");\r\n  background-position: 14px 14px;\r\n  background-repeat: no-repeat;\r\n}*/\r\n\r\n/* White icons with optional class, or on hover/focus/active states of certain elements */\r\n\r\n/*.icon-white,\r\n.nav-pills > .active > a > [class^=\"icon-\"],\r\n.nav-pills > .active > a > [class*=\" icon-\"],\r\n.nav-list > .active > a > [class^=\"icon-\"],\r\n.nav-list > .active > a > [class*=\" icon-\"],\r\n.navbar-inverse .nav > .active > a > [class^=\"icon-\"],\r\n.navbar-inverse .nav > .active > a > [class*=\" icon-\"],\r\n.dropdown-menu > li > a:hover > [class^=\"icon-\"],\r\n.dropdown-menu > li > a:focus > [class^=\"icon-\"],\r\n.dropdown-menu > li > a:hover > [class*=\" icon-\"],\r\n.dropdown-menu > li > a:focus > [class*=\" icon-\"],\r\n.dropdown-menu > .active > a > [class^=\"icon-\"],\r\n.dropdown-menu > .active > a > [class*=\" icon-\"],\r\n.dropdown-submenu:hover > a > [class^=\"icon-\"],\r\n.dropdown-submenu:focus > a > [class^=\"icon-\"],\r\n.dropdown-submenu:hover > a > [class*=\" icon-\"],\r\n.dropdown-submenu:focus > a > [class*=\" icon-\"] {\r\n  background-image: url(\"../img/glyphicons-halflings-white.png\");\r\n}*/\r\n\r\n.icon-glass {\r\n\tbackground-position: 0 0;\r\n}\r\n\r\n.icon-music {\r\n\tbackground-position: -24px 0;\r\n}\r\n\r\n.icon-search {\r\n\tbackground-position: -48px 0;\r\n}\r\n\r\n.icon-envelope {\r\n\tbackground-position: -72px 0;\r\n}\r\n\r\n.icon-heart {\r\n\tbackground-position: -96px 0;\r\n}\r\n\r\n.icon-star {\r\n\tbackground-position: -120px 0;\r\n}\r\n\r\n.icon-star-empty {\r\n\tbackground-position: -144px 0;\r\n}\r\n\r\n.icon-user {\r\n\tbackground-position: -168px 0;\r\n}\r\n\r\n.icon-film {\r\n\tbackground-position: -192px 0;\r\n}\r\n\r\n.icon-th-large {\r\n\tbackground-position: -216px 0;\r\n}\r\n\r\n.icon-th {\r\n\tbackground-position: -240px 0;\r\n}\r\n\r\n.icon-th-list {\r\n\tbackground-position: -264px 0;\r\n}\r\n\r\n.icon-ok {\r\n\tbackground-position: -288px 0;\r\n}\r\n\r\n.icon-remove {\r\n\tbackground-position: -312px 0;\r\n}\r\n\r\n.icon-zoom-in {\r\n\tbackground-position: -336px 0;\r\n}\r\n\r\n.icon-zoom-out {\r\n\tbackground-position: -360px 0;\r\n}\r\n\r\n.icon-off {\r\n\tbackground-position: -384px 0;\r\n}\r\n\r\n.icon-signal {\r\n\tbackground-position: -408px 0;\r\n}\r\n\r\n.icon-cog {\r\n\tbackground-position: -432px 0;\r\n}\r\n\r\n.icon-trash {\r\n\tbackground-position: -456px 0;\r\n}\r\n\r\n.icon-home {\r\n\tbackground-position: 0 -24px;\r\n}\r\n\r\n.icon-file {\r\n\tbackground-position: -24px -24px;\r\n}\r\n\r\n.icon-time {\r\n\tbackground-position: -48px -24px;\r\n}\r\n\r\n.icon-road {\r\n\tbackground-position: -72px -24px;\r\n}\r\n\r\n.icon-download-alt {\r\n\tbackground-position: -96px -24px;\r\n}\r\n\r\n.icon-download {\r\n\tbackground-position: -120px -24px;\r\n}\r\n\r\n.icon-upload {\r\n\tbackground-position: -144px -24px;\r\n}\r\n\r\n.icon-inbox {\r\n\tbackground-position: -168px -24px;\r\n}\r\n\r\n.icon-play-circle {\r\n\tbackground-position: -192px -24px;\r\n}\r\n\r\n.icon-repeat {\r\n\tbackground-position: -216px -24px;\r\n}\r\n\r\n.icon-refresh {\r\n\tbackground-position: -240px -24px;\r\n}\r\n\r\n.icon-list-alt {\r\n\tbackground-position: -264px -24px;\r\n}\r\n\r\n.icon-lock {\r\n\tbackground-position: -287px -24px;\r\n}\r\n\r\n.icon-flag {\r\n\tbackground-position: -312px -24px;\r\n}\r\n\r\n.icon-headphones {\r\n\tbackground-position: -336px -24px;\r\n}\r\n\r\n.icon-volume-off {\r\n\tbackground-position: -360px -24px;\r\n}\r\n\r\n.icon-volume-down {\r\n\tbackground-position: -384px -24px;\r\n}\r\n\r\n.icon-volume-up {\r\n\tbackground-position: -408px -24px;\r\n}\r\n\r\n.icon-qrcode {\r\n\tbackground-position: -432px -24px;\r\n}\r\n\r\n.icon-barcode {\r\n\tbackground-position: -456px -24px;\r\n}\r\n\r\n.icon-tag {\r\n\tbackground-position: 0 -48px;\r\n}\r\n\r\n.icon-tags {\r\n\tbackground-position: -25px -48px;\r\n}\r\n\r\n.icon-book {\r\n\tbackground-position: -48px -48px;\r\n}\r\n\r\n.icon-bookmark {\r\n\tbackground-position: -72px -48px;\r\n}\r\n\r\n.icon-print {\r\n\tbackground-position: -96px -48px;\r\n}\r\n\r\n.icon-camera {\r\n\tbackground-position: -120px -48px;\r\n}\r\n\r\n.icon-font {\r\n\tbackground-position: -144px -48px;\r\n}\r\n\r\n.icon-bold {\r\n\tbackground-position: -167px -48px;\r\n}\r\n\r\n.icon-italic {\r\n\tbackground-position: -192px -48px;\r\n}\r\n\r\n.icon-text-height {\r\n\tbackground-position: -216px -48px;\r\n}\r\n\r\n.icon-text-width {\r\n\tbackground-position: -240px -48px;\r\n}\r\n\r\n.icon-align-left {\r\n\tbackground-position: -264px -48px;\r\n}\r\n\r\n.icon-align-center {\r\n\tbackground-position: -288px -48px;\r\n}\r\n\r\n.icon-align-right {\r\n\tbackground-position: -312px -48px;\r\n}\r\n\r\n.icon-align-justify {\r\n\tbackground-position: -336px -48px;\r\n}\r\n\r\n.icon-list {\r\n\tbackground-position: -360px -48px;\r\n}\r\n\r\n.icon-indent-left {\r\n\tbackground-position: -384px -48px;\r\n}\r\n\r\n.icon-indent-right {\r\n\tbackground-position: -408px -48px;\r\n}\r\n\r\n.icon-facetime-video {\r\n\tbackground-position: -432px -48px;\r\n}\r\n\r\n.icon-picture {\r\n\tbackground-position: -456px -48px;\r\n}\r\n\r\n.icon-pencil {\r\n\tbackground-position: 0 -72px;\r\n}\r\n\r\n.icon-map-marker {\r\n\tbackground-position: -24px -72px;\r\n}\r\n\r\n.icon-adjust {\r\n\tbackground-position: -48px -72px;\r\n}\r\n\r\n.icon-tint {\r\n\tbackground-position: -72px -72px;\r\n}\r\n\r\n.icon-edit {\r\n\tbackground-position: -96px -72px;\r\n}\r\n\r\n.icon-share {\r\n\tbackground-position: -120px -72px;\r\n}\r\n\r\n.icon-check {\r\n\tbackground-position: -144px -72px;\r\n}\r\n\r\n.icon-move {\r\n\tbackground-position: -168px -72px;\r\n}\r\n\r\n.icon-step-backward {\r\n\tbackground-position: -192px -72px;\r\n}\r\n\r\n.icon-fast-backward {\r\n\tbackground-position: -216px -72px;\r\n}\r\n\r\n.icon-backward {\r\n\tbackground-position: -240px -72px;\r\n}\r\n\r\n.icon-play {\r\n\tbackground-position: -264px -72px;\r\n}\r\n\r\n.icon-pause {\r\n\tbackground-position: -288px -72px;\r\n}\r\n\r\n.icon-stop {\r\n\tbackground-position: -312px -72px;\r\n}\r\n\r\n.icon-forward {\r\n\tbackground-position: -336px -72px;\r\n}\r\n\r\n.icon-fast-forward {\r\n\tbackground-position: -360px -72px;\r\n}\r\n\r\n.icon-step-forward {\r\n\tbackground-position: -384px -72px;\r\n}\r\n\r\n.icon-eject {\r\n\tbackground-position: -408px -72px;\r\n}\r\n\r\n.icon-chevron-left {\r\n\tbackground-position: -432px -72px;\r\n}\r\n\r\n.icon-chevron-right {\r\n\tbackground-position: -456px -72px;\r\n}\r\n\r\n.icon-plus-sign {\r\n\tbackground-position: 0 -96px;\r\n}\r\n\r\n.icon-minus-sign {\r\n\tbackground-position: -24px -96px;\r\n}\r\n\r\n.icon-remove-sign {\r\n\tbackground-position: -48px -96px;\r\n}\r\n\r\n.icon-ok-sign {\r\n\tbackground-position: -72px -96px;\r\n}\r\n\r\n.icon-question-sign {\r\n\tbackground-position: -96px -96px;\r\n}\r\n\r\n.icon-info-sign {\r\n\tbackground-position: -120px -96px;\r\n}\r\n\r\n.icon-screenshot {\r\n\tbackground-position: -144px -96px;\r\n}\r\n\r\n.icon-remove-circle {\r\n\tbackground-position: -168px -96px;\r\n}\r\n\r\n.icon-ok-circle {\r\n\tbackground-position: -192px -96px;\r\n}\r\n\r\n.icon-ban-circle {\r\n\tbackground-position: -216px -96px;\r\n}\r\n\r\n.icon-arrow-left {\r\n\tbackground-position: -240px -96px;\r\n}\r\n\r\n.icon-arrow-right {\r\n\tbackground-position: -264px -96px;\r\n}\r\n\r\n.icon-arrow-up {\r\n\tbackground-position: -289px -96px;\r\n}\r\n\r\n.icon-arrow-down {\r\n\tbackground-position: -312px -96px;\r\n}\r\n\r\n.icon-share-alt {\r\n\tbackground-position: -336px -96px;\r\n}\r\n\r\n.icon-resize-full {\r\n\tbackground-position: -360px -96px;\r\n}\r\n\r\n.icon-resize-small {\r\n\tbackground-position: -384px -96px;\r\n}\r\n\r\n.icon-plus {\r\n\tbackground-position: -408px -96px;\r\n}\r\n\r\n.icon-minus {\r\n\tbackground-position: -433px -96px;\r\n}\r\n\r\n.icon-asterisk {\r\n\tbackground-position: -456px -96px;\r\n}\r\n\r\n.icon-exclamation-sign {\r\n\tbackground-position: 0 -120px;\r\n}\r\n\r\n.icon-gift {\r\n\tbackground-position: -24px -120px;\r\n}\r\n\r\n.icon-leaf {\r\n\tbackground-position: -48px -120px;\r\n}\r\n\r\n.icon-fire {\r\n\tbackground-position: -72px -120px;\r\n}\r\n\r\n.icon-eye-open {\r\n\tbackground-position: -96px -120px;\r\n}\r\n\r\n.icon-eye-close {\r\n\tbackground-position: -120px -120px;\r\n}\r\n\r\n.icon-warning-sign {\r\n\tbackground-position: -144px -120px;\r\n}\r\n\r\n.icon-plane {\r\n\tbackground-position: -168px -120px;\r\n}\r\n\r\n.icon-calendar {\r\n\tbackground-position: -192px -120px;\r\n}\r\n\r\n.icon-random {\r\n\twidth: 16px;\r\n\tbackground-position: -216px -120px;\r\n}\r\n\r\n.icon-comment {\r\n\tbackground-position: -240px -120px;\r\n}\r\n\r\n.icon-magnet {\r\n\tbackground-position: -264px -120px;\r\n}\r\n\r\n.icon-chevron-up {\r\n\tbackground-position: -288px -120px;\r\n}\r\n\r\n.icon-chevron-down {\r\n\tbackground-position: -313px -119px;\r\n}\r\n\r\n.icon-retweet {\r\n\tbackground-position: -336px -120px;\r\n}\r\n\r\n.icon-shopping-cart {\r\n\tbackground-position: -360px -120px;\r\n}\r\n\r\n.icon-folder-close {\r\n\twidth: 16px;\r\n\tbackground-position: -384px -120px;\r\n}\r\n\r\n.icon-folder-open {\r\n\twidth: 16px;\r\n\tbackground-position: -408px -120px;\r\n}\r\n\r\n.icon-resize-vertical {\r\n\tbackground-position: -432px -119px;\r\n}\r\n\r\n.icon-resize-horizontal {\r\n\tbackground-position: -456px -118px;\r\n}\r\n\r\n.icon-hdd {\r\n\tbackground-position: 0 -144px;\r\n}\r\n\r\n.icon-bullhorn {\r\n\tbackground-position: -24px -144px;\r\n}\r\n\r\n.icon-bell {\r\n\tbackground-position: -48px -144px;\r\n}\r\n\r\n.icon-certificate {\r\n\tbackground-position: -72px -144px;\r\n}\r\n\r\n.icon-thumbs-up {\r\n\tbackground-position: -96px -144px;\r\n}\r\n\r\n.icon-thumbs-down {\r\n\tbackground-position: -120px -144px;\r\n}\r\n\r\n.icon-hand-right {\r\n\tbackground-position: -144px -144px;\r\n}\r\n\r\n.icon-hand-left {\r\n\tbackground-position: -168px -144px;\r\n}\r\n\r\n.icon-hand-up {\r\n\tbackground-position: -192px -144px;\r\n}\r\n\r\n.icon-hand-down {\r\n\tbackground-position: -216px -144px;\r\n}\r\n\r\n.icon-circle-arrow-right {\r\n\tbackground-position: -240px -144px;\r\n}\r\n\r\n.icon-circle-arrow-left {\r\n\tbackground-position: -264px -144px;\r\n}\r\n\r\n.icon-circle-arrow-up {\r\n\tbackground-position: -288px -144px;\r\n}\r\n\r\n.icon-circle-arrow-down {\r\n\tbackground-position: -312px -144px;\r\n}\r\n\r\n.icon-globe {\r\n\tbackground-position: -336px -144px;\r\n}\r\n\r\n.icon-wrench {\r\n\tbackground-position: -360px -144px;\r\n}\r\n\r\n.icon-tasks {\r\n\tbackground-position: -384px -144px;\r\n}\r\n\r\n.icon-filter {\r\n\tbackground-position: -408px -144px;\r\n}\r\n\r\n.icon-briefcase {\r\n\tbackground-position: -432px -144px;\r\n}\r\n\r\n.icon-fullscreen {\r\n\tbackground-position: -456px -144px;\r\n}\r\n\r\n.dropup, .dropdown {\r\n\tposition: relative;\r\n}\r\n\r\n.dropdown-toggle {\r\n *margin-bottom: -3px;\r\n}\r\n\r\n.dropdown-toggle:active, .open .dropdown-toggle {\r\n\toutline: 0;\r\n}\r\n\r\n.caret {\r\n\tdisplay: inline-block;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tvertical-align: top;\r\n\tborder-top: 4px solid #000000;\r\n\tborder-right: 4px solid transparent;\r\n\tborder-left: 4px solid transparent;\r\n\tcontent: \"\";\r\n}\r\n\r\n.dropdown .caret {\r\n\tmargin-top: 8px;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.dropdown-menu {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\tz-index: 1000;\r\n\tdisplay: none;\r\n\tfloat: left;\r\n\tmin-width: 160px;\r\n\tpadding: 5px 0;\r\n\tmargin: 2px 0 0;\r\n\tlist-style: none;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #ccc;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\r\n *border-right-width: 2px;\r\n *border-bottom-width: 2px;\r\n\tborder-radius: 6px;\r\n\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n\t-webkit-background-clip: padding-box;\r\n\t-moz-background-clip: padding;\r\n\tbackground-clip: padding-box;\r\n}\r\n\r\n.dropdown-menu.pull-right {\r\n\tright: 0;\r\n\tleft: auto;\r\n}\r\n\r\n.dropdown-menu .divider {\r\n *width: 100%;\r\n\theight: 1px;\r\n\tmargin: 9px 1px;\r\n *margin: -5px 0 5px;\r\n\toverflow: hidden;\r\n\tbackground-color: #e5e5e5;\r\n\tborder-bottom: 1px solid #ffffff;\r\n}\r\n\r\n.dropdown-menu > li > a {\r\n\tdisplay: block;\r\n\tpadding: 3px 20px;\r\n\tclear: both;\r\n\tfont-weight: normal;\r\n\tline-height: 20px;\r\n\tcolor: #333333;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-submenu:hover > a, .dropdown-submenu:focus > a {\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\tbackground-color: #0081c2;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #0088cc, #0077b3);\r\n}\r\n\r\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\tbackground-color: #0081c2;\r\n\tbackground-repeat: repeat-x;\r\n\toutline: 0;\r\n\tbackground-image: linear-gradient(to bottom, #0088cc, #0077b3);\r\n}\r\n\r\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\r\n\tcolor: #999999;\r\n}\r\n\r\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\r\n\ttext-decoration: none;\r\n\tcursor: default;\r\n\tbackground-color: transparent;\r\n\tbackground-image: none;\r\n filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n}\r\n\r\n.open {\r\n *z-index: 1000;\r\n}\r\n\r\n.open > .dropdown-menu {\r\n\tdisplay: block;\r\n}\r\n\r\n.pull-right > .dropdown-menu {\r\n\tright: 0;\r\n\tleft: auto;\r\n}\r\n\r\n.dropup .caret, .navbar-fixed-bottom .dropdown .caret {\r\n\tborder-top: 0;\r\n\tborder-bottom: 4px solid #000000;\r\n\tcontent: \"\";\r\n}\r\n\r\n.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu {\r\n\ttop: auto;\r\n\tbottom: 100%;\r\n\tmargin-bottom: 1px;\r\n}\r\n\r\n.dropdown-submenu {\r\n\tposition: relative;\r\n}\r\n\r\n.dropdown-submenu > .dropdown-menu {\r\n\ttop: 0;\r\n\tleft: 100%;\r\n\tmargin-top: -6px;\r\n\tmargin-left: -1px;\r\n\tborder-radius: 0 6px 6px 6px;\r\n}\r\n\r\n.dropdown-submenu:hover > .dropdown-menu {\r\n\tdisplay: block;\r\n}\r\n\r\n.dropup .dropdown-submenu > .dropdown-menu {\r\n\ttop: auto;\r\n\tbottom: 0;\r\n\tmargin-top: 0;\r\n\tmargin-bottom: -2px;\r\n\tborder-radius: 5px 5px 5px 0;\r\n}\r\n\r\n.dropdown-submenu > a:after {\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tmargin-top: 5px;\r\n\tmargin-right: -10px;\r\n\tborder-color: transparent;\r\n\tborder-left-color: #cccccc;\r\n\tborder-style: solid;\r\n\tborder-width: 5px 0 5px 5px;\r\n\tcontent: \" \";\r\n}\r\n\r\n.dropdown-submenu:hover > a:after {\r\n\tborder-left-color: #ffffff;\r\n}\r\n\r\n.dropdown-submenu.pull-left {\r\n\tfloat: none;\r\n}\r\n\r\n.dropdown-submenu.pull-left > .dropdown-menu {\r\n\tleft: -100%;\r\n\tmargin-left: 10px;\r\n\tborder-radius: 6px 0 6px 6px;\r\n}\r\n\r\n.dropdown .dropdown-menu .nav-header {\r\n\tpadding-right: 20px;\r\n\tpadding-left: 20px;\r\n}\r\n\r\n.typeahead {\r\n\tz-index: 1051;\r\n\tmargin-top: 2px;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.well {\r\n\tmin-height: 20px;\r\n\tpadding: 19px;\r\n\tmargin-bottom: 20px;\r\n\tbackground-color: #f5f5f5;\r\n\tborder: 1px solid #e3e3e3;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.well blockquote {\r\n\tborder-color: #ddd;\r\n\tborder-color: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.well-large {\r\n\tpadding: 24px;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.well-small {\r\n\tpadding: 9px;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.fade {\r\n\topacity: 0;\r\n\ttransition: opacity 0.15s linear;\r\n}\r\n\r\n.fade.in {\r\n\topacity: 1;\r\n}\r\n\r\n.collapse {\r\n\tposition: relative;\r\n\theight: 0;\r\n\toverflow: hidden;\r\n\ttransition: height 0.35s ease;\r\n}\r\n\r\n.collapse.in {\r\n\theight: auto;\r\n}\r\n\r\n.close {\r\n\tfloat: right;\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tline-height: 20px;\r\n\tcolor: #000000;\r\n\ttext-shadow: 0 1px 0 #ffffff;\r\n\topacity: 0.2;\r\n\tfilter: alpha(opacity=20);\r\n}\r\n\r\n.close:hover, .close:focus {\r\n\tcolor: #000000;\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n\topacity: 0.4;\r\n\tfilter: alpha(opacity=40);\r\n}\r\n\r\nbutton.close {\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\tbackground: transparent;\r\n\tborder: 0;\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n.btn {\r\n\tdisplay: inline-block;\r\n *border-left: 0 none #e6e6e6;\r\n\tborder-right: 0 none #e6e6e6;\r\n\tborder-top: 0 none #e6e6e6;\r\n\tborder-bottom: 0 none #b3b3b3;\r\n\tdisplay: inline;\r\n\tpadding: 4px 12px;\r\n\tmargin-bottom: 0;\r\n *margin-left: .3em;\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n\tcolor: #333333;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\r\n\tvertical-align: middle;\r\n\tcursor: pointer;\r\n\tbackground-color: #f5f5f5;\r\n *background-color: #e6e6e6;\r\n\tbackground-repeat: repeat-x;\r\n\tborder-radius: 4px;\r\n\tzoom: 1;\r\n\tbox-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n\tbackground-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\r\n\r\n}\r\n\r\n.btn:hover, .btn:focus, .btn:active, .btn.active, .btn.disabled, .btn[disabled] {\r\n\tcolor: #333333;\r\n\tbackground-color: #e6e6e6;\r\n *background-color: #d9d9d9;\r\n}\r\n\r\n.btn:active, .btn.active {\r\n\tbackground-color: #cccccc \\9;\r\n}\r\n\r\n.btn:first-child {\r\n *margin-left: 0;\r\n}\r\n\r\n.btn:hover, .btn:focus {\r\n\tcolor: #333333;\r\n\ttext-decoration: none;\r\n\tbackground-position: 0 -15px;\r\n\ttransition: background-position 0.1s linear;\r\n}\r\n\r\n.btn:focus {\r\n\toutline: thin dotted #333;\r\n\toutline: 5px auto -webkit-focus-ring-color;\r\n\toutline-offset: -2px;\r\n}\r\n\r\n.btn.active, .btn:active {\r\n\tbackground-image: none;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.btn.disabled, .btn[disabled] {\r\n\tcursor: default;\r\n\tbackground-image: none;\r\n\topacity: 0.65;\r\n\tfilter: alpha(opacity=65);\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-large {\r\n\tpadding: 11px 19px;\r\n\tfont-size: 17.5px;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.btn-large [class^=\"icon-\"], .btn-large [class*=\" icon-\"] {\r\n margin-top: 4px;\r\n}\r\n\r\n.btn-small {\r\n\tpadding: 2px 10px;\r\n\tfont-size: 11.9px;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.btn-small [class^=\"icon-\"], .btn-small [class*=\" icon-\"] {\r\n margin-top: 0;\r\n}\r\n\r\n.btn-mini [class^=\"icon-\"], .btn-mini [class*=\" icon-\"] {\r\n margin-top: -1px;\r\n}\r\n\r\n.btn-mini {\r\n\tpadding: 0 6px;\r\n\tfont-size: 10.5px;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.btn-block {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.btn-block + .btn-block {\r\n\tmargin-top: 5px;\r\n}\r\n\r\ninput[type=submit].btn-block, input[type=reset].btn-block, input[type=button].btn-block {\r\n\twidth: 100%;\r\n}\r\n\r\n.btn-primary.active, .btn-warning.active, .btn-danger.active, .btn-success.active, .btn-info.active, .btn-inverse.active {\r\n\tcolor: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\n.btn-primary {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #006dcc;\r\n *background-color: #0044cc;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #0088cc, #0044cc);\r\n\tborder-left-color: #0044cc;\r\n\tborder-right-color: #0044cc;\r\n\tborder-top-color: #0044cc;\r\n\tborder-bottom-color: #002a80;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #0044cc;\r\n *background-color: #003bb3;\r\n}\r\n\r\n.btn-primary:active, .btn-primary.active {\r\n\tbackground-color: #003399 \\9;\r\n}\r\n\r\n.btn-warning {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #faa732;\r\n *background-color: #f89406;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #fbb450, #f89406);\r\n\tborder-left-color: #f89406;\r\n\tborder-right-color: #f89406;\r\n\tborder-top-color: #f89406;\r\n\tborder-bottom-color: #ad6704;\r\n}\r\n\r\n.btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .btn-warning.disabled, .btn-warning[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #f89406;\r\n *background-color: #df8505;\r\n}\r\n\r\n.btn-warning:active, .btn-warning.active {\r\n\tbackground-color: #c67605 \\9;\r\n}\r\n\r\n.btn-danger {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #da4f49;\r\n *background-color: #bd362f;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #ee5f5b, #bd362f);\r\n\tborder-left-color: #bd362f;\r\n\tborder-right-color: #bd362f;\r\n\tborder-top-color: #bd362f;\r\n\tborder-bottom-color: #802420;\r\n}\r\n\r\n.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .btn-danger.disabled, .btn-danger[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #bd362f;\r\n *background-color: #a9302a;\r\n}\r\n\r\n.btn-danger:active, .btn-danger.active {\r\n\tbackground-color: #942a25 \\9;\r\n}\r\n\r\n.btn-success {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #5bb75b;\r\n *background-color: #51a351;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #62c462, #51a351);\r\n\tborder-left-color: #51a351;\r\n\tborder-right-color: #51a351;\r\n\tborder-top-color: #51a351;\r\n\tborder-bottom-color: #387038;\r\n}\r\n\r\n.btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .btn-success.disabled, .btn-success[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #51a351;\r\n *background-color: #499249;\r\n}\r\n\r\n.btn-success:active, .btn-success.active {\r\n\tbackground-color: #408140 \\9;\r\n}\r\n\r\n.btn-info {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #49afcd;\r\n *background-color: #2f96b4;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #5bc0de, #2f96b4);\r\n\tborder-left-color: #2f96b4;\r\n\tborder-right-color: #2f96b4;\r\n\tborder-top-color: #2f96b4;\r\n\tborder-bottom-color: #1f6377;\r\n}\r\n\r\n.btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .btn-info.disabled, .btn-info[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #2f96b4;\r\n *background-color: #2a85a0;\r\n}\r\n\r\n.btn-info:active, .btn-info.active {\r\n\tbackground-color: #24748c \\9;\r\n}\r\n\r\n.btn-inverse {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #363636;\r\n *background-color: #222222;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #444444, #222222);\r\n\tborder-left-color: #222222;\r\n\tborder-right-color: #222222;\r\n\tborder-top-color: #222222;\r\n\tborder-bottom-color: #000000;\r\n}\r\n\r\n.btn-inverse:hover, .btn-inverse:focus, .btn-inverse:active, .btn-inverse.active, .btn-inverse.disabled, .btn-inverse[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #222222;\r\n *background-color: #151515;\r\n}\r\n\r\n.btn-inverse:active, .btn-inverse.active {\r\n\tbackground-color: #080808 \\9;\r\n}\r\n\r\nbutton.btn, input[type=submit].btn {\r\n *padding-top: 3px;\r\n *padding-bottom: 3px;\r\n}\r\n\r\nbutton.btn::-moz-focus-inner, input[type=submit].btn::-moz-focus-inner {\r\n padding: 0;\r\n border: 0;\r\n}\r\n\r\nbutton.btn.btn-large, input[type=submit].btn.btn-large {\r\n *padding-top: 7px;\r\n *padding-bottom: 7px;\r\n}\r\n\r\nbutton.btn.btn-small, input[type=submit].btn.btn-small {\r\n *padding-top: 3px;\r\n *padding-bottom: 3px;\r\n}\r\n\r\nbutton.btn.btn-mini, input[type=submit].btn.btn-mini {\r\n *padding-top: 1px;\r\n *padding-bottom: 1px;\r\n}\r\n\r\n.btn-link, .btn-link:active, .btn-link[disabled] {\r\n\tbackground-color: transparent;\r\n\tbackground-image: none;\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-link {\r\n\tcolor: #0088cc;\r\n\tcursor: pointer;\r\n\tborder-color: transparent;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.btn-link:hover, .btn-link:focus {\r\n\tcolor: #005580;\r\n\ttext-decoration: underline;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.btn-link[disabled]:hover, .btn-link[disabled]:focus {\r\n\tcolor: #333333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.btn-group {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n *margin-left: .3em;\r\n\tfont-size: 0;\r\n\twhite-space: nowrap;\r\n\tvertical-align: middle;\r\n *zoom: 1;\r\n}\r\n\r\n.btn-group:first-child {\r\n *margin-left: 0;\r\n}\r\n\r\n.btn-group + .btn-group {\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.btn-toolbar {\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n\tfont-size: 0;\r\n}\r\n\r\n.btn-toolbar > .btn + .btn, .btn-toolbar > .btn-group + .btn, .btn-toolbar > .btn + .btn-group {\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.btn-group > .btn {\r\n\tposition: relative;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.btn-group > .btn + .btn {\r\n\tmargin-left: -1px;\r\n}\r\n\r\n.btn-group > .btn, .btn-group > .dropdown-menu, .btn-group > .popover {\r\n\tfont-size: 14px;\r\n}\r\n\r\n.btn-group > .btn-mini {\r\n\tfont-size: 10.5px;\r\n}\r\n\r\n.btn-group > .btn-small {\r\n\tfont-size: 11.9px;\r\n}\r\n\r\n.btn-group > .btn-large {\r\n\tfont-size: 17.5px;\r\n}\r\n\r\n.btn-group > .btn:first-child {\r\n\tmargin-left: 0;\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-top-left-radius: 4px;\r\n\t-moz-border-radius-bottomleft: 4px;\r\n\t-moz-border-radius-topleft: 4px;\r\n}\r\n\r\n.btn-group > .btn:last-child, .btn-group > .dropdown-toggle {\r\n\tborder-top-right-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\t-moz-border-radius-topright: 4px;\r\n\t-moz-border-radius-bottomright: 4px;\r\n}\r\n\r\n.btn-group > .btn.large:first-child {\r\n\tmargin-left: 0;\r\n\tborder-bottom-left-radius: 6px;\r\n\tborder-top-left-radius: 6px;\r\n\t-moz-border-radius-bottomleft: 6px;\r\n\t-moz-border-radius-topleft: 6px;\r\n}\r\n\r\n.btn-group > .btn.large:last-child, .btn-group > .large.dropdown-toggle {\r\n\tborder-top-right-radius: 6px;\r\n\tborder-bottom-right-radius: 6px;\r\n\t-moz-border-radius-topright: 6px;\r\n\t-moz-border-radius-bottomright: 6px;\r\n}\r\n\r\n.btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active {\r\n\tz-index: 2;\r\n}\r\n\r\n.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle {\r\n\toutline: 0;\r\n}\r\n\r\n.btn-group > .btn + .dropdown-toggle {\r\n *padding-top: 5px;\r\n\tpadding-right: 8px;\r\n *padding-bottom: 5px;\r\n\tpadding-left: 8px;\r\n\tbox-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.btn-group > .btn-mini + .dropdown-toggle {\r\n *padding-top: 2px;\r\n\tpadding-right: 5px;\r\n *padding-bottom: 2px;\r\n\tpadding-left: 5px;\r\n}\r\n\r\n.btn-group > .btn-small + .dropdown-toggle {\r\n *padding-top: 5px;\r\n *padding-bottom: 4px;\r\n}\r\n\r\n.btn-group > .btn-large + .dropdown-toggle {\r\n *padding-top: 7px;\r\n\tpadding-right: 12px;\r\n *padding-bottom: 7px;\r\n\tpadding-left: 12px;\r\n}\r\n\r\n.btn-group.open .dropdown-toggle {\r\n\tbackground-image: none;\r\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.btn-group.open .btn.dropdown-toggle {\r\n\tbackground-color: #e6e6e6;\r\n}\r\n\r\n.btn-group.open .btn-primary.dropdown-toggle {\r\n\tbackground-color: #0044cc;\r\n}\r\n\r\n.btn-group.open .btn-warning.dropdown-toggle {\r\n\tbackground-color: #f89406;\r\n}\r\n\r\n.btn-group.open .btn-danger.dropdown-toggle {\r\n\tbackground-color: #bd362f;\r\n}\r\n\r\n.btn-group.open .btn-success.dropdown-toggle {\r\n\tbackground-color: #51a351;\r\n}\r\n\r\n.btn-group.open .btn-info.dropdown-toggle {\r\n\tbackground-color: #2f96b4;\r\n}\r\n\r\n.btn-group.open .btn-inverse.dropdown-toggle {\r\n\tbackground-color: #222222;\r\n}\r\n\r\n.btn .caret {\r\n\tmargin-top: 8px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.btn-large .caret {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.btn-large .caret {\r\n\tborder-top-width: 5px;\r\n\tborder-right-width: 5px;\r\n\tborder-left-width: 5px;\r\n}\r\n\r\n.btn-mini .caret, .btn-small .caret {\r\n\tmargin-top: 8px;\r\n}\r\n\r\n.dropup .btn-large .caret {\r\n\tborder-bottom-width: 5px;\r\n}\r\n\r\n.btn-primary .caret, .btn-warning .caret, .btn-danger .caret, .btn-info .caret, .btn-success .caret, .btn-inverse .caret {\r\n\tborder-top-color: #ffffff;\r\n\tborder-bottom-color: #ffffff;\r\n}\r\n\r\n.btn-group-vertical {\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n  /* IE7 inline-block hack */\r\n\r\n  *zoom: 1;\r\n}\r\n\r\n.btn-group-vertical > .btn {\r\n\tdisplay: block;\r\n\tfloat: none;\r\n\tmax-width: 100%;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn + .btn {\r\n\tmargin-top: -1px;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:first-child {\r\n\tborder-radius: 4px 4px 0 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:last-child {\r\n\tborder-radius: 0 0 4px 4px;\r\n}\r\n\r\n.btn-group-vertical > .btn-large:first-child {\r\n\tborder-radius: 6px 6px 0 0;\r\n}\r\n\r\n.btn-group-vertical > .btn-large:last-child {\r\n\tborder-radius: 0 0 6px 6px;\r\n}\r\n\r\n.alert {\r\n\tpadding: 8px 35px 8px 14px;\r\n\tmargin-bottom: 20px;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n\tbackground-color: #fcf8e3;\r\n\tborder: 1px solid #fbeed5;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.alert, .alert h4 {\r\n\tcolor: #c09853;\r\n}\r\n\r\n.alert h4 {\r\n\tmargin: 0;\r\n}\r\n\r\n.alert .close {\r\n\tposition: relative;\r\n\ttop: -2px;\r\n\tright: -21px;\r\n\tline-height: 20px;\r\n}\r\n\r\n.alert-success {\r\n\tcolor: #468847;\r\n\tbackground-color: #dff0d8;\r\n\tborder-color: #d6e9c6;\r\n}\r\n\r\n.alert-success h4 {\r\n\tcolor: #468847;\r\n}\r\n\r\n.alert-danger, .alert-error {\r\n\tcolor: #b94a48;\r\n\tbackground-color: #f2dede;\r\n\tborder-color: #eed3d7;\r\n}\r\n\r\n.alert-danger h4, .alert-error h4 {\r\n\tcolor: #b94a48;\r\n}\r\n\r\n.alert-info {\r\n\tcolor: #3a87ad;\r\n\tbackground-color: #d9edf7;\r\n\tborder-color: #bce8f1;\r\n}\r\n\r\n.alert-info h4 {\r\n\tcolor: #3a87ad;\r\n}\r\n\r\n.alert-block {\r\n\tpadding-top: 14px;\r\n\tpadding-bottom: 14px;\r\n}\r\n\r\n.alert-block > p, .alert-block > ul {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.alert-block p + p {\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.nav {\r\n\tmargin-bottom: 20px;\r\n\tmargin-left: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.nav > li > a {\r\n\tdisplay: block;\r\n}\r\n\r\n.nav > li > a:hover, .nav > li > a:focus {\r\n\ttext-decoration: none;\r\n\tbackground-color: #eeeeee;\r\n}\r\n\r\n.nav > li > a > img {\r\n\tmax-width: none;\r\n}\r\n\r\n.nav > .pull-right {\r\n\tfloat: right;\r\n}\r\n\r\n.nav-header {\r\n\tdisplay: block;\r\n\tpadding: 3px 15px;\r\n\tfont-size: 11px;\r\n\tfont-weight: bold;\r\n\tline-height: 20px;\r\n\tcolor: #999999;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.nav li + .nav-header {\r\n\tmargin-top: 9px;\r\n}\r\n\r\n.nav-list {\r\n\tpadding-right: 15px;\r\n\tpadding-left: 15px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.nav-list > li > a, .nav-list .nav-header {\r\n\tmargin-right: -15px;\r\n\tmargin-left: -15px;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.nav-list > li > a {\r\n\tpadding: 3px 15px;\r\n}\r\n\r\n.nav-list > .active > a, .nav-list > .active > a:hover, .nav-list > .active > a:focus {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\r\n\tbackground-color: #0088cc;\r\n}\r\n\r\n.nav-list [class^=\"icon-\"], .nav-list [class*=\" icon-\"] {\r\n margin-right: 2px;\r\n}\r\n\r\n.nav-list .divider {\r\n *width: 100%;\r\n\theight: 1px;\r\n\tmargin: 9px 1px;\r\n *margin: -5px 0 5px;\r\n\toverflow: hidden;\r\n\tbackground-color: #e5e5e5;\r\n\tborder-bottom: 1px solid #ffffff;\r\n}\r\n\r\n.nav-tabs, .nav-pills {\r\n *zoom: 1;\r\n}\r\n\r\n.nav-tabs:before, .nav-pills:before, .nav-tabs:after, .nav-pills:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.nav-tabs:after, .nav-pills:after {\r\n\tclear: both;\r\n}\r\n\r\n.nav-tabs > li, .nav-pills > li {\r\n\tfloat: left;\r\n}\r\n\r\n.nav-tabs > li > a, .nav-pills > li > a {\r\n\tpadding-right: 12px;\r\n\tpadding-left: 12px;\r\n\tmargin-right: 2px;\r\n\tline-height: 14px;\r\n}\r\n\r\n.nav-tabs {\r\n\tborder-bottom: 1px solid #ddd;\r\n}\r\n\r\n.nav-tabs > li {\r\n\tmargin-bottom: -1px;\r\n}\r\n\r\n.nav-tabs > li > a {\r\n\tpadding-top: 8px;\r\n\tpadding-bottom: 8px;\r\n\tline-height: 20px;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 4px 4px 0 0;\r\n}\r\n\r\n.nav-tabs > li > a:hover, .nav-tabs > li > a:focus {\r\n\tborder-color: #eeeeee #eeeeee #dddddd;\r\n}\r\n\r\n.nav-tabs > .active > a, .nav-tabs > .active > a:hover, .nav-tabs > .active > a:focus {\r\n\tcolor: #555555;\r\n\tcursor: default;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #ddd;\r\n\tborder-bottom-color: transparent;\r\n}\r\n\r\n.nav-pills > li > a {\r\n\tpadding-top: 8px;\r\n\tpadding-bottom: 8px;\r\n\tmargin-top: 2px;\r\n\tmargin-bottom: 2px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.nav-pills > .active > a, .nav-pills > .active > a:hover, .nav-pills > .active > a:focus {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #0088cc;\r\n}\r\n\r\n.nav-stacked > li {\r\n\tfloat: none;\r\n}\r\n\r\n.nav-stacked > li > a {\r\n\tmargin-right: 0;\r\n}\r\n\r\n.nav-tabs.nav-stacked {\r\n\tborder-bottom: 0;\r\n}\r\n\r\n.nav-tabs.nav-stacked > li > a {\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.nav-tabs.nav-stacked > li:first-child > a {\r\n\tborder-top-right-radius: 4px;\r\n\tborder-top-left-radius: 4px;\r\n\t-moz-border-radius-topright: 4px;\r\n\t-moz-border-radius-topleft: 4px;\r\n}\r\n\r\n.nav-tabs.nav-stacked > li:last-child > a {\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom-left-radius: 4px;\r\n\t-moz-border-radius-bottomright: 4px;\r\n\t-moz-border-radius-bottomleft: 4px;\r\n}\r\n\r\n.nav-tabs.nav-stacked > li > a:hover, .nav-tabs.nav-stacked > li > a:focus {\r\n\tz-index: 2;\r\n\tborder-color: #ddd;\r\n}\r\n\r\n.nav-pills.nav-stacked > li > a {\r\n\tmargin-bottom: 3px;\r\n}\r\n\r\n.nav-pills.nav-stacked > li:last-child > a {\r\n\tmargin-bottom: 1px;\r\n}\r\n\r\n.nav-tabs .dropdown-menu {\r\n\tborder-radius: 0 0 6px 6px;\r\n}\r\n\r\n.nav-pills .dropdown-menu {\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.nav .dropdown-toggle .caret {\r\n\tmargin-top: 6px;\r\n\tborder-top-color: #0088cc;\r\n\tborder-bottom-color: #0088cc;\r\n}\r\n\r\n.nav .dropdown-toggle:hover .caret, .nav .dropdown-toggle:focus .caret {\r\n\tborder-top-color: #005580;\r\n\tborder-bottom-color: #005580;\r\n}\r\n\r\n/* move down carets for tabs */\r\n\r\n.nav-tabs .dropdown-toggle .caret {\r\n\tmargin-top: 8px;\r\n}\r\n\r\n.nav .active .dropdown-toggle .caret {\r\n\tborder-top-color: #fff;\r\n\tborder-bottom-color: #fff;\r\n}\r\n\r\n.nav-tabs .active .dropdown-toggle .caret {\r\n\tborder-top-color: #555555;\r\n\tborder-bottom-color: #555555;\r\n}\r\n\r\n.nav > .dropdown.active > a:hover, .nav > .dropdown.active > a:focus {\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-tabs .open .dropdown-toggle, .nav-pills .open .dropdown-toggle, .nav > li.dropdown.open.active > a:hover, .nav > li.dropdown.open.active > a:focus {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #999999;\r\n\tborder-color: #999999;\r\n}\r\n\r\n.nav li.dropdown.open .caret, .nav li.dropdown.open.active .caret, .nav li.dropdown.open a:hover .caret, .nav li.dropdown.open a:focus .caret {\r\n\tborder-top-color: #ffffff;\r\n\tborder-bottom-color: #ffffff;\r\n\topacity: 1;\r\n\tfilter: alpha(opacity=100);\r\n}\r\n\r\n.tabs-stacked .open > a:hover, .tabs-stacked .open > a:focus {\r\n\tborder-color: #999999;\r\n}\r\n\r\n.tabbable {\r\n *zoom: 1;\r\n}\r\n\r\n.tabbable:before, .tabbable:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.tabbable:after {\r\n\tclear: both;\r\n}\r\n\r\n.tab-content {\r\n\toverflow: auto;\r\n}\r\n\r\n.tabs-below > .nav-tabs, .tabs-right > .nav-tabs, .tabs-left > .nav-tabs {\r\n\tborder-bottom: 0;\r\n}\r\n\r\n.tab-content > .tab-pane, .pill-content > .pill-pane {\r\n\tdisplay: none;\r\n}\r\n\r\n.tab-content > .active, .pill-content > .active {\r\n\tdisplay: block;\r\n}\r\n\r\n.tabs-below > .nav-tabs {\r\n\tborder-top: 1px solid #ddd;\r\n}\r\n\r\n.tabs-below > .nav-tabs > li {\r\n\tmargin-top: -1px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.tabs-below > .nav-tabs > li > a {\r\n\tborder-radius: 0 0 4px 4px;\r\n}\r\n\r\n.tabs-below > .nav-tabs > li > a:hover, .tabs-below > .nav-tabs > li > a:focus {\r\n\tborder-top-color: #ddd;\r\n\tborder-bottom-color: transparent;\r\n}\r\n\r\n.tabs-below > .nav-tabs > .active > a, .tabs-below > .nav-tabs > .active > a:hover, .tabs-below > .nav-tabs > .active > a:focus {\r\n\tborder-color: transparent #ddd #ddd #ddd;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li, .tabs-right > .nav-tabs > li {\r\n\tfloat: none;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li > a, .tabs-right > .nav-tabs > li > a {\r\n\tmin-width: 74px;\r\n\tmargin-right: 0;\r\n\tmargin-bottom: 3px;\r\n}\r\n\r\n.tabs-left > .nav-tabs {\r\n\tfloat: left;\r\n\tmargin-right: 19px;\r\n\tborder-right: 1px solid #ddd;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li > a {\r\n\tmargin-right: -1px;\r\n\tborder-radius: 4px 0 0 4px;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li > a:hover, .tabs-left > .nav-tabs > li > a:focus {\r\n\tborder-color: #eeeeee #dddddd #eeeeee #eeeeee;\r\n}\r\n\r\n.tabs-left > .nav-tabs .active > a, .tabs-left > .nav-tabs .active > a:hover, .tabs-left > .nav-tabs .active > a:focus {\r\n\tborder-color: #ddd transparent #ddd #ddd;\r\n *border-right-color: #ffffff;\r\n}\r\n\r\n.tabs-right > .nav-tabs {\r\n\tfloat: right;\r\n\tmargin-left: 19px;\r\n\tborder-left: 1px solid #ddd;\r\n}\r\n\r\n.tabs-right > .nav-tabs > li > a {\r\n\tmargin-left: -1px;\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.tabs-right > .nav-tabs > li > a:hover, .tabs-right > .nav-tabs > li > a:focus {\r\n\tborder-color: #eeeeee #eeeeee #eeeeee #dddddd;\r\n}\r\n\r\n.tabs-right > .nav-tabs .active > a, .tabs-right > .nav-tabs .active > a:hover, .tabs-right > .nav-tabs .active > a:focus {\r\n\tborder-color: #ddd #ddd #ddd transparent;\r\n *border-left-color: #ffffff;\r\n}\r\n\r\n.nav > .disabled > a {\r\n\tcolor: #999999;\r\n}\r\n\r\n.nav > .disabled > a:hover, .nav > .disabled > a:focus {\r\n\ttext-decoration: none;\r\n\tcursor: default;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.navbar {\r\n *position: relative;\r\n *z-index: 2;\r\n\toverflow: visible;\r\n}\r\n\r\n.navbar-inner {\r\n\tmin-height: 40px;\r\n\tpadding-right: 20px;\r\n\tpadding-left: 20px;\r\n\tbackground-color: #fafafa;\r\n\tbackground-repeat: repeat-x;\r\n\tborder: 1px solid #d4d4d4;\r\n\tborder-radius: 4px;\r\n\tzoom: 1;\r\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);\r\n\tbackground-image: linear-gradient(to bottom, #ffffff, #f2f2f2);\r\n\r\n}\r\n\r\n.navbar-inner:before, .navbar-inner:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.navbar-inner:after {\r\n\tclear: both;\r\n}\r\n\r\n.navbar .container {\r\n\twidth: auto;\r\n}\r\n\r\n.nav-collapse.collapse {\r\n\theight: auto;\r\n\toverflow: visible;\r\n}\r\n\r\n.navbar .brand {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tpadding: 10px 20px 10px;\r\n\tmargin-left: -20px;\r\n\tfont-size: 20px;\r\n\tfont-weight: 200;\r\n\tcolor: #777777;\r\n\ttext-shadow: 0 1px 0 #ffffff;\r\n}\r\n\r\n.navbar .brand:hover, .navbar .brand:focus {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.navbar-text {\r\n\tmargin-bottom: 0;\r\n\tline-height: 40px;\r\n\tcolor: #777777;\r\n}\r\n\r\n.navbar-link {\r\n\tcolor: #777777;\r\n}\r\n\r\n.navbar-link:hover, .navbar-link:focus {\r\n\tcolor: #333333;\r\n}\r\n\r\n.navbar .divider-vertical {\r\n\theight: 40px;\r\n\tmargin: 0 9px;\r\n\tborder-right: 1px solid #ffffff;\r\n\tborder-left: 1px solid #f2f2f2;\r\n}\r\n\r\n.navbar .btn, .navbar .btn-group {\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.navbar .btn-group .btn, .navbar .input-prepend .btn, .navbar .input-append .btn, .navbar .input-prepend .btn-group, .navbar .input-append .btn-group {\r\n\tmargin-top: 0;\r\n}\r\n\r\n.navbar-form {\r\n\tmargin-bottom: 0;\r\n *zoom: 1;\r\n}\r\n\r\n.navbar-form:before, .navbar-form:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.navbar-form:after {\r\n\tclear: both;\r\n}\r\n\r\n.navbar-form input, .navbar-form select, .navbar-form .radio, .navbar-form .checkbox {\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.navbar-form input, .navbar-form select, .navbar-form .btn {\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.navbar-form input[type=image], .navbar-form input[type=checkbox], .navbar-form input[type=radio] {\r\n\tmargin-top: 3px;\r\n}\r\n\r\n.navbar-form .input-append, .navbar-form .input-prepend {\r\n\tmargin-top: 5px;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.navbar-form .input-append input, .navbar-form .input-prepend input {\r\n\tmargin-top: 0;\r\n}\r\n\r\n.navbar-search {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.navbar-search .search-query {\r\n\tpadding: 4px 14px;\r\n\tmargin-bottom: 0;\r\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tline-height: 1;\r\n\tborder-radius: 15px;\r\n}\r\n\r\n.navbar-static-top {\r\n\tposition: static;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.navbar-static-top .navbar-inner {\r\n\tborder-radius: 0;\r\n}\r\n\r\n.navbar-fixed-top, .navbar-fixed-bottom {\r\n\tposition: fixed;\r\n\tright: 0;\r\n\tleft: 0;\r\n\tz-index: 1030;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.navbar-fixed-top .navbar-inner, .navbar-static-top .navbar-inner {\r\n\tborder-width: 0 0 1px;\r\n}\r\n\r\n.navbar-fixed-bottom .navbar-inner {\r\n\tborder-width: 1px 0 0;\r\n}\r\n\r\n.navbar-fixed-top .navbar-inner, .navbar-fixed-bottom .navbar-inner {\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.navbar-static-top .container, .navbar-fixed-top .container, .navbar-fixed-bottom .container {\r\n\twidth: 940px;\r\n}\r\n\r\n.navbar-fixed-top {\r\n\ttop: 0;\r\n}\r\n\r\n.navbar-fixed-top .navbar-inner, .navbar-static-top .navbar-inner {\r\n\tbox-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-fixed-bottom {\r\n\tbottom: 0;\r\n}\r\n\r\n.navbar-fixed-bottom .navbar-inner {\r\n\tbox-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar .nav {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tmargin: 0 10px 0 0;\r\n}\r\n\r\n.navbar .nav.pull-right {\r\n\tfloat: right;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.navbar .nav > li {\r\n\tfloat: left;\r\n}\r\n\r\n.navbar .nav > li > a {\r\n\tfloat: none;\r\n\tpadding: 10px 15px 10px;\r\n\tcolor: #777777;\r\n\ttext-decoration: none;\r\n\ttext-shadow: 0 1px 0 #ffffff;\r\n}\r\n\r\n.navbar .nav .dropdown-toggle .caret {\r\n\tmargin-top: 8px;\r\n}\r\n\r\n.navbar .nav > li > a:focus, .navbar .nav > li > a:hover {\r\n\tcolor: #333333;\r\n\ttext-decoration: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.navbar .nav > .active > a, .navbar .nav > .active > a:hover, .navbar .nav > .active > a:focus {\r\n\tcolor: #555555;\r\n\ttext-decoration: none;\r\n\tbackground-color: #e5e5e5;\r\n\tbox-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.navbar .btn-navbar {\r\n\tdisplay: none;\r\n\tfloat: right;\r\n\tpadding: 7px 10px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #ededed;\r\n *background-color: #e5e5e5;\r\n\tbackground-repeat: repeat-x;\r\n\tbox-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.075);\r\n\tbackground-image: linear-gradient(to bottom, #f2f2f2, #e5e5e5);\r\n\tborder-left-color: #e5e5e5;\r\n\tborder-right-color: #e5e5e5;\r\n\tborder-top-color: #e5e5e5;\r\n\tborder-bottom-color: #bfbfbf;\r\n}\r\n\r\n.navbar .btn-navbar:hover, .navbar .btn-navbar:focus, .navbar .btn-navbar:active, .navbar .btn-navbar.active, .navbar .btn-navbar.disabled, .navbar .btn-navbar[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #e5e5e5;\r\n *background-color: #d9d9d9;\r\n}\r\n\r\n.navbar .btn-navbar:active, .navbar .btn-navbar.active {\r\n\tbackground-color: #cccccc \\9;\r\n}\r\n\r\n.navbar .btn-navbar .icon-bar {\r\n\tdisplay: block;\r\n\twidth: 18px;\r\n\theight: 2px;\r\n\tbackground-color: #f5f5f5;\r\n\tborder-radius: 1px;\r\n\tbox-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.btn-navbar .icon-bar + .icon-bar {\r\n\tmargin-top: 3px;\r\n}\r\n\r\n.navbar .nav > li > .dropdown-menu:before {\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: 9px;\r\n\tdisplay: inline-block;\r\n\tborder-right: 7px solid transparent;\r\n\tborder-bottom: 7px solid #ccc;\r\n\tborder-left: 7px solid transparent;\r\n\tborder-bottom-color: rgba(0, 0, 0, 0.2);\r\n\tcontent: '';\r\n}\r\n\r\n.navbar .nav > li > .dropdown-menu:after {\r\n\tposition: absolute;\r\n\ttop: -6px;\r\n\tleft: 10px;\r\n\tdisplay: inline-block;\r\n\tborder-right: 6px solid transparent;\r\n\tborder-bottom: 6px solid #ffffff;\r\n\tborder-left: 6px solid transparent;\r\n\tcontent: '';\r\n}\r\n\r\n.navbar-fixed-bottom .nav > li > .dropdown-menu:before {\r\n\ttop: auto;\r\n\tbottom: -7px;\r\n\tborder-top: 7px solid #ccc;\r\n\tborder-bottom: 0;\r\n\tborder-top-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.navbar-fixed-bottom .nav > li > .dropdown-menu:after {\r\n\ttop: auto;\r\n\tbottom: -6px;\r\n\tborder-top: 6px solid #ffffff;\r\n\tborder-bottom: 0;\r\n}\r\n\r\n.navbar .nav li.dropdown > a:hover .caret, .navbar .nav li.dropdown > a:focus .caret {\r\n\tborder-top-color: #333333;\r\n\tborder-bottom-color: #333333;\r\n}\r\n\r\n.navbar .nav li.dropdown.open > .dropdown-toggle, .navbar .nav li.dropdown.active > .dropdown-toggle, .navbar .nav li.dropdown.open.active > .dropdown-toggle {\r\n\tcolor: #555555;\r\n\tbackground-color: #e5e5e5;\r\n}\r\n\r\n.navbar .nav li.dropdown > .dropdown-toggle .caret {\r\n\tborder-top-color: #777777;\r\n\tborder-bottom-color: #777777;\r\n}\r\n\r\n.navbar .nav li.dropdown.open > .dropdown-toggle .caret, .navbar .nav li.dropdown.active > .dropdown-toggle .caret, .navbar .nav li.dropdown.open.active > .dropdown-toggle .caret {\r\n\tborder-top-color: #555555;\r\n\tborder-bottom-color: #555555;\r\n}\r\n\r\n.navbar .pull-right > li > .dropdown-menu, .navbar .nav > li > .dropdown-menu.pull-right {\r\n\tright: 0;\r\n\tleft: auto;\r\n}\r\n\r\n.navbar .pull-right > li > .dropdown-menu:before, .navbar .nav > li > .dropdown-menu.pull-right:before {\r\n\tright: 12px;\r\n\tleft: auto;\r\n}\r\n\r\n.navbar .pull-right > li > .dropdown-menu:after, .navbar .nav > li > .dropdown-menu.pull-right:after {\r\n\tright: 13px;\r\n\tleft: auto;\r\n}\r\n\r\n.navbar .pull-right > li > .dropdown-menu .dropdown-menu, .navbar .nav > li > .dropdown-menu.pull-right .dropdown-menu {\r\n\tright: 100%;\r\n\tleft: auto;\r\n\tmargin-right: -1px;\r\n\tmargin-left: 0;\r\n\tborder-radius: 6px 0 6px 6px;\r\n}\r\n\r\n.navbar-inverse .navbar-inner {\r\n\tbackground:#EF9E10;\r\n}\r\n\r\n.navbar-inverse .brand, .navbar-inverse .nav > li > a {\r\n\tcolor: #999999;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.navbar-inverse .brand:hover, .navbar-inverse .nav > li > a:hover, .navbar-inverse .brand:focus, .navbar-inverse .nav > li > a:focus {\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.navbar-inverse .brand {\r\n\tcolor: #999999;\r\n}\r\n\r\n.navbar-inverse .navbar-text {\r\n\tcolor: #999999;\r\n}\r\n\r\n.navbar-inverse .nav > li > a:focus, .navbar-inverse .nav > li > a:hover {\r\n\tcolor: #ffffff;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.navbar-inverse .nav .active > a, .navbar-inverse .nav .active > a:hover, .navbar-inverse .nav .active > a:focus {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #111111;\r\n}\r\n\r\n.navbar-inverse .navbar-link {\r\n\tcolor: #999999;\r\n}\r\n\r\n.navbar-inverse .navbar-link:hover, .navbar-inverse .navbar-link:focus {\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.navbar-inverse .divider-vertical {\r\n\tborder-right-color: #222222;\r\n\tborder-left-color: #111111;\r\n}\r\n\r\n.navbar-inverse .nav li.dropdown.open > .dropdown-toggle, .navbar-inverse .nav li.dropdown.active > .dropdown-toggle, .navbar-inverse .nav li.dropdown.open.active > .dropdown-toggle {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #111111;\r\n}\r\n\r\n.navbar-inverse .nav li.dropdown > a:hover .caret, .navbar-inverse .nav li.dropdown > a:focus .caret {\r\n\tborder-top-color: #ffffff;\r\n\tborder-bottom-color: #ffffff;\r\n}\r\n\r\n.navbar-inverse .nav li.dropdown > .dropdown-toggle .caret {\r\n\tborder-top-color: #999999;\r\n\tborder-bottom-color: #999999;\r\n}\r\n\r\n.navbar-inverse .nav li.dropdown.open > .dropdown-toggle .caret, .navbar-inverse .nav li.dropdown.active > .dropdown-toggle .caret, .navbar-inverse .nav li.dropdown.open.active > .dropdown-toggle .caret {\r\n\tborder-top-color: #ffffff;\r\n\tborder-bottom-color: #ffffff;\r\n}\r\n\r\n.navbar-inverse .navbar-search .search-query {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #515151;\r\n\tborder-color: #111111;\r\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.15);\r\n\ttransition: none;\r\n}\r\n\r\n.navbar-inverse .navbar-search .search-query:-moz-placeholder {\r\n color: #cccccc;\r\n}\r\n\r\n.navbar-inverse .navbar-search .search-query:-ms-input-placeholder {\r\n color: #cccccc;\r\n}\r\n\r\n.navbar-inverse .navbar-search .search-query::-webkit-input-placeholder {\r\n color: #cccccc;\r\n}\r\n\r\n.navbar-inverse .navbar-search .search-query:focus, .navbar-inverse .navbar-search .search-query.focused {\r\n\tpadding: 5px 15px;\r\n\tcolor: #333333;\r\n\ttext-shadow: 0 1px 0 #ffffff;\r\n\tbackground-color: #ffffff;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tbox-shadow: 0 0 3px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.navbar-inverse .btn-navbar {\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #0e0e0e;\r\n *background-color: #040404;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #151515, #040404);\r\n\tborder-left-color: #040404;\r\n\tborder-right-color: #040404;\r\n\tborder-top-color: #040404;\r\n\tborder-bottom-color: #000000;\r\n}\r\n\r\n.navbar-inverse .btn-navbar:hover, .navbar-inverse .btn-navbar:focus, .navbar-inverse .btn-navbar:active, .navbar-inverse .btn-navbar.active, .navbar-inverse .btn-navbar.disabled, .navbar-inverse .btn-navbar[disabled] {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #040404;\r\n *background-color: #000000;\r\n}\r\n\r\n.navbar-inverse .btn-navbar:active, .navbar-inverse .btn-navbar.active {\r\n\tbackground-color: #000000 \\9;\r\n}\r\n\r\n.breadcrumb {\r\n\tpadding: 8px 15px;\r\n\tmargin: 0 0 20px;\r\n\tlist-style: none;\r\n\tbackground-color: #f5f5f5;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.breadcrumb > li {\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n\ttext-shadow: 0 1px 0 #ffffff;\r\n *zoom: 1;\r\n}\r\n\r\n.breadcrumb > li > .divider {\r\n\tpadding: 0 5px;\r\n\tcolor: #ccc;\r\n}\r\n\r\n.breadcrumb > .active {\r\n\tcolor: #999999;\r\n}\r\n\r\n.pagination {\r\n\tmargin: 20px 0;\r\n}\r\n\r\n.pagination ul {\r\n\tdisplay: inline-block;\r\n *display: inline;\r\n\tmargin-bottom: 0;\r\n\tmargin-left: 0;\r\n\tborder-radius: 4px;\r\n *zoom: 1;\r\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.pagination ul > li {\r\n\tdisplay: inline;\r\n}\r\n\r\n.pagination ul > li > a, .pagination ul > li > span {\r\n\tfloat: left;\r\n\tpadding: 4px 12px;\r\n\tline-height: 20px;\r\n\ttext-decoration: none;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #dddddd;\r\n\tborder-left-width: 0;\r\n}\r\n\r\n.pagination ul > li > a:hover, .pagination ul > li > a:focus, .pagination ul > .active > a, .pagination ul > .active > span {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.pagination ul > .active > a, .pagination ul > .active > span {\r\n\tcolor: #999999;\r\n\tcursor: default;\r\n}\r\n\r\n.pagination ul > .disabled > span, .pagination ul > .disabled > a, .pagination ul > .disabled > a:hover, .pagination ul > .disabled > a:focus {\r\n\tcolor: #999999;\r\n\tcursor: default;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.pagination ul > li:first-child > a, .pagination ul > li:first-child > span {\r\n\tborder-left-width: 1px;\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-top-left-radius: 4px;\r\n\t-moz-border-radius-bottomleft: 4px;\r\n\t-moz-border-radius-topleft: 4px;\r\n}\r\n\r\n.pagination ul > li:last-child > a, .pagination ul > li:last-child > span {\r\n\tborder-top-right-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\t-moz-border-radius-topright: 4px;\r\n\t-moz-border-radius-bottomright: 4px;\r\n}\r\n\r\n.pagination-centered {\r\n\ttext-align: center;\r\n}\r\n\r\n.pagination-right {\r\n\ttext-align: right;\r\n}\r\n\r\n.pagination-large ul > li > a, .pagination-large ul > li > span {\r\n\tpadding: 11px 19px;\r\n\tfont-size: 17.5px;\r\n}\r\n\r\n.pagination-large ul > li:first-child > a, .pagination-large ul > li:first-child > span {\r\n\tborder-bottom-left-radius: 6px;\r\n\tborder-top-left-radius: 6px;\r\n\t-moz-border-radius-bottomleft: 6px;\r\n\t-moz-border-radius-topleft: 6px;\r\n}\r\n\r\n.pagination-large ul > li:last-child > a, .pagination-large ul > li:last-child > span {\r\n\tborder-top-right-radius: 6px;\r\n\tborder-bottom-right-radius: 6px;\r\n\t-moz-border-radius-topright: 6px;\r\n\t-moz-border-radius-bottomright: 6px;\r\n}\r\n\r\n.pagination-mini ul > li:first-child > a, .pagination-small ul > li:first-child > a, .pagination-mini ul > li:first-child > span, .pagination-small ul > li:first-child > span {\r\n\tborder-bottom-left-radius: 3px;\r\n\tborder-top-left-radius: 3px;\r\n\t-moz-border-radius-bottomleft: 3px;\r\n\t-moz-border-radius-topleft: 3px;\r\n}\r\n\r\n.pagination-mini ul > li:last-child > a, .pagination-small ul > li:last-child > a, .pagination-mini ul > li:last-child > span, .pagination-small ul > li:last-child > span {\r\n\tborder-top-right-radius: 3px;\r\n\tborder-bottom-right-radius: 3px;\r\n\t-moz-border-radius-topright: 3px;\r\n\t-moz-border-radius-bottomright: 3px;\r\n}\r\n\r\n.pagination-small ul > li > a, .pagination-small ul > li > span {\r\n\tpadding: 2px 10px;\r\n\tfont-size: 11.9px;\r\n}\r\n\r\n.pagination-mini ul > li > a, .pagination-mini ul > li > span {\r\n\tpadding: 0 6px;\r\n\tfont-size: 10.5px;\r\n}\r\n\r\n.pager {\r\n\tmargin: 20px 0;\r\n\ttext-align: center;\r\n\tlist-style: none;\r\n *zoom: 1;\r\n}\r\n\r\n.pager:before, .pager:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.pager:after {\r\n\tclear: both;\r\n}\r\n\r\n.pager li {\r\n\tdisplay: inline;\r\n}\r\n\r\n.pager li > a, .pager li > span {\r\n\tdisplay: inline-block;\r\n\tpadding: 5px 14px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 15px;\r\n}\r\n\r\n.pager li > a:hover, .pager li > a:focus {\r\n\ttext-decoration: none;\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.pager .next > a, .pager .next > span {\r\n\tfloat: right;\r\n}\r\n\r\n.pager .previous > a, .pager .previous > span {\r\n\tfloat: left;\r\n}\r\n\r\n.pager .disabled > a, .pager .disabled > a:hover, .pager .disabled > a:focus, .pager .disabled > span {\r\n\tcolor: #999999;\r\n\tcursor: default;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.modal-backdrop {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tz-index: 1040;\r\n\tbackground-color: #000000;\r\n}\r\n\r\n.modal-backdrop.fade {\r\n\topacity: 0;\r\n}\r\n\r\n.modal-backdrop, .modal-backdrop.fade.in {\r\n\topacity: 0.8;\r\n\tfilter: alpha(opacity=80);\r\n}\r\n\r\n.modal {\r\n\tposition: fixed;\r\n\ttop: 10%;\r\n\tleft: 50%;\r\n\tz-index: 1050;\r\n\twidth: 560px;\r\n\tmargin-left: -280px;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #999;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.3);\r\n *border: 1px solid #999;\r\n\tborder-radius: 6px;\r\n\toutline: none;\r\n\tbox-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n\t-webkit-background-clip: padding-box;\r\n\t-moz-background-clip: padding-box;\r\n\tbackground-clip: padding-box;\r\n}\r\n\r\n.modal.fade {\r\n\ttop: -25%;\r\n\ttransition: opacity 0.3s linear, top 0.3s ease-out;\r\n}\r\n\r\n.modal.fade.in {\r\n\ttop: 10%;\r\n}\r\n\r\n.modal-header {\r\n\tpadding: 9px 15px;\r\n\tborder-bottom: 1px solid #eee;\r\n}\r\n\r\n.modal-header .close {\r\n\tmargin-top: 2px;\r\n}\r\n\r\n.modal-header h3 {\r\n\tmargin: 0;\r\n\tline-height: 30px;\r\n}\r\n\r\n.modal-body {\r\n\tposition: relative;\r\n\tmax-height: 400px;\r\n\tpadding: 15px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.modal-form {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.modal-footer {\r\n\tpadding: 14px 15px 15px;\r\n\tmargin-bottom: 0;\r\n\ttext-align: right;\r\n\tbackground-color: #f5f5f5;\r\n\tborder-top: 1px solid #ddd;\r\n\tborder-radius: 0 0 6px 6px;\r\n *zoom: 1;\r\n\tbox-shadow: inset 0 1px 0 #ffffff;\r\n}\r\n\r\n.modal-footer:before, .modal-footer:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.modal-footer:after {\r\n\tclear: both;\r\n}\r\n\r\n.modal-footer .btn + .btn {\r\n\tmargin-bottom: 0;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.modal-footer .btn-group .btn + .btn {\r\n\tmargin-left: -1px;\r\n}\r\n\r\n.modal-footer .btn-block + .btn-block {\r\n\tmargin-left: 0;\r\n}\r\n\r\n.tooltip {\r\n\tposition: absolute;\r\n\tz-index: 1030;\r\n\tdisplay: block;\r\n\tfont-size: 11px;\r\n\tline-height: 1.4;\r\n\topacity: 0;\r\n\tfilter: alpha(opacity=0);\r\n\tvisibility: visible;\r\n}\r\n\r\n.tooltip.in {\r\n\topacity: 0.8;\r\n\tfilter: alpha(opacity=80);\r\n}\r\n\r\n.tooltip.top {\r\n\tpadding: 5px 0;\r\n\tmargin-top: -3px;\r\n}\r\n\r\n.tooltip.right {\r\n\tpadding: 0 5px;\r\n\tmargin-left: 3px;\r\n}\r\n\r\n.tooltip.bottom {\r\n\tpadding: 5px 0;\r\n\tmargin-top: 3px;\r\n}\r\n\r\n.tooltip.left {\r\n\tpadding: 0 5px;\r\n\tmargin-left: -3px;\r\n}\r\n\r\n.tooltip-inner {\r\n\tmax-width: 200px;\r\n\tpadding: 8px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tbackground-color: #000000;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.tooltip-arrow {\r\n\tposition: absolute;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-color: transparent;\r\n\tborder-style: solid;\r\n}\r\n\r\n.tooltip.top .tooltip-arrow {\r\n\tbottom: 0;\r\n\tleft: 50%;\r\n\tmargin-left: -5px;\r\n\tborder-top-color: #000000;\r\n\tborder-width: 5px 5px 0;\r\n}\r\n\r\n.tooltip.right .tooltip-arrow {\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\tmargin-top: -5px;\r\n\tborder-right-color: #000000;\r\n\tborder-width: 5px 5px 5px 0;\r\n}\r\n\r\n.tooltip.left .tooltip-arrow {\r\n\ttop: 50%;\r\n\tright: 0;\r\n\tmargin-top: -5px;\r\n\tborder-left-color: #000000;\r\n\tborder-width: 5px 0 5px 5px;\r\n}\r\n\r\n.tooltip.bottom .tooltip-arrow {\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\tmargin-left: -5px;\r\n\tborder-bottom-color: #000000;\r\n\tborder-width: 0 5px 5px;\r\n}\r\n\r\n.popover {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1010;\r\n\tdisplay: none;\r\n\tmax-width: 276px;\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\twhite-space: normal;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #ccc;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\r\n\tborder-radius: 6px;\r\n\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n\t-webkit-background-clip: padding-box;\r\n\t-moz-background-clip: padding;\r\n\tbackground-clip: padding-box;\r\n}\r\n\r\n.popover.top {\r\n\tmargin-top: -10px;\r\n}\r\n\r\n.popover.right {\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.popover.bottom {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.popover.left {\r\n\tmargin-left: -10px;\r\n}\r\n\r\n.popover-title {\r\n\tpadding: 8px 14px;\r\n\tmargin: 0;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tline-height: 18px;\r\n\tbackground-color: #f7f7f7;\r\n\tborder-bottom: 1px solid #ebebeb;\r\n\tborder-radius: 5px 5px 0 0;\r\n}\r\n\r\n.popover-title:empty {\r\n\tdisplay: none;\r\n}\r\n\r\n.popover-content {\r\n\tpadding: 9px 14px;\r\n}\r\n\r\n.popover .arrow, .popover .arrow:after {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-color: transparent;\r\n\tborder-style: solid;\r\n}\r\n\r\n.popover .arrow {\r\n\tborder-width: 11px;\r\n}\r\n\r\n.popover .arrow:after {\r\n\tborder-width: 10px;\r\n\tcontent: \"\";\r\n}\r\n\r\n.popover.top .arrow {\r\n\tbottom: -11px;\r\n\tleft: 50%;\r\n\tmargin-left: -11px;\r\n\tborder-top-color: #999;\r\n\tborder-top-color: rgba(0, 0, 0, 0.25);\r\n\tborder-bottom-width: 0;\r\n}\r\n\r\n.popover.top .arrow:after {\r\n\tbottom: 1px;\r\n\tmargin-left: -10px;\r\n\tborder-top-color: #ffffff;\r\n\tborder-bottom-width: 0;\r\n}\r\n\r\n.popover.right .arrow {\r\n\ttop: 50%;\r\n\tleft: -11px;\r\n\tmargin-top: -11px;\r\n\tborder-right-color: #999;\r\n\tborder-right-color: rgba(0, 0, 0, 0.25);\r\n\tborder-left-width: 0;\r\n}\r\n\r\n.popover.right .arrow:after {\r\n\tbottom: -10px;\r\n\tleft: 1px;\r\n\tborder-right-color: #ffffff;\r\n\tborder-left-width: 0;\r\n}\r\n\r\n.popover.bottom .arrow {\r\n\ttop: -11px;\r\n\tleft: 50%;\r\n\tmargin-left: -11px;\r\n\tborder-bottom-color: #999;\r\n\tborder-bottom-color: rgba(0, 0, 0, 0.25);\r\n\tborder-top-width: 0;\r\n}\r\n\r\n.popover.bottom .arrow:after {\r\n\ttop: 1px;\r\n\tmargin-left: -10px;\r\n\tborder-bottom-color: #ffffff;\r\n\tborder-top-width: 0;\r\n}\r\n\r\n.popover.left .arrow {\r\n\ttop: 50%;\r\n\tright: -11px;\r\n\tmargin-top: -11px;\r\n\tborder-left-color: #999;\r\n\tborder-left-color: rgba(0, 0, 0, 0.25);\r\n\tborder-right-width: 0;\r\n}\r\n\r\n.popover.left .arrow:after {\r\n\tright: 1px;\r\n\tbottom: -10px;\r\n\tborder-left-color: #ffffff;\r\n\tborder-right-width: 0;\r\n}\r\n\r\n.thumbnails {\r\n\tmargin-left: -20px;\r\n\tlist-style: none;\r\n *zoom: 1;\r\n}\r\n\r\n.thumbnails:before, .thumbnails:after {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\";\r\n}\r\n\r\n.thumbnails:after {\r\n\tclear: both;\r\n}\r\n\r\n.row-fluid .thumbnails {\r\n\tmargin-left: 0;\r\n}\r\n\r\n.thumbnails > li {\r\n\tfloat: left;\r\n\tmargin-bottom: 20px;\r\n\tmargin-left: 20px;\r\n}\r\n\r\n.thumbnail {\r\n\tdisplay: block;\r\n\tpadding: 4px;\r\n\tline-height: 20px;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n\r\na.thumbnail:hover, a.thumbnail:focus {\r\n\tborder-color: #0088cc;\r\n\tbox-shadow: 0 1px 4px rgba(0, 105, 214, 0.25);\r\n}\r\n\r\n.thumbnail > img {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n\tmargin-right: auto;\r\n\tmargin-left: auto;\r\n}\r\n\r\n.thumbnail .caption {\r\n\tpadding: 9px;\r\n\tcolor: #555555;\r\n}\r\n\r\n.media, .media-body {\r\n\toverflow: hidden;\r\n *overflow: visible;\r\n\tzoom: 1;\r\n}\r\n\r\n.media, .media .media {\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.media:first-child {\r\n\tmargin-top: 0;\r\n}\r\n\r\n.media-object {\r\n\tdisplay: block;\r\n}\r\n\r\n.media-heading {\r\n\tmargin: 0 0 5px;\r\n}\r\n\r\n.media > .pull-left {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.media > .pull-right {\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.media-list {\r\n\tmargin-left: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.label, .badge {\r\n\tdisplay: inline-block;\r\n\tpadding: 2px 4px;\r\n\tfont-size: 11.844px;\r\n\tfont-weight: bold;\r\n\tline-height: 14px;\r\n\tcolor: #ffffff;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\twhite-space: nowrap;\r\n\tvertical-align: baseline;\r\n\tbackground-color: #999999;\r\n}\r\n\r\n.label {\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.badge {\r\n\tpadding-right: 9px;\r\n\tpadding-left: 9px;\r\n\tborder-radius: 9px;\r\n}\r\n\r\n.label:empty, .badge:empty {\r\n\tdisplay: none;\r\n}\r\n\r\na.label:hover, a.label:focus, a.badge:hover, a.badge:focus {\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.label-important, .badge-important {\r\n\tbackground-color: #b94a48;\r\n}\r\n\r\n.label-important[href], .badge-important[href] {\r\n\tbackground-color: #953b39;\r\n}\r\n\r\n.label-warning, .badge-warning {\r\n\tbackground-color: #f89406;\r\n}\r\n\r\n.label-warning[href], .badge-warning[href] {\r\n\tbackground-color: #c67605;\r\n}\r\n\r\n.label-success, .badge-success {\r\n\tbackground-color: #468847;\r\n}\r\n\r\n.label-success[href], .badge-success[href] {\r\n\tbackground-color: #356635;\r\n}\r\n\r\n.label-info, .badge-info {\r\n\tbackground-color: #3a87ad;\r\n}\r\n\r\n.label-info[href], .badge-info[href] {\r\n\tbackground-color: #2d6987;\r\n}\r\n\r\n.label-inverse, .badge-inverse {\r\n\tbackground-color: #333333;\r\n}\r\n\r\n.label-inverse[href], .badge-inverse[href] {\r\n\tbackground-color: #1a1a1a;\r\n}\r\n\r\n.btn .label, .btn .badge {\r\n\tposition: relative;\r\n\ttop: -1px;\r\n}\r\n\r\n.btn-mini .label, .btn-mini .badge {\r\n\ttop: 0;\r\n}\r\n\r\n@-webkit-keyframes progress-bar-stripes {\r\n from {\r\n background-position: 40px 0;\r\n}\r\nto {\r\n\tbackground-position: 0 0;\r\n}\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n from {\r\n background-position: 40px 0;\r\n}\r\nto {\r\n\tbackground-position: 0 0;\r\n}\r\n}\r\n\r\n.progress {\r\n\theight: 20px;\r\n\tmargin-bottom: 20px;\r\n\toverflow: hidden;\r\n\tbackground-color: #f7f7f7;\r\n\tbackground-repeat: repeat-x;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r\n\tbackground-image: linear-gradient(to bottom, #f5f5f5, #f9f9f9);\r\n}\r\n\r\n.progress .bar {\r\n\tfloat: left;\r\n\twidth: 0;\r\n\theight: 100%;\r\n\tfont-size: 12px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n\tbackground-color: #0e90d2;\r\n\tbackground-repeat: repeat-x;\r\n\tbox-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n\tbox-sizing: border-box;\r\n\ttransition: width 0.6s ease;\r\n\tbackground-image: linear-gradient(to bottom, #149bdf, #0480be);\r\n}\r\n\r\n.progress .bar + .bar {\r\n\tbox-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.progress-striped .bar {\r\n\tbackground-color: #149bdf;\r\n\tbackground-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n\tbackground-size: 40px 40px;\r\n}\r\n\r\n.progress.active .bar {\r\n\t-webkit-animation: progress-bar-stripes 2s linear infinite;\r\n\tanimation: progress-bar-stripes 2s linear infinite;\r\n}\r\n\r\n.progress-danger .bar, .progress .bar-danger {\r\n\tbackground-color: #dd514c;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #ee5f5b, #c43c35);\r\n}\r\n\r\n.progress-danger.progress-striped .bar, .progress-striped .bar-danger {\r\n\tbackground-color: #ee5f5b;\r\n\tbackground-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n.progress-success .bar, .progress .bar-success {\r\n\tbackground-color: #5eb95e;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #62c462, #57a957);\r\n}\r\n\r\n.progress-success.progress-striped .bar, .progress-striped .bar-success {\r\n\tbackground-color: #62c462;\r\n\tbackground-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n.progress-info .bar, .progress .bar-info {\r\n\tbackground-color: #4bb1cf;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #5bc0de, #339bb9);\r\n}\r\n\r\n.progress-info.progress-striped .bar, .progress-striped .bar-info {\r\n\tbackground-color: #5bc0de;\r\n\tbackground-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n.progress-warning .bar, .progress .bar-warning {\r\n\tbackground-color: #faa732;\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-image: linear-gradient(to bottom, #fbb450, #f89406);\r\n}\r\n\r\n.progress-warning.progress-striped .bar, .progress-striped .bar-warning {\r\n\tbackground-color: #fbb450;\r\n\tbackground-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n.accordion {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.accordion-group {\r\n\tmargin-bottom: 2px;\r\n\tborder: 1px solid #e5e5e5;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.accordion-heading {\r\n\tborder-bottom: 0;\r\n}\r\n\r\n.accordion-heading .accordion-toggle {\r\n\tdisplay: block;\r\n\tpadding: 8px 15px;\r\n}\r\n\r\n.accordion-toggle {\r\n\tcursor: pointer;\r\n}\r\n\r\n.accordion-inner {\r\n\tpadding: 9px 15px;\r\n\tborder-top: 1px solid #e5e5e5;\r\n}\r\n\r\n.carousel {\r\n\tposition: relative;\r\n\tmargin-bottom: 20px;\r\n\tline-height: 1;\r\n}\r\n\r\n.carousel-inner {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.carousel-inner > .item {\r\n\tposition: relative;\r\n\tdisplay: none;\r\n\ttransition: 0.6s ease-in-out left;\r\n}\r\n\r\n.carousel-inner > .item > img, .carousel-inner > .item > a > img {\r\n\tdisplay: block;\r\n\tline-height: 1;\r\n}\r\n\r\n.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev {\r\n\tdisplay: block;\r\n}\r\n\r\n.carousel-inner > .active {\r\n\tleft: 0;\r\n}\r\n\r\n.carousel-inner > .next, .carousel-inner > .prev {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n}\r\n\r\n.carousel-inner > .next {\r\n\tleft: 100%;\r\n}\r\n\r\n.carousel-inner > .prev {\r\n\tleft: -100%;\r\n}\r\n\r\n.carousel-inner > .next.left, .carousel-inner > .prev.right {\r\n\tleft: 0;\r\n}\r\n\r\n.carousel-inner > .active.left {\r\n\tleft: -100%;\r\n}\r\n\r\n.carousel-inner > .active.right {\r\n\tleft: 100%;\r\n}\r\n\r\n.carousel-control {\r\n\tposition: absolute;\r\n\ttop: 40%;\r\n\tleft: 15px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tmargin-top: -20px;\r\n\tfont-size: 60px;\r\n\tfont-weight: 100;\r\n\tline-height: 30px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tbackground: #222222;\r\n\tborder: 3px solid #ffffff;\r\n\tborder-radius: 23px;\r\n\topacity: 0.5;\r\n\tfilter: alpha(opacity=50);\r\n}\r\n\r\n.carousel-control.right {\r\n\tright: 15px;\r\n\tleft: auto;\r\n}\r\n\r\n.carousel-control:hover, .carousel-control:focus {\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\topacity: 0.9;\r\n\tfilter: alpha(opacity=90);\r\n}\r\n\r\n.carousel-indicators {\r\n\tposition: absolute;\r\n\ttop: 15px;\r\n\tright: 15px;\r\n\tz-index: 5;\r\n\tmargin: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.carousel-indicators li {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin-left: 5px;\r\n\ttext-indent: -999px;\r\n\tbackground-color: #ccc;\r\n\tbackground-color: rgba(255, 255, 255, 0.25);\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.carousel-indicators .active {\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.carousel-caption {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tpadding: 15px;\r\n\tbackground: #333333;\r\n\tbackground: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.carousel-caption h4, .carousel-caption p {\r\n\tline-height: 20px;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.carousel-caption h4 {\r\n\tmargin: 0 0 5px;\r\n}\r\n\r\n.carousel-caption p {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.hero-unit {\r\n\tpadding: 60px;\r\n\tmargin-bottom: 30px;\r\n\tfont-size: 18px;\r\n\tfont-weight: 200;\r\n\tline-height: 30px;\r\n\tcolor: inherit;\r\n\tbackground-color: #eeeeee;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.hero-unit h1 {\r\n\tmargin-bottom: 0;\r\n\tfont-size: 60px;\r\n\tline-height: 1;\r\n\tletter-spacing: -1px;\r\n\tcolor: inherit;\r\n}\r\n\r\n.hero-unit li {\r\n\tline-height: 30px;\r\n}\r\n\r\n.pull-right {\r\n\tfloat: right;\r\n}\r\n\r\n.pull-left {\r\n\tfloat: left;\r\n}\r\n\r\n.hide {\r\n\tdisplay: none;\r\n}\r\n\r\n.show {\r\n\tdisplay: block;\r\n}\r\n\r\n.invisible {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.affix {\r\n\tposition: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUU7O0FBRUY7RUFDQyxPQUFRO0FBQ1Q7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLFdBQVc7QUFDWjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3QixTQUFTO0FBQ1Y7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGdCQUFnQjtDQUdoQixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxxQkFBcUI7RUFDckIsZUFBZ0I7RUFDaEIsT0FBUTtBQUNUOztBQUNDO0NBQ0EsYUFBYTtBQUNkOztBQUNBO0NBQ0MsZUFBZTtDQUNmLDhCQUE4QjtDQUM5QiwwQkFBMEI7QUFDM0I7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsMENBQTBDO0NBQzFDLG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLFVBQVU7QUFDWDs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsY0FBYztDQUNkLHdCQUF3QjtBQUN6Qjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULCtCQUErQjtBQUNoQzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsZUFBZTtDQUNmLHNCQUFzQjtBQUN2Qjs7QUFDQTtFQUNDLGlCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBQ0M7Q0FDQSxVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUNBO0NBQ0MsZUFBZTtDQUNmLDBCQUEwQjtBQUMzQjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7Q0FHQyx1QkFBdUI7Q0FD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O0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0NBQWtDO0FBQ25DOztBQUNBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUNBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUNBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUNBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUNBO0NBQ0Msa0NBQWtDO0FBQ25DOztB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QUNSLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwrQkFBK0I7QUFDaEM7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztBQUNmOztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLHlCQUF5QjtDQUd6QixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsY0FBYztBQUNmOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9ib290c3RyYXAuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIEJvb3RzdHJhcCB2Mi4zLjBcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTIgVHdpdHRlciwgSW5jXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSB2Mi4wXHJcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBEZXNpZ25lZCBhbmQgYnVpbHQgd2l0aCBhbGwgdGhlIGxvdmUgaW4gdGhlIHdvcmxkIEB0d2l0dGVyIGJ5IEBtZG8gYW5kIEBmYXQuXHJcbiAqL1xyXG5cclxuLmNsZWFyZml4IHtcclxuICp6b29tOiAxO1xyXG59XHJcbi5jbGVhcmZpeDpiZWZvcmUsIC5jbGVhcmZpeDphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5oaWRlLXRleHQge1xyXG5cdGZvbnQ6IDAvMCBhO1xyXG5cdGNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDA7XHJcbn1cclxuLmlucHV0LWJsb2NrLWxldmVsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiAzMHB4O1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmF1ZGlvLCBjYW52YXMsIHZpZGVvIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAqZGlzcGxheTogaW5saW5lO1xyXG4gKnpvb206IDE7XHJcbn1cclxuIGF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiBkaXNwbGF5OiBub25lO1xyXG59XHJcbmh0bWwge1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcblx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbn1cclxuYTpmb2N1cyB7XHJcblx0b3V0bGluZTogdGhpbiBkb3R0ZWQgIzMzMztcclxuXHRvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XHJcblx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbn1cclxuYTpob3ZlciwgYTphY3RpdmUge1xyXG5cdG91dGxpbmU6IDA7XHJcbn1cclxuc3ViLCBzdXAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRmb250LXNpemU6IDc1JTtcclxuXHRsaW5lLWhlaWdodDogMDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuc3VwIHtcclxuXHR0b3A6IC0wLjVlbTtcclxufVxyXG5zdWIge1xyXG5cdGJvdHRvbTogLTAuMjVlbTtcclxufVxyXG5pbWcge1xyXG5cdHdpZHRoOiBhdXRvXFw5O1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRib3JkZXI6IDA7XHJcblx0LW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcclxufVxyXG4jbWFwX2NhbnZhcyBpbWcsIC5nb29nbGUtbWFwcyBpbWcge1xyXG5cdG1heC13aWR0aDogbm9uZTtcclxufVxyXG5idXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAqb3ZlcmZsb3c6IHZpc2libGU7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4gYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLCBpbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiBwYWRkaW5nOiAwO1xyXG4gYm9yZGVyOiAwO1xyXG59XHJcbmJ1dHRvbiwgaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5sYWJlbCwgc2VsZWN0LCBidXR0b24sIGlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1yZXNldF0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuIGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiwgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcclxuIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG50ZXh0YXJlYSB7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4gQG1lZGlhIHByaW50IHtcclxuKiB7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuXHR0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbmEsICBhOnZpc2l0ZWQge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbmFbaHJlZl06YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiIChcIiBhdHRyKGhyZWYpIFwiKVwiO1xyXG59XHJcbmFiYnJbdGl0bGVdOmFmdGVyIHtcclxuXHRjb250ZW50OiBcIiAoXCIgYXR0cih0aXRsZSkgXCIpXCI7XHJcbn1cclxuIC5pciBhOmFmdGVyLCAgYVtocmVmXj1cImphdmFzY3JpcHQ6XCJdOmFmdGVyLCAgYVtocmVmXj1cIiNcIl06YWZ0ZXIge1xyXG4gY29udGVudDogXCJcIjtcclxufVxyXG5wcmUsICBibG9ja3F1b3RlIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cdHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxufVxyXG50aGVhZCB7XHJcblx0ZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG59XHJcbnRyLCAgaW1nIHtcclxuXHRwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbn1cclxuaW1nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4gQHBhZ2Uge1xyXG4gbWFyZ2luOiAwLjVjbTtcclxufVxyXG5wLCAgaDIsICBoMyB7XHJcblx0b3JwaGFuczogMztcclxuXHR3aWRvd3M6IDM7XHJcbn1cclxuaDIsICBoMyB7XHJcblx0cGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XHJcbn1cclxufVxyXG5ib2R5IHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0Y29sb3I6ICMzMzMzMzM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5hIHtcclxuXHRjb2xvcjogIzAwODhjYztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYTpob3ZlciwgYTpmb2N1cyB7XHJcblx0Y29sb3I6ICMwMDU1ODA7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmltZy1yb3VuZGVkIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmltZy1wb2xhcm9pZCB7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5pbWctY2lyY2xlIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAwcHg7XHJcbn1cclxuLnJvdyB7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gKnpvb206IDE7XHJcbn1cclxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLnJvdzphZnRlciB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuIFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuIGZsb2F0OiBsZWZ0O1xyXG4gbWluLWhlaWdodDogMXB4O1xyXG4gbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmNvbnRhaW5lciwgLm5hdmJhci1zdGF0aWMtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtYm90dG9tIC5jb250YWluZXIge1xyXG5cdHdpZHRoOiA5NDBweDtcclxufVxyXG4uc3BhbjEyIHtcclxuXHR3aWR0aDogOTQwcHg7XHJcbn1cclxuLnNwYW4xMSB7XHJcblx0d2lkdGg6IDg2MHB4O1xyXG59XHJcbi5zcGFuMTAge1xyXG5cdHdpZHRoOiA3ODBweDtcclxufVxyXG4uc3Bhbjkge1xyXG5cdHdpZHRoOiA3MDBweDtcclxufVxyXG4uc3Bhbjgge1xyXG5cdHdpZHRoOiA2MjBweDtcclxufVxyXG4uc3Bhbjcge1xyXG5cdHdpZHRoOiA1NDBweDtcclxufVxyXG4uc3BhbjYge1xyXG5cdHdpZHRoOiA0NjBweDtcclxufVxyXG4uc3BhbjUge1xyXG5cdHdpZHRoOiAzODBweDtcclxufVxyXG4uc3BhbjQge1xyXG5cdHdpZHRoOiAzMDBweDtcclxufVxyXG4uc3BhbjMge1xyXG5cdHdpZHRoOiAyMjBweDtcclxufVxyXG4uc3BhbjIge1xyXG5cdHdpZHRoOiAxNDBweDtcclxufVxyXG4uc3BhbjEge1xyXG5cdHdpZHRoOiA2MHB4O1xyXG59XHJcbi5vZmZzZXQxMiB7XHJcblx0bWFyZ2luLWxlZnQ6IDk4MHB4O1xyXG59XHJcbi5vZmZzZXQxMSB7XHJcblx0bWFyZ2luLWxlZnQ6IDkwMHB4O1xyXG59XHJcbi5vZmZzZXQxMCB7XHJcblx0bWFyZ2luLWxlZnQ6IDgyMHB4O1xyXG59XHJcbi5vZmZzZXQ5IHtcclxuXHRtYXJnaW4tbGVmdDogNzQwcHg7XHJcbn1cclxuLm9mZnNldDgge1xyXG5cdG1hcmdpbi1sZWZ0OiA2NjBweDtcclxufVxyXG4ub2Zmc2V0NyB7XHJcblx0bWFyZ2luLWxlZnQ6IDU4MHB4O1xyXG59XHJcbi5vZmZzZXQ2IHtcclxuXHRtYXJnaW4tbGVmdDogNTAwcHg7XHJcbn1cclxuLm9mZnNldDUge1xyXG5cdG1hcmdpbi1sZWZ0OiA0MjBweDtcclxufVxyXG4ub2Zmc2V0NCB7XHJcblx0bWFyZ2luLWxlZnQ6IDM0MHB4O1xyXG59XHJcbi5vZmZzZXQzIHtcclxuXHRtYXJnaW4tbGVmdDogMjYwcHg7XHJcbn1cclxuLm9mZnNldDIge1xyXG5cdG1hcmdpbi1sZWZ0OiAxODBweDtcclxufVxyXG4ub2Zmc2V0MSB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi5yb3ctZmx1aWQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gKnpvb206IDE7XHJcbn1cclxuLnJvdy1mbHVpZDpiZWZvcmUsIC5yb3ctZmx1aWQ6YWZ0ZXIge1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLnJvdy1mbHVpZDphZnRlciB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuIC5yb3ctZmx1aWQgW2NsYXNzKj1cInNwYW5cIl0ge1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbiBmbG9hdDogbGVmdDtcclxuIHdpZHRoOiAxMDAlO1xyXG4gbWluLWhlaWdodDogMzBweDtcclxuIG1hcmdpbi1sZWZ0OiAyLjEyNzY1OTU3NDQ2ODA4NSU7XHJcbiAqbWFyZ2luLWxlZnQ6IDIuMDc0NDY4MDg1MTA2MzgzJTtcclxuIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuIC5yb3ctZmx1aWQgW2NsYXNzKj1cInNwYW5cIl06Zmlyc3QtY2hpbGQge1xyXG4gbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuIC5yb3ctZmx1aWQgLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuIG1hcmdpbi1sZWZ0OiAyLjEyNzY1OTU3NDQ2ODA4NSU7XHJcbn1cclxuLnJvdy1mbHVpZCAuc3BhbjEyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuICp3aWR0aDogOTkuOTQ2ODA4NTEwNjM4MjklO1xyXG59XHJcbi5yb3ctZmx1aWQgLnNwYW4xMSB7XHJcblx0d2lkdGg6IDkxLjQ4OTM2MTcwMjEyNzY1JTtcclxuICp3aWR0aDogOTEuNDM2MTcwMjEyNzY1OTQlO1xyXG59XHJcbi5yb3ctZmx1aWQgLnNwYW4xMCB7XHJcblx0d2lkdGg6IDgyLjk3ODcyMzQwNDI1NTMyJTtcclxuICp3aWR0aDogODIuOTI1NTMxOTE0ODkzNjElO1xyXG59XHJcbi5yb3ctZmx1aWQgLnNwYW45IHtcclxuXHR3aWR0aDogNzQuNDY4MDg1MTA2MzgyOTclO1xyXG4gKndpZHRoOiA3NC40MTQ4OTM2MTcwMjEyNiU7XHJcbn1cclxuLnJvdy1mbHVpZCAuc3Bhbjgge1xyXG5cdHdpZHRoOiA2NS45NTc0NDY4MDg1MTA2NCU7XHJcbiAqd2lkdGg6IDY1LjkwNDI1NTMxOTE0ODkzJTtcclxufVxyXG4ucm93LWZsdWlkIC5zcGFuNyB7XHJcblx0d2lkdGg6IDU3LjQ0NjgwODUxMDYzODI5JTtcclxuICp3aWR0aDogNTcuMzkzNjE3MDIxMjc2NTklO1xyXG59XHJcbi5yb3ctZmx1aWQgLnNwYW42IHtcclxuXHR3aWR0aDogNDguOTM2MTcwMjEyNzY1OTUlO1xyXG4gKndpZHRoOiA0OC44ODI5Nzg3MjM0MDQyNSU7XHJcbn1cclxuLnJvdy1mbHVpZCAuc3BhbjUge1xyXG5cdHdpZHRoOiA0MC40MjU1MzE5MTQ4OTM2MiU7XHJcbiAqd2lkdGg6IDQwLjM3MjM0MDQyNTUzMTkyJTtcclxufVxyXG4ucm93LWZsdWlkIC5zcGFuNCB7XHJcblx0d2lkdGg6IDMxLjkxNDg5MzYxNzAyMTI3OCU7XHJcbiAqd2lkdGg6IDMxLjg2MTcwMjEyNzY1OTU3NiU7XHJcbn1cclxuLnJvdy1mbHVpZCAuc3BhbjMge1xyXG5cdHdpZHRoOiAyMy40MDQyNTUzMTkxNDg5MzQlO1xyXG4gKndpZHRoOiAyMy4zNTEwNjM4Mjk3ODcyMzMlO1xyXG59XHJcbi5yb3ctZmx1aWQgLnNwYW4yIHtcclxuXHR3aWR0aDogMTQuODkzNjE3MDIxMjc2NTk1JTtcclxuICp3aWR0aDogMTQuODQwNDI1NTMxOTE0ODk0JTtcclxufVxyXG4ucm93LWZsdWlkIC5zcGFuMSB7XHJcblx0d2lkdGg6IDYuMzgyOTc4NzIzNDA0MjU1JTtcclxuICp3aWR0aDogNi4zMjk3ODcyMzQwNDI1NTMlO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDEyIHtcclxuXHRtYXJnaW4tbGVmdDogMTA0LjI1NTMxOTE0ODkzNjE3JTtcclxuICptYXJnaW4tbGVmdDogMTA0LjE0ODkzNjE3MDIxMjc1JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQxMjpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMi4xMjc2NTk1NzQ0NjgwOCU7XHJcbiAqbWFyZ2luLWxlZnQ6IDEwMi4wMjEyNzY1OTU3NDQ2NyU7XHJcbn1cclxuLnJvdy1mbHVpZCAub2Zmc2V0MTEge1xyXG5cdG1hcmdpbi1sZWZ0OiA5NS43NDQ2ODA4NTEwNjM4MiU7XHJcbiAqbWFyZ2luLWxlZnQ6IDk1LjYzODI5Nzg3MjM0MDQlO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDExOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogOTMuNjE3MDIxMjc2NTk1NzQlO1xyXG4gKm1hcmdpbi1sZWZ0OiA5My41MTA2MzgyOTc4NzIzMiU7XHJcbn1cclxuLnJvdy1mbHVpZCAub2Zmc2V0MTAge1xyXG5cdG1hcmdpbi1sZWZ0OiA4Ny4yMzQwNDI1NTMxOTE0OSU7XHJcbiAqbWFyZ2luLWxlZnQ6IDg3LjEyNzY1OTU3NDQ2ODA3JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQxMDpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDg1LjEwNjM4Mjk3ODcyMzQlO1xyXG4gKm1hcmdpbi1sZWZ0OiA4NC45OTk5OTk5OTk5OTk5OSU7XHJcbn1cclxuLnJvdy1mbHVpZCAub2Zmc2V0OSB7XHJcblx0bWFyZ2luLWxlZnQ6IDc4LjcyMzQwNDI1NTMxOTE0JTtcclxuICptYXJnaW4tbGVmdDogNzguNjE3MDIxMjc2NTk1NzIlO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDk6Zmlyc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1sZWZ0OiA3Ni41OTU3NDQ2ODA4NTEwNiU7XHJcbiAqbWFyZ2luLWxlZnQ6IDc2LjQ4OTM2MTcwMjEyNzY0JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQ4IHtcclxuXHRtYXJnaW4tbGVmdDogNzAuMjEyNzY1OTU3NDQ2OCU7XHJcbiAqbWFyZ2luLWxlZnQ6IDcwLjEwNjM4Mjk3ODcyMzM5JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQ4OmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogNjguMDg1MTA2MzgyOTc4NzIlO1xyXG4gKm1hcmdpbi1sZWZ0OiA2Ny45Nzg3MjM0MDQyNTUzJTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQ3IHtcclxuXHRtYXJnaW4tbGVmdDogNjEuNzAyMTI3NjU5NTc0NDYlO1xyXG4gKm1hcmdpbi1sZWZ0OiA2MS41OTU3NDQ2ODA4NTEwNiU7XHJcbn1cclxuLnJvdy1mbHVpZCAub2Zmc2V0NzpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDU5LjU3NDQ2ODA4NTEwNjM3NSU7XHJcbiAqbWFyZ2luLWxlZnQ6IDU5LjQ2ODA4NTEwNjM4Mjk3JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQ2IHtcclxuXHRtYXJnaW4tbGVmdDogNTMuMTkxNDg5MzYxNzAyMTI1JTtcclxuICptYXJnaW4tbGVmdDogNTMuMDg1MTA2MzgyOTc4NzE1JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQ2OmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogNTEuMDYzODI5Nzg3MjM0MDM1JTtcclxuICptYXJnaW4tbGVmdDogNTAuOTU3NDQ2ODA4NTEwNjMlO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDUge1xyXG5cdG1hcmdpbi1sZWZ0OiA0NC42ODA4NTEwNjM4Mjk3OSU7XHJcbiAqbWFyZ2luLWxlZnQ6IDQ0LjU3NDQ2ODA4NTEwNjM4JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQ1OmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogNDIuNTUzMTkxNDg5MzYxNyU7XHJcbiAqbWFyZ2luLWxlZnQ6IDQyLjQ0NjgwODUxMDYzODMlO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDQge1xyXG5cdG1hcmdpbi1sZWZ0OiAzNi4xNzAyMTI3NjU5NTc0NDQlO1xyXG4gKm1hcmdpbi1sZWZ0OiAzNi4wNjM4Mjk3ODcyMzQwNSU7XHJcbn1cclxuLnJvdy1mbHVpZCAub2Zmc2V0NDpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDM0LjA0MjU1MzE5MTQ4OTM2JTtcclxuICptYXJnaW4tbGVmdDogMzMuOTM2MTcwMjEyNzY1OTYlO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDMge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNy42NTk1NzQ0NjgwODUxMDQlO1xyXG4gKm1hcmdpbi1sZWZ0OiAyNy41NTMxOTE0ODkzNjE3JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQzOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogMjUuNTMxOTE0ODkzNjE3MDIlO1xyXG4gKm1hcmdpbi1sZWZ0OiAyNS40MjU1MzE5MTQ4OTM2MTglO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDIge1xyXG5cdG1hcmdpbi1sZWZ0OiAxOS4xNDg5MzYxNzAyMTI3NjQlO1xyXG4gKm1hcmdpbi1sZWZ0OiAxOS4wNDI1NTMxOTE0ODkzNiU7XHJcbn1cclxuLnJvdy1mbHVpZCAub2Zmc2V0MjpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDE3LjAyMTI3NjU5NTc0NDY4JTtcclxuICptYXJnaW4tbGVmdDogMTYuOTE0ODkzNjE3MDIxMjc4JTtcclxufVxyXG4ucm93LWZsdWlkIC5vZmZzZXQxIHtcclxuXHRtYXJnaW4tbGVmdDogMTAuNjM4Mjk3ODcyMzQwNDI1JTtcclxuICptYXJnaW4tbGVmdDogMTAuNTMxOTE0ODkzNjE3MDIlO1xyXG59XHJcbi5yb3ctZmx1aWQgLm9mZnNldDE6Zmlyc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1sZWZ0OiA4LjUxMDYzODI5Nzg3MjM0JTtcclxuICptYXJnaW4tbGVmdDogOC40MDQyNTUzMTkxNDg5MzglO1xyXG59XHJcbiBbY2xhc3MqPVwic3BhblwiXS5oaWRlLCAucm93LWZsdWlkIFtjbGFzcyo9XCJzcGFuXCJdLmhpZGUge1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG4gW2NsYXNzKj1cInNwYW5cIl0ucHVsbC1yaWdodCwgLnJvdy1mbHVpZCBbY2xhc3MqPVwic3BhblwiXS5wdWxsLXJpZ2h0IHtcclxuIGZsb2F0OiByaWdodDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAqem9vbTogMTtcclxufVxyXG4uY29udGFpbmVyOmJlZm9yZSwgLmNvbnRhaW5lcjphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4uY29udGFpbmVyOmFmdGVyIHtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuICp6b29tOiAxO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQ6YmVmb3JlLCAuY29udGFpbmVyLWZsdWlkOmFmdGVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHRsaW5lLWhlaWdodDogMDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQ6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbnAge1xyXG5cdG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLmxlYWQge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0Zm9udC1zaXplOiAyMXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogODUlO1xyXG59XHJcbnN0cm9uZyB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuZW0ge1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5jaXRlIHtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuLm11dGVkIHtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxufVxyXG5hLm11dGVkOmhvdmVyLCBhLm11dGVkOmZvY3VzIHtcclxuXHRjb2xvcjogIzgwODA4MDtcclxufVxyXG4udGV4dC13YXJuaW5nIHtcclxuXHRjb2xvcjogI2MwOTg1MztcclxufVxyXG5hLnRleHQtd2FybmluZzpob3ZlciwgYS50ZXh0LXdhcm5pbmc6Zm9jdXMge1xyXG5cdGNvbG9yOiAjYTQ3ZTNjO1xyXG59XHJcbi50ZXh0LWVycm9yIHtcclxuXHRjb2xvcjogI2I5NGE0ODtcclxufVxyXG5hLnRleHQtZXJyb3I6aG92ZXIsIGEudGV4dC1lcnJvcjpmb2N1cyB7XHJcblx0Y29sb3I6ICM5NTNiMzk7XHJcbn1cclxuLnRleHQtaW5mbyB7XHJcblx0Y29sb3I6ICMzYTg3YWQ7XHJcbn1cclxuYS50ZXh0LWluZm86aG92ZXIsIGEudGV4dC1pbmZvOmZvY3VzIHtcclxuXHRjb2xvcjogIzJkNjk4NztcclxufVxyXG4udGV4dC1zdWNjZXNzIHtcclxuXHRjb2xvcjogIzQ2ODg0NztcclxufVxyXG5hLnRleHQtc3VjY2Vzczpob3ZlciwgYS50ZXh0LXN1Y2Nlc3M6Zm9jdXMge1xyXG5cdGNvbG9yOiAjMzU2NjM1O1xyXG59XHJcbi50ZXh0LWxlZnQge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRleHQtcmlnaHQge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG5cdG1hcmdpbjogMTBweCAwO1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbn1cclxuaDEgc21hbGwsIGgyIHNtYWxsLCBoMyBzbWFsbCwgaDQgc21hbGwsIGg1IHNtYWxsLCBoNiBzbWFsbCB7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRsaW5lLWhlaWdodDogMTtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxufVxyXG5oMSwgaDIsIGgzIHtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAzOC41cHg7XHJcbn1cclxuaDIge1xyXG5cdGZvbnQtc2l6ZTogMzEuNXB4O1xyXG59XHJcbmgzIHtcclxuXHRmb250LXNpemU6IDI0LjVweDtcclxufVxyXG5oNCB7XHJcblx0Zm9udC1zaXplOiAxNy41cHg7XHJcbn1cclxuaDUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5oNiB7XHJcblx0Zm9udC1zaXplOiAxMS45cHg7XHJcbn1cclxuaDEgc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMjQuNXB4O1xyXG59XHJcbmgyIHNtYWxsIHtcclxuXHRmb250LXNpemU6IDE3LjVweDtcclxufVxyXG5oMyBzbWFsbCB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmg0IHNtYWxsIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnBhZ2UtaGVhZGVyIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG5cdG1hcmdpbjogMjBweCAwIDMwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XHJcbn1cclxudWwsIG9sIHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMCAwIDEwcHggMjVweDtcclxufVxyXG51bCB1bCwgdWwgb2wsIG9sIG9sLCBvbCB1bCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5saSB7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxudWwudW5zdHlsZWQsIG9sLnVuc3R5bGVkIHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnVsLmlubGluZSwgb2wuaW5saW5lIHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnVsLmlubGluZSA+IGxpLCBvbC5pbmxpbmUgPiBsaSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gKmRpc3BsYXk6IGlubGluZTtcclxuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAqem9vbTogMTtcclxufVxyXG5kbCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5kdCwgZGQge1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbmR0IHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5kZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmRsLWhvcml6b250YWwge1xyXG4gKnpvb206IDE7XHJcbn1cclxuLmRsLWhvcml6b250YWw6YmVmb3JlLCAuZGwtaG9yaXpvbnRhbDphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4uZGwtaG9yaXpvbnRhbDphZnRlciB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuLmRsLWhvcml6b250YWwgZHQge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAxNjBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGNsZWFyOiBsZWZ0O1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmRsLWhvcml6b250YWwgZGQge1xyXG5cdG1hcmdpbi1sZWZ0OiAxODBweDtcclxufVxyXG5ociB7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbmFiYnJbdGl0bGVdLCBhYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHtcclxuXHRjdXJzb3I6IGhlbHA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5OTk5O1xyXG59XHJcbmFiYnIuaW5pdGlhbGlzbSB7XHJcblx0Zm9udC1zaXplOiA5MCU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5ibG9ja3F1b3RlIHtcclxuXHRwYWRkaW5nOiAwIDAgMCAxNXB4O1xyXG5cdG1hcmdpbjogMCAwIDIwcHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZWVlZWVlO1xyXG59XHJcbmJsb2NrcXVvdGUgcCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRmb250LXNpemU6IDE3LjVweDtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG59XHJcbmJsb2NrcXVvdGUgc21hbGwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbmJsb2NrcXVvdGUgc21hbGw6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFwyMDE0IFxcMDBBMCc7XHJcbn1cclxuYmxvY2txdW90ZS5wdWxsLXJpZ2h0IHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0Ym9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2VlZWVlZTtcclxuXHRib3JkZXItbGVmdDogMDtcclxufVxyXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQgcCwgYmxvY2txdW90ZS5wdWxsLXJpZ2h0IHNtYWxsIHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQgc21hbGw6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxufVxyXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQgc21hbGw6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICdcXDAwQTAgXFwyMDE0JztcclxufVxyXG5xOmJlZm9yZSwgcTphZnRlciwgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuYWRkcmVzcyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuY29kZSwgcHJlIHtcclxuXHRwYWRkaW5nOiAwIDNweCAycHg7XHJcblx0Zm9udC1mYW1pbHk6IE1vbmFjbywgTWVubG8sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6ICMzMzMzMzM7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmNvZGUge1xyXG5cdHBhZGRpbmc6IDJweCA0cHg7XHJcblx0Y29sb3I6ICNkMTQ7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTg7XHJcbn1cclxucHJlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiA5LjVweDtcclxuXHRtYXJnaW46IDAgMCAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdoaXRlLXNwYWNlOiBwcmU7XHJcblx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5wcmUucHJldHR5cHJpbnQge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxucHJlIGNvZGUge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0d2hpdGUtc3BhY2U6IHByZTtcclxuXHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAwO1xyXG59XHJcbi5wcmUtc2Nyb2xsYWJsZSB7XHJcblx0bWF4LWhlaWdodDogMzQwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbmZvcm0ge1xyXG5cdG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuZmllbGRzZXQge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGJvcmRlcjogMDtcclxufVxyXG5sZWdlbmQge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0Y29sb3I6ICMzMzMzMzM7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcbmxlZ2VuZCBzbWFsbCB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbmxhYmVsLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5pbnB1dCwgYnV0dG9uLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuXHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbmxhYmVsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuc2VsZWN0LCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZGF0ZXRpbWVdLCBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSwgaW5wdXRbdHlwZT1kYXRlXSwgaW5wdXRbdHlwZT1tb250aF0sIGlucHV0W3R5cGU9dGltZV0sIGlucHV0W3R5cGU9d2Vla10sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9Y29sb3JdLCAudW5lZGl0YWJsZS1pbnB1dCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRwYWRkaW5nOiA0cHggNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGNvbG9yOiAjNTU1NTU1O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbmlucHV0LCB0ZXh0YXJlYSwgLnVuZWRpdGFibGUtaW5wdXQge1xyXG5cdHdpZHRoOiAyMDZweDtcclxufVxyXG50ZXh0YXJlYSB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcbnRleHRhcmVhLCBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1kYXRldGltZV0sIGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPW1vbnRoXSwgaW5wdXRbdHlwZT10aW1lXSwgaW5wdXRbdHlwZT13ZWVrXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1jb2xvcl0sIC51bmVkaXRhYmxlLWlucHV0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xyXG5cdC1vLXRyYW5zaXRpb246IGJvcmRlciBsaW5lYXIgMC4ycywgYm94LXNoYWRvdyBsaW5lYXIgMC4ycztcclxuXHR0cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XHJcbn1cclxudGV4dGFyZWE6Zm9jdXMsIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLCBpbnB1dFt0eXBlPWRhdGV0aW1lXTpmb2N1cywgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06Zm9jdXMsIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMsIGlucHV0W3R5cGU9bW9udGhdOmZvY3VzLCBpbnB1dFt0eXBlPXRpbWVdOmZvY3VzLCBpbnB1dFt0eXBlPXdlZWtdOmZvY3VzLCBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMsIGlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLCBpbnB1dFt0eXBlPXVybF06Zm9jdXMsIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cywgaW5wdXRbdHlwZT10ZWxdOmZvY3VzLCBpbnB1dFt0eXBlPWNvbG9yXTpmb2N1cywgLnVuZWRpdGFibGUtaW5wdXQ6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSg4MiwgMTY4LCAyMzYsIDAuOCk7XHJcblx0b3V0bGluZTogMDtcclxuXHRvdXRsaW5lOiB0aGluIGRvdHRlZCBcXDk7XHJcblx0LyogSUU2LTkgKi9cclxuXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSg4MiwgMTY4LCAyMzYsIDAuNik7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSg4MiwgMTY4LCAyMzYsIDAuNik7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoODIsIDE2OCwgMjM2LCAwLjYpO1xyXG59XHJcbmlucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcblx0bWFyZ2luOiA0cHggMCAwO1xyXG5cdG1hcmdpbi10b3A6IDFweCBcXDk7XHJcbiAqbWFyZ2luLXRvcDogMDtcclxuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbmlucHV0W3R5cGU9ZmlsZV0sIGlucHV0W3R5cGU9aW1hZ2VdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcblx0d2lkdGg6IGF1dG87XHJcbn1cclxuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcbiAgLyogSW4gSUU3LCB0aGUgaGVpZ2h0IG9mIHRoZSBzZWxlY3QgZWxlbWVudCBjYW5ub3QgYmUgY2hhbmdlZCBieSBoZWlnaHQsIG9ubHkgZm9udC1zaXplICovXHJcblxyXG4gICptYXJnaW4tdG9wOiA0cHg7XHJcblx0LyogRm9yIElFNywgYWRkIHRvcCBtYXJnaW4gdG8gYWxpZ24gc2VsZWN0IHdpdGggbGFiZWxzICovXHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbnNlbGVjdCB7XHJcblx0d2lkdGg6IDIyMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxufVxyXG5zZWxlY3RbbXVsdGlwbGVdLCBzZWxlY3Rbc2l6ZV0ge1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG5zZWxlY3Q6Zm9jdXMsIGlucHV0W3R5cGU9ZmlsZV06Zm9jdXMsIGlucHV0W3R5cGU9cmFkaW9dOmZvY3VzLCBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1cyB7XHJcblx0b3V0bGluZTogdGhpbiBkb3R0ZWQgIzMzMztcclxuXHRvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XHJcblx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbn1cclxuLnVuZWRpdGFibGUtaW5wdXQsIC51bmVkaXRhYmxlLXRleHRhcmVhIHtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxuXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcblx0Ym9yZGVyLWNvbG9yOiAjY2NjY2NjO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxufVxyXG4udW5lZGl0YWJsZS1pbnB1dCB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi51bmVkaXRhYmxlLXRleHRhcmVhIHtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbiBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLnJhZGlvLCAuY2hlY2tib3gge1xyXG5cdG1pbi1oZWlnaHQ6IDIwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXSwgLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuLmNvbnRyb2xzID4gLnJhZGlvOmZpcnN0LWNoaWxkLCAuY29udHJvbHMgPiAuY2hlY2tib3g6Zmlyc3QtY2hpbGQge1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLnJhZGlvLmlubGluZSwgLmNoZWNrYm94LmlubGluZSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5yYWRpby5pbmxpbmUgKyAucmFkaW8uaW5saW5lLCAuY2hlY2tib3guaW5saW5lICsgLmNoZWNrYm94LmlubGluZSB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmlucHV0LW1pbmkge1xyXG5cdHdpZHRoOiA2MHB4O1xyXG59XHJcbi5pbnB1dC1zbWFsbCB7XHJcblx0d2lkdGg6IDkwcHg7XHJcbn1cclxuLmlucHV0LW1lZGl1bSB7XHJcblx0d2lkdGg6IDE1MHB4O1xyXG59XHJcbi5pbnB1dC1sYXJnZSB7XHJcblx0d2lkdGg6IDIxMHB4O1xyXG59XHJcbi5pbnB1dC14bGFyZ2Uge1xyXG5cdHdpZHRoOiAyNzBweDtcclxufVxyXG4uaW5wdXQteHhsYXJnZSB7XHJcblx0d2lkdGg6IDUzMHB4O1xyXG59XHJcbiBpbnB1dFtjbGFzcyo9XCJzcGFuXCJdLCBzZWxlY3RbY2xhc3MqPVwic3BhblwiXSwgdGV4dGFyZWFbY2xhc3MqPVwic3BhblwiXSwgLnVuZWRpdGFibGUtaW5wdXRbY2xhc3MqPVwic3BhblwiXSwgLnJvdy1mbHVpZCBpbnB1dFtjbGFzcyo9XCJzcGFuXCJdLCAucm93LWZsdWlkIHNlbGVjdFtjbGFzcyo9XCJzcGFuXCJdLCAucm93LWZsdWlkIHRleHRhcmVhW2NsYXNzKj1cInNwYW5cIl0sIC5yb3ctZmx1aWQgLnVuZWRpdGFibGUtaW5wdXRbY2xhc3MqPVwic3BhblwiXSB7XHJcbiBmbG9hdDogbm9uZTtcclxuIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbiAuaW5wdXQtYXBwZW5kIGlucHV0W2NsYXNzKj1cInNwYW5cIl0sIC5pbnB1dC1hcHBlbmQgLnVuZWRpdGFibGUtaW5wdXRbY2xhc3MqPVwic3BhblwiXSwgLmlucHV0LXByZXBlbmQgaW5wdXRbY2xhc3MqPVwic3BhblwiXSwgLmlucHV0LXByZXBlbmQgLnVuZWRpdGFibGUtaW5wdXRbY2xhc3MqPVwic3BhblwiXSwgLnJvdy1mbHVpZCBpbnB1dFtjbGFzcyo9XCJzcGFuXCJdLCAucm93LWZsdWlkIHNlbGVjdFtjbGFzcyo9XCJzcGFuXCJdLCAucm93LWZsdWlkIHRleHRhcmVhW2NsYXNzKj1cInNwYW5cIl0sIC5yb3ctZmx1aWQgLnVuZWRpdGFibGUtaW5wdXRbY2xhc3MqPVwic3BhblwiXSwgLnJvdy1mbHVpZCAuaW5wdXQtcHJlcGVuZCBbY2xhc3MqPVwic3BhblwiXSwgLnJvdy1mbHVpZCAuaW5wdXQtYXBwZW5kIFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5pbnB1dCwgdGV4dGFyZWEsIC51bmVkaXRhYmxlLWlucHV0IHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG4gLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSArIFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbmlucHV0LnNwYW4xMiwgdGV4dGFyZWEuc3BhbjEyLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMTIge1xyXG5cdHdpZHRoOiA5MjZweDtcclxufVxyXG5pbnB1dC5zcGFuMTEsIHRleHRhcmVhLnNwYW4xMSwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjExIHtcclxuXHR3aWR0aDogODQ2cHg7XHJcbn1cclxuaW5wdXQuc3BhbjEwLCB0ZXh0YXJlYS5zcGFuMTAsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4xMCB7XHJcblx0d2lkdGg6IDc2NnB4O1xyXG59XHJcbmlucHV0LnNwYW45LCB0ZXh0YXJlYS5zcGFuOSwgLnVuZWRpdGFibGUtaW5wdXQuc3Bhbjkge1xyXG5cdHdpZHRoOiA2ODZweDtcclxufVxyXG5pbnB1dC5zcGFuOCwgdGV4dGFyZWEuc3BhbjgsIC51bmVkaXRhYmxlLWlucHV0LnNwYW44IHtcclxuXHR3aWR0aDogNjA2cHg7XHJcbn1cclxuaW5wdXQuc3BhbjcsIHRleHRhcmVhLnNwYW43LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuNyB7XHJcblx0d2lkdGg6IDUyNnB4O1xyXG59XHJcbmlucHV0LnNwYW42LCB0ZXh0YXJlYS5zcGFuNiwgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjYge1xyXG5cdHdpZHRoOiA0NDZweDtcclxufVxyXG5pbnB1dC5zcGFuNSwgdGV4dGFyZWEuc3BhbjUsIC51bmVkaXRhYmxlLWlucHV0LnNwYW41IHtcclxuXHR3aWR0aDogMzY2cHg7XHJcbn1cclxuaW5wdXQuc3BhbjQsIHRleHRhcmVhLnNwYW40LCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuNCB7XHJcblx0d2lkdGg6IDI4NnB4O1xyXG59XHJcbmlucHV0LnNwYW4zLCB0ZXh0YXJlYS5zcGFuMywgLnVuZWRpdGFibGUtaW5wdXQuc3BhbjMge1xyXG5cdHdpZHRoOiAyMDZweDtcclxufVxyXG5pbnB1dC5zcGFuMiwgdGV4dGFyZWEuc3BhbjIsIC51bmVkaXRhYmxlLWlucHV0LnNwYW4yIHtcclxuXHR3aWR0aDogMTI2cHg7XHJcbn1cclxuaW5wdXQuc3BhbjEsIHRleHRhcmVhLnNwYW4xLCAudW5lZGl0YWJsZS1pbnB1dC5zcGFuMSB7XHJcblx0d2lkdGg6IDQ2cHg7XHJcbn1cclxuLmNvbnRyb2xzLXJvdyB7XHJcbiAqem9vbTogMTtcclxufVxyXG4uY29udHJvbHMtcm93OmJlZm9yZSwgLmNvbnRyb2xzLXJvdzphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4uY29udHJvbHMtcm93OmFmdGVyIHtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG4gLmNvbnRyb2xzLXJvdyBbY2xhc3MqPVwic3BhblwiXSwgLnJvdy1mbHVpZCAuY29udHJvbHMtcm93IFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiAuY29udHJvbHMtcm93IC5jaGVja2JveFtjbGFzcyo9XCJzcGFuXCJdLCAuY29udHJvbHMtcm93IC5yYWRpb1tjbGFzcyo9XCJzcGFuXCJdIHtcclxuIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuaW5wdXRbZGlzYWJsZWRdLCBzZWxlY3RbZGlzYWJsZWRdLCB0ZXh0YXJlYVtkaXNhYmxlZF0sIGlucHV0W3JlYWRvbmx5XSwgc2VsZWN0W3JlYWRvbmx5XSwgdGV4dGFyZWFbcmVhZG9ubHldIHtcclxuXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuaW5wdXRbdHlwZT1yYWRpb11bZGlzYWJsZWRdLCBpbnB1dFt0eXBlPWNoZWNrYm94XVtkaXNhYmxlZF0sIGlucHV0W3R5cGU9cmFkaW9dW3JlYWRvbmx5XSwgaW5wdXRbdHlwZT1jaGVja2JveF1bcmVhZG9ubHldIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY29udHJvbC1ncm91cC53YXJuaW5nIC5jb250cm9sLWxhYmVsLCAuY29udHJvbC1ncm91cC53YXJuaW5nIC5oZWxwLWJsb2NrLCAuY29udHJvbC1ncm91cC53YXJuaW5nIC5oZWxwLWlubGluZSB7XHJcblx0Y29sb3I6ICNjMDk4NTM7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAud2FybmluZyAuY2hlY2tib3gsIC5jb250cm9sLWdyb3VwLndhcm5pbmcgLnJhZGlvLCAuY29udHJvbC1ncm91cC53YXJuaW5nIGlucHV0LCAuY29udHJvbC1ncm91cC53YXJuaW5nIHNlbGVjdCwgLmNvbnRyb2wtZ3JvdXAud2FybmluZyB0ZXh0YXJlYSB7XHJcblx0Y29sb3I6ICNjMDk4NTM7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAud2FybmluZyBpbnB1dCwgLmNvbnRyb2wtZ3JvdXAud2FybmluZyBzZWxlY3QsIC5jb250cm9sLWdyb3VwLndhcm5pbmcgdGV4dGFyZWEge1xyXG5cdGJvcmRlci1jb2xvcjogI2MwOTg1MztcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAud2FybmluZyBpbnB1dDpmb2N1cywgLmNvbnRyb2wtZ3JvdXAud2FybmluZyBzZWxlY3Q6Zm9jdXMsIC5jb250cm9sLWdyb3VwLndhcm5pbmcgdGV4dGFyZWE6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogI2E0N2UzYztcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZGJjNTllO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkYmM1OWU7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkYmM1OWU7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAud2FybmluZyAuaW5wdXQtcHJlcGVuZCAuYWRkLW9uLCAuY29udHJvbC1ncm91cC53YXJuaW5nIC5pbnB1dC1hcHBlbmQgLmFkZC1vbiB7XHJcblx0Y29sb3I6ICNjMDk4NTM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcclxuXHRib3JkZXItY29sb3I6ICNjMDk4NTM7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuZXJyb3IgLmNvbnRyb2wtbGFiZWwsIC5jb250cm9sLWdyb3VwLmVycm9yIC5oZWxwLWJsb2NrLCAuY29udHJvbC1ncm91cC5lcnJvciAuaGVscC1pbmxpbmUge1xyXG5cdGNvbG9yOiAjYjk0YTQ4O1xyXG59XHJcbi5jb250cm9sLWdyb3VwLmVycm9yIC5jaGVja2JveCwgLmNvbnRyb2wtZ3JvdXAuZXJyb3IgLnJhZGlvLCAuY29udHJvbC1ncm91cC5lcnJvciBpbnB1dCwgLmNvbnRyb2wtZ3JvdXAuZXJyb3Igc2VsZWN0LCAuY29udHJvbC1ncm91cC5lcnJvciB0ZXh0YXJlYSB7XHJcblx0Y29sb3I6ICNiOTRhNDg7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuZXJyb3IgaW5wdXQsIC5jb250cm9sLWdyb3VwLmVycm9yIHNlbGVjdCwgLmNvbnRyb2wtZ3JvdXAuZXJyb3IgdGV4dGFyZWEge1xyXG5cdGJvcmRlci1jb2xvcjogI2I5NGE0ODtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuZXJyb3IgaW5wdXQ6Zm9jdXMsIC5jb250cm9sLWdyb3VwLmVycm9yIHNlbGVjdDpmb2N1cywgLmNvbnRyb2wtZ3JvdXAuZXJyb3IgdGV4dGFyZWE6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzk1M2IzOTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkNTkzOTI7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkNTkzOTI7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuZXJyb3IgLmlucHV0LXByZXBlbmQgLmFkZC1vbiwgLmNvbnRyb2wtZ3JvdXAuZXJyb3IgLmlucHV0LWFwcGVuZCAuYWRkLW9uIHtcclxuXHRjb2xvcjogI2I5NGE0ODtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xyXG5cdGJvcmRlci1jb2xvcjogI2I5NGE0ODtcclxufVxyXG4uY29udHJvbC1ncm91cC5zdWNjZXNzIC5jb250cm9sLWxhYmVsLCAuY29udHJvbC1ncm91cC5zdWNjZXNzIC5oZWxwLWJsb2NrLCAuY29udHJvbC1ncm91cC5zdWNjZXNzIC5oZWxwLWlubGluZSB7XHJcblx0Y29sb3I6ICM0Njg4NDc7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuc3VjY2VzcyAuY2hlY2tib3gsIC5jb250cm9sLWdyb3VwLnN1Y2Nlc3MgLnJhZGlvLCAuY29udHJvbC1ncm91cC5zdWNjZXNzIGlucHV0LCAuY29udHJvbC1ncm91cC5zdWNjZXNzIHNlbGVjdCwgLmNvbnRyb2wtZ3JvdXAuc3VjY2VzcyB0ZXh0YXJlYSB7XHJcblx0Y29sb3I6ICM0Njg4NDc7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuc3VjY2VzcyBpbnB1dCwgLmNvbnRyb2wtZ3JvdXAuc3VjY2VzcyBzZWxlY3QsIC5jb250cm9sLWdyb3VwLnN1Y2Nlc3MgdGV4dGFyZWEge1xyXG5cdGJvcmRlci1jb2xvcjogIzQ2ODg0NztcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuc3VjY2VzcyBpbnB1dDpmb2N1cywgLmNvbnRyb2wtZ3JvdXAuc3VjY2VzcyBzZWxlY3Q6Zm9jdXMsIC5jb250cm9sLWdyb3VwLnN1Y2Nlc3MgdGV4dGFyZWE6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzM1NjYzNTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjN2FiYTdiO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICM3YWJhN2I7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICM3YWJhN2I7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuc3VjY2VzcyAuaW5wdXQtcHJlcGVuZCAuYWRkLW9uLCAuY29udHJvbC1ncm91cC5zdWNjZXNzIC5pbnB1dC1hcHBlbmQgLmFkZC1vbiB7XHJcblx0Y29sb3I6ICM0Njg4NDc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcclxuXHRib3JkZXItY29sb3I6ICM0Njg4NDc7XHJcbn1cclxuLmNvbnRyb2wtZ3JvdXAuaW5mbyAuY29udHJvbC1sYWJlbCwgLmNvbnRyb2wtZ3JvdXAuaW5mbyAuaGVscC1ibG9jaywgLmNvbnRyb2wtZ3JvdXAuaW5mbyAuaGVscC1pbmxpbmUge1xyXG5cdGNvbG9yOiAjM2E4N2FkO1xyXG59XHJcbi5jb250cm9sLWdyb3VwLmluZm8gLmNoZWNrYm94LCAuY29udHJvbC1ncm91cC5pbmZvIC5yYWRpbywgLmNvbnRyb2wtZ3JvdXAuaW5mbyBpbnB1dCwgLmNvbnRyb2wtZ3JvdXAuaW5mbyBzZWxlY3QsIC5jb250cm9sLWdyb3VwLmluZm8gdGV4dGFyZWEge1xyXG5cdGNvbG9yOiAjM2E4N2FkO1xyXG59XHJcbi5jb250cm9sLWdyb3VwLmluZm8gaW5wdXQsIC5jb250cm9sLWdyb3VwLmluZm8gc2VsZWN0LCAuY29udHJvbC1ncm91cC5pbmZvIHRleHRhcmVhIHtcclxuXHRib3JkZXItY29sb3I6ICMzYTg3YWQ7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG59XHJcbi5jb250cm9sLWdyb3VwLmluZm8gaW5wdXQ6Zm9jdXMsIC5jb250cm9sLWdyb3VwLmluZm8gc2VsZWN0OmZvY3VzLCAuY29udHJvbC1ncm91cC5pbmZvIHRleHRhcmVhOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICMyZDY5ODc7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggIzdhYjVkMztcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjN2FiNWQzO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjN2FiNWQzO1xyXG59XHJcbi5jb250cm9sLWdyb3VwLmluZm8gLmlucHV0LXByZXBlbmQgLmFkZC1vbiwgLmNvbnRyb2wtZ3JvdXAuaW5mbyAuaW5wdXQtYXBwZW5kIC5hZGQtb24ge1xyXG5cdGNvbG9yOiAjM2E4N2FkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XHJcblx0Ym9yZGVyLWNvbG9yOiAjM2E4N2FkO1xyXG59XHJcbiBpbnB1dDpmb2N1czppbnZhbGlkLCB0ZXh0YXJlYTpmb2N1czppbnZhbGlkLCBzZWxlY3Q6Zm9jdXM6aW52YWxpZCB7XHJcbiBjb2xvcjogI2I5NGE0ODtcclxuIGJvcmRlci1jb2xvcjogI2VlNWY1YjtcclxufVxyXG4gaW5wdXQ6Zm9jdXM6aW52YWxpZDpmb2N1cywgdGV4dGFyZWE6Zm9jdXM6aW52YWxpZDpmb2N1cywgc2VsZWN0OmZvY3VzOmludmFsaWQ6Zm9jdXMge1xyXG4gYm9yZGVyLWNvbG9yOiAjZTkzMjJkO1xyXG4gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNnB4ICNmOGI5Yjc7XHJcbiAtbW96LWJveC1zaGFkb3c6IDAgMCA2cHggI2Y4YjliNztcclxuIGJveC1zaGFkb3c6IDAgMCA2cHggI2Y4YjliNztcclxufVxyXG4uZm9ybS1hY3Rpb25zIHtcclxuXHRwYWRkaW5nOiAxOXB4IDIwcHggMjBweDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICp6b29tOiAxO1xyXG59XHJcbi5mb3JtLWFjdGlvbnM6YmVmb3JlLCAuZm9ybS1hY3Rpb25zOmFmdGVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHRsaW5lLWhlaWdodDogMDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5mb3JtLWFjdGlvbnM6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5oZWxwLWJsb2NrLCAuaGVscC1pbmxpbmUge1xyXG5cdGNvbG9yOiAjNTk1OTU5O1xyXG59XHJcbi5oZWxwLWJsb2NrIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5oZWxwLWlubGluZSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gKmRpc3BsYXk6IGlubGluZTtcclxuXHRwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gKnpvb206IDE7XHJcbn1cclxuLmlucHV0LWFwcGVuZCwgLmlucHV0LXByZXBlbmQge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmlucHV0LWFwcGVuZCBpbnB1dCwgLmlucHV0LXByZXBlbmQgaW5wdXQsIC5pbnB1dC1hcHBlbmQgc2VsZWN0LCAuaW5wdXQtcHJlcGVuZCBzZWxlY3QsIC5pbnB1dC1hcHBlbmQgLnVuZWRpdGFibGUtaW5wdXQsIC5pbnB1dC1wcmVwZW5kIC51bmVkaXRhYmxlLWlucHV0LCAuaW5wdXQtYXBwZW5kIC5kcm9wZG93bi1tZW51LCAuaW5wdXQtcHJlcGVuZCAuZHJvcGRvd24tbWVudSwgLmlucHV0LWFwcGVuZCAucG9wb3ZlciwgLmlucHV0LXByZXBlbmQgLnBvcG92ZXIge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaW5wdXQtYXBwZW5kIGlucHV0LCAuaW5wdXQtcHJlcGVuZCBpbnB1dCwgLmlucHV0LWFwcGVuZCBzZWxlY3QsIC5pbnB1dC1wcmVwZW5kIHNlbGVjdCwgLmlucHV0LWFwcGVuZCAudW5lZGl0YWJsZS1pbnB1dCwgLmlucHV0LXByZXBlbmQgLnVuZWRpdGFibGUtaW5wdXQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG4gKm1hcmdpbi1sZWZ0OiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG59XHJcbi5pbnB1dC1hcHBlbmQgaW5wdXQ6Zm9jdXMsIC5pbnB1dC1wcmVwZW5kIGlucHV0OmZvY3VzLCAuaW5wdXQtYXBwZW5kIHNlbGVjdDpmb2N1cywgLmlucHV0LXByZXBlbmQgc2VsZWN0OmZvY3VzLCAuaW5wdXQtYXBwZW5kIC51bmVkaXRhYmxlLWlucHV0OmZvY3VzLCAuaW5wdXQtcHJlcGVuZCAudW5lZGl0YWJsZS1pbnB1dDpmb2N1cyB7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG4uaW5wdXQtYXBwZW5kIC5hZGQtb24sIC5pbnB1dC1wcmVwZW5kIC5hZGQtb24ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0bWluLXdpZHRoOiAxNnB4O1xyXG5cdHBhZGRpbmc6IDRweCA1cHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5pbnB1dC1hcHBlbmQgLmFkZC1vbiwgLmlucHV0LXByZXBlbmQgLmFkZC1vbiwgLmlucHV0LWFwcGVuZCAuYnRuLCAuaW5wdXQtcHJlcGVuZCAuYnRuLCAuaW5wdXQtYXBwZW5kIC5idG4tZ3JvdXAgPiAuZHJvcGRvd24tdG9nZ2xlLCAuaW5wdXQtcHJlcGVuZCAuYnRuLWdyb3VwID4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmlucHV0LWFwcGVuZCAuYWN0aXZlLCAuaW5wdXQtcHJlcGVuZCAuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYTlkYmE5O1xyXG5cdGJvcmRlci1jb2xvcjogIzQ2YTU0NjtcclxufVxyXG4uaW5wdXQtcHJlcGVuZCAuYWRkLW9uLCAuaW5wdXQtcHJlcGVuZCAuYnRuIHtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xcHg7XHJcbn1cclxuLmlucHV0LXByZXBlbmQgLmFkZC1vbjpmaXJzdC1jaGlsZCwgLmlucHV0LXByZXBlbmQgLmJ0bjpmaXJzdC1jaGlsZCB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcbi5pbnB1dC1hcHBlbmQgaW5wdXQsIC5pbnB1dC1hcHBlbmQgc2VsZWN0LCAuaW5wdXQtYXBwZW5kIC51bmVkaXRhYmxlLWlucHV0IHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuLmlucHV0LWFwcGVuZCBpbnB1dCArIC5idG4tZ3JvdXAgLmJ0bjpsYXN0LWNoaWxkLCAuaW5wdXQtYXBwZW5kIHNlbGVjdCArIC5idG4tZ3JvdXAgLmJ0bjpsYXN0LWNoaWxkLCAuaW5wdXQtYXBwZW5kIC51bmVkaXRhYmxlLWlucHV0ICsgLmJ0bi1ncm91cCAuYnRuOmxhc3QtY2hpbGQge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuXHRib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxufVxyXG4uaW5wdXQtYXBwZW5kIC5hZGQtb24sIC5pbnB1dC1hcHBlbmQgLmJ0biwgLmlucHV0LWFwcGVuZCAuYnRuLWdyb3VwIHtcclxuXHRtYXJnaW4tbGVmdDogLTFweDtcclxufVxyXG4uaW5wdXQtYXBwZW5kIC5hZGQtb246bGFzdC1jaGlsZCwgLmlucHV0LWFwcGVuZCAuYnRuOmxhc3QtY2hpbGQsIC5pbnB1dC1hcHBlbmQgLmJ0bi1ncm91cDpsYXN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG59XHJcbi5pbnB1dC1wcmVwZW5kLmlucHV0LWFwcGVuZCBpbnB1dCwgLmlucHV0LXByZXBlbmQuaW5wdXQtYXBwZW5kIHNlbGVjdCwgLmlucHV0LXByZXBlbmQuaW5wdXQtYXBwZW5kIC51bmVkaXRhYmxlLWlucHV0IHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmlucHV0LXByZXBlbmQuaW5wdXQtYXBwZW5kIGlucHV0ICsgLmJ0bi1ncm91cCAuYnRuLCAuaW5wdXQtcHJlcGVuZC5pbnB1dC1hcHBlbmQgc2VsZWN0ICsgLmJ0bi1ncm91cCAuYnRuLCAuaW5wdXQtcHJlcGVuZC5pbnB1dC1hcHBlbmQgLnVuZWRpdGFibGUtaW5wdXQgKyAuYnRuLWdyb3VwIC5idG4ge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuXHRib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxufVxyXG4uaW5wdXQtcHJlcGVuZC5pbnB1dC1hcHBlbmQgLmFkZC1vbjpmaXJzdC1jaGlsZCwgLmlucHV0LXByZXBlbmQuaW5wdXQtYXBwZW5kIC5idG46Zmlyc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1yaWdodDogLTFweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuLmlucHV0LXByZXBlbmQuaW5wdXQtYXBwZW5kIC5hZGQtb246bGFzdC1jaGlsZCwgLmlucHV0LXByZXBlbmQuaW5wdXQtYXBwZW5kIC5idG46bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IC0xcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG59XHJcbi5pbnB1dC1wcmVwZW5kLmlucHV0LWFwcGVuZCAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG5pbnB1dC5zZWFyY2gtcXVlcnkge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcblx0cGFkZGluZy1yaWdodDogNHB4IFxcOTtcclxuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA0cHggXFw5O1xyXG5cdC8qIElFNy04IGRvZXNuJ3QgaGF2ZSBib3JkZXItcmFkaXVzLCBzbyBkb24ndCBpbmRlbnQgdGhlIHBhZGRpbmcgKi9cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLyogQWxsb3cgZm9yIGlucHV0IHByZXBlbmQvYXBwZW5kIGluIHNlYXJjaCBmb3JtcyAqL1xyXG5cclxuLmZvcm0tc2VhcmNoIC5pbnB1dC1hcHBlbmQgLnNlYXJjaC1xdWVyeSwgLmZvcm0tc2VhcmNoIC5pbnB1dC1wcmVwZW5kIC5zZWFyY2gtcXVlcnkge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zZWFyY2ggLmlucHV0LWFwcGVuZCAuc2VhcmNoLXF1ZXJ5IHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE0cHggMCAwIDE0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAxNHB4IDAgMCAxNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHggMCAwIDE0cHg7XHJcbn1cclxuLmZvcm0tc2VhcmNoIC5pbnB1dC1hcHBlbmQgLmJ0biB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDE0cHggMTRweCAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMCAxNHB4IDE0cHggMDtcclxuXHRib3JkZXItcmFkaXVzOiAwIDE0cHggMTRweCAwO1xyXG59XHJcbi5mb3JtLXNlYXJjaCAuaW5wdXQtcHJlcGVuZCAuc2VhcmNoLXF1ZXJ5IHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMTRweCAxNHB4IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDE0cHggMTRweCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMTRweCAxNHB4IDA7XHJcbn1cclxuLmZvcm0tc2VhcmNoIC5pbnB1dC1wcmVwZW5kIC5idG4ge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTRweCAwIDAgMTRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDE0cHggMCAwIDE0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweCAwIDAgMTRweDtcclxufVxyXG4uZm9ybS1zZWFyY2ggaW5wdXQsIC5mb3JtLWlubGluZSBpbnB1dCwgLmZvcm0taG9yaXpvbnRhbCBpbnB1dCwgLmZvcm0tc2VhcmNoIHRleHRhcmVhLCAuZm9ybS1pbmxpbmUgdGV4dGFyZWEsIC5mb3JtLWhvcml6b250YWwgdGV4dGFyZWEsIC5mb3JtLXNlYXJjaCBzZWxlY3QsIC5mb3JtLWlubGluZSBzZWxlY3QsIC5mb3JtLWhvcml6b250YWwgc2VsZWN0LCAuZm9ybS1zZWFyY2ggLmhlbHAtaW5saW5lLCAuZm9ybS1pbmxpbmUgLmhlbHAtaW5saW5lLCAuZm9ybS1ob3Jpem9udGFsIC5oZWxwLWlubGluZSwgLmZvcm0tc2VhcmNoIC51bmVkaXRhYmxlLWlucHV0LCAuZm9ybS1pbmxpbmUgLnVuZWRpdGFibGUtaW5wdXQsIC5mb3JtLWhvcml6b250YWwgLnVuZWRpdGFibGUtaW5wdXQsIC5mb3JtLXNlYXJjaCAuaW5wdXQtcHJlcGVuZCwgLmZvcm0taW5saW5lIC5pbnB1dC1wcmVwZW5kLCAuZm9ybS1ob3Jpem9udGFsIC5pbnB1dC1wcmVwZW5kLCAuZm9ybS1zZWFyY2ggLmlucHV0LWFwcGVuZCwgLmZvcm0taW5saW5lIC5pbnB1dC1hcHBlbmQsIC5mb3JtLWhvcml6b250YWwgLmlucHV0LWFwcGVuZCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gKmRpc3BsYXk6IGlubGluZTtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAqem9vbTogMTtcclxufVxyXG4uZm9ybS1zZWFyY2ggLmhpZGUsIC5mb3JtLWlubGluZSAuaGlkZSwgLmZvcm0taG9yaXpvbnRhbCAuaGlkZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uZm9ybS1zZWFyY2ggbGFiZWwsIC5mb3JtLWlubGluZSBsYWJlbCwgLmZvcm0tc2VhcmNoIC5idG4tZ3JvdXAsIC5mb3JtLWlubGluZSAuYnRuLWdyb3VwIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmZvcm0tc2VhcmNoIC5pbnB1dC1hcHBlbmQsIC5mb3JtLWlubGluZSAuaW5wdXQtYXBwZW5kLCAuZm9ybS1zZWFyY2ggLmlucHV0LXByZXBlbmQsIC5mb3JtLWlubGluZSAuaW5wdXQtcHJlcGVuZCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uZm9ybS1zZWFyY2ggLnJhZGlvLCAuZm9ybS1zZWFyY2ggLmNoZWNrYm94LCAuZm9ybS1pbmxpbmUgLnJhZGlvLCAuZm9ybS1pbmxpbmUgLmNoZWNrYm94IHtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5mb3JtLXNlYXJjaCAucmFkaW8gaW5wdXRbdHlwZT1yYWRpb10sIC5mb3JtLXNlYXJjaCAuY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0sIC5mb3JtLWlubGluZSAucmFkaW8gaW5wdXRbdHlwZT1yYWRpb10sIC5mb3JtLWlubGluZSAuY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1yaWdodDogM3B4O1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5jb250cm9sLWdyb3VwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmxlZ2VuZCArIC5jb250cm9sLWdyb3VwIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdC13ZWJraXQtbWFyZ2luLXRvcC1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuY29udHJvbC1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuICp6b29tOiAxO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtZ3JvdXA6YmVmb3JlLCAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWdyb3VwOmFmdGVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHRsaW5lLWhlaWdodDogMDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtZ3JvdXA6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWwge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAxNjBweDtcclxuXHRwYWRkaW5nLXRvcDogNXB4O1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmNvbnRyb2xzIHtcclxuICpkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAqcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxODBweDtcclxuICptYXJnaW4tbGVmdDogMDtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5jb250cm9sczpmaXJzdC1jaGlsZCB7XHJcbiAqcGFkZGluZy1sZWZ0OiAxODBweDtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5oZWxwLWJsb2NrIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgaW5wdXQgKyAuaGVscC1ibG9jaywgLmZvcm0taG9yaXpvbnRhbCBzZWxlY3QgKyAuaGVscC1ibG9jaywgLmZvcm0taG9yaXpvbnRhbCB0ZXh0YXJlYSArIC5oZWxwLWJsb2NrLCAuZm9ybS1ob3Jpem9udGFsIC51bmVkaXRhYmxlLWlucHV0ICsgLmhlbHAtYmxvY2ssIC5mb3JtLWhvcml6b250YWwgLmlucHV0LXByZXBlbmQgKyAuaGVscC1ibG9jaywgLmZvcm0taG9yaXpvbnRhbCAuaW5wdXQtYXBwZW5kICsgLmhlbHAtYmxvY2sge1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1hY3Rpb25zIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDE4MHB4O1xyXG59XHJcbnRhYmxlIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG4udGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuLnRhYmxlIHRoIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGFibGUgdGhlYWQgdGgge1xyXG5cdHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuLnRhYmxlIGNhcHRpb24gKyB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aCwgLnRhYmxlIGNhcHRpb24gKyB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0ZCwgLnRhYmxlIGNvbGdyb3VwICsgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGgsIC50YWJsZSBjb2xncm91cCArIHRoZWFkIHRyOmZpcnN0LWNoaWxkIHRkLCAudGFibGUgdGhlYWQ6Zmlyc3QtY2hpbGQgdHI6Zmlyc3QtY2hpbGQgdGgsIC50YWJsZSB0aGVhZDpmaXJzdC1jaGlsZCB0cjpmaXJzdC1jaGlsZCB0ZCB7XHJcblx0Ym9yZGVyLXRvcDogMDtcclxufVxyXG4udGFibGUgdGJvZHkgKyB0Ym9keSB7XHJcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuLnRhYmxlIC50YWJsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4udGFibGUtY29uZGVuc2VkIHRoLCAudGFibGUtY29uZGVuc2VkIHRkIHtcclxuXHRwYWRkaW5nOiA0cHggNXB4O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuXHRib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gKmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLWxlZnQ6IDA7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB0aCwgLnRhYmxlLWJvcmRlcmVkIHRkIHtcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkIGNhcHRpb24gKyB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aCwgLnRhYmxlLWJvcmRlcmVkIGNhcHRpb24gKyB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0aCwgLnRhYmxlLWJvcmRlcmVkIGNhcHRpb24gKyB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIGNvbGdyb3VwICsgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGgsIC50YWJsZS1ib3JkZXJlZCBjb2xncm91cCArIHRib2R5IHRyOmZpcnN0LWNoaWxkIHRoLCAudGFibGUtYm9yZGVyZWQgY29sZ3JvdXAgKyB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIHRoZWFkOmZpcnN0LWNoaWxkIHRyOmZpcnN0LWNoaWxkIHRoLCAudGFibGUtYm9yZGVyZWQgdGJvZHk6Zmlyc3QtY2hpbGQgdHI6Zmlyc3QtY2hpbGQgdGgsIC50YWJsZS1ib3JkZXJlZCB0Ym9keTpmaXJzdC1jaGlsZCB0cjpmaXJzdC1jaGlsZCB0ZCB7XHJcblx0Ym9yZGVyLXRvcDogMDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQ6Zmlyc3QtY2hpbGQgdHI6Zmlyc3QtY2hpbGQgPiB0aDpmaXJzdC1jaGlsZCwgLnRhYmxlLWJvcmRlcmVkIHRib2R5OmZpcnN0LWNoaWxkIHRyOmZpcnN0LWNoaWxkID4gdGQ6Zmlyc3QtY2hpbGQsIC50YWJsZS1ib3JkZXJlZCB0Ym9keTpmaXJzdC1jaGlsZCB0cjpmaXJzdC1jaGlsZCA+IHRoOmZpcnN0LWNoaWxkIHtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDRweDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQ6Zmlyc3QtY2hpbGQgdHI6Zmlyc3QtY2hpbGQgPiB0aDpsYXN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgdGJvZHk6Zmlyc3QtY2hpbGQgdHI6Zmlyc3QtY2hpbGQgPiB0ZDpsYXN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgdGJvZHk6Zmlyc3QtY2hpbGQgdHI6Zmlyc3QtY2hpbGQgPiB0aDpsYXN0LWNoaWxkIHtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDRweDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQ6bGFzdC1jaGlsZCB0cjpsYXN0LWNoaWxkID4gdGg6Zmlyc3QtY2hpbGQsIC50YWJsZS1ib3JkZXJlZCB0Ym9keTpsYXN0LWNoaWxkIHRyOmxhc3QtY2hpbGQgPiB0ZDpmaXJzdC1jaGlsZCwgLnRhYmxlLWJvcmRlcmVkIHRib2R5Omxhc3QtY2hpbGQgdHI6bGFzdC1jaGlsZCA+IHRoOmZpcnN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgdGZvb3Q6bGFzdC1jaGlsZCB0cjpsYXN0LWNoaWxkID4gdGQ6Zmlyc3QtY2hpbGQsIC50YWJsZS1ib3JkZXJlZCB0Zm9vdDpsYXN0LWNoaWxkIHRyOmxhc3QtY2hpbGQgPiB0aDpmaXJzdC1jaGlsZCB7XHJcblx0LXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA0cHg7XHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkOmxhc3QtY2hpbGQgdHI6bGFzdC1jaGlsZCA+IHRoOmxhc3QtY2hpbGQsIC50YWJsZS1ib3JkZXJlZCB0Ym9keTpsYXN0LWNoaWxkIHRyOmxhc3QtY2hpbGQgPiB0ZDpsYXN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgdGJvZHk6bGFzdC1jaGlsZCB0cjpsYXN0LWNoaWxkID4gdGg6bGFzdC1jaGlsZCwgLnRhYmxlLWJvcmRlcmVkIHRmb290Omxhc3QtY2hpbGQgdHI6bGFzdC1jaGlsZCA+IHRkOmxhc3QtY2hpbGQsIC50YWJsZS1ib3JkZXJlZCB0Zm9vdDpsYXN0LWNoaWxkIHRyOmxhc3QtY2hpbGQgPiB0aDpsYXN0LWNoaWxkIHtcclxuXHQtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6IDRweDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgdGZvb3QgKyB0Ym9keTpsYXN0LWNoaWxkIHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xyXG5cdC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAwO1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB0Zm9vdCArIHRib2R5Omxhc3QtY2hpbGQgdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuXHQtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogMDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgY2FwdGlvbiArIHRoZWFkIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgY2FwdGlvbiArIHRib2R5IHRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgY29sZ3JvdXAgKyB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwgLnRhYmxlLWJvcmRlcmVkIGNvbGdyb3VwICsgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xyXG5cdC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNHB4O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCBjYXB0aW9uICsgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwgLnRhYmxlLWJvcmRlcmVkIGNhcHRpb24gKyB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgY29sZ3JvdXAgKyB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLCAudGFibGUtYm9yZGVyZWQgY29sZ3JvdXAgKyB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDRweDtcclxufVxyXG4gLnRhYmxlLXN0cmlwZWQgdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRkLCAudGFibGUtc3RyaXBlZCB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGgge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxufVxyXG4udGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIgPiB0ZCwgLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyID4gdGgge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuIHRhYmxlIHRkW2NsYXNzKj1cInNwYW5cIl0sIHRhYmxlIHRoW2NsYXNzKj1cInNwYW5cIl0sIC5yb3ctZmx1aWQgdGFibGUgdGRbY2xhc3MqPVwic3BhblwiXSwgLnJvdy1mbHVpZCB0YWJsZSB0aFtjbGFzcyo9XCJzcGFuXCJdIHtcclxuIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiBmbG9hdDogbm9uZTtcclxuIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi50YWJsZSB0ZC5zcGFuMSwgLnRhYmxlIHRoLnNwYW4xIHtcclxuXHRmbG9hdDogbm9uZTtcclxuXHR3aWR0aDogNDRweDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG4udGFibGUgdGQuc3BhbjIsIC50YWJsZSB0aC5zcGFuMiB7XHJcblx0ZmxvYXQ6IG5vbmU7XHJcblx0d2lkdGg6IDEyNHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi50YWJsZSB0ZC5zcGFuMywgLnRhYmxlIHRoLnNwYW4zIHtcclxuXHRmbG9hdDogbm9uZTtcclxuXHR3aWR0aDogMjA0cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLnRhYmxlIHRkLnNwYW40LCAudGFibGUgdGguc3BhbjQge1xyXG5cdGZsb2F0OiBub25lO1xyXG5cdHdpZHRoOiAyODRweDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG4udGFibGUgdGQuc3BhbjUsIC50YWJsZSB0aC5zcGFuNSB7XHJcblx0ZmxvYXQ6IG5vbmU7XHJcblx0d2lkdGg6IDM2NHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi50YWJsZSB0ZC5zcGFuNiwgLnRhYmxlIHRoLnNwYW42IHtcclxuXHRmbG9hdDogbm9uZTtcclxuXHR3aWR0aDogNDQ0cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLnRhYmxlIHRkLnNwYW43LCAudGFibGUgdGguc3Bhbjcge1xyXG5cdGZsb2F0OiBub25lO1xyXG5cdHdpZHRoOiA1MjRweDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG4udGFibGUgdGQuc3BhbjgsIC50YWJsZSB0aC5zcGFuOCB7XHJcblx0ZmxvYXQ6IG5vbmU7XHJcblx0d2lkdGg6IDYwNHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi50YWJsZSB0ZC5zcGFuOSwgLnRhYmxlIHRoLnNwYW45IHtcclxuXHRmbG9hdDogbm9uZTtcclxuXHR3aWR0aDogNjg0cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLnRhYmxlIHRkLnNwYW4xMCwgLnRhYmxlIHRoLnNwYW4xMCB7XHJcblx0ZmxvYXQ6IG5vbmU7XHJcblx0d2lkdGg6IDc2NHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi50YWJsZSB0ZC5zcGFuMTEsIC50YWJsZSB0aC5zcGFuMTEge1xyXG5cdGZsb2F0OiBub25lO1xyXG5cdHdpZHRoOiA4NDRweDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG4udGFibGUgdGQuc3BhbjEyLCAudGFibGUgdGguc3BhbjEyIHtcclxuXHRmbG9hdDogbm9uZTtcclxuXHR3aWR0aDogOTI0cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyLnN1Y2Nlc3MgPiB0ZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcclxufVxyXG4udGFibGUgdGJvZHkgdHIuZXJyb3IgPiB0ZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcclxufVxyXG4udGFibGUgdGJvZHkgdHIud2FybmluZyA+IHRkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ci5pbmZvID4gdGQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XHJcbn1cclxuLnRhYmxlLWhvdmVyIHRib2R5IHRyLnN1Y2Nlc3M6aG92ZXIgPiB0ZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2QwZTljNjtcclxufVxyXG4udGFibGUtaG92ZXIgdGJvZHkgdHIuZXJyb3I6aG92ZXIgPiB0ZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ViY2NjYztcclxufVxyXG4udGFibGUtaG92ZXIgdGJvZHkgdHIud2FybmluZzpob3ZlciA+IHRkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmMmNjO1xyXG59XHJcbi50YWJsZS1ob3ZlciB0Ym9keSB0ci5pbmZvOmhvdmVyID4gdGQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjNGUzZjM7XHJcbn1cclxuLypbY2xhc3NePVwiaWNvbi1cIl0sXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICptYXJnaW4tcmlnaHQ6IC4zZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9nbHlwaGljb25zLWhhbGZsaW5ncy5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCAxNHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0qL1xyXG5cclxuLyogV2hpdGUgaWNvbnMgd2l0aCBvcHRpb25hbCBjbGFzcywgb3Igb24gaG92ZXIvZm9jdXMvYWN0aXZlIHN0YXRlcyBvZiBjZXJ0YWluIGVsZW1lbnRzICovXHJcblxyXG4vKi5pY29uLXdoaXRlLFxyXG4ubmF2LXBpbGxzID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXYtcGlsbHMgPiAuYWN0aXZlID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5uYXYtbGlzdCA+IC5hY3RpdmUgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2LWxpc3QgPiAuYWN0aXZlID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5uYXZiYXItaW52ZXJzZSAubmF2ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXZiYXItaW52ZXJzZSAubmF2ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLmRyb3Bkb3duLXN1Ym1lbnU6aG92ZXIgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4uZHJvcGRvd24tc3VibWVudTpmb2N1cyA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1zdWJtZW51OmZvY3VzID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9nbHlwaGljb25zLWhhbGZsaW5ncy13aGl0ZS5wbmdcIik7XHJcbn0qL1xyXG5cclxuLmljb24tZ2xhc3Mge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxufVxyXG4uaWNvbi1tdXNpYyB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggMDtcclxufVxyXG4uaWNvbi1zZWFyY2gge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7XHJcbn1cclxuLmljb24tZW52ZWxvcGUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC03MnB4IDA7XHJcbn1cclxuLmljb24taGVhcnQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IDA7XHJcbn1cclxuLmljb24tc3RhciB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4IDA7XHJcbn1cclxuLmljb24tc3Rhci1lbXB0eSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IDA7XHJcbn1cclxuLmljb24tdXNlciB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTE2OHB4IDA7XHJcbn1cclxuLmljb24tZmlsbSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IDA7XHJcbn1cclxuLmljb24tdGgtbGFyZ2Uge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yMTZweCAwO1xyXG59XHJcbi5pY29uLXRoIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggMDtcclxufVxyXG4uaWNvbi10aC1saXN0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjY0cHggMDtcclxufVxyXG4uaWNvbi1vayB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTI4OHB4IDA7XHJcbn1cclxuLmljb24tcmVtb3ZlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzEycHggMDtcclxufVxyXG4uaWNvbi16b29tLWluIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzM2cHggMDtcclxufVxyXG4uaWNvbi16b29tLW91dCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTM2MHB4IDA7XHJcbn1cclxuLmljb24tb2ZmIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzg0cHggMDtcclxufVxyXG4uaWNvbi1zaWduYWwge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00MDhweCAwO1xyXG59XHJcbi5pY29uLWNvZyB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQzMnB4IDA7XHJcbn1cclxuLmljb24tdHJhc2gge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00NTZweCAwO1xyXG59XHJcbi5pY29uLWhvbWUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI0cHg7XHJcbn1cclxuLmljb24tZmlsZSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTI0cHg7XHJcbn1cclxuLmljb24tdGltZSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTI0cHg7XHJcbn1cclxuLmljb24tcm9hZCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTcycHggLTI0cHg7XHJcbn1cclxuLmljb24tZG93bmxvYWQtYWx0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMjRweDtcclxufVxyXG4uaWNvbi1kb3dubG9hZCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4IC0yNHB4O1xyXG59XHJcbi5pY29uLXVwbG9hZCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0yNHB4O1xyXG59XHJcbi5pY29uLWluYm94IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTY4cHggLTI0cHg7XHJcbn1cclxuLmljb24tcGxheS1jaXJjbGUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMjRweDtcclxufVxyXG4uaWNvbi1yZXBlYXQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yMTZweCAtMjRweDtcclxufVxyXG4uaWNvbi1yZWZyZXNoIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTI0cHg7XHJcbn1cclxuLmljb24tbGlzdC1hbHQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNjRweCAtMjRweDtcclxufVxyXG4uaWNvbi1sb2NrIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg3cHggLTI0cHg7XHJcbn1cclxuLmljb24tZmxhZyB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxMnB4IC0yNHB4O1xyXG59XHJcbi5pY29uLWhlYWRwaG9uZXMge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zMzZweCAtMjRweDtcclxufVxyXG4uaWNvbi12b2x1bWUtb2ZmIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzYwcHggLTI0cHg7XHJcbn1cclxuLmljb24tdm9sdW1lLWRvd24ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zODRweCAtMjRweDtcclxufVxyXG4uaWNvbi12b2x1bWUtdXAge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00MDhweCAtMjRweDtcclxufVxyXG4uaWNvbi1xcmNvZGUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00MzJweCAtMjRweDtcclxufVxyXG4uaWNvbi1iYXJjb2RlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDU2cHggLTI0cHg7XHJcbn1cclxuLmljb24tdGFnIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00OHB4O1xyXG59XHJcbi5pY29uLXRhZ3Mge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNXB4IC00OHB4O1xyXG59XHJcbi5pY29uLWJvb2sge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC00OHB4O1xyXG59XHJcbi5pY29uLWJvb2ttYXJrIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzJweCAtNDhweDtcclxufVxyXG4uaWNvbi1wcmludCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ4cHg7XHJcbn1cclxuLmljb24tY2FtZXJhIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTIwcHggLTQ4cHg7XHJcbn1cclxuLmljb24tZm9udCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC00OHB4O1xyXG59XHJcbi5pY29uLWJvbGQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xNjdweCAtNDhweDtcclxufVxyXG4uaWNvbi1pdGFsaWMge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDhweDtcclxufVxyXG4uaWNvbi10ZXh0LWhlaWdodCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTIxNnB4IC00OHB4O1xyXG59XHJcbi5pY29uLXRleHQtd2lkdGgge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDhweDtcclxufVxyXG4uaWNvbi1hbGlnbi1sZWZ0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjY0cHggLTQ4cHg7XHJcbn1cclxuLmljb24tYWxpZ24tY2VudGVyIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg4cHggLTQ4cHg7XHJcbn1cclxuLmljb24tYWxpZ24tcmlnaHQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zMTJweCAtNDhweDtcclxufVxyXG4uaWNvbi1hbGlnbi1qdXN0aWZ5IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzM2cHggLTQ4cHg7XHJcbn1cclxuLmljb24tbGlzdCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTM2MHB4IC00OHB4O1xyXG59XHJcbi5pY29uLWluZGVudC1sZWZ0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzg0cHggLTQ4cHg7XHJcbn1cclxuLmljb24taW5kZW50LXJpZ2h0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDA4cHggLTQ4cHg7XHJcbn1cclxuLmljb24tZmFjZXRpbWUtdmlkZW8ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00MzJweCAtNDhweDtcclxufVxyXG4uaWNvbi1waWN0dXJlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDU2cHggLTQ4cHg7XHJcbn1cclxuLmljb24tcGVuY2lsIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC03MnB4O1xyXG59XHJcbi5pY29uLW1hcC1tYXJrZXIge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNHB4IC03MnB4O1xyXG59XHJcbi5pY29uLWFkanVzdCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTcycHg7XHJcbn1cclxuLmljb24tdGludCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTcycHggLTcycHg7XHJcbn1cclxuLmljb24tZWRpdCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTcycHg7XHJcbn1cclxuLmljb24tc2hhcmUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xMjBweCAtNzJweDtcclxufVxyXG4uaWNvbi1jaGVjayB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC03MnB4O1xyXG59XHJcbi5pY29uLW1vdmUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xNjhweCAtNzJweDtcclxufVxyXG4uaWNvbi1zdGVwLWJhY2t3YXJkIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTcycHg7XHJcbn1cclxuLmljb24tZmFzdC1iYWNrd2FyZCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTIxNnB4IC03MnB4O1xyXG59XHJcbi5pY29uLWJhY2t3YXJkIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTcycHg7XHJcbn1cclxuLmljb24tcGxheSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTI2NHB4IC03MnB4O1xyXG59XHJcbi5pY29uLXBhdXNlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg4cHggLTcycHg7XHJcbn1cclxuLmljb24tc3RvcCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxMnB4IC03MnB4O1xyXG59XHJcbi5pY29uLWZvcndhcmQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zMzZweCAtNzJweDtcclxufVxyXG4uaWNvbi1mYXN0LWZvcndhcmQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zNjBweCAtNzJweDtcclxufVxyXG4uaWNvbi1zdGVwLWZvcndhcmQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zODRweCAtNzJweDtcclxufVxyXG4uaWNvbi1lamVjdCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQwOHB4IC03MnB4O1xyXG59XHJcbi5pY29uLWNoZXZyb24tbGVmdCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQzMnB4IC03MnB4O1xyXG59XHJcbi5pY29uLWNoZXZyb24tcmlnaHQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00NTZweCAtNzJweDtcclxufVxyXG4uaWNvbi1wbHVzLXNpZ24ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgLTk2cHg7XHJcbn1cclxuLmljb24tbWludXMtc2lnbiB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTk2cHg7XHJcbn1cclxuLmljb24tcmVtb3ZlLXNpZ24ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC05NnB4O1xyXG59XHJcbi5pY29uLW9rLXNpZ24ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC03MnB4IC05NnB4O1xyXG59XHJcbi5pY29uLXF1ZXN0aW9uLXNpZ24ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC05NnB4O1xyXG59XHJcbi5pY29uLWluZm8tc2lnbiB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4IC05NnB4O1xyXG59XHJcbi5pY29uLXNjcmVlbnNob3Qge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtOTZweDtcclxufVxyXG4uaWNvbi1yZW1vdmUtY2lyY2xlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTY4cHggLTk2cHg7XHJcbn1cclxuLmljb24tb2stY2lyY2xlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk2cHg7XHJcbn1cclxuLmljb24tYmFuLWNpcmNsZSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTIxNnB4IC05NnB4O1xyXG59XHJcbi5pY29uLWFycm93LWxlZnQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtOTZweDtcclxufVxyXG4uaWNvbi1hcnJvdy1yaWdodCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTI2NHB4IC05NnB4O1xyXG59XHJcbi5pY29uLWFycm93LXVwIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg5cHggLTk2cHg7XHJcbn1cclxuLmljb24tYXJyb3ctZG93biB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxMnB4IC05NnB4O1xyXG59XHJcbi5pY29uLXNoYXJlLWFsdCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMzNnB4IC05NnB4O1xyXG59XHJcbi5pY29uLXJlc2l6ZS1mdWxsIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzYwcHggLTk2cHg7XHJcbn1cclxuLmljb24tcmVzaXplLXNtYWxsIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzg0cHggLTk2cHg7XHJcbn1cclxuLmljb24tcGx1cyB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQwOHB4IC05NnB4O1xyXG59XHJcbi5pY29uLW1pbnVzIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDMzcHggLTk2cHg7XHJcbn1cclxuLmljb24tYXN0ZXJpc2sge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00NTZweCAtOTZweDtcclxufVxyXG4uaWNvbi1leGNsYW1hdGlvbi1zaWduIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMjBweDtcclxufVxyXG4uaWNvbi1naWZ0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAtMTIwcHg7XHJcbn1cclxuLmljb24tbGVhZiB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTEyMHB4O1xyXG59XHJcbi5pY29uLWZpcmUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC03MnB4IC0xMjBweDtcclxufVxyXG4uaWNvbi1leWUtb3BlbiB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyMHB4O1xyXG59XHJcbi5pY29uLWV5ZS1jbG9zZSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4IC0xMjBweDtcclxufVxyXG4uaWNvbi13YXJuaW5nLXNpZ24ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTIwcHg7XHJcbn1cclxuLmljb24tcGxhbmUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xNjhweCAtMTIwcHg7XHJcbn1cclxuLmljb24tY2FsZW5kYXIge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTIwcHg7XHJcbn1cclxuLmljb24tcmFuZG9tIHtcclxuXHR3aWR0aDogMTZweDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjE2cHggLTEyMHB4O1xyXG59XHJcbi5pY29uLWNvbW1lbnQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTIwcHg7XHJcbn1cclxuLmljb24tbWFnbmV0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjY0cHggLTEyMHB4O1xyXG59XHJcbi5pY29uLWNoZXZyb24tdXAge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yODhweCAtMTIwcHg7XHJcbn1cclxuLmljb24tY2hldnJvbi1kb3duIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzEzcHggLTExOXB4O1xyXG59XHJcbi5pY29uLXJldHdlZXQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zMzZweCAtMTIwcHg7XHJcbn1cclxuLmljb24tc2hvcHBpbmctY2FydCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTM2MHB4IC0xMjBweDtcclxufVxyXG4uaWNvbi1mb2xkZXItY2xvc2Uge1xyXG5cdHdpZHRoOiAxNnB4O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0zODRweCAtMTIwcHg7XHJcbn1cclxuLmljb24tZm9sZGVyLW9wZW4ge1xyXG5cdHdpZHRoOiAxNnB4O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00MDhweCAtMTIwcHg7XHJcbn1cclxuLmljb24tcmVzaXplLXZlcnRpY2FsIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDMycHggLTExOXB4O1xyXG59XHJcbi5pY29uLXJlc2l6ZS1ob3Jpem9udGFsIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDU2cHggLTExOHB4O1xyXG59XHJcbi5pY29uLWhkZCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTQ0cHg7XHJcbn1cclxuLmljb24tYnVsbGhvcm4ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNHB4IC0xNDRweDtcclxufVxyXG4uaWNvbi1iZWxsIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTQ0cHg7XHJcbn1cclxuLmljb24tY2VydGlmaWNhdGUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC03MnB4IC0xNDRweDtcclxufVxyXG4uaWNvbi10aHVtYnMtdXAge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNDRweDtcclxufVxyXG4uaWNvbi10aHVtYnMtZG93biB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4IC0xNDRweDtcclxufVxyXG4uaWNvbi1oYW5kLXJpZ2h0IHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE0NHB4O1xyXG59XHJcbi5pY29uLWhhbmQtbGVmdCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTE2OHB4IC0xNDRweDtcclxufVxyXG4uaWNvbi1oYW5kLXVwIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTE0NHB4O1xyXG59XHJcbi5pY29uLWhhbmQtZG93biB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTIxNnB4IC0xNDRweDtcclxufVxyXG4uaWNvbi1jaXJjbGUtYXJyb3ctcmlnaHQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTQ0cHg7XHJcbn1cclxuLmljb24tY2lyY2xlLWFycm93LWxlZnQge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0yNjRweCAtMTQ0cHg7XHJcbn1cclxuLmljb24tY2lyY2xlLWFycm93LXVwIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg4cHggLTE0NHB4O1xyXG59XHJcbi5pY29uLWNpcmNsZS1hcnJvdy1kb3duIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzEycHggLTE0NHB4O1xyXG59XHJcbi5pY29uLWdsb2JlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzM2cHggLTE0NHB4O1xyXG59XHJcbi5pY29uLXdyZW5jaCB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTM2MHB4IC0xNDRweDtcclxufVxyXG4uaWNvbi10YXNrcyB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTM4NHB4IC0xNDRweDtcclxufVxyXG4uaWNvbi1maWx0ZXIge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00MDhweCAtMTQ0cHg7XHJcbn1cclxuLmljb24tYnJpZWZjYXNlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDMycHggLTE0NHB4O1xyXG59XHJcbi5pY29uLWZ1bGxzY3JlZW4ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00NTZweCAtMTQ0cHg7XHJcbn1cclxuLmRyb3B1cCwgLmRyb3Bkb3duIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAqbWFyZ2luLWJvdHRvbTogLTNweDtcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSwgLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0b3V0bGluZTogMDtcclxufVxyXG4uY2FyZXQge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHRib3JkZXItdG9wOiA0cHggc29saWQgIzAwMDAwMDtcclxuXHRib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLmRyb3Bkb3duIC5jYXJldCB7XHJcblx0bWFyZ2luLXRvcDogOHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDEwMCU7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWluLXdpZHRoOiAxNjBweDtcclxuXHRwYWRkaW5nOiA1cHggMDtcclxuXHRtYXJnaW46IDJweCAwIDA7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gKmJvcmRlci1yaWdodC13aWR0aDogMnB4O1xyXG4gKmJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHQtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG59XHJcbi5kcm9wZG93bi1tZW51LnB1bGwtcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGxlZnQ6IGF1dG87XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgLmRpdmlkZXIge1xyXG4gKndpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdG1hcmdpbjogOXB4IDFweDtcclxuICptYXJnaW46IC01cHggMCA1cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAzcHggMjBweDtcclxuXHRjbGVhcjogYm90aDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGNvbG9yOiAjMzMzMzMzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzLCAuZHJvcGRvd24tc3VibWVudTpob3ZlciA+IGEsIC5kcm9wZG93bi1zdWJtZW51OmZvY3VzID4gYSB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDgxYzI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDg4Y2MsICMwMDc3YjMpO1xyXG59XHJcbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MWMyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDg4Y2MsICMwMDc3YjMpO1xyXG59XHJcbi5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYSwgLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhOmhvdmVyLCAuZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6Zm9jdXMge1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbi5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhOmZvY3VzIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkPWZhbHNlKTtcclxufVxyXG4ub3BlbiB7XHJcbiAqei1pbmRleDogMTAwMDtcclxufVxyXG4ub3BlbiA+IC5kcm9wZG93bi1tZW51IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucHVsbC1yaWdodCA+IC5kcm9wZG93bi1tZW51IHtcclxuXHRyaWdodDogMDtcclxuXHRsZWZ0OiBhdXRvO1xyXG59XHJcbi5kcm9wdXAgLmNhcmV0LCAubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24gLmNhcmV0IHtcclxuXHRib3JkZXItdG9wOiAwO1xyXG5cdGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDAwMDAwO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLmRyb3B1cCAuZHJvcGRvd24tbWVudSwgLm5hdmJhci1maXhlZC1ib3R0b20gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuXHR0b3A6IGF1dG87XHJcblx0Ym90dG9tOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG4uZHJvcGRvd24tc3VibWVudSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kcm9wZG93bi1zdWJtZW51ID4gLmRyb3Bkb3duLW1lbnUge1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDZweCA2cHggNnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiAwIDZweCA2cHggNnB4O1xyXG59XHJcbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gLmRyb3Bkb3duLW1lbnUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5kcm9wdXAgLmRyb3Bkb3duLXN1Ym1lbnUgPiAuZHJvcGRvd24tbWVudSB7XHJcblx0dG9wOiBhdXRvO1xyXG5cdGJvdHRvbTogMDtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IC0ycHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggMDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCAwO1xyXG59XHJcbi5kcm9wZG93bi1zdWJtZW51ID4gYTphZnRlciB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjY2NjO1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4O1xyXG5cdGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gYTphZnRlciB7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRyb3Bkb3duLXN1Ym1lbnUucHVsbC1sZWZ0IHtcclxuXHRmbG9hdDogbm9uZTtcclxufVxyXG4uZHJvcGRvd24tc3VibWVudS5wdWxsLWxlZnQgPiAuZHJvcGRvd24tbWVudSB7XHJcblx0bGVmdDogLTEwMCU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHggMCA2cHggNnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNnB4IDAgNnB4IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHggMCA2cHggNnB4O1xyXG59XHJcbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAubmF2LWhlYWRlciB7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnR5cGVhaGVhZCB7XHJcblx0ei1pbmRleDogMTA1MTtcclxuXHRtYXJnaW4tdG9wOiAycHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi53ZWxsIHtcclxuXHRtaW4taGVpZ2h0OiAyMHB4O1xyXG5cdHBhZGRpbmc6IDE5cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4ud2VsbCBibG9ja3F1b3RlIHtcclxuXHRib3JkZXItY29sb3I6ICNkZGQ7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcbi53ZWxsLWxhcmdlIHtcclxuXHRwYWRkaW5nOiAyNHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4ud2VsbC1zbWFsbCB7XHJcblx0cGFkZGluZzogOXB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uZmFkZSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcblx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbn1cclxuLmZhZGUuaW4ge1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbGxhcHNlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjM1cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjM1cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGhlaWdodCAwLjM1cyBlYXNlO1xyXG59XHJcbi5jb2xsYXBzZS5pbiB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jbG9zZSB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xyXG5cdG9wYWNpdHk6IDAuMjtcclxuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xyXG59XHJcbi5jbG9zZTpob3ZlciwgLmNsb3NlOmZvY3VzIHtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG9wYWNpdHk6IDAuNDtcclxuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xyXG59XHJcbmJ1dHRvbi5jbG9zZSB7XHJcblx0cGFkZGluZzogMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uYnRuIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAqYm9yZGVyLWxlZnQ6IDAgbm9uZSAjZTZlNmU2O1xyXG5cdGJvcmRlci1yaWdodDogMCBub25lICNlNmU2ZTY7XHJcblx0Ym9yZGVyLXRvcDogMCBub25lICNlNmU2ZTY7XHJcblx0Ym9yZGVyLWJvdHRvbTogMCBub25lICNiM2IzYjM7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG5cdHBhZGRpbmc6IDRweCAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbiAqbWFyZ2luLWxlZnQ6IC4zZW07XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGNvbG9yOiAjMzMzMzMzO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICotd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0em9vbTogMTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiwgI2U2ZTZlNik7XHJcblxyXG59XHJcbi5idG46aG92ZXIsIC5idG46Zm9jdXMsIC5idG46YWN0aXZlLCAuYnRuLmFjdGl2ZSwgLmJ0bi5kaXNhYmxlZCwgLmJ0bltkaXNhYmxlZF0ge1xyXG5cdGNvbG9yOiAjMzMzMzMzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAqYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcclxufVxyXG4uYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2MgXFw5O1xyXG59XHJcbi5idG46Zmlyc3QtY2hpbGQge1xyXG4gKm1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5idG46aG92ZXIsIC5idG46Zm9jdXMge1xyXG5cdGNvbG9yOiAjMzMzMzMzO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNXB4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcclxuXHQtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XHJcblx0LW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcclxuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xyXG59XHJcbi5idG46Zm9jdXMge1xyXG5cdG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XHJcblx0b3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xyXG5cdG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG59XHJcbi5idG4uYWN0aXZlLCAuYnRuOmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4uYnRuLmRpc2FibGVkLCAuYnRuW2Rpc2FibGVkXSB7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcblx0b3BhY2l0eTogMC42NTtcclxuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjUpO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHQtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLWxhcmdlIHtcclxuXHRwYWRkaW5nOiAxMXB4IDE5cHg7XHJcblx0Zm9udC1zaXplOiAxNy41cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbiAuYnRuLWxhcmdlIFtjbGFzc149XCJpY29uLVwiXSwgLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4uYnRuLXNtYWxsIHtcclxuXHRwYWRkaW5nOiAycHggMTBweDtcclxuXHRmb250LXNpemU6IDExLjlweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuIC5idG4tc21hbGwgW2NsYXNzXj1cImljb24tXCJdLCAuYnRuLXNtYWxsIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gbWFyZ2luLXRvcDogMDtcclxufVxyXG4gLmJ0bi1taW5pIFtjbGFzc149XCJpY29uLVwiXSwgLmJ0bi1taW5pIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG4uYnRuLW1pbmkge1xyXG5cdHBhZGRpbmc6IDAgNnB4O1xyXG5cdGZvbnQtc2l6ZTogMTAuNXB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uYnRuLWJsb2NrIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cdHBhZGRpbmctbGVmdDogMDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnRuLWJsb2NrLCBpbnB1dFt0eXBlPXJlc2V0XS5idG4tYmxvY2ssIGlucHV0W3R5cGU9YnV0dG9uXS5idG4tYmxvY2sge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4tcHJpbWFyeS5hY3RpdmUsIC5idG4td2FybmluZy5hY3RpdmUsIC5idG4tZGFuZ2VyLmFjdGl2ZSwgLmJ0bi1zdWNjZXNzLmFjdGl2ZSwgLmJ0bi1pbmZvLmFjdGl2ZSwgLmJ0bi1pbnZlcnNlLmFjdGl2ZSB7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ZGNjO1xyXG4gKmJhY2tncm91bmQtY29sb3I6ICMwMDQ0Y2M7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDg4Y2MsICMwMDQ0Y2MpO1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjMDA0NGNjO1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogIzAwNDRjYztcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMDA0NGNjO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDJhODA7XHJcbn1cclxuLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeS5hY3RpdmUsIC5idG4tcHJpbWFyeS5kaXNhYmxlZCwgLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXSB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNDRjYztcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYmIzO1xyXG59XHJcbi5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeS5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDMzOTkgXFw5O1xyXG59XHJcbi5idG4td2FybmluZyB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZhYTczMjtcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5NDA2O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmJiNDUwLCAjZjg5NDA2KTtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogI2Y4OTQwNjtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICNmODk0MDY7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2Y4OTQwNjtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjYWQ2NzA0O1xyXG59XHJcbi5idG4td2FybmluZzpob3ZlciwgLmJ0bi13YXJuaW5nOmZvY3VzLCAuYnRuLXdhcm5pbmc6YWN0aXZlLCAuYnRuLXdhcm5pbmcuYWN0aXZlLCAuYnRuLXdhcm5pbmcuZGlzYWJsZWQsIC5idG4td2FybmluZ1tkaXNhYmxlZF0ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmODk0MDY7XHJcbiAqYmFja2dyb3VuZC1jb2xvcjogI2RmODUwNTtcclxufVxyXG4uYnRuLXdhcm5pbmc6YWN0aXZlLCAuYnRuLXdhcm5pbmcuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzY3NjA1IFxcOTtcclxufVxyXG4uYnRuLWRhbmdlciB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RhNGY0OTtcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjYmQzNjJmO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWU1ZjViLCAjYmQzNjJmKTtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogI2JkMzYyZjtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICNiZDM2MmY7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2JkMzYyZjtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjODAyNDIwO1xyXG59XHJcbi5idG4tZGFuZ2VyOmhvdmVyLCAuYnRuLWRhbmdlcjpmb2N1cywgLmJ0bi1kYW5nZXI6YWN0aXZlLCAuYnRuLWRhbmdlci5hY3RpdmUsIC5idG4tZGFuZ2VyLmRpc2FibGVkLCAuYnRuLWRhbmdlcltkaXNhYmxlZF0ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNiZDM2MmY7XHJcbiAqYmFja2dyb3VuZC1jb2xvcjogI2E5MzAyYTtcclxufVxyXG4uYnRuLWRhbmdlcjphY3RpdmUsIC5idG4tZGFuZ2VyLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzk0MmEyNSBcXDk7XHJcbn1cclxuLmJ0bi1zdWNjZXNzIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiNzViO1xyXG4gKmJhY2tncm91bmQtY29sb3I6ICM1MWEzNTE7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2MmM0NjIsICM1MWEzNTEpO1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjNTFhMzUxO1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogIzUxYTM1MTtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjNTFhMzUxO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICMzODcwMzg7XHJcbn1cclxuLmJ0bi1zdWNjZXNzOmhvdmVyLCAuYnRuLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tc3VjY2VzczphY3RpdmUsIC5idG4tc3VjY2Vzcy5hY3RpdmUsIC5idG4tc3VjY2Vzcy5kaXNhYmxlZCwgLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXSB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzUxYTM1MTtcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5MjQ5O1xyXG59XHJcbi5idG4tc3VjY2VzczphY3RpdmUsIC5idG4tc3VjY2Vzcy5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MDgxNDAgXFw5O1xyXG59XHJcbi5idG4taW5mbyB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQ5YWZjZDtcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjMmY5NmI0O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNWJjMGRlLCAjMmY5NmI0KTtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogIzJmOTZiNDtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICMyZjk2YjQ7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzJmOTZiNDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjMWY2Mzc3O1xyXG59XHJcbi5idG4taW5mbzpob3ZlciwgLmJ0bi1pbmZvOmZvY3VzLCAuYnRuLWluZm86YWN0aXZlLCAuYnRuLWluZm8uYWN0aXZlLCAuYnRuLWluZm8uZGlzYWJsZWQsIC5idG4taW5mb1tkaXNhYmxlZF0ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyZjk2YjQ7XHJcbiAqYmFja2dyb3VuZC1jb2xvcjogIzJhODVhMDtcclxufVxyXG4uYnRuLWluZm86YWN0aXZlLCAuYnRuLWluZm8uYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ3NDhjIFxcOTtcclxufVxyXG4uYnRuLWludmVyc2Uge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcbiAqYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0NDQ0NCwgIzIyMjIyMik7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICMyMjIyMjI7XHJcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjMjIyMjIyO1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICMyMjIyMjI7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4uYnRuLWludmVyc2U6aG92ZXIsIC5idG4taW52ZXJzZTpmb2N1cywgLmJ0bi1pbnZlcnNlOmFjdGl2ZSwgLmJ0bi1pbnZlcnNlLmFjdGl2ZSwgLmJ0bi1pbnZlcnNlLmRpc2FibGVkLCAuYnRuLWludmVyc2VbZGlzYWJsZWRdIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gKmJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XHJcbn1cclxuLmJ0bi1pbnZlcnNlOmFjdGl2ZSwgLmJ0bi1pbnZlcnNlLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzA4MDgwOCBcXDk7XHJcbn1cclxuYnV0dG9uLmJ0biwgaW5wdXRbdHlwZT1zdWJtaXRdLmJ0biB7XHJcbiAqcGFkZGluZy10b3A6IDNweDtcclxuICpwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcbiBidXR0b24uYnRuOjotbW96LWZvY3VzLWlubmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF0uYnRuOjotbW96LWZvY3VzLWlubmVyIHtcclxuIHBhZGRpbmc6IDA7XHJcbiBib3JkZXI6IDA7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tbGFyZ2UsIGlucHV0W3R5cGU9c3VibWl0XS5idG4uYnRuLWxhcmdlIHtcclxuICpwYWRkaW5nLXRvcDogN3B4O1xyXG4gKnBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tc21hbGwsIGlucHV0W3R5cGU9c3VibWl0XS5idG4uYnRuLXNtYWxsIHtcclxuICpwYWRkaW5nLXRvcDogM3B4O1xyXG4gKnBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tbWluaSwgaW5wdXRbdHlwZT1zdWJtaXRdLmJ0bi5idG4tbWluaSB7XHJcbiAqcGFkZGluZy10b3A6IDFweDtcclxuICpwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcbi5idG4tbGluaywgLmJ0bi1saW5rOmFjdGl2ZSwgLmJ0bi1saW5rW2Rpc2FibGVkXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0LW1vei1ib3gtc2hhZG93OiBub25lO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1saW5rIHtcclxuXHRjb2xvcjogIzAwODhjYztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmJ0bi1saW5rOmhvdmVyLCAuYnRuLWxpbms6Zm9jdXMge1xyXG5cdGNvbG9yOiAjMDA1NTgwO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4tbGlua1tkaXNhYmxlZF06aG92ZXIsIC5idG4tbGlua1tkaXNhYmxlZF06Zm9jdXMge1xyXG5cdGNvbG9yOiAjMzMzMzMzO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYnRuLWdyb3VwIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gKmRpc3BsYXk6IGlubGluZTtcclxuICptYXJnaW4tbGVmdDogLjNlbTtcclxuXHRmb250LXNpemU6IDA7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gKnpvb206IDE7XHJcbn1cclxuLmJ0bi1ncm91cDpmaXJzdC1jaGlsZCB7XHJcbiAqbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLmJ0bi1ncm91cCArIC5idG4tZ3JvdXAge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmJ0bi10b29sYmFyIHtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAwO1xyXG59XHJcbi5idG4tdG9vbGJhciA+IC5idG4gKyAuYnRuLCAuYnRuLXRvb2xiYXIgPiAuYnRuLWdyb3VwICsgLmJ0biwgLmJ0bi10b29sYmFyID4gLmJ0biArIC5idG4tZ3JvdXAge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmJ0bi1ncm91cCA+IC5idG4ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmJ0bi1ncm91cCA+IC5idG4gKyAuYnRuIHtcclxuXHRtYXJnaW4tbGVmdDogLTFweDtcclxufVxyXG4uYnRuLWdyb3VwID4gLmJ0biwgLmJ0bi1ncm91cCA+IC5kcm9wZG93bi1tZW51LCAuYnRuLWdyb3VwID4gLnBvcG92ZXIge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnRuLWdyb3VwID4gLmJ0bi1taW5pIHtcclxuXHRmb250LXNpemU6IDEwLjVweDtcclxufVxyXG4uYnRuLWdyb3VwID4gLmJ0bi1zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAxMS45cHg7XHJcbn1cclxuLmJ0bi1ncm91cCA+IC5idG4tbGFyZ2Uge1xyXG5cdGZvbnQtc2l6ZTogMTcuNXB4O1xyXG59XHJcbi5idG4tZ3JvdXAgPiAuYnRuOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHQtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDRweDtcclxufVxyXG4uYnRuLWdyb3VwID4gLmJ0bjpsYXN0LWNoaWxkLCAuYnRuLWdyb3VwID4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0LXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiA0cHg7XHJcbn1cclxuLmJ0bi1ncm91cCA+IC5idG4ubGFyZ2U6Zmlyc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNnB4O1xyXG59XHJcbi5idG4tZ3JvdXAgPiAuYnRuLmxhcmdlOmxhc3QtY2hpbGQsIC5idG4tZ3JvdXAgPiAubGFyZ2UuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuXHQtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6IDZweDtcclxufVxyXG4uYnRuLWdyb3VwID4gLmJ0bjpob3ZlciwgLmJ0bi1ncm91cCA+IC5idG46Zm9jdXMsIC5idG4tZ3JvdXAgPiAuYnRuOmFjdGl2ZSwgLmJ0bi1ncm91cCA+IC5idG4uYWN0aXZlIHtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcbi5idG4tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTphY3RpdmUsIC5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRvdXRsaW5lOiAwO1xyXG59XHJcbi5idG4tZ3JvdXAgPiAuYnRuICsgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAqcGFkZGluZy10b3A6IDVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAqcGFkZGluZy1ib3R0b206IDVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyNSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyNSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMjUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLmJ0bi1ncm91cCA+IC5idG4tbWluaSArIC5kcm9wZG93bi10b2dnbGUge1xyXG4gKnBhZGRpbmctdG9wOiAycHg7XHJcblx0cGFkZGluZy1yaWdodDogNXB4O1xyXG4gKnBhZGRpbmctYm90dG9tOiAycHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmJ0bi1ncm91cCA+IC5idG4tc21hbGwgKyAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICpwYWRkaW5nLXRvcDogNXB4O1xyXG4gKnBhZGRpbmctYm90dG9tOiA0cHg7XHJcbn1cclxuLmJ0bi1ncm91cCA+IC5idG4tbGFyZ2UgKyAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICpwYWRkaW5nLXRvcDogN3B4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAqcGFkZGluZy1ib3R0b206IDdweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbn1cclxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi5idG4tZ3JvdXAub3BlbiAuYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG4uYnRuLWdyb3VwLm9wZW4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNDRjYztcclxufVxyXG4uYnRuLWdyb3VwLm9wZW4gLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4OTQwNjtcclxufVxyXG4uYnRuLWdyb3VwLm9wZW4gLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmQzNjJmO1xyXG59XHJcbi5idG4tZ3JvdXAub3BlbiAuYnRuLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTFhMzUxO1xyXG59XHJcbi5idG4tZ3JvdXAub3BlbiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmY5NmI0O1xyXG59XHJcbi5idG4tZ3JvdXAub3BlbiAuYnRuLWludmVyc2UuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbi5idG4gLmNhcmV0IHtcclxuXHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLmJ0bi1sYXJnZSAuY2FyZXQge1xyXG5cdG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4uYnRuLWxhcmdlIC5jYXJldCB7XHJcblx0Ym9yZGVyLXRvcC13aWR0aDogNXB4O1xyXG5cdGJvcmRlci1yaWdodC13aWR0aDogNXB4O1xyXG5cdGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XHJcbn1cclxuLmJ0bi1taW5pIC5jYXJldCwgLmJ0bi1zbWFsbCAuY2FyZXQge1xyXG5cdG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uZHJvcHVwIC5idG4tbGFyZ2UgLmNhcmV0IHtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiA1cHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IC5jYXJldCwgLmJ0bi13YXJuaW5nIC5jYXJldCwgLmJ0bi1kYW5nZXIgLmNhcmV0LCAuYnRuLWluZm8gLmNhcmV0LCAuYnRuLXN1Y2Nlc3MgLmNhcmV0LCAuYnRuLWludmVyc2UgLmNhcmV0IHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gKmRpc3BsYXk6IGlubGluZTtcclxuICAvKiBJRTcgaW5saW5lLWJsb2NrIGhhY2sgKi9cclxuXHJcbiAgKnpvb206IDE7XHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZsb2F0OiBub25lO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4gKyAuYnRuIHtcclxuXHRtYXJnaW4tdG9wOiAtMXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmZpcnN0LWNoaWxkIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46bGFzdC1jaGlsZCB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWxhcmdlOmZpcnN0LWNoaWxkIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tbGFyZ2U6bGFzdC1jaGlsZCB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xyXG59XHJcbi5hbGVydCB7XHJcblx0cGFkZGluZzogOHB4IDM1cHggOHB4IDE0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmJlZWQ1O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYWxlcnQsIC5hbGVydCBoNCB7XHJcblx0Y29sb3I6ICNjMDk4NTM7XHJcbn1cclxuLmFsZXJ0IGg0IHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLmFsZXJ0IC5jbG9zZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogLTJweDtcclxuXHRyaWdodDogLTIxcHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmFsZXJ0LXN1Y2Nlc3Mge1xyXG5cdGNvbG9yOiAjNDY4ODQ3O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZDZlOWM2O1xyXG59XHJcbi5hbGVydC1zdWNjZXNzIGg0IHtcclxuXHRjb2xvcjogIzQ2ODg0NztcclxufVxyXG4uYWxlcnQtZGFuZ2VyLCAuYWxlcnQtZXJyb3Ige1xyXG5cdGNvbG9yOiAjYjk0YTQ4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWVkM2Q3O1xyXG59XHJcbi5hbGVydC1kYW5nZXIgaDQsIC5hbGVydC1lcnJvciBoNCB7XHJcblx0Y29sb3I6ICNiOTRhNDg7XHJcbn1cclxuLmFsZXJ0LWluZm8ge1xyXG5cdGNvbG9yOiAjM2E4N2FkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XHJcblx0Ym9yZGVyLWNvbG9yOiAjYmNlOGYxO1xyXG59XHJcbi5hbGVydC1pbmZvIGg0IHtcclxuXHRjb2xvcjogIzNhODdhZDtcclxufVxyXG4uYWxlcnQtYmxvY2sge1xyXG5cdHBhZGRpbmctdG9wOiAxNHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG59XHJcbi5hbGVydC1ibG9jayA+IHAsIC5hbGVydC1ibG9jayA+IHVsIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5hbGVydC1ibG9jayBwICsgcCB7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5uYXYge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2ID4gbGkgPiBhIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubmF2ID4gbGkgPiBhOmhvdmVyLCAubmF2ID4gbGkgPiBhOmZvY3VzIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG4ubmF2ID4gbGkgPiBhID4gaW1nIHtcclxuXHRtYXgtd2lkdGg6IG5vbmU7XHJcbn1cclxuLm5hdiA+IC5wdWxsLXJpZ2h0IHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm5hdi1oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDNweCAxNXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubmF2IGxpICsgLm5hdi1oZWFkZXIge1xyXG5cdG1hcmdpbi10b3A6IDlweDtcclxufVxyXG4ubmF2LWxpc3Qge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLm5hdi1saXN0ID4gbGkgPiBhLCAubmF2LWxpc3QgLm5hdi1oZWFkZXIge1xyXG5cdG1hcmdpbi1yaWdodDogLTE1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG4ubmF2LWxpc3QgPiBsaSA+IGEge1xyXG5cdHBhZGRpbmc6IDNweCAxNXB4O1xyXG59XHJcbi5uYXYtbGlzdCA+IC5hY3RpdmUgPiBhLCAubmF2LWxpc3QgPiAuYWN0aXZlID4gYTpob3ZlciwgLm5hdi1saXN0ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODhjYztcclxufVxyXG4gLm5hdi1saXN0IFtjbGFzc149XCJpY29uLVwiXSwgLm5hdi1saXN0IFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuLm5hdi1saXN0IC5kaXZpZGVyIHtcclxuICp3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDFweDtcclxuXHRtYXJnaW46IDlweCAxcHg7XHJcbiAqbWFyZ2luOiAtNXB4IDAgNXB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4ubmF2LXRhYnMsIC5uYXYtcGlsbHMge1xyXG4gKnpvb206IDE7XHJcbn1cclxuLm5hdi10YWJzOmJlZm9yZSwgLm5hdi1waWxsczpiZWZvcmUsIC5uYXYtdGFiczphZnRlciwgLm5hdi1waWxsczphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4ubmF2LXRhYnM6YWZ0ZXIsIC5uYXYtcGlsbHM6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5uYXYtdGFicyA+IGxpLCAubmF2LXBpbGxzID4gbGkge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5uYXYtdGFicyA+IGxpID4gYSwgLm5hdi1waWxscyA+IGxpID4gYSB7XHJcblx0cGFkZGluZy1yaWdodDogMTJweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEycHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAycHg7XHJcblx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcbn1cclxuLm5hdi10YWJzIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4ubmF2LXRhYnMgPiBsaSB7XHJcblx0bWFyZ2luLWJvdHRvbTogLTFweDtcclxufVxyXG4ubmF2LXRhYnMgPiBsaSA+IGEge1xyXG5cdHBhZGRpbmctdG9wOiA4cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDhweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbn1cclxuLm5hdi10YWJzID4gbGkgPiBhOmhvdmVyLCAubmF2LXRhYnMgPiBsaSA+IGE6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogI2VlZWVlZSAjZWVlZWVlICNkZGRkZGQ7XHJcbn1cclxuLm5hdi10YWJzID4gLmFjdGl2ZSA+IGEsIC5uYXYtdGFicyA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2LXRhYnMgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcblx0Y29sb3I6ICM1NTU1NTU7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubmF2LXBpbGxzID4gbGkgPiBhIHtcclxuXHRwYWRkaW5nLXRvcDogOHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiA4cHg7XHJcblx0bWFyZ2luLXRvcDogMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDJweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLm5hdi1waWxscyA+IC5hY3RpdmUgPiBhLCAubmF2LXBpbGxzID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXYtcGlsbHMgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODhjYztcclxufVxyXG4ubmF2LXN0YWNrZWQgPiBsaSB7XHJcblx0ZmxvYXQ6IG5vbmU7XHJcbn1cclxuLm5hdi1zdGFja2VkID4gbGkgPiBhIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLm5hdi10YWJzLm5hdi1zdGFja2VkIHtcclxuXHRib3JkZXItYm90dG9tOiAwO1xyXG59XHJcbi5uYXYtdGFicy5uYXYtc3RhY2tlZCA+IGxpID4gYSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLm5hdi10YWJzLm5hdi1zdGFja2VkID4gbGk6Zmlyc3QtY2hpbGQgPiBhIHtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDRweDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXN0YWNrZWQgPiBsaTpsYXN0LWNoaWxkID4gYSB7XHJcblx0LXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA0cHg7XHJcbn1cclxuLm5hdi10YWJzLm5hdi1zdGFja2VkID4gbGkgPiBhOmhvdmVyLCAubmF2LXRhYnMubmF2LXN0YWNrZWQgPiBsaSA+IGE6Zm9jdXMge1xyXG5cdHotaW5kZXg6IDI7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xyXG59XHJcbi5uYXYtcGlsbHMubmF2LXN0YWNrZWQgPiBsaSA+IGEge1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4ubmF2LXBpbGxzLm5hdi1zdGFja2VkID4gbGk6bGFzdC1jaGlsZCA+IGEge1xyXG5cdG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG4ubmF2LXRhYnMgLmRyb3Bkb3duLW1lbnUge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcclxufVxyXG4ubmF2LXBpbGxzIC5kcm9wZG93bi1tZW51IHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLm5hdiAuZHJvcGRvd24tdG9nZ2xlIC5jYXJldCB7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICMwMDg4Y2M7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzAwODhjYztcclxufVxyXG4ubmF2IC5kcm9wZG93bi10b2dnbGU6aG92ZXIgLmNhcmV0LCAubmF2IC5kcm9wZG93bi10b2dnbGU6Zm9jdXMgLmNhcmV0IHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMDA1NTgwO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDU1ODA7XHJcbn1cclxuLyogbW92ZSBkb3duIGNhcmV0cyBmb3IgdGFicyAqL1xyXG5cclxuLm5hdi10YWJzIC5kcm9wZG93bi10b2dnbGUgLmNhcmV0IHtcclxuXHRtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLm5hdiAuYWN0aXZlIC5kcm9wZG93bi10b2dnbGUgLmNhcmV0IHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdi10YWJzIC5hY3RpdmUgLmRyb3Bkb3duLXRvZ2dsZSAuY2FyZXQge1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICM1NTU1NTU7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzU1NTU1NTtcclxufVxyXG4ubmF2ID4gLmRyb3Bkb3duLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXYgPiAuZHJvcGRvd24uYWN0aXZlID4gYTpmb2N1cyB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYtdGFicyAub3BlbiAuZHJvcGRvd24tdG9nZ2xlLCAubmF2LXBpbGxzIC5vcGVuIC5kcm9wZG93bi10b2dnbGUsIC5uYXYgPiBsaS5kcm9wZG93bi5vcGVuLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXYgPiBsaS5kcm9wZG93bi5vcGVuLmFjdGl2ZSA+IGE6Zm9jdXMge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcblx0Ym9yZGVyLWNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbi5uYXYgbGkuZHJvcGRvd24ub3BlbiAuY2FyZXQsIC5uYXYgbGkuZHJvcGRvd24ub3Blbi5hY3RpdmUgLmNhcmV0LCAubmF2IGxpLmRyb3Bkb3duLm9wZW4gYTpob3ZlciAuY2FyZXQsIC5uYXYgbGkuZHJvcGRvd24ub3BlbiBhOmZvY3VzIC5jYXJldCB7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmZmZmZjtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbn1cclxuLnRhYnMtc3RhY2tlZCAub3BlbiA+IGE6aG92ZXIsIC50YWJzLXN0YWNrZWQgLm9wZW4gPiBhOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLnRhYmJhYmxlIHtcclxuICp6b29tOiAxO1xyXG59XHJcbi50YWJiYWJsZTpiZWZvcmUsIC50YWJiYWJsZTphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4udGFiYmFibGU6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi50YWItY29udGVudCB7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMsIC50YWJzLXJpZ2h0ID4gLm5hdi10YWJzLCAudGFicy1sZWZ0ID4gLm5hdi10YWJzIHtcclxuXHRib3JkZXItYm90dG9tOiAwO1xyXG59XHJcbi50YWItY29udGVudCA+IC50YWItcGFuZSwgLnBpbGwtY29udGVudCA+IC5waWxsLXBhbmUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRhYi1jb250ZW50ID4gLmFjdGl2ZSwgLnBpbGwtY29udGVudCA+IC5hY3RpdmUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50YWJzLWJlbG93ID4gLm5hdi10YWJzIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4udGFicy1iZWxvdyA+IC5uYXYtdGFicyA+IGxpIHtcclxuXHRtYXJnaW4tdG9wOiAtMXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiBsaSA+IGEge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxufVxyXG4udGFicy1iZWxvdyA+IC5uYXYtdGFicyA+IGxpID4gYTpob3ZlciwgLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiBsaSA+IGE6Zm9jdXMge1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNkZGQ7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiAuYWN0aXZlID4gYSwgLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiAuYWN0aXZlID4gYTpob3ZlciwgLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZGRkICNkZGQgI2RkZDtcclxufVxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzID4gbGksIC50YWJzLXJpZ2h0ID4gLm5hdi10YWJzID4gbGkge1xyXG5cdGZsb2F0OiBub25lO1xyXG59XHJcbi50YWJzLWxlZnQgPiAubmF2LXRhYnMgPiBsaSA+IGEsIC50YWJzLXJpZ2h0ID4gLm5hdi10YWJzID4gbGkgPiBhIHtcclxuXHRtaW4td2lkdGg6IDc0cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxufVxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzID4gbGkgPiBhIHtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcbi50YWJzLWxlZnQgPiAubmF2LXRhYnMgPiBsaSA+IGE6aG92ZXIsIC50YWJzLWxlZnQgPiAubmF2LXRhYnMgPiBsaSA+IGE6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogI2VlZWVlZSAjZGRkZGRkICNlZWVlZWUgI2VlZWVlZTtcclxufVxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzIC5hY3RpdmUgPiBhLCAudGFicy1sZWZ0ID4gLm5hdi10YWJzIC5hY3RpdmUgPiBhOmhvdmVyLCAudGFicy1sZWZ0ID4gLm5hdi10YWJzIC5hY3RpdmUgPiBhOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICNkZGQgdHJhbnNwYXJlbnQgI2RkZCAjZGRkO1xyXG4gKmJvcmRlci1yaWdodC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcclxufVxyXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyA+IGxpID4gYSB7XHJcblx0bWFyZ2luLWxlZnQ6IC0xcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG59XHJcbi50YWJzLXJpZ2h0ID4gLm5hdi10YWJzID4gbGkgPiBhOmhvdmVyLCAudGFicy1yaWdodCA+IC5uYXYtdGFicyA+IGxpID4gYTpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWVlZWVlICNlZWVlZWUgI2VlZWVlZSAjZGRkZGRkO1xyXG59XHJcbi50YWJzLXJpZ2h0ID4gLm5hdi10YWJzIC5hY3RpdmUgPiBhLCAudGFicy1yaWdodCA+IC5uYXYtdGFicyAuYWN0aXZlID4gYTpob3ZlciwgLnRhYnMtcmlnaHQgPiAubmF2LXRhYnMgLmFjdGl2ZSA+IGE6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogI2RkZCAjZGRkICNkZGQgdHJhbnNwYXJlbnQ7XHJcbiAqYm9yZGVyLWxlZnQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdiA+IC5kaXNhYmxlZCA+IGEge1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbi5uYXYgPiAuZGlzYWJsZWQgPiBhOmhvdmVyLCAubmF2ID4gLmRpc2FibGVkID4gYTpmb2N1cyB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGN1cnNvcjogZGVmYXVsdDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubmF2YmFyIHtcclxuICpwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAqei1pbmRleDogMjtcclxuXHRvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4ubmF2YmFyLWlubmVyIHtcclxuXHRtaW4taGVpZ2h0OiA0MHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHpvb206IDE7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2NSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2NSk7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNjUpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNmMmYyZjIpO1xyXG5cclxufVxyXG4ubmF2YmFyLWlubmVyOmJlZm9yZSwgLm5hdmJhci1pbm5lcjphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4ubmF2YmFyLWlubmVyOmFmdGVyIHtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG4ubmF2YmFyIC5jb250YWluZXIge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG59XHJcbi5uYXYtY29sbGFwc2UuY29sbGFwc2Uge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4ubmF2YmFyIC5icmFuZCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cGFkZGluZzogMTBweCAyMHB4IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogMjAwO1xyXG5cdGNvbG9yOiAjNzc3Nzc3O1xyXG5cdHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XHJcbn1cclxuLm5hdmJhciAuYnJhbmQ6aG92ZXIsIC5uYXZiYXIgLmJyYW5kOmZvY3VzIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm5hdmJhci10ZXh0IHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi5uYXZiYXItbGluayB7XHJcblx0Y29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLm5hdmJhci1saW5rOmhvdmVyLCAubmF2YmFyLWxpbms6Zm9jdXMge1xyXG5cdGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5uYXZiYXIgLmRpdmlkZXItdmVydGljYWwge1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRtYXJnaW46IDAgOXB4O1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmY7XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG59XHJcbi5uYXZiYXIgLmJ0biwgLm5hdmJhciAuYnRuLWdyb3VwIHtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLm5hdmJhciAuYnRuLWdyb3VwIC5idG4sIC5uYXZiYXIgLmlucHV0LXByZXBlbmQgLmJ0biwgLm5hdmJhciAuaW5wdXQtYXBwZW5kIC5idG4sIC5uYXZiYXIgLmlucHV0LXByZXBlbmQgLmJ0bi1ncm91cCwgLm5hdmJhciAuaW5wdXQtYXBwZW5kIC5idG4tZ3JvdXAge1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLm5hdmJhci1mb3JtIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG4gKnpvb206IDE7XHJcbn1cclxuLm5hdmJhci1mb3JtOmJlZm9yZSwgLm5hdmJhci1mb3JtOmFmdGVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHRsaW5lLWhlaWdodDogMDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5uYXZiYXItZm9ybTphZnRlciB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuLm5hdmJhci1mb3JtIGlucHV0LCAubmF2YmFyLWZvcm0gc2VsZWN0LCAubmF2YmFyLWZvcm0gLnJhZGlvLCAubmF2YmFyLWZvcm0gLmNoZWNrYm94IHtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLm5hdmJhci1mb3JtIGlucHV0LCAubmF2YmFyLWZvcm0gc2VsZWN0LCAubmF2YmFyLWZvcm0gLmJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLm5hdmJhci1mb3JtIGlucHV0W3R5cGU9aW1hZ2VdLCAubmF2YmFyLWZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF0sIC5uYXZiYXItZm9ybSBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5uYXZiYXItZm9ybSAuaW5wdXQtYXBwZW5kLCAubmF2YmFyLWZvcm0gLmlucHV0LXByZXBlbmQge1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5uYXZiYXItZm9ybSAuaW5wdXQtYXBwZW5kIGlucHV0LCAubmF2YmFyLWZvcm0gLmlucHV0LXByZXBlbmQgaW5wdXQge1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLm5hdmJhci1zZWFyY2gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ubmF2YmFyLXNlYXJjaCAuc2VhcmNoLXF1ZXJ5IHtcclxuXHRwYWRkaW5nOiA0cHggMTRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5uYXZiYXItc3RhdGljLXRvcCB7XHJcblx0cG9zaXRpb246IHN0YXRpYztcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5uYXZiYXItc3RhdGljLXRvcCAubmF2YmFyLWlubmVyIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0cmlnaHQ6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiAxMDMwO1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLm5hdmJhci1maXhlZC10b3AgLm5hdmJhci1pbm5lciwgLm5hdmJhci1zdGF0aWMtdG9wIC5uYXZiYXItaW5uZXIge1xyXG5cdGJvcmRlci13aWR0aDogMCAwIDFweDtcclxufVxyXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLWlubmVyIHtcclxuXHRib3JkZXItd2lkdGg6IDFweCAwIDA7XHJcbn1cclxuLm5hdmJhci1maXhlZC10b3AgLm5hdmJhci1pbm5lciwgLm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1pbm5lciB7XHJcblx0cGFkZGluZy1yaWdodDogMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5uYXZiYXItc3RhdGljLXRvcCAuY29udGFpbmVyLCAubmF2YmFyLWZpeGVkLXRvcCAuY29udGFpbmVyLCAubmF2YmFyLWZpeGVkLWJvdHRvbSAuY29udGFpbmVyIHtcclxuXHR3aWR0aDogOTQwcHg7XHJcbn1cclxuLm5hdmJhci1maXhlZC10b3Age1xyXG5cdHRvcDogMDtcclxufVxyXG4ubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWlubmVyLCAubmF2YmFyLXN0YXRpYy10b3AgLm5hdmJhci1pbm5lciB7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuXHRib3R0b206IDA7XHJcbn1cclxuLm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1pbm5lciB7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIC0xcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0Ym94LXNoYWRvdzogMCAtMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5uYXZiYXIgLm5hdiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luOiAwIDEwcHggMCAwO1xyXG59XHJcbi5uYXZiYXIgLm5hdi5wdWxsLXJpZ2h0IHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbi5uYXZiYXIgLm5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGEge1xyXG5cdGZsb2F0OiBub25lO1xyXG5cdHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xyXG5cdGNvbG9yOiAjNzc3Nzc3O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xyXG59XHJcbi5uYXZiYXIgLm5hdiAuZHJvcGRvd24tdG9nZ2xlIC5jYXJldCB7XHJcblx0bWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5uYXZiYXIgLm5hdiA+IGxpID4gYTpmb2N1cywgLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyIHtcclxuXHRjb2xvcjogIzMzMzMzMztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm5hdmJhciAubmF2ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXIgLm5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyIC5uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcblx0Y29sb3I6ICM1NTU1NTU7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG59XHJcbi5uYXZiYXIgLmJ0bi1uYXZiYXIge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHBhZGRpbmc6IDdweCAxMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YyZjJmMiwgI2U1ZTVlNSk7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICNlNWU1ZTU7XHJcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjZTVlNWU1O1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNlNWU1ZTU7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2JmYmZiZjtcclxufVxyXG4ubmF2YmFyIC5idG4tbmF2YmFyOmhvdmVyLCAubmF2YmFyIC5idG4tbmF2YmFyOmZvY3VzLCAubmF2YmFyIC5idG4tbmF2YmFyOmFjdGl2ZSwgLm5hdmJhciAuYnRuLW5hdmJhci5hY3RpdmUsIC5uYXZiYXIgLmJ0bi1uYXZiYXIuZGlzYWJsZWQsIC5uYXZiYXIgLmJ0bi1uYXZiYXJbZGlzYWJsZWRdIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gKmJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbn1cclxuLm5hdmJhciAuYnRuLW5hdmJhcjphY3RpdmUsIC5uYXZiYXIgLmJ0bi1uYXZiYXIuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjIFxcOTtcclxufVxyXG4ubmF2YmFyIC5idG4tbmF2YmFyIC5pY29uLWJhciB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDFweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDFweDtcclxuXHRib3JkZXItcmFkaXVzOiAxcHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbi5idG4tbmF2YmFyIC5pY29uLWJhciArIC5pY29uLWJhciB7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5uYXZiYXIgLm5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtN3B4O1xyXG5cdGxlZnQ6IDlweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0Y29udGVudDogJyc7XHJcbn1cclxuLm5hdmJhciAubmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudTphZnRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTZweDtcclxuXHRsZWZ0OiAxMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItYm90dG9tOiA2cHggc29saWQgI2ZmZmZmZjtcclxuXHRib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG59XHJcbi5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51OmJlZm9yZSB7XHJcblx0dG9wOiBhdXRvO1xyXG5cdGJvdHRvbTogLTdweDtcclxuXHRib3JkZXItdG9wOiA3cHggc29saWQgI2NjYztcclxuXHRib3JkZXItYm90dG9tOiAwO1xyXG5cdGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudTphZnRlciB7XHJcblx0dG9wOiBhdXRvO1xyXG5cdGJvdHRvbTogLTZweDtcclxuXHRib3JkZXItdG9wOiA2cHggc29saWQgI2ZmZmZmZjtcclxuXHRib3JkZXItYm90dG9tOiAwO1xyXG59XHJcbi5uYXZiYXIgLm5hdiBsaS5kcm9wZG93biA+IGE6aG92ZXIgLmNhcmV0LCAubmF2YmFyIC5uYXYgbGkuZHJvcGRvd24gPiBhOmZvY3VzIC5jYXJldCB7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzMzMzMzMztcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5uYXZiYXIgLm5hdiBsaS5kcm9wZG93bi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZSwgLm5hdmJhciAubmF2IGxpLmRyb3Bkb3duLmFjdGl2ZSA+IC5kcm9wZG93bi10b2dnbGUsIC5uYXZiYXIgLm5hdiBsaS5kcm9wZG93bi5vcGVuLmFjdGl2ZSA+IC5kcm9wZG93bi10b2dnbGUge1xyXG5cdGNvbG9yOiAjNTU1NTU1O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbn1cclxuLm5hdmJhciAubmF2IGxpLmRyb3Bkb3duID4gLmRyb3Bkb3duLXRvZ2dsZSAuY2FyZXQge1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICM3Nzc3Nzc7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzc3Nzc3NztcclxufVxyXG4ubmF2YmFyIC5uYXYgbGkuZHJvcGRvd24ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUgLmNhcmV0LCAubmF2YmFyIC5uYXYgbGkuZHJvcGRvd24uYWN0aXZlID4gLmRyb3Bkb3duLXRvZ2dsZSAuY2FyZXQsIC5uYXZiYXIgLm5hdiBsaS5kcm9wZG93bi5vcGVuLmFjdGl2ZSA+IC5kcm9wZG93bi10b2dnbGUgLmNhcmV0IHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjNTU1NTU1O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuLm5hdmJhciAucHVsbC1yaWdodCA+IGxpID4gLmRyb3Bkb3duLW1lbnUsIC5uYXZiYXIgLm5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUucHVsbC1yaWdodCB7XHJcblx0cmlnaHQ6IDA7XHJcblx0bGVmdDogYXV0bztcclxufVxyXG4ubmF2YmFyIC5wdWxsLXJpZ2h0ID4gbGkgPiAuZHJvcGRvd24tbWVudTpiZWZvcmUsIC5uYXZiYXIgLm5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUucHVsbC1yaWdodDpiZWZvcmUge1xyXG5cdHJpZ2h0OiAxMnB4O1xyXG5cdGxlZnQ6IGF1dG87XHJcbn1cclxuLm5hdmJhciAucHVsbC1yaWdodCA+IGxpID4gLmRyb3Bkb3duLW1lbnU6YWZ0ZXIsIC5uYXZiYXIgLm5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUucHVsbC1yaWdodDphZnRlciB7XHJcblx0cmlnaHQ6IDEzcHg7XHJcblx0bGVmdDogYXV0bztcclxufVxyXG4ubmF2YmFyIC5wdWxsLXJpZ2h0ID4gbGkgPiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tbWVudSwgLm5hdmJhciAubmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudS5wdWxsLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcclxuXHRyaWdodDogMTAwJTtcclxuXHRsZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogLTFweDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA2cHggMCA2cHggNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItaW5uZXIge1xyXG5cdGJhY2tncm91bmQ6I0VGOUUxMDtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLmJyYW5kLCAubmF2YmFyLWludmVyc2UgLm5hdiA+IGxpID4gYSB7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0dGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5icmFuZDpob3ZlciwgLm5hdmJhci1pbnZlcnNlIC5uYXYgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItaW52ZXJzZSAuYnJhbmQ6Zm9jdXMsIC5uYXZiYXItaW52ZXJzZSAubmF2ID4gbGkgPiBhOmZvY3VzIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLmJyYW5kIHtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci10ZXh0IHtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLm5hdiA+IGxpID4gYTpmb2N1cywgLm5hdmJhci1pbnZlcnNlIC5uYXYgPiBsaSA+IGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uYXZiYXItaW52ZXJzZSAubmF2IC5hY3RpdmUgPiBhLCAubmF2YmFyLWludmVyc2UgLm5hdiAuYWN0aXZlID4gYTpob3ZlciwgLm5hdmJhci1pbnZlcnNlIC5uYXYgLmFjdGl2ZSA+IGE6Zm9jdXMge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbGluayB7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbGluazpob3ZlciwgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbGluazpmb2N1cyB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5kaXZpZGVyLXZlcnRpY2FsIHtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICMyMjIyMjI7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICMxMTExMTE7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5uYXYgbGkuZHJvcGRvd24ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUsIC5uYXZiYXItaW52ZXJzZSAubmF2IGxpLmRyb3Bkb3duLmFjdGl2ZSA+IC5kcm9wZG93bi10b2dnbGUsIC5uYXZiYXItaW52ZXJzZSAubmF2IGxpLmRyb3Bkb3duLm9wZW4uYWN0aXZlID4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLm5hdiBsaS5kcm9wZG93biA+IGE6aG92ZXIgLmNhcmV0LCAubmF2YmFyLWludmVyc2UgLm5hdiBsaS5kcm9wZG93biA+IGE6Zm9jdXMgLmNhcmV0IHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5uYXYgbGkuZHJvcGRvd24gPiAuZHJvcGRvd24tdG9nZ2xlIC5jYXJldCB7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzk5OTk5OTtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbi5uYXZiYXItaW52ZXJzZSAubmF2IGxpLmRyb3Bkb3duLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlIC5jYXJldCwgLm5hdmJhci1pbnZlcnNlIC5uYXYgbGkuZHJvcGRvd24uYWN0aXZlID4gLmRyb3Bkb3duLXRvZ2dsZSAuY2FyZXQsIC5uYXZiYXItaW52ZXJzZSAubmF2IGxpLmRyb3Bkb3duLm9wZW4uYWN0aXZlID4gLmRyb3Bkb3duLXRvZ2dsZSAuY2FyZXQge1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1zZWFyY2ggLnNlYXJjaC1xdWVyeSB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzUxNTE1MTtcclxuXHRib3JkZXItY29sb3I6ICMxMTExMTE7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuXHQtbW96LXRyYW5zaXRpb246IG5vbmU7XHJcblx0LW8tdHJhbnNpdGlvbjogbm9uZTtcclxuXHR0cmFuc2l0aW9uOiBub25lO1xyXG59XHJcbiAubmF2YmFyLWludmVyc2UgLm5hdmJhci1zZWFyY2ggLnNlYXJjaC1xdWVyeTotbW96LXBsYWNlaG9sZGVyIHtcclxuIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcbiAubmF2YmFyLWludmVyc2UgLm5hdmJhci1zZWFyY2ggLnNlYXJjaC1xdWVyeTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXNlYXJjaCAuc2VhcmNoLXF1ZXJ5Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXNlYXJjaCAuc2VhcmNoLXF1ZXJ5OmZvY3VzLCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1zZWFyY2ggLnNlYXJjaC1xdWVyeS5mb2N1c2VkIHtcclxuXHRwYWRkaW5nOiA1cHggMTVweDtcclxuXHRjb2xvcjogIzMzMzMzMztcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0Ym94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcbi5uYXZiYXItaW52ZXJzZSAuYnRuLW5hdmJhciB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzBlMGUwZTtcclxuICpiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNDA0O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTUxNTE1LCAjMDQwNDA0KTtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogIzA0MDQwNDtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICMwNDA0MDQ7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzA0MDQwNDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5uYXZiYXItaW52ZXJzZSAuYnRuLW5hdmJhcjpob3ZlciwgLm5hdmJhci1pbnZlcnNlIC5idG4tbmF2YmFyOmZvY3VzLCAubmF2YmFyLWludmVyc2UgLmJ0bi1uYXZiYXI6YWN0aXZlLCAubmF2YmFyLWludmVyc2UgLmJ0bi1uYXZiYXIuYWN0aXZlLCAubmF2YmFyLWludmVyc2UgLmJ0bi1uYXZiYXIuZGlzYWJsZWQsIC5uYXZiYXItaW52ZXJzZSAuYnRuLW5hdmJhcltkaXNhYmxlZF0ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwNDA0MDQ7XHJcbiAqYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLmJ0bi1uYXZiYXI6YWN0aXZlLCAubmF2YmFyLWludmVyc2UgLmJ0bi1uYXZiYXIuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwIFxcOTtcclxufVxyXG4uYnJlYWRjcnVtYiB7XHJcblx0cGFkZGluZzogOHB4IDE1cHg7XHJcblx0bWFyZ2luOiAwIDAgMjBweDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5icmVhZGNydW1iID4gbGkge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICpkaXNwbGF5OiBpbmxpbmU7XHJcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcclxuICp6b29tOiAxO1xyXG59XHJcbi5icmVhZGNydW1iID4gbGkgPiAuZGl2aWRlciB7XHJcblx0cGFkZGluZzogMCA1cHg7XHJcblx0Y29sb3I6ICNjY2M7XHJcbn1cclxuLmJyZWFkY3J1bWIgPiAuYWN0aXZlIHtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxufVxyXG4ucGFnaW5hdGlvbiB7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLnBhZ2luYXRpb24gdWwge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICpkaXNwbGF5OiBpbmxpbmU7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAqem9vbTogMTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLnBhZ2luYXRpb24gdWwgPiBsaSB7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5wYWdpbmF0aW9uIHVsID4gbGkgPiBhLCAucGFnaW5hdGlvbiB1bCA+IGxpID4gc3BhbiB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cGFkZGluZzogNHB4IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuXHRib3JkZXItbGVmdC13aWR0aDogMDtcclxufVxyXG4ucGFnaW5hdGlvbiB1bCA+IGxpID4gYTpob3ZlciwgLnBhZ2luYXRpb24gdWwgPiBsaSA+IGE6Zm9jdXMsIC5wYWdpbmF0aW9uIHVsID4gLmFjdGl2ZSA+IGEsIC5wYWdpbmF0aW9uIHVsID4gLmFjdGl2ZSA+IHNwYW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLnBhZ2luYXRpb24gdWwgPiAuYWN0aXZlID4gYSwgLnBhZ2luYXRpb24gdWwgPiAuYWN0aXZlID4gc3BhbiB7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5wYWdpbmF0aW9uIHVsID4gLmRpc2FibGVkID4gc3BhbiwgLnBhZ2luYXRpb24gdWwgPiAuZGlzYWJsZWQgPiBhLCAucGFnaW5hdGlvbiB1bCA+IC5kaXNhYmxlZCA+IGE6aG92ZXIsIC5wYWdpbmF0aW9uIHVsID4gLmRpc2FibGVkID4gYTpmb2N1cyB7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5wYWdpbmF0aW9uIHVsID4gbGk6Zmlyc3QtY2hpbGQgPiBhLCAucGFnaW5hdGlvbiB1bCA+IGxpOmZpcnN0LWNoaWxkID4gc3BhbiB7XHJcblx0Ym9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuXHQtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDRweDtcclxufVxyXG4ucGFnaW5hdGlvbiB1bCA+IGxpOmxhc3QtY2hpbGQgPiBhLCAucGFnaW5hdGlvbiB1bCA+IGxpOmxhc3QtY2hpbGQgPiBzcGFuIHtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6IDRweDtcclxufVxyXG4ucGFnaW5hdGlvbi1jZW50ZXJlZCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wYWdpbmF0aW9uLXJpZ2h0IHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ucGFnaW5hdGlvbi1sYXJnZSB1bCA+IGxpID4gYSwgLnBhZ2luYXRpb24tbGFyZ2UgdWwgPiBsaSA+IHNwYW4ge1xyXG5cdHBhZGRpbmc6IDExcHggMTlweDtcclxuXHRmb250LXNpemU6IDE3LjVweDtcclxufVxyXG4ucGFnaW5hdGlvbi1sYXJnZSB1bCA+IGxpOmZpcnN0LWNoaWxkID4gYSwgLnBhZ2luYXRpb24tbGFyZ2UgdWwgPiBsaTpmaXJzdC1jaGlsZCA+IHNwYW4ge1xyXG5cdC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuXHQtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNnB4O1xyXG59XHJcbi5wYWdpbmF0aW9uLWxhcmdlIHVsID4gbGk6bGFzdC1jaGlsZCA+IGEsIC5wYWdpbmF0aW9uLWxhcmdlIHVsID4gbGk6bGFzdC1jaGlsZCA+IHNwYW4ge1xyXG5cdC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogNnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogNnB4O1xyXG59XHJcbi5wYWdpbmF0aW9uLW1pbmkgdWwgPiBsaTpmaXJzdC1jaGlsZCA+IGEsIC5wYWdpbmF0aW9uLXNtYWxsIHVsID4gbGk6Zmlyc3QtY2hpbGQgPiBhLCAucGFnaW5hdGlvbi1taW5pIHVsID4gbGk6Zmlyc3QtY2hpbGQgPiBzcGFuLCAucGFnaW5hdGlvbi1zbWFsbCB1bCA+IGxpOmZpcnN0LWNoaWxkID4gc3BhbiB7XHJcblx0LXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAzcHg7XHJcbn1cclxuLnBhZ2luYXRpb24tbWluaSB1bCA+IGxpOmxhc3QtY2hpbGQgPiBhLCAucGFnaW5hdGlvbi1zbWFsbCB1bCA+IGxpOmxhc3QtY2hpbGQgPiBhLCAucGFnaW5hdGlvbi1taW5pIHVsID4gbGk6bGFzdC1jaGlsZCA+IHNwYW4sIC5wYWdpbmF0aW9uLXNtYWxsIHVsID4gbGk6bGFzdC1jaGlsZCA+IHNwYW4ge1xyXG5cdC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xyXG5cdC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogM3B4O1xyXG59XHJcbi5wYWdpbmF0aW9uLXNtYWxsIHVsID4gbGkgPiBhLCAucGFnaW5hdGlvbi1zbWFsbCB1bCA+IGxpID4gc3BhbiB7XHJcblx0cGFkZGluZzogMnB4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxMS45cHg7XHJcbn1cclxuLnBhZ2luYXRpb24tbWluaSB1bCA+IGxpID4gYSwgLnBhZ2luYXRpb24tbWluaSB1bCA+IGxpID4gc3BhbiB7XHJcblx0cGFkZGluZzogMCA2cHg7XHJcblx0Zm9udC1zaXplOiAxMC41cHg7XHJcbn1cclxuLnBhZ2VyIHtcclxuXHRtYXJnaW46IDIwcHggMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuICp6b29tOiAxO1xyXG59XHJcbi5wYWdlcjpiZWZvcmUsIC5wYWdlcjphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4ucGFnZXI6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5wYWdlciBsaSB7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5wYWdlciBsaSA+IGEsIC5wYWdlciBsaSA+IHNwYW4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiA1cHggMTRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5wYWdlciBsaSA+IGE6aG92ZXIsIC5wYWdlciBsaSA+IGE6Zm9jdXMge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbi5wYWdlciAubmV4dCA+IGEsIC5wYWdlciAubmV4dCA+IHNwYW4ge1xyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG4ucGFnZXIgLnByZXZpb3VzID4gYSwgLnBhZ2VyIC5wcmV2aW91cyA+IHNwYW4ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5wYWdlciAuZGlzYWJsZWQgPiBhLCAucGFnZXIgLmRpc2FibGVkID4gYTpob3ZlciwgLnBhZ2VyIC5kaXNhYmxlZCA+IGE6Zm9jdXMsIC5wYWdlciAuZGlzYWJsZWQgPiBzcGFuIHtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxuXHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogMTA0MDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5tb2RhbC1iYWNrZHJvcC5mYWRlIHtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcbi5tb2RhbC1iYWNrZHJvcCwgLm1vZGFsLWJhY2tkcm9wLmZhZGUuaW4ge1xyXG5cdG9wYWNpdHk6IDAuODtcclxuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xyXG59XHJcbi5tb2RhbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR6LWluZGV4OiAxMDUwO1xyXG5cdHdpZHRoOiA1NjBweDtcclxuXHRtYXJnaW4tbGVmdDogLTI4MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAqYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cdC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG59XHJcbi5tb2RhbC5mYWRlIHtcclxuXHR0b3A6IC0yNSU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCB0b3AgMC4zcyBlYXNlLW91dDtcclxuXHQtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHRvcCAwLjNzIGVhc2Utb3V0O1xyXG5cdC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHRvcCAwLjNzIGVhc2Utb3V0O1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHRvcCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcbi5tb2RhbC5mYWRlLmluIHtcclxuXHR0b3A6IDEwJTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuXHRwYWRkaW5nOiA5cHggMTVweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XHJcblx0bWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgaDMge1xyXG5cdG1hcmdpbjogMDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG4ubW9kYWwtYm9keSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1heC1oZWlnaHQ6IDQwMHB4O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4ubW9kYWwtZm9ybSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIHtcclxuXHRwYWRkaW5nOiAxNHB4IDE1cHggMTVweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xyXG4gKnpvb206IDE7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjZmZmZmZmO1xyXG59XHJcbi5tb2RhbC1mb290ZXI6YmVmb3JlLCAubW9kYWwtZm9vdGVyOmFmdGVyIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHRsaW5lLWhlaWdodDogMDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5tb2RhbC1mb290ZXI6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcbi5tb2RhbC1mb290ZXIgLmJ0biArIC5idG4ge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIC5idG4tZ3JvdXAgLmJ0biArIC5idG4ge1xyXG5cdG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIgLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi50b29sdGlwIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTAzMDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi50b29sdGlwLmluIHtcclxuXHRvcGFjaXR5OiAwLjg7XHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxufVxyXG4udG9vbHRpcC50b3Age1xyXG5cdHBhZGRpbmc6IDVweCAwO1xyXG5cdG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuLnRvb2x0aXAucmlnaHQge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLnRvb2x0aXAuYm90dG9tIHtcclxuXHRwYWRkaW5nOiA1cHggMDtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnRvb2x0aXAubGVmdCB7XHJcblx0cGFkZGluZzogMCA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0zcHg7XHJcbn1cclxuLnRvb2x0aXAtaW5uZXIge1xyXG5cdG1heC13aWR0aDogMjAwcHg7XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnRvb2x0aXAtYXJyb3cge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbi50b29sdGlwLnRvcCAudG9vbHRpcC1hcnJvdyB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTVweDtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xyXG5cdGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xyXG59XHJcbi50b29sdGlwLnJpZ2h0IC50b29sdGlwLWFycm93IHtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi10b3A6IC01cHg7XHJcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwMDAwO1xyXG5cdGJvcmRlci13aWR0aDogNXB4IDVweCA1cHggMDtcclxufVxyXG4udG9vbHRpcC5sZWZ0IC50b29sdGlwLWFycm93IHtcclxuXHR0b3A6IDUwJTtcclxuXHRyaWdodDogMDtcclxuXHRtYXJnaW4tdG9wOiAtNXB4O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDAwO1xyXG5cdGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDtcclxufVxyXG4udG9vbHRpcC5ib3R0b20gLnRvb2x0aXAtYXJyb3cge1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC01cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDAwMDtcclxuXHRib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcclxufVxyXG4ucG9wb3ZlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHotaW5kZXg6IDEwMTA7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRtYXgtd2lkdGg6IDI3NnB4O1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHQtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG59XHJcbi5wb3BvdmVyLnRvcCB7XHJcblx0bWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLnBvcG92ZXIucmlnaHQge1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5wb3BvdmVyLmJvdHRvbSB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucG9wb3Zlci5sZWZ0IHtcclxuXHRtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuLnBvcG92ZXItdGl0bGUge1xyXG5cdHBhZGRpbmc6IDhweCAxNHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxufVxyXG4ucG9wb3Zlci10aXRsZTplbXB0eSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4ucG9wb3Zlci1jb250ZW50IHtcclxuXHRwYWRkaW5nOiA5cHggMTRweDtcclxufVxyXG4ucG9wb3ZlciAuYXJyb3csIC5wb3BvdmVyIC5hcnJvdzphZnRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuLnBvcG92ZXIgLmFycm93IHtcclxuXHRib3JkZXItd2lkdGg6IDExcHg7XHJcbn1cclxuLnBvcG92ZXIgLmFycm93OmFmdGVyIHtcclxuXHRib3JkZXItd2lkdGg6IDEwcHg7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4ucG9wb3Zlci50b3AgLmFycm93IHtcclxuXHRib3R0b206IC0xMXB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTExcHg7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzk5OTtcclxuXHRib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuLnBvcG92ZXIudG9wIC5hcnJvdzphZnRlciB7XHJcblx0Ym90dG9tOiAxcHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG4ucG9wb3Zlci5yaWdodCAuYXJyb3cge1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IC0xMXB4O1xyXG5cdG1hcmdpbi10b3A6IC0xMXB4O1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogIzk5OTtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0Ym9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbn1cclxuLnBvcG92ZXIucmlnaHQgLmFycm93OmFmdGVyIHtcclxuXHRib3R0b206IC0xMHB4O1xyXG5cdGxlZnQ6IDFweDtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbn1cclxuLnBvcG92ZXIuYm90dG9tIC5hcnJvdyB7XHJcblx0dG9wOiAtMTFweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMXB4O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICM5OTk7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHRib3JkZXItdG9wLXdpZHRoOiAwO1xyXG59XHJcbi5wb3BvdmVyLmJvdHRvbSAuYXJyb3c6YWZ0ZXIge1xyXG5cdHRvcDogMXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbn1cclxuLnBvcG92ZXIubGVmdCAuYXJyb3cge1xyXG5cdHRvcDogNTAlO1xyXG5cdHJpZ2h0OiAtMTFweDtcclxuXHRtYXJnaW4tdG9wOiAtMTFweDtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogIzk5OTtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHRib3JkZXItcmlnaHQtd2lkdGg6IDA7XHJcbn1cclxuLnBvcG92ZXIubGVmdCAuYXJyb3c6YWZ0ZXIge1xyXG5cdHJpZ2h0OiAxcHg7XHJcblx0Ym90dG9tOiAtMTBweDtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogI2ZmZmZmZjtcclxuXHRib3JkZXItcmlnaHQtd2lkdGg6IDA7XHJcbn1cclxuLnRodW1ibmFpbHMge1xyXG5cdG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG4gKnpvb206IDE7XHJcbn1cclxuLnRodW1ibmFpbHM6YmVmb3JlLCAudGh1bWJuYWlsczphZnRlciB7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcblx0Y29udGVudDogXCJcIjtcclxufVxyXG4udGh1bWJuYWlsczphZnRlciB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuLnJvdy1mbHVpZCAudGh1bWJuYWlscyB7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLnRodW1ibmFpbHMgPiBsaSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4udGh1bWJuYWlsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1NSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1NSk7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNTUpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5hLnRodW1ibmFpbDpob3ZlciwgYS50aHVtYm5haWw6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzAwODhjYztcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDEwNSwgMjE0LCAwLjI1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDEwNSwgMjE0LCAwLjI1KTtcclxuXHRib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAxMDUsIDIxNCwgMC4yNSk7XHJcbn1cclxuLnRodW1ibmFpbCA+IGltZyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4udGh1bWJuYWlsIC5jYXB0aW9uIHtcclxuXHRwYWRkaW5nOiA5cHg7XHJcblx0Y29sb3I6ICM1NTU1NTU7XHJcbn1cclxuLm1lZGlhLCAubWVkaWEtYm9keSB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuICpvdmVyZmxvdzogdmlzaWJsZTtcclxuXHR6b29tOiAxO1xyXG59XHJcbi5tZWRpYSwgLm1lZGlhIC5tZWRpYSB7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4ubWVkaWE6Zmlyc3QtY2hpbGQge1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLm1lZGlhLW9iamVjdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1lZGlhLWhlYWRpbmcge1xyXG5cdG1hcmdpbjogMCAwIDVweDtcclxufVxyXG4ubWVkaWEgPiAucHVsbC1sZWZ0IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm1lZGlhID4gLnB1bGwtcmlnaHQge1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tZWRpYS1saXN0IHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5sYWJlbCwgLmJhZGdlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMnB4IDRweDtcclxuXHRmb250LXNpemU6IDExLjg0NHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLmxhYmVsIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmJhZGdlIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA5cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA5cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcbi5sYWJlbDplbXB0eSwgLmJhZGdlOmVtcHR5IHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbmEubGFiZWw6aG92ZXIsIGEubGFiZWw6Zm9jdXMsIGEuYmFkZ2U6aG92ZXIsIGEuYmFkZ2U6Zm9jdXMge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxhYmVsLWltcG9ydGFudCwgLmJhZGdlLWltcG9ydGFudCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2I5NGE0ODtcclxufVxyXG4ubGFiZWwtaW1wb3J0YW50W2hyZWZdLCAuYmFkZ2UtaW1wb3J0YW50W2hyZWZdIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTUzYjM5O1xyXG59XHJcbi5sYWJlbC13YXJuaW5nLCAuYmFkZ2Utd2FybmluZyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4OTQwNjtcclxufVxyXG4ubGFiZWwtd2FybmluZ1tocmVmXSwgLmJhZGdlLXdhcm5pbmdbaHJlZl0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjNjc2MDU7XHJcbn1cclxuLmxhYmVsLXN1Y2Nlc3MsIC5iYWRnZS1zdWNjZXNzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4ODQ3O1xyXG59XHJcbi5sYWJlbC1zdWNjZXNzW2hyZWZdLCAuYmFkZ2Utc3VjY2Vzc1tocmVmXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM1NjYzNTtcclxufVxyXG4ubGFiZWwtaW5mbywgLmJhZGdlLWluZm8ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzYTg3YWQ7XHJcbn1cclxuLmxhYmVsLWluZm9baHJlZl0sIC5iYWRnZS1pbmZvW2hyZWZdIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ2OTg3O1xyXG59XHJcbi5sYWJlbC1pbnZlcnNlLCAuYmFkZ2UtaW52ZXJzZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG4ubGFiZWwtaW52ZXJzZVtocmVmXSwgLmJhZGdlLWludmVyc2VbaHJlZl0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmJ0biAubGFiZWwsIC5idG4gLmJhZGdlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAtMXB4O1xyXG59XHJcbi5idG4tbWluaSAubGFiZWwsIC5idG4tbWluaSAuYmFkZ2Uge1xyXG5cdHRvcDogMDtcclxufVxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcclxuIGZyb20ge1xyXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAwO1xyXG59XHJcbnRvIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbn1cclxufVxyXG4gQC1tb3ota2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcclxuIGZyb20ge1xyXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAwO1xyXG59XHJcbnRvIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbn1cclxufVxyXG4gQC1tcy1rZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xyXG4gZnJvbSB7XHJcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7XHJcbn1cclxudG8ge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxufVxyXG59XHJcbiBALW8ta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcclxuIGZyb20ge1xyXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG59XHJcbnRvIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7XHJcbn1cclxufVxyXG4gQGtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XHJcbiBmcm9tIHtcclxuIGJhY2tncm91bmQtcG9zaXRpb246IDQwcHggMDtcclxufVxyXG50byB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG59XHJcbn1cclxuLnByb2dyZXNzIHtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y1ZjVmNSwgI2Y5ZjlmOSk7XHJcbn1cclxuLnByb2dyZXNzIC5iYXIge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwZTkwZDI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IHdpZHRoIDAuNnMgZWFzZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQ5YmRmLCAjMDQ4MGJlKTtcclxufVxyXG4ucHJvZ3Jlc3MgLmJhciArIC5iYXIge1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG4ucHJvZ3Jlc3Mtc3RyaXBlZCAuYmFyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ5YmRmO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDEwMCUsIDEwMCUgMCwgY29sb3Itc3RvcCgwLjI1LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjc1LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjc1LCB0cmFuc3BhcmVudCksIHRvKHRyYW5zcGFyZW50KSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xyXG5cdC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XHJcblx0LW1vei1iYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcclxuXHQtby1iYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcclxufVxyXG4ucHJvZ3Jlc3MuYWN0aXZlIC5iYXIge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XHJcblx0LW1vei1hbmltYXRpb246IHByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHQtbXMtYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XHJcblx0LW8tYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XHJcblx0YW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLnByb2dyZXNzLWRhbmdlciAuYmFyLCAucHJvZ3Jlc3MgLmJhci1kYW5nZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkZDUxNGM7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZTVmNWIsICNjNDNjMzUpO1xyXG59XHJcbi5wcm9ncmVzcy1kYW5nZXIucHJvZ3Jlc3Mtc3RyaXBlZCAuYmFyLCAucHJvZ3Jlc3Mtc3RyaXBlZCAuYmFyLWRhbmdlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlNWY1YjtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxufVxyXG4ucHJvZ3Jlc3Mtc3VjY2VzcyAuYmFyLCAucHJvZ3Jlc3MgLmJhci1zdWNjZXNzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWViOTVlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNjJjNDYyLCAjNTdhOTU3KTtcclxufVxyXG4ucHJvZ3Jlc3Mtc3VjY2Vzcy5wcm9ncmVzcy1zdHJpcGVkIC5iYXIsIC5wcm9ncmVzcy1zdHJpcGVkIC5iYXItc3VjY2VzcyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzYyYzQ2MjtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxufVxyXG4ucHJvZ3Jlc3MtaW5mbyAuYmFyLCAucHJvZ3Jlc3MgLmJhci1pbmZvIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMWNmO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNWJjMGRlLCAjMzM5YmI5KTtcclxufVxyXG4ucHJvZ3Jlc3MtaW5mby5wcm9ncmVzcy1zdHJpcGVkIC5iYXIsIC5wcm9ncmVzcy1zdHJpcGVkIC5iYXItaW5mbyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxufVxyXG4ucHJvZ3Jlc3Mtd2FybmluZyAuYmFyLCAucHJvZ3Jlc3MgLmJhci13YXJuaW5nIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhNzMyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmJiNDUwLCAjZjg5NDA2KTtcclxufVxyXG4ucHJvZ3Jlc3Mtd2FybmluZy5wcm9ncmVzcy1zdHJpcGVkIC5iYXIsIC5wcm9ncmVzcy1zdHJpcGVkIC5iYXItd2FybmluZyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZiYjQ1MDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcclxufVxyXG4uYWNjb3JkaW9uIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hY2NvcmRpb24tZ3JvdXAge1xyXG5cdG1hcmdpbi1ib3R0b206IDJweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYWNjb3JkaW9uLWhlYWRpbmcge1xyXG5cdGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuLmFjY29yZGlvbi1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiA4cHggMTVweDtcclxufVxyXG4uYWNjb3JkaW9uLXRvZ2dsZSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hY2NvcmRpb24taW5uZXIge1xyXG5cdHBhZGRpbmc6IDlweCAxNXB4O1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcbi5jYXJvdXNlbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLmNhcm91c2VsLWlubmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjZzIGVhc2UtaW4tb3V0IGxlZnQ7XHJcblx0LW1vei10cmFuc2l0aW9uOiAwLjZzIGVhc2UtaW4tb3V0IGxlZnQ7XHJcblx0LW8tdHJhbnNpdGlvbjogMC42cyBlYXNlLWluLW91dCBsZWZ0O1xyXG5cdHRyYW5zaXRpb246IDAuNnMgZWFzZS1pbi1vdXQgbGVmdDtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZywgLmNhcm91c2VsLWlubmVyID4gLml0ZW0gPiBhID4gaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRsaW5lLWhlaWdodDogMTtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuYWN0aXZlLCAuY2Fyb3VzZWwtaW5uZXIgPiAubmV4dCwgLmNhcm91c2VsLWlubmVyID4gLnByZXYge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUge1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuLmNhcm91c2VsLWlubmVyID4gLm5leHQsIC5jYXJvdXNlbC1pbm5lciA+IC5wcmV2IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lciA+IC5uZXh0IHtcclxuXHRsZWZ0OiAxMDAlO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lciA+IC5wcmV2IHtcclxuXHRsZWZ0OiAtMTAwJTtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAubmV4dC5sZWZ0LCAuY2Fyb3VzZWwtaW5uZXIgPiAucHJldi5yaWdodCB7XHJcblx0bGVmdDogMDtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgPiAuYWN0aXZlLmxlZnQge1xyXG5cdGxlZnQ6IC0xMDAlO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUucmlnaHQge1xyXG5cdGxlZnQ6IDEwMCU7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDQwJTtcclxuXHRsZWZ0OiAxNXB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRtYXJnaW4tdG9wOiAtMjBweDtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogIzIyMjIyMjtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDIzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMjNweDtcclxuXHRvcGFjaXR5OiAwLjU7XHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbC5yaWdodCB7XHJcblx0cmlnaHQ6IDE1cHg7XHJcblx0bGVmdDogYXV0bztcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbDpob3ZlciwgLmNhcm91c2VsLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjk7XHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcclxufVxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTVweDtcclxuXHRyaWdodDogMTVweDtcclxuXHR6LWluZGV4OiA1O1xyXG5cdG1hcmdpbjogMDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHR0ZXh0LWluZGVudDogLTk5OXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0YmFja2dyb3VuZDogIzMzMzMzMztcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIGg0LCAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBoNCB7XHJcblx0bWFyZ2luOiAwIDAgNXB4O1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIHAge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmhlcm8tdW5pdCB7XHJcblx0cGFkZGluZzogNjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogMjAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5oZXJvLXVuaXQgaDEge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0Zm9udC1zaXplOiA2MHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi5oZXJvLXVuaXQgbGkge1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5wdWxsLXJpZ2h0IHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnB1bGwtbGVmdCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmhpZGUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3cge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pbnZpc2libGUge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uYWZmaXgge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/assets/css/fontello.css":
/*!*************************************!*\
  !*** ./src/assets/css/fontello.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\r\n @font-face {\r\n font-family: 'fontello';\r\n src: url('fontello.eot?6946176');\r\n src: url('fontello.eot?6946176#iefix') format('embedded-opentype'), url('fontello.woff?6946176') format('woff'), url('fontello.ttf?6946176') format('truetype'), url('fontello.svg?6946176#fontello') format('svg');\r\n font-weight: normal;\r\n font-style: normal;\r\n}\r\n /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\r\n /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\r\n /*\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  @font-face {\r\n    font-family: 'fontello';\r\n    src: url('../font/fontello.svg?6946176#fontello') format('svg');\r\n  }\r\n}\r\n*/\r\n [class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\r\n font-family: 'fontello';\r\n font-style: normal;\r\n font-weight: normal;\r\n speak: none;\r\n display: inline-block;\r\n text-decoration: inherit;\r\n width: 1em;\r\n margin-right: 0.2em;\r\n text-align: center;\r\n/* opacity .8 */\r\n/* For safety - reset parent styles, that can break glyph codes*/\r\n  font-variant: normal;\r\n text-transform: none;\r\n/* fix buttons height, for twitter bootstrap */\r\n  line-height: 1em;\r\n/* Animation center compensation - magrins should be symmetric */\r\n/* remove if not needed */\r\n  margin-left: 0.2em;\r\n/* you can be more comfortable with increased icons size */\r\n/* font-size: 120%; */\r\n/* Uncomment for 3D effect */\r\n/* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\r\n}\r\n .icon-plus:before {\r\n\tcontent: '\\2b';\r\n}\r\n /* '+' */\r\n .icon-heart-empty:before {\r\n\tcontent: '\\2661';\r\n}\r\n /* '♡' */\r\n .icon-heart:before {\r\n\tcontent: '\\2665';\r\n}\r\n /* '♥' */\r\n .icon-tools:before {\r\n\tcontent: '\\2692';\r\n}\r\n /* '⚒' */\r\n .icon-cog:before {\r\n\tcontent: '\\2699';\r\n}\r\n /* '⚙' */\r\n .icon-attention:before {\r\n\tcontent: '\\26a0';\r\n}\r\n /* '⚠' */\r\n .icon-mail:before {\r\n\tcontent: '\\2709';\r\n}\r\n /* '✉' */\r\n .icon-mail-1:before {\r\n\tcontent: '\\e801';\r\n}\r\n /* '' */\r\n .icon-mail-2:before {\r\n\tcontent: '\\e802';\r\n}\r\n /* '' */\r\n .icon-cancel:before {\r\n\tcontent: '\\2715';\r\n}\r\n /* '✕' */\r\n .icon-cancel-circled:before {\r\n\tcontent: '\\2716';\r\n}\r\n /* '✖' */\r\n .icon-cancel-squared:before {\r\n\tcontent: '\\274e';\r\n}\r\n /* '❎' */\r\n .icon-plus-circled:before {\r\n\tcontent: '\\2795';\r\n}\r\n /* '➕' */\r\n .icon-ccw:before {\r\n\tcontent: '\\27f2';\r\n}\r\n /* '⟲' */\r\n .icon-list:before {\r\n\tcontent: '\\e005';\r\n}\r\n /* '' */\r\n .icon-wordpress:before {\r\n\tcontent: '\\e805';\r\n}\r\n /* '' */\r\n .icon-desktop-circled:before {\r\n\tcontent: '\\e040';\r\n}\r\n /* '' */\r\n .icon-desktop:before {\r\n\tcontent: '\\e041';\r\n}\r\n /* '' */\r\n .icon-pencil-circled:before {\r\n\tcontent: '\\e067';\r\n}\r\n /* '' */\r\n .icon-group-circled:before {\r\n\tcontent: '\\e090';\r\n}\r\n /* '' */\r\n .icon-cog-circled:before {\r\n\tcontent: '\\e108';\r\n}\r\n /* '' */\r\n .icon-chat:before {\r\n\tcontent: '\\e720';\r\n}\r\n /* '' */\r\n .icon-vcard:before {\r\n\tcontent: '\\e722';\r\n}\r\n /* '' */\r\n .icon-map:before {\r\n\tcontent: '\\e727';\r\n}\r\n /* '' */\r\n .icon-basket:before {\r\n\tcontent: '\\e73d';\r\n}\r\n /* '' */\r\n .icon-popup:before {\r\n\tcontent: '\\e74c';\r\n}\r\n /* '' */\r\n .icon-window:before {\r\n\tcontent: '\\e74e';\r\n}\r\n /* '' */\r\n .icon-chart-pie:before {\r\n\tcontent: '\\e751';\r\n}\r\n /* '' */\r\n .icon-thermometer:before {\r\n\tcontent: '\\e757';\r\n}\r\n /* '' */\r\n .icon-down-circled:before {\r\n\tcontent: '\\e758';\r\n}\r\n /* '' */\r\n .icon-left-circled:before {\r\n\tcontent: '\\e759';\r\n}\r\n /* '' */\r\n .icon-right-circled:before {\r\n\tcontent: '\\e75a';\r\n}\r\n /* '' */\r\n .icon-up-circled:before {\r\n\tcontent: '\\e75b';\r\n}\r\n /* '' */\r\n .icon-down-open:before {\r\n\tcontent: '\\e75c';\r\n}\r\n /* '' */\r\n .icon-left-open:before {\r\n\tcontent: '\\e75d';\r\n}\r\n /* '' */\r\n .icon-right-open:before {\r\n\tcontent: '\\e75e';\r\n}\r\n /* '' */\r\n .icon-up-open:before {\r\n\tcontent: '\\e75f';\r\n}\r\n /* '' */\r\n .icon-down-open-mini:before {\r\n\tcontent: '\\e760';\r\n}\r\n /* '' */\r\n .icon-left-open-mini:before {\r\n\tcontent: '\\e761';\r\n}\r\n /* '' */\r\n .icon-up-open-mini:before {\r\n\tcontent: '\\e763';\r\n}\r\n /* '' */\r\n .icon-down-open-big:before {\r\n\tcontent: '\\e764';\r\n}\r\n /* '' */\r\n .icon-left-open-big:before {\r\n\tcontent: '\\e765';\r\n}\r\n /* '' */\r\n .icon-up-open-big:before {\r\n\tcontent: '\\e767';\r\n}\r\n /* '' */\r\n .icon-install:before {\r\n\tcontent: '\\e778';\r\n}\r\n /* '' */\r\n .icon-brush:before {\r\n\tcontent: '\\e79a';\r\n}\r\n /* '' */\r\n .icon-brush-1:before {\r\n\tcontent: '\\e800';\r\n}\r\n /* '' */\r\n .icon-brush-alt:before {\r\n\tcontent: '\\e79b';\r\n}\r\n /* '' */\r\n .icon-chart-pie-1:before {\r\n\tcontent: '\\e7a2';\r\n}\r\n /* '' */\r\n .icon-terminal:before {\r\n\tcontent: '\\e7ac';\r\n}\r\n /* '' */\r\n .icon-vector:before {\r\n\tcontent: '\\f045';\r\n}\r\n /* '' */\r\n .icon-vector-pencil:before {\r\n\tcontent: '\\f046';\r\n}\r\n /* '' */\r\n .icon-link-ext:before {\r\n\tcontent: '\\f08e';\r\n}\r\n /* '' */\r\n .icon-beaker:before {\r\n\tcontent: '\\f0c3';\r\n}\r\n /* '' */\r\n .icon-mail-alt:before {\r\n\tcontent: '\\f0e0';\r\n}\r\n /* '' */\r\n .icon-flickr:before {\r\n\tcontent: '\\f303';\r\n}\r\n /* '' */\r\n .icon-flickr-circled:before {\r\n\tcontent: '\\f304';\r\n}\r\n /* '' */\r\n .icon-vimeo:before {\r\n\tcontent: '\\f306';\r\n}\r\n /* '' */\r\n .icon-vimeo-circled:before {\r\n\tcontent: '\\f307';\r\n}\r\n /* '' */\r\n .icon-twitter:before {\r\n\tcontent: '\\f309';\r\n\tcolor: #30C5EA;\r\n}\r\n /* '' */\r\n .icon-twitter-circled:before {\r\n\tcontent: '\\f30a';\r\n\tcolor: #30C5EA;\r\n}\r\n /* '' */\r\n .icon-facebook:before {\r\n\tcontent: '\\f30c';\r\n\tcolor: #38569C;\r\n}\r\n /* '' */\r\n .icon-facebook-circled:before {\r\n\tcontent: '\\f30d';\r\n\tcolor:#38569C;\r\n}\r\n /* '' */\r\n .icon-facebook-squared:before {\r\n\tcontent: '\\f30e';\r\n\tcolor:#38569C;\r\n}\r\n /* '' */\r\n .icon-gplus:before {\r\n\tcontent: '\\f30f';\r\n\tcolor: #DB4A37;\r\n}\r\n /* '' */\r\n .icon-gplus-circled:before {\r\n\tcontent: '\\f310';\r\n\tcolor: #DB4A37;\r\n}\r\n /* '' */\r\n .icon-pinterest:before {\r\n\tcontent: '\\f312';\r\n\tcolor: #f37238;\r\n}\r\n /* '' */\r\n .icon-pinterest-circled:before {\r\n\tcontent: '\\f313';\r\n\tcolor: #f37238;\r\n}\r\n /* '' */\r\n .icon-tumblr:before {\r\n\tcontent: '\\f315';\r\n}\r\n /* '' */\r\n .icon-tumblr-circled:before {\r\n\tcontent: '\\f316';\r\n}\r\n /* '' */\r\n .icon-linkedin:before {\r\n\tcontent: '\\f318';\r\n}\r\n /* '' */\r\n .icon-linkedin-circled:before {\r\n\tcontent: '\\f319';\r\n}\r\n /* '' */\r\n .icon-dribbble:before {\r\n\tcontent: '\\f31b';\r\n}\r\n /* '' */\r\n .icon-dribbble-circled:before {\r\n\tcontent: '\\f31c';\r\n}\r\n /* '' */\r\n .icon-stumbleupon:before {\r\n\tcontent: '\\f31e';\r\n}\r\n /* '' */\r\n .icon-stumbleupon-circled:before {\r\n\tcontent: '\\f31f';\r\n}\r\n /* '' */\r\n .icon-lastfm:before {\r\n\tcontent: '\\f321';\r\n}\r\n /* '' */\r\n .icon-lastfm-circled:before {\r\n\tcontent: '\\f322';\r\n}\r\n /* '' */\r\n .icon-skype:before {\r\n\tcontent: '\\f339';\r\n\tcolor: #00B0EE;\r\n}\r\n /* '' */\r\n .icon-skype-circled:before {\r\n\tcontent: '\\f33a';\r\n\tcolor: #00B0EE;\r\n}\r\n /* '' */\r\n .icon-paypal:before {\r\n\tcontent: '\\f342';\r\n}\r\n /* '' */\r\n .icon-picasa:before {\r\n\tcontent: '\\f345';\r\n}\r\n /* '' */\r\n .icon-picture:before {\r\n\tcontent: '🌄';\r\n}\r\n /* '\\1f304' */\r\n .icon-target:before {\r\n\tcontent: '🎯';\r\n}\r\n /* '\\1f3af' */\r\n .icon-thumbs-up:before {\r\n\tcontent: '👍';\r\n}\r\n /* '\\1f44d' */\r\n .icon-thumbs-down:before {\r\n\tcontent: '👎';\r\n}\r\n /* '\\1f44e' */\r\n .icon-lamp:before {\r\n\tcontent: '💡';\r\n}\r\n /* '\\1f4a1' */\r\n .icon-alert:before {\r\n\tcontent: '💥';\r\n}\r\n /* '\\1f4a5' */\r\n .icon-monitor:before {\r\n\tcontent: '💻';\r\n}\r\n /* '\\1f4bb' */\r\n .icon-chart-line:before {\r\n\tcontent: '📈';\r\n}\r\n /* '\\1f4c8' */\r\n .icon-chart-bar:before {\r\n\tcontent: '📊';\r\n}\r\n /* '\\1f4ca' */\r\n .icon-clipboard:before {\r\n\tcontent: '📋';\r\n}\r\n /* '\\1f4cb' */\r\n .icon-phone:before {\r\n\tcontent: '📞';\r\n}\r\n /* '\\1f4de' */\r\n .icon-megaphone:before {\r\n\tcontent: '📣';\r\n}\r\n /* '\\1f4e3' */\r\n .icon-download:before {\r\n\tcontent: '📥';\r\n}\r\n /* '\\1f4e5' */\r\n .icon-mobile:before {\r\n\tcontent: '📱';\r\n}\r\n /* '\\1f4f1' */\r\n .icon-mobile-2:before {\r\n\tcontent: '\\e804';\r\n}\r\n /* '' */\r\n .icon-mobile-1:before {\r\n\tcontent: '\\e803';\r\n}\r\n /* '' */\r\n .icon-camera:before {\r\n\tcontent: '📷';\r\n}\r\n /* '\\1f4f7' */\r\n .icon-link:before {\r\n\tcontent: '🔗';\r\n}\r\n /* '\\1f517' */\r\n .icon-chart-area:before {\r\n\tcontent: '🔾';\r\n}\r\n /* '\\1f53e' */\r\n .icon-rocket:before {\r\n\tcontent: '🚀';\r\n}\r\n /* '\\1f680' */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2ZvbnRlbGxvLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7Q0FDZjtDQUNBLHVCQUF1QjtDQUN2QixnQ0FBd0M7Q0FDeEMsbU5BQW1QO0NBQ25QLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7Q0FDQSxnR0FBZ0c7Q0FDaEcsMkZBQTJGO0NBQzNGOzs7Ozs7O0NBT0M7Q0FDRDtDQUNDLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsd0JBQXdCO0NBQ3hCLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CLGVBQWU7QUFDZixnRUFBZ0U7RUFDOUQsb0JBQW9CO0NBQ3JCLG9CQUFvQjtBQUNyQiw4Q0FBOEM7RUFDNUMsZ0JBQWdCO0FBQ2xCLGdFQUFnRTtBQUNoRSx5QkFBeUI7RUFDdkIsa0JBQWtCO0FBQ3BCLDBEQUEwRDtBQUMxRCxxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLHVEQUF1RDtBQUN2RDtDQUNBO0NBQ0MsY0FBYztBQUNmO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pCO0NBQUUsUUFBUTtDQUNWO0NBQ0MsZ0JBQWdCO0FBQ2pC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QUFhO0NBQ2Y7Q0FDQyxhQUFhO0FBQ2Q7Q0FBRSxhQUFhO0NBQ2Y7Q0FDQyxhQUFhO0FBQ2Q7Q0FBRSxhQUFhO0NBQ2Y7Q0FDQyxhQUFhO0FBQ2Q7Q0FBRSxhQUFhO0NBQ2Y7Q0FDQyxnQkFBZ0I7QUFDakI7Q0FBRSxRQUFRO0NBQ1Y7Q0FDQyxnQkFBZ0I7QUFDakI7Q0FBRSxRQUFRO0NBQ1Y7Q0FDQyxhQUFhO0FBQ2Q7Q0FBRSxhQUFhO0NBQ2Y7Q0FDQyxhQUFhO0FBQ2Q7Q0FBRSxhQUFhO0NBQ2Y7Q0FDQyxhQUFhO0FBQ2Q7Q0FBRSxhQUFhO0NBQ2Y7Q0FDQyxhQUFhO0FBQ2Q7Q0FBRSxhQUFhIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL2ZvbnRlbGxvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcclxuIEBmb250LWZhY2Uge1xyXG4gZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XHJcbiBzcmM6IHVybChcIi4uL2ZvbnQvZm9udGVsbG8uZW90PzY5NDYxNzZcIik7XHJcbiBzcmM6IHVybChcIi4uL2ZvbnQvZm9udGVsbG8uZW90PzY5NDYxNzYjaWVmaXhcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoXCIuLi9mb250L2ZvbnRlbGxvLndvZmY/Njk0NjE3NlwiKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKFwiLi4vZm9udC9mb250ZWxsby50dGY/Njk0NjE3NlwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybChcIi4uL2ZvbnQvZm9udGVsbG8uc3ZnPzY5NDYxNzYjZm9udGVsbG9cIikgZm9ybWF0KCdzdmcnKTtcclxuIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuLyogQ2hyb21lIGhhY2s6IFNWRyBpcyByZW5kZXJlZCBtb3JlIHNtb290aCBpbiBXaW5kb3p6ZS4gMTAwJSBtYWdpYywgdW5jb21tZW50IGlmIHlvdSBuZWVkIGl0LiAqL1xyXG4vKiBOb3RlLCB0aGF0IHdpbGwgYnJlYWsgaGludGluZyEgSW4gb3RoZXIgT1MtZXMgZm9udCB3aWxsIGJlIG5vdCBhcyBzaGFycCBhcyBpdCBjb3VsZCBiZSAqL1xyXG4vKlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udGVsbG8nO1xyXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnQvZm9udGVsbG8uc3ZnPzY5NDYxNzYjZm9udGVsbG8nKSBmb3JtYXQoJ3N2ZycpO1xyXG4gIH1cclxufVxyXG4qL1xyXG5bY2xhc3NePVwiaWNvbi1cIl06YmVmb3JlLCBbY2xhc3MqPVwiIGljb24tXCJdOmJlZm9yZSB7XHJcbiBmb250LWZhbWlseTogJ2ZvbnRlbGxvJztcclxuIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiBzcGVhazogbm9uZTtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuIHdpZHRoOiAxZW07XHJcbiBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vKiBvcGFjaXR5IC44ICovXHJcbi8qIEZvciBzYWZldHkgLSByZXNldCBwYXJlbnQgc3R5bGVzLCB0aGF0IGNhbiBicmVhayBnbHlwaCBjb2RlcyovXHJcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuLyogZml4IGJ1dHRvbnMgaGVpZ2h0LCBmb3IgdHdpdHRlciBib290c3RyYXAgKi9cclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4vKiBBbmltYXRpb24gY2VudGVyIGNvbXBlbnNhdGlvbiAtIG1hZ3JpbnMgc2hvdWxkIGJlIHN5bW1ldHJpYyAqL1xyXG4vKiByZW1vdmUgaWYgbm90IG5lZWRlZCAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjJlbTtcclxuLyogeW91IGNhbiBiZSBtb3JlIGNvbWZvcnRhYmxlIHdpdGggaW5jcmVhc2VkIGljb25zIHNpemUgKi9cclxuLyogZm9udC1zaXplOiAxMjAlOyAqL1xyXG4vKiBVbmNvbW1lbnQgZm9yIDNEIGVmZmVjdCAqL1xyXG4vKiB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgxMjcsIDEyNywgMTI3LCAwLjMpOyAqL1xyXG59XHJcbi5pY29uLXBsdXM6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFwyYic7XHJcbn0gLyogJysnICovXHJcbi5pY29uLWhlYXJ0LWVtcHR5OmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcMjY2MSc7XHJcbn0gLyogJ+KZoScgKi9cclxuLmljb24taGVhcnQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFwyNjY1JztcclxufSAvKiAn4pmlJyAqL1xyXG4uaWNvbi10b29sczpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXDI2OTInO1xyXG59IC8qICfimpInICovXHJcbi5pY29uLWNvZzpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXDI2OTknO1xyXG59IC8qICfimpknICovXHJcbi5pY29uLWF0dGVudGlvbjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXDI2YTAnO1xyXG59IC8qICfimqAnICovXHJcbi5pY29uLW1haWw6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFwyNzA5JztcclxufSAvKiAn4pyJJyAqL1xyXG4uaWNvbi1tYWlsLTE6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlODAxJztcclxufSAvKiAn7qCBJyAqL1xyXG4uaWNvbi1tYWlsLTI6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlODAyJztcclxufSAvKiAn7qCCJyAqL1xyXG4uaWNvbi1jYW5jZWw6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFwyNzE1JztcclxufSAvKiAn4pyVJyAqL1xyXG4uaWNvbi1jYW5jZWwtY2lyY2xlZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXDI3MTYnO1xyXG59IC8qICfinJYnICovXHJcbi5pY29uLWNhbmNlbC1zcXVhcmVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcMjc0ZSc7XHJcbn0gLyogJ+KdjicgKi9cclxuLmljb24tcGx1cy1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcMjc5NSc7XHJcbn0gLyogJ+KelScgKi9cclxuLmljb24tY2N3OmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcMjdmMic7XHJcbn0gLyogJ+KfsicgKi9cclxuLmljb24tbGlzdDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGUwMDUnO1xyXG59IC8qICfugIUnICovXHJcbi5pY29uLXdvcmRwcmVzczpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU4MDUnO1xyXG59IC8qICfuoIUnICovXHJcbi5pY29uLWRlc2t0b3AtY2lyY2xlZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGUwNDAnO1xyXG59IC8qICfugYAnICovXHJcbi5pY29uLWRlc2t0b3A6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlMDQxJztcclxufSAvKiAn7oGBJyAqL1xyXG4uaWNvbi1wZW5jaWwtY2lyY2xlZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGUwNjcnO1xyXG59IC8qICfugacnICovXHJcbi5pY29uLWdyb3VwLWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlMDkwJztcclxufSAvKiAn7oKQJyAqL1xyXG4uaWNvbi1jb2ctY2lyY2xlZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGUxMDgnO1xyXG59IC8qICfuhIgnICovXHJcbi5pY29uLWNoYXQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzIwJztcclxufSAvKiAn7pygJyAqL1xyXG4uaWNvbi12Y2FyZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3MjInO1xyXG59IC8qICfunKInICovXHJcbi5pY29uLW1hcDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3MjcnO1xyXG59IC8qICfunKcnICovXHJcbi5pY29uLWJhc2tldDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3M2QnO1xyXG59IC8qICfunL0nICovXHJcbi5pY29uLXBvcHVwOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc0Yyc7XHJcbn0gLyogJ+6djCcgKi9cclxuLmljb24td2luZG93OmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc0ZSc7XHJcbn0gLyogJ+6djicgKi9cclxuLmljb24tY2hhcnQtcGllOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc1MSc7XHJcbn0gLyogJ+6dkScgKi9cclxuLmljb24tdGhlcm1vbWV0ZXI6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzU3JztcclxufSAvKiAn7p2XJyAqL1xyXG4uaWNvbi1kb3duLWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzU4JztcclxufSAvKiAn7p2YJyAqL1xyXG4uaWNvbi1sZWZ0LWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzU5JztcclxufSAvKiAn7p2ZJyAqL1xyXG4uaWNvbi1yaWdodC1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc1YSc7XHJcbn0gLyogJ+6dmicgKi9cclxuLmljb24tdXAtY2lyY2xlZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3NWInO1xyXG59IC8qICfunZsnICovXHJcbi5pY29uLWRvd24tb3BlbjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3NWMnO1xyXG59IC8qICfunZwnICovXHJcbi5pY29uLWxlZnQtb3BlbjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3NWQnO1xyXG59IC8qICfunZ0nICovXHJcbi5pY29uLXJpZ2h0LW9wZW46YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzVlJztcclxufSAvKiAn7p2eJyAqL1xyXG4uaWNvbi11cC1vcGVuOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc1Zic7XHJcbn0gLyogJ+6dnycgKi9cclxuLmljb24tZG93bi1vcGVuLW1pbmk6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzYwJztcclxufSAvKiAn7p2gJyAqL1xyXG4uaWNvbi1sZWZ0LW9wZW4tbWluaTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3NjEnO1xyXG59IC8qICfunaEnICovXHJcbi5pY29uLXVwLW9wZW4tbWluaTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3NjMnO1xyXG59IC8qICfunaMnICovXHJcbi5pY29uLWRvd24tb3Blbi1iaWc6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzY0JztcclxufSAvKiAn7p2kJyAqL1xyXG4uaWNvbi1sZWZ0LW9wZW4tYmlnOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc2NSc7XHJcbn0gLyogJ+6dpScgKi9cclxuLmljb24tdXAtb3Blbi1iaWc6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzY3JztcclxufSAvKiAn7p2nJyAqL1xyXG4uaWNvbi1pbnN0YWxsOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc3OCc7XHJcbn0gLyogJ+6duCcgKi9cclxuLmljb24tYnJ1c2g6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlNzlhJztcclxufSAvKiAn7p6aJyAqL1xyXG4uaWNvbi1icnVzaC0xOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTgwMCc7XHJcbn0gLyogJ+6ggCcgKi9cclxuLmljb24tYnJ1c2gtYWx0OmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZTc5Yic7XHJcbn0gLyogJ+6emycgKi9cclxuLmljb24tY2hhcnQtcGllLTE6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlN2EyJztcclxufSAvKiAn7p6iJyAqL1xyXG4uaWNvbi10ZXJtaW5hbDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU3YWMnO1xyXG59IC8qICfunqwnICovXHJcbi5pY29uLXZlY3RvcjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYwNDUnO1xyXG59IC8qICfvgYUnICovXHJcbi5pY29uLXZlY3Rvci1wZW5jaWw6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMDQ2JztcclxufSAvKiAn74GGJyAqL1xyXG4uaWNvbi1saW5rLWV4dDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYwOGUnO1xyXG59IC8qICfvgo4nICovXHJcbi5pY29uLWJlYWtlcjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYwYzMnO1xyXG59IC8qICfvg4MnICovXHJcbi5pY29uLW1haWwtYWx0OmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjBlMCc7XHJcbn0gLyogJ++DoCcgKi9cclxuLmljb24tZmxpY2tyOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMwMyc7XHJcbn0gLyogJ++MgycgKi9cclxuLmljb24tZmxpY2tyLWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzA0JztcclxufSAvKiAn74yEJyAqL1xyXG4uaWNvbi12aW1lbzpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYzMDYnO1xyXG59IC8qICfvjIYnICovXHJcbi5pY29uLXZpbWVvLWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzA3JztcclxufSAvKiAn74yHJyAqL1xyXG4uaWNvbi10d2l0dGVyOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMwOSc7XHJcblx0Y29sb3I6ICMzMEM1RUE7XHJcbn0gLyogJ++MiScgKi9cclxuLmljb24tdHdpdHRlci1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMwYSc7XHJcblx0Y29sb3I6ICMzMEM1RUE7XHJcbn0gLyogJ++MiicgKi9cclxuLmljb24tZmFjZWJvb2s6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzBjJztcclxuXHRjb2xvcjogIzM4NTY5QztcclxufSAvKiAn74yMJyAqL1xyXG4uaWNvbi1mYWNlYm9vay1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMwZCc7XHJcblx0Y29sb3I6IzM4NTY5QztcclxufSAvKiAn74yNJyAqL1xyXG4uaWNvbi1mYWNlYm9vay1zcXVhcmVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMwZSc7XHJcblx0Y29sb3I6IzM4NTY5QztcclxufSAvKiAn74yOJyAqL1xyXG4uaWNvbi1ncGx1czpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYzMGYnO1xyXG5cdGNvbG9yOiAjREI0QTM3O1xyXG59IC8qICfvjI8nICovXHJcbi5pY29uLWdwbHVzLWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzEwJztcclxuXHRjb2xvcjogI0RCNEEzNztcclxufSAvKiAn74yQJyAqL1xyXG4uaWNvbi1waW50ZXJlc3Q6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzEyJztcclxuXHRjb2xvcjogI2YzNzIzODtcclxufSAvKiAn74ySJyAqL1xyXG4uaWNvbi1waW50ZXJlc3QtY2lyY2xlZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYzMTMnO1xyXG5cdGNvbG9yOiAjZjM3MjM4O1xyXG59IC8qICfvjJMnICovXHJcbi5pY29uLXR1bWJscjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYzMTUnO1xyXG59IC8qICfvjJUnICovXHJcbi5pY29uLXR1bWJsci1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMxNic7XHJcbn0gLyogJ++MlicgKi9cclxuLmljb24tbGlua2VkaW46YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzE4JztcclxufSAvKiAn74yYJyAqL1xyXG4uaWNvbi1saW5rZWRpbi1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMxOSc7XHJcbn0gLyogJ++MmScgKi9cclxuLmljb24tZHJpYmJibGU6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzFiJztcclxufSAvKiAn74ybJyAqL1xyXG4uaWNvbi1kcmliYmJsZS1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMxYyc7XHJcbn0gLyogJ++MnCcgKi9cclxuLmljb24tc3R1bWJsZXVwb246YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzFlJztcclxufSAvKiAn74yeJyAqL1xyXG4uaWNvbi1zdHVtYmxldXBvbi1jaXJjbGVkOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMxZic7XHJcbn0gLyogJ++MnycgKi9cclxuLmljb24tbGFzdGZtOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ1xcZjMyMSc7XHJcbn0gLyogJ++MoScgKi9cclxuLmljb24tbGFzdGZtLWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzIyJztcclxufSAvKiAn74yiJyAqL1xyXG4uaWNvbi1za3lwZTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGYzMzknO1xyXG5cdGNvbG9yOiAjMDBCMEVFO1xyXG59IC8qICfvjLknICovXHJcbi5pY29uLXNreXBlLWNpcmNsZWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzNhJztcclxuXHRjb2xvcjogIzAwQjBFRTtcclxufSAvKiAn74y6JyAqL1xyXG4uaWNvbi1wYXlwYWw6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzQyJztcclxufSAvKiAn742CJyAqL1xyXG4uaWNvbi1waWNhc2E6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxmMzQ1JztcclxufSAvKiAn742FJyAqL1xyXG4uaWNvbi1waWN0dXJlOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ/CfjIQnO1xyXG59IC8qICdcXDFmMzA0JyAqL1xyXG4uaWNvbi10YXJnZXQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAn8J+Oryc7XHJcbn0gLyogJ1xcMWYzYWYnICovXHJcbi5pY29uLXRodW1icy11cDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfwn5GNJztcclxufSAvKiAnXFwxZjQ0ZCcgKi9cclxuLmljb24tdGh1bWJzLWRvd246YmVmb3JlIHtcclxuXHRjb250ZW50OiAn8J+Rjic7XHJcbn0gLyogJ1xcMWY0NGUnICovXHJcbi5pY29uLWxhbXA6YmVmb3JlIHtcclxuXHRjb250ZW50OiAn8J+SoSc7XHJcbn0gLyogJ1xcMWY0YTEnICovXHJcbi5pY29uLWFsZXJ0OmJlZm9yZSB7XHJcblx0Y29udGVudDogJ/CfkqUnO1xyXG59IC8qICdcXDFmNGE1JyAqL1xyXG4uaWNvbi1tb25pdG9yOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ/CfkrsnO1xyXG59IC8qICdcXDFmNGJiJyAqL1xyXG4uaWNvbi1jaGFydC1saW5lOmJlZm9yZSB7XHJcblx0Y29udGVudDogJ/Cfk4gnO1xyXG59IC8qICdcXDFmNGM4JyAqL1xyXG4uaWNvbi1jaGFydC1iYXI6YmVmb3JlIHtcclxuXHRjb250ZW50OiAn8J+Tiic7XHJcbn0gLyogJ1xcMWY0Y2EnICovXHJcbi5pY29uLWNsaXBib2FyZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfwn5OLJztcclxufSAvKiAnXFwxZjRjYicgKi9cclxuLmljb24tcGhvbmU6YmVmb3JlIHtcclxuXHRjb250ZW50OiAn8J+Tnic7XHJcbn0gLyogJ1xcMWY0ZGUnICovXHJcbi5pY29uLW1lZ2FwaG9uZTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfwn5OjJztcclxufSAvKiAnXFwxZjRlMycgKi9cclxuLmljb24tZG93bmxvYWQ6YmVmb3JlIHtcclxuXHRjb250ZW50OiAn8J+TpSc7XHJcbn0gLyogJ1xcMWY0ZTUnICovXHJcbi5pY29uLW1vYmlsZTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfwn5OxJztcclxufSAvKiAnXFwxZjRmMScgKi9cclxuLmljb24tbW9iaWxlLTI6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnXFxlODA0JztcclxufSAvKiAn7qCEJyAqL1xyXG4uaWNvbi1tb2JpbGUtMTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdcXGU4MDMnO1xyXG59IC8qICfuoIMnICovXHJcbi5pY29uLWNhbWVyYTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfwn5O3JztcclxufSAvKiAnXFwxZjRmNycgKi9cclxuLmljb24tbGluazpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfwn5SXJztcclxufSAvKiAnXFwxZjUxNycgKi9cclxuLmljb24tY2hhcnQtYXJlYTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfwn5S+JztcclxufSAvKiAnXFwxZjUzZScgKi9cclxuLmljb24tcm9ja2V0OmJlZm9yZSB7XHJcblx0Y29udGVudDogJ/CfmoAnO1xyXG59IC8qICdcXDFmNjgwJyAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * LEGEND - Free Responsive One Page Template\r\n *\r\n * Copyright 2013\r\n * Created by: Inbetwin Network\r\n * URL: http://inbetw.in\r\n * Designed and built based on Twitter Bootstrap. */\r\n\r\n/*\r\n===========================\r\nCONTENTS:\r\n\r\n01 Sensible defaults\r\n02 Typography\r\n03 Non-semantic\r\n04 Navbar\r\n05 Single-Page Sections\r\n06 Footer\r\n07 Bootstrap Carousel\r\n08 Buttons\r\n09 Media queries \r\n===========================\r\n*/\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n01 Sensible defaults ----------------------------------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\ndiv, article, section, header, footer, nav, li {\r\n\tposition:relative;\r\n}\r\n\r\n.group:after {\r\n\tdisplay:block;\r\n\theight:0;\r\n\tclear:both;\r\n\tcontent:\".\";\r\n\tvisibility:hidden; /* For clearing */\r\n}\r\n\r\nbody {\r\n\tbackground:#f0f0f0;\r\n\tcolor: #312A1E;\r\n\tfont-size: 100%;\r\n\tfont-family: 'Quattrocento', serif;\r\n}\r\n\r\n::-moz-selection {\r\nbackground:#f0bf00;\r\ncolor:#333;\r\n}\r\n\r\n::selection {\r\nbackground:#f0bf00;\r\ncolor:#333;\r\n}\r\n\r\n/*---------- FORMS ----------*/\r\n\r\ninput[type=text], input[type=submit], textarea {\r\n\twidth: 100%;\r\n\tpadding: 0.5em;\r\n\tfont-size: 1em;\r\n\tmargin-bottom: 1.5em;\r\n\tbox-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n}\r\n\r\ninput, button, select, textarea {\r\n\tfont-family: 'Quattrocento', serif;\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n02 Typography -----------------------------------------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n/*\r\n\r\n14 / 16\t= \t\t0.875em \t\t(14px equivalent)\r\n16 / 16\t= \t\t1em \t\t\t(16px equivalent)\r\n18 / 16 = \t\t1.125em \t\t(18px equivalent)\r\n21 / 16 = \t\t1.3125em \t\t(21px equivalent)\r\n24 / 16 = \t\t1.5em \t\t\t(24px equivalent)\r\n30 / 16 = \t\t1.875em \t\t(30px equivalent)\r\n\r\n*/\r\n\r\np {\r\n\tfont-size: 1em; /* 16px */\r\n\tline-height: 1.5; /* 24px */\r\n\tmargin: 0 0 1.5em 0;\r\n}\r\n\r\nul, ol {\r\n\tfont-size: 1em; /* 16px */\r\n\tline-height: 1.5; /* 24px */\r\n\tmargin: 0 0 1.5em 0;\r\n}\r\n\r\nbody, input, textarea {\r\n}\r\n\r\na:link, a:visited {\r\n\tcolor: #F1505A;\r\n}\r\n\r\na:hover, a:active {\r\n\tcolor: #F1505A;\r\n\ttext-decoration: underline;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n\tfont-weight: normal; /* reset default browser weight for our webfonts */\r\n\tfont-family: 'Patua One', cursive;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 1.5em; /* 24px */\r\n\tline-height: 1; /* 24px */\r\n\tmargin-top: 1.42em;\r\n\tmargin-bottom: 0em;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.3125em; /* 21px */\r\n\tline-height: 1.1429; /* 24px */\r\n\tmargin-top: 1.1429em;\r\n\tmargin-bottom: 0em;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 1.125em; /* 18px */\r\n\tline-height: 1.3333; /* 24px */\r\n\tmargin-top: 1.3333em;\r\n\tmargin-bottom: 0em;\r\n}\r\n\r\nh4 {\r\n\tfont-size: 1em; /* 16px */\r\n\tline-height: 1.5; /* 24px */\r\n\tmargin-top: 1.5em;\r\n\tmargin-bottom: 0em;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 0.875em; /* 14px */\r\n\tline-height: 1.7143; /* 24px */\r\n\tmargin-top: 1.7143em;\r\n\tmargin-bottom: 0em;\r\n}\r\n\r\nstrong {\r\n\tfont-weight:normal;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nsmall {\r\n\tfont-size: 0.75em; /* 12px */\r\n\tline-height: 2; /* 24px */\r\n\tmargin-top: 2em;\r\n\tmargin-bottom: 0em;\r\n}\r\n\r\nem {\r\n\tfont-style: normal;\r\n\tfont-family: 'Open Sans';\r\n}\r\n\r\n.muted {\r\n\tcolor: #A5A5A2;\r\n\tfont-family: 'Quattrocento', serif;\r\n}\r\n\r\n.impressed {\r\n\ttext-shadow:\r\n -1px -1px 0 rgba(0, 0, 0, 0.5), /* shadow */  1px 1px 0 rgba(255, 255, 255, 0.9); /* highlight */\r\n}\r\n\r\n.more-link {\r\n\tfont-size: .875em; /* 14px */\r\n\tmargin-top: 1.5em;\r\n\tfont-family: 'Patua One', cursive;\r\n}\r\n\r\n.more-link:link, .more-link:visited {\r\n\tcolor: #f0bf00;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n03 Non-semantic ------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n/* New Image Replacement Hack */\r\n\r\n.hide-text {\r\n\ttext-indent: 100%;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tfont-size: 1em;\r\n}\r\n\r\n.alignright {\r\n\ttext-align: right;\r\n}\r\n\r\n.alignleft {\r\n\ttext-align: left;\r\n}\r\n\r\n.aligncenter {\r\n\ttext-align: center;\r\n}\r\n\r\n.medium {\r\n\tfont-weight: normal;\r\n\tfont-family: 'Quattrocento', serif;\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n04 Navbar ------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n.navbar-fixed-top .container {\r\n/* Uncomment to make nav expand full width */\r\n /*\twidth: auto; */\r\n}\r\n\r\n.navbar .brand {\r\n\tmargin-left:0;\r\n\tpadding: 0;\r\n\tmargin-top: 1.05em;\r\n}\r\n\r\n.navbar .brand a {\r\n\tpadding: 0;\r\n\tcolor: #fff;\r\n\tfont-size: 1.75em;\r\n\tmargin-left: 0;\r\n\tfont-weight: normal;\r\n\tfont-family: 'Patua One', cursive;\r\n}\r\n\r\n.navbar .brand a:hover {\r\n\ttext-decoration: none;\r\n\tcolor:#f0bf00;\r\n transition: color .15s linear;\r\n -webkit-transition: color .15s linear;\r\n -moz-transition: color .15s linear;\r\n}\r\n\r\n.navbar .brand a:focus {\r\n\toutline: none;\r\n}\r\n\r\n.navbar-inner {\r\n\tmin-height: 4.75em;\r\n}\r\n\r\n.navbar-inverse .navbar-inner {\r\n\tbackground-repeat: repeat;\r\n\tbackground-color: #0b333f;\r\n\tborder-color: #f0bf00;\r\n}\r\n\r\n.navbar-wrapper {\r\n\toverflow:hidden;/* No fixed height, will break collapsible nav */\r\n}\r\n\r\n#menu-main {\r\n\tmargin-top: 1.125em;\r\n}\r\n\r\nul#menu-main > li > a {\r\n\tfont-family: 'Patua One', cursive;\r\n\tfont-weight: normal;\r\n\tfont-size: 1em;\r\n\tcolor: #fff;\r\n}\r\n\r\nul#menu-main > li > a:hover {\r\n\tbackground: #f0bf00;\r\n\tpadding: 9px 15px;\r\n\tborder-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n\t-moz-border-radius: 3px;\r\n}\r\n\r\n.navbar-inverse .brand, .navbar-inverse .nav > li > a {\r\n\ttext-shadow: none;\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n05 Single-Page Sections ------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n#headerwrap {\r\n\twidth: 100%;\r\n\tbackground: url('top-bg.jpg') #0b333f no-repeat center center fixed;\r\n\tbackground-size: cover;\r\n\t;\r\n\tmin-height: 600px;\r\n\tmargin-top: -60px;\r\n\tpadding-top:160px;\r\n\ttext-align:center;\r\n}\r\n\r\n#headerwrap h1 {\r\n\tcolor: #FFFFFF;\r\n\tfont-family: 'Patua One', cursive;\r\n\tfont-size: 4em;\r\n\tfont-weight: 400;\r\n\tmargin: 1em 0;\r\n}\r\n\r\n#headerwrap h2 {\r\n\tcolor: #FFFFFF;\r\n\tfont-family: 'Open Sans', sans serif;\r\n\tfont-size: 2em;\r\n\tfont-weight: normal;\r\n\tmargin: 0.5em 0;\r\n\ttext-shadow: 1px 1px 1px #333333;\r\n}\r\n\r\n#headerwrap h1 span {\r\n\tcolor:#f0bf00;\r\n}\r\n\r\n#headerwrap input[type=text] {\r\n\tbackground: rgba(227, 231, 228, 1);\r\n\tfont-family: 'Open Sans', sans serif;\r\n\tfont-size: 1.3125em;\r\n\tborder: 0;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tmargin-bottom:0 !important;\r\n}\r\n\r\n#headerwrap input[type=text]:focus {\r\n\tbackground: #43413e;\r\n\tcolor: #eff1ef;\r\n\ttransition: background 0.25 ease-in;\r\n\t-moz-transition: background 0.25 ease-in;\r\n\t-webkit-transition: background 0.25 ease-in;\r\n}\r\n\r\n#headerwrap input[type=text] {\r\n\theight: 2.9em;\r\n\twidth:50%;\r\n}\r\n\r\n#headerwrap input[type=submit] {\r\n\tfont-family: 'Patua One', cursive;\r\n\tcolor: #fff;\r\n\twidth: 185px;\r\n\theight: 2.9em;\r\n\tfont-size: 1.3125em; /* 21px */\r\n\tpadding:0.5em;\r\n\tletter-spacing: 0.05em;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n\ttext-transform: none;\r\n\tbackground: #f0bf00 !important;\r\n\tborder-radius: 3px;\r\n\t-moz-border-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n}\r\n\r\n#headerwrap input[type=submit]:hover, #headerwrap input[type=submit]:active {\r\n\tbackground: #43413e !important;\r\n}\r\n\r\n/*========== Social Icons ==========*/\r\n\r\nul.icon {\r\n\tfont-size:54px;\r\n\tmargin:1em 0 0.5em 0;\r\n}\r\n\r\nul.icon li {\r\n\tdisplay:inline-block;\r\n\ttransition: all 0.3s linear;\r\n}\r\n\r\nul.icon li:hover {\r\n\topacity:0.7;\r\n}\r\n\r\nsection.single-page {\r\n\tpadding: 4.75em 0; /* 76px */\r\n}\r\n\r\nsection.single-page h1 {\r\n\ttext-align: center;\r\n\tfont-family:  'Patua One', cursive;\r\n\tmargin-bottom: 2em; /* 72px */\r\n\tfont-size: 2.25em; /* 36px */\r\n}\r\n\r\n#feature {\r\n\tbackground: url('yellow.png') repeat-x 0 0;\r\n\theight: 406px;\r\n\tz-index: 500;\r\n\tbox-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);\r\n\t-moz-box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);\r\n\t-webkit-box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#feature article {\r\n\ttext-align: center;\r\n\tmargin-top: 120px;\r\n\tmax-width: 1170px;\r\n}\r\n\r\n#feature-headline {\r\n\tfont-family: 'Patua One', cursive;\r\n\ttext-transform: uppercase;\r\n\tcolor: rgba(228, 229, 229, 1);\r\n\tmargin-bottom: 3%; /* 39px */\r\n\tmargin-top: -.25em;\r\n\theight: 109px;\r\n\tbackground-size: 100% auto;\r\n}\r\n\r\n#feature-headline span {\r\n\tfont-family: 'Patua One', cursive;\r\n\ttext-transform: lowercase;\r\n}\r\n\r\n#feature article p {\r\n\tfont-family: 'Patua One', cursive;\r\n\tfont-size: 40px;\r\n\tmargin-bottom: 0;\r\n\tline-height: 1.35;\r\n\tcolor: #fff;\r\n}\r\n\r\n/* Portfolio */\r\n\r\nsection#portfolio {\r\n\tpadding-bottom: 0;\r\n}\r\n\r\nsection#portfolio h1 {\r\n\tfont-size: 3em;\r\n\tmargin-bottom: 1em;\r\n\tmargin-top: 0.5em;\r\n}\r\n\r\nsection#portfolio hgroup h2 {\r\n\tmargin-top: 1em;\r\n\ttext-transform: capitalize;\r\n}\r\n\r\nsection#portfolio hgroup h3 {\r\n\tmargin-top:  .35em;\r\n\tfont-family: 'Patua One', cursive;\r\n}\r\n\r\nsection#portfolio .entry-content {\r\n\tmargin: 1em 0 2.5em;\r\n}\r\n\r\nsection#portfolio .align {\r\n\ttext-align:center;\r\n\tmargin-top:10px;\r\n\tfont-size:6em;\r\n}\r\n\r\n/* Portfolio Image Hover */\r\n\r\n.mask2 img {\r\n\tmargin: 0 auto;\r\n\tmax-width: 100%;\r\n\tdisplay: block;\r\n\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\r\n\tfilter: alpha(opacity=80);\r\n\topacity: 0.8;\r\n\tbox-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);\r\n\ttransition: all 0.3s ease-in-out;\r\n}\r\n\r\n.mask2 img:hover {\r\n\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=99)\";\r\n\tfilter: alpha(opacity=99);\r\n\topacity: 1;\r\n}\r\n\r\n/* Services */\r\n\r\nsection#services {\r\n\tpadding-bottom: 9.5em;\r\n}\r\n\r\n#services h1 {\r\n\tfont-size: 3em;\r\n\tmargin-bottom: 1em;\r\n\tmargin-top: 0.5em;\r\n}\r\n\r\nsection#services h2 {\r\n\tfont-size: 22px;\r\n\tmargin-bottom: 15px;\r\n\tmargin-top: 10px;\r\n\ttext-align:center;\r\n}\r\n\r\nsection#services p {\r\n\tmargin:10px;\r\n}\r\n\r\nsection#services .align {\r\n\ttext-align:center;\r\n\tmargin-top:10px;\r\n\tfont-size: 6em;\r\n}\r\n\r\nsection#services .align .sev_icon {\r\n\ttext-align:center;\r\n\tmargin:10px 0 20px 0;\r\n\tfont-size: 0.6em;\r\n\tcolor:#F0BF00;\r\n}\r\n\r\nsection#services .span3 {\r\n\tbackground:#e9e9e9;\r\n\tpadding: 20px 0;\r\n\ttransition: all 0.3s ease-in-out;\r\n}\r\n\r\nsection#services .span3:hover {\r\n\tbackground:#e3e3e3;\r\n\tbox-shadow: 1px 1px 6px #C1BAC1;\r\n}\r\n\r\n/* Testimonials */\r\n\r\nsection#testimonials {\r\n\theight:  647px;\r\n\tbackground: url('yellow_testimonial.png') repeat-x 0 0;\r\n\tpadding: 0;\r\n\tcolor: #e4e5e2;\r\n\tz-index: 500;\r\n\tbox-shadow: 0 0 16px rgba(0, 0, 0, 0.3);\r\n\t-moz-box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);\r\n\t-webkit-box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nsection#testimonials .blockquote-wrapper {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\theight:  647px;\r\n}\r\n\r\nblockquote.mega {\r\n}\r\n\r\nblockquote.mega p {\r\n\tfont-size: 45px;\r\n\tline-height: 50px;\r\n\ttext-align: left;\r\n\tfont-family: 'Patua One', cursive;\r\n\tfont-weight:bold;\r\n\tcolor:#312A1E;\r\n}\r\n\r\nblockquote.mega .cite {\r\n\tfont-size: 22px;\r\n\ttext-align: left;\r\n\tfont-weight:300;\r\n}\r\n\r\n/* News */\r\n\r\nsection#news {\r\n\tbackground: url('grey-cardboard-bg.png') repeat 0 0;\r\n}\r\n\r\nsection#news .align {\r\n\tfont-size: 6em;\r\n\ttext-align: center;\r\n}\r\n\r\narticle.post {\r\n\tbackground: none repeat scroll 0 0 rgba(255, 255, 255, 0.7);\r\n\tborder-bottom-left-radius: 6px;\r\n\tborder-bottom-right-radius: 6px;\r\n\tbox-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\r\n\t-moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\r\n\t-webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\narticle .inside {\r\n\tmargin: 18px 24px 24px;\r\n\tpadding-top: 1em;\r\n\t/*background: url(\"../img/dot-row-2.png\") repeat-x scroll 0 0 transparent !important;*/\r\n}\r\n\r\n.post-date {\r\n\tcolor: #A5A5A2;\r\n\tfloat: right;\r\n\tfont-family: 'Open Sans';\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tline-height: 2;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n#news h1 {\r\n\tfont-size: 3em;\r\n\tmargin-bottom: 1em;\r\n\tmargin-top: 0.5em;\r\n}\r\n\r\n#news h2 {\r\n\tfont-size: 21px;\r\n\tmargin-top: 24px;\r\n\tmargin-bottom: 16px;\r\n\tcolor: #312A1E;\r\n\tclear: right;\r\n}\r\n\r\n/* Team and Contact */\r\n\r\nsection#team, section#contact {\r\n\tcolor: #e4e5e2;\r\n\tbackground:#312A1E;\r\n}\r\n\r\nsection#team .align, section#contact .align {\r\n\tfont-size: 6em;\r\n\ttext-align: center;\r\n}\r\n\r\n#team h1, #contact h1 {\r\n\tfont-size: 3em;\r\n\tmargin-bottom: 1em;\r\n\tmargin-top: 0.5em;\r\n}\r\n\r\n#contact, #team {\r\n\tpadding-top: 4.75em;\r\n}\r\n\r\n#team {\r\n\tpadding-bottom: 0;\r\n}\r\n\r\n#contact {\r\n\tpadding-bottom: 0;\r\n}\r\n\r\n/* team */\r\n\r\n#team h3 {\r\n\tfont-size: 26px;\r\n\tmargin-top: 24px;\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#team h3, .job-position {\r\n\ttext-align: center;\r\n}\r\n\r\n#team .featurette {\r\n\ttext-align: center;\r\n\tfont-size: 21px;\r\n}\r\n\r\n#team h2.featurette-heading {\r\n\tmargin-bottom: 24px;\r\n}\r\n\r\n.teamalign {\r\n\ttext-align:center\r\n}\r\n\r\n.team-thumb {\r\n\tmargin-top: 26px;\r\n\ttext-align:center;\r\n}\r\n\r\n.job-position {\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tmargin-bottom: .46155em;\r\n}\r\n\r\n/* Contact Form */\r\n\r\n#theme-form {\r\n\tposition: relative;\r\n\tz-index: 999;\r\n}\r\n\r\n#theme-form input[type=text], .cform-form textarea {\r\n\tbackground: rgba(227, 231, 228, 1);\r\n\tfont-family: 'Open Sans', sans serif;\r\n\tborder: 0;\r\n\ttext-align: left;\r\n\tvertical-align: middle;\r\n}\r\n\r\n#theme-form input[type=text]:focus, .cform-form textarea:focus {\r\n\tbackground: rgba(101, 106, 100, 1);\r\n\tcolor: #eff1ef;\r\n\tbox-shadow: none;\r\n\t-moz-box-shadow: none;\r\n\t-webkit-box-shadow: none;\r\n\ttransition: background 0.25 ease-in;\r\n\t-moz-transition: background 0.25 ease-in;\r\n\t-webkit-transition: background 0.25 ease-in;\r\n}\r\n\r\n#theme-form input[type=text] {\r\n\theight: 3.25em;\r\n}\r\n\r\n#theme-form input[type=submit] {\r\n\tfont-family: 'Patua One', cursive;\r\n\tcolor: #fff;\r\n\twidth: 185px;\r\n\theight: 60px;\r\n\ttext-shadow: none;\r\n\tfont-size: 1.3125em; /* 21px */\r\n\tpadding:0.5em;\r\n\tletter-spacing: 0.05em;\r\n\tmargin: 0 0 20px 0;\r\n\tdisplay: block;\r\n\tborder: 0;\r\n\ttext-transform: none;\r\n\tbackground: #f0bf00 !important;\r\n\tborder-radius: 3px;\r\n\t-moz-border-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n\tbox-shadow: none;\r\n\t-moz-box-shadow: none;\r\n\t-webkit-box-shadow: none;\r\n}\r\n\r\n#theme-form input[type=submit]:hover, #theme-form input[type=submit]:active {\r\n\tbackground: #43413e !important;\r\n}\r\n\r\n#theme-form textarea {\r\n\tpadding-top: 1em;\r\n}\r\n\r\ndiv.cform-response-output {\r\n\tmax-width: 60%;\r\n\ttext-align: center;\r\n\tmargin-left: 40% !important;\r\n\tmargin-top: 0.5em !important;\r\n\tpadding: 0.5em !important;\r\n\tborder-radius: 4px;\r\n\t-moz-border-radius: 4px;\r\n\t-webkit-border-radius: 4px;\r\n}\r\n\r\n.cform-not-valid-tip {\r\n\tcolor: #888;\r\n\tborder: 1px dotted #ad3729 !important;\r\n\twidth: 100% !important;\r\n\tleft: 0 !important;\r\n\tpadding: 0.5em !important;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tbox-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\t-moz-border-radius: 4px;\r\n\t-webkit-border-radius: 4px;\r\n}\r\n\r\n/* Featurettes */\r\n\r\nhr.featurette-divider {\r\n\tmargin: 3em 0;\r\n\tborder-width: 0;\r\n\theight: 9px;\r\n\t/*background: url(\"../img/dot-row-3-lt.png\") repeat-x;*/\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n06 Footer ------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n#map-wrapper {\r\n\tmargin-top: 20px;\r\n}\r\n\r\nfooter {\r\n\ttext-align: center;\r\n\tcolor: #1a1a1a;\r\n\tfont-weight: bold;\r\n}\r\n\r\nfooter p {\r\n\tmargin-top: -130px;\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n07 Bootstrap Carousel ------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n.carousel-caption {\r\n\tbackground-color: transparent;\r\n\tposition: static;\r\n\tmax-width: 550px;\r\n\tpadding: 0 20px;\r\n\tmargin-top: 200px;\r\n\tposition:absolute;\r\n}\r\n\r\n.carousel-caption h1,  .carousel-caption .lead {\r\n\tmargin: 0;\r\n\tline-height: 1.25;\r\n\tcolor: #fff;\r\n\ttext-shadow: 0 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.carousel-caption .btn {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.carousel-control {\r\n\theight: 50px;\r\n\ttop: 46%;\r\n\tmargin-top: 0;\r\n\tfont-size: 6.5em;\r\n\ttext-shadow: 0 1px 1px rgba(0, 0, 0, .4);\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\topacity: 0.4;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.carousel-control:link, .carousel-control:visited {\r\n\tcolor: #262626;\r\n}\r\n\r\n/* Banner Carousel  */\r\n\r\n#banner.carousel {\r\n\tmargin-top: 4.75em;\r\n\tmargin-bottom: 0;\r\n\tmargin-top: 0;\r\n\tmax-height: 642px;\r\n}\r\n\r\n.banner-caption {\r\n\t/*\twidth: 18%; */\r\n    \tposition: absolute;\r\n\tleft: 20%;\r\n\ttop: 10%;\r\n\tcolor: #007ac3;\r\n}\r\n\r\n#intro-caption {\r\n\tmargin-top:150px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\ttext-align: center;\r\n\tfont-size: 80px;\r\n\tline-height: 90px;\r\n\tcolor:#fff;\r\n\tfont-weight:bold;\r\n\ttext-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n#intro-caption span {\r\n\tfont-family:'Open Sans', sans-serif;\r\n\tfont-size: 0.65em;\r\n}\r\n\r\n#banner.carousel .item {\r\n}\r\n\r\n#banner.carousel img {\r\n}\r\n\r\n#banner.carousel .carousel-control {\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n08 Buttons ------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n.btn {\r\n\tfont-family: 'Patua One', cursive;\r\n\tcolor: #fff;\r\n\twidth: 185px;\r\n\theight: 20px;\r\n\ttext-shadow: none;\r\n\tfont-size: 1.3125em; /* 21px */\r\n\tpadding: 1em 0.5em;\r\n\tletter-spacing: 0.05em;\r\n\tmargin: 4.5em auto 0;\r\n\tdisplay: block;\r\n\tborder: 0;\r\n\ttext-transform: none;\r\n\tbackground: #f0bf00 !important;\r\n\tborder-radius: 3px;\r\n\t-moz-border-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n\tbox-shadow: none;\r\n\t-moz-box-shadow: none;\r\n\t-webkit-box-shadow: none;\r\n}\r\n\r\n.btn:link, .btn:visited {\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn:hover {\r\n\tbackground: #312A1E !important;\r\n}\r\n\r\n.navbar-inverse .btn-navbar {\r\n\twidth: auto;\r\n\theight: auto;\r\n}\r\n\r\n/* ---------------------------------------------------------------------------------------------------------- \r\n09 Media queries --------------------------------------------------------------------------------------------\r\n---------------------------------------------------------------------------------------------------------- */\r\n\r\n/* RESPONSIVE \r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 1186px) {\r\n .banner-caption {\r\n\t    \t/*\twidth: 18%; */\r\n\t    \tposition: absolute;\r\n left: 20%;\r\n top: 6%;\r\n color: #007ac3;\r\n}\r\n #intro-caption {\r\n font-family: 'Open Sans', sans-serif;\r\n text-align: center;\r\n font-size: 60px;\r\n line-height: 70px;\r\n}\r\n .banner-caption p {\r\n font-size: 1em;\r\n}\r\n}\r\n\r\n@media (max-width: 979px) {\r\n .navbar-fixed-top {\r\n margin-bottom: 0;\r\n}\r\n .navbar .container {\r\n width: 100%;\r\n}\r\n .navbar .brand {\r\n margin-top: 0;\r\n}\r\n .navbar .btn-navbar {\r\n margin-top: 0;\r\n}\r\n .navbar-fixed-top .navbar-inner {\r\n padding: 0px;\r\n}\r\n .featurette {\r\n height: auto;\r\n padding: 0;\r\n}\r\n .featurette-image.pull-left,  .featurette-image.pull-right {\r\n display: block;\r\n float: none;\r\n max-width: 40%;\r\n margin: 0 auto 20px;\r\n}\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 979px) {\r\n #headerwrap {\r\n padding-top:0;\r\n}\r\n}\r\n\r\n@media (max-width: 767px) {\r\n .container {\r\n padding-right: 5px;\r\n padding-left: 5px;\r\n}\r\n .navbar-fixed-top,  .navbar-fixed-bottom,  .navbar-static-top {\r\n margin-right: 0px;\r\n margin-left: 0px;\r\n margin-bottom:0px;\r\n padding-bottom:0px;\r\n}\r\n .navbar-inner {\r\n margin: 0;\r\n}\r\n .carousel {\r\n margin-left: -20px;\r\n margin-right: -20px;\r\n}\r\n .carousel .container {\r\n}\r\n .carousel-caption {\r\n width: 65%;\r\n padding: 0 70px;\r\n margin-top: 100px;\r\n}\r\n .carousel-caption h1 {\r\n font-size: 30px;\r\n}\r\n .carousel-caption .lead,  .carousel-caption .btn {\r\n font-size: 18px;\r\n}\r\n .featurette-heading {\r\n font-size: 30px;\r\n}\r\n .featurette .lead {\r\n font-size: 18px;\r\n line-height: 1.5;\r\n}\r\n}\r\n\r\n/* Smaller screens ----------- */\r\n\r\n@media (max-width : 480px) {\r\n #headerwrap {\r\n padding-top:0;\r\n}\r\n #headerwrap h1 {\r\n font-size:2em;\r\n}\r\n #headerwrap h2 {\r\n font-size:1em;\r\n}\r\n #headerwrap input[type=\"text\"] {\r\n width: 100%;\r\n}\r\n #headerwrap input[type=\"submit\"] {\r\n margin-top:1em;\r\n width: 135px;\r\n}\r\n .container {\r\n\r\n}\r\n #team .team-thumb {\r\n margin-right: auto;\r\n margin-left: auto;\r\n width: 150px;\r\n display: block;\r\n text-align:center\r\n}\r\n #feature article p {\r\n font-family: 'Open Sans', sans-serif;\r\n font-size: 26px; /* font-size: 26px; */\r\n margin-bottom: 0;\r\n line-height: 30px;\r\n color: #fff;\r\n}\r\n}\r\n\r\n/* Smartphones (portrait and landscape) ----------- */\r\n\r\n@media only screen  and (min-device-width : 320px)  and (max-device-width : 480px) {\r\n #feature-headline {\r\n background: transparent;\r\n text-indent: 0;\r\n overflow: visible;\r\n margin-top: 1.5em;\r\n}\r\n #navbar-inner {\r\n margin:\t0;\r\n}\r\n #banner { /*display: none;*/\r\n}\r\n section.single-page {\r\n padding: 1em 0;\r\n}\r\n\t\t\r\n\t\t/* Feature */\r\n\t\t#feature-badge {\r\n/*\tdisplay: none; */\r\n\t\t}\r\n\t\t\r\n\t\t/* Portfolio & News */\r\n\t\t\r\n\t\t#news h1 {\r\n background: transparent;\r\n}\r\n #news h1 span {\r\n background: transparent;\r\n padding: 0;\r\n}\r\n #portfolio .container {\r\n top: 0 !important;\r\n}\r\n #feature article p {\r\n font-family: 'Open Sans', sans-serif;\r\n font-size: 26px; /* font-size: 26px; */\r\n margin-bottom: 0;\r\n line-height: 30px;\r\n color: #fff;\r\n}\r\n .img-news {\r\n width: 100%;\r\n}\r\n .img-news {\r\n margin-right: auto;\r\n margin-left: auto;\r\n display: block;\r\n}\r\n section#portfolio hgroup h2 {\r\n margin-top: 1.5em;\r\n}\r\n\t\r\n\t\t/* Services */\r\n\t\t\r\n\t\t#services h1 {\r\n background: transparent;\r\n}\r\n #services h1 span {\r\n background: transparent;\r\n padding: 0;\r\n}\r\n section#services h2 {\r\n margin-bottom: 0.25em;\r\n}\r\n section#services h2, section#services ul {\r\n text-align: center;\r\n}\r\n\t\t\r\n\r\n\t    /* Testimonials */\r\n\t    \r\n\t\tsection#testimonials { /*display: none;*/\r\n}\r\n\t\r\n\t\t/* team */\r\n\t\t\r\n\t\t#team .team-thumb {\r\n margin-right: auto;\r\n margin-left: auto;\r\n width: 150px;\r\n display: block;\r\n text-align:center\r\n}\r\n .job-position: {\r\n margin-bottom: 1.5em;\r\n}\r\n .navbar-fixed-top, .navbar-fixed-bottom, .navbar-static-top {\r\n margin-left: auto;\r\n margin-right: auto;\r\n}\r\n\t\t\r\n\t\t/* Contact Form */\r\n\r\n\t\t#theme-form {\r\n overflow: hidden;\r\n}\r\n #theme-form input[type=submit] {\r\n width: 100%;\r\n}\r\n}\r\n\r\n/* Smartphones (landscape) ----------- */\r\n\r\n@media only screen  and (min-width : 321px) {\r\n #feature-headline {\r\n font-size: 32px; /* 34px */\r\n}\r\n}\r\n\r\n/* Smartphones (portrait) ----------- */\r\n\r\n@media only screen  and (max-width : 320px) {\r\n #feature-headline {\r\n font-size: 1.1875em; /* 19px */\r\n}\r\n #feature article p {\r\n font-family: 'Open Sans', sans-serif;\r\n font-size: 26px; /* font-size: 26px; */\r\n margin-bottom: 0;\r\n line-height: 30px;\r\n color: #fff;\r\n}\r\n}\r\n\r\n/* iPads (portrait and landscape) ----------- */\r\n\r\n@media only screen  and (min-device-width : 768px)  and (max-device-width : 1024px) {\r\n .banner-caption p {\r\n font-size: 0.6em;\r\n}\r\n #intro-caption {\r\n font-size: 4em;\r\n}\r\n}\r\n\r\n/* iPads (landscape) ----------- */\r\n\r\n@media only screen  and (min-device-width : 768px)  and (max-device-width : 1024px)  and (orientation : landscape) {\r\n/* Styles */\r\n\t}\r\n\r\n/* iPads (portrait) ----------- */\r\n\r\n@media only screen  and (min-device-width : 768px)  and (max-device-width : 1024px)  and (orientation : portrait) {\r\n/* Styles */\r\n\t}\r\n\r\n/* Desktops and laptops ----------- */\r\n\r\n@media only screen  and (min-width : 1224px) {\r\n/* Styles */\r\n\t}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O21EQU1tRDs7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7O0NBY0M7O0FBRUQ7OzRHQUU0Rzs7QUFFNUc7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsUUFBUTtDQUNSLFVBQVU7Q0FDVixXQUFXO0NBQ1gsaUJBQWlCLEVBQUUsaUJBQWlCO0FBQ3JDOztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxlQUFlO0NBQ2Ysa0NBQWtDO0FBQ25DOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1Y7O0FBQ0EsOEJBQThCOztBQUU5QjtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLDhCQUE4QjtBQUMvQjs7QUFDQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFDQTs7NEdBRTRHOztBQUM1Rzs7Ozs7Ozs7O0NBU0M7O0FBSUQ7Q0FDQyxjQUFjLEVBQUUsU0FBUztDQUN6QixnQkFBZ0IsRUFBRSxTQUFTO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGNBQWMsRUFBRSxTQUFTO0NBQ3pCLGdCQUFnQixFQUFFLFNBQVM7Q0FDM0IsbUJBQW1CO0FBQ3BCOztBQUNBO0FBQ0E7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsMEJBQTBCO0FBQzNCOztBQUNBO0NBQ0MsbUJBQW1CLEVBQUUsa0RBQWtEO0NBQ3ZFLGlDQUFpQztBQUNsQzs7QUFDQTtDQUNDLGdCQUFnQixFQUFFLFNBQVM7Q0FDM0IsY0FBYyxFQUFFLFNBQVM7Q0FDekIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLG1CQUFtQixFQUFFLFNBQVM7Q0FDOUIsbUJBQW1CLEVBQUUs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QixpQkFBaUI7QUFDMUM7O0VBRUUsU0FBUzs7RUFFVDtDQUNELGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGNBQWM7Q0FDZDtBQUNEO0NBQ0M7Q0FDQSxvQkFBb0I7QUFDckI7Q0FDQztDQUNBLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0VBRUUsaUJBQWlCOztFQUVqQjtDQUNELGdCQUFnQjtBQUNqQjtDQUNDO0NBQ0EsV0FBVztBQUNaO0FBQ0E7O0FBRUMsd0NBQXdDOztBQUN4QztDQUNBO0NBQ0EsZUFBZSxFQUFFLFNBQVM7QUFDM0I7QUFDQTs7QUFFQyx1Q0FBdUM7O0FBQ3ZDO0NBQ0E7Q0FDQSxtQkFBbUIsRUFBRSxTQUFTO0FBQy9CO0NBQ0M7Q0FDQSxvQ0FBb0M7Q0FDcEMsZUFBZSxFQUFFLHFCQUFxQjtDQUN0QyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjtBQUNBOztBQUVDLCtDQUErQzs7QUFDL0M7Q0FDQTtDQUNBLGdCQUFnQjtBQUNqQjtDQUNDO0NBQ0EsY0FBYztBQUNmO0FBQ0E7O0FBRUMsa0NBQWtDOztBQUNsQztBQUNELFdBQVc7Q0FDVjs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0FBQ0QsV0FBVztDQUNWOztBQUVBLHFDQUFxQzs7QUFDckM7QUFDRCxXQUFXO0NBQ1YiLCJmaWxlIjoic3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIExFR0VORCAtIEZyZWUgUmVzcG9uc2l2ZSBPbmUgUGFnZSBUZW1wbGF0ZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxM1xyXG4gKiBDcmVhdGVkIGJ5OiBJbmJldHdpbiBOZXR3b3JrXHJcbiAqIFVSTDogaHR0cDovL2luYmV0dy5pblxyXG4gKiBEZXNpZ25lZCBhbmQgYnVpbHQgYmFzZWQgb24gVHdpdHRlciBCb290c3RyYXAuICovXHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQ09OVEVOVFM6XHJcblxyXG4wMSBTZW5zaWJsZSBkZWZhdWx0c1xyXG4wMiBUeXBvZ3JhcGh5XHJcbjAzIE5vbi1zZW1hbnRpY1xyXG4wNCBOYXZiYXJcclxuMDUgU2luZ2xlLVBhZ2UgU2VjdGlvbnNcclxuMDYgRm9vdGVyXHJcbjA3IEJvb3RzdHJhcCBDYXJvdXNlbFxyXG4wOCBCdXR0b25zXHJcbjA5IE1lZGlhIHF1ZXJpZXMgXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuMDEgU2Vuc2libGUgZGVmYXVsdHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5kaXYsIGFydGljbGUsIHNlY3Rpb24sIGhlYWRlciwgZm9vdGVyLCBuYXYsIGxpIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uZ3JvdXA6YWZ0ZXIge1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0aGVpZ2h0OjA7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRjb250ZW50OlwiLlwiO1xyXG5cdHZpc2liaWxpdHk6aGlkZGVuOyAvKiBGb3IgY2xlYXJpbmcgKi9cclxufVxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcblx0Y29sb3I6ICMzMTJBMUU7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvJywgc2VyaWY7XHJcbn1cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbmJhY2tncm91bmQ6I2YwYmYwMDtcclxuY29sb3I6IzMzMztcclxufVxyXG46OnNlbGVjdGlvbiB7XHJcbmJhY2tncm91bmQ6I2YwYmYwMDtcclxuY29sb3I6IzMzMztcclxufVxyXG4vKi0tLS0tLS0tLS0gRk9STVMgLS0tLS0tLS0tLSovXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIHRleHRhcmVhIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAwLjVlbTtcclxuXHRmb250LXNpemU6IDFlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaW5wdXQsIGJ1dHRvbiwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcblx0Zm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8nLCBzZXJpZjtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4wMiBUeXBvZ3JhcGh5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLypcclxuXHJcbjE0IC8gMTZcdD0gXHRcdDAuODc1ZW0gXHRcdCgxNHB4IGVxdWl2YWxlbnQpXHJcbjE2IC8gMTZcdD0gXHRcdDFlbSBcdFx0XHQoMTZweCBlcXVpdmFsZW50KVxyXG4xOCAvIDE2ID0gXHRcdDEuMTI1ZW0gXHRcdCgxOHB4IGVxdWl2YWxlbnQpXHJcbjIxIC8gMTYgPSBcdFx0MS4zMTI1ZW0gXHRcdCgyMXB4IGVxdWl2YWxlbnQpXHJcbjI0IC8gMTYgPSBcdFx0MS41ZW0gXHRcdFx0KDI0cHggZXF1aXZhbGVudClcclxuMzAgLyAxNiA9IFx0XHQxLjg3NWVtIFx0XHQoMzBweCBlcXVpdmFsZW50KVxyXG5cclxuKi9cclxuXHJcblxyXG5cclxucCB7XHJcblx0Zm9udC1zaXplOiAxZW07IC8qIDE2cHggKi9cclxuXHRsaW5lLWhlaWdodDogMS41OyAvKiAyNHB4ICovXHJcblx0bWFyZ2luOiAwIDAgMS41ZW0gMDtcclxufVxyXG51bCwgb2wge1xyXG5cdGZvbnQtc2l6ZTogMWVtOyAvKiAxNnB4ICovXHJcblx0bGluZS1oZWlnaHQ6IDEuNTsgLyogMjRweCAqL1xyXG5cdG1hcmdpbjogMCAwIDEuNWVtIDA7XHJcbn1cclxuYm9keSwgaW5wdXQsIHRleHRhcmVhIHtcclxufVxyXG5hOmxpbmssIGE6dmlzaXRlZCB7XHJcblx0Y29sb3I6ICNGMTUwNUE7XHJcbn1cclxuYTpob3ZlciwgYTphY3RpdmUge1xyXG5cdGNvbG9yOiAjRjE1MDVBO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7IC8qIHJlc2V0IGRlZmF1bHQgYnJvd3NlciB3ZWlnaHQgZm9yIG91ciB3ZWJmb250cyAqL1xyXG5cdGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcclxufVxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxLjVlbTsgLyogMjRweCAqL1xyXG5cdGxpbmUtaGVpZ2h0OiAxOyAvKiAyNHB4ICovXHJcblx0bWFyZ2luLXRvcDogMS40MmVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG5oMiB7XHJcblx0Zm9udC1zaXplOiAxLjMxMjVlbTsgLyogMjFweCAqL1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE0Mjk7IC8qIDI0cHggKi9cclxuXHRtYXJnaW4tdG9wOiAxLjE0MjllbTtcclxuXHRtYXJnaW4tYm90dG9tOiAwZW07XHJcbn1cclxuaDMge1xyXG5cdGZvbnQtc2l6ZTogMS4xMjVlbTsgLyogMThweCAqL1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjMzMzM7IC8qIDI0cHggKi9cclxuXHRtYXJnaW4tdG9wOiAxLjMzMzNlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAwZW07XHJcbn1cclxuaDQge1xyXG5cdGZvbnQtc2l6ZTogMWVtOyAvKiAxNnB4ICovXHJcblx0bGluZS1oZWlnaHQ6IDEuNTsgLyogMjRweCAqL1xyXG5cdG1hcmdpbi10b3A6IDEuNWVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG5oNSB7XHJcblx0Zm9udC1zaXplOiAwLjg3NWVtOyAvKiAxNHB4ICovXHJcblx0bGluZS1oZWlnaHQ6IDEuNzE0MzsgLyogMjRweCAqL1xyXG5cdG1hcmdpbi10b3A6IDEuNzE0M2VtO1xyXG5cdG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG5zdHJvbmcge1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMC43NWVtOyAvKiAxMnB4ICovXHJcblx0bGluZS1oZWlnaHQ6IDI7IC8qIDI0cHggKi9cclxuXHRtYXJnaW4tdG9wOiAyZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMGVtO1xyXG59XHJcbmVtIHtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG59XHJcbi5tdXRlZCB7XHJcblx0Y29sb3I6ICNBNUE1QTI7XHJcblx0Zm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8nLCBzZXJpZjtcclxufVxyXG4uaW1wcmVzc2VkIHtcclxuXHR0ZXh0LXNoYWRvdzpcclxuIC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgLyogc2hhZG93ICovICAxcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyAvKiBoaWdobGlnaHQgKi9cclxufVxyXG4ubW9yZS1saW5rIHtcclxuXHRmb250LXNpemU6IC44NzVlbTsgLyogMTRweCAqL1xyXG5cdG1hcmdpbi10b3A6IDEuNWVtO1xyXG5cdGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcclxufVxyXG4ubW9yZS1saW5rOmxpbmssIC5tb3JlLWxpbms6dmlzaXRlZCB7XHJcblx0Y29sb3I6ICNmMGJmMDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4wMyBOb24tc2VtYW50aWMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogTmV3IEltYWdlIFJlcGxhY2VtZW50IEhhY2sgKi9cclxuXHJcbi5oaWRlLXRleHQge1xyXG5cdHRleHQtaW5kZW50OiAxMDAlO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmb250LXNpemU6IDFlbTtcclxufVxyXG4uYWxpZ25yaWdodCB7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmFsaWdubGVmdCB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYWxpZ25jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVkaXVtIHtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvJywgc2VyaWY7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuMDQgTmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ubmF2YmFyLWZpeGVkLXRvcCAuY29udGFpbmVyIHtcclxuLyogVW5jb21tZW50IHRvIG1ha2UgbmF2IGV4cGFuZCBmdWxsIHdpZHRoICovXHJcbiAvKlx0d2lkdGg6IGF1dG87ICovXHJcbn1cclxuLm5hdmJhciAuYnJhbmQge1xyXG5cdG1hcmdpbi1sZWZ0OjA7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW4tdG9wOiAxLjA1ZW07XHJcbn1cclxuLm5hdmJhciAuYnJhbmQgYSB7XHJcblx0cGFkZGluZzogMDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXNpemU6IDEuNzVlbTtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcclxufVxyXG4ubmF2YmFyIC5icmFuZCBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6I2YwYmYwMDtcclxuIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgbGluZWFyO1xyXG4gLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuMTVzIGxpbmVhcjtcclxuIC1tb3otdHJhbnNpdGlvbjogY29sb3IgLjE1cyBsaW5lYXI7XHJcbn1cclxuLm5hdmJhciAuYnJhbmQgYTpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4ubmF2YmFyLWlubmVyIHtcclxuXHRtaW4taGVpZ2h0OiA0Ljc1ZW07XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItaW5uZXIge1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzBiMzMzZjtcclxuXHRib3JkZXItY29sb3I6ICNmMGJmMDA7XHJcbn1cclxuLm5hdmJhci13cmFwcGVyIHtcclxuXHRvdmVyZmxvdzpoaWRkZW47LyogTm8gZml4ZWQgaGVpZ2h0LCB3aWxsIGJyZWFrIGNvbGxhcHNpYmxlIG5hdiAqL1xyXG59XHJcbiNtZW51LW1haW4ge1xyXG5cdG1hcmdpbi10b3A6IDEuMTI1ZW07XHJcbn1cclxudWwjbWVudS1tYWluID4gbGkgPiBhIHtcclxuXHRmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXNpemU6IDFlbTtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG51bCNtZW51LW1haW4gPiBsaSA+IGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNmMGJmMDA7XHJcblx0cGFkZGluZzogOXB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5uYXZiYXItaW52ZXJzZSAuYnJhbmQsIC5uYXZiYXItaW52ZXJzZSAubmF2ID4gbGkgPiBhIHtcclxuXHR0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4wNSBTaW5nbGUtUGFnZSBTZWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4jaGVhZGVyd3JhcCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogdXJsKC4uL2ltZy90b3AtYmcuanBnKSAjMGIzMzNmIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG5cdC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHQtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0LW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdDtcclxuXHRtaW4taGVpZ2h0OiA2MDBweDtcclxuXHRtYXJnaW4tdG9wOiAtNjBweDtcclxuXHRwYWRkaW5nLXRvcDoxNjBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4jaGVhZGVyd3JhcCBoMSB7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG5cdGZvbnQtc2l6ZTogNGVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luOiAxZW0gMDtcclxufVxyXG4jaGVhZGVyd3JhcCBoMiB7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zIHNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luOiAwLjVlbSAwO1xyXG5cdHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMzMzMzMzO1xyXG59XHJcbiNoZWFkZXJ3cmFwIGgxIHNwYW4ge1xyXG5cdGNvbG9yOiNmMGJmMDA7XHJcbn1cclxuI2hlYWRlcndyYXAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyMjcsIDIzMSwgMjI4LCAxKTtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMgc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxLjMxMjVlbTtcclxuXHRib3JkZXI6IDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0bWFyZ2luLWJvdHRvbTowICFpbXBvcnRhbnQ7XHJcbn1cclxuI2hlYWRlcndyYXAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcblx0YmFja2dyb3VuZDogIzQzNDEzZTtcclxuXHRjb2xvcjogI2VmZjFlZjtcclxuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjUgZWFzZS1pbjtcclxuXHQtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNSBlYXNlLWluO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1IGVhc2UtaW47XHJcbn1cclxuI2hlYWRlcndyYXAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcblx0aGVpZ2h0OiAyLjllbTtcclxuXHR3aWR0aDo1MCU7XHJcbn1cclxuI2hlYWRlcndyYXAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuXHRmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0d2lkdGg6IDE4NXB4O1xyXG5cdGhlaWdodDogMi45ZW07XHJcblx0Zm9udC1zaXplOiAxLjMxMjVlbTsgLyogMjFweCAqL1xyXG5cdHBhZGRpbmc6MC41ZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuXHRtYXJnaW46IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdGJhY2tncm91bmQ6ICNmMGJmMDAgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuI2hlYWRlcndyYXAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCAjaGVhZGVyd3JhcCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kOiAjNDM0MTNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLyo9PT09PT09PT09IFNvY2lhbCBJY29ucyA9PT09PT09PT09Ki9cclxudWwuaWNvbiB7XHJcblx0Zm9udC1zaXplOjU0cHg7XHJcblx0bWFyZ2luOjFlbSAwIDAuNWVtIDA7XHJcbn1cclxudWwuaWNvbiBsaSB7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxufVxyXG51bC5pY29uIGxpOmhvdmVyIHtcclxuXHRvcGFjaXR5OjAuNztcclxufVxyXG5zZWN0aW9uLnNpbmdsZS1wYWdlIHtcclxuXHRwYWRkaW5nOiA0Ljc1ZW0gMDsgLyogNzZweCAqL1xyXG59XHJcbnNlY3Rpb24uc2luZ2xlLXBhZ2UgaDEge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG5cdG1hcmdpbi1ib3R0b206IDJlbTsgLyogNzJweCAqL1xyXG5cdGZvbnQtc2l6ZTogMi4yNWVtOyAvKiAzNnB4ICovXHJcbn1cclxuI2ZlYXR1cmUge1xyXG5cdGJhY2tncm91bmQ6IHVybChcIi4uL2ltZy95ZWxsb3cucG5nXCIpIHJlcGVhdC14IDAgMDtcclxuXHRoZWlnaHQ6IDQwNnB4O1xyXG5cdHotaW5kZXg6IDUwMDtcclxuXHRib3gtc2hhZG93OiAwIDVweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgNXB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuI2ZlYXR1cmUgYXJ0aWNsZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi10b3A6IDEyMHB4O1xyXG5cdG1heC13aWR0aDogMTE3MHB4O1xyXG59XHJcbiNmZWF0dXJlLWhlYWRsaW5lIHtcclxuXHRmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjb2xvcjogcmdiYSgyMjgsIDIyOSwgMjI5LCAxKTtcclxuXHRtYXJnaW4tYm90dG9tOiAzJTsgLyogMzlweCAqL1xyXG5cdG1hcmdpbi10b3A6IC0uMjVlbTtcclxuXHRoZWlnaHQ6IDEwOXB4O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG59XHJcbiNmZWF0dXJlLWhlYWRsaW5lIHNwYW4ge1xyXG5cdGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcbiNmZWF0dXJlIGFydGljbGUgcCB7XHJcblx0Zm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi8qIFBvcnRmb2xpbyAqL1xyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8ge1xyXG5cdHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbnNlY3Rpb24jcG9ydGZvbGlvIGgxIHtcclxuXHRmb250LXNpemU6IDNlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxZW07XHJcblx0bWFyZ2luLXRvcDogMC41ZW07XHJcbn1cclxuc2VjdGlvbiNwb3J0Zm9saW8gaGdyb3VwIGgyIHtcclxuXHRtYXJnaW4tdG9wOiAxZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuc2VjdGlvbiNwb3J0Zm9saW8gaGdyb3VwIGgzIHtcclxuXHRtYXJnaW4tdG9wOiAgLjM1ZW07XHJcblx0Zm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG59XHJcbnNlY3Rpb24jcG9ydGZvbGlvIC5lbnRyeS1jb250ZW50IHtcclxuXHRtYXJnaW46IDFlbSAwIDIuNWVtO1xyXG59XHJcbnNlY3Rpb24jcG9ydGZvbGlvIC5hbGlnbiB7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDoxMHB4O1xyXG5cdGZvbnQtc2l6ZTo2ZW07XHJcbn1cclxuLyogUG9ydGZvbGlvIEltYWdlIEhvdmVyICovXHJcbi5tYXNrMiBpbWcge1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHQtbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXCI7XHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxuXHRvcGFjaXR5OiAwLjg7XHJcblx0Ym94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tYXNrMiBpbWc6aG92ZXIge1xyXG5cdC1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT05OSlcIjtcclxuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTkpO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLyogU2VydmljZXMgKi9cclxuXHJcbnNlY3Rpb24jc2VydmljZXMge1xyXG5cdHBhZGRpbmctYm90dG9tOiA5LjVlbTtcclxufVxyXG4jc2VydmljZXMgaDEge1xyXG5cdGZvbnQtc2l6ZTogM2VtO1xyXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHRtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG5zZWN0aW9uI3NlcnZpY2VzIGgyIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbnNlY3Rpb24jc2VydmljZXMgcCB7XHJcblx0bWFyZ2luOjEwcHg7XHJcbn1cclxuc2VjdGlvbiNzZXJ2aWNlcyAuYWxpZ24ge1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdG1hcmdpbi10b3A6MTBweDtcclxuXHRmb250LXNpemU6IDZlbTtcclxufVxyXG5zZWN0aW9uI3NlcnZpY2VzIC5hbGlnbiAuc2V2X2ljb24ge1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdG1hcmdpbjoxMHB4IDAgMjBweCAwO1xyXG5cdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0Y29sb3I6I0YwQkYwMDtcclxufVxyXG5zZWN0aW9uI3NlcnZpY2VzIC5zcGFuMyB7XHJcblx0YmFja2dyb3VuZDojZTllOWU5O1xyXG5cdHBhZGRpbmc6IDIwcHggMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbnNlY3Rpb24jc2VydmljZXMgLnNwYW4zOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiNlM2UzZTM7XHJcblx0Ym94LXNoYWRvdzogMXB4IDFweCA2cHggI0MxQkFDMTtcclxufVxyXG4vKiBUZXN0aW1vbmlhbHMgKi9cclxuXHJcbnNlY3Rpb24jdGVzdGltb25pYWxzIHtcclxuXHRoZWlnaHQ6ICA2NDdweDtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWcveWVsbG93X3Rlc3RpbW9uaWFsLnBuZ1wiKSByZXBlYXQteCAwIDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRjb2xvcjogI2U0ZTVlMjtcclxuXHR6LWluZGV4OiA1MDA7XHJcblx0Ym94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbnNlY3Rpb24jdGVzdGltb25pYWxzIC5ibG9ja3F1b3RlLXdyYXBwZXIge1xyXG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRoZWlnaHQ6ICA2NDdweDtcclxufVxyXG5ibG9ja3F1b3RlLm1lZ2Ege1xyXG59XHJcbmJsb2NrcXVvdGUubWVnYSBwIHtcclxuXHRmb250LXNpemU6IDQ1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRjb2xvcjojMzEyQTFFO1xyXG59XHJcbmJsb2NrcXVvdGUubWVnYSAuY2l0ZSB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Zm9udC13ZWlnaHQ6MzAwO1xyXG59XHJcbi8qIE5ld3MgKi9cclxuc2VjdGlvbiNuZXdzIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWcvZ3JleS1jYXJkYm9hcmQtYmcucG5nXCIpIHJlcGVhdCAwIDA7XHJcbn1cclxuc2VjdGlvbiNuZXdzIC5hbGlnbiB7XHJcblx0Zm9udC1zaXplOiA2ZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmFydGljbGUucG9zdCB7XHJcblx0YmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbmFydGljbGUgLmluc2lkZSB7XHJcblx0bWFyZ2luOiAxOHB4IDI0cHggMjRweDtcclxuXHRwYWRkaW5nLXRvcDogMWVtO1xyXG5cdC8qYmFja2dyb3VuZDogdXJsKFwiLi4vaW1nL2RvdC1yb3ctMi5wbmdcIikgcmVwZWF0LXggc2Nyb2xsIDAgMCB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyovXHJcbn1cclxuLnBvc3QtZGF0ZSB7XHJcblx0Y29sb3I6ICNBNUE1QTI7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiNuZXdzIGgxIHtcclxuXHRmb250LXNpemU6IDNlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxZW07XHJcblx0bWFyZ2luLXRvcDogMC41ZW07XHJcbn1cclxuI25ld3MgaDIge1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0Y29sb3I6ICMzMTJBMUU7XHJcblx0Y2xlYXI6IHJpZ2h0O1xyXG59XHJcbi8qIFRlYW0gYW5kIENvbnRhY3QgKi9cclxuXHJcbnNlY3Rpb24jdGVhbSwgc2VjdGlvbiNjb250YWN0IHtcclxuXHRjb2xvcjogI2U0ZTVlMjtcclxuXHRiYWNrZ3JvdW5kOiMzMTJBMUU7XHJcbn1cclxuc2VjdGlvbiN0ZWFtIC5hbGlnbiwgc2VjdGlvbiNjb250YWN0IC5hbGlnbiB7XHJcblx0Zm9udC1zaXplOiA2ZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiN0ZWFtIGgxLCAjY29udGFjdCBoMSB7XHJcblx0Zm9udC1zaXplOiAzZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cdG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcbiNjb250YWN0LCAjdGVhbSB7XHJcblx0cGFkZGluZy10b3A6IDQuNzVlbTtcclxufVxyXG4jdGVhbSB7XHJcblx0cGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuI2NvbnRhY3Qge1xyXG5cdHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi8qIHRlYW0gKi9cclxuXHJcbiN0ZWFtIGgzIHtcclxuXHRmb250LXNpemU6IDI2cHg7XHJcblx0bWFyZ2luLXRvcDogMjRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuI3RlYW0gaDMsIC5qb2ItcG9zaXRpb24ge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jdGVhbSAuZmVhdHVyZXR0ZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4jdGVhbSBoMi5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG5cdG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuLnRlYW1hbGlnbiB7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG4udGVhbS10aHVtYiB7XHJcblx0bWFyZ2luLXRvcDogMjZweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uam9iLXBvc2l0aW9uIHtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblx0bWFyZ2luLWJvdHRvbTogLjQ2MTU1ZW07XHJcbn1cclxuLyogQ29udGFjdCBGb3JtICovXHJcblxyXG4jdGhlbWUtZm9ybSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDk5OTtcclxufVxyXG4jdGhlbWUtZm9ybSBpbnB1dFt0eXBlPXRleHRdLCAuY2Zvcm0tZm9ybSB0ZXh0YXJlYSB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyMjcsIDIzMSwgMjI4LCAxKTtcclxuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMgc2VyaWY7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4jdGhlbWUtZm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuY2Zvcm0tZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgxMDEsIDEwNiwgMTAwLCAxKTtcclxuXHRjb2xvcjogI2VmZjFlZjtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1IGVhc2UtaW47XHJcblx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjUgZWFzZS1pbjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNSBlYXNlLWluO1xyXG59XHJcbiN0aGVtZS1mb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xyXG5cdGhlaWdodDogMy4yNWVtO1xyXG59XHJcbiN0aGVtZS1mb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcblx0Zm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHdpZHRoOiAxODVweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0dGV4dC1zaGFkb3c6IG5vbmU7XHJcblx0Zm9udC1zaXplOiAxLjMxMjVlbTsgLyogMjFweCAqL1xyXG5cdHBhZGRpbmc6MC41ZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuXHRtYXJnaW46IDAgMCAyMHB4IDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdGJhY2tncm91bmQ6ICNmMGJmMDAgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHQtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiN0aGVtZS1mb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgI3RoZW1lLWZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZDogIzQzNDEzZSAhaW1wb3J0YW50O1xyXG59XHJcbiN0aGVtZS1mb3JtIHRleHRhcmVhIHtcclxuXHRwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcbmRpdi5jZm9ybS1yZXNwb25zZS1vdXRwdXQge1xyXG5cdG1heC13aWR0aDogNjAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tbGVmdDogNDAlICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLXRvcDogMC41ZW0gIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uY2Zvcm0tbm90LXZhbGlkLXRpcCB7XHJcblx0Y29sb3I6ICM4ODg7XHJcblx0Ym9yZGVyOiAxcHggZG90dGVkICNhZDM3MjkgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdGxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi8qIEZlYXR1cmV0dGVzICovXHJcblxyXG5cclxuXHJcbmhyLmZlYXR1cmV0dGUtZGl2aWRlciB7XHJcblx0bWFyZ2luOiAzZW0gMDtcclxuXHRib3JkZXItd2lkdGg6IDA7XHJcblx0aGVpZ2h0OiA5cHg7XHJcblx0LypiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWcvZG90LXJvdy0zLWx0LnBuZ1wiKSByZXBlYXQteDsqL1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbjA2IEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI21hcC13cmFwcGVyIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmZvb3RlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjMWExYTFhO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmZvb3RlciBwIHtcclxuXHRtYXJnaW4tdG9wOiAtMTMwcHg7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuMDcgQm9vdHN0cmFwIENhcm91c2VsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICBcclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdG1heC13aWR0aDogNTUwcHg7XHJcblx0cGFkZGluZzogMCAyMHB4O1xyXG5cdG1hcmdpbi10b3A6IDIwMHB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIGgxLCAgLmNhcm91c2VsLWNhcHRpb24gLmxlYWQge1xyXG5cdG1hcmdpbjogMDtcclxuXHRsaW5lLWhlaWdodDogMS4yNTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIC5idG4ge1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wge1xyXG5cdGhlaWdodDogNTBweDtcclxuXHR0b3A6IDQ2JTtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdGZvbnQtc2l6ZTogNi41ZW07XHJcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC40KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdG9wYWNpdHk6IDAuNDtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sOmxpbmssIC5jYXJvdXNlbC1jb250cm9sOnZpc2l0ZWQge1xyXG5cdGNvbG9yOiAjMjYyNjI2O1xyXG59XHJcbi8qIEJhbm5lciBDYXJvdXNlbCAgKi8gICAgXHJcbiAgICAjYmFubmVyLmNhcm91c2VsIHtcclxuXHRtYXJnaW4tdG9wOiA0Ljc1ZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdG1heC1oZWlnaHQ6IDY0MnB4O1xyXG59XHJcbi5iYW5uZXItY2FwdGlvbiB7XHJcblx0LypcdHdpZHRoOiAxOCU7ICovXHJcbiAgICBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAyMCU7XHJcblx0dG9wOiAxMCU7XHJcblx0Y29sb3I6ICMwMDdhYzM7XHJcbn1cclxuI2ludHJvLWNhcHRpb24ge1xyXG5cdG1hcmdpbi10b3A6MTUwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDgwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDkwcHg7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xyXG59XHJcbiNpbnRyby1jYXB0aW9uIHNwYW4ge1xyXG5cdGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMC42NWVtO1xyXG59XHJcbiNiYW5uZXIuY2Fyb3VzZWwgLml0ZW0ge1xyXG59XHJcbiNiYW5uZXIuY2Fyb3VzZWwgaW1nIHtcclxufVxyXG4jYmFubmVyLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sIHtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4wOCBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovICAgIFxyXG4uYnRuIHtcclxuXHRmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0d2lkdGg6IDE4NXB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHR0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHRmb250LXNpemU6IDEuMzEyNWVtOyAvKiAyMXB4ICovXHJcblx0cGFkZGluZzogMWVtIDAuNWVtO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcblx0bWFyZ2luOiA0LjVlbSBhdXRvIDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdGJhY2tncm91bmQ6ICNmMGJmMDAgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHQtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idG46bGluaywgLmJ0bjp2aXNpdGVkIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMzEyQTFFICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5idG4tbmF2YmFyIHtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbjA5IE1lZGlhIHF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbi8qIFJFU1BPTlNJVkUgXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExODZweCkge1xyXG4gLmJhbm5lci1jYXB0aW9uIHtcclxuXHQgICAgXHQvKlx0d2lkdGg6IDE4JTsgKi9cclxuXHQgICAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiBsZWZ0OiAyMCU7XHJcbiB0b3A6IDYlO1xyXG4gY29sb3I6ICMwMDdhYzM7XHJcbn1cclxuICNpbnRyby1jYXB0aW9uIHtcclxuIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGZvbnQtc2l6ZTogNjBweDtcclxuIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG59XHJcbiAuYmFubmVyLWNhcHRpb24gcCB7XHJcbiBmb250LXNpemU6IDFlbTtcclxufVxyXG59XHJcbiBAbWVkaWEgKG1heC13aWR0aDogOTc5cHgpIHtcclxuIC5uYXZiYXItZml4ZWQtdG9wIHtcclxuIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIC5uYXZiYXIgLmNvbnRhaW5lciB7XHJcbiB3aWR0aDogMTAwJTtcclxufVxyXG4gLm5hdmJhciAuYnJhbmQge1xyXG4gbWFyZ2luLXRvcDogMDtcclxufVxyXG4gLm5hdmJhciAuYnRuLW5hdmJhciB7XHJcbiBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbiAubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWlubmVyIHtcclxuIHBhZGRpbmc6IDBweDtcclxufVxyXG4gLmZlYXR1cmV0dGUge1xyXG4gaGVpZ2h0OiBhdXRvO1xyXG4gcGFkZGluZzogMDtcclxufVxyXG4gLmZlYXR1cmV0dGUtaW1hZ2UucHVsbC1sZWZ0LCAgLmZlYXR1cmV0dGUtaW1hZ2UucHVsbC1yaWdodCB7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIGZsb2F0OiBub25lO1xyXG4gbWF4LXdpZHRoOiA0MCU7XHJcbiBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG59XHJcbn1cclxuIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XHJcbiAjaGVhZGVyd3JhcCB7XHJcbiBwYWRkaW5nLXRvcDowO1xyXG59XHJcbn1cclxuIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gLmNvbnRhaW5lciB7XHJcbiBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4gLm5hdmJhci1maXhlZC10b3AsICAubmF2YmFyLWZpeGVkLWJvdHRvbSwgIC5uYXZiYXItc3RhdGljLXRvcCB7XHJcbiBtYXJnaW4tcmlnaHQ6IDBweDtcclxuIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiBtYXJnaW4tYm90dG9tOjBweDtcclxuIHBhZGRpbmctYm90dG9tOjBweDtcclxufVxyXG4gLm5hdmJhci1pbm5lciB7XHJcbiBtYXJnaW46IDA7XHJcbn1cclxuIC5jYXJvdXNlbCB7XHJcbiBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcbiAuY2Fyb3VzZWwgLmNvbnRhaW5lciB7XHJcbn1cclxuIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuIHdpZHRoOiA2NSU7XHJcbiBwYWRkaW5nOiAwIDcwcHg7XHJcbiBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4gLmNhcm91c2VsLWNhcHRpb24gaDEge1xyXG4gZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiAuY2Fyb3VzZWwtY2FwdGlvbiAubGVhZCwgIC5jYXJvdXNlbC1jYXB0aW9uIC5idG4ge1xyXG4gZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gLmZlYXR1cmV0dGUgLmxlYWQge1xyXG4gZm9udC1zaXplOiAxOHB4O1xyXG4gbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG59XHJcbiAgICBcclxuICAgIC8qIFNtYWxsZXIgc2NyZWVucyAtLS0tLS0tLS0tLSAqL1xyXG5cdEBtZWRpYSAobWF4LXdpZHRoIDogNDgwcHgpIHtcclxuICNoZWFkZXJ3cmFwIHtcclxuIHBhZGRpbmctdG9wOjA7XHJcbn1cclxuICNoZWFkZXJ3cmFwIGgxIHtcclxuIGZvbnQtc2l6ZToyZW07XHJcbn1cclxuICNoZWFkZXJ3cmFwIGgyIHtcclxuIGZvbnQtc2l6ZToxZW07XHJcbn1cclxuICNoZWFkZXJ3cmFwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAjaGVhZGVyd3JhcCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuIG1hcmdpbi10b3A6MWVtO1xyXG4gd2lkdGg6IDEzNXB4O1xyXG59XHJcbiAuY29udGFpbmVyIHtcclxuXHJcbn1cclxuICN0ZWFtIC50ZWFtLXRodW1iIHtcclxuIG1hcmdpbi1yaWdodDogYXV0bztcclxuIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gd2lkdGg6IDE1MHB4O1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbiB0ZXh0LWFsaWduOmNlbnRlclxyXG59XHJcbiAjZmVhdHVyZSBhcnRpY2xlIHAge1xyXG4gZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gZm9udC1zaXplOiAyNnB4OyAvKiBmb250LXNpemU6IDI2cHg7ICovXHJcbiBtYXJnaW4tYm90dG9tOiAwO1xyXG4gbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiBjb2xvcjogI2ZmZjtcclxufVxyXG59XHJcbiAgICBcclxuICAgIC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG4gI2ZlYXR1cmUtaGVhZGxpbmUge1xyXG4gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiB0ZXh0LWluZGVudDogMDtcclxuIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gbWFyZ2luLXRvcDogMS41ZW07XHJcbn1cclxuICNuYXZiYXItaW5uZXIge1xyXG4gbWFyZ2luOlx0MDtcclxufVxyXG4gI2Jhbm5lciB7IC8qZGlzcGxheTogbm9uZTsqL1xyXG59XHJcbiBzZWN0aW9uLnNpbmdsZS1wYWdlIHtcclxuIHBhZGRpbmc6IDFlbSAwO1xyXG59XHJcblx0XHRcclxuXHRcdC8qIEZlYXR1cmUgKi9cclxuXHRcdCNmZWF0dXJlLWJhZGdlIHtcclxuLypcdGRpc3BsYXk6IG5vbmU7ICovXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qIFBvcnRmb2xpbyAmIE5ld3MgKi9cclxuXHRcdFxyXG5cdFx0I25ld3MgaDEge1xyXG4gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuICNuZXdzIGgxIHNwYW4ge1xyXG4gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiBwYWRkaW5nOiAwO1xyXG59XHJcbiAjcG9ydGZvbGlvIC5jb250YWluZXIge1xyXG4gdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuICNmZWF0dXJlIGFydGljbGUgcCB7XHJcbiBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiBmb250LXNpemU6IDI2cHg7IC8qIGZvbnQtc2l6ZTogMjZweDsgKi9cclxuIG1hcmdpbi1ib3R0b206IDA7XHJcbiBsaW5lLWhlaWdodDogMzBweDtcclxuIGNvbG9yOiAjZmZmO1xyXG59XHJcbiAuaW1nLW5ld3Mge1xyXG4gd2lkdGg6IDEwMCU7XHJcbn1cclxuIC5pbWctbmV3cyB7XHJcbiBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiBtYXJnaW4tbGVmdDogYXV0bztcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiBzZWN0aW9uI3BvcnRmb2xpbyBoZ3JvdXAgaDIge1xyXG4gbWFyZ2luLXRvcDogMS41ZW07XHJcbn1cclxuXHRcclxuXHRcdC8qIFNlcnZpY2VzICovXHJcblx0XHRcclxuXHRcdCNzZXJ2aWNlcyBoMSB7XHJcbiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4gI3NlcnZpY2VzIGgxIHNwYW4ge1xyXG4gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiBwYWRkaW5nOiAwO1xyXG59XHJcbiBzZWN0aW9uI3NlcnZpY2VzIGgyIHtcclxuIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcclxufVxyXG4gc2VjdGlvbiNzZXJ2aWNlcyBoMiwgc2VjdGlvbiNzZXJ2aWNlcyB1bCB7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHRcdFxyXG5cclxuXHQgICAgLyogVGVzdGltb25pYWxzICovXHJcblx0ICAgIFxyXG5cdFx0c2VjdGlvbiN0ZXN0aW1vbmlhbHMgeyAvKmRpc3BsYXk6IG5vbmU7Ki9cclxufVxyXG5cdFxyXG5cdFx0LyogdGVhbSAqL1xyXG5cdFx0XHJcblx0XHQjdGVhbSAudGVhbS10aHVtYiB7XHJcbiBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiBtYXJnaW4tbGVmdDogYXV0bztcclxuIHdpZHRoOiAxNTBweDtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG4gdGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG4gLmpvYi1wb3NpdGlvbjoge1xyXG4gbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbn1cclxuIC5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLm5hdmJhci1zdGF0aWMtdG9wIHtcclxuIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblx0XHRcclxuXHRcdC8qIENvbnRhY3QgRm9ybSAqL1xyXG5cclxuXHRcdCN0aGVtZS1mb3JtIHtcclxuIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICN0aGVtZS1mb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiB3aWR0aDogMTAwJTtcclxufVxyXG59XHJcblxyXG5cdC8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDMyMXB4KSB7XHJcbiAjZmVhdHVyZS1oZWFkbGluZSB7XHJcbiBmb250LXNpemU6IDMycHg7IC8qIDM0cHggKi9cclxufVxyXG59XHJcblx0XHJcblx0LyogU21hcnRwaG9uZXMgKHBvcnRyYWl0KSAtLS0tLS0tLS0tLSAqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGggOiAzMjBweCkge1xyXG4gI2ZlYXR1cmUtaGVhZGxpbmUge1xyXG4gZm9udC1zaXplOiAxLjE4NzVlbTsgLyogMTlweCAqL1xyXG59XHJcbiAjZmVhdHVyZSBhcnRpY2xlIHAge1xyXG4gZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gZm9udC1zaXplOiAyNnB4OyAvKiBmb250LXNpemU6IDI2cHg7ICovXHJcbiBtYXJnaW4tYm90dG9tOiAwO1xyXG4gbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiBjb2xvcjogI2ZmZjtcclxufVxyXG59XHJcblx0XHJcblx0LyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkge1xyXG4gLmJhbm5lci1jYXB0aW9uIHAge1xyXG4gZm9udC1zaXplOiAwLjZlbTtcclxufVxyXG4gI2ludHJvLWNhcHRpb24ge1xyXG4gZm9udC1zaXplOiA0ZW07XHJcbn1cclxufVxyXG5cdFxyXG5cdC8qIGlQYWRzIChsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIHtcclxuLyogU3R5bGVzICovXHJcblx0fVxyXG5cdFxyXG5cdC8qIGlQYWRzIChwb3J0cmFpdCkgLS0tLS0tLS0tLS0gKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc2OHB4KSAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSAgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XHJcbi8qIFN0eWxlcyAqL1xyXG5cdH1cclxuXHRcclxuXHQvKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiAxMjI0cHgpIHtcclxuLyogU3R5bGVzICovXHJcblx0fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/assets/js/jquery.js":
/*!*********************************!*\
  !*** ./src/assets/js/jquery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

	// Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

	// Matches dashed string for camelizing
	rdashAlpha = /-([a-z]|[0-9])/ig,
	rmsPrefix = /^-ms-/,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return ( letter + "" ).toUpperCase();
	},

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,

	// The deferred used on DOM ready
	readyList,

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context && document.body ) {
			this.context = document;
			this[0] = document.body;
			this.selector = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = quickExpr.exec( selector );
			}

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = ( context ? context.ownerDocument || context : document );

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
						selector = ( ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment ).childNodes;
					}

					return jQuery.merge( this, selector );

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.7.1",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = this.constructor();

		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );

		} else {
			jQuery.merge( ret, elems );
		}

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// Add the callback
		readyList.add( fn );

		return this;
	},

	eq: function( i ) {
		i = +i;
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {
		// Either a released hold or an DOMready/load event and not yet ready
		if ( (wait === true && !--jQuery.readyWait) || (wait !== true && !jQuery.isReady) ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 1 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.fireWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger( "ready" ).off( "ready" );
			}
		}
	},

	bindReady: function() {
		if ( readyList ) {
			return;
		}

		readyList = jQuery.Callbacks( "once memory" );

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			return setTimeout( jQuery.ready, 1 );
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	// A crude way of determining if an object is a window
	isWindow: function( obj ) {
		return obj && typeof obj === "object" && "setInterval" in obj;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return ( new Function( "return " + data ) )();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction( object );

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return object;
	},

	// Use native String.trim function wherever possible
	trim: trim ?
		function( text ) {
			return text == null ?
				"" :
				trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			// The window, strings (and functions) also have 'length'
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			var type = jQuery.type( array );

			if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array, i ) {
		var len;

		if ( array ) {
			if ( indexOf ) {
				return indexOf.call( array, elem, i );
			}

			len = array.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in array && array[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length,
			j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key, ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		if ( typeof context === "string" ) {
			var tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		var args = slice.call( arguments, 2 ),
			proxy = function() {
				return fn.apply( context, args.concat( slice.call( arguments ) ) );
			};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

		return proxy;
	},

	// Mutifunctional method to get and set values to a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, key, value, exec, fn, pass ) {
		var length = elems.length;

		// Setting many attributes
		if ( typeof key === "object" ) {
			for ( var k in key ) {
				jQuery.access( elems, k, key[k], exec, fn, value );
			}
			return elems;
		}

		// Setting one attribute
		if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = !pass && exec && jQuery.isFunction(value);

			for ( var i = 0; i < length; i++ ) {
				fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
			}

			return elems;
		}

		// Getting an attribute
		return length ? fn( elems[0], key ) : undefined;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	},

	sub: function() {
		function jQuerySub( selector, context ) {
			return new jQuerySub.fn.init( selector, context );
		}
		jQuery.extend( true, jQuerySub, this );
		jQuerySub.superclass = this;
		jQuerySub.fn = jQuerySub.prototype = this();
		jQuerySub.fn.constructor = jQuerySub;
		jQuerySub.sub = this.sub;
		jQuerySub.fn.init = function init( selector, context ) {
			if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
				context = jQuerySub( context );
			}

			return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		};
		jQuerySub.fn.init.prototype = jQuerySub.fn;
		var rootjQuerySub = jQuerySub(document);
		return jQuerySub;
	},

	browser: {}
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

// IE doesn't match non-breaking spaces with \s
if ( rnotwhite.test( "\xA0" ) ) {
	trimLeft = /^[\s\xA0]+/;
	trimRight = /[\s\xA0]+$/;
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch(e) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

return jQuery;

})();


// String to Object flags format cache
var flagsCache = {};

// Convert String-formatted flags into Object-formatted ones and store in cache
function createFlags( flags ) {
	var object = flagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( flags ) {

	// Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags = flags ? ( flagsCache[ flags ] || createFlags( flags ) ) : {};

	var // Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = [],
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Add one or several callbacks to the list
		add = function( args ) {
			var i,
				length,
				elem,
				type,
				actual;
			for ( i = 0, length = args.length; i < length; i++ ) {
				elem = args[ i ];
				type = jQuery.type( elem );
				if ( type === "array" ) {
					// Inspect recursively
					add( elem );
				} else if ( type === "function" ) {
					// Add if not in unique mode and callback is not in
					if ( !flags.unique || !self.has( elem ) ) {
						list.push( elem );
					}
				}
			}
		},
		// Fire callbacks
		fire = function( context, args ) {
			args = args || [];
			memory = !flags.memory || [ context, args ];
			firing = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
					memory = true; // Mark as halted
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( !flags.once ) {
					if ( stack && stack.length ) {
						memory = stack.shift();
						self.fireWith( memory[ 0 ], memory[ 1 ] );
					}
				} else if ( memory === true ) {
					self.disable();
				} else {
					list = [];
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				return false;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!memory;
			}
		};

	return self;
};




var // Static reference to slice
	sliceDeferred = [].slice;

jQuery.extend({

	Deferred: function( func ) {
		var doneList = jQuery.Callbacks( "once memory" ),
			failList = jQuery.Callbacks( "once memory" ),
			progressList = jQuery.Callbacks( "memory" ),
			state = "pending",
			lists = {
				resolve: doneList,
				reject: failList,
				notify: progressList
			},
			promise = {
				done: doneList.add,
				fail: failList.add,
				progress: progressList.add,

				state: function() {
					return state;
				},

				// Deprecated
				isResolved: doneList.fired,
				isRejected: failList.fired,

				then: function( doneCallbacks, failCallbacks, progressCallbacks ) {
					deferred.done( doneCallbacks ).fail( failCallbacks ).progress( progressCallbacks );
					return this;
				},
				always: function() {
					deferred.done.apply( deferred, arguments ).fail.apply( deferred, arguments );
					return this;
				},
				pipe: function( fnDone, fnFail, fnProgress ) {
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( {
							done: [ fnDone, "resolve" ],
							fail: [ fnFail, "reject" ],
							progress: [ fnProgress, "notify" ]
						}, function( handler, data ) {
							var fn = data[ 0 ],
								action = data[ 1 ],
								returned;
							if ( jQuery.isFunction( fn ) ) {
								deferred[ handler ](function() {
									returned = fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise().then( newDefer.resolve, newDefer.reject, newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
									}
								});
							} else {
								deferred[ handler ]( newDefer[ action ] );
							}
						});
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					if ( obj == null ) {
						obj = promise;
					} else {
						for ( var key in promise ) {
							obj[ key ] = promise[ key ];
						}
					}
					return obj;
				}
			},
			deferred = promise.promise({}),
			key;

		for ( key in lists ) {
			deferred[ key ] = lists[ key ].fire;
			deferred[ key + "With" ] = lists[ key ].fireWith;
		}

		// Handle state
		deferred.done( function() {
			state = "resolved";
		}, failList.disable, progressList.lock ).fail( function() {
			state = "rejected";
		}, doneList.disable, progressList.lock );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( firstParam ) {
		var args = sliceDeferred.call( arguments, 0 ),
			i = 0,
			length = args.length,
			pValues = new Array( length ),
			count = length,
			pCount = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction( firstParam.promise ) ?
				firstParam :
				jQuery.Deferred(),
			promise = deferred.promise();
		function resolveFunc( i ) {
			return function( value ) {
				args[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				if ( !( --count ) ) {
					deferred.resolveWith( deferred, args );
				}
			};
		}
		function progressFunc( i ) {
			return function( value ) {
				pValues[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				deferred.notifyWith( promise, pValues );
			};
		}
		if ( length > 1 ) {
			for ( ; i < length; i++ ) {
				if ( args[ i ] && args[ i ].promise && jQuery.isFunction( args[ i ].promise ) ) {
					args[ i ].promise().then( resolveFunc(i), deferred.reject, progressFunc(i) );
				} else {
					--count;
				}
			}
			if ( !count ) {
				deferred.resolveWith( deferred, args );
			}
		} else if ( deferred !== firstParam ) {
			deferred.resolveWith( deferred, length ? [ firstParam ] : [] );
		}
		return promise;
	}
});




jQuery.support = (function() {

	var support,
		all,
		a,
		select,
		opt,
		input,
		marginDiv,
		fragment,
		tds,
		events,
		eventName,
		i,
		isSupported,
		div = document.createElement( "div" ),
		documentElement = document.documentElement;

	// Preliminary tests
	div.setAttribute("className", "t");
	div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

	all = div.getElementsByTagName( "*" );
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement( "select" );
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName( "input" )[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute("href") === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Tests for enctype support on a form(#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", function() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
		});
		div.cloneNode( true ).fireEvent( "onclick" );
	}

	// Check if a radio maintains its value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute("type", "radio");
	support.radioValue = input.value === "t";

	input.setAttribute("checked", "checked");
	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.lastChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	fragment.removeChild( input );
	fragment.appendChild( div );

	div.innerHTML = "";

	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. For more
	// info see bug #3333
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	if ( window.getComputedStyle ) {
		marginDiv = document.createElement( "div" );
		marginDiv.style.width = "0";
		marginDiv.style.marginRight = "0";
		div.style.width = "2px";
		div.appendChild( marginDiv );
		support.reliableMarginRight =
			( parseInt( ( window.getComputedStyle( marginDiv, null ) || { marginRight: 0 } ).marginRight, 10 ) || 0 ) === 0;
	}

	// Technique from Juriy Zaytsev
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for( i in {
			submit: 1,
			change: 1,
			focusin: 1
		}) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	fragment.removeChild( div );

	// Null elements to avoid leaks in IE
	fragment = select = opt = marginDiv = div = input = null;

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, outer, inner, table, td, offsetSupport,
			conMarginTop, ptlm, vb, style, html,
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		conMarginTop = 1;
		ptlm = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
		vb = "visibility:hidden;border:0;";
		style = "style='" + ptlm + "border:5px solid #000;padding:0;'";
		html = "<div " + style + "><div></div></div>" +
			"<table " + style + " cellpadding='0' cellspacing='0'>" +
			"<tr><td></td></tr></table>";

		container = document.createElement("div");
		container.style.cssText = vb + "width:0;height:0;position:static;top:0;margin-top:" + conMarginTop + "px";
		body.insertBefore( container, body.firstChild );

		// Construct the test element
		div = document.createElement("div");
		container.appendChild( div );

		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		// (only IE 8 fails this test)
		div.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName( "td" );
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Check if empty table cells still have offsetWidth/Height
		// (IE <= 8 fail this test)
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Figure out if the W3C box model works as expected
		div.innerHTML = "";
		div.style.width = div.style.paddingLeft = "1px";
		jQuery.boxModel = support.boxModel = div.offsetWidth === 2;

		if ( typeof div.style.zoom !== "undefined" ) {
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			// (IE < 8 does this)
			div.style.display = "inline";
			div.style.zoom = 1;
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 2 );

			// Check if elements with layout shrink-wrap their children
			// (IE 6 does this)
			div.style.display = "";
			div.innerHTML = "<div style='width:4px;'></div>";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 2 );
		}

		div.style.cssText = ptlm + vb;
		div.innerHTML = html;

		outer = div.firstChild;
		inner = outer.firstChild;
		td = outer.nextSibling.firstChild.firstChild;

		offsetSupport = {
			doesNotAddBorder: ( inner.offsetTop !== 5 ),
			doesAddBorderForTableAndCells: ( td.offsetTop === 5 )
		};

		inner.style.position = "fixed";
		inner.style.top = "20px";

		// safari subtracts parent border width here which is 5px
		offsetSupport.fixedPosition = ( inner.offsetTop === 20 || inner.offsetTop === 15 );
		inner.style.position = inner.style.top = "";

		outer.style.overflow = "hidden";
		outer.style.position = "relative";

		offsetSupport.subtractsBorderForOverflowNotVisible = ( inner.offsetTop === -5 );
		offsetSupport.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== conMarginTop );

		body.removeChild( container );
		div  = container = null;

		jQuery.extend( support, offsetSupport );
	});

	return support;
})();




var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([A-Z])/g;

jQuery.extend({
	cache: {},

	// Please use with caution
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var privateCache, thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey,
			isEvents = name === "events";

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!isEvents && !pvt && !cache[id].data)) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ internalKey ] = id = ++jQuery.uuid;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// Avoids exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		privateCache = thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Users should not attempt to inspect the internal events object using jQuery.data,
		// it is undocumented and subject to change. But does anyone listen? No.
		if ( isEvents && !thisCache[ name ] ) {
			return privateCache.events;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i, l,

			// Reference to internal data cache key
			internalKey = jQuery.expando,

			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

			// See jQuery.data for more information
			id = isNode ? elem[ internalKey ] : internalKey;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				}

				for ( i = 0, l = name.length; i < l; i++ ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject(cache[ id ]) ) {
				return;
			}
		}

		// Browsers that fail expando deletion also refuse to delete expandos on
		// the window, but it will allow it on all other JS objects; other browsers
		// don't care
		// Ensure that `cache` is not a window object #10080
		if ( jQuery.support.deleteExpando || !cache.setInterval ) {
			delete cache[ id ];
		} else {
			cache[ id ] = null;
		}

		// We destroyed the cache and need to eliminate the expando on the node to avoid
		// false lookups in the cache for entries that no longer exist
		if ( isNode ) {
			// IE does not allow us to delete expando properties from nodes,
			// nor does it have a removeAttribute function on Document nodes;
			// we must handle all of these cases
			if ( jQuery.support.deleteExpando ) {
				delete elem[ internalKey ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( internalKey );
			} else {
				elem[ internalKey ] = null;
			}
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		if ( elem.nodeName ) {
			var match = jQuery.noData[ elem.nodeName.toLowerCase() ];

			if ( match ) {
				return !(match === true || elem.getAttribute("classid") !== match);
			}
		}

		return true;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var parts, attr, name,
			data = null;

		if ( typeof key === "undefined" ) {
			if ( this.length ) {
				data = jQuery.data( this[0] );

				if ( this[0].nodeType === 1 && !jQuery._data( this[0], "parsedAttrs" ) ) {
					attr = this[0].attributes;
					for ( var i = 0, l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( this[0], name, data[ name ] );
						}
					}
					jQuery._data( this[0], "parsedAttrs", true );
				}
			}

			return data;

		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			// Try to fetch any internally stored data first
			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
				data = dataAttr( this[0], key, data );
			}

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;

		} else {
			return this.each(function() {
				var self = jQuery( this ),
					args = [ parts[0], value ];

				self.triggerHandler( "setData" + parts[1] + "!", args );
				jQuery.data( this, key, value );
				self.triggerHandler( "changeData" + parts[1] + "!", args );
			});
		}
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				jQuery.isNumeric( data ) ? parseFloat( data ) :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	for ( var name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}




function handleQueueMarkDefer( elem, type, src ) {
	var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery._data( elem, deferDataKey );
	if ( defer &&
		( src === "queue" || !jQuery._data(elem, queueDataKey) ) &&
		( src === "mark" || !jQuery._data(elem, markDataKey) ) ) {
		// Give room for hard-coded callbacks to fire first
		// and eventually mark/queue something else on the element
		setTimeout( function() {
			if ( !jQuery._data( elem, queueDataKey ) &&
				!jQuery._data( elem, markDataKey ) ) {
				jQuery.removeData( elem, deferDataKey, true );
				defer.fire();
			}
		}, 0 );
	}
}

jQuery.extend({

	_mark: function( elem, type ) {
		if ( elem ) {
			type = ( type || "fx" ) + "mark";
			jQuery._data( elem, type, (jQuery._data( elem, type ) || 0) + 1 );
		}
	},

	_unmark: function( force, elem, type ) {
		if ( force !== true ) {
			type = elem;
			elem = force;
			force = false;
		}
		if ( elem ) {
			type = type || "fx";
			var key = type + "mark",
				count = force ? 0 : ( (jQuery._data( elem, key ) || 1) - 1 );
			if ( count ) {
				jQuery._data( elem, key, count );
			} else {
				jQuery.removeData( elem, key, true );
				handleQueueMarkDefer( elem, type, "mark" );
			}
		}
	},

	queue: function( elem, type, data ) {
		var q;
		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			q = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !q || jQuery.isArray(data) ) {
					q = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					q.push( data );
				}
			}
			return q || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			fn = queue.shift(),
			hooks = {};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			jQuery._data( elem, type + ".run", hooks );
			fn.call( elem, function() {
				jQuery.dequeue( elem, type );
			}, hooks );
		}

		if ( !queue.length ) {
			jQuery.removeData( elem, type + "queue " + type + ".run", true );
			handleQueueMarkDefer( elem, type, "queue" );
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function() {
			var queue = jQuery.queue( this, type, data );

			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, object ) {
		if ( typeof type !== "string" ) {
			object = type;
			type = undefined;
		}
		type = type || "fx";
		var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
		function resolve() {
			if ( !( --count ) ) {
				defer.resolveWith( elements, [ elements ] );
			}
		}
		while( i-- ) {
			if (( tmp = jQuery.data( elements[ i ], deferDataKey, undefined, true ) ||
					( jQuery.data( elements[ i ], queueDataKey, undefined, true ) ||
						jQuery.data( elements[ i ], markDataKey, undefined, true ) ) &&
					jQuery.data( elements[ i ], deferDataKey, jQuery.Callbacks( "once memory" ), true ) )) {
				count++;
				tmp.add( resolve );
			}
		}
		resolve();
		return defer.promise();
	}
});




var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	nodeHook, boolHook, fixSpecified;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.attr );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.prop );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classNames, i, l, elem,
			setClass, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call(this, j, this.className) );
			});
		}

		if ( value && typeof value === "string" ) {
			classNames = value.split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className && classNames.length === 1 ) {
						elem.className = value;

					} else {
						setClass = " " + elem.className + " ";

						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
								setClass += classNames[ c ] + " ";
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, i, l, elem, className, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call(this, j, this.className) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			classNames = ( value || "" ).split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						className = (" " + elem.className + " ").replace( rclass, " " );
						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[ c ] + " ", " ");
						}
						elem.className = jQuery.trim( className );

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.nodeName.toLowerCase() ] || jQuery.valHooks[ elem.type ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var self = jQuery(this), val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.nodeName.toLowerCase() ] || jQuery.valHooks[ this.type ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, i, max, option,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				i = one ? index : 0;
				max = one ? index + 1 : options.length;
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},

	attr: function( elem, name, value, pass ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, "" + value );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var propName, attrNames, name, l,
			i = 0;

		if ( value && elem.nodeType === 1 ) {
			attrNames = value.toLowerCase().split( rspace );
			l = attrNames.length;

			for ( ; i < l; i++ ) {
				name = attrNames[ i ];

				if ( name ) {
					propName = jQuery.propFix[ name ] || name;

					// See #9699 for explanation of this approach (setting first, then removal)
					jQuery.attr( elem, name, "" );
					elem.removeAttribute( getSetAttribute ? name : propName );

					// Set corresponding property to false for boolean attributes
					if ( rboolean.test( name ) && propName in elem ) {
						elem[ propName ] = false;
					}
				}
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		// Use the value property for back compat
		// Use the nodeHook for button elements in IE6/7 (#1954)
		value: {
			get: function( elem, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.get( elem, name );
				}
				return name in elem ?
					elem.value :
					null;
			},
			set: function( elem, value, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.set( elem, value, name );
				}
				// Does not return so that setAttribute is also used
				elem.value = value;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Add the tabIndex propHook to attrHooks for back-compat (different case is intentional)
jQuery.attrHooks.tabindex = jQuery.propHooks.tabIndex;

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		// Fall back to attribute presence where some booleans are not supported
		var attrNode,
			property = jQuery.prop( elem, name );
		return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = true;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	fixSpecified = {
		name: true,
		id: true
	};

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			return ret && ( fixSpecified[ name ] ? ret.nodeValue !== "" : ret.specified ) ?
				ret.nodeValue :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				ret = document.createAttribute( name );
				elem.setAttributeNode( ret );
			}
			return ( ret.nodeValue = value + "" );
		}
	};

	// Apply the nodeHook to tabindex
	jQuery.attrHooks.tabindex.set = nodeHook.set;

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			if ( value === "" ) {
				value = "false";
			}
			nodeHook.set( elem, value, name );
		}
	};
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = "" + value );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});




var rformElems = /^(?:textarea|input|select)$/i,
	rtypenamespace = /^([^\.]*)?(?:\.(.+))?$/,
	rhoverHack = /\bhover(\.\S+)?\b/,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
	quickParse = function( selector ) {
		var quick = rquickIs.exec( selector );
		if ( quick ) {
			//   0  1    2   3
			// [ _, tag, id, class ]
			quick[1] = ( quick[1] || "" ).toLowerCase();
			quick[3] = quick[3] && new RegExp( "(?:^|\\s)" + quick[3] + "(?:\\s|$)" );
		}
		return quick;
	},
	quickIs = function( elem, m ) {
		var attrs = elem.attributes || {};
		return (
			(!m[1] || elem.nodeName.toLowerCase() === m[1]) &&
			(!m[2] || (attrs.id || {}).value === m[2]) &&
			(!m[3] || m[3].test( (attrs[ "class" ] || {}).value ))
		);
	},
	hoverHack = function( events ) {
		return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	add: function( elem, types, handler, data, selector ) {

		var elemData, eventHandle, events,
			t, tns, type, namespaces, handleObj,
			handleObjIn, quick, handlers, special;

		// Don't attach events to noData or text/comment nodes (allow plain objects tho)
		if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		events = elemData.events;
		if ( !events ) {
			elemData.events = events = {};
		}
		eventHandle = elemData.handle;
		if ( !eventHandle ) {
			elemData.handle = eventHandle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = jQuery.trim( hoverHack(types) ).split( " " );
		for ( t = 0; t < types.length; t++ ) {

			tns = rtypenamespace.exec( types[t] ) || [];
			type = tns[1];
			namespaces = ( tns[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: tns[1],
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				quick: quickParse( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			handlers = events[ type ];
			if ( !handlers ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var elemData = jQuery.hasData( elem ) && jQuery._data( elem ),
			t, tns, type, origType, namespaces, origCount,
			j, events, special, handle, eventType, handleObj;

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
		for ( t = 0; t < types.length; t++ ) {
			tns = rtypenamespace.exec( types[t] ) || [];
			type = origType = tns[1];
			namespaces = tns[2];

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector? special.delegateType : special.bindType ) || type;
			eventType = events[ type ] || [];
			origCount = eventType.length;
			namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;

			// Remove matching events
			for ( j = 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					 ( !handler || handler.guid === handleObj.guid ) &&
					 ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
					 ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					eventType.splice( j--, 1 );

					if ( handleObj.selector ) {
						eventType.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( eventType.length === 0 && origCount !== eventType.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			handle = elemData.handle;
			if ( handle ) {
				handle.elem = null;
			}

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery.removeData( elem, [ "events", "handle" ], true );
		}
	},

	// Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent: {
		"getData": true,
		"setData": true,
		"changeData": true
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		// Don't do events on text and comment nodes
		if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
			return;
		}

		// Event object or event type
		var type = event.type || event,
			namespaces = [],
			cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType;

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "!" ) >= 0 ) {
			// Exclusive events trigger only for the exact event (no namespaces)
			type = type.slice(0, -1);
			exclusive = true;
		}

		if ( type.indexOf( "." ) >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}

		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
			// No jQuery handlers for this event type, and it can't have inline handlers
			return;
		}

		// Caller can pass in an Event, Object, or just an event type string
		event = typeof event === "object" ?
			// jQuery.Event object
			event[ jQuery.expando ] ? event :
			// Object literal
			new jQuery.Event( type, event ) :
			// Just the event type (string)
			new jQuery.Event( type );

		event.type = type;
		event.isTrigger = true;
		event.exclusive = exclusive;
		event.namespace = namespaces.join( "." );
		event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
		ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

		// Handle a global trigger
		if ( !elem ) {

			// TODO: Stop taunting the data cache; remove global events and always attach to document
			cache = jQuery.cache;
			for ( i in cache ) {
				if ( cache[ i ].events && cache[ i ].events[ type ] ) {
					jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
				}
			}
			return;
		}

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data != null ? jQuery.makeArray( data ) : [];
		data.unshift( event );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		eventPath = [[ elem, special.bindType || type ]];
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
			old = null;
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push([ cur, bubbleType ]);
				old = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( old && old === elem.ownerDocument ) {
				eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
			}
		}

		// Fire handlers on the event path
		for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

			cur = eventPath[i][0];
			event.type = eventPath[i][1];

			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			// Note that this is a bare JS function and not a jQuery handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				// IE<9 dies on focus/blur to hidden element (#1486)
				if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					old = elem[ ontype ];

					if ( old ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( old ) {
						elem[ ontype ] = old;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event || window.event );

		var handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
			delegateCount = handlers.delegateCount,
			args = [].slice.call( arguments, 0 ),
			run_all = !event.exclusive && !event.namespace,
			handlerQueue = [],
			i, j, cur, jqcur, ret, selMatch, matched, matches, handleObj, sel, related;

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Determine handlers that should run if there are delegated events
		// Avoid disabled elements in IE (#6911) and non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && !event.target.disabled && !(event.button && event.type === "click") ) {

			// Pregenerate a single jQuery object for reuse with .is()
			jqcur = jQuery(this);
			jqcur.context = this.ownerDocument || this;

			for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {
				selMatch = {};
				matches = [];
				jqcur[0] = cur;
				for ( i = 0; i < delegateCount; i++ ) {
					handleObj = handlers[ i ];
					sel = handleObj.selector;

					if ( selMatch[ sel ] === undefined ) {
						selMatch[ sel ] = (
							handleObj.quick ? quickIs( cur, handleObj.quick ) : jqcur.is( sel )
						);
					}
					if ( selMatch[ sel ] ) {
						matches.push( handleObj );
					}
				}
				if ( matches.length ) {
					handlerQueue.push({ elem: cur, matches: matches });
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( handlers.length > delegateCount ) {
			handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
		}

		// Run delegates first; they may want to stop propagation beneath us
		for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
			matched = handlerQueue[ i ];
			event.currentTarget = matched.elem;

			for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
				handleObj = matched.matches[ j ];

				// Triggered event must either 1) be non-exclusive and have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

					event.data = handleObj.data;
					event.handleObj = handleObj;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						event.result = ret;
						if ( ret === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		return event.result;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop,
			originalEvent = event,
			fixHook = jQuery.event.fixHooks[ event.type ] || {},
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = jQuery.Event( originalEvent );

		for ( i = copy.length; i; ) {
			prop = copy[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Target should not be a text node (#504, Safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// For mouse/key events; add metaKey if it's not there (#3368, IE6/7/8)
		if ( event.metaKey === undefined ) {
			event.metaKey = event.ctrlKey;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: jQuery.bindReady
		},

		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},

		focus: {
			delegateType: "focusin"
		},
		blur: {
			delegateType: "focusout"
		},

		beforeunload: {
			setup: function( data, namespaces, eventHandle ) {
				// We only want to do this special case on windows
				if ( jQuery.isWindow( this ) ) {
					this.onbeforeunload = eventHandle;
				}
			},

			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunload === eventHandle ) {
					this.onbeforeunload = null;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		if ( elem.detachEvent ) {
			elem.detachEvent( "on" + type, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}

		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// otherwise set the returnValue property of the original event to false (IE)
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj,
				selector = handleObj.selector,
				ret;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !form._submit_attached ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						// If form was submitted by the user, bubble the event up the tree
						if ( this.parentNode && !event.isTrigger ) {
							jQuery.event.simulate( "submit", this.parentNode, event, true );
						}
					});
					form._submit_attached = true;
				}
			});
			// return undefined since we don't need an event listener
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
							jQuery.event.simulate( "change", this, event, true );
						}
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !elem._change_attached ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					elem._change_attached = true;
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on.call( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			var handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace? handleObj.type + "." + handleObj.namespace : handleObj.type,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( var type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	live: function( types, data, fn ) {
		jQuery( this.context ).on( types, this.selector, data, fn );
		return this;
	},
	die: function( types, fn ) {
		jQuery( this.context ).off( types, this.selector || "**", fn );
		return this;
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length == 1? this.off( selector, "**" ) : this.off( types, selector, fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			return jQuery.event.trigger( type, data, this[0], true );
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		if ( fn == null ) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};

	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}

	if ( rkeyEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
	}

	if ( rmouseEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
	}
});



/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	expando = "sizcache" + (Math.random() + '').replace('.', ''),
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rReturn = /\r\n/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;

	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];

			parts.push( m[1] );

			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context, seed );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}

				set = posProcess( selector, set, seed );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set, i, len, match, type, left;

	if ( !expr ) {
		return [];
	}

	for ( i = 0, len = Expr.order.length; i < len; i++ ) {
		type = Expr.order[i];

		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		type, found, item, filter, left,
		i, pass,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				filter = Expr.filter[ type ];
				left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							pass = not ^ found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Utility function for retreiving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
var getText = Sizzle.getText = function( elem ) {
    var i, node,
		nodeType = elem.nodeType,
		ret = "";

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 ) {
			// Use textContent || innerText for elements
			if ( typeof elem.textContent === 'string' ) {
				return elem.textContent;
			} else if ( typeof elem.innerText === 'string' ) {
				// Replace IE's carriage returns
				return elem.innerText.replace( rReturn, '' );
			} else {
				// Traverse it's children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
	} else {

		// If no nodeType, this is expected to be an array
		for ( i = 0; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			if ( node.nodeType !== 8 ) {
				ret += getText( node );
			}
		}
	}
	return ret;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );

			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}

			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},

	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},

		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
		},

		file: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
		},

		password: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
		},

		submit: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "submit" === elem.type;
		},

		image: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
		},

		reset: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "reset" === elem.type;
		},

		button: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && "button" === elem.type || name === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		},

		focus: function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var first, last,
				doneName, parent, cache,
				count, diff,
				type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					if ( type === "first" ) {
						return true;
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					return true;

				case "nth":
					first = match[2];
					last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}

					doneName = match[0];
					parent = elem.parentNode;

					if ( parent && (parent[ expando ] !== doneName || !elem.nodeIndex) ) {
						count = 0;

						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}

						parent[ expando ] = doneName;
					}

					diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || !!elem.nodeName && elem.nodeName.toLowerCase() === match;
		},

		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Sizzle.attr ?
					Sizzle.attr( elem, name ) :
					Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				!type && Sizzle.attr ?
				result != null :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}

	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;

		var cur = a.nextSibling;
		}

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}

		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );

				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );

					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}

				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );

					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}

						} else {
							return makeArray( [], extra );
						}
					}

					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}

			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );

		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try {
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem[ expando ] = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem[ expando ] = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context, seed ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet, seed );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
Sizzle.selectors.attrMap = {};
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})();


var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	// Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.POS,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var self = this,
			i, l;

		if ( typeof selector !== "string" ) {
			return jQuery( selector ).filter(function() {
				for ( i = 0, l = self.length; i < l; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			});
		}

		var ret = this.pushStack( "", "find", selector ),
			length, n, r;

		for ( i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( n = length; n < ret.length; n++ ) {
					for ( r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				POS.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var ret = [], i, l, cur = this[0];

		// Array (deprecated as of jQuery 1.7)
		if ( jQuery.isArray( selectors ) ) {
			var level = 1;

			while ( cur && cur.ownerDocument && cur !== context ) {
				for ( i = 0; i < selectors.length; i++ ) {

					if ( jQuery( cur ).is( selectors[ i ] ) ) {
						ret.push({ selector: selectors[ i ], elem: cur, level: level });
					}
				}

				cur = cur.parentNode;
				level++;
			}

			return ret;
		}

		// String
		var pos = POS.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( i = 0, l = this.length; i < l; i++ ) {
			cur = this[i];

			while ( cur ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;

				} else {
					cur = cur.parentNode;
					if ( !cur || !cur.ownerDocument || cur === context || cur.nodeType === 11 ) {
						break;
					}
				}
			}
		}

		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

		return this.pushStack( ret, "closest", selectors );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	andSelf: function() {
		return this.add( this.prevObject );
	}
});

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( elem.parentNode.firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, slice.call( arguments ).join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;

		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}

		return cur;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}




function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
	safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style)/i,
	rnocache = /<(?:script|object|embed|option|style)/i,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")", "i"),
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	},
	safeFragment = createSafeFragment( document );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE can't serialize <link> and <script> tags normally
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( text ) {
		if ( jQuery.isFunction(text) ) {
			return this.each(function(i) {
				var self = jQuery( this );

				self.text( text.call(this, i, self.text()) );
			});
		}

		if ( typeof text !== "object" && text !== undefined ) {
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		}

		return jQuery.text( this );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery.clean( arguments );
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},

	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery.clean(arguments) );
			return set;
		}
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}

				if ( elem.parentNode ) {
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		if ( value === undefined ) {
			return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

		// See if we can take a shortcut and just use innerHTML
		} else if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &&
			!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {

			value = value.replace(rxhtmlTag, "<$1></$2>");

			try {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					// Remove element nodes and prevent memory leaks
					if ( this[i].nodeType === 1 ) {
						jQuery.cleanData( this[i].getElementsByTagName("*") );
						this[i].innerHTML = value;
					}
				}

			// If using innerHTML throws an exception, use the fallback method
			} catch(e) {
				this.empty().append( value );
			}

		} else if ( jQuery.isFunction( value ) ) {
			this.each(function(i){
				var self = jQuery( this );

				self.html( value.call(this, i, self.html()) );
			});

		} else {
			this.empty().append( value );
		}

		return this;
	},

	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}

			if ( typeof value !== "string" ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling,
					parent = this.parentNode;

				jQuery( this ).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.length ?
				this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
				this;
		}
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {
		var results, first, fragment, parent,
			value = args[0],
			scripts = [];

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( !jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback, true );
			});
		}

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			parent = value && value.parentNode;

			// If we're in a fragment, just use that instead of building a new one
			if ( jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length ) {
				results = { fragment: parent };

			} else {
				results = jQuery.buildFragment( args, this, scripts );
			}

			fragment = results.fragment;

			if ( fragment.childNodes.length === 1 ) {
				first = fragment = fragment.firstChild;
			} else {
				first = fragment.firstChild;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				for ( var i = 0, l = this.length, lastIndex = l - 1; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						// Make sure that we do not leak memory by inadvertently discarding
						// the original fragment (which might have attached data) instead of
						// using it; in addition, use the original fragment object for the last
						// item instead of first because it can end up being emptied incorrectly
						// in certain situations (Bug #8070).
						// Fragments from the fragment cache must always be cloned and never used
						// in place.
						results.cacheable || ( l > 1 && i < lastIndex ) ?
							jQuery.clone( fragment, true, true ) :
							fragment
					);
				}
			}

			if ( scripts.length ) {
				jQuery.each( scripts, evalScript );
			}
		}

		return this;
	}
});

function root( elem, cur ) {
	return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type + ( events[ type ][ i ].namespace ? "." : "" ) + events[ type ][ i ].namespace, events[ type ][ i ], events[ type ][ i ].data );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function cloneFixAttributes( src, dest ) {
	var nodeName;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	// clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if ( dest.clearAttributes ) {
		dest.clearAttributes();
	}

	// mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if ( dest.mergeAttributes ) {
		dest.mergeAttributes( src );
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 fail to clone children inside object elements that use
	// the proprietary classid attribute value (rather than the type
	// attribute) to identify the type of content to display
	if ( nodeName === "object" ) {
		dest.outerHTML = src.outerHTML;

	} else if ( nodeName === "input" && (src.type === "checkbox" || src.type === "radio") ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set
		if ( src.checked ) {
			dest.defaultChecked = dest.checked = src.checked;
		}

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}

	// Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, nodes, scripts ) {
	var fragment, cacheable, cacheresults, doc,
	first = args[ 0 ];

	// nodes may contain either an explicit document object,
	// a jQuery collection or context object.
	// If nodes[0] contains a valid object to assign to doc
	if ( nodes && nodes[0] ) {
		doc = nodes[0].ownerDocument || nodes[0];
	}

	// Ensure that an attr object doesn't incorrectly stand in as a document object
	// Chrome and Firefox seem to allow this to occur and will throw exception
	// Fixes #8950
	if ( !doc.createDocumentFragment ) {
		doc = document;
	}

	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
	if ( args.length === 1 && typeof first === "string" && first.length < 512 && doc === document &&
		first.charAt(0) === "<" && !rnocache.test( first ) &&
		(jQuery.support.checkClone || !rchecked.test( first )) &&
		(jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

		cacheable = true;

		cacheresults = jQuery.fragments[ first ];
		if ( cacheresults && cacheresults !== 1 ) {
			fragment = cacheresults;
		}
	}

	if ( !fragment ) {
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}

	if ( cacheable ) {
		jQuery.fragments[ first ] = cacheresults ? fragment : 1;
	}

	return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [],
			insert = jQuery( selector ),
			parent = this.length === 1 && this[0].parentNode;

		if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
			insert[ original ]( this[0] );
			return this;

		} else {
			for ( var i = 0, l = insert.length; i < l; i++ ) {
				var elems = ( i > 0 ? this.clone(true) : this ).get();
				jQuery( insert[i] )[ original ]( elems );
				ret = ret.concat( elems );
			}

			return this.pushStack( ret, name, insert.selector );
		}
	};
});

function getAll( elem ) {
	if ( typeof elem.getElementsByTagName !== "undefined" ) {
		return elem.getElementsByTagName( "*" );

	} else if ( typeof elem.querySelectorAll !== "undefined" ) {
		return elem.querySelectorAll( "*" );

	} else {
		return [];
	}
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( elem.type === "checkbox" || elem.type === "radio" ) {
		elem.defaultChecked = elem.checked;
	}
}
// Finds all inputs and passes them to fixDefaultChecked
function findInputs( elem ) {
	var nodeName = ( elem.nodeName || "" ).toLowerCase();
	if ( nodeName === "input" ) {
		fixDefaultChecked( elem );
	// Skip scripts, get other children
	} else if ( nodeName !== "script" && typeof elem.getElementsByTagName !== "undefined" ) {
		jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
	}
}

// Derived From: http://www.iecss.com/shimprove/javascript/shimprove.1-0-1.js
function shimCloneNode( elem ) {
	var div = document.createElement( "div" );
	safeFragment.appendChild( div );

	div.innerHTML = elem.outerHTML;
	return div.firstChild;
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var srcElements,
			destElements,
			i,
			// IE<=8 does not properly clone detached, unknown element nodes
			clone = jQuery.support.html5Clone || !rnoshimcache.test( "<" + elem.nodeName ) ?
				elem.cloneNode( true ) :
				shimCloneNode( elem );

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
			// IE copies events bound via attachEvent when using cloneNode.
			// Calling detachEvent on the clone will also remove the events
			// from the original. In order to get around this, we use some
			// proprietary methods to clear the events. Thanks to MooTools
			// guys for this hotness.

			cloneFixAttributes( elem, clone );

			// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
			srcElements = getAll( elem );
			destElements = getAll( clone );

			// Weird iteration because IE will replace the length property
			// with an element if you are cloning the body and one of the
			// elements on the page has a name or id of "length"
			for ( i = 0; srcElements[i]; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					cloneFixAttributes( srcElements[i], destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			cloneCopyEvent( elem, clone );

			if ( deepDataAndEvents ) {
				srcElements = getAll( elem );
				destElements = getAll( clone );

				for ( i = 0; srcElements[i]; ++i ) {
					cloneCopyEvent( srcElements[i], destElements[i] );
				}
			}
		}

		srcElements = destElements = null;

		// Return the cloned set
		return clone;
	},

	clean: function( elems, context, fragment, scripts ) {
		var checkScriptType;

		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}

		var ret = [], j;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				continue;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				if ( !rhtml.test( elem ) ) {
					elem = context.createTextNode( elem );
				} else {
					// Fix "XHTML"-style tags in all browsers
					elem = elem.replace(rxhtmlTag, "<$1></$2>");

					// Trim whitespace, otherwise indexOf won't work as expected
					var tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase(),
						wrap = wrapMap[ tag ] || wrapMap._default,
						depth = wrap[0],
						div = context.createElement("div");

					// Append wrapper element to unknown element safe doc fragment
					if ( context === document ) {
						// Use the fragment we've already created for this document
						safeFragment.appendChild( div );
					} else {
						// Use a fragment created with the owner document
						createSafeFragment( context ).appendChild( div );
					}

					// Go to html and back, then peel off extra wrappers
					div.innerHTML = wrap[1] + elem + wrap[2];

					// Move to the right depth
					while ( depth-- ) {
						div = div.lastChild;
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						var hasBody = rtbody.test(elem),
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

						for ( j = tbody.length - 1; j >= 0 ; --j ) {
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
								tbody[ j ].parentNode.removeChild( tbody[ j ] );
							}
						}
					}

					// IE completely kills leading whitespace when innerHTML is used
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
					}

					elem = div.childNodes;
				}
			}

			// Resets defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			var len;
			if ( !jQuery.support.appendChecked ) {
				if ( elem[0] && typeof (len = elem.length) === "number" ) {
					for ( j = 0; j < len; j++ ) {
						findInputs( elem[j] );
					}
				} else {
					findInputs( elem );
				}
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}
		}

		if ( fragment ) {
			checkScriptType = function( elem ) {
				return !elem.type || rscriptType.test( elem.type );
			};
			for ( i = 0; ret[i]; i++ ) {
				if ( scripts && jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );

				} else {
					if ( ret[i].nodeType === 1 ) {
						var jsTags = jQuery.grep( ret[i].getElementsByTagName( "script" ), checkScriptType );

						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
					}
					fragment.appendChild( ret[i] );
				}
			}
		}

		return ret;
	},

	cleanData: function( elems ) {
		var data, id,
			cache = jQuery.cache,
			special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
				continue;
			}

			id = elem[ jQuery.expando ];

			if ( id ) {
				data = cache[ id ];

				if ( data && data.events ) {
					for ( var type in data.events ) {
						if ( special[ type ] ) {
							jQuery.event.remove( elem, type );

						// This is a shortcut to avoid jQuery.event.remove's overhead
						} else {
							jQuery.removeEvent( elem, type, data.handle );
						}
					}

					// Null the DOM reference to avoid IE6/7/8 leak (#7054)
					if ( data.handle ) {
						data.handle.elem = null;
					}
				}

				if ( deleteExpando ) {
					delete elem[ jQuery.expando ];

				} else if ( elem.removeAttribute ) {
					elem.removeAttribute( jQuery.expando );
				}

				delete cache[ id ];
			}
		}
	}
});

function evalScript( i, elem ) {
	if ( elem.src ) {
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	} else {
		jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "/*$0*/" ) );
	}

	if ( elem.parentNode ) {
		elem.parentNode.removeChild( elem );
	}
}




var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	// fixed for IE9, see #8346
	rupper = /([A-Z]|^ms)/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,
	rrelNum = /^([\-+])=([\-+.\de]+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssWidth = [ "Left", "Right" ],
	cssHeight = [ "Top", "Bottom" ],
	curCSS,

	getComputedStyle,
	currentStyle;

jQuery.fn.css = function( name, value ) {
	// Setting 'undefined' is a no-op
	if ( arguments.length === 2 && value === undefined ) {
		return this;
	}

	return jQuery.access( this, name, value, true, function( elem, name, value ) {
		return value !== undefined ?
			jQuery.style( elem, name, value ) :
			jQuery.css( elem, name );
	});
};

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity", "opacity" );
					return ret === "" ? "1" : ret;

				} else {
					return elem.style.opacity;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, origName = jQuery.camelCase( name ),
			style = elem.style, hooks = jQuery.cssHooks[ origName ];

		name = jQuery.cssProps[ origName ] || origName;

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( +( ret[1] + 1) * +ret[2] ) + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value )) !== undefined ) {
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra ) {
		var ret, hooks;

		// Make sure that we're working with the right name
		name = jQuery.camelCase( name );
		hooks = jQuery.cssHooks[ name ];
		name = jQuery.cssProps[ name ] || name;

		// cssFloat needs a special treatment
		if ( name === "cssFloat" ) {
			name = "float";
		}

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks && (ret = hooks.get( elem, true, extra )) !== undefined ) {
			return ret;

		// Otherwise, if a way to get the computed value exists, use that
		} else if ( curCSS ) {
			return curCSS( elem, name );
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};

		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	}
});

// DEPRECATED, Use jQuery.css() instead
jQuery.curCSS = jQuery.css;

jQuery.each(["height", "width"], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			var val;

			if ( computed ) {
				if ( elem.offsetWidth !== 0 ) {
					return getWH( elem, name, extra );
				} else {
					jQuery.swap( elem, cssShow, function() {
						val = getWH( elem, name, extra );
					});
				}

				return val;
			}
		},

		set: function( elem, value ) {
			if ( rnumpx.test( value ) ) {
				// ignore negative width and height values #1599
				value = parseFloat( value );

				if ( value >= 0 ) {
					return value + "px";
				}

			} else {
				return value;
			}
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( parseFloat( RegExp.$1 ) / 100 ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there there is no filter style applied in a css rule, we are done
				if ( currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery(function() {
	// This hook cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				var ret;
				jQuery.swap( elem, { "display": "inline-block" }, function() {
					if ( computed ) {
						ret = curCSS( elem, "margin-right", "marginRight" );
					} else {
						ret = elem.style.marginRight;
					}
				});
				return ret;
			}
		};
	}
});

if ( document.defaultView && document.defaultView.getComputedStyle ) {
	getComputedStyle = function( elem, name ) {
		var ret, defaultView, computedStyle;

		name = name.replace( rupper, "-$1" ).toLowerCase();

		if ( (defaultView = elem.ownerDocument.defaultView) &&
				(computedStyle = defaultView.getComputedStyle( elem, null )) ) {
			ret = computedStyle.getPropertyValue( name );
			if ( ret === "" && !jQuery.contains( elem.ownerDocument.documentElement, elem ) ) {
				ret = jQuery.style( elem, name );
			}
		}

		return ret;
	};
}

if ( document.documentElement.currentStyle ) {
	currentStyle = function( elem, name ) {
		var left, rsLeft, uncomputed,
			ret = elem.currentStyle && elem.currentStyle[ name ],
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret === null && style && (uncomputed = style[ name ]) ) {
			ret = uncomputed;
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {

			// Remember the original values
			left = style.left;
			rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				elem.runtimeStyle.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ( ret || 0 );
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

curCSS = getComputedStyle || currentStyle;

function getWH( elem, name, extra ) {

	// Start with offset property
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		which = name === "width" ? cssWidth : cssHeight,
		i = 0,
		len = which.length;

	if ( val > 0 ) {
		if ( extra !== "border" ) {
			for ( ; i < len; i++ ) {
				if ( !extra ) {
					val -= parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
				}
				if ( extra === "margin" ) {
					val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
				} else {
					val -= parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
				}
			}
		}

		return val + "px";
	}

	// Fall back to computed then uncomputed css if necessary
	val = curCSS( elem, name, name );
	if ( val < 0 || val == null ) {
		val = elem.style[ name ] || 0;
	}
	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Add padding, border, margin
	if ( extra ) {
		for ( ; i < len; i++ ) {
			val += parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
			if ( extra !== "padding" ) {
				val += parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
			}
			if ( extra === "margin" ) {
				val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
			}
		}
	}

	return val + "px";
}

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth,
			height = elem.offsetHeight;

		return ( width === 0 && height === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rspacesAjax = /\s+/,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Document location
	ajaxLocation,

	// Document location segments
	ajaxLocParts,

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		if ( jQuery.isFunction( func ) ) {
			var dataTypes = dataTypeExpression.toLowerCase().split( rspacesAjax ),
				i = 0,
				length = dataTypes.length,
				dataType,
				list,
				placeBefore;

			// For each dataType in the dataTypeExpression
			for ( ; i < length; i++ ) {
				dataType = dataTypes[ i ];
				// We control if we're asked to add before
				// any existing element
				placeBefore = /^\+/.test( dataType );
				if ( placeBefore ) {
					dataType = dataType.substr( 1 ) || "*";
				}
				list = structure[ dataType ] = structure[ dataType ] || [];
				// then we add to the structure accordingly
				list[ placeBefore ? "unshift" : "push" ]( func );
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */ ) {

	dataType = dataType || options.dataTypes[ 0 ];
	inspected = inspected || {};

	inspected[ dataType ] = true;

	var list = structure[ dataType ],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = ( structure === prefilters ),
		selection;

	for ( ; i < length && ( executeOnly || !selection ); i++ ) {
		selection = list[ i ]( options, originalOptions, jqXHR );
		// If we got redirected to another dataType
		// we try there if executing only and not done already
		if ( typeof selection === "string" ) {
			if ( !executeOnly || inspected[ selection ] ) {
				selection = undefined;
			} else {
				options.dataTypes.unshift( selection );
				selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected );
			}
		}
	}
	// If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
		selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected );
	}
	// unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
}

jQuery.fn.extend({
	load: function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf( " " );
		if ( off >= 0 ) {
			var selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = undefined;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			// Complete callback (responseText is used internally)
			complete: function( jqXHR, status, responseText ) {
				// Store the response as specified by the jqXHR object
				responseText = jqXHR.responseText;
				// If successful, inject the HTML into all the matched elements
				if ( jqXHR.isResolved() ) {
					// #4825: Get the actual response in case
					// a dataFilter is present in ajaxSettings
					jqXHR.done(function( r ) {
						responseText = r;
					});
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						responseText );
				}

				if ( callback ) {
					self.each( callback, [ responseText, status, jqXHR ] );
				}
			}
		});

		return this;
	},

	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},

	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray( this.elements ) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				( this.checked || rselectTextarea.test( this.nodeName ) ||
					rinput.test( this.type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val, i ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
	jQuery.fn[ o ] = function( f ){
		return this.on( o, f );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	};
});

jQuery.extend({

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		if ( settings ) {
			// Building a settings object
			ajaxExtend( target, jQuery.ajaxSettings );
		} else {
			// Extending ajaxSettings
			settings = target;
			target = jQuery.ajaxSettings;
		}
		ajaxExtend( target, settings );
		return target;
	},

	ajaxSettings: {
		url: ajaxLocation,
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		traditional: false,
		headers: {},
		*/

		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": allTypes
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// List of data converters
		// 1) key format is "source_type destination_type" (a single space in-between)
		// 2) the catchall symbol "*" can be used for source_type
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			context: true,
			url: true
		}
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
						jQuery( callbackContext ) : jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// ifModified key
			ifModifiedKey,
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// Response headers
			responseHeadersString,
			responseHeaders,
			// transport
			transport,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// The jqXHR state
			state = 0,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( !state ) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					statusText = statusText || "abort";
					if ( transport ) {
						transport.abort( statusText );
					}
					done( 0, statusText );
					return this;
				}
			};

		// Callback for when everything is done
		// It is defined here because jslint complains if it is declared
		// at the end of the function (which would be more logical and readable)
		function done( status, nativeStatusText, responses, headers ) {

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			var isSuccess,
				success,
				error,
				statusText = nativeStatusText,
				response = responses ? ajaxHandleResponses( s, jqXHR, responses ) : undefined,
				lastModified,
				etag;

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {

					if ( ( lastModified = jqXHR.getResponseHeader( "Last-Modified" ) ) ) {
						jQuery.lastModified[ ifModifiedKey ] = lastModified;
					}
					if ( ( etag = jqXHR.getResponseHeader( "Etag" ) ) ) {
						jQuery.etag[ ifModifiedKey ] = etag;
					}
				}

				// If not modified
				if ( status === 304 ) {

					statusText = "notmodified";
					isSuccess = true;

				// If we have data
				} else {

					try {
						success = ajaxConvert( s, response );
						statusText = "success";
						isSuccess = true;
					} catch(e) {
						// We have a parsererror
						statusText = "parsererror";
						error = e;
					}
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( !statusText || status ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = "" + ( nativeStatusText || statusText );

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
						[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		// Attach deferreds
		deferred.promise( jqXHR );
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		jqXHR.complete = completeDeferred.add;

		// Status-dependent callbacks
		jqXHR.statusCode = function( map ) {
			if ( map ) {
				var tmp;
				if ( state < 2 ) {
					for ( tmp in map ) {
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
					}
				} else {
					tmp = map[ jqXHR.status ];
					jqXHR.then( tmp, tmp );
				}
			}
			return this;
		};

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// We also use the url parameter if available
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( rspacesAjax );

		// Determine if a cross-domain request is in order
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] != ajaxLocParts[ 1 ] || parts[ 2 ] != ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefiler, stop there
		if ( state === 2 ) {
			return false;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Get ifModifiedKey before adding the anti-cache parameter
			ifModifiedKey = s.url;

			// Add anti-cache in url if needed
			if ( s.cache === false ) {

				var ts = jQuery.now(),
					// try replacing _= if it is there
					ret = s.url.replace( rts, "$1_=" + ts );

				// if nothing was replaced, add timestamp to the end
				s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			ifModifiedKey = ifModifiedKey || s.url;
			if ( jQuery.lastModified[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
			}
			if ( jQuery.etag[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
			}
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already
				jqXHR.abort();
				return false;

		}

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout( function(){
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch (e) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		return jqXHR;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a, traditional ) {
		var s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : value;
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( var prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	}
});

function buildParams( prefix, obj, traditional, add ) {
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// If array item is non-scalar (array or object), encode its
				// numeric index to resolve deserialization ambiguity issues.
				// Note that rack (as of 1.0.0) can't currently deserialize
				// nested arrays properly, and attempting to do so may cause
				// a server error. Possible fixes are to modify rack's
				// deserialization algorithm or to provide an option or flag
				// to force array serialization to be shallow.
				buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && obj != null && typeof obj === "object" ) {
		// Serialize object item.
		for ( var name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// This is still on the jQuery object... for now
// Want to move this to jQuery.ajax some day
jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields,
		ct,
		type,
		finalDataType,
		firstDataType;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	var dataTypes = s.dataTypes,
		converters = {},
		i,
		key,
		length = dataTypes.length,
		tmp,
		// Current and previous dataTypes
		current = dataTypes[ 0 ],
		prev,
		// Conversion expression
		conversion,
		// Conversion function
		conv,
		// Conversion functions (transitive conversion)
		conv1,
		conv2;

	// For each dataType in the chain
	for ( i = 1; i < length; i++ ) {

		// Create converters map
		// with lowercased keys
		if ( i === 1 ) {
			for ( key in s.converters ) {
				if ( typeof key === "string" ) {
					converters[ key.toLowerCase() ] = s.converters[ key ];
				}
			}
		}

		// Get the dataTypes
		prev = current;
		current = dataTypes[ i ];

		// If current is auto dataType, update it to prev
		if ( current === "*" ) {
			current = prev;
		// If no auto and dataTypes are actually different
		} else if ( prev !== "*" && prev !== current ) {

			// Get the converter
			conversion = prev + " " + current;
			conv = converters[ conversion ] || converters[ "* " + current ];

			// If there is no direct converter, search transitively
			if ( !conv ) {
				conv2 = undefined;
				for ( conv1 in converters ) {
					tmp = conv1.split( " " );
					if ( tmp[ 0 ] === prev || tmp[ 0 ] === "*" ) {
						conv2 = converters[ tmp[1] + " " + current ];
						if ( conv2 ) {
							conv1 = converters[ conv1 ];
							if ( conv1 === true ) {
								conv = conv2;
							} else if ( conv2 === true ) {
								conv = conv1;
							}
							break;
						}
					}
				}
			}
			// If we found no converter, dispatch an error
			if ( !( conv || conv2 ) ) {
				jQuery.error( "No conversion from " + conversion.replace(" "," to ") );
			}
			// If found converter is not an equivalence
			if ( conv !== true ) {
				// Convert with 1 or 2 converters accordingly
				response = conv ? conv( response ) : conv2( conv1(response) );
			}
		}
	}
	return response;
}




var jsc = jQuery.now(),
	jsre = /(\=)\?(&|$)|\?\?/i;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		return jQuery.expando + "_" + ( jsc++ );
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var inspectData = s.contentType === "application/x-www-form-urlencoded" &&
		( typeof s.data === "string" );

	if ( s.dataTypes[ 0 ] === "jsonp" ||
		s.jsonp !== false && ( jsre.test( s.url ) ||
				inspectData && jsre.test( s.data ) ) ) {

		var responseContainer,
			jsonpCallback = s.jsonpCallback =
				jQuery.isFunction( s.jsonpCallback ) ? s.jsonpCallback() : s.jsonpCallback,
			previous = window[ jsonpCallback ],
			url = s.url,
			data = s.data,
			replace = "$1" + jsonpCallback + "$2";

		if ( s.jsonp !== false ) {
			url = url.replace( jsre, replace );
			if ( s.url === url ) {
				if ( inspectData ) {
					data = data.replace( jsre, replace );
				}
				if ( s.data === data ) {
					// Add callback manually
					url += (/\?/.test( url ) ? "&" : "?") + s.jsonp + "=" + jsonpCallback;
				}
			}
		}

		s.url = url;
		s.data = data;

		// Install callback
		window[ jsonpCallback ] = function( response ) {
			responseContainer = [ response ];
		};

		// Clean-up function
		jqXHR.always(function() {
			// Set callback back to previous value
			window[ jsonpCallback ] = previous;
			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( previous ) ) {
				window[ jsonpCallback ]( responseContainer[ 0 ] );
			}
		});

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( jsonpCallback + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Delegate to script
		return "script";
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /javascript|ecmascript/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = "async";

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}

						// Dereference the script
						script = undefined;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};
				// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
				// This arises when a base node is used (#2709 and #4378).
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( 0, 1 );
				}
			}
		};
	}
});




var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function() {
		// Abort all pending requests
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( 0, 1 );
		}
	} : false,
	xhrId = 0,
	xhrCallbacks;

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
(function( xhr ) {
	jQuery.extend( jQuery.support, {
		ajax: !!xhr,
		cors: !!xhr && ( "withCredentials" in xhr )
	});
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var xhr = s.xhr(),
						handle,
						i;

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( _ ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {

						var status,
							statusText,
							responseHeaders,
							responses,
							xml;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occured
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();
									responses = {};
									xml = xhr.responseXML;

									// Construct response list
									if ( xml && xml.documentElement /* #4958 */ ) {
										responses.xml = xml;
									}
									responses.text = xhr.responseText;

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					// if we're in sync mode or it's in cache
					// and has been retrieved directly (IE6 & IE7)
					// we need to manually fire the callback
					if ( !s.async || xhr.readyState === 4 ) {
						callback();
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback(0,1);
					}
				}
			};
		}
	});
}




var elemdisplay = {},
	iframe, iframeDoc,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	],
	fxNow;

jQuery.fn.extend({
	show: function( speed, easing, callback ) {
		var elem, display;

		if ( speed || speed === 0 ) {
			return this.animate( genFx("show", 3), speed, easing, callback );

		} else {
			for ( var i = 0, j = this.length; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if ( !jQuery._data(elem, "olddisplay") && display === "none" ) {
						display = elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if ( display === "" && jQuery.css(elem, "display") === "none" ) {
						jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					if ( display === "" || display === "none" ) {
						elem.style.display = jQuery._data( elem, "olddisplay" ) || "";
					}
				}
			}

			return this;
		}
	},

	hide: function( speed, easing, callback ) {
		if ( speed || speed === 0 ) {
			return this.animate( genFx("hide", 3), speed, easing, callback);

		} else {
			var elem, display,
				i = 0,
				j = this.length;

			for ( ; i < j; i++ ) {
				elem = this[i];
				if ( elem.style ) {
					display = jQuery.css( elem, "display" );

					if ( display !== "none" && !jQuery._data( elem, "olddisplay" ) ) {
						jQuery._data( elem, "olddisplay", display );
					}
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				if ( this[i].style ) {
					this[i].style.display = "none";
				}
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2, callback ) {
		var bool = typeof fn === "boolean";

		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );

		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});

		} else {
			this.animate(genFx("toggle", 3), fn, fn2, callback);
		}

		return this;
	},

	fadeTo: function( speed, to, easing, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, easing, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed( speed, easing, callback );

		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete, [ false ] );
		}

		// Do not change referenced properties as per-property easing will be lost
		prop = jQuery.extend( {}, prop );

		function doAnimation() {
			// XXX 'this' does not always have a nodeName when running the
			// test suite

			if ( optall.queue === false ) {
				jQuery._mark( this );
			}

			var opt = jQuery.extend( {}, optall ),
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				name, val, p, e,
				parts, start, end, unit,
				method;

			// will store per property easing and be used to determine when an animation is complete
			opt.animatedProperties = {};

			for ( p in prop ) {

				// property name normalization
				name = jQuery.camelCase( p );
				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
				}

				val = prop[ name ];

				// easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
				if ( jQuery.isArray( val ) ) {
					opt.animatedProperties[ name ] = val[ 1 ];
					val = prop[ name ] = val[ 0 ];
				} else {
					opt.animatedProperties[ name ] = opt.specialEasing && opt.specialEasing[ name ] || opt.easing || 'swing';
				}

				if ( val === "hide" && hidden || val === "show" && !hidden ) {
					return opt.complete.call( this );
				}

				if ( isElement && ( name === "height" || name === "width" ) ) {
					// Make sure that nothing sneaks out
					// Record all 3 overflow attributes because IE does not
					// change the overflow attribute when overflowX and
					// overflowY are set to the same value
					opt.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ];

					// Set display property to inline-block for height/width
					// animations on inline elements that are having width/height animated
					if ( jQuery.css( this, "display" ) === "inline" &&
							jQuery.css( this, "float" ) === "none" ) {

						// inline-level elements accept inline-block;
						// block-level elements need to be inline with layout
						if ( !jQuery.support.inlineBlockNeedsLayout || defaultDisplay( this.nodeName ) === "inline" ) {
							this.style.display = "inline-block";

						} else {
							this.style.zoom = 1;
						}
					}
				}
			}

			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}

			for ( p in prop ) {
				e = new jQuery.fx( this, opt, p );
				val = prop[ p ];

				if ( rfxtypes.test( val ) ) {

					// Tracks whether to show or hide based on private
					// data attached to the element
					method = jQuery._data( this, "toggle" + p ) || ( val === "toggle" ? hidden ? "show" : "hide" : 0 );
					if ( method ) {
						jQuery._data( this, "toggle" + p, method === "show" ? "hide" : "show" );
						e[ method ]();
					} else {
						e[ val ]();
					}

				} else {
					parts = rfxnum.exec( val );
					start = e.cur();

					if ( parts ) {
						end = parseFloat( parts[2] );
						unit = parts[3] || ( jQuery.cssNumber[ p ] ? "" : "px" );

						// We need to compute starting value
						if ( unit !== "px" ) {
							jQuery.style( this, p, (end || 1) + unit);
							start = ( (end || 1) / e.cur() ) * start;
							jQuery.style( this, p, start + unit);
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] ) {
							end = ( (parts[ 1 ] === "-=" ? -1 : 1) * end ) + start;
						}

						e.custom( start, end, unit );

					} else {
						e.custom( start, val, "" );
					}
				}
			}

			// For JS strict compliance
			return true;
		}

		return optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},

	stop: function( type, clearQueue, gotoEnd ) {
		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var index,
				hadTimers = false,
				timers = jQuery.timers,
				data = jQuery._data( this );

			// clear marker counters if we know they won't be
			if ( !gotoEnd ) {
				jQuery._unmark( true, this );
			}

			function stopQueue( elem, data, index ) {
				var hooks = data[ index ];
				jQuery.removeData( elem, index, true );
				hooks.stop( gotoEnd );
			}

			if ( type == null ) {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && index.indexOf(".run") === index.length - 4 ) {
						stopQueue( this, data, index );
					}
				}
			} else if ( data[ index = type + ".run" ] && data[ index ].stop ){
				stopQueue( this, data, index );
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					if ( gotoEnd ) {

						// force the next step to be the last
						timers[ index ]( true );
					} else {
						timers[ index ].saveState();
					}
					hadTimers = true;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( !( gotoEnd && hadTimers ) ) {
				jQuery.dequeue( this, type );
			}
		});
	}

});

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout( clearFxNow, 0 );
	return ( fxNow = jQuery.now() );
}

function clearFxNow() {
	fxNow = undefined;
}

// Generate parameters to create a standard animation
function genFx( type, num ) {
	var obj = {};

	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice( 0, num )), function() {
		obj[ this ] = type;
	});

	return obj;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx( "show", 1 ),
	slideUp: genFx( "hide", 1 ),
	slideToggle: genFx( "toggle", 1 ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function( noUnmark ) {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			} else if ( noUnmark !== false ) {
				jQuery._unmark( this );
			}
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ( ( -Math.cos( p*Math.PI ) / 2 ) + 0.5 ) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		options.orig = options.orig || {};
	}

});

jQuery.fx.prototype = {
	// Simple function for setting a style value
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		( jQuery.fx.step[ this.prop ] || jQuery.fx.step._default )( this );
	},

	// Get the current size
	cur: function() {
		if ( this.elem[ this.prop ] != null && (!this.elem.style || this.elem.style[ this.prop ] == null) ) {
			return this.elem[ this.prop ];
		}

		var parsed,
			r = jQuery.css( this.elem, this.prop );
		// Empty strings, null, undefined and "auto" are converted to 0,
		// complex values such as "rotate(1rad)" are returned as is,
		// simple values such as "10px" are parsed to Float.
		return isNaN( parsed = parseFloat( r ) ) ? !r || r === "auto" ? 0 : r : parsed;
	},

	// Start an animation from one number to another
	custom: function( from, to, unit ) {
		var self = this,
			fx = jQuery.fx;

		this.startTime = fxNow || createFxNow();
		this.end = to;
		this.now = this.start = from;
		this.pos = this.state = 0;
		this.unit = unit || this.unit || ( jQuery.cssNumber[ this.prop ] ? "" : "px" );

		function t( gotoEnd ) {
			return self.step( gotoEnd );
		}

		t.queue = this.options.queue;
		t.elem = this.elem;
		t.saveState = function() {
			if ( self.options.hide && jQuery._data( self.elem, "fxshow" + self.prop ) === undefined ) {
				jQuery._data( self.elem, "fxshow" + self.prop, self.start );
			}
		};

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval( fx.tick, fx.interval );
		}
	},

	// Simple 'show' function
	show: function() {
		var dataShow = jQuery._data( this.elem, "fxshow" + this.prop );

		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = dataShow || jQuery.style( this.elem, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any flash of content
		if ( dataShow !== undefined ) {
			// This show is picking up where a previous hide or show left off
			this.custom( this.cur(), dataShow );
		} else {
			this.custom( this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur() );
		}

		// Start by showing the element
		jQuery( this.elem ).show();
	},

	// Simple 'hide' function
	hide: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = jQuery._data( this.elem, "fxshow" + this.prop ) || jQuery.style( this.elem, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom( this.cur(), 0 );
	},

	// Each step of an animation
	step: function( gotoEnd ) {
		var p, n, complete,
			t = fxNow || createFxNow(),
			done = true,
			elem = this.elem,
			options = this.options;

		if ( gotoEnd || t >= options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			options.animatedProperties[ this.prop ] = true;

			for ( p in options.animatedProperties ) {
				if ( options.animatedProperties[ p ] !== true ) {
					done = false;
				}
			}

			if ( done ) {
				// Reset the overflow
				if ( options.overflow != null && !jQuery.support.shrinkWrapBlocks ) {

					jQuery.each( [ "", "X", "Y" ], function( index, value ) {
						elem.style[ "overflow" + value ] = options.overflow[ index ];
					});
				}

				// Hide the element if the "hide" operation was done
				if ( options.hide ) {
					jQuery( elem ).hide();
				}

				// Reset the properties, if the item has been hidden or shown
				if ( options.hide || options.show ) {
					for ( p in options.animatedProperties ) {
						jQuery.style( elem, p, options.orig[ p ] );
						jQuery.removeData( elem, "fxshow" + p, true );
						// Toggle data is no longer needed
						jQuery.removeData( elem, "toggle" + p, true );
					}
				}

				// Execute the complete function
				// in the event that the complete function throws an exception
				// we must ensure it won't be called twice. #5684

				complete = options.complete;
				if ( complete ) {

					options.complete = false;
					complete.call( elem );
				}
			}

			return false;

		} else {
			// classical easing cannot be used with an Infinity duration
			if ( options.duration == Infinity ) {
				this.now = t;
			} else {
				n = t - this.startTime;
				this.state = n / options.duration;

				// Perform the easing function, defaults to swing
				this.pos = jQuery.easing[ options.animatedProperties[this.prop] ]( this.state, n, 0, 1, options.duration );
				this.now = this.start + ( (this.end - this.start) * this.pos );
			}
			// Perform the next step of the animation
			this.update();
		}

		return true;
	}
};

jQuery.extend( jQuery.fx, {
	tick: function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},

	interval: 13,

	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},

	speeds: {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	},

	step: {
		opacity: function( fx ) {
			jQuery.style( fx.elem, "opacity", fx.now );
		},

		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});

// Adds width/height step functions
// Do not set anything below 0
jQuery.each([ "width", "height" ], function( i, prop ) {
	jQuery.fx.step[ prop ] = function( fx ) {
		jQuery.style( fx.elem, prop, Math.max(0, fx.now) + fx.unit );
	};
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

// Try to restore the default display value of an element
function defaultDisplay( nodeName ) {

	if ( !elemdisplay[ nodeName ] ) {

		var body = document.body,
			elem = jQuery( "<" + nodeName + ">" ).appendTo( body ),
			display = elem.css( "display" );
		elem.remove();

		// If the simple way fails,
		// get element's real default display by attaching it to a temp iframe
		if ( display === "none" || display === "" ) {
			// No iframe to use yet, so create it
			if ( !iframe ) {
				iframe = document.createElement( "iframe" );
				iframe.frameBorder = iframe.width = iframe.height = 0;
			}

			body.appendChild( iframe );

			// Create a cacheable copy of the iframe document on first call.
			// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
			// document to it; WebKit & Firefox won't allow reusing the iframe document.
			if ( !iframeDoc || !iframe.createElement ) {
				iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
				iframeDoc.write( ( document.compatMode === "CSS1Compat" ? "<!doctype html>" : "" ) + "<html><body>" );
				iframeDoc.close();
			}

			elem = iframeDoc.createElement( nodeName );

			iframeDoc.body.appendChild( elem );

			display = jQuery.css( elem, "display" );
			body.removeChild( iframe );
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return elemdisplay[ nodeName ];
}




var rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

if ( "getBoundingClientRect" in document.documentElement ) {
	jQuery.fn.offset = function( options ) {
		var elem = this[0], box;

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		try {
			box = elem.getBoundingClientRect();
		} catch(e) {}

		var doc = elem.ownerDocument,
			docElem = doc.documentElement;

		// Make sure we're not dealing with a disconnected DOM node
		if ( !box || !jQuery.contains( docElem, elem ) ) {
			return box ? { top: box.top, left: box.left } : { top: 0, left: 0 };
		}

		var body = doc.body,
			win = getWindow(doc),
			clientTop  = docElem.clientTop  || body.clientTop  || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop  = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop,
			scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
			top  = box.top  + scrollTop  - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: top, left: left };
	};

} else {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}

			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;

			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;

				if ( jQuery.support.doesNotAddBorder && !(jQuery.support.doesAddBorderForTableAndCells && rtable.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}

				prevOffsetParent = offsetParent;
				offsetParent = elem.offsetParent;
			}

			if ( jQuery.support.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}

			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}

		if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}

		return { top: top, left: left };
	};
}

jQuery.offset = {

	bodyOffset: function( body ) {
		var top = body.offsetTop,
			left = body.offsetLeft;

		if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
			left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
		}

		return { top: top, left: left };
	},

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[0] ) {
			return null;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// Subtract element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
		offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
		parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ["Left", "Top"], function( i, name ) {
	var method = "scroll" + name;

	jQuery.fn[ method ] = function( val ) {
		var elem, win;

		if ( val === undefined ) {
			elem = this[ 0 ];

			if ( !elem ) {
				return null;
			}

			win = getWindow( elem );

			// Return the scroll offset
			return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :
				jQuery.support.boxModel && win.document.documentElement[ method ] ||
					win.document.body[ method ] :
				elem[ method ];
		}

		// Set the scroll offset
		return this.each(function() {
			win = getWindow( this );

			if ( win ) {
				win.scrollTo(
					!i ? val : jQuery( win ).scrollLeft(),
					 i ? val : jQuery( win ).scrollTop()
				);

			} else {
				this[ method ] = val;
			}
		});
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}




// Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function( i, name ) {

	var type = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn[ "inner" + name ] = function() {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, "padding" ) ) :
			this[ type ]() :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn[ "outer" + name ] = function( margin ) {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, margin ? "margin" : "border" ) ) :
			this[ type ]() :
			null;
	};

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		var elem = this[0];
		if ( !elem ) {
			return size == null ? null : this;
		}

		if ( jQuery.isFunction( size ) ) {
			return this.each(function( i ) {
				var self = jQuery( this );
				self[ type ]( size.call( this, i, self[ type ]() ) );
			});
		}

		if ( jQuery.isWindow( elem ) ) {
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			// 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
			var docElemProp = elem.document.documentElement[ "client" + name ],
				body = elem.document.body;
			return elem.document.compatMode === "CSS1Compat" && docElemProp ||
				body && body[ "client" + name ] || docElemProp;

		// Get document width or height
		} else if ( elem.nodeType === 9 ) {
			// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
			return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);

		// Get or set width or height on the element
		} else if ( size === undefined ) {
			var orig = jQuery.css( elem, type ),
				ret = parseFloat( orig );

			return jQuery.isNumeric( ret ) ? ret : orig;

		// Set the width or height on the element (default to pixels if value is unitless)
		} else {
			return this.css( type, typeof size === "string" ? size : size + "px" );
		}
	};

});




// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if (  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return jQuery; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



})( window );


/***/ }),

/***/ "./src/assets/js/jquery.localscroll-1.2.7-min.js":
/*!*******************************************************!*\
  !*** ./src/assets/js/jquery.localscroll-1.2.7-min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);

/***/ }),

/***/ "./src/assets/js/jquery.scrollTo-1.4.2-min.js":
/*!****************************************************!*\
  !*** ./src/assets/js/jquery.scrollTo-1.4.2-min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

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