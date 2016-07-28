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
  provideCoRequestManager('requestManagerConfigBrowserStorageKey')
])
```

#### Develop

- `npm install`
- `npm run typings`
- `npm run watch`
- `npm start`
- Open browser and navigate to localhost:3000