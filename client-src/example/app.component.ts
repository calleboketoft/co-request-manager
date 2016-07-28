import {Component, ViewChild} from '@angular/core'
import {FormBuilder, REACTIVE_FORM_DIRECTIVES} from '@angular/forms'
import {CbsComponent} from 'co-browser-storage/co-browser-storage'
import {CoRequestFormComponent} from 'co-request-form/co-request-form'
import {ManageRequestsComponent} from './manage-requests.component'
import {RequestManagerService} from './request-manager.service'
import {BehaviorSubject} from 'rxjs/Rx'

@Component({
  selector: 'app',
  directives: [
    CbsComponent,
    CoRequestFormComponent,
    ManageRequestsComponent,
    REACTIVE_FORM_DIRECTIVES
  ],
  template: `
    <div class="container">
      <h1>Angular 2</h1>
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
                  formControlName="newRequestName">
              </div>
              <div class="col-xs-4">
                <input type="text" class="form-control"
                  formControlName="newRequestGroup">
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
          <button type="button" class="btn btn-primary"
            (click)="makeRequest()">
            Get values
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <cbs-cmp></cbs-cmp>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  @ViewChild(CoRequestFormComponent) coRequestFormComponent: CoRequestFormComponent;

  public currentRequest$ = new BehaviorSubject({
    url: '',
    method: 'GET',
    body: '{}',
    headers: {}
  });

  public saveRequestForm;

  constructor (
    private requestManagerService: RequestManagerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit () {
    this.saveRequestForm = this.formBuilder.group({
      newRequestName: [''],
      newRequestGroup: ['']
    })
  }

  public selectedRequest ($event) {
    this.currentRequest$.next($event)
    this.coRequestFormComponent.initializeForm()
  }

  public makeRequest () {
    console.log(this.coRequestFormComponent.request())
  }

  public saveNewRequest () {
    // TODO validate that form is good
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