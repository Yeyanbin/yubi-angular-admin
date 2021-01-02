import { langType } from '@utils/lang';
import { getLocalTheme, setLocalLang, setLocalTheme } from '@utils/storage';
import { IAction, Module, use } from './base';
import { getLocalLang } from '@utils/storage';
import { NzMenuThemeType } from 'ng-zorro-antd/menu';

const tool = use();

interface IKeyDown {
  [arg: string]: boolean;
}

interface ILayoutState {
  isCollapsed: boolean;
  lang: langType;
  keyDown: IKeyDown;
  siderTheme: NzMenuThemeType;
}

const layoutState: ILayoutState = {
  isCollapsed: false,
  lang: getLocalLang() || 'en-uk',
  keyDown: {},
  siderTheme: getLocalTheme() || 'light',
};

const layoutAction: IAction = {

};

class LayoutModule extends Module<ILayoutState> {

  constructor() {
    super(layoutState, layoutAction);
    this.init();
  }

  private init(): void {

    document.onkeydown = (e: KeyboardEvent) => {
      // tslint:disable: no-unused-expression
      const keyDown = this.state.keyDown;

      if ( !keyDown[e.key] ) {
        keyDown[e.key] = true;
        console.log(this.state.keyDown);

        // ctrl+
        if ( keyDown.Control ) {
          // 绑定快捷键
          keyDown.q && (this.isCollapsed = !this.isCollapsed);
          keyDown[1] && tool.router?.navigateByUrl('/pages');
          keyDown[2] && tool.router?.navigateByUrl('/pages/monitor');
          keyDown[3] && tool.router?.navigateByUrl('/pages/users');
          keyDown[4] && tool.router?.navigateByUrl('/pages/table');
          keyDown[5] && tool.router?.navigateByUrl('/pages/form');
          keyDown[6] && tool.router?.navigateByUrl('/pages/setting');

          // 保留原生快捷键
          !(keyDown.z || keyDown.x || keyDown.c || keyDown.v) && e.preventDefault();
        }
      }else {
        // 重复触发阻止
        e.preventDefault();
      }
    };
    document.onkeyup = (e: KeyboardEvent) => {
      this.state.keyDown[e.key] = false;
      e.preventDefault();
    };
  }

  public get isCollapsed(): boolean {
    return this.state.isCollapsed;
  }


  public set isCollapsed(v: boolean) {
    this.state.isCollapsed = v;
  }


  public get siderTheme(): NzMenuThemeType {
    return this.state.siderTheme;
  }

  public set siderTheme(v: NzMenuThemeType) {
    this.state.siderTheme = v;
    setLocalTheme(v);
  }

  public get lang(): langType {
    return this.state.lang;
  }

  public set lang(v: langType) {
    this.state.lang = v;
    setLocalLang(v);
    // window.location.reload(); reload的静态页面部署会出现问题
    window.location.replace('./');
  }
}

export const layoutModule = new LayoutModule();
