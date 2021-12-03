const express = require('express');
const mysql = require ('mysql2');
import start from ("../inquirer.js")

const PORT = 3306;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
     {
          host: 'localhost',
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: 'workforce_db'
     },
     console.log(`Connected to the ${db[0].database} DataBase`)
);

app.listen(PORT, () => {
     console.log(`SQL server running on port ${PORT}`)
})

start();

module.exports = db;