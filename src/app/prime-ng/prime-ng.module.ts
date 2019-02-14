import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MessageModule,
    ToastModule,
  ],
  providers: [
    MessageService,
  ],
})
export class PrimeNgModule { }
