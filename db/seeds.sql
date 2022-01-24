ALTER TABLE employee DROP FOREIGN KEY employee_ibfk_1;
ALTER TABLE employee DROP FOREIGN KEY employee_ibfk_2;

INSERT INTO department (dept_name)
VALUES    ("Sales"),
          ("Business Development"),
          ("Human Resources"),
          ("Engineering"),
          ("Janitorial");

INSERT INTO _role (title, salary, department_id)
VALUES    ("Intern", 0.00, 4),
          ("Developer", 70000.00, 4),
          ("Manager", 110000.00, 4),
          ("Janitor", 45000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES    ("Margot", "Fuzzy", 1, 3),
          ("Joshua", "Diehl", 2, 3),
          ("Tristin", "Corliss", 3, null),
          ("Joe", "Schlomo", 4, 2);

