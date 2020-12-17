import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YubiFormComponent } from './yubi-form.component';
import { FormBuilder, NgControl, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [YubiFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzCheckboxModule,
    NzSelectModule,
    NzIconModule,
    NzDatePickerModule,

  ],
  providers: [FormBuilder],
  exports: [
    YubiFormComponent
  ]
})
export class YubiFormModule { }
