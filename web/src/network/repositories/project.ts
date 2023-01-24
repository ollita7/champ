import { BaseClient } from '../appClient';
import { Config } from '../../utils/config';
import { IProject } from '../services/project/project.service';

const ENDPOINTS = {
  list: () => `${Config.API_URL}project`,
  get: (id: string) => `${Config.API_URL}project/${id}`,
  create: () => `${Config.API_URL}project`,
  edit: () => `${Config.API_URL}project`,
  remove: (id: string) => `${Config.API_URL}project/${id}`,
  listApplications: (projectId: string) => `${Config.API_URL}project/${projectId}/application`,
}

const list = (params): Promise<any> => {
  const base = BaseClient.get(ENDPOINTS.list(), { params: params.queryKey[1] });
  return base;
};

const get = (parameters: any): Promise<any> => {
  return BaseClient.get(ENDPOINTS.get(parameters.queryKey[1]));
};

const create = (data: IProject): Promise<any> => {
  return BaseClient.post(ENDPOINTS.create(), data);
};

const edit = (data: IProject): Promise<any> => {
  return BaseClient.put(ENDPOINTS.edit(), data);
};

const remove = (id: string): Promise<any> => {
  return BaseClient.delete(ENDPOINTS.remove(id));
};

const listApplications = (parameters: any): Promise<any> => {
  return BaseClient.get(ENDPOINTS.listApplications(parameters.queryKey[1]));
};

export const ProjectRepository = {
  list,
  get,
  create,
  edit,
  remove,
  listApplications
}