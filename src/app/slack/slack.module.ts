import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SlackRoutingModule } from './slack-routing.module';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    SlackRoutingModule
  ]
})
export class SlackModule { }
