"use strict";
exports.NAMESPACE = 'co-request-manager';
exports.DEBUG_MODE = 'debugMode';
exports.REQUEST_MANAGER_CONFIG = 'requestManagerConfig';
exports.browserStorageConfig = {
    namespace: exports.NAMESPACE,
    initialState: [
        // List storage variables here
        {
            key: exports.DEBUG_MODE,
            value: 'true',
            storageType: 'localStorage',
            valueType: 'text'
        },
        {
            key: exports.REQUEST_MANAGER_CONFIG,
            value: '{"requests": []}',
            storageType: 'localStorage',
            valueType: 'text'
        }
    ]
};
//# sourceMappingURL=browser-storage.config.js.map