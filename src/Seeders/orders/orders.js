const ORDERS = [
  {
    // date: new Date(),
    // time: "12:30:00", // Hora en formato HH:mm:ss
    paymentMethod: "EFECTIVO",
    subTotal: "150.00", // Subtotal en formato de cadena, asegúrate de que coincida con tu modelo de datos
    address: "Calle Principal 123",
    floor: "2", // Opcional, si no aplica para tu caso puedes omitirlo
    department: "A", // Opcional, si no aplica para tu caso puedes omitirlo
    indications: "Dejar en la puerta", // Opcional, indicaciones adicionales para la entrega
    products: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 4 },
    ],
    userId: 1,
  },
];
module.exports = { ORDERS };
