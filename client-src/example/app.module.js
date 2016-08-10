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
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var store_1 = require('@ngrx/store');
var co_request_manager_provider_1 = require('../request-manager/co-request-manager.provider');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
var browser_storage_config_1 = require('./browser-storage.config');
co_browser_storage_1.initializeCbs(browser_storage_config_1.browserStorageConfig);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                co_request_manager_provider_1.provideCoRequestManager('requestManagerConfig'),
                forms_1.provideForms(),
                forms_1.disableDeprecatedForms(),
                co_browser_storage_1.CbsModel,
                store_1.provideStore({
                    cbsReducer: co_browser_storage_1.cbsReducer
                }, {
                    cbsReducer: co_browser_storage_1.getInitialCbsState()
                })
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map