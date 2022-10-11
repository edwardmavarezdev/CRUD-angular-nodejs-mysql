import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../database/database.js";
import { Client } from './clients.js';
import { Billing } from './billings.js';

export class Product extends Model {
    declare id: number;
    declare name: string;
    declare price: string;
}

Product.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{ type:DataTypes.STRING },
        price:{ type: DataTypes.INTEGER },

    },
    {
        sequelize,
        tableName:'products'
    }
);


Client.hasMany(Billing,{
    foreignKey: 'ClientId',
    sourceKey: 'id'
});

Billing.belongsTo(Client,{
    foreignKey: 'ClientId',
    targetKey: 'id'
})

Product.hasMany(Billing,{
    foreignKey: 'ProductId',
    sourceKey: 'id'
});

Billing.belongsTo(Product,{
    foreignKey: 'ProductId',
    targetKey: 'id'
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