import {Component, ViewChild} from '@angular/core'
import {FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators} from '@angular/forms'
import {CoRequestFormComponent} from 'co-request-form/co-request-form'
import {ManageRequestsComponent} from './manage-saved-requests.component'
import {CoRequestManagerService} from './co-request-manager.service'
import {BehaviorSubject} from 'rxjs/Rx'

@Component({
  selector: 'co-request-manager',
  directives: [
    CoRequestFormComponent,
    ManageRequestsComponent,
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [CoRequestManagerService],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-6">
          <manage-requests
            (selectedRequest)="selectedRequest($event)">
          </manage-requests>
          <br>

          <form [formGroup]="saveRequestForm">
            <div class="row">
              <div class="col-xs-4">
                <input type="text" class="form-control"
                  formControlName="newRequestName"
                  placeholder="Name">
                <small [hidden]="fc.newRequestName.valid || fc.newRequestName.pristine">
                  Required field
                </small>
              </div>
              <div class="col-xs-4">
                <input type="text" class="form-control"
                  formControlName="newRequestGroup"
                  placeholder="Group">
                <small [hidden]="fc.newRequestGroup.valid || fc.newRequestGroup.pristine">
                  Required field
                </small>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn btn-primary"
                  (click)="saveNewRequest()">
                  Save request
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-xs-6">
          <co-request-form-cmp
            [url]="(currentRequest$ | async).url"
            [method]="(currentRequest$ | async).method"
            [body]="(currentRequest$ | async).body"
            [headers]="(currentRequest$ | async).headers">
          </co-request-form-cmp>
        </div>
      </div>
    </div>
  `
})
export class CoRequestManagerComponent {
  @ViewChild(CoRequestFormComponent) coRequestFormComponent: CoRequestFormComponent;

  public currentRequest$ = new BehaviorSubject({
    url: '/api',
    method: 'GET',
    body: '{}',
    headers: {}
  });

  public saveRequestForm;
  public fc;

  constructor (
    private requestManagerService: CoRequestManagerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit () {
    this.saveRequestForm = this.formBuilder.group({
      newRequestName: ['', Validators.required],
      newRequestGroup: ['', Validators.required]
    })
    this.fc = this.saveRequestForm.controls
  }

  public selectedRequest ($event) {
    this.currentRequest$.next($event)
  }

  public saveNewRequest () {
    if (!this.saveRequestForm.valid) {
      alert('name or group is missing')
      return
    }

    let requestData = this.coRequestFormComponent.request()
    let newRequestNameControl = this.saveRequestForm.controls.newRequestName
    let newRequestGroupControl = this.saveRequestForm.controls.newRequestGroup

    this.requestManagerService.saveNewRequest(Object.assign({}, requestData, {
      name: newRequestNameControl.value,
      tags: [newRequestGroupControl.value]
    }))

    newRequestGroupControl.updateValue('')
    newRequestNameControl.updateValue('')
  }
}
