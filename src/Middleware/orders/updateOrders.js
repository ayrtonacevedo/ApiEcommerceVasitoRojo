const { Orders } = require("../../db");

async function updateOrderStatus(orderId, paid, status, assignedCadet) {
  try {
    const order = await Orders.findByPk(orderId);
    if (!order) {
      throw new Error("Order not found");
    }

    if (paid !== undefined) {
      order.paid = paid;
    }

    if (status !== undefined) {
      order.status = status;
    }

    if (assignedCadet !== undefined) {
      order.assignedCadet = assignedCadet;
    }

    await order.save();

    return order;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw new Error("Error updating order status");
  }
}

module.exports = { updateOrderStatus };
