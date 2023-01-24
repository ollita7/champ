import { BaseClient } from "../appClient";
import { Config } from "../../utils/config";
import { IApplication } from "../services/application/application.service";

const ENDPOINTS = {
  create: () => `${Config.API_URL}application`,
  edit: () => `${Config.API_URL}application`,
  remove: (applicationId: string) => `${Config.API_URL}application/${applicationId}`,
  get: (applicationId: string) => `${Config.API_URL}application/${applicationId}`,
  listComponent: (applicationId: string) => `${Config.API_URL}application/${applicationId}/component`,
};

const create = (data: IApplication): Promise<any> => {
  return BaseClient.post(ENDPOINTS.create(), data);
};

const edit = (data: IApplication): Promise<any> => {
  return BaseClient.put(ENDPOINTS.edit(), data);
};

const remove = (id: string): Promise<any> => {
  return BaseClient.delete(ENDPOINTS.remove(id));
};

const get = (parameters: any): Promise<any> => {
  return BaseClient.get(ENDPOINTS.get(parameters.queryKey[1]));
};

const listComponent = (parameters: any): Promise<any> => {
  return BaseClient.get(ENDPOINTS.listComponent(parameters.queryKey[2]), { params: parameters.queryKey[1] });
};

export const ApplicationRepository = {
  create,
  edit,
  remove,
  get,
  listComponent
};
