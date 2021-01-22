import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes, Router } from '@angular/router';
import { LoginGuard } from '@api/guard/Permissions';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages' },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),  canActivate: [LoginGuard]},
  { path: 'login', loadChildren: () => import('./others/login/login.module').then(m => m.LoginModule) },
  { path: '**', loadChildren: () => import('./others/not-found/not-found.module').then(m => m.NotFoundModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
