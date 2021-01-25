import { Action, IUserState, YubiModule } from './base';
import { getUserID, getUserTokenID, removeUserID, removeUserTokenID, setUserID, setUserTokenID } from '@utils/storage';
import { Injectable } from '@angular/core';
import { UserService } from '@api/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
@YubiModule({
  name: 'user'
})
/**
 * A service of UserModule that inject 'root'
 */
export class UserModule {

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  public state: IUserState = {
    userID: getUserID() || '',
    userPwd: '',
    token: '',
    tokenID: getUserTokenID() || 0,
  };

  /**
   * Login func.
   * @param userID userID
   * @param passID PassID
   * @param remember If save userID and tokenID into localstorage.
   */
  @Action({log: 'Login Action'})
  login(userID: string, passID: string, remember: boolean = false): boolean {
    let success = false;
    this.userService.login(userID, passID).subscribe(
      (res: any) => {
        // tslint:disable-next-line: no-conditional-assignment
        if (success = res.success) {
          this.state.userID = userID;
          this.state.token = res.token;
          this.state.tokenID = res.tokenID;
          console.log(this.state);
          if (remember) {
            setUserID(userID);
            setUserTokenID(res.tokenID);
          }

          this.router.navigateByUrl('/');
        }
      }
    );
    return success;
  }
  /**
   * logout
   */
  @Action({log: 'Logout Action'})
  logout(): void {
    // this.login = (...[]): boolean => true;
    removeUserID();
    removeUserTokenID();
    this.state.userID = '';
    this.state.tokenID = 0;
    this.router.navigateByUrl('/login');
  }
}
