const mysql = require('mysql2')
require('dotenv').config();

// Initialize connection to mysql database,
//  using the user's environment variables to disguise sensitive account information

const db = mysql.createConnection(
   {
     host: 'localhost',
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: process.env.DB_NAME,
   }
);

module.exports = db;