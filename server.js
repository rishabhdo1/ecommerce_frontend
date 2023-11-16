const express = require("express");

const mysql = require('mysql');

const path = require("path");

const app = express();

//use static to access files in public
app.use('/',express.static(path.join(__dirname,'public')))

app.use('/productList',express.static(path.join(__dirname,'./public/product.html')))

// fetch('http://localhost:5000/')
// .then(response => response.json())
// .then(data => {
// console.log(data);
// })
app.listen(3000,()=>console.log('server listening on port 3000'));
