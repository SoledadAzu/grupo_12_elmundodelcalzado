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
      /*Talles.hasMany(models.Talles, { 
        as: "Productos",
        foreignKey: 'Talles',
        
      
    })*/
      // define association here
    }
  };
  Talles.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Talles',
  });
  return Talles;
};