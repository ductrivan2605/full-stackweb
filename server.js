/* <!-- RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023A
Assessment: Assignment 
Author: Nguyen Tung Bao Thach (s3929174), Van Duc Tri (s3978233), Nguyen Duong Truong Thinh (s3914412)
/* Acknowledgement: Acknowledge the resources that you use show in the report. --> */ 

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const app = express();

mongoose.connect('mongodb+srv://tri:e9ewNB2QBoId5SEa@fullstackwebproject.yauzkwr.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));


dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 3000
// Show the home page
app.get('/', (req, res) => {
    res.render('home');
  });

// log requests
app.use(morgan('tiny'));
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
//show product
app.post('/api/product', (req, res) => {
  console.log(req.body);
  const product = new Products(req.body);
  product.save()
    .then(() => res.redirect('/view-products'))
    .catch(error => res.send(error));
});
app.get('/view-products', (req, res) => {
  Products.find({})
    .then(products => res.render('view-products', { products }))
    .catch(error => res.send(error));
});
// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load public
app.use(express.static('public'))
// define route
let route = require('./server/routes/router');
const Products = require('./server/models/product');
// Show the home page
app.get('/', (req, res) => {
    res.render('index');
  });
app.use('/', route)
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});


