import { Component, Output, EventEmitter, Input } from '@angular/core'
import { CbsModel } from '@calle/ng2-browser-storage/co-browser-storage'
import { RequestManagerConfig } from './request-manager.config'

@Component({
  selector: 'manage-requests',
  template: `
    <div [style.height]="listHeight">
      <ng2-table
        [tableConfig]="tableConfig"
        [tableData]="requestList$ | async"
        (selected)="selectedRequest.emit($event)"
        (buttonClicked)="removeItem($event)">
      </ng2-table>
    </div>
  `
})
export class ManageSavedRequestsComponent {
  @Input() listHeight = 'auto';
  @Output() selectedRequest = new EventEmitter();
  constructor (
    private cbsModel: CbsModel,
    private requestManagerConfig: RequestManagerConfig
  ) {}

  public tableConfig = {
    columnDefs: [
      {
        field: 'name',
        displayName: 'Name',
        search: true
      },
      {
        field: 'method',
        displayName: 'Method',
        search: true
      },
      {
        field: 'group',
        displayName: 'Group',
        search: true,
        sortDefault: true
      },
      {
        displayName: '',
        type: 'button',
        config: {
          buttonName: 'remove',
          buttonClass: 'btn btn-sm btn-outline-danger'
        }
      }
    ]
  }

  public requestList$ = this.cbsModel
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

  public removeItem ({colSpec, row}) {
    if (confirm('Are you sure you want to remove request?')) {
      this.cbsModel.getItemByKey(this.requestManagerConfig.browserStorageKey)
        .take(1)
        .subscribe(config => {
          // Currently saved config
          let configFromStorage = JSON.parse(config.value)
          // Remove request from requests array
          let requestsItemRemoved = configFromStorage.requests.filter(savedRequest => {
            return savedRequest.id !== row.id
          })
          // create updated config object with request removed
          let updatedConfig = Object.assign({}, configFromStorage, {
            requests: requestsItemRemoved
          })
          // persist updated config to browser storage
          this.cbsModel.updateItem({
            key: this.requestManagerConfig.browserStorageKey,
            value: JSON.stringify(updatedConfig)
          })
        })
    }
  }
}
