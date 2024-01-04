const { Router } = require("express");
const { getCategories } = require("../../Middleware/categories/getCategory");
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

module.exports = router;
