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
    static associate(models) {
      Productos.belongsTo(models.Generos ,{
        as: "Generos",
        foreignKey: "id_generos",
    })
      Productos.belongsTo(models.Marcas ,{
        as: "Marcas",
        foreignKey: "id_marcas",
    })
      Productos.belongsTo(models.Temporadas ,{
        as: "Temporadas",
        foreignKey: "id_temporadas",
    })
      Productos.belongsTo(models.Outlets ,{
        as: "Outlets",
        foreignKey: "id_outlets",
    })
      Productos.belongsTo(models.Talles ,{
        as: "Talles",
        foreignKey: "id_talles",
    })
      Productos.belongsTo(models.Colores ,{
        as: "Colores",
        foreignKey: "id_Colores",
    })
  }
  };
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