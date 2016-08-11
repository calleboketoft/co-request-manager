import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { RequestFormModule } from '@calle/ng2-request-form/request-form'
import { Ng2TableModule } from '@calle/ng2-table/ng2-table'
import { ManageSavedRequestsComponent } from './manage-saved-requests.component'
import { RequestManagerComponent } from './request-manager.component'
import { RequestManagerService } from './request-manager.service'

@NgModule({
  declarations: [
    ManageSavedRequestsComponent,
    RequestManagerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RequestFormModule,
    Ng2TableModule
  ],
  exports: [
    RequestManagerComponent
  ],
  providers: [
    RequestManagerService
  ]
})
export class RequestManagerModule { }