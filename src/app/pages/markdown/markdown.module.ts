import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownRoutingModule } from './markdown-routing.module';
import { MarkdownComponent } from './markdown.component';
import { VditorModule } from '@module/vditor/vditor.module';

@NgModule({
  declarations: [MarkdownComponent],
  imports: [
    CommonModule,
    MarkdownRoutingModule,
    VditorModule
  ]
})
export class MarkdownModule { }
