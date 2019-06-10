import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SlackRoutingModule } from './slack-routing.module';

import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';


@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyPrimeNGModule,
    SlackRoutingModule
  ]
})
export class SlackModule { }
