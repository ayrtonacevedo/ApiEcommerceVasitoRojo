const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "orders",
    {
      date: {
        type: DataTypes.DATEONLY,
        allownull: false,
        defaultValue: new Date(),
      },
      time: {
        type: DataTypes.TIME,
        allownull: false,
        defaultValue: "00:00:00",
      },
      paymentMethod: {
        type: DataTypes.ENUM,
        values: ["EFECTIVO", "TRANSFERENCIA BANCARIA", "DEBITO"],
        allownull: false,
      },
      subTotal: {
        type: DataTypes.STRING,
      },
      paid: {
        type: DataTypes.ENUM,
        values: ["SI", "NO"],
        allownull: false,
        defaultValue: "NO",
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "PENDIENTE",
          "EN PROCESO",
          "EN CAMINO",
          "ENTREGADO",
          "CANCELADO",
        ],
        allownull: false,
        defaultValue: "PENDIENTE",
      },
      address: {
        type: DataTypes.STRING,
        allownull: false,
      },
      floor: {
        type: DataTypes.STRING,
        defaultValue: "-",
      },
      department: {
        type: DataTypes.STRING,
        defaultValue: "-",
      },
      indications: {
        type: DataTypes.STRING,
        defaultValue: "-",
      },
      assignedCadet: {
        type: DataTypes.STRING,
        defaultValue: "Sin asignar",
      },
    },
    {
      timestamps: false,
    }
  );
};
