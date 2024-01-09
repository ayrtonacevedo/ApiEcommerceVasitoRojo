const {Router} = require("express")
const {getProducts, getProductById}=require("../../Middleware/products/getProducts")
const {createProduct}=require("../../Middleware/products/createProduct")
const {updateProduct}=require("../../Middleware/products/updateProduct")
const {deleteProduct}=require("../../Middleware/products/deleteProduc")

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

//post route to create product
router.post("/", async(req,res,next)=>{
    let { model,volume,sales_format,unit_per_pack,price,store,variety,images,stock,category,brand}=req.body
    
    try {
         let productCreated= await createProduct(model,volume,sales_format,unit_per_pack,price,store,variety,images,stock,category,brand)
         productCreated.flag? res.send(productCreated.message)
         :res.send(productCreated.message)
    } catch (error) {next(error)
        
    }
})

router.put("/:id", async(req,res,next)=>{
    let { model,volume,sales_format,unit_per_pack,price,store,variety,images,stock,category,brand}=req.body
    let {id}=req.params
    try {
        let modifiedProduct= await updateProduct(id,model,volume,sales_format,unit_per_pack,price,store,variety,images,stock,category,brand)
        modifiedProduct.flag ? res.send(modifiedProduct.message)
        :res.send(modifiedProduct.message)
    } catch (error) { next(error)}
})

module.exports=router