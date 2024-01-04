const { Products } = require("../../db");
const {
  createCategory,
} = require("../../Middleware/categories/createCategory");
const { createBrands } = require("../../Middleware/brands/createBrands");

const createProduct = async (
  model,
  volume,
  sales_format,
  unit_per_pack,
  price,
  store,
  variety,
  images,
  stock,
  category,
  brand
) => {
  let category = await createCategory(category);
  let brand = await createBrands(brand);

  let exits = await Products.findOne({
    where: {
      model: model,
      volume: parseFloat(volume),
      sales_format: sales_format,
      unit_per_pack: parseInt(unit_per_pack),
      price: parseFloat(price),
      store: store,
      variety: variety,
      images: images,
      stock: parseInt(stock),
    },
  });
  if (exits) {
    console.log(model + " " + brand + " ya existe!");
    return { flag: false, message: "Existing product!" };
  }

  let product = await Products.create({
    model: model,
    volume: parseFloat(volume),
    sales_format: sales_format,
    unit_per_pack: parseInt(unit_per_pack),
    price: parseFloat(price),
    store: store,
    variety: variety,
    images: images,
    stock: parseInt(stock),
  });
  await product.setCategories(category);
  await product.setBrands(brand);
  product.save();
  return { flag: true, message: " Product created!" };
};
module.exports = { createProduct };
