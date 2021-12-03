'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outlets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Outlets.hasMany(models.Productos, { 
        as: "Productos",
        foreignKey: 'id_Outlets', 
    })
    }
  };
  Outlets.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Outlets',
  });
  return Outlets;
};