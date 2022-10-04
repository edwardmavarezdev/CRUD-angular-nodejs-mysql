import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'CRUD',
    'eddev',
    'mysqltest',
    {
        host:'localhost',
        dialect:'mysql'
    }
);