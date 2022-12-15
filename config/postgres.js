const { Sequelize } = require("sequelize");
const { Client } = require('pg');


const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.PPOSTGRES_PORT,
  })

const sequelize = new Sequelize(client.database, client.user, client.password, {
  host: client.host,
  dialect: "postgres",
});

const dbConnectPostgres = async ()=>{    
    try {
        await client.connect()
        console.log("Postgres connected_connect");
        } catch (e) {
        console.log("Postgres ERROR connected_not connected", e);
        }  
}

module.exports = { sequelize, dbConnectPostgres };