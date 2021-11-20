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
          foreignKey: "id_categoria_usuario",
      })
  
    };
  }; 
      // define association here
  
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_categoria_usuario: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;

}
