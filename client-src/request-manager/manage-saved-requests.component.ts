import {Component, Output, EventEmitter, Input} from '@angular/core'
import {CoListViewTableComponent} from 'co-list-view-table/co-list-view-table'
import {CbsModel} from 'co-browser-storage/co-browser-storage'
import {CoRequestManagerConfig} from './co-request-manager.config'

@Component({
  selector: 'manage-requests',
  directives: [CoListViewTableComponent],
  template: `
    <div [style.height]="listHeight">
      <co-list-view-table-cmp
        [tableConfig]="tableConfig"
        [tableData]="requestList$ | async"
        (selected)="selectedRequest.emit($event)"
        (buttonClicked)="removeItem($event)">
      </co-list-view-table-cmp>
    </div>
  `
})
export class ManageRequestsComponent {
  @Input() listHeight = 'auto';
  @Output() selectedRequest = new EventEmitter();
  constructor (
    private cbsModel: CbsModel,
    private coRequestManagerConfig: CoRequestManagerConfig
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
    .getItemByKey(this.coRequestManagerConfig.browserStorageKey)
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
      this.cbsModel.getItemByKey(this.coRequestManagerConfig.browserStorageKey)
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
            key: this.coRequestManagerConfig.browserStorageKey,
            value: JSON.stringify(updatedConfig)
          })
        })
    }
  }
}
