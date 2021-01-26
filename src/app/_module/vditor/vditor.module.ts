import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VditorComponent } from './vditor.component';



@NgModule({
  declarations: [VditorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VditorComponent
  ]
})
export class VditorModule { }
