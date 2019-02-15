import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { generateNotificationPayload } from './generateNotificationPayload';

@Injectable({
  providedIn: 'root'
})
export class SlackService {
  private endpoint = environment.slackHook;
  constructor(
    private http: HttpClient,
  ) { }

  public sendNotification(data) {
    console.log('Inside Service', data.title, data.description, data.speakers, data.date, data.gifLink)
    const body = generateNotificationPayload(data.title, data.description, data.speakers, data.date.toString(), data.gifLink);
    console.log('Body', body);
    this.http.post(this.endpoint, {headers: new HttpHeaders({'Content-Type': undefined})}, body)
    .subscribe((response) => {
      console.log('Response from slack', response);
    })
  }
}
