const { Users, Roles, Orders, Products } = require("../../db");

const getUsers = async () => {
  try {
    let users = await Users.findAll({
      where: { disabled: false },
      include: [{ model: Roles }],
    });

    let allUsers = [];
    users.map((u) => {
      allUsers.push({
        id: u.id,
        name: u.name,
        email: u.email,
        cellPhone: u.cellPhone,
        image: u.image,
        location: u.location,
        direction: u.direction,
        disabled: u.disabled,
        role: u.role.name,
      });
    });

    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Lanza el error para que pueda ser manejado en un nivel superior si es necesario
  }
};

const getUserById = async (id) => {
  try {
    let u = await Users.findByPk(id, { include: [{ model: Roles }] });

    if (!u) {
      throw new Error("User not found");
    }

    const user = {
      id: u.id,
      name: u.name,
      email: u.email,
      cellPhone: u.cellPhone,
      image: u.image,
      location: u.location,
      direction: u.direction,
      disabled: u.disabled,
      role: u.role.name,
    };

    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error; // Lanza el error para que pueda ser manejado en un nivel superior si es necesario
  }
};
const getOrdersByUserId = async (userId) => {
  try {
    const orders = await Orders.findAll({
      where: { userId: userId },
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

    const formattedOrders = orders.map((order) => ({
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
      user: {
        id: order.user.id,
        name: order.user.name,
        email: order.user.email,
      },
      products: order.products.map((product) => ({
        productId: product.id,
        productName: product.model,
        productQuantity: product.ordersproducts.quantity,
      })),
    }));

    return formattedOrders;
  } catch (error) {
    throw new Error(
      `Error fetching orders for user with ID ${userId}: ${error.message}`
    );
  }
};
module.exports = { getUsers, getUserById, getOrdersByUserId };
