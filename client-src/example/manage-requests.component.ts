import {Component, Output, EventEmitter} from '@angular/core'
import {CoListViewTableComponent} from 'co-list-view-table/co-list-view-table'
import {CbsModel} from 'co-browser-storage/co-browser-storage'
import {REQUEST_MANAGER_CONFIG} from './browser-storage.config'

@Component({
  selector: 'manage-requests',
  directives: [CoListViewTableComponent],
  template: `
    <co-list-view-table-cmp
      [tableConfig]="tableConfig"
      [tableData]="(requestManagerConfig$ | async)?.requests"
      (selected)="selectedRequest.emit($event)">
    </co-list-view-table-cmp>
  `
})
export class ManageRequestsComponent {
  @Output() selectedRequest = new EventEmitter();
  constructor (private cbsModel: CbsModel) {}

  public tableConfig = {
    columnDefs: [
      {
        field: 'name',
        displayName: 'Name'
      },
      {
        field: 'method',
        displayName: 'Method'
      }
    ]
  }

  public requestManagerConfig$ = this.cbsModel.getItemByKey(REQUEST_MANAGER_CONFIG)
    .map(config => JSON.parse(config.value))
}
