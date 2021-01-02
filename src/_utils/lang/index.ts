import { getLocalLang } from '@utils/storage';

export let LOCAL_LANG: langType = getLocalLang() || 'en-uk';
const DEFAULT_LANG: langType = 'zh-cn';


export type langType = 'zh-cn' | 'zh-hk' | 'en-uk';

type lang = {
  [key in langType]: IText;
};

export interface IText {
  lang?: {
    CN: string,
    EN: string,
  };
  layout?: {
    shortcutKey: string,
    shortcutKeyList: Array<{
      key: string,
      describe: string;
    }>,
    langSelect: string;
    themeSelect: string;
    theme: {
      dark: string;
      light: string;
    }
  };
  user?: {
    welcome: (name: string) => string,
    loginTitle: string,
    username: string,
    password: string,
    forgetPwd: string,
    rememberMe: string,
    register: string,
    login: string,
    logout: string,
  };
  form?: {
    year: string,
    day: string,
  };
  menu?: {
    dashboard: string;
    welcome: string;
    monitor: string;
    users: string;
    component: string;
    table: string;
    form: string;
    setting: string;
  };
  [key: string]: any;
}

const data: lang = {
  'zh-cn': {
    lang: {
      CN: '中文',
      EN: '英语',
    },
    layout: {
      shortcutKey: '快捷键',
      shortcutKeyList: [
        { key: 'ctrl+q', describe: '收缩菜单' },
        { key: 'ctrl+数字键', describe: '按菜单顺序导航' },
      ],
      langSelect: '语言',
      themeSelect: '主题',
      theme: {
        dark: '暗夜',
        light: '亮白',
      }
    },
    user: {
      welcome: (name) => '欢迎，' + name + '!',
      loginTitle: '登录',
      username: '用户名',
      password: '密码',
      forgetPwd: '忘记密码',
      rememberMe: '记住账号',
      register: '注册',
      login: '登录',
      logout: '登出',
    },
    form: {
      year: '年',
      day: '天',
    },
    menu: {
      dashboard: '控制页',
      welcome: '欢迎页',
      monitor: '监控台',
      component: '组件页',
      users: '用户页',
      table: '表格',
      form: '表单',
      setting: '设置',
    }
  },
  'zh-hk': { },
  'en-uk': {
    lang: {
      CN: 'Chinese',
      EN: 'English',
    },
    layout: {
      shortcutKey: 'Shortcut Keys',
      shortcutKeyList: [
        { key: 'ctrl+q', describe: 'Stretch or shrink the menu.' },
        { key: 'ctrl+number', describe: 'Navigate by menu order.' },
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
  },
};

const proxyData = data;

export let text: IText = new Proxy(proxyData, {
  get(target: lang, propKey: string): IText {
    if (propKey in target[LOCAL_LANG]) {
      return target[LOCAL_LANG][propKey];
    } else {
      // LOCAL_LANG 不存在，使用默认语言
      return target[DEFAULT_LANG][propKey];
    }
  }
});
