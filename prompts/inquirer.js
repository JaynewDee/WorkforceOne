// ALL INQUIRER PROMPT OBJECTS DEFINED HERE

const chalk = require('chalk');
const db = require('../config/connection')

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
      'View Entire WorkForce'
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
      choices: async function renderDpts() {
         return await new Promise((resolve, reject) => {
            db.query('SELECT dept_name FROM department', function (err, results) {
               if (err) {
                  reject(new Error("Something went wrong... @renderDpts"))
               } else {
                  names = results.map((department) => {
                     return department.dept_name
                  })
                  resolve(names)
               }
            })
         })
      }
   }
]

const addEmployee = [{
      type: 'input',
      name: 'firstName',
      message: `${chalk.blue("Enter the employee's first name:")}`,
   },
   {
      type: 'input',
      name: 'lastName',
      message: `${chalk.blue("Enter the employee's last name:")}`,
   },
   {
      type: 'list',
      name: 'empRole',
      message: `${chalk.blue("What is the employee's role on the WorkForce?")}`,
      choices: async function renderRoles() {
         return await new Promise((resolve, reject) => {
            db.query('SELECT title FROM _role', function (err, results) {
               if (err) {
                  reject(new Error("Something went wrong... @renderDpts"))
               } else {
                  titles = results.map((role) => {
                     return role.title
                  })
                  resolve(titles)
               }
            })
         })
      }
   },
   {
      type: 'list',
      name: 'empMan',
      message: `${chalk.blue("Which is this employee's manager? (if not applicable, select 'No Manager')")}`,
      choices: [],
   }
]


module.exports = {
   menu,
   dept,
   role,
   addEmployee
};