const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      maxlength: 20
    },
    description:{
      type: String
    },
    image: {
        type: String,
        required: true
    },
    actual_price: {
      type: Number,
      required: true,
      min: 0
    },
    discount: {
      type: Number,
      required: false,
      min: 0
    },
    sell_price:{
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      enum: ['Phones', 'Watches', 'Toys']
    }
  });
const Products = mongoose.model('Products', productSchema);
const product = new Products(req.body);

module.exports = Products