const { PRODUCTS } = require("./products");
const { createProduct } = require("../../Middleware/products/createProduct");
const { Products } = require("../../db");

const seederProducts = async () => {
  const response = await Products.findAll();

  if (response.length > 0) {
    console.log("The products are already loaded");
  } else {
    const createProductPromises = PRODUCTS.map((e) => {
      return createProduct(
        e.model,
        e.volume,
        e.sales_format,
        e.unit_per_pack,
        e.price,
        e.store,
        e.variety,
        e.images,
        e.stock,
        e.category,
        e.brand
      );
    });
    await Promise.all(createProductPromises);
    console.log("SeederProducts");
  }
};
module.exports = { seederProducts };
