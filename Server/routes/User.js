const express = require("express");
const router = express.Router();
const userController=require("../controllers/UserController.js");
const { check } = require('express-validator');

// Route to login a user
router.route("/login")
   .post( [
    check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password should be at least 6 characters long').isLength({ min: 5 })
],userController.login)


// Route to create a user
router.route("/signup")
.post([
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password should be at least 6 characters long').isLength({ min: 5 })
], userController.signup);

router.route("/updateUser")
.put([
  check('address', 'Address is required').notEmpty(),
  check('contact', 'Please include a contact number').isLength({ min: 5 })

], userController.updateUser);
module.exports = router;
