const { Categories } = require("../../db");

const createCategory = async (category, description, image) => {
  let exists = await Categories.findOne({
    where: {
      name: category,
    },
  });
  if (exists) {
    return exists;
  } else {
    return await Categories.create({
      name: category.toUpperCase(),
      description: description || null,
      image: image || null,
    });
  }
};
module.exports = { createCategory };
