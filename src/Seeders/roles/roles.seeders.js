const { Roles } = require("../../db");
const { ROLES } = require("./roles");

async function seederRoles() {
  const response = await Roles.findAll();
  if (response.length > 0) {
    console.log("Roles already created");
  } else {
    Roles.bulkCreate(ROLES);
    console.log("SeederRoles");
  }
}
module.exports = {
  seederRoles,
};
