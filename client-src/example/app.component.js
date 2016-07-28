"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
var co_request_form_1 = require('co-request-form/co-request-form');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.makeRequest = function () {
        console.log(this.coRequestFormComponent.request());
    };
    __decorate([
        core_1.ViewChild(co_request_form_1.CoRequestFormComponent), 
        __metadata('design:type', co_request_form_1.CoRequestFormComponent)
    ], AppComponent.prototype, "coRequestFormComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [
                co_browser_storage_1.CbsComponent,
                co_request_form_1.CoRequestFormComponent
            ],
            template: "\n    <div class=\"container\">\n      <h1>Angular 2</h1>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <co-request-form-cmp\n            [url]=\"'http://someurl'\"\n            [method]=\"'GET'\"\n            [body]=\"'{}'\"\n            [headers]=\"\">\n          </co-request-form-cmp>\n          <button type=\"button\" class=\"btn btn-primary\"\n            (click)=\"makeRequest()\">\n            Get values\n          </button>\n        </div>\n        <div class=\"col-xs-6\">\n          <cbs-cmp></cbs-cmp>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map