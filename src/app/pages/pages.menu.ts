import { text } from '@utils/lang';
import { NzMenuThemeType } from 'ng-zorro-antd/menu';

interface IMenu {
  theme: NzMenuThemeType;
  mode: string;
  items: Array<any>;
}

export const menu: IMenu = {
  theme: 'light',
  mode: 'inline',
  items: [
    {
      type: 'submenu',
      title: text.menu?.dashboard,
      icon: 'dashboard',
      childs: [
        {
          path: './welcome',
          name: text.menu?.welcome
        },
        {
          path: './monitor',
          name: text.menu?.monitor
        },
        {
          path: './users',
          name: text.menu?.users
        }
      ]
    },
    {
      type: 'submenu',
      title: text.menu?.component,
      icon: 'appstore',
      childs: [
        {
          path: './table',
          name: text.menu?.table,
        },
        {
          path: './form',
          name: text.menu?.form
        }
      ]
    },
    {
      type: 'item',
      name: text.menu?.setting,
      icon: 'setting',
      path: './setting'
    }
  ]
};
