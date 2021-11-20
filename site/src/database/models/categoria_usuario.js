module.exports = (sequelize, dataTypes) => {
  let alias = 'Categoria_Usuario'; // esto debería estar en singular
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      nombre: {
          type: dataTypes.STRING(50),
          allowNull: false
      },
      
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Categoria_Usuario = sequelize.define(alias,cols,config);

  Categoria_Usuario.associate = function (models) {
      Categoria_Usuario.belongsTo(models.Usuario, { // models.Genre -> Genres es el valor de alias en genres.js
          as: "usuario",
          foreignKey: "id_categoria_usuario"
      })

     
  }

  return Categoria_Usuario
};

// 'use strict';

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Categoria_Usuarios extends Model {
  

//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
    
      
//   }
//     Categoria_Usuarios.associate = function (models) {
//       Categoria_Usuarios.hasMany(models.Usuarios, { 
//         as: "usuario",
//         foreignKey: 'id_categoria_usuario',
        
//       // define association here
//     })
//     }
  
  
//   Categoria_Usuarios.init({
//     nombre: DataTypes.STRING
//   }), {
//     sequelize,
//     modelName: 'Categoria_Usuario',

//   }
//   return Categoria_Usuarios;
// }


