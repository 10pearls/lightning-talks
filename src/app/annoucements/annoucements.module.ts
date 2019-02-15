import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlackNotificationComponent } from './slack-notification/slack-notification.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SlackNotificationComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AnnoucementsModule { }
