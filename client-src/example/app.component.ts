import {Component, ViewChild} from '@angular/core'
import {CoRequestManagerComponent} from '../../co-request-manager'

@Component({
  selector: 'app',
  template: `
    <co-request-manager>
      <button type="button" class="btn btn-success btn-block" (click)="makeRequest()">
        Make request
      </button>
    </co-request-manager>
  `
})
export class AppComponent {
  @ViewChild(CoRequestManagerComponent) coRequestManagerComponent: CoRequestManagerComponent

  public makeRequest () {
    let params = this.coRequestManagerComponent.coRequestFormComponent.request()
    console.log(params)
  }
}