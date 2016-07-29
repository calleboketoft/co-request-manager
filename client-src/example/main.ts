import {bootstrap} from '@angular/platform-browser-dynamic'
import {provideForms, disableDeprecatedForms} from '@angular/forms'
import {provideStore} from '@ngrx/store'
import {AppComponent} from './app.component'
import {provideCoRequestManager} from '../request-manager/co-request-manager.provider'
import {
  cbsReducer,
  initializeCbs,
  getInitialCbsState,
  CbsModel
} from 'co-browser-storage/co-browser-storage'
import {browserStorageConfig} from './browser-storage.config'

initializeCbs(browserStorageConfig)

bootstrap(AppComponent, [
  provideCoRequestManager('requestManagerConfig'),
  provideForms(),
  disableDeprecatedForms(),
  CbsModel,
  provideStore({
    cbsReducer
  }, {
    cbsReducer: getInitialCbsState()
  })
]).catch(err => console.error(err))