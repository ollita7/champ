import { BaseClient } from '../appClient';
import { Config } from '../../utils/config';

const ENDPOINTS = {
  getProfile: () => `${Config.API_URL}user/profile`
} 

const getProfile = (): Promise<any> => {
  return BaseClient.get(ENDPOINTS.getProfile());
};

export const UserRepository = {
  getProfile
}