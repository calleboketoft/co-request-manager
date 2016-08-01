## co-request-manager

Angular 2 REST Request manager

#### Install

- `npm install --save co-request-form co-browser-storage co-list-view-table co-request-manager`
- Also need `@ngrx/store` to work
- Set up `co-browser-storage` first and add a browser storage param for this app
- `main.ts`:

```javascript
import {provideCoRequestManager} from '../request-manager/co-request-manager.provider'

bootstrap(MyApp, [
  // NOTE it's the key without the co-browser-storage namespace here
  provideCoRequestManager('requestManagerConfigBrowserStorageKey')
])
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

```javascript
import {Component, ViewChild} from '@angular/core'

import {CoRequestManagerComponent} from 'co-request-manager/co-request-manager'

@Component({
  selector: 'app',
  directives: [CoRequestManagerComponent],
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
```

#### Develop

- `npm install`
- `npm run typings`
- `npm run watch`
- `npm start`
- Open browser and navigate to localhost:3000