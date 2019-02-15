import { Component, OnInit } from '@angular/core';
import { SlackService } from '../slack-service.service';

@Component({
  selector: 'app-slack-notification',
  templateUrl: './slack-notification.component.html',
  styleUrls: ['./slack-notification.component.scss']
})
export class SlackNotificationComponent implements OnInit {

  formData = {
    title: '',
    description: '',
    date: '',
    speakers: '',
  };

  constructor(
    private slack: SlackService,
  ) { }

  ngOnInit() {
  }

  onSend() {
    console.log('Send Notification Button Clicked', this.formData)
    this.slack.sendNotification(this.formData);
  }

}
