const { Products, Categories } = require("../../db");
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
  let productCategory;
  let productBrand = await createBrands(brand);

  const existingCategory = await Categories.findOne({
    where: {
      name: category.toUpperCase(),
    },
  });
  if (existingCategory) {
    productCategory = existingCategory;
  } else {
    productCategory = await createCategory(category);
  }

  let exits = await Products.findOne({
    where: {
      model: model,
      volume: volume,
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
    volume: volume,
    sales_format: sales_format,
    unit_per_pack: parseInt(unit_per_pack),
    price: parseFloat(price),
    store: store || "-",
    variety: variety,
    images: images,
    stock: parseInt(stock),
  });
  await product.setCategory(productCategory);
  await product.setBrand(productBrand);

  // product.save();
  return { flag: true, message: " Product created!" };
};
module.exports = { createProduct };
