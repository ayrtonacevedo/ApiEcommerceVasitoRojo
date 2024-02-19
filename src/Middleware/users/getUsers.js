const { Users, Roles } = require("../../db");

const getUsers = async () => {
  try {
    let users = await Users.findAll({
      where: { disabled: false },
      include: [{ model: Roles }],
    });

    let allUsers = [];
    users.map((u) => {
      allUsers.push({
        id: u.id,
        name: u.name,
        email: u.email,
        cellPhone: u.cellPhone,
        image: u.image,
        location: u.location,
        direction: u.direction,
        disabled: u.disabled,
        role: u.role.name,
      });
    });

    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Lanza el error para que pueda ser manejado en un nivel superior si es necesario
  }
};

const getUserById = async (id) => {
  try {
    let u = await Users.findByPk(id, { include: [{ model: Roles }] });

    if (!u) {
      throw new Error("User not found");
    }

    const user = {
      id: u.id,
      name: u.name,
      email: u.email,
      cellPhone: u.cellPhone,
      image: u.image,
      location: u.location,
      direction: u.direction,
      disabled: u.disabled,
      role: u.role.name,
    };

    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error; // Lanza el error para que pueda ser manejado en un nivel superior si es necesario
  }
};

module.exports = { getUsers, getUserById };
