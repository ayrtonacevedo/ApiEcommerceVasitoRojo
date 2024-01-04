const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const categories = require("./categories/categoriesRoute");
const brands = require("./brands/brandsRoute");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/categories", categories);
router.use("/brands", brands);

module.exports = router;
