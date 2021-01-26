import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, NavigationStart, CanActivateChild, UrlTree } from '@angular/router';
import { HistoryModule } from '@store/history';
import { LayoutModule } from '@store/layout';
import { UserModule } from '@store/user';
// 一定要加这个
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate{

  constructor(
    private router: Router,
    private userModule: UserModule,
    private historyModule: HistoryModule,
    private layoutModule: LayoutModule) { }


  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if ( this.userModule.state.userID && this.userModule.state.tokenID ) {
      const url = state.url;
      let routerName = '';
      this.layoutModule.state.dfsMenus.forEach(({ name, path }) => {
        if ( url === path ) {
          routerName = name;
        }
      });
      this.historyModule.addHistory(routerName, url);
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }

    // return loggedIn;
  }


}
