
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";;

@Entity('team')
export class Team {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string;

    @Column()
    country: string;
}