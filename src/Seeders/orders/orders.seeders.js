const { Orders } = require("../../db");
const { ORDERS } = require("./orders");
const { createOrder } = require("../../Middleware/orders/createOrders");

const seederOrders = async () => {
  const response = await Orders.findAll();
  if (response.length > 0) {
    console.log("The Orders are already loaded");
  } else {
    const createOrderPromises = ORDERS.map((o) => {
      return createOrder(
        o.date,
        o.time,
        o.paymentMethod,
        o.subTotal,
        o.address,
        o.floor,
        o.department,
        o.indications,
        o.products,
        o.userId
      );
    });
    await Promise.all(createOrderPromises);
    console.log("SeederOrder");
  }
};
module.exports = { seederOrders };
