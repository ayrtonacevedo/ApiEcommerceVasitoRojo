const {Router} = require("express")
const {getProducts, getProductById}=require("../../Middleware/products/getProducts")
const {createProduct}=require("../../Middleware/products/createProduct")
const {updateProduct}=require("../../Middleware/products/updateProduct")
const {deleteProduct}=require("../../Middleware/products/deleteProduc")
const { modifyProductStock } = require("../../Middleware/products/discountStockProduct")

const router=Router()

//route to bring all the products
router.get("/", async(req,res,next)=>{
    try {
        let products=await getProducts()
        products.length > 0 ?
        res.send(products): res.send({message:"No products"})
    } catch (error) {
        next(error); 
        console.log(error)
    }
})

//route to get product by id
router.get("/:id", async(req,res,next)=>{
    let {id} =req.params
    try {
        let product=await getProductById(id)
        return res.send(product)
    } catch (error) { next(error); console.log(error)
        
    }
})

// path to create product
router.post("/", async(req,res,next)=>{
    let { model,volume,sales_format,unit_per_pack,price,store,variety,images,stock,category,brand}=req.body
    
    try {
         let productCreated= await createProduct(model,volume,sales_format,unit_per_pack,price,store,variety,images,stock,category,brand)
         productCreated.flag? res.send(productCreated.message)
         :res.send(productCreated.message)
    } catch (error) {next(error)
        
    }
})

// path to edit product
router.put("/:id", async (req, res, next) => {
    let { model, volume, sales_format, unit_per_pack, price, store, variety, images, stock, category, brand } = req.body;
    let { id } = req.params;
  
    try {
      let modifiedProduct = await updateProduct(id, model, volume, sales_format, unit_per_pack, price, store, variety, images, stock, category, brand);
  
      if (modifiedProduct.flag) {
        res.send({ success: true, message: "Product updated successfully." });
      } else {
        res.status(404).send({ success: false, message: "Product not found or couldn't be updated.", error: "Custom error message" });
      }
    } catch (error) {
      next(error);
    }
  });
  // path to edit the stick
  router.put("/stock/:id", async (req, res, next) => {
    let { discount, amount } = req.body;
    let { id } = req.params;
  
    try {
      let modifyStock = await modifyProductStock(id, discount, amount);
  
     
      modifyStock ? res.send("Stock was modified") : res.send("Error");
    } catch (error) {
      next(error);
    }
  });
  //path to delete product
  router.delete("/:id", async (req, res, next) => {
    let { id } = req.params;
  
    try {
      let removedProduct = await deleteProduct(id);
  
      if (removedProduct.flag) {
        res.send({ success: true, message: "Product deleted successfully." });
      } else {
        res.status(404).send({ success: false, message: "Product not found or couldn't be deleted." });
      }
    } catch (error) {
      next(error);
    }
  });
  
  

module.exports=router