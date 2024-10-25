// import package
const mysql = require('mysql2')

//create connection
const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pop3_lumar21',
    database: 'node_crud'
})

//connect
db.connect((err) =>{
if(err){
    console.log('Error connecting to the DB:', err,stack)
    return;
}
console.log('successfully connected to the DB')

})