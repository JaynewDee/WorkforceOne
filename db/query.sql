SELECT employee.first_name AS first, employee.last_name AS last, employee.role_id AS role_id, employee.manager_id AS manager_id, _role.id
FROM employee
INNER JOIN _role ON employee.role_id = _role.id;