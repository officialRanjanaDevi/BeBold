const express = require("express");
const router = express.Router();
const cartController=require("../controllers/CartController.js");
const { check } = require('express-validator');

router.route("/")
.post(cartController.addToCart);

router.route("/:userId")
.get(cartController.showCart);

router.route("/")
.delete(cartController.deleteFromCart);


router.route("/")
.put(cartController.updateCart);


module.exports = router; 