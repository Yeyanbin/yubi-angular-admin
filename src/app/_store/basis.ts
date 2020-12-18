
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

  // public action(actionName: string, ...arg: any[]): Promise<string> {
  //   return new Promise<string>((resolve, reject) => {
  //     this.actionFunc[actionName](arg);
  //     resolve('done');
  //   });
  // }


  public get action(): IAction {
    return this.actionFunc;
  }
}
