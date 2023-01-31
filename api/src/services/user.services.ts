let jwt = require('jwt-simple');

import { environment } from '../../environments/environment';

export class UserService {

  getProfile(authHeader: string) {
    try {
      const token = authHeader.replace('Bearer ', '');
      let profile = jwt.decode(token, environment.googleSecret, true);
      return profile
    } catch (ex) {
      console.log(`getProfile error: ${ex}`)
      return null;
    }
  }

  logIn(payload: any) {
    try {
      //check user and password
      var token = jwt.encode(payload, 'putoelquelee');    
      return token
    } catch (ex) {
      console.log(`login error: ${ex}`)
      return null;
    }
  }
  
}