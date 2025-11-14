const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D4-92847-Arvin',
    password: 'manager',
    database: 'movies_db'
})

module.exports = pool