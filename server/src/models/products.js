import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js"; 
import { Client } from './clients.js';
import { Billing } from './billings.js';

export const Product = await sequelize.define('product',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{ type:DataTypes.STRING },
    price:{ type: DataTypes.INTEGER },

});


Client.hasMany(Billing,{
    foreignKey: 'ClientId',
    SourceKey: 'id'
});

Billing.belongsTo(Client,{
    foreignKey: 'ClientId',
    targetId: 'id'
})

Product.hasMany(Billing,{
    foreignKey: 'ProductId',
    SourceKey: 'id'
});

Billing.belongsTo(Product,{
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