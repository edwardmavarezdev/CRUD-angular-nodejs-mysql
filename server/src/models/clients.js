import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";


export const Client = sequelize.define('client',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{ type:DataTypes.STRING },
    age:{ type: DataTypes.INTEGER },
    cellNumber:{ type: DataTypes.STRING}
});

