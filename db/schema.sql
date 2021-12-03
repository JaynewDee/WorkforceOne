DROP DATABASE IF EXISTS workforce_db;
CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE department (
     id INT NOT NULL AUTO_INCREMENT,
     dept_name VARCHAR(30) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE _role (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     dept_id INT,
     title VARCHAR(30) NOT NULL,
     salary DECIMAL,
     FOREIGN KEY (dept_id) REFERENCES department(id)
);

CREATE TABLE employee (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT,
     manager_id INT,
     FOREIGN KEY (role_id) REFERENCES _role(id)
);