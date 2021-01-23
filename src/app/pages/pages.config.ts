import { text } from '@utils/lang';

export interface IMenu {
  items: Array<any>;
}

/**
 * This is the options of Menu. Use In the sidebar component.
 */
export const menu: IMenu = {
  items: [
    {
      type: 'submenu',
      title: text.menu?.dashboard,
      icon: 'dashboard',
      childs: [
        {
          path: '/pages/welcome',
          name: text.menu?.welcome
        },
        {
          path: '/pages/monitor',
          name: text.menu?.monitor
        },
        {
          path: '/pages/users',
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
          path: '/pages/table',
          name: text.menu?.table,
        },
        {
          path: '/pages/form',
          name: text.menu?.form
        }
      ]
    },
    {
      type: 'item',
      name: text.menu?.setting,
      icon: 'setting',
      path: '/pages/setting'
    }
  ]
};
