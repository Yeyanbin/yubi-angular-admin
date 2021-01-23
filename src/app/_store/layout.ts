import { langType } from '@utils/lang';
import { getLocalTheme, setLocalLang, setLocalTheme } from '@utils/storage';
import { Action, ILayoutState } from './base';
import { getLocalLang } from '@utils/storage';
import { NzMenuThemeType } from 'ng-zorro-antd/menu';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { HistoryModule } from './history';
import { menu } from '../pages/pages.config';

// tslint:disable:no-unused-expression


@Injectable({
  providedIn: 'root'
})
export class LayoutModule {

  constructor(
    private router: Router,
    private historyModule: HistoryModule) {
    this.init();
  }

  state: ILayoutState = {
    isCollapsed: false,
    lang: getLocalLang() || 'en-uk',
    siderTheme: getLocalTheme() || 'light',
    keyDown: {},
    keyDownFunc: {},
  };


  private init(): void {

    const dfsMenu = (items: any[], container: {path: string; name: string}[]): any =>
      items.forEach((item) =>
        item.childs ?
          dfsMenu(item.childs, container) :
          container.push({name: item.name, path: item.path}));


    const menus: {path: string; name: string}[] = [];
    dfsMenu(menu.items, menus);

    this.historyModule.state.list.push(
      {name: this.historyModule.state.onShow = menus[0].name,
        url: menus[0].path });

    document.onkeydown = (e: KeyboardEvent) => {

      const keyDown = this.state.keyDown;

      if ( !keyDown[e.key] ) {
        keyDown[e.key] = true;
        console.log(this.state.keyDown);

        // z + Key
        if ( keyDown.z ) {
          // use key shortcuts
          keyDown.q && (this.isCollapsed = !this.isCollapsed);

          for (let index = 0 ; menus[index] ; ++index) {
            keyDown[index + 1] && this.router.navigateByUrl(menus[index].path)
            && this.historyModule.addHistory(menus[index].name, menus[index].path);
          }

          // native key shortcuts
          !( keyDown.Control ) && e.preventDefault();
        }
      }else {
        // Preventing repeated triggers
        keyDown.z && e.preventDefault();
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


  public get keyDownFunc(): { [func: string]: () => void} {
    return this.state.keyDownFunc;
  }
}
