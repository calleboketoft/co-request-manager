import {Component, ViewChild} from '@angular/core'
import {RequestManagerComponent} from '../../request-manager'

@Component({
  selector: 'app',
  template: `
    <request-manager>
      <button type="button" class="btn btn-success btn-block" (click)="makeRequest()">
        Make request
      </button>
    </request-manager>
  `
})
export class AppComponent {
  @ViewChild(RequestManagerComponent) requestManagerComponent: RequestManagerComponent

  public makeRequest () {
    let params = this.requestManagerComponent.requestFormComponent.request()
    console.log(params)
  }
}