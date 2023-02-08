import { BaseClient } from '../appClient';

const ENDPOINTS = {
  addResultUrl: (match_id: string,) => `match/${match_id}`,
} 

const addResult = (match_id: string, result): Promise<any> => {
  return BaseClient.put(ENDPOINTS.addResultUrl(match_id), result);
};

export const MatchRepository = {
  addResult,
}