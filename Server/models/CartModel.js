const mongoose = require('mongoose');

// Define Cart Schema
const cartSchema = new mongoose.Schema({
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
            quantity: {
                type: Number,
                required: true,
                min: 1,
                default: 1
            },
            price: {
                type: Number, 
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0 
    },
   
});

cartSchema.pre('save', function (next) {
    this.totalPrice = this.items.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
    next();
});

// Export the Cart model
module.exports = mongoose.model('Cart', cartSchema);
