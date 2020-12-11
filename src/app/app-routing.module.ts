import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: 'pages', component:  },
  { path: 'pages', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'other', loadChildren: () => import('./other-page/other-page.module').then(m => m.OtherPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
