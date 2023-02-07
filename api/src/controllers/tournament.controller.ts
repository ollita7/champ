import { JsonController, Get, Post, Authorize, Body, Param} from 'kiwi-server';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { UserService } from '../services/user.services';
import { Group } from '../datastore/entities'


@JsonController('/tournament')
export class TournamentController {
  
  constructor(private userService: UserService){
  }
  
  @Get('/:name')
  public async getUser(@Param('name') name: string){    
    let result = await this.userService.getUser(name); 
    return new Response(ResponseCode.OK,'',result);
  }
  
  @Post('/login')
  public async post(@Body() request: GenericModel){
    let user = request.userProfile;
    let auth_user = await this.userService.logIn(user); 
    if (auth_user != null) {
      return new Response(ResponseCode.OK,'',auth_user);
    }else {
      return new Response(ResponseCode.UNAUTHORIZED,'incorrect user or password',auth_user);
    }
  }
}