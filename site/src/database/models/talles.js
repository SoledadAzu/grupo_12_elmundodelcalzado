'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Talles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    Talles.belongsTo(models.Productos, {
      as: "Producto",
      foreignKey: "productoId",
    })
  }
  };
  Talles.init({
    nombre: DataTypes.STRING,
    productoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Talles',
  });
  return Talles;
};