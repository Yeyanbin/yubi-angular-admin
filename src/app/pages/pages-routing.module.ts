import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children:
    [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'monitor', loadChildren: () => import('./monitor/monitor.module').then(m => m.MonitorModule) },
      { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
      { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
