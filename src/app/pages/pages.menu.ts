
export const menu = {
  theme: 'dark',
  mode: 'inline',
  items: [
    {
      type: 'submenu',
      title: 'Dashboard',
      icon: 'dashboard',
      childs: [
        {
          path: './welcome',
          name: 'Welcome'
        },
        {
          path: './monitor',
          name: 'Monitor'
        }
      ]
    },
    {
      type: 'submenu',
      title: 'Component',
      icon: 'appstore',
      childs: [
        {
          path: './table',
          name: 'Table',
        },
        {
          path: './form',
          name: 'Form'
        }
      ]
    }
  ]
};
