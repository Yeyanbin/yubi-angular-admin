import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherPageComponent } from './other-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: OtherPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPageRoutingModule { }
