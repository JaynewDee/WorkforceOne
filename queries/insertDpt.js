const db = require('../config/connection')

const insertDpt = async (deptName) => {
   return await new Promise((resolve, reject) => {
      db.query("INSERT INTO department (dept_name) VALUES (?)", deptName, (err, result) => {
         if (err) {
            reject(new Error("Something went wrong ... @insertDpt"))
         } else {
            db.commit()
            resolve(result);
         }
      })
   })
}

module.exports = insertDpt;