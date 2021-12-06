const express = require('express');
const mysql = require ('mysql2');
const inquirer = require('inquirer');
const inquiry = require('./inquire.js');
const figlet = require('figlet');
const chalk = require('chalk');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = 
     mysql.createConnection(
     {
          host: 'localhost',
          user: 'root',
          password: '!2babytiger2!',
          database: 'workforce_db'
     },
     console.log(`Connected to the workforce DataBase`)
);

app.listen(PORT, () => {
     console.log(`SQL server running on port ${PORT}`)
})


// import conTab from 'console.table/index.js';
// const prompts = require('./prompts.js')
// const db = require('./sqlServer');
// const chalk = require('chalk');

console.log(prompts.menu.name)
// function inquiry () {
//      inquirer.prompt([prompts.menu])
//                     .then((answers) => {console.log(answers)})
// }

inquiry();

module.exports = db;