'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Temporadas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Temporadas.hasMany(models.Productos, { 
        as: "Productos",
        foreignKey: 'id_temporadas',    
    })
  }
  };
  Temporadas.init({
    nombre: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Temporadas',
  });
  return Temporadas;
};