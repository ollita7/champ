import { JsonController, Get, Post, Authorize, Body, Param} from 'kiwi-server';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { UserService } from '../services/user.services';

@Authorize()
@JsonController('/user')
export class UserController {

  
  constructor(private userService: UserService){
  }

  @Get('/profile')
  public async get(request: GenericModel){
    let user = request.userProfile;
    // let result = await this.userService.getFullProfile(user);
    // if (!result) {
    //   result = await this.userService.createUserProfile(user);
    // }
    return new Response(ResponseCode.OK,'',user);
  }

  @Get('/:name')
  public async getUser(@Param('name') name: string){    
    let result = await this.userService.getUser(name); 
    return new Response(ResponseCode.OK,'',result);
  }

}