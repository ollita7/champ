import { MigrationInterface, QueryRunner } from "typeorm"
import { Tournament, Group, Match, Team } from "../entities";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";
import { ObjectId } from "mongodb";


export class addTournament1675706281679 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        let tournament = new Tournament()
        const demo_tournament = JSON.parse(this.demo_tournament);
        tournament._id = new ObjectId("63e22e9be767643a2f1869cd");
        tournament.date = new Date(2023,2);
        tournament.name = 'Copa Jorge Mesones';
        tournament.category = 'MASCULINO A';
        tournament.category_id = 'MA';
        tournament.tenant_id = '1';
        let groups = new Array<Group>();
        demo_tournament['tournament']['groups'].forEach(function(value: any){
            let group = new Group()
            group.color = value['color'];
            group.name = value['name'];
            group.id = group.name.split(' ')[1];
            let teams = new Array<Team>();
            value['members'].forEach(function (t: any) {
                let team = new Team();
                team.country = t['country'];
                team.name = t['name'];
                teams.push(team);
            });
            group.teams = teams;
            group.matches = [];
            groups.push(group)            
          });
        tournament.groups = groups;
        console.log(tournament)
        await queryRunner.insertOne('tournament', tournament);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.deleteOne('tournament', { id: 1 })
    }

    demo_tournament = `{
        "tournament":{         
          "groups": [
            {
              "name": "GRUPO A",
              "color": "#ff9c00",
              "members": [
                { "name": "S. Ferro", "country": "UY"},
                { "name": "D. Ponte", "country": "AR"},
                { "name": "I. Moro", "country": "UY"},
                { "name": "F. Ferrero", "country": "UY"},
                { "name": "C. Obregon", "country": "UY"}
              ]
            },
            {
              "name": "GRUPO B",
              "color": "#006cc8",
              "members": [
                { "name": "E. Dalmas", "country": "UY"},
                { "name": "G. Gorg", "country": "AR"},
                { "name": "M. Marella", "country": "UY"},
                { "name": "A. Chifflet","country": "UY"}, 
                { "name": "G. Fernandez", "country": "ES"}
              ]
            },
            {
              "name": "GRUPO C",
              "color": "#50bc20",
              "members": [
                { "name": "J. Ramos", "country": "UY"},
                { "name": "J. Van Kerckhoven", "country": "ZA"},
                { "name": "M. Coore", "country": "UY"},
                { "name": "I. Veiga", "country": "UY"},
                { "name": "R. Ferreri", "country": "AR"}
              ],
              "matches": []
            },
            {
              "name": "GRUPO D",
              "color": "#dc1058",
              "members": [
                { "name": "L. Viola", "country": "UY"},
                { "name": "M. Buzik", "country": "UY"},
                { "name": "J. Echavarria", "country": "UY"},
                { "name": "A. Llambias", "country": "UY"},
                { "name": "J. Vazquez", "country": "UY"},
                { "name": "G. Menendez", "country": "UY"}
              ],
              "matches": []
            }
          ]
        }
      }`

}
