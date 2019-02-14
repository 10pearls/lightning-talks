import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

import { Omit } from '../../interfaces/utility';
import { defaultTimeout } from '../../constants/toast-message';

type ToastMessageOptions = Omit<Message, 'severity' | 'summary' | 'detail'>;

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {

  constructor(
    private message: MessageService,
  ) {}

  success(title: string, detail: string, options?: ToastMessageOptions) {
    this.message.add({ summary: title, detail, severity: 'success', life: defaultTimeout, ...options });
  }

  error(title: string, detail: string, options?: ToastMessageOptions) {
    this.message.add({ summary: title, detail, severity: 'error', life: defaultTimeout, ...options });
  }

  clear(key?: string) {
    this.message.clear(key);
  }
}
