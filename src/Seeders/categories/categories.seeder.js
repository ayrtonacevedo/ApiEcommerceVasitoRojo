const { Categories } = require("../../db");
const { CATEGORIES } = require("./categories");

async function seederCategories() {
  const response = await Categories.findAll();

  if (response.length > 0) {
    console.log("Categories already loaded");
  } else {
    Categories.bulkCreate(CATEGORIES);
    console.log("SeederCategories");
  }
}
module.exports = {
  seederCategories,
};
