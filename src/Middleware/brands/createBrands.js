const { Brands } = require("../../db");

const createBrands = async (name) => {
  let exists = await Brands.findOne({
    where: {
      name: name,
    },
  });
  if (exists) {
    return exists;
  } else {
    return await Brands.create({
      name: name.toUpperCase(),
    });
  }
};
module.exports = { createBrands };
