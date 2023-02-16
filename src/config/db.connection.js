require('dotenv').config()
const Sequelize = require("sequelize");
const ENVIRONMENT = process.env.ENVIRONMENT || 'dev'
const dbConfig = require('./db.config')[ENVIRONMENT] 

const sequelizeInstance = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool
  });

module.exports = sequelizeInstance