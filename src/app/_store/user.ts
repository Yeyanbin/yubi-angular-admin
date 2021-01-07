import { IAction, Module, use } from './base';
import { getUserID, getUserTokenID, removeUserID, removeUserTokenID, setUserID, setUserTokenID } from '@utils/storage';

const tool = use();
interface IUserState {
  userID: string;
  userPwd: string;
  token: string;
  tokenID: number;
}

const userState: IUserState = {
  userID: 'test',
  userPwd: '',
  token: '',
  tokenID: 0
};

const userAction: IAction = {
  /**
   * Login func.
   * @param userID userID
   * @param passID PassID
   * @param remember If save userID and tokenID into localstorage.
   */
  login: (userID: string, passID: string, remember: boolean = false): boolean => {
    let success = false;

    tool.userService?.login(userID, passID).subscribe(
      (res: any) => {
        // tslint:disable-next-line: no-conditional-assignment
        if ( success = res.success ) {
          userState.userID = userID;
          userState.token = res.token;
          userState.tokenID = res.tokenID;

          if (remember) {
            setUserID(userID);
            setUserTokenID(res.tokenID);
          }

          tool.router?.navigateByUrl('/');
        }
      }
    );
    return success;
  },
  /**
   * logout
   */
  logout: () => {
    removeUserID();
    removeUserTokenID();
    userState.userID = '';
    userState.tokenID = 0;
    tool.router?.navigateByUrl('/login');
  },
};

class UserModule extends Module<IUserState> {

  constructor() {
    super(userState, userAction);
    userState.userID = getUserID() || '';
    userState.tokenID = getUserTokenID() || 0;
  }
  public get userID(): string {
    return this.state.userID;
  }

  public get userPwd(): string {
    return this.state.userPwd;
  }

  public get tokenID(): number {
    return this.state.tokenID;
  }

  public get token(): string {
    return this.state.token;
  }
}

export const userModule = new UserModule();
