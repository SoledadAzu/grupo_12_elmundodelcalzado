module.exports = (sequelize, dataTypes) => {
  let alias= 'Usuario'; // esto debería estar en singular
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
      apellido: {
          type: dataTypes.STRING(50),
          allowNull: false
      },
      email: {
          type: dataTypes.STRING(50),
          allowNull: false
      },
      password: {
          type: dataTypes.STRING(100),
          allowNull: false
      },
      imagen:{
      type: dataTypes.STRING(100),
      allowNull: false
      },

      id_categoria_usuario:{
      type: dataTypes.INTEGER,
      }
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Usuarios = sequelize.define(alias,cols,config);

  Usuarios.associate = function (models) {
      Usuarios.belongsTo(models.Categoria_Usuario, { 
          as: "categoria_usuario",
          foreignKey: "id_categoria_usuario"
      })

      
  }

  return Usuarios
};

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Usuarios extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//   }
// },


//     Usuarios.associate = function (models) {
      
//         Usuarios.belongsTo(models.Categoria_Usuarios, {
//             as: "categoria_usuario",
//             foreignKey: "id_categoria_usuario",
//         })
//       }

       
//       // define association here
  
//   Usuarios.init({
//     nombre: DataTypes.STRING,
//     apellido: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     id_categoria_usuario: DataTypes.INTEGER,
//     imagen: DataTypes.STRING
//   }, {
//     sequelize,
//     ModelName: 'Usuarios',
//   });
//   return Usuarios;
