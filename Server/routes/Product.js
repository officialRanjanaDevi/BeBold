const router = require("express").Router();
const productController=require("../controllers/ProductController.js");

router.post("/",productController.addNewProduct);
router.delete("/",productController.deleteProduct);
router.put("/",productController.updateProduct);
router.get("/show/:id",productController.show);
router.get("/:category",productController.productList)


module.exports = router;
