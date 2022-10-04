import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js"; 
import { Product } from './products.js';

export const Client = sequelize.define('client',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{ type:DataTypes.STRING },
    age:{ type: DataTypes.INTEGER },
    cellNumber:{ type: DataTypes.STRING},
    address:{ type: DataTypes.STRING }
});

Client.hasMany(Product,{
    foreignKey: 'ClientId',
    SourceKey: 'id'
});


Product.hasMany(Client,{
    foreignKey: 'ProductId',
    targetId: 'id'
})