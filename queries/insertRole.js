const db = require('../config/connection')

const insertRole = async (role, salary, id) => {
   return await new Promise((resolve, reject) => {
      const params = [role, salary, id]
      db.query("INSERT INTO _role (title, salary, department_id) VALUES [?, ?, ?]", [params], (err, result) => {
         if (err) {
            reject(new Error("Something went wrong ... @insertRole"))
         } else {
            db.commit()
            resolve(result);
         }
      })
   })
}

module.exports = insertRole;