const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');

const menu = [{
     type: "list",
     name: 'menu',
     message: `${chalk.blue.bold("Welcome to WorkforceOne!")} 
          How would you like to start?`,
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






const figgy = function () {
     figlet.text(`|WorkforceOne|`, {
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 100,
          whitespaceBreak: true,
          padding: 10,
     }, function(error) {console.error(error)})
};

