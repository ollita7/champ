
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";
import { Team } from "./index"

export class Set{
    @Column()
    games: Array<number>;

    @Column()
    tie: Array<number>;
  }


export class Result{
    @Column()
    set_1: Set;

    @Column()
    set_2: Set;

    @Column()
    super: Array<number>;

    @Column()
    winner: number;

  }
  


@Entity('match')
export class Match {
    @ObjectIdColumn()
    _id: ObjectId;
    
    @Column()
    category_id: string;

    @Column()
    tournament_id: ObjectId;

    @Column()
    date: Date;

    @Column()
    group: string;

    @Column()
    team_local: Team;

    @Column()
    team_visit: Team;

    @Column()
    result: Result; 

    @Column()
    stage: string; 

}
