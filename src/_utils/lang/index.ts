import { layoutModule } from '@store/layout';

export let LOCAL_LANG: langType = 'en-uk';
const DEFAULT_LANG: langType = 'zh-cn';


export type langType = 'zh-cn' | 'zh-hk' | 'en-uk';

type lang = {
  [key in langType]: IText;
};

interface IText {
  user?: {
    name: string,
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
    user: { name: '马' },
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
      setting: '设置'
    }
  },
  'zh-hk': {
    menu: {
      dashboard: 'Dashboard',
      welcome: 'Welcome',
      monitor: 'Monitor',
      users: 'users',
      component: 'Component',
      table: 'Table',
      form: 'Form',
      setting: 'Setting',
    }
  },
  'en-uk': {
    user: { name: 'Horse' },
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
    if (propKey in target[layoutModule.lang]) {
      return target[layoutModule.lang][propKey];
    } else {
      // LOCAL_LANG 不存在，使用默认语言
      return target[DEFAULT_LANG][propKey];
    }
  }
});

export const update = () => {
  console.log('更新text');
};
