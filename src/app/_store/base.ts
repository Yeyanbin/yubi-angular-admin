import { Router } from '@angular/router';
import { UserService } from '@api/user';

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

export const useUserService = (service: UserService) => {
  imports.userService = service;
};

export const useRouter = (r: Router) => {
  imports.router = r;
};

/**
 * @return imports
 */
export const use = () => {
  return imports;
};
