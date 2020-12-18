import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, NavigationStart, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// 一定要加这个
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate{

  constructor( private router: Router) { }


  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    console.log(router);
    console.log(state);
    // this.router.navigateByUrl('/login');
    return true;
    // return loggedIn;
  }


}