CREATE DATABASE mydb;

USE mydb;

CREATE TABLE member (
    idx INT AUTO_INCREMENT PRIMARY KEY,
    member_code CHAR(50) NOT NULL,
    team_code CHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    level INT NOT NULL,
    phone_number VARCHAR(20),
    address VARCHAR(255),
    add_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE team (
    idx INT AUTO_INCREMENT PRIMARY KEY,
    team_code CHAR(50),
    name VARCHAR(50) NOT NULL,
    `group` VARCHAR(255),
    add_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);