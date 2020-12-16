import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YubiFormComponent } from './yubi-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';


@NgModule({
  declarations: [YubiFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzCheckboxModule
  ],
  providers: [FormBuilder],
  exports: [
    YubiFormComponent
  ]
})
export class YubiFormModule { }
