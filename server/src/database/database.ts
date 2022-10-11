import { Sequelize } from 'sequelize';
import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';


 export const sequelize = new Sequelize(
    'CRUD',         //add mysqldatabase name
    'eddev',        //add your mysql username
    'mysqltest',    //add your mysql password
    {
        host:'localhost',
        dialect:'mysql'
    }
);