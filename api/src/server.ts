import {
  createKiwiServer,
  IKiwiOptions,
  AuthorizeResponse,
  ON_EXCEPTION,
  getKiwiEmitter,
} from "kiwi-server";
import { UserController } from "./controllers/user.controller";
import { LoginController } from "./controllers/login.controller";
import { UserService } from "./services/user.services";
import { HeadersMiddleware } from "./middlewares/headers";
import { LogService, LEVELS, ILog } from "./services/log.services";

require("dotenv").config();

async function validateAuthentication(
  request: any,
  roles: Array<string>
): Promise<AuthorizeResponse | boolean> {
  const token = request.headers["authorization"];
  if (!token) {
    return new AuthorizeResponse(401, "User is not authenticated");
  }
  const userService = new UserService();
  const profile = userService.getProfile(token);
  if (!profile) return new AuthorizeResponse(401, "Invalid token");

  request["userProfile"] = {
    name: profile.name,
    email: profile.email,
    picture: profile.picture ? profile.picture : null,
    account: request.headers['account'],
    project: request.headers['project']
  }
  return true
}

const options: IKiwiOptions = {
  controllers: [
    UserController,
    LoginController
  ],
  authorization: validateAuthentication,
  middlewares: [HeadersMiddleware],
  cors: {
    enabled: true,
    domains: ["http://localhost:8080"],
  },
  documentation: {
    enabled: true,
    path: "/doc",
    suffix: "/api",
  },
  prefix: "/v1",
  socket: {
    enabled: false,
  },
  log: false,
  port: parseInt(process.env.PORT),
};

createKiwiServer(options);
const log: LogService = new LogService();

const emitter = getKiwiEmitter();
emitter.on(ON_EXCEPTION, (err: any) => {
  const data: ILog = {
    message: err.message,
    type: "nodejs",
    info: {},
    exception: {
      stack: err.stack,
    },
  };
  log.log(data, LEVELS.error);
});
