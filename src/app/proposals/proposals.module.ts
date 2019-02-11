import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ApplicationFormComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class ProposalsModule { }
