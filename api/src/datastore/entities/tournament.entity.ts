
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";
import { Group } from "./index"

@Entity('tournament')
export class Tournament {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    category_id: string;

    @Column()
    date: Date;

    @Column()
    category: string;

    @Column()
    name: string;

    @Column()
    tenant_id: string;

    @Column()
    groups: Array<Group>;

}