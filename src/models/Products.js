const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "products",
    {
      model: {
        type: DataTypes.STRING,
      },
      volume: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sales_format: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit_per_pack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      store: {
        type: DataTypes.STRING,
      },
      variety: {
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
