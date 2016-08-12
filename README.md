## ng2-request-manager

Angular 2 REST Request manager

#### Install

- `npm install --save @calle/{ng2-request-form,ng2-browser-storage,ng2-table,ng2-request-manager}`
- Also need `@ngrx/store` to work
- Set up `ng2-browser-storage` first and add a browser storage param for this app
- Use in your `app.module.ts`:

```javascript
import {
  provideRequestManager,
  RequestManagerModule
} from '@calle/ng2-request-manager'
...
@NgModule({
  ...
  imports: [
    RequestManagerModule
    ...
  ]
  ...
  providers: [
    // NOTE it's the key without the co-browser-storage namespace here
    provideRequestManager('requestManagerConfig')
    ...
  ]
  ...
})
```

- `co-browser-storage.config`:

```javascript
export const REQUEST_MANAGER_CONFIG = 'requestManagerConfig'
...
{
  key: REQUEST_MANAGER_CONFIG,
  value: '{"requests":[]}',
  storageType: 'localStorage',
  valueType: 'text'
}
...
```

- `some.component.ts`:

Note that listHeight is optional

```javascript
import {Component, ViewChild} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <request-manager
      [listHeight]="'300px'">
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
```

#### Develop

- `npm install`
- `npm run typings`
- `npm run watch`
- `npm start`
- Open browser and navigate to localhost:3000