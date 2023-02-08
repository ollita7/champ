import { BaseClient } from '../appClient';

const ENDPOINTS = {
  getTournamentUrl: (tournament_id: string, category_id: string) => `tournament/${tournament_id}/category/${category_id}`,
  getMembersUrl: (tournament_id: string, category_id: string) => `tournament/${tournament_id}/category/${category_id}/members`
} 

const getTournament = (parameters: any): Promise<any> => {
  return BaseClient.get(ENDPOINTS.getTournamentUrl(parameters.queryKey[1], parameters.queryKey[2]));
};

const getMembers = (parameters: any): Promise<any> => {
  return BaseClient.get(ENDPOINTS.getMembersUrl(parameters.queryKey[1], parameters.queryKey[2]));
};

export const TournamentRepository = {
  getTournament, getMembers
}