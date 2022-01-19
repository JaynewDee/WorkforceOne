const db = require('../config/connection')

const selectAllEmployees = async () => {
   return await new Promise((resolve, reject) => {
      db.query('SELECT * FROM employee', (err, result) => {
         if (err) {
            reject(new Error('Something went wrong ... @selectAllEmployees'))
         } else {
            resolve(result)
         }
      })
   })
}

module.exports = selectAllEmployees;