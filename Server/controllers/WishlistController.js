const User = require("../models/UserModel.js");
const Product = require("../models/ProductModel.js");
const Wishlist = require("../models/WishlistModel.js");
const { validationResult } = require("express-validator");

// Add to wishlist
module.exports.addToWishlist = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, productId } = req.body; 

    try {
        // Checking if there is any such  product or not
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // if new user then add wishlist otherwise just updating the items section
        let wishlist = await Wishlist.findOne({ userId });
    
        if (!wishlist) {
          
            wishlist = new Wishlist({
                userId: userId,
                items: [],
                totalPrice: 0
            });
        }

        //  if the product is already in the wishlist increase quantity otherwise add new 
        const productIndex = wishlist.items.findIndex(item => item.product.toString() === productId.toString());

        if (productIndex > -1) {
            wishlist.items.splice(productIndex, 1);
        } else {
            wishlist.items.push({
                product: productId,
          });
        }

        await wishlist.save();
     
        res.status(200).json({
            message: 'Product updated in wishlist successfully'   });

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server issue" });
    }
};

//Show wishlist
module.exports.showWishlist = async (req, res) => {
    try {
      const { userId } = req.params;
     
     let wishlistItems = await Wishlist.find( {userId} );
     
      if (!wishlistItems || wishlistItems.length === 0) {
        return res.status(404).json({ message: "Empty list" });
      }
  
      // Respond with the wishlist items
      return res.json(wishlistItems);
    } catch (error) {
      // Log the error and respond with a 500 error 
      console.error(error);
      return res.status(500).json({ message: "Server issue" });
    }
  };
  