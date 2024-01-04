const { Router } = require("express");
const { getBrands } = require("../../Middleware/brands/getBrands");
const { createBrands } = require("../../Middleware/brands/createBrands");
const router = Router();

// route get to bring all brands
router.get("/", async (req, res, next) => {
  try {
    let brands = await getBrands();
    res.send(brands);
  } catch (error) {
    next(error);
  }
});

// route put to create brands
router.post("/", async (req, res, next) => {
  let { name } = req.body;
  try {
    let newBrand = await createBrands(name);
    newBrand
      ? res.send("Brand " + name + " successfully added")
      : res.send("Problem adding brand");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
