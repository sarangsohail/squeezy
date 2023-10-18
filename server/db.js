var mysql = require('mysql2'); 
var connection = mysql.createConnection({ 
  host: 'localhost', 
  user: 'root', 
  password: 'test',
  database: 'squeezy' 
}); 

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

module.exports = connection;
