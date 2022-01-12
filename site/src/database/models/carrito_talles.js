'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito_Talles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  };
  Carrito_Talles.init({
    carritoId: DataTypes.INTEGER,
    talleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrito_Talles',
  });
  return Carrito_Talles;
};