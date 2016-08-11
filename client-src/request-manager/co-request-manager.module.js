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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var co_request_form_1 = require('co-request-form/co-request-form');
var manage_saved_requests_component_1 = require('./manage-saved-requests.component');
var co_request_manager_component_1 = require('./co-request-manager.component');
var co_request_manager_service_1 = require('./co-request-manager.service');
var CoRequestManagerModule = (function () {
    function CoRequestManagerModule() {
    }
    CoRequestManagerModule = __decorate([
        core_1.NgModule({
            declarations: [
                co_request_form_1.CoRequestFormComponent,
                manage_saved_requests_component_1.ManageRequestsComponent,
                co_request_manager_component_1.CoRequestManagerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                co_request_manager_service_1.CoRequestManagerService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CoRequestManagerModule);
    return CoRequestManagerModule;
}());
exports.CoRequestManagerModule = CoRequestManagerModule;
//# sourceMappingURL=co-request-manager.module.js.map