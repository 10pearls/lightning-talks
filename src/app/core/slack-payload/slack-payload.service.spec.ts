import { TestBed } from '@angular/core/testing';

import { SlackPayloadService } from './slack-payload.service';

describe('SlackPayloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlackPayloadService = TestBed.get(SlackPayloadService);
    expect(service).toBeTruthy();
  });
});
