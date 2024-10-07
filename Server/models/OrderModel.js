const mongoose = require('mongoose');

// Define Cart Schema
const orderSchema = new mongoose.Schema({
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
    totalPrice:{
        type:"Number",
        required:true
    },
    orderDate: {
        type: Date,
        default: Date.now, // Set default to current date
        required: true
    },
    deliveryDate: {
        type: Date,
        default: function() {
            // Set default to 5 days from orderDate
            return new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 days in milliseconds
        }
    },
    orderStatus: {
        type: String,
        default: "Pending"
    } 
});

// Export the Cart model
module.exports = mongoose.model('Order', orderSchema);
