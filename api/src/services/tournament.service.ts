let jwt = require('jwt-simple');

import { getRepository } from '../datastore';
import { environment } from '../../environments/environment';
import { Tournament, Match } from '../datastore/entities'
import { MatchIn } from '../models/match.model';
import { ObjectId } from 'mongodb';
const crypto = require("crypto")

export class TournamentService {

  async getTournamentCategory(tournament_id: string, category_id: string) {
    try {
     
      let repoTournament = await getRepository(Tournament);
      let matchRepo = await getRepository(Match);
      let tournament = await repoTournament.findOne({ where: { '_id': new ObjectId(tournament_id), 'category_id': category_id } });
      let matches = await matchRepo.find({ where: { 'tournament_id': new ObjectId(tournament_id), 'category_id': category_id } });
      tournament['groups'].map((x: any)=> x['matches'] = matches.filter((match: any) => match['group'] == x['name'] && match['stage'] == 'group'));
      return tournament
    } catch (ex) {
      console.log(`get tournament error: ${ex}`)
      return null;
    }
  }

  async getMatchesByStage(tournament_id: string, category_id: string, stage: string) { //put stange in constants

  }

  async getMatchesByDate(tournament_id: string, category_id: string) {
    //grouped by date
  }


  async getTournamentMembersByCategory(tournament_id: string, category_id: string) {
    try {
     
      let repoTournament = await getRepository(Tournament);      
      let tournament = await repoTournament.findOne({ where: { '_id': new ObjectId(tournament_id), 'category_id': category_id } });
      var members = tournament['groups'].map((x: any) => x['teams']).flat() 
      members.reduce((unique: any, item: any)=> {
        return unique.includes(item) ? unique : [...unique, item];
      }, [])     

      return members;
    } catch (ex) {
      console.log(`get tournament error: ${ex}`)
      return null;
    }
  }

}