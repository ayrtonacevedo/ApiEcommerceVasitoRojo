const { Categories } = require("../../db");

const createCategory = async (category, description, image) => {
  try {
    // Normaliza el nombre de la categoría antes de buscarla en la base de datos
    const categoryName = category.toUpperCase();

    // Busca si la categoría ya existe
    let existingCategory = await Categories.findOne({
      where: {
        name: categoryName,
      },
    });

    // Si la categoría ya existe, devuelve la categoría existente
    if (existingCategory) {
      //console.log(`Category '${category}' already exists`);
      return existingCategory;
    }

    // Si la categoría no existe, crea una nueva categoría
    let newCategory = await Categories.create({
      name: categoryName,
      description: description || null,
      image: image || null,
    });

    //console.log(`Category '${category}' created successfully`);
    return newCategory;
  } catch (error) {
    // Maneja cualquier error aquí
    console.error("Error creating category:", error);
    throw new Error("Error creating category");
  }
};

module.exports = { createCategory };
