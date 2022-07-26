/* Replace with your SQL commands *//* Replace with your SQL commands */

CREATE SCHEMA IF NOT EXISTS product;

CREATE TABLE product.users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO product.users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');