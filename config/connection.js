const mysql = require("mysql");
require('dotenv').config();
let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
}

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the Burger database!");
});

module.exports = db;
