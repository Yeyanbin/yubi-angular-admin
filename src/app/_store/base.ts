import { langType } from '@utils/lang';
import { NzMenuThemeType } from 'ng-zorro-antd/menu';

/**
 * function
 */
export interface IAction {
  [key: string]: (...arg: any[]) => any;
}

/**
 * father
 */
export interface Module<T> {
  state: T;
  action: IAction;
}

export interface IUserState {
  userID: string;
  userPwd: string;
  token: string;
  tokenID: number;
}

export interface ILayoutState {
  isCollapsed: boolean;
  lang: langType;
  siderTheme: NzMenuThemeType;
  keyDown: { [arg: string]: boolean };
  keyDownFunc: { [func: string]: () => void};
}

export interface IHistoryState {
  list: {
    name: string;
    url: string;
  }[];
  onShow: string;
}

interface IActionOption {
  log?: string;
}

/**
 * Action descriptor. It's readonly.
 * @param option
 *  log：Output log text when this action done.
 *  test: A
 */
export const Action = ({ log }: IActionOption = {}) =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

  descriptor.writable = false;

  const action = descriptor.value;

  descriptor.value = function(): any {
    console.log('Action ' + propertyKey + ', log msg: ' + log + ', time: ' + Date.now());
    action.apply(this, arguments);
    return descriptor;
  };

  return descriptor;
};
