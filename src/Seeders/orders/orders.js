const ORDERS = [
  {
    date: new Date(),
    time: "12:30:00", // Hora en formato HH:mm:ss
    paymentMethod: "EFECTIVO",
    subTotal: "150.00", // Subtotal en formato de cadena, asegúrate de que coincida con tu modelo de datos
    address: "Calle Principal 123",
    floor: "2", // Opcional, si no aplica para tu caso puedes omitirlo
    department: "A", // Opcional, si no aplica para tu caso puedes omitirlo
    indications: "Dejar en la puerta", // Opcional, indicaciones adicionales para la entrega
    products: [
      1, // ID del producto: cantidad (ejemplo: 2 unidades del producto con ID 1)
      2, // Otro producto
      // Puedes agregar más productos según sea necesario
    ],
    userId: 1,
  },
];
module.exports = { ORDERS };
