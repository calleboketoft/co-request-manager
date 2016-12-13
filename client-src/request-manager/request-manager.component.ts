import { Component, ViewChild, Input} from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { RequestManagerService } from './request-manager.service'
import { BehaviorSubject } from 'rxjs/Rx'
import { RequestFormComponent } from '@calle/ng2-request-form'

@Component({
  selector: 'request-manager',
  template: `
    <div class="row">
      <div class="col-xs-6">
        <h4>Saved Requests</h4>
        <manage-requests
          [listHeight]="listHeight"
          (selectedRequest)="selectedRequest($event)">
        </manage-requests>
        <br>
      </div>
      <div class="col-xs-6">
        <h4>REST Client</h4>
        <request-form
          [url]="url"
          [method]="method"
          [body]="body"
          [headers]="headers">
        </request-form>
        <br>
        <!-- Good place for a request button -->
        <ng-content></ng-content>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <label>Save Request</label>
          </div>
        </div>
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
            <div class="col-xs-4" style="text-align: right;">
              <button type="button" class="btn btn-success"
                style="width: 110px;"
                (click)="saveNewRequest()">
                + Save
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <small class="text-muted">
                Save currently entered values as a new request
              </small>
            </div>
          </div>
        </form>
        <br>
      </div>
    </div>
  `
})
export class RequestManagerComponent {
  // emit new values when updated
  @Input() url = ''
  @Input() method = 'GET'
  @Input() body = '{}'
  @Input() headers = {}
  @Input() listHeight
  @ViewChild(RequestFormComponent) requestFormComponent: RequestFormComponent

  public saveRequestForm
  public fc

  constructor (
    private requestManagerService: RequestManagerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit () {
    this.saveRequestForm = this.formBuilder.group({
      newRequestName: ['', Validators.required],
      newRequestGroup: ['', Validators.required]
    })
    this.fc = this.saveRequestForm.controls
  }

  public selectedRequest ({url, method, body, headers}) {
    this.url = url
    this.method = method
    this.body = body
    this.headers = headers
  }

  public saveNewRequest () {
    if (!this.saveRequestForm.valid) {
      alert('name or group is missing')
      return
    }

    let requestData = this.requestFormComponent.request()
    let newRequestNameControl = this.saveRequestForm.controls.newRequestName
    let newRequestGroupControl = this.saveRequestForm.controls.newRequestGroup

    this.requestManagerService.saveNewRequest(Object.assign({}, requestData, {
      name: newRequestNameControl.value,
      tags: [newRequestGroupControl.value]
    }))

    newRequestGroupControl.setValue('')
    newRequestNameControl.setValue('')
  }
}
