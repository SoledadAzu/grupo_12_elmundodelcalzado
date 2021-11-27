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
<<<<<<< HEAD
      Talles.hasMany(models.Productos, { 
        as: "Productos",
        foreignKey: 'id_talles',    
=======
     
    Talles.belongsTo(models.Productos, {
      as: "Producto",
      foreignKey: "id_producto",
>>>>>>> 1dba871f426f24ecf0b8412bb117f740dc9c4fb2
    })
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