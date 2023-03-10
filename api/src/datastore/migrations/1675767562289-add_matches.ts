import { MigrationInterface, QueryRunner } from "typeorm"
import { Tournament, Group, Match, Team } from "../entities";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";
import { ObjectId } from "mongodb";

export class addMatches1675767562289 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        let matches = new Array<Match>();
        const demo_matches = JSON.parse(this.demo_matches);  
        demo_matches['matches'].forEach(function(value: any){
            let match = new Match();            
            match.date = value['date'];
            match.group = value['group'];
            match.id = value['id'];
            match.result = value['result'];
            match.team_local = value['player_1'];
            match.team_visit = value['player_2'];
            match.category_id = 'MA';
            match.tournament_id = new ObjectId("63e22e9be767643a2f1869cd");
            matches.push(match);
        }); 

        await queryRunner.insertMany('match', matches);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
        await queryRunner.deleteOne('tenant', { id: 1 })
    }

    demo_matches = `{
        "matches": [
          {
            "id": 1,
            "date": "02/08/2023 19:00", 
            "group":"GRUPO A", 
            "player_1": {"name": "S. Ferro"}, 
            "player_2": {"name": "D. Ponte"}
          },
          {
            "id": 2,
            "date": "02/07/2023 17:00", 
            "group":"GRUPO A", 
            "player_1": {"name": "S. Ferro"},
            "player_2": {"name": "I. Moro"}
          },
          
          {
            "id": 4,
            "date": "TBD", 
            "group":"GRUPO A", 
            "player_1": {"name": "S. Ferro"}, 
            "player_2": {"name": "F. Ferrero"}
          },
          {
            "id": 5,
            "date": "TBD", 
            "group":"GRUPO A", 
            "player_1": {"name": "S. Ferro"}, 
            "player_2": {"name": "C. Obregon"}
          },
          {
            "id": 6,
            "date": "01/31/2023 17:00",
            "group":"GRUPO A", 
            "player_1": {"name": "D. Ponte"}, 
            "player_2": {"name": "I. Moro"},
            "result": {
              "set_1": {"games": [6,1], "tie": false},
              "set_2": {"games": [6,4], "tie": false},
              "winner": 0
            }
          },
          
          {
            "id": 8,
            "date": "02/06/2023 17:00",
            "group":"GRUPO A", 
            "player_1": {"name": "D. Ponte"}, 
            "player_2": {"name": "F. Ferrero"}
          },
          {
            "id": 9,
            "date": "02/09/2023 17:00",
            "group":"GRUPO A", 
            "player_1": {"name": "D. Ponte"},
             "player_2": {"name": "C. Obregon"}
          },
         
          {
            "id": 11,
            "date": "02/02/2023 10:00",
            "group":"GRUPO A", 
            "player_1": {"name": "I. Moro"}, 
            "player_2": {"name": "F. Ferrero"},
            "result": {
              "set_1": {"games": [6,2], "tie": false},
              "set_2": {"games": [6,1], "tie": false},
              "winner": 0
            }
          },
          {
            "id": 12,
            "date": "02/10/2023 10:00",
            "group":"GRUPO A", 
            "player_1": {"name": "I. Moro"}, 
            "player_2": {"name": "C. Obregon"}
          },
          
          
          {
            "id": 15,
            "date": "01/31/2023 16:00",
            "group":"GRUPO A", 
            "player_1": {"name": "F. Ferrero"}, 
            "player_2": {"name": "C. Obregon"},
            "result": {
              "set_1": {"games": [1,6], "tie": false},
              "set_2": {"games": [0,6], "tie": false},
              "winner": 1
            }
          },
          { 
            "id": 16,
            "date": "TBD",
            "group":"GRUPO B", 
            "player_1": {"name": "E. Dalmas"}, 
            "player_2": {"name": "G. Gorg"}
          },
          {    
            "id": 17,
            "date": "02/01/2023 19:15",
            "group":"GRUPO B", 
            "player_1": {"name": "E. Dalmas"}, 
            "player_2": {"name": "M. Marella"},
            "result": {
              "set_1": {"games": [6,2], "tie": false},
              "set_2": {"games": [6,1], "tie": false},
              "winner": 0
            }
          },
          {
            "id": 18,
            "date": "01/31/2023 19:15",
            "group":"GRUPO B", 
            "player_1": {"name": "E. Dalmas"}, 
            "player_2": {"name": "A. Chifflet"},
            "result": {
              "set_1": {"games": [6,0], "tie": false},
              "set_2": {"games": [6,0], "tie": false},
              "winner": 0
            }
          },
          { 
            "id": 19,
            "date": "02/09/2023 19:15",
            "group":"GRUPO B", 
            "player_1": {"name": "E. Dalmas"}, 
            "player_2": {"name": "G. Fernandez"}
          },
          { 
            "id": 20,
            "date": "02/10/2023 15:00",
            "group":"GRUPO B", 
            "player_1": {"name": "G. Gorg"}, 
            "player_2": {"name": "M. Marella"}
          },
          { 
            "id": 21,
            "date": "TBD",
            "group":"GRUPO B", 
            "player_1": {"name": "G. Gorg"}, 
            "player_2": {"name": "A. Chifflet"}
          },
          { 
            "id": 22,
            "date": "01/31/2023 15:00",
            "group":"GRUPO B", 
            "player_1": {"name": "G. Gorg"}, 
            "player_2": {"name": "G. Fernandez"},
            "result": {
              "set_1": {"games": [6,2], "tie": false},
              "set_2": {"games": [6,2], "tie": false},
              "winner": 0
            }
          },
          { 
            "id": 23,
            "date": "02/09/2023",
            "group":"GRUPO B", 
            "player_1": {"name": "M. Marella"}, 
            "player_2": {"name": "A. Chifflet"}
          },
          {  
            "id": 24,
            "date": "01/30/2023 17:00",
            "group":"GRUPO B", 
            "player_1": {"name": "M. Marella"}, 
            "player_2": {"name": "G. Fernandez"},
            "result": {
              "set_1": {"games": [6,1], "tie": false},
              "set_2": {"games": [6,1], "tie": false},
              "winner": 0
            }
          },
          {
            "id": 25,
            "date": "02/07/2023 19:15",
            "group":"GRUPO B", 
            "player_1": {"name": "A. Chifflet"}, 
            "player_2": {"name": "G. Fernandez"}
          },
          {   
            "id": 26,
            "date": "01/29/2023 17:00",
            "group":"GRUPO C", 
            "player_1": {"name": "J. Ramos"}, 
            "player_2": {"name": "J. Van Kerckhoven"},
            "result": {
              "set_1": {"games": [6,2], "tie": false},
              "set_2": {"games": [6,1], "tie": false},
              "winner": 0
            }
          },
          {  
            "id": 27,
            "date": "01/27/2023 17:00",
            "group":"GRUPO C", 
            "player_1": {"name": "J. Ramos"}, 
            "player_2": {"name": "M. Coore"},
            "result": {
              "set_1": {"games": [6,1], "tie": false},
              "set_2": {"games": [6,0], "tie": false},
              "winner": 0
            }
          },
          { 
            "id": 28,
            "date": "01/31/2023 17:00",
            "group":"GRUPO C", 
            "player_1": {"name": "J. Ramos"}, 
            "player_2": {"name": "I. Veiga"},
            "result": {
              "set_1": {"games": [6,1], "tie": false},
              "set_2": {"games": [6,3], "tie": false},
              "winner": 0
            }
          },
          { 
            "id": 29,
            "date": "02/08/2023 17:00",
            "group":"GRUPO C", 
            "player_1": {"name": "J. Ramos"}, 
            "player_2": {"name": "R. Ferreri"}
          },
          { 
            "id": 30,
            "date": "02/01/2023 14:00",
            "group":"GRUPO C", 
            "player_1": {"name": "J. Van Kerckhoven"}, 
            "player_2": {"name": "M. Coore"},
            "result": {
              "set_1": {"games": [5,7], "tie": false},
              "set_2": {"games": [1,6], "tie": false},
              "winner": 1
            }
          },
          { 
            "id": 31,
            "date": "TBD",
            "group":"GRUPO C", 
            "player_1": {"name": "J. Van Kerckhoven"}, 
            "player_2": {"name": "I. Veiga"}
          },
          { 
            "id": 32,
            "date": "TBD",
            "group":"GRUPO C", 
            "player_1": {"name": "J. Van Kerckhoven"}, 
            "player_2": {"name": "R. Ferreri"}
          },
          { 
            "id": 33,
            "date": "TBD",
            "group":"GRUPO C", 
            "player_1": {"name": "M. Coore"}, 
            "player_2": {"name": "I. Veiga"}
          },
          { 
            "id": 34,
            "date": "02/03/2023 17:00",
            "group":"GRUPO C", 
            "player_1": {"name": "M. Coore"}, 
            "player_2": {"name": "R. Ferreri"},
            "result": {
              "set_1": {"games": [6,0], "tie": false},
              "set_2": {"games": [6,4], "tie": false},
              "winner": 0
            }
          },
          { 
            "id": 35,
            "date": "TBD",
            "group":"GRUPO C", 
            "player_1": {"name": "I. Veiga"}, 
            "player_2": {"name": "R. Ferreri"}
          },
          {  
            "id": 36,
            "date": "02/10/2023 19:30",
            "group":"GRUPO D", 
            "player_1": {"name": "L. Viola"}, 
            "player_2": {"name": "M. Buzik"}
          },
          {  
            "id": 37,
            "date": "02/09/2023 17:00",
            "group":"GRUPO D", 
            "player_1": {"name": "L. Viola"}, 
            "player_2": {"name": "J. Echavarria"}
          },
          {  
            "id": 38,
            "date": "02/01/2023 19:00",
            "group":"GRUPO D", 
            "player_1": {"name": "L. Viola"}, 
            "player_2": {"name": "A. Llambias"},
            "result": {
              "set_1": {"games": [3,6], "tie": false},
              "set_2": {"games": [5,7], "tie": false},
              "winner": 1
            }
          },
          {  
            "id": 39,
            "date": "02/07/2023",
            "group":"GRUPO D", 
            "player_1": {"name": "L. Viola"}, 
            "player_2": {"name": "J. Vazquez"}
          },
          {  
            "id": 40,
            "date": "02/08/2023",
            "group":"GRUPO D", 
            "player_1": {"name": "L. Viola"}, 
            "player_2": {"name": "G. Menendez"}
          },
          {  
            "id": 41,
            "date": "02/02/2023 17:00",
            "group":"GRUPO D", 
            "player_1": {"name": "M. Buzik"}, 
            "player_2": {"name": "J. Echavarria"},
            "result": {
              "set_1": {"games": [5,7], "tie": false},
              "set_2": {"games": [6,2], "tie": false},
              "super": [10,7],
              "winner": 0
            }
          },
          {  
            "id": 42,
            "date": "02/11/2023 19:30",
            "group":"GRUPO D", 
            "player_1": {"name": "M. Buzik"}, 
            "player_2": {"name": "A. Llambias"}
          },
          {  
            "id": 43,
            "date": "TBD",
            "group":"GRUPO D", 
            "player_1": {"name": "M. Buzik"}, 
            "player_2": {"name": "J. Vazquez"}
          },
          {    
            "id": 44,
            "date": "01/27/2023 19:30",
            "group":"GRUPO D", 
            "player_1": {"name": "M. Buzik"}, 
            "player_2": {"name": "G. Menendez"},
            "result": {
              "set_1": {"games": [6,0], "tie": false},
              "set_2": {"games": [6,1], "tie": false},
              "winner": 0
            }
          },
          {  
            "id": 45,
            "date": "01/28/2023 17:00",
            "group":"GRUPO D", 
            "player_1": {"name": "J. Echavarria"}, 
            "player_2": {"name": "A. Llambias"},
            "result": {
              "set_1": {"games": [6,4], "tie": false, "tie_result": [8, 6]},
              "set_2": {"games": [3,6], "tie": false, "tie_result": [6, 8]},
              "super": [10, 8],
              "winner": 0
            }
          },
          {  
            "id": 46,
            "date": "01/30/2023 15:15",
            "group":"GRUPO D", 
            "player_1": {"name": "J. Echavarria"}, 
            "player_2": {"name": "J. Vazquez"},
            "result": {
              "set_1": {"games": [6,1], "tie": false, "tie_result": [8, 6]},
              "set_2": {"games": [6,0], "tie": false, "tie_result": [6, 8]},
              "winner": 0
            }
          },
          {  
            "id": 47,
            "date": "02/06/2023 17:15",
            "group":"GRUPO D", 
            "player_1": {"name": "J. Echavarria"}, 
            "player_2": {"name": "G. Menendez"}
          },
          {  
            "id": 48,
            "date": "TBD",
            "group":"GRUPO D", 
            "player_1": {"name": "A. Llambias"}, 
            "player_2": {"name": "J. Vazquez"}
          },
          {  
            "id": 49,
            "date": "02/07/2023 17:00",
            "group":"GRUPO D", 
            "player_1": {"name": "A. Llambias"}, 
            "player_2": {"name": "G. Menendez"}
          },
          {  
            "id": 50,
            "date": "TBD",
            "group":"GRUPO D", 
            "player_1": {"name": "J. Vazquez"}, 
            "player_2": {"name": "G. Menendez"}
          },
          {  
            "id": 51,
            "date": "TBD",
            "group": "GOLD", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 52,
            "date": "TBD",
            "group": "GOLD", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 53,
            "date": "TBD",
            "group": "GOLD", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 54,
            "date": "TBD",
            "group": "GOLD", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 55,
            "date": "TBD",
            "group": "GOLD", 
            "stage": "SF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 56,
            "date": "TBD",
            "group": "GOLD", 
            "stage": "SF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 57,
            "date": "TBD",
            "group": "GOLD", 
            "stage": "F",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 58,
            "date": "TBD",
            "group": "SILVER", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 59,
            "date": "TBD",
            "group": "SILVER", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 60,
            "date": "TBD",
            "group": "SILVER", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 61,
            "date": "TBD",
            "group": "SILVER", 
            "stage": "QF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 62,
            "date": "TBD",
            "group": "SILVER", 
            "stage": "SF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 63,
            "date": "TBD",
            "group": "SILVER", 
            "stage": "SF",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          },
          {  
            "id": 64,
            "date": "TBD",
            "group": "SILVER", 
            "stage": "F",
            "player_1": {"name": "TBD"}, 
            "player_2": {"name": "TBD"}
          }
        ]
      }`
}
