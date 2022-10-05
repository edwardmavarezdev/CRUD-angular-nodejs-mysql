import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js"; 
import { Client } from './clients.js';

export const Product = await sequelize.define('product',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{ type:DataTypes.STRING },
    price:{ type: DataTypes.INTEGER },

});


Product.hasMany(Client,{
    foreignKey: 'ProductId',
    SourceKey: 'id'
});

Client.belongsTo(Product,{
    foreignKey: 'ProductId',
    targetId: 'id'
})

/*
Client.hasMany(Product,{
    foreignKey: 'ClientId',
    SourceKey: 'id'
});

Product.belongsTo(Client,{
    foreignKey: 'ClientId',
    targetId: 'id'
})
*/