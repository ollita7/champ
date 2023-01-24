import { useMutation, useQuery } from "react-query";
import { QUERIES_KEYS } from "../../queryKeys";
import { ComponentRepository } from "../../repositories/component";
import { TypeRepository } from "../../repositories/type";

export interface IComponentTypes {
  _id: string;
  name: string;
}
export interface IComponent {
  _id?: string;
  name?: string;
  type?: IComponentTypes;
  projects?:string[];
  applications?:string[];
  comments?: string;
  tags?: string[];
  notes?: string[];
  status?: string;
}

const useListComponents = (): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery(
    [`${QUERIES_KEYS.COMPONENT_LIST}`],
    ComponentRepository.list,
    {
      enabled: true,
      select: (response: IComponent[]) => response,
    }
  );
};
const useCreateComponent = () => {
  const mutation = useMutation((application: IComponent) => {
    return ComponentRepository.create(application);
  });
  return mutation;
};

const useEditComponent = () => {
  const mutation = useMutation((application: IComponent) => {
    return ComponentRepository.edit(application);
  });
  return mutation;
};

const useRemoveComponent = () => {
  const mutation = useMutation((id: string) => {
    return ComponentRepository.remove(id);
  });
  return mutation;
};

const useListComponentTypes = (): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery(
    [`${QUERIES_KEYS.COMPONENT_LIST_TYPES}`],
    TypeRepository.listComponentTypes,
    {
      enabled: true,
      select: (response: IComponentTypes[]) => response,
    }
  );
};

export {
    useListComponents,
    useCreateComponent,
    useEditComponent,
    useRemoveComponent,
    useListComponentTypes
};