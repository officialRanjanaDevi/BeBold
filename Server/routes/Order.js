const express = require("express");
const router = express.Router();
const orderController=require("../controllers/OrderController.js");
const { check } = require('express-validator');

router.route("/")
.post(orderController.placeOrder);

// router.route("/")
// .get(orderController.Order);

router.route("/:userId")
.get(orderController.viewOrder);


// router.route("/")
// .put(orderController.updateStatus);


module.exports = router; 