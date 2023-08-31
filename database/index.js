const Pool = require('pg').Pool;
require("dotenv").config();

const devConfig = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: 'localhosttest',
    port: 5432,
    database: process.env.DATABASE
}

const proConfig = {
    connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? proConfig : devConfig);

module.exports = pool;