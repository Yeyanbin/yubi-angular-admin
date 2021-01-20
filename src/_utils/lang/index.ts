import { getLocalLang } from '@utils/storage';
import { CN } from './CN';
import { EN } from './EN';
import { JP } from './JP';

export let LOCAL_LANG: langType = getLocalLang() || 'en-uk';
const DEFAULT_LANG: langType = 'en-uk';

export type langType = 'zh-cn' | 'zh-hk' | 'en-uk' | 'ja-jp';

type lang = {
  [key in langType]: IText;
};

export interface IText {
  lang?: {
    CN: string,
    EN: string,
    JP: string,
  };
  layout?: {
    shortcutKeyList: Array<{
      title: string,
      items: Array<{
        key: string,
        describe: string;
      }>
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
    demoUser: string,
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
  'zh-cn': CN,
  'zh-hk': { },
  'en-uk': EN,
  'ja-jp': JP,
};

/**
 * 建议使用如下方式：
 *  text.user?.login
 */
export let text: IText = new Proxy(data, {
  get(target: lang, propKey: string): IText {
    if (propKey in target[LOCAL_LANG]) {
      return target[LOCAL_LANG][propKey];
    } else {
      // LOCAL_LANG 不存在，使用默认语言
      return target[DEFAULT_LANG][propKey];
    }
  }
});

