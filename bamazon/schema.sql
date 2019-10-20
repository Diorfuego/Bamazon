
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity (45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bed Set", "Furniture ", 869.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Exhaust System", "Cars", 779.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skullcandy Headphones", "Technology", 193.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Twin Turbo", "Cars", 3339.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Android","Technology", 879.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Windoms", "Technology", 4999.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Floor Mats", "Cars", 24.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Technology", 229.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pillows", "Furniture", 99.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Television", "Technology", 174.99, 50);


