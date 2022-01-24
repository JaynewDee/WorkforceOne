const db = require('../config/connection')

const selectDptId = async (roleDept) => {
   return await new Promise((resolve, reject) => {
      const select = "SELECT id FROM department WHERE dept_name = ?";
      db.query(select, roleDept, (err, result) => {
         if (err) {
            reject(new Error("Something went wrong...  @selectDptId"))
         } else {
            resolve(result[0].id);
         }
      })
   })
}

module.exports = selectDptId;