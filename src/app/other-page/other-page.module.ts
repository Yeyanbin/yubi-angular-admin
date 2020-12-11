import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPageRoutingModule } from './other-page-routing.module';
import { OtherPageComponent } from './other-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    OtherPageComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    OtherPageRoutingModule
  ]
})
export class OtherPageModule { }
