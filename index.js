const express = require('express');
const ejs = require('ejs');
const port = 3000;
const app = express();
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/login', (req,res)=>{
    res.render('login')
})
app.get('/register', (req,res)=>{
    res.render('register')
})
app.get('/vendor', (req, res) => {
    res.render('vendor');
});

app.use(express.json())
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Server start on port ${port}!`);
})
mongoose.connect('mongodb+srv://tri:e9ewNB2QBoId5SEa@fullstackwebproject.yauzkwr.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));