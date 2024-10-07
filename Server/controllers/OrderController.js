const User = require("../models/UserModel.js");
const Product = require("../models/ProductModel.js");
const Cart = require("../models/CartModel.js");
const Order = require("../models/OrderModel.js");
const { validationResult } = require("express-validator");

module.exports.placeOrder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, items } = req.body; 

    try {
        let order = await Order.findOne({ userId });
        
        if (order) {
            order.items = [...order.items, ...items];
            order.totalPrice = calculateTotalPrice(order.items);
            await order.save();
        } else {
            order = new Order({
                userId: userId,
                items: items,
                totalPrice: calculateTotalPrice(items),
            });
            await order.save();
        }

        res.status(200).json({
            message: 'Order placed successfully',
            order
        });
        let cart = await Cart.findOneAndDelete({ userId });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" });
    }
};

const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
};

// Show user's order list by userId
module.exports.viewOrder = async (req, res) => {
    try {
        const { userId } = req.params;  
   
        let orderItems = await Order.find({ userId }); 
        if (!orderItems.length) {
            return res.status(404).json({ message: "No orders placed" }); 
        }
  
        return res.json(orderItems);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" }); 
    }
};

// Show orders with a specific status
module.exports.order = async (req, res) => {
    try {
        const { orderStatus } = "Pending";  
        
        let orderItems = await Order.find({ orderStatus }); 
        if (!orderItems.length) {
            return res.status(404).json({ message: "No orders with this status" }); 
        }
  
        return res.json(orderItems);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" }); 
    }
};

// Update order status by ID
module.exports.updateStatus = async (req, res) => {
    try {
        const { id, orderStatus } = req.body;  
        
        let orderItem = await Order.findByIdAndUpdate(id, { orderStatus }, { new: true }); 
        if (!orderItem) {
            return res.status(404).json({ message: "No order exists with this ID" }); 
        }
  
        return res.json(orderItem);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" }); 
    }
};
