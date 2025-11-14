const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "movies_db",
});

module.exports = pool;
