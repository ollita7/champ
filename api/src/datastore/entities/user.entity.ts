
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";;

@Entity('user')
export class User {
    @ObjectIdColumn()
    _id: ObjectId;

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

    @Column()
    password: string;

    @Column()
    country: string;
}