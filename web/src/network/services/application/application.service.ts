import { useMutation, useQuery } from "react-query";
import { QUERIES_KEYS } from "../../queryKeys";
import { ApplicationRepository } from "../../repositories/application";
import { TypeRepository } from "../../repositories/type";
import { IComponent } from "../component/component.service";

export interface IApplicationTypes {
  _id: string;
  name: string;
}

export interface IAnalytics {
  risks: number;
  mitigations: number;
  tasks: number
}

export interface IComponentQueryParams {
  page?: number,
  size?: number,
}

export interface IApplication {
  _id?: string;
  project?: string;
  name?: string;
  description?: string;
  type?: string;
  status?: string;
  analytics?: IAnalytics,
}

const useListApplicationTypes = (): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery(
    [`${QUERIES_KEYS.APPLICATION_LIST_TYPES}`],
    TypeRepository.listApplicationTypes,
    {
      enabled: true,
      select: (response: IApplicationTypes[]) => response,
    }
  );
};
const useCreateApplication = () => {
  const mutation = useMutation((application: IApplication) => {
    return ApplicationRepository.create(application);
  });
  return mutation;
};

const useEditApplication = () => {
  const mutation = useMutation((application: IApplication) => {
    return ApplicationRepository.edit(application);
  });
  return mutation;
};

const useRemoveApplication = () => {
  const mutation = useMutation((id: string) => {
    return ApplicationRepository.remove(id);
  });
  return mutation;
};

const useListComponents = (
  queryParams: IComponentQueryParams,
  applicationId?: string,
): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery(
    [`${QUERIES_KEYS.COMPONENT_LIST_BY_APPLICATION}`,queryParams, applicationId],
    ApplicationRepository.listComponent,
    {
      enabled: !!applicationId,
      select: (response: IComponent[]) => response,
    }
  );
};

const useGetApplication = (id?: string): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.APPLICATION_GET}`, id], ApplicationRepository.get, {
    enabled: !!id,
    select: (response: IApplication) => response,
  });
}

export {
  useListApplicationTypes,
  useCreateApplication,
  useEditApplication,
  useRemoveApplication,
  useListComponents,
  useGetApplication
};
