import { IMiddleware } from 'kiwi-server';
import { MiddlewareAfter } from 'kiwi-server';
import * as http from 'http';
import { LogService, LEVELS, ILog } from '../services/log.services';

@MiddlewareAfter()
export class CustomLog implements IMiddleware {
    
    execute(request: http.IncomingMessage, response: http.ServerResponse, next: any){
      const log: LogService = new LogService();
      const data: ILog = {
        message: `${request.method} ${request.url} - ${new Date()}`,
        type: 'nodejs',
        info: {},
        exception: null
      }
      log.log(data, LEVELS.info);
      next();
    }
}