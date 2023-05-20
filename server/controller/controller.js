var Products = require('../models/product');

// create and save new product
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new product
    const product = new Products(req.body);
        

    // save product in the database
    product
        .save(product)
        .then(() => {
            // res.send(data)
            res.redirect('/add-to-cart');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all products/ retrive and return a single product

exports.find = (req, res) => {
    if(req.params.id){
        const id = req.params.id;
        Products.findById(id)
}
    else{
    Products.find({})
    .then(products => res.render('view-products', { products }))
    .catch(error => res.send(error));
}}
// Update a new idetified product by product id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update product with ${id}. Maybe product not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update product information"})
        })
}

// Delete a product with specified product id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Products.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Product was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Product with id=" + id
            });
        });
}