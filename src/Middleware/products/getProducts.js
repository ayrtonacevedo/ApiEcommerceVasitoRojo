const { Products, Categories, Brands } = require("../../db");

const getProducts = async () =>
 {
  let products = await Products.findAll({include: [{ model: Categories }, { model: Brands }]})

  let allProducts = [];

  products?.map((p) => {
    allProducts.push({
      id: p.id,
      model: p.model,
      volume: p.volume,
      sales_format: p.sales_format,
      unit_per_pack: p.unit_per_pack,
      price: p.price,
      store: p.store,
      variety: p.variety,
      images: p.images,
      stock: p.stock,
      category: p.category.name,
      brand: p.brand.name,
    });
  });
  return allProducts;
};

// Product by ID

const getProductById = async (id) => {
  let p = await Products.findByPk(id, {
    include: [{ model: Categories }, { model: Brands }],
  });

  const product = {
    id: p.id,
    model: p.model,
    volume: p.volume,
    sales_format: p.sales_format,
    unit_per_pack: p.unit_per_pack,
    price: p.price,
    store: p.store,
    variety: p.variety,
    images: p.images,
    stock: p.stock,
    category: p.category.name,
    brand: p.brand.name,
  };
  return product;
};

module.exports={getProducts, getProductById};
