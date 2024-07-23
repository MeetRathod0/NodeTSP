CREATE TABLE users 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    email VARCHAR(128),
    phone CHAR(12) NOT NULL,
    user_type INT,
    status SMALLINT DEFAULT 0,
    entered_datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_datetime DATETIME
);

INSERT INTO users VALUES 
(DEFAULT,'Meet','rathodmeet.26@gmail.com','9624409050',1,1,DEFAULT,NULL);
(DEFAULT,'Meet','rathodmeet.26@gmail.com','9624409050',2,1,DEFAULT,NULL);



CREATE TABLE users_password
(
    id SERIAL PRIMARY KEY,
    password VARCHAR(512) NOT NULL,
    user_id INT,
    entered_datetime DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users_password_history
(
    id SERIAL PRIMARY KEY,
    user_id INT,
    old_password VARCHAR(512) NOT NULL,
    new_password VARCHAR(512) NOT NULL,
    entered_datetime DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users_login_history
(
    id SERIAL PRIMARY KEY,
    user_id INT,
    
);
CREATE TABLE users_address
(
    id SERIAL PRIMARY KEY,
    user_id INT,
    phone VARCHAR(12),
    address TEXT NOT NULL,
    city VARCHAR(128) NOT NULL,
    district VARCHAR(128) NOT NULL,
    pincode CHAR(8) NOT NULL,
    is_primary INT DEFAULT 1,
    status SMALLINT DEFAULT 1,
    entered_datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_datetime DATETIME
);

CREATE TABLE products_category 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(512) NOT NULL,
    status SMALLINT DEFAULT 1,
    entered_datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_datetime DATETIME
);
CREATE TABLE products 
(
    id SERIAL PRIMARY KEY,
    category_id INT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price FLOAT NOT NULL,  
    entered_datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_datetime DATETIME
);

CREATE TABLE products_catelogue
(
    id SERIAL PRIMARY KEY,
    product_id INT,
    total_qty INT NOT NULL,
    sell_qty INT,
    sell_completed_datetime DATETIME,
    entered_datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_datetime DATETIME
);