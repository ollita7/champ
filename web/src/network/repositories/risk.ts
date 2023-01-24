import { BaseClient } from '../appClient';
import { Config } from '../../utils/config';

const ENDPOINTS = {
  list: () => `${Config.API_URL}risk`
} 

const list = (params): Promise<any> => {
  return BaseClient.get(ENDPOINTS.list(), { params: params.queryKey[1] });
};

export const RiskRepository = {
  list
}