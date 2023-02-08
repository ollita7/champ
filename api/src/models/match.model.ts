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

export class TeamIn {
  @IsString() _id: string;
  @IsString() name: string;
  @IsString() country: string;
}

export class MatchIn{
  @IsString() category_id: SetIn;
  @IsString() tournament_id: SetIn;
  @IsString() date: Date;
  @IsString() group: string;
  @IsString() team_local: TeamIn;
  @IsString() team_visit: TeamIn;
  @IsString() result: ResultIn;

}