import { BaseClient } from "../appClient";
import { Config } from "../../utils/config";
import { IComponent } from "../services/component/component.service";

const ENDPOINTS = {
    create: () => `${Config.API_URL}component`,
    edit: () => `${Config.API_URL}component`,
    remove: (componentId: string) => `${Config.API_URL}component/${componentId}`,
    list: () => `${Config.API_URL}component`
};

const create = (data: IComponent): Promise<any> => {
    return BaseClient.post(ENDPOINTS.create(), data);
};

const edit = (data: IComponent): Promise<any> => {
    return BaseClient.put(ENDPOINTS.edit(), data);
};
const remove = (id: string): Promise<any> => {
    return BaseClient.delete(ENDPOINTS.remove(id));
};
const list = (): Promise<any> => {
    return BaseClient.get(ENDPOINTS.list());
  };
  
export const ComponentRepository = {
    create,
    edit,
    remove,
    list
};
