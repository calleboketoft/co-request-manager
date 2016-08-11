"use strict";
var request_manager_service_1 = require('./request-manager.service');
var request_manager_config_1 = require('./request-manager.config');
var co_browser_storage_1 = require('@calle/ng2-browser-storage/co-browser-storage');
// call this like provideCoRequestManager('theKeyInCbs')
function provideRequestManager(cbsRequestManagerConfigKey) {
    var requestManagerServiceFactory = function (cbsModel, requestManagerConfig) {
        return new request_manager_service_1.RequestManagerService(cbsModel, requestManagerConfig);
    };
    var requestManagerServiceProvider = {
        provide: request_manager_service_1.RequestManagerService,
        useFactory: requestManagerServiceFactory,
        deps: [co_browser_storage_1.CbsModel, request_manager_config_1.RequestManagerConfig]
    };
    var requestManagerConfigFactory = function () {
        return new request_manager_config_1.RequestManagerConfig(cbsRequestManagerConfigKey);
    };
    var requestManagerConfigProvider = {
        provide: request_manager_config_1.RequestManagerConfig,
        useFactory: requestManagerConfigFactory,
        deps: []
    };
    return [
        requestManagerServiceProvider,
        requestManagerConfigProvider
    ];
}
exports.provideRequestManager = provideRequestManager;
//# sourceMappingURL=request-manager.provider.js.map