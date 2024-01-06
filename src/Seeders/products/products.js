// {

//     model: "Modelo del producto",
//     volume: 750.00, // Volumen en mililitros (ml)
//     sales_format: "Formato de venta", // Por ejemplo: Botella, Lata, etc.
//     unit_per_pack: 1, // Unidades por paquete
//     price: 25.99, // Precio en la moneda correspondiente
//     store: "Nombre de la tienda",
//     variety: "Variedad del producto", // Por ejemplo: Cabernet Sauvignon, Single Malt, etc.
//     images: [
//       "URL_imagen_1",
//       "URL_imagen_2",
//       // Puedes agregar más URLs si es necesario
//     ],
//     stock: 100 // Cantidad en stock

// },

const PRODUCTS = [
  {
    model: "",
    volume: "750.0 ml", // Volumen en mililitros (ml)
    sales_format: "Unidad", // Por ejemplo: Botella, Lata, etc.
    unit_per_pack: 1, // Unidades por paquete
    price: 13.144, // Precio en la moneda correspondiente
    store: "La Rural", // Bodega
    variety: "Tinto", // Por ejemplo: Cabernet Sauvignon, Single Malt, etc.
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_826358-MLA49900398110_052022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_911925-MLU72644552295_112023-O.webp",
      // Puedes agregar más URLs si es necesario
    ],
    stock: 100, // Cantidad en stock
    category: "Vinos",
    brand: "Rutini",
  },
];
module.exports = { PRODUCTS };
