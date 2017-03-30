"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var store_1 = require("@ngrx/store");
var ng2_browser_storage_1 = require("@calle/ng2-browser-storage");
var browser_storage_config_1 = require("./browser-storage.config");
var _1 = require("../../");
ng2_browser_storage_1.initializeBrowserStorage(browser_storage_config_1.browserStorageConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            _1.RequestManagerModule
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            _1.provideRequestManager('requestManagerConfig'),
            ng2_browser_storage_1.BrowserStorageModel,
            store_1.provideStore({
                browserStorageReducer: ng2_browser_storage_1.browserStorageReducer
            }, {
                browserStorageReducer: ng2_browser_storage_1.getInitialBrowserStorageState()
            })
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map