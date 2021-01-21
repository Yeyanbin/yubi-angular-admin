import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, NavigationStart, CanActivateChild, UrlTree } from '@angular/router';
import { UserModule } from '@store/user';
// 一定要加这个
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate{

  constructor( private router: Router, private userModule: UserModule) { }


  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    // console.log(router);
    // console.log(state);

    if ( this.userModule.state.userID && this.userModule.state.tokenID ) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }

    // return loggedIn;
  }


}
