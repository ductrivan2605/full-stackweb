var Userdb = require('../model/model');
const Product = require('../models/Product');

// create and save new product
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new product
    const AddProduct = new Product({
        name : req.body.name,
        description : req.body.email,
        Image: req.body.Image,
        actual_price : req.body.actual_price,
        discount_price : req.body.discount_price,
        quantity : req.body.quantity,
        category : req.body.category,
    })

    // save product in the database
    AddProduct
        .save(AddProduct)
        .then(data => {
            //res.send(data)
            res.redirect('/add-product');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all products/ retrive and return a single product
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Product.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found product with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving product with id " + id})
            })

    }else{
        Product.find()
            .then(AddProduct => {
                res.send(AddProduct)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving product information" })
            })
    }

    
}

// Update a new idetified product by product id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update product with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update product information"})
        })
}

// Delete a product with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Product.findByIdAndDelete(id)
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