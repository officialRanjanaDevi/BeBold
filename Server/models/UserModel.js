const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
   email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    
  },
  address: {
    type: String,
  },
  contact: {
    type: Number,
  },
});
module.exports = mongoose.model("user", UserSchema);
