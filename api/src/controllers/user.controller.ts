import { JsonController, Get, Post, Authorize, Body, Param} from 'kiwi-server';
import * as http from 'http';

import { LoginIn } from '../models/user.model';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { UserService } from '../services/user.services';


@JsonController('/user')
export class UserController {

  
  constructor(private userService: UserService){
  }
  
  @Authorize()
  @Get('/profile')
  public async get(request: GenericModel){
    let user = request.userProfile;
    // let result = await this.userService.getFullProfile(user);
    // if (!result) {
    //   result = await this.userService.createUserProfile(user);
    // }
    return new Response(ResponseCode.OK,'',user);
  }
  @Authorize()
  @Get('/:name')
  public async getUser(@Param('name') name: string){    
    let result = await this.userService.getUser(name); 
    return new Response(ResponseCode.OK,'',result);
  }

  
  @Post('/login')
  public async post(@Body() user: LoginIn, request: http.IncomingMessage, response: http.ServerResponse){
    let auth_user = await this.userService.logIn(user); 
    if (auth_user != null) {
      return new Response(ResponseCode.OK,'',auth_user);
    }else {
      response.statusCode = 401;
      return new Response(ResponseCode.UNAUTHORIZED, 'User or password incorrect');
    }
  }
}