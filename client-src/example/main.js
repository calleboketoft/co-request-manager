"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var store_1 = require('@ngrx/store');
var app_component_1 = require('./app.component');
var co_request_manager_provider_1 = require('../request-manager/co-request-manager.provider');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
var browser_storage_config_1 = require('./browser-storage.config');
co_browser_storage_1.initializeCbs(browser_storage_config_1.browserStorageConfig);
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    co_request_manager_provider_1.provideCoRequestManager('requestManagerConfig'),
    forms_1.provideForms(),
    forms_1.disableDeprecatedForms(),
    co_browser_storage_1.CbsModel,
    store_1.provideStore({
        cbsReducer: co_browser_storage_1.cbsReducer
    }, {
        cbsReducer: co_browser_storage_1.getInitialCbsState()
    })
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map