const { Users } = require("../../db");
const { USERS } = require("./users");
const { createUser } = require("../../Middleware/users/createUsers");

const seederUser = async () => {
  const response = await Users.findAll();
  if (response.length > 0) {
    console.log("The Users are already loaded");
  } else {
    const createUserPromises = USERS.map((e) => {
      return createUser(
        e.name,
        e.email,
        e.cellPhone,
        e.image,
        e.location,
        e.direction
      );
    });
    await Promise.all(createUserPromises);
    console.log("SeederUsers");
  }
};
module.exports = { seederUser };
