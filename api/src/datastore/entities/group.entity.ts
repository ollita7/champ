
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";
import { Team, Match } from "./index"

@Entity('group')
export class Group {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    id: string;

    @Column()
    name: string;

    @Column()
    color: string;

    @Column()
    teams: Array<Team>;

    @Column()
    matches: Array<Match>;
}