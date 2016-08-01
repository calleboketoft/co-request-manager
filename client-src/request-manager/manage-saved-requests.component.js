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
var co_list_view_table_1 = require('co-list-view-table/co-list-view-table');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
var co_request_manager_config_1 = require('./co-request-manager.config');
var ManageRequestsComponent = (function () {
    function ManageRequestsComponent(cbsModel, coRequestManagerConfig) {
        this.cbsModel = cbsModel;
        this.coRequestManagerConfig = coRequestManagerConfig;
        this.listHeight = 'auto';
        this.selectedRequest = new core_1.EventEmitter();
        this.tableConfig = {
            columnDefs: [
                {
                    field: 'name',
                    displayName: 'Name',
                    search: true
                },
                {
                    field: 'method',
                    displayName: 'Method',
                    search: true
                },
                {
                    field: 'group',
                    displayName: 'Group',
                    search: true,
                    sortDefault: true
                },
                {
                    displayName: '',
                    type: 'button',
                    config: {
                        buttonName: 'remove',
                        buttonClass: 'btn btn-sm btn-outline-danger'
                    }
                }
            ]
        };
        this.requestList$ = this.cbsModel
            .getItemByKey(this.coRequestManagerConfig.browserStorageKey)
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
    ManageRequestsComponent.prototype.removeItem = function (_a) {
        var _this = this;
        var colSpec = _a.colSpec, row = _a.row;
        if (confirm('Are you sure you want to remove request?')) {
            this.cbsModel.getItemByKey(this.coRequestManagerConfig.browserStorageKey)
                .take(1)
                .subscribe(function (config) {
                // Currently saved config
                var configFromStorage = JSON.parse(config.value);
                // Remove request from requests array
                var requestsItemRemoved = configFromStorage.requests.filter(function (savedRequest) {
                    return savedRequest.id !== row.id;
                });
                // create updated config object with request removed
                var updatedConfig = Object.assign({}, configFromStorage, {
                    requests: requestsItemRemoved
                });
                // persist updated config to browser storage
                _this.cbsModel.updateItem({
                    key: _this.coRequestManagerConfig.browserStorageKey,
                    value: JSON.stringify(updatedConfig)
                });
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ManageRequestsComponent.prototype, "listHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ManageRequestsComponent.prototype, "selectedRequest", void 0);
    ManageRequestsComponent = __decorate([
        core_1.Component({
            selector: 'manage-requests',
            directives: [co_list_view_table_1.CoListViewTableComponent],
            template: "\n    <div [style.height]=\"listHeight\">\n      <co-list-view-table-cmp\n        [tableConfig]=\"tableConfig\"\n        [tableData]=\"requestList$ | async\"\n        (selected)=\"selectedRequest.emit($event)\"\n        (buttonClicked)=\"removeItem($event)\">\n      </co-list-view-table-cmp>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [co_browser_storage_1.CbsModel, co_request_manager_config_1.CoRequestManagerConfig])
    ], ManageRequestsComponent);
    return ManageRequestsComponent;
}());
exports.ManageRequestsComponent = ManageRequestsComponent;
//# sourceMappingURL=manage-saved-requests.component.js.map