const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "adminer",
  password: "adminer",
  database: "technical-test",
});
module.exports = connection;
