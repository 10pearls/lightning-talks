import { TestBed } from '@angular/core/testing';

import { SlackServiceService } from './slack-service.service';

describe('SlackServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlackServiceService = TestBed.get(SlackServiceService);
    expect(service).toBeTruthy();
  });
});
