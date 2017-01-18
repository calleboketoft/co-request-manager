import { Component, Output, EventEmitter, Input } from '@angular/core'
import { BrowserStorageModel } from '@calle/ng2-browser-storage'
import { RequestManagerConfig } from './request-manager.config'
import { TableConfigModel } from '@calle/ng2-table'

@Component({
  selector: 'manage-requests',
  template: `
    <div [style.height]="listHeight">
      <ng2-table
        [tableConfig]="tableConfig"
        [tableData]="requestList$ | async"
        (rowClicked)="selectedRequest.emit($event.rowData)"
        (cellItemClicked)="removeItem($event)">
      </ng2-table>
    </div>
  `
})
export class ManageSavedRequestsComponent {
  @Input() listHeight = 'auto'
  @Output() selectedRequest = new EventEmitter()

  public tableConfig: TableConfigModel = {
    tableNgClass: 'table table-striped table-hover',
    rowNgStyle: {'cursor': 'pointer'},
    columnDefs: [
      {
        field: 'name',
        headerText: 'Name',
        filterEnabled: true
      },
      {
        field: 'method',
        headerText: 'Method',
        filterEnabled: true
      },
      {
        field: 'group',
        headerText: 'Group',
        filterEnabled: true,
        sortDefault: 'asc'
      },
      {
        headerText: '',
        cellItem: {
          elementType: 'button',
          staticContent: 'remove',
          cellItemNgClass: 'btn btn-sm btn-danger'
        }
      }
    ]
  }

  public requestList$ = this.browserStorageModel
    .getItemByKey(this.requestManagerConfig.browserStorageKey)
    .map(config => {
      let configFromStorage = JSON.parse(config.value)
      let configWithGroup = configFromStorage.requests.map(request => {
        return Object.assign({}, request, {
          // just assume that tag[0] is group
          group: request.tags[0]
        })
      })
      return configWithGroup
    })

  constructor (
    private browserStorageModel: BrowserStorageModel,
    private requestManagerConfig: RequestManagerConfig
  ) {}

  public removeItem ({rowData}) {
    if (confirm('Are you sure you want to remove request?')) {
      this.browserStorageModel.getItemByKey(this.requestManagerConfig.browserStorageKey)
        .take(1)
        .subscribe(config => {
          // Currently saved config
          let configFromStorage = JSON.parse(config.value)
          // Remove request from requests array
          let requestsItemRemoved = configFromStorage.requests.filter(savedRequest => {
            return savedRequest.id !== rowData.id
          })
          // create updated config object with request removed
          let updatedConfig = Object.assign({}, configFromStorage, {
            requests: requestsItemRemoved
          })
          // persist updated config to browser storage
          this.browserStorageModel.updateItem({
            key: this.requestManagerConfig.browserStorageKey,
            value: JSON.stringify(updatedConfig)
          })
        })
    }
  }
}
