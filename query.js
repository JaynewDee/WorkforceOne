const db = require('./sqlServer.js');

const allDpts = 'SELECT * FROM department', function (err, departments) {
     if (err) {
          console.error(err)
     } else {
          return [...departments]
     }
}

module.exports = sql;