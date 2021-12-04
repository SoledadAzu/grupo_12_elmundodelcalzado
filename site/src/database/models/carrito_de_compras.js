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
    }
  };
  Carrito_De_Compras.init({
    id_producto: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    id_orden: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrito_De_Compras',
  });
  return Carrito_De_Compras;
};