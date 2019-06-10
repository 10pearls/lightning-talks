import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
  ],
  providers: [],
})
export class SharedModule { }
