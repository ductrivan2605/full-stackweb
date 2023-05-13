const express = require('express');
const product = require('./product');
const product = require('./product');
const router = express.Router();

router.get('/',(req,res)=> {
    res.render('home');
})
router.post('/product', async(req,res)=>{
    const product = new product(req.body)   
    try {
        const product = await product.save()
        res.json(product)
        }
    catch {
        res.json({error:"Error saving product"})
    }
    }
);
router.get('/product', async(req,res)=>{
    const product = await product.find
    res.json(product)
    });
module.exports = router