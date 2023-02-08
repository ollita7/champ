import { useQuery } from "react-query";
import { AnalyticsRepository } from "../../repositories/analytics";
import { QUERIES_KEYS } from "../../queryKeys";

export interface IAnalyticsQueryParams {
  project_id?: string;
  application_id?: string;
  component_id?: string;
}

export interface IAnalytics {
  risks: number[],
  mitigations: number[],
  tasks: number[],
}

const useScore = (
  queryParams: IAnalyticsQueryParams
): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery(
    [`${QUERIES_KEYS.ANALYTICS_LIST}`, queryParams],
    AnalyticsRepository.list,
    {
      enabled: true,
      select: (response: IAnalytics) => response,
    }
  );
};

export { useScore };
