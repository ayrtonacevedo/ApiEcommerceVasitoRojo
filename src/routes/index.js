const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categories = require("./categories/categoriesRoute");
const brands = require("./brands/brandsRoute");
const products=require("./products/productsRoute")

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/categories", categories);
router.use("/brands", brands);
router.use("/products", products)

module.exports = router;
