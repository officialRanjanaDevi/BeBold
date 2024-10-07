const mongoose = require('mongoose');
const mongodbURL ="mongodb+srv://BeBold:BeBold@cluster0.xgvhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
mongoDB();

