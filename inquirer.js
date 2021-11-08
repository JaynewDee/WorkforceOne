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
     filter: function() {return menu.menu},
}]



inquirer
     .prompt(menu, function(answers) {
          for(i = 0; i < menu[0].choices.length; i++) {
               console.log(menu.choices[i])
          }
     })

     .catch((err) => console.log(err));
// function asyncCall() { 
//      new Promise() {

//      const result = await resolveAfter();
//      console.log(result);    
//      }}
// function resolveAfter() {
//      return new Promise(resolve => {
//           setTimeout(() => {
//                resolve('resolved');
//           }, 500);
//      })
// }

function callBack(err, data) {
     if (err) {
          console.log('The art broke ...');
          console.dir(err);
          return;
     }
     console.log(data);
}

const figgy = function (answers) {
     figlet.text(`|WorkforceOne|`, {
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 100,
          whitespaceBreak: true,
          padding: 10,
     }, callBack(err, data))
};

