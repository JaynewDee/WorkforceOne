const express = require('express');
const mysql = require('mysql2');
const chalk = require('chalk');
const inquirer = require('inquirer')
const PORT = process.env.PORT || 3001;
const app = express();
const selectId = require('./queries/selectID')


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
                           const insert = `INSERT INTO department (dept_name) VALUES (?)`;
                           db.query(insert, answer.dept, (err, result) => {
                              if (err) {
                                 console.log(err)
                              } else {
                                 console.log(`Successfully added department ${chalk.green(answer.dept)} to ${chalk.blue('|WorkForce|')} DataBase!`);

                                 db.commit();
                                 console.table(result)
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
                     .then((answer) => {
                        const {
                           roleDept,
                           salary,
                           roleRes
                        } = answer;
                        selectId(roleDept);

                        }).then(() => {console.log(answer)})
                           const params = [roleRes, salary, roleDept]
                           db.query("INSERT INTO _role (title, salary, department_id) VALUES (?)", [params], (err, result) => {
                              if (err) {
                                 console.log(err)
                              } else {
                                 console.log(`Successfully added role ${chalk.green(roleDept)} to ${chalk.blue('|WorkForce|')} DataBase!`);

                                 db.commit();
                                 inquiry();
                              }
                           })
                        
                     
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


