import { AxiosRequestConfig } from 'axios';
import { Config } from '../utils/config';
import toast from 'react-hot-toast';
import { API_STATUS_CODE } from './constants';
import { getCurrentAccount } from './services/account/account.service';

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  let newConfig = { ...config };

  try {
    const token = localStorage.getItem(Config.TOKEN_NAME)
    const account = getCurrentAccount();
    if (token && newConfig.headers) {
      newConfig.headers.Authorization = `Bearer ${token}`;
      newConfig.headers[Config.ACCOUNT_HEADER] = account?.id;
    }
    return newConfig;
  } catch (error: any) {
    throw new Error(error);
  }
};

const parseResponse = (response) => {
  if (response.data.meta.code == API_STATUS_CODE.OK && response.data.meta.message.length > 0) {
    toast.success(response.data.meta.message);
  } else if (response.data.meta.code == API_STATUS_CODE.WARNING) {
    toast.error(response.data.meta.message);
  } else if (response.data.meta.code == API_STATUS_CODE.ERROR) {
    toast.error(response.data.meta.message);
  }
  return response.data.data;
}

export const NetworkUtils = {
  injectToken,
  parseResponse
};