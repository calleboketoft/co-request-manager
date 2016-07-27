import {Component} from '@angular/core'
import {CbsComponent} from 'co-browser-storage/co-browser-storage'
import {CoRequestFormComponent} from 'co-request-form/co-request-form'
@Component({
  selector: 'app',
  directives: [CbsComponent, CoRequestFormComponent],
  template: `
    <div class="container">
      <h1>Angular 2</h1>
      <co-request-form-cmp
        [url]="'http://someurl'"
        [method]="'GET'"
        [body]="'{}'"
        [headers]="preconfiguredHeaders"
        (request)="makeRequest($event)">
      </co-request-form-cmp>
      <cbs-cmp></cbs-cmp>
    </div>
  `
})
export class AppComponent {}