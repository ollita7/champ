import { useQuery } from 'react-query';

import { RiskRepository } from "../../repositories/risk";
import {  QUERIES_KEYS } from '../../queryKeys';
import {  TASK_STATUS_CODE } from '../../../network/constants';

export interface IRiskQueryParams {
  page?: number,
  size?: number,
  project_id?: string,
  application_id?: string,
  component_id?: string,
}

export interface IRisk{
  id: string,
  name:string,
  info: any,
  mitigations: IMitigation[]
}

export interface IMitigation{
  name: string,
  tasks: ITask[]
}

export interface ITask{
  createdAt: Date,
  name: string,
  status: TASK_STATUS_CODE
}

export interface IRisks { //Primero
  total: number,
  risks?: IRisk[]
}

const  useList = (queryParams:IRiskQueryParams): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.RISK_LIST}`,queryParams], RiskRepository.list, {
    enabled: true,
    select: (response: IRisks) => response,
  });
}

export { useList }