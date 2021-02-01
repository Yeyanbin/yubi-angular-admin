import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YmapRoutingModule } from './ymap-routing.module';
import { YmapComponent } from './ymap.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [YmapComponent],
  imports: [
    CommonModule,
    YmapRoutingModule,
    NzButtonModule,
    NzGridModule,
  ]
})
export class YmapModule { }
