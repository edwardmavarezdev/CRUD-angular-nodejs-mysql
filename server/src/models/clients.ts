 import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../database/database.js";
import clientRoutes from '../routes/clientRoutes.js';


export class Client extends Model {
    declare id: number;
    declare name: string;
    declare identityCard: string;
    declare age: number;
    declare cellNumber: string;
}

Client.init(
    {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{ type:DataTypes.STRING },
    identityCard:{ type:DataTypes.INTEGER},
    age:{ type: DataTypes.INTEGER },
    cellNumber:{ type: DataTypes.STRING}
    },
    {
        sequelize,
        tableName:'clients'
    }
); 

