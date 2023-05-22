DROP DATABASE IF EXISTS finalexamreactjs;

CREATE DATABASE IF NOT EXISTS finalexamreactjs;
USE finalexamreactjs;

DROP TABLE IF EXISTS 	`Account`;
CREATE TABLE IF NOT EXISTS `Account` ( 	
	id 				SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`username`	 	CHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`username`) >= 6 AND LENGTH(`username`) <= 50),
    `password` 		VARCHAR(800) NOT NULL,
    `first_name` 	NVARCHAR(50) NOT NULL,
    `last_name` 		NVARCHAR(50) NOT NULL,
	`email` 		CHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`email`) >= 6 AND LENGTH(`email`) <= 50),
    `role` 			ENUM('ADMIN','EMPLOYEE','MANAGER'),
    `avatar_url`   	VARCHAR(500),
	`status`		TINYINT DEFAULT 0 -- 0: Not Active, 1: Active,
    
);
