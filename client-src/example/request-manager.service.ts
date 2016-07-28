import {Injectable} from '@angular/core'
import {CbsModel} from 'co-browser-storage/co-browser-storage'
import {REQUEST_MANAGER_CONFIG} from './browser-storage.config'
import 'rxjs/add/operator/take'

@Injectable()
export class RequestManagerService {
  constructor (private cbsModel: CbsModel) {}

  public saveNewRequest ({name, method, url, body, tags, headers}) {
    let newItem = {
      id: this.generateUUID(),
      name,
      method,
      url,
      headers,
      body,
      tags
    }
    this.cbsModel.getItemByKey(REQUEST_MANAGER_CONFIG)
      .take(1).subscribe(config => {
        let existingConfig = JSON.parse(config.value)
        existingConfig.requests.push(newItem)
        this.cbsModel.updateItem({
          key: REQUEST_MANAGER_CONFIG,
          value: JSON.stringify(existingConfig)
        })
      })
  }

  // Generate UUID
  // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  public generateUUID () {
    var d = new Date().getTime()
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now() //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c == 'x' ? r : (r&0x3|0x8)).toString(16)
    })
    return uuid
  }
}
