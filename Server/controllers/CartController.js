const User = require("../models/UserModel.js");
const Product = require("../models/ProductModel.js");
const Cart = require("../models/CartModel.js");
const { validationResult } = require("express-validator");

// Add to cart
module.exports.addToCart = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, quantity, productId } = req.body; 

    try {
        // Checking if there is any such  product or not
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // if new user then add cart otherwise just updating the items section
        let cart = await Cart.findOne({ userId });
    
        if (!cart) {
          
            cart = new Cart({
                userId: userId,
                items: [],
                totalPrice: 0
            });
        }

        //  if the product is already in the cart increase quantity otherwise add new 
        const productIndex = cart.items.findIndex(item => item.product.toString() === productId.toString());

        if (productIndex > -1) {
            cart.items[productIndex].quantity += quantity;
        } else {
            cart.items.push({
                product: productId,
                quantity: quantity,
                price: product.price 
            });
        }

       //updating the total price of cart
        cart.totalPrice = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        await cart.save();
     
        res.status(200).json({
            message: 'Product added to cart successfully'   });

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" });
    }
};

//Delete from cart
module.exports.deleteFromCart = async (req, res) => {
    const { userId,productId } = req.body; 

    try {
        // Checking if there is any such  product or not
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        
        let cart = await Cart.findOne({ userId });
    
        if (!cart) {
            return res.status(404).json({ message: "Cart is empty" });
        }

        //  if the product is in the cart remove it
        const productIndex = cart.items.findIndex(item => item.product.toString() === productId.toString());

        if (productIndex > -1) {
            
            cart.items.splice(productIndex, 1);
        } else {
            return res.status(404).json({ message: "Product is not in cart" });
        }

       //updating the total price of cart
        cart.totalPrice = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        await cart.save();
     
        res.status(200).json({
            message: 'Product deleted from cart successfully'   });

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" });
    }
};

// show user's cart
module.exports.showCart = async (req, res) => {
    try {
      const {userId }= req.params; 
      let cartItems = await Cart.find({userId}); 
      if (!cartItems) {
        return res.status(404).json({ message: "Empty Cart" }); 
      }
  
      return res.json(cartItems);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Server issue" }); 
    }
  };
  
  
// Update cart(basically for quantity of products )
module.exports.updateCart = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, quantity, productId } = req.body; 

    try {
        // Checking if there is any such  product or not
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // if new user then add cart otherwise just updating the items section
        let cart = await Cart.findOne({ userId });

        //  if the product is already in the cart increase quantity otherwise add new 
        const productIndex = cart.items.findIndex(item => item.product.toString() === productId.toString());

        
            cart.items[productIndex].quantity = quantity;
        
       //updating the total price of cart
        cart.totalPrice = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        await cart.save();
     
        res.status(200).json({
            message: 'Product updated to cart successfully'   });

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" });
    }
};