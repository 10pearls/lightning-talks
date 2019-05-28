import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SlackHttpClientService {

  const data: any = {
    attachments: [
      {
        fallback: '{{announcement}}\n*Title: * After effects of cheating small in business\n*Description: * {{description}} \n*Speaker(s): *Minhaj Uddin Khan\n*Date: *Tuesday, 9th April\n*Time: * 12:40 sharp (literally)\n*Venue: * 10Pearls University Auditorium',
        color: 'warning',
        fields: [
          {
            title: '',
            value: '@channel, and :zap: *\'Lightning Talks\'* :zap: fans, we have an upcoming talk tomorrow:',
            'short': false
          },
          {
            title: 'Title',
            value: 'Test sent from angular testing app',
            'short': false
          },
          {
            title: 'Description',
            value: 'Qur\'anic commentary on the evils of imbalanced attitudes in business.',
            'short': false
          },
          {
            title: 'Speaker(s)',
            value: 'Minhaj Uddin Khan',
            'short': true
          },
          {
            title: 'Date',
            value: 'Tuesday, 9th April',
            'short': true
          },
          {
            title: 'Venue',
            value: '10Pearls University Auditorium',
            'short': true
          },
          {
            title: 'Time',
            value: '12:40 sharp (literally)',
            'short': true
          }
        ]
      },
      {
        fallback: '',
        color: 'warning',
        image_url: ''
      },
      {
        fallback: 'You can sign up for your very own Lightning Talk, follow the Talks schedule, or give feedback at http://lightningtalks.10pearls.com',
        color: 'warning',
        fields: [
          {
            title: 'You can sign up for your very own Lightning Talk or follow the Talks schedule',
            value: '',
            'short': false
          }
        ],
        actions: [
          {
            type: 'button',
            style: 'primary',
            text: 'Sign up for Lightning Talk',
            url: 'http://wiki.10pearls.com:8181/view/LightningTalks/#HCallforProposals'
          },
          {
            type: 'button',
            style: 'default',
            text: 'Check the Lightning Calendar',
            url: 'http://wiki.10pearls.com:8181/view/LightningTalks/#HTalks'
          },
          {
            type: 'button',
            style: 'danger',
            text: 'Give a Lightning feedback',
            url: 'https://goo.gl/forms/CuQ3IfSUiQ0uYek03'
          }
        ]
      }
    ]
  };

  constructor(private http: HttpClient) { }

  sendNotification() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.http
      .post('https://hooks.slack.com/services/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', this.data, { headers })
      .subscribe((res) => {
        console.log('Sucess');
        console.log('Sucess', res);
      });
  }
}
