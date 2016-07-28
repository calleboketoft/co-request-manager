import {bootstrap} from '@angular/platform-browser-dynamic'
import {provideForms, disableDeprecatedForms} from '@angular/forms'
import {AppComponent} from './app.component'
import {provideStore} from '@ngrx/store'
import {RequestManagerService} from './request-manager.service'
import {
  cbsReducer,
  initializeCbs,
  getInitialCbsState,
  CbsModel
} from 'co-browser-storage/co-browser-storage'
import {browserStorageConfig} from './browser-storage.config'

initializeCbs(browserStorageConfig)

bootstrap(AppComponent, [
  provideForms(),
  disableDeprecatedForms(),
  CbsModel,
  provideStore({
    cbsReducer
  }, {
    cbsReducer: getInitialCbsState()
  }),
  RequestManagerService
]).catch(err => console.error(err))