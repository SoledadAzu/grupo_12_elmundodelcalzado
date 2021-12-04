'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria_Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria_Usuarios.hasMany(models.Usuarios, { 
        as: "Usuario",
        foreignKey: 'categoriaId',    
    })
  }
}

  Categoria_Usuarios.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria_Usuarios',
  });
  return Categoria_Usuarios;
};
