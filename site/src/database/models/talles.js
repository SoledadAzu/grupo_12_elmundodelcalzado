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
      foreignKey: "id_producto",
    })
      // define association here
    }
  };
  Talles.init({
    nombre: DataTypes.STRING,
    id_producto: DataTypes.INTEGER
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Talles',
  });
  return Talles;
};