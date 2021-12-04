'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Colores.belongsTo(models.Productos, { 
        as: "Producto",
        foreignKey: 'productoId',    
    })
    }
  };
  Colores.init({
    nombre: DataTypes.STRING,
    productoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Colores',
  });
  return Colores;
};