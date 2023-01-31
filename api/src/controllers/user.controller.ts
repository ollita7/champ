import { JsonController, Get, Post, Authorize, Body} from 'kiwi-server';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { UserService } from '../services/user.services';

//@Authorize()
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

  @Post('/login')
  public async post(@Body() request: GenericModel){
    let user = request.userProfile;
    let token = await this.userService.logIn(user); 
    return new Response(ResponseCode.OK,'',token);
  }
}