require('dotenv').config()

module.exports = {
    dev:{
        HOST: "localhost",
        USER: "postgres",
        PASSWORD: "admin",
        DB: "HMS",
        dialect: "postgres",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
  },
  
  prod:{
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: "postgres",
    dialectOptions: {
    ssl: {      
      require:true,
      rejectUnauthorized: false 
    }
    },
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
