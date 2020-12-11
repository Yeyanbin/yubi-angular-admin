import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { NavComponent } from './_components/nav/nav.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';

import { DashboardModule } from './page/dashboard/dashboard.module';
import { FormModule } from './page/form/form.module';
// import { DashboardModule } from './page/dashboard/dashboard.module';



@NgModule({
  declarations: [LayoutComponent, NavComponent, SidebarComponent],
  imports: [
    DashboardModule,
    CommonModule,
    LayoutRoutingModule,
    FormModule
  ]
})
export class LayoutModule { }
