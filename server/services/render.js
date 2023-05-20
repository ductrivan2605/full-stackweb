const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/products
    axios.get('http://localhost:3000/api/products')
        .then(function(response){
            res.render('home', { products : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}
// exports.display_product = (req, res) => {
//     axios.get('http://localhost:3000')
//         .then(function(data){
//             res.render('view-products',{products : data.data} )
//         })
//         .catch(err =>{
//             res.send(err);
//         })
// }

exports.add_product = (req, res) =>{
    res.render('add_product');
}

exports.update_product = (req, res) =>{
    axios.get('http://localhost:3000/api/product', { params : { id : req.query.id }})
        .then(function(productdata){
            res.render("update_product", { products : productdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}