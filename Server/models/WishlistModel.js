const mongoose = require('mongoose');

// Define Cart Schema
const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // References the User who owns the cart
        ref: 'User',
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
          
          
        }
    ],
  
   
});



// Export the Cart model
module.exports = mongoose.model('Wishlist', wishlistSchema);
