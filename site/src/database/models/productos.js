'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    

      // define association here
      static associate(models) {
        /*Productos.associate = function (models) {
          Productos.belongsToMany(models.Productos, {
              as: "Productos",
              through: 'Productos_movie',
              foreignKey: 'Productos_id',
              otherKey: 'movie_id',
              timestamps: false
          })*/
        }
   }
  Productos.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    id_generos: DataTypes.INTEGER,
    id_marcas: DataTypes.INTEGER,
    id_temporadas: DataTypes.INTEGER,
    id_outlets: DataTypes.INTEGER,
    id_talles: DataTypes.INTEGER,
    id_colores: DataTypes.INTEGER,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};