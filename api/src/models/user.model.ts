import { timingSafeEqual } from "crypto";
import { IsString } from "kiwi-server";
import { WriteConcernError } from "mongodb";

export class UserIn{
  @IsString() name: string;
  @IsString() email: string;
  @IsString() picture: string;
}

export class LoginIn{
  @IsString() username: string;
  @IsString() password: string;
}
