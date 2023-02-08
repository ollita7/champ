import { useQuery, useMutation } from 'react-query';
import { UserRepository } from "../../repositories/user";
import { Config } from '../../../utils/config';
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

const useGetUser = (): any => {
  const user = localStorage.getItem(Config.USER);
  if(user)
    return JSON.parse(user);
  return null;
}
const useLogout = () => {
  localStorage.removeItem(Config.USER);
}

export { useGetProfile, useLogin, useGetUser, useLogout }