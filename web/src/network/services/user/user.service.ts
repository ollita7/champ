import { useQuery } from 'react-query';

import { UserRepository } from "../../repositories/user";
import {  QUERIES_KEYS } from '../../queryKeys';

const useGetProfile = (): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.USER_GET_PROFILE}`], UserRepository.getProfile, {
    enabled: true,
    select: (response) => {
      return response
    },
  });
}

export { useGetProfile }