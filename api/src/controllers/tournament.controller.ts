import { JsonController, Get, Put, Post, Authorize, Body, Param} from 'kiwi-server';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { TournamentService } from '../services/tournament.service';
import { Group } from '../datastore/entities'



@JsonController('/tournament')
export class TournamentController {
  
  constructor(private tournamentService: TournamentService){
  }
  
  @Get('/:tournament_id/category/:category_id')
  public async getTournamentByCategory(@Param('tournament_id') tournament_id: string, @Param('category_id') category_id: string){    
    let result = await this.tournamentService.getTournamentCategory(tournament_id, category_id); 
    return new Response(ResponseCode.OK,'',result);
  }    

  @Get('/:tournament_id/category/:category_id/members')
  public async getTournamentMembersByCategory(@Param('tournament_id') tournament_id: string, @Param('category_id') category_id: string){    
    let result = await this.tournamentService.getTournamentMembersByCategory(tournament_id, category_id); 
    return new Response(ResponseCode.OK,'',result);
  }   

}