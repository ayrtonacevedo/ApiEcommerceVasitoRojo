const { Brands } = require("../../db");

const getBrands = async () => {
  try {
    let brands = await Brands.findAll();
    // Mapear los resultados para crear un array de objetos con la información necesaria
    let allBrands = brands.map((b) => ({
      id: b.id,
      name: b.name,
    }));
    return allBrands;
  } catch (error) {
    // Manejo de errores si la consulta falla
    console.error("Error al obtener brands:", error);
    throw new Error("Error al obtener brands");
  }
};
module.exports = { getBrands };
