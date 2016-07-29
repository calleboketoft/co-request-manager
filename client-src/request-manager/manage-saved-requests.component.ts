import {Component, Output, EventEmitter} from '@angular/core'
import {CoListViewTableComponent} from 'co-list-view-table/co-list-view-table'
import {CbsModel} from 'co-browser-storage/co-browser-storage'
import {CoRequestManagerConfig} from './co-request-manager.config'

@Component({
  selector: 'manage-requests',
  directives: [CoListViewTableComponent],
  template: `
    <co-list-view-table-cmp
      [tableConfig]="tableConfig"
      [tableData]="requestList$ | async"
      (selected)="selectedRequest.emit($event)">
    </co-list-view-table-cmp>
  `
})
export class ManageRequestsComponent {
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
}
