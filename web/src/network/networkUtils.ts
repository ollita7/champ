import { AxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';
import { useGetUser } from './services/user.service';
import { API_STATUS_CODE } from './constants';

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  let newConfig = { ...config };

  try {
    const user = useGetUser();
    if (user && newConfig.headers) {
      newConfig.headers.Authorization = `Bearer ${user.token}`;
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