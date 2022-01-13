const express = require('express');
const mysql = require('mysql2');
const chalk = require('chalk');
const inquirer = require('inquirer')
const PORT = process.env.PORT || 3001;
const app = express();

let deptList = [];

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
          console.log(`Connected to the ${chalk.blue('|WorkForce|')} DataBase.
          ${chalk.blue.bold("Welcome to WorkforceOne!")}`)
     )

app.listen(PORT);


const menu = [{
     type: 'list',
     name: 'menu',
     message: `What would you like to do?`,
     choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add a Department',
          'Add a Role',
          'Add an Employee',
          'Update an Employee Role',
     ],
}]

const dept = [{
     type: 'input',
     name: 'dept',
     message: `${chalk.blue("What is the name of the department to add?")}`,
}]

const role = [{
          type: 'input',
          name: 'roleRes',
          message: `${chalk.blue("What is the name of the role to add?")}`
     },
     {
          type: 'input',
          name: 'salary',
          message: `${chalk.blue("What is the expected salary for this role?")}`,
     },
     {
          type: 'list',
          name: 'roleDept',
          message: `${chalk.blue("Which department does this role belong to?")}`,
          choices: deptList
     }
]


function updateDepts() {
     db.query('SELECT * FROM department', function (err, results) {
          if (err) {
               console.log(err)
          } else {
               return results.map((dept) => deptList.push(dept.dept_name));
          }
     })
}

function inquiry() {
     updateDepts();
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
                                   .then((answers) => {
                                        try {
                                             const {
                                                  roleRes,
                                                  salary,
                                                  roleDept
                                             } = answers;
                                             let deptid =
                                                  db.query(`SELECT id FROM department WHERE dept_name = (?)`, roleDept, (err, result) => {
                                                       console.log(result)
                                                       if (err) {
                                                            console.log(err)
                                                       } else {
                                                            return result[0].id;
                                                       }
                                                  })
                                             db.query(`INSERT INTO _role (title, salary, department_id) VALUES (${roleRes}, ${salary}, ${deptid})`, (err, result) => {
                                                  if (err) throw err;
                                                  console.log(`Successfully added role ${chalk.green(roleDept)} to ${chalk.blue('|WorkForce|')} DataBase!`);
                                                  inquiry();
                                             })
                                        } catch (err) {
                                             console.log(err)
                                        }
                                   })
                                   .catch((err) => console.log(err))

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

module.exports = deptList;