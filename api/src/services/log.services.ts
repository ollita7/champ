let jwt = require('jwt-simple');
const http = require('http');

export interface ILogException {
  code?: number;
  message?: string;
  stack: string
}

export interface ILog {
  message: string;
  type: string;
  info: any;
  exception: ILogException;
}

export enum LEVELS {
  error = 'error',
  warning = 'warning',
  info = 'info'
}

export class LogService {
  async log(data: ILog, level: LEVELS) {
    try {
      const myUrl = new URL(process.env.API_LOGS_URL);

      const options = {
          host: myUrl.hostname,
          port: myUrl.port,
          path: myUrl.pathname + `${level}`,
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'apikey': `${process.env.API_LOGS_KEY}`
          }
      }
      return new Promise((resolve,rejects) => {
          const req = http.request(options, (res: any) => {
              console.log(`statusCode: ${res.statusCode}`)

              res.on('data', (d: any) => {
                  process.stdout.write(d)
                  resolve(d)
              })
          })

          req.on('error', (error: any) => {
              console.error(error)
              rejects(error)
          })

          req.write(JSON.stringify(data))

          req.end()
      })
  } catch (error) {
      console.log(error)
  }    
  }
}
