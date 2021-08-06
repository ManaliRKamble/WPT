const { query } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "tflstore",
  port: "3306",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("mysql is connected");
  }
});

module.exports = connection;
