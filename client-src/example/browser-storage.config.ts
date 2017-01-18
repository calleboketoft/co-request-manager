export const NAMESPACE = 'co-request-manager'
export const DEBUG_MODE = 'debugMode'
export const REQUEST_MANAGER_CONFIG = 'requestManagerConfig'

export const browserStorageConfig = {
  namespace: NAMESPACE,
  initialState: [
    {
      key: REQUEST_MANAGER_CONFIG,
      value: `{"requests":[{"id":"07679251-7afb-49f0-b051-b3496824bbb5","name":"dummy","method":"GET","url":"http://something","headers":{"Some":"Header"},"body":"{}","tags":["examples"]}]}`,
      storageType: 'localStorage',
      valueType: 'text'
    }
  ]
}
