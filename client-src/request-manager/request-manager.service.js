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
var core_1 = require("@angular/core");
var ng2_browser_storage_1 = require("@calle/ng2-browser-storage");
var request_manager_config_1 = require("./request-manager.config");
require("rxjs/add/operator/take");
var RequestManagerService = (function () {
    function RequestManagerService(browserStorageModel, requestManagerConfig) {
        this.browserStorageModel = browserStorageModel;
        this.requestManagerConfig = requestManagerConfig;
    }
    RequestManagerService.prototype.saveNewRequest = function (_a) {
        var _this = this;
        var name = _a.name, method = _a.method, url = _a.url, body = _a.body, tags = _a.tags, headers = _a.headers;
        var newItem = {
            id: this.generateUUID(),
            name: name,
            method: method,
            url: url,
            headers: headers,
            body: body,
            tags: tags
        };
        this.browserStorageModel.getItemByKey(this.requestManagerConfig.browserStorageKey)
            .take(1).subscribe(function (config) {
            var existingConfig = JSON.parse(config.value);
            existingConfig.requests.push(newItem);
            _this.browserStorageModel.updateItem({
                key: _this.requestManagerConfig.browserStorageKey,
                value: JSON.stringify(existingConfig)
            });
        });
    };
    // Generate UUID
    // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    RequestManagerService.prototype.generateUUID = function () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === 'function') {
            d += performance.now(); // use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    return RequestManagerService;
}());
RequestManagerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_browser_storage_1.BrowserStorageModel,
        request_manager_config_1.RequestManagerConfig])
], RequestManagerService);
exports.RequestManagerService = RequestManagerService;
//# sourceMappingURL=request-manager.service.js.map