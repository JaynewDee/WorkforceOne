const db = require('../config/connection')

const selectAllDpts = async () => {
   return await new Promise((resolve, reject) => {
      db.query('SELECT * FROM department', (err, results) => {
         if (err) {
            reject(new Error("Something went wrong... @selectAllDpts"))
         } else {
            resolve(results)
         }
      })
   })
}

module.exports = selectAllDpts;