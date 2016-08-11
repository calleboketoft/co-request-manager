import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { CoRequestFormComponent } from 'co-request-form/co-request-form'
import { ManageRequestsComponent } from './manage-saved-requests.component'
import { CoRequestManagerComponent } from './co-request-manager.component'
import { CoRequestManagerService } from './co-request-manager.service'

@NgModule({
  declarations: [
    CoRequestFormComponent,
    ManageRequestsComponent,
    CoRequestManagerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    CoRequestManagerService
  ]
})
export class CoRequestManagerModule { }