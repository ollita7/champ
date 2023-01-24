import { AxiosError } from 'axios';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*'
};

enum STATUS_CODES {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
}

enum API_STATUS_CODE {
  OK = 0,
  ERROR = 1,
  WARNING = 2,
  BAD_REQUEST = 400
}


export enum TASK_STATUS_CODE {
  TODO = 'TODO',
  DONE = 'DONE'
}

const LOCAL_STORAGE = {
  ACCOUNT_KEY: 'account'
}

const ERROR_MESSAGES = {
  GENERIC: 'Oops! Something went wrong',
};

const TIMEOUT = 30000;

export { HEADERS, STATUS_CODES, ERROR_MESSAGES, TIMEOUT, API_STATUS_CODE, LOCAL_STORAGE };
export type { AxiosError };
