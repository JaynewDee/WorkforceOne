const db = require('../config/connection')

const selectAllRoles = async () => {
   return await new Promise((resolve, reject) => {
      db.query('SELECT * FROM _role', (err, results) => {
         if (err) {
            reject(new Error('Something went wrong ... @selectAllRoles'))
         } else {
            resolve(results)
         }
      })
   })
}

module.exports = selectAllRoles;