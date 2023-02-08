import { timingSafeEqual } from "crypto";
import { IsString } from "kiwi-server";
import { WriteConcernError } from "mongodb";

export class SetIn{
  @IsString() games: Array<number>;
  @IsString() tie: Array<number>;
}

export class ResultIn{
  @IsString() set_1: SetIn;
  @IsString() set_2: SetIn;
  @IsString() super: Array<number>;
  @IsString() winner: number;
}