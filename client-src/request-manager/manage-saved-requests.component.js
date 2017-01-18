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
var ManageSavedRequestsComponent = (function () {
    function ManageSavedRequestsComponent(browserStorageModel, requestManagerConfig) {
        this.browserStorageModel = browserStorageModel;
        this.requestManagerConfig = requestManagerConfig;
        this.listHeight = 'auto';
        this.selectedRequest = new core_1.EventEmitter();
        this.tableConfig = {
            tableNgClass: 'table table-striped table-hover',
            rowNgStyle: { 'cursor': 'pointer' },
            columnDefs: [
                {
                    field: 'name',
                    headerText: 'Name',
                    filterEnabled: true
                },
                {
                    field: 'method',
                    headerText: 'Method',
                    filterEnabled: true
                },
                {
                    field: 'group',
                    headerText: 'Group',
                    filterEnabled: true,
                    sortDefault: 'asc'
                },
                {
                    headerText: '',
                    cellItem: {
                        elementType: 'button',
                        staticContent: 'remove',
                        cellItemNgClass: 'btn btn-sm btn-danger'
                    }
                }
            ]
        };
        this.requestList$ = this.browserStorageModel
            .getItemByKey(this.requestManagerConfig.browserStorageKey)
            .map(function (config) {
            var configFromStorage = JSON.parse(config.value);
            var configWithGroup = configFromStorage.requests.map(function (request) {
                return Object.assign({}, request, {
                    // just assume that tag[0] is group
                    group: request.tags[0]
                });
            });
            return configWithGroup;
        });
    }
    ManageSavedRequestsComponent.prototype.removeItem = function (_a) {
        var _this = this;
        var rowData = _a.rowData;
        if (confirm('Are you sure you want to remove request?')) {
            this.browserStorageModel.getItemByKey(this.requestManagerConfig.browserStorageKey)
                .take(1)
                .subscribe(function (config) {
                // Currently saved config
                var configFromStorage = JSON.parse(config.value);
                // Remove request from requests array
                var requestsItemRemoved = configFromStorage.requests.filter(function (savedRequest) {
                    return savedRequest.id !== rowData.id;
                });
                // create updated config object with request removed
                var updatedConfig = Object.assign({}, configFromStorage, {
                    requests: requestsItemRemoved
                });
                // persist updated config to browser storage
                _this.browserStorageModel.updateItem({
                    key: _this.requestManagerConfig.browserStorageKey,
                    value: JSON.stringify(updatedConfig)
                });
            });
        }
    };
    return ManageSavedRequestsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ManageSavedRequestsComponent.prototype, "listHeight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ManageSavedRequestsComponent.prototype, "selectedRequest", void 0);
ManageSavedRequestsComponent = __decorate([
    core_1.Component({
        selector: 'manage-requests',
        template: "\n    <div [style.height]=\"listHeight\">\n      <ng2-table\n        [tableConfig]=\"tableConfig\"\n        [tableData]=\"requestList$ | async\"\n        (rowClicked)=\"selectedRequest.emit($event.rowData)\"\n        (cellItemClicked)=\"removeItem($event)\">\n      </ng2-table>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [ng2_browser_storage_1.BrowserStorageModel,
        request_manager_config_1.RequestManagerConfig])
], ManageSavedRequestsComponent);
exports.ManageSavedRequestsComponent = ManageSavedRequestsComponent;
//# sourceMappingURL=manage-saved-requests.component.js.map