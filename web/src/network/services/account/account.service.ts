import { LOCAL_STORAGE } from '../../constants';

const setCurrentAccount = (account) => {
  localStorage.setItem(LOCAL_STORAGE.ACCOUNT_KEY, JSON.stringify(account))
}

const getCurrentAccount = () => {
  let account:any = localStorage.getItem(LOCAL_STORAGE.ACCOUNT_KEY);
  if (account)
    account = JSON.parse(account)
  return account;
}

export { setCurrentAccount, getCurrentAccount }