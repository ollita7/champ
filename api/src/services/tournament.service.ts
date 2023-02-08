let jwt = require('jwt-simple');

import { getRepository } from '../datastore';
import { environment } from '../../environments/environment';
import { Tournament, Match } from '../datastore/entities'
import { ObjectId } from 'mongodb';
const crypto = require("crypto")

export class TournamentService {

  async getTournamentCategory(tournament_id: string, category_id: string) {
    try {
     
      let repoTournament = await getRepository(Tournament);
      let matchRepo = await getRepository(Match);
      let tournament = await repoTournament.findOne({ where: { '_id': new ObjectId(tournament_id), 'category_id': category_id } });
      let matches = await matchRepo.find({ where: { 'tournament_id': new ObjectId(tournament_id), 'category_id': category_id } });
      tournament['groups'].map((x: any)=> x['matches'] = matches.filter((match: any) => match['group'] == x['name']));
      return tournament
    } catch (ex) {
      console.log(`get tournament error: ${ex}`)
      return null;
    }
  }

}