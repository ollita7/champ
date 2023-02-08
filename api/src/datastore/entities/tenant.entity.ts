
import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";;

@Entity('tenant')
export class Tenant {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string;

    @Column()
    status: string;

    @Column()
    id: number;

}