const express = require("express");
const router = express.Router();
const wishlistController=require("../controllers/WishlistController.js");
const { check } = require('express-validator');

router.route("/")
.post(wishlistController.addToWishlist);

router.route("/:userId")
.get(wishlistController.showWishlist);



module.exports = router;