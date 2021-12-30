const express = require('express');
const mysql = require('mysql2');
const chalk = require('chalk');
const inquirer = require('inquirer')
const PORT = process.env.PORT || 3001;
const app = express();
const {
     menu,
     role,
     dept
} = require('./exports/prompts');


app.use(express.urlencoded({
     extended: false
}));
app.use(express.json());
require('dotenv').config();

const db = 
     mysql.createConnection({
               host: 'localhost',
               user: process.env.DB_USER,
               password: process.env.DB_PASS,
               database: process.env.DB_NAME
          },
          console.log(`Connected to the ${chalk.blue('|WorkForce|')} DataBase`)
     )


app.listen(PORT, () => {
     console.log(`SQL server running on port ${PORT}`)
})


function inquiry() {
     try {
          inquirer.prompt(menu)
               .then((answer) => {
                    switch (answer.menu) {
                         case 'View All Departments':
                              db.query('SELECT * FROM department', function (err, results) {
                                   if (err) {
                                        console.log(err)
                                   } else {
                                        console.table(results)
                                        inquiry();
                                   }
                              })
                              break;
                         case 'View All Roles':
                              db.query('SELECT * FROM _role', function (err, results) {
                                   if (err) {
                                        console.log(err)
                                   } else {
                                        console.table(results)
                                        inquiry();
                                   }
                              })
                              break;
                         case 'View All Employees':
                              db.query('SELECT * FROM employee', function (err, result) {
                                   if (err) {
                                        console.log(err)
                                   } else {
                                        console.table(result)
                                        inquiry();
                                   }
                              })
                              break;
                         case 'Add a Department':
                              inquirer.prompt(dept)
                                   .then((answer) => {
                                        try {
                                             const sql = `INSERT INTO department (dept_name) VALUES (?)`;
                                             db.query(sql, answer.dept, (err, result) => {
                                                  if (err) {
                                                       console.log(err)
                                                  } else {
                                                       console.log(`Successfully added department ${chalk.green(answer.dept)} to ${chalk.blue('|WorkForce|')} DataBase!`);
                                                       inquiry();
                                                  }
                                             })
                                        } catch (err) {
                                             console.log(err)
                                        }
                                   })
                              break;
                         case 'Add a Role':
                              inquirer.prompt(role)
                              break;
                         case 'Add an Employee':
                              break;
                    }
               })
     } catch (err) {
          console.log(err)
     }
}

inquiry()