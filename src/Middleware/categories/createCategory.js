const { Categories } = require("../../db");

// const createCategory = async (name, description, image) => {
//   let exists = await Categories.findOne({
//     where: {
//       name: name,
//     },
//   });
//   if (exists) {
//     return exists;
//   } else {
//     return await Categories.create({
//       name: name.toUpperCase(),
//       description: description || null,
//       image: image || null,
//     });
//   }
// };
const createCategory = async (name, description, image) => {
  let exists = await Categories.findOne({
    where: {
      name: name,
    },
  });
  if (exists) {
    return exists;
  } else {
    return await Categories.create({
      name: name.toUpperCase(),
      description: description || null,
      image: image || null,
    });
  }
};
module.exports = { createCategory };
