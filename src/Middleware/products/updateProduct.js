const { Products } = require("../../db");
const { createBrands } = require("../brands/createBrands");
const { createCategory } = require("../categories/createCategory");

const updateProduct = async (
  id,
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
  let product = await Products.findByPk(id);
  model ? (product.model = model) : model;
  volume ? (product.volume = parseFloat(volume)) : volume;
  sales_format ? (sales_format = sales_format) : sales_format;
  unit_per_pack ? (unit_per_pack = parseInt(unit_per_pack)) : unit_per_pack;
  price ? (product.price = parseFloat(price)) : price;
  store ? (product.store = store) : store;
  variety ? (product.variety = variety) : variety;
  images ? (product.images = images) : images;
  stock ? (product.stock = parseInt(stock)) : stock;
  if (category) {
    let cat = await createCategory(category);
    await product.setCategories(cat);
  }
  if (brand) {
    let bra = await createBrands(brand);
    await product.setBrands(bra);
  }
  product.save();
  return { flag: true, message: " The product was modified!" };
};
module.exports = { updateProduct };
