"use strict";
exports.NAMESPACE = 'co-request-manager';
exports.DEBUG_MODE = 'debugMode';
exports.browserStorageConfig = {
    namespace: exports.NAMESPACE,
    initialState: [
        // List storage variables here
        {
            key: exports.DEBUG_MODE,
            value: 'true',
            storageType: 'localStorage',
            valueType: 'text'
        }
    ]
};
//# sourceMappingURL=browser-storage.config.js.map