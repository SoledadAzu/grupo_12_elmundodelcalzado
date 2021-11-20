'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagenes_Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Imagenes_Productos.init({
    nombre: DataTypes.STRING,
    id_producto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Imagenes_Productos',
  });
  return Imagenes_Productos;
};