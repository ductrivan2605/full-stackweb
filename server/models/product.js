const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
      type: String,
      required: true,
      maxlength: 20
    },
    product_description:{
      type: String
    },
    image_name: String,
    image_data: Buffer,
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