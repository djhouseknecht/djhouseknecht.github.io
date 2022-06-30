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

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/spacer/spacer.component */ "./src/app/shared/components/spacer/spacer.component.ts");





class AboutComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('About · David Houseknecht');
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 29, vars: 0, consts: [[1, "standard-margin"], [1, "w-50"], [1, "image-and-quote"], [1, "box-200"], ["src", "/assets/mug-shot.jpeg", "alt", "david", "align", "left"], [1, "quote"], [1, "mt-3"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \"I love software, N.Y. style bagels, and wearing hats. I am constantly striving to improve who I am as a person, a husband, and a developer.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Passion for Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I am so thankful to have the opportunity to be a software developer. With new technologies constantly emerging, I am always eager to learn them while still honing in my skills of technologies I already have experience in. Working in an Agile Team environment is something that I highly value, as I enjoy learning from and teaching others. No matter what a developer\u2019s skill level, I believe that there is always something new to be learned. I thoroughly enjoy writing meaningful applications that are created with user experience at the forefront of design and development, and strive to continue this endeavor with all current and future projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Software Journey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " My first experience with development was data manipulation and SQL. Ever since then, I am always looking to learn more about backend development and database structures. In conjunction with backend development, I have developed a passion for writing user interfaces that are intuitive and enjoyable to use. I have such an appreciate for applications with quality design and good user experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Professional Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " My goals are to truly master data structures and code design in all areas of my development. I love learning new technologies, frameworks, and programming languages. Having expertise in data structures and code design helps reduce my learning curve when I get time to pick up something new. It will also help me in my goal to write quality, testable code. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Another goal I have is to become an expert in one or two programming languages which is why I am currently working towards my Java certifications through Oracle. Having a solid understanding of an Object Oriented Programming (OOP) language will translate to any programming language I get the opportunity to use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_2__["SpacerComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  padding: 0 16px;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    padding: 0;\n  }\n}\n[_nghost-%COMP%]   .image-and-quote[_ngcontent-%COMP%] {\n  display: flex;\n  \n}\n[_nghost-%COMP%]   .image-and-quote[_ngcontent-%COMP%]   .box-200[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin: 0;\n  flex: 0 0 200px;\n  align-self: center;\n  margin-right: 24px;\n}\n[_nghost-%COMP%]   .image-and-quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .image-and-quote[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-style: italic;\n  color: #9B9B9B;\n  align-self: center;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   .image-and-quote[_ngcontent-%COMP%] {\n    flex-flow: row wrap;\n    justify-content: center;\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .image-and-quote[_ngcontent-%COMP%]   .box-200[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdRLHlFQUFBO0FBQ0Esc0VBQUE7QUFKUiwyREFBQTtBQUVBLGlCQUFBO0FBSUEsc0NBQUE7QUEwQ0EsMkdBQUE7QUM3Q0E7RUFDQyxhQUFBO0VBQ0EsaUJBQUE7RUNXQSxlQUFBO0FDTkQ7QUNrREk7RUh6REo7SUNlRSxVQUFBO0VDSkE7QUFDRjtBRlBDO0VBQ0MsYUFBQTtFQXFCQSxzREFBQTtBRVhGO0FGVEU7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRVdIO0FGVEU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FFV0g7QUZURTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNETE07RUNNTixrQkFBQTtBRVdIO0FDbUNJO0VIakVIO0lBNEJFLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFRU1EO0VGWkM7SUFDQyxlQUFBO0lBQ0EsbUJBQUE7RUVjRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZXMgKi9cblxuLyogaW1wb3J0IGZvbnRzICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzo3MDAnKTtcblxuLyogcGxhY2UgY3VzdG9tIHZhcmlhYmxlcyBiZWxvdyBoZXJlICovXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiRmb250LXNpemU6IDIwcHg7XG5cbiRuYXZiYXItaGVpZ2h0OiAxMDJweDtcblxuJGJvbGQ6IDcwMDtcbiR3aGl0ZTogI0ZGRkZGRjtcblxuJGdyYXktMDogI0Y4RjhGODtcbiRncmF5LTE6ICNGM0YzRjM7XG4kZ3JheS0yOiAjRjFGMUYxO1xuJGdyYXktMzogI0RBREFEQTtcbiRncmF5LTQ6ICM5QjlCOUI7XG4kZ3JheS01OiAjNTk1OTU5O1xuJGdyYXktNjogIzIyMjIyMjtcblxuLy8gJHByaW1hcnk6ICMyNjI2MjY7IC8vIDE1JVxuLy8gJHByaW1hcnk6ICRncmF5LTY7ICAgIC8vIDEzJVxuJHByaW1hcnk6ICMxYTFhMWE7IC8vIDEwJVxuLy8gJHByaW1hcnk6ICMwZDBkMGQ7IC8vICA1JVxuLy8gJHByaW1hcnk6ICMwMDAwMDA7IC8vICAwJVxuXG4vLyAkc2Vjb25kYXJ5OiAjYzJjMmQ2O1xuJHNlY29uZGFyeTogIzAwZTZlNjtcblxuLy8gJHN1Y2Nlc3M6ICRncmVlbi0zO1xuLy8gJGluZm86ICRibHVlLTM7XG4vLyAkd2FybmluZzogJHllbGxvdy0xO1xuLy8gJGRhbmdlcjogJHJlZC0yO1xuLy8gJGJvZHktYmc6ICRncmF5LTE7XG4vLyAkYm9keS1jb2xvcjogJGdyYXktNTtcbi8vICRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTM7XG5cbiRlbmFibGUtcm91bmRlZDogZmFsc2U7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAuNTYyNXJlbTtcblxuXG5cbi8qIGltcG9ydCBib290c3RyYXAncyBmdW5jdGlvbnMsIHZhcmlhYmxlcywgYW5kIG1peGlucyAtIHRoZXNlIGNhbiBiZSB1c2VkIGFueXdoZXJlIHRoaXMgZmlsZSBpcyBpbXBvcnRlZCAqL1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vc2Nzcy90aGVtZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi9zY3NzL21peGluc1wiO1xuXG46aG9zdCB7IFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWZsb3c6IGNvbHVtbjtcblx0QGluY2x1ZGUgbW9iaWxlLXBhZGRpbmcoKTtcblxuXHQuaW1hZ2UtYW5kLXF1b3RlIHsgXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQuYm94LTIwMCB7IFxuXHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGZsZXg6IDAgMCAyMDBweDtcblx0XHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcdFx0XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDI0cHg7XG5cdFx0fVxuXHRcdGltZyB7IFxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXHRcdC5xdW90ZSB7IFxuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0Y29sb3I6ICRncmF5LTQ7XG5cdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0LyogZXh0cmEtc21hbGwgbW9iaWxlIGRldmljZXMgdG8gc3RhY2sgaW1nIGFuZCBxdW90ZSAqL1xuXHRcdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykgeyBcblx0XHRcdC5ib3gtMjAwIHsgXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMDsgXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHR9XG5cdFx0XHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXHR9XG59IiwiQG1peGluIGN1c3RvbS1mbGV4LWRpc3BsYXkoKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIHdpZHRoOiA4MCU7XG5cdH1cblx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhsKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtcGFkZGluZygpIHtcblx0cGFkZGluZzogMCAxNnB4O1xuXHRAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7IFxuXHRcdHBhZGRpbmc6IDA7XG5cdH1cbn1cbiIsIi8qIFRoaXMgZmlsZSBpcyB1c2VkIHRvIG92ZXJyaWRlIGRlZmF1bHQgYm9vdHN0cmFwIHRoZW1lcyAqL1xuLyogaW1wb3J0IGZvbnRzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzo3MDBcIik7XG4vKiBwbGFjZSBjdXN0b20gdmFyaWFibGVzIGJlbG93IGhlcmUgKi9cbi8qIGltcG9ydCBib290c3RyYXAncyBmdW5jdGlvbnMsIHZhcmlhYmxlcywgYW5kIG1peGlucyAtIHRoZXNlIGNhbiBiZSB1c2VkIGFueXdoZXJlIHRoaXMgZmlsZSBpcyBpbXBvcnRlZCAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG46aG9zdCAuaW1hZ2UtYW5kLXF1b3RlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZXh0cmEtc21hbGwgbW9iaWxlIGRldmljZXMgdG8gc3RhY2sgaW1nIGFuZCBxdW90ZSAqL1xufVxuOmhvc3QgLmltYWdlLWFuZC1xdW90ZSAuYm94LTIwMCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAwO1xuICBmbGV4OiAwIDAgMjAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuOmhvc3QgLmltYWdlLWFuZC1xdW90ZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuaW1hZ2UtYW5kLXF1b3RlIC5xdW90ZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzlCOUI5QjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIDpob3N0IC5pbWFnZS1hbmQtcXVvdGUge1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIDpob3N0IC5pbWFnZS1hbmQtcXVvdGUgLmJveC0yMDAge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");







const routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"] },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    // { path: '', component: HomeComponent },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | saw-saw-module */ "saw-saw-module").then(__webpack_require__.bind(null, /*! ./saw/saw.module */ "./src/app/saw/saw.module.ts")).then(m => m.SawModule) },
    { path: '**', redirectTo: '/' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/nav-bar/nav-bar.component */ "./src/app/shared/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "custom-layout"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n@media (min-width: 768px) {\n  .custom-layout[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    width: 80%;\n  }\n}\n@media (min-width: 992px) {\n  .custom-layout[_ngcontent-%COMP%] {\n    margin-left: 15%;\n    width: 70%;\n  }\n}\n@media (min-width: 1200px) {\n  .custom-layout[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR1EseUVBQUE7QUFDQSxzRUFBQTtBQUpSLDJEQUFBO0FBRUEsaUJBQUE7QUFJQSxzQ0FBQTtBQTBDQSwyR0FBQTtBQ1lJO0VDekRKO0lDREksZ0JBQUE7SUFDQSxVQUFBO0VDT0Y7QUFDRjtBSGlESTtFQ3pESjtJQ0dJLGdCQUFBO0lBQ0EsVUFBQTtFQ1NGO0FBQ0Y7QUgyQ0k7RUN6REo7SUNPSSxnQkFBQTtJQUNBLFVBQUE7RUNXRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaWxlIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib290c3RyYXAgdGhlbWVzICovXG5cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwJyk7XG5cbi8qIHBsYWNlIGN1c3RvbSB2YXJpYWJsZXMgYmVsb3cgaGVyZSAqL1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4kZm9udC1zaXplOiAyMHB4O1xuXG4kbmF2YmFyLWhlaWdodDogMTAycHg7XG5cbiRib2xkOiA3MDA7XG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRncmF5LTA6ICNGOEY4Rjg7XG4kZ3JheS0xOiAjRjNGM0YzO1xuJGdyYXktMjogI0YxRjFGMTtcbiRncmF5LTM6ICNEQURBREE7XG4kZ3JheS00OiAjOUI5QjlCO1xuJGdyYXktNTogIzU5NTk1OTtcbiRncmF5LTY6ICMyMjIyMjI7XG5cbi8vICRwcmltYXJ5OiAjMjYyNjI2OyAvLyAxNSVcbi8vICRwcmltYXJ5OiAkZ3JheS02OyAgICAvLyAxMyVcbiRwcmltYXJ5OiAjMWExYTFhOyAvLyAxMCVcbi8vICRwcmltYXJ5OiAjMGQwZDBkOyAvLyAgNSVcbi8vICRwcmltYXJ5OiAjMDAwMDAwOyAvLyAgMCVcblxuLy8gJHNlY29uZGFyeTogI2MyYzJkNjtcbiRzZWNvbmRhcnk6ICMwMGU2ZTY7XG5cbi8vICRzdWNjZXNzOiAkZ3JlZW4tMztcbi8vICRpbmZvOiAkYmx1ZS0zO1xuLy8gJHdhcm5pbmc6ICR5ZWxsb3ctMTtcbi8vICRkYW5nZXI6ICRyZWQtMjtcbi8vICRib2R5LWJnOiAkZ3JheS0xO1xuLy8gJGJvZHktY29sb3I6ICRncmF5LTU7XG4vLyAkaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zO1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogLjU2MjVyZW07XG5cblxuXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vc2Nzcy90aGVtZXNcIjtcbkBpbXBvcnQgXCIuLi9zY3NzL21peGluc1wiO1xuXG4uY3VzdG9tLWxheW91dCB7XG4gIEBpbmNsdWRlIGN1c3RvbS1mbGV4LWRpc3BsYXkoKTtcbn1cbiIsIkBtaXhpbiBjdXN0b20tZmxleC1kaXNwbGF5KCkge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB3aWR0aDogODAlO1xuXHR9XG5cdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXBhZGRpbmcoKSB7XG5cdHBhZGRpbmc6IDAgMTZweDtcblx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkgeyBcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG59XG4iLCIvKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZXMgKi9cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwXCIpO1xuLyogcGxhY2UgY3VzdG9tIHZhcmlhYmxlcyBiZWxvdyBoZXJlICovXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY3VzdG9tLWxheW91dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmN1c3RvbS1sYXlvdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY3VzdG9tLWxheW91dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/spacer/spacer.component */ "./src/app/shared/components/spacer/spacer.component.ts");





class ContactComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Contact · David Houseknecht');
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 12, vars: 0, consts: [[1, "standard-margin", "contact-content"], [1, "w-50"], [1, "mt-3"], ["href", "mailto:david.j.houseknecht@gmail.com", "target", "_blank", 1, "px-3"], [1, "fa", "fa-envelope"], ["href", "mailto:david.j.houseknecht@gmail.com", "target", "_blank"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSdfx9oII9W-CQq4Ufdn83eP3BAUEn25jeyBaTf7ODYbc0_UcQ/viewform?embedded=true", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I would love to hear from you about any possible opportunities or even just to chat. I love talking software! Send me an email or fill out the contact form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "david.j.houseknecht@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_2__["SpacerComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   div.contact-content[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   div.contact-content[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n[_nghost-%COMP%]   iframe[_ngcontent-%COMP%] {\n  min-height: 650px;\n  padding: 0 16px;\n  width: 100%;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   iframe[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR1EseUVBQUE7QUFDQSxzRUFBQTtBQUpSLDJEQUFBO0FBRUEsaUJBQUE7QUFJQSxzQ0FBQTtBQTBDQSwyR0FBQTtBQzdDQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNJRDtBREhDO0VFU0EsZUFBQTtBREhEO0FFK0NJO0VIckRIO0lFV0MsVUFBQTtFRERBO0FBQ0Y7QURSQztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNVRjtBRWtESTtFSC9ESDtJQUtFLFVBQUE7RUNZRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaWxlIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib290c3RyYXAgdGhlbWVzICovXG5cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwJyk7XG5cbi8qIHBsYWNlIGN1c3RvbSB2YXJpYWJsZXMgYmVsb3cgaGVyZSAqL1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4kZm9udC1zaXplOiAyMHB4O1xuXG4kbmF2YmFyLWhlaWdodDogMTAycHg7XG5cbiRib2xkOiA3MDA7XG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRncmF5LTA6ICNGOEY4Rjg7XG4kZ3JheS0xOiAjRjNGM0YzO1xuJGdyYXktMjogI0YxRjFGMTtcbiRncmF5LTM6ICNEQURBREE7XG4kZ3JheS00OiAjOUI5QjlCO1xuJGdyYXktNTogIzU5NTk1OTtcbiRncmF5LTY6ICMyMjIyMjI7XG5cbi8vICRwcmltYXJ5OiAjMjYyNjI2OyAvLyAxNSVcbi8vICRwcmltYXJ5OiAkZ3JheS02OyAgICAvLyAxMyVcbiRwcmltYXJ5OiAjMWExYTFhOyAvLyAxMCVcbi8vICRwcmltYXJ5OiAjMGQwZDBkOyAvLyAgNSVcbi8vICRwcmltYXJ5OiAjMDAwMDAwOyAvLyAgMCVcblxuLy8gJHNlY29uZGFyeTogI2MyYzJkNjtcbiRzZWNvbmRhcnk6ICMwMGU2ZTY7XG5cbi8vICRzdWNjZXNzOiAkZ3JlZW4tMztcbi8vICRpbmZvOiAkYmx1ZS0zO1xuLy8gJHdhcm5pbmc6ICR5ZWxsb3ctMTtcbi8vICRkYW5nZXI6ICRyZWQtMjtcbi8vICRib2R5LWJnOiAkZ3JheS0xO1xuLy8gJGJvZHktY29sb3I6ICRncmF5LTU7XG4vLyAkaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zO1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogLjU2MjVyZW07XG5cblxuXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuIiwiQGltcG9ydCBcIi4uLy4uL3Njc3MvdGhlbWVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuOmhvc3QgeyBcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRkaXYuY29udGFjdC1jb250ZW50IHsgXG5cdFx0QGluY2x1ZGUgbW9iaWxlLXBhZGRpbmcoKTtcblx0fSBcblx0aWZyYW1lIHsgXG5cdFx0bWluLWhlaWdodDogNjUwcHg7XG5cdFx0cGFkZGluZzogMCAxNnB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykgeyBcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0fVxuXHR9XG59IiwiLyogVGhpcyBmaWxlIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib290c3RyYXAgdGhlbWVzICovXG4vKiBpbXBvcnQgZm9udHMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vOjcwMFwiKTtcbi8qIHBsYWNlIGN1c3RvbSB2YXJpYWJsZXMgYmVsb3cgaGVyZSAqL1xuLyogaW1wb3J0IGJvb3RzdHJhcCdzIGZ1bmN0aW9ucywgdmFyaWFibGVzLCBhbmQgbWl4aW5zIC0gdGhlc2UgY2FuIGJlIHVzZWQgYW55d2hlcmUgdGhpcyBmaWxlIGlzIGltcG9ydGVkICovXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IGRpdi5jb250YWN0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgZGl2LmNvbnRhY3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuOmhvc3QgaWZyYW1lIHtcbiAgbWluLWhlaWdodDogNjUwcHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgOmhvc3QgaWZyYW1lIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59IiwiQG1peGluIGN1c3RvbS1mbGV4LWRpc3BsYXkoKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIHdpZHRoOiA4MCU7XG5cdH1cblx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhsKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtcGFkZGluZygpIHtcblx0cGFkZGluZzogMCAxNnB4O1xuXHRAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7IFxuXHRcdHBhZGRpbmc6IDA7XG5cdH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/nav-bar/nav-bar.component */ "./src/app/shared/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/spacer/spacer.component */ "./src/app/shared/components/spacer/spacer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");








const _c0 = function () { return ["/about"]; };
const _c1 = function () { return ["/resume"]; };
const _c2 = function () { return ["/contact"]; };
class HomeComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('David Houseknecht');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 68, vars: 6, consts: [[1, "custom-layout"], [1, "standard-margin"], [1, "w-50"], [1, "mb-3"], ["href", "https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_333", "target", "_blank"], [1, "mb2"], [1, "standard-margin", "nav-menu"], ["routerLinkActive", "active", 1, "item", 3, "routerLink"], ["src", "/assets/info-icon.png", "alt", "info", "height", "50px", "width", "50px"], ["src", "/assets/resume-icon.png", "alt", "resume", "height", "60px", "width", "60px", 2, "margin-bottom", "6px"], [1, "fa", "fa-envelope", "fa-3x"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "/assets/christmas-with-deanne.jpg", "alt", "david and deanne", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "/assets/graduation-with-trey.jpg", "alt", "graduation", 1, "d-block", "w-100"], ["src", "/assets/hiking-sharp-top.jpg", "alt", "hiking", 1, "d-block", "w-100"], ["src", "/assets/hangin-with-the-in-laws.jpg", "alt", "hanging with the in-laws", 1, "d-block", "w-100"], ["src", "/assets/smoker-with-matt.jpg", "alt", "smoking", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "David Houseknecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " My name is David Houseknecht. I am a full stack developer at Liberty University with 3 years coding experience. The current half of my experience has been developing enterprise level web applications for over 100,000 users consisting of university students, faculty, staff, and community members. Recently I earned my Java SE 8 Programmer I certificate through Oracle's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OCA exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Checkout my site to get to know me a little bit! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Learn more about me and who I am as a developer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Check out my experience and download my resume.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact me with any opportunities or questions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ol", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Christmas with my lovely wife, Deanne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Graduation day with my friend, Trey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sharp Top in the Blue Ridge Mountains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Downtown Lynchburg with some of my in-laws");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Smoking a brisket with my brother-in-law");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__["SpacerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    padding: 0;\n  }\n}\n[_nghost-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  \n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n}\n[_nghost-%COMP%]   .nav-menu[_ngcontent-%COMP%]    > a.item[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 290px;\n  width: 75%;\n  max-width: 450px;\n  padding: 1.5rem 0.75rem;\n  margin: 0.25rem;\n  border: 2px solid #9B9B9B;\n  text-align: center;\n  text-decoration: none;\n  font-style: italic;\n  color: #9B9B9B;\n  font-size: 18px;\n}\n@media (min-width: 576px) {\n  [_nghost-%COMP%]   .nav-menu[_ngcontent-%COMP%]    > a.item[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n[_nghost-%COMP%]   .nav-menu[_ngcontent-%COMP%]    > a.item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-menu[_ngcontent-%COMP%]    > a.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  margin: 0.5rem;\n}\n[_nghost-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: #F1F1F1;\n  text-shadow: -1px -1px 0 #595959, 1px -1px 0 #595959, -1px 1px 0 #595959, 1px 1px 0 #595959;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZGpob3VzZWtuZWNodC9kZXYvZGpob3VzZWtuZWNodC9kamhvdXNla25lY2h0LmdpdGh1Yi5pby9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR1EseUVBQUE7QUFDQSxzRUFBQTtBQUpSLDJEQUFBO0FBRUEsaUJBQUE7QUFJQSxzQ0FBQTtBQTBDQSwyR0FBQTtBQzdDQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQ1dBLGVBQUE7QUNORDtBQ2tESTtFSHpESjtJQ2VFLFVBQUE7RUNKQTtBQUNGO0FGUEM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7QUVRRjtBQ3NDSTtFSHBESDtJQVFFLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFRVVEO0FBQ0Y7QUZSRTtFQUNDLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBRUEseUJBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRGxCTTtFQ21CTixlQUFBO0FFT0g7QUNhSTtFSHZDRjtJQVNvQyxZQUFBO0VFcUJwQztBQUNGO0FGVkc7RUFDQyxjRGhCTTtFQ2lCTixjQUFBO0FFWUo7QUZQRTtFQUNDLG9CRC9CTTtFQ2dDTiwyRkFDQztBRVFKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaWxlIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib290c3RyYXAgdGhlbWVzICovXG5cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwJyk7XG5cbi8qIHBsYWNlIGN1c3RvbSB2YXJpYWJsZXMgYmVsb3cgaGVyZSAqL1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4kZm9udC1zaXplOiAyMHB4O1xuXG4kbmF2YmFyLWhlaWdodDogMTAycHg7XG5cbiRib2xkOiA3MDA7XG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRncmF5LTA6ICNGOEY4Rjg7XG4kZ3JheS0xOiAjRjNGM0YzO1xuJGdyYXktMjogI0YxRjFGMTtcbiRncmF5LTM6ICNEQURBREE7XG4kZ3JheS00OiAjOUI5QjlCO1xuJGdyYXktNTogIzU5NTk1OTtcbiRncmF5LTY6ICMyMjIyMjI7XG5cbi8vICRwcmltYXJ5OiAjMjYyNjI2OyAvLyAxNSVcbi8vICRwcmltYXJ5OiAkZ3JheS02OyAgICAvLyAxMyVcbiRwcmltYXJ5OiAjMWExYTFhOyAvLyAxMCVcbi8vICRwcmltYXJ5OiAjMGQwZDBkOyAvLyAgNSVcbi8vICRwcmltYXJ5OiAjMDAwMDAwOyAvLyAgMCVcblxuLy8gJHNlY29uZGFyeTogI2MyYzJkNjtcbiRzZWNvbmRhcnk6ICMwMGU2ZTY7XG5cbi8vICRzdWNjZXNzOiAkZ3JlZW4tMztcbi8vICRpbmZvOiAkYmx1ZS0zO1xuLy8gJHdhcm5pbmc6ICR5ZWxsb3ctMTtcbi8vICRkYW5nZXI6ICRyZWQtMjtcbi8vICRib2R5LWJnOiAkZ3JheS0xO1xuLy8gJGJvZHktY29sb3I6ICRncmF5LTU7XG4vLyAkaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zO1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogLjU2MjVyZW07XG5cblxuXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuIiwiQGltcG9ydCBcIi4uLy4uL3Njc3MvdGhlbWVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuOmhvc3QgeyBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0QGluY2x1ZGUgbW9iaWxlLXBhZGRpbmcoKTtcblxuXHQubmF2LW1lbnUgeyBcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdC8qIGRlc2t0b3Agc3R5bGVzICovIFxuXHRcdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHsgXG5cdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0XHR9XG5cblx0XHQmID4gYS5pdGVtIHsgXG5cdFx0XHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdG1pbi13aWR0aDogMjkwcHg7XG5cdFx0XHR3aWR0aDogNzUlO1xuXHRcdFx0bWF4LXdpZHRoOiA0NTBweDtcblx0XHRcdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHsgbWluLXdpZHRoOiAwOyB9XG5cdFx0XHRwYWRkaW5nOiAxLjVyZW0gLjc1cmVtO1xuXHRcdFx0bWFyZ2luOiAuMjVyZW07XG5cdFx0XHRcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICRncmF5LTQ7XG5cdFx0XHRcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0XHRcdGNvbG9yOiAkZ3JheS00O1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXG5cdFx0XHRpLCBpbWcgeyBcblx0XHRcdFx0Y29sb3I6ICRwcmltYXJ5O1xuXHRcdFx0XHRtYXJnaW46IC41cmVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuY2Fyb3VzZWwtY2FwdGlvbiB7IFxuXHRcdGg1IHsgXG5cdFx0XHRmb250LXdlaWdodDogJGdyYXktMjtcblx0XHRcdHRleHQtc2hhZG93OiBcblx0XHRcdFx0LTFweCAtMXB4IDAgJGdyYXktNSxcblx0XHRcdFx0MXB4IC0xcHggMCAkZ3JheS01LFxuXHRcdFx0XHQtMXB4IDFweCAwICRncmF5LTUsXG5cdFx0XHRcdDFweCAxcHggMCAkZ3JheS01O1xuXHRcdH1cblx0fVxufSIsIkBtaXhpbiBjdXN0b20tZmxleC1kaXNwbGF5KCkge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB3aWR0aDogODAlO1xuXHR9XG5cdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXBhZGRpbmcoKSB7XG5cdHBhZGRpbmc6IDAgMTZweDtcblx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkgeyBcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG59XG4iLCIvKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZXMgKi9cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwXCIpO1xuLyogcGxhY2UgY3VzdG9tIHZhcmlhYmxlcyBiZWxvdyBoZXJlICovXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG46aG9zdCAubmF2LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogZGVza3RvcCBzdHlsZXMgKi9cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAubmF2LW1lbnUge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbn1cbjpob3N0IC5uYXYtbWVudSA+IGEuaXRlbSB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMjkwcHg7XG4gIHdpZHRoOiA3NSU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIHBhZGRpbmc6IDEuNXJlbSAwLjc1cmVtO1xuICBtYXJnaW46IDAuMjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5QjlCOUI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3QgLm5hdi1tZW51ID4gYS5pdGVtIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbn1cbjpob3N0IC5uYXYtbWVudSA+IGEuaXRlbSBpLCA6aG9zdCAubmF2LW1lbnUgPiBhLml0ZW0gaW1nIHtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuOmhvc3QgLmNhcm91c2VsLWNhcHRpb24gaDUge1xuICBmb250LXdlaWdodDogI0YxRjFGMTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICM1OTU5NTksIDFweCAtMXB4IDAgIzU5NTk1OSwgLTFweCAxcHggMCAjNTk1OTU5LCAxcHggMXB4IDAgIzU5NTk1OTtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/spacer/spacer.component */ "./src/app/shared/components/spacer/spacer.component.ts");





class ResumeComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Resume · David Houseknecht');
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 219, vars: 0, consts: [[1, "standard-margin", "resume-download"], [1, "w-50"], ["href", "/assets/David Houseknecht Resume (3.13.19).pdf", "target", "_blank", 1, "btn", "btn-primary", "font-weight-bold"], ["href", "https://www.linkedin.com/in/david-houseknecht/", "target", "_blank", 1, "font-weight-bold"], [1, "mt-3"], ["href", "https://www.github.com/djhouseknecht", "target", "_blank", 1, "font-weight-bold"], [1, "standard-margin"], [1, "mb-3"], ["href", "https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_333", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/JavaScript", "target", "_blank"], ["href", "https://angular.io/", "target", "_blank"], ["href", "https://aurelia.io/", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/Java", "target", "_blank"], ["href", "https://spring.io/", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/PHP", "target", "_blank"], ["href", "https://laravel.com/", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/PL/SQL", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/MySQL", "target", "_blank"], ["href", "https://docs.docker.com/", "target", "_blank"], ["href", "https://rxjs.dev/", "target", "_blank"], ["href", "https://jasmine.github.io/", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/HTML5", "target", "_blank"], ["href", "https://en.wikipedia.org/wiki/Cascading_Style_Sheets", "target", "_blank"], ["href", "https://sass-lang.com/", "target", "_blank"], ["href", "https://www.atlassian.com/software/bamboo", "target", "_blank"], ["href", "https://www.openshift.com/", "target", "_blank"], ["href", "https://git-scm.com/", "target", "_blank"], ["href", "https://www.ubuntu.com/", "target", "_blank"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Download my resume, check out my experience, and see what skills I would love to learn! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You can learn more about the projects I have worked on by going to my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " account and scrolling to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Accomplishments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " section. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Feel free to check out my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " account as well. It's not as verbose as I would like. There are a few ideas for projects floating around in my head, but I just haven't had the time to start them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "My Technology Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I am a full stack developer at Liberty University with 3 years coding experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ". The current half of my experience has been developing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "enterprise level web applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " for over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "100,000 users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " consisting of university students, faculty, staff, and community members. Recently I earned my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Java SE 8 Programmer I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " certificate through Oracle's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "OCA exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Here are some technologies I use on a regular basis: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " with specializations in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Aurelia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " frameworks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Java Spring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " framework for writing RESTful APIs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Laravel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " framework for writing RESTful APIs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "PL/SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " databases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " containers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " library for handling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "asynchronous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " JavaScript code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Jasmine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " framework for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "unit testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " JavaScript code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ", and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " preprocessor to create mobile responsive web applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Bamboo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " build plans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Working knowledge of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "OpenShift");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " deployment platform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " command line client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Ubuntu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " flavor of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " operating system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Professional Highlights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Below are some of my strengths, highlights, and achievements: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Earned the my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Oracle Certified Associate (OCA) in Java SE 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " certificate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Develop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "RESTful APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " to be consumed by a web client via HTTP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Write ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "User Interfaces (UI)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Single Page Applications (SPAs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " to consume data from RESTful APIs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Passionate about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "User Experience (UX)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " when developing applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Implement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Continuous Integration and Continuous Deployment (CI/CD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " through comprehensive build plans and pipelines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Have experience using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " containers to build and test applications\u2019 code base ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Work in an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Agile Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " environment with consistent collaboration and learning from each other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Wrote a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "dynamic, custom search function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " that spanned across multiple tables and used weights and hits to determine the most relevant results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Skills I Want To Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "app-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " A few skills I would really like to learn more about are: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Swift and iOS Development:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " I have always wanted to get into mobile development, and I enjoy using my iPhone. Also, my experience in frontend development has given me a great appreciation for user experience (UX). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Node.js:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " I am familiar with JavaScript and backend development. I would really enjoy getting to develop backends using Node. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "DevOps:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " I currently use Docker, Atlassian\u2019s Bamboo build server, and RedHat\u2019s OpenShift deployment platform to write build plans that test and deploy applications. I want to have a deeper understanding of DevOps by fine tuning my skills of servers and deployment processes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "NoSQL Data Structures:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " I have worked with Google\u2019s Firebase platform a little bit for a school project. I think NoSQL schemas are really powerful. I think learning more about NoSQL data structures would be extremely fun experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "More Testing:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " I have a pretty solid grasp on testing right now as I currently write unit tests for any code I develop. I want to dive more into all the aspects of testing like: end-to-end testing, integration testing, and load testing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " I am always eager to learn about new technologies. However, I also really enjoy solidifying my knowledge and skill of technologies I already have experience in. I believe a developer always has something new to learn regardless of their experience level.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_2__["SpacerComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px;\n  padding: 0 16px;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    padding: 0;\n  }\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:not(.btn) {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):visited {\n  color: #595959;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):hover {\n  color: #9B9B9B;\n}\n[_nghost-%COMP%]   div.resume-download[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   div.resume-download[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  margin: 32px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZGpob3VzZWtuZWNodC9kZXYvZGpob3VzZWtuZWNodC9kamhvdXNla25lY2h0LmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHUSx5RUFBQTtBQUNBLHNFQUFBO0FBSlIsMkRBQUE7QUFFQSxpQkFBQTtBQUlBLHNDQUFBO0FBMENBLDJHQUFBO0FDN0NBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQ1VBLGVBQUE7QUNMRDtBQ2lESTtFSHpESjtJQ2VFLFVBQUE7RUNIQTtBQUNGO0FGUEM7RUFDQywwQkFBQTtBRVNGO0FGUkU7RUFDQyxjRFVNO0FHQVQ7QUZSRTtFQUNDLGNETU07QUdJVDtBRk5DO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FFUUY7QUZQRTtFQUNDLGlCQUFBO0FFU0giLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaWxlIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib290c3RyYXAgdGhlbWVzICovXG5cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwJyk7XG5cbi8qIHBsYWNlIGN1c3RvbSB2YXJpYWJsZXMgYmVsb3cgaGVyZSAqL1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4kZm9udC1zaXplOiAyMHB4O1xuXG4kbmF2YmFyLWhlaWdodDogMTAycHg7XG5cbiRib2xkOiA3MDA7XG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRncmF5LTA6ICNGOEY4Rjg7XG4kZ3JheS0xOiAjRjNGM0YzO1xuJGdyYXktMjogI0YxRjFGMTtcbiRncmF5LTM6ICNEQURBREE7XG4kZ3JheS00OiAjOUI5QjlCO1xuJGdyYXktNTogIzU5NTk1OTtcbiRncmF5LTY6ICMyMjIyMjI7XG5cbi8vICRwcmltYXJ5OiAjMjYyNjI2OyAvLyAxNSVcbi8vICRwcmltYXJ5OiAkZ3JheS02OyAgICAvLyAxMyVcbiRwcmltYXJ5OiAjMWExYTFhOyAvLyAxMCVcbi8vICRwcmltYXJ5OiAjMGQwZDBkOyAvLyAgNSVcbi8vICRwcmltYXJ5OiAjMDAwMDAwOyAvLyAgMCVcblxuLy8gJHNlY29uZGFyeTogI2MyYzJkNjtcbiRzZWNvbmRhcnk6ICMwMGU2ZTY7XG5cbi8vICRzdWNjZXNzOiAkZ3JlZW4tMztcbi8vICRpbmZvOiAkYmx1ZS0zO1xuLy8gJHdhcm5pbmc6ICR5ZWxsb3ctMTtcbi8vICRkYW5nZXI6ICRyZWQtMjtcbi8vICRib2R5LWJnOiAkZ3JheS0xO1xuLy8gJGJvZHktY29sb3I6ICRncmF5LTU7XG4vLyAkaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zO1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogLjU2MjVyZW07XG5cblxuXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuIiwiQGltcG9ydCBcIi4uLy4uL3Njc3MvdGhlbWVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuOmhvc3QgeyBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMCAxNnB4O1xuXHRAaW5jbHVkZSBtb2JpbGUtcGFkZGluZygpO1xuXG5cdGE6bm90KC5idG4pIHsgXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0Jjp2aXNpdGVkIHsgXG5cdFx0XHRjb2xvcjogJGdyYXktNTtcblx0XHR9XG5cdFx0Jjpob3ZlciB7IFxuXHRcdFx0Y29sb3I6ICRncmF5LTQ7XG5cdFx0fVxuXHR9XG5cblx0ZGl2LnJlc3VtZS1kb3dubG9hZCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdCYgPiBhIHsgXG5cdFx0XHRtYXJnaW46IDMycHggYXV0bztcblx0XHR9XG5cdH1cdFxufSIsIkBtaXhpbiBjdXN0b20tZmxleC1kaXNwbGF5KCkge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB3aWR0aDogODAlO1xuXHR9XG5cdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXBhZGRpbmcoKSB7XG5cdHBhZGRpbmc6IDAgMTZweDtcblx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkgeyBcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG59XG4iLCIvKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZXMgKi9cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwXCIpO1xuLyogcGxhY2UgY3VzdG9tIHZhcmlhYmxlcyBiZWxvdyBoZXJlICovXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbjpob3N0IGE6bm90KC5idG4pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG46aG9zdCBhOm5vdCguYnRuKTp2aXNpdGVkIHtcbiAgY29sb3I6ICM1OTU5NTk7XG59XG46aG9zdCBhOm5vdCguYnRuKTpob3ZlciB7XG4gIGNvbG9yOiAjOUI5QjlCO1xufVxuOmhvc3QgZGl2LnJlc3VtZS1kb3dubG9hZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBkaXYucmVzdW1lLWRvd25sb2FkID4gYSB7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class FooterComponent {
    constructor() {
        this.today = new Date();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 4, consts: [[1, "footer-content"], [1, "mb-1"], ["href", "mailto:david.j.houseknecht@gmail.com", "target", "_blank", 1, "extra-x-padding"], [1, "fa", "fa-envelope", "fa-2x"], ["href", "https://www.linkedin.com/in/david-houseknecht/", "target", "_blank", 1, "extra-x-padding", "bars"], [1, "fa", "fa-linkedin", "fa-2x"], ["href", "https://github.com/djhouseknecht", "target", "_blank", 1, "extra-x-padding"], [1, "fa", "fa-github", "fa-2x"], [1, "pt-3"], ["href", "https://angular.io/", "target", "_blank"], ["href", "https://getbootstrap.com/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Built using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 1, ctx.today, "yyyy"), " | David Houseknecht ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background-color: #F8F8F8;\n  border-top: 1px solid #F1F1F1;\n  width: 100%;\n  padding: 60px 0;\n  margin-top: 24px;\n}\n[_nghost-%COMP%]   div.footer-content[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   div.footer-content[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    width: 80%;\n  }\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   div.footer-content[_ngcontent-%COMP%] {\n    margin-left: 15%;\n    width: 70%;\n  }\n}\n@media (min-width: 1200px) {\n  [_nghost-%COMP%]   div.footer-content[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    width: 50%;\n  }\n}\n[_nghost-%COMP%]   div.footer-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   .extra-x-padding[_ngcontent-%COMP%] {\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n}\n@media (min-width: 576px) {\n  [_nghost-%COMP%]   .extra-x-padding[_ngcontent-%COMP%] {\n    padding-right: 1.8rem;\n    padding-left: 1.8rem;\n  }\n}\n[_nghost-%COMP%]   .bars[_ngcontent-%COMP%] {\n  border-left: 1px solid #595959;\n  border-right: 1px solid #595959;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHUSx5RUFBQTtBQUNBLHNFQUFBO0FBSlIsMkRBQUE7QUFFQSxpQkFBQTtBQUlBLHNDQUFBO0FBMENBLDJHQUFBO0FDNUNDO0VBQ0MsaUJBQUE7RUFDQSx5QkRXTztFQ1ZQLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dGO0FEREM7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7QUNFRjtBQzJDSTtFRmhESDtJR1ZHLGdCQUFBO0lBQ0EsVUFBQTtFRm1CRjtBQUNGO0FDcUNJO0VGaERIO0lHTkcsZ0JBQUE7SUFDQSxVQUFBO0VGcUJGO0FBQ0Y7QUMrQkk7RUZoREg7SUdGRyxnQkFBQTtJQUNBLFVBQUE7RUZ1QkY7QUFDRjtBRG5CRTtFQUNDLHFCQUFBO0FDcUJIO0FEbEJDO0VBQ0MscUJBQUE7RUFDQSxvQkFBQTtBQ29CRjtBQ2tCSTtFRnhDSDtJQUlFLHFCQUFBO0lBQ0Esb0JBQUE7RUNzQkQ7QUFDRjtBRHBCQztFQUNDLDhCQUFBO0VBQ0EsK0JBQUE7QUNzQkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaWxlIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib290c3RyYXAgdGhlbWVzICovXG5cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwJyk7XG5cbi8qIHBsYWNlIGN1c3RvbSB2YXJpYWJsZXMgYmVsb3cgaGVyZSAqL1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4kZm9udC1zaXplOiAyMHB4O1xuXG4kbmF2YmFyLWhlaWdodDogMTAycHg7XG5cbiRib2xkOiA3MDA7XG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRncmF5LTA6ICNGOEY4Rjg7XG4kZ3JheS0xOiAjRjNGM0YzO1xuJGdyYXktMjogI0YxRjFGMTtcbiRncmF5LTM6ICNEQURBREE7XG4kZ3JheS00OiAjOUI5QjlCO1xuJGdyYXktNTogIzU5NTk1OTtcbiRncmF5LTY6ICMyMjIyMjI7XG5cbi8vICRwcmltYXJ5OiAjMjYyNjI2OyAvLyAxNSVcbi8vICRwcmltYXJ5OiAkZ3JheS02OyAgICAvLyAxMyVcbiRwcmltYXJ5OiAjMWExYTFhOyAvLyAxMCVcbi8vICRwcmltYXJ5OiAjMGQwZDBkOyAvLyAgNSVcbi8vICRwcmltYXJ5OiAjMDAwMDAwOyAvLyAgMCVcblxuLy8gJHNlY29uZGFyeTogI2MyYzJkNjtcbiRzZWNvbmRhcnk6ICMwMGU2ZTY7XG5cbi8vICRzdWNjZXNzOiAkZ3JlZW4tMztcbi8vICRpbmZvOiAkYmx1ZS0zO1xuLy8gJHdhcm5pbmc6ICR5ZWxsb3ctMTtcbi8vICRkYW5nZXI6ICRyZWQtMjtcbi8vICRib2R5LWJnOiAkZ3JheS0xO1xuLy8gJGJvZHktY29sb3I6ICRncmF5LTU7XG4vLyAkaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zO1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogLjU2MjVyZW07XG5cblxuXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvdGhlbWVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuOmhvc3QgeyBcblx0Zm9vdGVyIHsgXG5cdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS0wO1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JheS0yO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDYwcHggMDtcblx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXHR9XG5cdGRpdi5mb290ZXItY29udGVudCB7IFxuXHRcdEBpbmNsdWRlIGN1c3RvbS1mbGV4LWRpc3BsYXkoKTtcblx0XHRwYWRkaW5nOiAwIDE2cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGEgeyBcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR9XG5cdH1cblx0LmV4dHJhLXgtcGFkZGluZyB7IFxuXHRcdHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcblx0XHRwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcblx0XHRAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7IFxuXHRcdFx0cGFkZGluZy1yaWdodDogMS44cmVtO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAxLjhyZW07XG5cdFx0fVxuXHR9XG5cdC5iYXJzIHsgXG5cdFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkZ3JheS01O1xuXHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmF5LTU7XG5cdH1cbn0iLCIvKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZXMgKi9cbi8qIGltcG9ydCBmb250cyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwXCIpO1xuLyogcGxhY2UgY3VzdG9tIHZhcmlhYmxlcyBiZWxvdyBoZXJlICovXG4vKiBpbXBvcnQgYm9vdHN0cmFwJ3MgZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBtaXhpbnMgLSB0aGVzZSBjYW4gYmUgdXNlZCBhbnl3aGVyZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQgKi9cbjpob3N0IGZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0YxRjFGMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbjpob3N0IGRpdi5mb290ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IGRpdi5mb290ZXItY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOmhvc3QgZGl2LmZvb3Rlci1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOmhvc3QgZGl2LmZvb3Rlci1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbjpob3N0IGRpdi5mb290ZXItY29udGVudCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgLmV4dHJhLXgtcGFkZGluZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3QgLmV4dHJhLXgtcGFkZGluZyB7XG4gICAgcGFkZGluZy1yaWdodDogMS44cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS44cmVtO1xuICB9XG59XG46aG9zdCAuYmFycyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzU5NTk1OTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU5NTk1OTtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBjdXN0b20tZmxleC1kaXNwbGF5KCkge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB3aWR0aDogODAlO1xuXHR9XG5cdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXBhZGRpbmcoKSB7XG5cdHBhZGRpbmc6IDAgMTZweDtcblx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkgeyBcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/nav-bar/nav-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/nav-bar/nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["dropdownOptions"];
const _c1 = ["dropdownHamburger"];
function NavBarComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NavBarComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c2 = function () { return ["/about"]; };
const _c3 = function () { return ["/resume"]; };
const _c4 = function () { return ["/contact"]; };
function NavBarComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_20_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_20_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_20_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_20_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
} }
const _c5 = function () { return ["/"]; };
const _c6 = function (a0) { return { show: a0 }; };
class NavBarComponent {
    constructor() {
        this.collapsed = true;
    }
    /* event listener to close the dropdown-menu if clicked out of it */
    clickout(event) {
        if (this.dropdownHamburger.nativeElement.contains(event.target)) {
            return;
        }
        if (!this.dropdownOptions.nativeElement.contains(event.target)) {
            this.collapsed = true;
        }
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], viewQuery: function NavBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownOptions = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownHamburger = _t.first);
    } }, hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 22, vars: 7, consts: [[1, "brand"], [1, "brand", 3, "routerLink"], [1, "d-inline", "d-sm-none"], [1, "d-none", "d-sm-inline"], [1, "smaller-text"], [1, "separator"], [1, "d-block", "d-md-none"], [1, "hamburger", 3, "click"], ["dropdownHamburger", ""], ["aria-hidden", "true", 1, "fa", "fa-bars", "fa-custom"], [1, "dropdown-options", 3, "ngClass"], ["dropdownOptions", ""], [4, "ngTemplateOutlet"], [1, "d-none", "d-md-block"], ["navOptions", ""], ["routerLinkActive", "active", 3, "routerLink", "click"], ["href", "https://www.linkedin.com/in/david-houseknecht/", "target", "_blank", 3, "click"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://github.com/djhouseknecht", "target", "_blank", 3, "click"], [1, "fa", "fa-github", "fa-lg"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "D. Houseknecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "David Houseknecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_div_click_12_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavBarComponent_ng_container_17_Template, 1, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavBarComponent_ng_container_19_Template, 1, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavBarComponent_ng_template_20_Template, 10, 6, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, !ctx.collapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n[_nghost-%COMP%] {\n  \n  height: 102px;\n  width: 100%;\n  background-color: #1a1a1a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #FFFFFF;\n  \n  \n  \n  \n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #DADADA;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 0 16px;\n  line-height: auto;\n}\n[_nghost-%COMP%]   a.active[_ngcontent-%COMP%], [_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFFFFF;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .fa-custom[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n[_nghost-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  border: 1px solid #DADADA;\n  margin: 0 16px;\n  padding: 9px 12px 6px;\n  color: #DADADA;\n}\n[_nghost-%COMP%]   .hamburger[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #FFFFFF;\n  border: 1px solid #FFFFFF;\n}\n[_nghost-%COMP%]   .dropdown-options[_ngcontent-%COMP%] {\n  height: 0;\n  display: none;\n}\n[_nghost-%COMP%]   .dropdown-options.show[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  min-width: 184px;\n  width: auto;\n  height: auto;\n  background-color: #FFFFFF;\n  border: 1px solid #DADADA;\n  right: 16px;\n  padding: 16px;\n}\n[_nghost-%COMP%]   .dropdown-options.show[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  display: block;\n  padding: 8px 16px;\n}\n[_nghost-%COMP%]   .dropdown-options.show[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .dropdown-options.show[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #595959;\n}\n[_nghost-%COMP%]   .brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 700;\n  font-size: 28px;\n  padding: 0 16px;\n  \n}\n[_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   a.brand[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   div.smaller-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   div.smaller-text[_ngcontent-%COMP%]   div.separator[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (min-width: 930px) {\n  [_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   div.smaller-text[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  [_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   div.smaller-text[_ngcontent-%COMP%]   div.separator[_ngcontent-%COMP%] {\n    display: inline;\n    padding: 0 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR1EseUVBQUE7QUFDQSxzRUFBQTtBQUpSLDJEQUFBO0FBRUEsaUJBQUE7QUFJQSxzQ0FBQTtBQTBDQSwyR0FBQTtBQzlDQTtFQUNDLFlBQUE7RUFDQSxhRFFlO0VDUGYsV0FBQTtFQUNBLHlCRHFCUztFQ3BCVCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNES087RUNIUCxVQUFBO0VBYUEsbUJBQUE7RUFjQSwwQkFBQTtFQTBCQSxVQUFBO0FDOUNEO0FETkM7RUFDQyxjRE1PO0VDTFAsZUFBQTtFQUNBLGdCREZLO0VDR0wsZUFBQTtFQUNBLGlCQUFBO0FDUUY7QURQRTtFQUNDLGNETEs7RUNNTCxxQkFBQTtBQ1NIO0FESkM7RUFBYSxpQkFBQTtBQ09kO0FETkM7RUFDQyx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNEWE87QUVtQlQ7QURQRTtFQUNDLGVBQUE7RUFDQSxjRG5CSztFQ29CTCx5QkFBQTtBQ1NIO0FESkM7RUFDQyxTQUFBO0VBQ0EsYUFBQTtBQ01GO0FESkU7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJEbkNLO0VDb0NMLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNNSDtBRExHO0VBQ0MsY0Q1Qk07RUM2Qk4sY0FBQTtFQUNBLGlCQUFBO0FDT0o7QUROSTtFQUNDLGNEckNJO0FFNkNUO0FEREM7RUFDQyxjRHBETTtFQ3FETixnQkR0REs7RUN1REwsZUFBQTtFQUNBLGVBQUE7RUFTQSx5QkFBQTtBQ0xGO0FESEU7RUFBVSxVQUFBO0FDTVo7QURMRTtFQUNDLGNBQUE7RUFDQSxlQUFBO0FDT0g7QURORztFQUNDLGFBQUE7QUNRSjtBREpFO0VBQ0M7SUFDQyxlQUFBO0VDTUY7RURMRTtJQUNDLGVBQUE7SUFDQSxpQkFBQTtFQ09IO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZXMgKi9cblxuLyogaW1wb3J0IGZvbnRzICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzo3MDAnKTtcblxuLyogcGxhY2UgY3VzdG9tIHZhcmlhYmxlcyBiZWxvdyBoZXJlICovXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiRmb250LXNpemU6IDIwcHg7XG5cbiRuYXZiYXItaGVpZ2h0OiAxMDJweDtcblxuJGJvbGQ6IDcwMDtcbiR3aGl0ZTogI0ZGRkZGRjtcblxuJGdyYXktMDogI0Y4RjhGODtcbiRncmF5LTE6ICNGM0YzRjM7XG4kZ3JheS0yOiAjRjFGMUYxO1xuJGdyYXktMzogI0RBREFEQTtcbiRncmF5LTQ6ICM5QjlCOUI7XG4kZ3JheS01OiAjNTk1OTU5O1xuJGdyYXktNjogIzIyMjIyMjtcblxuLy8gJHByaW1hcnk6ICMyNjI2MjY7IC8vIDE1JVxuLy8gJHByaW1hcnk6ICRncmF5LTY7ICAgIC8vIDEzJVxuJHByaW1hcnk6ICMxYTFhMWE7IC8vIDEwJVxuLy8gJHByaW1hcnk6ICMwZDBkMGQ7IC8vICA1JVxuLy8gJHByaW1hcnk6ICMwMDAwMDA7IC8vICAwJVxuXG4vLyAkc2Vjb25kYXJ5OiAjYzJjMmQ2O1xuJHNlY29uZGFyeTogIzAwZTZlNjtcblxuLy8gJHN1Y2Nlc3M6ICRncmVlbi0zO1xuLy8gJGluZm86ICRibHVlLTM7XG4vLyAkd2FybmluZzogJHllbGxvdy0xO1xuLy8gJGRhbmdlcjogJHJlZC0yO1xuLy8gJGJvZHktYmc6ICRncmF5LTE7XG4vLyAkYm9keS1jb2xvcjogJGdyYXktNTtcbi8vICRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTM7XG5cbiRlbmFibGUtcm91bmRlZDogZmFsc2U7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAuNTYyNXJlbTtcblxuXG5cbi8qIGltcG9ydCBib290c3RyYXAncyBmdW5jdGlvbnMsIHZhcmlhYmxlcywgYW5kIG1peGlucyAtIHRoZXNlIGNhbiBiZSB1c2VkIGFueXdoZXJlIHRoaXMgZmlsZSBpcyBpbXBvcnRlZCAqL1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy90aGVtZXNcIjtcblxuOmhvc3QgeyBcblx0LyogbmF2LWJhciAqL1xuXHRoZWlnaHQ6ICRuYXZiYXItaGVpZ2h0O1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sb3I6ICR3aGl0ZTtcblxuXHQvKiBsaW5rcyAqL1xuXHRhIHsgXG5cdFx0Y29sb3I6ICRncmF5LTM7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiAkYm9sZDtcblx0XHRwYWRkaW5nOiAwIDE2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IGF1dG87XG5cdFx0Ji5hY3RpdmUsICY6aG92ZXIgeyBcblx0XHRcdGNvbG9yOiAkd2hpdGU7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0LyogaGFtYnVyZ2VyIG1lbnUgKi9cblx0LmZhLWN1c3RvbSB7IGZvbnQtc2l6ZTogMS42cmVtO1x0fVxuXHQuaGFtYnVyZ2VyIHsgXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgJGdyYXktMztcblx0XHRtYXJnaW46IDAgMTZweDtcblx0XHRwYWRkaW5nOiA5cHggMTJweCA2cHg7XG5cdFx0Y29sb3I6ICRncmF5LTM7XG5cdFx0Jjpob3ZlciB7IFxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0Y29sb3I6ICR3aGl0ZTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcblx0XHR9XG5cdH1cblxuXHQvKiBkcm9wZG93bi1tZW51IG9wdGlvbnMgKi9cblx0LmRyb3Bkb3duLW9wdGlvbnMgeyBcblx0XHRoZWlnaHQ6IDA7XG5cdFx0ZGlzcGxheTogbm9uZTtcblxuXHRcdCYuc2hvdyB7IFxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRtaW4td2lkdGg6IDE4NHB4O1xuXHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAkZ3JheS0zO1xuXHRcdFx0cmlnaHQ6IDE2cHg7XG5cdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0JiA+IGEgeyBcblx0XHRcdFx0Y29sb3I6ICRwcmltYXJ5O1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jazsgXG5cdFx0XHRcdHBhZGRpbmc6IDhweCAxNnB4O1xuXHRcdFx0XHQmLmFjdGl2ZSwgJjpob3ZlciB7IFxuXHRcdFx0XHRcdGNvbG9yOiAkZ3JheS01O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyogYnJhbmQgKi9cblx0LmJyYW5kIHsgXG5cdFx0Y29sb3I6ICR3aGl0ZTtcblx0XHRmb250LXdlaWdodDogJGJvbGQ7XG5cdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdHBhZGRpbmc6IDAgMTZweDtcblx0XHRhLmJyYW5kIHsgcGFkZGluZzogMDsgfVxuXHRcdGRpdi5zbWFsbGVyLXRleHQgeyBcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0ZGl2LnNlcGFyYXRvciB7IFxuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKiBkZXNrdG9wIGJyYW5kIHN0eWxlcyAqL1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTMwcHgpIHsgXG5cdFx0XHRkaXYuc21hbGxlci10ZXh0IHsgXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0ZGl2LnNlcGFyYXRvciB7IFxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIC41cmVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxufSIsIi8qIFRoaXMgZmlsZSBpcyB1c2VkIHRvIG92ZXJyaWRlIGRlZmF1bHQgYm9vdHN0cmFwIHRoZW1lcyAqL1xuLyogaW1wb3J0IGZvbnRzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzo3MDBcIik7XG4vKiBwbGFjZSBjdXN0b20gdmFyaWFibGVzIGJlbG93IGhlcmUgKi9cbi8qIGltcG9ydCBib290c3RyYXAncyBmdW5jdGlvbnMsIHZhcmlhYmxlcywgYW5kIG1peGlucyAtIHRoZXNlIGNhbiBiZSB1c2VkIGFueXdoZXJlIHRoaXMgZmlsZSBpcyBpbXBvcnRlZCAqL1xuOmhvc3Qge1xuICAvKiBuYXYtYmFyICovXG4gIGhlaWdodDogMTAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICAvKiBsaW5rcyAqL1xuICAvKiBoYW1idXJnZXIgbWVudSAqL1xuICAvKiBkcm9wZG93bi1tZW51IG9wdGlvbnMgKi9cbiAgLyogYnJhbmQgKi9cbn1cbjpob3N0IGEge1xuICBjb2xvcjogI0RBREFEQTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgYS5hY3RpdmUsIDpob3N0IGE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgLmZhLWN1c3RvbSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuOmhvc3QgLmhhbWJ1cmdlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQURBREE7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBwYWRkaW5nOiA5cHggMTJweCA2cHg7XG4gIGNvbG9yOiAjREFEQURBO1xufVxuOmhvc3QgLmhhbWJ1cmdlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG59XG46aG9zdCAuZHJvcGRvd24tb3B0aW9ucyB7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5kcm9wZG93bi1vcHRpb25zLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDE4NHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjREFEQURBO1xuICByaWdodDogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbn1cbjpob3N0IC5kcm9wZG93bi1vcHRpb25zLnNob3cgPiBhIHtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbjpob3N0IC5kcm9wZG93bi1vcHRpb25zLnNob3cgPiBhLmFjdGl2ZSwgOmhvc3QgLmRyb3Bkb3duLW9wdGlvbnMuc2hvdyA+IGE6aG92ZXIge1xuICBjb2xvcjogIzU5NTk1OTtcbn1cbjpob3N0IC5icmFuZCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgLyogZGVza3RvcCBicmFuZCBzdHlsZXMgKi9cbn1cbjpob3N0IC5icmFuZCBhLmJyYW5kIHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5icmFuZCBkaXYuc21hbGxlci10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbjpob3N0IC5icmFuZCBkaXYuc21hbGxlci10ZXh0IGRpdi5zZXBhcmF0b3Ige1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MzBweCkge1xuICA6aG9zdCAuYnJhbmQgZGl2LnNtYWxsZXItdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIDpob3N0IC5icmFuZCBkaXYuc21hbGxlci10ZXh0IGRpdi5zZXBhcmF0b3Ige1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, { dropdownOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownOptions', { static: true }]
        }], dropdownHamburger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownHamburger', { static: true }]
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/spacer/spacer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/spacer/spacer.component.ts ***!
  \**************************************************************/
/*! exports provided: SpacerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerComponent", function() { return SpacerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpacerComponent {
}
SpacerComponent.ɵfac = function SpacerComponent_Factory(t) { return new (t || SpacerComponent)(); };
SpacerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpacerComponent, selectors: [["app-spacer"]], decls: 0, vars: 0, template: function SpacerComponent_Template(rf, ctx) { }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:700\");\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: auto;\n  border: 1px solid #DADADA;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamhvdXNla25lY2h0L2Rldi9kamhvdXNla25lY2h0L2RqaG91c2VrbmVjaHQuZ2l0aHViLmlvL3NyYy9zY3NzL3RoZW1lcy5zY3NzIiwiL1VzZXJzL2RqaG91c2VrbmVjaHQvZGV2L2RqaG91c2VrbmVjaHQvZGpob3VzZWtuZWNodC5naXRodWIuaW8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGFjZXIvc3BhY2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGFjZXIvc3BhY2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHUSx5RUFBQTtBQUNBLHNFQUFBO0FBSlIsMkRBQUE7QUFFQSxpQkFBQTtBQUlBLHNDQUFBO0FBMENBLDJHQUFBO0FDOUNBO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNLRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwYWNlci9zcGFjZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZXMgKi9cblxuLyogaW1wb3J0IGZvbnRzICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzo3MDAnKTtcblxuLyogcGxhY2UgY3VzdG9tIHZhcmlhYmxlcyBiZWxvdyBoZXJlICovXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiRmb250LXNpemU6IDIwcHg7XG5cbiRuYXZiYXItaGVpZ2h0OiAxMDJweDtcblxuJGJvbGQ6IDcwMDtcbiR3aGl0ZTogI0ZGRkZGRjtcblxuJGdyYXktMDogI0Y4RjhGODtcbiRncmF5LTE6ICNGM0YzRjM7XG4kZ3JheS0yOiAjRjFGMUYxO1xuJGdyYXktMzogI0RBREFEQTtcbiRncmF5LTQ6ICM5QjlCOUI7XG4kZ3JheS01OiAjNTk1OTU5O1xuJGdyYXktNjogIzIyMjIyMjtcblxuLy8gJHByaW1hcnk6ICMyNjI2MjY7IC8vIDE1JVxuLy8gJHByaW1hcnk6ICRncmF5LTY7ICAgIC8vIDEzJVxuJHByaW1hcnk6ICMxYTFhMWE7IC8vIDEwJVxuLy8gJHByaW1hcnk6ICMwZDBkMGQ7IC8vICA1JVxuLy8gJHByaW1hcnk6ICMwMDAwMDA7IC8vICAwJVxuXG4vLyAkc2Vjb25kYXJ5OiAjYzJjMmQ2O1xuJHNlY29uZGFyeTogIzAwZTZlNjtcblxuLy8gJHN1Y2Nlc3M6ICRncmVlbi0zO1xuLy8gJGluZm86ICRibHVlLTM7XG4vLyAkd2FybmluZzogJHllbGxvdy0xO1xuLy8gJGRhbmdlcjogJHJlZC0yO1xuLy8gJGJvZHktYmc6ICRncmF5LTE7XG4vLyAkYm9keS1jb2xvcjogJGdyYXktNTtcbi8vICRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTM7XG5cbiRlbmFibGUtcm91bmRlZDogZmFsc2U7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAuNTYyNXJlbTtcblxuXG5cbi8qIGltcG9ydCBib290c3RyYXAncyBmdW5jdGlvbnMsIHZhcmlhYmxlcywgYW5kIG1peGlucyAtIHRoZXNlIGNhbiBiZSB1c2VkIGFueXdoZXJlIHRoaXMgZmlsZSBpcyBpbXBvcnRlZCAqL1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy90aGVtZXNcIjtcblxuOmhvc3QgeyBcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogYXV0bztcblx0Ym9yZGVyOiAxcHggc29saWQgJGdyYXktMztcblx0d2lkdGg6IDEwMCU7XG59IiwiLyogVGhpcyBmaWxlIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib290c3RyYXAgdGhlbWVzICovXG4vKiBpbXBvcnQgZm9udHMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vOjcwMFwiKTtcbi8qIHBsYWNlIGN1c3RvbSB2YXJpYWJsZXMgYmVsb3cgaGVyZSAqL1xuLyogaW1wb3J0IGJvb3RzdHJhcCdzIGZ1bmN0aW9ucywgdmFyaWFibGVzLCBhbmQgbWl4aW5zIC0gdGhlc2UgY2FuIGJlIHVzZWQgYW55d2hlcmUgdGhpcyBmaWxlIGlzIGltcG9ydGVkICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQURBREE7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpacerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spacer',
                template: ``,
                styleUrls: ['./spacer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/shared/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/spacer/spacer.component */ "./src/app/shared/components/spacer/spacer.component.ts");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_6__["SpacerComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]], exports: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_6__["SpacerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
                ],
                declarations: [
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                    _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_6__["SpacerComponent"],
                ],
                exports: [
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                    _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_6__["SpacerComponent"],
                ]
            }]
    }], null, null); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/djhouseknecht/dev/djhouseknecht/djhouseknecht.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map