import { NzMenuThemeType } from 'ng-zorro-antd/menu';
import { langType } from './lang';

const BASE = 'ng-yubi-template';

const USERID_KEY = 'userid';
const USERTOKENID_KEY = 'user-tokenid';
const LOCAL_LANG_KEY = 'local-lang';
const LOCAL_THEME_KEY = 'local-theme';



export const getUserID = () => localStorage.getItem(BASE + '-' + USERID_KEY);
export const setUserID  = (userID: string) => localStorage.setItem(BASE + '-' + USERID_KEY, userID);
export const removeUserID = () => localStorage.removeItem(BASE + '-' + USERID_KEY);


// tslint:disable-next-line: radix
export const getUserTokenID = () => parseInt(localStorage.getItem(BASE + '-' + USERTOKENID_KEY) || '0');
export const setUserTokenID  = (tokenID: string) => localStorage.setItem(BASE + '-' + USERTOKENID_KEY, tokenID);
export const removeUserTokenID = () => localStorage.removeItem(BASE + '-' + USERTOKENID_KEY);


export const getLocalLang = (): langType => localStorage.getItem(BASE + '-' + LOCAL_LANG_KEY) as langType;
export const setLocalLang  = (lang: langType) => localStorage.setItem(BASE + '-' + LOCAL_LANG_KEY, lang);
export const removeLocalLang = () => localStorage.removeItem(BASE + '-' + LOCAL_LANG_KEY);

export const getLocalTheme = (): NzMenuThemeType => localStorage.getItem(BASE + '-' + LOCAL_THEME_KEY) as NzMenuThemeType;
export const setLocalTheme  = (theme: NzMenuThemeType) => localStorage.setItem(BASE + '-' + LOCAL_THEME_KEY, theme);
export const removeLocalTheme = () => localStorage.removeItem(BASE + '-' + LOCAL_THEME_KEY);
