import { useQuery, useMutation } from 'react-query';
import { UserRepository } from "../../repositories/user";
import {  QUERIES_KEYS } from '../../queryKeys';

export interface ILogin {
  username?: string;
  password?: string;
}

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

const useLogin = () => {
  const mutation = useMutation((data: ILogin) => {
    return UserRepository.login(data);
  });
  return mutation;
};

export { useGetProfile, useLogin }