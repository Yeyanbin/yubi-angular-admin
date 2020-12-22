const BASE = 'ng-yubi-template';

const USERID_KEY = 'userid';
const USERTOKENID_KEY = 'user-tokenid';

export const getUserID = () => localStorage.getItem(BASE + '-' + USERID_KEY);
export const setUserID  = (userID: string) => localStorage.setItem(BASE + '-' + USERID_KEY, userID);
export const removeUserID = () => localStorage.removeItem(BASE + '-' + USERID_KEY);


export const getUserTokenID = () => parseInt(localStorage.getItem(BASE + '-' + USERTOKENID_KEY) || '0');
export const setUserTokenID  = (tokenID: string) => localStorage.setItem(BASE + '-' + USERTOKENID_KEY, tokenID);
export const removeUserTokenID = () => localStorage.removeItem(BASE + '-' + USERTOKENID_KEY);
