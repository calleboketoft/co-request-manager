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
var browser_storage_config_1 = require('./browser-storage.config');
var ManageRequestsComponent = (function () {
    function ManageRequestsComponent(cbsModel) {
        this.cbsModel = cbsModel;
        this.tableConfig = {
            columnDefs: [
                {
                    field: 'name',
                    displayName: 'Name'
                },
                {
                    field: 'method',
                    displayName: 'Method'
                }
            ]
        };
        this.requestManagerConfig$ = this.cbsModel.getItemByKey(browser_storage_config_1.REQUEST_MANAGER_CONFIG)
            .map(function (config) {
            return JSON.parse(config.value);
        });
    }
    ManageRequestsComponent.prototype.selectedRequest = function ($event) {
        console.log($event);
    };
    ManageRequestsComponent = __decorate([
        core_1.Component({
            selector: 'manage-requests',
            directives: [co_list_view_table_1.CoListViewTableComponent],
            template: "\n    <co-list-view-table-cmp\n      [tableConfig]=\"tableConfig\"\n      [tableData]=\"(requestManagerConfig$ | async)?.requests\"\n      (selected)=\"selectedRequest($event)\">\n    </co-list-view-table-cmp>\n  "
        }), 
        __metadata('design:paramtypes', [co_browser_storage_1.CbsModel])
    ], ManageRequestsComponent);
    return ManageRequestsComponent;
}());
exports.ManageRequestsComponent = ManageRequestsComponent;
//# sourceMappingURL=manage-requests.component.js.map