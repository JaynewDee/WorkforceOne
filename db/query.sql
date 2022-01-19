SELECT _role.title AS title, department.dept_name AS department
FROM _role
JOIN department ON _role.department_id = department.id;