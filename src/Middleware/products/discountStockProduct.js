const { Products } = require("../../db");

const modifyProductStock = async (id, discount, amount) => {
  try {
    let product = await Products.findByPk(id);

    if (!product) {
      throw new Error("Product not found");
    }

    let count = product.stock;

    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error("Amount must be a valid number");
    }

    if (discount) {
      count -= amount;
    } else {
      count += amount;
    }

    product.stock = count;
    await product.save();

    return true;
  } catch (error) {
    console.error("Error modifying product stock:", error.message);
    throw error; // Re-lanzamos el error para que el llamador pueda manejarlo
  }
};

module.exports = { modifyProductStock };