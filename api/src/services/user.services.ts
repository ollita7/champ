let jwt = require('jwt-simple');

import { getRepository } from '../datastore';
import { environment } from '../../environments/environment';
import { User } from '../datastore/entities'
const crypto = require("crypto")

export class UserService {

  getProfile(authHeader: string) {
    try {
      const token = authHeader.replace('Bearer ', '');
      let profile = jwt.decode(token, process.env.JWT_SECRET, true);      
      return profile
    } catch (ex) {
      console.log(`getProfile error: ${ex}`)
      return null;
    }
  }

  async logIn(payload: any) {
    try {
     
      let repo = await getRepository(User)
      const user = await repo.findOne({ where: { 'email': payload.email } });     
      var password = payload.password;
      var hash = crypto.pbkdf2Sync(password, process.env.JWT_SECRET, 1000, 64, 'sha512').toString('hex');
      var token = null;
      if(hash == user.password) {
        var token = jwt.encode(payload, process.env.JWT_SECRET);
      } 
      return token

    } catch (ex) {
      console.log(`login error: ${ex}`)
      return null;
    }
  }

  async getUser(name: string) {
    try {
      //check user and password
      let repo = await getRepository(User)
      let user = await repo.findOne({ where: { name } })
      delete user.password;
      return user
    } catch (ex) {
      console.log(`get user error: ${ex}`)
      return null;
    }
  }

}