import { langType } from '@utils/lang';
import { NzMenuThemeType } from 'ng-zorro-antd/menu';

/**
 * father
 */
export class Module<T> {
  public name = 'test';

  state?: T;
}



interface IActionOption {
  log?: string;
}

interface IModuleOption {
  name: string;
}



const logs: string[] = [];
/**
 * Action descriptor. It's readonly.
 * @param option
 *  log：Output log text when this action done.
 */
export const Action = ({ log }: IActionOption = {}) =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

  descriptor.writable = false;

  const action = descriptor.value;

  descriptor.value = function(): any {
    // tslint:disable-next-line:no-unused-expression
    log && logs.push(log);
    action.apply(this, arguments);
    return descriptor;
  };

  return descriptor;
};



/**
 * @param name name in modules
 */
export const YubiModule = ({ name }: IModuleOption) =>
  // tslint:disable-next-line:only-arrow-functions
  (target: any): any => {
    // console.log(this);
    // console.log(target);
    // modules[name] = new target();
    return target;
  };


export const PropertyDecorator = () => {
  return function (...arg: any) {
    // target[propertyName] = new Proxy()
    console.log(arg);
  }
}



export const getLog = (): string[] => {
  return logs;
};
