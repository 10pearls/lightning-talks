import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';
import { SERVICE_STORAGE } from '../constants/storage.constant';
import { CogsHttpClient, cogsHttpClientCreator } from './cogs-http-client/cogs-http-client.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage/storage.service';
import { ToastMessageService } from './toast-message/toast-message.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    StorageServiceModule,
  ],
  providers: [
    {
      provide: SERVICE_STORAGE,
      useExisting: LOCAL_STORAGE,
    },
    {
      provide: CogsHttpClient,
      useFactory: cogsHttpClientCreator,
      deps: [HttpClient],
    },
    StorageService,
    AuthService,
    ToastMessageService,
  ],
})
export class CoreModule { }
