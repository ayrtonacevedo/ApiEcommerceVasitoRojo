const { Categories } = require("../../db");

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

module.exports = { getCategories };
