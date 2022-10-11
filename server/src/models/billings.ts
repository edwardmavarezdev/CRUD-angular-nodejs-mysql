import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../database/database.js";


export class Billing extends Model {
    [x: string]: any;
    declare id: number;
    declare clientName : string;
    declare clientIdentityCard:number;
    declare clientAge:number;
    declare clientCellNumber:string;
    declare serviceName : string;
    declare servicePrice: number;

    declare locationProduct : string;
    declare afiliatedPrice : string;
    declare fiscalAddress : string
}

Billing.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        clientName : { type:DataTypes.STRING },
        clientIdentityCard:{ type:DataTypes.INTEGER},
        clientAge:{ type: DataTypes.INTEGER },
        clientCellNumber:{ type: DataTypes.STRING},

        serviceName : { type:DataTypes.STRING },
        servicePrice: { type:DataTypes.INTEGER},

        locationProduct : { type:DataTypes.STRING },
        afiliatedPrice : { type:DataTypes.STRING },
        fiscalAddress : { type:DataTypes.STRING }
    },
    {
        sequelize,
        tableName:'billings'
    }
); 
