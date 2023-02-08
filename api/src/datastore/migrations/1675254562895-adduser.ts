import { User } from "../entities";
import { MigrationInterface, QueryRunner } from "typeorm"
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";
import { v4 as uuidv4 } from "uuid";


export class adduser1675254562895 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        let user = new User()
        user.name = 'admin';
        user.country = 'uy';
        user.email = 'admin@admin.com';
        user.password = '1fdfd7082c01b0583159bddcbc84aa619ed084ca181869e82def80f848628bce9a23c67082b4d7ad47a1527c7eee5da03b23cf0a4681d6f94779115b39857871';
        user.role = 'admin';
        user.status = 'ACTIVE';
        user.tenant_id = 1;

        await queryRunner.insertOne('user', user);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.deleteOne('user', { email: 'admin@admin.com' })
    }

}
