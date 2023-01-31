
import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";
import { v4 as uuidv4 } from "uuid";
//import { ApplicationTypes } from "../entities";

export class addApplicationTypes1663609728397 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        // const application_types = ["Web", "Mobile", "Machine Learning", "Services", "Api", "Data Storage Retrieval and Query", "Messaging, Enterprise search"];

        // for (const type of application_types) {
        //     const applicationtype = new ApplicationTypes();
        //     applicationtype.name = type;
        //     applicationtype._id = uuidv4();
        //     await queryRunner.insertOne('application_types', applicationtype);
        // }

    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        // const applications_types = ["Web", "Mobile", "Machine Learning", "Services", "Api", "Data Storage Retrieval and Query", "Messaging, Enterprise search"];

        // for (const type of applications_types) {
        //     await queryRunner.deleteOne('application_types', { name: type })
        // }
        
    }

}
