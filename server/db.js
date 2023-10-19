var mysql = require('mysql2/promise'); 
async function initializeDatabase() {
  const connection = await mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: 'test',
    database: 'squeezy' 
  }); 

  console.log("Connected to the database!");
  return connection;
}

module.exports = initializeDatabase();
