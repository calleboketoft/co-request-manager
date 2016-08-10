import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import {provideForms, disableDeprecatedForms} from '@angular/forms'
import {provideStore} from '@ngrx/store'
import {provideCoRequestManager} from '../request-manager/co-request-manager.provider'
import {
  cbsReducer,
  initializeCbs,
  getInitialCbsState,
  CbsModel
} from 'co-browser-storage/co-browser-storage'
import {browserStorageConfig} from './browser-storage.config'

initializeCbs(browserStorageConfig)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  providers: [
    provideCoRequestManager('requestManagerConfig'),
    provideForms(),
    disableDeprecatedForms(),
    CbsModel,
    provideStore({
      cbsReducer
    }, {
      cbsReducer: getInitialCbsState()
    })
  ]
})
export class AppModule { }