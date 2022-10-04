import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js"; 

export const Product = sequelize.define('product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{ type:DataTypes.STRING },
    price:{ type: DataTypes.INTEGER }

});