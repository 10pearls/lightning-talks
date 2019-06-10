import { Component, OnInit } from '@angular/core';
import { SlackHttpClientService } from '../../core/slack-http-client/slack-http-client.service';
import { SlackPayloadBuilder } from '../slack-payload/slackPayloadBuilder';
import { ButtonStyle } from '../slack.const';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NotificationFormlyModel } from './notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  form = new FormGroup({});
  model: NotificationFormlyModel | {} = {};
  fields: FormlyFieldConfig[] = [{
    key: 'title',
    type: 'input',
    templateOptions: {
      label: 'Talk Title',
      placeholder: 'Please enter the talk title',
      required: true,
    },
  },
  {
    key: 'description',
    type: 'input',
    templateOptions: {
      label: 'Talk Description',
      placeholder: 'Please enter the talk description',
      required: true,
    },
  },
  {
    key: 'speakers',
    type: 'input',
    templateOptions: {
      label: 'Speakers(comma separated)',
      placeholder: 'Dayem,Sadiq,Hussain',
      required: true,
    },
  },
  {
    key: 'date',
    type: 'input',
    templateOptions: {
      label: 'Date',
      placeholder: '24th Jan 2019',
      required: true,
    },
  }];

  submit(model :NotificationFormlyModel) {
    console.log(model);
    this.sendNotification(model);
  }

  constructor(private slackHttpClientService: SlackHttpClientService) { }

  ngOnInit() {
  }

  sendNotification(model: NotificationFormlyModel) {
    const payloadBuilder = new SlackPayloadBuilder({
      title: model.title,
      description: model.description,
      speakers: model.speakers.split(','),
      date: model.date,
    });
    const payload = payloadBuilder
      .preparePayload()
      .addFooterField({
        title: 'You can sign up for your very own Lightning Talk or follow the Talks schedule',
        value: '',
        short: false,
      })
      .addFooterButton('Sign up for Lightning Talk',
        'http://wiki.10pearls.com:8181/view/LightningTalks/#HCallforProposals', ButtonStyle.primary)
      .addFooterButton('Check the Lightning Calendar',
        'http://wiki.10pearls.com:8181/view/LightningTalks/#HTalks',
        ButtonStyle.default)
      .addFooterButton('Give a Lightning feedback',
        'https://goo.gl/forms/CuQ3IfSUiQ0uYek03',
        ButtonStyle.danger)
      .getSlackPayload();
    console.log('Why Printing Twice', payload);
    this.slackHttpClientService.sendNotification(payload);
  }
}
