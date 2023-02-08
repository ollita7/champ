import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Config } from '../utils/config';
import toast from 'react-hot-toast';
import { HEADERS, STATUS_CODES, TIMEOUT } from './constants';
import { NetworkUtils } from './networkUtils';

class ApiClient {
  ApiInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.ApiInstance = axios.create({
      baseURL,
      timeout: TIMEOUT,
      headers: HEADERS,
    });

    this.ApiInstance.interceptors.request.use(NetworkUtils.injectToken, error => Promise.reject(error));

    this.ApiInstance.interceptors.response.use(NetworkUtils.parseResponse, this.handleError);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.ApiInstance.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.ApiInstance.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.ApiInstance.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.ApiInstance.delete<T, R>(url, config);
  }

  getMessage = (message, error) => {
    return message ? message : error;
  }

  handleError = async (error: AxiosError) => {
    const { response } = error;
    const status = response?.status ?? '';
    const message = response?.data.meta.message;

    switch (status) {
      case STATUS_CODES.INTERNAL_SERVER_ERROR: {
        toast.error(this.getMessage(message,'Internal Error'));
        break;
      }
      case STATUS_CODES.FORBIDDEN: {
        toast.error(this.getMessage(message,'Forbidden'));
        break;
      }
      case STATUS_CODES.UNAUTHORIZED: {
        toast.error(this.getMessage(message,'You don`t have access'));
        break;
      }
      case STATUS_CODES.NOT_FOUND: {
        toast.error(this.getMessage(message,'Method not found'));
        break;
      }
      case STATUS_CODES.BAD_REQUEST: {
        toast.error(response?.data.meta.message);
        break;
      }
      default:
        toast.error('Contact to administrator');
        break;
    }

    return Promise.reject(response);
  };
}

const { API_URL } = Config;

const BaseClient = new ApiClient(API_URL);

export { BaseClient };
