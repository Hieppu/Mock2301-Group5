DROP DATABASE IF EXISTS Mock_Project;
CREATE DATABASE Mock_Project;
USE Mock_Project;

-- Tạo Table Account
DROP TABLE IF EXISTS `Account`;
CREATE TABLE `Account`(
	account_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE KEY,
    `password`  VARCHAR(50) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phone_number VARCHAR(15) NOT NULL UNIQUE KEY,
    email VARCHAR(100) NOT NULL UNIQUE KEY,
    `role`  ENUM("ADMIN", "USER"),
    `status` ENUM("ACTIVE", "NOT_ACTIVE"),
    joined_date DATE DEFAULT(NOW())
);
-- Insert vào account
INSERT INTO `Account`	(username, 		`password`,		first_name,		last_name,		address,		phone_number, 	    	 email,			    		 	`role`, 		`status`,			joined_date)
VALUES					('admin' ,  	  '123456',		   'admin', 	  'admin',		'admin',    	'0123456789', 			'admin@gmail.com' ,           	'ADMIN',		'ACTIVE',			'2020-2-13'),
						('admin1' ,  	  '123456',		   'admin1', 	  'admin1',		'admin1',    	'0123456788', 			'admin1@gmail.com',            	'ADMIN',		'ACTIVE',			'2022-11-23'),
                        ('hien97' ,  	  '123456',		   'Dinh', 	 	  'Hien',		'Hai Duong',    '0333808200', 			'hien@gmail.com',               'USER',			'ACTIVE',			'2022-5-13'),
						('tienbry' ,  	  '123456',		   'Tien', 	 	  'Bip',		'Hai Phong',    '0988888887', 			'tienbip@gmail.com',     	   	'USER',			'ACTIVE',			'2023-2-12'),
                        ('khabanh' ,  	  '123456',		   'Ngo Ba', 	  'Kha',		'Bac Ninh',    	'0988888888', 			'khabanh@gmail.com',     	   	'USER',			'ACTIVE',			'2022-12-12')
;
-- Tạo Table Category
DROP TABLE IF EXISTS Category;
CREATE TABLE Category(
	category_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	category_name VARCHAR(50) NOT NULL
);
-- Insert vào category
INSERT INTO Category(category_name)
VALUES 				('Apple'),
					('Xiaomi'),
                    ('Samsung'),
                    ('Oppo'),
                    ('Realme')
                  
;

-- Tạo Table Chi tiết sản phẩm
DROP TABLE IF EXISTS Detail;
CREATE TABLE Detail(
	detail_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_screen VARCHAR(100),
    product_refreshrate VARCHAR(30),
    product_os VARCHAR(30),
    product_front_camera VARCHAR(100),
    product_back_camera VARCHAR(100),
    product_chipset VARCHAR(100),
    product_sim VARCHAR(100),
    product_battery VARCHAR(100),
    product_charger VARCHAR(100)
	
);
-- Insert vào Detail
INSERT INTO Detail	(product_screen,							product_refreshrate,			product_os,				product_front_camera,			product_back_camera,						product_chipset,							product_sim,													product_battery,	product_charger)
VALUES				('OLED6.7"Super Retina XDR',				'120Hz',						'iOS 16',				'12 MP',						'Chính 48 MP & Phụ 12 MP, 12 MP',			'Apple A16 Bionic',							'1 Nano SIM & 1 eSIM,Hỗ trợ 5G',								'4323 mAh',			'20 W'	),
					('AMOLED 6.67" 1.5K',						'120Hz',						'Android 12',			'20 MP',						'Chính 108 MP & Phụ 8 MP, 2 MP',			'MediaTek Dimensity 8100 Ultra 8 nhân',		'2 Nano SIM,Hỗ trợ 5G',											'4500 mAh',			'67 W'	),
                    ('AMOLED 6.36" Full HD+',					'120Hz',						'Android 13',			'32 MP',						'Chính 50 MP & Phụ 12 MP, 10 MP',			'Snapdragon 8 Gen 2 8 nhân',				'2 Nano SIM,Hỗ trợ 5G',											'5000 mAh',			'120 W'	),
                    ('Dynamic AMOLED 2X 6.1" Full HD+',			'120Hz',						'Android 13',			'12 MP',						'Chính 50 MP & Phụ 12 MP, 10 MP',			'Snapdragon 8 Gen 2 8 nhân',				'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM,Hỗ trợ 5G',				'5000 mAh',			'25 W'	),
                    ('Dynamic AMOLED 2X 6.8" Quad HD+(2K+)',	'120Hz',						'Android 13',			'12 MP',						'Chính 200 MP & Phụ 12 MP, 10 MP, 10 MP',	'Snapdragon 8 Gen 2 8 nhân',				'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM,Hỗ trợ 5G',				'5000 mAh',			'45 W'	),
					('AMOLED 6.7" Quad HD+ (2K+)',				'120Hz',						'Android 12',			'32 MP',						'Chính 50 MP & Phụ 50 MP, 13 MP',			'Snapdragon 8 Gen 1',						'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM,Hỗ trợ 5G',				'5000 mAh',			'80 W'	),
                    ('AMOLED 6.7" Full HD+',					'120Hz',						'Android 12',			'32 MP',						'Chính 50 MP & Phụ 8 MP, 2 MP',				'MediaTek Dimensity 8100 Max 8 nhân',		'2 Nano SIM ,Hỗ trợ 5G',										'4500 mAh',			'80 W'	),
                    ('AMOLED 6.4" Full HD+',					'90Hz',							'Android 12',			'32 MP',						'Chính 64 MP & Phụ 2 MP, 2 MP',				'Snapdragon 680',							'2 Nano SIM ,Hỗ trợ 4G',										'4500 mAh',			'33 W'	),
                    ('Super AMOLED 6.4" Full HD+',				'90Hz',							'Android 12',			'16 MP',						'Chính 50 MP & Phụ 8 MP, 2 MP',				'MediaTek Dimensity 920 5G',				'2 Nano SIM ,Hỗ trợ 5G',										'4500 mAh',			'60 W'	),
                    ('IPS LCD 6.6" Full HD+',					'120Hz',						'Android 12',			'16 MP',						'Chính 64 MP & Phụ 8 MP, 2 MP',				'Snapdragon 695 5G',						'2 Nano SIM (SIM 2 chung khe thẻ nhớ),Hỗ trợ 5G',				'5000 mAh',			'33 W'	),
                    ('Super AMOLED6.4" Full HD+',				'90Hz',							'Android 12',			'16 MP',						'Chính 50 MP & Phụ  2 MP',					'MediaTek Helio G99',						'2 Nano SIM ,Hỗ trợ 5G',										'5000 mAh',			'33 W'	)
                    
;

-- Tạo Table Product
DROP TABLE IF EXISTS Product;
CREATE TABLE Product(
	product_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	category_id INT UNSIGNED,
    detail_id INT UNSIGNED,
    product_name VARCHAR(50) NOT NULL,
    product_ram VARCHAR(6),
    product_storage ENUM("64Gb","128Gb","256Gb","512Gb","1Tb"),
    product_color VARCHAR(15),
    product_price INT,
    product_discount INT,
    image VARCHAR(200) ,
    `description` VARCHAR(1000),
    added_date DATE DEFAULT(now()),
    FOREIGN KEY (category_id) REFERENCES Category(category_id),
	FOREIGN KEY (detail_id) REFERENCES Detail(detail_id)
);
-- Insert vào Product
INSERT INTO Product(category_id, 		detail_id,			product_name,					product_ram,		product_storage,	product_color,		product_price,	product_discount,	image,				`description`)
VALUES				('1',				'1',				'Iphone 14 Promax',				'6Gb',				'128Gb',			'Purple',			'28990000',			'0',			'0',				'Iphone 14 Promax Purple 128Gb'),
					('1',				'1',				'Iphone 14 Promax',				'6Gb',				'256Gb',			'Purple',			'30990000',			'0',			'0',				'Iphone 14 Promax Purple 256Gb'),
					('1',				'1',				'Iphone 14 Promax',				'6Gb',				'512Gb',			'Purple',			'33990000',			'0',			'0',				'Iphone 14 Promax Purple 512Gb'),
					('1',				'1',				'Iphone 14 Promax',				'6Gb',				'1Tb',				'Purple',			'36990000',			'0',			'0',				'Iphone 14 Promax Purple 1Tb'),
					('1',				'1',				'Iphone 14 Promax',				'6Gb',				'128Gb',			'Blue',				'28990000',			'0',			'0',				'Iphone 14 Promax Blue 128Gb'),
					('1',				'1',				'Iphone 14 Promax',				'6Gb',				'256Gb',			'Blue',				'30990000',			'0',			'0',				'Iphone 14 Promax Blue 256Gb'),
					('1',				'1',				'Iphone 14 Promax',				'6Gb',				'512Gb',			'Blue',				'32990000',			'0',			'0',				'Iphone 14 Promax Blue 512Gb'),
					('1',				'1',				'Iphone 14 Promax',				'6Gb',				'1Tb',				'Blue',				'35990000',			'0',			'0',				'Iphone 14 Promax Blue 1Tb'),
					('2',				'2', 				'Xiaomi 12T',					'8Gb',				'128Gb',			'Blue',				'11990000',			'0',			'0',				'Xiaomi 12T Blue 128Gb'),
					('2',				'2',  				'Xiaomi 12T',					'8Gb',				'256Gb',			'Blue',				'12490000',			'0',			'0',				'Xiaomi 12T Blue 256Gb'),
					('2',				'2',  				'Xiaomi 12T',					'8Gb',				'128Gb',			'Grey',				'11990000',			'0',			'0',				'Xiaomi 12T Gray 128Gb'),
					('2',				'2', 				'Xiaomi 12T',					'8Gb',				'256Gb',			'Grey',				'12490000',			'0',			'0',				'Xiaomi 12T Gray 256Gb'),
					('2',				'2', 				'Xiaomi 12T',					'8Gb',				'128Gb',			'Black',			'11990000',			'0',			'0',				'Xiaomi 12T Black 128Gb'),
					('2',				'2',		 		'Xiaomi 12T',					'8Gb',				'256Gb',			'Black',			'12490000',			'0',			'0',				'Xiaomi 12T Black 256Gb'),
					('2',				'3', 				'Xiaomi 13',					'8Gb',				'128Gb',			'Green',			'18990000',			'0',			'0',				'Xiaomi 13 Green 128Gb'),
					('2',				'3',  				'Xiaomi 13',					'8Gb',				'256Gb',			'Green',			'19590000',			'0',			'0',				'Xiaomi 13 Green 256Gb'),
					('2',				'3',  				'Xiaomi 13',					'8Gb',				'128Gb',			'Green',			'18990000',			'0',			'0',				'Xiaomi 13 Green 128Gb'),
					('2',				'3',  				'Xiaomi 13',					'8Gb',				'256Gb',			'Green',			'19590000',			'0',			'0',				'Xiaomi 13 Green 256Gb'),
                    ('2',				'3',  				'Xiaomi 13',					'8Gb',				'128Gb',			'Black',			'18990000',			'0',			'0',				'Xiaomi 13 Black 128Gb'),
					('2',				'3',  				'Xiaomi 13',					'8Gb',				'256Gb',			'Black',			'19590000',			'0',			'0',				'Xiaomi 13 Black 256Gb'),
					('2',				'3',  				'Xiaomi 13',					'8Gb',				'128Gb',			'Black',			'18990000',			'0',			'0',				'Xiaomi 13 Black 128Gb'),
					('2',				'3', 				'Xiaomi 13',					'8Gb',				'256Gb',			'Black',			'19590000',			'0',			'0',				'Xiaomi 13 Black 256Gb'),
                    ('3',				'4',				'Samsung Galaxy S23',			'8Gb',				'128Gb',			'Black',			'21990000',			'0',			'0',				'Samsung Galaxy S23 Black 8Gb-128Gb'),
                    ('3',		 		'4',				'Samsung Galaxy S23',			'8Gb',				'256Gb',			'Black',			'23990000',			'0',			'0',				'Samsung Galaxy S23 Black 8Gb-256Gb'),
                    ('3',		 		'4',				'Samsung Galaxy S23',			'8Gb',				'128Gb',			'Purple',			'21990000',			'0',			'0',				'Samsung Galaxy S23 Purple 8Gb-128Gb'),
                    ('3',		 		'4',				'Samsung Galaxy S23',			'8Gb',				'256Gb',			'Purple',			'23990000',			'0',			'0',				'Samsung Galaxy S23 Purple 8Gb-256Gb'),
                    ('3',		 		'4',				'Samsung Galaxy S23',			'8Gb',				'128Gb',			'Green',			'21990000',			'0',			'0',				'Samsung Galaxy S23 Green 8Gb-128Gb'),
                    ('3',		 		'4',				'Samsung Galaxy S23',			'8Gb',				'256Gb',			'Green',			'23990000',			'0',			'0',				'Samsung Galaxy S23 Green 8Gb-256Gb'),
					('3',  				'5',				'Samsung Galaxy S23 Ultra',		'8Gb',				'256Gb',			'Green',			'26990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Green 8Gb-256Gb'),
                    ('3',  				'5',				'Samsung Galaxy S23 Ultra',		'12Gb',				'512Gb',			'Green',			'31990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Green 12Gb-512Gb'),
                    ('3',  				'5',				'Samsung Galaxy S23 Ultra',		'12Gb',				'1Tb',			 	'Green',			'39990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Green 12Gb-1Tb'),
                    ('3',  				'5',				'Samsung Galaxy S23 Ultra',		'8Gb',				'256Gb',			'Purple',			'26990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Purple 8Gb-256Gb'),
                    ('3',  				'5',				'Samsung Galaxy S23 Ultra',		'12Gb',				'512Gb',			'Purple',			'31990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Purple 12Gb-512Gb'),
                    ('3',  				'5',				'Samsung Galaxy S23 Ultra',		'12Gb',				'1Tb',			 	'Purple',			'39990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Purple 12Gb-1Tb'),
					('3',  				'5',				'Samsung Galaxy S23 Ultra',		'8Gb',				'256Gb',			'Black',			'26990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Black 8Gb-256Gb'),
                    ('3',  				'5',				'Samsung Galaxy S23 Ultra',		'12Gb',				'512Gb',			'Black',			'31990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Black 12Gb-512Gb'),
                    ('3',  				'5',				'Samsung Galaxy S23 Ultra',		'12Gb',				'1Tb',			 	'Black',			'39990000',			'0',			'0',				'Samsung Galaxy S23 Ultra Black 12Gb-1Tb'),
                    ('4',  		  		'6',				'Oppo Find X5 Pro',				'12Gb',				'256Gb',			'Black',			'24990000',			'0',			'0',				'Oppo Find X5 Pro Black 256Gb'),
                    ('4',  		   		'6',				'Oppo Find X5 Pro',				'12Gb',				'256Gb',			'White',			'24990000',			'0',			'0',				'Oppo Find X5 Pro White 256Gb'),
					('4',  		   		'7',				'Oppo Reno8 Pro',				'12Gb',				'256Gb',			'Green',			'17990000',			'0',			'0',				'Oppo Reno8 Pro Green 256Gb'),
                    ('4',  		   		'7',				'Oppo Reno8 Pro',				'12Gb',				'256Gb',			'Black',			'17990000',			'0',			'0',				'Oppo Reno8 Pro White 256Gb'),
                    ('4',  		   		'8',				'Oppo Reno8',					'8Gb',				'256Gb',			'Rose Gold',		'13990000',			'0',			'0',				'Oppo Reno8  Rose Gold 256Gb'),
                    ('4',  		   		'8',				'Oppo Reno8',					'8Gb',				'256Gb',			'Black',			'13990000',			'0',			'0',				'Oppo Reno8  White 256Gb'),
                    ('5',  		   		'9',				'Realme 9 Pro+',				'8Gb',				'128Gb',			'Blue',				'7490000',			'0',			'0',				'Realme 9 Pro+ Blue 128Gb'),
                    ('5',  		   		'10',				'Realme 9 Pro',					'8Gb',				'128Gb',			'Green',			'6490000',			'0',			'0',				'Realme 9 Pro Green 128Gb'),
					('5',  		   		'11',				'Realme 10',					'8Gb',				'256Gb',			'Black',			'7190000',			'0',			'0',				'Realme 10 Black 256gb'),
                    ('5',  		   		'11',				'Realme 10',					'8Gb',				'256Gb',			'White',			'7190000',			'0',			'0',				'Realme 10 White 256gb')
                    
				


;

-- Tạo Table Giỏ Hàng
DROP TABLE IF EXISTS Cart;
CREATE TABLE Cart(
	cart_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_id INT UNSIGNED,
    quantity INT,
    total_cart_money INT,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);




-- Tạo Table Voucher
DROP TABLE IF EXISTS Voucher;
CREATE TABLE Voucher(
	voucher VARCHAR(10) PRIMARY KEY,
    discount INT
);
-- Insert vào Voucher
INSERT INTO Voucher	(voucher,			discount)
VALUES				('SALEOFF10',		'10'),
					('SALEOFF20',		'20'),
                    ('SALEOFF30',		'30'),
                    ('SALEOFF40',		'40'),
                    ('SALEOFF50',		'50')


;
-- Tạo Table Thanh toán
DROP TABLE IF EXISTS Payment;
CREATE TABLE Payment(
	payment_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    account_id INT UNSIGNED,
	cart_id INT UNSIGNED,
    voucher VARCHAR(10),
    note VARCHAR(1000),
    total_payment_money INT,
    payment_date DATE DEFAULT(now()),
    payment_status ENUM("SUCCESSFULLY","UNSUCESSFULLY"),
    FOREIGN KEY (cart_id) REFERENCES Cart(cart_id),
    FOREIGN KEY (account_id) REFERENCES `Account`(account_id),
    FOREIGN KEY (voucher) REFERENCES Voucher(voucher)
);



