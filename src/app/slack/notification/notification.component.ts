import { Component, OnInit } from '@angular/core';
import { SlackHttpClientService } from '../../core/slack-http-client/slack-http-client.service';
import { SlackPayloadBuilder } from '../slack-payload/slackPayloadBuilder';
import { ButtonStyle } from '../slack.const';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private slackHttpClientService: SlackHttpClientService) { }

  ngOnInit() {
  }

  sendNotification() {
    const payloadBuilder = new SlackPayloadBuilder({
      title: 'Sample Talk Title',
      description: 'Sample Description',
      speakers: ['Dayem', 'Hussain', 'Sadiq', 'Siddiqui'],
      date: '15 Aug, 2019',
    });
    const payload = payloadBuilder
      .addAnnouncement()
      .addAnnouncementTitle()
      .addTalkTitle()
      .addTalkDescription()
      .addSpeakers()
      .addDate()
      .addVenue()
      .addTime()
      .addGIF('')
      .addFooter()
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
