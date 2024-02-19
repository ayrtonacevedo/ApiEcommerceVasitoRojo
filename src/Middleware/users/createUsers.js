const { Users, Roles } = require("../../db");

const createUser = async (
  name,
  email,
  cellPhone,
  image,
  location,
  direction,
  role
) => {
  try {
    let existingUser = await Users.findOne({ where: { email: email } });
    if (existingUser) {
      return { flag: false, message: "The user already exists." };
    }

    if (email === "nahirarroyo99@gmail.com") {
      role = "Administrador";
    }

    let roleName = role || "Cliente"; // Si no se proporciona un rol, se usa "Cliente" como predeterminado
    let userRole = await Roles.findOne({ where: { name: roleName } });
    if (!userRole) {
      return { flag: false, message: "The specified role does not exist." };
    }

    let newUser = await Users.create({
      name: name,
      email: email,
      cellPhone: cellPhone,
      image: image,
      location: location,
      direction: direction,
      disabled: false,
    });

    await newUser.setRole(userRole);

    return { flag: true, message: "User created successfully." };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      flag: false,
      message: "An error occurred while creating the user.",
    };
  }
};

module.exports = { createUser };
