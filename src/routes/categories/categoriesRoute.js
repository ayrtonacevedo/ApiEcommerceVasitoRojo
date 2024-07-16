const { Router } = require("express");
const {
  getCategories,
  getCategoryWithProductsAndBrands,
} = require("../../Middleware/categories/getCategory");
const {
  createCategory,
} = require("../../Middleware/categories/createCategory");
const router = Router();

// route get to bring all categories
router.get("/", async (req, res, next) => {
  try {
    let categories = await getCategories();
    res.send(categories);
  } catch (error) {
    next(error);
  }
});
// route put to create category
router.post("/", async (req, res, next) => {
  let { name, description, image } = req.body;
  try {
    let newCategory = await createCategory(name, description, image);
    newCategory
      ? res.send("Category " + name + " successfully added")
      : res.send("Problem adding category");
  } catch (error) {
    next(error);
  }
});
// Ruta para obtener todas las categorías con sus productos y marcas asociadas
router.get("/brands", async (req, res) => {
  try {
    const categoriesWithProductsAndBrands =
      await getCategoryWithProductsAndBrands();
    res.send(categoriesWithProductsAndBrands);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
