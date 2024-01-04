const { Brands } = require("../../db");
const { BRANDS } = require("./brands");

async function seederBrands() {
  const response = await Brands.findAll();

  if (response.length > 0) {
    console.log("Brands already loaded");
  } else {
    Brands.bulkCreate(BRANDS);
    console.log("SeederBrands");
  }
}
module.exports = {
  seederBrands,
};
