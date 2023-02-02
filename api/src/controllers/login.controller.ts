import { JsonController, Post, Body} from 'kiwi-server';
import { GenericModel } from '../models/generic.model';
import { ResponseCode } from '../sdk/constants';
import { Response } from '../sdk/response';
import { UserService } from '../services/user.services';

@JsonController('/login')
export class LoginController {

  
  constructor(private userService: UserService){
  }

  @Post('/')
  public async post(@Body() request: GenericModel){
    let user = request.userProfile;
    let token = await this.userService.logIn(user); 
    if (token != null) {
      return new Response(ResponseCode.OK,'',token);
    }else {
      return new Response(ResponseCode.UNAUTHORIZED,'incorrect user or password',token);
    }
  }

}