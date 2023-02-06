import { JsonController, Get, Post, Authorize, Body, Param} from 'kiwi-server';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { UserService } from '../services/user.services';
import { Group } from '../datastore/entities'


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