// const db = require('./sqlServer');
// const chalk = require('chalk');

// const prompts = {
//      menu: [{
//           type: 'list',
//           name: 'menu',
//           message: `${chalk.blue.bold("Welcome to WorkforceOne!")} 
//           How would you like to start?`,
//           choices: [
//                'View All Departments',
//                'View All Roles',
//                'View All Employees',
//                'Add a Department',
//                'Add a Role',
//                'Add an Employee',
//                'Update an Employee Role',
//           ],
//      }],

//      dept: [{
//           type: 'input',
//           name: 'dept',
//           message: `${chalk.blue("What is the name of the department to add?")}`,
//      }],

//      role: [{
//                type: 'input',
//                name: 'role',
//                message: `${chalk.blue("What is the name of the role to add?")}`
//           },
//           {
//                type: 'input',
//                name: 'salary',
//                message: `${chalk.blue("What is the expected salary for this role?")}`,
//                validate: function (value) {
//                     const regExpDec = /^\d+\.\d{0,2}$/;
//                     return (value == regExpDec ? true : false)
//                }
//           },
//           {
//                type: 'list',
//                name: 'roleDept',
//                message: `${chalk.blue("Which department does this role belong to?")}`,
//                choices: db.query('SELECT * FROM department', function (err, departments) {
//                     if (err) {
//                          console.error(err)
//                     } else {
//                          return departments
//                     }
//                })
//           }
//      ]
// }

// module.exports = prompts;