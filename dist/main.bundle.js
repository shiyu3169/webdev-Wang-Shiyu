webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<!-- Meta tags for making website for mobile-->\r\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\r\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\r\n<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">\r\n<meta charset=\"UTF-8\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\"/>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_33__directives_sortable_directive__["a" /* SortableDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_28__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_29__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_30__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_31__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_32__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_34__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_35__services_authentication_service_client__["a" /* AuthenticationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/**
 * Created by sesha on 7/26/17.
 */
















var APP_ROUTES = [
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__["a" /* TestComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    // {path: 'user/:uid', component: ProfileComponent},
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_5__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr',
        component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service_client__["a" /* AuthenticationService */]] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app!\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Edit Page</b>\n    </a>\n    <button type=\"submit\"\n            [disabled]=\"!f.valid\"\n            form=\"pageForm\"\n            class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok sw-text-black\"></span>\n    </button>\n  </div>\n</nav>\n\n<!--pages list-->\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\"\n        #f =\"ngForm\"\n        id=\"pageForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\"\n             id=\"name\"\n             name=\"name\"\n             placeholder=\"Blog name\"\n             ngModel=\"{{page.name}}\"\n             #name=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!name.valid && name.touched\">Name can't be empty!</span>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input type=\"text\"\n             name=\"title\"\n             id=\"title\"\n             placeholder=\"Blog Title\"\n             ngModel=\"{{page.description}}\"\n             #title=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a (click)=\"remove()\"\n           class=\"btn btn-danger btn-block\">Delete</a>\n      </div>\n      <div class=\"col-xs-6 pull-right\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n           class=\"btn btn-warning btn-block\">Cancel</a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {
            _id: '',
            name: '',
            websiteId: '',
            description: ''
        };
    }
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.name = this.pageForm.value.name;
        this.title = this.pageForm.value.title;
        var updatedPage = {
            name: this.name,
            websiteId: this.wid,
            description: this.title
        };
        this.pageService.updatePage(this.pid, updatedPage)
            .subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    PageEditComponent.prototype.remove = function () {
        var _this = this;
        this.pageService.deletePage(this.pid)
            .subscribe(function (pages) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.pageService.findPageById(_this.pid)
                .subscribe(function (page) {
                _this.page = page;
                _this.name = _this.page.name;
                _this.title = _this.page.description;
            });
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Pages</b>\n    </a>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"\n       class=\"navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus sw-text-black\"></span>\n    </a>\n  </div>\n</nav>\n\n<!--pages list-->\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item sw-borderless\"\n        *ngFor=\"let page of pages\">\n      <a class=\"sw-link\" routerLink=\"{{page._id}}/widget\">{{page.name}}</a>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, router) {
        this.pageService = pageService;
        this.router = router;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.wid)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"\n       class=\"pull-left navbar-brand thick\">\n      <b>New Page</b>\n    </a>\n    <button type=\"submit\"\n            [disabled]=\"!f.valid\"\n            form=\"pageForm\"\n            class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok sw-text-black\"></span>\n    </button>\n  </div>\n</nav>\n\n<!--pages list-->\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"create()\"\n        #f =\"ngForm\"\n        id=\"pageForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\"\n             id=\"name\"\n             name=\"name\"\n             placeholder=\"Blog name\"\n             required\n             ngModel\n             #name=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!name.valid && name.touched\">Name can't be empty!</span>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input type=\"text\"\n             id=\"title\"\n             name=\"title\"\n             placeholder=\"Blog Title\"\n             ngModel\n             #title=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n         class=\"btn btn-warning btn-block\">Cancel</a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.pageForm.value.name;
        this.title = this.pageForm.value.title;
        var newPage = {
            name: this.name,
            websiteId: this.wid,
            description: this.title
        };
        this.pageService.createPage(this.wid, newPage)
            .subscribe(function (pages) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\" >\n    Invalid username or password!\n  </div>\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\"\n        #f =\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             required\n             ngModel\n             placeholder=\"username\"\n             class=\"form-control\"\n             #username=\"ngModel\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\n    <div class=\"form-group\">\n      <input type=\"password\"\n             id=\"password\"\n             name=\"password\"\n             required\n             placeholder=\"password\"\n             ngModel\n             #password=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\n    <button class=\"btn btn-primary btn-block\"\n       type=\"submit\"\n       [disabled]=\"!f.valid\">Login</button>\n    <button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            if (!user) {
                console.log(_this.errorFlag);
                _this.errorFlag = true;
            }
            else {
                _this.errorFlag = false;
                _this.sharedService.user = user;
                _this.router.navigate(['/user']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top  sw-nav-blue\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <a routerLink=\"/user\"\n       class=\"navbar-header pull-left navbar-brand thick\">\n      <b class=\"sw-text-white\">Profile</b>\n    </a>\n\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <button type=\"submit\"\n              [disabled]=\"!f.valid\"\n              form=\"profileForm\"\n              class=\"btn btn-xs navbar-link sw-button-transparent\">\n        <span class=\"glyphicon glyphicon-ok sw-text-white\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"usernameTaken\"\n       class=\"alert alert-danger\" >\n    Username was taken!\n  </div>\n  <div *ngIf=\"submitSuccess\"\n       class=\"alert alert-success\" >\n    Submit successfully!\n  </div>\n  <form (ngSubmit)=\"update()\"\n        #f =\"ngForm\"\n        id=\"profileForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             name=\"username\"\n             required\n             #username=\"ngModel\"\n             ngModel=\"{{user.username}}\"\n             placeholder=\"username\">\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!username.valid && username.touched\">Username can't be empty!</span>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"email\"\n             email\n             ngModel=\"{{user.email}}\"\n             #email=\"ngModel\"\n             placeholder=\"alice.wonderland@unicorn.com\">\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!email.valid && email.touched\">Invalid email!</span>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"firstName\"\n             name=\"firstName\"\n             ngModel=\"{{user.firstName}}\"\n             #firstName=\"ngModel\"\n             placeholder=\"Alice\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\"\n             name=\"lastName\"\n             ngModel=\"{{user.lastName}}\"\n             #lastName=\"ngModel\"\n             placeholder=\"Wonderland\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{uid}}/website\">Websites</a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"logout()\">Logout</a>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom sw-nav-blue\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/user\"\n       class=\"navbar-text pull-right\">\n      <span class=\"glyphicon glyphicon-user sw-text-white\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(sharedService, userService, router, route) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.user = {
            _id: this.uid,
            username: this.username,
            password: '',
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        this.usernameTaken = false;
        this.submitSuccess = false;
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            _this.aUser = user;
            if (_this.aUser !== null && _this.username !== _this.prevUsername) {
                _this.usernameTaken = true;
            }
            else {
                var updatedUser = {
                    username: _this.username,
                    password: _this.user.password,
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    email: _this.email
                };
                _this.userService.updateUser(_this.uid, updatedUser)
                    .subscribe(function (newU) {
                    _this.route.navigate(['/user']);
                });
                _this.submitSuccess = true;
                _this.prevUsername = _this.username;
            }
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.route.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.uid = this.user._id;
        this.username = this.user.username;
        this.email = this.user.email;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.prevUsername = this.username;
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"usernameError\"\n       class=\"alert alert-danger\" >\n    Username was taken!\n  </div>\n  <div *ngIf=\"passwordError\"\n       class=\"alert alert-danger\" >\n    Two passwords are not match!\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\"\n        #f =\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             required\n             ngModel\n             #username=\"ngModel\"\n             placeholder=\"username\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\n    <div class=\"form-group\">\n      <input type=\"password\"\n             id=\"password\"\n             name=\"password\"\n             required\n             ngModel\n             #password=\"ngModel\"\n             placeholder=\"password\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\n    <div class=\"form-group\">\n      <input type=\"password\"\n             id=\"verifyPassword\"\n             name=\"verifyPassword\"\n             required\n             ngModel\n             #verifyPassword=\"ngModel\"\n             placeholder=\"verify password\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">Please verify username!</span>\n    <button class=\"btn btn-primary btn-block\"\n       type=\"submit\"\n       [disabled]=\"!f.valid\">Register</button>\n    <button class=\"btn btn-danger btn-block\"\n       routerLink=\"/login\" >Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.usernameError = false;
        this.passwordError = false;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
        }
        else {
            this.userService.register(this.username, this.password)
                .subscribe(function (user) {
                _this.router.navigate(['/user']);
            }, function (error) {
                _this.usernameError = true;
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- top navbar-->\n<nav class=\"navbar navbar-fixed-top sw-nav-blue\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"/user\"\n             class=\"navbar-link sw-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n        <a routerLink=\"/user/{{uid}}/website\"\n           class=\"pull-left navbar-brand thick\">\n          <b class=\"sw-text-white\">Websites</b>\n        </a>\n        <a routerLink=\"/user/{{uid}}/website/new\"\n           class=\"navbar-link navbar-text pull-right sw-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus sw-text-white\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 pull-right\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}\"\n           class=\"pull-left navbar-brand thick\">\n          <b class=\"sw-text-white\">Edit Website</b>\n        </a>\n        <button type=\"submit\"\n                [disabled]=\"!f.valid\"\n                form=\"webForm\"\n                class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok sw-text-white\"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<!--left websites-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item sw-borderless\"\n            *ngFor=\"let website of websites\">\n          <a class=\"sw-link\"\n             routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n          <a routerLink=\"/user/{{uid}}/website/{{website._id}}\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <!--right editor-->\n    <div class=\"col-sm-8 col-xs-12\">\n      <form (ngSubmit)=\"update()\"\n            #f =\"ngForm\"\n            id=\"webForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\"\n                 id=\"name\"\n                 name=\"name\"\n                 required\n                 placeholder=\"any name\"\n                 ngModel=\"{{website.name}}\"\n                 #name=\"ngModel\"\n                 class=\"form-control\"/>\n        </div>\n        <span class=\"help-block\"\n              *ngIf=\"!name.valid && name.touched\">Name can't be empty!</span>\n        <div class=\"form-group\">\n          <label for=\"description\">Website Desciption</label>\n          <textarea id=\"description\"\n                    name=\"description\"\n                    rows=\"5\"\n                    placeholder=\"anything related to this website\"\n                    ngModel=\"{{website.description}}\"\n                    #description=\"ngModel\"\n                    class=\"form-control\"></textarea>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <a (click)=\"remove()\"\n               class=\"btn btn-danger btn-block\">Delete</a>\n          </div>\n          <div class=\"col-xs-4 pull-right\">\n            <a routerLink=\"/user/{{uid}}/website\"\n               class=\"btn btn-warning btn-block\">Cancel</a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom sw-nav-blue\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/user\"\n       class=\"navbar-text pull-right\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding sw-text-white\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, activeRouter, router) {
        this.websiteService = websiteService;
        this.activeRouter = activeRouter;
        this.router = router;
        this.website = {
            _id: '',
            name: '',
            developerId: '',
            description: ''
        };
    }
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        this.name = this.webForm.value.name;
        this.description = this.webForm.value.description;
        var updatedWeb = {
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.updateWebsite(this.wid, updatedWeb)
            .subscribe(function (website) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    WebsiteEditComponent.prototype.remove = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.wid)
            .subscribe(function (websites) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.websiteService.findWebsitesByUser(_this.uid)
                .subscribe(function (websites) {
                _this.websites = websites;
                _this.websiteService.findWebsiteById(_this.wid)
                    .subscribe(function (website) {
                    _this.website = website;
                    _this.name = _this.website.name;
                    _this.description = _this.website.description;
                });
            });
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "webForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- top navbar-->\n<nav class=\"navbar navbar-fixed-top sw-nav-blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user\"\n         class=\"navbar-link sw-text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website\"\n       class=\"pull-left navbar-brand thick\">\n      <b class=\"sw-text-white\">Websites</b>\n    </a>\n    <button routerLink=\"/user/{{uid}}/website/new\"\n       class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus sw-text-white\"></span>\n    </button>\n  </div>\n</nav>\n\n<!--websites list-->\n<div  class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item sw-borderless\"\n        *ngFor=\"let website of websites\">\n      <a class=\"sw-link\"\n         routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n      <a routerLink=\"/user/{{uid}}/website/{{website._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom sw-nav-blue\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/user\" class=\"navbar-text pull-right\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding sw-text-white\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, router) {
        this.websiteService = websiteService;
        this.router = router;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-fixed-top sw-nav-blue\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/{{uid}}/website\"\n             class=\"navbar-link sw-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n        <a routerLink=\"/user/{{uid}}/website\"\n           class=\"pull-left navbar-brand thick\">\n          <b class=\"sw-text-white\">Websites</b>\n        </a>\n        <a routerLink=\"/user/{{uid}}/website/new\"\n           class=\"navbar-link navbar-text pull-right sw-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus sw-text-white\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 pull-right\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"/user/{{uid}}/website/new\"\n           class=\"pull-left navbar-brand thick\">\n          <b class=\"sw-text-white\">New Website</b>\n        </a>\n        <button type=\"submit\"\n                [disabled]=\"!f.valid\"\n                form=\"webForm\"\n                class=\"btn btn-xs navbar-link navbar-text pull-right sw-icon-padding sw-button-transparent\">\n          <span class=\"glyphicon glyphicon-ok sw-text-white\"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<!--left websites-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item sw-borderless\"\n            *ngFor=\"let website of websites\">\n          <a class=\"sw-link\"\n             routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n          <a routerLink=\"/user/{{uid}}/website/{{website._id}}\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <!--right editor-->\n    <div class=\"col-sm-8 col-xs-12\">\n      <form (ngSubmit)=\"create()\"\n            #f =\"ngForm\"\n            id=\"webForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\"\n                 id=\"name\"\n                 placeholder=\"Name\"\n                 name=\"name\"\n                 required\n                 ngModel\n                 #name=\"ngModel\"\n                 class=\"form-control\"/>\n        </div>\n        <span class=\"help-block\"\n              *ngIf=\"!name.valid && name.touched\">Name can't be empty!</span>\n        <div class=\"form-group\">\n          <label for=\"description\">Website Description</label>\n          <textarea id=\"description\"\n                    rows=\"5\"\n                    name=\"description\"\n                    placeholder=\"Description\"\n                    ngModel\n                    #description=\"ngModel\"\n                    class=\"form-control\"></textarea>\n        </div>\n        <div>\n          <a routerLink=\"/user/{{uid}}/website\"\n             class=\"btn btn-warning btn-block\">Cancel</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom sw-nav-blue\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/user\" class=\"navbar-text pull-right\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding sw-text-white\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.webForm.value.name;
        this.description = this.webForm.value.description;
        var newWebsite = {
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.createWebsite(this.uid, newWebsite)
            .subscribe(function (websites) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "webForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Choose Widget</b>\n    </a>\n  </div>\n</nav>\n\n<!--widget chooser-->\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\"\n         (click)=\"createHead()\">\n        <button class=\"btn sw-button-transparent\">Header</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\" href=\"#\">\n        <button class=\"btn sw-button-transparent\">Label</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\"\n         (click)=\"createHtml()\">\n        <button class=\"btn sw-button-transparent\">HTML</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\" (click)=\"createText()\">\n        <button class=\"btn sw-button-transparent\">Text Input</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\" href=\"#\">\n        <button class=\"btn sw-button-transparent\">Link</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\" href=\"#\">\n        <button class=\"btn sw-button-transparent\">Button</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\"\n         (click)=\"createImage()\">\n        <button class=\"btn sw-button-transparent\">Image</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\"\n         (click)=\"createYoutube()\">\n        <button class=\"btn sw-button-transparent\">Youtube</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\" href=\"#\">\n        <button class=\"btn sw-button-transparent\">Data Table</button>\n      </a>\n    </li>\n    <li class=\"list-group-item sw-borderless\">\n      <a class=\"sw-link\" href=\"#\">\n        <button class=\"btn sw-button-transparent\">Repeater</button>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/profile\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.createHead = function () {
        var _this = this;
        var newWidget = {
            widgetType: 'HEADING',
            pageId: this.pid,
        };
        this.widgetService.createWidget(this.pid, newWidget)
            .subscribe(function (widget) {
            _this.wgid = widget._id;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', _this.wgid]);
        });
    };
    WidgetChooserComponent.prototype.createImage = function () {
        var _this = this;
        var newWidget = {
            widgetType: 'IMAGE',
            pageId: this.pid,
        };
        this.widgetService.createWidget(this.pid, newWidget)
            .subscribe(function (widget) {
            _this.wgid = widget._id;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', _this.wgid]);
        });
    };
    WidgetChooserComponent.prototype.createYoutube = function () {
        var _this = this;
        var newWidget = {
            widgetType: 'YOUTUBE',
            pageId: this.pid,
        };
        this.widgetService.createWidget(this.pid, newWidget)
            .subscribe(function (widget) {
            _this.wgid = widget._id;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', _this.wgid]);
        });
    };
    WidgetChooserComponent.prototype.createHtml = function () {
        var _this = this;
        var newWidget = {
            widgetType: 'HTML',
            pageId: this.pid,
        };
        this.widgetService.createWidget(this.pid, newWidget)
            .subscribe(function (widget) {
            _this.wgid = widget._id;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', _this.wgid]);
        });
    };
    WidgetChooserComponent.prototype.createText = function () {
        var _this = this;
        var newWidget = {
            widgetType: 'Text',
            pageId: this.pid,
        };
        this.widgetService.createWidget(this.pid, newWidget)
            .subscribe(function (widget) {
            _this.wgid = widget._id;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', _this.wgid]);
        });
    };
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'Text'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            size: 0,
            text: ''
        };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Widget edit</b>\n    </a>\n    <button type=\"submit\"\n            [disabled]=\"!f.valid\"\n            form=\"widgetForm\"\n            class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok sw-text-black\"></span>\n    </button>\n  </div>\n</nav>\n\n<!--form-->\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\"\n        id=\"widgetForm\"\n        #f =\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"name\"\n             id=\"name\"\n             name=\"name\"\n             placeholder=\"Name of the heading\"\n             ngModel=\"{{widget.name}}\"\n             #name=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             id=\"text\"\n             name=\"text\"\n             placeholder=\"Text of the heading\"\n             ngModel=\"{{widget.text}}\"\n             required\n             #text=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!text.valid && text.touched\">Text can't be empty!</span>\n    <select type=\"number\"\n            id=\"size\"\n            name=\"size\"\n            [(ngModel)]=\"widget.size\"\n            #size=\"ngModel\"\n            class=\"form-control\">\n      <option value=1>1</option>\n      <option value=2>2</option>\n      <option value=3>3</option>\n      <option value=4>4</option>\n    </select>\n    <div class=\"form-group\">\n      <label for=\"size\">Size</label>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n           class=\"btn btn-warning btn-block\">Cancel</a>\n      </div>\n      <div class=\"col-xs-6\">\n        <a (click)=\"remove()\"\n           class=\"btn btn-danger btn-block\">Delete</a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            name: '',
            size: 0,
            text: ''
        };
    }
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.size = this.widgetForm.value.size;
        var updatedWidget = {
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.widget.pageId,
            size: this.size,
            text: this.text
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "widgetForm", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Widget edit</b>\n    </a>\n    <button type=\"submit\"\n            [disabled]=\"!f.valid\"\n            form=\"widgetForm\"\n            class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok sw-text-black\"></span>\n    </button>\n  </div>\n</nav>\n\n<!--form-->\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\"\n        id=\"widgetForm\"\n        #f =\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"name\"\n             id=\"name\"\n             name=\"name\"\n             placeholder=\"Name of the widget\"\n             ngModel=\"{{widget.name}}\"\n             #name=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n           class=\"btn btn-warning btn-block\">Cancel</a>\n      </div>\n      <div class=\"col-xs-6\">\n        <a (click)=\"remove()\"\n           class=\"btn btn-danger btn-block\">Delete</a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            text: '',
            name: ''
        };
    }
    WidgetHtmlComponent.prototype.update = function () {
        var _this = this;
        this.text = this.widgetForm.value.text;
        this.name = this.widgetForm.value.name;
        var updatedWidget = {
            widgetType: this.widget.widgetType,
            pageId: this.widget.pageId,
            text: this.text,
            name: this.name
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetHtmlComponent.prototype, "widgetForm", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/flickr\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Search Flickr</b>\n    </a>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n           <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n               <span class=\"glyphicon glyphicon-search\"></span>\n           </a>\n   </span>\n  </div>\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img (click)=\"selectPhoto(pic)\"\n           width=\"100%\"\n           [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n      <p></p>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
        };
    }
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        this.widgetService
            .updateWidget(this.wgid, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', _this.wgid]);
        });
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.photos = [''];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Widget edit</b>\n    </a>\n    <button type=\"submit\"\n            [disabled]=\"!f.valid\"\n            form=\"widgetForm\"\n            class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok sw-text-black\"></span>\n    </button>\n  </div>\n</nav>\n\n<!--form-->\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\"\n        id=\"widgetForm\"\n        #f =\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"name\"\n             id=\"name\"\n             name=\"name\"\n             placeholder=\"Name of the image\"\n             ngModel=\"{{widget.name}}\"\n             #name=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             id=\"text\"\n             name=\"text\"\n             placeholder=\"Text of the image\"\n             ngModel=\"{{widget.text}}\"\n             #text=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input type=\"text\"\n             id=\"url\"\n             name=\"url\"\n             placeholder=\"url of the image\"\n             ngModel=\"{{widget.url}}\"\n             required\n             #url=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!url.valid && url.touched\">URL can't be empty!</span>\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input type=\"text\"\n             id=\"width\"\n             name=\"width\"\n             placeholder=\"100%\"\n             ngModel=\"{{widget.width}}\"\n             required\n             #width=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!width.valid && width.touched\">Width can't be empty!</span>\n    <div>\n      <a class=\"btn btn-primary btn-block \"\n         routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/flickr\" >Choose From Flickr</a>\n      <br/>\n      <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\" type=\"file\" class=\"form-control\" required/>\n        <input  name=\"widgetId\" value=\"{{wgid}}\"   style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{wid}}\"   style=\"display: none\"/>\n        <input  name=\"pageId\" value=\"{{pid}}\"   style=\"display: none\"/>\n        <input  name=\"userId\" value=\"{{uid}}\"   style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      </form>\n    </div>\n    <br/>\n\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n           class=\"btn btn-warning btn-block\">Cancel</a>\n      </div>\n      <div class=\"col-xs-6\">\n        <a (click)=\"remove()\"\n           class=\"btn btn-danger btn-block\">Delete</a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            size: 0,
            text: ''
        };
    }
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.width = this.widgetForm.value.width;
        this.url = this.widgetForm.value.url;
        var updatedWidget = {
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.widget.pageId,
            width: this.width,
            url: this.url,
            text: this.text
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetImageComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "widgetForm", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Widget edit</b>\n    </a>\n    <button type=\"submit\"\n            [disabled]=\"!f.valid\"\n            form=\"widgetForm\"\n            class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok sw-text-black\"></span>\n    </button>\n  </div>\n</nav>\n\n<!--form-->\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\"\n        id=\"widgetForm\"\n        #f =\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"name\"\n             id=\"name\"\n             name=\"name\"\n             placeholder=\"Name of the widget\"\n             ngModel=\"{{widget.name}}\"\n             #name=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             id=\"text\"\n             name=\"text\"\n             placeholder=\"Text of the widget\"\n             ngModel=\"{{widget.text}}\"\n             required\n             #text=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"rows\">Rows</label>\n      <input type=\"number\"\n             id=\"rows\"\n             name=\"rows\"\n             placeholder=\"number of Rows\"\n             ngModel=\"{{widget.rows}}\"\n             required\n             #rows=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"placeholder\">Placeholder</label>\n      <input type=\"text\"\n             id=\"placeholder\"\n             name=\"placeholder\"\n             placeholder=\"placeholder\"\n             ngModel=\"{{widget.placeholder}}\"\n             required\n             #placeholder=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <input type=\"text\"\n               readonly\n               value=\"Formatted\"\n               class=\"form-control\"/>\n        <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\"\n               id=\"formatted\"\n               name=\"formatted\"\n               type=\"checkbox\"/>\n    </span>\n      </div>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!text.valid && text.touched\">Text can't be empty!</span>\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n           class=\"btn btn-warning btn-block\">Cancel</a>\n      </div>\n      <div class=\"col-xs-6\">\n        <a (click)=\"remove()\"\n           class=\"btn btn-danger btn-block\">Delete</a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            name: '',
            text: '',
            rows: 0,
            placeholder: '',
            formatted: false
        };
    }
    WidgetTextComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.rows = this.widgetForm.value.rows;
        this.placeholder = this.widgetForm.value.placeholder;
        this.formatted = this.widgetForm.value.formatted;
        var updatedWidget = {
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.widget.pageId,
            rows: this.rows,
            text: this.text,
            placeholder: this.placeholder,
            formatted: this.formatted
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetTextComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetTextComponent.prototype, "widgetForm", void 0);
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetTextComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Widget edit</b>\n    </a>\n    <button type=\"submit\"\n            [disabled]=\"!f.valid\"\n            form=\"widgetForm\"\n            class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok sw-text-black\"></span>\n    </button>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\"\n        id=\"widgetForm\"\n        #f =\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"name\"\n             id=\"name\"\n             name=\"name\"\n             placeholder=\"Name of the video\"\n             ngModel=\"{{widget.name}}\"\n             #name=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             id=\"text\"\n             name=\"text\"\n             placeholder=\"Text of the video\"\n             ngModel=\"{{widget.text}}\"\n             #text=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input type=\"text\"\n             id=\"url\"\n             name=\"url\"\n             placeholder=\"url of the video\"\n             ngModel=\"{{widget.url}}\"\n             required\n             #url=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!url.valid && url.touched\">URL can't be empty!</span>\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input type=\"text\"\n             id=\"width\"\n             name=\"width\"\n             placeholder=\"100%\"\n             ngModel=\"{{widget.width}}\"\n             required\n             #width=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block\"\n          *ngIf=\"!width.valid && width.touched\">Width can't be empty!</span>\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n           class=\"btn btn-warning btn-block\">Cancel</a>\n      </div>\n      <div class=\"col-xs-6\">\n        <a (click)=\"remove()\"\n           class=\"btn btn-danger btn-block\">Delete</a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            size: 0,
            text: ''
        };
    }
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.width = this.widgetForm.value.width;
        this.url = this.widgetForm.value.url;
        var updatedWidget = {
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.widget.pageId,
            width: this.width,
            url: this.url
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left sw-text-black\"></span>\n      </a>\n    </p>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"\n       class=\"pull-left navbar-brand thick\">\n      <b>Widgets</b>\n    </a>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"\n       class=\"navbar-link navbar-text pull-right sw-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus sw-text-black\"></span>\n    </a>\n  </div>\n</nav>\n\n<!--widget list-->\n<div class=\"container-fluid\"\n     appSortable>\n  <div *ngFor=\"let widget of widgets\">\n    <div>\n      <div class=\"sw-icon-right sw-icon-above\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <span class=\"glyphicon glyphicon-menu-hamburger sw-text-black\"></span>\n      </div>\n    </div>\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div [ngSwitch]=\"widget.size\">\n          <div *ngSwitchCase=\"1\">\n            <h1>{{widget.text}}</h1>\n          </div>\n          <div *ngSwitchCase=\"2\">\n            <h2>{{widget.text}}</h2>\n          </div>\n          <div *ngSwitchCase=\"3\">\n            <h3>{{widget.text}}</h3>\n          </div>\n          <div *ngSwitchCase=\"4\">\n            <h4>{{widget.text}}</h4>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div>\n          <img [style.width]=\"widget.width\"\n               [src]=\"widget.url\"/>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9 youtube-widget\">\n          <iframe [style.width]=\"widget.width\"\n                  [style.height]=\"widget.width\"\n                  [src]=\"this.getYoutubeEmbedUrl(widget.url)\"\n                  frameborder=\"0\"\n                  allowfullscreen></iframe>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'HTML'\">\n        <div [innerHTML]=\"widget.text\">\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'Text'\">\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n        </div>\n\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n               placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                  rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                  class=\"form-control\">{{widget.text}}</textarea>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid navbar-text pull-right\">\n    <a routerLink=\"/user\">\n      <span class=\"glyphicon glyphicon-user sw-icon-padding pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, router, sanitizer) {
        this.widgetService = widgetService;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.getYoutubeEmbedUrl = function (link) {
        var embedUrl = 'https://www.youtube.com/embed/';
        var parsedLink = link.split('/');
        embedUrl += parsedLink[parsedLink.length - 1];
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        var _this = this;
        this.widgetService.reorderWidgets(this.pid, indexes.startIndex, indexes.endIndex)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pid)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = '6c8dafa5dd3c1e8a136f3fb7b42488f3';
        this.secret = '89d075b312e56b18';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.put(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        var url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (response) {
            return response;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // returns the user in local users array whose _id matches the userId parameter
    UserService.prototype.findUserById = function (uid) {
        var url = this.baseUrl + '/api/user/' + uid;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    //  adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    //  returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the user in local users array whose _id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the user whose _id matches the userId parameter
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the website from local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (pageId, start, end) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + start + '&end=' + end;
        return this.http.put(url, '')
            .map(function (response) {
            return response.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map