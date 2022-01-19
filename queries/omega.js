const db = require('../config/connection')

const omegaQuery = 
`SELECT employee.first_name AS First, employee.last_name AS Last, department.name AS Department 
FROM employee 
JOIN _role ON employee.role_id = role.id
JOIN department ON _role.department_id = department.id ORDER BY employee.id;`

const omega = async () => {
   return await new Promise((resolve, reject) => {
      db.query(omegaQuery, (err, results) => {
         if (err) {
            reject(new Error("Something went wrong... @omega"))
         } else {
            resolve(results)
         }
      })
   })
}

module.exports = omega;