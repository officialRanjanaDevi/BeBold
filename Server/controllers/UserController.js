const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const jwtSecret = "WelcomeToBikeRentalServiceWebsit";

// Signup Function
module.exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password} = req.body;

  try {
    // Check for duplicate user
    let userData = await User.findOne({ email });
    if (userData) {
      return res.status(400).json({errors: "Already have an account on this email" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(password, salt);

    // Create a new user
    await User.create({
      name,
      email,
      password: secPassword,
      type:"user"
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Login Function
module.exports.login = async (req, res) => {
  
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { email, password } = req.body;

  try {
    // Find user by email
    
    let userData = await User.findOne({ email });
    
    if (!userData) {
      return res.status(400).json({ errors: "Invalid credentials" });
    }
    
    // Compare password
    const passCompare = await bcrypt.compare(password, userData.password);
    if (!passCompare) {
      return res.status(400).json({ errors: "Incorrect password" });
    }
    
    // Generate JWT token
    const data = {
      user: {
        id: userData.id,
     },
    };
    
    const authToken = jwt.sign(data, jwtSecret, { expiresIn: "1h" });
    
    return res.status(200).json({ success: true, authToken,userData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

//update delivery details
module.exports.updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, address, contact} = req.body;

  try {
    let userData = await User.findByIdAndUpdate( userId , { address, contact }, 
      { new: true, runValidators: true } );
    
      return res.status(200).json({
        success: true,
        message: "User updated successfully",
        
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
