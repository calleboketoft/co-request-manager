import {bootstrap} from '@angular/platform-browser-dynamic'
import {provideForms, disableDeprecatedForms} from '@angular/forms'
import {CoRequestManagerComponent} from '../request-manager/co-request-manager.component'
import {provideStore} from '@ngrx/store'

import {RequestManagerService} from '../request-manager/request-manager.service'
import {
  cbsReducer,
  initializeCbs,
  getInitialCbsState,
  CbsModel
} from 'co-browser-storage/co-browser-storage'
import {browserStorageConfig} from './browser-storage.config'

initializeCbs(browserStorageConfig)

bootstrap(CoRequestManagerComponent, [
  provideForms(),
  disableDeprecatedForms(),
  CbsModel,
  provideStore({
    cbsReducer
  }, {
    cbsReducer: getInitialCbsState()
  })
]).catch(err => console.error(err))