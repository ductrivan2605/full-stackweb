const express = require('express');
const app = express()
const port = 3456

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


app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Server start on port ${port}!`);
})