import {Component, ViewChild} from '@angular/core'
import {CbsComponent} from 'co-browser-storage/co-browser-storage'
import {CoRequestFormComponent} from 'co-request-form/co-request-form'
@Component({
  selector: 'app',
  directives: [
    CbsComponent,
    CoRequestFormComponent
  ],
  template: `
    <div class="container">
      <h1>Angular 2</h1>
      <div class="row">
        <div class="col-xs-6">
          <co-request-form-cmp
            [url]="'http://someurl'"
            [method]="'GET'"
            [body]="'{}'"
            [headers]="">
          </co-request-form-cmp>
          <button type="button" class="btn btn-primary"
            (click)="makeRequest()">
            Get values
          </button>
        </div>
        <div class="col-xs-6">
          <cbs-cmp></cbs-cmp>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  @ViewChild(CoRequestFormComponent) coRequestFormComponent: CoRequestFormComponent

  public makeRequest () {
    console.log(this.coRequestFormComponent.request())
  }
}