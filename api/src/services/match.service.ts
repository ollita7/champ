let jwt = require('jwt-simple');

import { getRepository } from '../datastore';
import { environment } from '../../environments/environment';
import { Match ,Tournament, Group, Team } from '../datastore/entities'
import { ObjectId } from 'mongodb';
import { ResultIn, MatchIn, TeamIn } from '../models/match.model';
import { IsNull } from 'typeorm';

const crypto = require("crypto")

export class MatchService {

  async updateMatchResult(match_id: string, result: ResultIn) {
    try {         
      let matchRepo = await getRepository(Match);
      const match = await matchRepo.findOneAndUpdate(
        { _id: new ObjectId(match_id) },
        { $set: { result: result } }
      );
      match.result = result;
      return match;
    } catch (ex) {
      console.log(`update match error: ${ex}`)
      return null;
    }
  }

  async addMatch(matchIn: MatchIn) {
    let matchRepo = await getRepository(Match);
    const result = await matchRepo.insert(matchIn);    
    return result;
  }

  private teamInToTeam(team: TeamIn){
    var new_team = new Team();
    new_team.country = team.country;
    new_team.name = team.name;
    return new_team;
  }

  private matchInToMatch(match: MatchIn, _id: string){
    var new_match = new Match();
    new_match._id = new ObjectId(_id);
    new_match.category_id = match.category_id;
    new_match.date = match.date;
    new_match.group = match.group;
    new_match.result = match.result;
    var team_local = new Team();
    var team_visit = new Team();
    team_local.name = match.team_local.name;
    team_local.country = match.team_local.country;
    team_visit.name = match.team_visit.name;
    team_visit.country = match.team_visit.country;   
    new_match.team_local = team_local;
    new_match.team_visit = team_visit;
    new_match.tournament_id = new ObjectId(match.tournament_id);
    return new_match;
  }
}