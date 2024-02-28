const { Orders, Users, Products } = require("../../db");

async function createOrder(
  date,
  time,
  paymentMethod,
  subTotal,
  address,
  floor,
  department,
  indications,
  productsIdAndQuantities,
  userId
) {
  const newDate = new Date();
  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;
  try {
    const user = await Users.findOne({ where: { id: userId } });

    const order = await Orders.create({
      date: newDate,
      time: currentTime,
      paymentMethod: paymentMethod,
      subTotal: subTotal || "0", // Asegúrate de que el valor predeterminado sea adecuado para tu caso
      paid: "NO", // Valor predeterminado establecido en NO
      status: "PENDIENTE", // Valor predeterminado establecido en PENDIENTE
      address: address,
      floor: floor || "-",
      department: department || "-",
      indications: indications || "-",
      assignedCadet: "Sin asignar", // Valor predeterminado
    });
    // Obtener los products y asociarlos con la orden junto con sus cantidades
    for (const { productId, quantity } of productsIdAndQuantities) {
      const product = await Products.findByPk(productId);
      if (product) {
        // asociar el producto con la order
        await order.addProduct(product, {
          through: { quantity: quantity },
        });
      }
    }

    await order.setUser(user);
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Error creating oder");
  }
}
module.exports = { createOrder };
