const chalk = require('chalk');
const inquirer = require('inquirer')

// Import module containing inquirer prompts
const {
   menu,
   dept,
   role,
   addEmployee
} = require('./prompts/inquirer');
// Import all query handlers
const {
   selectDptId,
   insertRole,
   insertDpt,
   selectAllDpts,
   selectAllRoles,
   selectAllEmployees,
   omega
} = require('./queries')


console.log(`${chalk.red(`WELCOME TO`)}
${chalk.blue(`|WorkForceOne|!`)}`)

// Handle inquirer-user interaction to read and update database based on user selection
function inquiry() {
   inquirer.prompt(menu)
      .then(async (answer) => {
         switch (answer.menu) {
            case 'View All Departments':
               const departments = await selectAllDpts();
               console.table(departments);
               inquiry();
               break;
            case 'View All Roles':
               const roles = await selectAllRoles();
               console.table(roles);
               inquiry();
               break;
            case 'View All Employees':
               const employees = await selectAllEmployees();
               console.table(employees);
               inquiry();
               break;
            case 'Add a Department':
               inquirer.prompt(dept)
                  .then(async (answer) => {
                     insertDpt(answer.dept)
                     console.log(
                        `Successfully added department
                           ${chalk.green(answer.dept)}
                           to
                           ${chalk.blue('|WorkForce|')} DataBase!`);
                     inquiry();
                  })
               break;
            case 'Add a Role':
               inquirer.prompt(role)
                  .then(async (answer) => {
                     const {
                        roleDept,
                        salary,
                        roleRes
                     } = answer;
                     await selectDptId(roleDept)
                     .then((response) => {insertRole(roleRes, salary, response)})
                     console.log(
                        `Successfully added role 
               ${chalk.green(roleRes)}
                           to
               ${chalk.blue('|WorkForce|')} DataBase!`);
                  }).then(() => inquiry())
               break;
            case 'Add an Employee':
               inquirer.prompt(addEmployee)
                  .then()
               break;
            case 'View Entire WorkForce':
               omega()
         }
      })
}

inquiry();