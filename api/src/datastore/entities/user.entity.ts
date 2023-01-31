
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";;

@Entity('users')
export class User {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    status: string;

    @Column()
    role: string;

    @Column()
    picture: string;
}