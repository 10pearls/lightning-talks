import { TestBed } from '@angular/core/testing';

import { SlackHttpClientService } from './slack-http-client.service';

describe('SlackHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlackHttpClientService = TestBed.get(SlackHttpClientService);
    expect(service).toBeTruthy();
  });
});
