const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require('mysql');
require('dotenv').config();

const server = express();

server.use(cors());
server.use(bodyParser.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
    }
    else{
        console.log('Connected to MySQL server');
    }
});

server.post('/demo' , (req,res)=>{
    console.log(req.body)
    
    const sql_query = `SELECT Recommended FROM movie_recommender_2 WHERE Action = ${req.body.Action} AND Adventure = ${req.body.Adventure} AND Animation = ${req.body.Animation} AND Comedy = ${req.body.Comedy} AND Crime = ${req.body.Crime} AND Documentary = ${req.body.Documentary} AND Drama = ${req.body.Drama} AND Fantasy = ${req.body.Fantasy} AND Horror = ${req.body.Horror} AND Musical = ${req.body.Musical} AND Mystery = ${req.body.Mystery} AND Romance = ${req.body.Romance} AND Thriller = ${req.body.Thriller} AND War = ${req.body.War}`;

    connection.query(sql_query , (err,result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
        }
    })
})

server.listen(8080,()=>{
    console.log('Server Started');
})