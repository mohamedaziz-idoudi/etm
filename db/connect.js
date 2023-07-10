const mysql = require('mysql2');

const connection = mysql.createPool({
  host: "92.222.172.235",
  user: "etm_root",
  password: "etmholding2233",
  database: "etm"
});

connection.getConnection((err, conn) => {
  if (err) {
    console.error('Error connecting to MySQL database:');
    console.error(err);
    return;
  }
  console.log('Connected to MySQL database!');
  // If needed, you can perform additional operations here using the "conn" object.
  // Remember to release the connection when you're done with it using "conn.release()".
});

module.exports = connection;
