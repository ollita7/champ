export class GenericStatus {
    static ACTIVE = 'active';
    static DELETED = 'deleted';
}

export class TaskStatus {
    static TODO = 'todo';
    static DONE = 'DONE';
}



export class UserRoles {
    static ADMINISTRATOR = 'administrator';
    static USER = 'user';
}


export class ResponseCode {
    static OK = 0;
    static ERROR = 1;
    static WARNING = 2;
    static BAD_REQUEST = 400;
    static UNAUTHORIZED = 401;
}

export class EmailStatus {
    static OK = 202;
}

export class ContextServer {
    static USER_PROFILE: string = 'userProfile';
}
