const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1158',   // put your mysql password if you have one
  database: 'traveloop'
});

module.exports = db;