import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";


export const Billing = sequelize.define('billing',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientName : { type:DataTypes.STRING },
    locationProduct : { type:DataTypes.STRING },
    afiliatedPrice : { type:DataTypes.STRING },
    fiscalAddress : { type:DataTypes.STRING },
    serviceName : { type:DataTypes.STRING }
});

