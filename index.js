const express = require('express');
const db = require('./database');

const app = express();
const port = 3500;


//performing crud operations
//CREATE
app.get('/createTable' ,(req, res) =>{
    const sql = `
    CREATE TABLE IF NOT EXISTS user(
        id INT AUTO_INCREMENT PRIMARY KEY ,
        name VARCHAR (255) NOT NULL,
        email VARCHAR (255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    `
    db.query(sql, (err,) =>{
        if(err){
            console.log('error creating users table:', err)
            return response.status(500).send('Error creating users table')
        }

        res.send('Users table created successfully')
    })

})
app.get('/createUser' ,(req, res) =>{
    const sql = `
    INSERT INTO user (name , email) VALUES('Myles','mylesgray@gmail.com')
    `
    db.query(sql, (err,) =>{
        if(err){
            console.log('error creating users user records:', err)
            return response.status(500).send('Error creating users records')
        }

        res.send('Users records created successfully')
    })

})

app.get('/', (req, res) => {
    res.status(200).send('Hello Pope, you are now using the express package');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
