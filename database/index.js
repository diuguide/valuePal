const Pool = require('pg').Pool;
require("dotenv").config();

const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: process.env.DATABASE
})

module.exports = pool;