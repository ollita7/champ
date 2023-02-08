import { useMutation, useQuery, useQueryClient } from 'react-query';
import { QUERIES_KEYS } from '../../queryKeys';
import { ProjectRepository } from '../../repositories/project';
import { TypeRepository } from '../../repositories/type';
import { IApplication } from '../application/application.service';

export interface IProjectTypes {
  _id: string;
  name: string;
}
export interface IAnalytics {
  risks: number;
  mitigations: number;
  tasks: number
}

export interface IProject {
  _id?: string,
  name?: string,
  type?: string,
  description?: string,
  analytics?: IAnalytics,
}

export interface IProjectQueryParams {
  page?: number,
  size?: number,
  criteria?: string,
}


const useList = (queryParams: IProjectQueryParams): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.PROJECT_LIST}`, queryParams], ProjectRepository.list, {
    enabled: true,
    select: (response: IProject) => response,
  });
}

const useGetProject = (id?: string): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.PROJECT_GET}`, id], ProjectRepository.get, {
    enabled: !!id,
    select: (response: IProject) => response,
  });
}

const useCreateProject = () => {
  const mutation = useMutation((project: IProject) => {
    return ProjectRepository.create(project)
  })
  return mutation;
}

const useEditProject = () => {
  const mutation = useMutation((project: IProject) => {
    return ProjectRepository.edit(project)
  })
  return mutation;
}

const useDeleteProject = () => {
  const mutation = useMutation((id: string) => {
    return ProjectRepository.remove(id)
  });
  return mutation;
}
const useListProjectTypes = (): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.PROJECT_LIST_TYPES}`], TypeRepository.listProjectTypes, {
    enabled: true,
    select: (response: IProjectTypes[]) => response,
  });
}
const uselistApplications = (
  projectId?: string
): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery(
    [`${QUERIES_KEYS.APPLICATION_LIST}`, projectId],
    ProjectRepository.listApplications,
    {
      enabled: !!projectId,
      select: (response: IApplication) => response,
    }
  );
};

export { useList, useCreateProject, useGetProject, useEditProject, useDeleteProject, useListProjectTypes, uselistApplications }
