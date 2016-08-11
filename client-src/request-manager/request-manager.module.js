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
var request_form_1 = require('@calle/ng2-request-form/request-form');
var ng2_table_1 = require('@calle/ng2-table/ng2-table');
var manage_saved_requests_component_1 = require('./manage-saved-requests.component');
var request_manager_component_1 = require('./request-manager.component');
var request_manager_service_1 = require('./request-manager.service');
var RequestManagerModule = (function () {
    function RequestManagerModule() {
    }
    RequestManagerModule = __decorate([
        core_1.NgModule({
            declarations: [
                manage_saved_requests_component_1.ManageSavedRequestsComponent,
                request_manager_component_1.RequestManagerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                request_form_1.RequestFormModule,
                ng2_table_1.Ng2TableModule
            ],
            exports: [
                request_manager_component_1.RequestManagerComponent
            ],
            providers: [
                request_manager_service_1.RequestManagerService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RequestManagerModule);
    return RequestManagerModule;
}());
exports.RequestManagerModule = RequestManagerModule;
//# sourceMappingURL=request-manager.module.js.map