import {CoRequestManagerService} from './co-request-manager.service'
import {CoRequestManagerConfig} from './co-request-manager.config'
import {CbsModel} from 'co-browser-storage/co-browser-storage'

// call this like provideCoRequestManager('theKeyInCbs')
export function provideCoRequestManager (cbsCoRequestManagerConfigKey) {
  let coRequestManagerServiceFactory = (cbsModel, coRequestManagerConfig) => {
    return new CoRequestManagerService(cbsModel, coRequestManagerConfig)
  }

  let coRequestManagerServiceProvider = {
    provide: CoRequestManagerService,
    useFactory: coRequestManagerServiceFactory,
    deps: [CbsModel, CoRequestManagerConfig]
  }

  let coRequestManagerConfigFactory = () => {
    return new CoRequestManagerConfig(cbsCoRequestManagerConfigKey)
  }

  let coRequestManagerConfigProvider = {
    provide: CoRequestManagerConfig,
    useFactory: coRequestManagerConfigFactory,
    deps: []
  }

  return [
    coRequestManagerServiceProvider,
    coRequestManagerConfigProvider
  ]
}