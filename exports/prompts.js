const chalk = require('chalk');

const menu = [{
     type: 'list',
     name: 'menu',
     message: `${chalk.blue.bold("Welcome to WorkforceOne!")}
          What would you like to do?`,
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
     }
]

const role = [{
          type: 'input',
          name: 'role',
          message: `${chalk.blue("What is the name of the role to add?")}`
     },
     {
          type: 'input',
          name: 'salary',
          message: `${chalk.blue("What is the expected salary for this role?")}`,
          validate: function (value) {
               const regExpDec = /^\d+\.\d{0,2}$/;
               return (value == regExpDec ? true : false)
          }
     },
     {
          type: 'list',
          name: 'roleDept',
          message: `${chalk.blue("Which department does this role belong to?")}`,
          choices: [1, 2, 3, 4]
     }
]

module.exports = {menu, dept, role};