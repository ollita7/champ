
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";
import { Group } from "./index"

@Entity('tournament')
export class Tournament {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    date: string;

    @Column()
    name: string;

    @Column()
    tenant_id: string;

    @Column()
    groups: Array<Group>;

}