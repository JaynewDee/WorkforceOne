DROP DATABASE IF EXISTS workforce_db;
CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE department (
     id INT AUTO_INCREMENT PRIMARY KEY,
     dept_name VARCHAR(30)
);

CREATE TABLE _role (
     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
     title VARCHAR(30),
     salary DECIMAL,
     department_id INT,
     FOREIGN KEY (department_id) REFERENCES department(id) ON UPDATE CASCADE
);

CREATE TABLE employee (
     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT,
     manager_id INT,
     FOREIGN KEY (role_id) REFERENCES _role(id) ON UPDATE CASCADE,
     FOREIGN KEY (manager_id) REFERENCES employee(id) ON UPDATE CASCADE
);

