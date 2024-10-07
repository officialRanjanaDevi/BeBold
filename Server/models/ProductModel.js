const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of strings to store image URLs or paths
    // required: true,
    // validate: [arrayLimit, 'You must provide exactly 3 images'],
  },
  skintype: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  }
});

// Custom validator to ensure exactly 3 images are stored
function arrayLimit(val) {
  return val.length === 3;
}

module.exports = mongoose.model('product', ProductSchema);
