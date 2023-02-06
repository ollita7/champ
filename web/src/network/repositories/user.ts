import { BaseClient } from '../appClient';
import { Config } from '../../utils/config';
import { ILogin } from '../services/user/user.service';

const ENDPOINTS = {
  getProfile: () => `${Config.API_URL}user/profile`,
  login: () => `${Config.API_URL}login/`
} 

const getProfile = (): Promise<any> => {
  return BaseClient.get(ENDPOINTS.getProfile());
};

const login = (data: ILogin): Promise<any> => {
  return BaseClient.post(ENDPOINTS.login(), data);
};

export const UserRepository = {
  getProfile, login
}