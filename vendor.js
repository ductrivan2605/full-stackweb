/* <!-- RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023A
Assessment: Assignment 
Author: Nguyen Tung Bao Thach (s3929174), Van Duc Tri (s3978233), Nguyen Duong Truong Thinh (s3914412)
/* Acknowledgement: Acknowledge the resources that you use show in the report. --> */ 

const express = require('express');
const ejs = require('ejs');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect('mongodb+srv://tri:e9ewNB2QBoId5SEa@fullstackwebproject.yauzkwr.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// route
let route = require('./server/routes/router')

// Show the vendor page
app.get('/', (req, res) => {
  res.render('vendor');
});
app.get('/add-product', (req,res)=> {
  res.render('add-product');
});
app.get('/products', (req, res) => {
  Product.find({})
    .then(products => res.render('view-products', { products }))
    .catch(error => res.send(error));
});
app.use('/', route)
app.listen(3000)

