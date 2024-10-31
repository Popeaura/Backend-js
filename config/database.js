const mysql = require('mysql2');
require('dotenv').config()


const pool = mysql.createPool({
    
})
// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pop3_lumar21',
    database: 'Node_crud'
});

// Connect
db.connect((err) => {
    if (err) {
        console.log('Error connecting to the DB:', err.stack);
        return;
    }
    console.log('Successfully connected to the DB');
});

// Export the connection
module.exports = db;
