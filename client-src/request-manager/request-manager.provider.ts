import {RequestManagerService} from './request-manager.service'
import {RequestManagerConfig} from './request-manager.config'
import {CbsModel} from '@calle/ng2-browser-storage/co-browser-storage'

// call this like provideCoRequestManager('theKeyInCbs')
export function provideRequestManager (cbsRequestManagerConfigKey) {
  let requestManagerServiceFactory = (cbsModel, requestManagerConfig) => {
    return new RequestManagerService(cbsModel, requestManagerConfig)
  }

  let requestManagerServiceProvider = {
    provide: RequestManagerService,
    useFactory: requestManagerServiceFactory,
    deps: [CbsModel, RequestManagerConfig]
  }

  let requestManagerConfigFactory = () => {
    return new RequestManagerConfig(cbsRequestManagerConfigKey)
  }

  let requestManagerConfigProvider = {
    provide: RequestManagerConfig,
    useFactory: requestManagerConfigFactory,
    deps: []
  }

  return [
    requestManagerServiceProvider,
    requestManagerConfigProvider
  ]
}