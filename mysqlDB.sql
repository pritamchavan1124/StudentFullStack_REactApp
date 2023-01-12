create database studRegistration;
use studRegistration;

create table registration(PRN INT NOT NULL PRIMARY KEY, pwd VARCHAR(30) NOT NULL, cmfpwd VARCHAR(30) NOT NULL );

create table studentDetails(RollNo INT NOT NULL PRIMARY KEY,studName VARCHAR(30) NOT NULL,course VARCHAR(30),dateOA DATE,marks INT,phoneNO VARCHAR(15));

