const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20
    },
    phone_number:{
      type: Number
    },
    product_price:{
      type: Number,
      required: true,
      min: 0
    },
    product_stock: {
      type: Number,
      require: true,
      min: 20
    },
    category: {
      type: String,
      enum: ['Phones', 'Watches', 'Toys']
    }
  });
const Products = mongoose.model('Products', productSchema);

module.exports = Products
