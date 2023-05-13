const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> {
    res.render('home');
})
router.post('/product', async(req,res)=>{
    const product = new product(req.body)   
    try {
        await.product
    }
})