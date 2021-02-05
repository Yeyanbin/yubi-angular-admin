
import { Injectable } from '@angular/core';
import { text } from '@utils/lang';

// tslint:disable: no-non-null-assertion
export interface IMenu {
  items: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class PagesConfig {

  constructor() {
    // text 
  }
  text = text;

  /**
   * This is the options of Menu. Use In the sidebar component.
   */
  menu: IMenu = {
    items: [
      {
        type: 'submenu',
        title: () => this.text.menu?.dashboard,
        icon: 'dashboard',
        childs: [
          {
            path: '/pages/welcome',
            name: () => this.text.menu?.welcome
          },
          {
            path: '/pages/monitor',
            name: () => this.text.menu?.monitor
          },
          {
            path: '/pages/users',
            name: () => this.text.menu?.users
          }
        ]
      },
      {
        type: 'submenu',
        title: () => this.text.menu?.component,
        icon: 'appstore',
        childs: [
          {
            path: '/pages/table',
            name: () => this.text.menu?.table,
          },
          {
            path: '/pages/form',
            name: () => this.text.menu?.form
          },
          {
            path: '/pages/markdown',
            name: () => this.text.menu?.markdown
          },
          {
            path: '/pages/ymap',
            name: () => 'ymap'
          },
        ]
      },
      {
        type: 'item',
        name: () => this.text.menu?.setting,
        icon: 'setting',
        path: '/pages/setting'
      }
    ]
  };
  
}




