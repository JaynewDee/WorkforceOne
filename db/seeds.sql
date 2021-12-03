INSERT INTO department (dept_name)
VALUES    ("Sales"),
          ("Business Development"),
          ("Human Resources"),
          ("Engineering"),
          ("Janitorial");

INSERT INTO _role (title, salary, dept_id)
VALUES    ("Intern", 0.00, 4),
          ("Developer", 70000.00, 4),
          ("Manager", 110000.00, 4),
          ("Janitor", 45000.00, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES    ("Margot", "Fuzzy", 1),
          ("Joshua", "Diehl", 2),
          ("Tristin", "Corliss", 3),
          ("Joe", "Schlomo", 4)