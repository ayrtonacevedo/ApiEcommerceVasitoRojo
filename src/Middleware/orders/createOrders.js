// const { Orders, OrderProduct, Users } = require("../../db");

// const createOrder = async (
//   userId,
//   date,
//   time,
//   paymentMethod,
//   subTotal,
//   address,
//   floor,
//   department,
//   indications,
//   products
// ) => {
//   try {
//     const user = await Users.findOne({ where: { id: userId } });
//     const newOrder = await Orders.create({
//       date: date || new Date(),
//       time: time || "00:00:00",
//       paymentMethod: paymentMethod,
//       subTotal: subTotal || "0", // Asegúrate de que el valor predeterminado sea adecuado para tu caso
//       paid: "NO", // Valor predeterminado establecido en NO
//       status: "PENDIENTE", // Valor predeterminado establecido en PENDIENTE
//       address: address,
//       floor: floor || "-",
//       department: department || "-",
//       indications: indications || "-",
//       assignedCadet: "Sin asignar", // Valor predeterminado
//     });
//     // asocio el usuario que hizo el pedido
//     await newOrder.setUser(user);
//     // Asociar los productos con la orden, junto con sus cantidades
//     await Promise.all(
//       Object.entries(products).map(async ([productId, quantity]) => {
//         await OrderProduct.create({
//           OrderId: newOrder.id,
//           ProductId: productId,
//           quantity: quantity,
//         });
//       })
//     );
//     return newOrder;
//   } catch (error) {
//     console.error("Error creating order:", error);
//     throw new Error("Error creating oder");
//   }
// };
// module.exports = { createOrder };

const { Orders, OrderProduct, Users, Products } = require("../../db");

async function createOrder(
  date,
  time,
  paymentMethod,
  subTotal,
  address,
  floor,
  department,
  indications,
  productsId,
  userId
) {
  try {
    const user = await Users.findOne({ where: { id: userId } });
    const order = await Orders.create({
      date: date || new Date(),
      time: time || "00:00:00",
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
    const products = await Products.findAll({ where: { id: productsId } });
    await order.addProducts(products);
    await order.setUser(user);
    console.log(user);
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Error creating oder");
  }
}
module.exports = { createOrder };
