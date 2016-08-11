import {RequestManagerService} from './request-manager.service'
import {RequestManagerConfig} from './request-manager.config'
import {BrowserStorageModel} from '@calle/ng2-browser-storage/browser-storage'

// call this like provideCoRequestManager('theKeyInCbs')
export function provideRequestManager (cbsRequestManagerConfigKey) {
  let requestManagerServiceFactory = (browserStorageModel, requestManagerConfig) => {
    return new RequestManagerService(browserStorageModel, requestManagerConfig)
  }

  let requestManagerServiceProvider = {
    provide: RequestManagerService,
    useFactory: requestManagerServiceFactory,
    deps: [BrowserStorageModel, RequestManagerConfig]
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