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
        
          Productos.belongsTo(models.Generos, {
            as: "Genero",
            foreignKey: "id_generos",
          })
          Productos.belongsTo(models.Marcas, {
            as: "Marca",
            foreignKey: "id_marcas",
          })
          Productos.belongsTo(models.Temporadas, {
            as: "Temporada",
            foreignKey: "id_temporadas",
          })
          Productos.belongsTo(models.Outlets, {
            as: "Outlet",
            foreignKey: "id_outlets",
          })
          
          Productos.belongsTo(models.Colores, {
            as: "Color",
            foreignKey: "id_colores",
          })
          Productos.hasMany(models.Detalles, { 
            as: "Detalle",
            foreignKey: 'id_productos',
        
        })
        Productos.hasMany(models.Talles, { 
          as: "Talle",
          foreignKey: 'id_producto',
          
        
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
    id_colores: DataTypes.INTEGER,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};