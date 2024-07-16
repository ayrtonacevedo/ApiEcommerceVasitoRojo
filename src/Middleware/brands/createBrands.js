const { Brands } = require("../../db");

const createBrands = async (name) => {
  try {
    const brandName = name.toUpperCase();
    let existingBrand = await Brands.findOne({
      where: {
        name: brandName,
      },
    });
    if (existingBrand) {
      return existingBrand;
    } else {
      const newBrand = await Brands.create({
        name: brandName,
      });
      return newBrand;
    }
  } catch (error) {
    console.error("Error al crear o encontrar la marca:", error);
    // En caso de error, puedes decidir qué retornar o lanzar el error
    // Por ejemplo, podrías lanzar el error para que sea manejado por el código que llama a createBrands
    throw error;
  }
};

module.exports = { createBrands };
