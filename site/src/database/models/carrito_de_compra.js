'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito_De_Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Carrito_De_Compra.init({
    id_producto: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    id_orden: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrito_De_Compra',
  });
  return Carrito_De_Compra;
};