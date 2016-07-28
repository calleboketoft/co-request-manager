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
var forms_1 = require('@angular/forms');
var co_browser_storage_1 = require('co-browser-storage/co-browser-storage');
var co_request_form_1 = require('co-request-form/co-request-form');
var manage_requests_component_1 = require('./manage-requests.component');
var request_manager_service_1 = require('./request-manager.service');
var Rx_1 = require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(requestManagerService, formBuilder) {
        this.requestManagerService = requestManagerService;
        this.formBuilder = formBuilder;
        this.currentRequest$ = new Rx_1.BehaviorSubject({
            url: '',
            method: 'GET',
            body: '{}',
            headers: {}
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.saveRequestForm = this.formBuilder.group({
            newRequestName: [''],
            newRequestGroup: ['']
        });
    };
    AppComponent.prototype.selectedRequest = function ($event) {
        this.currentRequest$.next($event);
        this.coRequestFormComponent.initializeForm();
    };
    AppComponent.prototype.makeRequest = function () {
        console.log(this.coRequestFormComponent.request());
    };
    AppComponent.prototype.saveNewRequest = function () {
        // TODO validate that form is good
        var requestData = this.coRequestFormComponent.request();
        var newRequestNameControl = this.saveRequestForm.controls.newRequestName;
        var newRequestGroupControl = this.saveRequestForm.controls.newRequestGroup;
        this.requestManagerService.saveNewRequest(Object.assign({}, requestData, {
            name: newRequestNameControl.value,
            tags: [newRequestGroupControl.value]
        }));
        newRequestGroupControl.updateValue('');
        newRequestNameControl.updateValue('');
    };
    __decorate([
        core_1.ViewChild(co_request_form_1.CoRequestFormComponent), 
        __metadata('design:type', co_request_form_1.CoRequestFormComponent)
    ], AppComponent.prototype, "coRequestFormComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [
                co_browser_storage_1.CbsComponent,
                co_request_form_1.CoRequestFormComponent,
                manage_requests_component_1.ManageRequestsComponent,
                forms_1.REACTIVE_FORM_DIRECTIVES
            ],
            template: "\n    <div class=\"container\">\n      <h1>Angular 2</h1>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <manage-requests\n            (selectedRequest)=\"selectedRequest($event)\">\n          </manage-requests>\n          <br>\n\n          <form [formGroup]=\"saveRequestForm\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                <input type=\"text\" class=\"form-control\"\n                  formControlName=\"newRequestName\">\n              </div>\n              <div class=\"col-xs-4\">\n                <input type=\"text\" class=\"form-control\"\n                  formControlName=\"newRequestGroup\">\n              </div>\n              <div class=\"col-xs-4\">\n                <button type=\"button\" class=\"btn btn-primary\"\n                  (click)=\"saveNewRequest()\">\n                  Save request\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-xs-6\">\n          <co-request-form-cmp\n            [url]=\"(currentRequest$ | async).url\"\n            [method]=\"(currentRequest$ | async).method\"\n            [body]=\"(currentRequest$ | async).body\"\n            [headers]=\"(currentRequest$ | async).headers\">\n          </co-request-form-cmp>\n          <button type=\"button\" class=\"btn btn-primary\"\n            (click)=\"makeRequest()\">\n            Get values\n          </button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <cbs-cmp></cbs-cmp>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [request_manager_service_1.RequestManagerService, forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map