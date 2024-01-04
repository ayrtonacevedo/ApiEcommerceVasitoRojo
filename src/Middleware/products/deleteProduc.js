const { Products } = require("../../db");

const deleteProduct = async (id) => {
  let product = await Products.findByPk(id);
  product.isDeleted = !product.isDeleted;
  product.save();
  return true;
};
module.exports = { deleteProduct };
