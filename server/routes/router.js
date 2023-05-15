const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add product
 *  @method GET /add-product
 */
route.get('/add-product', services.add_product)

/**
 *  @description for update product
 *  @method GET /update-product
 */
route.get('/update-product', services.update_product)


// API
route.post('/api/product', controller.create);
route.get('/api/product', controller.find);
route.put('/api/product/:id', controller.update);
route.delete('/api/product/:id', controller.delete);


module.exports = route