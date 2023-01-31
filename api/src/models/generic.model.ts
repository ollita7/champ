import { IsString } from "kiwi-server";

export class GenericModel {
  userProfile: UserProfile
}

export class UserProfile {
  @IsString() name: string;
  @IsString() email: string;
  //@IsString() picture: string;
}