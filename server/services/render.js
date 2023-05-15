const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/products
    axios.get('http://localhost:3000/api/products')
        .then(function(response){
            res.render('index', { products : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_product');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/products', { params : { id : req.query.id }})
        .then(function(productdata){
            res.render("update_user", { products : productdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}