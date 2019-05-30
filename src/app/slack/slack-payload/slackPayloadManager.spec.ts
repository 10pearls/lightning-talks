import { TestBed } from '@angular/core/testing';

import { SlackPayloadBuilder } from './slackPayloadBuilder';

describe('SlackPayloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlackPayloadBuilder = TestBed.get(SlackPayloadBuilder);
    expect(service).toBeTruthy();
  });
});
