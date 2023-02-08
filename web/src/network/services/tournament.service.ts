import { useMutation, useQuery } from "react-query";
import { QUERIES_KEYS } from "../queryKeys";
import { TournamentRepository } from "../repositories/tournament";

export interface ITeam {
  name: string;
  country: string;
}

export interface IMatch{
  category_id: string;
  date: Date | string;
  group: string;
  result: any;
  team_local: any;
  team_visit: any;
  name: string;
  tournament_id: string;
  _id: string;
}

export interface IGroup {
  name: string;
  teams: ITeam[]
  matches: IMatch[]
}

export interface ITournament {
  _id: string;
  date: Date;
  name: string;
  category: string;
  groups: IGroup[]
}

const userGetTournament = (tournament_id, category_id): {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: any;
  refetch: () => void;
} => {
  return useQuery([`${QUERIES_KEYS.GET_TOURNAMENT}`, tournament_id, category_id], TournamentRepository.getTournament, {
    enabled: !!tournament_id && !!category_id,
    select: (response: ITournament) => response,
  });
}

export {
  userGetTournament
}