import { Action, YubiModule } from './base';
import { getUserID, getUserTokenID, removeUserID, removeUserTokenID, setUserID, setUserTokenID } from '@utils/storage';
import { Injectable } from '@angular/core';
import { UserService } from '@api/user';
import { Router } from '@angular/router';

export interface IUserState {
  userID: string;
  userPwd: string;
  token: string;
  tokenID: number;
  originalWorks: IWorkItem[];
  works: IGanttItem[];
}


export interface IGanttItem {
  start: number;
  end: number;
  aLineItems: IWorkItem[];
}

export interface IWorkItem {
  name: string;
  start: number;
  end: number;
  partners: string[];
  schedule: ISchedule[];
  status: string;
}

export interface ISchedule {
  time: number;
  msg: string;
  workers: string[];
}

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
    originalWorks: [],
    works: [],
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
   * get works api
   */
  @Action({ log: 'Get works'})
  getWorks(): void {
    this.userService.getWorks(this.state.userID, this.state.token).subscribe(
      (res: IWorkItem[]) => {
        console.log(this.state.originalWorks);
        // this.state.originalWorks = res.copyWithin();
        res.sort((a: IWorkItem, b: IWorkItem) => b.start - a.start);
        res.forEach(item => this.state.originalWorks.push(item));

        let elementPush = false;
        while ( res.length > 0 ) {
          elementPush = false;
          const element = res.pop() as IWorkItem;

          this.state.works.forEach(item => {
            if ( !elementPush && element.start > item.end ) {
              item.aLineItems.push(element);
              item.end = element.end;
              elementPush = true;
            }
          });
          // tslint:disable-next-line:no-unused-expression
          !elementPush && this.state.works.push({
            start: element.start,
            end: element.end,
            aLineItems: [element],
          });
        }

        console.log(this.state.works);
      },
    );
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
