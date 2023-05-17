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

// Show the vendor page
app.get('/', (req, res) => {
    res.render('home');
  });

// log requests
app.use(morgan('tiny'));

// mongodb connection

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load public
app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/img', express.static(path.resolve(__dirname, "public/img")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

// load routers
// app.use('/', require('./server/routes/router'))
let route = require('./server/routes/router')
// console.log(route)
// Show the home page
app.get('/', (req, res) => {
    res.render('index');
  });
  
app.use('/', route)
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});