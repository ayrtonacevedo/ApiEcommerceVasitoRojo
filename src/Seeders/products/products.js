const PRODUCTS = [
  {
    model: "Fernet Branca",
    volume: "750ml", // Volumen en mililitros (ml)
    sales_format: "Unidad", // Por ejemplo: Botella, Lata, etc.
    unit_per_pack: 1, // Unidades por paquete
    price: 8.999, // Precio en la moneda correspondiente
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_690122-MLA68961244202_042023-O.webp",
      "https://img.offers-cdn.net/assets/uploads/offers/ar/10841652/fernet-branca-botella-750-cc-normal.jpeg",
    ],
    stock: 100, // Cantidad en stock
    category: "APERITIVO",
    brand: "BRANCA",
  },
  {
    model: "Absolut Vodka",
    volume: "700ml",
    sales_format: "Unidad",
    unit_per_pack: 1,
    price: 21.938,
    // store: "La Rural",
    // variety: "Tinto",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_653243-MLA74218928615_012024-O.webp",
    ],
    stock: 100, // Cantidad en stock
    category: "VODKA",
    brand: "ABSOLUT",
  },
  {
    model: "Vino Cordero Con Piel de Lobo",
    volume: "750ml", // Volumen en mililitros (ml)
    sales_format: "Unidad", // Por ejemplo: Botella, Lata, etc.
    unit_per_pack: 1, // Unidades por paquete
    price: 4.779, // Precio en la moneda correspondiente
    store: "Mosquita Muerta", // Bodega
    variety: "Malbec", // Por ejemplo: Cabernet Sauvignon, Single Malt, etc.
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_624237-MLA74246713339_012024-O.webp",
    ],
    stock: 100, // Cantidad en stock
    category: "VINOS",
    brand: "Mosquita Muerta",
  },
  {
    model: "Combo Fernet + Coca",
    volume: "750 ml, 2.25l ", // Volumen en mililitros (ml)
    sales_format: "Combo", // Por ejemplo: Botella, Lata, etc.
    unit_per_pack: 1, // Unidades por paquete
    price: 14.299, // Precio en la moneda correspondiente
    store: "", // Bodega
    variety: "", // Por ejemplo: Cabernet Sauvignon, Single Malt, etc.
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_999323-MLA50527316739_062022-O.webp",
      // Puedes agregar más URLs si es necesario
    ],
    stock: 100, // Cantidad en stock
    category: "COMBO",
    brand: "BRANCA",
  },
];
module.exports = { PRODUCTS };
