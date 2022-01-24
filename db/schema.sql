-- Define the essential structure of database by modeling the fields and attributes of each data object.  

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
     FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INT,
     manager_id INT,
     FOREIGN KEY (role_id) REFERENCES _role (id),
     FOREIGN KEY (manager_id) REFERENCES employee(id)
);
