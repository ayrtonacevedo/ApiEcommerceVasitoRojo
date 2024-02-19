const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "roles",
    {
      name: { type: DataTypes.STRING, allownull: false, unique: true },
    },
    {
      timestamps: false,
    }
  );
};
