import { Component, OnInit } from '@angular/core';
import { SlackHttpClientService } from '../../core/slack-http-client/slack-http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
