const { Sequelize } = require('sequelize');

const db = new Sequelize('miproyecto', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
    // | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = db;