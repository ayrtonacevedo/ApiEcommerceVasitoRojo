const { Users } = require("../../db");
const { Roles } = require("../../db");
const { ValidationError } = require("sequelize");

const updateUser = async (
  id,
  name,
  email,
  cellPhone,
  image,
  location,
  direction,
  role,
  disabled
) => {
  try {
    // Obtener el usuario actual por su id
    let user = await Users.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }

    // Actualizar los campos solo si se proporcionan en la solicitud
    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.cellPhone = cellPhone ? cellPhone : user.cellPhone;
    user.image = image ? image : user.image;
    user.location = location ? location : user.location;
    user.direction = direction ? direction : user.direction;
    user.disabled = disabled !== undefined ? disabled : user.disabled;

    // Actualizar el rol solo si se proporciona en la solicitud
    if (role) {
      let rol = await Roles.findOne({ where: { name: role } });
      if (!rol) {
        throw new Error("Role not found");
      }
      await user.setRole(rol);
    }

    await user.save();

    return { success: true, message: "User updated" };
  } catch (error) {
    if (error instanceof ValidationError) {
      // Manejar errores de validación
      const validationErrors = error.errors.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return {
        success: false,
        message: "Validation error",
        errors: validationErrors,
      };
    } else {
      // Otros errores
      throw error;
    }
  }
};

module.exports = { updateUser };
