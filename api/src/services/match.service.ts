let jwt = require('jwt-simple');

import { getRepository } from '../datastore';
import { environment } from '../../environments/environment';
import { Match } from '../datastore/entities'
import { ObjectId } from 'mongodb';
import { ResultIn } from '../models/match.model';
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

}