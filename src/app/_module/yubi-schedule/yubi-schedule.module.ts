import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YubiScheduleComponent } from './yubi-schedule.component';
import { NzTableModule } from 'ng-zorro-antd/table';



@NgModule({
  declarations: [YubiScheduleComponent],
  imports: [
    CommonModule,
    NzTableModule,
  ],
  providers: [
    YubiScheduleComponent
  ]
})
export class YubiScheduleModule { }
