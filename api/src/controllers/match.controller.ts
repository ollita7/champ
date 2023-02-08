import { JsonController, Get, Put, Post, Authorize, Body, Param} from 'kiwi-server';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { MatchService } from '../services/match.service';
import { Group } from '../datastore/entities'
import { ResultIn } from '../models/match.model';
import { MatchIn } from '../models/match.model'

@JsonController('/match')
export class MatchController {
  
  constructor(private matchService: MatchService){
  }
  
  @Put('/:id/result')
  public async updateMatchResult(@Param('id') match_id: string, @Body() result: ResultIn){    
    let response = await this.matchService.updateMatchResult(match_id, result); 
    return new Response(ResponseCode.OK,'',response);
  }

  @Post('')
  public async addMatchToTournament(@Body() match: MatchIn){
    let result = await this.matchService.addMatch(match); 
    return new Response(ResponseCode.OK,'',result);
  } 

}