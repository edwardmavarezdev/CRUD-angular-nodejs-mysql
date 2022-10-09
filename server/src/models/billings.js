import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";


export const Billing = sequelize.define('billing',{
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
    
});

