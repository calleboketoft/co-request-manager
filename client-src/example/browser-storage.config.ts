export const NAMESPACE = 'co-request-manager'
export const DEBUG_MODE = 'debugMode'

export const browserStorageConfig = {
  namespace: NAMESPACE,
  initialState: [
    // List storage variables here
    {
      key: DEBUG_MODE,
      value: 'true',
      storageType: 'localStorage',
      valueType: 'text'
    }
  ]
}