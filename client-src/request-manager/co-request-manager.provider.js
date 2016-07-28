"use strict";
var co_request_manager_service_1 = require('./co-request-manager.service');
var co_request_manager_config_1 = require('./co-request-manager.config');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
// call this like provideCoRequestManager('theKeyInCbs')
function provideCoRequestManager(cbsCoRequestManagerConfigKey) {
    var coRequestManagerServiceFactory = function (cbsModel, coRequestManagerConfig) {
        return new co_request_manager_service_1.CoRequestManagerService(cbsModel, coRequestManagerConfig);
    };
    var coRequestManagerServiceProvider = {
        provide: co_request_manager_service_1.CoRequestManagerService,
        useFactory: coRequestManagerServiceFactory,
        deps: [co_browser_storage_1.CbsModel, co_request_manager_config_1.CoRequestManagerConfig]
    };
    var coRequestManagerConfigFactory = function () {
        return new co_request_manager_config_1.CoRequestManagerConfig(cbsCoRequestManagerConfigKey);
    };
    var coRequestManagerConfigProvider = {
        provide: co_request_manager_config_1.CoRequestManagerConfig,
        useFactory: coRequestManagerConfigFactory,
        deps: []
    };
    return [
        coRequestManagerServiceProvider,
        coRequestManagerConfigProvider
    ];
}
exports.provideCoRequestManager = provideCoRequestManager;
//# sourceMappingURL=co-request-manager.provider.js.map