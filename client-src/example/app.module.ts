import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import { ReactiveFormsModule } from '@angular/forms'
import { provideStore } from '@ngrx/store'
import {
  cbsReducer,
  initializeCbs,
  getInitialCbsState,
  CbsModel
} from 'co-browser-storage/co-browser-storage'
import { browserStorageConfig } from './browser-storage.config'

import {
  CoRequestManagerModule,
  provideCoRequestManager
} from '../../co-request-manager'

initializeCbs(browserStorageConfig)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoRequestManagerModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideCoRequestManager('requestManagerConfig'),
    CbsModel,
    provideStore({
      cbsReducer
    }, {
      cbsReducer: getInitialCbsState()
    })
  ]
})
export class AppModule { }