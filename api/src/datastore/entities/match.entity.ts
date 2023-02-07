
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";
import { Team } from "./index"

@Entity('match')
export class Match {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    id: string;

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
    result: string; //TODO: type result

}