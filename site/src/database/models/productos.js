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
            foreignKey: "generoId",
          })
          Productos.belongsTo(models.Marcas, {
            as: "Marca",
            foreignKey: "marcaId",
          })
          Productos.belongsTo(models.Temporadas, {
            as: "Temporada",
            foreignKey: "temporadaId",
          })
          Productos.belongsTo(models.Outlets, {
            as: "Outlet",
            foreignKey: "outletId",
          })
          
          Productos.hasMany(models.Colores, {
            as: "Color",
            foreignKey: "productoId",
          })
          Productos.hasMany(models.Detalles, { 
            as: "Detalle",
            foreignKey: 'productoId',
        
        })
        Productos.hasMany(models.Talles, { 
          as: "Talle",
          foreignKey: 'productoId',
          
        
      })
      Productos.hasMany(models.Imagenes, {
        as: "Imagen",
        foreignKey: "productoId",
      })
   }
  
  };
  Productos.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    generoId: DataTypes.INTEGER,
    marcaId: DataTypes.INTEGER,
    temporadaId: DataTypes.INTEGER,
    outletId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};