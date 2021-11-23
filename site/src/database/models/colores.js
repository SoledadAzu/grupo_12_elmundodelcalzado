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
      Colores.hasMany(models.Productos, { 
<<<<<<< HEAD
        as: "Productos",
        foreignKey: 'id_colores',    
    })
=======
      
        as: "Productos",
        foreignKey: 'id_colores',
        
    })
      // define association here
>>>>>>> 42bae1b68a63c60269ee3ee0417244ab86453761
    }
  };
  Colores.init({
    nombre: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Colores',
  });
  return Colores;
};