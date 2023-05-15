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

// Show the vendor page
app.get('/', (req, res) => {
  res.render('vendor');
});
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});