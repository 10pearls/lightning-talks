import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SlackRoutingModule } from './slack-routing.module';

import {FormlyModule} from '@ngx-formly/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    FormlyModule.forRoot(),
    SharedModule,
    SlackRoutingModule
  ]
})
export class SlackModule { }
