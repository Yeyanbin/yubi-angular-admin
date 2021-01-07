import { IText } from '.';

export const EN: IText = {
  lang: {
    CN: 'Chinese',
    EN: 'English',
    JP: 'Japenese'
  },
  layout: {
    shortcutKeyList: [
      {
        title: 'Shortcut Keys - global',
        items: [
          { key: 'Z + Q', describe: 'Stretch or shrink the menu.' },
          { key: 'Z + number', describe: 'Navigate by menu order.' },
        ],
      },
    ],
    langSelect: 'language',
    themeSelect: 'theme',
    theme: {
      dark: 'dark',
      light: 'light',
    }
  },
  user: {
    welcome: (name) => 'Welcome, ' + name + '!',
    loginTitle: 'Login',
    username: 'Username',
    password: 'Password',
    forgetPwd: 'forget password',
    rememberMe: 'rememeber me',
    register: 'register now!',
    login: 'log in',
    logout: 'log out',
  },
  form: {
    year: 'year',
    day: 'day',
  },
  menu: {
    dashboard: 'Dashboard',
    welcome: 'Welcome',
    monitor: 'Monitor',
    users: 'users',
    component: 'Component',
    table: 'Table',
    form: 'Form',
    setting: 'Setting',
  },
};
