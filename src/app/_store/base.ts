import { Router } from '@angular/router';
import { UserService } from '@api/user';
import { Injectable } from '@angular/core';


/**
 * This is ng service or Ng router
 */
const imports: {
  userService?: UserService;
  router?: Router;
} = {};

export interface IAction {
  [key: string]: (...arg: any[]) => any;
}

/**
 * father
 */
export class Module<T> {

  protected state: T;
  private actionFunc: IAction;

  constructor(state: T, action: IAction) {
    this.state = state;
    this.actionFunc = action;
  }
  /**
   * @return The function of Action from the Store Module
   */
  public get action(): IAction {
    return this.actionFunc;
  }
}

@Injectable({
  providedIn: 'root'
})
/**
 * This class is used for importing NgModule.
 */
export class UseNgModule {
  constructor(userService: UserService, router: Router) {
    imports.userService = userService;
    imports.router = router;
    console.log('inject imports!');
  }
}

/**
 * @return imports
 */
export const use = () => {
  return imports;
};
