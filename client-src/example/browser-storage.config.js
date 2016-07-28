"use strict";
exports.NAMESPACE = 'co-request-manager';
exports.DEBUG_MODE = 'debugMode';
exports.REQUEST_MANAGER_CONFIG = 'requestManagerConfig';
exports.browserStorageConfig = {
    namespace: exports.NAMESPACE,
    initialState: [
        // List storage variables here
        {
            key: exports.REQUEST_MANAGER_CONFIG,
            value: '{"requests": []}',
            storageType: 'localStorage',
            valueType: 'text'
        }
    ]
};
//# sourceMappingURL=browser-storage.config.js.map