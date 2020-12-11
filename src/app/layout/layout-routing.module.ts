import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashborad',
      },
      {
        path: 'dashborad',
        component: DashboardComponent,
        // loadChildren: () => import('./page/dashboard/dashboard.module')
        //   .then(m => m.DashboardModule),
      },
      {
        path: 'form',
        loadChildren: () => import('./page/form/form.module')
          .then(m => m.FormModule),
      },
      {
        path: 'table',
        loadChildren: () => import('./page/table/table.module')
          .then(m => m.TableModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('./page/setting/setting.module')
          .then(m => m.SettingModule),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
