export const NAMESPACE = 'co-request-manager'
export const DEBUG_MODE = 'debugMode'
export const REQUEST_MANAGER_CONFIG = 'requestManagerConfig'

export const browserStorageConfig = {
  namespace: NAMESPACE,
  initialState: [
    // List storage variables here
    {
      key: DEBUG_MODE,
      value: 'true',
      storageType: 'localStorage',
      valueType: 'text'
    },
    {
      key: REQUEST_MANAGER_CONFIG,
      value: '{"requests": []}',
      storageType: 'localStorage',
      valueType: 'text'
    }
  ]
}