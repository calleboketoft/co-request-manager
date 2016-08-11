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
var co_request_manager_1 = require('../../co-request-manager');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.makeRequest = function () {
        var params = this.coRequestManagerComponent.coRequestFormComponent.request();
        console.log(params);
    };
    __decorate([
        core_1.ViewChild(co_request_manager_1.CoRequestManagerComponent), 
        __metadata('design:type', co_request_manager_1.CoRequestManagerComponent)
    ], AppComponent.prototype, "coRequestManagerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <co-request-manager>\n      <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"makeRequest()\">\n        Make request\n      </button>\n    </co-request-manager>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map