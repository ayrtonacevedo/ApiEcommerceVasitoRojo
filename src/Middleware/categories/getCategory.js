const { Categories } = require("../../db");
const { Products } = require("../../db");
const { Brands } = require("../../db");

const getCategories = async () => {
  try {
    let categories = await Categories.findAll();

    // Mapear los resultados para crear un array de objetos con la información necesaria
    let allCategories = categories.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      image: c.image || "", // Si c.img es null o undefined, establecer vacío
    }));

    return allCategories;
  } catch (error) {
    // Manejo de errores si la consulta falla
    console.error("Error al obtener categorías:", error);
    throw new Error("Error al obtener categorías");
  }
};
// const getCategoryWithProductsAndBrands = async () => {
//   try {
//     // Consulta todas las categorías
//     const categories = await Categories.findAll();

//     // Mapea sobre cada categoría para obtener los productos y las marcas asociadas
//     const result = await Promise.all(
//       categories.map(async (category) => {
//         // Consulta todos los productos asociados a esta categoría
//         const products = await Products.findAll({
//           where: { categoryId: category.id },
//         });

//         // Extrae las marcas únicas de los productos encontrados
//         const brandIds = [
//           ...new Set(products.map((product) => product.brandId)),
//         ];
//         const brands = await Brands.findAll({ where: { id: brandIds } });
//         const brandNames = brands.map((brand) => brand.name);
//         return {
//           category: category.name,
//           brands: brandNames,
//         };
//       })
//     );

//     return result;
//   } catch (error) {
//     console.error("Error fetching categories with products and brands:", error);
//     throw new Error("Error fetching categories with products and brands");
//   }
// };
const getCategoryWithProductsAndBrands = async () => {
  try {
    // Consulta todas las categorías junto con los productos y marcas asociadas
    // en una sola consulta para reducir el número de consultas a la base de datos
    const categoriesWithProductsAndBrands = await Categories.findAll({
      include: [
        {
          model: Products,
          include: [
            {
              model: Brands,
            },
          ],
        },
      ],
    });

    // Mapea sobre cada categoría para obtener los productos y las marcas asociadas
    const result = categoriesWithProductsAndBrands.map((category) => {
      // Extrae las marcas únicas de los productos encontrados
      const brandNames = [
        ...new Set(category.products.map((product) => product.brand.name)),
      ];
      return {
        category: category.name,
        brands: brandNames,
      };
    });

    return result;
  } catch (error) {
    console.error("Error fetching categories with products and brands:", error);
    throw new Error("Error fetching categories with products and brands");
  }
};

module.exports = { getCategories, getCategoryWithProductsAndBrands };
