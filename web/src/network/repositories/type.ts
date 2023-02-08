import { BaseClient } from "../appClient";
import { Config } from "../../utils/config";

const ENDPOINTS = {
    listApplicationTypes: () => `${Config.API_URL}types/app-types`,
    listProjectTypes: () => `${Config.API_URL}types/proj-types`,
    listComponentTypes: () => `${Config.API_URL}types/component-types`,
};

const listApplicationTypes = (): Promise<any> => {
    return BaseClient.get(ENDPOINTS.listApplicationTypes());
};
const listProjectTypes = (): Promise<any> => {
    return BaseClient.get(ENDPOINTS.listProjectTypes());
};

const listComponentTypes = (): Promise<any> => {
    return BaseClient.get(ENDPOINTS.listComponentTypes());
};



export const TypeRepository = {
    listProjectTypes,
    listApplicationTypes,
    listComponentTypes
};
