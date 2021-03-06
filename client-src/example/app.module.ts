import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import { ReactiveFormsModule } from '@angular/forms'
import { provideStore } from '@ngrx/store'
import {
  browserStorageReducer,
  initializeBrowserStorage,
  getInitialBrowserStorageState,
  BrowserStorageModel
} from '@calle/ng2-browser-storage'
import { browserStorageConfig } from './browser-storage.config'

import {
  RequestManagerModule,
  provideRequestManager
} from '../../'

initializeBrowserStorage(browserStorageConfig)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RequestManagerModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideRequestManager('requestManagerConfig'),
    BrowserStorageModel,
    provideStore({
      browserStorageReducer
    }, {
      browserStorageReducer: getInitialBrowserStorageState()
    })
  ]
})
export class AppModule { }
