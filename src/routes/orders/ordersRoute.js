const { Router } = require("express");
const { createOrder } = require("../../Middleware/orders/createOrders");
const {
  getAllOrders,
  getOrderById,
} = require("../../Middleware/orders/getOrders");
const { updateOrderStatus } = require("../../Middleware/orders/updateOrders");

const router = Router();

//route for all orders
router.get("/", async (req, res, next) => {
  try {
    let orders = await getAllOrders();
    orders.length > 0 ? res.send(orders) : res.send({ message: "No Orders" });
  } catch (error) {
    next(error);
    console.log(error);
  }
});

//route to order by id
router.get("/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
    let orderById = await getOrderById(id);
    return res.send(orderById);
  } catch (error) {
    next(error);
    console.log(error);
  }
});
//route to create order
router.post("/", async (req, res, next) => {
  try {
    const {
      date,
      time,
      paymentMethod,
      subTotal,
      address,
      floor,
      department,
      indications,
      productsIdAndQuantities,
      userId,
    } = req.body;

    await createOrder(
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
    );
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res, next) => {
  const orderId = req.params.id;
  const { paid, status, assignedCadet } = req.body;

  try {
    const updatedOrder = await updateOrderStatus(
      orderId,
      paid,
      status,
      assignedCadet
    );
    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
