'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Imagenes.belongsTo(models.Productos, {
        as: "Producto",
        foreignKey: "productoId",
      })
    }
  };
  Imagenes.init({
    nombre: DataTypes.STRING,
    productoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Imagenes',
  });
  return Imagenes;
};