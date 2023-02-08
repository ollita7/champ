import { BaseClient } from '../appClient';
import { Config } from '../../utils/config';
import { IPayment } from '../../screens/payment';

const ENDPOINTS = {
  createUrl: () => `${Config.API_URL}payment/create`
} 

const create = ({ queryKey }: { queryKey: any[] }): Promise<any> => {
  return BaseClient.post(ENDPOINTS.createUrl(), queryKey[1]);
};

export const PaymentRepository = {
  create
}