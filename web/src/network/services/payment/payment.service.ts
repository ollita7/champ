import { useQuery } from 'react-query';

import {  QUERIES_KEYS } from '../../queryKeys';
import { PaymentRepository } from '../../repositories/payment';
import { IPayment } from '../../../screens/payment';

const useCreate = (payment: IPayment): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.PAYMENT_CREATE}`, payment], PaymentRepository.create, {
    enabled: true,
    select: response => response.data,
  });
}

export { useCreate }