
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,

  // Username
  user: "root",

  // Password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  connection.end();
});