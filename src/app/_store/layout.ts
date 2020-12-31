import { langType, update } from '@utils/lang';
import { IAction, Module, use } from './base';

const tool = use();

interface ILayoutState {
  isCollapsed: boolean;
  lang: langType;
}

const layoutState: ILayoutState = {
  isCollapsed: false,
  lang: 'en-uk',
};

const layoutAction: IAction = {

};

class LayoutModule extends Module<ILayoutState> {

  constructor() {
    super(layoutState, layoutAction);
  }


  public get isCollapsed(): boolean {
    return this.state.isCollapsed;
  }


  public set isCollapsed(v: boolean) {
    this.state.isCollapsed = v;
  }

  public get lang(): langType {
    return this.state.lang;
  }

  public set lang(v: langType) {
    this.state.lang = v;
    update();
  }
}

export const layoutModule = new LayoutModule();
