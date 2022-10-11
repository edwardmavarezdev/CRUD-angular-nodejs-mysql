import { Sequelize } from 'sequelize';
import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';


 export const sequelize = new Sequelize(
    'CRUD',
    'eddev',
    'mysqltest',
    {
        host:'localhost',
        dialect:'mysql'
    }
);