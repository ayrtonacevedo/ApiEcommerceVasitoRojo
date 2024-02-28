const { Orders, Users, Products } = require("../../db");

//function for all orders
const getAllOrders = async () => {
  try {
    let allOrders = [];

    const orders = await Orders.findAll({
      include: [
        {
          model: Users,
          attributes: ["id", "name", "email"],
        },
        {
          model: Products,
          attributes: ["id", "model"],
          through: {
            attributes: ["quantity"],
          },
        },
      ],
    });

    orders?.forEach((o) => {
      const orderProducts = o.products.map((product) => ({
        productId: product.id,
        productName: product.model, // Utiliza el nombre del producto
        productQuantity: product.ordersproducts.quantity,
      }));

      allOrders.push({
        id: o.id,
        date: o.date,
        time: o.time,
        paymentMethod: o.paymentMethod,
        subTotal: o.subTotal,
        paid: o.paid,
        status: o.status,
        address: o.address,
        floor: o.floor,
        department: o.department,
        indications: o.indications,
        assignedCadet: o.assignedCadet,
        userId: o.userId,
        user: {
          id: o.user.id,
          name: o.user.name,
          email: o.user.email,
        },
        products: orderProducts,
      });
    });

    return allOrders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Error fetching orders");
  }
};

// function for order By ID
const getOrderById = async (id) => {
  try {
    let order = await Orders.findByPk(id, {
      include: [
        {
          model: Users,
          attributes: ["id", "name", "email"],
        },
        {
          model: Products,
          attributes: ["id", "model"],
          through: {
            attributes: ["quantity"],
          },
        },
      ],
    });
    if (!order) {
      throw new Error(`Order with id ${id} not found`);
    }
    let orderById = {};

    const orderProducts = order.products.map((product) => ({
      productId: product.id,
      productName: product.model, // Utiliza el nombre del producto
      productQuantity: product.ordersproducts.quantity,
    }));
    orderById = {
      id: order.id,
      date: order.date,
      time: order.time,
      paymentMethod: order.paymentMethod,
      subTotal: order.subTotal,
      paid: order.paid,
      status: order.status,
      address: order.address,
      floor: order.floor,
      department: order.department,
      indications: order.indications,
      assignedCadet: order.assignedCadet,
      userId: order.userId,
      user: {
        id: order.user.id,
        name: order.user.name,
        email: order.user.email,
      },
      products: orderProducts,
    };

    return orderById;
  } catch (error) {
    throw new Error(`Error fetching order with ID ${id}: ${error.message}`);
  }
};

module.exports = { getAllOrders, getOrderById };
