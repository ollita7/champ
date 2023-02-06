import { MigrationInterface, QueryRunner } from "typeorm"
import { Tenant } from "../entities";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class addTenant1675695849191 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        let tenant = new Tenant()
        tenant.name = 'cante';
        tenant.id = 1
        tenant.status = 'ACTIVE'       

        await queryRunner.insertOne('tenant', tenant);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.deleteOne('tenant', { id: 1 })
    }
}
