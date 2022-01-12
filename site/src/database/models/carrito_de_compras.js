'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito_De_Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrito_De_Compras.belongsTo(models.Productos, {
        as: "Producto",
        foreignKey: "productoId",
      })
      Carrito_De_Compras.belongsTo(models.Usuarios, {
        as: "Usuario",
        foreignKey: "usuarioId",
      })
      Carrito_De_Compras.belongsTo(models.Ordens, {
        as: "Orden",
        foreignKey: "ordenId",
      })
    }
  };
  Carrito_De_Compras.init({
    productoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    ordenId: DataTypes.INTEGER,
    cantidad : DataTypes.INTEGER,
    talles : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Carrito_De_Compras',
  });
  return Carrito_De_Compras;
};