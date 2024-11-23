const dotenv = require('dotenv');
const Pool = require('pg').Pool;
const process = require('process');

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: DB_HOST_NAME,
    database: DB,
    password: DB_PASSWORD,
    port: DB_PORT
})


module.exports = pool;