import { TestBed } from '@angular/core/testing';

import { ToastMessageService } from './toast-message.service';
import { MessageService } from 'primeng/api';

describe('ToastMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MessageService,
    ],
  }));

  it('should be created', () => {
    const service: ToastMessageService = TestBed.get(ToastMessageService);
    expect(service).toBeTruthy();
  });
});
