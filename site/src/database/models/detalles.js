'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Detalles.belongsTo(models.Productos, {
            as: "Producto",
            foreignKey: "productoId",
          })
    }
  };
  Detalles.init({
    nombre: DataTypes.STRING,
    productoId: DataTypes.INTEGER
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Detalles',
  });
  return Detalles;
};