## Installation of postgres on Mac
- brew install postgresql
- On use the officiel site https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- Once installed, it gives the shell & the GUI (pgAdmin4) tool
- remember the password, it would be used to connect
- From command promt type to connect to the DB
    - psql -U postgres [postgres is the default user]

## SOme useful commands
- \l = List all the databases
- \c = Getting inside a DB
    - \c myDb
- \dt = list all tables in that DB

- Create Database nextJS
    - CREATE DATABASE nextjs;
- create Table products
    - CREATE TABLE products( id SERIAL PRIMARY KEY, name VARCHAR(255));

- List all items
    - select * from products;
```
    select * from products;
 id |  name   | price 
----+---------+-------
  1 | iPhone  |  1000
```

- Delete all items from table 
    - `DELETE FROM products;`  [`products` is the name of the table]
    - `ALTER SEQUENCE products_id_seq RESTART WITH 1;` [But ensure to reset the ID from 1]


## How to create columns on the table using command line
- Remember the `ID` is a primary key and it has to be auto incremented.
- So, need to use `serial`

```
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL
)
```
- This will create a table called `products`
- In that table it will create 3 columns, `id` - unique and not null (auto incremented using `serial`)
- name - string
- price integrer

## Connecting Postgres with Express
- install pg package `npm i pg`
- Create a file postgresDB.js
```
const Pool = require("pg").Pool

const pool = new Pool({
    user : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD,
    host : process.env.POSTGRES_HOST,
    port : process.env.POSTGRES_PORT,
    database : process.env.POSTGRES_DATABASE
})

module.exports = pool
```
