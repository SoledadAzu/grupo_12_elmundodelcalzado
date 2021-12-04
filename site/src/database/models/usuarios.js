'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models){
      
      Usuarios.belongsTo(models.Categoria_Usuarios, {
          as: "Categoria_Usuario",
          foreignKey: "categoriaId",
      })
      Usuarios.hasMany(models.Carrito_De_Compras, {
        as: "Carrito",
        foreignKey: "usuarioId",
      })
      Usuarios.hasMany(models.Ordens, {
        as: "Orden",
        foreignKey: "usuarioId",
      })
  
    };
  }; 
      // define association here
  
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;

}
