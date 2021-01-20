import { IText } from '.';

export const CN: IText = {
  lang: {
    CN: '中文',
    EN: '英语',
    JP: '日语',
  },
  layout: {
    shortcutKeyList: [
      {
        title: '快捷键 - 全局',
        items: [
          { key: 'Z + Q', describe: '收缩菜单' },
          { key: 'Z + 数字键', describe: '按菜单顺序导航' },
        ],
      },
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
    demoUser: '输入任何账号密码即可。',
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
};
