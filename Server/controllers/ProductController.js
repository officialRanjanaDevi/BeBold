const Product = require("../models/ProductModel.js");
const { validationResult } = require("express-validator");

// add new Product
module.exports.addNewProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { name,category,skintype,price,discount,description} = req.body;
  
    try {
      // Check for duplicate product
      let productData = await Product.findOne({ name });
      if (productData) {
        return res
          .status(400)
          .json({ errors: "Already have a product with same name" });
      }
  
    // Create a new product
      await Product.create({
        name,
        category,
        skintype,
        price,
        discount,
        description
      
      });
  
      return res.status(200).json({ success: true ,message:"product added successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
};

// update product 
module.exports.updateProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { productId, name, category, skintype, price, discount, description } = req.body;

  try {
    // Update product fields
    let updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, category, skintype, price, discount, description }, 
      { new: true, runValidators: true } 
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};



// delete product
module.exports.deleteProduct=async (req,res)=>{
  const { productId} = req.body;
  
  try {
    const deletedItem = await Product.findOneAndDelete({ _id: productId });
if (deletedItem) {
    console.log("product deleted:", deletedItem);
} else {
    console.log("No product found with that ID.");
}

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// show particular product to user
module.exports.show = async (req, res) => {
  try {
    const { id } = req.params;  
    let productItem = await Product.findById(id); 
    if (!productItem) {
      return res.status(404).json({ message: "Product not found" }); 
    }

    return res.json(productItem);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server issue" }); 
  }
};

// show product list to user according to category
module.exports.productList = async (req, res) => {
  
    try {
        const { category } = req.params;  
      let data = await Product.find({category});
      return res.send(data);
    } catch (e) {
      console.log(e);
      return  res.status(500).json({ message: "Server issue" }); 
    }
};
  