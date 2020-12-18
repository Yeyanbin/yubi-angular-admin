import { Injectable } from '@angular/core';
import { UserService } from '@api/user';
import { IAction, Module } from './basis';

interface IUserState {
  userID: string;
  token: string;
  tokenID: number;
}

const userState: IUserState = {
  userID: 'test',
  token: 'g',
  tokenID: 0
};

let userService: UserService;

const userAction: IAction = {
  setUserID: (userID: string): void => {
    userState.userID = userID;
  },
  login: (userID: string, passID: string): boolean => {
    let success = false;

    userService.login(userID, passID).subscribe(
      (res: any) => {
        // tslint:disable-next-line: no-conditional-assignment
        if ( success = res.success ) {
          userAction.setUserId(userID);
          userState.token = res.token;
          userState.tokenID = res.tokenID;
        }
      }
    );
    return success;
  }
};

class UserModule extends Module<IUserState> {

  constructor() {
    super(userState, userAction);
  }
  public get userID(): string {
    return this.state.userID;
  }

  setUserService = (service: UserService) => {
    userService = service;
  }
}

const userModule = new UserModule();

export const getUserModule = () => {
  return userModule;
};
