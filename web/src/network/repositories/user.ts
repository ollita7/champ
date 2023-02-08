import { BaseClient } from '../appClient';
import { ILogin } from '../services/user/user.service';

const ENDPOINTS = {
  getProfile: () => `user/profile`,
  login: () => `user/login`
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