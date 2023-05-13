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
    actual_Price: {
      type: Number,
      required: true,
      min: 0
    },
    discount_Percentage: {
      type: Number,
      required: false,
      min: 0
    },
    selling_price:{
      type: Number,
      required: true,
      min: 0
    },
    categories: {
      type: String,
      enum: ['electronic device', 'electronic accessories', 'health and family']
    }
  });

productSchema.index({ name: 'text', description: 'text' });
module.exports = mongoose.model('product', productSchema);