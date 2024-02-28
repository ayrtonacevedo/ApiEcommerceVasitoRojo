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
    category: "VINOS",
    brand: "Rutini",
  },
  {
    model: "",
    volume: "500.0 ml", // Volumen en mililitros (ml)
    sales_format: "Unidad", // Por ejemplo: Botella, Lata, etc.
    unit_per_pack: 1, // Unidades por paquete
    price: 15.0, // Precio en la moneda correspondiente
    store: "La Ruta", // Bodega
    variety: "Tinto", // Por ejemplo: Cabernet Sauvignon, Single Malt, etc.
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_826358-MLA49900398110_052022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_911925-MLU72644552295_112023-O.webp",
      // Puedes agregar más URLs si es necesario
    ],
    stock: 100, // Cantidad en stock
    category: "VINOS",
    brand: "Carpano",
  },
  {
    model: "Apeach",
    volume: "750 ml", // Volumen en mililitros (ml)
    sales_format: "Unidad", // Por ejemplo: Botella, Lata, etc.
    unit_per_pack: 1, // Unidades por paquete
    price: 8.132, // Precio en la moneda correspondiente
    store: "", // Bodega
    variety: "Fruta Tropical", // Por ejemplo: Cabernet Sauvignon, Single Malt, etc.
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_826358-MLA49900398110_052022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_911925-MLU72644552295_112023-O.webp",
      // Puedes agregar más URLs si es necesario
    ],
    stock: 100, // Cantidad en stock
    category: "vodka",
    brand: "Absolut",
  },
];
module.exports = { PRODUCTS };
